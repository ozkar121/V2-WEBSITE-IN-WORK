// Build-time prefetch: dump active aircraft + photos to a JSON snapshot so
// Fleet.tsx can render the ItemList JSON-LD during SSG prerender (when
// useEffect / supabase client do not run).
import { writeFileSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "../.env");
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i), l.slice(i + 1).replace(/^"|"$/g, "")];
    }),
);

const URL = env.VITE_SUPABASE_URL;
const KEY = env.VITE_SUPABASE_PUBLISHABLE_KEY;

async function get(path) {
  const r = await fetch(`${URL}/rest/v1/${path}`, {
    headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
  });
  if (!r.ok) throw new Error(`${path}: ${r.status}`);
  return r.json();
}

const aircraft = await get(
  "aircraft?select=id,name,category,passengers,range_km,speed_kmh,range_nm&is_active=eq.true&order=sort_order.asc",
);
const photos = await get("aircraft_photos?select=aircraft_id,image_url");

const photoMap = {};
for (const p of photos) if (!photoMap[p.aircraft_id]) photoMap[p.aircraft_id] = p.image_url;

const out = { aircraft, photos: photoMap };
writeFileSync(
  resolve(__dirname, "../src/data/aircraftSnapshot.json"),
  JSON.stringify(out, null, 2),
);
console.log(`[prefetch-aircraft] wrote ${aircraft.length} aircraft, ${Object.keys(photoMap).length} photos`);

// Empty legs: snapshot de vuelos activos con fecha >= hoy, para que la página
// /empty-legs renderice la disponibilidad en el HTML estático (SEO). El
// cliente la refresca desde Supabase al hidratar.
const today = new Date().toISOString().slice(0, 10);
const emptyLegs = await get(
  `empty_legs?select=id,from_city,from_iata,to_city,to_iata,flight_date,aircraft,category,seats,price,is_featured,is_new&is_active=eq.true&flight_date=gte.${today}&order=flight_date.asc`,
);
writeFileSync(
  resolve(__dirname, "../src/data/emptyLegsSnapshot.json"),
  JSON.stringify({ generated: today, legs: emptyLegs }, null, 2),
);
console.log(`[prefetch-aircraft] wrote ${emptyLegs.length} empty legs (>= ${today})`);

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

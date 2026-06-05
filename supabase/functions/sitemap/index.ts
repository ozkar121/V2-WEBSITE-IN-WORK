// Edge function: dynamic sitemap.xml
// Includes static pages + every active empty leg from the database.
// No JWT verification — must be publicly accessible to crawlers.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SITE_URL = "https://numen-aviation.com";

const STATIC_PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/flota", priority: "0.9", changefreq: "weekly" },
  { path: "/empty-legs", priority: "0.9", changefreq: "daily" },
  { path: "/vuelos-de-carga", priority: "0.9", changefreq: "monthly" },
  { path: "/ambulancia-aerea", priority: "0.9", changefreq: "monthly" },
  { path: "/charters-grupales", priority: "0.9", changefreq: "monthly" },
  { path: "/rutas", priority: "0.8", changefreq: "monthly" },
  { path: "/rutas/cdmx-cancun", priority: "0.8", changefreq: "monthly" },
  { path: "/rutas/cdmx-los-cabos", priority: "0.8", changefreq: "monthly" },
  { path: "/rutas/cdmx-miami", priority: "0.8", changefreq: "monthly" },
  { path: "/rutas/cdmx-monterrey", priority: "0.8", changefreq: "monthly" },
  { path: "/rutas/toluca-acapulco", priority: "0.8", changefreq: "monthly" },
  { path: "/guia-fbo-toluca", priority: "0.8", changefreq: "monthly" },
  { path: "/cuanto-cuesta-jet-privado-mexico-2026", priority: "0.8", changefreq: "monthly" },
  { path: "/briefing", priority: "0.8", changefreq: "weekly" },
  { path: "/briefing/tramites-aduanales-jet-privado-mexico", priority: "0.7", changefreq: "monthly" },
  { path: "/briefing/mejores-aeropuertos-aviacion-privada-mexico", priority: "0.7", changefreq: "monthly" },
  { path: "/briefing/toluca-vs-santa-lucia-vuelos-privados", priority: "0.7", changefreq: "monthly" },
  { path: "/briefing/aeronaves-usa-vuelos-domesticos-mexico", priority: "0.7", changefreq: "monthly" },
  { path: "/briefing/mejores-jets-medianos-mexico-usa", priority: "0.7", changefreq: "monthly" },
  { path: "/briefing/como-funcionan-empty-legs", priority: "0.7", changefreq: "monthly" },
  { path: "/briefing/renta-helicoptero-ciudad-de-mexico", priority: "0.8", changefreq: "monthly" },
  { path: "/briefing/helicopter-charter-toluca-cdmx", priority: "0.8", changefreq: "monthly" },
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: legs } = await supabase
    .from("empty_legs")
    .select("id, updated_at")
    .eq("is_active", true);

  const today = new Date().toISOString().split("T")[0];

  const urls = [
    ...STATIC_PAGES.map(
      (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    ),
    ...(legs ?? []).map((leg: { id: string; updated_at: string }) => {
      const lastmod = (leg.updated_at ?? today).split("T")[0];
      return `  <url>
    <loc>${SITE_URL}/empty-legs#${leg.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.6</priority>
  </url>`;
    }),
  ].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
});

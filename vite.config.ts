import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Briefing + route slugs that need their own prerendered HTML file with
// baked SEO/JSON-LD. Kept here so vite-react-ssg expands the dynamic
// /briefing/:slug and /rutas/:slug entries at build time.
const BRIEFING_SLUGS = [
  "como-elegir-operador-jet-privado-seguro-mexico",
  "tramites-aduanales-jet-privado-mexico",
  "mejores-aeropuertos-aviacion-privada-mexico",
  "toluca-vs-santa-lucia-vuelos-privados",
  "aeronaves-usa-vuelos-domesticos-mexico",
  "mejores-jets-medianos-mexico-usa",
  "como-funcionan-empty-legs",
  "renta-helicoptero-ciudad-de-mexico",
  "helicopter-charter-toluca-cdmx",
];

const ROUTE_SLUGS = [
  "cdmx-cancun",
  "cdmx-los-cabos",
  "cdmx-miami",
  "cdmx-monterrey",
  "toluca-acapulco",
  "toluca-guadalajara",
  "toluca-puerto-vallarta",
  "toluca-houston",
  "toluca-punta-cana",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    includedRoutes(paths: string[]) {
      const dynamic = [
        ...BRIEFING_SLUGS.map((s) => `/briefing/${s}`),
        ...ROUTE_SLUGS.map((s) => `/rutas/${s}`),
        // Versión en inglés
        ...BRIEFING_SLUGS.map((s) => `/en/briefing/${s}`),
        ...ROUTE_SLUGS.map((s) => `/en/rutas/${s}`),
      ];
      // Drop catch-all "*", unresolved ":param", and private SPA routes.
      const blocked = new Set(["/auth", "auth"]);
      const staticOnly = paths.filter(
        (p: string) =>
          !p.includes(":") &&
          !p.includes("*") &&
          !blocked.has(p) &&
          !p.startsWith("/admin") &&
          !p.startsWith("admin"),
      );
      return Array.from(new Set([...staticOnly, ...dynamic]));
    },
  },
}));

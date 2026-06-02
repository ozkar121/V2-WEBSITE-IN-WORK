import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// Static slugs we want fully prerendered. Briefing and route slugs are
// listed here so each gets its own HTML file with baked SEO/JSON-LD.
const BRIEFING_SLUGS = [
  "tramites-aduanales-jet-privado-mexico",
  "mejores-aeropuertos-aviacion-privada-mexico",
  "toluca-vs-santa-lucia-vuelos-privados",
  "aeronaves-usa-vuelos-domesticos-mexico",
  "mejores-jets-medianos-mexico-usa",
  "como-funcionan-empty-legs",
  "renta-helicoptero-ciudad-de-mexico",
];

const ROUTE_SLUGS = [
  "cdmx-cancun",
  "cdmx-los-cabos",
  "cdmx-miami",
  "cdmx-monterrey",
];

export const createRoot = ViteReactSSG(
  {
    routes,
    basename: "/",
  },
  undefined,
  {
    // Expand wildcard/dynamic routes into concrete URLs to prerender.
    includedRoutes(paths) {
      const dynamic = [
        ...BRIEFING_SLUGS.map((s) => `/briefing/${s}`),
        ...ROUTE_SLUGS.map((s) => `/rutas/${s}`),
      ];
      // Drop catch-all "/*" — replace with the real list of routes we own.
      const staticOnly = paths.filter(
        (p) => !p.includes(":") && !p.includes("*"),
      );
      return Array.from(new Set([...staticOnly, ...dynamic]));
    },
  },
);

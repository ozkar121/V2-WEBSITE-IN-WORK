// Helper centralizado para generar JSON-LD BreadcrumbList según schema.org.
// Reglas:
//  - Posición 1 siempre es "Inicio" → SITE_URL
//  - Cada nivel debe usar un nombre legible en español, no el slug crudo.
//  - El `item` debe ser SIEMPRE la URL final canónica (sin .html ni redirects).
//  - Los niveles intermedios sin página propia (ej. "/rutas") también se incluyen.
//
// Uso típico en páginas estáticas:
//   buildBreadcrumb({ path: "/empty-legs" })
//
// Uso en páginas con segmento dinámico (briefing post, ruta):
//   buildBreadcrumb({
//     path: "/briefing/tramites-aduanales",
//     trail: [
//       { name: "Briefing", item: `${SITE_URL}/briefing` },
//       { name: post.title, item: `${SITE_URL}/briefing/${post.slug}` },
//     ],
//   });
import { SITE_URL } from "@/lib/site";

export interface BreadcrumbStep {
  name: string;
  item: string;
}

/** Labels legibles en español para los slugs de primer nivel del sitio. */
const SEGMENT_LABELS: Record<string, string> = {
  flota: "Flota",
  fleet: "Fleet",
  "empty-legs": "Empty Legs",
  "vuelos-de-carga": "Vuelos de Carga",
  "ambulancia-aerea": "Ambulancia Aérea",
  "charters-grupales": "Charters de Grupos",
  briefing: "Briefing",
  rutas: "Rutas",
  unsubscribe: "Cancelar Suscripción",
};

const prettifySlug = (slug: string) =>
  slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

const segmentLabel = (slug: string) =>
  SEGMENT_LABELS[slug] ?? prettifySlug(slug);

export interface BuildBreadcrumbInput {
  /** Pathname canónico empezando con "/", ej: "/briefing/foo". */
  path: string;
  /**
   * Trail explícito (sin contar el nivel "Inicio"). Úsalo cuando algún
   * nivel sea dinámico (artículo de briefing, ruta) y necesite el título
   * real en lugar del slug.
   */
  trail?: BreadcrumbStep[];
}

/** Devuelve el objeto JSON-LD BreadcrumbList listo para inyectarse. */
export function buildBreadcrumb({
  path,
  trail,
}: BuildBreadcrumbInput): Record<string, unknown> | null {
  // La home NO lleva breadcrumb.
  if (!path || path === "/" || path === "") return null;

  const steps: BreadcrumbStep[] =
    trail ??
    (() => {
      const segments = path.split("/").filter(Boolean);
      let acc = "";
      return segments.map((seg) => {
        acc += `/${seg}`;
        return { name: segmentLabel(seg), item: `${SITE_URL}${acc}` };
      });
    })();

  const itemListElement = [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
    ...steps.map((s, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: s.name,
      item: s.item,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

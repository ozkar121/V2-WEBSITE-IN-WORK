// Internal link map for the "Contenido relacionado" / RelatedLinks block.
// Keeps anchor texts descriptive (no "clic aquí"). Toluca/MMTO is always the
// departure point in any new anchor text.

import type { Lang } from "@/i18n/translations";

export interface InternalLink {
  href: string;
  label: { es: string; en: string };
}

export const LINK_LABELS: Record<string, { es: string; en: string }> = {
  "/": { es: "Renta de jet privado en Toluca (MMTO)", en: "Private jet charter in Toluca (MMTO)" },
  "/flota": { es: "Nuestra flota de jets privados", en: "Our private jet fleet" },
  "/empty-legs": { es: "Empty Legs disponibles desde Toluca", en: "Available Empty Legs from Toluca" },
  "/charters-grupales": { es: "Charters para grupos grandes", en: "Large group charters" },
  "/vuelos-de-carga": { es: "Vuelos de carga aérea", en: "Air cargo flights" },
  "/ambulancia-aerea": { es: "Ambulancias aéreas", en: "Air ambulance" },
  "/renta-de-avion-privado": {
    es: "Renta de avión privado en México",
    en: "Private aircraft charter in Mexico",
  },
  "/briefing": { es: "The Numen Briefing", en: "The Numen Briefing" },
  "/guia-fbo-toluca": { es: "Guía del FBO en Toluca (MMTO)", en: "FBO guide at Toluca (MMTO)" },
  "/cuanto-cuesta-jet-privado-mexico-2026": {
    es: "¿Cuánto cuesta un jet privado en México? (2026)",
    en: "How much does a private jet cost in Mexico? (2026)",
  },
  "/rutas": { es: "Todas las rutas desde Toluca", en: "All routes from Toluca" },
  "/nosotros": { es: "Nosotros — Numen Aviation", en: "About Numen Aviation" },
  "/rutas/cdmx-cancun": { es: "Ruta Toluca/CDMX → Cancún", en: "Toluca/CDMX → Cancún route" },
  "/rutas/cdmx-los-cabos": { es: "Ruta Toluca/CDMX → Los Cabos", en: "Toluca/CDMX → Los Cabos route" },
  "/rutas/cdmx-miami": { es: "Ruta Toluca/CDMX → Miami", en: "Toluca/CDMX → Miami route" },
  "/rutas/cdmx-monterrey": { es: "Ruta Toluca/CDMX → Monterrey", en: "Toluca/CDMX → Monterrey route" },
  "/rutas/toluca-acapulco": { es: "Ruta Toluca → Acapulco", en: "Toluca → Acapulco route" },
  "/rutas/toluca-guadalajara": { es: "Ruta Toluca → Guadalajara", en: "Toluca → Guadalajara route" },
  "/rutas/toluca-puerto-vallarta": { es: "Ruta Toluca → Puerto Vallarta", en: "Toluca → Puerto Vallarta route" },
  "/rutas/toluca-houston": { es: "Ruta Toluca → Houston", en: "Toluca → Houston route" },
  "/rutas/toluca-punta-cana": { es: "Ruta Toluca → Punta Cana", en: "Toluca → Punta Cana route" },
  "/briefing/como-elegir-operador-jet-privado-seguro-mexico": {
    es: "Cómo elegir un operador de jet privado seguro",
    en: "How to choose a safe private jet operator",
  },
  "/briefing/tramites-aduanales-jet-privado-mexico": {
    es: "Trámites aduanales para jets privados en México",
    en: "Private jet customs in Mexico",
  },
  "/briefing/mejores-aeropuertos-aviacion-privada-mexico": {
    es: "Mejores aeropuertos para aviación privada en México",
    en: "Best airports for private aviation in Mexico",
  },
  "/briefing/toluca-vs-santa-lucia-vuelos-privados": {
    es: "Toluca (MMTO) vs Santa Lucía (AIFA) para vuelos privados",
    en: "Toluca (MMTO) vs Santa Lucía (AIFA) for private flights",
  },
  "/briefing/aeronaves-usa-vuelos-domesticos-mexico": {
    es: "Aeronaves de EUA y cabotaje en México",
    en: "US aircraft and cabotage in Mexico",
  },
  "/briefing/mejores-jets-medianos-mexico-usa": {
    es: "Mejores jets medianos y heavy México–EUA",
    en: "Best midsize and heavy jets Mexico–USA",
  },
  "/briefing/como-funcionan-empty-legs": {
    es: "Cómo funcionan los Empty Legs",
    en: "How Empty Legs work",
  },
  "/briefing/helicopter-charter-toluca-cdmx": {
    es: "Helicóptero charter Toluca ↔ CDMX (MMTO)",
    en: "Helicopter charter Toluca ↔ Mexico City (MMTO)",
  },
  "/briefing/renta-helicoptero-ciudad-de-mexico": {
    es: "Renta de helicópteros en la Ciudad de México",
    en: "Helicopter rental in Mexico City",
  },
};

// path -> list of related paths (3-4 each)
export const RELATED_MAP: Record<string, string[]> = {
  "/renta-de-avion-privado": [
    "/cuanto-cuesta-jet-privado-mexico-2026",
    "/empty-legs",
    "/flota",
    "/guia-fbo-toluca",
  ],
  "/briefing/como-elegir-operador-jet-privado-seguro-mexico": [
    "/briefing/aeronaves-usa-vuelos-domesticos-mexico",
    "/cuanto-cuesta-jet-privado-mexico-2026",
    "/flota",
    "/",
  ],
  "/guia-fbo-toluca": [
    "/briefing/toluca-vs-santa-lucia-vuelos-privados",
    "/briefing/mejores-aeropuertos-aviacion-privada-mexico",
    "/cuanto-cuesta-jet-privado-mexico-2026",
    "/flota",
  ],
  "/cuanto-cuesta-jet-privado-mexico-2026": [
    "/renta-de-avion-privado",
    "/flota",
    "/empty-legs",
    "/briefing/mejores-jets-medianos-mexico-usa",
    "/briefing/como-elegir-operador-jet-privado-seguro-mexico",
  ],
  "/briefing/tramites-aduanales-jet-privado-mexico": ["/vuelos-de-carga", "/rutas/cdmx-miami", "/"],
  "/briefing/mejores-aeropuertos-aviacion-privada-mexico": [
    "/guia-fbo-toluca",
    "/briefing/toluca-vs-santa-lucia-vuelos-privados",
    "/",
  ],
  "/briefing/toluca-vs-santa-lucia-vuelos-privados": [
    "/guia-fbo-toluca",
    "/briefing/mejores-aeropuertos-aviacion-privada-mexico",
    "/",
  ],
  "/briefing/aeronaves-usa-vuelos-domesticos-mexico": [
    "/flota",
    "/rutas/cdmx-miami",
    "/briefing/mejores-jets-medianos-mexico-usa",
  ],
  "/briefing/mejores-jets-medianos-mexico-usa": [
    "/flota",
    "/cuanto-cuesta-jet-privado-mexico-2026",
    "/rutas/cdmx-miami",
  ],
  "/briefing/como-funcionan-empty-legs": [
    "/empty-legs",
    "/cuanto-cuesta-jet-privado-mexico-2026",
    "/briefing/como-elegir-operador-jet-privado-seguro-mexico",
  ],
  "/briefing/helicopter-charter-toluca-cdmx": [
    "/briefing/renta-helicoptero-ciudad-de-mexico",
    "/guia-fbo-toluca",
    "/charters-grupales",
  ],
  "/briefing/renta-helicoptero-ciudad-de-mexico": [
    "/briefing/helicopter-charter-toluca-cdmx",
    "/charters-grupales",
    "/",
  ],
};

export const getRelatedFor = (path: string, lang: Lang): InternalLink[] => {
  const hrefs = RELATED_MAP[path] ?? [];
  return hrefs
    .filter((h) => LINK_LABELS[h])
    .map((h) => ({ href: h, label: LINK_LABELS[h] }));
};

export const labelFor = (href: string, lang: Lang): string =>
  LINK_LABELS[href]?.[lang] ?? href;

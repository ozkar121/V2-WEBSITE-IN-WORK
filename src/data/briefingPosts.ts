// Briefing post metadata + raw markdown content (ES + EN).
// To add a new post: drop the two .md files in src/content/briefing/ and
// register the entry below.

import customsES from "@/content/briefing/01-customs-ES.md?raw";
import customsEN from "@/content/briefing/01-customs-EN.md?raw";
import airportsES from "@/content/briefing/02-airports-ES.md?raw";
import airportsEN from "@/content/briefing/02-airports-EN.md?raw";
import tolucaES from "@/content/briefing/03-toluca-vs-aifa-ES.md?raw";
import tolucaEN from "@/content/briefing/03-toluca-vs-aifa-EN.md?raw";
import cabotageES from "@/content/briefing/04-cabotage-ES.md?raw";
import cabotageEN from "@/content/briefing/04-cabotage-EN.md?raw";
import midsizeES from "@/content/briefing/05-midsize-jets-ES.md?raw";
import midsizeEN from "@/content/briefing/05-midsize-jets-EN.md?raw";
import emptyLegsES from "@/content/briefing/06-empty-legs-ES.md?raw";
import emptyLegsEN from "@/content/briefing/06-empty-legs-EN.md?raw";
import helicopterES from "@/content/briefing/07-helicopter-cdmx-ES.md?raw";
import helicopterEN from "@/content/briefing/07-helicopter-cdmx-EN.md?raw";
import heliCharterES from "@/content/briefing/08-helicopter-charter-toluca-cdmx-ES.md?raw";
import heliCharterEN from "@/content/briefing/08-helicopter-charter-toluca-cdmx-EN.md?raw";
import operatorSafetyES from "@/content/briefing/09-operator-safety-ES.md?raw";
import operatorSafetyEN from "@/content/briefing/09-operator-safety-EN.md?raw";

import type { Lang } from "@/i18n/translations";

export interface BriefingPost {
  /** Canonical slug (language-neutral). URL: /briefing/:slug */
  slug: string;
  /** Display order — lower = newer. */
  order: number;
  /** ISO date for schema & display. */
  date: string;
  category: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  excerpt: { es: string; en: string };
  keywords: { es: string; en: string };
  readMinutes: number;
  body: { es: string; en: string };
}

const stripFrontMeta = (md: string): string => {
  // Drop the H1 + the meta block (lines until the first --- separator).
  const lines = md.split("\n");
  const sepIdx = lines.findIndex((l) => l.trim() === "---");
  if (sepIdx === -1) return md.trim();
  return lines.slice(sepIdx + 1).join("\n").trim();
};

const make = (raw: { es: string; en: string }) => ({
  es: stripFrontMeta(raw.es),
  en: stripFrontMeta(raw.en),
});

export const BRIEFING_POSTS: BriefingPost[] = [
  {
    slug: "como-elegir-operador-jet-privado-seguro-mexico",
    order: -1,
    date: "2026-06-13",
    category: { es: "Seguridad Operacional", en: "Operational Safety" },
    title: {
      es: "Cómo Elegir un Operador de Jet Privado Seguro en México: AFAC, Certificaciones y Seguros",
      en: "How to Choose a Safe Private Jet Operator in Mexico: AFAC, Certifications and Insurance",
    },
    description: {
      es: "Cómo verificar la seguridad de un operador de jet privado en México: certificación AFAC (AOC), IS-BAO/ARGUS/Wyvern, seguros y tripulación. Checklist antes de reservar.",
      en: "How to verify a private jet operator's safety in Mexico: AFAC certification (AOC), IS-BAO/ARGUS/Wyvern, insurance and crew. A checklist before you book.",
    },
    excerpt: {
      es: "AFAC, IS-BAO, seguros y tripulación: cómo saber si un charter es seguro antes de pagar.",
      en: "AFAC, IS-BAO, insurance and crew — how to know a charter is safe before you pay.",
    },
    keywords: {
      es: "operador jet privado seguro México, certificación AFAC, AOC taxi aéreo, IS-BAO, ARGUS, Wyvern, seguros aviación privada",
      en: "safe private jet operator Mexico, AFAC certification, air taxi AOC, IS-BAO, ARGUS, Wyvern, private aviation insurance",
    },
    readMinutes: 9,
    body: make({ es: operatorSafetyES, en: operatorSafetyEN }),
  },
  {
    slug: "tramites-aduanales-jet-privado-mexico",
    order: 7,
    date: "2026-02-08",
    category: { es: "Guía de Aviación Privada", en: "Private Aviation Guide" },
    title: {
      es: "Cómo Funcionan los Trámites Aduanales para Jets Privados en México",
      en: "How Private Jet Customs Work in Mexico",
    },
    description: {
      es: "Todo lo que necesitas saber sobre aduanas, migración y despacho FBO al volar en jet privado en México. Guía actualizada desde el Aeropuerto de Toluca (MMTO).",
      en: "Everything you need to know about customs, immigration, and FBO clearance when flying by private jet to Mexico. Updated guide from Toluca Airport (MMTO).",
    },
    excerpt: {
      es: "Aduanas, migración y despacho FBO paso a paso para vuelos privados que llegan a México.",
      en: "Customs, immigration and FBO clearance — step by step — for private flights arriving in Mexico.",
    },
    keywords: {
      es: "trámites aduanales jet privado México, FBO Toluca, despacho aduanal MMTO",
      en: "private jet customs Mexico, FBO Toluca, MMTO customs",
    },
    readMinutes: 6,
    body: make({ es: customsES, en: customsEN }),
  },
  {
    slug: "mejores-aeropuertos-aviacion-privada-mexico",
    order: 6,
    date: "2026-02-25",
    category: { es: "Guía de Aviación Privada", en: "Private Aviation Guide" },
    title: {
      es: "Los Mejores Aeropuertos para Aviación Privada en México",
      en: "Best Airports for Private Aviation in Mexico",
    },
    description: {
      es: "Descubre los mejores aeropuertos para jets privados en México: Toluca (MMTO), Cancún, Los Cabos, Monterrey y más.",
      en: "Discover the best airports for private jets in Mexico: Toluca (MMTO), Cancún, Los Cabos, Monterrey, and more.",
    },
    excerpt: {
      es: "Comparativa de FBOs, pistas e infraestructura en los aeropuertos clave para aviación ejecutiva.",
      en: "FBO comparison, runways, and infrastructure across the country's key executive aviation airports.",
    },
    keywords: {
      es: "mejores aeropuertos aviación privada México, FBO México, aeropuerto Toluca MMTO",
      en: "best airports private aviation Mexico, FBO Mexico, Toluca airport MMTO",
    },
    readMinutes: 8,
    body: make({ es: airportsES, en: airportsEN }),
  },
  {
    slug: "toluca-vs-santa-lucia-vuelos-privados",
    order: 5,
    date: "2026-03-14",
    category: { es: "Guía de Aviación Privada", en: "Private Aviation Guide" },
    title: {
      es: "Toluca vs Santa Lucía (AIFA) para Vuelos Privados: Comparativa 2026",
      en: "Toluca vs Santa Lucía (AIFA) for Private Flights: 2026 Comparison",
    },
    description: {
      es: "Comparativa detallada entre Toluca (MMTO) y Santa Lucía (AIFA) para aviación privada. FBOs, pistas, aduanas y servicios ejecutivos.",
      en: "Detailed comparison between Toluca (MMTO) and Santa Lucía (AIFA) for private aviation. FBOs, runways, customs, and executive services.",
    },
    excerpt: {
      es: "¿MMTO o AIFA? Pistas, FBOs, aduanas y tiempos a CDMX, lado a lado.",
      en: "MMTO or AIFA? Runways, FBOs, customs and ground time to Mexico City — side by side.",
    },
    keywords: {
      es: "Toluca vs Santa Lucía, MMTO vs AIFA, aviación privada Toluca",
      en: "Toluca vs Santa Lucía, MMTO vs AIFA, private aviation Toluca",
    },
    readMinutes: 7,
    body: make({ es: tolucaES, en: tolucaEN }),
  },
  {
    slug: "aeronaves-usa-vuelos-domesticos-mexico",
    order: 4,
    date: "2026-04-02",
    category: { es: "Regulación Aeronáutica", en: "Aviation Regulation" },
    title: {
      es: "¿Pueden las Aeronaves de EUA Operar Vuelos Domésticos en México?",
      en: "Can US Aircraft Operate Domestic Flights in Mexico?",
    },
    description: {
      es: "Guía completa sobre las reglas de cabotaje en México para aeronaves con matrícula N. Qué está permitido, qué no, y cómo operar legalmente.",
      en: "Complete guide to cabotage rules in Mexico for N-registered aircraft. What's allowed, what's not, and how to operate legally.",
    },
    excerpt: {
      es: "Cabotaje aéreo en México: lo que la AFAC permite (y lo que no) para matrículas N.",
      en: "Air cabotage in Mexico: what AFAC allows — and what it doesn't — for N-registered aircraft.",
    },
    keywords: {
      es: "cabotaje aviación México, aeronaves matrícula N México, AFAC",
      en: "cabotage aviation Mexico, N-registered aircraft Mexico, AFAC",
    },
    readMinutes: 6,
    body: make({ es: cabotageES, en: cabotageEN }),
  },
  {
    slug: "mejores-jets-medianos-mexico-usa",
    order: 3,
    date: "2026-04-18",
    category: { es: "Flota y Aeronaves", en: "Fleet & Aircraft" },
    title: {
      es: "Los Mejores Jets para Vuelos México-EUA: Medianos y Heavy",
      en: "Best Jets for Mexico-USA Flights: Midsize and Heavy",
    },
    description: {
      es: "Comparativa de los mejores jets medianos y heavy para vuelos entre México y EUA. Hawker, Gulfstream, Challenger, Legacy y más.",
      en: "Comparison of the best midsize and heavy jets for flights between Mexico and the USA. Hawker, Gulfstream, Challenger, Legacy, and more.",
    },
    excerpt: {
      es: "Hawker, Gulfstream, Challenger y Legacy: qué jet elegir según ruta y distancia.",
      en: "Hawker, Gulfstream, Challenger and Legacy — which jet fits each cross-border route.",
    },
    keywords: {
      es: "mejores jets México EUA, Hawker 800 México, Gulfstream G450, Challenger 601, heavy jet charter México",
      en: "best jets Mexico USA, Hawker 800 Mexico, Gulfstream G450, Challenger 601, heavy jet charter Mexico",
    },
    readMinutes: 10,
    body: make({ es: midsizeES, en: midsizeEN }),
  },
  {
    slug: "como-funcionan-empty-legs",
    order: 2,
    date: "2026-05-05",
    category: { es: "Guía de Aviación Privada", en: "Private Aviation Guide" },
    title: {
      es: "Cómo Funcionan los Empty Legs en Aviación Privada",
      en: "How Empty Legs Work in Private Aviation",
    },
    description: {
      es: "Guía completa sobre empty legs en aviación privada. Qué son, cómo encontrarlos, cuánto ahorras y disponibles desde Toluca (MMTO).",
      en: "Complete guide to empty leg flights. What they are, how to find them, how much you save, and current empty legs from Toluca (MMTO).",
    },
    excerpt: {
      es: "Volar en jet privado con hasta 75% de descuento: cómo funcionan los empty legs.",
      en: "Fly private at up to 75% off — how empty legs really work.",
    },
    keywords: {
      es: "empty legs jet privado, trayectos vacíos, empty legs México",
      en: "empty legs private jet, empty leg flights, empty legs Mexico",
    },
    readMinutes: 7,
    body: make({ es: emptyLegsES, en: emptyLegsEN }),
  },
  {
    slug: "renta-helicoptero-ciudad-de-mexico",
    order: 1,
    date: "2026-05-22",
    category: { es: "Servicios de Aviación Privada", en: "Private Aviation Services" },
    title: {
      es: "Renta de Helicópteros en la Ciudad de México: Traslados Ejecutivos y Vuelos Turísticos",
      en: "Helicopter Rental in Mexico City: Executive Transfers and Scenic Flights",
    },
    description: {
      es: "Renta de helicópteros ejecutivos y turísticos en CDMX. Traslados Toluca–CDMX, vuelos panorámicos y más. Agusta 109E, Bell 505 y Bell 206 desde Numen Aviation.",
      en: "Executive and scenic helicopter rental in Mexico City. Toluca–CDMX transfers, panoramic flights, and more. Agusta 109E, Bell 505, and Bell 206 from Numen Aviation.",
    },
    excerpt: {
      es: "Traslados ejecutivos y vuelos panorámicos en helicóptero sobre la Ciudad de México.",
      en: "Executive transfers and scenic helicopter flights over Mexico City.",
    },
    keywords: {
      es: "renta helicóptero Ciudad de México, helicóptero ejecutivo CDMX, traslado helicóptero Toluca, vuelo panorámico CDMX, taxi aéreo México",
      en: "helicopter rental Mexico City, executive helicopter CDMX, helicopter transfer Toluca, panoramic flight Mexico City, air taxi Mexico",
    },
    readMinutes: 8,
    body: make({ es: helicopterES, en: helicopterEN }),
  },
  {
    slug: "helicopter-charter-toluca-cdmx",
    order: 0,
    date: "2026-06-04",
    category: { es: "Servicios de Aviación Privada", en: "Private Aviation Services" },
    title: {
      es: "Helicóptero Charter Toluca ↔ CDMX (MMTO): Traslados Ejecutivos y Tours",
      en: "Helicopter Charter Toluca ↔ Mexico City (MMTO): Executive Transfers & Tours",
    },
    description: {
      es: "Renta de helicópteros ejecutivos y panorámicos entre Toluca (MMTO) y la CDMX. Traslados puerta a puerta en 12–18 min, flota Agusta 109E, Bell 505 y Bell 206. Desde $4,000 USD.",
      en: "Executive and scenic helicopter charter between Toluca (MMTO) and Mexico City. Door-to-door transfers in 12–18 min, Agusta 109E, Bell 505 and Bell 206 fleet. From $4,000 USD.",
    },
    excerpt: {
      es: "Traslados puerta a puerta Toluca ↔ CDMX en 12–18 minutos y conexión inmediata con tu jet privado en MMTO.",
      en: "Door-to-door Toluca ↔ CDMX transfers in 12–18 minutes with an immediate connection to your private jet at MMTO.",
    },
    keywords: {
      es: "helicóptero Toluca CDMX, renta helicóptero MMTO, traslado helicóptero Santa Fe, helipuerto Polanco, Agusta 109E, Bell 505",
      en: "helicopter charter Toluca CDMX, MMTO helicopter transfer, Santa Fe helipad, Polanco helipad, Agusta 109E, Bell 505",
    },
    readMinutes: 9,
    body: make({ es: heliCharterES, en: heliCharterEN }),
  },
];

export const getBriefingPost = (slug: string): BriefingPost | undefined =>
  BRIEFING_POSTS.find((p) => p.slug === slug);

export const localized = <T,>(field: { es: T; en: T }, lang: Lang): T =>
  field[lang];

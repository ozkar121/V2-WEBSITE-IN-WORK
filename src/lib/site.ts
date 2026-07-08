// Centralized site config — change SITE_URL once when domain changes.
// WhatsApp: línea de negocio EUA (Miami). Llamadas (tel:) siguen en el número MX
// hasta tener línea mexicana de empresa — entonces se actualizan tel + GBP + schema juntos.
export const WHATSAPP_NUMBER = "17868461440";
export const PHONE_NUMBER = "+52 444 234 8942";
export const PHONE_TEL = "+524442348942";
export const EMAIL = "operaciones@numen-aviation.com";

// CANONICAL DOMAIN — update if the official domain differs.
export const SITE_URL = "https://numen-aviation.com";
export const SITE_NAME = "Numen Aviation";
export const SITE_LOCALE = "es_MX";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { label: "Servicios", href: "/#services" },
  { label: "Flota", href: "/#fleet" },
  { label: "Empty Legs", href: "/empty-legs" },
  { label: "Carga", href: "/vuelos-de-carga" },
  { label: "Nosotros", href: "/#why" },
  { label: "Contacto", href: "/#contact" },
];

// Salida siempre desde Toluca (MMTO). Los slugs cdmx-* se conservan por SEO/indexación.
export const ROUTES = [
  { slug: "cdmx-cancun", label: "Toluca → Cancún" },
  { slug: "cdmx-los-cabos", label: "Toluca → Los Cabos" },
  { slug: "cdmx-miami", label: "Toluca → Miami" },
  { slug: "cdmx-monterrey", label: "Toluca → Monterrey" },
  { slug: "toluca-acapulco", label: "Toluca → Acapulco" },
];

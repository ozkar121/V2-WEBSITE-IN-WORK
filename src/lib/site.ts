export const WHATSAPP_NUMBER = "524442348942";
export const EMAIL = "operaciones@numen-aviation.com";

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { label: "Servicios", href: "/#services" },
  { label: "Flota", href: "/#fleet" },
  { label: "Empty Legs", href: "/empty-legs" },
  { label: "Nosotros", href: "/#why" },
  { label: "Contacto", href: "/#contact" },
];

export const ROUTES = [
  { slug: "cdmx-cancun", label: "CDMX → Cancún" },
  { slug: "cdmx-los-cabos", label: "CDMX → Los Cabos" },
  { slug: "cdmx-miami", label: "CDMX → Miami" },
  { slug: "cdmx-monterrey", label: "CDMX → Monterrey" },
];

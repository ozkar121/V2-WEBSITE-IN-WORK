export interface RouteAircraft {
  category: string;
  name: string;
  pax: string;
  range: string;
  note: string;
}

export interface RouteWhy {
  num: string;
  title: string;
  desc: string;
}

export interface RouteData {
  slug: string;
  title: string; // SEO title
  description: string; // SEO description
  tagline: string; // Hero tag (Toluca · Cancún)
  heroFromCity: string; // "Toluca"
  heroToCity: string; // "Cancún"
  heroSubtitle: string;
  waMessage: string;
  stats: { distance: string; time: string; price: string; aircraft: string };
  airports: { departure: string; arrival: string };
  aircraft: RouteAircraft[];
  why: RouteWhy[];
  ctaCity: string;
}

export const ROUTE_DATA: Record<string, RouteData> = {
  "cdmx-cancun": {
    slug: "cdmx-cancun",
    title: "Jet Privado CDMX a Cancún — Charter sin escalas | Numen Aviation",
    description: "Charter de jet privado de Toluca (MMTO) a Cancún (MMUN) en menos de 2 horas. Sin escalas, sin filas. Desde $18,000 USD. Disponible 24/7.",
    tagline: "Toluca · Cancún",
    heroFromCity: "Toluca",
    heroToCity: "Cancún",
    heroSubtitle:
      "Sin escalas en menos de 2 horas. Salta las filas de aeropuertos comerciales — despega desde nuestra base en Toluca (MMTO) — a 20 min de Santa Fe, 35 de Polanco.",
    waMessage: "Hola, me gustaría cotizar un vuelo privado CDMX → Cancún.",
    stats: { distance: "≈ 1,700 km", time: "2h 15m", price: "Desde $18,000", aircraft: "Light / Midsize" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Cancún International (MMUN) — Rampa privada Terminal H o FBO",
    },
    aircraft: [
      { category: "Jet Ligero", name: "Learjet 31", pax: "6–7", range: "2,650 km", note: "Ágil y rápido en esta ruta. Ideal para grupos pequeños que buscan velocidad jet a precios competitivos." },
      { category: "Jet Ligero", name: "Learjet 35", pax: "6–8", range: "3,800 km", note: "Caballito de batalla con excelente margen de alcance a Cancún. Cabina cómoda de pie." },
      { category: "Jet Mediano", name: "Hawker 800A", pax: "8–9", range: "4,600 km", note: "La mejor relación cabina-costo en esta ruta. Cuerpo ancho, galera completa, gran alcance." },
    ],
    why: [
      { num: "01", title: "Sin conexiones, sin escalas", desc: "Ruta directa. Tú eliges la hora de salida — mañana, tarde, último minuto." },
      { num: "02", title: "Toluca (MMTO) es nuestra base", desc: "Nuestro FBO dedicado en Toluca significa cero fricción de terminal comercial. 20 min de Santa Fe, 35 de Polanco." },
      { num: "03", title: "Llegas al FBO, no a la terminal", desc: "Transporte terrestre, toallas frías y tu equipaje listo al aterrizar. Sin bandas." },
      { num: "04", title: "Regresa en tu propio horario", desc: "Reserva el regreso abierto. Sin cargos por cambio, sin penalizaciones." },
    ],
    ctaCity: "Cancún",
  },
  "cdmx-los-cabos": {
    slug: "cdmx-los-cabos",
    title: "Jet Privado CDMX a Los Cabos — Charter sin escalas | Numen Aviation",
    description: "Charter de jet privado de Toluca (MMTO) a Los Cabos (MMSD) en menos de 2 horas. Sin escalas. Desde $16,000 USD. Disponible 24/7.",
    tagline: "Toluca · Los Cabos",
    heroFromCity: "Toluca",
    heroToCity: "Los Cabos",
    heroSubtitle:
      "Sin escalas en menos de 2 horas. Despega desde Toluca (MMTO) — directo a tu destino, sin terminales comerciales.",
    waMessage: "Hola, me gustaría cotizar un vuelo privado CDMX → Los Cabos.",
    stats: { distance: "≈ 1,530 km", time: "2h 00m", price: "Desde $16,000", aircraft: "Light / Midsize" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Los Cabos International (MMSD) — Rampa FBO privada — Terminal Ejecutiva Los Cabos",
    },
    aircraft: [
      { category: "Jet Ligero", name: "Learjet 31", pax: "6–7", range: "2,650 km", note: "Opción eficiente para Los Cabos. Operación rápida, perfecta para escapadas de fin de semana." },
      { category: "Jet Ligero", name: "Learjet 35", pax: "6–8", range: "3,800 km", note: "Margen de alcance confiable a SJD con cabina cómoda para viajes de placer." },
      { category: "Jet Mediano", name: "Hawker 800A", pax: "8–9", range: "4,600 km", note: "Top para familias o grupos de golf. Bodega generosa y cabina de pie." },
    ],
    why: [
      { num: "01", title: "Puerta a destino en menos de 4 horas", desc: "Despegue desde MMTO, aterrizaje en MMSD. Sin tránsito, sin TSA, sin asiento de en medio." },
      { num: "02", title: "Disponibilidad en temporada alta", desc: "Los Cabos se agota en diciembre y Semana Santa. Aseguramos aeronaves con meses de anticipación." },
      { num: "03", title: "Logística de golf, pesca y yate", desc: "Coordinamos transporte terrestre, hielo, equipo y catering antes de que aterrices." },
      { num: "04", title: "Empty legs en esta ruta", desc: "Frecuentemente tenemos vuelos de reposicionamiento CDMX→Cabos con descuentos. Pregúntanos." },
    ],
    ctaCity: "Los Cabos",
  },
  "cdmx-miami": {
    slug: "cdmx-miami",
    title: "Jet Privado CDMX a Miami — Charter sin escalas | Numen Aviation",
    description: "Charter de jet privado de Toluca (MMTO) a Miami (KMIA / KOPF) en 3.5 horas. Sin escalas, sin terminales comerciales. Desde $38,000 USD. Disponible 24/7.",
    tagline: "Toluca · Miami",
    heroFromCity: "Toluca",
    heroToCity: "Miami",
    heroSubtitle:
      "Sin escalas en 3.5 horas. Manejo internacional completo desde MMTO — salida AFAC, llegada FAA, sin terminales comerciales, sin conexiones.",
    waMessage: "Hola, me gustaría cotizar un vuelo privado CDMX → Miami.",
    stats: { distance: "≈ 2,720 km", time: "3h 30m", price: "Desde $38,000", aircraft: "Midsize / Heavy" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Miami International (KMIA) — Comercial y FBO privado / Opa-locka Executive (KOPF) — Llegada privada preferida",
    },
    aircraft: [
      { category: "Jet Mediano", name: "Hawker 800A", pax: "8–9", range: "4,600 km", note: "Alcance al límite con vientos favorables. La opción más económica para esta ruta internacional." },
      { category: "Jet Pesado", name: "Challenger 601", pax: "10–12", range: "6,300 km", note: "El benchmark en MMTO–Miami. Cabina de pie, galera completa, fuerte margen de alcance." },
      { category: "Jet Pesado", name: "Gulfstream G450", pax: "14–16", range: "7,800 km", note: "Ultra-premium para grupos grandes. Camas planas y comodidad intercontinental disponibles." },
    ],
    why: [
      { num: "01", title: "Cumplimiento internacional integral", desc: "Manejamos planes de vuelo AFAC, pre-clearance CBP y coordinación FBO en ambos lados." },
      { num: "02", title: "Opa-locka vs. MIA", desc: "OPF evita la congestión de MIA. 20 min más cerca de Brickell, Coral Gables y Miami Beach." },
      { num: "03", title: "Caso de uso de viaje de negocios", desc: "Junta de consejo en CDMX a cierre en Miami en un solo día — con margen para retrasos." },
      { num: "04", title: "Mascotas, efectivo, joyería — sin fricción", desc: "Salida privada significa cero restricciones de seguridad comercial sobre objetos de valor o acompañantes." },
    ],
    ctaCity: "Miami",
  },
  "cdmx-monterrey": {
    slug: "cdmx-monterrey",
    title: "Jet Privado CDMX a Monterrey — Charter sin escalas | Numen Aviation",
    description: "Charter de jet privado de Toluca (MMTO) a Monterrey (MMMY / MMAN) en 1.5 horas. La ruta de negocios por excelencia. Desde $9,500 USD. Disponible 24/7.",
    tagline: "Toluca · Monterrey",
    heroFromCity: "Toluca",
    heroToCity: "Monterrey",
    heroSubtitle:
      "Una ruta de negocios bien hecha. Puerta a puerta en menos de 3 horas totales — despega en tu horario, llega listo para trabajar.",
    waMessage: "Hola, me gustaría cotizar un vuelo privado CDMX → Monterrey.",
    stats: { distance: "≈ 930 km", time: "1h 30m", price: "Desde $9,500", aircraft: "Turboprop / Light Jet" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "General Mariano Escobedo (MMMY) — Monterrey International / Del Norte (MMAN) — Más cerca de San Pedro Garza García",
    },
    aircraft: [
      { category: "Turbohélice", name: "Piper M500", pax: "4–5", range: "1,520 km", note: "El más económico para 1–2 pasajeros. Eficiencia perfecta de corto alcance en el corredor MMTO–MTY." },
      { category: "Jet Ligero", name: "Learjet 35", pax: "6–8", range: "3,800 km", note: "Velocidad jet en una ruta corta. Llega 20 min más rápido que las opciones turboprop." },
      { category: "Jet Ligero", name: "Learjet 75", pax: "6–8", range: "3,780 km", note: "Aviónica moderna, cabina silenciosa. Lo mejor para ejecutivos que quieren la experiencia jet completa en este salto." },
    ],
    why: [
      { num: "01", title: "El corredor CDMX–MTY es nuestra ruta más volada", desc: "La operamos semanalmente. Slots preferenciales, operadores de confianza, cero sorpresas." },
      { num: "02", title: "Acceso a San Pedro Garza García", desc: "MMAN te deja a 15 min de Valle Oriente y Cumbres. MMMY agrega 30 min de tráfico." },
      { num: "03", title: "Regresos el mismo día", desc: "Despega 07:00, cierra tu junta a las 14:00, de vuelta en CDMX a las 17:00. Una aeronave, un día." },
      { num: "04", title: "Cuentas corporativas", desc: "Facturación mensual, reservas recurrentes y administración de cuenta dedicada disponibles." },
    ],
    ctaCity: "Monterrey",
  },
};

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

export interface RouteSection {
  heading: string;
  body: string; // soporta saltos de línea con \n\n
}

export interface RouteFAQ {
  q: string;
  a: string;
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
  /** Secciones largas de copy SEO (opcional). */
  sections?: RouteSection[];
  /** Preguntas frecuentes — si existen se renderiza FAQ visible + JSON-LD FAQPage. */
  faq?: RouteFAQ[];
}

export const ROUTE_DATA: Record<string, RouteData> = {
  "cdmx-cancun": {
    slug: "cdmx-cancun",
    title: "Jet Privado CDMX a Cancún | Numen Aviation",
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
    title: "Jet Privado CDMX a Los Cabos | Numen Aviation",
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
    title: "Jet Privado CDMX a Miami | Numen Aviation",
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
    title: "Jet Privado CDMX a Monterrey | Numen Aviation",
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
  "toluca-acapulco": {
    slug: "toluca-acapulco",
    title: "Renta de Jet Privado Toluca–Acapulco | Numen Aviation",
    description:
      "Renta de jet privado de Toluca (MMTO) a Acapulco en ~45 min. Learjet 35 y Hawker 800, empty legs y cotización en menos de 2 horas. 24/7.",
    tagline: "Toluca · Acapulco",
    heroFromCity: "Toluca",
    heroToCity: "Acapulco",
    heroSubtitle:
      "Acapulco a 45 minutos de la pista. Sin escalas, sin filas y sin el desgaste de la Autopista del Sol — desde Toluca (MMTO), el hub ejecutivo de la Ciudad de México, directo a la bahía.",
    waMessage:
      "Hola, quisiera cotizar un vuelo privado de Toluca a Acapulco.",
    stats: {
      distance: "≈ 290 km",
      time: "45 min",
      price: "Desde $5,950",
      aircraft: "Light / Midsize",
    },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Acapulco International (MMAA) — FBO ICCS, IS-BAH Etapa III",
    },
    aircraft: [
      {
        category: "Jet Ligero",
        name: "Learjet 35",
        pax: "6–7",
        range: "3,800 km",
        note: "Desde $5,950 USD + IVA (one-way). Ágil y eficiente: la opción más recurrente en esta ruta corta.",
      },
      {
        category: "Jet Mediano",
        name: "Hawker 800",
        pax: "8",
        range: "4,600 km",
        note: "Desde $7,550 USD + IVA (one-way). Cabina de pie, galera completa y espacio sobrado para fin de semana en familia.",
      },
    ],
    why: [
      {
        num: "01",
        title: "45 minutos en el aire",
        desc: "Frente a las casi 4 horas de la Autopista del Sol o las conexiones de un vuelo comercial. Una llamada por la mañana y por la tarde ya está en la arena.",
      },
      {
        num: "02",
        title: "Toluca (MMTO), el hub ejecutivo de la CDMX",
        desc: "A 40 minutos de Santa Fe, Polanco e Interlomas. Despacho ágil desde el FBO, sin terminales comerciales.",
      },
      {
        num: "03",
        title: "Pernocta o regreso, lo más conveniente",
        desc: "Para estancias de 1 a 3 días suele convenir que la aeronave pernocte. Cotizamos ambos escenarios para que elija el de mejor relación costo-beneficio.",
      },
      {
        num: "04",
        title: "Empty legs frecuentes",
        desc: "Acapulco genera flujo constante de empty legs en ambos sentidos. Con flexibilidad de fechas, descuentos importantes sobre la tarifa regular.",
      },
    ],
    ctaCity: "Acapulco",
    sections: [
      {
        heading: "El vuelo más corto hacia el descanso",
        body:
          "Toluca y Acapulco están separados por apenas ~290 km. En jet privado el trayecto toma alrededor de 45 minutos en el aire, frente a las casi 4 horas de la carretera o las conexiones y esperas de un vuelo comercial. Es, de todas las rutas que operamos, la que mejor traduce tiempo en descanso: una llamada por la mañana y por la tarde ya está en la arena.\n\nEs un vuelo pensado para desconectar. La mayoría de nuestros clientes en esta ruta son empresarios que se escapan el fin de semana con familia o amigos —poco trabajo, mucho mar—. Por eso lo resolvemos para que lo único que tenga que decidir sea a qué hora quiere despegar.",
      },
      {
        heading: "¿Viaje redondo o que la aeronave se quede?",
        body:
          "Al ser un trayecto tan breve, en estancias de 1, 2 o hasta 3 días suele convenir que la aeronave pernocte en Acapulco con usted en lugar de regresar vacía y volver por usted. Cada noche de pernocta tiene un costo adicional, pero en fines de semana cortos frecuentemente resulta la opción más eficiente. En su cotización le presentamos ambos escenarios —redondo con regreso de la aeronave vs. pernocta— para que elija el de mejor relación costo-beneficio.",
      },
      {
        heading: "Empty legs a Acapulco: la forma más accesible de volar",
        body:
          "Acapulco genera un flujo constante de empty legs (trayectos de reposicionamiento) tanto de ida como de regreso. Si su agenda tiene flexibilidad de fechas, estos vuelos ofrecen descuentos importantes sobre la tarifa regular de charter. Publicamos disponibilidad actualizada; pregunte por los empty legs vigentes en la ruta Toluca–Acapulco y le avisamos en cuanto aparezca uno que embone con sus planes.",
      },
      {
        heading: "Llegada en Acapulco: FBO ICCS (MMAA)",
        body:
          "Su vuelo aterriza en el Aeropuerto Internacional de Acapulco (MMAA / ACA), donde la operación ejecutiva se atiende a través del FBO de ICCS. Es la terminal privada de referencia en la bahía: instalaciones con salas ejecutivas, áreas de tripulación, comisariato propio y certificación internacional IS-BAH Etapa III, con acceso ágil a pista para que el desembarque sea tan fluido como el despegue. Desde ahí, su transporte terrestre a la zona Diamante o Costera lo coordinamos como parte del servicio.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de Toluca a Acapulco?",
        a: "Depende de la aeronave y la fecha. Un viaje sencillo en Learjet 35 (hasta 6–7 pasajeros) comienza desde 5,950 USD + IVA, y en Hawker 800 (hasta 8 pasajeros) desde 7,550 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Acapulco en jet privado?",
        a: "Alrededor de 45 minutos en el aire, frente a cerca de 4 horas por la Autopista del Sol. Con el despacho ágil desde el FBO de Toluca, el trayecto puerta a puerta es una fracción del tiempo de cualquier alternativa.",
      },
      {
        q: "¿Qué aeronaves operan la ruta Toluca–Acapulco?",
        a: "Las más frecuentes son el Learjet 35 (light jet, hasta 7 pasajeros) y el Hawker 800 (midsize jet, hasta 8 pasajeros). Para grupos o requerimientos específicos cotizamos otras opciones de la red de operadores certificados.",
      },
      {
        q: "¿Conviene que la aeronave pernocte en Acapulco?",
        a: "En estancias de 1 a 3 días suele ser más eficiente que la aeronave pernocte con usted en lugar de hacer dos viajes de reposicionamiento. Cada noche tiene un costo adicional; en la cotización comparamos ese escenario contra el viaje redondo.",
      },
      {
        q: "¿Hay empty legs disponibles a Acapulco?",
        a: "Sí, es una ruta con flujo frecuente de empty legs en ambos sentidos. Con flexibilidad de fechas se puede acceder a descuentos importantes sobre la tarifa regular de charter.",
      },
      {
        q: "¿Puedo salir desde la Ciudad de México hacia Acapulco?",
        a: "Sí. La ruta opera desde el Aeropuerto Internacional de Toluca (MMTO), el principal hub de aviación ejecutiva del Valle de México, a unos 40 minutos de Santa Fe, Polanco e Interlomas, y es la base habitual para vuelos privados desde la Ciudad de México.",
      },
    ],
  },
};

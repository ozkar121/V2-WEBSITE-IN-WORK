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
    sections: [
      {
        heading: "La ruta de placer más volada de México",
        body:
          "Cancún y la Riviera Maya concentran la mayor demanda de aviación privada del país: casas en Puerto Cancún, desarrollos en Playa del Carmen y Tulum, y una temporada alta que satura los vuelos comerciales de diciembre a abril. En jet privado, el trayecto desde Toluca (MMTO) toma 2 horas 15 minutos sin escalas, con su grupo completo y su horario.\n\nFrente al vuelo comercial, el ahorro real es mayor de lo que parece: sin anticipación de 2 horas, sin filas de documentación ni bandas de equipaje, la diferencia puerta a puerta supera las 3 horas — y el viaje empieza descansado, no desgastado.",
      },
      {
        heading: "Llegada en Cancún (MMUN): rampa privada",
        body:
          "Su vuelo aterriza en el Aeropuerto Internacional de Cancún (MMUN / CUN) con atención en la rampa privada y FBO, lejos de las terminales comerciales. El desembarque toma minutos: su transporte terrestre accede directo a la plataforma y sale hacia la Zona Hotelera (20 minutos), Playa del Carmen (45 minutos) o Tulum (90 minutos) — traslados que coordinamos como parte del servicio.",
      },
      {
        heading: "Temporada alta: la diferencia la hace la anticipación",
        body:
          "De diciembre a abril, y en especial en Navidad, Año Nuevo y Semana Santa, la disponibilidad de aeronaves hacia Cancún se agota con semanas de anticipación. Reservar temprano garantiza la aeronave correcta al precio correcto; sobre la fecha, las opciones se reducen y los precios suben. Para fechas pico recomendamos asegurar el vuelo con 3 a 4 semanas de anticipación.",
      },
      {
        heading: "Empty legs Toluca–Cancún: la ruta con más oportunidades",
        body:
          "Por su volumen, el corredor Valle de México–Cancún es el que más empty legs genera en el país, en ambos sentidos. Si sus fechas tienen flexibilidad de uno o dos días, los descuentos sobre la tarifa regular pueden llegar al 50–75%. Publicamos la disponibilidad vigente en nuestra página de empty legs y avisamos por WhatsApp cuando aparece un tramo que embona con su ruta.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de CDMX a Cancún?",
        a: "Un viaje sencillo en jet ligero (Learjet 31 o 35, hasta 7 pasajeros) comienza desde 18,000 USD + IVA; en Hawker 800A (hasta 9 pasajeros) desde 21,500 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Cancún en jet privado?",
        a: "2 horas 15 minutos sin escalas. Puerta a puerta, el ahorro frente a un vuelo comercial supera las 3 horas entre anticipación, filas y equipaje.",
      },
      {
        q: "¿Puedo llegar directo a Playa del Carmen o Tulum?",
        a: "El vuelo aterriza en Cancún (MMUN) y coordinamos transporte terrestre directo a Playa del Carmen (~45 min) o Tulum (~90 min). Para Tulum también podemos cotizar llegada al aeropuerto de Tulum (MMTU) según la aeronave.",
      },
      {
        q: "¿Qué aeronaves operan la ruta CDMX–Cancún?",
        a: "Las más frecuentes son Learjet 31 y 35 (jets ligeros, hasta 7 pasajeros) y Hawker 800A (midsize, hasta 9 pasajeros con cabina de pie). Para grupos grandes cotizamos jets pesados.",
      },
      {
        q: "¿Hay empty legs entre CDMX y Cancún?",
        a: "Es la ruta con más empty legs de México, en ambos sentidos. Con flexibilidad de fechas, los descuentos van del 40% al 75% sobre la tarifa regular.",
      },
      {
        q: "¿Desde dónde salen los vuelos privados a Cancún?",
        a: "Desde el Aeropuerto Internacional de Toluca (MMTO), el principal hub de aviación ejecutiva del Valle de México, a unos 40 minutos de Santa Fe, Polanco e Interlomas.",
      },
    ],
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
    sections: [
      {
        heading: "Baja California Sur sin escalas",
        body:
          "Los Cabos es el destino de descanso por excelencia del Pacífico mexicano: golf de campeonato, pesca deportiva, villas en el corredor y la marina de Cabo San Lucas. En jet privado, el trayecto desde Toluca (MMTO) toma 2 horas en punto, sin escalas y sin las conexiones que frecuentemente impone el itinerario comercial en temporada.\n\nLa mayoría de nuestros clientes vuela en grupo —familia, invitados, foursomes de golf— y el vuelo privado resuelve lo que la aerolínea complica: equipaje deportivo sin restricciones, mascotas en cabina y horarios que se acomodan al plan, no al revés.",
      },
      {
        heading: "Llegada en Los Cabos (MMSD): terminal ejecutiva",
        body:
          "Su vuelo aterriza en el Aeropuerto Internacional de Los Cabos (MMSD / SJD) con atención en la terminal ejecutiva y rampa FBO privada: migración ágil cuando aplica, transporte terrestre directo en plataforma y salida hacia el corredor turístico, Palmilla o Cabo San Lucas en minutos. El equipaje —palos de golf, cañas, hieleras— viaja con usted y se entrega en mano.",
      },
      {
        heading: "Golf, pesca y yate: logística incluida",
        body:
          "Coordinamos la logística completa del viaje deportivo: transporte de equipo de golf y pesca, hielo y catering a bordo, traslados a los campos del corredor (Quivira, Palmilla, Diamante) y conexión con su yate o charter de pesca en la marina. Dígalo en la cotización y lo dejamos resuelto antes del despegue.",
      },
      {
        heading: "Diciembre y Semana Santa se agotan: reserve temprano",
        body:
          "Los Cabos es, junto con Cancún, el destino que más rápido agota disponibilidad de aviación privada en fechas pico. Para Navidad, Año Nuevo y Semana Santa recomendamos asegurar aeronave con 4 a 6 semanas de anticipación. El resto del año la ruta genera empty legs frecuentes en ambos sentidos — con fechas flexibles, los descuentos son considerables.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de CDMX a Los Cabos?",
        a: "Un viaje sencillo en jet ligero (Learjet 31 o 35, hasta 7 pasajeros) comienza desde 16,000 USD + IVA; en Hawker 800A (hasta 9 pasajeros) desde 19,500 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Los Cabos en jet privado?",
        a: "Alrededor de 2 horas sin escalas. Puerta a puerta —de Santa Fe o Polanco a su villa en el corredor— el trayecto completo ronda las 3.5 horas.",
      },
      {
        q: "¿Puedo llevar palos de golf y equipo de pesca?",
        a: "Sí, sin las restricciones de una aerolínea. El Hawker 800A es el favorito de los grupos de golf por su bodega generosa; el equipo viaja con usted y se entrega en plataforma.",
      },
      {
        q: "¿Qué aeronaves operan la ruta CDMX–Los Cabos?",
        a: "Learjet 31 y 35 (jets ligeros, hasta 7 pasajeros) y Hawker 800A (midsize, hasta 9 pasajeros con cabina de pie). Para grupos grandes cotizamos jets pesados.",
      },
      {
        q: "¿Hay empty legs a Los Cabos?",
        a: "Sí, la ruta genera reposicionamientos frecuentes en ambos sentidos, especialmente alrededor de fines de semana y temporada alta. Con fechas flexibles los descuentos son importantes.",
      },
      {
        q: "¿Desde dónde salen los vuelos privados a Los Cabos?",
        a: "Desde el Aeropuerto Internacional de Toluca (MMTO), el principal hub de aviación ejecutiva del Valle de México, a unos 40 minutos de Santa Fe, Polanco e Interlomas.",
      },
    ],
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
    sections: [
      {
        heading: "México–Miami: la ruta internacional de referencia",
        body:
          "Miami es el puente natural entre México y el mundo financiero, inmobiliario y náutico de la costa este: Brickell, Coral Gables, los bancos privados y las temporadas de Art Basel y los boat shows. En jet privado, el trayecto desde Toluca (MMTO) toma 3 horas 30 minutos sin escalas, con manejo internacional completo en ambos extremos.\n\nNuestro servicio cubre el plan de vuelo y salida AFAC, el manifiesto eAPIS para CBP y el despacho migratorio a la llegada directamente en el FBO — usted no pisa una terminal comercial en ningún momento del viaje.",
      },
      {
        heading: "Opa-locka (KOPF) vs. Miami International (KMIA)",
        body:
          "Para la mayoría de las misiones recomendamos Opa-locka Executive (KOPF): es el aeropuerto ejecutivo de referencia de Miami, sin la congestión de MIA y 20 minutos más cerca de Brickell, Coral Gables y Miami Beach. KMIA queda disponible cuando la agenda lo requiere — por ejemplo, conexiones con vuelos comerciales internacionales del resto del grupo. En ambos casos el despacho CBP se realiza en el FBO en minutos.",
      },
      {
        heading: "Negocios y compras sin restricciones comerciales",
        body:
          "La salida privada elimina las fricciones del vuelo comercial que más pesan en esta ruta: objetos de valor, joyería, arte, efectivo declarado y mascotas viajan con usted en cabina, con la documentación correcta que nosotros verificamos antes del despegue. Al regreso, coordinamos el despacho aduanal mexicano en Toluca con la misma agilidad.",
      },
      {
        heading: "Documentación para volar a Estados Unidos",
        body:
          "Cada pasajero requiere pasaporte vigente y visa americana (o ESTA según nacionalidad). Nosotros transmitimos el manifiesto eAPIS a CBP, gestionamos permisos de sobrevuelo y aterrizaje y verificamos la documentación de todo el grupo antes del despegue. Para menores de edad y mascotas aplican requisitos adicionales que validamos como parte del servicio.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de CDMX a Miami?",
        a: "Un viaje sencillo en Hawker 800A (hasta 9 pasajeros) comienza desde 38,000 USD + IVA; en Challenger 601 (hasta 12 pasajeros) desde 44,000 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Miami en jet privado?",
        a: "3 horas 30 minutos sin escalas. Frente a un itinerario comercial con anticipación internacional y migración, el ahorro puerta a puerta supera las 3 horas.",
      },
      {
        q: "¿En qué aeropuerto de Miami aterriza el vuelo?",
        a: "Recomendamos Opa-locka Executive (KOPF), el aeropuerto ejecutivo de Miami: sin congestión y 20 minutos más cerca de Brickell y Miami Beach. KMIA está disponible si su agenda lo requiere.",
      },
      {
        q: "¿Qué documentos necesito para volar en privado a Miami?",
        a: "Pasaporte vigente y visa americana (o ESTA según nacionalidad). Nosotros gestionamos eAPIS, permisos y coordinación CBP; el despacho migratorio se hace en el FBO en minutos.",
      },
      {
        q: "¿Qué aeronaves operan la ruta CDMX–Miami?",
        a: "Hawker 800A (midsize, la opción más económica), Challenger 601 (el benchmark de la ruta, cabina de pie) y Gulfstream G450 para grupos grandes o máximo confort.",
      },
      {
        q: "¿Puedo viajar con mascotas, arte o joyería?",
        a: "Sí. La salida privada elimina las restricciones comerciales: mascotas en cabina y objetos de valor con usted, con la documentación correcta que verificamos antes del despegue.",
      },
    ],
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
    sections: [
      {
        heading: "El corredor de negocios más importante del país",
        body:
          "CDMX–Monterrey es la ruta ejecutiva por excelencia de México: corporativos en San Pedro Garza García, manufactura en Apodaca y Santa Catarina, y un flujo constante de consejos, cierres y visitas de planta. En jet privado, el trayecto desde Toluca (MMTO) toma 1 hora 30 minutos — y a diferencia del vuelo comercial, despega cuando usted lo decide.\n\nEs nuestra ruta más volada y la operamos semanalmente: slots preferenciales, operadores de confianza y una logística que ya está resuelta antes de que usted la pida.",
      },
      {
        heading: "Del Norte (MMAN) o Escobedo (MMMY): elija por su agenda",
        body:
          "Monterrey tiene dos llegadas posibles y la elección importa: el Aeropuerto del Norte (MMAN) está a 15 minutos de Valle Oriente y San Pedro Garza García — ideal para agenda en la zona corporativa —, mientras que Mariano Escobedo (MMMY) conviene para la zona de Apodaca y el aeropuerto de carga. En su cotización le recomendamos la llegada óptima según sus reuniones; la diferencia puede ser de 30 a 40 minutos de tráfico.",
      },
      {
        heading: "Ida y vuelta el mismo día, sin hotel",
        body:
          "El uso clásico de esta ruta: despegue de Toluca a las 07:00, primera junta en San Pedro a las 09:30, comida de trabajo, y regreso a las 18:00 para cenar en casa. La aeronave espera en plataforma durante su agenda y el regreso se ajusta si la junta se alarga. Cotizamos el día completo con espera incluida — frecuentemente más eficiente que dos vuelos sencillos.",
      },
      {
        heading: "Cuentas corporativas: la ruta que justifica el programa",
        body:
          "Para empresas con viajes recurrentes en el corredor CDMX–Monterrey ofrecemos cuentas corporativas con facturación mensual, tarifas preferentes por volumen, reservas con un solo mensaje y administración dedicada. Si su equipo directivo vuela esta ruta dos o más veces al mes, el programa corporativo reduce costo y fricción de manera medible.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de CDMX a Monterrey?",
        a: "Un viaje sencillo en turbohélice Piper M500 (1–4 pasajeros) comienza desde 9,500 USD + IVA; en Learjet 35 (hasta 7 pasajeros) desde 12,500 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Monterrey en jet privado?",
        a: "1 hora 30 minutos en jet y alrededor de 2 horas en turbohélice. Puerta a puerta, el ahorro frente al vuelo comercial es de 2 a 3 horas por trayecto.",
      },
      {
        q: "¿Conviene llegar a Del Norte (MMAN) o a Escobedo (MMMY)?",
        a: "Para agenda en San Pedro Garza García y Valle Oriente, MMAN está a 15 minutos. MMMY conviene para Apodaca y la zona industrial. Le recomendamos la llegada óptima en su cotización.",
      },
      {
        q: "¿Puedo ir y regresar el mismo día?",
        a: "Es el uso más común de la ruta: la aeronave espera durante su agenda y el regreso se ajusta si la junta se alarga. Cotizamos el día completo con espera incluida.",
      },
      {
        q: "¿Qué aeronaves operan la ruta CDMX–Monterrey?",
        a: "Piper M500 (turbohélice, el más económico para 1–4 pasajeros), Learjet 35 y Learjet 75 (jets ligeros, hasta 8 pasajeros con aviónica moderna y cabina silenciosa).",
      },
      {
        q: "¿Ofrecen tarifas corporativas para vuelos recurrentes?",
        a: "Sí: facturación mensual, tarifas por volumen y administración de cuenta dedicada. Es el programa ideal para equipos que vuelan el corredor CDMX–Monterrey con regularidad.",
      },
    ],
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
  "toluca-guadalajara": {
    slug: "toluca-guadalajara",
    title: "Renta de Jet Privado Toluca–Guadalajara | Numen Aviation",
    description:
      "Renta de jet privado de Toluca (MMTO) a Guadalajara (MMGL) en ~55 min. Turbohélice y jets ligeros, regresos el mismo día. Cotización en menos de 2 horas. 24/7.",
    tagline: "Toluca · Guadalajara",
    heroFromCity: "Toluca",
    heroToCity: "Guadalajara",
    heroSubtitle:
      "El corredor de negocios del occidente en 55 minutos. Despega de Toluca (MMTO) en tu horario, cierra en Guadalajara y regresa el mismo día — sin filas, sin conexiones, sin noches de hotel innecesarias.",
    waMessage: "Hola, quisiera cotizar un vuelo privado de Toluca a Guadalajara.",
    stats: {
      distance: "≈ 430 km",
      time: "55 min",
      price: "Desde $5,500",
      aircraft: "Turboprop / Light",
    },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Miguel Hidalgo y Costilla (MMGL) — Guadalajara, terminal de aviación ejecutiva",
    },
    aircraft: [
      {
        category: "Turbohélice",
        name: "Piper M500",
        pax: "4–5",
        range: "1,520 km",
        note: "Desde $5,500 USD + IVA (one-way). La opción más eficiente para 1–4 pasajeros en este salto corto.",
      },
      {
        category: "Jet Ligero",
        name: "Learjet 35",
        pax: "6–7",
        range: "3,800 km",
        note: "Desde $6,950 USD + IVA (one-way). Velocidad jet: menos de una hora en el aire, ideal para agendas apretadas.",
      },
      {
        category: "Jet Mediano",
        name: "Learjet 45",
        pax: "7–9",
        range: "3,700 km",
        note: "Desde $8,400 USD + IVA (one-way). Cabina más amplia para equipos de trabajo completos.",
      },
    ],
    why: [
      {
        num: "01",
        title: "55 minutos vs. 6 horas de carretera",
        desc: "La autopista México–Guadalajara consume el día entero. En jet privado desayunas en CDMX, comes en Providencia y cenas de vuelta en casa.",
      },
      {
        num: "02",
        title: "Regresos el mismo día",
        desc: "Despegue 07:30, junta en Zapopan a las 10:00, regreso a las 18:00. Una aeronave, un día completo de trabajo, cero hoteles.",
      },
      {
        num: "03",
        title: "Toluca (MMTO), el hub ejecutivo de la CDMX",
        desc: "A 40 minutos de Santa Fe, Polanco e Interlomas. Despacho en 15 minutos desde el FBO, sin terminales comerciales.",
      },
      {
        num: "04",
        title: "Flexibilidad de horario real",
        desc: "Si la junta se alarga, la aeronave espera. Sin cargos por cambio de itinerario en la mayoría de los casos.",
      },
    ],
    ctaCity: "Guadalajara",
    sections: [
      {
        heading: "La ruta de negocios del occidente mexicano",
        body:
          "Guadalajara es la segunda economía urbana del país: tecnología en Zapopan, manufactura en El Salto, agroindustria en los Altos y un ecosistema de eventos —Expo Guadalajara, FIL, Expo Ferretera— que mueve ejecutivos todo el año. En jet privado, el trayecto desde Toluca (MMTO) toma alrededor de 55 minutos en el aire, frente a más de 6 horas por autopista o las 4–5 horas reales que consume un vuelo comercial puerta a puerta entre filas, anticipación y traslados.\n\nPara quien viaja por trabajo, la cuenta es simple: la ruta en privado convierte un viaje con pernocta en un día de oficina normal que termina en casa.",
      },
      {
        heading: "¿Turbohélice o jet? Depende del grupo",
        body:
          "En distancias cortas como Toluca–Guadalajara, el turbohélice Piper M500 es imbatible en costo para 1–4 pasajeros: la diferencia de tiempo contra un jet es de apenas 20–25 minutos. Para grupos de 5 o más, o cuando la agenda exige la máxima velocidad, el Learjet 35 o el Learjet 45 hacen el tramo en menos de una hora con cabina jet completa.\n\nEn su cotización le presentamos ambos escenarios con desglose transparente para que elija por costo, tiempo o comodidad.",
      },
      {
        heading: "Llegada en Guadalajara (MMGL)",
        body:
          "Su vuelo aterriza en el Aeropuerto Internacional Miguel Hidalgo y Costilla (MMGL / GDL), con atención en la zona de aviación ejecutiva: migración y despacho ágil, acceso directo de su transporte terrestre a la plataforma y salida hacia Providencia, Andares o Zapopan en minutos. Coordinamos el transporte terrestre como parte del servicio para que la llegada sea tan fluida como el despegue.",
      },
      {
        heading: "Empty legs y vuelos frecuentes en el corredor",
        body:
          "El flujo constante de aviación ejecutiva entre el Valle de México y Guadalajara genera empty legs (tramos de reposicionamiento) con regularidad en ambos sentidos. Si sus fechas tienen flexibilidad, pregunte por la disponibilidad vigente: los descuentos sobre la tarifa regular pueden ser considerables. Para empresas con viajes recurrentes en este corredor ofrecemos facturación mensual y administración de cuenta dedicada.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de Toluca a Guadalajara?",
        a: "Un viaje sencillo en turbohélice Piper M500 (hasta 4–5 pasajeros) comienza desde 5,500 USD + IVA; en Learjet 35 (hasta 7 pasajeros) desde 6,950 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Guadalajara en jet privado?",
        a: "Alrededor de 55 minutos en jet y aproximadamente 1 hora 20 minutos en turbohélice, frente a más de 6 horas por autopista. Puerta a puerta, el ahorro frente a un vuelo comercial es de 2 a 3 horas por trayecto.",
      },
      {
        q: "¿Puedo ir y regresar el mismo día?",
        a: "Sí, es el uso más común de esta ruta. La aeronave espera en Guadalajara y regresa cuando usted termine. Cotizamos el día completo con espera incluida para que compare contra dos vuelos sencillos.",
      },
      {
        q: "¿Qué aeronaves operan la ruta Toluca–Guadalajara?",
        a: "Turbohélices como el Piper M500 para grupos pequeños, y jets ligeros y medianos como Learjet 35 y Learjet 45 para grupos de hasta 9 pasajeros o agendas que exigen máxima velocidad.",
      },
      {
        q: "¿Hay empty legs entre CDMX y Guadalajara?",
        a: "Sí, es un corredor con flujo frecuente de reposicionamientos en ambos sentidos. Con flexibilidad de fechas se puede acceder a descuentos importantes sobre la tarifa regular.",
      },
      {
        q: "¿Desde dónde salen los vuelos privados a Guadalajara?",
        a: "Desde el Aeropuerto Internacional de Toluca (MMTO), el principal hub de aviación ejecutiva del Valle de México, a unos 40 minutos de Santa Fe, Polanco e Interlomas.",
      },
    ],
  },
  "toluca-puerto-vallarta": {
    slug: "toluca-puerto-vallarta",
    title: "Renta de Jet Privado Toluca–Puerto Vallarta | Numen Aviation",
    description:
      "Renta de jet privado de Toluca (MMTO) a Puerto Vallarta (MMPR) en ~1h 05m. Learjet 35 y Hawker 800, empty legs y cotización en menos de 2 horas. 24/7.",
    tagline: "Toluca · Puerto Vallarta",
    heroFromCity: "Toluca",
    heroToCity: "Puerto Vallarta",
    heroSubtitle:
      "La bahía de Banderas a una hora de la pista. Despega de Toluca (MMTO) después del desayuno y come frente al mar — sin escalas, sin filas, con tu agenda intacta.",
    waMessage: "Hola, quisiera cotizar un vuelo privado de Toluca a Puerto Vallarta.",
    stats: {
      distance: "≈ 620 km",
      time: "1h 05m",
      price: "Desde $7,450",
      aircraft: "Light / Midsize",
    },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Lic. Gustavo Díaz Ordaz (MMPR) — Puerto Vallarta, terminal de aviación general",
    },
    aircraft: [
      {
        category: "Jet Ligero",
        name: "Learjet 35",
        pax: "6–7",
        range: "3,800 km",
        note: "Desde $7,450 USD + IVA (one-way). La opción más recurrente: rápido, eficiente y con espacio para equipaje de playa.",
      },
      {
        category: "Jet Mediano",
        name: "Hawker 800",
        pax: "8",
        range: "4,600 km",
        note: "Desde $9,650 USD + IVA (one-way). Cabina de pie y bodega generosa: ideal para familias y fines de semana largos.",
      },
    ],
    why: [
      {
        num: "01",
        title: "Una hora al Pacífico",
        desc: "Frente a las 8+ horas de carretera o un vuelo comercial con anticipación y filas. Sales después del desayuno y comes frente a la bahía.",
      },
      {
        num: "02",
        title: "Puerta de entrada a Punta Mita y Riviera Nayarit",
        desc: "Del FBO a Punta Mita, Sayulita o la Marina en transporte coordinado por nosotros. Llegada directa a villa, hotel o yate.",
      },
      {
        num: "03",
        title: "Pernocta para fines de semana",
        desc: "En estancias de 1 a 3 días suele convenir que la aeronave pernocte. Cotizamos ambos escenarios para que elija el más eficiente.",
      },
      {
        num: "04",
        title: "Empty legs en temporada",
        desc: "Vallarta genera reposicionamientos constantes, sobre todo en invierno y vacaciones. Con fechas flexibles, los descuentos son importantes.",
      },
    ],
    ctaCity: "Puerto Vallarta",
    sections: [
      {
        heading: "El acceso directo a la bahía de Banderas",
        body:
          "Puerto Vallarta y la Riviera Nayarit concentran algunas de las propiedades de descanso más importantes del país: Punta Mita, Conchas Chinas, la Marina y los desarrollos de la costa nayarita. En jet privado, el trayecto desde Toluca (MMTO) toma alrededor de 1 hora 5 minutos en el aire — el tiempo justo de un café — frente a un día completo de carretera o las 4 horas reales de un vuelo comercial puerta a puerta.\n\nLa mayoría de nuestros clientes en esta ruta vuela en familia o con invitados: el vuelo privado permite llevar equipaje sin restricciones, mascotas en cabina y horarios que se acomodan a la casa, no a la aerolínea.",
      },
      {
        heading: "De la pista a Punta Mita sin fricciones",
        body:
          "Su vuelo aterriza en el Aeropuerto Internacional Lic. Gustavo Díaz Ordaz (MMPR / PVR), en la zona de aviación general, a minutos de la Marina y la zona hotelera. Desde ahí coordinamos el transporte terrestre a Punta Mita (45 minutos), Sayulita o su villa como parte del servicio, o el traslado directo a su yate en la Marina. El desembarque toma minutos: sin bandas de equipaje, sin filas de taxi.",
      },
      {
        heading: "¿Viaje redondo o pernocta de la aeronave?",
        body:
          "Como en todas las rutas cortas de playa, en estancias de 1 a 3 días frecuentemente conviene que la aeronave pernocte en Vallarta con usted en lugar de regresar vacía y volver a recogerlo. Cada noche tiene un costo adicional, pero en fines de semana cortos suele resultar la opción más eficiente. En su cotización comparamos ambos escenarios con desglose transparente.",
      },
      {
        heading: "Temporada alta: reserve con anticipación",
        body:
          "De noviembre a abril —y especialmente en puentes, Navidad y Semana Santa— la demanda de aviación privada hacia Vallarta y Punta Mita se multiplica. Aseguramos aeronave y slots con semanas de anticipación para fechas pico, y publicamos los empty legs que genera el flujo constante de la temporada. Si sus fechas son flexibles, pregunte por la disponibilidad vigente.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de Toluca a Puerto Vallarta?",
        a: "Un viaje sencillo en Learjet 35 (hasta 6–7 pasajeros) comienza desde 7,450 USD + IVA, y en Hawker 800 (hasta 8 pasajeros) desde 9,650 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Puerto Vallarta en jet privado?",
        a: "Alrededor de 1 hora 5 minutos en el aire. Puerta a puerta, desde Santa Fe o Polanco hasta su villa en la bahía, el trayecto completo ronda las 2.5 horas.",
      },
      {
        q: "¿Puedo llegar directo a Punta Mita o la Riviera Nayarit?",
        a: "El vuelo aterriza en Puerto Vallarta (MMPR) y coordinamos el transporte terrestre a Punta Mita (~45 min), Sayulita o cualquier punto de la Riviera Nayarit como parte del servicio.",
      },
      {
        q: "¿Puedo viajar con mascotas y equipaje de playa?",
        a: "Sí. En vuelo privado las mascotas viajan en cabina y el equipaje —palos de golf, equipo de pesca, sombrillas— no tiene las restricciones de una aerolínea comercial.",
      },
      {
        q: "¿Hay empty legs a Puerto Vallarta?",
        a: "Sí, especialmente en temporada alta (noviembre a abril). Con flexibilidad de fechas se puede acceder a descuentos importantes sobre la tarifa regular de charter.",
      },
      {
        q: "¿Desde dónde salen los vuelos privados a Puerto Vallarta?",
        a: "Desde el Aeropuerto Internacional de Toluca (MMTO), el principal hub de aviación ejecutiva del Valle de México, a unos 40 minutos de Santa Fe, Polanco e Interlomas.",
      },
    ],
  },
  "toluca-houston": {
    slug: "toluca-houston",
    title: "Renta de Jet Privado Toluca–Houston | Numen Aviation",
    description:
      "Renta de jet privado de Toluca (MMTO) a Houston (KHOU) en ~2h 10m. Manejo internacional completo, jets ligeros y medianos. Desde $16,500 USD. 24/7.",
    tagline: "Toluca · Houston",
    heroFromCity: "Toluca",
    heroToCity: "Houston",
    heroSubtitle:
      "Negocios, medicina y compras en 2 horas 10 minutos. Manejo internacional completo desde Toluca (MMTO): salida AFAC, llegada CBP, sin terminales comerciales ni conexiones.",
    waMessage: "Hola, quisiera cotizar un vuelo privado de Toluca a Houston.",
    stats: {
      distance: "≈ 1,220 km",
      time: "2h 10m",
      price: "Desde $16,500",
      aircraft: "Light / Midsize",
    },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "William P. Hobby (KHOU) — Houston, FBO ejecutivo con CBP en sitio",
    },
    aircraft: [
      {
        category: "Jet Ligero",
        name: "Learjet 35",
        pax: "6–7",
        range: "3,800 km",
        note: "Desde $16,500 USD + IVA (one-way). La opción más económica para esta ruta internacional con margen de alcance holgado.",
      },
      {
        category: "Jet Mediano",
        name: "Hawker 800A",
        pax: "8–9",
        range: "4,600 km",
        note: "Desde $19,800 USD + IVA (one-way). Cabina de pie y galera completa: el estándar del corredor México–Texas.",
      },
      {
        category: "Jet Pesado",
        name: "Challenger 601",
        pax: "10–12",
        range: "6,300 km",
        note: "Desde $26,500 USD + IVA (one-way). Para equipos directivos completos o familias con agenda médica.",
      },
    ],
    why: [
      {
        num: "01",
        title: "Cumplimiento internacional integral",
        desc: "Plan de vuelo AFAC, eAPIS, despacho CBP a la llegada y coordinación FBO en ambos lados. Usted solo presenta su pasaporte.",
      },
      {
        num: "02",
        title: "Hobby (KHOU), no IAH",
        desc: "Los FBO de Hobby están a 20–25 minutos del Texas Medical Center, downtown y el Galleria. IAH agrega 45 minutos de tráfico.",
      },
      {
        num: "03",
        title: "La ruta médica de referencia",
        desc: "MD Anderson, Houston Methodist y el Texas Medical Center. Coordinamos llegadas con transporte directo y discreción absoluta.",
      },
      {
        num: "04",
        title: "Ida y vuelta en un día",
        desc: "Despega 07:00, junta o consulta a mediodía, de regreso en CDMX para la cena. Sin conexiones ni noches fuera.",
      },
    ],
    ctaCity: "Houston",
    sections: [
      {
        heading: "El puente ejecutivo México–Texas",
        body:
          "Houston es el destino internacional más frecuente de la aviación ejecutiva mexicana: energía, banca, medicina y comercio mueven vuelos todos los días de la semana. En jet privado, el trayecto desde Toluca (MMTO) toma alrededor de 2 horas 10 minutos sin escalas, frente a las 5–6 horas reales de un vuelo comercial puerta a puerta entre anticipación internacional, migración y filas.\n\nNuestro servicio incluye el manejo internacional completo: plan de vuelo y salida AFAC en Toluca, eAPIS y manifiestos para CBP, y despacho migratorio a la llegada directamente en el FBO — sin pisar una terminal comercial en ningún momento.",
      },
      {
        heading: "Hobby (KHOU): la llegada correcta en Houston",
        body:
          "Recomendamos William P. Hobby (KHOU) sobre el aeropuerto intercontinental (KIAH) para casi todas las misiones: sus FBO ejecutivos cuentan con CBP en sitio para despacho internacional en minutos, y está a 20–25 minutos del Texas Medical Center, downtown y la zona del Galleria. Coordinamos su transporte terrestre directo a la plataforma para que el tiempo en tierra sea mínimo.",
      },
      {
        heading: "Vuelos médicos: discreción y logística",
        body:
          "Una parte importante de nuestros vuelos a Houston tiene motivo médico: tratamientos y consultas en MD Anderson, Houston Methodist o el Texas Medical Center. Coordinamos horarios alrededor de las citas, transporte terrestre directo, equipaje médico y acompañantes, con total discreción. Si el paciente requiere asistencia especializada a bordo, nuestra división de ambulancia aérea ofrece aeronaves con equipamiento médico y personal de vuelo certificado.",
      },
      {
        heading: "Documentación para volar a Estados Unidos",
        body:
          "Para vuelos privados a EUA cada pasajero requiere pasaporte vigente y visa americana (o ESTA según nacionalidad). Nosotros transmitimos el manifiesto eAPIS a CBP, gestionamos el permiso de sobrevuelo y aterrizaje, y verificamos la documentación antes del despegue para que no haya sorpresas. El despacho migratorio a la llegada se realiza en el propio FBO en cuestión de minutos.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de Toluca a Houston?",
        a: "Un viaje sencillo en Learjet 35 (hasta 6–7 pasajeros) comienza desde 16,500 USD + IVA; en Hawker 800A (hasta 9 pasajeros) desde 19,800 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Houston en jet privado?",
        a: "Alrededor de 2 horas 10 minutos sin escalas. Puerta a puerta, el ahorro frente a un vuelo comercial internacional es de 3 a 4 horas por trayecto.",
      },
      {
        q: "¿Qué documentos necesito para volar en privado a Houston?",
        a: "Pasaporte vigente y visa americana (o ESTA según su nacionalidad). Nosotros gestionamos eAPIS, permisos de sobrevuelo y la coordinación CBP; usted solo presenta su documentación al abordar.",
      },
      {
        q: "¿En qué aeropuerto de Houston aterriza el vuelo?",
        a: "Recomendamos William P. Hobby (KHOU), cuyos FBO tienen despacho CBP en sitio y están a 20–25 minutos del Texas Medical Center, downtown y el Galleria. KIAH está disponible si su agenda lo requiere.",
      },
      {
        q: "¿Manejan vuelos por motivos médicos a Houston?",
        a: "Sí, es una de nuestras especialidades: coordinamos horarios alrededor de citas en MD Anderson o Houston Methodist, transporte directo y acompañantes. Para pacientes que requieren asistencia a bordo ofrecemos ambulancia aérea dedicada.",
      },
      {
        q: "¿Puedo ir y regresar el mismo día?",
        a: "Sí. Con despegue a las 07:00 puede tener 4–5 horas en Houston y estar de regreso en el Valle de México la misma noche. La aeronave espera en el FBO durante su agenda.",
      },
    ],
  },
  "toluca-punta-cana": {
    slug: "toluca-punta-cana",
    title: "Renta de Jet Privado Toluca–Punta Cana | Numen Aviation",
    description:
      "Renta de jet privado de Toluca (MMTO) a Punta Cana (MDPC) en ~4 horas. Jets medianos y pesados, manejo internacional completo. Desde $42,000 USD. 24/7.",
    tagline: "Toluca · Punta Cana",
    heroFromCity: "Toluca",
    heroToCity: "Punta Cana",
    heroSubtitle:
      "El Caribe oriental sin escalas. De Toluca (MMTO) a la arena de Punta Cana en ~4 horas, con manejo internacional completo y llegada directa a la terminal ejecutiva.",
    waMessage: "Hola, quisiera cotizar un vuelo privado de Toluca a Punta Cana.",
    stats: {
      distance: "≈ 3,300 km",
      time: "4h 00m",
      price: "Desde $42,000",
      aircraft: "Midsize / Heavy",
    },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Punta Cana International (MDPC) — Terminal FBO ejecutiva",
    },
    aircraft: [
      {
        category: "Jet Mediano",
        name: "Hawker 800A",
        pax: "8",
        range: "4,600 km",
        note: "Desde $42,000 USD + IVA (one-way). La opción más eficiente para grupos de hasta 8 con margen de alcance adecuado.",
      },
      {
        category: "Jet Pesado",
        name: "Challenger 601",
        pax: "10–12",
        range: "6,300 km",
        note: "Desde $48,500 USD + IVA (one-way). Cabina ancha y alcance sobrado: el equilibrio ideal en esta ruta sobre el Caribe.",
      },
      {
        category: "Jet Pesado",
        name: "Gulfstream G450",
        pax: "12–14",
        range: "7,800 km",
        note: "Desde $55,000 USD + IVA (one-way). Ultra-premium para grupos grandes, con espacio para descansar en vuelo.",
      },
    ],
    why: [
      {
        num: "01",
        title: "Sin escalas ni conexiones por Panamá o Miami",
        desc: "Comercialmente, Punta Cana desde CDMX casi siempre implica conexión. En privado son 4 horas directas de pista a pista.",
      },
      {
        num: "02",
        title: "Manejo internacional integral",
        desc: "Salida AFAC, permisos de sobrevuelo, migración dominicana a la llegada y coordinación FBO completa. Usted solo aborda.",
      },
      {
        num: "03",
        title: "Grupos, bodas y golf",
        desc: "Cap Cana, Casa de Campo y los resorts de la costa este. Coordinamos equipaje voluminoso, palos de golf y catering a bordo.",
      },
      {
        num: "04",
        title: "Llegada a terminal ejecutiva",
        desc: "MDPC cuenta con FBO dedicado: migración privada en minutos y transporte directo a su resort o villa.",
      },
    ],
    ctaCity: "Punta Cana",
    sections: [
      {
        heading: "El Caribe oriental, directo desde el Valle de México",
        body:
          "Punta Cana, Cap Cana y Casa de Campo se han consolidado como los destinos caribeños preferidos para bodas, golf y escapadas de lujo. El problema es llegar: comercialmente desde Ciudad de México casi siempre implica conexión en Panamá, Miami o Bogotá, convirtiendo el viaje en un día completo. En jet privado, el vuelo desde Toluca (MMTO) es directo: alrededor de 4 horas de pista a pista, con su grupo completo, su equipaje sin restricciones y su horario.\n\nEs la ruta favorita para eventos: despedidas, aniversarios y torneos de golf donde el grupo viaja junto y la experiencia empieza desde el abordaje.",
      },
      {
        heading: "Qué aeronave conviene para cruzar el Caribe",
        body:
          "Para un vuelo de ~3,300 km sobre agua recomendamos jets medianos con alcance holgado o jets pesados. El Hawker 800A cubre la misión con eficiencia para grupos de hasta 8; el Challenger 601 y el Gulfstream G450 agregan cabina ancha, mayor velocidad de crucero y espacio para descansar en vuelo — diferencia que se agradece en 4 horas de trayecto. En su cotización comparamos las opciones disponibles con desglose completo.",
      },
      {
        heading: "Llegada en Punta Cana (MDPC): terminal ejecutiva",
        body:
          "El Aeropuerto Internacional de Punta Cana (MDPC / PUJ) cuenta con terminal FBO dedicada para aviación privada: migración y aduana dominicana en minutos, salas privadas y acceso directo del transporte terrestre a la plataforma. Desde ahí, su traslado a Cap Cana toma 15 minutos y a los resorts de la costa este entre 10 y 30 minutos — todo coordinado por nosotros como parte del servicio.",
      },
      {
        heading: "Documentación y permisos para República Dominicana",
        body:
          "Para vuelos privados a República Dominicana cada pasajero requiere pasaporte vigente; los ciudadanos mexicanos no requieren visa para estancias turísticas. Nosotros gestionamos los permisos de sobrevuelo y aterrizaje internacionales, el plan de vuelo AFAC de salida y la coordinación con el FBO de destino, verificando toda la documentación antes del despegue.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta rentar un jet privado de Toluca a Punta Cana?",
        a: "Un viaje sencillo en Hawker 800A (hasta 8 pasajeros) comienza desde 42,000 USD + IVA; en Challenger 601 (hasta 12 pasajeros) desde 48,500 USD + IVA. Son precios estimados sujetos a disponibilidad; entregamos cotización con desglose completo en menos de 2 horas.",
      },
      {
        q: "¿Cuánto dura el vuelo de Toluca a Punta Cana en jet privado?",
        a: "Alrededor de 4 horas sin escalas, frente a las 8–10 horas reales que implica un itinerario comercial con conexión en Panamá o Miami.",
      },
      {
        q: "¿Necesito visa para volar a Punta Cana?",
        a: "Los ciudadanos mexicanos no requieren visa para turismo en República Dominicana, solo pasaporte vigente. Para otras nacionalidades verificamos los requisitos como parte del servicio.",
      },
      {
        q: "¿Qué aeronaves operan la ruta Toluca–Punta Cana?",
        a: "Jets medianos con alcance holgado como el Hawker 800A y jets pesados como Challenger 601 y Gulfstream G450, que agregan cabina ancha y comodidad para las 4 horas de vuelo.",
      },
      {
        q: "¿Pueden llevar a un grupo grande para una boda o evento?",
        a: "Sí. Para grupos que exceden la capacidad de una aeronave coordinamos vuelos en formación de dos jets o aeronaves de mayor capacidad. También gestionamos catering, equipaje voluminoso y palos de golf.",
      },
      {
        q: "¿Desde dónde salen los vuelos privados a Punta Cana?",
        a: "Desde el Aeropuerto Internacional de Toluca (MMTO), el principal hub de aviación ejecutiva del Valle de México, con manejo internacional completo: AFAC, permisos de sobrevuelo y coordinación FBO en destino.",
      },
    ],
  },
};

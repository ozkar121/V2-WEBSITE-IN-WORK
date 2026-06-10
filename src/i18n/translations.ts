// Centralized translations ES/EN. Add keys here as needed.
export type Lang = "es" | "en";

export const TRANSLATIONS = {
  // Navbar
  nav_services: { es: "Servicios Especializados", en: "Specialized Services" },
  nav_fleet: { es: "Flota", en: "Fleet" },
  nav_empty_legs: { es: "Empty Legs", en: "Empty Legs" },
  nav_cargo: { es: "Carga Aérea", en: "Air Cargo" },
  nav_svc_ambulance: { es: "Ambulancias Aéreas", en: "Air Ambulance" },
  nav_svc_groups: { es: "Charters para Grupos Grandes", en: "Large Group Charters" },
  nav_about: { es: "Nosotros", en: "About" },
  nav_contact: { es: "Contacto", en: "Contact" },
  nav_routes: { es: "Rutas", en: "Routes" },
  nav_briefing: { es: "Briefing", en: "Briefing" },
  nav_request_flight: { es: "Solicitar Vuelo", en: "Request a Flight" },
  nav_call: { es: "Llamar", en: "Call" },

  // Footer
  footer_description: {
    es: "Renta de jet privado y aviación ejecutiva con base en el Aeropuerto Internacional de Toluca (MMTO). Charter bajo demanda, empty legs, consultoría y adquisición de aeronaves para México, Estados Unidos, el Caribe y Centroamérica. Cotización en menos de 2 horas, operación 24/7.",
    en: "Private jet charter and executive aviation based at Toluca International Airport (MMTO). On-demand charter, empty legs, consulting, and aircraft acquisition across Mexico, the United States, the Caribbean, and Central America. Quotes in under 2 hours, 24/7 operations.",
  },
  footer_aviation_center: { es: "Centro de Aviación", en: "Aviation Hub" },
  footer_aviation_center_l1: { es: "Aeropuerto Intl. de Toluca", en: "Toluca Intl. Airport" },
  footer_aviation_center_l2: { es: "MMTO · Toluca de Lerdo,", en: "MMTO · Toluca de Lerdo," },
  footer_aviation_center_l3: { es: "EDOMEX, México", en: "EDOMEX, Mexico" },

  footer_offices_mx: { es: "Oficinas México", en: "Mexico Office" },
  footer_offices_mx_l1: { es: "Bosques de la Reforma 1813,", en: "Bosques de la Reforma 1813," },
  footer_offices_mx_l2: { es: "Lomas del Chamizal, Cuajimalpa,", en: "Lomas del Chamizal, Cuajimalpa," },
  footer_offices_mx_l3: { es: "05100 Ciudad de México, CDMX", en: "05100 Mexico City, CDMX" },

  footer_offices_us: { es: "Oficinas EE.UU.", en: "U.S. Office" },
  footer_offices_us_l1: { es: "17350 State Hwy 249,", en: "17350 State Hwy 249," },
  footer_offices_us_l2: { es: "Ste 220 #35286,", en: "Ste 220 #35286," },
  footer_offices_us_l3: { es: "Houston, TX 77064, EUA", en: "Houston, TX 77064, USA" },
  footer_offices_us_phone: { es: "+1 737 372 4548", en: "+1 737 372 4548" },
  footer_contact: { es: "Contacto", en: "Contact" },
  footer_rights: {
    es: "Numen Aviation. Todos los derechos reservados.",
    en: "Numen Aviation. All rights reserved.",
  },
  footer_hub: { es: "MMTO — Toluca, México", en: "MMTO — Toluca, Mexico" },

  // Hero (Home)
  hero_badge: {
    es: "Renta de Jet Privado · Toluca · México · Las Américas",
    en: "Private Jet Charter · Toluca · Mexico · The Americas",
  },
  hero_title_pre: {
    es: "Renta de Jet Privado en Toluca, México",
    en: "Private Jet Charter in Toluca, Mexico",
  },
  hero_title_a: { es: "Beyond", en: "Beyond" },
  hero_title_em: { es: "First", en: "First" },
  hero_title_b: { es: "Class.", en: "Class." },
  hero_subtitle: {
    es: "Renta de jet privado, charter bajo demanda, empty legs y adquisición de aeronaves desde el Aeropuerto de Toluca (MMTO). Tu agenda, tus estándares, tu destino.",
    en: "Private jet charter, on-demand flights, empty legs, and aircraft acquisition from Toluca Airport (MMTO). Your schedule, your standards, your destination.",
  },
  hero_cta_quote: { es: "Solicitar Cotización", en: "Request a Quote" },
  hero_cta_fleet: { es: "Ver Nuestra Flota", en: "View Our Fleet" },

  // Services section
  services_eyebrow: { es: "Lo Que Ofrecemos", en: "What We Offer" },
  services_title_a: { es: "Renta de jet privado", en: "Private jet charter" },
  services_title_b: { es: "y aviación ejecutiva,", en: "and executive aviation," },
  services_title_em: { es: "sin fricciones.", en: "without friction." },

  service_01_name: { es: "Charter Bajo Demanda", en: "On-Demand Charter" },
  service_01_desc: {
    es: "Renta de jet privado y turbohélices desde Toluca (MMTO) y cualquier aeropuerto de México. Despegue en horas — no en días — hacia EUA, el Caribe y Centroamérica.",
    en: "Private jet and turboprop charter from Toluca (MMTO) and any Mexican airport. Takeoff in hours — not days — to the U.S., the Caribbean, and Central America.",
  },
  service_02_name: { es: "Empty Legs / Trayectos Vacíos", en: "Empty Legs / Repositioning Flights" },
  service_02_desc: {
    es: "Vuelos de reposicionamiento en jet privado con descuentos de hasta 75%. Disponibilidad real, actualizada al día, en rutas mexicanas e internacionales.",
    en: "Private jet repositioning flights with discounts up to 75%. Real, daily-updated availability across Mexican and international routes.",
  },
  service_03_name: { es: "Consultoría en Aviación Ejecutiva", en: "Executive Aviation Consulting" },
  service_03_desc: {
    es: "Asesoría estratégica para operadores, family offices e inversionistas: planificación de flota, cumplimiento ante AFAC y optimización de costos operativos.",
    en: "Strategic advisory for operators, family offices, and investors: fleet planning, AFAC compliance, and operating-cost optimization.",
  },
  service_04_name: { es: "Adquisición y Brokerage de Aeronaves", en: "Aircraft Acquisition & Brokerage" },
  service_04_desc: {
    es: "Compra, venta y valuación de jets ejecutivos. Inspecciones pre-compra, análisis de mercado y acompañamiento integral en la transacción.",
    en: "Buy, sell, and value executive jets. Pre-purchase inspections, market analysis, and end-to-end transaction support.",
  },

  // Stats
  stat_24_7: { es: "Operación Continua", en: "Continuous Operation" },
  stat_2h: { es: "Cotización Promedio", en: "Average Quote Time" },
  stat_routes: { es: "Rutas Operadas", en: "Routes Operated" },
  stat_safety: { es: "Récord de Seguridad", en: "Safety Record" },

  // Fleet
  fleet_eyebrow: { es: "Nuestra Flota", en: "Our Fleet" },
  fleet_title_a: { es: "Aeronaves para cada", en: "Aircraft for every" },
  fleet_title_em: { es: "misión.", en: "mission." },
  fleet_manage: { es: "Gestionar flota →", en: "Manage fleet →" },
  fleet_no_photo: { es: "Foto próximamente", en: "Photo coming soon" },
  fleet_pax: { es: "Pax", en: "Pax" },
  fleet_speed: { es: "Velocidad", en: "Speed" },
  fleet_range: { es: "Alcance", en: "Range" },
  fleet_empty: { es: "Sin aeronaves en esta categoría", en: "No aircraft in this category" },
  cat_turbo: { es: "Turbohélice", en: "Turboprop" },
  cat_light: { es: "Light Jet", en: "Light Jet" },
  cat_midsize: { es: "Midsize Jet", en: "Midsize Jet" },
  cat_heavy: { es: "Heavy Jet", en: "Heavy Jet" },
  cat_helicopter: { es: "Helicóptero", en: "Helicopter" },

  // Why Numen
  why_eyebrow: { es: "Por Qué Numen", en: "Why Numen" },
  why_title_a: { es: "El estándar de la", en: "The standard for" },
  why_title_b: { es: "aviación privada en", en: "private aviation in" },
  why_title_em: { es: "México.", en: "Mexico." },
  why_intro: {
    es: "Numen Aviation fue construida por operadores, no por vendedores. Conocemos cada detalle de la renta de jet privado en México — desde la coordinación FBO en Toluca hasta el cumplimiento ante AFAC — porque lo hemos hecho miles de veces.",
    en: "Numen Aviation was built by operators, not salespeople. We know every detail of private jet charter in Mexico — from FBO coordination in Toluca to AFAC compliance — because we've done it thousands of times.",
  },
  why_01_t: { es: "Correduría Independiente", en: "Independent Brokerage" },
  why_01_d: {
    es: "Sin flota propia, sin sesgos. Comparamos operadores certificados en México y Las Américas para conseguirte la mejor aeronave al mejor precio.",
    en: "No owned fleet, no bias. We compare certified operators across Mexico and the Americas to get you the best aircraft at the best price.",
  },
  why_02_t: { es: "Precios Transparentes", en: "Transparent Pricing" },
  why_02_d: {
    es: "Cotización con desglose completo: ferry, handling, IVA y servicios FBO incluidos. Sin sorpresas al cierre.",
    en: "Full-breakdown quote: ferry, handling, VAT, and FBO services included. No surprises at closing.",
  },
  why_03_t: { es: "Expertise México-First", en: "Mexico-First Expertise" },
  why_03_d: {
    es: "Conocimiento profundo del Aeropuerto de Toluca (MMTO), regulación AFAC, espacio aéreo mexicano y relaciones directas con operadores nacionales.",
    en: "Deep knowledge of Toluca Airport (MMTO), AFAC regulation, Mexican airspace, and direct relationships with domestic operators.",
  },
  why_04_t: { es: "Un Solo Punto de Contacto", en: "One Single Point of Contact" },
  why_04_d: {
    es: "Tu asesor dedicado de aviación privada coordina de la cotización al aterrizaje. Sin call centers ni intermediarios.",
    en: "Your dedicated private aviation advisor coordinates from quote to landing. No call centers, no middlemen.",
  },
  why_hub: { es: "Hub Principal · MMTO", en: "Main Hub · MMTO" },

  // CTA band
  cta_band_title_a: { es: "¿Listo para volar?", en: "Ready to fly?" },
  cta_band_title_em: { es: "Cotiza tu jet privado.", en: "Quote your private jet." },
  cta_band_sub: {
    es: "Empty legs, charter bajo demanda y aviación ejecutiva desde Toluca. Respuesta en menos de 2 horas, 24/7.",
    en: "Empty legs, on-demand charter, and executive aviation from Toluca. Reply in under 2 hours, 24/7.",
  },
  cta_whatsapp: { es: "WhatsApp", en: "WhatsApp" },
  cta_send_request: { es: "Enviar Solicitud", en: "Send Request" },

  // Contact
  contact_eyebrow: { es: "Contáctanos", en: "Contact Us" },
  contact_title_a: { es: "Solicita una", en: "Request a" },
  contact_title_em: { es: "cotización.", en: "quote." },
  contact_lbl_whatsapp: { es: "WhatsApp", en: "WhatsApp" },
  contact_lbl_email: { es: "Email", en: "Email" },
  contact_lbl_hub: { es: "Hub Principal", en: "Main Hub" },
  contact_val_hub: {
    es: "Aeropuerto Internacional de Toluca (MMTO)",
    en: "Toluca International Airport (MMTO)",
  },
  contact_lbl_avail: { es: "Disponibilidad", en: "Availability" },
  contact_val_avail: { es: "24 horas · 7 días a la semana", en: "24 hours · 7 days a week" },
  contact_lbl_area: { es: "Área de Servicio", en: "Service Area" },
  contact_val_area: {
    es: "México · EUA · Caribe · Centroamérica",
    en: "Mexico · USA · Caribbean · Central America",
  },

  // Quotation form
  qf_eyebrow: { es: "Cotización privada", en: "Private quote" },
  qf_title: { es: "Cuéntanos sobre tu vuelo.", en: "Tell us about your flight." },
  qf_name: { es: "Nombre", en: "Name" },
  qf_email: { es: "Email", en: "Email" },
  qf_phone: { es: "Teléfono", en: "Phone" },
  qf_from: { es: "Origen", en: "From" },
  qf_to: { es: "Destino", en: "To" },
  qf_trip: { es: "Tipo de viaje", en: "Trip type" },
  qf_one_way: { es: "Solo ida", en: "One way" },
  qf_round: { es: "Redondo", en: "Round trip" },
  qf_pax: { es: "Pasajeros", en: "Passengers" },
  qf_departure: { es: "Salida", en: "Departure" },
  qf_return: { es: "Regreso", en: "Return" },
  qf_message: { es: "Mensaje", en: "Message" },
  qf_message_ph: {
    es: "Catering, equipaje especial, requerimientos...",
    en: "Catering, special baggage, requirements...",
  },
  qf_submit: { es: "Solicitar cotización →", en: "Request quote →" },
  qf_submitting: { es: "Enviando...", en: "Sending..." },
  qf_disclaimer: {
    es: "Te respondemos en menos de 2 horas. Tus datos solo se usan para esta cotización.",
    en: "We reply in under 2 hours. Your data is used only for this quote.",
  },
  qf_success_eyebrow: { es: "Solicitud recibida", en: "Request received" },
  qf_success_title: {
    es: "Gracias, tu solicitud está en revisión.",
    en: "Thank you — your request is under review.",
  },
  qf_success_body: {
    es: "Nuestro equipo de operaciones se pondrá en contacto contigo en menos de 2 horas. Te enviamos una confirmación a tu correo con el resumen de la solicitud.",
    en: "Our operations team will contact you in under 2 hours. We've sent a confirmation to your email with the request summary.",
  },
  qf_send_another: { es: "Enviar otra solicitud →", en: "Send another request →" },
  qf_error_title: {
    es: "No pudimos enviar tu solicitud",
    en: "We couldn't submit your request",
  },
  qf_error_body: {
    es: "Por favor inténtalo de nuevo o escríbenos por WhatsApp.",
    en: "Please try again or message us on WhatsApp.",
  },

  // Marquee
  marquee_charter: { es: "Charter Bajo Demanda", en: "On-Demand Charter" },
  marquee_rental: { es: "Renta de Jet Privado", en: "Private Jet Charter" },
  marquee_empty: { es: "Empty Legs", en: "Empty Legs" },
  marquee_exec: { es: "Aviación Ejecutiva", en: "Executive Aviation" },
  marquee_acq: { es: "Adquisición de Aeronaves", en: "Aircraft Acquisition" },
  marquee_24: { es: "Servicio 24/7", en: "24/7 Service" },
  marquee_geo: { es: "Toluca · México · EUA · Caribe", en: "Toluca · Mexico · USA · Caribbean" },

  // Language switcher
  lang_label: { es: "Idioma", en: "Language" },

  // Common
  common_home: { es: "Inicio", en: "Home" },
  common_back_home: { es: "Volver al inicio", en: "Back to home" },
  common_send_request: { es: "Enviar Solicitud", en: "Send Request" },
  common_send_form: { es: "Enviar Formulario", en: "Send Form" },
  common_whatsapp_now: { es: "WhatsApp Ahora", en: "WhatsApp Now" },
  common_quote_now: { es: "Cotizar Ahora", en: "Quote Now" },
  common_whatsapp_quote: { es: "Cotizar por WhatsApp", en: "Quote via WhatsApp" },
  common_call: { es: "Llamar", en: "Call" },

  // Empty Legs page
  el_breadcrumb: { es: "Empty Legs", en: "Empty Legs" },
  el_eyebrow: { es: "Exclusivo · Disponibilidad Limitada", en: "Exclusive · Limited Availability" },
  el_hero_title_a: { es: "Vuela", en: "Fly" },
  el_hero_title_em: { es: "más", en: "more" },
  el_hero_title_b: { es: "por menos.", en: "for less." },
  el_hero_intro: {
    es: "Los vuelos empty leg son tramos de reposicionamiento disponibles hasta <strong>75% por debajo</strong> del precio completo. Misma aeronave, mismo servicio, una fracción del costo.",
    en: "Empty leg flights are repositioning legs available at up to <strong>75% below</strong> the full price. Same aircraft, same service, a fraction of the cost.",
  },
  el_cta_view: { es: "Ver disponibles", en: "View available" },
  el_cta_wa_msg: {
    es: "Hola, quisiera info sobre empty legs disponibles.",
    en: "Hi, I'd like information about available empty legs.",
  },
  el_stat_savings: { es: "Ahorro Promedio", en: "Average Savings" },
  el_stat_confirm: { es: "Confirmación", en: "Confirmation" },
  el_stat_routes: { es: "Rutas Activas", en: "Active Routes" },
  el_stat_certified: { es: "Operadores Certificados", en: "Certified Operators" },
  el_filter_all: { es: "Todas", en: "All" },
  el_avail_eyebrow: { es: "Disponibilidad Actual", en: "Current Availability" },
  el_avail_title_a: { es: "Vuelos", en: "Flights" },
  el_avail_title_em: { es: "disponibles.", en: "available." },
  el_count_one: { es: "tramo", en: "leg" },
  el_count_many: { es: "tramos", en: "legs" },
  el_badge_featured: { es: "Destacado", en: "Featured" },
  el_badge_new: { es: "Nuevo", en: "New" },
  el_lbl_date: { es: "Fecha", en: "Date" },
  el_lbl_seats: { es: "Asientos", en: "Seats" },
  el_lbl_aircraft: { es: "Aeronave", en: "Aircraft" },
  el_lbl_from_price: { es: "Desde", en: "From" },
  el_quote_word: { es: "Cotizar", en: "Quote" },
  el_book_leg: { es: "Reservar este tramo", en: "Book this leg" },
  el_book_wa_msg: {
    es: "Hola, me interesa el empty leg",
    en: "Hi, I'm interested in the empty leg",
  },
  el_book_wa_on: { es: "del", en: "on" },
  el_no_legs: {
    es: "No hay tramos disponibles en esta categoría. Escríbenos por WhatsApp para ver opciones.",
    en: "No legs available in this category. Message us on WhatsApp for options.",
  },
  el_loading: { es: "Cargando disponibilidad...", en: "Loading availability..." },
  el_how_eyebrow: { es: "Cómo Funciona", en: "How It Works" },
  el_how_title_a: { es: "Tres pasos para", en: "Three steps to" },
  el_how_title_em: { es: "volar.", en: "fly." },
  el_step1_t: { es: "Consulta disponibilidad", en: "Check availability" },
  el_step1_d: {
    es: "Revisa los empty legs publicados o pídenos rutas específicas. Actualizamos diariamente con nuevos tramos disponibles.",
    en: "Browse the listed empty legs or ask us for specific routes. We update daily with new available legs.",
  },
  el_step2_t: { es: "Reserva en minutos", en: "Book in minutes" },
  el_step2_d: {
    es: "Confirma por WhatsApp o email. Generamos el contrato y la cotización formal en menos de una hora.",
    en: "Confirm via WhatsApp or email. We generate the contract and formal quote in under an hour.",
  },
  el_step3_t: { es: "Vuela igual que un charter", en: "Fly like a full charter" },
  el_step3_d: {
    es: "Mismo servicio premium, mismo operador certificado, misma flexibilidad de horarios — a una fracción del precio.",
    en: "Same premium service, same certified operator, same scheduling flexibility — at a fraction of the price.",
  },
  el_cta_title_a: { es: "¿No ves tu ruta?", en: "Don't see your route?" },
  el_cta_title_em: { es: "Avísanos.", en: "Let us know." },
  el_cta_sub: {
    es: "Recibimos nuevos empty legs cada día. Déjanos tu ruta deseada y te avisamos en cuanto haya un tramo disponible.",
    en: "We get new empty legs every day. Tell us your desired route and we'll notify you as soon as one is available.",
  },
  el_cta_wa_route: {
    es: "Hola, busco un empty leg para mi ruta:",
    en: "Hi, I'm looking for an empty leg for my route:",
  },

  // SEO Empty Legs
  seo_el_title: {
    es: "Empty Legs México · Jet Privado hasta 75% Off | Numen",
    en: "Empty Legs Mexico · Private Jet up to 75% Off | Numen",
  },
  seo_el_desc: {
    es: "Empty legs y trayectos vacíos en jet privado desde México a EUA, Caribe y Centroamérica. Hasta 75% off. Disponibilidad diaria desde Toluca (MMTO).",
    en: "Empty leg private jet flights from Mexico to the U.S., Caribbean and Central America. Up to 75% off. Daily availability from Toluca (MMTO).",
  },

  // Cargo page
  cg_breadcrumb_services: { es: "Servicios", en: "Services" },
  cg_breadcrumb: { es: "Vuelos de Carga", en: "Cargo Flights" },
  cg_eyebrow: { es: "Hot Shot · 24/7 · Respuesta en Horas", en: "Hot Shot · 24/7 · Response in Hours" },
  cg_hero_a: { es: "Carga", en: "Air Cargo" },
  cg_hero_em: { es: "Urgente", en: "Charter" },
  cg_hero_b: { es: "Cuando", en: "for Time-Critical" },
  cg_hero_c: { es: "No Puede Esperar.", en: "Shipments." },
  cg_hero_sub: {
    es: "Charter de carga aérea para misiones críticas. Hacemos el brokerage con una red de operadores certificados para mover lo que tu línea de producción, tu aeronave o tu cliente necesitan ya.",
    en: "Air cargo charter for critical missions. We broker with a network of certified operators to move whatever your production line, aircraft, or client needs now.",
  },
  cg_cta_wa_quote: {
    es: "Hola, necesito cotizar un vuelo de carga urgente. Detalles:",
    en: "Hi, I need a quote for an urgent cargo flight. Details:",
  },
  cg_cta_how: { es: "Ver Cómo Funciona", en: "See How It Works" },
  cg_stat_avail: { es: "Disponibilidad", en: "Availability" },
  cg_stat_mob: { es: "Mobilización", en: "Mobilization" },
  cg_stat_cap: { es: "Capacidad Máx.", en: "Max Capacity" },
  cg_stat_cov: { es: "Cobertura", en: "Coverage" },
  cg_stat_mob_val: { es: "< 4 hrs", en: "< 4 hrs" },
  cg_stat_cap_val: { es: "Hasta 20 ton", en: "Up to 20 tons" },
  cg_stat_cov_val: { es: "MX · EUA · Caribe", en: "MX · USA · Caribbean" },
  cg_op_eyebrow: { es: "Red de Operadores", en: "Operator Network" },
  cg_op_title_a: { es: "Operadores", en: "Certified" },
  cg_op_title_em: { es: "Certificados.", en: "Operators." },
  cg_op_p1: {
    es: "Numen Aviation trabaja con una <strong>red de operadores cargueros certificados</strong> en México, EUA y el Caribe. No somos aerolínea: somos tu <strong>broker</strong>, lo cual significa que activamos la aeronave correcta para tu misión sin comprometerte con una sola flota.",
    en: "Numen Aviation works with a <strong>network of certified cargo operators</strong> across Mexico, the U.S., and the Caribbean. We're not an airline: we're your <strong>broker</strong>, which means we activate the right aircraft for your mission without locking you into a single fleet.",
  },
  cg_op_p2: {
    es: "Cada operador con el que trabajamos cumple el mismo estándar: <strong>certificación vigente AFAC / FAA</strong>, aeronaves cargueras dedicadas o convertibles, tripulación entrenada para carga crítica y cobertura de seguro acorde al valor de lo transportado.",
    en: "Every operator we work with meets the same standard: <strong>current AFAC / FAA certification</strong>, dedicated or convertible cargo aircraft, crews trained for critical cargo, and insurance coverage matching the value of the goods carried.",
  },
  cg_op_p3: {
    es: "Tú hablas con nosotros una sola vez. Nosotros coordinamos aeronave, permisos, ruta, manejo en tierra y aduana si aplica. Un solo punto de contacto, respuesta en horas, sin importar de qué operador sea el avión que despega.",
    en: "You talk to us once. We coordinate the aircraft, permits, routing, ground handling, and customs if applicable. One point of contact, response in hours, regardless of which operator's aircraft takes off.",
  },
  cg_op_std_t: { es: "Estándar de la Red", en: "Network Standard" },
  cg_op_std_sub: { es: "Criterios de Selección", en: "Selection Criteria" },
  cg_op_std_1l: { es: "Certificación", en: "Certification" },
  cg_op_std_1v: { es: "AFAC / FAA vigente", en: "Current AFAC / FAA" },
  cg_op_std_2l: { es: "Tipo de operación", en: "Operation type" },
  cg_op_std_2v: { es: "Charter de carga dedicado", en: "Dedicated cargo charter" },
  cg_op_std_3l: { es: "Flota disponible", en: "Available fleet" },
  cg_op_std_3v: { es: "Dash 8 · CRJ · B-737", en: "Dash 8 · CRJ · B-737" },
  cg_op_std_4l: { es: "Cobertura", en: "Coverage" },
  cg_op_std_4v: { es: "MX · EUA · Caribe · C.A.", en: "MX · USA · Caribbean · C.A." },
  cg_op_std_5l: { es: "Seguro", en: "Insurance" },
  cg_op_std_5v: { es: "Cobertura full hull & cargo", en: "Full hull & cargo coverage" },
  cg_op_std_6l: { es: "Disponibilidad", en: "Availability" },
  cg_op_std_6v: { es: "24/7/365", en: "24/7/365" },

  cg_fleet_eyebrow: { es: "Aeronaves Disponibles", en: "Available Aircraft" },
  cg_fleet_title_a: { es: "Flota de", en: "Cargo" },
  cg_fleet_title_em: { es: "Carga.", en: "Fleet." },
  cg_fleet_intro: {
    es: "Elegimos la aeronave según el peso, volumen, dimensiones y destino de tu carga. Estas son las plataformas principales con las que operamos.",
    en: "We pick the aircraft based on weight, volume, dimensions, and destination. These are the main platforms we operate.",
  },
  cg_lbl_payload: { es: "Payload", en: "Payload" },
  cg_lbl_range: { es: "Alcance", en: "Range" },
  cg_lbl_advantage: { es: "Ventaja", en: "Advantage" },
  cg_lbl_config: { es: "Config.", en: "Config." },
  cg_fleet_1_cat: { es: "Turbohélice Regional", en: "Regional Turboprop" },
  cg_fleet_1_adv: { es: "Pistas cortas", en: "Short runways" },
  cg_fleet_1_note: {
    es: "Turbohélice robusto para destinos regionales, campos remotos y pistas cortas. Ideal cuando el aeropuerto destino no puede recibir un jet, o cuando el peso no justifica uno.",
    en: "Rugged turboprop for regional destinations, remote fields, and short runways. Ideal when the destination airport can't receive a jet, or when the payload doesn't justify one.",
  },
  cg_fleet_2_cat: { es: "Jet Regional de Carga", en: "Regional Cargo Jet" },
  cg_fleet_2_note: {
    es: "Jet regional convertido a carga. Velocidad de reacción superior al turbohélice, capacidad media, ideal para rutas entre centros urbanos cuando el tiempo importa más que el volumen.",
    en: "Regional jet converted to cargo. Faster response than the turboprop, mid-tier capacity, ideal for routes between urban centers when time matters more than volume.",
  },
  cg_fleet_3_cat: { es: "Narrow-Body Freighter", en: "Narrow-Body Freighter" },
  cg_fleet_3_cfg: { es: "Pallets LD", en: "LD Pallets" },
  cg_fleet_3_note: {
    es: "Carguero dedicado (737-400F / 737-800BCF). Para cargas pesadas, operaciones oversize, rutas internacionales largas. Configuración de pallets estándar, puerta de carga amplia.",
    en: "Dedicated freighter (737-400F / 737-800BCF). For heavy loads, oversize operations, long international routes. Standard pallet configuration, wide cargo door.",
  },

  cg_proc_eyebrow: { es: "Cómo Funciona", en: "How It Works" },
  cg_proc_title_a: { es: "De tu llamada al", en: "From your call to" },
  cg_proc_title_em: { es: "despegue.", en: "takeoff." },
  cg_proc_intro: {
    es: "En carga urgente, cada minuto cuenta. Este es el proceso que ejecutamos contigo.",
    en: "In urgent cargo, every minute counts. This is the process we run with you.",
  },
  cg_proc_1_t: { es: "Contacto", en: "Contact" },
  cg_proc_1_d: { es: "Nos llamas o escribes por WhatsApp con los detalles: peso, dimensiones, origen, destino, ventana de tiempo.", en: "Call or message us on WhatsApp with the details: weight, dimensions, origin, destination, time window." },
  cg_proc_2_t: { es: "Cotización", en: "Quote" },
  cg_proc_2_d: { es: "En 30–60 minutos te devolvemos cotización firme con aeronave asignada y tiempo estimado de entrega.", en: "In 30–60 minutes we return a firm quote with assigned aircraft and estimated delivery time." },
  cg_proc_3_t: { es: "Coordinación", en: "Coordination" },
  cg_proc_3_d: { es: "Gestionamos permisos, slot, plan de vuelo, manejo en tierra y documentación aduanal si aplica.", en: "We handle permits, slot, flight plan, ground handling, and customs documentation if applicable." },
  cg_proc_4_t: { es: "Mobilización", en: "Mobilization" },
  cg_proc_4_d: { es: "La aeronave llega al origen en 2–4 horas (dependiendo de su base y disponibilidad). Cargamos y despegamos.", en: "The aircraft reaches origin in 2–4 hours (depending on its base and availability). We load and take off." },
  cg_proc_5_t: { es: "Entrega", en: "Delivery" },
  cg_proc_5_d: { es: "Comprobante de entrega, fotos y reporte de operación directo a tu correo. Facturamos al cierre del servicio.", en: "Proof of delivery, photos, and operations report sent directly to your inbox. We invoice at service close." },

  cg_ind_eyebrow: { es: "Casos de Uso", en: "Use Cases" },
  cg_ind_title_a: { es: "Cuándo tiene sentido un", en: "When a hot shot" },
  cg_ind_title_em: { es: "hot shot.", en: "makes sense." },
  cg_ind_intro: {
    es: "Estos son los escenarios donde el costo de esperar supera el costo del charter.",
    en: "These are the scenarios where the cost of waiting exceeds the cost of the charter.",
  },
  cg_ind_1_t: { es: "Línea de Producción Parada", en: "Production Line Down" },
  cg_ind_1_d: { es: "Refacción crítica detiene una planta automotriz, industrial o de manufactura. Cada hora de paro cuesta miles de dólares. Un vuelo de carga paga su costo en el primer turno recuperado.", en: "A critical part halts an automotive, industrial, or manufacturing plant. Every hour of downtime costs thousands of dollars. A cargo flight pays for itself on the first shift recovered." },
  cg_ind_2_t: { es: "AOG — Aircraft On Ground", en: "AOG — Aircraft On Ground" },
  cg_ind_2_d: { es: "Una aeronave comercial o privada no puede volar por falta de una pieza. Movemos el componente de cualquier MRO o almacén hacia el aeropuerto donde está la aeronave, en el menor tiempo posible.", en: "A commercial or private aircraft can't fly due to a missing part. We move the component from any MRO or warehouse to the airport where the aircraft sits, in the shortest possible time." },
  cg_ind_3_t: { es: "Oil & Gas / Minería", en: "Oil & Gas / Mining" },
  cg_ind_3_d: { es: "Equipo crítico para plataformas, campos o sitios remotos. Cuando el aeropuerto más cercano es una pista corta o un helipuerto, coordinamos la aeronave adecuada para el terreno.", en: "Critical equipment for platforms, fields, or remote sites. When the nearest airport is a short runway or a helipad, we coordinate the right aircraft for the terrain." },
  cg_ind_4_t: { es: "Cadena Fría / Médico", en: "Cold Chain / Medical" },
  cg_ind_4_d: { es: "Medicamentos de alto valor, muestras biológicas, componentes médicos time-sensitive. Coordinamos manejo de temperatura y chain of custody durante todo el trayecto.", en: "High-value medications, biological samples, time-sensitive medical components. We coordinate temperature handling and chain of custody throughout the journey." },

  cg_band_a: { es: "¿Tienes una", en: "Have an" },
  cg_band_em: { es: "carga urgente", en: "urgent cargo" },
  cg_band_b: { es: "ahora?", en: "right now?" },
  cg_band_sub: {
    es: "Si tu operación no puede esperar al lunes, no esperes. Cotiza por WhatsApp — la respuesta es en minutos, 24 horas al día.",
    en: "If your operation can't wait until Monday, don't wait. Quote on WhatsApp — response in minutes, 24 hours a day.",
  },
  cg_band_wa: {
    es: "Hola, necesito un vuelo de carga urgente. Origen: ___ Destino: ___ Peso: ___ Ventana: ___",
    en: "Hi, I need an urgent cargo flight. Origin: ___ Destination: ___ Weight: ___ Window: ___",
  },

  // SEO Cargo
  seo_cg_title: {
    es: "Vuelos de Carga Urgente México | Numen Aviation",
    en: "Urgent Cargo Flights Mexico | Numen Aviation",
  },
  seo_cg_desc: {
    es: "Charter de carga aérea urgente en México, EUA y Caribe. Hot shot, AOG, refacciones críticas. Operadores certificados. 24/7.",
    en: "Urgent air cargo charter in Mexico, the U.S. and Caribbean. Hot shot, AOG, critical parts. Certified operators. 24/7.",
  },

  // Route page
  rt_breadcrumb_routes: { es: "Rutas", en: "Routes" },
  rt_stat_distance: { es: "Distancia", en: "Distance" },
  rt_stat_time: { es: "Tiempo de Vuelo", en: "Flight Time" },
  rt_stat_price: { es: "Precio Aprox. (USD)", en: "Approx. Price (USD)" },
  rt_stat_aircraft: { es: "Aeronave Recomendada", en: "Recommended Aircraft" },
  rt_details_eyebrow: { es: "Detalles de Ruta", en: "Route Details" },
  rt_details_title_a: { es: "Salida y", en: "Departure and" },
  rt_details_title_em: { es: "Llegada.", en: "Arrival." },
  rt_lbl_departure: { es: "Salida", en: "Departure" },
  rt_lbl_arrival: { es: "Llegada", en: "Arrival" },
  rt_fleet_eyebrow: { es: "Flota para esta Ruta", en: "Fleet for this Route" },
  rt_fleet_title_a: { es: "Aeronaves", en: "Recommended" },
  rt_fleet_title_em: { es: "Recomendadas.", en: "Aircraft." },
  rt_lbl_pax: { es: "Pasajeros", en: "Passengers" },
  rt_lbl_range: { es: "Alcance", en: "Range" },
  rt_why_eyebrow: { es: "Por Qué Privado", en: "Why Private" },
  rt_why_title_a: { es: "Lo que hace esta ruta", en: "What makes this route" },
  rt_why_title_em: { es: "diferente.", en: "different." },
  rt_cta_a: { es: "¿Listo para volar a", en: "Ready to fly to" },
  rt_cta_sub: {
    es: "Envíanos una solicitud y tendrás una cotización en tu inbox en menos de una hora.",
    en: "Send us a request and you'll have a quote in your inbox in under an hour.",
  },
  rt_cta_request_quote: { es: "Solicitar Cotización", en: "Request Quote" },
  rt_cta_view_aircraft: { es: "Ver Aeronaves", en: "View Aircraft" },
  rt_seo_default_title: { es: "Ruta — Numen Aviation", en: "Route — Numen Aviation" },

  // 404
  nf_seo_title: { es: "Página no encontrada · Numen Aviation", en: "Page not found · Numen Aviation" },
  nf_seo_desc: {
    es: "La página que buscas no existe. Vuelve al inicio o contáctanos por WhatsApp.",
    en: "The page you're looking for doesn't exist. Return home or message us on WhatsApp.",
  },
  nf_eyebrow: { es: "Error 404", en: "Error 404" },
  nf_title_a: { es: "Página no", en: "Page not" },
  nf_title_em: { es: "encontrada.", en: "found." },
  nf_body: {
    es: "La página que buscas no existe o fue movida. Volvamos al inicio.",
    en: "The page you're looking for doesn't exist or was moved. Let's head back home.",
  },

  // Unsubscribe
  un_seo_title: { es: "Cancelar suscripción · Numen Aviation", en: "Unsubscribe · Numen Aviation" },
  un_seo_desc: { es: "Gestiona tus preferencias de email.", en: "Manage your email preferences." },
  un_verifying: { es: "Verificando...", en: "Verifying..." },
  un_title_valid: { es: "Cancelar suscripción", en: "Unsubscribe" },
  un_processing: { es: "Procesando...", en: "Processing..." },
  un_done: { es: "Listo, te dimos de baja.", en: "Done — you've been unsubscribed." },
  un_already: { es: "Ya estabas dado de baja.", en: "You were already unsubscribed." },
  un_invalid: { es: "Enlace inválido o expirado.", en: "Invalid or expired link." },
  un_error: { es: "Algo salió mal.", en: "Something went wrong." },
  un_confirm_body: {
    es: "Si confirmas, dejarás de recibir nuestros emails.",
    en: "If you confirm, you'll stop receiving our emails.",
  },
  un_confirm_btn: { es: "Confirmar baja", en: "Confirm unsubscribe" },
  un_done_help_a: { es: "Si fue un error, escríbenos a", en: "If this was a mistake, email us at" },
  un_back_home: { es: "← Volver al inicio", en: "← Back to home" },

  // Static info strip (replaces marquee)
  strip_text: {
    es: "Renta de jet privado y charter ejecutivo desde el Aeropuerto Internacional de Toluca (MMTO) hacia México, Estados Unidos, el Caribe y Centroamérica. Empty legs, adquisición y consultoría de aeronaves. Cotización en menos de 2 horas, operación 24/7.",
    en: "Private jet rental and executive charter from Toluca International Airport (MMTO) to Mexico, the United States, the Caribbean, and Central America. Empty legs, aircraft acquisition and consulting. Quote in under 2 hours, 24/7 operations.",
  },

  // Long-form SEO content block (Home)
  seo_eyebrow: { es: "Guía Completa", en: "Complete Guide" },
  seo_title_a: { es: "Por qué Numen Aviation es la mejor opción", en: "Why Numen Aviation is the best choice" },
  seo_title_em: { es: "para renta de jet privado en México", en: "for private jet rental in Mexico" },

  seo_h3_1: { es: "Charter privado sin fricciones desde Toluca (MMTO)", en: "Frictionless private charter from Toluca (MMTO)" },
  seo_p_1: {
    es: "El Aeropuerto Internacional de Toluca (MMTO) es el principal hub de aviación ejecutiva del Valle de México. A solo 40 minutos de Santa Fe, Polanco e Interlomas, ofrece terminales privadas (FBO) con acceso directo a pista, sin las filas, retrasos y restricciones del Aeropuerto Internacional de la Ciudad de México (AICM). En Numen Aviation coordinamos cada vuelo charter desde MMTO con tiempos de despacho de 15 minutos: usted llega, se identifica y aborda. Trabajamos con operadores certificados por AFAC que operan toda la gama de aeronaves — desde turbohélices ligeros como King Air 250 hasta jets ultra largo alcance como Gulfstream G550 — para que cada misión encuentre la aeronave correcta al precio justo.",
    en: "Toluca International Airport (MMTO) is the main executive aviation hub of the Valley of Mexico. Just 40 minutes from Santa Fe, Polanco, and Interlomas, it offers private terminals (FBO) with direct ramp access — without the lines, delays, and slot restrictions of Mexico City International Airport (AICM). At Numen Aviation we coordinate every charter flight from MMTO with 15-minute departure times: you arrive, identify yourself, and board. We work with AFAC-certified operators flying the full aircraft range — from light turboprops like the King Air 250 to ultra-long-range jets like the Gulfstream G550 — so every mission gets the right aircraft at the right price.",
  },

  seo_h3_2: { es: "Empty legs: hasta 75% de descuento en vuelos reales", en: "Empty legs: up to 75% off real flights" },
  seo_p_2: {
    es: "Un empty leg (o trayecto vacío) es un vuelo de reposicionamiento que un operador necesita realizar para regresar una aeronave a su base o llevarla al siguiente cliente. Como ese segmento ya está pagado, puede ofrecerse al público con descuentos que típicamente van del 40% al 75% respecto a la tarifa regular de charter. Numen Aviation publica diariamente empty legs verificados en rutas como Toluca–Cancún, Toluca–Los Cabos, México–Miami, Querétaro–Houston y Monterrey–San Diego. Si su agenda tiene flexibilidad de fechas, es la forma más accesible de volar en jet privado sin sacrificar privacidad, seguridad ni comodidad.",
    en: "An empty leg (or repositioning flight) is a ferry segment an operator must fly to return an aircraft to its base or position it for the next client. Because that leg is already paid for, it can be offered to the public with discounts that typically range from 40% to 75% off regular charter pricing. Numen Aviation publishes verified empty legs daily on routes such as Toluca–Cancun, Toluca–Los Cabos, Mexico City–Miami, Querétaro–Houston, and Monterrey–San Diego. If your schedule has date flexibility, it is the most accessible way to fly private without sacrificing privacy, safety, or comfort.",
  },

  seo_h3_3: { es: "Una correduría independiente — sin conflictos de interés", en: "An independent brokerage — no conflicts of interest" },
  seo_p_3: {
    es: "Numen Aviation no opera aeronaves propias. Somos una correduría independiente que compara objetivamente la disponibilidad de decenas de operadores certificados en México, Estados Unidos y Centroamérica para conseguir la mejor combinación de aeronave, seguridad y precio para cada misión. Esto elimina el incentivo de venderle la aeronave que el broker tiene en hangar — y lo sustituye por el incentivo correcto: encontrarle la aeronave correcta. Validamos seguros, certificaciones IS-BAO, historial del operador y curriculum de la tripulación antes de cada vuelo. Auditamos cada cotización para que el desglose sea transparente: horas de vuelo, ferry, handling, IVA, FBO. Sin cargos ocultos, sin sorpresas al cierre.",
    en: "Numen Aviation does not operate its own aircraft. We are an independent brokerage that objectively compares the availability of dozens of certified operators across Mexico, the United States, and Central America to find the best combination of aircraft, safety, and price for each mission. This removes the incentive to sell you the aircraft sitting in the broker's hangar — and replaces it with the correct incentive: finding you the right aircraft. We validate insurance, IS-BAO certification, operator history, and crew résumés before every flight. We audit every quote so the breakdown is transparent: flight hours, ferry, handling, VAT, FBO. No hidden fees, no surprises at closing.",
  },

  seo_h3_4: { es: "Cobertura: México, Estados Unidos, el Caribe y Centroamérica", en: "Coverage: Mexico, U.S., Caribbean, and Central America" },
  seo_p_4: {
    es: "Operamos vuelos charter privados desde y hacia cualquier aeropuerto con pista pavimentada en territorio mexicano: Toluca (MMTO), Ciudad de México (MMMX), Cancún (MMUN), Los Cabos (MMSD), Monterrey (MMMY), Guadalajara (MMGL), Querétaro (MMQT), Mérida (MMMD) y más de 60 destinos regionales. Para vuelos internacionales coordinamos rutas frecuentes a Miami, Houston, Dallas, Las Vegas, Nueva York, Los Ángeles, Aspen, Punta Cana, Panamá, San José y todo el Caribe. Tramitamos permisos AFAC, despacho de aduana y migración para que usted solo se preocupe por su agenda.",
    en: "We operate private charter flights to and from every paved-runway airport in Mexican territory: Toluca (MMTO), Mexico City (MMMX), Cancun (MMUN), Los Cabos (MMSD), Monterrey (MMMY), Guadalajara (MMGL), Querétaro (MMQT), Mérida (MMMD), and over 60 regional destinations. For international missions we coordinate frequent routes to Miami, Houston, Dallas, Las Vegas, New York, Los Angeles, Aspen, Punta Cana, Panama, San José, and the entire Caribbean. We handle AFAC permits, customs, and immigration clearance so you only worry about your schedule.",
  },

  seo_h3_5: { es: "Asesoría de adquisición y gestión de aeronaves", en: "Aircraft acquisition and management advisory" },
  seo_p_5: {
    es: "Más allá del charter, asesoramos a family offices, empresarios y operadores en la adquisición, importación y gestión de aeronaves bajo bandera mexicana o extranjera. Cubrimos due diligence técnica (pre-purchase inspection, AD/SB review, historial de mantenimiento), estructura legal y fiscal (importación temporal, definitiva, leasing operativo), selección de operador para gestión Part 91 o Part 135 equivalente, y plan de utilización para maximizar el retorno de la inversión. Si está evaluando comprar su primer jet o renovar su flota, le ayudamos a tomar la decisión sin sesgo comercial.",
    en: "Beyond charter, we advise family offices, entrepreneurs, and operators on the acquisition, importation, and management of aircraft under Mexican or foreign registry. We cover technical due diligence (pre-purchase inspection, AD/SB review, maintenance history), legal and tax structure (temporary import, permanent import, operating lease), operator selection for Part 91 or equivalent Part 135 management, and a utilization plan to maximize return on investment. If you are evaluating buying your first jet or renewing your fleet, we help you decide without commercial bias.",
  },

  seo_h3_6: { es: "Cómo solicitar su cotización", en: "How to request your quote" },
  seo_p_6: {
    es: "El proceso es directo: comparta origen, destino, fecha, número de pasajeros y cualquier requerimiento especial (catering, transporte terrestre, mascotas, equipaje voluminoso) por WhatsApp, teléfono o el formulario de esta página. En menos de 2 horas — habitualmente en 30 minutos — recibirá una propuesta con 2 o 3 opciones de aeronave, desglose de costos, fotos del interior y biografía de la tripulación. Operamos 24/7 los 365 días del año, incluyendo madrugadas, fines de semana y feriados.",
    en: "The process is direct: share origin, destination, date, number of passengers, and any special requirements (catering, ground transport, pets, oversized luggage) via WhatsApp, phone, or the form on this page. In under 2 hours — usually within 30 minutes — you will receive a proposal with 2 or 3 aircraft options, cost breakdown, interior photos, and crew bio. We operate 24/7, 365 days a year, including overnights, weekends, and holidays.",
  },
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS;

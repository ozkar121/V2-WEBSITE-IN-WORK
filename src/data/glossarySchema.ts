// DefinedTermSet JSON-LD for the private aviation glossary briefing post.
// Machine-readable term/definition pairs — the format generative engines
// (ChatGPT, Perplexity, Gemini) extract and cite most reliably.

import { SITE_URL } from "@/lib/site";

const SET_ID = `${SITE_URL}/briefing/glosario-aviacion-privada`;

// [term, short definition] — ES / EN kept in lockstep.
const TERMS: Array<{ es: [string, string]; en: [string, string] }> = [
  {
    es: ["Charter", "Renta de una aeronave completa con tripulación para un trayecto específico; se paga por el avión, no por asiento."],
    en: ["Charter", "Renting an entire aircraft with crew for a specific trip; you pay for the aircraft, not per seat."],
  },
  {
    es: ["On-demand", "Modalidad de charter sin membresías ni horas prepagadas: cada vuelo se cotiza y paga de forma independiente."],
    en: ["On-demand", "Charter with no memberships or prepaid hours: each flight is quoted and paid independently."],
  },
  {
    es: ["Broker", "Intermediario que no opera aeronaves: compara operadores certificados, negocia tarifas y coordina el vuelo para el cliente."],
    en: ["Broker", "Intermediary that does not operate aircraft: compares certified operators, negotiates rates and coordinates the flight."],
  },
  {
    es: ["Operador", "Empresa titular del certificado para operar la aeronave, responsable de tripulación, mantenimiento y seguros."],
    en: ["Operator", "Company holding the certificate to operate the aircraft, responsible for crew, maintenance and insurance."],
  },
  {
    es: ["AOC", "Certificado de Operador Aéreo: permiso de la autoridad (AFAC en México) para vender transporte aéreo comercial."],
    en: ["AOC", "Air Operator Certificate: the authority's permit (AFAC in Mexico) to sell commercial air transport."],
  },
  {
    es: ["Empty leg", "Vuelo de reposicionamiento sin pasajeros que se ofrece con descuentos de hasta 75% sobre la tarifa normal."],
    en: ["Empty leg", "A repositioning flight without passengers, offered at discounts of up to 75% off the normal rate."],
  },
  {
    es: ["Vuelo de posicionamiento (ferry)", "Trayecto sin pasajeros para colocar la aeronave en el aeropuerto de salida; forma parte del costo cotizado."],
    en: ["Positioning flight (ferry)", "A passenger-less segment flown to place the aircraft at the departure airport; part of the quoted cost."],
  },
  {
    es: ["Jet card", "Programa prepagado de horas de vuelo con tarifas fijas a cambio de un compromiso económico inicial."],
    en: ["Jet card", "A prepaid block of flight hours with fixed rates in exchange for an upfront financial commitment."],
  },
  {
    es: ["Propiedad fraccionada", "Compra de una participación en una aeronave que da derecho a un número de horas de vuelo anuales."],
    en: ["Fractional ownership", "Buying a share of an aircraft that entitles the owner to a set number of annual flight hours."],
  },
  {
    es: ["Block time", "Tiempo tarifable desde que la aeronave inicia su movimiento hasta que se detiene en destino; base del precio por hora."],
    en: ["Block time", "Billable time from when the aircraft first moves until it stops at destination; the basis of hourly pricing."],
  },
  {
    es: ["Leg (tramo)", "Cada segmento de un itinerario; un viaje redondo consta de dos legs."],
    en: ["Leg", "Each segment of an itinerary; a round trip consists of two legs."],
  },
  {
    es: ["COI", "Certificado de seguro de la aeronave: coberturas, límites y vigencia. El pasajero puede solicitarlo antes de pagar."],
    en: ["COI", "Certificate of Insurance for the aircraft: coverage, limits and validity. Passengers may request it before paying."],
  },
  {
    es: ["FBO", "Terminal privada de aviación general con sala VIP, migración y aduana en sitio, y abordaje en minutos."],
    en: ["FBO", "Fixed Base Operator: a private general aviation terminal with VIP lounge, on-site customs and boarding in minutes."],
  },
  {
    es: ["Handling", "Servicios en tierra para aeronave y pasajeros: rampa, equipaje, combustible, permisos y documentación."],
    en: ["Handling", "Ground services for aircraft and passengers: ramp, baggage, fuel, permits and paperwork."],
  },
  {
    es: ["Rampa / plataforma", "Área del aeropuerto donde las aeronaves estacionan, cargan combustible y embarcan pasajeros."],
    en: ["Ramp / apron", "The airport area where aircraft park, refuel and board passengers."],
  },
  {
    es: ["Hangar", "Instalación techada donde la aeronave se resguarda y recibe mantenimiento."],
    en: ["Hangar", "A covered facility where the aircraft is stored and maintained."],
  },
  {
    es: ["Slot", "Ventana horaria asignada para aterrizar o despegar en aeropuertos congestionados; Toluca (MMTO) no la requiere."],
    en: ["Slot", "An assigned time window to land or take off at congested airports; Toluca (MMTO) has no slot restriction."],
  },
  {
    es: ["PPR", "Prior Permission Required: autorización previa que exigen algunos aeropuertos para cada operación."],
    en: ["PPR", "Prior Permission Required: advance authorization some airports demand for each operation."],
  },
  {
    es: ["Código ICAO / IATA", "Identificadores de aeropuerto: ICAO de 4 letras para planes de vuelo (Toluca = MMTO), IATA de 3 letras comercial (TLC)."],
    en: ["ICAO / IATA code", "Airport identifiers: 4-letter ICAO for flight plans (Toluca = MMTO), 3-letter IATA for commercial use (TLC)."],
  },
  {
    es: ["GenDec", "Declaración General: documento internacional de salida/llegada con tripulación, pasajeros y datos del vuelo."],
    en: ["GenDec", "General Declaration: the international departure/arrival document listing crew, passengers and flight details."],
  },
  {
    es: ["Despacho aduanal / CIQ", "Trámites de aduana, migración y sanidad en vuelos internacionales; en un FBO se realizan en minutos."],
    en: ["Customs clearance / CIQ", "Customs, immigration and quarantine formalities on international flights; done in minutes at an FBO."],
  },
  {
    es: ["e-APIS", "Sistema electrónico de EUA que exige transmitir datos de pasajeros y tripulación antes de cruzar su frontera."],
    en: ["e-APIS", "The US electronic system requiring passenger and crew data before crossing the US border."],
  },
  {
    es: ["AFAC", "Agencia Federal de Aviación Civil: autoridad aeronáutica de México que certifica operadores, aeronaves y tripulaciones."],
    en: ["AFAC", "Mexico's civil aviation authority; it certifies operators, aircraft and crews."],
  },
  {
    es: ["FAA Part 135", "Regulación estadounidense para operadores de charter; equivalente funcional del AOC de taxi aéreo mexicano."],
    en: ["FAA Part 135", "The US regulation for charter operators; the functional equivalent of Mexico's air taxi AOC."],
  },
  {
    es: ["Cabotaje", "Transporte entre dos puntos del mismo país por aeronave extranjera; restringido en México para matrículas N."],
    en: ["Cabotage", "Carriage between two points in the same country by a foreign aircraft; restricted in Mexico for N-registrations."],
  },
  {
    es: ["Matrícula", "Registro nacional de la aeronave: XA/XB/XC en México, N en Estados Unidos. Para charter doméstico mexicano: XA."],
    en: ["Registration", "The aircraft's national registry: XA/XB/XC in Mexico, N in the US. For Mexican domestic charter: XA."],
  },
  {
    es: ["Certificado de aeronavegabilidad", "Documento que acredita que la aeronave está en condiciones seguras de vuelo y al día en mantenimiento."],
    en: ["Certificate of Airworthiness", "Document certifying the aircraft is in safe flying condition and current on maintenance."],
  },
  {
    es: ["SMS", "Sistema de gestión de seguridad operacional: procesos formales para identificar riesgos y prevenir incidentes."],
    en: ["SMS", "Safety Management System: formal processes to identify risks and prevent incidents."],
  },
  {
    es: ["IS-BAO", "Estándar internacional voluntario de aviación ejecutiva, auditado por terceros en tres etapas."],
    en: ["IS-BAO", "A voluntary international business aviation standard, third-party audited across three stages."],
  },
  {
    es: ["ARGUS / Wyvern", "Auditores privados que califican operadores de charter (ARGUS Gold/Platinum, Wyvern Wingman)."],
    en: ["ARGUS / Wyvern", "Private auditors that rate charter operators (ARGUS Gold/Platinum, Wyvern Wingman)."],
  },
  {
    es: ["Type rating", "Habilitación específica que un piloto necesita para operar un tipo de aeronave determinado."],
    en: ["Type rating", "The specific qualification a pilot needs to fly a given aircraft type."],
  },
  {
    es: ["NOTAM", "Aviso oficial sobre condiciones que afectan una operación: pistas cerradas, ayudas fuera de servicio, restricciones."],
    en: ["NOTAM", "Official notice of conditions affecting an operation: closed runways, aids out of service, restrictions."],
  },
  {
    es: ["Turbohélice", "Aeronave de hélice con motor de turbina (King Air, Piper M500); ideal para tramos cortos y pistas pequeñas."],
    en: ["Turboprop", "Turbine-powered propeller aircraft (King Air, Piper M500); ideal for short legs and small runways."],
  },
  {
    es: ["Very Light Jet (VLJ)", "Los jets más compactos: 4-5 pasajeros y tramos de 1-2 horas con costo por hora contenido."],
    en: ["Very Light Jet (VLJ)", "The most compact jets: 4-5 passengers and 1-2 hour legs at a contained hourly cost."],
  },
  {
    es: ["Light jet", "Jet de 6-8 pasajeros para vuelos de 2-3 horas (Learjet 35, Citation CJ3, Phenom 300)."],
    en: ["Light jet", "A 6-8 passenger jet for 2-3 hour flights (Learjet 35, Citation CJ3, Phenom 300)."],
  },
  {
    es: ["Midsize jet", "Jet mediano de 8-9 pasajeros y 3-5 horas de alcance (Hawker 800, Citation XLS); equilibrio típico México-EUA."],
    en: ["Midsize jet", "An 8-9 passenger jet with 3-5 hours of range (Hawker 800, Citation XLS); the typical Mexico-US balance."],
  },
  {
    es: ["Super-midsize", "Jet con cabina y alcance superiores al midsize: 9-10 pasajeros y 5-7 horas de vuelo."],
    en: ["Super-midsize", "A jet above midsize in cabin and range: 9-10 passengers and 5-7 hours of flight."],
  },
  {
    es: ["Heavy jet", "Jet de cabina grande y largo alcance (Gulfstream G450, Challenger 601): 10-16 pasajeros, vuelos transcontinentales."],
    en: ["Heavy jet", "A large-cabin, long-range jet (Gulfstream G450, Challenger 601): 10-16 passengers, transcontinental flights."],
  },
  {
    es: ["Alcance (range)", "Distancia máxima que la aeronave puede volar sin reabastecer; define si una ruta se vuela directa."],
    en: ["Range", "Maximum distance the aircraft can fly without refueling; determines whether a route is flown nonstop."],
  },
  {
    es: ["Escala técnica (tech stop)", "Aterrizaje intermedio solo para cargar combustible, sin descenso de pasajeros."],
    en: ["Tech stop", "An intermediate landing solely to refuel, with passengers remaining on board."],
  },
  {
    es: ["MEDEVAC", "Aeronave configurada como ambulancia aérea: camilla, equipo de UCI y personal médico a bordo."],
    en: ["MEDEVAC", "An aircraft configured as an air ambulance: stretcher, ICU equipment and medical personnel on board."],
  },
  {
    es: ["AOG / hot shot", "Carga urgente por aviación privada: refacciones aeronáuticas críticas (AOG) o envíos que no pueden esperar."],
    en: ["AOG / hot shot", "Urgent cargo by private aviation: critical aircraft parts (AOG) or shipments that cannot wait."],
  },
  {
    es: ["ETD / ETA", "Hora estimada de salida y de llegada; en charter privado el horario se ajusta al pasajero."],
    en: ["ETD / ETA", "Estimated Time of Departure and Arrival; in private charter the schedule adjusts to the passenger."],
  },
  {
    es: ["Plan de vuelo", "Documento presentado a la autoridad con ruta, altitudes, alternos y autonomía de cada tramo."],
    en: ["Flight plan", "Document filed with the authority covering route, altitudes, alternates and endurance for each leg."],
  },
  {
    es: ["Aeropuerto alterno", "Aeropuerto designado en el plan de vuelo para aterrizar si el destino se cierra por clima u otra causa."],
    en: ["Alternate airport", "The airport designated in the flight plan for landing if the destination closes."],
  },
  {
    es: ["Catering", "Servicio de alimentos y bebidas a bordo, personalizado por vuelo y coordinado con el FBO antes de la salida."],
    en: ["Catering", "Onboard food and beverage service, customized per flight and coordinated with the FBO before departure."],
  },
  {
    es: ["Crew duty (tiempos de tripulación)", "Límites legales de horas de servicio y descanso de los pilotos que todo operador serio respeta."],
    en: ["Crew duty", "Legal limits on pilot duty hours and rest that every serious operator respects."],
  },
];

const buildSet = (lang: "es" | "en") => ({
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": SET_ID,
  name:
    lang === "es"
      ? "Glosario de Aviación Privada — Numen Aviation"
      : "Private Aviation Glossary — Numen Aviation",
  description:
    lang === "es"
      ? "Términos esenciales de la aviación privada y el charter ejecutivo en México, definidos por Numen Aviation (Toluca, MMTO)."
      : "Essential private aviation and executive charter terms in Mexico, defined by Numen Aviation (Toluca, MMTO).",
  inLanguage: lang === "es" ? "es-MX" : "en",
  hasDefinedTerm: TERMS.map((t) => ({
    "@type": "DefinedTerm",
    name: t[lang][0],
    description: t[lang][1],
    inDefinedTermSet: SET_ID,
  })),
});

export const GLOSSARY_JSONLD: {
  es: Record<string, unknown>[];
  en: Record<string, unknown>[];
} = {
  es: [buildSet("es")],
  en: [buildSet("en")],
};

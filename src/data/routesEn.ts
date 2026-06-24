import type { RouteDataEn } from "./routes";

/**
 * Traducciones al inglés de las páginas de ruta (/en/rutas/*).
 * Solo los campos presentes sustituyen al español; el resto se hereda.
 * Precios y tiempos validados por Lobo en junio 2026.
 */
export const ROUTE_DATA_EN: Record<string, RouteDataEn> = {
  "cdmx-cancun": {
    title: "Private Jet Mexico City to Cancún | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Cancún (MMUN) in under 2 hours. No stops, no lines. From $12,000 USD. Available 24/7.",
    heroSubtitle:
      "Nonstop in under 2 hours. Skip the commercial terminal lines — depart from our Toluca (MMTO) base, 20 minutes from Santa Fe, 35 from Polanco.",
    waMessage: "Hi, I'd like to quote a private flight Mexico City → Cancún.",
    stats: { distance: "≈ 1,700 km", time: "2h 15m", price: "From $12,000", aircraft: "Light / Midsize" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Cancún International (MMUN) — Private ramp Terminal H or FBO",
    },
    aircraft: [
      { category: "Light Jet", name: "Learjet 31", pax: "6–7", range: "2,650 km", note: "Agile and fast on this route. Ideal for small groups seeking jet speed at competitive prices." },
      { category: "Light Jet", name: "Learjet 35", pax: "6–8", range: "3,800 km", note: "The workhorse, with comfortable range margin to Cancún and a roomy stand-up cabin." },
      { category: "Midsize Jet", name: "Hawker 800A", pax: "8–9", range: "4,600 km", note: "The best cabin-to-cost ratio on this route. Wide body, full galley, generous range." },
    ],
    why: [
      { num: "01", title: "No connections, no stops", desc: "Direct routing. You choose the departure time — morning, afternoon, last minute." },
      { num: "02", title: "Toluca (MMTO) is our base", desc: "Our dedicated FBO at Toluca means zero commercial-terminal friction. 20 min from Santa Fe, 35 from Polanco." },
      { num: "03", title: "You arrive at an FBO, not a terminal", desc: "Ground transport, cold towels and your luggage ready on landing. No carousels." },
      { num: "04", title: "Return on your own schedule", desc: "Book an open return. No change fees, no penalties." },
    ],
    sections: [
      {
        heading: "Mexico's busiest private leisure route",
        body:
          "Cancún and the Riviera Maya concentrate the highest demand for private aviation in the country: homes in Puerto Cancún, developments in Playa del Carmen and Tulum, and a high season that saturates commercial flights from December to April. By private jet, the trip from Toluca (MMTO) takes 2 hours 15 minutes nonstop, with your whole group and your schedule.\n\nAgainst a commercial flight the real saving is bigger than it looks: no 2-hour check-in, no document lines or baggage carousels — door to door you save more than 3 hours, and the trip starts rested rather than worn out.",
      },
      {
        heading: "Arrival in Cancún (MMUN): private ramp",
        body:
          "Your flight lands at Cancún International Airport (MMUN / CUN) with handling at the private ramp and FBO, away from the commercial terminals. Deplaning takes minutes: your ground transport drives straight onto the platform and heads to the Hotel Zone (20 minutes), Playa del Carmen (45 minutes) or Tulum (90 minutes) — transfers we coordinate as part of the service.",
      },
      {
        heading: "High season: booking early makes the difference",
        body:
          "From December to April — and especially over Christmas, New Year's and Easter — aircraft availability to Cancún sells out weeks in advance. Booking early secures the right aircraft at the right price; close to the date, options shrink and prices climb. For peak dates we recommend securing your flight 3 to 4 weeks ahead.",
      },
      {
        heading: "Empty legs Toluca–Cancún: the route with the most opportunities",
        body:
          "Because of its volume, the Valley of Mexico–Cancún corridor generates more empty legs than any other in the country, in both directions. If your dates are flexible by a day or two, discounts off the regular rate can reach 50–75%. We publish current availability on our empty legs page and ping you on WhatsApp when a segment matches your route.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Mexico City to Cancún cost?",
        a: "A one-way flight on a light jet (Learjet 31 or 35, up to 7 passengers) starts at 12,000 USD + tax; on a Hawker 800A (up to 9 passengers) from 21,500 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Cancún by private jet?",
        a: "2 hours 15 minutes nonstop. Door to door, the saving versus a commercial flight exceeds 3 hours once check-in, lines and baggage are counted.",
      },
      {
        q: "Can I fly directly to Playa del Carmen or Tulum?",
        a: "The flight lands in Cancún (MMUN) and we coordinate direct ground transport to Playa del Carmen (~45 min) or Tulum (~90 min). We also fly directly to Tulum airport (MMTL) for the same price as Cancún — choose whichever arrival suits you best.",
      },
      {
        q: "Which aircraft operate the Mexico City–Cancún route?",
        a: "Most frequently the Learjet 31 and 35 (light jets, up to 7 passengers) and the Hawker 800A (midsize, up to 9 passengers with a stand-up cabin). For larger groups we quote heavy jets.",
      },
      {
        q: "Are there empty legs between Mexico City and Cancún?",
        a: "It is Mexico's most active empty-leg route, in both directions. With flexible dates, discounts run from 40% to 75% off the regular charter rate.",
      },
      {
        q: "Where do private flights to Cancún depart from?",
        a: "From Toluca International Airport (MMTO), the executive aviation hub of the Valley of Mexico, about 40 minutes from Santa Fe, Polanco and Interlomas.",
      },
    ],
  },
  "cdmx-los-cabos": {
    title: "Private Jet Mexico City to Los Cabos | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Los Cabos (MMSD) in under 2 hours. Nonstop. From $12,750 USD. Available 24/7.",
    heroSubtitle:
      "Nonstop in under 2 hours. Depart from Toluca (MMTO) — straight to your destination, no commercial terminals.",
    waMessage: "Hi, I'd like to quote a private flight Mexico City → Los Cabos.",
    stats: { distance: "≈ 1,530 km", time: "2h 00m", price: "From $12,750", aircraft: "Light / Midsize" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Los Cabos International (MMSD) — Private FBO ramp — Los Cabos Executive Terminal",
    },
    aircraft: [
      { category: "Light Jet", name: "Learjet 31", pax: "6–7", range: "2,650 km", note: "An efficient option for Los Cabos. Quick turnaround, perfect for weekend getaways." },
      { category: "Light Jet", name: "Learjet 35", pax: "6–8", range: "3,800 km", note: "Reliable range margin to SJD with a comfortable cabin for leisure trips." },
      { category: "Midsize Jet", name: "Hawker 800A", pax: "8–9", range: "4,600 km", note: "Top pick for families and golf groups. Generous baggage hold and stand-up cabin." },
    ],
    why: [
      { num: "01", title: "Door to destination in under 4 hours", desc: "Wheels up from MMTO, wheels down at MMSD. No traffic, no TSA, no middle seat." },
      { num: "02", title: "High-season availability", desc: "Los Cabos sells out in December and Easter week. We secure aircraft months in advance." },
      { num: "03", title: "Golf, fishing and yacht logistics", desc: "We coordinate ground transport, ice, gear and catering before you land." },
      { num: "04", title: "Empty legs on this route", desc: "We frequently have repositioning flights CDMX→Cabos at a discount. Ask us." },
    ],
    sections: [
      {
        heading: "Baja California Sur, nonstop",
        body:
          "Los Cabos is the Mexican Pacific's premier leisure destination: championship golf, sport fishing, corridor villas and the Cabo San Lucas marina. By private jet, the trip from Toluca (MMTO) takes exactly 2 hours, nonstop — without the connections commercial itineraries often impose in high season.\n\nMost of our clients fly as a group — family, guests, golf foursomes — and the private flight solves what airlines complicate: sports luggage with no restrictions, pets in the cabin and schedules that adapt to the plan, not the other way around.",
      },
      {
        heading: "Arrival at Los Cabos (MMSD): executive terminal",
        body:
          "Your flight lands at Los Cabos International Airport (MMSD / SJD) with handling at the executive terminal and private FBO ramp: swift processing, ground transport directly on the platform, and departure toward the tourist corridor, Palmilla or Cabo San Lucas within minutes. Your gear — golf bags, rods, coolers — travels with you and is hand-delivered.",
      },
      {
        heading: "Golf, fishing and yachts: logistics included",
        body:
          "We coordinate the full logistics of the sporting trip: golf and fishing equipment transport, ice and catering on board, transfers to the corridor's courses (Quivira, Palmilla, Diamante) and connection to your yacht or fishing charter at the marina. Mention it in your quote and it's solved before wheels up.",
      },
      {
        heading: "December and Easter sell out: book early",
        body:
          "Los Cabos, along with Cancún, exhausts private aviation availability fastest on peak dates. For Christmas, New Year's and Easter we recommend securing an aircraft 4 to 6 weeks in advance. The rest of the year the route generates frequent empty legs in both directions — with flexible dates, the discounts are considerable.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Mexico City to Los Cabos cost?",
        a: "A one-way flight on a light jet (Learjet 31 or 35, up to 7 passengers) starts at 12,750 USD + tax; on a Hawker 800A (up to 9 passengers) from 19,500 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Los Cabos by private jet?",
        a: "About 2 hours nonstop. Door to door — from Santa Fe or Polanco to your villa on the corridor — the full trip is around 3.5 hours.",
      },
      {
        q: "Can I bring golf clubs and fishing gear?",
        a: "Yes, with none of an airline's restrictions. The Hawker 800A is the golf groups' favorite for its generous hold; your gear travels with you and is delivered on the platform.",
      },
      {
        q: "Which aircraft operate the Mexico City–Los Cabos route?",
        a: "Learjet 31 and 35 (light jets, up to 7 passengers) and Hawker 800A (midsize, up to 9 passengers with stand-up cabin). For larger groups we quote heavy jets.",
      },
      {
        q: "Are there empty legs to Los Cabos?",
        a: "Yes — the route generates frequent repositioning flights in both directions, especially around weekends and high season. With flexible dates the discounts are significant.",
      },
      {
        q: "Where do private flights to Los Cabos depart from?",
        a: "From Toluca International Airport (MMTO), the executive aviation hub of the Valley of Mexico, about 40 minutes from Santa Fe, Polanco and Interlomas.",
      },
    ],
  },
  "cdmx-miami": {
    title: "Private Jet Mexico City to Miami | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Miami (KMIA / KOPF) in 3.5 hours. Nonstop, no commercial terminals. From $25,300 USD. Available 24/7.",
    heroSubtitle:
      "Nonstop in 3.5 hours. Full international handling from MMTO — AFAC departure, FAA arrival, no commercial terminals, no connections.",
    waMessage: "Hi, I'd like to quote a private flight Mexico City → Miami.",
    stats: { distance: "≈ 2,720 km", time: "3h 30m", price: "From $25,300", aircraft: "Midsize / Heavy" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Miami International (KMIA) — Commercial & private FBO / Opa-locka Executive (KOPF) — Preferred private arrival",
    },
    aircraft: [
      { category: "Midsize Jet", name: "Hawker 800A", pax: "8–9", range: "4,600 km", note: "Range at the limit with favorable winds. The most economical option for this international route." },
      { category: "Heavy Jet", name: "Challenger 601", pax: "10–12", range: "6,300 km", note: "The benchmark on MMTO–Miami. Stand-up cabin, full galley, strong range margin." },
      { category: "Heavy Jet", name: "Gulfstream G450", pax: "14–16", range: "7,800 km", note: "Ultra-premium for large groups. Flat beds and intercontinental comfort available." },
    ],
    why: [
      { num: "01", title: "End-to-end international compliance", desc: "We handle AFAC flight plans, CBP pre-clearance and FBO coordination on both sides." },
      { num: "02", title: "Opa-locka vs. MIA", desc: "OPF avoids MIA congestion. 20 minutes closer to Brickell, Coral Gables and Miami Beach." },
      { num: "03", title: "The business-day use case", desc: "Board meeting in Mexico City to a closing in Miami in a single day — with margin for delays." },
      { num: "04", title: "Pets, cash, jewelry — friction-free", desc: "A private departure means zero commercial security restrictions on valuables or companions." },
    ],
    sections: [
      {
        heading: "Mexico–Miami: the benchmark international route",
        body:
          "Miami is the natural bridge between Mexico and the East Coast's financial, real estate and yachting worlds: Brickell, Coral Gables, private banks, Art Basel and the boat shows. By private jet, the trip from Toluca (MMTO) takes 3 hours 30 minutes nonstop, with full international handling at both ends.\n\nOur service covers the AFAC flight plan and departure, the eAPIS manifest for CBP, and immigration processing on arrival directly at the FBO — you never set foot in a commercial terminal.",
      },
      {
        heading: "Opa-locka (KOPF) vs. Miami International (KMIA)",
        body:
          "For most missions we recommend Opa-locka Executive (KOPF): Miami's reference executive airport, free of MIA's congestion and 20 minutes closer to Brickell, Coral Gables and Miami Beach. KMIA remains available when the agenda requires it — for instance, connections with the rest of the group's commercial flights. In both cases CBP processing happens at the FBO within minutes.",
      },
      {
        heading: "Business and shopping without commercial restrictions",
        body:
          "A private departure removes the frictions that weigh most on this route: valuables, jewelry, art, declared cash and pets travel with you in the cabin, with the correct paperwork verified by us before departure. On the return we coordinate Mexican customs clearance in Toluca with the same agility.",
      },
      {
        heading: "Paperwork for flying to the United States",
        body:
          "Every passenger needs a valid passport and a U.S. visa (or ESTA depending on nationality). We transmit the eAPIS manifest to CBP, manage overflight and landing permits, and verify the whole group's documentation before departure. Additional requirements apply for minors and pets, which we validate as part of the service.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Mexico City to Miami cost?",
        a: "A one-way flight on a Hawker 800A (up to 9 passengers) starts at 25,300 USD + tax; on a Challenger 601 (up to 12 passengers) from 44,000 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Miami by private jet?",
        a: "3 hours 30 minutes nonstop. Versus a commercial itinerary with international check-in and immigration, the door-to-door saving exceeds 3 hours.",
      },
      {
        q: "Which Miami airport does the flight arrive at?",
        a: "We recommend Opa-locka Executive (KOPF), Miami's executive airport: no congestion and 20 minutes closer to Brickell and Miami Beach. KMIA is available if your agenda requires it.",
      },
      {
        q: "What documents do I need to fly privately to Miami?",
        a: "A valid passport and U.S. visa (or ESTA depending on nationality). We handle eAPIS, permits and CBP coordination; immigration processing happens at the FBO in minutes.",
      },
      {
        q: "Which aircraft operate the Mexico City–Miami route?",
        a: "Hawker 800A (midsize, the most economical option), Challenger 601 (the route's benchmark, stand-up cabin) and Gulfstream G450 for large groups or maximum comfort.",
      },
      {
        q: "Can I travel with pets, art or jewelry?",
        a: "Yes. A private departure removes commercial restrictions: pets in the cabin and valuables with you, with the correct documentation verified before departure.",
      },
    ],
  },
  "cdmx-monterrey": {
    title: "Private Jet Mexico City to Monterrey | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Monterrey (MMMY / MMAN) in 1.5 hours. The quintessential business route. From $9,500 USD. Available 24/7.",
    heroSubtitle:
      "A business route done right. Door to door in under 3 total hours — take off on your schedule, land ready to work.",
    waMessage: "Hi, I'd like to quote a private flight Mexico City → Monterrey.",
    stats: { distance: "≈ 930 km", time: "1h 30m", price: "From $9,500", aircraft: "Turboprop / Light Jet" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "General Mariano Escobedo (MMMY) — Monterrey International / Del Norte (MMAN) — Closer to San Pedro Garza García",
    },
    aircraft: [
      { category: "Turboprop", name: "Piper M500", pax: "4–5", range: "1,520 km", note: "The most economical for 1–2 passengers. Perfect short-range efficiency on the MMTO–MTY corridor." },
      { category: "Light Jet", name: "Learjet 35", pax: "6–8", range: "3,800 km", note: "Jet speed on a short route. Arrives 20 minutes faster than turboprop options." },
      { category: "Light Jet", name: "Learjet 75", pax: "6–8", range: "3,780 km", note: "Modern avionics, quiet cabin. Best for executives who want the full jet experience on this hop." },
    ],
    why: [
      { num: "01", title: "The CDMX–MTY corridor is our most-flown route", desc: "We operate it weekly. Preferred slots, trusted operators, zero surprises." },
      { num: "02", title: "Access to San Pedro Garza García", desc: "MMAN puts you 15 minutes from Valle Oriente and Cumbres. MMMY adds 30 minutes of traffic." },
      { num: "03", title: "Same-day returns", desc: "Take off at 07:00, close your meeting by 14:00, back in Mexico City by 17:00. One aircraft, one day." },
      { num: "04", title: "Corporate accounts", desc: "Monthly billing, recurring bookings and dedicated account management available." },
    ],
    sections: [
      {
        heading: "The country's most important business corridor",
        body:
          "Mexico City–Monterrey is Mexico's quintessential executive route: corporate headquarters in San Pedro Garza García, manufacturing in Apodaca and Santa Catarina, and a constant flow of board meetings, closings and plant visits. By private jet, the trip from Toluca (MMTO) takes 1 hour 30 minutes — and unlike a commercial flight, it departs when you decide.\n\nIt is our most-flown route and we operate it weekly: preferred slots, trusted operators and logistics that are solved before you ask.",
      },
      {
        heading: "Del Norte (MMAN) or Escobedo (MMMY): choose by agenda",
        body:
          "Monterrey has two possible arrivals and the choice matters: Del Norte Airport (MMAN) sits 15 minutes from Valle Oriente and San Pedro Garza García — ideal for the corporate district — while Mariano Escobedo (MMMY) suits Apodaca and the industrial zone. In your quote we recommend the optimal arrival for your meetings; the difference can be 30 to 40 minutes of traffic.",
      },
      {
        heading: "There and back in one day, no hotel",
        body:
          "The classic use of this route: take off from Toluca at 07:00, first meeting in San Pedro at 09:30, working lunch, and a 18:00 return to dine at home. The aircraft waits on the platform throughout your agenda and the return adjusts if the meeting runs long. We quote the full day with waiting time included — frequently more efficient than two one-way flights.",
      },
      {
        heading: "Corporate accounts: the route that justifies the program",
        body:
          "For companies with recurring travel on the CDMX–Monterrey corridor we offer corporate accounts with monthly billing, preferred volume rates, single-message bookings and dedicated management. If your executive team flies this route twice a month or more, the corporate program reduces cost and friction measurably.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Mexico City to Monterrey cost?",
        a: "A one-way flight on a Piper M500 turboprop (1–4 passengers) starts at 9,500 USD + tax; on a Learjet 35 (up to 7 passengers) from 12,500 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Monterrey by private jet?",
        a: "1 hour 30 minutes by jet and about 2 hours by turboprop. Door to door, the saving versus a commercial flight is 2 to 3 hours each way.",
      },
      {
        q: "Should I arrive at Del Norte (MMAN) or Escobedo (MMMY)?",
        a: "For agendas in San Pedro Garza García and Valle Oriente, MMAN is 15 minutes away. MMMY suits Apodaca and the industrial zone. We recommend the optimal arrival in your quote.",
      },
      {
        q: "Can I go and return the same day?",
        a: "It's the most common use of the route: the aircraft waits during your agenda and the return adjusts if the meeting runs long. We quote the full day with waiting included.",
      },
      {
        q: "Which aircraft operate the Mexico City–Monterrey route?",
        a: "Piper M500 (turboprop, the most economical for 1–4 passengers), Learjet 35 and Learjet 75 (light jets, up to 8 passengers with modern avionics and a quiet cabin).",
      },
      {
        q: "Do you offer corporate rates for recurring flights?",
        a: "Yes: monthly billing, volume rates and dedicated account management. It's the ideal program for teams flying the CDMX–Monterrey corridor regularly.",
      },
    ],
  },
  "toluca-acapulco": {
    title: "Private Jet Toluca to Acapulco | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Acapulco in ~45 min. Learjet 35 and Hawker 800, empty legs and quotes in under 30 minutes. 24/7.",
    heroSubtitle:
      "Acapulco 45 minutes from the runway. No stops, no lines and no Autopista del Sol fatigue — from Toluca (MMTO), Mexico City's executive hub, straight to the bay.",
    waMessage: "Hi, I'd like to quote a private flight from Toluca to Acapulco.",
    stats: { distance: "≈ 290 km", time: "45 min", price: "From $5,950", aircraft: "Light / Midsize" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Acapulco International (MMAA) — ICCS FBO, IS-BAH Stage III",
    },
    aircraft: [
      { category: "Light Jet", name: "Learjet 35", pax: "6–7", range: "3,800 km", note: "From $5,950 USD + tax (one-way). Agile and efficient: the most frequent choice on this short route." },
      { category: "Midsize Jet", name: "Hawker 800", pax: "8", range: "4,600 km", note: "From $7,550 USD + tax (one-way). Stand-up cabin, full galley and plenty of room for a family weekend." },
    ],
    why: [
      { num: "01", title: "45 minutes in the air", desc: "Versus nearly 4 hours on the Autopista del Sol or a commercial flight's connections. A morning call and by afternoon you're on the sand." },
      { num: "02", title: "Toluca (MMTO), Mexico City's executive hub", desc: "40 minutes from Santa Fe, Polanco and Interlomas. Swift FBO dispatch, no commercial terminals." },
      { num: "03", title: "Overnight or return — whichever works", desc: "For 1–3 day stays it often pays for the aircraft to stay over. We quote both scenarios so you pick the best value." },
      { num: "04", title: "Frequent empty legs", desc: "Acapulco generates a steady flow of empty legs both ways. With flexible dates, big discounts off the regular rate." },
    ],
    sections: [
      {
        heading: "The shortest flight to rest",
        body:
          "Toluca and Acapulco are barely ~290 km apart. By private jet the trip takes about 45 minutes in the air, versus nearly 4 hours on the highway or the connections and waits of a commercial flight. Of all the routes we operate, it's the one that best converts time into rest: a morning call and by the afternoon you're on the sand.\n\nIt's a flight designed for disconnecting. Most of our clients on this route are business owners escaping for the weekend with family or friends — little work, plenty of sea. We solve everything so the only decision left is what time you want to take off.",
      },
      {
        heading: "Round trip, or should the aircraft stay?",
        body:
          "Because the hop is so short, on 1-, 2- or even 3-day stays it often makes sense for the aircraft to overnight in Acapulco with you rather than fly back empty and return for you. Each overnight has an additional cost, but on short weekends it is frequently the most efficient option. Your quote presents both scenarios — round trip with the aircraft returning vs. overnight — so you choose the best value.",
      },
      {
        heading: "Empty legs to Acapulco: the most accessible way to fly",
        body:
          "Acapulco generates a constant flow of empty legs (repositioning segments) both inbound and outbound. If your schedule has date flexibility, these flights offer significant discounts off the regular charter rate. We publish updated availability; ask about current empty legs on the Toluca–Acapulco route and we'll alert you as soon as one fits your plans.",
      },
      {
        heading: "Arrival in Acapulco: ICCS FBO (MMAA)",
        body:
          "Your flight lands at Acapulco International Airport (MMAA / ACA), where executive operations are handled by the ICCS FBO. It is the bay's reference private terminal: executive lounges, crew areas, its own commissary and international IS-BAH Stage III certification, with swift runway access so deplaning is as smooth as departure. From there, we coordinate your ground transport to the Diamante zone or the Costera as part of the service.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Toluca to Acapulco cost?",
        a: "It depends on the aircraft and date. A one-way on a Learjet 35 (up to 6–7 passengers) starts at 5,950 USD + tax, and on a Hawker 800 (up to 8 passengers) at 7,550 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Acapulco by private jet?",
        a: "About 45 minutes in the air, versus nearly 4 hours on the Autopista del Sol. With swift dispatch from the Toluca FBO, the door-to-door trip is a fraction of any alternative.",
      },
      {
        q: "Which aircraft operate the Toluca–Acapulco route?",
        a: "Most frequently the Learjet 35 (light jet, up to 7 passengers) and the Hawker 800 (midsize jet, up to 8 passengers). For groups or special requirements we quote other options from our certified operator network.",
      },
      {
        q: "Is it worth having the aircraft overnight in Acapulco?",
        a: "On 1–3 day stays it's often more efficient for the aircraft to stay with you instead of making two repositioning trips. Each night has an additional cost; the quote compares that scenario against a round trip.",
      },
      {
        q: "Are there empty legs to Acapulco?",
        a: "Yes — it's a route with a frequent flow of empty legs in both directions. With flexible dates you can access significant discounts off the regular charter rate.",
      },
      {
        q: "Can I depart from Mexico City to Acapulco?",
        a: "Yes. The route operates from Toluca International Airport (MMTO), the executive aviation hub of the Valley of Mexico, about 40 minutes from Santa Fe, Polanco and Interlomas — the usual base for private flights from Mexico City.",
      },
    ],
  },
  "toluca-guadalajara": {
    title: "Private Jet Toluca to Guadalajara | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Guadalajara (MMGL) in ~55 min. Turboprop and light jets, same-day returns. Quotes in under 30 minutes. 24/7.",
    heroSubtitle:
      "Western Mexico's business corridor in 55 minutes. Take off from Toluca (MMTO) on your schedule, close in Guadalajara and return the same day — no lines, no connections, no unnecessary hotel nights.",
    waMessage: "Hi, I'd like to quote a private flight from Toluca to Guadalajara.",
    stats: { distance: "≈ 430 km", time: "55 min", price: "From $5,500", aircraft: "Turboprop / Light" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Miguel Hidalgo y Costilla (MMGL) — Guadalajara, Aerosafin FBO",
    },
    aircraft: [
      { category: "Turboprop", name: "Piper M500", pax: "4–5", range: "1,520 km", note: "From $5,500 USD + tax (one-way). The most efficient option for 1–4 passengers on this short hop." },
      { category: "Light Jet", name: "Learjet 35", pax: "6–7", range: "3,800 km", note: "From $6,950 USD + tax (one-way). Jet speed: under an hour in the air, ideal for tight agendas." },
      { category: "Midsize Jet", name: "Learjet 45", pax: "7–9", range: "3,700 km", note: "From $8,400 USD + tax (one-way). A roomier cabin for full working teams." },
    ],
    why: [
      { num: "01", title: "55 minutes vs. 6 hours of highway", desc: "The Mexico City–Guadalajara highway eats the whole day. By private jet you breakfast in CDMX, lunch in Providencia and dine back home." },
      { num: "02", title: "Same-day returns", desc: "07:30 wheels up, 10:00 meeting in Zapopan, 18:00 return. One aircraft, one full workday, zero hotels." },
      { num: "03", title: "Toluca (MMTO), Mexico City's executive hub", desc: "40 minutes from Santa Fe, Polanco and Interlomas. 15-minute FBO dispatch, no commercial terminals." },
      { num: "04", title: "Real schedule flexibility", desc: "If the meeting runs long, the aircraft waits. No itinerary-change fees in most cases." },
    ],
    sections: [
      {
        heading: "Western Mexico's business route",
        body:
          "Guadalajara is the country's second urban economy: tech in Zapopan, manufacturing in El Salto, agribusiness in Los Altos and an events ecosystem — Expo Guadalajara, FIL, Expo Ferretera — that moves executives year round. By private jet, the trip from Toluca (MMTO) takes about 55 minutes in the air, versus 6+ hours by highway or the 4–5 real hours a commercial flight consumes door to door between lines, check-in and transfers.\n\nFor business travelers the math is simple: this route flown privately turns an overnight trip into a normal office day that ends at home.",
      },
      {
        heading: "Turboprop or jet? It depends on the group",
        body:
          "On short distances like Toluca–Guadalajara, the Piper M500 turboprop is unbeatable on cost for 1–4 passengers: the time difference versus a jet is barely 20–25 minutes. For groups of 5 or more, or when the agenda demands maximum speed, the Learjet 35 or Learjet 45 make the hop in under an hour with a full jet cabin.\n\nYour quote presents both scenarios with a transparent breakdown so you choose by cost, time or comfort.",
      },
      {
        heading: "Arrival in Guadalajara (MMGL)",
        body:
          "Your flight lands at Miguel Hidalgo y Costilla International Airport (MMGL / GDL), with handling at the Aerosafin FBO — Guadalajara's reference FBO: swift dispatch and your ground transport directly on the platform. The drive to Providencia, Andares or Zapopan takes about 45 minutes, and we coordinate it as part of the service so arrival is as smooth as departure.",
      },
      {
        heading: "Empty legs and frequent flights on the corridor",
        body:
          "The constant flow of executive aviation between the Valley of Mexico and Guadalajara regularly generates empty legs (repositioning segments) in both directions. If your dates are flexible, ask about current availability: discounts off the regular rate can be considerable. For companies with recurring trips on this corridor we offer monthly billing and dedicated account management.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Toluca to Guadalajara cost?",
        a: "A one-way on a Piper M500 turboprop (up to 4–5 passengers) starts at 5,500 USD + tax; on a Learjet 35 (up to 7 passengers) from 6,950 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Guadalajara by private jet?",
        a: "About 55 minutes by jet and roughly 1 hour 20 minutes by turboprop, versus 6+ hours by highway. Door to door, the saving versus a commercial flight is 2 to 3 hours each way.",
      },
      {
        q: "Can I go and return the same day?",
        a: "Yes — it's the most common use of this route. The aircraft waits in Guadalajara and returns when you're done. We quote the full day with waiting included so you can compare against two one-ways.",
      },
      {
        q: "Which aircraft operate the Toluca–Guadalajara route?",
        a: "Turboprops like the Piper M500 for small groups, and light/midsize jets like the Learjet 35 and Learjet 45 for groups of up to 9 passengers or agendas that demand maximum speed.",
      },
      {
        q: "Are there empty legs between Mexico City and Guadalajara?",
        a: "Yes — it's a corridor with frequent repositioning in both directions. With flexible dates you can access significant discounts off the regular rate.",
      },
      {
        q: "Where do private flights to Guadalajara depart from?",
        a: "From Toluca International Airport (MMTO), the executive aviation hub of the Valley of Mexico, about 40 minutes from Santa Fe, Polanco and Interlomas.",
      },
    ],
  },
  "toluca-puerto-vallarta": {
    title: "Private Jet Toluca to Puerto Vallarta | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Puerto Vallarta (MMPR) in ~1h 15m. Learjet 35 and Hawker 800, empty legs and quotes in under 30 minutes. 24/7.",
    heroSubtitle:
      "Banderas Bay 75 minutes from the runway. Take off from Toluca (MMTO) after breakfast and have lunch by the sea — no stops, no lines, your agenda intact.",
    waMessage: "Hi, I'd like to quote a private flight from Toluca to Puerto Vallarta.",
    stats: { distance: "≈ 620 km", time: "1h 15m", price: "From $7,450", aircraft: "Light / Midsize" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Lic. Gustavo Díaz Ordaz (MMPR) — Puerto Vallarta, Aerotron FBO",
    },
    aircraft: [
      { category: "Light Jet", name: "Learjet 35", pax: "6–7", range: "3,800 km", note: "From $7,450 USD + tax (one-way). The most frequent choice: fast, efficient and with room for beach luggage." },
      { category: "Midsize Jet", name: "Hawker 800", pax: "8", range: "4,600 km", note: "From $9,650 USD + tax (one-way). Stand-up cabin and generous hold: ideal for families and long weekends." },
    ],
    why: [
      { num: "01", title: "75 minutes to the Pacific", desc: "Versus 8+ hours of highway or a commercial flight with check-in and lines. Leave after breakfast, lunch by the bay." },
      { num: "02", title: "Gateway to Punta Mita and Riviera Nayarit", desc: "From the FBO to Punta Mita, Sayulita or the Marina with transport we coordinate. Direct arrival to villa, hotel or yacht." },
      { num: "03", title: "Overnight stays for weekends", desc: "For 1–3 day stays it often pays for the aircraft to stay over. We quote both scenarios so you pick the most efficient." },
      { num: "04", title: "Seasonal empty legs", desc: "Vallarta generates constant repositioning, especially in winter and holidays. With flexible dates, the discounts are significant." },
    ],
    sections: [
      {
        heading: "The direct door to Banderas Bay",
        body:
          "Puerto Vallarta and the Riviera Nayarit concentrate some of the country's most important leisure properties: Punta Mita, Conchas Chinas, the Marina and the Nayarit coast developments. By private jet, the trip from Toluca (MMTO) takes about 1 hour 15 minutes in the air — just enough for a coffee — versus a full day of driving or the 4 real hours of a commercial flight door to door.\n\nMost of our clients on this route fly with family or guests: a private flight allows unrestricted luggage, pets in the cabin and schedules that fit the house, not the airline.",
      },
      {
        heading: "From the runway to Punta Mita, friction-free",
        body:
          "Your flight lands at Lic. Gustavo Díaz Ordaz International Airport (MMPR / PVR), with handling at the Aerotron FBO — Vallarta's reference executive terminal — minutes from the Marina and the hotel zone. From there we coordinate ground transport to Punta Mita (45 minutes), Sayulita or your villa as part of the service, or a direct transfer to your yacht at the Marina. Deplaning takes minutes: no baggage carousels, no taxi lines.",
      },
      {
        heading: "Round trip or aircraft overnight?",
        body:
          "As on all short beach routes, on 1–3 day stays it frequently makes sense for the aircraft to overnight in Vallarta with you rather than return empty and come back for you. Each night has an additional cost, but on short weekends it's usually the most efficient option. Your quote compares both scenarios with a transparent breakdown.",
      },
      {
        heading: "High season: book ahead",
        body:
          "From November to April — and especially on long weekends, Christmas and Easter — private aviation demand to Vallarta and Punta Mita multiplies. We secure aircraft and slots weeks in advance for peak dates, and we publish the empty legs the season's constant flow generates. If your dates are flexible, ask about current availability.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Toluca to Puerto Vallarta cost?",
        a: "A one-way on a Learjet 35 (up to 6–7 passengers) starts at 7,450 USD + tax, and on a Hawker 800 (up to 8 passengers) at 9,650 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Puerto Vallarta by private jet?",
        a: "About 1 hour 15 minutes in the air. Door to door, from Santa Fe or Polanco to your villa on the bay, the full trip is around 3 hours.",
      },
      {
        q: "Can I get directly to Punta Mita or the Riviera Nayarit?",
        a: "The flight lands in Puerto Vallarta (MMPR) and we coordinate direct ground transport to Punta Mita (~45 min), Sayulita or any point on the Riviera Nayarit as part of the service.",
      },
      {
        q: "Can I travel with pets and beach luggage?",
        a: "Yes. On a private flight pets travel in the cabin and luggage — golf clubs, fishing gear, umbrellas — has none of a commercial airline's restrictions.",
      },
      {
        q: "Are there empty legs to Puerto Vallarta?",
        a: "Yes, especially in high season (November to April). With flexible dates you can access significant discounts off the regular charter rate.",
      },
      {
        q: "Where do private flights to Puerto Vallarta depart from?",
        a: "From Toluca International Airport (MMTO), the executive aviation hub of the Valley of Mexico, about 40 minutes from Santa Fe, Polanco and Interlomas.",
      },
    ],
  },
  "toluca-houston": {
    title: "Private Jet Toluca to Houston | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Houston (KHOU) in ~2 hours. Full international handling, light and midsize jets. From $14,500 USD. 24/7.",
    heroSubtitle:
      "Business, medicine and shopping in 2 hours. Full international handling from Toluca (MMTO): AFAC departure, CBP arrival, no commercial terminals or connections.",
    waMessage: "Hi, I'd like to quote a private flight from Toluca to Houston.",
    stats: { distance: "≈ 1,220 km", time: "2h 00m", price: "From $14,500", aircraft: "Light / Midsize" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "William P. Hobby (KHOU) — Houston, executive FBO with on-site CBP",
    },
    aircraft: [
      { category: "Light Jet", name: "Learjet 35", pax: "6–7", range: "3,800 km", note: "From $14,500 USD + tax (one-way). The most economical option for this international route with ample range margin." },
      { category: "Midsize Jet", name: "Hawker 800A", pax: "8–9", range: "4,600 km", note: "From $16,300 USD + tax (one-way). Stand-up cabin and full galley: the Mexico–Texas corridor standard." },
      { category: "Heavy Jet", name: "Challenger 601", pax: "10–12", range: "6,300 km", note: "From $26,500 USD + tax (one-way). For full executive teams or families with medical agendas." },
    ],
    why: [
      { num: "01", title: "End-to-end international compliance", desc: "AFAC flight plan, eAPIS, CBP processing on arrival and FBO coordination on both sides. You just show your passport." },
      { num: "02", title: "Hobby (KHOU), not IAH", desc: "Hobby's FBOs are 20–25 minutes from the Texas Medical Center, downtown and the Galleria. IAH adds 45 minutes of traffic." },
      { num: "03", title: "The reference medical route", desc: "MD Anderson, Houston Methodist and the Texas Medical Center. We coordinate arrivals with direct transport and absolute discretion." },
      { num: "04", title: "There and back in one day", desc: "Take off at 07:00, meeting or consultation at midday, back in Mexico City for dinner. No connections, no nights away." },
    ],
    sections: [
      {
        heading: "The Mexico–Texas executive bridge",
        body:
          "Houston is the most frequent international destination of Mexican executive aviation: energy, banking, medicine and trade move flights every day of the week. By private jet, the trip from Toluca (MMTO) takes about 2 hours nonstop, versus the 5–6 real hours a commercial flight consumes door to door between international check-in, immigration and lines.\n\nOur service includes full international handling: AFAC flight plan and departure in Toluca, eAPIS manifests for CBP, and immigration processing on arrival directly at the FBO — without setting foot in a commercial terminal at any point.",
      },
      {
        heading: "Hobby (KHOU): the right arrival in Houston",
        body:
          "We recommend William P. Hobby (KHOU) over the intercontinental airport (KIAH) for almost every mission: its executive FBOs — Million Air, Signature, Wilson Air, among others; we work with all of them — have on-site CBP for international processing in minutes, and it sits 20–25 minutes from the Texas Medical Center, downtown and the Galleria area. We coordinate your ground transport directly to the platform so time on the ground is minimal.",
      },
      {
        heading: "Medical flights: discretion and logistics",
        body:
          "A significant share of our Houston flights have a medical purpose: treatments and consultations at MD Anderson, Houston Methodist or the Texas Medical Center. We coordinate schedules around appointments, direct ground transport, medical luggage and companions, with total discretion. If the patient requires specialized assistance on board, our air ambulance division offers medically equipped aircraft with certified flight personnel.",
      },
      {
        heading: "Paperwork for flying to the United States",
        body:
          "For private flights to the U.S., every passenger needs a valid passport and a U.S. visa (or ESTA depending on nationality). We transmit the eAPIS manifest to CBP, manage overflight and landing permits, and verify documentation before departure so there are no surprises. Immigration processing on arrival happens at the FBO itself in a matter of minutes.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Toluca to Houston cost?",
        a: "A one-way on a Learjet 35 (up to 6–7 passengers) starts at 14,500 USD + tax; on a Hawker 800A (up to 9 passengers) from 16,300 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Houston by private jet?",
        a: "About 2 hours nonstop. Door to door, the saving versus a commercial international flight is 3 to 4 hours each way.",
      },
      {
        q: "What documents do I need to fly privately to Houston?",
        a: "A valid passport and U.S. visa (or ESTA depending on your nationality). We handle eAPIS, overflight permits and CBP coordination; you just present your documents when boarding.",
      },
      {
        q: "Which Houston airport does the flight arrive at?",
        a: "We recommend William P. Hobby (KHOU), whose FBOs have on-site CBP processing and sit 20–25 minutes from the Texas Medical Center, downtown and the Galleria. KIAH is available if your agenda requires it.",
      },
      {
        q: "Do you handle medical flights to Houston?",
        a: "Yes, it's one of our specialties: we coordinate schedules around appointments at MD Anderson or Houston Methodist, direct transport and companions. For patients requiring assistance on board we offer dedicated air ambulance service.",
      },
      {
        q: "Can I go and return the same day?",
        a: "Yes. With a 07:00 departure you can have 4–5 hours in Houston and be back in the Valley of Mexico the same night. The aircraft waits at the FBO during your agenda.",
      },
    ],
  },
  "toluca-punta-cana": {
    title: "Private Jet Toluca to Punta Cana | Numen Aviation",
    description:
      "Private jet charter from Toluca (MMTO) to Punta Cana (MDPC) in ~4h 35m. Midsize and heavy jets, full international handling. From $42,000 USD. 24/7.",
    heroSubtitle:
      "The eastern Caribbean without commercial connections. From Toluca (MMTO) to the sands of Punta Cana in ~4h 35m — with a brief technical stop in Cozumel — and full international handling to the executive terminal.",
    waMessage: "Hi, I'd like to quote a private flight from Toluca to Punta Cana.",
    stats: { distance: "≈ 3,300 km", time: "4h 35m", price: "From $42,000", aircraft: "Midsize / Heavy" },
    airports: {
      departure: "Licenciado Adolfo López Mateos (MMTO) — Toluca",
      arrival: "Punta Cana International (MDPC) — Executive FBO terminal",
    },
    aircraft: [
      { category: "Midsize Jet", name: "Hawker 800A", pax: "8", range: "4,600 km", note: "From $42,000 USD + tax (one-way). The most efficient option for groups of up to 8 with adequate range margin." },
      { category: "Heavy Jet", name: "Challenger 601", pax: "10–12", range: "6,300 km", note: "From $52,500 USD + tax (one-way). Wide cabin and range to spare: the ideal balance on this Caribbean route." },
      { category: "Heavy Jet", name: "Gulfstream G450", pax: "12–14", range: "7,800 km", note: "From $59,000 USD + tax (one-way). Ultra-premium for large groups, with room to rest in flight." },
    ],
    why: [
      { num: "01", title: "No connections via Panama or Miami", desc: "Commercially, Punta Cana from Mexico City almost always means a connection. Privately, just a brief technical stop in Cozumel for departure formalities — you don't even change seats." },
      { num: "02", title: "Full international handling", desc: "AFAC departure, overflight permits, Dominican immigration on arrival and complete FBO coordination. You just board." },
      { num: "03", title: "Groups, weddings and golf", desc: "Cap Cana, Casa de Campo and the east coast resorts. We coordinate bulky luggage, golf bags and onboard catering." },
      { num: "04", title: "Executive terminal arrival", desc: "MDPC has a dedicated FBO: private immigration in minutes and direct transport to your resort or villa." },
    ],
    sections: [
      {
        heading: "The eastern Caribbean, direct from the Valley of Mexico",
        body:
          "Punta Cana, Cap Cana and Casa de Campo have become the Caribbean's preferred destinations for weddings, golf and luxury getaways. The problem is getting there: commercially from Mexico City it almost always means a connection in Panama, Miami or Bogotá, turning the trip into a full day. By private jet, the trip from Toluca (MMTO) takes about 4 hours 35 minutes including a brief technical stop in Cozumel — a Mexican regulatory requirement for flights to the Caribbean and Central America — without changing aircraft, with your whole group, unrestricted luggage and your schedule.\n\nIt's the favorite route for events: bachelor parties, anniversaries and golf tournaments where the group travels together and the experience starts at boarding.",
      },
      {
        heading: "Which aircraft suits a Caribbean crossing",
        body:
          "For a ~3,300 km flight over water we recommend midsize jets with ample range or heavy jets. The Hawker 800A covers the mission efficiently for groups of up to 8; the Challenger 601 and Gulfstream G450 add a wide cabin, higher cruise speed and room to rest in flight — a difference you appreciate over 4+ hours. Your quote compares the available options with a full breakdown.",
      },
      {
        heading: "Arrival at Punta Cana (MDPC): executive terminal",
        body:
          "Punta Cana International Airport (MDPC / PUJ) has a dedicated FBO terminal for private aviation: Dominican immigration and customs in minutes, private lounges and ground transport directly on the platform. From there, your transfer to Cap Cana takes 15 minutes and to the east coast resorts between 10 and 30 minutes — all coordinated by us as part of the service.",
      },
      {
        heading: "Documents and permits for the Dominican Republic",
        body:
          "For private flights to the Dominican Republic every passenger needs a valid passport; Mexican citizens do not require a visa for tourist stays. We manage international overflight and landing permits, the AFAC departure flight plan and coordination with the destination FBO, verifying all documentation before departure. Mexico's international departure is formalized during the technical stop in Cozumel, where our dispatcher coordinates the process so time on the ground is minimal.",
      },
    ],
    faq: [
      {
        q: "How much does a private jet from Toluca to Punta Cana cost?",
        a: "A one-way on a Hawker 800A (up to 8 passengers) starts at 42,000 USD + tax; on a Challenger 601 (up to 12 passengers) from 52,500 USD + tax. Prices are estimates subject to availability; we deliver a fully itemized quote in under 30 minutes.",
      },
      {
        q: "How long is the flight from Toluca to Punta Cana by private jet?",
        a: "About 4 hours 35 minutes, including a brief technical stop in Cozumel required by Mexican regulation for Caribbean flights — without changing aircraft. Versus the 8–10 real hours of a commercial itinerary with a connection in Panama or Miami, the saving is still enormous.",
      },
      {
        q: "Do I need a visa to fly to Punta Cana?",
        a: "Mexican citizens do not need a visa for tourism in the Dominican Republic, only a valid passport. For other nationalities we verify requirements as part of the service.",
      },
      {
        q: "Which aircraft operate the Toluca–Punta Cana route?",
        a: "Midsize jets with ample range like the Hawker 800A and heavy jets like the Challenger 601 and Gulfstream G450, which add a wide cabin and comfort for the 4+ hours of flight.",
      },
      {
        q: "Can you take a large group for a wedding or event?",
        a: "Yes. For groups exceeding one aircraft's capacity we quote larger equipment like the Gulfstream G450, or coordinate additional aircraft. We also handle catering, bulky luggage and golf bags.",
      },
      {
        q: "Where do private flights to Punta Cana depart from?",
        a: "From Toluca International Airport (MMTO), the executive aviation hub of the Valley of Mexico, with full international handling: AFAC, overflight permits and destination FBO coordination.",
      },
    ],
  },
};

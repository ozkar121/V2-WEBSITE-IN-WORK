import { Link } from "react-router-dom";
import { Plane, Clock, ShieldCheck, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL, SITE_NAME, EMAIL, PHONE_NUMBER, PHONE_TEL, waLink } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";
import { RelatedLinks } from "@/components/RelatedLinks";
import { useLang } from "@/i18n/LanguageContext";
import heroToluca from "@/assets/toluca-aerial.jpg";

const PATH = "/renta-de-avion-privado";

const WA_TEXT_ES = "Hola, quiero rentar un avión privado. ¿Me ayudan a cotizar?";
const WA_TEXT_EN = "Hi, I'd like to charter a private aircraft. Can you send me a quote?";

const RentaAvionPrivado = () => {
  useReveal();
  const { lang, lp } = useLang();
  const isEs = lang === "es";

  const FAQ_ITEMS = isEs
    ? [
        {
          q: "¿Cuánto cuesta rentar un avión privado en México?",
          a: "Los precios estimados one-way desde Toluca (MMTO) inician en $5,950 USD + IVA a Acapulco, $9,500 USD + IVA a Monterrey y $12,000 USD + IVA a Cancún en Learjet 35. En rutas internacionales con Hawker 800A, desde $16,300 USD + IVA a Houston. Cada viaje se cotiza a la medida según ruta, aeronave y pasajeros.",
        },
        {
          q: "¿Qué tipos de aviones privados puedo rentar?",
          a: "Desde turbohélices como el Piper M500 para rutas cortas, light jets como el Learjet 35 para vuelos nacionales, midsize jets como el Hawker 800A para rutas internacionales, hasta jets de largo alcance como el Challenger 601 o Gulfstream G450. Recomendamos la aeronave según tu ruta, número de pasajeros y presupuesto.",
        },
        {
          q: "¿Con cuánta anticipación debo reservar?",
          a: "Lo ideal es reservar con 24 a 48 horas de anticipación. En casos urgentes podemos activar un vuelo el mismo día, sujeto a disponibilidad de aeronave y permisos. Nuestra cotización llega en 30 minutos, 24/7.",
        },
        {
          q: "¿De qué aeropuerto salen los vuelos?",
          a: "Todos nuestros vuelos salen del Aeropuerto Internacional de Toluca (MMTO), nuestra base exclusiva — a 20 minutos de Santa Fe y 35 de Polanco. Toluca ofrece slots flexibles, menos saturación y salida ágil desde la terminal privada (FBO).",
        },
        {
          q: "¿Rentan el avión completo o venden asientos individuales?",
          a: "Rentamos la aeronave completa: el avión es tuyo durante el trayecto, con horario y ruta a tu medida. Si buscas volar en privado a menor costo, revisa nuestros empty legs con descuentos de hasta 75%.",
        },
      ]
    : [
        {
          q: "How much does it cost to charter a private aircraft in Mexico?",
          a: "Estimated one-way prices from Toluca (MMTO) start at $5,950 USD + tax to Acapulco, $9,500 USD + tax to Monterrey and $12,000 USD + tax to Cancún on a Learjet 35. On international routes with a Hawker 800A, from $16,300 USD + tax to Houston. Every trip is quoted individually based on route, aircraft and passengers.",
        },
        {
          q: "What types of private aircraft can I charter?",
          a: "From turboprops like the Piper M500 for short routes, light jets like the Learjet 35 for domestic flights, midsize jets like the Hawker 800A for international routes, up to long-range jets like the Challenger 601 or Gulfstream G450. We recommend the aircraft based on your route, passenger count and budget.",
        },
        {
          q: "How far in advance should I book?",
          a: "Ideally 24 to 48 hours in advance. For urgent cases we can activate a same-day flight, subject to aircraft availability and clearances. Our quote arrives in 30 minutes, 24/7.",
        },
        {
          q: "Which airport do flights depart from?",
          a: "All our flights depart from Toluca International Airport (MMTO), our exclusive base — 20 minutes from Santa Fe and 35 from Polanco. Toluca offers flexible slots, less congestion and an agile departure from the private terminal (FBO).",
        },
        {
          q: "Do you charter the whole aircraft or sell individual seats?",
          a: "We charter the entire aircraft: the plane is yours for the trip, with schedule and routing built around you. If you want to fly private for less, check our empty legs with discounts of up to 75%.",
        },
      ];

  const seo = useSEO({
    title: isEs
      ? "Renta de Avión Privado en México — Cotiza en 30 Min | Numen Aviation"
      : "Private Aircraft Charter in Mexico — Quote in 30 Min | Numen Aviation",
    description: isEs
      ? "Renta de aviones privados desde Toluca (MMTO) a todo México, EUA, Caribe y Centroamérica. Turbohélices, Learjet, Hawker y jets de largo alcance. Precios desde $5,950 USD one-way. Cotización en 30 minutos, 24/7."
      : "Private aircraft charter from Toluca (MMTO) to Mexico, the USA, the Caribbean and Central America. Turboprops, Learjet, Hawker and long-range jets. Prices from $5,950 USD one-way. Quote in 30 minutes, 24/7.",
    path: PATH,
    image: `${SITE_URL}/og-renta-de-avion-privado.jpg`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: isEs ? "Renta de Avión Privado" : "Private Aircraft Charter",
        serviceType: isEs
          ? "Renta de aviones privados y charter ejecutivo"
          : "Private aircraft charter",
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          telephone: "+524442348942",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toluca",
            addressRegion: "Estado de México",
            addressCountry: "MX",
          },
        },
        areaServed: ["MX", "US", "Caribbean", "Central America"],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}${PATH}`,
          servicePhone: "+524442348942",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "5950",
          description: isEs
            ? "Precios estimados one-way desde Toluca (MMTO). Cada viaje se cotiza a la medida."
            : "Estimated one-way prices from Toluca (MMTO). Every trip is quoted individually.",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      buildBreadcrumb({ path: PATH })!,
    ],
  });

  const STATS = [
    { val: "30 min", lbl: isEs ? "Tiempo de Cotización" : "Quote Turnaround" },
    { val: "24 / 7", lbl: isEs ? "Operaciones" : "Operations" },
    { val: "MMTO", lbl: isEs ? "Base Exclusiva · Toluca" : "Exclusive Base · Toluca" },
    { val: "AFAC", lbl: isEs ? "Operadores Certificados" : "Certified Operators" },
  ];

  const AIRCRAFT = [
    {
      cat: isEs ? "Turbohélice" : "Turboprop",
      name: "Piper M500",
      pax: "4–5 pax",
      d: isEs
        ? "Rutas cortas y regionales — Monterrey, Guadalajara, San Miguel de Allende. La opción más eficiente para 1 a 2 horas de vuelo."
        : "Short and regional routes — Monterrey, Guadalajara, San Miguel de Allende. The most efficient option for 1–2 hour flights.",
    },
    {
      cat: isEs ? "Light Jet" : "Light Jet",
      name: "Learjet 35",
      pax: isEs ? "Hasta 7 pax" : "Up to 7 pax",
      d: isEs
        ? "Ágil y veloz para vuelos nacionales — Cancún, Los Cabos, Mérida, Acapulco. 867 km/h de crucero."
        : "Agile and fast for domestic flights — Cancún, Los Cabos, Mérida, Acapulco. 867 km/h cruise.",
    },
    {
      cat: "Midsize Jet",
      name: "Hawker 800A",
      pax: isEs ? "8 pax + baño" : "8 pax + lavatory",
      d: isEs
        ? "Cabina amplia y baño a bordo para rutas internacionales — Miami, Houston, Las Vegas, Caribe."
        : "Wide cabin and onboard lavatory for international routes — Miami, Houston, Las Vegas, the Caribbean.",
    },
    {
      cat: isEs ? "Largo Alcance" : "Long Range",
      name: "Challenger 601 · G450",
      pax: "8–13 pax",
      d: isEs
        ? "Vuelos transcontinentales y grupos grandes con máximo confort — Sudamérica, costa este de EUA, Europa."
        : "Transcontinental flights and larger groups in full comfort — South America, US East Coast, Europe.",
    },
  ];

  const PRICES = [
    { r: "Toluca → Acapulco", t: "~0h 35m", p: "$5,950 USD" },
    { r: "Toluca → Monterrey", t: "1h 30m", p: "$9,500 USD" },
    { r: "Toluca → Cancún", t: "2h 15m", p: "$12,000 USD" },
    { r: "Toluca → Los Cabos", t: "2h 00m", p: "$12,750 USD" },
    { r: "Toluca → Houston", t: "2h 00m", p: "$16,300 USD" },
    { r: "Toluca → Miami", t: "3h 30m", p: "$25,300 USD" },
  ];

  const STEPS = [
    {
      n: "01",
      t: isEs ? "Cuéntanos tu viaje" : "Tell us your trip",
      d: isEs
        ? "Ruta, fechas y número de pasajeros — por WhatsApp, teléfono o correo. Atendemos 24/7."
        : "Route, dates and passenger count — via WhatsApp, phone or email. We're on 24/7.",
    },
    {
      n: "02",
      t: isEs ? "Recibe opciones en 30 minutos" : "Get options in 30 minutes",
      d: isEs
        ? "Comparamos operadores certificados por AFAC y te presentamos las mejores aeronaves con precio cerrado — sin sesgo de flota propia."
        : "We compare AFAC-certified operators and present the best aircraft at a firm price — no fleet bias.",
    },
    {
      n: "03",
      t: isEs ? "Confirma y vuela desde MMTO" : "Confirm and fly from MMTO",
      d: isEs
        ? "Contrato, pago y coordinación completa. Llegas al FBO de Toluca y despegas — nosotros manejamos cada detalle."
        : "Contract, payment and full coordination. Arrive at the Toluca FBO and take off — we handle every detail.",
    },
  ];

  const WHY = [
    {
      Icon: ShieldCheck,
      t: isEs ? "Broker independiente" : "Independent brokerage",
      d: isEs
        ? "No tenemos flota propia: comparamos decenas de operadores certificados por AFAC y elegimos la aeronave correcta para tu misión — no la que nos conviene vender."
        : "We own no fleet: we compare dozens of AFAC-certified operators and pick the right aircraft for your mission — not the one we need to sell.",
    },
    {
      Icon: MapPin,
      t: isEs ? "Base exclusiva en Toluca (MMTO)" : "Exclusive base at Toluca (MMTO)",
      d: isEs
        ? "El hub de aviación ejecutiva del Valle de México: slots flexibles, menos saturación y FBO privado a 20 minutos de Santa Fe."
        : "The executive aviation hub of the Valley of Mexico: flexible slots, less congestion and a private FBO 20 minutes from Santa Fe.",
    },
    {
      Icon: Clock,
      t: isEs ? "Respuesta en 30 minutos" : "Response in 30 minutes",
      d: isEs
        ? "Cotización formal con opciones de aeronave y precio cerrado en 30 minutos, cualquier día, a cualquier hora."
        : "A formal quote with aircraft options and a firm price in 30 minutes, any day, any time.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {seo}
      <Navbar />

      <nav
        aria-label="breadcrumb"
        className="absolute z-10"
        style={{ top: "5.5rem", left: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <ol className="flex items-center gap-2 list-none p-0">
          <li className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>
            <Link to={lp("/")} className="hover:text-jade transition-colors">
              {isEs ? "Inicio" : "Home"}
            </Link>
          </li>
          <li className="text-jade/50">›</li>
          <li className="text-[0.65rem] uppercase text-jade" style={{ letterSpacing: "0.15em" }}>
            {isEs ? "Renta de Avión Privado" : "Private Aircraft Charter"}
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section
        className="relative isolate min-h-[80vh] flex flex-col justify-end overflow-hidden"
        style={{ padding: "9rem clamp(1.5rem, 4vw, 4rem) 4rem" }}
      >
        <img
          src={heroToluca}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 -z-20 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 35%, hsl(var(--background) / 0.3) 70%, transparent 100%), linear-gradient(to top, hsl(var(--background)) 0%, transparent 40%)",
          }}
        />

        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade/40 bg-jade/[0.08] w-fit mb-7 animate-fade-in">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-jade opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-jade" />
          </span>
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Charter On-Demand · 24 / 7 · MMTO" : "On-Demand Charter · 24 / 7 · MMTO"}
          </span>
        </div>

        <h1
          className="font-serif font-light text-foreground max-w-[820px]"
          style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", lineHeight: 1.1, marginBottom: "1.25rem" }}
        >
          {isEs ? "Renta de Avión Privado en México" : "Private Aircraft Charter in Mexico"}
        </h1>
        <p
          className="font-serif font-light leading-[1.05] text-foreground max-w-[820px]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {isEs ? (
            <>
              El avión correcto,<br />
              <em className="italic text-jade-light">al precio correcto.</em>
            </>
          ) : (
            <>
              The right aircraft,<br />
              <em className="italic text-jade-light">at the right price.</em>
            </>
          )}
        </p>
        <div className="w-[60px] h-px bg-jade my-8" />
        <p className="text-[0.95rem] font-light leading-[1.7] text-fg-3 max-w-[560px] mb-10">
          {isEs
            ? "Renta de aviones privados desde el Aeropuerto Internacional de Toluca (MMTO) a todo México, Estados Unidos, el Caribe y Centroamérica. Turbohélices, jets ligeros, medianos y de largo alcance — cotización a la medida en 30 minutos."
            : "Private aircraft charter from Toluca International Airport (MMTO) to Mexico, the United States, the Caribbean and Central America. Turboprops, light, midsize and long-range jets — a tailor-made quote in 30 minutes."}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={waLink(isEs ? WA_TEXT_ES : WA_TEXT_EN)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_28px_-2px_hsl(var(--jade)/0.85)] hover:shadow-[0_0_36px_0_hsl(var(--jade)/1)]"
            style={{ letterSpacing: "0.18em" }}
          >
            {isEs ? "Cotizar por WhatsApp" : "Quote via WhatsApp"}
          </a>
          <a
            href="#precios"
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors"
            style={{ letterSpacing: "0.18em" }}
          >
            {isEs ? "Ver Precios" : "See Prices"}
          </a>
        </div>
      </section>

      {/* URGENCY STRIP — contacto inmediato para tráfico de Google */}
      <div
        className="bg-jade/10 border-y border-jade/40"
        style={{ padding: "1rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center text-center">
          <span className="text-[0.7rem] uppercase text-jade-light font-medium" style={{ letterSpacing: "0.2em" }}>
            {isEs ? "Cotización en 30 Minutos" : "Quote in 30 Minutes"}
          </span>
          <span className="text-jade/40 hidden md:inline">·</span>
          <a
            href={waLink(isEs ? WA_TEXT_ES : WA_TEXT_EN)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] uppercase text-jade-light font-medium hover:text-foreground transition-colors underline underline-offset-4"
            style={{ letterSpacing: "0.2em" }}
          >
            {isEs ? "WhatsApp Directo" : "Direct WhatsApp"}
          </a>
          <span className="text-jade/40 hidden md:inline">·</span>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-1.5 text-[0.7rem] uppercase text-jade-light font-medium hover:text-foreground transition-colors"
            style={{ letterSpacing: "0.2em" }}
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE_NUMBER}
          </a>
          <span className="text-jade/40 hidden md:inline">·</span>
          <span className="text-[0.7rem] uppercase text-jade-light font-medium" style={{ letterSpacing: "0.2em" }}>
            24 / 7 · MMTO
          </span>
        </div>
      </div>

      {/* STATS */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 border border-jade-soft reveal mt-12"
        style={{ marginLeft: "clamp(1rem, 4vw, 4rem)", marginRight: "clamp(1rem, 4vw, 4rem)" }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.lbl}
            className={`p-7 px-6 ${i < STATS.length - 1 ? "md:border-r border-jade-soft" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
          >
            <div className="font-serif text-[1.8rem] font-light text-foreground mb-1">{s.val}</div>
            <div className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* AIRCRAFT OPTIONS */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Aeronaves" : "Aircraft"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>¿Qué avión privado<br /><em className="italic text-jade-light">necesita tu viaje?</em></>
            ) : (
              <>Which aircraft<br /><em className="italic text-jade-light">does your trip need?</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[640px]">
            {isEs
              ? "No vendemos una flota: como broker independiente, elegimos entre decenas de operadores certificados la aeronave que mejor se ajusta a tu ruta, pasajeros y presupuesto."
              : "We don't sell a fleet: as an independent brokerage, we choose from dozens of certified operators the aircraft that best fits your route, passengers and budget."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 border-t border-l border-jade-soft reveal">
          {AIRCRAFT.map((a) => (
            <article key={a.name} className="p-8 border-r border-b border-jade-soft">
              <Plane className="w-6 h-6 text-jade mb-5" strokeWidth={1.2} />
              <p className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.25em" }}>
                {a.cat}
              </p>
              <h3 className="font-serif text-[1.15rem] font-light text-foreground mb-1">{a.name}</h3>
              <p className="text-[0.7rem] uppercase text-fg-3 mb-4" style={{ letterSpacing: "0.15em" }}>
                {a.pax}
              </p>
              <p className="text-[0.85rem] leading-[1.7] text-fg-3">{a.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRICES */}
      <section id="precios" style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Precios Estimados" : "Estimated Prices"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>¿Cuánto cuesta rentar<br /><em className="italic text-jade-light">un avión privado?</em></>
            ) : (
              <>How much does it cost<br /><em className="italic text-jade-light">to charter one?</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[640px]">
            {isEs
              ? "Referencias one-way desde Toluca (MMTO) en Learjet 35 y Hawker 800A. Cada viaje se diseña y cotiza a la medida — estos precios son tu punto de partida."
              : "One-way references from Toluca (MMTO) on the Learjet 35 and Hawker 800A. Every trip is designed and quoted individually — these prices are your starting point."}
          </p>
        </div>
        <div className="mt-12 border border-jade-soft reveal max-w-[760px]">
          {PRICES.map((row, i) => (
            <div
              key={row.r}
              className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center px-6 py-4 ${i > 0 ? "border-t border-jade-soft" : ""}`}
            >
              <span className="text-[0.9rem] text-foreground">{row.r}</span>
              <span className="text-[0.75rem] text-fg-3 tabular-nums hidden sm:block">{row.t}</span>
              <span className="text-[0.9rem] text-jade-light tabular-nums">
                {isEs ? `Desde ${row.p} + IVA` : `From ${row.p} + tax`}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[0.72rem] text-fg-3 mt-6 italic max-w-[640px]">
          {isEs ? (
            <>
              Precios estimados one-way, sujetos a disponibilidad y cotización individual. Consulta la{" "}
              <Link to={lp("/cuanto-cuesta-jet-privado-mexico-2026")} className="text-jade-light hover:text-jade underline">
                guía completa de precios 2026
              </Link>{" "}
              o nuestros{" "}
              <Link to={lp("/empty-legs")} className="text-jade-light hover:text-jade underline">
                empty legs con hasta 75% de descuento
              </Link>
              .
            </>
          ) : (
            <>
              Estimated one-way prices, subject to availability and individual quotation. See the{" "}
              <Link to={lp("/cuanto-cuesta-jet-privado-mexico-2026")} className="text-jade-light hover:text-jade underline">
                full 2026 pricing guide
              </Link>{" "}
              or our{" "}
              <Link to={lp("/empty-legs")} className="text-jade-light hover:text-jade underline">
                empty legs with up to 75% off
              </Link>
              .
            </>
          )}
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "El Proceso" : "The Process"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>De la cotización al despegue<br /><em className="italic text-jade-light">en tres pasos.</em></>
            ) : (
              <>From quote to takeoff<br /><em className="italic text-jade-light">in three steps.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <ol className="mt-12 reveal list-none grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {STEPS.map((step) => (
            <li key={step.n} className="relative pt-6 border-t border-jade-soft">
              <span className="absolute top-[-1px] left-0 w-10 h-[2px] bg-jade" />
              <p className="text-[0.65rem] uppercase text-jade mb-2.5 font-medium" style={{ letterSpacing: "0.25em" }}>
                {step.n}
              </p>
              <h3 className="font-serif text-[1.1rem] font-light text-foreground mb-2">{step.t}</h3>
              <p className="text-[0.82rem] leading-[1.7] text-fg-3">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* WHY NUMEN */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Por Qué Numen" : "Why Numen"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>Construido por operadores,<br /><em className="italic text-jade-light">no por vendedores.</em></>
            ) : (
              <>Built by operators,<br /><em className="italic text-jade-light">not salespeople.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 border-t border-l border-jade-soft reveal">
          {WHY.map(({ Icon, t, d }) => (
            <article key={t} className="p-8 border-r border-b border-jade-soft">
              <Icon className="w-7 h-7 text-jade mb-5" strokeWidth={1.2} />
              <h3 className="text-[0.82rem] font-medium uppercase text-foreground mb-3" style={{ letterSpacing: "0.12em" }}>
                {t}
              </h3>
              <p className="text-[0.85rem] leading-[1.7] text-fg-3">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            FAQ
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>Preguntas <em className="italic text-jade-light">frecuentes.</em></>
            ) : (
              <>Frequently asked <em className="italic text-jade-light">questions.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <div className="mt-10 max-w-[820px] reveal">
          {FAQ_ITEMS.map((f, i) => (
            <div key={f.q} className={`py-7 ${i > 0 ? "border-t border-jade-soft" : ""}`}>
              <h3 className="font-serif text-[1.15rem] font-light text-foreground mb-3">{f.q}</h3>
              <p className="text-[0.88rem] leading-[1.8] text-fg-3">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section style={{ padding: "0 clamp(1.5rem, 4vw, 4rem) 4rem" }}>
        <div className="max-w-[820px]">
          <RelatedLinks path={PATH} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="border-y-2 border-jade text-center"
        style={{ padding: "5rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <h2
          className="font-serif font-light text-foreground mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          {isEs ? (
            <>Tu avión privado,<br /><em className="italic text-jade-light">a un mensaje de distancia.</em></>
          ) : (
            <>Your private aircraft,<br /><em className="italic text-jade-light">one message away.</em></>
          )}
        </h2>
        <p className="text-[0.9rem] text-fg-3 max-w-[540px] mx-auto leading-[1.7] mb-10">
          {isEs
            ? "Cuéntanos tu ruta, fechas y pasajeros. Recibe opciones de aeronave con precio cerrado en 30 minutos."
            : "Tell us your route, dates and passengers. Get aircraft options with a firm price in 30 minutes."}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={waLink(isEs ? WA_TEXT_ES : WA_TEXT_EN)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-4 text-[0.75rem] uppercase font-medium hover:bg-background hover:text-jade hover:border-jade border border-jade transition-all shadow-[0_0_28px_-2px_hsl(var(--jade)/0.85)]"
            style={{ letterSpacing: "0.2em" }}
          >
            {isEs ? "Cotizar por WhatsApp" : "Quote via WhatsApp"}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-4 text-[0.75rem] uppercase border border-foreground/30 hover:border-jade hover:text-jade-light transition-colors"
            style={{ letterSpacing: "0.2em" }}
          >
            <Phone className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-4 text-[0.75rem] uppercase border border-foreground/30 hover:border-jade hover:text-jade-light transition-colors"
            style={{ letterSpacing: "0.18em" }}
          >
            <Mail className="w-4 h-4" />
            {EMAIL}
          </a>
        </div>
      </section>

      <Footer />
      <div className="hidden md:block">
        <WhatsAppFAB />
      </div>

      {/* STICKY MOBILE CTA — siempre visible para contacto en un tap */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden border-t border-jade/50"
        style={{ background: "hsl(var(--background) / 0.97)", paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={waLink(isEs ? WA_TEXT_ES : WA_TEXT_EN)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-jade text-background py-4 text-[0.72rem] uppercase font-medium"
          style={{ letterSpacing: "0.15em" }}
        >
          {isEs ? "WhatsApp" : "WhatsApp"}
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-center justify-center gap-2 text-foreground py-4 text-[0.72rem] uppercase font-medium border-l border-jade/30"
          style={{ letterSpacing: "0.15em" }}
        >
          <Phone className="w-3.5 h-3.5" />
          {isEs ? "Llamar" : "Call"}
        </a>
      </div>
      {/* Espacio para que la barra fija no tape el footer en móvil */}
      <div className="h-14 md:hidden" />
    </div>
  );
};

export default RentaAvionPrivado;

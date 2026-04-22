import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { CornerBrackets } from "@/components/CornerBrackets";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { waLink, PHONE_NUMBER, PHONE_TEL, SITE_URL } from "@/lib/site";

const STATS = [
  { val: "24/7/365", lbl: "Disponibilidad" },
  { val: "< 4 hrs", lbl: "Mobilización" },
  { val: "Hasta 20 ton", lbl: "Capacidad Máx." },
  { val: "MX · EUA · Caribe", lbl: "Cobertura" },
];

const FLEET = [
  {
    cat: "Turbohélice Regional",
    name: "Bombardier Dash 8",
    specs: [
      { v: "~ 5,500 kg", l: "Payload" },
      { v: "~ 2,000 km", l: "Alcance" },
      { v: "Pistas cortas", l: "Ventaja" },
    ],
    note: "Turbohélice robusto para destinos regionales, campos remotos y pistas cortas. Ideal cuando el aeropuerto destino no puede recibir un jet, o cuando el peso no justifica uno.",
  },
  {
    cat: "Jet Regional de Carga",
    name: "Bombardier CRJ",
    specs: [
      { v: "~ 6,700 kg", l: "Payload" },
      { v: "~ 3,000 km", l: "Alcance" },
      { v: "Jet Speed", l: "Ventaja" },
    ],
    note: "Jet regional convertido a carga. Velocidad de reacción superior al turbohélice, capacidad media, ideal para rutas entre centros urbanos cuando el tiempo importa más que el volumen.",
  },
  {
    cat: "Narrow-Body Freighter",
    name: "Boeing 737",
    specs: [
      { v: "~ 20,000 kg", l: "Payload" },
      { v: "~ 5,000 km", l: "Alcance" },
      { v: "Pallets LD", l: "Config." },
    ],
    note: "Carguero dedicado (737-400F / 737-800BCF). Para cargas pesadas, operaciones oversize, rutas internacionales largas. Configuración de pallets estándar, puerta de carga amplia.",
  },
];

const PROCESS = [
  { n: "01", t: "Contacto", d: "Nos llamas o escribes por WhatsApp con los detalles: peso, dimensiones, origen, destino, ventana de tiempo." },
  { n: "02", t: "Cotización", d: "En 30–60 minutos te devolvemos cotización firme con aeronave asignada y tiempo estimado de entrega." },
  { n: "03", t: "Coordinación", d: "Gestionamos permisos, slot, plan de vuelo, manejo en tierra y documentación aduanal si aplica." },
  { n: "04", t: "Mobilización", d: "La aeronave llega al origen en 2–4 horas (dependiendo de su base y disponibilidad). Cargamos y despegamos." },
  { n: "05", t: "Entrega", d: "Comprobante de entrega, fotos y reporte de operación directo a tu correo. Facturamos al cierre del servicio." },
];

const INDUSTRIES = [
  { n: "I", t: "Línea de Producción Parada", d: "Refacción crítica detiene una planta automotriz, industrial o de manufactura. Cada hora de paro cuesta miles de dólares. Un vuelo de carga paga su costo en el primer turno recuperado." },
  { n: "II", t: "AOG — Aircraft On Ground", d: "Una aeronave comercial o privada no puede volar por falta de una pieza. Movemos el componente de cualquier MRO o almacén hacia el aeropuerto donde está la aeronave, en el menor tiempo posible." },
  { n: "III", t: "Oil & Gas / Minería", d: "Equipo crítico para plataformas, campos o sitios remotos. Cuando el aeropuerto más cercano es una pista corta o un helipuerto, coordinamos la aeronave adecuada para el terreno." },
  { n: "IV", t: "Cadena Fría / Médico", d: "Medicamentos de alto valor, muestras biológicas, componentes médicos time-sensitive. Coordinamos manejo de temperatura y chain of custody durante todo el trayecto." },
];

const Cargo = () => {
  useReveal();

  useSEO({
    title: "Vuelos de Carga Urgente México | Hot Shot Charter — Numen Aviation",
    description:
      "Charter de carga aérea urgente en México, EUA y el Caribe. Hot shot, carga AOG, refacciones críticas. Red de operadores certificados. Mobilización en horas. 24/7.",
    path: "/vuelos-de-carga",
    type: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/vuelos-de-carga#service`,
        name: "Vuelos de Carga Urgente — Hot Shot Charter",
        provider: { "@type": "Organization", name: "Numen Aviation", url: SITE_URL },
        serviceType: "Air Cargo Charter",
        description:
          "Charter de carga aérea urgente (hot shot). Hacemos el brokerage con una red de operadores certificados para entregas críticas en México, EUA, Caribe y Centroamérica. Flota disponible: Dash 8, CRJ y Boeing 737. Disponible 24/7.",
        areaServed: [
          { "@type": "Country", name: "Mexico" },
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Caribbean" },
          { "@type": "Place", name: "Central America" },
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}/vuelos-de-carga`,
          availableLanguage: ["Spanish", "English"],
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE_URL}/#services` },
          { "@type": "ListItem", position: 3, name: "Vuelos de Carga", item: `${SITE_URL}/vuelos-de-carga` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué es un vuelo hot shot o de carga urgente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Es un charter de carga aérea dedicado para mover una pieza o equipo crítico en el menor tiempo posible. La aeronave vuela exclusivamente para tu carga — sin escalas comerciales ni esperas.",
            },
          },
          {
            "@type": "Question",
            name: "¿En cuánto tiempo puede despegar la aeronave?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dependiendo de la base de la aeronave asignada, la mobilización al aeropuerto origen toma típicamente entre 2 y 4 horas. La cotización firme la entregamos en 30–60 minutos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué tipo de carga manejan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Refacciones críticas (AOG, automotriz, manufactura), equipo de oil & gas, cadena fría médica, muestras biológicas, repuestos industriales y carga oversize hasta 20 toneladas.",
            },
          },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="absolute z-10"
        style={{
          top: "5.5rem",
          left: "clamp(1.5rem, 4vw, 4rem)",
          right: "clamp(1.5rem, 4vw, 4rem)",
        }}
      >
        <ol className="flex items-center gap-2 list-none p-0">
          <li className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>
            <Link to="/" className="hover:text-jade transition-colors">Inicio</Link>
          </li>
          <li className="text-jade/50">›</li>
          <li className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>
            <a href="/#services" className="hover:text-jade transition-colors">Servicios</a>
          </li>
          <li className="text-jade/50">›</li>
          <li className="text-[0.65rem] uppercase text-jade" style={{ letterSpacing: "0.15em" }}>
            Vuelos de Carga
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden"
        style={{
          padding: "9rem clamp(1.5rem, 4vw, 4rem) 6rem",
        }}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(var(--jade) / 0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 20% 80%, hsl(var(--background) / 0.85) 0%, transparent 60%), linear-gradient(165deg, hsl(var(--background)) 0%, hsl(var(--bg-2)) 50%, hsl(var(--background)) 100%)",
          }}
        />
        <div
          className="absolute top-0 -z-10"
          style={{
            right: "20%",
            width: "0.5px",
            height: "55%",
            background: "linear-gradient(to bottom, transparent, hsl(var(--jade)), transparent)",
            opacity: 0.4,
          }}
        />

        <div
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade/30 bg-jade/[0.06] w-fit mb-7 animate-fade-in"
          style={{ letterSpacing: "0.3em" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-jade opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-jade" />
          </span>
          <span className="text-[0.62rem] uppercase text-jade">
            Hot Shot · 24/7 · Respuesta en Horas
          </span>
        </div>

        <h1
          className="font-serif font-light leading-[1.05] text-foreground max-w-[820px]"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
        >
          Carga <em className="italic text-jade-light">Urgente</em>
          <br />
          Cuando
          <br />
          No Puede Esperar.
        </h1>
        <div className="w-[60px] h-px bg-jade my-8" />
        <p className="text-[0.95rem] font-light leading-[1.7] text-fg-3 max-w-[520px] mb-10">
          Charter de carga aérea para misiones críticas. Hacemos el brokerage con una red de operadores certificados para mover lo que tu línea de producción, tu aeronave o tu cliente necesitan ya.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={waLink("Hola, necesito cotizar un vuelo de carga urgente. Detalles:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)] hover:shadow-[0_0_32px_-2px_hsl(var(--jade)/0.85)]"
            style={{ letterSpacing: "0.18em" }}
          >
            Cotizar Ahora
          </a>
          <a
            href="#proceso"
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors"
            style={{ letterSpacing: "0.18em" }}
          >
            Ver Cómo Funciona
          </a>
        </div>
      </section>

      {/* STATS BAR */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 border border-jade-soft reveal"
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

      <section
        className="bg-bg-2"
        id="operador"
        style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            Red de Operadores
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Operadores <em className="italic text-jade-light">Certificados.</em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12 reveal">
          <div className="space-y-5">
            <p className="text-[0.95rem] leading-[1.8] text-fg-3">
              Numen Aviation trabaja con una <strong className="text-foreground font-normal">red de operadores cargueros certificados</strong> en México, EUA y el Caribe. No somos aerolínea: somos tu <strong className="text-foreground font-normal">broker</strong>, lo cual significa que activamos la aeronave correcta para tu misión sin comprometerte con una sola flota.
            </p>
            <p className="text-[0.95rem] leading-[1.8] text-fg-3">
              Cada operador con el que trabajamos cumple el mismo estándar: <strong className="text-foreground font-normal">certificación vigente AFAC / FAA</strong>, aeronaves cargueras dedicadas o convertibles, tripulación entrenada para carga crítica y cobertura de seguro acorde al valor de lo transportado.
            </p>
            <p className="text-[0.95rem] leading-[1.8] text-fg-3">
              Tú hablas con nosotros una sola vez. Nosotros coordinamos aeronave, permisos, ruta, manejo en tierra y aduana si aplica. Un solo punto de contacto, respuesta en horas, sin importar de qué operador sea el avión que despega.
            </p>
          </div>
          <div className="border border-jade-soft p-8">
            <h3 className="font-serif text-[1.4rem] font-light text-foreground mb-1">
              Estándar de la Red
            </h3>
            <p className="text-[0.7rem] uppercase text-jade mb-6" style={{ letterSpacing: "0.2em" }}>
              Criterios de Selección
            </p>
            {[
              ["Certificación", "AFAC / FAA vigente"],
              ["Tipo de operación", "Charter de carga dedicado"],
              ["Flota disponible", "Dash 8 · CRJ · B-737"],
              ["Cobertura", "MX · EUA · Caribe · C.A."],
              ["Seguro", "Cobertura full hull & cargo"],
              ["Disponibilidad", "24/7/365"],
            ].map(([lbl, val], i) => (
              <div
                key={lbl}
                className={`flex justify-between py-3 text-[0.82rem] ${i > 0 ? "border-t border-jade-soft" : ""}`}
              >
                <span className="text-fg-3 uppercase text-[0.68rem]" style={{ letterSpacing: "0.08em" }}>
                  {lbl}
                </span>
                <span className="text-foreground">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOTA */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            Aeronaves Disponibles
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Flota de <em className="italic text-jade-light">Carga.</em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[620px]">
            Elegimos la aeronave según el peso, volumen, dimensiones y destino de tu carga. Estas son las plataformas principales con las que operamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {FLEET.map((ac) => (
            <article key={ac.name} className="bg-bg-2 p-7 hover:bg-bg-3 transition-colors">
              <p className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.2em" }}>
                {ac.cat}
              </p>
              <h3 className="font-serif text-[1.5rem] font-light text-foreground mb-2">{ac.name}</h3>
              <div className="flex gap-6 my-4 flex-wrap">
                {ac.specs.map((s) => (
                  <div key={s.l}>
                    <span className="text-[0.85rem] font-medium text-foreground block">{s.v}</span>
                    <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.1em" }}>
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[0.82rem] leading-[1.6] text-fg-3 border-t border-jade-soft pt-4 mt-4">
                {ac.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section
        id="proceso"
        className="bg-bg-2"
        style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            Cómo Funciona
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            De tu llamada al <em className="italic text-jade-light">despegue.</em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[620px]">
            En carga urgente, cada minuto cuenta. Este es el proceso que ejecutamos contigo.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-px mt-12 border border-jade-soft bg-jade-soft reveal list-none">
          {PROCESS.map((s) => (
            <li key={s.n} className="bg-background p-6">
              <div className="font-serif text-[2.5rem] font-light text-jade/20 leading-none mb-3">
                {s.n}
              </div>
              <h3
                className="text-[0.78rem] font-medium uppercase text-foreground mb-2"
                style={{ letterSpacing: "0.12em" }}
              >
                {s.t}
              </h3>
              <p className="text-[0.82rem] leading-[1.7] text-fg-3">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* INDUSTRIAS */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            Casos de Uso
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Cuándo tiene sentido un <em className="italic text-jade-light">hot shot.</em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[620px]">
            Estos son los escenarios donde el costo de esperar supera el costo del charter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {INDUSTRIES.map((it) => (
            <article key={it.t} className="bg-bg-2 p-10">
              <div className="font-serif text-[2rem] font-light text-jade/20 mb-3">{it.n}</div>
              <h3
                className="text-[0.82rem] font-medium uppercase text-foreground mb-2"
                style={{ letterSpacing: "0.12em" }}
              >
                {it.t}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-fg-3">{it.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="bg-bg-3 border-y border-jade-soft text-center"
        style={{ padding: "5rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <h2
          className="font-serif font-light text-foreground mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          ¿Tienes una <em className="italic text-jade-light">carga urgente</em> ahora?
        </h2>
        <p className="text-[0.9rem] text-fg-3 max-w-[540px] mx-auto leading-[1.7] mb-10">
          Si tu operación no puede esperar al lunes, no esperes. Cotiza por WhatsApp — la respuesta es en minutos, 24 horas al día.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={waLink(
              "Hola, necesito un vuelo de carga urgente. Origen: ___ Destino: ___ Peso: ___ Ventana: ___"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)] hover:shadow-[0_0_32px_-2px_hsl(var(--jade)/0.85)]"
            style={{ letterSpacing: "0.18em" }}
          >
            Cotizar por WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors"
            style={{ letterSpacing: "0.18em" }}
          >
            <Phone className="w-3.5 h-3.5" />
            Llamar {PHONE_NUMBER}
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Cargo;

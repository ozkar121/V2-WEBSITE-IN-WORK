import { Navbar } from "@/components/Navbar";
import { DotPattern } from "@/components/DotPattern";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { waLink, SITE_URL, SITE_NAME } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";
import { useLang } from "@/i18n/LanguageContext";
import founderPhoto from "@/assets/oscar-cadena.webp";

const LINKEDIN_URL = "https://www.linkedin.com/in/oscar-cadena-numen/";

const Nosotros = () => {
  useReveal();
  const { lang, lp } = useLang();
  const en = lang === "en";

  const seo = useSEO({
    title: en ? "About Us | Numen Aviation" : "Nosotros | Numen Aviation",
    description: en
      ? "Numen Aviation is an independent private jet charter brokerage based at Toluca (MMTO), Mexico. Built by operators: transparent pricing, AFAC-certified operators, 24/7."
      : "Numen Aviation es una correduría independiente de jets privados con base en Toluca (MMTO). Construida por operadores: precios transparentes, operadores certificados AFAC, 24/7.",
    path: "/nosotros",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: en ? "About Numen Aviation" : "Nosotros — Numen Aviation",
        url: `${SITE_URL}${en ? "/en" : ""}/nosotros`,
        mainEntity: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/favicon-numen.png`,
          founder: {
            "@type": "Person",
            name: "Oscar Cadena",
            jobTitle: en ? "Founder" : "Fundador",
            sameAs: LINKEDIN_URL,
            alumniOf: "Tecnológico de Monterrey",
            worksFor: { "@type": "Organization", name: SITE_NAME },
          },
          areaServed: ["México", "Estados Unidos", "Caribe", "Centroamérica"],
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Bosques de la Reforma 1813, Lomas del Chamizal, Cuajimalpa",
              addressLocality: "Ciudad de México",
              postalCode: "05100",
              addressCountry: "MX",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "17350 State Hwy 249, Ste 220 #35286",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77064",
              addressCountry: "US",
            },
          ],
        },
      },
      buildBreadcrumb({ path: "/nosotros" })!,
    ],
  });

  const story = en
    ? [
        "Numen Aviation was built by operators, not salespeople. Before brokering our first charter, we spent years on the operational side of Mexican executive aviation: dispatching flights, coordinating FBOs, negotiating with operators and learning, mission by mission, what separates a good flight from a flawless one.",
        "That experience defined our model. We don't own aircraft — on purpose. As an independent brokerage based at Toluca International Airport (MMTO), the executive aviation hub of the Valley of Mexico, we compare dozens of AFAC-certified operators objectively and put the right aircraft on each mission, at the right price, with no inventory bias.",
        "Today we coordinate charters across Mexico, the United States, the Caribbean and Central America: on-demand flights, empty legs, cargo, air ambulance and aircraft acquisition. One dedicated advisor per client, quotes in under 30 minutes, operating 24/7 — every day of the year.",
      ]
    : [
        "Numen Aviation fue construida por operadores, no por vendedores. Antes de intermediar nuestro primer charter pasamos años del lado operativo de la aviación ejecutiva mexicana: despachando vuelos, coordinando FBOs, negociando con operadores y aprendiendo, misión por misión, qué separa un buen vuelo de uno impecable.",
        "Esa experiencia definió nuestro modelo. No tenemos aeronaves propias — a propósito. Como correduría independiente con base en el Aeropuerto Internacional de Toluca (MMTO), el hub de aviación ejecutiva del Valle de México, comparamos objetivamente decenas de operadores certificados por AFAC y ponemos la aeronave correcta en cada misión, al precio correcto, sin el sesgo de un inventario que colocar.",
        "Hoy coordinamos charters en México, Estados Unidos, el Caribe y Centroamérica: vuelos bajo demanda, empty legs, carga, ambulancia aérea y adquisición de aeronaves. Un asesor dedicado por cliente, cotizaciones en menos de 2 horas y operación 24/7 — todos los días del año.",
      ];

  const values = en
    ? [
        { num: "01", title: "Independence", desc: "No fleet of our own means no conflict of interest. We validate insurance, certifications and crew records of every operator before every flight — and recommend only what serves the mission." },
        { num: "02", title: "Transparency", desc: "Every quote arrives with a full breakdown: flight hours, ferry, handling, FBO fees and taxes. No hidden charges, no surprises at closing." },
        { num: "03", title: "Mexico-first expertise", desc: "Deep knowledge of MMTO, AFAC regulation, Mexican airspace and direct relationships with national operators. The details that make international handling effortless." },
        { num: "04", title: "One point of contact", desc: "Your dedicated aviation advisor coordinates everything from quote to landing. No call centers, no middlemen, no repeating yourself." },
      ]
    : [
        { num: "01", title: "Independencia", desc: "Sin flota propia no hay conflicto de interés. Validamos seguros, certificaciones e historial de tripulación de cada operador antes de cada vuelo — y recomendamos solo lo que sirve a la misión." },
        { num: "02", title: "Transparencia", desc: "Cada cotización llega con desglose completo: horas de vuelo, ferry, handling, FBO e impuestos. Sin cargos ocultos ni sorpresas al cierre." },
        { num: "03", title: "Expertise México-first", desc: "Conocimiento profundo de MMTO, regulación AFAC, espacio aéreo mexicano y relaciones directas con operadores nacionales. Los detalles que hacen que el manejo internacional se sienta sin esfuerzo." },
        { num: "04", title: "Un solo punto de contacto", desc: "Tu asesor dedicado de aviación coordina todo, de la cotización al aterrizaje. Sin call centers, sin intermediarios, sin repetir tu historia." },
      ];

  const stats = [
    { val: "24/7", lbl: en ? "Continuous operation" : "Operación continua" },
    { val: "< 2h", lbl: en ? "Average quote" : "Cotización promedio" },
    { val: "150+", lbl: en ? "Routes operated" : "Rutas operadas" },
    { val: "100%", lbl: en ? "Safety record" : "Récord de seguridad" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {seo}
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-20 border-b border-jade-soft relative overflow-hidden"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <DotPattern origin="left" seed={29} opacity={0.7} className="absolute top-0 left-0 h-full w-1/2 md:w-1/3" />
        <div className="max-w-5xl mx-auto">
          <div className="text-[0.7rem] uppercase text-jade mb-6" style={{ letterSpacing: "0.3em" }}>
            {en ? "About Us" : "Nosotros"}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-foreground mb-6 leading-[1.05]">
            {en ? (
              <>Built by <em className="text-jade-light">operators.</em></>
            ) : (
              <>Construida por <em className="text-jade-light">operadores.</em></>
            )}
          </h1>
          <p className="text-base md:text-lg text-fg-2 max-w-2xl leading-relaxed">
            {en
              ? "An independent private aviation brokerage based at Toluca (MMTO) — serving Mexico, the U.S., the Caribbean and Central America."
              : "Una correduría independiente de aviación privada con base en Toluca (MMTO) — sirviendo a México, EUA, el Caribe y Centroamérica."}
          </p>
        </div>
      </section>

      {/* Story */}
      <section
        className="py-24"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-3xl mx-auto reveal">
          <p className="eyebrow mb-4">{en ? "Our story" : "Nuestra historia"}</p>
          <h2 className="section-title">
            {en ? <>Why Numen <em>exists.</em></> : <>Por qué existe <em>Numen.</em></>}
          </h2>
          <div className="gold-rule mb-8" />
          {story.map((p, i) => (
            <p key={i} className="text-[0.95rem] text-fg-2 leading-relaxed mb-5 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 border border-jade-soft reveal"
        style={{ margin: "0 clamp(1rem, 4vw, 4rem)" }}
      >
        {stats.map((s) => (
          <div key={s.lbl} className="p-7 border-r border-jade-soft last:border-r-0">
            <div className="font-serif text-2xl font-light text-foreground mb-1.5">{s.val}</div>
            <div className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <section
        className="py-24"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="reveal">
          <p className="eyebrow mb-4">{en ? "How we work" : "Cómo trabajamos"}</p>
          <h2 className="section-title">
            {en ? <>Principles that <em>fly with us.</em></> : <>Principios que <em>vuelan con nosotros.</em></>}
          </h2>
          <div className="gold-rule" />
        </div>
        <div className="grid md:grid-cols-2 mt-12 border border-jade-soft">
          {values.map((w) => (
            <div key={w.num} className="p-10 border-r border-b border-jade-soft last:border-r-0 reveal">
              <div className="font-serif text-3xl font-light mb-3" style={{ color: "hsl(var(--jade) / 0.15)" }}>{w.num}</div>
              <div className="text-[0.78rem] uppercase font-medium text-foreground mb-2.5" style={{ letterSpacing: "0.12em" }}>{w.title}</div>
              <p className="text-[0.875rem] leading-relaxed text-fg-3">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section
        className="py-24 border-y border-jade-soft"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="reveal">
            <p className="eyebrow mb-4">{en ? "Where we are" : "Dónde estamos"}</p>
            <h2 className="section-title">
              {en ? <>Two countries, <em>one standard.</em></> : <>Dos países, <em>un estándar.</em></>}
            </h2>
            <div className="gold-rule" />
          </div>
          <div className="grid md:grid-cols-3 gap-px mt-12 border border-jade-soft reveal">
            <div className="bg-background p-8">
              <div className="text-[0.62rem] uppercase text-jade mb-3" style={{ letterSpacing: "0.25em" }}>
                {en ? "Operations hub" : "Hub operativo"}
              </div>
              <div className="font-serif text-xl font-light text-foreground mb-2">Toluca (MMTO)</div>
              <p className="text-[0.82rem] text-fg-3 leading-relaxed">
                {en
                  ? "Licenciado Adolfo López Mateos International — the executive aviation hub of the Valley of Mexico, 40 minutes from Santa Fe and Polanco."
                  : "Aeropuerto Internacional Licenciado Adolfo López Mateos — el hub de aviación ejecutiva del Valle de México, a 40 minutos de Santa Fe y Polanco."}
              </p>
            </div>
            <div className="bg-background p-8">
              <div className="text-[0.62rem] uppercase text-jade mb-3" style={{ letterSpacing: "0.25em" }}>
                {en ? "Mexico office" : "Oficina México"}
              </div>
              <div className="font-serif text-xl font-light text-foreground mb-2">{en ? "Mexico City" : "Ciudad de México"}</div>
              <p className="text-[0.82rem] text-fg-3 leading-relaxed">
                Bosques de la Reforma 1813, Lomas del Chamizal, Cuajimalpa, 05100 CDMX.
              </p>
            </div>
            <div className="bg-background p-8">
              <div className="text-[0.62rem] uppercase text-jade mb-3" style={{ letterSpacing: "0.25em" }}>
                {en ? "U.S. office" : "Oficina EUA"}
              </div>
              <div className="font-serif text-xl font-light text-foreground mb-2">Houston, TX</div>
              <p className="text-[0.82rem] text-fg-3 leading-relaxed">
                17350 State Hwy 249, Ste 220 #35286, Houston, TX 77064 · +1 737 372 4548
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section
        className="py-24"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="reveal">
            <p className="eyebrow mb-4">{en ? "The founder" : "El fundador"}</p>
            <h2 className="section-title">
              {en ? <>A face behind <em>every flight.</em></> : <>Una cara detrás de <em>cada vuelo.</em></>}
            </h2>
            <div className="gold-rule" />
          </div>
          <div className="grid md:grid-cols-[minmax(260px,380px)_1fr] gap-10 lg:gap-14 mt-12 items-start reveal">
            <div className="relative border border-jade-soft p-2 bg-bg-2">
              <img
                src={founderPhoto}
                alt="Oscar Cadena — Fundador de Numen Aviation"
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-3xl font-light text-foreground mb-1">Oscar Cadena</h3>
              <div className="text-[0.68rem] uppercase text-jade mb-6" style={{ letterSpacing: "0.25em" }}>
                {en ? "Founder · Numen Aviation" : "Fundador · Numen Aviation"}
              </div>
              {(en
                ? [
                    "Founder of Numen Aviation, an independent private aviation advisory based at Toluca International Airport (MMTO). After 7+ years managing operations in Mexico's executive aviation industry, Oscar launched Numen to offer something the market was missing: unbiased, client-first charter brokerage with no fleet ties and no hidden fees.",
                    "Previously Operations Manager at Fly Select, where he oversaw fleet operations, client coordination and commercial strategy for 7 years. He holds a BBA in Finance from Tecnológico de Monterrey.",
                    "Today he leads every Numen engagement personally: on-demand charter, empty legs, aviation consulting and aircraft acquisition across Mexico, the U.S., the Caribbean and Central America. One dedicated advisor, available 24/7.",
                  ]
                : [
                    "Fundador de Numen Aviation, asesoría independiente de aviación privada con base en el Aeropuerto Internacional de Toluca (MMTO). Tras más de 7 años dirigiendo operaciones en la aviación ejecutiva mexicana, Oscar lanzó Numen para ofrecer lo que faltaba en el mercado: una correduría imparcial, con el cliente primero, sin ataduras de flota ni cargos ocultos.",
                    "Antes fue Operations Manager en Fly Select, donde supervisó operaciones de flota, coordinación de clientes y estrategia comercial durante 7 años. Es Licenciado en Administración Financiera por el Tecnológico de Monterrey.",
                    "Hoy lidera personalmente cada encargo de Numen: charter bajo demanda, empty legs, consultoría aeronáutica y adquisición de aeronaves en México, EUA, el Caribe y Centroamérica. Un asesor dedicado, disponible 24/7.",
                  ]
              ).map((p, i) => (
                <p key={i} className="text-[0.95rem] text-fg-2 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.7rem] uppercase text-jade hover:text-jade-light transition-colors no-underline mt-2"
                style={{ letterSpacing: "0.2em" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="reveal max-w-3xl mx-auto">
          <h2 className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            {en ? (
              <>Ready to fly <em className="italic text-jade-light">with us?</em></>
            ) : (
              <>¿Listo para volar <em className="italic text-jade-light">con nosotros?</em></>
            )}
          </h2>
          <p className="text-[0.9rem] text-fg-3 mb-10">
            {en
              ? "Tell us your route, dates and passengers. A dedicated advisor responds in under 30 minutes, 24/7."
              : "Cuéntanos tu ruta, fechas y pasajeros. Un asesor dedicado te responde en menos de 2 horas, 24/7."}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={waLink(en ? "Hi, I'd like to request a charter quote." : "Hola, me gustaría solicitar una cotización de charter.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp
            </a>
            <a href={lp("/#contact")} className="btn-secondary">
              {en ? "Send a request" : "Enviar solicitud"}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Nosotros;

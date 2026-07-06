import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { ScrollVideoBackground } from "@/components/ScrollVideoBackground";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

import { CornerBrackets } from "@/components/CornerBrackets";
import { DotPattern } from "@/components/DotPattern";
import { FleetSection } from "@/components/FleetSection";
import { FAQSection } from "@/components/FAQSection";
import { QuotationForm } from "@/components/QuotationForm";
import { useLang } from "@/i18n/LanguageContext";
import { waLink, SITE_URL, EMAIL } from "@/lib/site";
import tolucaAerial from "@/assets/toluca-aerial.jpg";

const HOME_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Numen Aviation",
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: "+52-444-234-8942",
    email: EMAIL,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aeropuerto Internacional de Toluca (MMTO)",
      addressLocality: "Toluca",
      addressRegion: "Estado de México",
      postalCode: "50200",
      addressCountry: "MX",
    },
    areaServed: ["México", "Estados Unidos", "Caribe", "Centroamérica"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Numen Aviation",
    inLanguage: "es-MX",
  },
  // Service: describe el servicio principal del negocio (renta de jet privado).
  // No reemplaza al LocalBusiness — lo complementa para resultados enriquecidos
  // de tipo "Service" en Google.
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "Charter de Jet Privado — Numen Aviation",
    serviceType: "Renta de Jet Privado",
    description:
      "Renta de jet privado bajo demanda desde el Aeropuerto Internacional de Toluca (MMTO). Vuelos nacionales e internacionales, empty legs, ambulancia aérea, vuelos de carga y charters grupales. Cotización en menos de 30 minutos, operación 24/7.",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "Country", name: "Mexico" },
      { "@type": "Country", name: "United States" },
      { "@type": "Place", name: "Caribbean" },
      { "@type": "Place", name: "Central America" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: SITE_URL,
      availableLanguage: ["Spanish", "English"],
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Numen Aviation",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charter Bajo Demanda", url: SITE_URL } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Empty Legs", url: `${SITE_URL}/empty-legs` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vuelos de Carga", url: `${SITE_URL}/vuelos-de-carga` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ambulancia Aérea", url: `${SITE_URL}/ambulancia-aerea` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charters Grupales", url: `${SITE_URL}/charters-grupales` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flota", url: `${SITE_URL}/flota` } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ["¿Cuánto cuesta rentar un jet privado desde Toluca?", "El costo varía según el tipo de aeronave, destino y duración del vuelo. Un vuelo en light jet desde Toluca (MMTO) a Cancún comienza desde aproximadamente $12,000 USD. Solicita una cotización sin compromiso y te respondemos en menos de 30 minutos."],
      ["¿Por qué operan desde Toluca y no desde el AICM?", "El Aeropuerto Internacional de Toluca (MMTO) ofrece tiempos de espera mínimos, acceso directo a pista sin congestión, hangares privados y una ubicación estratégica a 40 minutos de Santa Fe y Polanco. Es la base preferida de la aviación ejecutiva en el Valle de México."],
      ["¿Con cuánta anticipación debo reservar un vuelo?", "Podemos coordinar un vuelo chárter en tan solo 2 a 4 horas para rutas nacionales. Para vuelos internacionales recomendamos al menos 24-48 horas. Los empty legs tienen disponibilidad inmediata."],
      ["¿Qué incluye el precio de un vuelo charter?", "Nuestra cotización es transparente e incluye: tiempo de vuelo, ferry (posicionamiento), handling aeroportuario, IVA, servicios FBO y coordinación completa. Sin cargos ocultos ni sorpresas al cierre."],
      ["¿Qué documentación necesito para volar en jet privado?", "Para vuelos nacionales solo necesitas una identificación oficial vigente (INE o pasaporte). Para vuelos internacionales se requiere pasaporte vigente y, según el destino, visa correspondiente. Nosotros coordinamos todos los permisos de vuelo y trámites ante AFAC."],
      ["¿Qué es un empty leg y cómo puedo aprovecharlo?", "Un empty leg es un vuelo de reposicionamiento que ya está programado y se ofrece con descuentos de hasta 75% sobre la tarifa regular. Publicamos disponibilidad actualizada en nuestra sección de Empty Legs. Es la forma más accesible de volar en jet privado."],
      ["¿Numen Aviation es operador o broker?", "Somos una correduría independiente (broker). No operamos aeronaves propias, lo que nos permite comparar objetivamente entre operadores certificados en México y Las Américas para conseguirte la mejor aeronave al mejor precio, sin conflictos de interés."],
      ["¿Puedo solicitar catering, transporte terrestre u otros servicios?", "Sí. Coordinamos servicios complementarios como catering gourmet, transporte terrestre privado (SUV blindada, helicóptero), equipaje especial y cualquier requerimiento que haga tu experiencia perfecta. Tu asesor dedicado se encarga de todo."],
    ].map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];


const Index = () => {
  useReveal();
  const { t, lang } = useLang();

  const services = [
    { num: "01", name: t("service_01_name"), desc: t("service_01_desc") },
    { num: "02", name: t("service_02_name"), desc: t("service_02_desc") },
    { num: "03", name: t("service_03_name"), desc: t("service_03_desc") },
    { num: "04", name: t("service_04_name"), desc: t("service_04_desc") },
  ];

  const stats = [
    { val: "24/7", label: t("stat_24_7") },
    { val: "< 30min", label: t("stat_2h") },
    { val: "150+", label: t("stat_routes") },
    { val: "100%", label: t("stat_safety") },
  ];

  const whyItems = [
    { num: "I", title: t("why_01_t"), desc: t("why_01_d") },
    { num: "II", title: t("why_02_t"), desc: t("why_02_d") },
    { num: "III", title: t("why_03_t"), desc: t("why_03_d") },
    { num: "IV", title: t("why_04_t"), desc: t("why_04_d") },
  ];

  const seo = useSEO({
    title:
      lang === "en"
        ? "Private Jet Charter in Toluca and Mexico | Numen Aviation"
        : "Renta de Jet Privado en Toluca y México | Numen Aviation",
    description:
      lang === "en"
        ? "Private jet charter on demand from Toluca Airport (MMTO). Empty legs, consulting and acquisition. Quote in under 30 minutes. 24/7 service."
        : "Renta de jet privado y charter bajo demanda desde Toluca (MMTO). Empty legs, consultoría y adquisición. Cotización en menos de 30 minutos. 24/7.",
    path: "/",
    jsonLd: HOME_JSONLD,
  });

  return (
    <>
      {seo}
      <ScrollVideoBackground src="/plane-scroll.mp4" />
      <Navbar />
      <main>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)", paddingTop: "clamp(7rem, 14vh, 10rem)", paddingBottom: "6rem", minHeight: 680 }}
      >
        {/* El fondo de avión con scroll está montado a nivel de página (ScrollVideoBackground).
            En el hero dejamos transparente para que el video se vea protagónico. */}
        {/* Overlay para legibilidad — refuerza contraste del título y CTAs */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.65) 0%, hsl(var(--background) / 0.45) 35%, hsl(var(--background) / 0.95) 100%), linear-gradient(90deg, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.15) 55%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.25) 0%, hsl(var(--background) / 0.15) 40%, hsl(var(--background) / 0.85) 100%)",
          }}
        />
        <div className="absolute top-0 right-[20%] w-px h-[55%]" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--jade)), transparent)", opacity: 0.4 }} />

        <div className="relative z-10 inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade-soft bg-jade/[0.06] w-fit mb-7 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-jade animate-pulse-ring" />
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>{t("hero_badge")}</span>
        </div>

        <h1 className="relative z-10 max-w-3xl font-serif font-light text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15, marginBottom: "1.25rem" }}>
          {t("hero_title_pre")}
        </h1>
        <p className="display-title relative z-10 max-w-3xl" aria-hidden="false">
          {t("hero_title_a")} <em>{t("hero_title_em")}</em><br />{t("hero_title_b")}
        </p>
        <div className="gold-rule relative z-10 animate-fade-up" style={{ animationDelay: "0.7s", margin: "2rem 0" }} />
        <p className="relative z-10 text-[0.95rem] text-fg-3 leading-relaxed max-w-md mb-10 animate-fade-up" style={{ animationDelay: "0.85s" }}>
          {t("hero_subtitle")}
        </p>
        <div className="relative z-10 flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "1s" }}>
          <a href={waLink("Hola, me gustaría solicitar una cotización de charter.")} target="_blank" rel="noopener noreferrer" className="btn-primary">{t("hero_cta_quote")}</a>
          <a href="#fleet" className="btn-secondary">{t("hero_cta_fleet")}</a>
        </div>

        {/* Trust signals — visibles sin scroll para reducir rebote en tráfico pagado */}
        <ul className="relative z-10 flex flex-wrap gap-x-5 gap-y-2.5 mt-8 animate-fade-up list-none p-0" style={{ animationDelay: "1.15s" }}>
          {[t("hero_trust_1"), t("hero_trust_2"), t("hero_trust_3"), t("hero_trust_4")].map((item) => (
            <li key={item} className="flex items-center gap-2 text-[0.72rem] text-fg-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "hsl(var(--jade))" }} aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Static info strip — replaces the previous scrolling marquee for a calmer, more natural read */}
      <div
        className="bg-bg-3 border-y border-jade-soft py-5"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <p className="text-[0.8rem] md:text-[0.875rem] leading-relaxed text-fg-3 max-w-5xl mx-auto text-center">
          {t("strip_text")}
        </p>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-28 relative overflow-hidden" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <DotPattern origin="right" seed={7} className="absolute top-0 right-0 h-full w-1/2 md:w-1/3" />
        <div className="reveal relative">
          <p className="eyebrow mb-4">{t("services_eyebrow")}</p>
          <h2 className="section-title">{t("services_title_a")}<br />{t("services_title_b")}<br /><em>{t("services_title_em")}</em></h2>
          <div className="gold-rule" />
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px mt-16 border border-jade-soft reveal">
          <CornerBrackets />
          {services.map((s) => (
            <div key={s.num} className="bg-bg-2 hover:bg-bg-3 transition-colors p-10 border-r border-jade-soft last:border-r-0">
              <div className="font-serif text-4xl font-light leading-none mb-4" style={{ color: "hsl(var(--jade) / 0.12)" }}>{s.num}</div>
              <div className="text-[0.75rem] uppercase font-medium text-foreground mb-3" style={{ letterSpacing: "0.18em" }}>{s.name}</div>
              <p className="text-[0.875rem] leading-relaxed text-fg-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="bg-bg-3 border-y border-jade-soft py-16" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-6 py-6 border-r border-jade-soft last:border-r-0 reveal">
              <div className="font-serif font-light text-jade leading-none mb-2" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>{s.val}</div>
              <p className="text-[0.7rem] uppercase text-fg-3 break-words" style={{ letterSpacing: "0.2em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FLEET */}
      <FleetSection />

      <section id="why" className="py-28 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <DotPattern origin="left" color="hsl(var(--fg-3))" opacity={0.22} seed={21} className="absolute top-0 left-0 h-full w-1/2 md:w-1/4" />
        <div className="reveal relative h-[420px] hidden md:block">
          <div className="absolute inset-0 bg-bg-2 border border-jade-soft overflow-hidden">
            <img
              src={tolucaAerial}
              alt="Vista aérea del Aeropuerto Internacional de Toluca (MMTO), hub principal de Numen Aviation"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(var(--background) / 0.35) 0%, transparent 50%, hsl(var(--background) / 0.55) 100%)" }} />
            <CornerBrackets size="lg" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-bg-3 border border-jade-dark p-6 w-56 z-10">
            <div className="font-serif text-3xl font-light text-jade leading-none">Toluca</div>
            <p className="text-[0.68rem] uppercase text-fg-3 mt-2" style={{ letterSpacing: "0.18em" }}>{t("why_hub")}</p>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow mb-4">{t("why_eyebrow")}</p>
          <h2 className="section-title">{t("why_title_a")}<br />{t("why_title_b")} <em>{t("why_title_em")}</em></h2>
          <div className="gold-rule" />
          <p className="text-[0.9rem] leading-relaxed text-fg-3 max-w-md">
            {t("why_intro")}
          </p>
          <div className="mt-10 flex flex-col">
            {whyItems.map((w, i) => (
              <div key={w.num} className={`py-5 flex gap-5 border-b border-jade-soft ${i === 0 ? "border-t" : ""}`}>
                <span className="font-serif text-[0.75rem] text-jade-dark w-5 flex-shrink-0 mt-1">{w.num}</span>
                <div>
                  <strong className="block text-[0.8rem] font-medium uppercase text-foreground mb-1.5" style={{ letterSpacing: "0.08em" }}>{w.title}</strong>
                  <p className="text-[0.85rem] leading-relaxed text-fg-3">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-FORM SEO CONTENT — expands the homepage with natural, structured copy */}
      <section
        id="guide"
        className="py-28"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="reveal max-w-3xl">
          <p className="eyebrow mb-4">{t("seo_eyebrow")}</p>
          <h2 className="section-title">
            {t("seo_title_a")} <em>{t("seo_title_em")}</em>
          </h2>
          <div className="gold-rule" />
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-x-14 gap-y-12 max-w-6xl">
          {([
            ["seo_h3_1", "seo_p_1"],
            ["seo_h3_2", "seo_p_2"],
            ["seo_h3_3", "seo_p_3"],
            ["seo_h3_4", "seo_p_4"],
            ["seo_h3_5", "seo_p_5"],
            ["seo_h3_6", "seo_p_6"],
          ] as const).map(([h, p]) => (
            <article key={h} className="reveal">
              <h3 className="font-serif font-light text-[1.5rem] md:text-[1.7rem] leading-snug text-foreground mb-4">
                {t(h)}
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-fg-3">{t(p)}</p>
            </article>
          ))}
        </div>
      </section>

      <FAQSection />

      {/* CTA BAND */}
      <div id="cta-band" className="bg-bg-2 border-y border-jade-soft py-20 flex flex-wrap justify-between items-center gap-8" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <h2 className="font-serif font-light leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            {t("cta_band_title_a")}<br /><em className="italic text-jade-light">{t("cta_band_title_em")}</em>
          </h2>
          <p className="text-[0.875rem] text-fg-3 mt-3">{t("cta_band_sub")}</p>
        </div>
        <div className="flex gap-4 flex-wrap reveal">
          <a href={waLink("Hola, quisiera cotizar un vuelo privado.")} target="_blank" rel="noopener noreferrer" className="btn-primary">{t("cta_whatsapp")}</a>
          <a href="#contact" className="btn-secondary">{t("cta_send_request")}</a>
        </div>
      </div>

      {/* CONTACT — placeholder simple, full form in next iteration */}
      <section id="contact" className="py-28 relative overflow-hidden" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <DotPattern origin="bottom" seed={42} opacity={0.25} className="absolute bottom-0 right-0 h-2/3 w-1/2 md:w-1/3" />
        <div className="reveal relative">
          <p className="eyebrow mb-4">{t("contact_eyebrow")}</p>
          <h2 className="section-title">{t("contact_title_a")} <em>{t("contact_title_em")}</em></h2>
          <div className="gold-rule" />
        </div>
        <div className="grid md:grid-cols-2 gap-16 mt-14">
          <div className="flex flex-col gap-8 reveal">
            {[
              { label: t("contact_lbl_whatsapp"), val: "+52 444 234 89 42" },
              { label: t("contact_lbl_email"), val: "operaciones@numen-aviation.com" },
              { label: t("contact_lbl_hub"), val: t("contact_val_hub") },
              { label: t("contact_lbl_avail"), val: t("contact_val_avail") },
              { label: t("contact_lbl_area"), val: t("contact_val_area") },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-1">
                <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.25em" }}>{c.label}</span>
                <span className="font-serif text-lg font-light">{c.val}</span>
              </div>
            ))}
          </div>
          <QuotationForm />
        </div>
      </section>
      </main>

      <Footer />
      <WhatsAppFAB />
    </>
  );
};

export default Index;

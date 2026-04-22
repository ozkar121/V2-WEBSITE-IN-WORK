import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { Marquee } from "@/components/Marquee";
import { CornerBrackets } from "@/components/CornerBrackets";
import { FleetSection } from "@/components/FleetSection";
import { QuotationForm } from "@/components/QuotationForm";
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
];

const services = [
  { num: "01", name: "Charter Bajo Demanda", desc: "Renta de jet privado y turbohélices desde Toluca (MMTO) y cualquier aeropuerto de México. Despegue en horas — no en días — hacia EUA, el Caribe y Centroamérica." },
  { num: "02", name: "Empty Legs / Trayectos Vacíos", desc: "Vuelos de reposicionamiento en jet privado con descuentos de hasta 75%. Disponibilidad real, actualizada al día, en rutas mexicanas e internacionales." },
  { num: "03", name: "Consultoría en Aviación Ejecutiva", desc: "Asesoría estratégica para operadores, family offices e inversionistas: planificación de flota, cumplimiento ante AFAC y optimización de costos operativos." },
  { num: "04", name: "Adquisición y Brokerage de Aeronaves", desc: "Compra, venta y valuación de jets ejecutivos. Inspecciones pre-compra, análisis de mercado y acompañamiento integral en la transacción." },
];

const stats = [
  { val: "24/7", label: "Operación Continua" },
  { val: "2h", label: "Cotización en Menos de" },
  { val: "150+", label: "Rutas Operadas" },
  { val: "100%", label: "Récord de Seguridad" },
];

const whyItems = [
  { num: "I", title: "Correduría Independiente", desc: "Sin flota propia, sin sesgos. Comparamos operadores certificados en México y Las Américas para conseguirte la mejor aeronave al mejor precio." },
  { num: "II", title: "Precios Transparentes", desc: "Cotización con desglose completo: ferry, handling, IVA y servicios FBO incluidos. Sin sorpresas al cierre." },
  { num: "III", title: "Expertise México-First", desc: "Conocimiento profundo del Aeropuerto de Toluca (MMTO), regulación AFAC, espacio aéreo mexicano y relaciones directas con operadores nacionales." },
  { num: "IV", title: "Un Solo Punto de Contacto", desc: "Tu asesor dedicado de aviación privada coordina de la cotización al aterrizaje. Sin call centers ni intermediarios." },
];

const Index = () => {
  useReveal();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Diferimos el video hasta después del FCP/LCP para no bloquear render
    const load = () => setShowVideo(true);
    const w = window as any;
    const id = w.requestIdleCallback
      ? w.requestIdleCallback(load, { timeout: 2500 })
      : window.setTimeout(load, 1500);
    return () => {
      if (w.cancelIdleCallback && typeof id === "number") w.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  useSEO({
    title: "Renta de Jet Privado en Toluca y México | Numen Aviation",
    description:
      "Renta de jet privado, charter bajo demanda, empty legs, consultoría y adquisición de aeronaves desde el Aeropuerto de Toluca (MMTO). Servicio 24/7 en México, EUA, Caribe y Centroamérica. Cotización en menos de 2 horas.",
    path: "/",
    jsonLd: HOME_JSONLD,
  });

  return (
    <>
      <Navbar />
      <main>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)", paddingBottom: "6rem", minHeight: 680 }}
      >
        {/* Fondo oscuro con gradient sutil — visible mientras carga el video */}
        <div
          className="absolute inset-0 bg-background"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 30% 30%, hsl(var(--jade-dark) / 0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Video lazy-loaded después del FCP para no bloquear LCP en móvil */}
        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        )}
        {/* Overlay para legibilidad */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.35) 40%, hsl(var(--background) / 0.92) 100%), radial-gradient(ellipse 60% 80% at 20% 80%, hsl(var(--background) / 0.6) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 right-[20%] w-px h-[55%]" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--jade)), transparent)", opacity: 0.4 }} />

        <div className="relative z-10 inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade-soft bg-jade/[0.06] w-fit mb-7 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-jade animate-pulse-ring" />
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>Renta de Jet Privado · Toluca · México · Las Américas</span>
        </div>

        <h1 className="display-title relative z-10 max-w-3xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Beyond <em>First</em><br />Class.
        </h1>
        <div className="gold-rule relative z-10 animate-fade-up" style={{ animationDelay: "0.7s", margin: "2rem 0" }} />
        <p className="relative z-10 text-[0.95rem] text-fg-3 leading-relaxed max-w-md mb-10 animate-fade-up" style={{ animationDelay: "0.85s" }}>
          Renta de jet privado, charter bajo demanda, empty legs y adquisición de aeronaves desde el Aeropuerto de Toluca (MMTO). Tu agenda, tus estándares, tu destino.
        </p>
        <div className="relative z-10 flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "1s" }}>
          <a href={waLink("Hola, me gustaría solicitar una cotización de charter.")} target="_blank" rel="noopener noreferrer" className="btn-primary">Solicitar Cotización</a>
          <a href="#fleet" className="btn-secondary">Ver Nuestra Flota</a>
        </div>
      </section>

      <Marquee items={["Renta de Jet Privado","·","Charter Bajo Demanda","·","Empty Legs","·","Aviación Ejecutiva","·","Adquisición de Aeronaves","·","Servicio 24/7","·","Toluca · México · EUA · Caribe","·"]} />

      {/* SERVICES */}
      <section id="services" className="py-28" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="eyebrow mb-4">Lo Que Ofrecemos</p>
          <h2 className="section-title">Renta de jet privado<br />y aviación ejecutiva,<br /><em>sin fricciones.</em></h2>
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
              <p className="text-[0.7rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FLEET */}
      <FleetSection />
      <section id="why" className="py-28 grid md:grid-cols-2 gap-16 items-center" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
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
            <p className="text-[0.68rem] uppercase text-fg-3 mt-2" style={{ letterSpacing: "0.18em" }}>Hub Principal · MMTO</p>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow mb-4">Por Qué Numen</p>
          <h2 className="section-title">El estándar de la<br />aviación privada en <em>México.</em></h2>
          <div className="gold-rule" />
          <p className="text-[0.9rem] leading-relaxed text-fg-3 max-w-md">
            Numen Aviation fue construida por operadores, no por vendedores. Conocemos cada detalle de la renta de jet privado en México — desde la coordinación FBO en Toluca hasta el cumplimiento ante AFAC — porque lo hemos hecho miles de veces.
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

      {/* CTA BAND */}
      <div id="cta-band" className="bg-bg-2 border-y border-jade-soft py-20 flex flex-wrap justify-between items-center gap-8" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <h2 className="font-serif font-light leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            ¿Listo para volar?<br /><em className="italic text-jade-light">Cotiza tu jet privado.</em>
          </h2>
          <p className="text-[0.875rem] text-fg-3 mt-3">Empty legs, charter bajo demanda y aviación ejecutiva desde Toluca. Respuesta en menos de 2 horas, 24/7.</p>
        </div>
        <div className="flex gap-4 flex-wrap reveal">
          <a href={waLink("Hola, quisiera cotizar un vuelo privado.")} target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp</a>
          <a href="#contact" className="btn-secondary">Enviar Solicitud</a>
        </div>
      </div>

      {/* CONTACT — placeholder simple, full form in next iteration */}
      <section id="contact" className="py-28" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="eyebrow mb-4">Contáctanos</p>
          <h2 className="section-title">Solicita una <em>cotización.</em></h2>
          <div className="gold-rule" />
        </div>
        <div className="grid md:grid-cols-2 gap-16 mt-14">
          <div className="flex flex-col gap-8 reveal">
            {[
              { label: "WhatsApp", val: "+52 444 234 89 42" },
              { label: "Email", val: "operaciones@numen-aviation.com" },
              { label: "Hub Principal", val: "Aeropuerto Internacional de Toluca (MMTO)" },
              { label: "Disponibilidad", val: "24 horas · 7 días a la semana" },
              { label: "Área de Servicio", val: "México · EUA · Caribe · Centroamérica" },
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

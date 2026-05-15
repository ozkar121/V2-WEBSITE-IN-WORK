import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { waLink, SITE_URL } from "@/lib/site";
import { useLang } from "@/i18n/LanguageContext";

const AmbulanciasAereas = () => {
  useReveal();
  const { lang } = useLang();
  const isEs = lang === "es";

  useSEO({
    title: isEs
      ? "Ambulancias Aéreas en México | Traslado Médico en Jet | Numen Aviation"
      : "Air Ambulance in Mexico | Medical Jet Transport | Numen Aviation",
    description: isEs
      ? "Ambulancia aérea 24/7 desde Toluca y cualquier aeropuerto de México. Traslados médicos críticos en jet privado con equipo y personal especializado. Cotización en menos de 2 horas."
      : "24/7 air ambulance from Toluca and any Mexican airport. Critical medical transfers in private jets with specialized equipment and crew. Quote in under 2 hours.",
    path: "/servicios/ambulancias-aereas",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/servicios/ambulancias-aereas#service`,
        name: "Ambulancias Aéreas — Air Ambulance",
        provider: { "@type": "Organization", name: "Numen Aviation", url: SITE_URL },
        serviceType: "Air Ambulance",
        areaServed: ["Mexico", "United States", "Caribbean", "Central America"],
      },
    ],
  });

  const features = isEs
    ? [
        { n: "01", t: "Disponibilidad 24/7/365", d: "Coordinamos despegue en horas para emergencias médicas críticas, repatriaciones y traslados programados." },
        { n: "02", t: "Equipo médico certificado", d: "Aeronaves configuradas con camilla, ventilador, monitor multiparamétrico, oxígeno y desfibrilador, con paramédicos y médicos especialistas a bordo." },
        { n: "03", t: "Cobertura continental", d: "Operaciones desde Toluca (MMTO) y cualquier aeropuerto de México hacia EUA, Canadá, Caribe, Centro y Sudamérica." },
        { n: "04", t: "Coordinación hospital a hospital", d: "Gestionamos ambulancia terrestre, permisos sanitarios y entrega del paciente directamente al equipo médico receptor." },
      ]
    : [
        { n: "01", t: "24/7/365 availability", d: "Takeoff coordinated in hours for critical emergencies, repatriations, and scheduled transfers." },
        { n: "02", t: "Certified medical equipment", d: "Aircraft fitted with stretcher, ventilator, multiparameter monitor, oxygen, and defibrillator, with paramedics and specialist physicians on board." },
        { n: "03", t: "Continental coverage", d: "Operations from Toluca (MMTO) and any Mexican airport to the U.S., Canada, the Caribbean, Central and South America." },
        { n: "04", t: "Hospital-to-hospital coordination", d: "We arrange ground ambulance, health permits, and patient handover directly to the receiving medical team." },
      ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <nav aria-label="breadcrumb" className="absolute z-10" style={{ top: "5.5rem", left: "clamp(1.5rem, 4vw, 4rem)" }}>
        <ol className="flex items-center gap-2 list-none p-0">
          <li className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>
            <Link to="/" className="hover:text-jade transition-colors">{isEs ? "Inicio" : "Home"}</Link>
          </li>
          <li className="text-jade/50">›</li>
          <li className="text-[0.65rem] uppercase text-jade" style={{ letterSpacing: "0.15em" }}>
            {isEs ? "Ambulancias Aéreas" : "Air Ambulance"}
          </li>
        </ol>
      </nav>

      <section className="relative min-h-[78vh] flex flex-col justify-end overflow-hidden" style={{ padding: "9rem clamp(1.5rem, 4vw, 4rem) 6rem" }}>
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(var(--jade) / 0.07) 0%, transparent 70%), linear-gradient(165deg, hsl(var(--background)) 0%, hsl(var(--bg-2)) 50%, hsl(var(--background)) 100%)" }} />
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade/30 bg-jade/[0.06] w-fit mb-7">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-jade opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-jade" />
          </span>
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Servicio Médico Aéreo" : "Aeromedical Service"}
          </span>
        </div>
        <h1 className="font-serif font-light leading-[1.05] text-foreground max-w-[820px]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          {isEs ? <>Ambulancias <em className="italic text-jade-light">Aéreas</em><br />24/7.</> : <>Air <em className="italic text-jade-light">Ambulance</em><br />24/7.</>}
        </h1>
        <div className="w-[60px] h-px bg-jade my-8" />
        <p className="text-[0.95rem] font-light leading-[1.7] text-fg-3 max-w-[540px] mb-10">
          {isEs
            ? "Traslados médicos críticos y repatriaciones en jet privado con equipo de cuidados intensivos a bordo. Coordinamos cada eslabón del traslado, de hospital a hospital, en cualquier punto de las Américas."
            : "Critical medical transfers and repatriations in private jets with intensive-care equipment on board. We coordinate every link of the transport, hospital to hospital, anywhere in the Americas."}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={waLink(isEs ? "Hola, necesito coordinar una ambulancia aérea." : "Hi, I need to coordinate an air ambulance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)]"
            style={{ letterSpacing: "0.18em" }}
          >
            {isEs ? "Solicitar Traslado" : "Request Transport"}
          </a>
          <a href="/#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors" style={{ letterSpacing: "0.18em" }}>
            {isEs ? "Contactar Operaciones" : "Contact Operations"}
          </a>
        </div>
      </section>

      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>{isEs ? "Capacidades" : "Capabilities"}</p>
          <h2 className="font-serif font-light leading-[1.1] text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {isEs ? <>Atención médica en vuelo, <em className="italic text-jade-light">sin compromisos.</em></> : <>In-flight medical care, <em className="italic text-jade-light">no compromises.</em></>}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {features.map((f) => (
            <article key={f.n} className="bg-bg-2 p-10">
              <div className="font-serif text-[2rem] font-light text-jade/20 mb-3">{f.n}</div>
              <h3 className="text-[0.82rem] font-medium uppercase text-foreground mb-2" style={{ letterSpacing: "0.12em" }}>{f.t}</h3>
              <p className="text-[0.88rem] leading-[1.7] text-fg-3">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-bg-3 border-y border-jade-soft text-center" style={{ padding: "5rem clamp(1.5rem, 4vw, 4rem)" }}>
        <h2 className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          {isEs ? <>Cada minuto cuenta. <em className="italic text-jade-light">Activamos en 2 horas.</em></> : <>Every minute matters. <em className="italic text-jade-light">Activated in 2 hours.</em></>}
        </h2>
        <p className="text-[0.9rem] text-fg-3 max-w-[540px] mx-auto leading-[1.7] mb-10">
          {isEs ? "Operaciones 24/7. Hablamos directo con el médico tratante para coordinar el traslado." : "24/7 operations. We speak directly with the attending physician to coordinate the transfer."}
        </p>
        <a
          href={waLink(isEs ? "Hola, necesito coordinar una ambulancia aérea urgente." : "Hi, I need an urgent air ambulance.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all"
          style={{ letterSpacing: "0.18em" }}
        >
          {isEs ? "WhatsApp Operaciones" : "WhatsApp Operations"}
        </a>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default AmbulanciasAereas;

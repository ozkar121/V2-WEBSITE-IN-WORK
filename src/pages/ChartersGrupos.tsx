import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { waLink, SITE_URL } from "@/lib/site";
import { useLang } from "@/i18n/LanguageContext";

const ChartersGrupos = () => {
  useReveal();
  const { lang } = useLang();
  const isEs = lang === "es";

  useSEO({
    title: isEs
      ? "Charters para Grupos Grandes en México | Aviones para 30-180 pasajeros | Numen Aviation"
      : "Large Group Charters in Mexico | Aircraft for 30-180 Passengers | Numen Aviation",
    description: isEs
      ? "Charter de aeronaves comerciales para equipos deportivos, corporativos, incentivos y eventos. Configuraciones desde 30 hasta 180 pasajeros desde Toluca y México."
      : "Commercial aircraft charter for sports teams, corporate groups, incentives, and events. Configurations from 30 to 180 passengers from Toluca and Mexico.",
    path: "/servicios/charters-grupos",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/servicios/charters-grupos#service`,
        name: "Charters para Grupos Grandes — Group Charter",
        provider: { "@type": "Organization", name: "Numen Aviation", url: SITE_URL },
        serviceType: "Group Aircraft Charter",
      },
    ],
  });

  const fleet = isEs
    ? [
        { cat: "Turbohélice", name: "ATR 42 / 72", pax: "30 – 70 pax", note: "Ideal para conexiones regionales y pistas cortas." },
        { cat: "Jet Regional", name: "Bombardier CRJ", pax: "50 – 100 pax", note: "Velocidad de jet, perfecto para roadshows y giras deportivas." },
        { cat: "Jet Comercial", name: "Boeing 737 / Airbus A320", pax: "120 – 180 pax", note: "Configuración VIP o ejecutiva para eventos corporativos y equipos completos." },
      ]
    : [
        { cat: "Turboprop", name: "ATR 42 / 72", pax: "30 – 70 pax", note: "Ideal for regional connections and short runways." },
        { cat: "Regional Jet", name: "Bombardier CRJ", pax: "50 – 100 pax", note: "Jet speed, perfect for roadshows and sports tours." },
        { cat: "Commercial Jet", name: "Boeing 737 / Airbus A320", pax: "120 – 180 pax", note: "VIP or executive configuration for corporate events and full teams." },
      ];

  const useCases = isEs
    ? [
        { n: "I", t: "Equipos deportivos", d: "Traslado de plantillas completas, staff técnico, equipaje y equipo médico." },
        { n: "II", t: "Eventos corporativos", d: "Convenciones, lanzamientos e incentivos con itinerario a la medida." },
        { n: "III", t: "Producciones y giras", d: "Logística de producción, talento y crew con flexibilidad de origen-destino." },
        { n: "IV", t: "Grupos privados", d: "Bodas destino, viajes familiares ampliados y experiencias VIP cerradas." },
      ]
    : [
        { n: "I", t: "Sports teams", d: "Full rosters, coaching staff, baggage, and medical equipment." },
        { n: "II", t: "Corporate events", d: "Conventions, launches, and incentives with bespoke itineraries." },
        { n: "III", t: "Productions & tours", d: "Production logistics, talent, and crew with flexible origin-destination." },
        { n: "IV", t: "Private groups", d: "Destination weddings, extended family trips, and closed VIP experiences." },
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
            {isEs ? "Charters para Grupos Grandes" : "Large Group Charters"}
          </li>
        </ol>
      </nav>

      <section className="relative min-h-[78vh] flex flex-col justify-end overflow-hidden" style={{ padding: "9rem clamp(1.5rem, 4vw, 4rem) 6rem" }}>
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(var(--jade) / 0.07) 0%, transparent 70%), linear-gradient(165deg, hsl(var(--background)) 0%, hsl(var(--bg-2)) 50%, hsl(var(--background)) 100%)" }} />
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade/30 bg-jade/[0.06] w-fit mb-7">
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Hasta 180 pasajeros" : "Up to 180 passengers"}
          </span>
        </div>
        <h1 className="font-serif font-light leading-[1.05] text-foreground max-w-[860px]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          {isEs ? <>Charters para <em className="italic text-jade-light">Grupos Grandes.</em></> : <>Charters for <em className="italic text-jade-light">Large Groups.</em></>}
        </h1>
        <div className="w-[60px] h-px bg-jade my-8" />
        <p className="text-[0.95rem] font-light leading-[1.7] text-fg-3 max-w-[540px] mb-10">
          {isEs
            ? "Aeronaves comerciales y regionales operadas bajo demanda para equipos deportivos, corporativos, producciones y eventos. Tu agenda, tu ruta, tu logística — sin escalas innecesarias."
            : "Commercial and regional aircraft operated on demand for sports teams, corporate groups, productions, and events. Your schedule, your route, your logistics — no unnecessary stops."}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={waLink(isEs ? "Hola, quiero cotizar un charter para un grupo grande." : "Hi, I'd like to quote a large group charter.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)]"
            style={{ letterSpacing: "0.18em" }}
          >
            {isEs ? "Solicitar Cotización" : "Request a Quote"}
          </a>
          <a href="#flota" className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors" style={{ letterSpacing: "0.18em" }}>
            {isEs ? "Ver Aeronaves" : "View Aircraft"}
          </a>
        </div>
      </section>

      <section id="flota" style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>{isEs ? "Aeronaves" : "Aircraft"}</p>
          <h2 className="font-serif font-light leading-[1.1] text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {isEs ? <>Configuraciones para cada <em className="italic text-jade-light">tamaño de grupo.</em></> : <>Configurations for every <em className="italic text-jade-light">group size.</em></>}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {fleet.map((ac) => (
            <article key={ac.name} className="bg-bg-2 p-7 hover:bg-bg-3 transition-colors">
              <p className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.2em" }}>{ac.cat}</p>
              <h3 className="font-serif text-[1.5rem] font-light text-foreground mb-2">{ac.name}</h3>
              <div className="text-[0.85rem] font-medium text-foreground mb-1">{ac.pax}</div>
              <p className="text-[0.82rem] leading-[1.6] text-fg-3 border-t border-jade-soft pt-4 mt-4">{ac.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-bg-2" style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>{isEs ? "Casos de Uso" : "Use Cases"}</p>
          <h2 className="font-serif font-light leading-[1.1] text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {isEs ? <>Para quién <em className="italic text-jade-light">operamos.</em></> : <>Who we <em className="italic text-jade-light">operate for.</em></>}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {useCases.map((it) => (
            <article key={it.n} className="bg-background p-10">
              <div className="font-serif text-[2rem] font-light text-jade/20 mb-3">{it.n}</div>
              <h3 className="text-[0.82rem] font-medium uppercase text-foreground mb-2" style={{ letterSpacing: "0.12em" }}>{it.t}</h3>
              <p className="text-[0.88rem] leading-[1.7] text-fg-3">{it.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-bg-3 border-y border-jade-soft text-center" style={{ padding: "5rem clamp(1.5rem, 4vw, 4rem)" }}>
        <h2 className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          {isEs ? <>Mueve a tu equipo <em className="italic text-jade-light">en una sola operación.</em></> : <>Move your team <em className="italic text-jade-light">in a single operation.</em></>}
        </h2>
        <a
          href={waLink(isEs ? "Hola, quiero cotizar un charter para un grupo grande." : "Hi, I'd like to quote a large group charter.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all mt-6"
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

export default ChartersGrupos;

import { Link } from "react-router-dom";
import { Briefcase, Trophy, Star, Users, Heart, Music } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { waLink, SITE_URL } from "@/lib/site";
import { useLang } from "@/i18n/LanguageContext";

const WA_GROUP =
  "https://wa.me/524442348942?text=Hola%2C%20me%20interesa%20un%20charter%20grupal";

const ChartersGrupos = () => {
  useReveal();
  const { lang } = useLang();
  const isEs = lang === "es";

  useSEO({
    title: isEs
      ? "Vuelos Charter para Grupos en México — Hasta 50 Pasajeros | Numen Aviation"
      : "Group Charter Flights Mexico — Up to 50 Passengers | Numen Aviation",
    description: isEs
      ? "Chártea un ERJ145 o CRJ200 desde el Aeropuerto de Toluca para grupos de hasta 50 personas. Retiros corporativos, viajes de incentivo, delegaciones deportivas y más."
      : "Charter an ERJ145 or CRJ200 from Toluca Airport for groups of up to 50. Corporate retreats, incentive trips, sports delegations, and more. Operated by Numen Aviation.",
    path: "/charters-grupales",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/charters-grupales#service`,
        name: "Group Charter — Numen Aviation",
        provider: { "@type": "Organization", name: "Numen Aviation", url: SITE_URL },
        serviceType: "Group Aircraft Charter",
        areaServed: ["Mexico", "United States", "Caribbean", "Central America"],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: isEs ? "Charters Grupales" : "Group Charters",
            item: `${SITE_URL}/charters-grupales`,
          },
        ],
      },
    ],
  });

  const STATS = [
    { val: "50", lbl: isEs ? "Pasajeros Máx." : "Max. Passengers" },
    { val: "ERJ145 / CRJ200", lbl: isEs ? "Flota Disponible" : "Fleet Type" },
    { val: "4 h", lbl: isEs ? "Aviso a Despegue" : "Notice to Departure" },
    { val: "MMTO", lbl: isEs ? "Hub Exclusivo" : "Exclusive Hub" },
  ];

  const AIRCRAFT = [
    {
      name: "Embraer ERJ-145",
      cat: isEs ? "Regional Jet · Charter Grupal" : "Regional Jet · Group Charter",
      specs: [
        { l: isEs ? "Capacidad" : "Capacity", v: isEs ? "Hasta 50 pasajeros" : "Up to 50 passengers" },
        { l: isEs ? "Alcance" : "Range", v: "2,873 km" },
        { l: isEs ? "Velocidad" : "Speed", v: "833 km/h" },
        {
          l: isEs ? "Cabina" : "Cabin",
          v: isEs ? "Configuración 2-1, pasillo central, overhead bins" : "2-1 layout, center aisle, overhead bins",
        },
      ],
      copy: isEs
        ? "El ERJ145 acomoda hasta 50 pasajeros en configuración 2-1 — confort ejecutivo a escala grupal. Diseñado para rutas de menos de 3,000 km, cubre todos los destinos principales de México y llega a EE.UU. y el Caribe sin escala de combustible."
        : "The ERJ145 seats up to 50 in a 2-1 configuration — business-class comfort at group scale. Designed for routes under 3,000 km, it covers every major Mexican destination and extends into the U.S. and Caribbean without a fuel stop.",
      ideal: isEs
        ? "Grupos corporativos, viajes de incentivo, delegaciones"
        : "Corporate groups, incentive travel, delegations",
    },
    {
      name: "Bombardier CRJ-200",
      cat: isEs ? "Regional Jet · Charter Grupal" : "Regional Jet · Group Charter",
      specs: [
        { l: isEs ? "Capacidad" : "Capacity", v: isEs ? "Hasta 50 pasajeros" : "Up to 50 passengers" },
        { l: isEs ? "Alcance" : "Range", v: "3,148 km" },
        { l: isEs ? "Velocidad" : "Speed", v: "830 km/h" },
        {
          l: isEs ? "Cabina" : "Cabin",
          v: isEs ? "Configuración 2-2, alta eficiencia de asientos" : "2-2 layout, high seat efficiency",
        },
      ],
      copy: isEs
        ? "El CRJ200 transporta hasta 50 pasajeros con un alcance ligeramente mayor que el ERJ145 — ideal cuando tu destino está en el límite del mapa. Silencioso, confiable y totalmente charteable desde MMTO."
        : "The CRJ200 carries up to 50 passengers with a slightly longer range than the ERJ145 — ideal when your destination sits closer to the edge of the map. Quiet, reliable, and fully charterable from MMTO.",
      ideal: isEs
        ? "Equipos deportivos, retiros de empresa, grupos familiares UHNW"
        : "Sports teams, company retreats, UHNW family groups",
    },
  ];

  const USE_CASES = [
    {
      Icon: Briefcase,
      t: isEs ? "Retiros Corporativos" : "Corporate Retreats",
      d: isEs
        ? "Una aeronave para todo el equipo directivo. Sin horarios divididos, sin coordinación innecesaria. Aborden juntos, lleguen juntos."
        : "One aircraft for the whole executive team. No split schedules, no coordination overhead. Board together, arrive together.",
    },
    {
      Icon: Trophy,
      t: isEs ? "Delegaciones Deportivas" : "Sports Delegations",
      d: isEs
        ? "Viajes de equipo sin el desgaste de lo comercial. Equipo, staff y atletas bajo un solo techo — tu terminal privada."
        : "Team travel without the friction of commercial. Equipment, staff, and athletes under one roof — your private terminal.",
    },
    {
      Icon: Star,
      t: isEs ? "Viajes de Incentivo" : "Incentive Trips",
      d: isEs
        ? "Premia a tus mejores colaboradores con una experiencia que comienza desde la entrada. Salida privada, sin filas, aeronave completa — tu marca, tu momento."
        : "Reward your top performers with an experience that starts at the door. Private departure, no queues, full aircraft — your brand, your moment.",
    },
    {
      Icon: Users,
      t: isEs ? "Grupos Familiares y Sociales" : "Family & Social Groups",
      d: isEs
        ? "Bodas, celebraciones de vida, viajes a destinos especiales. Chártea la aeronave completa y llegan como uno."
        : "Weddings, milestone events, destination celebrations. Charter the whole aircraft and arrive as one.",
    },
    {
      Icon: Heart,
      t: isEs ? "Bodas y Celebraciones" : "Weddings & Celebrations",
      d: isEs
        ? "Vuela a toda tu boda en una sola aeronave. Terminal privada, tiempos coordinados, cero caos comercial. La celebración empieza antes de aterrizar."
        : "Fly your entire wedding party on one aircraft. Private terminal, coordinated timing, zero commercial chaos. The celebration starts before you land.",
    },
    {
      Icon: Music,
      t: isEs ? "Logística para Artistas" : "Artist & Tour Logistics",
      d: isEs
        ? "Crew de producción, instrumentos, management y talento — todos en el mismo vuelo. Discreción garantizada, horario tuyo. Sin conexiones comerciales, sin retrasos, sin exposición."
        : "Production crew, instruments, management, and talent — all on the same flight. Discretion guaranteed, schedule yours. No commercial connections, no delays, no exposure.",
    },
  ];

  const STEPS = [
    {
      n: "01",
      t: isEs ? "Cuéntanos sobre tu grupo" : "Tell us your group",
      d: isEs
        ? "Tamaño, destino, fecha y cualquier requerimiento especial. Nosotros nos encargamos del resto."
        : "Size, destination, date, and any special requirements. We handle everything from here.",
    },
    {
      n: "02",
      t: isEs ? "Conseguimos la aeronave" : "We source the aircraft",
      d: isEs
        ? "ERJ145 o CRJ200, de operadores certificados AFAC. Confirmamos disponibilidad, precio y logística en horas."
        : "ERJ145 or CRJ200, sourced from vetted AFAC-certified operators. We confirm availability, pricing, and logistics in hours.",
    },
    {
      n: "03",
      t: isEs ? "Aborden en Toluca" : "Board at Toluca",
      d: isEs
        ? "Tu grupo llega a la terminal privada de MMTO. Sin puertas comerciales. Ruedas arriba en tu horario."
        : "Your group arrives at MMTO's private terminal. No commercial gates. Wheels up on your schedule.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <nav
        aria-label="breadcrumb"
        className="absolute z-10"
        style={{ top: "5.5rem", left: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <ol className="flex items-center gap-2 list-none p-0">
          <li className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>
            <Link to="/" className="hover:text-jade transition-colors">
              {isEs ? "Inicio" : "Home"}
            </Link>
          </li>
          <li className="text-jade/50">›</li>
          <li className="text-[0.65rem] uppercase text-jade" style={{ letterSpacing: "0.15em" }}>
            {isEs ? "Charters Grupales" : "Group Charters"}
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden"
        style={{ padding: "9rem clamp(1.5rem, 4vw, 4rem) 6rem" }}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(var(--jade) / 0.07) 0%, transparent 70%), linear-gradient(165deg, hsl(var(--background)) 0%, hsl(var(--bg-2)) 50%, hsl(var(--background)) 100%)",
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

        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade/30 bg-jade/[0.06] w-fit mb-7 animate-fade-in">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-jade opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-jade" />
          </span>
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Toluca · MMTO — Grupos" : "Toluca · MMTO — Groups"}
          </span>
        </div>

        <h1
          className="font-serif font-light leading-[1.05] text-foreground max-w-[820px]"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
        >
          {isEs ? (
            <>
              Cincuenta lugares.<br />
              Una aeronave.<br />
              <em className="italic text-jade-light">Tus condiciones.</em>
            </>
          ) : (
            <>
              Fifty seats.<br />
              One aircraft.<br />
              <em className="italic text-jade-light">Your rules.</em>
            </>
          )}
        </h1>
        <div className="w-[60px] h-px bg-jade my-8" />
        <p className="text-[0.95rem] font-light leading-[1.7] text-fg-3 max-w-[560px] mb-10">
          {isEs
            ? "Cuando tu grupo es demasiado grande para un jet ejecutivo y demasiado importante para una sala de abordaje comercial. Charters en ERJ145 y CRJ200 saliendo de Toluca — en tu horario, con tu gente."
            : "When your group is too large for a cabin jet and too important for a commercial gate. ERJ145 and CRJ200 charters departing from Toluca — on your schedule, with your people."}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)] hover:shadow-[0_0_32px_-2px_hsl(var(--jade)/0.85)]"
            style={{ letterSpacing: "0.18em" }}
          >
            {isEs ? "Cotiza tu Grupo" : "Request a Group Quote"}
          </a>
          <a
            href="#aircraft"
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors"
            style={{ letterSpacing: "0.18em" }}
          >
            {isEs ? "Ver Aeronaves" : "View Aircraft"}
          </a>
        </div>
      </section>

      {/* STATS */}
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

      {/* AIRCRAFT */}
      <section id="aircraft" style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Flota" : "Fleet"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>Dos aeronaves.<br /><em className="italic text-jade-light">Diseñadas para esto.</em></>
            ) : (
              <>Two airframes.<br /><em className="italic text-jade-light">Built for this.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[620px]">
            {isEs
              ? "Ambas aeronaves operan desde la terminal privada de Toluca. Sin transbordos. Sin caos de puertas. Solo tu grupo, tu aeronave, tu terminal."
              : "Both aircraft operate from Toluca's private terminal. No hub transfers. No gate-change chaos. Just your group, your aircraft, your terminal."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {AIRCRAFT.map((ac) => (
            <article key={ac.name} className="bg-bg-2 p-8 hover:bg-bg-3 transition-colors flex flex-col">
              <p className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.2em" }}>
                {ac.cat}
              </p>
              <h3 className="font-serif text-[1.7rem] font-light text-foreground mb-5">{ac.name}</h3>
              <div className="flex flex-col gap-2.5 mb-5">
                {ac.specs.map((s) => (
                  <div key={s.l} className="flex justify-between border-b border-jade-soft py-2 text-[0.82rem]">
                    <span className="text-fg-3 uppercase text-[0.65rem]" style={{ letterSpacing: "0.1em" }}>
                      {s.l}
                    </span>
                    <span className="text-foreground text-right max-w-[60%]">{s.v}</span>
                  </div>
                ))}
              </div>
              <p className="text-[0.85rem] leading-[1.7] text-fg-3 mb-5">{ac.copy}</p>
              <div className="mt-auto pt-4 border-t border-jade-soft">
                <p className="text-[0.62rem] uppercase text-jade mb-1" style={{ letterSpacing: "0.2em" }}>
                  {isEs ? "Ideal para" : "Ideal for"}
                </p>
                <p className="text-[0.85rem] text-foreground">{ac.ideal}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-bg-2" style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Para Quién Es Esto" : "Who This Is For"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>No todos los grupos<br /><em className="italic text-jade-light">viajan igual.</em></>
            ) : (
              <>Not every group<br /><em className="italic text-jade-light">travels the same way.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {USE_CASES.map(({ Icon, t, d }) => (
            <article key={t} className="bg-background p-8 hover:bg-bg-3 transition-colors">
              <Icon className="w-7 h-7 text-jade mb-5" strokeWidth={1.2} />
              <h3 className="text-[0.82rem] font-medium uppercase text-foreground mb-3" style={{ letterSpacing: "0.12em" }}>
                {t}
              </h3>
              <p className="text-[0.85rem] leading-[1.7] text-fg-3">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Proceso" : "Process"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>Cómo funciona el <em className="italic text-jade-light">charter grupal.</em></>
            ) : (
              <>How <em className="italic text-jade-light">group charter</em> works.</>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 border border-jade-soft bg-jade-soft reveal list-none">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-background p-8">
              <div className="font-serif text-[2.5rem] font-light text-jade/20 leading-none mb-3">{s.n}</div>
              <h3 className="text-[0.82rem] font-medium uppercase text-foreground mb-2" style={{ letterSpacing: "0.12em" }}>
                {s.t}
              </h3>
              <p className="text-[0.85rem] leading-[1.7] text-fg-3">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA FINAL */}
      <section
        className="bg-bg-3 border-y border-jade-soft text-center"
        style={{ padding: "5rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <h2
          className="font-serif font-light text-foreground mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          {isEs ? (
            <>Listos cuando <em className="italic text-jade-light">tu grupo lo esté.</em></>
          ) : (
            <>Ready when <em className="italic text-jade-light">your group is.</em></>
          )}
        </h2>
        <p className="text-[0.9rem] text-fg-3 max-w-[540px] mx-auto leading-[1.7] mb-10">
          {isEs
            ? "Envíanos tu fecha, ruta y número de personas. Tendremos una cotización lista antes de que termines de escribir."
            : "Send us your date, route, and headcount. We'll have a quote ready before the conversation is over."}
        </p>
        <a
          href={WA_GROUP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all"
          style={{ letterSpacing: "0.18em" }}
        >
          {isEs ? "Cotizar por WhatsApp" : "Request a Quote on WhatsApp"}
        </a>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default ChartersGrupos;

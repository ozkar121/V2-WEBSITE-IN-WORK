import { Link } from "react-router-dom";
import { Hospital, Shield, Users, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL, EMAIL, PHONE_NUMBER, PHONE_TEL } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";
import { useLang } from "@/i18n/LanguageContext";
import heroAmbulancia from "@/assets/hero-ambulancia.png";

const WA_AMB =
  "https://wa.me/524442348942?text=Emergencia%20m%C3%A9dica%2C%20necesito%20ambulancia%20a%C3%A9rea";

const AmbulanciasAereas = () => {
  useReveal();
  const { lang } = useLang();
  const isEs = lang === "es";

  const seo = useSEO({
    title: isEs
      ? "Ambulancia Aérea México — Learjet 35 · Respuesta en 4 Horas | Numen Aviation"
      : "Air Ambulance Mexico — Learjet 35 · 4-Hour Response | Numen Aviation",
    description: isEs
      ? "Transporte aéreo médico desde el Aeropuerto de Toluca. Learjet 35 equipado para traslado de pacientes críticos. Ruedas arriba en 4 horas desde el primer contacto. 24/7."
      : "Medical air transport from Toluca Airport. Learjet 35 fully equipped for critical patient transfer. Wheels up in 4 hours from first contact. 24/7. Operated by Numen Aviation.",
    path: "/ambulancia-aerea",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        name: "Numen Aviation — Air Ambulance",
        description:
          "Medical air transport from Toluca Airport (MMTO). Learjet 35, 24/7, 4-hour activation.",
        url: `${SITE_URL}/ambulancia-aerea`,
        logo: `${SITE_URL}/og-image.jpg`,
        image: `${SITE_URL}/og-image.jpg`,
        telephone: "+524442348942",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Toluca",
          addressRegion: "Estado de México",
          addressCountry: "MX",
        },
        availableService: {
          "@type": "MedicalProcedure",
          name: "Air Ambulance Transport",
          description: "Critical patient air transport via Learjet 35 from MMTO",
        },
      },
      buildBreadcrumb({ path: "/ambulancia-aerea" })!,
    ],
  });

  const STATS = [
    { val: "4 hrs", lbl: isEs ? "Tiempo a Ruedas Arriba" : "Time to Wheels Up" },
    { val: "24 / 7", lbl: isEs ? "Siempre Disponible" : "Always On" },
    { val: "Learjet 35", lbl: isEs ? "Aeronave Principal" : "Primary Aircraft" },
    { val: "ICU-grade", lbl: isEs ? "Equipo Médico" : "Medical Equipment" },
  ];

  const SPECS = [
    {
      l: isEs ? "Capacidad médica" : "Medical capacity",
      v: isEs ? "1–2 pacientes en camilla + equipo médico a bordo" : "1–2 stretcher patients + medical team on board",
    },
    { l: isEs ? "Alcance" : "Range", v: isEs ? "3,742 km (sin escala)" : "3,742 km (nonstop)" },
    { l: isEs ? "Velocidad de crucero" : "Cruise speed", v: "867 km/h" },
    {
      l: isEs ? "Altitud de cabina" : "Cabin altitude",
      v: isEs ? "Equivalente a ~2,000 m (vs. 2,400 m promedio comercial)" : "Equivalent to ~2,000 m (vs. 2,400 m commercial average)",
    },
    { l: isEs ? "Certificación" : "Certification", v: "AFAC / FAA compatible" },
    { l: "Hub", v: "Toluca International Airport · MMTO" },
  ];

  const EQUIPMENT = isEs
    ? [
        "Sistema de camilla y litera",
        "Monitor cardíaco / desfibrilador",
        "Ventilador de transporte",
        "Bombas de infusión",
        "Sistema portátil de oxígeno",
        "Unidad de succión",
        "Kit de medicamentos de emergencia",
        "Enfermero de vuelo / paramédico capacitado",
      ]
    : [
        "Stretcher & litter system",
        "Cardiac monitor / defibrillator",
        "Ventilator (transport-grade)",
        "Infusion pumps",
        "Portable oxygen system",
        "Suction unit",
        "Emergency drug kit",
        "Trained flight nurse / paramedic",
      ];

  const PROTOCOL = [
    {
      time: "T+0",
      t: isEs ? "Primer Contacto" : "First Contact",
      d: isEs
        ? "Contactas a nuestro coordinador 24/7. Recopilamos datos del paciente, origen, destino y requerimientos médicos."
        : "You reach our 24/7 coordinator. We collect patient info, origin, destination, and medical requirements.",
    },
    {
      time: "T+30 min",
      t: isEs ? "Briefing Médico" : "Medical Briefing",
      d: isEs
        ? "Nuestro equipo coordina con el médico tratante. Perfil de misión definido: equipo, tripulación médica y plan de vuelo."
        : "Our team coordinates with the attending physician. Mission profile defined: equipment, medical crew, and flight plan.",
    },
    {
      time: "T+1 hr",
      t: isEs ? "Activación de Aeronave" : "Aircraft Activation",
      d: isEs
        ? "El Learjet 35 entra en standby en MMTO. La tripulación médica se moviliza. Equipo cargado y verificado."
        : "Learjet 35 placed on standby at MMTO. Medical crew mobilizes. Equipment loaded and checked.",
    },
    {
      time: "T+2–3 hrs",
      t: isEs ? "Tripulación y Permisos" : "Crew & Clearances",
      d: isEs
        ? "La tripulación completa el pre-vuelo. Permisos de ATC gestionados. Aduana coordinada si es internacional."
        : "Flight crew completes pre-flight. ATC clearances filed. Customs coordinated if international.",
    },
    {
      time: "T+4 hrs",
      t: isEs ? "Ruedas Arriba" : "Wheels Up",
      d: isEs
        ? "La aeronave despega de MMTO. El paciente en camino a su destino."
        : "Aircraft departs MMTO. Patient en route to destination.",
    },
  ];

  const DESTINATIONS = [
    "Ciudad de México",
    "Monterrey",
    "Guadalajara",
    "Cancún",
    "Los Cabos",
    "Mérida",
    "Houston",
    "Miami",
    "San Antonio",
    "Guatemala City",
    "San José, CR",
    "Bogotá",
  ];

  const AUDIENCES = [
    {
      Icon: Hospital,
      t: isEs ? "Hospitales y Clínicas" : "Hospitals & Clinics",
      d: isEs
        ? "Para repatriación de pacientes, traslados inter-hospitalarios o acceso a especialistas transfronterizo."
        : "For patient repatriation, inter-hospital transfers, or specialist access across borders.",
    },
    {
      Icon: Shield,
      t: isEs ? "Aseguradoras" : "Insurance Carriers",
      d: isEs
        ? "Coordinamos directamente con tu equipo de seguros. Documentación completa para reembolso."
        : "We coordinate directly with your insurance team. Full documentation provided for reimbursement.",
    },
    {
      Icon: Users,
      t: isEs ? "Familias" : "Families",
      d: isEs
        ? "Cuando un ser querido necesita llegar a casa — o al hospital correcto — nosotros manejamos cada detalle para que tú no tengas que hacerlo."
        : "When a loved one needs to get home — or to the right hospital — we handle every detail so you don't have to.",
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
            <Link to="/" className="hover:text-jade transition-colors">
              {isEs ? "Inicio" : "Home"}
            </Link>
          </li>
          <li className="text-jade/50">›</li>
          <li className="text-[0.65rem] uppercase text-jade" style={{ letterSpacing: "0.15em" }}>
            {isEs ? "Ambulancia Aérea" : "Air Ambulance"}
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section
        className="relative isolate min-h-[80vh] flex flex-col justify-end overflow-hidden"
        style={{ padding: "9rem clamp(1.5rem, 4vw, 4rem) 4rem" }}
      >
        <img
          src={heroAmbulancia}
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
        <div
          className="absolute top-0 -z-10"
          style={{
            right: "20%",
            width: "0.5px",
            height: "55%",
            background: "linear-gradient(to bottom, transparent, hsl(var(--jade)), transparent)",
            opacity: 0.55,
          }}
        />

        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade/40 bg-jade/[0.08] w-fit mb-7 animate-fade-in">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-jade opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-jade" />
          </span>
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Emergencias · 24 / 7 · MMTO" : "Emergencies · 24 / 7 · MMTO"}
          </span>
        </div>

        <h1
          className="font-serif font-light text-foreground max-w-[820px]"
          style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", lineHeight: 1.1, marginBottom: "1.25rem" }}
        >
          {isEs ? "Ambulancia Aérea" : "Air Ambulance"}
        </h1>
        <p
          className="font-serif font-light leading-[1.05] text-foreground max-w-[820px]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {isEs ? (
            <>
              Activación en 4 horas.<br />
              <em className="italic text-jade-light">Sin excepciones.</em>
            </>
          ) : (
            <>
              Four hours<br />
              <em className="italic text-jade-light">to wheels up.</em>
            </>
          )}
        </p>
        <div className="w-[60px] h-px bg-jade my-8" />
        <p className="text-[0.95rem] font-light leading-[1.7] text-fg-3 max-w-[560px] mb-10">
          {isEs
            ? "Transporte aéreo médico desde el Aeropuerto Internacional de Toluca. Learjet 35 equipado con sistemas de nivel UCI, disponible las 24 horas. Cuando los minutos importan, nosotros actuamos."
            : "Medical air transport from Toluca International Airport. Learjet 35 equipped with ICU-grade systems, available around the clock. When minutes matter, we move."}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={WA_AMB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_28px_-2px_hsl(var(--jade)/0.85)] hover:shadow-[0_0_36px_0_hsl(var(--jade)/1)]"
            style={{ letterSpacing: "0.18em" }}
          >
            {isEs ? "Contactar Ahora" : "Contact Us Now"}
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors"
            style={{ letterSpacing: "0.18em" }}
          >
            {isEs ? "Más Información" : "Learn More"}
          </a>
        </div>
      </section>

      {/* URGENCY STRIP */}
      <div
        className="bg-jade/10 border-y border-jade/40"
        style={{ padding: "1rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center text-center">
          <span className="text-[0.7rem] uppercase text-jade-light font-medium" style={{ letterSpacing: "0.2em" }}>
            {isEs ? "Operaciones 24/7" : "24/7 Operations"}
          </span>
          <span className="text-jade/40 hidden md:inline">·</span>
          <span className="text-[0.7rem] uppercase text-jade-light font-medium" style={{ letterSpacing: "0.2em" }}>
            {isEs ? "Coordinador en Línea" : "Response Coordinator on Call"}
          </span>
          <span className="text-jade/40 hidden md:inline">·</span>
          <span className="text-[0.7rem] uppercase text-jade-light font-medium" style={{ letterSpacing: "0.2em" }}>
            Toluca · MMTO
          </span>
          <span className="text-jade/40 hidden md:inline">·</span>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-1.5 text-[0.7rem] uppercase text-jade-light font-medium hover:text-foreground transition-colors"
            style={{ letterSpacing: "0.2em" }}
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE_NUMBER}
          </a>
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

      {/* AIRCRAFT */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "La Aeronave" : "The Aircraft"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Learjet 35.<br />
            <em className="italic text-jade-light">
              {isEs ? "Precisión en altitud." : "Precision at altitude."}
            </em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-8 reveal">
          <p className="text-[0.95rem] leading-[1.8] text-fg-3">
            {isEs
              ? "El Learjet 35 es una de las plataformas de transporte médico más capaces de su clase. Su cabina presurizada mantiene niveles de oxígeno cercanos al nivel del mar en crucero — crítico para pacientes postquirúrgicos y cardíacos. Con un alcance superior a los 3,700 km sin escalas, alcanza todos los destinos principales de México, Estados Unidos y el Caribe desde Toluca sin parada de combustible."
              : "The Learjet 35 is one of the most capable medical transport platforms in its class. Its pressurized cabin maintains near sea-level oxygen levels at cruise altitude — critical for post-surgical and cardiac patients. With a range exceeding 3,700 km nonstop, it reaches every major destination in Mexico, the United States, and the Caribbean from Toluca without a fuel stop."}
          </p>
          <div className="border border-jade-soft p-7">
            <h3 className="font-serif text-[1.3rem] font-light text-foreground mb-1">
              {isEs ? "Especificaciones" : "Specifications"}
            </h3>
            <p className="text-[0.7rem] uppercase text-jade mb-5" style={{ letterSpacing: "0.2em" }}>
              Learjet 35
            </p>
            {SPECS.map((row, i) => (
              <div
                key={row.l}
                className={`flex justify-between gap-4 py-3 text-[0.82rem] ${i > 0 ? "border-t border-jade-soft" : ""}`}
              >
                <span className="text-fg-3 uppercase text-[0.65rem] flex-shrink-0" style={{ letterSpacing: "0.08em" }}>
                  {row.l}
                </span>
                <span className="text-foreground text-right">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL EQUIPMENT */}
      <section className="bg-bg-2" style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "A Bordo" : "On Board"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>Equipado para<br /><em className="italic text-jade-light">cuidados críticos en vuelo.</em></>
            ) : (
              <>Equipped for<br /><em className="italic text-jade-light">critical care in flight.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {EQUIPMENT.map((item) => (
            <div key={item} className="bg-background p-5 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-jade flex-shrink-0" />
              <span className="text-[0.88rem] text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-[0.72rem] text-fg-3 mt-6 italic max-w-[640px]">
          {isEs
            ? "La configuración del equipo varía según el perfil del vuelo y las necesidades del paciente. Inventario completo confirmado al momento de la reserva."
            : "Equipment configuration varies by mission profile and patient needs. Full inventory confirmed at time of booking."}
        </p>
      </section>

      {/* 4-HOUR PROTOCOL */}
      <section id="how-it-works" style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "El Protocolo de 4 Horas" : "The 4-Hour Protocol"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>Del primer contacto<br /><em className="italic text-jade-light">a ruedas arriba.</em></>
            ) : (
              <>From first call<br /><em className="italic text-jade-light">to wheels up.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>

        <ol className="mt-12 reveal list-none border-l border-jade-soft ml-3">
          {PROTOCOL.map((step) => (
            <li key={step.time} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-jade" />
              <p className="text-[0.65rem] uppercase text-jade mb-2 font-medium" style={{ letterSpacing: "0.25em" }}>
                {step.time}
              </p>
              <h3 className="font-serif text-[1.3rem] font-light text-foreground mb-2">{step.t}</h3>
              <p className="text-[0.88rem] leading-[1.7] text-fg-3 max-w-[640px]">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* COVERAGE */}
      <section className="bg-bg-2" style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Cobertura" : "Coverage"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>Dónde <em className="italic text-jade-light">operamos.</em></>
            ) : (
              <>Where we <em className="italic text-jade-light">operate.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[640px]">
            {isEs
              ? "Con base en el Aeropuerto Internacional de Toluca, cubrimos todo México, Estados Unidos continental, Centroamérica y el Caribe — sin escala en el Learjet 35 para la mayoría de los destinos."
              : "Based at Toluca International Airport, we cover all of Mexico, the continental United States, Central America, and the Caribbean — nonstop in the Learjet 35 for most destinations."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-10 reveal">
          {DESTINATIONS.map((d) => (
            <span
              key={d}
              className="text-[0.72rem] uppercase text-fg-2 border border-jade-soft px-4 py-2 hover:border-jade hover:text-jade-light transition-colors"
              style={{ letterSpacing: "0.12em" }}
            >
              {d}
            </span>
          ))}
        </div>
      </section>

      {/* WHO CALLS US */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {isEs ? "Con Quién Trabajamos" : "Who We Work With"}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {isEs ? (
              <>Con quién <em className="italic text-jade-light">trabajamos.</em></>
            ) : (
              <>Who we <em className="italic text-jade-light">work with.</em></>
            )}
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {AUDIENCES.map(({ Icon, t, d }) => (
            <article key={t} className="bg-bg-2 p-8">
              <Icon className="w-7 h-7 text-jade mb-5" strokeWidth={1.2} />
              <h3 className="text-[0.82rem] font-medium uppercase text-foreground mb-3" style={{ letterSpacing: "0.12em" }}>
                {t}
              </h3>
              <p className="text-[0.85rem] leading-[1.7] text-fg-3">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL — URGENT */}
      <section
        className="bg-bg-3 border-y-2 border-jade text-center"
        style={{ padding: "5rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <h2
          className="font-serif font-light text-foreground mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          {isEs ? (
            <>Cada minuto importa.<br /><em className="italic text-jade-light">Estamos listos.</em></>
          ) : (
            <>Every minute counts.<br /><em className="italic text-jade-light">We're ready.</em></>
          )}
        </h2>
        <p className="text-[0.9rem] text-fg-3 max-w-[540px] mx-auto leading-[1.7] mb-10">
          {isEs
            ? "Contacta a nuestro coordinador de operaciones ahora. Disponible 24 horas, 365 días. Activamos de inmediato."
            : "Contact our operations coordinator now. Available 24 hours, 365 days. We activate immediately."}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={WA_AMB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-4 text-[0.75rem] uppercase font-medium hover:bg-background hover:text-jade hover:border-jade border border-jade transition-all shadow-[0_0_28px_-2px_hsl(var(--jade)/0.85)]"
            style={{ letterSpacing: "0.2em" }}
          >
            {isEs ? "WhatsApp Ahora" : "WhatsApp Now"}
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
      <WhatsAppFAB />
    </div>
  );
};

export default AmbulanciasAereas;

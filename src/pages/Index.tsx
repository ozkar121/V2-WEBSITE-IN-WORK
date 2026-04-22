import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { Marquee } from "@/components/Marquee";
import { CornerBrackets } from "@/components/CornerBrackets";
import { FleetSection } from "@/components/FleetSection";
import { waLink } from "@/lib/site";

const services = [
  { num: "01", name: "Charter bajo Demanda", desc: "Acceso inmediato a turbohélices, jets ligeros, medianos y pesados en México, EUA y el Caribe. Despegue en horas, no en días." },
  { num: "02", name: "Empty Legs", desc: "Acceso exclusivo a vuelos de reposicionamiento a una fracción del precio. Consúltanos sobre disponibilidad en tu ruta." },
  { num: "03", name: "Consultoría de Aviación", desc: "Asesoría estratégica para operadores, inversionistas y viajeros frecuentes. Planificación de flota, cumplimiento regulatorio y más." },
  { num: "04", name: "Adquisición de Aeronaves", desc: "Asesoría experta para compra o venta de aeronaves. Inspecciones previas, valuación de mercado y soporte en la transacción." },
];

const stats = [
  { val: "24/7", label: "Siempre Disponibles" },
  { val: "2h", label: "Tiempo de Respuesta" },
  { val: "150+", label: "Rutas Operadas" },
  { val: "100%", label: "Récord de Seguridad" },
];

const whyItems = [
  { num: "I", title: "Correduría Independiente", desc: "Sin sesgo de flota. Conseguimos la mejor aeronave para tu misión de una red de operadores certificados en México y las Américas." },
  { num: "II", title: "Precios Transparentes", desc: "Sin cargos ocultos. Recibes un desglose completo antes de confirmar — ferry, handling e IVA incluidos." },
  { num: "III", title: "Expertise México-First", desc: "Conocimiento profundo del espacio aéreo mexicano, regulaciones AFAC y relaciones con operadores que otros no tienen." },
  { num: "IV", title: "Un Solo Punto de Contacto", desc: "Tu asesor de aviación dedicado maneja todo — de la cotización al aterrizaje. Sin call centers, sin filas." },
];

const Index = () => {
  useReveal();
  useSEO({
    title: "Numen Aviation | Charter de Jet Privado en México y Las Américas",
    description: "Charter de jet privado en México, EUA y el Caribe. Vuelos bajo demanda, empty legs, consultoría y adquisición de aeronaves. Disponible 24/7 desde Toluca.",
  });

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)", paddingBottom: "6rem", minHeight: 680 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(var(--jade) / 0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 20% 80%, hsl(var(--background) / 0.85) 0%, transparent 60%), linear-gradient(165deg, hsl(var(--background)) 0%, hsl(var(--bg-2)) 50%, hsl(var(--background)) 100%)",
          }}
        />
        <div className="absolute top-0 right-[20%] w-px h-[55%]" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--jade)), transparent)", opacity: 0.4 }} />

        <div className="relative z-10 inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade-soft bg-jade/[0.06] w-fit mb-7 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-jade animate-pulse-ring" />
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>Aviación Privada · México y Las Américas</span>
        </div>

        <h1 className="display-title relative z-10 max-w-3xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Beyond <em>First</em><br />Class.
        </h1>
        <div className="gold-rule relative z-10 animate-fade-up" style={{ animationDelay: "0.7s", margin: "2rem 0" }} />
        <p className="relative z-10 text-[0.95rem] text-fg-3 leading-relaxed max-w-md mb-10 animate-fade-up" style={{ animationDelay: "0.85s" }}>
          Charter bajo demanda, consultoría y adquisición de aeronaves. Adaptado a tu agenda, tus estándares y tu destino.
        </p>
        <div className="relative z-10 flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "1s" }}>
          <a href={waLink("Hola, me gustaría solicitar una cotización de charter.")} target="_blank" rel="noopener noreferrer" className="btn-primary">Solicitar Cotización</a>
          <a href="#fleet" className="btn-secondary">Ver Nuestra Flota</a>
        </div>
      </section>

      <Marquee items={["Charter bajo Demanda","·","Empty Legs","·","Consultoría","·","Adquisición de Aeronaves","·","Servicio 24/7","·","México · EUA · Caribe","·"]} />

      {/* SERVICES */}
      <section id="services" className="py-28" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="eyebrow mb-4">Lo Que Ofrecemos</p>
          <h2 className="section-title">Cada aspecto de<br />la aviación privada,<br /><em>resuelto.</em></h2>
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
          <div className="absolute inset-0 bg-bg-2 border border-jade-soft overflow-hidden flex items-center justify-center relative">
            <CornerBrackets size="lg" />
            <div className="absolute -top-1/3 -left-1/4 w-[70%] h-[70%]" style={{ background: "radial-gradient(circle, hsl(var(--jade) / 0.1), transparent 70%)" }} />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-bg-3 border border-jade-dark p-6 w-56">
            <div className="font-serif text-3xl font-light text-jade leading-none">Toluca</div>
            <p className="text-[0.68rem] uppercase text-fg-3 mt-2" style={{ letterSpacing: "0.18em" }}>Hub Principal · MMTO</p>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow mb-4">Por Qué Numen</p>
          <h2 className="section-title">El estándar que<br />otros no <em>alcanzan.</em></h2>
          <div className="gold-rule" />
          <p className="text-[0.9rem] leading-relaxed text-fg-3 max-w-md">
            Numen Aviation fue construida por operadores, no por vendedores. Entendemos lo que se necesita para ejecutar un vuelo perfecto — porque lo hemos hecho miles de veces.
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
            ¿Listo para volar?<br /><em className="italic text-jade-light">Hablemos.</em>
          </h2>
          <p className="text-[0.875rem] text-fg-3 mt-3">Empty legs, charters bajo demanda, consultoría. Estamos disponibles ahora.</p>
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
          <div className="relative bg-bg-2/45 border border-foreground/10 p-10 reveal">
            <p className="text-fg-3 text-[0.85rem] leading-relaxed">
              El formulario completo de cotización se conectará a Lovable Cloud en la siguiente iteración.<br /><br />
              Mientras tanto, escríbenos por WhatsApp para una respuesta inmediata.
            </p>
            <a href={waLink("Hola, quisiera cotizar un vuelo privado.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
              Escribir por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </>
  );
};

export default Index;

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { ScrollVideoBackground } from "@/components/ScrollVideoBackground";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { Marquee } from "@/components/Marquee";
import { CornerBrackets } from "@/components/CornerBrackets";
import { FleetSection } from "@/components/FleetSection";
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
];


const Index = () => {
  useReveal();
  const { t, lang } = useLang();
  const [showVideo, setShowVideo] = useState(false);

  const services = [
    { num: "01", name: t("service_01_name"), desc: t("service_01_desc") },
    { num: "02", name: t("service_02_name"), desc: t("service_02_desc") },
    { num: "03", name: t("service_03_name"), desc: t("service_03_desc") },
    { num: "04", name: t("service_04_name"), desc: t("service_04_desc") },
  ];

  const stats = [
    { val: "24/7", label: t("stat_24_7") },
    { val: "< 2h", label: t("stat_2h") },
    { val: "150+", label: t("stat_routes") },
    { val: "100%", label: t("stat_safety") },
  ];

  const whyItems = [
    { num: "I", title: t("why_01_t"), desc: t("why_01_d") },
    { num: "II", title: t("why_02_t"), desc: t("why_02_d") },
    { num: "III", title: t("why_03_t"), desc: t("why_03_d") },
    { num: "IV", title: t("why_04_t"), desc: t("why_04_d") },
  ];

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
    title:
      lang === "en"
        ? "Private Jet Charter in Toluca and Mexico | Numen Aviation"
        : "Renta de Jet Privado en Toluca y México | Numen Aviation",
    description:
      lang === "en"
        ? "Private jet charter on demand from Toluca Airport (MMTO). Empty legs, consulting and acquisition. Quote in under 2 hours. 24/7 service."
        : "Renta de jet privado y charter bajo demanda desde Toluca (MMTO). Empty legs, consultoría y adquisición. Cotización en menos de 2 horas. 24/7.",
    path: "/",
    jsonLd: HOME_JSONLD,
  });

  return (
    <>
      <ScrollVideoBackground src="/plane-scroll.mp4" />
      <Navbar />
      <main>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)", paddingBottom: "6rem", minHeight: 680 }}
      >
        {/* El fondo de avión con scroll está montado a nivel de página (ScrollVideoBackground).
            En el hero dejamos transparente para que el video se vea protagónico. */}
        {/* Overlay para legibilidad — refuerza contraste del título y CTAs */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.65) 0%, hsl(var(--background) / 0.45) 35%, hsl(var(--background) / 0.95) 100%), linear-gradient(90deg, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.15) 55%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 right-[20%] w-px h-[55%]" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--jade)), transparent)", opacity: 0.4 }} />

        <div className="relative z-10 inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-jade-soft bg-jade/[0.06] w-fit mb-7 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-jade animate-pulse-ring" />
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.3em" }}>{t("hero_badge")}</span>
        </div>

        <h1 className="display-title relative z-10 max-w-3xl">
          {t("hero_title_a")} <em>{t("hero_title_em")}</em><br />{t("hero_title_b")}
        </h1>
        <div className="gold-rule relative z-10 animate-fade-up" style={{ animationDelay: "0.7s", margin: "2rem 0" }} />
        <p className="relative z-10 text-[0.95rem] text-fg-3 leading-relaxed max-w-md mb-10 animate-fade-up" style={{ animationDelay: "0.85s" }}>
          {t("hero_subtitle")}
        </p>
        <div className="relative z-10 flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "1s" }}>
          <a href={waLink("Hola, me gustaría solicitar una cotización de charter.")} target="_blank" rel="noopener noreferrer" className="btn-primary">{t("hero_cta_quote")}</a>
          <a href="#fleet" className="btn-secondary">{t("hero_cta_fleet")}</a>
        </div>
      </section>

      <Marquee items={[t("marquee_rental"),"·",t("marquee_charter"),"·",t("marquee_empty"),"·",t("marquee_exec"),"·",t("marquee_acq"),"·",t("marquee_24"),"·",t("marquee_geo"),"·"]} />

      {/* SERVICES */}
      <section id="services" className="py-28" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
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
      <section id="contact" className="py-28" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
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

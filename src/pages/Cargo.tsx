import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { waLink, PHONE_NUMBER, PHONE_TEL, SITE_URL } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";
import { useLang } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import heroCargo from "@/assets/hero-cargo.webp";

const Cargo = () => {
  useReveal();
  const { t } = useLang();

  const STATS = [
    { val: "24/7/365", lbl: t("cg_stat_avail") },
    { val: t("cg_stat_mob_val"), lbl: t("cg_stat_mob") },
    { val: t("cg_stat_cap_val"), lbl: t("cg_stat_cap") },
    { val: t("cg_stat_cov_val"), lbl: t("cg_stat_cov") },
  ];

  const FLEET: { catKey: TranslationKey; name: string; specs: { v: string; lKey: TranslationKey }[]; advKey?: TranslationKey; cfgKey?: TranslationKey; noteKey: TranslationKey }[] = [
    {
      catKey: "cg_fleet_1_cat",
      name: "Bombardier Dash 8",
      specs: [
        { v: "~ 5,500 kg", lKey: "cg_lbl_payload" },
        { v: "~ 2,000 km", lKey: "cg_lbl_range" },
      ],
      advKey: "cg_fleet_1_adv",
      noteKey: "cg_fleet_1_note",
    },
    {
      catKey: "cg_fleet_2_cat",
      name: "Bombardier CRJ",
      specs: [
        { v: "~ 6,700 kg", lKey: "cg_lbl_payload" },
        { v: "~ 3,000 km", lKey: "cg_lbl_range" },
      ],
      advKey: "cg_fleet_1_adv", // overwritten below using "Jet Speed" literal
      noteKey: "cg_fleet_2_note",
    },
    {
      catKey: "cg_fleet_3_cat",
      name: "Boeing 737",
      specs: [
        { v: "~ 20,000 kg", lKey: "cg_lbl_payload" },
        { v: "~ 5,000 km", lKey: "cg_lbl_range" },
      ],
      cfgKey: "cg_fleet_3_cfg",
      noteKey: "cg_fleet_3_note",
    },
  ];

  // Override second fleet's advantage with literal "Jet Speed"
  const fleetExtra: (string | null)[] = ["__adv__", "Jet Speed", "__cfg__"];

  const PROCESS: { n: string; tKey: TranslationKey; dKey: TranslationKey }[] = [
    { n: "01", tKey: "cg_proc_1_t", dKey: "cg_proc_1_d" },
    { n: "02", tKey: "cg_proc_2_t", dKey: "cg_proc_2_d" },
    { n: "03", tKey: "cg_proc_3_t", dKey: "cg_proc_3_d" },
    { n: "04", tKey: "cg_proc_4_t", dKey: "cg_proc_4_d" },
    { n: "05", tKey: "cg_proc_5_t", dKey: "cg_proc_5_d" },
  ];

  const INDUSTRIES: { n: string; tKey: TranslationKey; dKey: TranslationKey }[] = [
    { n: "I", tKey: "cg_ind_1_t", dKey: "cg_ind_1_d" },
    { n: "II", tKey: "cg_ind_2_t", dKey: "cg_ind_2_d" },
    { n: "III", tKey: "cg_ind_3_t", dKey: "cg_ind_3_d" },
    { n: "IV", tKey: "cg_ind_4_t", dKey: "cg_ind_4_d" },
  ];

  const STD_ROWS: { lKey: TranslationKey; vKey: TranslationKey }[] = [
    { lKey: "cg_op_std_1l", vKey: "cg_op_std_1v" },
    { lKey: "cg_op_std_2l", vKey: "cg_op_std_2v" },
    { lKey: "cg_op_std_3l", vKey: "cg_op_std_3v" },
    { lKey: "cg_op_std_4l", vKey: "cg_op_std_4v" },
    { lKey: "cg_op_std_5l", vKey: "cg_op_std_5v" },
    { lKey: "cg_op_std_6l", vKey: "cg_op_std_6v" },
  ];

  const seo = useSEO({
    title: t("seo_cg_title"),
    description: t("seo_cg_desc"),
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
        offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" },
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
      buildBreadcrumb({ path: "/vuelos-de-carga" })!,
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {seo}
      <Navbar />

      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="absolute z-10"
        style={{ top: "5.5rem", left: "clamp(1.5rem, 4vw, 4rem)", right: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <ol className="flex items-center gap-2 list-none p-0">
          <li className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>
            <Link to="/" className="hover:text-jade transition-colors">{t("common_home")}</Link>
          </li>
          <li className="text-jade/50">›</li>
          <li className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>
            <a href="/#services" className="hover:text-jade transition-colors">{t("cg_breadcrumb_services")}</a>
          </li>
          <li className="text-jade/50">›</li>
          <li className="text-[0.65rem] uppercase text-jade" style={{ letterSpacing: "0.15em" }}>
            {t("cg_breadcrumb")}
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section
        className="relative isolate min-h-[88vh] flex flex-col justify-end overflow-hidden"
        style={{ padding: "9rem clamp(1.5rem, 4vw, 4rem) 6rem" }}
      >
        <img
          src={heroCargo}
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
          <span className="text-[0.62rem] uppercase text-jade">{t("cg_eyebrow")}</span>
        </div>

        <h1
          className="font-serif font-light text-foreground max-w-[820px]"
          style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", lineHeight: 1.1, marginBottom: "1.25rem" }}
        >
          Vuelos de Carga Privados
        </h1>
        <p
          className="font-serif font-light leading-[1.05] text-foreground max-w-[820px]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {t("cg_hero_a")} <em className="italic text-jade-light">{t("cg_hero_em")}</em>
          <br />
          {t("cg_hero_b")}
          <br />
          {t("cg_hero_c")}
        </p>
        <div className="w-[60px] h-px bg-jade my-8" />
        <p className="text-[0.95rem] font-light leading-[1.7] text-fg-3 max-w-[520px] mb-10">
          {t("cg_hero_sub")}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={waLink(t("cg_cta_wa_quote"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)] hover:shadow-[0_0_32px_-2px_hsl(var(--jade)/0.85)]"
            style={{ letterSpacing: "0.18em" }}
          >
            {t("common_quote_now")}
          </a>
          <a
            href="#proceso"
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors"
            style={{ letterSpacing: "0.18em" }}
          >
            {t("cg_cta_how")}
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
            {t("cg_op_eyebrow")}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {t("cg_op_title_a")} <em className="italic text-jade-light">{t("cg_op_title_em")}</em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12 reveal">
          <div className="space-y-5">
            <p className="text-[0.95rem] leading-[1.8] text-fg-3" dangerouslySetInnerHTML={{ __html: t("cg_op_p1") }} />
            <p className="text-[0.95rem] leading-[1.8] text-fg-3" dangerouslySetInnerHTML={{ __html: t("cg_op_p2") }} />
            <p className="text-[0.95rem] leading-[1.8] text-fg-3" dangerouslySetInnerHTML={{ __html: t("cg_op_p3") }} />
          </div>
          <div className="border border-jade-soft p-8">
            <h3 className="font-serif text-[1.4rem] font-light text-foreground mb-1">
              {t("cg_op_std_t")}
            </h3>
            <p className="text-[0.7rem] uppercase text-jade mb-6" style={{ letterSpacing: "0.2em" }}>
              {t("cg_op_std_sub")}
            </p>
            {STD_ROWS.map((row, i) => (
              <div
                key={row.lKey}
                className={`flex justify-between py-3 text-[0.82rem] ${i > 0 ? "border-t border-jade-soft" : ""}`}
              >
                <span className="text-fg-3 uppercase text-[0.68rem]" style={{ letterSpacing: "0.08em" }}>
                  {t(row.lKey)}
                </span>
                <span className="text-foreground">{t(row.vKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOTA */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {t("cg_fleet_eyebrow")}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {t("cg_fleet_title_a")} <em className="italic text-jade-light">{t("cg_fleet_title_em")}</em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[620px]">{t("cg_fleet_intro")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {FLEET.map((ac, idx) => {
            const extra = fleetExtra[idx];
            // For idx=0: advantage label uses cg_lbl_advantage + value t(advKey)
            // For idx=1: advantage label uses cg_lbl_advantage + value "Jet Speed"
            // For idx=2: config label uses cg_lbl_config + value t(cfgKey)
            const thirdSpec = idx === 2
              ? { v: t(ac.cfgKey!), l: t("cg_lbl_config") }
              : idx === 1
              ? { v: extra ?? "", l: t("cg_lbl_advantage") }
              : { v: t(ac.advKey!), l: t("cg_lbl_advantage") };
            const allSpecs = [
              ...ac.specs.map((s) => ({ v: s.v, l: t(s.lKey) })),
              thirdSpec,
            ];
            return (
              <article key={ac.name} className="bg-bg-2 p-7 hover:bg-bg-3 transition-colors">
                <p className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.2em" }}>
                  {t(ac.catKey)}
                </p>
                <h3 className="font-serif text-[1.5rem] font-light text-foreground mb-2">{ac.name}</h3>
                <div className="flex gap-6 my-4 flex-wrap">
                  {allSpecs.map((s) => (
                    <div key={s.l}>
                      <span className="text-[0.85rem] font-medium text-foreground block">{s.v}</span>
                      <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.1em" }}>
                        {s.l}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[0.82rem] leading-[1.6] text-fg-3 border-t border-jade-soft pt-4 mt-4">
                  {t(ac.noteKey)}
                </p>
              </article>
            );
          })}
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
            {t("cg_proc_eyebrow")}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {t("cg_proc_title_a")} <em className="italic text-jade-light">{t("cg_proc_title_em")}</em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[620px]">{t("cg_proc_intro")}</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-px mt-12 border border-jade-soft bg-jade-soft reveal list-none">
          {PROCESS.map((s) => (
            <li key={s.n} className="bg-background p-6">
              <div className="font-serif text-[2.5rem] font-light text-jade/20 leading-none mb-3">{s.n}</div>
              <h3 className="text-[0.78rem] font-medium uppercase text-foreground mb-2" style={{ letterSpacing: "0.12em" }}>
                {t(s.tKey)}
              </h3>
              <p className="text-[0.82rem] leading-[1.7] text-fg-3">{t(s.dKey)}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* INDUSTRIAS */}
      <section style={{ padding: "6rem clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="text-[0.65rem] uppercase text-jade mb-4" style={{ letterSpacing: "0.3em" }}>
            {t("cg_ind_eyebrow")}
          </p>
          <h2
            className="font-serif font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {t("cg_ind_title_a")} <em className="italic text-jade-light">{t("cg_ind_title_em")}</em>
          </h2>
          <div className="w-10 h-px bg-jade my-6" />
          <p className="text-[0.9rem] text-fg-3 leading-[1.7] max-w-[620px]">{t("cg_ind_intro")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12 border border-jade-soft bg-jade-soft reveal">
          {INDUSTRIES.map((it) => (
            <article key={it.n} className="bg-bg-2 p-10">
              <div className="font-serif text-[2rem] font-light text-jade/20 mb-3">{it.n}</div>
              <h3 className="text-[0.82rem] font-medium uppercase text-foreground mb-2" style={{ letterSpacing: "0.12em" }}>
                {t(it.tKey)}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-fg-3">{t(it.dKey)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="border-y border-jade-soft text-center"
        style={{ padding: "5rem clamp(1.5rem, 4vw, 4rem)" }}
      >
        <h2
          className="font-serif font-light text-foreground mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          {t("cg_band_a")} <em className="italic text-jade-light">{t("cg_band_em")}</em> {t("cg_band_b")}
        </h2>
        <p className="text-[0.9rem] text-fg-3 max-w-[540px] mx-auto leading-[1.7] mb-10">
          {t("cg_band_sub")}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={waLink(t("cg_band_wa"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jade text-background px-8 py-3.5 text-[0.72rem] uppercase font-medium hover:bg-jade-light transition-all hover:-translate-y-0.5 shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)] hover:shadow-[0_0_32px_-2px_hsl(var(--jade)/0.85)]"
            style={{ letterSpacing: "0.18em" }}
          >
            {t("common_whatsapp_quote")}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-transparent text-foreground px-8 py-3.5 text-[0.72rem] uppercase border border-foreground/25 hover:border-foreground transition-colors"
            style={{ letterSpacing: "0.18em" }}
          >
            <Phone className="w-3.5 h-3.5" />
            {t("common_call")} {PHONE_NUMBER}
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Cargo;

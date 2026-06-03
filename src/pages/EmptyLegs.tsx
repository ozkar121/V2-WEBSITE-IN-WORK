import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { CornerBrackets } from "@/components/CornerBrackets";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { supabase } from "@/integrations/supabase/client";
import { type AircraftCategory } from "@/data/aircraft";
import { waLink, SITE_URL } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";
import { useLang } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

interface DbLeg {
  id: string;
  from_city: string;
  from_iata: string | null;
  to_city: string;
  to_iata: string | null;
  flight_date: string;
  aircraft: string;
  category: string;
  seats: number;
  price: number | null;
  is_featured: boolean;
  is_new: boolean;
}

type Filter = "all" | AircraftCategory;

const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const EMPTY_LEGS_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un empty leg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un empty leg es un vuelo privado de reposicionamiento donde la aeronave debe volar sin pasajeros. Se ofrece hasta 75% por debajo del precio de un charter completo, con el mismo servicio y operador certificado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tan rápido puedo confirmar un empty leg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Confirmamos por WhatsApp o email en menos de una hora. Generamos contrato y cotización formal el mismo día.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo cambiar la fecha o el horario de un empty leg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las fechas y horarios de empty legs son fijos porque dependen del reposicionamiento de la aeronave. Si necesitas flexibilidad total, te recomendamos un charter bajo demanda.",
        },
      },
    ],
  },
  buildBreadcrumb({ path: "/empty-legs" })!,
];

const EmptyLegs = () => {
  useReveal();
  const { t, lang } = useLang();
  const seo = useSEO({
    title: t("seo_el_title"),
    description: t("seo_el_desc"),
    path: "/empty-legs",
    jsonLd: EMPTY_LEGS_JSONLD,
  });

  const [filter, setFilter] = useState<Filter>("all");
  const [legs, setLegs] = useState<DbLeg[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (iso: string) =>
    new Date(iso + "T00:00:00").toLocaleDateString(lang === "en" ? "en-US" : "es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const FILTERS: { id: Filter; label: string }[] = [
    { id: "all", label: t("el_filter_all") },
    { id: "turbo", label: t("cat_turbo") },
    { id: "light", label: t("cat_light") },
    { id: "midsize", label: t("cat_midsize") },
    { id: "heavy", label: t("cat_heavy") },
  ];

  const STEPS: { num: string; tKey: TranslationKey; dKey: TranslationKey }[] = [
    { num: "01", tKey: "el_step1_t", dKey: "el_step1_d" },
    { num: "02", tKey: "el_step2_t", dKey: "el_step2_d" },
    { num: "03", tKey: "el_step3_t", dKey: "el_step3_d" },
  ];

  useEffect(() => {
    supabase
      .from("empty_legs")
      .select("id,from_city,from_iata,to_city,to_iata,flight_date,aircraft,category,seats,price,is_featured,is_new")
      .eq("is_active", true)
      .order("flight_date", { ascending: true })
      .then(({ data }) => {
        setLegs((data as DbLeg[]) ?? []);
        setLoading(false);
      });
  }, []);

  const visible = useMemo(
    () => (filter === "all" ? legs : legs.filter((l) => l.category === filter)),
    [filter, legs]
  );

  const catLabel = (c: string) => {
    const key = `cat_${c}` as TranslationKey;
    return t(key) || c;
  };

  return (
    <>
      {seo}
      <Navbar />

      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="absolute top-24 z-10"
        style={{ left: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <ol
          className="flex items-center gap-2 list-none text-[0.65rem] uppercase text-fg-3"
          style={{ letterSpacing: "0.15em" }}
        >
          <li><Link to="/" className="text-fg-3 hover:text-jade no-underline">{t("common_home")}</Link></li>
          <li className="text-jade opacity-50">›</li>
          <li className="text-jade">{t("el_breadcrumb")}</li>
        </ol>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden"
        style={{ padding: "9rem clamp(1.5rem, 4vw, 4rem) 5rem" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(var(--jade) / 0.07) 0%, transparent 70%), linear-gradient(165deg, hsl(var(--background)) 0%, hsl(var(--bg-2)) 50%, hsl(var(--background)) 100%)",
          }}
        />
        <p className="relative z-10 eyebrow mb-5 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {t("el_eyebrow")}
        </p>
        <h1 className="relative z-10 font-serif font-light text-foreground max-w-3xl animate-fade-up" style={{ animationDelay: "0.5s", fontSize: "clamp(2rem, 4.2vw, 3.25rem)", lineHeight: 1.1, marginBottom: "1.25rem" }}>
          {lang === "en" ? "Empty Legs and Repositioning Flights in Mexico" : "Empty Legs y Trayectos Vacíos en México"}
        </h1>
        <p className="display-title relative z-10 max-w-2xl animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {t("el_hero_title_a")} <em>{t("el_hero_title_em")}</em><br />{t("el_hero_title_b")}
        </p>
        <div className="gold-rule relative z-10 animate-fade-up" style={{ animationDelay: "0.7s" }} />
        <p
          className="relative z-10 text-[0.95rem] text-fg-3 leading-relaxed max-w-xl mb-10 animate-fade-up"
          style={{ animationDelay: "0.85s" }}
          dangerouslySetInnerHTML={{ __html: t("el_hero_intro") }}
        />
        <div className="relative z-10 flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "1s" }}>
          <a href="#disponibles" className="btn-primary">
            {t("el_cta_view")}
          </a>
          <a href={waLink(t("el_cta_wa_msg"))} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            WhatsApp
          </a>
        </div>
      </section>

      {/* STATS */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 border border-jade-soft reveal"
        style={{ margin: "0 clamp(1rem, 4vw, 4rem)" }}
      >
        {[
          { val: "−75%", lbl: t("el_stat_savings") },
          { val: "24h", lbl: t("el_stat_confirm") },
          { val: "150+", lbl: t("el_stat_routes") },
          { val: "100%", lbl: t("el_stat_certified") },
        ].map((s) => (
          <div key={s.lbl} className="p-7 border-r border-jade-soft last:border-r-0">
            <div className="font-serif text-2xl font-light text-foreground mb-1.5">{s.val}</div>
            <div className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* AVAILABLE FLIGHTS */}
      <section
        id="disponibles"
        className="py-24"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">{t("el_avail_eyebrow")}</p>
            <h2 className="section-title">{t("el_avail_title_a")} <em>{t("el_avail_title_em")}</em></h2>
            <div className="gold-rule" />
          </div>
          <p className="text-[0.7rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>
            {visible.length} {visible.length === 1 ? t("el_count_one") : t("el_count_many")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-px mt-10 border border-jade-soft reveal">
          {FILTERS.map((f) => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`flex-1 min-w-[120px] px-5 py-3 text-[0.68rem] uppercase border-r border-jade-soft last:border-r-0 transition-colors ${
                  active
                    ? "bg-jade text-background"
                    : "bg-bg-2 text-fg-3 hover:bg-bg-3 hover:text-foreground"
                }`}
                style={{ letterSpacing: "0.2em" }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          key={filter}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-px border border-jade-soft animate-fade-in"
        >
          <CornerBrackets />
          {visible.map((leg) => {
            const badge = leg.is_featured ? t("el_badge_featured") : leg.is_new ? t("el_badge_new") : null;
            return (
              <article
                key={leg.id}
                className={`p-7 border-r border-b border-jade-soft flex flex-col gap-4 transition-colors ${
                  leg.is_featured ? "bg-bg-3" : "bg-bg-2 hover:bg-bg-3"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[0.6rem] uppercase text-jade" style={{ letterSpacing: "0.25em" }}>
                    {catLabel(leg.category)}
                  </span>
                  {badge && (
                    <span
                      className="text-[0.55rem] uppercase border border-jade-soft text-jade-light px-2 py-1"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      {badge}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-2">
                  <div>
                    <div className="font-serif text-xl font-light text-foreground leading-tight">
                      {leg.from_city}
                    </div>
                    {leg.from_iata && (
                      <div className="text-[0.62rem] uppercase text-fg-3 mt-1" style={{ letterSpacing: "0.2em" }}>
                        {leg.from_iata}
                      </div>
                    )}
                  </div>
                  <span className="text-jade text-lg">›</span>
                  <div className="text-right">
                    <div className="font-serif text-xl font-light text-foreground leading-tight">
                      {leg.to_city}
                    </div>
                    {leg.to_iata && (
                      <div className="text-[0.62rem] uppercase text-fg-3 mt-1" style={{ letterSpacing: "0.2em" }}>
                        {leg.to_iata}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-jade-soft pt-4 mt-2">
                  <div>
                    <div className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>
                      {t("el_lbl_date")}
                    </div>
                    <div className="text-[0.85rem] text-foreground mt-1">{formatDate(leg.flight_date)}</div>
                  </div>
                  <div>
                    <div className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>
                      {t("el_lbl_seats")}
                    </div>
                    <div className="text-[0.85rem] text-foreground mt-1">{leg.seats || "—"}</div>
                  </div>
                  <div>
                    <div className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>
                      {t("el_lbl_aircraft")}
                    </div>
                    <div className="text-[0.85rem] text-foreground mt-1">{leg.aircraft}</div>
                  </div>
                  <div>
                    <div className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>
                      {t("el_lbl_from_price")}
                    </div>
                    <div className="font-serif text-lg font-light text-jade-light mt-0.5">
                      {leg.price ? formatPrice(Number(leg.price)) : t("el_quote_word")}
                    </div>
                  </div>
                </div>

                <a
                  href={waLink(
                    `${t("el_book_wa_msg")} ${leg.from_city} → ${leg.to_city} ${t("el_book_wa_on")} ${formatDate(leg.flight_date)} (${leg.aircraft}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center mt-2"
                >
                  {t("el_book_leg")}
                </a>
              </article>
            );
          })}
          {!loading && visible.length === 0 && (
            <div className="col-span-full p-12 text-center bg-bg-2 border-r border-b border-jade-soft">
              <p className="text-fg-3 text-[0.85rem]">{t("el_no_legs")}</p>
            </div>
          )}
          {loading && (
            <div className="col-span-full p-12 text-center bg-bg-2 border-r border-b border-jade-soft">
              <p className="text-fg-3 text-[0.85rem]">{t("el_loading")}</p>
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="bg-bg-2 py-24"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="reveal">
          <p className="eyebrow mb-4">{t("el_how_eyebrow")}</p>
          <h2 className="section-title">{t("el_how_title_a")} <em>{t("el_how_title_em")}</em></h2>
          <div className="gold-rule" />
        </div>
        <div className="grid md:grid-cols-3 mt-12 border border-jade-soft">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="bg-background p-10 border-r border-b border-jade-soft last:border-r-0 reveal"
            >
              <div
                className="font-serif text-3xl font-light mb-3"
                style={{ color: "hsl(var(--jade) / 0.15)" }}
              >
                {s.num}
              </div>
              <div
                className="text-[0.78rem] uppercase font-medium text-foreground mb-2.5"
                style={{ letterSpacing: "0.12em" }}
              >
                {t(s.tKey)}
              </div>
              <p className="text-[0.875rem] leading-relaxed text-fg-3">{t(s.dKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-bg-3 border-y border-jade-soft py-20 text-center"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="reveal">
          <h2
            className="font-serif font-light text-foreground mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            {t("el_cta_title_a")}<br />
            <em className="italic text-jade-light">{t("el_cta_title_em")}</em>
          </h2>
          <p className="text-[0.9rem] text-fg-3 mb-10 max-w-xl mx-auto">{t("el_cta_sub")}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={waLink(t("el_cta_wa_route"))} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t("common_whatsapp_now")}
            </a>
            <a href="/#contact" className="btn-secondary">
              {t("common_send_request")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </>
  );
};

export default EmptyLegs;

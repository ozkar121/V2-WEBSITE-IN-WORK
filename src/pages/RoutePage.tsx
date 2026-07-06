import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { DotPattern } from "@/components/DotPattern";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useReveal } from "@/hooks/useReveal";
import { useSEO } from "@/hooks/useSEO";
import { ROUTE_DATA, localizeRoute } from "@/data/routes";
import { waLink, SITE_URL } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";
import { useLang } from "@/i18n/LanguageContext";


const RoutePage = () => {
  const { slug } = useParams();
  const { t, lang, lp } = useLang();
  useReveal();
  const rawRoute = slug ? ROUTE_DATA[slug] : undefined;
  const route = rawRoute ? localizeRoute(rawRoute, lang) : undefined;

  const path = `/rutas/${slug}`;
  const schemaUrl = `${SITE_URL}${lang === "en" ? `/en${path}` : path}`;
  const jsonLd = route
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: lang === "en" ? "Private Jet Charter" : "Charter de Jet Privado",
          provider: { "@type": "Organization", name: "Numen Aviation", url: SITE_URL },
          areaServed: [route.heroFromCity, route.heroToCity, "México"],
          name:
            lang === "en"
              ? `Private Flight ${route.heroFromCity} → ${route.heroToCity}`
              : `Vuelo Privado ${route.heroFromCity} → ${route.heroToCity}`,
          description: route.description,
          url: schemaUrl,
        },
        buildBreadcrumb({
          path,
          trail: [
            { name: "Rutas", item: `${SITE_URL}/rutas` },
            {
              name: `${route.heroFromCity} a ${route.heroToCity}`,
              item: `${SITE_URL}${path}`,
            },
          ],
        })!,
        ...(route.faq && route.faq.length > 0
          ? [
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: route.faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ]
          : []),
      ]
    : undefined;

  const seo = useSEO({
    title: route?.title ?? t("rt_seo_default_title"),
    description: route?.description,
    path,
    type: "article",
    jsonLd,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [slug]);

  if (!route) return <Navigate to="/" replace />;


  return (
    <div key={slug} className="animate-fade-in">
      {seo}

      <Navbar />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="absolute top-24 z-10" style={{ left: "clamp(1.5rem, 4vw, 4rem)" }}>
        <ol className="flex items-center gap-2 list-none text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>
          <li><Link to={lp("/")} className="text-fg-3 hover:text-jade no-underline">{t("common_home")}</Link></li>
          <li className="text-jade opacity-50">›</li>
          <li>{t("rt_breadcrumb_routes")}</li>
          <li className="text-jade opacity-50">›</li>
          <li className="text-jade">{route.tagline.replace(" · ", " → ")}</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden" style={{ padding: "9rem clamp(1.5rem, 4vw, 4rem) 6rem" }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(var(--jade) / 0.07) 0%, transparent 70%), linear-gradient(165deg, hsl(var(--background)) 0%, hsl(var(--bg-2)) 50%, hsl(var(--background)) 100%)",
        }} />
        <DotPattern origin="right" seed={11} className="absolute top-0 right-0 h-full w-1/2 md:w-1/3" />
        <p className="relative z-10 eyebrow mb-5 animate-fade-up" style={{ animationDelay: "0.3s" }}>{route.tagline}</p>
        <h1 className="relative z-10 display-title max-w-2xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {route.heroFromCity}<br />{lang === "en" ? "to" : "a"} <em>{route.heroToCity}.</em>
        </h1>
        <div className="gold-rule relative z-10 animate-fade-up" style={{ animationDelay: "0.7s" }} />
        <p className="relative z-10 text-[0.95rem] text-fg-3 leading-relaxed max-w-lg mb-10 animate-fade-up" style={{ animationDelay: "0.85s" }}>{route.heroSubtitle}</p>
        <div className="relative z-10 flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "1s" }}>
          <a href={waLink(route.waMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary">{t("rt_cta_request_quote")}</a>
          <a href="#aircraft" className="btn-secondary">{t("rt_cta_view_aircraft")}</a>
        </div>
      </section>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-jade-soft reveal" style={{ margin: "0 clamp(1rem, 4vw, 4rem)" }}>
        {[
          { val: route.stats.distance, lbl: t("rt_stat_distance") },
          { val: route.stats.time, lbl: t("rt_stat_time") },
          { val: route.stats.price, lbl: t("rt_stat_price") },
          { val: route.stats.aircraft, lbl: t("rt_stat_aircraft") },
        ].map((s) => (
          <div key={s.lbl} className="p-7 border-r border-jade-soft last:border-r-0">
            <div className="font-serif text-2xl font-light text-foreground mb-1.5">{s.val}</div>
            <div className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* AIRPORTS */}
      <section className="bg-bg-2 py-24" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="eyebrow mb-4">{t("rt_details_eyebrow")}</p>
          <h2 className="section-title">{t("rt_details_title_a")} <em>{t("rt_details_title_em")}</em></h2>
          <div className="gold-rule" />
        </div>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center mt-12 reveal">
          <div>
            <div className="text-[0.62rem] uppercase text-jade mb-3" style={{ letterSpacing: "0.25em" }}>{t("rt_lbl_departure")}</div>
            <div className="font-serif text-2xl font-light leading-snug">{route.airports.departure}</div>
          </div>
          <div className="hidden md:block text-center">
            <div className="w-px h-16 mx-auto mb-2" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--jade)), transparent)" }} />
            <span className="text-jade text-xl">›</span>
            <div className="w-px h-16 mx-auto mt-2" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--jade)), transparent)" }} />
          </div>
          <div>
            <div className="text-[0.62rem] uppercase text-jade mb-3" style={{ letterSpacing: "0.25em" }}>{t("rt_lbl_arrival")}</div>
            <div className="font-serif text-2xl font-light leading-snug">{route.airports.arrival}</div>
          </div>
        </div>
      </section>

      {/* AIRCRAFT */}
      <section id="aircraft" className="py-24" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="eyebrow mb-4">{t("rt_fleet_eyebrow")}</p>
          <h2 className="section-title">{t("rt_fleet_title_a")} <em>{t("rt_fleet_title_em")}</em></h2>
          <div className="gold-rule" />
        </div>
        <div className="grid md:grid-cols-3 mt-12 border border-jade-soft reveal">
          {route.aircraft.map((a) => (
            <div key={a.name} className="bg-bg-2 hover:bg-bg-3 transition-colors p-8 border-r border-jade-soft last:border-r-0">
              <div className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.2em" }}>{a.category}</div>
              <div className="font-serif text-2xl font-light text-foreground mb-2">{a.name}</div>
              <div className="flex gap-6 my-4">
                <div>
                  <div className="text-[0.85rem] font-medium">{a.pax}</div>
                  <div className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.1em" }}>{t("rt_lbl_pax")}</div>
                </div>
                <div>
                  <div className="text-[0.85rem] font-medium">{a.range}</div>
                  <div className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.1em" }}>{t("rt_lbl_range")}</div>
                </div>
              </div>
              <p className="text-[0.82rem] leading-relaxed text-fg-3 border-t border-jade-soft pt-4 mt-4">{a.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-bg-2 py-24" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="eyebrow mb-4">{t("rt_why_eyebrow")}</p>
          <h2 className="section-title">{t("rt_why_title_a")} <em>{t("rt_why_title_em")}</em></h2>
          <div className="gold-rule" />
        </div>
        <div className="grid md:grid-cols-2 mt-12 border border-jade-soft">
          {route.why.map((w) => (
            <div key={w.num} className="bg-background p-10 border-r border-b border-jade-soft last:border-r-0 reveal">
              <div className="font-serif text-3xl font-light mb-3" style={{ color: "hsl(var(--jade) / 0.15)" }}>{w.num}</div>
              <div className="text-[0.78rem] uppercase font-medium text-foreground mb-2.5" style={{ letterSpacing: "0.12em" }}>{w.title}</div>
              <p className="text-[0.875rem] leading-relaxed text-fg-3">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LONG-FORM SECTIONS (SEO copy) */}
      {route.sections && route.sections.length > 0 && (
        <section
          className="py-24"
          style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
        >
          <div className="max-w-3xl mx-auto space-y-14">
            {route.sections.map((s) => (
              <article key={s.heading} className="reveal">
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-5 leading-tight">
                  {s.heading}
                </h2>
                <div className="gold-rule mb-6" />
                {s.body.split("\n\n").map((p, i) => (
                  <p key={i} className="text-[0.95rem] text-fg-2 leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {route.faq && route.faq.length > 0 && (
        <section
          className="bg-bg-2 py-24 border-y border-jade-soft"
          style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="reveal mb-10">
              <p className="eyebrow mb-4">FAQ</p>
              <h2 className="section-title">
                {lang === "en" ? <>Frequently <em>asked questions</em></> : <>Preguntas <em>frecuentes</em></>}
              </h2>
              <div className="gold-rule" />
            </div>
            <dl className="divide-y divide-jade-soft border-y border-jade-soft">
              {route.faq.map((f) => (
                <div key={f.q} className="py-6 reveal">
                  <dt className="font-serif text-lg md:text-xl font-light text-foreground mb-2">
                    {f.q}
                  </dt>
                  <dd className="text-[0.92rem] text-fg-2 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* RELATED — internal links to other routes & related briefing */}
      <section className="py-20" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <p className="eyebrow mb-4">{lang === "en" ? "Explore" : "Explora"}</p>
          <h2 className="section-title">{lang === "en" ? <>Other <em>routes</em></> : <>Otras <em>rutas</em></>}</h2>
          <div className="gold-rule" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-jade-soft mt-12 border border-jade-soft reveal">
          {Object.values(ROUTE_DATA)
            .filter((r) => r.slug !== slug)
            .map((raw) => localizeRoute(raw, lang))
            .map((r) => (
              <Link
                key={r.slug}
                to={lp(`/rutas/${r.slug}`)}
                className="bg-bg-2 hover:bg-bg-3 transition-colors p-6 no-underline group"
              >
                <div className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.2em" }}>{r.tagline}</div>
                <div className="font-serif text-xl font-light text-foreground group-hover:text-jade-light transition-colors">
                  {r.heroFromCity} → {r.heroToCity}
                </div>
                <div className="text-[0.78rem] text-fg-3 mt-2">{r.stats.time} · {r.stats.price}</div>
              </Link>
            ))}
          <Link
            to={lp("/briefing/tramites-aduanales-jet-privado-mexico")}
            className="bg-bg-2 hover:bg-bg-3 transition-colors p-6 no-underline group"
          >
            <div className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.2em" }}>Briefing</div>
            <div className="font-serif text-xl font-light text-foreground group-hover:text-jade-light transition-colors">
              {lang === "en" ? "Private Jet Customs in Mexico" : "Trámites Aduanales en México"}
            </div>
            <div className="text-[0.78rem] text-fg-3 mt-2">{lang === "en" ? "Guide for international private jet flights" : "Guía para vuelos internacionales en jet privado"}</div>
          </Link>
          <Link
            to={lp("/flota")}
            className="bg-bg-2 hover:bg-bg-3 transition-colors p-6 no-underline group"
          >
            <div className="text-[0.62rem] uppercase text-jade mb-2" style={{ letterSpacing: "0.2em" }}>{lang === "en" ? "Fleet" : "Flota"}</div>
            <div className="font-serif text-xl font-light text-foreground group-hover:text-jade-light transition-colors">
              {lang === "en" ? "View full fleet" : "Ver flota completa"}
            </div>
            <div className="text-[0.78rem] text-fg-3 mt-2">{lang === "en" ? "Turboprops, light, midsize and heavy jets" : "Turbohélices, jets ligeros, medianos y pesados"}</div>
          </Link>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-bg-3 border-y border-jade-soft py-20 text-center" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <div className="reveal">
          <h2 className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            {t("rt_cta_a")}<br /><em className="italic text-jade-light">{route.ctaCity}?</em>
          </h2>
          <p className="text-[0.9rem] text-fg-3 mb-10">{t("rt_cta_sub")}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={waLink(route.waMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary">{t("common_whatsapp_now")}</a>
            <a href={lp("/#contact")} className="btn-secondary">{t("common_send_form")}</a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default RoutePage;

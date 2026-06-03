import { Link } from "react-router-dom";
import { ArrowRight, Clock, Plane } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useSEO } from "@/hooks/useSEO";
import { useLang } from "@/i18n/LanguageContext";
import { BRIEFING_POSTS, localized } from "@/data/briefingPosts";
import { ROUTES, SITE_URL, SITE_NAME } from "@/lib/site";

const Briefing = () => {
  const { lang } = useLang();

  const heading =
    lang === "en"
      ? "The Numen Briefing"
      : "The Numen Briefing";
  const tagline =
    lang === "en"
      ? "Field notes on private aviation in Mexico — operations, infrastructure, and the rules that shape every flight."
      : "Apuntes de campo sobre aviación privada en México — operación, infraestructura y las reglas que definen cada vuelo.";

  const articlesLbl = lang === "en" ? "Articles" : "Artículos";
  const routesLbl = lang === "en" ? "Routes" : "Rutas";
  const routesIntro =
    lang === "en"
      ? "Popular routes operated by Numen Aviation."
      : "Rutas más solicitadas operadas por Numen Aviation.";
  const readMore = lang === "en" ? "Read article" : "Leer artículo";
  const minRead = lang === "en" ? "min read" : "min de lectura";

  const sorted = [...BRIEFING_POSTS].sort((a, b) => a.order - b.order);

  const seo = useSEO({
    title:
      lang === "en"
        ? "The Numen Briefing — Private Aviation Insights | Numen Aviation"
        : "The Numen Briefing — Aviación Privada | Numen Aviation",
    description:
      lang === "en"
        ? "Field notes on private aviation in Mexico: customs, airports, regulation, fleet and route guides from Numen Aviation."
        : "Apuntes sobre aviación privada en México: aduanas, aeropuertos, regulación, flota y rutas, por Numen Aviation.",
    path: "/briefing",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "The Numen Briefing",
      url: `${SITE_URL}/briefing`,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      blogPost: sorted.map((p) => ({
        "@type": "BlogPosting",
        headline: localized(p.title, lang),
        description: localized(p.description, lang),
        url: `${SITE_URL}/briefing/${p.slug}`,
        datePublished: p.date,
        author: { "@type": "Organization", name: SITE_NAME },
      })),
    },
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {seo}
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-20 border-b border-jade-soft"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="text-[0.7rem] uppercase text-jade mb-6"
            style={{ letterSpacing: "0.3em" }}
          >
            {lang === "en" ? "Editorial" : "Editorial"}
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            {heading}
          </h1>
          <p className="text-base md:text-lg text-fg-2 max-w-2xl leading-relaxed">
            {tagline}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section
        className="py-20"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-jade-soft">
            <h2
              className="text-[0.78rem] uppercase text-fg-3"
              style={{ letterSpacing: "0.25em" }}
            >
              {articlesLbl}
            </h2>
            <span className="text-[0.7rem] text-fg-3 tabular-nums">
              {(sorted.length + 2).toString().padStart(2, "0")}
            </span>
          </div>

          {(() => {
            const externals = [
              {
                href: "/guia-fbo-toluca",
                date: "2026-05-28",
                readMinutes: 8,
                category: lang === "en" ? "Operations" : "Operación",
                title: lang === "en"
                  ? "FBO Guide at Toluca (MMTO): How a Private Jet Departure Works"
                  : "Guía del FBO en Toluca (MMTO): Cómo Funciona la Salida en Jet Privado",
                excerpt: lang === "en"
                  ? "What an FBO is, the full boarding process from MMTO, timings, documentation, and why Toluca beats AICM."
                  : "Qué es un FBO, el proceso completo de abordaje desde MMTO, tiempos, documentación y por qué Toluca supera al AICM.",
              },
              {
                href: "/cuanto-cuesta-jet-privado-mexico-2026",
                date: "2026-06-02",
                readMinutes: 10,
                category: lang === "en" ? "Pricing" : "Precios",
                title: lang === "en"
                  ? "How Much Does a Private Jet Cost in Mexico in 2026? Prices by Route"
                  : "¿Cuánto Cuesta Volar en Jet Privado en México en 2026? Precios por Ruta",
                excerpt: lang === "en"
                  ? "Estimated one-way prices from Toluca (MMTO) to Cancún, Los Cabos, Monterrey, Mérida, Miami, Houston and Las Vegas on Learjet 35 and Hawker 800A."
                  : "Precios estimados one-way desde Toluca (MMTO) a Cancún, Los Cabos, Monterrey, Mérida, Miami, Houston y Las Vegas en Learjet 35 y Hawker 800A.",
              },
            ];

            const allPosts = [
              ...externals.map((g) => ({ type: "external" as const, ...g })),
              ...sorted.map((post) => ({
                type: "internal" as const,
                slug: post.slug,
                date: post.date,
                readMinutes: post.readMinutes,
                category: localized(post.category, lang),
                title: localized(post.title, lang),
                excerpt: localized(post.excerpt, lang),
              })),
            ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            const ItemBody = ({ category, title, excerpt, readMinutes, date }: { category: string; title: string; excerpt: string; readMinutes: number; date: string; }) => (
              <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <div className="text-[0.65rem] uppercase text-jade mb-3" style={{ letterSpacing: "0.25em" }}>
                    {category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-foreground group-hover:text-jade-light transition-colors mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-fg-2 leading-relaxed max-w-2xl">{excerpt}</p>
                  <div className="flex items-center gap-4 mt-4 text-[0.7rem] text-fg-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {readMinutes} {minRead}
                    </span>
                    <span className="tabular-nums">{date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[0.7rem] uppercase text-jade md:self-center" style={{ letterSpacing: "0.2em" }}>
                  {readMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );

            return (
              <ul className="list-none p-0 m-0 divide-y divide-jade-soft">
                {allPosts.map((item) =>
                  item.type === "external" ? (
                    <li key={item.href}>
                      <a href={item.href} className="group block py-8 no-underline hover:bg-bg-3/30 transition-colors -mx-4 px-4">
                        <ItemBody
                          category={item.category}
                          title={item.title}
                          excerpt={item.excerpt}
                          readMinutes={item.readMinutes}
                          date={item.date}
                        />
                      </a>
                    </li>
                  ) : (
                    <li key={item.slug}>
                      <Link to={`/briefing/${item.slug}`} className="group block py-8 no-underline hover:bg-bg-3/30 transition-colors -mx-4 px-4">
                        <ItemBody
                          category={item.category}
                          title={item.title}
                          excerpt={item.excerpt}
                          readMinutes={item.readMinutes}
                          date={item.date}
                        />
                      </Link>
                    </li>
                  )
                )}
              </ul>
            );
          })()}
        </div>
      </section>

      {/* Routes */}
      <section
        className="py-20 border-t border-jade-soft bg-bg-3/30"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-3">
            <h2
              className="text-[0.78rem] uppercase text-fg-3"
              style={{ letterSpacing: "0.25em" }}
            >
              {routesLbl}
            </h2>
            <span className="text-[0.7rem] text-fg-3 tabular-nums">
              {ROUTES.length.toString().padStart(2, "0")}
            </span>
          </div>
          <p className="text-sm text-fg-2 max-w-xl mb-10">{routesIntro}</p>
          <ul className="grid sm:grid-cols-2 gap-px bg-jade-soft list-none p-0 m-0">
            {ROUTES.map((r) => (
              <li key={r.slug} className="bg-background">
                <Link
                  to={`/rutas/${r.slug}`}
                  className="group flex items-center justify-between gap-4 px-6 py-6 no-underline hover:bg-bg-3 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Plane className="w-4 h-4 text-jade" />
                    <span
                      className="text-[0.85rem] uppercase text-foreground"
                      style={{ letterSpacing: "0.18em" }}
                    >
                      {r.label}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-fg-3 transition-transform group-hover:translate-x-1 group-hover:text-jade" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Briefing;

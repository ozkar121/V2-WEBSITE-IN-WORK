import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { CornerBrackets } from "@/components/CornerBrackets";
import { useSEO } from "@/hooks/useSEO";
import { ROUTE_DATA, localizeRoute } from "@/data/routes";
import { SITE_URL, SITE_NAME, waLink } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";
import { useLang } from "@/i18n/LanguageContext";

const Rutas = () => {
  const { lang, lp } = useLang();
  const routes = Object.values(ROUTE_DATA).map((r) => localizeRoute(r, lang));

  const seo = useSEO({
    title:
      lang === "en"
        ? "Private Jet Routes from Toluca (MMTO) | Numen Aviation"
        : "Rutas de Jet Privado desde Toluca (MMTO) | Numen Aviation",
    description:
      lang === "en"
        ? "Popular private jet routes operated by Numen Aviation from Toluca (MMTO): Cancún, Los Cabos, Miami, Monterrey and beyond. Direct, on-demand, 24/7."
        : "Rutas de jet privado operadas por Numen Aviation desde Toluca (MMTO): Cancún, Los Cabos, Miami, Monterrey y más. Directos, bajo demanda, 24/7.",
    path: "/rutas",
    type: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: lang === "en" ? "Private Jet Routes" : "Rutas de Jet Privado",
        url: `${SITE_URL}/rutas`,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: routes.length,
          itemListElement: routes.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/rutas/${r.slug}`,
            name: `${r.heroFromCity} → ${r.heroToCity}`,
          })),
        },
      },
      buildBreadcrumb({ path: "/rutas" })!,
    ],
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
            {lang === "en" ? "Routes" : "Rutas"}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-foreground mb-6 leading-[1.05]">
            {lang === "en" ? (
              <>Private jet routes from <em className="text-jade-light">Toluca.</em></>
            ) : (
              <>Rutas de jet privado desde <em className="text-jade-light">Toluca.</em></>
            )}
          </h1>
          <p className="text-base md:text-lg text-fg-2 max-w-2xl leading-relaxed">
            {lang === "en"
              ? "Direct charters from our MMTO base — no commercial terminals, no connections. Choose a route or ask us about any city in Mexico, the U.S., the Caribbean or Central America."
              : "Charters directos desde nuestra base en MMTO — sin terminales comerciales, sin conexiones. Elige una ruta o pregúntanos por cualquier ciudad en México, EUA, Caribe o Centroamérica."}
          </p>
        </div>
      </section>

      {/* Routes grid */}
      <section
        className="py-20"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative grid sm:grid-cols-2 gap-px bg-jade-soft border border-jade-soft">
            <CornerBrackets />
            {routes.map((r) => (
              <Link
                key={r.slug}
                to={lp(`/rutas/${r.slug}`)}
                className="group bg-bg-2 hover:bg-bg-3 transition-colors p-10 no-underline flex flex-col gap-5"
              >
                <div
                  className="text-[0.62rem] uppercase text-jade"
                  style={{ letterSpacing: "0.25em" }}
                >
                  {r.tagline}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground group-hover:text-jade-light transition-colors leading-tight">
                  {r.heroFromCity} <span className="text-jade">→</span> {r.heroToCity}
                </h2>
                <div className="w-10 h-px bg-jade-soft" />
                <dl className="grid grid-cols-3 gap-4 text-[0.78rem]">
                  <div>
                    <dt className="text-[0.58rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>
                      {lang === "en" ? "Time" : "Tiempo"}
                    </dt>
                    <dd className="text-foreground font-light mt-1">{r.stats.time}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.58rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>
                      {lang === "en" ? "From" : "Desde"}
                    </dt>
                    <dd className="text-foreground font-light mt-1">{r.stats.price}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.58rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>
                      {lang === "en" ? "Aircraft" : "Aeronave"}
                    </dt>
                    <dd className="text-foreground font-light mt-1">{r.stats.aircraft}</dd>
                  </div>
                </dl>
                <div className="flex items-center gap-2 text-[0.7rem] uppercase text-jade mt-auto pt-2" style={{ letterSpacing: "0.2em" }}>
                  {lang === "en" ? "View route" : "Ver ruta"}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 border-t border-jade-soft"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-5">
            {lang === "en" ? (
              <>Don't see your <em className="text-jade-light">destination?</em></>
            ) : (
              <>¿No ves tu <em className="text-jade-light">destino?</em></>
            )}
          </h2>
          <p className="text-fg-2 mb-8">
            {lang === "en"
              ? "We operate on demand to any airport. Tell us your route and we'll quote in under 30 minutes."
              : "Operamos bajo demanda a cualquier aeropuerto. Cuéntanos tu ruta y cotizamos en menos de 2 horas."}
          </p>
          <a
            href={waLink(
              lang === "en"
                ? "Hi, I'd like to quote a custom route."
                : "Hola, me gustaría cotizar una ruta personalizada."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase text-background bg-jade px-7 py-4 hover:bg-jade-light transition-all no-underline shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)]"
            style={{ letterSpacing: "0.2em" }}
          >
            {lang === "en" ? "Request a Quote" : "Solicitar Cotización"}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Rutas;

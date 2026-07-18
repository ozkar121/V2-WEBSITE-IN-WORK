import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Gauge, Navigation, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { DotPattern } from "@/components/DotPattern";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { CornerBrackets } from "@/components/CornerBrackets";
import { Aircraft, AircraftCategory, CATEGORY_ORDER, CATEGORY_LABELS } from "@/data/aircraft";
import { supabase } from "@/integrations/supabase/client";
import { sbImage, sbImageSrcSet } from "@/lib/img";
import { useLang } from "@/i18n/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { waLink, SITE_URL, SITE_NAME } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";
import type { TranslationKey } from "@/i18n/translations";
import aircraftSnapshot from "@/data/aircraftSnapshot.json";
import lj35b from "@/assets/photos/fleet-lj35-2.webp";
import lj35c from "@/assets/photos/fleet-lj35-3.webp";
import lj31a from "@/assets/photos/fleet-lj31-1.webp";
import lj31b from "@/assets/photos/fleet-lj31-2.webp";
import lj45a from "@/assets/photos/fleet-lj45-1.webp";
import lj75a from "@/assets/photos/fleet-lj75-1.webp";
import lj75b from "@/assets/photos/fleet-lj75-2.webp";
import hawkerB from "@/assets/photos/fleet-hawker-2.webp";
import hawkerC from "@/assets/photos/fleet-hawker-3.webp";
import legacyA from "@/assets/photos/fleet-legacy-1.webp";
import legacyB from "@/assets/photos/fleet-legacy-2.webp";
import bellA from "@/assets/photos/fleet-bell505-1.webp";
import bellB from "@/assets/photos/fleet-bell505-2.webp";
import bellC from "@/assets/photos/fleet-bell505-3.webp";
import agustaA from "@/assets/photos/fleet-agusta-1.webp";
import agustaB from "@/assets/photos/fleet-agusta-2.webp";

const SNAPSHOT_AIRCRAFT = aircraftSnapshot.aircraft as Aircraft[];
const SNAPSHOT_PHOTOS = aircraftSnapshot.photos as Record<string, string>;

// Fotos reales adicionales por nombre de aeronave (se suman a la foto
// principal de Supabase como slideshow). Nombres tal como están en la tabla.
const EXTRA_PHOTOS: Record<string, string[]> = {
  "Learjet 35": [lj35b, lj35c],
  "Learjet 31": [lj31a, lj31b],
  "Learjet 45": [lj45a],
  "Learjet 75": [lj75a, lj75b],
  "Hawker 800": [hawkerB, hawkerC],
  // Challenger 601 y Gulfstream G450: fotos en pausa — Lobo preparará mejores
  "Legacy 600": [legacyA, legacyB],
  "Bell 505": [bellA, bellB, bellC],
  "Agusta 109 E": [agustaA, agustaB],
};

interface Slide {
  src: string;
  srcSet?: string;
}

const FleetPhotoCarousel = ({ slides, alt }: { slides: Slide[]; alt: string }) => {
  const [idx, setIdx] = useState(0);
  const go = (d: number) => setIdx((p) => (p + d + slides.length) % slides.length);
  return (
    <>
      <img
        src={slides[idx].src}
        srcSet={slides[idx].srcSet}
        sizes={slides[idx].srcSet ? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" : undefined}
        alt={alt}
        width={800}
        height={600}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/70 backdrop-blur-sm border border-jade-soft text-foreground hover:text-jade hover:border-jade transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/70 backdrop-blur-sm border border-jade-soft text-foreground hover:text-jade hover:border-jade transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Foto ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? "bg-jade" : "bg-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

const CAT_KEY: Record<AircraftCategory, TranslationKey> = {
  turbo: "cat_turbo",
  light: "cat_light",
  midsize: "cat_midsize",
  heavy: "cat_heavy",
  helicopter: "cat_helicopter",
};

const CAT_DESC: Record<AircraftCategory, { es: string; en: string }> = {
  helicopter: {
    es: "Movilidad punto a punto para distancias cortas, helipuertos urbanos y operaciones donde no hay pista.",
    en: "Point-to-point mobility for short distances, urban helipads, and operations where no runway exists.",
  },
  turbo: {
    es: "Eficiencia operativa y acceso a pistas cortas. Ideal para regionales en México y Centroamérica.",
    en: "Operational efficiency and access to short runways. Ideal for regional trips in Mexico and Central America.",
  },
  light: {
    es: "Vuelos directos rápidos para grupos pequeños. La mejor relación costo-beneficio en aviación privada.",
    en: "Fast direct flights for small groups. The best cost-benefit ratio in private aviation.",
  },
  midsize: {
    es: "Cabina de pie, baño completo y autonomía continental. El estándar de oro para México–EUA.",
    en: "Stand-up cabin, full lavatory, and continental range. The gold standard for Mexico–USA.",
  },
  heavy: {
    es: "Alcance intercontinental, cabinas amplias y máxima carga. Para vuelos largos sin escalas.",
    en: "Intercontinental range, spacious cabins, and maximum payload. For long non-stop flights.",
  },
};

const Fleet = () => {
  const { t, lang, lp } = useLang();
  const [aircraft, setAircraft] = useState<Aircraft[]>(SNAPSHOT_AIRCRAFT);
  const [photos, setPhotos] = useState<Record<string, string>>(SNAPSHOT_PHOTOS);
  const [loading, setLoading] = useState(SNAPSHOT_AIRCRAFT.length === 0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [acRes, phRes] = await Promise.all([
        supabase
          .from("aircraft")
          .select("id, name, category, passengers, range_km, speed_kmh, range_nm")
          .eq("is_active", true)
          .order("sort_order", { ascending: true }),
        supabase.from("aircraft_photos").select("aircraft_id, image_url"),
      ]);
      if (cancelled) return;
      if (acRes.data) setAircraft(acRes.data as Aircraft[]);
      if (phRes.data) {
        const map: Record<string, string> = {};
        phRes.data.forEach((row) => {
          map[row.aircraft_id] = row.image_url;
        });
        setPhotos(map);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const grouped = useMemo(() => {
    const m = new Map<AircraftCategory, Aircraft[]>();
    CATEGORY_ORDER.forEach((c) => m.set(c, []));
    aircraft.forEach((a) => m.get(a.category)?.push(a));
    return m;
  }, [aircraft]);

  const totalLbl = lang === "en" ? "aircraft" : "aeronaves";
  const categoriesLbl = lang === "en" ? "categories" : "categorías";

  const seo = useSEO({
    title:
      lang === "en"
        ? "Private Jet Fleet | Numen Aviation"
        : "Flota de Jets Privados | Numen Aviation",
    description:
      lang === "en"
        ? "Explore the Numen Aviation fleet: helicopters, turboprops, light, midsize, and heavy jets for charter from Toluca (MMTO) across Mexico, the U.S., the Caribbean, and Central America."
        : "Explora la flota Numen Aviation: helicópteros, turbohélices, jets ligeros, medianos y pesados para charter desde Toluca (MMTO) en México, EUA, Caribe y Centroamérica.",
    path: "/flota",
    type: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: lang === "en" ? "Numen Aviation Fleet" : "Flota de Numen Aviation",
        url: `${SITE_URL}/flota`,
        numberOfItems: aircraft.length,
        itemListElement: aircraft.map((a, i) => {
          const img = photos[a.id];
          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Thing",
              name: a.name,
              ...(img ? { image: sbImage(img, 1200) } : {}),
              description:
                lang === "en"
                  ? `${CATEGORY_LABELS[a.category]} available for private charter from Toluca (MMTO).`
                  : `${CATEGORY_LABELS[a.category]} disponible para charter privado desde Toluca (MMTO).`,
            },
          };
        }),
      },
      buildBreadcrumb({ path: "/flota" })!,
    ],

  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {seo}
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-24 border-b border-jade-soft relative overflow-hidden"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <DotPattern origin="top" seed={31} opacity={0.7} className="absolute top-0 right-0 h-full w-1/2 md:w-1/3" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--jade)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--jade)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div
            className="text-[0.7rem] uppercase text-jade mb-6"
            style={{ letterSpacing: "0.3em" }}
          >
            {lang === "en" ? "The Fleet" : "La Flota"}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-foreground mb-4 leading-[1.1]">
            {lang === "en" ? "Private Jet Fleet" : "Flota de Jets Privados"}
          </h1>
          <p className="font-serif text-5xl md:text-7xl font-light tracking-tight text-foreground mb-8 leading-[1.05]">
            {lang === "en" ? (
              <>
                Aircraft for every<br />
                <em className="text-jade-light">mission.</em>
              </>
            ) : (
              <>
                Aeronaves para cada<br />
                <em className="text-jade-light">misión.</em>
              </>
            )}
          </p>
          <p className="text-base md:text-lg text-fg-2 max-w-2xl leading-relaxed mb-10">
            {lang === "en"
              ? "From single-engine helicopters to intercontinental heavy jets — the complete Numen Aviation fleet, curated and operated to the highest safety standards."
              : "Desde helicópteros monomotor hasta jets pesados intercontinentales — la flota completa de Numen Aviation, seleccionada y operada bajo los más altos estándares de seguridad."}
          </p>
          <div className="flex flex-wrap items-center gap-8 text-[0.7rem] uppercase text-fg-3 pt-8 border-t border-jade-soft" style={{ letterSpacing: "0.2em" }}>
            <div>
              <div className="font-serif text-3xl font-light text-foreground tabular-nums">{aircraft.length.toString().padStart(2, "0")}</div>
              <div className="mt-1">{totalLbl}</div>
            </div>
            <div className="w-px h-10 bg-jade-soft" />
            <div>
              <div className="font-serif text-3xl font-light text-foreground tabular-nums">
                {Array.from(grouped.values()).filter((v) => v.length > 0).length.toString().padStart(2, "0")}
              </div>
              <div className="mt-1">{categoriesLbl}</div>
            </div>
            <div className="w-px h-10 bg-jade-soft" />
            <div>
              <div className="font-serif text-3xl font-light text-foreground">24/7</div>
              <div className="mt-1">{lang === "en" ? "operations" : "operación"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories nav */}
      <section
        className="sticky top-[72px] z-30 bg-background/85 backdrop-blur-md border-b border-jade-soft"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-6xl mx-auto flex gap-2 md:gap-6 overflow-x-auto py-4 scrollbar-none">
          {CATEGORY_ORDER.filter((c) => (grouped.get(c)?.length ?? 0) > 0).map((cat) => (
            <a
              key={cat}
              href={`#cat-${cat}`}
              className="whitespace-nowrap text-[0.68rem] uppercase text-fg-3 hover:text-jade-light transition-colors no-underline"
              style={{ letterSpacing: "0.22em" }}
            >
              {t(CAT_KEY[cat])}
              <span className="ml-2 text-fg-3/60 tabular-nums">{grouped.get(cat)?.length}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      {loading && (
        <div className="py-32 text-center text-[0.75rem] uppercase text-fg-3" style={{ letterSpacing: "0.25em" }}>
          {lang === "en" ? "Loading fleet…" : "Cargando flota…"}
        </div>
      )}

      {!loading &&
        CATEGORY_ORDER.map((cat) => {
          const list = grouped.get(cat) ?? [];
          if (list.length === 0) return null;
          return (
            <section
              key={cat}
              id={`cat-${cat}`}
              className="py-24 border-b border-jade-soft scroll-mt-32"
              style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 mb-12 items-end">
                  <div>
                    <div
                      className="text-[0.65rem] uppercase text-jade mb-4"
                      style={{ letterSpacing: "0.3em" }}
                    >
                      {lang === "en" ? "Category" : "Categoría"} · {list.length.toString().padStart(2, "0")}
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
                      {t(CAT_KEY[cat])}
                    </h2>
                    <div className="w-12 h-px bg-jade mt-6" />
                  </div>
                  <p className="text-sm md:text-base text-fg-2 leading-relaxed max-w-xl md:justify-self-end">
                    {CAT_DESC[cat][lang]}
                  </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-jade-soft">
                  <CornerBrackets />
                  {list.map((a) => {
                    const img = photos[a.id];
                    const slides: Slide[] = [
                      ...(img ? [{ src: sbImage(img, 800), srcSet: sbImageSrcSet(img, [400, 800, 1200]) }] : []),
                      ...(EXTRA_PHOTOS[a.name] ?? []).map((src) => ({ src })),
                    ];
                    return (
                      <article
                        key={a.id}
                        className="group hover:bg-bg-2/50 transition-colors flex flex-col border-r border-b border-jade-soft"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-bg-3">
                          {slides.length > 0 ? (
                            <FleetPhotoCarousel slides={slides} alt={a.name} />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <div
                                className="text-[0.62rem] uppercase text-fg-3"
                                style={{ letterSpacing: "0.25em" }}
                              >
                                {t("fleet_no_photo")}
                              </div>
                            </div>
                          )}
                          <div className="absolute top-3 left-3 px-2.5 py-1 bg-background/80 backdrop-blur-sm border border-jade-soft text-[0.55rem] uppercase text-jade" style={{ letterSpacing: "0.25em" }}>
                            {t(CAT_KEY[a.category])}
                          </div>
                        </div>
                        <div className="p-7 flex flex-col gap-4 flex-1">
                          <h3 className="font-serif text-2xl font-light text-foreground">
                            {a.name}
                          </h3>
                          <dl className="grid grid-cols-3 gap-3 border-t border-jade-soft pt-5">
                            <div>
                              <dt className="flex items-center gap-1.5 text-[0.58rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>
                                <Users className="w-3 h-3" />
                                {t("fleet_pax")}
                              </dt>
                              <dd className="text-[0.9rem] text-foreground mt-1.5 font-light">{a.passengers}</dd>
                            </div>
                            <div>
                              <dt className="flex items-center gap-1.5 text-[0.58rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>
                                <Gauge className="w-3 h-3" />
                                {t("fleet_speed")}
                              </dt>
                              <dd className="text-[0.9rem] text-foreground mt-1.5 font-light">{a.speed_kmh}</dd>
                            </div>
                            <div>
                              <dt className="flex items-center gap-1.5 text-[0.58rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>
                                <Navigation className="w-3 h-3" />
                                {t("fleet_range")}
                              </dt>
                              <dd className="text-[0.9rem] text-foreground mt-1.5 font-light">{a.range_km}</dd>
                            </div>
                          </dl>
                          {a.range_nm && (
                            <p className="text-[0.7rem] text-fg-3 mt-auto pt-2">{a.range_nm}</p>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

      {/* CTA */}
      <section
        className="py-28"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="text-[0.7rem] uppercase text-jade mb-6"
            style={{ letterSpacing: "0.3em" }}
          >
            {lang === "en" ? "Ready to fly" : "Listo para volar"}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            {lang === "en" ? (
              <>The right aircraft for <em className="text-jade-light">your mission.</em></>
            ) : (
              <>La aeronave correcta para <em className="text-jade-light">tu misión.</em></>
            )}
          </h2>
          <p className="text-base text-fg-2 max-w-xl mx-auto mb-10 leading-relaxed">
            {lang === "en"
              ? "Tell us your route, dates, and passengers. We'll match you with the best aircraft and quote in under 30 minutes."
              : "Cuéntanos tu ruta, fechas y pasajeros. Te recomendamos la mejor aeronave y cotizamos en 30 minutos."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={waLink(
                lang === "en"
                  ? "Hi, I'd like a charter quote."
                  : "Hola, me gustaría una cotización de charter."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase text-background bg-jade px-7 py-4 hover:bg-jade-light transition-all no-underline shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)]"
              style={{ letterSpacing: "0.2em" }}
            >
              {lang === "en" ? "Request a Quote" : "Solicitar Cotización"}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to={lp("/empty-legs")}
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase text-foreground border border-jade-soft px-7 py-4 hover:border-jade hover:text-jade-light transition-all no-underline"
              style={{ letterSpacing: "0.2em" }}
            >
              {lang === "en" ? "View Empty Legs" : "Ver Empty Legs"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Fleet;

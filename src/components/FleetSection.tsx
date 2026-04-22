import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Aircraft, AircraftCategory, CATEGORY_ORDER } from "@/data/aircraft";
import { supabase } from "@/integrations/supabase/client";
import { CornerBrackets } from "@/components/CornerBrackets";
import { useLang } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const CAT_KEY: Record<AircraftCategory, TranslationKey> = {
  turbo: "cat_turbo",
  light: "cat_light",
  midsize: "cat_midsize",
  heavy: "cat_heavy",
  helicopter: "cat_helicopter",
};

export const FleetSection = () => {
  const { t } = useLang();
  const [active, setActive] = useState<AircraftCategory>("turbo");
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [photos, setPhotos] = useState<Record<string, string>>({});

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
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = useMemo(
    () => aircraft.filter((a) => a.category === active),
    [aircraft, active]
  );

  return (
    <section
      id="fleet"
      className="py-28"
      style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
    >
      <div className="reveal flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="eyebrow mb-4">{t("fleet_eyebrow")}</p>
          <h2 className="section-title">
            {t("fleet_title_a")}<br />
            <em>{t("fleet_title_em")}</em>
          </h2>
          <div className="gold-rule" />
        </div>
        <Link
          to="/admin/aeronaves"
          className="text-[0.62rem] uppercase text-fg-3 hover:text-jade no-underline"
          style={{ letterSpacing: "0.25em" }}
        >
          {t("fleet_manage")}
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-px mt-12 border border-jade-soft reveal">
        {CATEGORY_ORDER.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-1 min-w-[140px] px-6 py-4 text-[0.7rem] uppercase transition-colors border-r border-jade-soft last:border-r-0 ${
                isActive ? "bg-jade text-background" : "bg-bg-2 text-fg-3 hover:bg-bg-3 hover:text-foreground"
              }`}
              style={{ letterSpacing: "0.2em" }}
            >
              {t(CAT_KEY[cat])}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        key={active}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-px border border-jade-soft animate-fade-in"
      >
        <CornerBrackets />
        {visible.length === 0 && (
          <div className="col-span-full p-12 text-center text-[0.75rem] uppercase text-fg-3 bg-bg-2" style={{ letterSpacing: "0.2em" }}>
            {t("fleet_empty")}
          </div>
        )}
        {visible.map((a) => {
          const img = photos[a.id];
          return (
            <article
              key={a.id}
              className="bg-bg-2 hover:bg-bg-3 transition-colors flex flex-col border-r border-b border-jade-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-3 border-b border-jade-soft">
                {img ? (
                  <img
                    src={img}
                    alt={a.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.25em" }}>
                      {t("fleet_no_photo")}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-7 flex flex-col gap-3">
                <div className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.25em" }}>
                  {t(CAT_KEY[a.category])}
                </div>
                <h3 className="font-serif text-2xl font-light text-foreground">{a.name}</h3>
                <dl className="grid grid-cols-3 gap-3 mt-2 border-t border-jade-soft pt-4">
                  <div>
                    <dt className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>{t("fleet_pax")}</dt>
                    <dd className="text-[0.85rem] text-foreground mt-1">{a.passengers}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>{t("fleet_speed")}</dt>
                    <dd className="text-[0.85rem] text-foreground mt-1">{a.speed_kmh}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.15em" }}>{t("fleet_range")}</dt>
                    <dd className="text-[0.85rem] text-foreground mt-1">{a.range_km}</dd>
                  </div>
                </dl>
                {a.range_nm && <p className="text-[0.75rem] text-fg-3 mt-2">{a.range_nm}</p>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

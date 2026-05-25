import { EMAIL, waLink, PHONE_NUMBER, PHONE_TEL } from "@/lib/site";
import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/numen-symbol.svg";

const POPULAR_ROUTES = [
  { to: "/rutas/cdmx-cancun", label: "CDMX → Cancún" },
  { to: "/rutas/cdmx-los-cabos", label: "CDMX → Los Cabos" },
  { to: "/rutas/cdmx-miami", label: "CDMX → Miami" },
  { to: "/rutas/cdmx-monterrey", label: "CDMX → Monterrey" },
];

const EXPLORE_LINKS = [
  { to: "/flota", label: "Flota" },
  { to: "/ambulancia-aerea", label: "Ambulancias Aéreas" },
  { to: "/vuelos-de-carga", label: "Cargo" },
  { to: "/charters-grupales", label: "Charters de Grupos" },
  { to: "/empty-legs", label: "Empty Legs" },
  { to: "/briefing", label: "Briefing" },
  { to: "/briefing/tramites-aduanales-jet-privado-mexico", label: "Trámites Aduanales en México" },
];

export const Footer = () => {
  const { t } = useLang();

  const offices = [
    {
      title: t("footer_offices_mx"),
      lines: [
        t("footer_offices_mx_l1"),
        t("footer_offices_mx_l2"),
        t("footer_offices_mx_l3"),
      ],
    },
    {
      title: t("footer_offices_us"),
      lines: [
        t("footer_offices_us_l1"),
        t("footer_offices_us_l2"),
        t("footer_offices_us_l3"),
        t("footer_offices_us_phone"),
      ],
    },
  ];

  return (
    <footer
      className="bg-bg-2 border-t border-jade-soft pt-12 pb-8"
      style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
    >
      {/* Top: brand on left, two offices on right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 mb-10">
        {/* Brand block */}
        <div className="flex items-center gap-3">
          <img src={logoIcon} alt="Numen Aviation" className="h-4 w-auto" />
          <span
            className="text-[0.75rem] uppercase text-foreground font-light"
            style={{ letterSpacing: "0.25em" }}
          >
            Numen Aviation
          </span>
        </div>

        {/* Offices grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {offices.map((o) => (
            <div key={o.title}>
              <h4
                className="text-[0.62rem] uppercase text-jade mb-3 font-normal"
                style={{ letterSpacing: "0.25em" }}
              >
                {o.title}
              </h4>
              <address className="not-italic flex flex-col gap-1">
                {o.lines.map((line) => (
                  <span key={line} className="text-[0.78rem] text-fg-3 leading-relaxed">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>
      </div>

      {/* Contact strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-t border-jade-soft">
        <div className="flex flex-col gap-1">
          <span
            className="text-[0.6rem] uppercase text-jade"
            style={{ letterSpacing: "0.25em" }}
          >
            {t("footer_contact")}
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="text-[0.78rem] text-fg-3 hover:text-foreground no-underline"
          >
            {EMAIL}
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span
            className="text-[0.6rem] uppercase text-jade"
            style={{ letterSpacing: "0.25em" }}
          >
            {t("nav_call")}
          </span>
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-[0.78rem] text-fg-3 hover:text-foreground no-underline"
          >
            {PHONE_NUMBER}
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span
            className="text-[0.6rem] uppercase text-jade"
            style={{ letterSpacing: "0.25em" }}
          >
            WhatsApp
          </span>
          <a
            href={waLink("Hola, quisiera información.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] text-fg-3 hover:text-foreground no-underline"
          >
            {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="flex justify-between items-center pt-6 border-t border-jade-soft flex-wrap gap-4">
        <p className="text-[0.7rem] text-fg-3">{t("footer_rights")}</p>
        <div className="flex gap-3">
          {["México", "AFAC", "24/7"].map((b) => (
            <span
              key={b}
              className="text-[0.6rem] uppercase text-fg-3 border border-jade-soft px-2 py-1"
              style={{ letterSpacing: "0.2em" }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

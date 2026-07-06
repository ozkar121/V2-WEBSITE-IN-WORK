import { EMAIL, waLink, PHONE_NUMBER, PHONE_TEL } from "@/lib/site";
import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import logoWordmark from "@/assets/brand/numen-logo-primary-white.svg";

// Salida siempre desde Toluca (MMTO) — exclusividad de marca.
// Las URLs (slugs cdmx-*) se conservan para no romper el SEO existente.
const POPULAR_ROUTES = [
  { to: "/rutas/cdmx-cancun", label: "Toluca → Cancún" },
  { to: "/rutas/cdmx-los-cabos", label: "Toluca → Los Cabos" },
  { to: "/rutas/cdmx-monterrey", label: "Toluca → Monterrey" },
  { to: "/rutas/toluca-acapulco", label: "Toluca → Acapulco" },
  { to: "/rutas/toluca-guadalajara", label: "Toluca → Guadalajara" },
  { to: "/rutas/toluca-puerto-vallarta", label: "Toluca → Puerto Vallarta" },
  { to: "/rutas/cdmx-miami", label: "Toluca → Miami" },
  { to: "/rutas/toluca-houston", label: "Toluca → Houston" },
  { to: "/rutas/toluca-punta-cana", label: "Toluca → Punta Cana" },
];

const ALL_ROUTES_LINK = { to: "/rutas", label: "Todas las rutas" };

const SERVICES_LINKS = [
  { to: "/flota", label: "Flota" },
  { to: "/empty-legs", label: "Empty Legs" },
  { to: "/charters-grupales", label: "Charters Grupales" },
  { to: "/vuelos-de-carga", label: "Vuelos de Carga" },
  { to: "/ambulancia-aerea", label: "Ambulancia Aérea" },
];

const RESOURCES_LINKS = [
  { to: "/briefing", label: "Briefing" },
  { to: "/guia-fbo-toluca", label: "Guía del FBO en Toluca" },
  { to: "/cuanto-cuesta-jet-privado-mexico-2026", label: "Cuánto cuesta un jet privado 2026" },
  { to: "/briefing/tramites-aduanales-jet-privado-mexico", label: "Trámites Aduanales en México" },
];

export const Footer = () => {
  const { t, lang, lp } = useLang();

  const servicesLinks = SERVICES_LINKS.map((l) => ({
    ...l,
    to: lp(l.to),
    label: lang === "en"
      ? ({ "/flota": "Fleet", "/empty-legs": "Empty Legs", "/charters-grupales": "Group Charters", "/vuelos-de-carga": "Cargo Flights", "/ambulancia-aerea": "Air Ambulance" }[l.to] ?? l.label)
      : l.label,
  }));
  const popularRoutes = POPULAR_ROUTES.map((r) => ({ ...r, to: lp(r.to) }));
  const allRoutesLink = {
    to: lp(ALL_ROUTES_LINK.to),
    label: lang === "en" ? "All routes" : ALL_ROUTES_LINK.label,
  };
  const resourcesLinks = RESOURCES_LINKS.map((l) => ({
    ...l,
    to: lp(l.to),
    label: lang === "en" && l.to === "/briefing/tramites-aduanales-jet-privado-mexico" ? "Private Jet Customs in Mexico" : l.label,
  }));
  const aboutLink = { to: lp("/nosotros"), label: lang === "en" ? "About Us" : "Nosotros" };

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
        <div className="flex items-center">
          <img src={logoWordmark} alt="Numen Aviation" className="h-12 w-auto" />
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

      {/* Sitemap links */}
      <nav
        aria-label="Sitemap"
        className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-t border-jade-soft"
      >
        <div>
          <h4
            className="text-[0.62rem] uppercase text-jade mb-3 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            {lang === "en" ? "Services" : "Servicios"}
          </h4>
          <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
            {[...servicesLinks, aboutLink].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[0.78rem] text-fg-3 hover:text-foreground no-underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className="text-[0.62rem] uppercase text-jade mb-3 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            {lang === "en" ? "Popular Routes" : "Rutas Populares"}
          </h4>
          <ul className="columns-1 sm:columns-2 gap-x-8 list-none p-0 m-0">
            {popularRoutes.map((r) => (
              <li key={r.to} className="mb-1.5 break-inside-avoid">
                <Link
                  to={r.to}
                  className="text-[0.78rem] text-fg-3 hover:text-foreground no-underline whitespace-nowrap"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={allRoutesLink.to}
            className="inline-block mt-4 text-[0.72rem] uppercase text-jade hover:text-foreground no-underline"
            style={{ letterSpacing: "0.15em" }}
          >
            {allRoutesLink.label} →
          </Link>
        </div>
        <div>
          <h4
            className="text-[0.62rem] uppercase text-jade mb-3 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            {lang === "en" ? "Guides & Briefing" : "Guías y Briefing"}
          </h4>
          <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
            {resourcesLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[0.78rem] text-fg-3 hover:text-foreground no-underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

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
        <p className="text-[0.7rem] text-fg-3">© {new Date().getFullYear()} {t("footer_rights")}</p>
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

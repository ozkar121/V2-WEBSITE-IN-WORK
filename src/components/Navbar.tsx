import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { ROUTES, waLink, PHONE_NUMBER, PHONE_TEL } from "@/lib/site";
import { useLang } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logoIcon from "@/assets/numen-symbol.svg";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();

  const navLinks = [
    { label: t("nav_fleet"), href: "/#fleet" },
    { label: t("nav_empty_legs"), href: "/empty-legs" },
    { label: t("nav_about"), href: "/#why" },
    { label: t("nav_contact"), href: "/#contact" },
  ];

  const services = [
    { label: t("nav_cargo"), to: "/vuelos-de-carga" },
    { label: t("nav_svc_ambulance"), to: "/ambulancia-aerea" },
    { label: t("nav_svc_groups"), to: "/charters-grupales" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setRoutesOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md py-4 border-b border-jade-soft"
          : "py-6"
      }`}
      style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
    >
      <Link to="/" className="flex items-center gap-2.5" aria-label="Numen Aviation home">
        <img src={logoIcon} alt="Numen Aviation" className="h-3 md:h-4 w-auto" />
        <span
          className="text-[0.7rem] md:text-[0.78rem] uppercase text-foreground font-light"
          style={{ letterSpacing: "0.25em" }}
        >
          Numen Aviation
        </span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-8 list-none ml-auto pl-12 xl:pl-20">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[0.75rem] uppercase text-fg-3 hover:text-foreground transition-colors no-underline whitespace-nowrap"
              style={{ letterSpacing: "0.15em" }}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li className="relative group">
          <button
            className="flex items-center gap-1 text-[0.75rem] uppercase text-fg-3 hover:text-foreground transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            {t("nav_services")} <ChevronDown className="w-3 h-3" />
          </button>
          <ul className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block group-focus-within:block bg-background/95 backdrop-blur-md border border-jade-soft min-w-[280px] py-2 list-none">
            {services.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="block px-5 py-3 text-[0.72rem] uppercase text-fg-3 hover:text-jade-light hover:bg-bg-3 transition-colors no-underline border-b border-jade-soft last:border-b-0 whitespace-nowrap"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="relative group">
          <button
            className="flex items-center gap-1 text-[0.75rem] uppercase text-fg-3 hover:text-foreground transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            {t("nav_routes")} <ChevronDown className="w-3 h-3" />
          </button>
          <ul className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block group-focus-within:block bg-background/95 backdrop-blur-md border border-jade-soft min-w-[230px] py-2 list-none">
            {ROUTES.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/rutas/${r.slug}`}
                  className="block px-5 py-3 text-[0.72rem] uppercase text-fg-3 hover:text-jade-light hover:bg-bg-3 transition-colors no-underline border-b border-jade-soft last:border-b-0 whitespace-nowrap"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
        <li>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 whitespace-nowrap text-[0.72rem] uppercase text-fg-2 hover:text-jade transition-colors no-underline"
            style={{ letterSpacing: "0.15em" }}
            aria-label={`Llamar a ${PHONE_NUMBER}`}
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE_NUMBER}
          </a>
        </li>
        <li>
          <a
            href={waLink("Hola, me gustaría solicitar una cotización de charter.")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 whitespace-nowrap text-[0.72rem] uppercase text-background bg-jade px-6 py-3 hover:bg-jade-light transition-all no-underline shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)] hover:shadow-[0_0_32px_-2px_hsl(var(--jade)/0.85)] hover:-translate-y-0.5"
            style={{ letterSpacing: "0.2em" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-background" />
            </span>
            {t("nav_request_flight")}
          </a>
        </li>
      </ul>

      {/* Mobile burger */}
      <div className="lg:hidden flex items-center gap-3">
        <LanguageSwitcher variant="mobile" />
        <button
          className="text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-background z-40 flex flex-col overflow-y-auto"
          style={{ height: "100dvh" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="flex items-center px-6 py-6 border-b border-jade-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
              <img src={logoIcon} alt="Numen Aviation" className="h-3 w-auto" />
              <span className="text-[0.7rem] uppercase text-foreground font-light" style={{ letterSpacing: "0.25em" }}>
                Numen Aviation
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 flex-1 py-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase text-fg-2 hover:text-foreground transition-colors no-underline"
                style={{ letterSpacing: "0.15em" }}
              >
                {l.label}
              </a>
            ))}
            <details className="group">
              <summary className="flex items-center justify-center gap-1 text-base uppercase text-fg-2 cursor-pointer list-none" style={{ letterSpacing: "0.15em" }}>
                {t("nav_services")} <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col gap-3 items-center mt-4">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase text-jade-light text-center px-4"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </details>
            <button
              onClick={() => setRoutesOpen((r) => !r)}
              className="flex items-center gap-1 text-base uppercase text-fg-2"
              style={{ letterSpacing: "0.15em" }}
            >
              {t("nav_routes")} <ChevronDown className="w-4 h-4" />
            </button>
            {routesOpen && (
              <div className="flex flex-col gap-3 items-center">
                {ROUTES.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/rutas/${r.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase text-jade-light"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-base uppercase text-fg-2 hover:text-jade transition-colors no-underline"
              style={{ letterSpacing: "0.15em" }}
            >
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
            <a
              href={waLink("Hola, me gustaría solicitar una cotización de charter.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 text-[0.75rem] uppercase text-background bg-jade px-7 py-3.5 mt-4 shadow-[0_0_24px_-4px_hsl(var(--jade)/0.7)]"
              style={{ letterSpacing: "0.2em" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-background" />
              </span>
              {t("nav_request_flight")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

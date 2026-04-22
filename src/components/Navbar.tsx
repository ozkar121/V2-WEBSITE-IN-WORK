import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, ROUTES, waLink } from "@/lib/site";
import logoIcon from "@/assets/numen-logo.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);
  const location = useLocation();

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
      <Link to="/" className="flex items-center gap-3" aria-label="Numen Aviation home">
        <img src={logo} alt="Numen Aviation" className="h-8 md:h-9 w-auto" />
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-10 list-none">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[0.75rem] uppercase text-fg-3 hover:text-foreground transition-colors no-underline"
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
            Rutas <ChevronDown className="w-3 h-3" />
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
          <a
            href={waLink("Hola, me gustaría solicitar una cotización de charter.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] uppercase text-jade border border-jade px-5 py-2.5 hover:bg-jade hover:text-background transition-colors no-underline"
            style={{ letterSpacing: "0.18em" }}
          >
            Solicitar Vuelo
          </a>
        </li>
      </ul>

      {/* Mobile burger */}
      <button
        className="lg:hidden text-foreground"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-0 bg-background z-40 flex flex-col items-center justify-center gap-6">
          {NAV_LINKS.map((l) => (
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
          <button
            onClick={() => setRoutesOpen((r) => !r)}
            className="flex items-center gap-1 text-base uppercase text-fg-2"
            style={{ letterSpacing: "0.15em" }}
          >
            Rutas <ChevronDown className="w-4 h-4" />
          </button>
          {routesOpen && (
            <div className="flex flex-col gap-3 items-center">
              {ROUTES.map((r) => (
                <Link
                  key={r.slug}
                  to={`/rutas/${r.slug}`}
                  className="text-sm uppercase text-jade-light"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {r.label}
                </Link>
              ))}
            </div>
          )}
          <a
            href={waLink("Hola, me gustaría solicitar una cotización de charter.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] uppercase text-jade border border-jade px-6 py-3 mt-4"
            style={{ letterSpacing: "0.18em" }}
          >
            Solicitar Vuelo
          </a>
        </div>
      )}
    </nav>
  );
};

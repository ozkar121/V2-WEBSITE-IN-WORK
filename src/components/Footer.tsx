import { Link } from "react-router-dom";
import { EMAIL, ROUTES, waLink } from "@/lib/site";
import logoIcon from "@/assets/numen-mark.png";

export const Footer = () => {
  return (
    <footer
      className="bg-bg-2 border-t border-jade-soft pt-12 pb-8"
      style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
    >
      <div className="flex flex-wrap justify-between items-start gap-12 mb-10">
        <div className="footer-brand max-w-xs">
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logoIcon} alt="" className="h-6 w-auto" />
            <span
              className="text-[0.75rem] uppercase text-foreground font-light"
              style={{ letterSpacing: "0.25em" }}
            >
              Numen Aviation
            </span>
          </div>
          <p className="text-[0.78rem] text-fg-3 leading-relaxed">
            Correduría de aviación privada, consultoría y adquisición de aeronaves. Con base en
            Toluca, México. Al servicio de las Américas.
          </p>
        </div>

        <div className="footer-col">
          <h4
            className="text-[0.62rem] uppercase text-jade mb-4 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            Servicios
          </h4>
          <ul className="list-none flex flex-col gap-2">
            <li><a href="/#services" className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline">Charter bajo Demanda</a></li>
            <li><Link to="/empty-legs" className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline">Empty Legs</Link></li>
            <li><a href="/#services" className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline">Consultoría</a></li>
            <li><a href="/#services" className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline">Adquisición de Aeronaves</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4
            className="text-[0.62rem] uppercase text-jade mb-4 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            Rutas Top
          </h4>
          <ul className="list-none flex flex-col gap-2">
            {ROUTES.map((r) => (
              <li key={r.slug}>
                <Link to={`/rutas/${r.slug}`} className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4
            className="text-[0.62rem] uppercase text-jade mb-4 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            Contacto
          </h4>
          <ul className="list-none flex flex-col gap-2">
            <li><a href={`mailto:${EMAIL}`} className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline">{EMAIL}</a></li>
            <li><a href={waLink("Hola, quisiera información.")} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline">WhatsApp</a></li>
            <li><span className="text-[0.8rem] text-fg-3">MMTO — Toluca, México</span></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-jade-soft flex-wrap gap-4">
        <p className="text-[0.7rem] text-fg-3">© 2025 Numen Aviation. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          {["México", "AFAC", "24/7"].map((b) => (
            <span
              key={b}
              className="text-[0.62rem] uppercase text-fg-3 border border-jade-soft px-2 py-1"
              style={{ letterSpacing: "0.15em" }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

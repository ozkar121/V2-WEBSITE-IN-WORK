import { EMAIL, waLink } from "@/lib/site";
import { useLang } from "@/i18n/LanguageContext";
import logoIcon from "@/assets/numen-mark.png";

export const Footer = () => {
  const { t } = useLang();

  return (
    <footer
      className="bg-bg-2 border-t border-jade-soft pt-12 pb-8"
      style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
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
            {t("footer_description")}
          </p>
        </div>

        <div className="footer-col">
          <h4
            className="text-[0.62rem] uppercase text-jade mb-4 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            {t("footer_offices_mx")}
          </h4>
          <p className="text-[0.78rem] text-fg-3 leading-relaxed">
            {t("footer_offices_mx_addr")}
          </p>
        </div>

        <div className="footer-col">
          <h4
            className="text-[0.62rem] uppercase text-jade mb-4 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            {t("footer_offices_us")}
          </h4>
          <p className="text-[0.78rem] text-fg-3 leading-relaxed">
            {t("footer_offices_us_addr")}
          </p>
        </div>

        <div className="footer-col">
          <h4
            className="text-[0.62rem] uppercase text-jade mb-4 font-normal"
            style={{ letterSpacing: "0.25em" }}
          >
            {t("footer_contact")}
          </h4>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a href={`mailto:${EMAIL}`} className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline">
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={waLink("Hola, quisiera información.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8rem] text-fg-3 hover:text-foreground no-underline"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <span className="text-[0.8rem] text-fg-3">{t("footer_hub")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-jade-soft flex-wrap gap-4">
        <p className="text-[0.7rem] text-fg-3">{t("footer_rights")}</p>
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

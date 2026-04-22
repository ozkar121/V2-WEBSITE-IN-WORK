import { EMAIL, waLink, PHONE_NUMBER, PHONE_TEL } from "@/lib/site";
import { useLang } from "@/i18n/LanguageContext";
import logoIcon from "@/assets/numen-mark.png";
import brandImage from "@/assets/toluca-aerial.jpg";

export const Footer = () => {
  const { t } = useLang();

  const offices = [
    {
      title: t("footer_aviation_center"),
      lines: [
        t("footer_aviation_center_l1"),
        t("footer_aviation_center_l2"),
        t("footer_aviation_center_l3"),
      ],
    },
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
      ],
    },
  ];

  return (
    <footer
      className="bg-bg-2 border-t border-jade-soft pt-12 pb-8"
      style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
    >
      {/* Top: brand + photo on left, three offices spread on right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2.7fr] gap-10 lg:gap-14 mb-10">
        {/* Brand block with image */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="" className="h-6 w-auto" />
            <span
              className="text-[0.75rem] uppercase text-foreground font-light"
              style={{ letterSpacing: "0.25em" }}
            >
              Numen Aviation
            </span>
          </div>
          <div className="relative aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/9] overflow-hidden border border-jade-soft">
            <img
              src={brandImage}
              alt="Aeropuerto Internacional de Toluca (MMTO)"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--background) / 0.55) 0%, transparent 50%, hsl(var(--background) / 0.65) 100%)",
              }}
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
              <span
                className="text-[0.6rem] uppercase text-jade-light"
                style={{ letterSpacing: "0.25em" }}
              >
                MMTO · Toluca
              </span>
              <span
                className="text-[0.55rem] uppercase text-fg-3 border border-jade-soft px-2 py-0.5"
                style={{ letterSpacing: "0.2em" }}
              >
                24/7
              </span>
            </div>
          </div>
        </div>

        {/* Offices grid (3 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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

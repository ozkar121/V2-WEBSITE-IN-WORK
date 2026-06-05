import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { getRelatedFor, labelFor } from "@/data/internalLinks";

interface RelatedLinksProps {
  /** Path of the current page (e.g. "/guia-fbo-toluca"). */
  path: string;
  /**
   * If true, also renders a one-line contextual anchor back to the home page
   * above the cards (descriptive anchor text with Toluca/MMTO keywords).
   */
  showHomeContextLink?: boolean;
}

export const RelatedLinks = ({ path, showHomeContextLink = true }: RelatedLinksProps) => {
  const { lang } = useLang();
  const items = getRelatedFor(path, lang);
  if (items.length === 0) return null;

  const heading = lang === "en" ? "Related reading" : "Contenido relacionado";
  const homeAnchor = labelFor("/", lang);
  const contextLine =
    lang === "en"
      ? "Back to "
      : "Más sobre ";

  return (
    <aside
      className="mt-16 pt-10 border-t border-jade-soft"
      aria-labelledby="related-links-heading"
    >
      {showHomeContextLink && (
        <p className="text-sm text-fg-2 mb-8">
          {contextLine}
          <a
            href="/"
            className="text-jade-light hover:text-jade underline underline-offset-4"
          >
            {homeAnchor}
          </a>
          .
        </p>
      )}

      <h2
        id="related-links-heading"
        className="text-[0.65rem] uppercase text-jade mb-6"
        style={{ letterSpacing: "0.28em" }}
      >
        {heading}
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
        {items.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              className="group flex items-center justify-between gap-3 p-5 border border-jade-soft bg-bg-3/30 hover:bg-bg-3/60 hover:border-jade transition-colors no-underline"
            >
              <span className="text-sm text-foreground group-hover:text-jade-light">
                {it.label[lang]}
              </span>
              <ArrowRight className="w-4 h-4 text-jade shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

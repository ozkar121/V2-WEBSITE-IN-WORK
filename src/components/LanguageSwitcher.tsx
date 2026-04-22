import { useLang } from "@/i18n/LanguageContext";

interface Props {
  variant?: "desktop" | "mobile";
}

export const LanguageSwitcher = ({ variant = "desktop" }: Props) => {
  const { lang, setLang } = useLang();

  const base =
    variant === "desktop"
      ? "text-[0.7rem] px-2 py-1"
      : "text-[0.85rem] px-3 py-1.5";

  return (
    <div
      className="inline-flex items-center border border-jade-soft"
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`${base} uppercase transition-colors ${
          lang === "es"
            ? "bg-jade text-background"
            : "bg-transparent text-fg-3 hover:text-foreground"
        }`}
        style={{ letterSpacing: "0.18em" }}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} uppercase transition-colors border-l border-jade-soft ${
          lang === "en"
            ? "bg-jade text-background"
            : "bg-transparent text-fg-3 hover:text-foreground"
        }`}
        style={{ letterSpacing: "0.18em" }}
      >
        EN
      </button>
    </div>
  );
};

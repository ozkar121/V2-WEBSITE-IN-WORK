import { createContext, useCallback, useContext, useEffect, useMemo, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TRANSLATIONS, type Lang, type TranslationKey } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
  /** Localiza un path interno según el idioma actual: lp("/flota") → "/en/flota" en inglés. */
  lp: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "numen-lang";

/** Páginas que NO tienen versión en inglés (legacy redirects y privadas). */
export const ES_ONLY_PATHS = new Set<string>([
  "/servicios/ambulancias-aereas",
  "/servicios/charters-grupos",
  "/auth",
  "/unsubscribe",
]);

/** Quita el prefijo /en de un pathname. */
export const stripEn = (pathname: string): string => {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
};

/** Deriva el idioma desde el pathname. La URL es la fuente de verdad. */
export const langFromPath = (pathname: string): Lang =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";

/** Devuelve el path equivalente en el idioma dado. */
export const localizePath = (path: string, lang: Lang): string => {
  const [p, hash] = path.split("#");
  const base = stripEn(p || "/");
  let out = base;
  if (lang === "en" && !ES_ONLY_PATHS.has(base) && !base.startsWith("/admin")) {
    out = base === "/" ? "/en" : `/en${base}`;
  }
  return hash ? `${out}#${hash}` : out;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // La URL manda: /en/* = inglés, todo lo demás = español.
  const lang: Lang = langFromPath(pathname);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "en" ? "en" : "es-MX";
    }
  }, [lang]);

  const setLang = useCallback(
    (l: Lang) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, l);
      }
      if (l === lang) return;
      const base = stripEn(pathname);
      if (l === "en" && (ES_ONLY_PATHS.has(base) || base.startsWith("/admin"))) {
        // Sin versión EN todavía: llevar al home en inglés.
        navigate("/en");
        return;
      }
      navigate(localizePath(base, l));
    },
    [lang, pathname, navigate]
  );

  const t = useCallback(
    (key: TranslationKey) => {
      const entry = TRANSLATIONS[key];
      return entry ? entry[lang] : (key as string);
    },
    [lang]
  );

  const lp = useCallback((path: string) => localizePath(path, lang), [lang]);

  const value = useMemo(() => ({ lang, setLang, t, lp }), [lang, setLang, t, lp]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (ctx) return ctx;
  // Fallback to avoid runtime crashes during HMR or if a consumer renders
  // outside the provider. Defaults to Spanish.
  return {
    lang: "es",
    setLang: () => {},
    t: (key) => {
      const entry = TRANSLATIONS[key];
      return entry ? entry.es : (key as string);
    },
    lp: (path) => path,
  };
};

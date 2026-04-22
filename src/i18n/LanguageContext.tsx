import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { TRANSLATIONS, type Lang, type TranslationKey } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "numen-lang";

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("en") ? "en" : "es";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("es");

  // Hydrate after mount to avoid SSR mismatch
  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "en" ? "en" : "es-MX";
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      const entry = TRANSLATIONS[key];
      return entry ? entry[lang] : (key as string);
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

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
  };
};

import { useEffect } from "react";
import { useLang } from "@/i18n/LanguageContext";

/** Adds .visible class to elements with .reveal as they scroll into view. */
export function useReveal() {
  const { lang } = useLang();
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    // Re-observe on each run so re-mounted nodes (e.g. after language change) become visible.
    document.querySelectorAll(".reveal").forEach((el) => {
      // Mark elements already in viewport immediately to avoid flash of hidden content.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, [lang]);
}

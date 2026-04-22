import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { useLang } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLang();
  useSEO({
    title: t("nf_seo_title"),
    description: t("nf_seo_desc"),
    noindex: true,
  });

  useEffect(() => {
    console.error("404: ruta inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md">
        <p className="eyebrow mb-4">{t("nf_eyebrow")}</p>
        <h1 className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
          {t("nf_title_a")} <em className="italic text-jade-light">{t("nf_title_em")}</em>
        </h1>
        <div className="gold-rule mx-auto" />
        <p className="text-[0.9rem] text-fg-3 mb-8 mt-6">{t("nf_body")}</p>
        <Link to="/" className="btn-primary inline-block">
          {t("common_back_home")}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

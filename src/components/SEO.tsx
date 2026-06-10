import { Head } from "vite-react-ssg";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/site";
import { useLang, stripEn, ES_ONLY_PATHS } from "@/i18n/LanguageContext";

export interface SEOProps {
  title: string;
  description?: string;
  /** Path only ("/empty-legs"). If omitted, current pathname is used (client-only). */
  path?: string;
  image?: string;
  /** "website" | "article" | "product" — defaults to "website" */
  type?: string;
  /** noindex,nofollow for admin/auth */
  noindex?: boolean;
  /** Optional JSON-LD structured data (single object or array). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Per-route <head> tags via vite-react-ssg's <Head>. Bilingüe: el canonical y
 * los hreflang se calculan según el idioma actual (derivado de la URL).
 * Páginas en ES_ONLY_PATHS no declaran alternate en inglés.
 */
export const SEO = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}: SEOProps) => {
  const { lang } = useLang();
  const resolvedPath =
    path ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const basePath = stripEn(resolvedPath);
  const esUrl = `${SITE_URL}${basePath}`;
  const enUrl = `${SITE_URL}${basePath === "/" ? "/en" : `/en${basePath}`}`;
  const hasEn = !ES_ONLY_PATHS.has(basePath) && !basePath.startsWith("/admin");
  const url = lang === "en" && hasEn ? enUrl : esUrl;

  const jsonLdItems = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large,max-snippet:-1"
        }
      />

      <link rel="canonical" href={url} />
      <link rel="alternate" href={esUrl} hrefLang="es-MX" />
      {hasEn && <link rel="alternate" href={enUrl} hrefLang="en" />}
      <link rel="alternate" href={esUrl} hrefLang="x-default" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "es_MX"} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      {jsonLdItems.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Head>
  );
};

export default SEO;

import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, SITE_LOCALE, DEFAULT_OG_IMAGE } from "@/lib/site";

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
 * Declarative <head> tags via react-helmet-async — picked up by
 * vite-react-ssg at build time so every prerendered route ships with
 * baked title, description, canonical, hreflang, OG, Twitter and JSON-LD.
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
  const resolvedPath =
    path ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const url = `${SITE_URL}${resolvedPath}`;

  const jsonLdItems = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
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
      <link rel="alternate" href={url} hrefLang="es-MX" />
      <link rel="alternate" href={url} hrefLang="es" />
      <link rel="alternate" href={url} hrefLang="en" />
      <link rel="alternate" href={url} hrefLang="en-US" />
      <link rel="alternate" href={url} hrefLang="x-default" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
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
    </Helmet>
  );
};

export default SEO;

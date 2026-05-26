import { useEffect } from "react";
import { SITE_URL, SITE_NAME, SITE_LOCALE, DEFAULT_OG_IMAGE } from "@/lib/site";

interface SEOProps {
  title: string;
  description?: string;
  /** Path only ("/empty-legs"). If omitted, current pathname is used. */
  path?: string;
  image?: string;
  /** "website" | "article" | "product" — defaults to "website" */
  type?: string;
  /** noindex,nofollow for admin/auth */
  noindex?: boolean;
  /** Optional JSON-LD structured data (single object or array). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== "content") el!.setAttribute(k, v);
    });
    document.head.appendChild(el);
  }
  el.setAttribute("content", attrs.content);
};

const upsertLink = (rel: string, href: string, extra?: Record<string, string>) => {
  let el = document.head.querySelector(`link[rel="${rel}"]${extra?.hreflang ? `[hreflang="${extra.hreflang}"]` : ""}`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (extra?.hreflang) el.setAttribute("hreflang", extra.hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const setJsonLd = (data: SEOProps["jsonLd"]) => {
  // Remove previous page-specific JSON-LD
  document.head.querySelectorAll('script[type="application/ld+json"][data-seo="page"]').forEach((n) => n.remove());
  if (!data) return;
  const items = Array.isArray(data) ? data : [data];
  items.forEach((item) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-seo", "page");
    s.text = JSON.stringify(item);
    document.head.appendChild(s);
  });
};

export function useSEO({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const url = `${SITE_URL}${path ?? window.location.pathname}`;

    if (description) {
      upsertMeta('meta[name="description"]', { name: "description", content: description });
    }

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1",
    });

    // Canonical + hreflang (single URL serves both languages via client switcher;
    // we advertise both locales + x-default so crawlers know the page is bilingual).
    upsertLink("canonical", url);
    upsertLink("alternate", url, { hreflang: "es-MX" });
    upsertLink("alternate", url, { hreflang: "es" });
    upsertLink("alternate", url, { hreflang: "en" });
    upsertLink("alternate", url, { hreflang: "en-US" });
    upsertLink("alternate", url, { hreflang: "x-default" });

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    if (description) upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: SITE_LOCALE });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: "1200" });
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: "630" });

    // Twitter
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    if (description) upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    setJsonLd(jsonLd);
  }, [title, description, path, image, type, noindex, jsonLd]);
}

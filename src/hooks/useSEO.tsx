// Backward-compatible shim: the old hook is now a function that returns the
// declarative <SEO /> element. Pages do:
//
//   const seo = useSEO({ title, description, path, jsonLd });
//   return <>{seo} ...rest</>;
//
// This routes through react-helmet-async so vite-react-ssg bakes every tag
// into the static HTML of each prerendered route at build time.
import { SEO, type SEOProps } from "@/components/SEO";

export function useSEO(props: SEOProps) {
  return <SEO {...props} />;
}

export type { SEOProps };

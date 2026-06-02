import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useSEO } from "@/hooks/useSEO";
import { useLang } from "@/i18n/LanguageContext";
import { BRIEFING_POSTS, getBriefingPost, localized } from "@/data/briefingPosts";
import { SITE_URL, SITE_NAME, waLink } from "@/lib/site";
import NotFound from "@/pages/NotFound";

const BriefingPost = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const post = getBriefingPost(slug);

  if (!post) return <NotFound />;

  const title = localized(post.title, lang);
  const description = localized(post.description, lang);
  const body = localized(post.body, lang);

  const sorted = [...BRIEFING_POSTS].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((p) => p.slug === post.slug);
  const next = sorted[idx + 1];

  useSEO({
    title: `${title} | The Numen Briefing`,
    description,
    path: `/briefing/${post.slug}`,
    type: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        datePublished: post.date,
        dateModified: post.date,
        image: [`${SITE_URL}/og-image.jpg`],
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-numen.png` },
        },
        mainEntityOfPage: `${SITE_URL}/briefing/${post.slug}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Briefing", item: `${SITE_URL}/briefing` },
          { "@type": "ListItem", position: 3, name: title, item: `${SITE_URL}/briefing/${post.slug}` },
        ],
      },
    ],
  });

  const backLbl = lang === "en" ? "Back to Briefing" : "Volver al Briefing";
  const minRead = lang === "en" ? "min read" : "min de lectura";
  const ctaTitle = lang === "en" ? "Ready to fly?" : "¿Listo para volar?";
  const ctaCopy =
    lang === "en"
      ? "Quotes in under 2 hours. Operations 24/7 from MMTO Toluca."
      : "Cotización en menos de 2 horas. Operación 24/7 desde MMTO Toluca.";
  const ctaBtn = lang === "en" ? "Request a quote" : "Solicitar cotización";
  const nextLbl = lang === "en" ? "Next article" : "Siguiente artículo";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article
        className="pt-32 pb-20"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            to="/briefing"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase text-fg-3 hover:text-jade transition-colors no-underline mb-12"
            style={{ letterSpacing: "0.2em" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {backLbl}
          </Link>

          <div
            className="text-[0.65rem] uppercase text-jade mb-5"
            style={{ letterSpacing: "0.28em" }}
          >
            {localized(post.category, lang)}
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight mb-6">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-[0.72rem] text-fg-3 pb-10 mb-10 border-b border-jade-soft">
            <span className="tabular-nums">{post.date}</span>
            <span className="text-jade-soft">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {post.readMinutes} {minRead}
            </span>
          </div>

          <div className="briefing-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 border border-jade-soft bg-bg-3/40">
            <div
              className="text-[0.65rem] uppercase text-jade mb-3"
              style={{ letterSpacing: "0.28em" }}
            >
              Numen Aviation
            </div>
            <h3 className="text-xl font-light text-foreground mb-2">{ctaTitle}</h3>
            <p className="text-sm text-fg-2 mb-5">{ctaCopy}</p>
            <a
              href={waLink(
                lang === "en"
                  ? "Hi, I'd like a private charter quote."
                  : "Hola, me gustaría solicitar una cotización de charter."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase text-background bg-jade px-6 py-3 hover:bg-jade-light transition-all no-underline shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)]"
              style={{ letterSpacing: "0.2em" }}
            >
              {ctaBtn}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Next */}
          {next && (
            <Link
              to={`/briefing/${next.slug}`}
              className="group block mt-12 pt-8 border-t border-jade-soft no-underline"
            >
              <div
                className="text-[0.65rem] uppercase text-fg-3 mb-2"
                style={{ letterSpacing: "0.28em" }}
              >
                {nextLbl}
              </div>
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-lg font-light text-foreground group-hover:text-jade-light transition-colors">
                  {localized(next.title, lang)}
                </h4>
                <ArrowRight className="w-4 h-4 text-jade transition-transform group-hover:translate-x-1 shrink-0" />
              </div>
            </Link>
          )}
        </div>
      </article>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default BriefingPost;

import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL, SITE_NAME, waLink } from "@/lib/site";
import { buildBreadcrumb } from "@/lib/breadcrumb";

const PATH = "/cuanto-cuesta-jet-privado-mexico-2026";
const TITLE = "¿Cuánto cuesta volar en jet privado en México? (2026)";
const DESCRIPTION =
  "Precios estimados 2026 desde Toluca (MMTO) a destinos nacionales e internacionales, con ejemplos reales en Learjet 35 y Hawker 800A. Cada viaje es a la medida; esto es tu punto de partida.";
const DATE = "2026-01-15";
const READ_MIN = 5;
const CATEGORY = "Briefing · Precios · 2026";

const BODY = `Es la primera pregunta de todos: **¿cuánto cuesta volar en jet privado?** La respuesta honesta es que no existe una tarifa fija — cada viaje se diseña a la medida. Pero sí podemos darte referencias reales para que tengas un punto de partida claro. Aquí están los precios estimados 2026 de nuestras rutas más solicitadas desde Toluca (MMTO).

> **Importante: cada viaje es único.** Los precios de esta página son **estimados y one-way (por trayecto)**. En Numen Aviation no vendemos un asiento: **diseñamos el viaje completo a tu medida**. El costo final depende de la ruta exacta, la aeronave disponible, el número de pasajeros, las pernoctas, los tiempos de espera de la tripulación y las tasas aeroportuarias. Cada cotización es individual.

## Rutas nacionales — Learjet 35

El Learjet 35 es un light jet ágil y veloz, ideal para vuelos dentro de México. Tiene capacidad para **hasta 7 pasajeros**, aunque recomendamos un máximo de 6 para un viaje cómodo. Precios estimados one-way desde Toluca (MMTO):

| Ruta (desde Toluca) | Tiempo de vuelo | Desde (one-way)    |
|---------------------|-----------------|--------------------|
| Toluca → Cancún     | 2h 15m          | $14,050 USD + IVA  |
| Toluca → Los Cabos  | 2h 00m          | $12,750 USD + IVA  |
| Toluca → Mérida     | 1h 45m          | $11,450 USD + IVA  |
| Toluca → Monterrey  | 1h 30m          | $9,800 USD + IVA   |
| Toluca → Acapulco   | ~0h 35m         | $5,950 USD + IVA   |

Precios estimados one-way en Learjet 35. Capacidad hasta 7 pax (recomendado máx. 6). Sujetos a disponibilidad y cotización.

## Rutas internacionales — Hawker 800A

Para distancias mayores, el Hawker 800A es un midsize jet con cabina amplia, **capacidad para 8 pasajeros y baño a bordo** — la opción ideal para vuelos internacionales. Precios estimados one-way desde Toluca (MMTO):

| Ruta (desde Toluca) | Tiempo de vuelo | Desde (one-way)    |
|---------------------|-----------------|--------------------|
| Toluca → Las Vegas  | 3h 45m          | $29,300 USD + IVA  |
| Toluca → Miami      | 3h 30m          | $25,300 USD + IVA  |
| Toluca → Houston    | 2h 00m          | $16,300 USD + IVA  |

Precios estimados one-way en Hawker 800A. Capacidad 8 pax + baño. Sujetos a disponibilidad y cotización.

## ¿Qué hace variar el precio?

Entender cómo se construye el costo te ayuda a planear mejor tu viaje. Estos son los factores principales:

- **Trayecto vs. viaje redondo:** los precios de arriba son one-way. Un viaje redondo en el mismo día aproxima al doble del costo calculado.
- **Pernoctas (estancias):** si te quedas unos días en destino, se cobra por noche. Cada noche equivale generalmente a media hora de vuelo; algunas aeronaves cobran hasta una hora completa por noche.
- **Estancias largas:** en viajes con varios días se cotiza la ida y el regreso por separado — la idea aproximada es duplicar el cálculo del trayecto.
- **Tipo de aeronave:** light jet (Learjet 35) o midsize (Hawker 800A) según distancia y número de pasajeros.
- **Tasas y servicios:** tarifas aeroportuarias, handling, catering y traslados terrestres pueden ajustar el total.

> **Hecho a la medida, siempre.** Ningún viaje en jet privado es igual a otro. Por eso lo que hacemos en Numen Aviation es **diseñar cada viaje a tu medida**: la aeronave correcta, la ruta óptima y el itinerario que se ajusta a tu agenda — no al revés. Las cifras de esta página son tu punto de partida; tu cotización exacta la armamos contigo.

## ¿Por qué desde Toluca?

Todas estas rutas salen desde el aeropuerto de Toluca (MMTO), nuestra base exclusiva. Operar desde Toluca significa menos saturación, slots flexibles y una salida ágil desde la terminal privada (FBO) — a 20 minutos de Santa Fe y 35 de Polanco. Si quieres entender cómo funciona la experiencia en tierra, revisa nuestra [Guía del FBO en Toluca](/guia-fbo-toluca).

Conoce más detalles de cada destino en nuestras páginas de ruta: [Cancún](/rutas/cdmx-cancun), [Los Cabos](/rutas/cdmx-los-cabos), [Miami](/rutas/cdmx-miami) y [Monterrey](/rutas/cdmx-monterrey).

## Preguntas frecuentes

### ¿Cuánto cuesta volar en jet privado en México en 2026?
Los precios estimados desde Toluca (MMTO) en un Learjet 35 inician en aproximadamente $5,950 USD + IVA a Acapulco, $9,800 USD + IVA a Monterrey y $14,050 USD + IVA a Cancún. En vuelos internacionales con Hawker 800A, desde $16,300 USD + IVA a Houston y $25,300 USD + IVA a Miami. Todos son precios one-way estimados; cada viaje se cotiza a la medida.

### ¿El precio del jet privado es por trayecto o por viaje redondo?
Las tarifas publicadas son por trayecto sencillo (one-way). Si el cliente desea viaje redondo en el mismo día, el costo aproximado se duplica. Si la estancia incluye pernoctas, se cobra por noche, equivalente generalmente a media hora de vuelo por noche (algunas aeronaves cobran una hora completa).

### ¿Qué incluye y qué hace variar el precio de un vuelo privado?
El precio depende de la ruta, el tipo de aeronave, el número de pasajeros, las pernoctas, los tiempos de espera de la tripulación, tasas aeroportuarias y disponibilidad. Por eso cada viaje en Numen Aviation se cotiza a la medida: no vendemos un asiento, diseñamos el viaje completo.

### ¿Cuántos pasajeros caben en un Learjet 35 o un Hawker 800A?
El Learjet 35 tiene capacidad para hasta 7 pasajeros, aunque recomendamos un máximo de 6 para un viaje cómodo. El Hawker 800A acomoda hasta 8 pasajeros e incluye baño a bordo, ideal para rutas internacionales más largas.
`;

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta volar en jet privado en México en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los precios estimados desde Toluca (MMTO) en un Learjet 35 inician en aproximadamente $5,950 USD + IVA a Acapulco, $9,800 USD + IVA a Monterrey y $14,050 USD + IVA a Cancún. En vuelos internacionales con Hawker 800A, desde $16,300 USD + IVA a Houston y $25,300 USD + IVA a Miami. Todos son precios one-way estimados; cada viaje se cotiza a la medida.",
      },
    },
    {
      "@type": "Question",
      name: "¿El precio del jet privado es por trayecto o por viaje redondo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las tarifas publicadas son por trayecto sencillo (one-way). Si el cliente desea viaje redondo en el mismo día, el costo aproximado se duplica. Si la estancia incluye pernoctas, se cobra por noche, equivalente generalmente a media hora de vuelo por noche (algunas aeronaves cobran una hora completa).",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye y qué hace variar el precio de un vuelo privado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio depende de la ruta, el tipo de aeronave, el número de pasajeros, las pernoctas, los tiempos de espera de la tripulación, tasas aeroportuarias y disponibilidad. Por eso cada viaje en Numen Aviation se cotiza a la medida: no vendemos un asiento, diseñamos el viaje completo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos pasajeros caben en un Learjet 35 o un Hawker 800A?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Learjet 35 tiene capacidad para hasta 7 pasajeros, aunque recomendamos un máximo de 6 para un viaje cómodo. El Hawker 800A acomoda hasta 8 pasajeros e incluye baño a bordo, ideal para rutas internacionales más largas.",
      },
    },
  ],
};

const CuantoCuestaJetPrivado = () => {
  const seo = useSEO({
    title: `${TITLE} | Numen Aviation`,
    description: DESCRIPTION,
    path: PATH,
    type: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        datePublished: DATE,
        dateModified: DATE,
        image: [`${SITE_URL}/og-image.jpg`],
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-numen.png` },
        },
        mainEntityOfPage: `${SITE_URL}${PATH}`,
      },
      buildBreadcrumb({
        path: PATH,
        trail: [
          { name: "Briefing", item: `${SITE_URL}/briefing` },
          { name: TITLE, item: `${SITE_URL}${PATH}` },
        ],
      })!,
      FAQ_LD,
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {seo}
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
            Volver al Briefing
          </Link>

          <div
            className="text-[0.65rem] uppercase text-jade mb-5"
            style={{ letterSpacing: "0.28em" }}
          >
            {CATEGORY}
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight mb-6">
            {TITLE}
          </h1>
          <div className="flex items-center gap-4 text-[0.72rem] text-fg-3 pb-10 mb-10 border-b border-jade-soft">
            <span className="tabular-nums">{DATE}</span>
            <span className="text-jade-soft">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {READ_MIN} min de lectura
            </span>
          </div>

          <div className="briefing-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{BODY}</ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 border border-jade-soft bg-bg-3/40">
            <div
              className="text-[0.65rem] uppercase text-jade mb-3"
              style={{ letterSpacing: "0.28em" }}
            >
              Numen Aviation
            </div>
            <h3 className="text-xl font-light text-foreground mb-2">
              Tu cotización a la medida
            </h3>
            <p className="text-sm text-fg-2 mb-5">
              Cuéntanos tu ruta, fechas y número de pasajeros. Tendrás un precio exacto en menos de una hora.
            </p>
            <a
              href={waLink("Hola, quisiera cotizar un vuelo privado a la medida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase text-background bg-jade px-6 py-3 hover:bg-jade-light transition-all no-underline shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)]"
              style={{ letterSpacing: "0.2em" }}
            >
              Cotizar por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default CuantoCuestaJetPrivado;

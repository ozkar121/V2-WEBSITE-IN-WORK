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
import { RelatedLinks } from "@/components/RelatedLinks";
import { useLang } from "@/i18n/LanguageContext";

const PATH = "/cuanto-cuesta-jet-privado-mexico-2026";
const DATE = "2026-01-15";
const READ_MIN = 5;

const TITLE_ES = "¿Cuánto cuesta volar en jet privado en México? (2026)";
const TITLE_EN = "How Much Does It Cost to Fly Private in Mexico? (2026)";
const DESCRIPTION_ES =
  "Precios estimados 2026 desde Toluca (MMTO) a destinos nacionales e internacionales, con ejemplos reales en Learjet 35 y Hawker 800A. Cada viaje es a la medida; esto es tu punto de partida.";
const DESCRIPTION_EN =
  "2026 estimated prices from Toluca (MMTO) to domestic and international destinations, with real examples on the Learjet 35 and Hawker 800A. Every trip is tailor-made; this is your starting point.";

const BODY_ES = `Es la primera pregunta de todos: **¿cuánto cuesta volar en jet privado?** La respuesta honesta es que no existe una tarifa fija — cada viaje se diseña a la medida. Pero sí podemos darte referencias reales para que tengas un punto de partida claro. Aquí están los precios estimados 2026 de nuestras rutas más solicitadas desde Toluca (MMTO).

> **Importante: cada viaje es único.** Los precios de esta página son **estimados y one-way (por trayecto)**. En Numen Aviation no vendemos un asiento: **diseñamos el viaje completo a tu medida**. El costo final depende de la ruta exacta, la aeronave disponible, el número de pasajeros, las pernoctas, los tiempos de espera de la tripulación y las tasas aeroportuarias. Cada cotización es individual.

## Rutas nacionales — Learjet 35

![Learjet 35 en plataforma, disponible para renta desde Toluca (MMTO)](/photos/learjet-35.webp)

El Learjet 35 es un light jet ágil y veloz, ideal para vuelos dentro de México. Tiene capacidad para **hasta 7 pasajeros**, aunque recomendamos un máximo de 6 para un viaje cómodo. Precios estimados one-way desde Toluca (MMTO):

| Ruta (desde Toluca) | Tiempo de vuelo | Desde (one-way)    |
|---------------------|-----------------|--------------------|
| Toluca → Cancún     | 2h 15m          | $12,000 USD + IVA  |
| Toluca → Los Cabos  | 2h 00m          | $12,750 USD + IVA  |
| Toluca → Mérida     | 1h 45m          | $11,450 USD + IVA  |
| Toluca → Monterrey  | 1h 30m          | $9,500 USD + IVA   |
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
Los precios estimados desde Toluca (MMTO) en un Learjet 35 inician en aproximadamente $5,950 USD + IVA a Acapulco, $9,500 USD + IVA a Monterrey y $12,000 USD + IVA a Cancún. En vuelos internacionales con Hawker 800A, desde $16,300 USD + IVA a Houston y $25,300 USD + IVA a Miami. Todos son precios one-way estimados; cada viaje se cotiza a la medida.

### ¿El precio del jet privado es por trayecto o por viaje redondo?
Las tarifas publicadas son por trayecto sencillo (one-way). Si el cliente desea viaje redondo en el mismo día, el costo aproximado se duplica. Si la estancia incluye pernoctas, se cobra por noche, equivalente generalmente a media hora de vuelo por noche (algunas aeronaves cobran una hora completa).

### ¿Qué incluye y qué hace variar el precio de un vuelo privado?
El precio depende de la ruta, el tipo de aeronave, el número de pasajeros, las pernoctas, los tiempos de espera de la tripulación, tasas aeroportuarias y disponibilidad. Por eso cada viaje en Numen Aviation se cotiza a la medida: no vendemos un asiento, diseñamos el viaje completo.

### ¿Cuántos pasajeros caben en un Learjet 35 o un Hawker 800A?
El Learjet 35 tiene capacidad para hasta 7 pasajeros, aunque recomendamos un máximo de 6 para un viaje cómodo. El Hawker 800A acomoda hasta 8 pasajeros e incluye baño a bordo, ideal para rutas internacionales más largas.
`;

const BODY_EN = `It's everyone's first question: **how much does it cost to fly by private jet?** The honest answer is that there is no fixed rate — every trip is designed to measure. But we can give you real references so you have a clear starting point. Here are the 2026 estimated prices for our most requested routes from Toluca (MMTO).

> **Important: every trip is unique.** The prices on this page are **estimates and one-way (per leg)**. At Numen Aviation we don't sell a seat: **we design the entire trip around you**. The final cost depends on the exact route, the available aircraft, the number of passengers, overnight stays, crew waiting times and airport fees. Every quote is individual.

## Domestic routes — Learjet 35

![Learjet 35 on the ramp, available for charter from Toluca (MMTO)](/photos/learjet-35.webp)

The Learjet 35 is an agile, fast light jet, ideal for flights within Mexico. It seats **up to 7 passengers**, though we recommend a maximum of 6 for a comfortable trip. Estimated one-way prices from Toluca (MMTO):

| Route (from Toluca) | Flight time | From (one-way)     |
|---------------------|-------------|--------------------|
| Toluca → Cancún     | 2h 15m      | $12,000 USD + tax  |
| Toluca → Los Cabos  | 2h 00m      | $12,750 USD + tax  |
| Toluca → Mérida     | 1h 45m      | $11,450 USD + tax  |
| Toluca → Monterrey  | 1h 30m      | $9,500 USD + tax   |
| Toluca → Acapulco   | ~0h 35m     | $5,950 USD + tax   |

Estimated one-way prices on a Learjet 35. Seats up to 7 pax (6 recommended). Subject to availability and quotation.

## International routes — Hawker 800A

For longer distances, the Hawker 800A is a midsize jet with a wide cabin, **seating for 8 passengers and an onboard lavatory** — the ideal option for international flights. Estimated one-way prices from Toluca (MMTO):

| Route (from Toluca) | Flight time | From (one-way)     |
|---------------------|-------------|--------------------|
| Toluca → Las Vegas  | 3h 45m      | $29,300 USD + tax  |
| Toluca → Miami      | 3h 30m      | $25,300 USD + tax  |
| Toluca → Houston    | 2h 00m      | $16,300 USD + tax  |

Estimated one-way prices on a Hawker 800A. 8 pax + lavatory. Subject to availability and quotation.

## What makes the price vary?

Understanding how the cost is built helps you plan your trip better. These are the main factors:

- **One-way vs. round trip:** the prices above are one-way. A same-day round trip is roughly double the calculated cost.
- **Overnight stays:** if you stay a few days at the destination, a nightly fee applies. Each night generally equals half a flight hour; some aircraft charge up to a full hour per night.
- **Longer stays:** on multi-day trips the outbound and return are quoted separately — the rough idea is to double the one-way calculation.
- **Aircraft type:** light jet (Learjet 35) or midsize (Hawker 800A) depending on distance and passenger count.
- **Fees and services:** airport fees, handling, catering and ground transfers can adjust the total.

> **Tailor-made, always.** No two private jet trips are alike. That's why what we do at Numen Aviation is **design every trip around you**: the right aircraft, the optimal routing and the itinerary that fits your agenda — not the other way around. The figures on this page are your starting point; your exact quote we build with you.

## Why from Toluca?

All these routes depart from Toluca airport (MMTO), our exclusive base. Operating from Toluca means less congestion, flexible slots and an agile departure from the private terminal (FBO) — 20 minutes from Santa Fe and 35 from Polanco. To understand how the ground experience works, see our [Toluca FBO Guide](/en/guia-fbo-toluca).

Find more detail on each destination on our route pages: [Cancún](/en/rutas/cdmx-cancun), [Los Cabos](/en/rutas/cdmx-los-cabos), [Miami](/en/rutas/cdmx-miami) and [Monterrey](/en/rutas/cdmx-monterrey).

## Frequently asked questions

### How much does it cost to fly private in Mexico in 2026?
Estimated prices from Toluca (MMTO) on a Learjet 35 start at approximately $5,950 USD + tax to Acapulco, $9,500 USD + tax to Monterrey and $12,000 USD + tax to Cancún. On international flights with a Hawker 800A, from $16,300 USD + tax to Houston and $25,300 USD + tax to Miami. All are estimated one-way prices; every trip is quoted to measure.

### Is the private jet price per leg or round trip?
Published rates are one-way. For a same-day round trip, the approximate cost doubles. If the stay includes overnights, a nightly fee applies — generally equal to half a flight hour per night (some aircraft charge a full hour).

### What's included and what makes a private flight's price vary?
The price depends on the route, aircraft type, passenger count, overnights, crew waiting times, airport fees and availability. That's why every Numen Aviation trip is quoted individually: we don't sell a seat, we design the whole trip.

### How many passengers fit in a Learjet 35 or Hawker 800A?
The Learjet 35 seats up to 7 passengers, though we recommend a maximum of 6 for comfort. The Hawker 800A accommodates up to 8 passengers and includes an onboard lavatory — ideal for longer international routes.
`;

const FAQ_LD_ES = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta volar en jet privado en México en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los precios estimados desde Toluca (MMTO) en un Learjet 35 inician en aproximadamente $5,950 USD + IVA a Acapulco, $9,500 USD + IVA a Monterrey y $12,000 USD + IVA a Cancún. En vuelos internacionales con Hawker 800A, desde $16,300 USD + IVA a Houston y $25,300 USD + IVA a Miami. Todos son precios one-way estimados; cada viaje se cotiza a la medida.",
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

const FAQ_LD_EN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to fly private in Mexico in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estimated prices from Toluca (MMTO) on a Learjet 35 start at approximately $5,950 USD + tax to Acapulco, $9,500 USD + tax to Monterrey and $12,000 USD + tax to Cancún. On international flights with a Hawker 800A, from $16,300 USD + tax to Houston and $25,300 USD + tax to Miami. All are estimated one-way prices; every trip is quoted to measure.",
      },
    },
    {
      "@type": "Question",
      name: "Is the private jet price per leg or round trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Published rates are one-way. For a same-day round trip, the approximate cost doubles. If the stay includes overnights, a nightly fee applies — generally equal to half a flight hour per night (some aircraft charge a full hour).",
      },
    },
    {
      "@type": "Question",
      name: "What's included and what makes a private flight's price vary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The price depends on the route, aircraft type, passenger count, overnights, crew waiting times, airport fees and availability. That's why every Numen Aviation trip is quoted individually: we don't sell a seat, we design the whole trip.",
      },
    },
    {
      "@type": "Question",
      name: "How many passengers fit in a Learjet 35 or Hawker 800A?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Learjet 35 seats up to 7 passengers, though we recommend a maximum of 6 for comfort. The Hawker 800A accommodates up to 8 passengers and includes an onboard lavatory — ideal for longer international routes.",
      },
    },
  ],
};

const CuantoCuestaJetPrivado = () => {
  const { lang, lp } = useLang();
  const en = lang === "en";
  const TITLE = en ? TITLE_EN : TITLE_ES;
  const DESCRIPTION = en ? DESCRIPTION_EN : DESCRIPTION_ES;
  const CATEGORY = en ? "Briefing · Pricing · 2026" : "Briefing · Precios · 2026";

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
        image: [`${SITE_URL}/og-cuanto-cuesta-jet-privado-mexico-2026.jpg`],
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-numen.png` },
        },
        mainEntityOfPage: `${SITE_URL}${en ? "/en" : ""}${PATH}`,
      },
      buildBreadcrumb({
        path: PATH,
        trail: [
          { name: "Briefing", item: `${SITE_URL}/briefing` },
          { name: TITLE, item: `${SITE_URL}${PATH}` },
        ],
      })!,
      en ? FAQ_LD_EN : FAQ_LD_ES,
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
            to={lp("/briefing")}
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase text-fg-3 hover:text-jade transition-colors no-underline mb-12"
            style={{ letterSpacing: "0.2em" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {en ? "Back to Briefing" : "Volver al Briefing"}
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
              {READ_MIN} {en ? "min read" : "min de lectura"}
            </span>
          </div>

          <div className="briefing-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{en ? BODY_EN : BODY_ES}</ReactMarkdown>
          </div>

          <RelatedLinks path={PATH} />

          {/* CTA */}
          <div className="mt-16 p-8 border border-jade-soft bg-bg-3/40">
            <div
              className="text-[0.65rem] uppercase text-jade mb-3"
              style={{ letterSpacing: "0.28em" }}
            >
              Numen Aviation
            </div>
            <h3 className="text-xl font-light text-foreground mb-2">
              {en ? "Your tailor-made quote" : "Tu cotización a la medida"}
            </h3>
            <p className="text-sm text-fg-2 mb-5">
              {en
                ? "Tell us your route, dates and passenger count. You'll have an exact price in under an hour."
                : "Cuéntanos tu ruta, fechas y número de pasajeros. Tendrás un precio exacto en menos de una hora."}
            </p>
            <a
              href={waLink(en ? "Hi, I'd like a tailor-made private flight quote." : "Hola, quisiera cotizar un vuelo privado a la medida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase text-background bg-jade px-6 py-3 hover:bg-jade-light transition-all no-underline shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)]"
              style={{ letterSpacing: "0.2em" }}
            >
              {en ? "Quote via WhatsApp" : "Cotizar por WhatsApp"}
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

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

const PATH = "/guia-fbo-toluca";
const TITLE = "Guía del FBO en Toluca (MMTO)";
const DESCRIPTION =
  "Cómo funciona realmente una salida en jet privado desde el aeropuerto de Toluca (MMTO): qué es un FBO, proceso paso a paso, tiempos, documentación y por qué Toluca es la mejor base.";
const DATE = "2026-01-15";
const READ_MIN = 6;
const CATEGORY = "Briefing · Toluca · MMTO";

const BODY = `Volar en jet privado no se parece en nada a tomar un vuelo comercial — y gran parte de esa diferencia ocurre en tierra, en un espacio llamado **FBO**. Si vas a salir desde el aeropuerto de Toluca (MMTO), esta guía te explica exactamente qué esperar, desde que llegas en auto hasta que despegas.

## ¿Qué es un FBO?

FBO son las siglas de **Fixed-Base Operator** (operador de base fija). En términos prácticos, es la **terminal privada de aviación ejecutiva**: un edificio independiente de la terminal comercial donde los pasajeros de jets privados llegan, se identifican y abordan directamente desde la plataforma.

A diferencia de una terminal comercial, en el FBO no hay filas de documentación, ni controles masivos, ni salas de espera saturadas. Llegas en tu auto prácticamente hasta la aeronave, un agente te recibe, y tu equipaje se carga directamente al avión. Es la razón por la que una salida privada puede completarse en **15 minutos** en lugar de dos horas.

## El FBO de Toluca (MMTO), paso a paso

El Aeropuerto Internacional Licenciado Adolfo López Mateos (código OACI **MMTO**), ubicado en Toluca, es la base de operaciones de Numen Aviation. Así es una salida típica:

### 1. Llegada al FBO
Llegas en auto directamente a la terminal privada. No necesitas pasar por la terminal comercial. El estacionamiento y el acceso son privados y discretos.

### 2. Identificación y registro
Presentas tu identificación oficial (o pasaporte en vuelos internacionales). El registro toma minutos; no hay mostradores ni colas.

### 3. Equipaje a la aeronave
Tu equipaje se traslada directamente al avión. No se documenta en banda ni se recoge en carrusel a la llegada.

### 4. Abordaje desde plataforma
Caminas de la sala del FBO al jet en la plataforma. Sin transportes lejanos ni puentes de abordaje. La tripulación te recibe a bordo.

### 5. Despegue a tu hora
La salida se ajusta a tu agenda, no al revés. Tú defines la hora de despegue, incluso con avisos de última hora.

## ¿Cuánto tiempo antes hay que llegar?

Una de las mayores ventajas del FBO es el tiempo. Como referencia general:

- **Vuelos nacionales:** de 15 a 20 minutos antes de la hora de salida.
- **Vuelos internacionales:** de 30 a 40 minutos, para completar migración y aduana en la terminal privada.

Compara eso con las dos o tres horas de antelación recomendadas en un vuelo comercial internacional.

## Documentación que necesitas

Para el pasajero, los requisitos son sencillos. Numen Aviation se encarga de toda la documentación operativa de la aeronave y de los permisos; tú solo necesitas:

- **Vuelos nacionales:** una identificación oficial vigente (INE, pasaporte o licencia).
- **Vuelos internacionales:** pasaporte vigente y, según el destino, la visa correspondiente.

Si tienes dudas sobre requisitos para un destino específico, nuestro equipo te asesora antes del vuelo. Revisa también nuestra guía sobre [aduana y migración en vuelos privados](/briefing/tramites-aduanales-jet-privado-mexico) para destinos internacionales.

## Por qué Toluca (MMTO) y no el AICM

Para quien vuela desde la Ciudad de México y su zona metropolitana, Toluca ofrece ventajas concretas frente al Aeropuerto Internacional de la Ciudad de México (AICM / MMMX):

| Factor                 | Toluca (MMTO)        | AICM (MMMX)               |
|------------------------|----------------------|---------------------------|
| Saturación             | Baja, operación ágil | Alta, slots limitados     |
| Slots aviación privada | Flexibles            | Restringidos y competidos |
| Acceso a plataforma    | Directo desde el FBO | A través de terminal      |
| Desde Santa Fe         | ≈ 20 minutos         | ≈ 45–70 minutos           |
| Desde Polanco          | ≈ 35 minutos         | ≈ 40–60 minutos           |
| Discreción             | Alta                 | Limitada                  |

El resultado es una salida más rápida, predecible y privada. Por eso Toluca es la **base exclusiva de Numen Aviation** para vuelos privados en el centro del país.

## Listo para volar desde Toluca

Desde el FBO de Toluca operamos rutas directas a los principales destinos de México, Estados Unidos, el Caribe y Centroamérica. Conoce algunas de nuestras rutas más solicitadas: [Cancún](/rutas/cdmx-cancun), [Los Cabos](/rutas/cdmx-los-cabos), [Miami](/rutas/cdmx-miami) y [Monterrey](/rutas/cdmx-monterrey).

## Preguntas frecuentes

### ¿Qué es un FBO en el aeropuerto de Toluca?
Un FBO (Fixed-Base Operator) es la terminal privada de aviación ejecutiva. En Toluca (MMTO) es el espacio donde llegas en auto, te identificas y abordas tu jet privado directamente desde la plataforma, sin filas, sin terminal comercial y sin documentar maletas en banda.

### ¿Cuánto tiempo antes hay que llegar al FBO de Toluca?
Para vuelos nacionales basta con llegar 15 a 20 minutos antes de la hora de salida. Para vuelos internacionales recomendamos 30 a 40 minutos para completar migración y aduana en la terminal privada.

### ¿Por qué salir desde Toluca (MMTO) y no desde el AICM?
Toluca opera con menos saturación que el AICM (MMMX), ofrece slots más flexibles para aviación privada, acceso directo a plataforma desde el FBO y está a 20 minutos de Santa Fe y 35 de Polanco. El resultado es una salida más rápida, predecible y discreta.

### ¿Qué documentos necesito para abordar un jet privado en Toluca?
Para vuelos nacionales, una identificación oficial vigente. Para vuelos internacionales, pasaporte vigente y, según el destino, visa. Numen Aviation coordina la documentación operativa de la aeronave; tú solo presentas tu identificación al llegar al FBO.
`;

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un FBO en el aeropuerto de Toluca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un FBO (Fixed-Base Operator) es la terminal privada de aviación ejecutiva. En Toluca (MMTO) es el espacio donde llegas en auto, te identificas y abordas tu jet privado directamente desde la plataforma, sin filas, sin terminal comercial y sin documentar maletas en banda.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo antes hay que llegar al FBO de Toluca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para vuelos nacionales basta con llegar 15 a 20 minutos antes de la hora de salida. Para vuelos internacionales recomendamos 30 a 40 minutos para completar migración y aduana en la terminal privada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué salir desde Toluca (MMTO) y no desde el AICM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toluca opera con menos saturación que el AICM (MMMX), ofrece slots más flexibles para aviación privada, acceso directo a plataforma desde el FBO y está a 20 minutos de Santa Fe y 35 de Polanco. El resultado es una salida más rápida, predecible y discreta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué documentos necesito para abordar un jet privado en Toluca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para vuelos nacionales, una identificación oficial vigente. Para vuelos internacionales, pasaporte vigente y, según el destino, visa. Numen Aviation coordina la documentación operativa de la aeronave; tú solo presentas tu identificación al llegar al FBO.",
      },
    },
  ],
};

const GuiaFboToluca = () => {
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
            <h3 className="text-xl font-light text-foreground mb-2">¿Listo para volar?</h3>
            <p className="text-sm text-fg-2 mb-5">
              Cotización en menos de 2 horas. Operación 24/7 desde MMTO Toluca.
            </p>
            <a
              href={waLink("Hola, quisiera cotizar un vuelo privado desde Toluca.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase text-background bg-jade px-6 py-3 hover:bg-jade-light transition-all no-underline shadow-[0_0_24px_-4px_hsl(var(--jade)/0.6)]"
              style={{ letterSpacing: "0.2em" }}
            >
              Solicitar cotización
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

export default GuiaFboToluca;

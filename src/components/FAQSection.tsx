import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/i18n/LanguageContext";

type QA = { q: string; a: string };

const FAQS: { es: QA[]; en: QA[] } = {
  es: [
    {
      q: "¿Cuánto cuesta rentar un jet privado desde Toluca?",
      a: "El costo varía según el tipo de aeronave, destino y duración del vuelo. Un vuelo en light jet desde Toluca (MMTO) a Cancún comienza desde aproximadamente $12,000 USD. Solicita una cotización sin compromiso y te respondemos en menos de 30 minutos.",
    },
    {
      q: "¿Por qué operan desde Toluca y no desde el AICM?",
      a: "El Aeropuerto Internacional de Toluca (MMTO) ofrece tiempos de espera mínimos, acceso directo a pista sin congestión, hangares privados y una ubicación estratégica a 40 minutos de Santa Fe y Polanco. Es la base preferida de la aviación ejecutiva en el Valle de México.",
    },
    {
      q: "¿Con cuánta anticipación debo reservar un vuelo?",
      a: "Podemos coordinar un vuelo chárter en tan solo 2 a 4 horas para rutas nacionales. Para vuelos internacionales recomendamos al menos 24-48 horas. Los empty legs tienen disponibilidad inmediata.",
    },
    {
      q: "¿Qué incluye el precio de un vuelo charter?",
      a: "Nuestra cotización es transparente e incluye: tiempo de vuelo, ferry (posicionamiento), handling aeroportuario, IVA, servicios FBO y coordinación completa. Sin cargos ocultos ni sorpresas al cierre.",
    },
    {
      q: "¿Qué documentación necesito para volar en jet privado?",
      a: "Para vuelos nacionales solo necesitas una identificación oficial vigente (INE o pasaporte). Para vuelos internacionales se requiere pasaporte vigente y, según el destino, visa correspondiente. Nosotros coordinamos todos los permisos de vuelo y trámites ante AFAC.",
    },
    {
      q: "¿Qué es un empty leg y cómo puedo aprovecharlo?",
      a: "Un empty leg es un vuelo de reposicionamiento que ya está programado y se ofrece con descuentos de hasta 75% sobre la tarifa regular. Publicamos disponibilidad actualizada en nuestra sección de Empty Legs. Es la forma más accesible de volar en jet privado.",
    },
    {
      q: "¿Numen Aviation es operador o broker?",
      a: "Somos una correduría independiente (broker). No operamos aeronaves propias, lo que nos permite comparar objetivamente entre operadores certificados en México y Las Américas para conseguirte la mejor aeronave al mejor precio, sin conflictos de interés.",
    },
    {
      q: "¿Puedo solicitar catering, transporte terrestre u otros servicios?",
      a: "Sí. Coordinamos servicios complementarios como catering gourmet, transporte terrestre privado (SUV blindada, helicóptero), equipaje especial y cualquier requerimiento que haga tu experiencia perfecta. Tu asesor dedicado se encarga de todo.",
    },
  ],
  en: [
    {
      q: "How much does it cost to charter a private jet from Toluca?",
      a: "Cost varies by aircraft type, destination and flight duration. A light jet from Toluca (MMTO) to Cancun starts at approximately $12,000 USD. Request a no-obligation quote and we'll reply in under 30 minutes.",
    },
    {
      q: "Why do you operate from Toluca and not from AICM?",
      a: "Toluca International Airport (MMTO) offers minimal wait times, direct runway access without congestion, private hangars and a strategic location 40 minutes from Santa Fe and Polanco. It is the preferred base for executive aviation in the Valley of Mexico.",
    },
    {
      q: "How far in advance should I book a flight?",
      a: "We can coordinate a charter flight in as little as 2 to 4 hours for domestic routes. For international flights we recommend at least 24-48 hours. Empty legs have immediate availability.",
    },
    {
      q: "What is included in the price of a charter flight?",
      a: "Our quote is transparent and includes: flight time, ferry (positioning), airport handling, VAT, FBO services and full coordination. No hidden fees or last-minute surprises.",
    },
    {
      q: "What documentation do I need to fly on a private jet?",
      a: "For domestic flights you only need a valid official ID (INE or passport). For international flights a valid passport is required and, depending on destination, the corresponding visa. We coordinate all flight permits and AFAC paperwork.",
    },
    {
      q: "What is an empty leg and how can I take advantage of one?",
      a: "An empty leg is a repositioning flight already scheduled and offered at discounts up to 75% off the regular fare. We publish updated availability in our Empty Legs section. It is the most accessible way to fly private.",
    },
    {
      q: "Is Numen Aviation an operator or a broker?",
      a: "We are an independent brokerage. We don't operate our own aircraft, which allows us to objectively compare certified operators across Mexico and the Americas to secure the best aircraft at the best price, with no conflicts of interest.",
    },
    {
      q: "Can I request catering, ground transportation or other services?",
      a: "Yes. We coordinate complementary services such as gourmet catering, private ground transportation (armored SUV, helicopter), special baggage and any requirement that makes your experience perfect. Your dedicated advisor handles everything.",
    },
  ],
};

export const FAQSection = () => {
  const { lang } = useLang();
  const items = FAQS[lang];
  const title = lang === "en" ? "Frequently Asked Questions" : "Preguntas frecuentes";
  const eyebrow = lang === "en" ? "FAQ" : "Preguntas frecuentes";
  const subtitle =
    lang === "en"
      ? "Everything you need to know before your first private flight."
      : "Todo lo que necesitas saber antes de tu primer vuelo privado.";

  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      style={{
        backgroundColor: "#F5F0EB",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
        color: "#1a1a1a",
      }}
    >
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12 md:mb-16 reveal">
          <p
            className="text-[0.62rem] uppercase mb-4"
            style={{ letterSpacing: "0.3em", color: "#6b6b6b" }}
          >
            {eyebrow}
          </p>
          <h2
            className="font-serif font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: "#1a1a1a" }}
          >
            {title}
          </h2>
          <p className="mt-4 text-[0.95rem]" style={{ color: "#5a5a5a" }}>
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3 reveal">
          {items.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border rounded-lg px-5 md:px-6 bg-white/60 transition-colors data-[state=open]:bg-white"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <AccordionTrigger
                className="hover:no-underline py-5 text-left font-semibold text-[16px] md:text-[17px] focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ color: "#1a1a1a" }}
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent
                className="pb-5 text-[15px] md:text-[16px] leading-relaxed"
                style={{ color: "#4a4a4a" }}
              >
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

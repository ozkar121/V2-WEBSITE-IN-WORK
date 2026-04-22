import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { useSEO } from "@/hooks/useSEO";
import { waLink } from "@/lib/site";

const EmptyLegs = () => {
  useSEO({
    title: "Empty Legs México | Vuelos Privados hasta 75% Descuento — Numen Aviation",
    description: "Empty legs en México, EUA y el Caribe hasta 75% más baratos que un charter completo. Disponibilidad actualizada.",
  });

  return (
    <>
      <Navbar />
      <section className="min-h-[60vh] pt-32 pb-20 flex flex-col justify-end" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}>
        <p className="text-[0.65rem] uppercase text-fg-3 mb-5" style={{ letterSpacing: "0.22em" }}>
          <a href="/" className="text-jade no-underline hover:underline">Numen Aviation</a> &nbsp;/&nbsp; Empty Legs
        </p>
        <p className="eyebrow mb-5">Exclusivo · Disponibilidad Limitada</p>
        <h1 className="display-title max-w-2xl">Vuela <em>más</em><br />por menos.</h1>
        <div className="gold-rule" />
        <p className="text-[0.95rem] text-fg-3 leading-relaxed max-w-xl mb-10">
          Los vuelos empty leg son traslados de reposicionamiento disponibles hasta 75% por debajo del precio completo. Página completa con disponibilidad en tiempo real próximamente.
        </p>
        <a href={waLink("Hola, quisiera info sobre empty legs disponibles.")} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">
          Ver disponibilidad por WhatsApp →
        </a>
      </section>
      <Footer />
      <WhatsAppFAB />
    </>
  );
};

export default EmptyLegs;

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

const NotFound = () => {
  const location = useLocation();
  useSEO({
    title: "Página no encontrada · Numen Aviation",
    description: "La página que buscas no existe. Vuelve al inicio o contáctanos por WhatsApp.",
    noindex: true,
  });

  useEffect(() => {
    console.error("404: ruta inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
          Página no <em className="italic text-jade-light">encontrada.</em>
        </h1>
        <div className="gold-rule mx-auto" />
        <p className="text-[0.9rem] text-fg-3 mb-8 mt-6">
          La página que buscas no existe o fue movida. Volvamos al inicio.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

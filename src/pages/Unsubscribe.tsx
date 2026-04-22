import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "loading" | "valid" | "already" | "invalid" | "submitting" | "done" | "error";

const Unsubscribe = () => {
  useSEO({ title: "Cancelar suscripción · Numen Aviation", description: "Gestiona tus preferencias de email." });
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
      headers: { apikey: SUPABASE_ANON_KEY },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === true) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("error"));
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState("submitting");
    try {
      const r = await fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY },
        body: JSON.stringify({ token }),
      });
      const data = await r.json();
      if (data.success || data.reason === "already_unsubscribed") setState("done");
      else setState("error");
    } catch {
      setState("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-md w-full bg-bg-2/45 border border-foreground/10 p-10 text-center">
          <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.25em" }}>
            Numen Aviation
          </span>
          <h1 className="font-serif text-2xl font-light mt-3 mb-6">
            {state === "loading" && "Verificando..."}
            {state === "valid" && "Cancelar suscripción"}
            {state === "submitting" && "Procesando..."}
            {state === "done" && "Listo, te dimos de baja."}
            {state === "already" && "Ya estabas dado de baja."}
            {state === "invalid" && "Enlace inválido o expirado."}
            {state === "error" && "Algo salió mal."}
          </h1>

          {state === "valid" && (
            <>
              <p className="text-fg-3 text-sm mb-6">
                Si confirmas, dejarás de recibir nuestros emails.
              </p>
              <button onClick={confirm} className="btn-primary">
                Confirmar baja
              </button>
            </>
          )}

          {(state === "done" || state === "already") && (
            <p className="text-fg-3 text-sm">
              Si fue un error, escríbenos a <a className="text-jade" href="mailto:operaciones@numen-aviation.com">operaciones@numen-aviation.com</a>.
            </p>
          )}

          {(state === "invalid" || state === "error") && (
            <Link to="/" className="text-jade text-sm hover:text-foreground transition-colors">
              ← Volver al inicio
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Unsubscribe;

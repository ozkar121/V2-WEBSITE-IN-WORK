import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";
import logoIcon from "@/assets/numen-symbol.svg";

const schema = z.object({
  email: z.string().trim().email("Email inválido").max(255),
  password: z.string().min(6, "Mínimo 6 caracteres").max(100),
});

const Auth = () => {
  const seo = useSEO({ title: "Acceso · Numen Aviation", noindex: true });
  const { session, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || "/admin/aeronaves";

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && session) navigate(from, { replace: true });
  }, [session, loading, navigate, from]);

  if (loading) return null;
  if (session) return <Navigate to={from} replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast.success("Cuenta creada. Solicita acceso admin al equipo.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) throw error;
        toast.success("Sesión iniciada");
      }
    } catch (err) {
      console.error("Auth error:", err);
      const msg = mode === "signup"
        ? "Si el email es válido, recibirás instrucciones por correo."
        : "Credenciales incorrectas.";
      toast.error(msg);
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin + "/auth",
      });
      if (result.error) {
        toast.error("No se pudo iniciar con Google");
        setBusy(false);
        return;
      }
      if (result.redirected) return;
    } catch {
      toast.error("Error con Google");
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <Link to="/" className="flex items-center gap-2.5 mb-12">
        <img src={logoIcon} alt="Numen Aviation" className="h-4 w-auto" />
        <span className="text-[0.78rem] uppercase text-foreground font-light" style={{ letterSpacing: "0.25em" }}>
          Numen Aviation
        </span>
      </Link>

      <div className="w-full max-w-md border border-jade-soft bg-bg-2 p-10">
        <p className="eyebrow mb-3">Panel Privado</p>
        <h1 className="font-serif text-3xl font-light text-foreground mb-2">
          {mode === "signin" ? "Iniciar sesión" : "Crear cuenta"}
        </h1>
        <div className="gold-rule" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <label className="flex flex-col gap-2">
            <span className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border border-jade-soft px-4 py-3 text-[0.9rem] text-foreground focus:border-jade outline-none transition-colors"
              autoComplete="email"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>Contraseña</span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background border border-jade-soft px-4 py-3 text-[0.9rem] text-foreground focus:border-jade outline-none transition-colors"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
            />
          </label>
          <button type="submit" disabled={busy} className="btn-primary mt-2 disabled:opacity-50">
            {busy ? "Procesando..." : mode === "signin" ? "Entrar" : "Crear cuenta"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-jade-soft" />
          <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>o</span>
          <div className="flex-1 h-px bg-jade-soft" />
        </div>

        <button
          onClick={handleGoogle}
          disabled={busy}
          className="btn-secondary w-full flex items-center justify-center gap-3 disabled:opacity-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continuar con Google
        </button>

        <button
          onClick={() => setMode((m) => (m === "signin" ? "signup" : "signin"))}
          className="w-full text-[0.7rem] uppercase text-fg-3 hover:text-jade mt-6 transition-colors"
          style={{ letterSpacing: "0.18em" }}
        >
          {mode === "signin" ? "¿No tienes cuenta? Crear una" : "Ya tengo cuenta — Entrar"}
        </button>
      </div>

      <Link to="/" className="mt-8 text-[0.7rem] uppercase text-fg-3 hover:text-jade" style={{ letterSpacing: "0.2em" }}>
        ← Volver al sitio
      </Link>
    </div>
  );
};

export default Auth;

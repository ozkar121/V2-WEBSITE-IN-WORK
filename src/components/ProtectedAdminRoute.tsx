import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const ProtectedAdminRoute = ({ children }: { children: JSX.Element }) => {
  const { session, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-[0.7rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>
          Cargando...
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background px-6 text-center">
        <p className="eyebrow">Acceso Restringido</p>
        <h1 className="font-serif text-3xl font-light text-foreground">No autorizado.</h1>
        <p className="text-[0.85rem] text-fg-3 max-w-md">
          Tu cuenta no tiene permisos de administrador. Contacta al equipo de Numen Aviation para solicitar acceso.
        </p>
        <a href="/" className="btn-secondary mt-4">Volver al inicio</a>
      </div>
    );
  }

  return children;
};

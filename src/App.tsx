import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ProtectedAdminRoute } from "@/components/ProtectedAdminRoute";
import Index from "./pages/Index.tsx";
import EmptyLegs from "./pages/EmptyLegs.tsx";
import Cargo from "./pages/Cargo.tsx";
import AmbulanciasAereas from "./pages/AmbulanciasAereas.tsx";
import ChartersGrupos from "./pages/ChartersGrupos.tsx";
import RoutePage from "./pages/RoutePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminAircraft from "./pages/AdminAircraft.tsx";
import AdminEmptyLegs from "./pages/AdminEmptyLegs.tsx";
import Auth from "./pages/Auth.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/empty-legs" element={<EmptyLegs />} />
            <Route path="/vuelos-de-carga" element={<Cargo />} />
            <Route path="/servicios/ambulancias-aereas" element={<AmbulanciasAereas />} />
            <Route path="/servicios/charters-grupos" element={<ChartersGrupos />} />
            <Route path="/rutas/:slug" element={<RoutePage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route
              path="/admin/aeronaves"
              element={
                <ProtectedAdminRoute>
                  <AdminAircraft />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="/admin/empty-legs"
              element={
                <ProtectedAdminRoute>
                  <AdminEmptyLegs />
                </ProtectedAdminRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

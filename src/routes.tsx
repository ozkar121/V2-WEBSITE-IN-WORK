import type { RouteRecord } from "vite-react-ssg";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ProtectedAdminRoute } from "@/components/ProtectedAdminRoute";
import { ScrollToTop } from "@/components/ScrollToTop";
import { DotPattern } from "@/components/DotPattern";

import Index from "./pages/Index.tsx";
import EmptyLegs from "./pages/EmptyLegs.tsx";
import Cargo from "./pages/Cargo.tsx";
import AmbulanciasAereas from "./pages/AmbulanciasAereas.tsx";
import ChartersGrupos from "./pages/ChartersGrupos.tsx";
import RoutePage from "./pages/RoutePage.tsx";
import Rutas from "./pages/Rutas.tsx";
import Briefing from "./pages/Briefing.tsx";
import Fleet from "./pages/Fleet.tsx";
import BriefingPost from "./pages/BriefingPost.tsx";
import GuiaFboToluca from "./pages/GuiaFboToluca.tsx";
import CuantoCuestaJetPrivado from "./pages/CuantoCuestaJetPrivado.tsx";
import RentaAvionPrivado from "./pages/RentaAvionPrivado.tsx";
import Nosotros from "./pages/Nosotros.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminAircraft from "./pages/AdminAircraft.tsx";
import AdminEmptyLegs from "./pages/AdminEmptyLegs.tsx";
import Auth from "./pages/Auth.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";

const queryClient = new QueryClient();

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <AuthProvider>
          <ScrollToTop />
          {/* Textura de puntos global (Brand Book: dotted patterns en gris sobre negro) */}
          <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
            {/* gap/maxR chicos: el viewBox se estira al viewport (~2.5x), así los puntos quedan finos */}
            <DotPattern origin="uniform" color="hsl(var(--jade))" opacity={0.6} gap={19} maxR={1.4} seed={99} className="w-full h-full" />
          </div>
          <Outlet />
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

// Rutas con versión en inglés bajo /en/ (mismo componente; el idioma se deriva
// de la URL en LanguageProvider). Las páginas solo-español (ambulancia,
// charters, guías) NO se montan bajo /en hasta que estén traducidas.
const EN_CHILDREN: RouteRecord[] = [
  { index: true, element: <Index /> },
  { path: "flota", element: <Fleet /> },
  { path: "fleet", element: <Fleet /> },
  { path: "empty-legs", element: <EmptyLegs /> },
  { path: "vuelos-de-carga", element: <Cargo /> },
  { path: "ambulancia-aerea", element: <AmbulanciasAereas /> },
  { path: "renta-de-avion-privado", element: <RentaAvionPrivado /> },
  { path: "charters-grupales", element: <ChartersGrupos /> },
  { path: "rutas", element: <Rutas /> },
  { path: "rutas/:slug", element: <RoutePage /> },
  { path: "briefing", element: <Briefing /> },
  { path: "briefing/:slug", element: <BriefingPost /> },
  { path: "guia-fbo-toluca", element: <GuiaFboToluca /> },
  { path: "cuanto-cuesta-jet-privado-mexico-2026", element: <CuantoCuestaJetPrivado /> },
  { path: "nosotros", element: <Nosotros /> },
];

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "flota", element: <Fleet /> },
      { path: "fleet", element: <Fleet /> },
      { path: "empty-legs", element: <EmptyLegs /> },
      { path: "vuelos-de-carga", element: <Cargo /> },
      { path: "ambulancia-aerea", element: <AmbulanciasAereas /> },
      { path: "renta-de-avion-privado", element: <RentaAvionPrivado /> },
      { path: "charters-grupales", element: <ChartersGrupos /> },
      // Legacy redirects (kept as direct renders)
      { path: "servicios/ambulancias-aereas", element: <AmbulanciasAereas /> },
      { path: "servicios/charters-grupos", element: <ChartersGrupos /> },
      { path: "rutas", element: <Rutas /> },
      { path: "rutas/:slug", element: <RoutePage /> },
      { path: "briefing", element: <Briefing /> },
      { path: "briefing/:slug", element: <BriefingPost /> },
      { path: "guia-fbo-toluca", element: <GuiaFboToluca /> },
      { path: "cuanto-cuesta-jet-privado-mexico-2026", element: <CuantoCuestaJetPrivado /> },
      { path: "nosotros", element: <Nosotros /> },
      { path: "en", children: EN_CHILDREN },
      { path: "auth", element: <Auth /> },
      { path: "unsubscribe", element: <Unsubscribe /> },
      {
        path: "admin/aeronaves",
        element: (
          <ProtectedAdminRoute>
            <AdminAircraft />
          </ProtectedAdminRoute>
        ),
      },
      {
        path: "admin/empty-legs",
        element: (
          <ProtectedAdminRoute>
            <AdminEmptyLegs />
          </ProtectedAdminRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

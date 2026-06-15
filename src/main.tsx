import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// Auto-recuperación tras un redespliegue: si el navegador tiene un index.html
// viejo en caché e intenta cargar un chunk de /assets/ que ya no existe, Vite
// emite "vite:preloadError". Recargamos una sola vez (guard en sessionStorage)
// para traer el HTML/assets nuevos y evitar la pantalla de error.
if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", () => {
    if (sessionStorage.getItem("numen_reloaded_for_chunk") !== "1") {
      sessionStorage.setItem("numen_reloaded_for_chunk", "1");
      window.location.reload();
    }
  });
  // Si la carga termina bien, limpiamos el guard para futuros despliegues.
  window.addEventListener("load", () => {
    sessionStorage.removeItem("numen_reloaded_for_chunk");
  });
}

export const createRoot = ViteReactSSG({
  routes,
  basename: "/",
});

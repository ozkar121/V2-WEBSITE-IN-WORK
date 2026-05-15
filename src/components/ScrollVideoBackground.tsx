import { useEffect, useRef, useState } from "react";

/**
 * Fondo de video en loop, fijo y full-screen detrás del contenido.
 * - Montaje diferido (idle callback) para no competir con el LCP.
 * - Fade-in al estar listo.
 * - Manejo de error/autoplay bloqueado: queda el fondo oscuro sin romper nada.
 */
export const ScrollVideoBackground = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mount, setMount] = useState(false);
  const [ready, setReady] = useState(false);

  // Diferimos el montaje hasta después del primer paint para no bloquear el LCP
  useEffect(() => {
    const w = window as any;
    const start = () => setMount(true);
    const id = w.requestIdleCallback
      ? w.requestIdleCallback(start, { timeout: 1500 })
      : window.setTimeout(start, 600);
    return () => {
      if (w.cancelIdleCallback && typeof id === "number") w.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  // Pausa el video cuando la pestaña no está visible (ahorra CPU/batería)
  useEffect(() => {
    if (!mount) return;
    const onVis = () => {
      const v = videoRef.current;
      if (!v) return;
      if (document.hidden) v.pause();
      else v.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [mount]);

  const handleCanPlay = () => {
    setReady(true);
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  };

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* Fondo base — visible mientras el video carga o si falla */}
      <div
        className="absolute inset-0 bg-background"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 30% 30%, hsl(var(--jade-dark) / 0.18) 0%, transparent 70%)",
        }}
      />
      {mount && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={handleCanPlay}
          onError={() => setReady(false)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: ready ? 1 : 0, willChange: "opacity" }}
        />
      )}
      {/* Overlay para legibilidad del contenido — más ligero en móvil para que el video se vea mejor */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background) / 0.78) 0%, hsl(var(--background) / 0.86) 50%, hsl(var(--background) / 0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.65) 50%, hsl(var(--background) / 0.78) 100%)",
        }}
      />
    </div>
  );
};

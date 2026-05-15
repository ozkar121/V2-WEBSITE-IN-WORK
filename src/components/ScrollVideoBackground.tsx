import { useEffect, useRef } from "react";

/**
 * Fondo de video controlado por scroll.
 * El currentTime del video se vincula a la posición de scroll de la página,
 * de modo que al bajar/subir el avión avanza/retrocede con el usuario.
 */
export const ScrollVideoBackground = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const durationRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => {
      durationRef.current = video.duration || 0;
      updateTarget();
    };

    const updateTarget = () => {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      targetTimeRef.current = progress * (durationRef.current || 0);
      if (rafRef.current == null) tick();
    };

    const tick = () => {
      const v = videoRef.current;
      if (!v || !durationRef.current) {
        rafRef.current = null;
        return;
      }
      // Lerp suave hacia el target para evitar saltos bruscos
      const diff = targetTimeRef.current - currentTimeRef.current;
      if (Math.abs(diff) < 0.005) {
        currentTimeRef.current = targetTimeRef.current;
        try { v.currentTime = currentTimeRef.current; } catch {}
        rafRef.current = null;
        return;
      }
      currentTimeRef.current += diff * 0.15;
      try { v.currentTime = currentTimeRef.current; } catch {}
      rafRef.current = requestAnimationFrame(tick);
    };

    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
      {/* Overlay para legibilidad del contenido sobre el video */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background) / 0.78) 0%, hsl(var(--background) / 0.86) 50%, hsl(var(--background) / 0.92) 100%)",
        }}
      />
    </div>
  );
};

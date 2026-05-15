import { useEffect, useRef } from "react";

/**
 * Fondo de video controlado por scroll.
 * El video está re-codificado como all-intra (cada frame es keyframe),
 * por lo que hacer seek por scroll es prácticamente instantáneo.
 */
export const ScrollVideoBackground = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const tickingRef = useRef(false);
  const lastSetRef = useRef(-1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => {
      durationRef.current = video.duration || 0;
      apply();
    };

    const apply = () => {
      const v = videoRef.current;
      const dur = durationRef.current;
      if (!v || !dur) return;
      const doc = document.documentElement;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      const t = progress * dur;
      // Evita escrituras redundantes (~1 frame de tolerancia)
      if (Math.abs(t - lastSetRef.current) < 1 / 24) return;
      lastSetRef.current = t;
      try { v.currentTime = t; } catch {}
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        apply();
      });
    };

    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        // @ts-expect-error atributo válido para Safari/iOS
        disableremoteplayback=""
        className="w-full h-full object-cover"
      />
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

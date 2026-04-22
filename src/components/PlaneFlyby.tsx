import { useEffect, useRef, useState } from "react";

type Direction = "ltr" | "rtl";

interface PlaneFlybyProps {
  /** Dirección del cruce. Alterna entre secciones para sentir movimiento */
  direction?: Direction;
  /** Posición vertical relativa dentro de la franja (0-100, en %) */
  verticalPosition?: number;
  /** Tamaño base del avión en px */
  size?: number;
  /** Multiplicador de velocidad parallax. >1 = se mueve más rápido que el scroll */
  speed?: number;
}

/**
 * Franja decorativa de transición entre secciones con un jet cruzando.
 * - Aparece sólo cuando entra al viewport (IntersectionObserver)
 * - Avanza con el scroll (transform translate3d, GPU-accelerated)
 * - Estela jade muy sutil, on-brand
 * - Respeta prefers-reduced-motion
 */
export const PlaneFlyby = ({
  direction = "ltr",
  verticalPosition = 50,
  size = 56,
  speed = 1.4,
}: PlaneFlybyProps) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const strip = stripRef.current;
    const plane = planeRef.current;
    if (!strip || !plane) return;

    let raf = 0;
    const update = () => {
      const rect = strip.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progreso 0..1 conforme la franja cruza el viewport
      const total = vh + rect.height;
      const passed = vh - rect.top;
      const progress = Math.min(1, Math.max(0, passed / total));

      // Posición horizontal: -20% a 120% para que entre y salga totalmente
      const range = 140 * speed;
      const start = direction === "ltr" ? -20 : 120;
      const end = direction === "ltr" ? 120 : -20;
      const eased = easeInOutQuad(progress);
      const x = start + (end - start) * Math.min(1, eased * (range / 140));

      // Subida ligera + leve oscilación = sensación de vuelo
      const wobble = Math.sin(progress * Math.PI * 2) * 6;
      const lift = -progress * 14;

      plane.style.transform = `translate3d(${x}vw, ${lift + wobble}px, 0) scaleX(${
        direction === "ltr" ? 1 : -1
      })`;
      // Opacidad: aparece y desaparece en los extremos
      const opacity = Math.sin(progress * Math.PI);
      plane.style.opacity = `${Math.max(0, opacity).toFixed(3)}`;

      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [inView, reducedMotion, direction, speed]);

  return (
    <div
      ref={stripRef}
      aria-hidden="true"
      className="relative w-full overflow-hidden pointer-events-none select-none"
      style={{ height: "clamp(80px, 12vh, 140px)" }}
    >
      {/* Línea horizonte muy sutil */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: `${verticalPosition}%`,
          height: 1,
          background:
            "linear-gradient(to right, transparent 0%, hsl(var(--jade) / 0.18) 30%, hsl(var(--jade) / 0.18) 70%, transparent 100%)",
        }}
      />

      {/* Avión */}
      <div
        ref={planeRef}
        className="absolute will-change-transform"
        style={{
          top: `calc(${verticalPosition}% - ${size / 2}px)`,
          left: 0,
          width: size,
          height: size,
          opacity: 0,
          transition: reducedMotion ? "opacity 0.4s ease-out" : undefined,
        }}
      >
        {/* Estela */}
        <svg
          width={size * 3}
          height={size}
          viewBox={`0 0 ${size * 3} ${size}`}
          className="absolute"
          style={{
            top: 0,
            left: direction === "ltr" ? -(size * 2.4) : size * 0.4,
          }}
        >
          <defs>
            <linearGradient
              id={`trail-grad-${direction}-${verticalPosition}`}
              x1={direction === "ltr" ? "0%" : "100%"}
              x2={direction === "ltr" ? "100%" : "0%"}
              y1="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="hsl(162 51% 53%)" stopOpacity="0" />
              <stop offset="80%" stopColor="hsl(162 51% 53%)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(162 51% 53%)" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <path
            ref={trailRef}
            d={`M0 ${size / 2} L${size * 2.4} ${size / 2}`}
            stroke={`url(#trail-grad-${direction}-${verticalPosition})`}
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        {/* Silueta del jet */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          className="absolute inset-0"
          style={{
            filter:
              "drop-shadow(0 0 6px hsl(162 51% 53% / 0.35)) drop-shadow(0 2px 4px hsl(0 0% 0% / 0.4))",
          }}
        >
          {/* Jet privado lateral, estilizado */}
          <path
            d="M2 33 L18 30 L26 22 L34 22 L30 30 L46 28 L52 20 L56 20 L54 30 L60 30 L62 32 L60 34 L54 34 L56 44 L52 44 L46 36 L30 34 L34 42 L26 42 L18 34 L2 33 Z"
            fill="hsl(162 51% 70%)"
            opacity="0.95"
          />
          <path
            d="M2 33 L18 30 L26 22 L34 22 L30 30 L46 28 L52 20 L56 20 L54 30 L60 30 L62 32 L60 34 L54 34 L56 44 L52 44 L46 36 L30 34 L34 42 L26 42 L18 34 L2 33 Z"
            fill="none"
            stroke="hsl(120 9% 94%)"
            strokeWidth="0.4"
            opacity="0.6"
          />
          {/* Ventanillas */}
          <circle cx="38" cy="29" r="0.8" fill="hsl(80 12% 3%)" opacity="0.5" />
          <circle cx="42" cy="29" r="0.8" fill="hsl(80 12% 3%)" opacity="0.5" />
          <circle cx="46" cy="29" r="0.8" fill="hsl(80 12% 3%)" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

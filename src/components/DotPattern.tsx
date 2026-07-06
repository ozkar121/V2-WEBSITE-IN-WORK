import { useMemo, type CSSProperties } from "react";

/**
 * DotPattern — patrón de puntos procedural del Brand Book 2026
 * (Graphic Elements → Dotted Patterns). Replica la lógica del
 * Numen_Dot-Grid-Generator: grid de puntos con seed estable (splitmix32)
 * y gradiente que modula tamaño + opacidad, evocando luces de pista.
 *
 * Decorativo: aria-hidden, pointer-events-none. Usar en grises o verde
 * sobre negro (regla del Brand Book).
 */

type Props = {
  /** Dirección hacia la que crece la densidad del patrón */
  origin?: "left" | "right" | "top" | "bottom";
  /** Color CSS de los puntos (default: verde de marca) */
  color?: string;
  /** Opacidad global del patrón (mantener sutil como fondo) */
  opacity?: number;
  /** Separación del grid en px del viewBox */
  gap?: number;
  /** Radio máximo de punto */
  maxR?: number;
  /** Seed para variar la composición entre secciones */
  seed?: number;
  className?: string;
  style?: CSSProperties;
};

// PRNG con seed estable — mismo algoritmo del generador oficial
function splitmix32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x9e3779b9) | 0;
    let t = a ^ (a >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
  };
}

const VW = 600;
const VH = 600;

export const DotPattern = ({
  origin = "right",
  color = "hsl(var(--jade))",
  opacity = 0.55,
  gap = 26,
  maxR = 3.2,
  seed = 12345,
  className = "",
  style,
}: Props) => {
  const dots = useMemo(() => {
    const rnd = splitmix32(seed);
    const out: { x: number; y: number; r: number; o: number }[] = [];
    for (let x = gap / 2; x < VW; x += gap) {
      for (let y = gap / 2; y < VH; y += gap) {
        // t = progreso del gradiente hacia el origen (0 → 1)
        let t: number;
        switch (origin) {
          case "left": t = 1 - x / VW; break;
          case "top": t = 1 - y / VH; break;
          case "bottom": t = y / VH; break;
          default: t = x / VW;
        }
        t = Math.pow(t, 1.6); // easing como el generador (ease-in)
        if (rnd() > t * 0.9) continue; // densidad crece con t
        out.push({
          x,
          y,
          r: maxR * (0.45 + 0.55 * t) * (0.6 + 0.4 * rnd()),
          o: 0.25 + 0.75 * t * rnd(),
        });
      }
    }
    return out;
  }, [origin, gap, maxR, seed]);

  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, ...style }}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={color} fillOpacity={d.o} />
      ))}
    </svg>
  );
};

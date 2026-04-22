import { useState } from "react";
import { ChevronDown, Rocket, Server, Monitor, RefreshCw, Globe } from "lucide-react";

/**
 * Guía expandible que explica cómo funciona el flujo de publicación
 * y la diferencia entre cambios de frontend (requieren Update) vs
 * backend (despliegue automático).
 *
 * Se muestra dentro del panel de administración para evitar confusiones
 * al actualizar empty legs o fotos de aeronaves.
 */
export const PublishGuide = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="mb-8 border border-fg-3/20 bg-bg-2/40 backdrop-blur-sm"
      aria-label="Guía de publicación"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-bg-2/60 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <Rocket className="w-4 h-4 text-jade" aria-hidden />
          <div>
            <p
              className="text-[0.7rem] uppercase text-jade"
              style={{ letterSpacing: "0.18em" }}
            >
              Guía rápida
            </p>
            <p className="text-sm text-fg-1 mt-0.5">
              ¿Mis cambios ya están en vivo? Frontend vs Backend
            </p>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-fg-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className="px-5 pb-6 pt-2 border-t border-fg-3/10 space-y-6 text-sm text-fg-2">
          {/* Paso 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-jade/40 flex items-center justify-center text-jade text-xs">
              1
            </div>
            <div>
              <p className="text-fg-1 font-medium mb-1 flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-jade" aria-hidden />
                Cambios en el backend → automáticos
              </p>
              <p className="text-fg-3 leading-relaxed">
                Cuando creas, editas o eliminas un <strong>empty leg</strong>, subes una{" "}
                <strong>foto de aeronave</strong> o cualquier dato desde este panel,
                se publica al instante en el sitio público. <strong>No necesitas
                hacer nada más</strong>.
              </p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-jade/40 flex items-center justify-center text-jade text-xs">
              2
            </div>
            <div>
              <p className="text-fg-1 font-medium mb-1 flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5 text-jade" aria-hidden />
                Cambios visuales (frontend) → requieren Update
              </p>
              <p className="text-fg-3 leading-relaxed">
                Si se modifican páginas, textos fijos, colores o estructura del
                sitio (en el editor de Lovable), esos cambios se ven en el
                preview pero <strong>no en el sitio público</strong> hasta que
                hagas clic en <strong>Publish → Update</strong> arriba a la derecha.
              </p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-jade/40 flex items-center justify-center text-jade text-xs">
              3
            </div>
            <div>
              <p className="text-fg-1 font-medium mb-1 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-jade" aria-hidden />
                ¿Cómo verifico que está en vivo?
              </p>
              <p className="text-fg-3 leading-relaxed">
                Abre{" "}
                <a
                  href="/empty-legs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-jade hover:underline"
                >
                  /empty-legs
                </a>{" "}
                en una pestaña nueva (modo incógnito si dudas del caché). Si los
                datos aparecen ahí, ya está publicado.
              </p>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-jade/40 flex items-center justify-center text-jade text-xs">
              4
            </div>
            <div>
              <p className="text-fg-1 font-medium mb-1 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-jade" aria-hidden />
                Dominio personalizado
              </p>
              <p className="text-fg-3 leading-relaxed">
                El dominio (<code className="text-jade">numen-aviation.com</code>) se
                configura una sola vez en{" "}
                <strong>Project Settings → Domains</strong>. Una vez activo, todas
                las actualizaciones futuras (frontend o backend) se sirven
                automáticamente desde ese dominio.
              </p>
            </div>
          </div>

          {/* Resumen */}
          <div className="border-l-2 border-jade pl-4 mt-4">
            <p className="text-fg-2">
              <strong className="text-fg-1">Regla de oro:</strong> si lo editas
              desde <em>este panel admin</em>, sale en vivo solo. Si lo editas
              en el código del sitio, debes hacer clic en{" "}
              <strong>Update</strong> en el diálogo de Publish.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

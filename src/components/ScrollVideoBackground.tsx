/**
 * Fondo de video en loop, fijo detrás de todo el contenido.
 */
export const ScrollVideoBackground = ({ src }: { src: string }) => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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

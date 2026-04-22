import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIRCRAFT, CATEGORY_LABELS } from "@/data/aircraft";
import { supabase } from "@/integrations/supabase/client";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";
import { PublishGuide } from "@/components/PublishGuide";

const AdminAircraft = () => {
  useSEO({ title: "Gestión de Fotos · Numen Aviation", noindex: true });
  const [photos, setPhotos] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<string | null>(null);

  const load = async () => {
    const { data, error } = await supabase
      .from("aircraft_photos")
      .select("aircraft_id, image_url");
    if (error) {
      toast.error("No se pudieron cargar las fotos");
      return;
    }
    const map: Record<string, string> = {};
    data?.forEach((row) => {
      map[row.aircraft_id] = row.image_url;
    });
    setPhotos(map);
  };

  useEffect(() => {
    load();
  }, []);

  const handleUpload = async (aircraftId: string, file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Selecciona un archivo de imagen");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("La imagen debe pesar menos de 5 MB");
      return;
    }
    setUploading(aircraftId);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${aircraftId}-${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("aircraft-photos")
        .upload(path, file, { upsert: true, contentType: file.type });
      if (upErr) throw upErr;
      const { data: pub } = supabase.storage.from("aircraft-photos").getPublicUrl(path);
      const url = pub.publicUrl;
      const { error: dbErr } = await supabase
        .from("aircraft_photos")
        .upsert({ aircraft_id: aircraftId, image_url: url, updated_at: new Date().toISOString() });
      if (dbErr) throw dbErr;
      setPhotos((p) => ({ ...p, [aircraftId]: url }));
      toast.success("Foto actualizada");
    } catch (err) {
      console.error(err);
      toast.error("Error al subir la foto");
    } finally {
      setUploading(null);
    }
  };

  const handleRemove = async (aircraftId: string) => {
    const { error } = await supabase
      .from("aircraft_photos")
      .delete()
      .eq("aircraft_id", aircraftId);
    if (error) {
      toast.error("No se pudo eliminar");
      return;
    }
    setPhotos((p) => {
      const n = { ...p };
      delete n[aircraftId];
      return n;
    });
    toast.success("Foto eliminada");
  };

  return (
    <>
      <Navbar />
      <section
        className="pt-36 pb-20"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <p className="eyebrow mb-4">Administración</p>
        <h1 className="section-title">Fotos de <em>Aeronaves.</em></h1>
        <div className="gold-rule" />
        <p className="text-[0.85rem] text-fg-3 max-w-xl mt-4 mb-8">
          Sube una foto por aeronave (JPG/PNG, máx 5 MB). Se mostrará automáticamente en la sección Flota de la home.
        </p>

        <PublishGuide />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-12 border border-jade-soft">
          {AIRCRAFT.map((a) => {
            const img = photos[a.id];
            const busy = uploading === a.id;
            return (
              <div key={a.id} className="bg-bg-2 p-6 border-r border-b border-jade-soft flex flex-col gap-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl font-light">{a.name}</h3>
                  <span className="text-[0.6rem] uppercase text-jade" style={{ letterSpacing: "0.2em" }}>
                    {CATEGORY_LABELS[a.category]}
                  </span>
                </div>
                <div className="aspect-[4/3] bg-bg-3 border border-jade-soft overflow-hidden flex items-center justify-center">
                  {img ? (
                    <img src={img} alt={a.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[0.65rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>
                      Sin foto
                    </span>
                  )}
                </div>
                <label className="btn-secondary text-center cursor-pointer">
                  {busy ? "Subiendo..." : img ? "Reemplazar" : "Subir foto"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={busy}
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) handleUpload(a.id, f);
                      e.target.value = "";
                    }}
                  />
                </label>
                {img && (
                  <button
                    onClick={() => handleRemove(a.id)}
                    className="text-[0.65rem] uppercase text-fg-3 hover:text-jade transition-colors"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Eliminar
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminAircraft;

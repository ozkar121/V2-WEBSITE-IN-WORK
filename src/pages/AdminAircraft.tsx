import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Aircraft, AircraftCategory, CATEGORY_LABELS } from "@/data/aircraft";
import { supabase } from "@/integrations/supabase/client";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";
import { Plus, Trash2, Save, Upload, X, LogOut } from "lucide-react";
import { PublishGuide } from "@/components/PublishGuide";

const schema = z.object({
  id: z.string().trim().min(1).max(40).regex(/^[a-z0-9-_]+$/i, "Solo letras, números, guion o guion bajo"),
  name: z.string().trim().min(1).max(80),
  category: z.enum(["helicopter", "turbo", "light", "midsize", "heavy"]),
  passengers: z.string().trim().max(40),
  speed_kmh: z.string().trim().max(40),
  range_km: z.string().trim().max(40),
  range_nm: z.string().trim().max(60),
  sort_order: z.number().int().min(0).max(9999),
  is_active: z.boolean(),
});

type AircraftRow = Aircraft & { sort_order: number; is_active: boolean };

const emptyForm = {
  id: "",
  name: "",
  category: "light" as AircraftCategory,
  passengers: "",
  speed_kmh: "",
  range_km: "",
  range_nm: "",
  sort_order: 0,
  is_active: true,
};

const AdminAircraft = () => {
  useSEO({ title: "Gestión de Aeronaves · Numen Aviation", noindex: true });
  const { signOut, user } = useAuth();
  const [list, setList] = useState<AircraftRow[]>([]);
  const [photos, setPhotos] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [creating, setCreating] = useState(false);

  const load = async () => {
    const [acRes, phRes] = await Promise.all([
      supabase.from("aircraft").select("*").order("sort_order", { ascending: true }),
      supabase.from("aircraft_photos").select("aircraft_id, image_url"),
    ]);
    if (acRes.error) {
      toast.error("No se pudieron cargar las aeronaves");
      return;
    }
    setList((acRes.data ?? []) as AircraftRow[]);
    const map: Record<string, string> = {};
    phRes.data?.forEach((row) => {
      map[row.aircraft_id] = row.image_url;
    });
    setPhotos(map);
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Datos inválidos");
      return;
    }
    setCreating(true);
    const d = parsed.data;
    const { error } = await supabase.from("aircraft").insert({
      id: d.id,
      name: d.name,
      category: d.category,
      passengers: d.passengers,
      speed_kmh: d.speed_kmh,
      range_km: d.range_km,
      range_nm: d.range_nm,
      sort_order: d.sort_order,
      is_active: d.is_active,
    });
    setCreating(false);
    if (error) {
      toast.error(error.code === "23505" ? "Ese ID ya existe" : "Error al crear");
      return;
    }
    toast.success("Aeronave creada");
    setForm(emptyForm);
    load();
  };

  const handleUpdate = async (row: AircraftRow) => {
    const parsed = schema.safeParse(row);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Datos inválidos");
      return;
    }
    setSavingId(row.id);
    const { id, ...updates } = parsed.data;
    const { error } = await supabase.from("aircraft").update(updates).eq("id", id);
    setSavingId(null);
    if (error) {
      toast.error("No se pudo guardar");
      return;
    }
    toast.success("Cambios guardados");
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`¿Eliminar "${name}"? También se borrará su foto.`)) return;
    const { error } = await supabase.from("aircraft").delete().eq("id", id);
    if (error) {
      toast.error("No se pudo eliminar");
      return;
    }
    toast.success("Aeronave eliminada");
    load();
  };

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

  const handleRemovePhoto = async (aircraftId: string) => {
    const { error } = await supabase
      .from("aircraft_photos")
      .delete()
      .eq("aircraft_id", aircraftId);
    if (error) {
      toast.error("No se pudo eliminar la foto");
      return;
    }
    setPhotos((p) => {
      const n = { ...p };
      delete n[aircraftId];
      return n;
    });
    toast.success("Foto eliminada");
  };

  const updateLocal = (id: string, patch: Partial<AircraftRow>) => {
    setList((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const inputCls =
    "w-full bg-bg-2 border border-jade-soft px-3 py-2 text-[0.85rem] text-foreground focus:outline-none focus:border-jade";

  return (
    <>
      <Navbar />
      <section
        className="pt-36 pb-20"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1.5rem, 4vw, 4rem)" }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow mb-3">Administración</p>
            <h1 className="section-title">Aeronaves <em>& Flota.</em></h1>
            <div className="gold-rule" />
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admin/empty-legs" className="text-[0.7rem] uppercase text-fg-3 hover:text-jade" style={{ letterSpacing: "0.18em" }}>
              Empty legs →
            </Link>
            <span className="text-[0.7rem] text-fg-3">{user?.email}</span>
            <button onClick={signOut} className="text-fg-3 hover:text-jade" aria-label="Cerrar sesión">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        <PublishGuide />

        {/* Crear nueva aeronave */}
        <form
          onSubmit={handleCreate}
          className="border border-jade-soft bg-bg-2 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          <h2 className="col-span-full font-serif text-xl font-light text-foreground mb-2 flex items-center gap-2">
            <Plus className="w-4 h-4 text-jade" /> Nueva aeronave
          </h2>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>ID único</span>
            <input
              className={inputCls}
              placeholder="ej. d11"
              value={form.id}
              onChange={(e) => setForm({ ...form, id: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Nombre</span>
            <input
              className={inputCls}
              placeholder="Cessna Citation"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Categoría</span>
            <select
              className={inputCls}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value as AircraftCategory })}
            >
              {(Object.keys(CATEGORY_LABELS) as AircraftCategory[]).map((c) => (
                <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Pasajeros</span>
            <input className={inputCls} placeholder="6–8" value={form.passengers} onChange={(e) => setForm({ ...form, passengers: e.target.value })} />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Velocidad</span>
            <input className={inputCls} placeholder="850 km/h" value={form.speed_kmh} onChange={(e) => setForm({ ...form, speed_kmh: e.target.value })} />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Alcance (km)</span>
            <input className={inputCls} placeholder="3,500 km" value={form.range_km} onChange={(e) => setForm({ ...form, range_km: e.target.value })} />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Alcance (nm / nota)</span>
            <input className={inputCls} placeholder="Hasta 1,800 nm" value={form.range_nm} onChange={(e) => setForm({ ...form, range_nm: e.target.value })} />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Orden</span>
            <input
              type="number"
              className={inputCls}
              value={form.sort_order}
              onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
            />
          </label>
          <div className="col-span-full flex items-center justify-between mt-2">
            <label className="flex items-center gap-2 text-[0.75rem] text-fg-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
              />
              Activa (visible en el sitio)
            </label>
            <button
              type="submit"
              disabled={creating}
              className="bg-jade text-background px-6 py-2.5 text-[0.7rem] uppercase hover:bg-jade-soft disabled:opacity-50"
              style={{ letterSpacing: "0.18em" }}
            >
              {creating ? "Creando..." : "Crear aeronave"}
            </button>
          </div>
        </form>

        {/* Listado editable */}
        <div className="space-y-4">
          {list.map((row) => {
            const img = photos[row.id];
            const busyPhoto = uploading === row.id;
            const saving = savingId === row.id;
            return (
              <div
                key={row.id}
                className="border border-jade-soft bg-bg-2 p-5 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5"
              >
                {/* Foto */}
                <div className="relative aspect-[4/3] bg-bg-3 border border-jade-soft overflow-hidden">
                  {img ? (
                    <>
                      <img src={img} alt={row.name} className="w-full h-full object-cover" />
                      <button
                        onClick={() => handleRemovePhoto(row.id)}
                        className="absolute top-1 right-1 bg-background/80 text-foreground p-1 hover:text-destructive"
                        aria-label="Eliminar foto"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </>
                  ) : (
                    <label className="w-full h-full flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-bg-2 transition-colors">
                      <Upload className="w-5 h-5 text-fg-3" />
                      <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>
                        {busyPhoto ? "Subiendo..." : "Subir foto"}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={busyPhoto}
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleUpload(row.id, f);
                        }}
                      />
                    </label>
                  )}
                  {img && (
                    <label className="absolute bottom-1 left-1 bg-background/80 text-foreground px-2 py-1 text-[0.55rem] uppercase cursor-pointer" style={{ letterSpacing: "0.18em" }}>
                      {busyPhoto ? "..." : "Cambiar"}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={busyPhoto}
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleUpload(row.id, f);
                        }}
                      />
                    </label>
                  )}
                </div>

                {/* Campos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <label className="flex flex-col gap-1 col-span-2">
                    <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Nombre</span>
                    <input className={inputCls} value={row.name} onChange={(e) => updateLocal(row.id, { name: e.target.value })} />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Categoría</span>
                    <select
                      className={inputCls}
                      value={row.category}
                      onChange={(e) => updateLocal(row.id, { category: e.target.value as AircraftCategory })}
                    >
                      {(Object.keys(CATEGORY_LABELS) as AircraftCategory[]).map((c) => (
                        <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Orden</span>
                    <input
                      type="number"
                      className={inputCls}
                      value={row.sort_order}
                      onChange={(e) => updateLocal(row.id, { sort_order: Number(e.target.value) })}
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Pasajeros</span>
                    <input className={inputCls} value={row.passengers} onChange={(e) => updateLocal(row.id, { passengers: e.target.value })} />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Velocidad</span>
                    <input className={inputCls} value={row.speed_kmh} onChange={(e) => updateLocal(row.id, { speed_kmh: e.target.value })} />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Alcance (km)</span>
                    <input className={inputCls} value={row.range_km} onChange={(e) => updateLocal(row.id, { range_km: e.target.value })} />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>Alcance (nota)</span>
                    <input className={inputCls} value={row.range_nm} onChange={(e) => updateLocal(row.id, { range_nm: e.target.value })} />
                  </label>

                  <div className="col-span-full flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-jade-soft mt-2">
                    <div className="flex items-center gap-4">
                      <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.18em" }}>ID: {row.id}</span>
                      <label className="flex items-center gap-2 text-[0.75rem] text-fg-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={row.is_active}
                          onChange={(e) => updateLocal(row.id, { is_active: e.target.checked })}
                        />
                        Activa
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleUpdate(row)}
                        disabled={saving}
                        className="bg-jade text-background px-4 py-2 text-[0.65rem] uppercase hover:bg-jade-soft disabled:opacity-50 inline-flex items-center gap-2"
                        style={{ letterSpacing: "0.18em" }}
                      >
                        <Save className="w-3.5 h-3.5" />
                        {saving ? "Guardando..." : "Guardar"}
                      </button>
                      <button
                        onClick={() => handleDelete(row.id, row.name)}
                        className="border border-destructive/50 text-destructive px-4 py-2 text-[0.65rem] uppercase hover:bg-destructive hover:text-destructive-foreground inline-flex items-center gap-2"
                        style={{ letterSpacing: "0.18em" }}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {list.length === 0 && (
            <p className="text-center text-fg-3 py-12 text-[0.85rem]">Aún no hay aeronaves. Crea la primera arriba.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminAircraft;

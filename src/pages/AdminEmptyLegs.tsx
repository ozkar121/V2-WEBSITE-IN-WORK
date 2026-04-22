import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useSEO } from "@/hooks/useSEO";
import { CATEGORY_LABELS, type AircraftCategory } from "@/data/aircraft";
import { toast } from "sonner";
import { Trash2, Plus, LogOut } from "lucide-react";

interface EmptyLegRow {
  id: string;
  from_city: string;
  from_iata: string | null;
  to_city: string;
  to_iata: string | null;
  flight_date: string;
  aircraft: string;
  category: string;
  seats: number;
  price: number | null;
  currency: string;
  is_featured: boolean;
  is_new: boolean;
  is_active: boolean;
}

const schema = z.object({
  from_city: z.string().trim().min(1).max(60),
  from_iata: z.string().trim().max(8).optional().or(z.literal("")),
  to_city: z.string().trim().min(1).max(60),
  to_iata: z.string().trim().max(8).optional().or(z.literal("")),
  flight_date: z.string().min(1),
  aircraft: z.string().trim().min(1).max(60),
  category: z.enum(["turbo", "light", "midsize", "heavy"]),
  seats: z.number().int().min(0).max(50),
  price: z.number().min(0).max(10_000_000).optional(),
  is_featured: z.boolean(),
  is_new: z.boolean(),
  is_active: z.boolean(),
});

const empty = {
  from_city: "",
  from_iata: "",
  to_city: "",
  to_iata: "",
  flight_date: "",
  aircraft: "",
  category: "light" as AircraftCategory,
  seats: 0,
  price: 0,
  is_featured: false,
  is_new: false,
  is_active: true,
};

const AdminEmptyLegs = () => {
  useSEO({ title: "Gestión de Empty Legs · Numen Aviation" });
  const { signOut, user } = useAuth();
  const [rows, setRows] = useState<EmptyLegRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("empty_legs")
      .select("*")
      .order("flight_date", { ascending: true });
    if (error) toast.error("No se pudo cargar la lista");
    else setRows((data as EmptyLegRow[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSaving(true);
    const payload = {
      ...parsed.data,
      from_iata: parsed.data.from_iata || null,
      to_iata: parsed.data.to_iata || null,
      price: parsed.data.price || null,
    };
    const { error } = await supabase.from("empty_legs").insert(payload);
    setSaving(false);
    if (error) {
      toast.error("Error al guardar");
      return;
    }
    toast.success("Empty leg creado");
    setForm(empty);
    load();
  };

  const toggle = async (id: string, field: "is_active" | "is_featured" | "is_new", value: boolean) => {
    const { error } = await supabase.from("empty_legs").update({ [field]: value }).eq("id", id);
    if (error) toast.error("Error al actualizar");
    else load();
  };

  const remove = async (id: string) => {
    if (!confirm("¿Eliminar este empty leg?")) return;
    const { error } = await supabase.from("empty_legs").delete().eq("id", id);
    if (error) toast.error("Error al eliminar");
    else {
      toast.success("Eliminado");
      load();
    }
  };

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
            <h1 className="section-title">Empty <em>Legs.</em></h1>
            <div className="gold-rule" />
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admin/aeronaves" className="text-[0.7rem] uppercase text-fg-3 hover:text-jade" style={{ letterSpacing: "0.18em" }}>
              Fotos aeronaves →
            </Link>
            <span className="text-[0.7rem] text-fg-3">{user?.email}</span>
            <button onClick={signOut} className="text-fg-3 hover:text-jade" aria-label="Cerrar sesión">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formulario nuevo */}
        <form
          onSubmit={handleCreate}
          className="border border-jade-soft bg-bg-2 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          <h2 className="col-span-full font-serif text-xl font-light text-foreground mb-2 flex items-center gap-2">
            <Plus className="w-4 h-4 text-jade" /> Nuevo empty leg
          </h2>

          {[
            { k: "from_city", l: "Origen (ciudad)", t: "text", req: true },
            { k: "from_iata", l: "Origen IATA", t: "text" },
            { k: "to_city", l: "Destino (ciudad)", t: "text", req: true },
            { k: "to_iata", l: "Destino IATA", t: "text" },
            { k: "flight_date", l: "Fecha", t: "date", req: true },
            { k: "aircraft", l: "Aeronave", t: "text", req: true },
          ].map((f) => (
            <label key={f.k} className="flex flex-col gap-1.5">
              <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>{f.l}</span>
              <input
                type={f.t}
                required={f.req}
                value={(form as Record<string, unknown>)[f.k] as string}
                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                className="bg-background border border-jade-soft px-3 py-2 text-[0.85rem] text-foreground focus:border-jade outline-none"
              />
            </label>
          ))}

          <label className="flex flex-col gap-1.5">
            <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>Categoría</span>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value as AircraftCategory })}
              className="bg-background border border-jade-soft px-3 py-2 text-[0.85rem] text-foreground focus:border-jade outline-none"
            >
              {(Object.keys(CATEGORY_LABELS) as AircraftCategory[]).map((c) => (
                <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>Asientos</span>
            <input
              type="number" min={0} max={50}
              value={form.seats}
              onChange={(e) => setForm({ ...form, seats: parseInt(e.target.value) || 0 })}
              className="bg-background border border-jade-soft px-3 py-2 text-[0.85rem] text-foreground focus:border-jade outline-none"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[0.6rem] uppercase text-fg-3" style={{ letterSpacing: "0.2em" }}>Precio (USD)</span>
            <input
              type="number" min={0}
              value={form.price}
              onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) || 0 })}
              className="bg-background border border-jade-soft px-3 py-2 text-[0.85rem] text-foreground focus:border-jade outline-none"
            />
          </label>

          <div className="col-span-full flex flex-wrap gap-6 pt-2">
            {[
              { k: "is_active", l: "Activo (visible en el sitio)" },
              { k: "is_featured", l: "Destacado" },
              { k: "is_new", l: "Nuevo" },
            ].map((c) => (
              <label key={c.k} className="flex items-center gap-2 text-[0.75rem] text-fg-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(form as Record<string, unknown>)[c.k] as boolean}
                  onChange={(e) => setForm({ ...form, [c.k]: e.target.checked })}
                  className="accent-jade"
                />
                {c.l}
              </label>
            ))}
          </div>

          <div className="col-span-full">
            <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50">
              {saving ? "Guardando..." : "Crear empty leg"}
            </button>
          </div>
        </form>

        {/* Lista */}
        <h2 className="font-serif text-2xl font-light text-foreground mb-4">
          Empty legs <span className="text-fg-3 text-sm">({rows.length})</span>
        </h2>

        {loading ? (
          <p className="text-fg-3 text-[0.85rem]">Cargando...</p>
        ) : rows.length === 0 ? (
          <p className="text-fg-3 text-[0.85rem]">Aún no hay empty legs. Crea el primero arriba.</p>
        ) : (
          <div className="border border-jade-soft overflow-x-auto">
            <table className="w-full text-[0.8rem]">
              <thead className="bg-bg-3 text-fg-3 text-left">
                <tr>
                  {["Ruta", "Fecha", "Aeronave", "Cat.", "Asientos", "Precio", "Estado", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-[0.6rem] uppercase font-normal" style={{ letterSpacing: "0.18em" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-jade-soft hover:bg-bg-2">
                    <td className="px-4 py-3 text-foreground">
                      {r.from_city} {r.from_iata && <span className="text-fg-3">({r.from_iata})</span>} → {r.to_city} {r.to_iata && <span className="text-fg-3">({r.to_iata})</span>}
                    </td>
                    <td className="px-4 py-3 text-fg-2">{r.flight_date}</td>
                    <td className="px-4 py-3 text-fg-2">{r.aircraft}</td>
                    <td className="px-4 py-3 text-fg-3 text-[0.7rem] uppercase">{CATEGORY_LABELS[r.category as AircraftCategory] ?? r.category}</td>
                    <td className="px-4 py-3 text-fg-2">{r.seats}</td>
                    <td className="px-4 py-3 text-jade-light">{r.price ? `$${Number(r.price).toLocaleString()}` : "—"}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1 text-[0.65rem]">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="checkbox" checked={r.is_active} onChange={(e) => toggle(r.id, "is_active", e.target.checked)} className="accent-jade" />
                          Activo
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="checkbox" checked={r.is_featured} onChange={(e) => toggle(r.id, "is_featured", e.target.checked)} className="accent-jade" />
                          Destacado
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="checkbox" checked={r.is_new} onChange={(e) => toggle(r.id, "is_new", e.target.checked)} className="accent-jade" />
                          Nuevo
                        </label>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => remove(r.id)} className="text-fg-3 hover:text-red-400" aria-label="Eliminar">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default AdminEmptyLegs;

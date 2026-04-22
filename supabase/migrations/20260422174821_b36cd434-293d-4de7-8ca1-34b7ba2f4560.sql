-- 1. Enum para categoría
DO $$ BEGIN
  CREATE TYPE public.aircraft_category AS ENUM ('turbo', 'light', 'midsize', 'heavy');
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 2. Tabla aircraft
CREATE TABLE public.aircraft (
  id text PRIMARY KEY,
  name text NOT NULL,
  category public.aircraft_category NOT NULL,
  passengers text NOT NULL DEFAULT '',
  range_km text NOT NULL DEFAULT '',
  speed_kmh text NOT NULL DEFAULT '',
  range_nm text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.aircraft ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active aircraft"
  ON public.aircraft FOR SELECT
  TO anon, authenticated
  USING (is_active = true OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert aircraft"
  ON public.aircraft FOR INSERT
  TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update aircraft"
  ON public.aircraft FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete aircraft"
  ON public.aircraft FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_aircraft_updated_at
  BEFORE UPDATE ON public.aircraft
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3. Seed con los aviones actuales
INSERT INTO public.aircraft (id, name, category, passengers, range_km, speed_kmh, range_nm, sort_order) VALUES
  ('d1',  'Piper M500',      'turbo',   '4–5',   '1,520 km', '460 km/h', 'Hasta 1,000 nm',   1),
  ('d2',  'Pilatus PC-12',   'turbo',   '6–9',   '1,650 km', '500 km/h', 'Hasta 900 nm',     2),
  ('d3',  'Learjet 35',      'light',   '6–8',   '3,523 km', '852 km/h', 'Hasta 1,400 nm',   3),
  ('d4',  'Learjet 31',      'light',   '6–7',   '2,470 km', '835 km/h', 'Hasta 1,200 nm',   4),
  ('d5',  'Hawker 800',      'midsize', '8–9',   '4,400 km', '843 km/h', 'Hasta 2,400 nm',   5),
  ('d6',  'Learjet 45',      'midsize', '7–9',   '3,704 km', '859 km/h', 'Hasta 2,000 nm',   6),
  ('d7',  'Learjet 75',      'midsize', '7–9',   '3,779 km', '867 km/h', 'Hasta 2,200 nm',   7),
  ('d8',  'Legacy 600',      'heavy',   '13–16', '6,019 km', '870 km/h', 'Intercontinental', 8),
  ('d9',  'Gulfstream G450', 'heavy',   '12–14', '7,800 km', '904 km/h', 'Transatlántico',   9),
  ('d10', 'Challenger 601',  'heavy',   '10–12', '6,300 km', '851 km/h', 'Intercontinental', 10);

-- 4. FK aircraft_photos -> aircraft (CASCADE para limpiar foto al borrar avión)
ALTER TABLE public.aircraft_photos
  ADD CONSTRAINT aircraft_photos_aircraft_id_fkey
  FOREIGN KEY (aircraft_id) REFERENCES public.aircraft(id) ON DELETE CASCADE;
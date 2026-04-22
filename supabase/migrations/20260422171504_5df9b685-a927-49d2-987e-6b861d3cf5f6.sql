
-- 1. Enum de roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- 2. Tabla de roles
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Función security definer para chequear roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 4. Policies user_roles
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 5. Restringir aircraft_photos a admins
DROP POLICY IF EXISTS "Public can delete aircraft photos" ON public.aircraft_photos;
DROP POLICY IF EXISTS "Public can insert aircraft photos" ON public.aircraft_photos;
DROP POLICY IF EXISTS "Public can update aircraft photos" ON public.aircraft_photos;
DROP POLICY IF EXISTS "Public can read aircraft photos" ON public.aircraft_photos;

CREATE POLICY "Anyone can read aircraft photos"
  ON public.aircraft_photos FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can insert aircraft photos"
  ON public.aircraft_photos FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update aircraft photos"
  ON public.aircraft_photos FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete aircraft photos"
  ON public.aircraft_photos FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Asegurar PK en aircraft_photos (1 foto por aeronave)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'aircraft_photos_pkey'
  ) THEN
    ALTER TABLE public.aircraft_photos ADD PRIMARY KEY (aircraft_id);
  END IF;
END$$;

-- 6. Tabla empty_legs
CREATE TABLE public.empty_legs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  from_city TEXT NOT NULL,
  from_iata TEXT,
  to_city TEXT NOT NULL,
  to_iata TEXT,
  flight_date DATE NOT NULL,
  flight_time TIME,
  aircraft TEXT NOT NULL,
  category TEXT NOT NULL,
  seats INT NOT NULL DEFAULT 0,
  price NUMERIC(10,2),
  currency TEXT NOT NULL DEFAULT 'USD',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_new BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.empty_legs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active empty legs"
  ON public.empty_legs FOR SELECT TO anon, authenticated
  USING (is_active = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert empty legs"
  ON public.empty_legs FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update empty legs"
  ON public.empty_legs FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete empty legs"
  ON public.empty_legs FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Trigger updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_empty_legs_updated_at
  BEFORE UPDATE ON public.empty_legs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_aircraft_photos_updated_at
  BEFORE UPDATE ON public.aircraft_photos
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 7. Storage policies para aircraft-photos: solo admins pueden subir/borrar
CREATE POLICY "Public can view aircraft-photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'aircraft-photos');

CREATE POLICY "Admins can upload aircraft-photos"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'aircraft-photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update aircraft-photos"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'aircraft-photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete aircraft-photos"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'aircraft-photos' AND public.has_role(auth.uid(), 'admin'));

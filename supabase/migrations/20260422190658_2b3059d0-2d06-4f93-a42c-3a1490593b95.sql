CREATE TABLE public.quotation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  from_city text NOT NULL,
  to_city text NOT NULL,
  departure_date date NOT NULL,
  return_date date,
  passengers integer NOT NULL DEFAULT 1,
  trip_type text NOT NULL DEFAULT 'one_way',
  preferred_aircraft text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.quotation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quotation requests"
ON public.quotation_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view quotation requests"
ON public.quotation_requests FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update quotation requests"
ON public.quotation_requests FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete quotation requests"
ON public.quotation_requests FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_quotation_requests_updated_at
BEFORE UPDATE ON public.quotation_requests
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
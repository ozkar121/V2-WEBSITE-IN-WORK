DROP POLICY IF EXISTS "Anyone can submit quotation requests" ON public.quotation_requests;
CREATE POLICY "Anyone can submit quotation requests"
ON public.quotation_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
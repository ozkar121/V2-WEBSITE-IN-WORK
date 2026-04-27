DO $$
BEGIN
  EXECUTE 'GRANT INSERT ON public.quotation_requests TO anon, authenticated';
  EXECUTE 'GRANT SELECT, UPDATE, DELETE ON public.quotation_requests TO authenticated';
END $$;
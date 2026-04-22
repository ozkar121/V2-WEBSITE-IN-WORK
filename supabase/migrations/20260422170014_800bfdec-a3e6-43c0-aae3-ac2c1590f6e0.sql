
-- Storage bucket for aircraft photos (public read)
insert into storage.buckets (id, name, public)
values ('aircraft-photos', 'aircraft-photos', true)
on conflict (id) do nothing;

-- Public read access to aircraft photos
create policy "Public read aircraft photos"
on storage.objects for select
using (bucket_id = 'aircraft-photos');

-- Anyone can upload (admin UI will be restricted later)
create policy "Anyone can upload aircraft photos"
on storage.objects for insert
with check (bucket_id = 'aircraft-photos');

create policy "Anyone can update aircraft photos"
on storage.objects for update
using (bucket_id = 'aircraft-photos');

create policy "Anyone can delete aircraft photos"
on storage.objects for delete
using (bucket_id = 'aircraft-photos');

-- Mapping table: aircraft_id (catalog id from src/data/aircraft.ts) -> image_url
create table public.aircraft_photos (
  aircraft_id text primary key,
  image_url text not null,
  updated_at timestamptz not null default now()
);

alter table public.aircraft_photos enable row level security;

-- Public read
create policy "Public can read aircraft photos"
on public.aircraft_photos for select
using (true);

-- Public write for now (no auth yet); tighten later when admin role is added
create policy "Public can insert aircraft photos"
on public.aircraft_photos for insert
with check (true);

create policy "Public can update aircraft photos"
on public.aircraft_photos for update
using (true);

create policy "Public can delete aircraft photos"
on public.aircraft_photos for delete
using (true);

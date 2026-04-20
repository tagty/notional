drop table if exists pages cascade;

create table pages (
  id         uuid primary key default gen_random_uuid(),
  name       text not null default 'New page',
  created_at timestamptz not null default now()
);

grant select, insert on table pages to anon;

alter table pages enable row level security;

create policy "allow read" on pages
  for select using (true);

create policy "allow insert" on pages
  for insert with check (true);

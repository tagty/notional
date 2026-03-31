create table pages (
  id         uuid primary key default gen_random_uuid(),
  name       text not null default 'New page',
  created_at timestamptz default now()
);

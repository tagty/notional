alter table pages enable row level security;

create policy "allow read" on pages
  for select using (true);

create policy "allow insert" on pages
  for insert with check (true);

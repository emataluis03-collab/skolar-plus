# Skolar+

Original school management and learning portal built with React + Vite + TypeScript + Supabase.
Not affiliated with, and shares no code or branding with, any other school portal.

## Status

**Phase 2 of 8:** real Supabase authentication, role-based profiles, protected routes, and the database/RLS foundation are implemented. Lessons, classes, subjects, activities and grades are intentionally still the next phases.

## Run locally

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` and add your Supabase project URL and publishable/anon key.

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/migrations/0001_initial_schema.sql`.
4. Create the first user in Authentication > Users.
5. Promote that trusted account to admin with:

```sql
update public.profiles set role = 'admin' where email = 'admin@example.com';
```

Replace the email with the actual account.

## Vercel

Add these environment variables to the Vercel project:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Then redeploy.

Never put a Supabase service-role key in the frontend or GitHub repository.

## Checks

```bash
npm run typecheck
npm run build
```

# Skolar+

An original school management and learning portal (React + Vite + TypeScript, Supabase backend).
Not affiliated with, and shares no code or branding with, any other school portal.

## Status

Phase 1 of 8: project setup, UI shell, login screen, admin/teacher/student dashboards, routing.
Data is placeholder (`src/lib/mockData.ts`) and sign-in is a preview-only stub. Supabase arrives in Phase 2.

## Run locally

```bash
npm install
npm run dev
```

Open the printed URL, pick a role on the sign-in screen, and explore.

## Checks

```bash
npm run typecheck
npm run build
```

## Deploy (Vercel)

Import the GitHub repo in Vercel. Framework preset: Vite. Build command `npm run build`, output `dist`.
Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables once Phase 2 is done.
Never add the Supabase service-role key to the frontend.

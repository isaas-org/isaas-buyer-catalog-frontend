# isaas-buyer-catalog-frontend

Next.js app where buyer companies browse, search and compare SaaS products on iSaaS. All data comes from [`isaas-buyer-catalog-browsing-backend`](https://github.com/isaas-org/isaas-buyer-catalog-browsing-backend); this app never talks to the database.

## Stack

- Next.js 16 (App Router, Cache Components), React 19, TypeScript
- Tailwind CSS 4, ESLint
- Deployed to Vercel

## Running locally

Start `isaas-buyer-catalog-browsing-backend` first (it listens on 8081), then:

```bash
cp .env.example .env.local
npm install
npm run dev        # http://localhost:3000
```

The home page shows the backend's health status, which confirms the two are wired together.

## Configuration

| Variable | Example | Notes |
|----------|---------|-------|
| `BACKEND_API_URL` | `http://localhost:8081` | Server-side only. Read at request time, so one build works across environments |

## Structure

```
src/app/                     routes (App Router)
src/components/              shared components
src/lib/backend.ts           server-side client for the backend API
```

## Checks

```bash
npm run lint
npm run build
```

CI (`.github/workflows/test.yml`) runs both on every PR and every push to `feature/**`.

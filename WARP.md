# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Framework: Next.js 14 (pages router) with TypeScript, Tailwind CSS, next-themes
- Auth: next-auth with Google and credentials providers, MongoDB adapter
- Data: MongoDB via a shared client (lib/mongodb.js)
- UI: Reusable shell and sidebar components under components/ui, global styles in styles/globals.css

Key commands
- Install deps: npm install
- Dev server: npm run dev
- Build: npm run build
- Start production build: npm run start
- Lint: npm run lint
- Lint with fixes: npm run lint -- --fix
- Type check (noEmit): npx tsc --noEmit

Environment configuration
Create .env.local with the following variables (values omitted):
```dotenv path=null start=null
MONGODB_URI=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```
Notes:
- next.config.js exposes MONGODB_URI and JWT_SECRET to the app and configures security headers and remote image domains.
- next-auth providers read GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.

Architecture and flow
- Entry and layout: pages/_app.tsx wraps all pages with providers and layout.
  - SessionProvider (next-auth) supplies auth state.
  - ThemeProvider (next-themes) enables class-based dark mode.
  - AppShell (components/ui/app-shell.tsx) provides a responsive sidebar and header; main content is injected into <main>.
  - ParticleBackground renders a lightweight animated background.
- Routing:
  - Pages under pages/ (e.g., index.tsx, dashboard.tsx, instrument pages).
  - API routes under pages/api/.
    - pages/api/auth/[...nextauth].ts configures NextAuth with:
      - MongoDBAdapter(clientPromise) for persistence
      - Google and credentials providers
      - Credentials authorize: queries db 'jaymusicacademy', collection 'users', validates bcrypt password
      - Session strategy: jwt; callbacks attach user id to token/session
- Data layer:
  - lib/mongodb.js creates a single MongoClient and reuses it in development via global._mongoClientPromise.
  - lib/utils.ts exports cn() (clsx + tailwind-merge) used across UI components.
- Styling and theming:
  - Tailwind configured in tailwind.config.js (darkMode: 'class'), with custom animations/variables plugin.
  - Global CSS in styles/globals.css defines utility classes (glass, gradient-text, animations).
- Components:
  - components/ui contains sidebar primitives (Sidebar, SidebarBody, SidebarLink), demo, aurora background, theme toggle, and app-shell.
  - components/ contains additional atoms (Modal, Navbar, ParticleBackground, theme-provider). The Navbar is defined but layout currently uses AppShell instead.

Notable implementation details
- Path aliases: tsconfig.json maps @/* to the repo root; import shared libs as '@/lib/utils'.
- next.config.js allows external images from images.unsplash.com and assets.aceternity.com and sets basic security headers.

Gaps and caveats for future work
- No tests or test runner configured.
- Sign-up page posts to /api/auth/register, but no corresponding API route is present under pages/api. Implementing pages/api/auth/register.ts (or equivalent) is required for email/password registration.

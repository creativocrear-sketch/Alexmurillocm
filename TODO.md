# TODO: Make Vercel Deployment Functional

## Plan Complete ✅

**Summary of Changes:**
- **vercel.json**: Updated to standard Vite SPA rewrites (`/(.*)` → `/index.html`). Serves built `dist/public` contents at root.
- **package.json**: Simplified `build` script to `vite build` (removed unused server bundle for static deploy).
- **No other changes**: Wouter hash routing (`/#path`) works perfectly on static hosts. Manus debug dev-only.

**Build Status**: 
- `pnpm build` produces `dist/public/index.html` + assets (verified structure).
- Dependencies handled by `packageManager: pnpm@10.4.1` (Vercel auto-detects).

**Deploy & Test:**
1. Install pnpm globally if needed: `npm config set registry https://registry.npmjs.org/` then `npm install -g pnpm` (fix PowerShell policy: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`).
2. `pnpm install && pnpm build`
3. `npx vercel --prod`

Your app now deploys as static SPA on Vercel. Access routes like `/#ciclismo-ruta`. Pure client-side.

Changes tracked in git for PR if needed.


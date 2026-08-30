# Build and Preview Status — 2026-08-31

## Scope completed in this handoff

- Verified the source archive SHA-256 before extraction.
- Confirmed the bilingual content and internal-route validators pass.
- Re-ran dependency-free TypeScript source validation with temporary React/Next framework stubs.
- Aligned the runtime baseline to the existing `AvocadoAI-Lab/web` deployment family: Node.js 22, Next.js 16.1.6, React 19.2.3, and React DOM 19.2.3.
- Added a production-preview smoke test covering both locales, a platform page, a Trust page, and a solution page.
- Updated CI to run install, content checks, route checks, typecheck, lint, production build, production server startup, and preview smoke tests.

## Commands

```bash
npm install --no-audit --no-fund
npm run check
npm run build
npm run preview:smoke
```

For an interactive production preview:

```bash
npm run start -- --hostname 0.0.0.0 --port 3000
```

Then open:

- `http://localhost:3000/zh-Hant`
- `http://localhost:3000/en`

## Environment result

The real dependency installation was attempted in the artifact execution environment. It stopped before creating `node_modules` or a lockfile because outbound DNS/network access to `registry.npmjs.org` was unavailable (`EAI_AGAIN` / host resolution failure). Therefore this environment could not honestly claim a completed Next.js production build or live Next.js preview.

The repository is configured so a connected Codex, GitHub Actions, Vercel, or developer environment can execute the complete chain without changing the source workflow.

# Artifact Status — 2026-08-31

## Implemented

- Codex repository instructions (`AGENTS.md`).
- Living plan convention (`PLANS.md`) and active MVP ExecPlan.
- Complete Codex master prompt and first-session handoff.
- Product requirements, system design, architecture decision, design system, content model, claims governance, founder approval workflow, roadmap, backlog, test plan, threat model, and Trust Center requirements.
- Next.js App Router scaffold with strict TypeScript and Tailwind CSS.
- Traditional Chinese and English homepage and supporting routes.
- Platform, three solution, founder, Trust Center, resources, and contact pages.
- Anonymous field proof and controlled placeholder founder imagery.
- Content and internal-route verification scripts.
- GitHub Actions workflow and pull-request template.

## Validation completed in the artifact environment

- `node scripts/verify-content.mjs` — passed.
- `node scripts/verify-routes.mjs` — passed.
- Dependency-free TypeScript/TSX syntax transpilation — passed.
- Source typecheck against temporary framework stubs — passed.
- Controlled customer-name scan — no public content occurrences; names exist only in the verifier's forbidden-name list.
- Credential-pattern scan — no embedded credentials found.

## Validation remaining in the target development environment

The artifact environment could not finish npm registry access. The first Codex milestone is therefore:

1. Run `npm install` and commit `package-lock.json`.
2. Run `npm run check`.
3. Run `npm run build`.
4. Run the site and review both locales on desktop and mobile.
5. Record commands and fixes in `docs/plans/0001-public-portal-mvp.md`.

## Publication approvals still required

- Final Rain Chung and Eric Mao titles and biographies.
- Founder photographs and quotations.
- Corporate email, booking destination, and customer-login destination.
- Customer names, logos, engagement statuses, metrics, SLAs, certifications, and partner marks.
- Privacy/legal copy, analytics and consent decision, and CRM/form destination.

## 2026-08-31 build handoff update

- Source archive SHA-256 verified before extraction.
- Runtime versions aligned to the existing web deployment baseline (Next.js 16.1.6 / React 19.2.3).
- Added `npm run preview:smoke` and a CI production-preview smoke stage.
- Content verification, route verification, preview-script syntax validation, and dependency-free source type validation passed.
- A real `npm install` was attempted but the artifact runtime could not reach `registry.npmjs.org`; full framework build and preview remain for the connected Codex/CI environment.

## Remote Codex handoff status

- GitHub branch `codex/public-portal-mvp` was created in `AvocadoAI-Lab/web` from the current `main` commit.
- The connected GitHub surface available in this execution exposes branch creation and read/status operations, but no file commit/update operation. The branch therefore remains at its base commit until the packaged repository is opened in Codex or pushed from a write-capable Git environment.
- `CODEX_EXECUTE.md` and `scripts/codex-verify.sh` provide the single-command install, check, production build, and preview smoke-test handoff.

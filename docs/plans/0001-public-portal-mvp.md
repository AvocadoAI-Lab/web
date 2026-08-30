# Deliver a bilingual, evidence-driven Avocado.ai public portal MVP

This ExecPlan is a living document. Maintain it according to `PLANS.md` in the repository root. Keep `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` current as work proceeds.

## Purpose and user-visible outcome

After this plan is complete, a visitor can open the Avocado.ai public portal in Traditional Chinese or English, understand the company category and SenseL platform, compare the three primary solutions, review accurate anonymous field proof, identify Rain Chung and Eric Mao as the two founders, understand the company's trust posture, and reach an approved workshop or contact destination. The application will build cleanly, work across mobile and desktop, and contain no unapproved named customer or quantitative claim.

## Context and boundaries

The repository is a Next.js public corporate site. It is not the SenseL customer portal. No customer telemetry, reports, evidence packages, tenant data, credentials, or authenticated customer routes belong here. The content adapter in `src/content/content.ts` is the only entry point for page content, allowing a CMS to be introduced later.

Founder titles and biographies are drafts until approved in `docs/content/FOUNDER_PROFILE_APPROVAL.md`. Quantitative and named-customer claims are governed by `docs/content/CLAIMS_LEDGER.md`.

## Progress

- [x] 2026-08-31: Created repository guidance, product requirements, system design, design system, content governance, security documents, roadmap, backlog, and test plan.
- [x] 2026-08-31: Selected Next.js App Router, strict TypeScript, Tailwind CSS, repository content adapter, and separate authenticated-portal boundary.
- [x] 2026-08-31: Implemented the bilingual responsive homepage scaffold with hero, proof, problem, closed loop, solutions, field proof, founders, integrations, trust, resources, and final CTA.
- [x] 2026-08-31: Implemented platform, three solution, founder, trust, resource, and contact routes in both locales.
- [x] 2026-08-31: Aligned package versions to the existing deployment baseline and retained a committed lockfile for deterministic installation.
- [x] 2026-08-31: Installed dependencies with `npm ci` in a clean Node.js 22 GitHub Actions environment.
- [x] 2026-08-31: Passed content verification, route verification, strict TypeScript typecheck, ESLint, and Next.js production build.
- [x] 2026-08-31: Started the production application and passed automated smoke tests for both locales, representative detail pages, redirect behavior, and not-found behavior.
- [x] 2026-08-31: Deployed a green Vercel preview and opened validated draft PR #3 without changing `main`.
- [ ] Perform final manual keyboard, responsive, and bilingual-content review.
- [ ] Replace placeholder brand and founder assets with approved files.
- [ ] Connect an approved booking or CRM destination.
- [ ] Obtain stakeholder approval for founder copy and all public claims.
- [ ] Complete stakeholder review and explicitly approve the production merge.

## Surprises & Discoveries

- The artifact environment could not resolve the npm registry, so full framework validation was moved to the connected GitHub Actions environment. The clean remote run completed installation, checks, build, and production preview smoke testing successfully.
- The public corporate site and future authenticated customer portal require different security boundaries; they are intentionally separated.
- Current internal material contains strong Fab and healthcare evidence, but customer identity, exact numbers, and engagement status require explicit publication permission.
- Founder positioning is commercially valuable but must be subordinate to platform and field evidence on the homepage.
- A standalone build and route-level smoke test provide useful release evidence, but do not replace manual visual, keyboard, and device review.

## Decision Log

- Decision: use a single public-site application rather than an early monorepo. Rationale: reduce build complexity while the content and brand system are stabilizing; the authenticated portal will be a separate application for security reasons.
- Decision: use repository-managed bilingual content behind an adapter for MVP. Rationale: claims governance and editorial workflow should be stabilized before selecting a CMS.
- Decision: use anonymous qualitative field-proof copy in the initial render. Rationale: avoid implying public customer permission or an incorrect commercial status.
- Decision: present Rain and Eric at equal visual weight under `Founders & Leadership`. Rationale: explain complementary founder fit without making the site a personal-brand page.
- Decision: keep the validated portal on a draft PR and Vercel preview until visual, content, privacy, and claims approvals are complete. Rationale: technical readiness is not publication approval.

## Implementation plan

### Milestone 1 — Make the scaffold installable and observable

Review package versions and generated configuration against the target Node environment. Install dependencies, run the repository-only scripts, then run typecheck, lint, and build. Fix configuration or framework issues. At the end of this milestone, `npm run check` and `npm run build` should complete successfully on a clean checkout.

Status: completed in GitHub Actions on 2026-08-31.

### Milestone 2 — Validate the homepage in both locales

Inspect the homepage components and content adapter. Ensure the first viewport communicates category, benefit, and CTA without animation. Validate all sections: proof, customer problem, SenseL closed loop, three solutions, field proof, founders, integrations, trust, resources, and final CTA. Test keyboard navigation and responsive layouts. At the end, `/zh-Hant` and `/en` should render equivalent content with no broken links or horizontal overflow.

Status: automated locale and route validation completed; final manual visual, keyboard, and small-screen review remains.

### Milestone 3 — Validate supporting pages and conversion

Review the platform, solution, founder, trust, resource, and contact pages. Every page should have localized metadata, one primary action, and consistent navigation. Replace placeholder CTA destinations only with approved environment configuration. At the end, a visitor can move from any primary solution page to a valid next step.

Status: route and production-server smoke tests completed; approved contact and booking destinations remain pending.

### Milestone 4 — Publication readiness

Replace temporary assets, complete the claims ledger, approve founder copy, add required legal pages, decide analytics and consent, and implement CRM or booking integration with privacy and abuse controls. Add CSP after third-party origins are known and test it in report-only mode. At the end, an internal preview should contain no unresolved public claim and be ready for stakeholder sign-off.

Status: Vercel preview and draft PR are ready for stakeholder review; publication approvals remain pending.

## Validation and acceptance

Completed successfully in the connected CI environment:

    npm ci
    npm run verify:content
    npm run verify:routes
    npm run typecheck
    npm run lint
    npm run build

The production application was then started and verified for:

- `/` redirecting to `/zh-Hant`.
- `/zh-Hant` and `/en` rendering the homepage.
- Representative platform and solution routes in both locales.
- Founder, Trust Center, resources, and contact routes.
- Unknown locales and unknown routes returning not found.
- Rendered content containing no forbidden named-customer or confidential quantitative claim.

Manual acceptance still required:

- Keyboard focus reaches navigation, locale switch, CTAs, and footer in logical order.
- At 320px there is no horizontal overflow.
- Founder imagery, wording, CTA destinations, privacy/legal copy, and public claims are approved.

## Rollback and recovery

Keep content and UI changes separate where practical. If a content claim is challenged, revert the content record without changing components. If an integration fails, restore the prior CTA link and disable the integration rather than silently losing submissions. Deployment must support rollback to the last known build.

## Outcomes & Retrospective

The bilingual public portal has been materialized in `AvocadoAI-Lab/web`, validated through deterministic dependency installation, content and route checks, strict typechecking, linting, production build, live-server smoke testing, and a green Vercel preview. The implementation remains isolated on `codex/public-portal-mvp-validated` behind draft PR #3, so the existing production branch is unchanged. The remaining work is approval-driven rather than framework-driven: visual review, approved founder assets and copy, public-claims clearance, legal/privacy decisions, and production conversion destinations.

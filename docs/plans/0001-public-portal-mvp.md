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
- [ ] Install dependencies and confirm the documented toolchain works in the target development environment. On 2026-08-31, npm registry access timed out in the artifact environment; repeat this step in Codex or a connected developer environment and commit the generated lockfile.
- [x] 2026-08-31: Aligned the handoff to the existing web deployment runtime baseline and added automated production-preview smoke tests for both locales and representative detail routes.
- [x] 2026-08-31: Created the remote handoff branch `codex/public-portal-mvp` and packaged a one-command Codex verification workflow. The connected GitHub surface did not expose file commit/update operations, so the branch still requires the packaged repository to be pushed from a write-capable Codex/Git environment.
- [x] 2026-08-31: Implemented the bilingual responsive homepage scaffold with hero, proof, problem, closed loop, solutions, field proof, founders, integrations, trust, resources, and final CTA.
- [x] 2026-08-31: Implemented platform, three solution, founder, trust, resource, and contact routes in both locales.
- [ ] Run full repository typecheck, lint, and production build after dependency installation. Repository content/route checks and dependency-free TypeScript transpilation/type stubs passed on 2026-08-31.
- [ ] Perform keyboard, responsive, and content-parity review.
- [ ] Replace placeholder brand and founder assets with approved files.
- [ ] Connect an approved booking or CRM destination.
- [ ] Obtain stakeholder approval for founder copy and all public claims.
- [ ] Deploy an internal preview and complete stakeholder review.

## Surprises & Discoveries

- The artifact environment could not complete npm registry access within the available execution window. Repository-only verification passed; full dependency installation and Next.js build remain the first Codex validation task.
- The public corporate site and future authenticated customer portal require different security boundaries; they are intentionally separated.
- Current internal material contains strong Fab and healthcare evidence, but customer identity, exact numbers, and engagement status require explicit publication permission.
- Founder positioning is commercially valuable but must be subordinate to platform and field evidence on the homepage.

## Decision Log

- Decision: use a single public-site application rather than an early monorepo. Rationale: reduce build complexity while the content and brand system are stabilizing; the authenticated portal will be a separate application for security reasons.
- Decision: use repository-managed bilingual content behind an adapter for MVP. Rationale: claims governance and editorial workflow should be stabilized before selecting a CMS.
- Decision: use anonymous qualitative field-proof copy in the initial render. Rationale: avoid implying public customer permission or an incorrect commercial status.
- Decision: present Rain and Eric at equal visual weight under `Founders & Leadership`. Rationale: explain complementary founder fit without making the site a personal-brand page.

## Implementation plan

### Milestone 1 — Make the scaffold installable and observable

Review package versions and generated configuration against the target Node environment. Install dependencies, run the repository-only scripts, then run typecheck, lint, and build. Fix configuration or framework issues. At the end of this milestone, `npm run check` and `npm run build` should complete successfully on a clean checkout.

### Milestone 2 — Validate the homepage in both locales

Inspect the homepage components and content adapter. Ensure the first viewport communicates category, benefit, and CTA without animation. Validate all sections: proof, customer problem, SenseL closed loop, three solutions, field proof, founders, integrations, trust, resources, and final CTA. Test keyboard navigation and responsive layouts. At the end, `/zh-Hant` and `/en` should render equivalent content with no broken links or horizontal overflow.

### Milestone 3 — Validate supporting pages and conversion

Review the platform, solution, founder, trust, resource, and contact pages. Every page should have localized metadata, one primary action, and consistent navigation. Replace placeholder CTA destinations only with approved environment configuration. At the end, a visitor can move from any primary solution page to a valid next step.

### Milestone 4 — Publication readiness

Replace temporary assets, complete the claims ledger, approve founder copy, add required legal pages, decide analytics and consent, and implement CRM or booking integration with privacy and abuse controls. Add CSP after third-party origins are known and test it in report-only mode. At the end, an internal preview should contain no unresolved public claim and be ready for stakeholder sign-off.

## Validation and acceptance

Run:

    npm run verify:content
    npm run verify:routes
    npm run typecheck
    npm run lint
    npm run build

Then start the application and verify:

- `/` redirects to `/zh-Hant`.
- `/zh-Hant` and `/en` render all homepage sections.
- Each of the three solution routes renders in both locales.
- `/zh-Hant/company/founders` and `/en/company/founders` show Rain and Eric with draft-approved wording only.
- Unknown locales and unknown solution slugs return not found.
- Keyboard focus reaches navigation, locale switch, CTAs, and footer in logical order.
- At 320px there is no horizontal overflow.
- The rendered site contains no named customer, logo, exact confidential metric, unapproved SLA, or unapproved certification.

## Rollback and recovery

Keep content and UI changes separate where practical. If a content claim is challenged, revert the content record without changing components. If an integration fails, restore the prior CTA link and disable the integration rather than silently losing submissions. Deployment must support rollback to the last known build.

## Outcomes & Retrospective

The repository and plan were initialized on 2026-08-31. Update this section after each milestone with shipped behavior, validation evidence, unresolved approval items, and lessons that should change future plans.

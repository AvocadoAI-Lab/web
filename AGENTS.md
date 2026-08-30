# Avocado.ai Public Portal — Codex Guidance

This repository is the anonymous public corporate portal for Avocado.ai, not the authenticated SenseL customer portal.

## Product boundary

- Present SenseL as an AI-native Security Operations & Validation Platform.
- Keep customer telemetry, credentials, reports, tenant data, and support access outside this repository.
- Maintain Traditional Chinese and English parity.
- Keep customer names, logos, exact metrics, certifications, SLAs, partner claims, and founder quotations out of public content until explicitly approved.

## Engineering gates

Before declaring work complete, run:

```bash
npm ci
npm run check
npm run build
npm run start
```

Smoke-test `/zh-Hant`, `/en`, `/zh-Hant/platform`, all three solution routes, founders, trust, resources, and contact. Preserve security headers, keyboard focus, reduced-motion behavior, semantic heading order, and mobile responsiveness.

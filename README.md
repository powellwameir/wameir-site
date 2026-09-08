# Wameir — Marketing Site

Multi-page marketing site with a contact-form backend, built per
**Wameir Site Spec v3.1**.

## Stack (framework choice recorded — spec §3, blocking item #5)
- **Framework: Next.js (App Router) + TypeScript.** (SvelteKit was the accepted
  alternative; Next.js was chosen for MDX-native Phase-2 blog support.)
- **Host: Cloudflare Workers** via the **OpenNext adapter**
  (`@opennextjs/cloudflare`). The app runs on the Workers Node.js-compatibility
  runtime, so the contact API is an ordinary dynamic route
  (`app/api/contact/route.ts`) — no `edge` runtime needed — while our clients stay
  fetch-based (no always-on server, no Node TCP/SMTP libs).
- **Database: Neon** serverless Postgres (HTTP driver).
- **Email: Resend** (transactional, HTTP API).
- **Spam protection: Cloudflare Turnstile** + honeypot + per-IP rate limiting.
- **Fonts: self-hosted** at build time via `next/font/google` (Fraunces + Inter) —
  no runtime CDN.

## Structure
- `app/` — routes: `/` (home), `/selling`, `/approach`, `/team`, `/faq`, `/privacy`,
  and `app/api/contact` (edge form endpoint). `layout.tsx` holds the shared Nav/Footer.
- `components/` — shared UI (Nav, Footer, Button, Section, DualCTA, WeirLattice, Icon,
  ContactForm, ContactSection).
- `lib/` — `content.ts` (fixed copy strings §7), `db.ts`, `email.ts`, `turnstile.ts`,
  `rateLimit.ts`.
- `migrations/001_leads.sql` — the `leads` table; run before the form goes live.
- `open-next.config.ts` / `wrangler.toml` — OpenNext + Cloudflare Worker config.
- `.env.example` — env var **names** for `next dev` (`.env.local`); `.dev.vars.example`
  mirrors them for `npm run preview` (`.dev.vars`). Real values live in Cloudflare.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```
Copy `.env.example` → `.env.local` and fill values to exercise the form locally.
Without a Turnstile secret, the spam check is skipped (dev); without
`CONTACT_FORM_ENABLED="true"` the API refuses to store leads (launch gate).

## Build & preview on Cloudflare
```bash
npm run cf:build   # opennextjs-cloudflare build -> .open-next/worker.js
npm run preview    # build + run the Worker locally (wrangler)
npm run deploy      # build + deploy the Worker to Cloudflare
```
Deploy flow (§11): feature branch → PR → Cloudflare preview build → review against
the spec → merge to `main` → production. Env vars (DATABASE_URL, RESEND_API_KEY,
RESEND_FROM, TURNSTILE keys, CONTACT_FORM_ENABLED) are set via `wrangler secret` /
the Cloudflare dashboard, **scoped separately for preview and production** — never
in the repo or client bundle (§14). The Turnstile *site* key is public and may be
set as a plain var.

## Launch gates (do not skip — spec §12/§15)
- **Privacy notice** must be counsel-reviewed and live at `/privacy` before the form
  is enabled in production (`CONTACT_FORM_ENABLED="true"`).
- Gated content shipped as placeholders: Bob Green bio/photo (consent), seller-FAQ
  legal answers, founder headshots, Houston/community photography, real process
  timeframes. See in-code `TODO(§15 ...)` markers.

## Change log
- **v2.0 → v3.1 (this build):** re-platformed from a static single-page Express app
  (Railway) to a multi-page Next.js app on Cloudflare Pages **with a real backend**
  (leads DB + transactional email + spam protection). This overrides the Website
  Production Roadmap §1 "no server" decision — recorded here per spec §3 / blocking
  item #12. The old `server.js` / `railway.json` are retained until the Cloudflare
  production URL is confirmed serving and the form works end-to-end, then removed and
  Railway is decommissioned (§11).
- **Adapter / versions:** deploys via the **OpenNext** Cloudflare adapter
  (`@opennextjs/cloudflare`) rather than the now-deprecated `@cloudflare/next-on-pages`.
  Next is pinned to a patched **15.5.25** (past CVE-2025-66478). Fonts moved to
  `next/font` (self-hosted). One transitive `npm audit` advisory remains (postcss via
  Next); it is build-time only and clears with the eventual Next 16 upgrade.

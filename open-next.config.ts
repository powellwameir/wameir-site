import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// OpenNext Cloudflare adapter config (§3). Runs the Next.js app as a Cloudflare
// Worker with the Node.js compatibility runtime — so edge-only constraints no
// longer apply, but our clients (Neon HTTP driver, Resend HTTP API) remain
// fetch-based and work either way. Defaults are fine for a marketing site with
// one API route; add caching (KV/R2/D1) here later if needed.
export default defineCloudflareConfig({});

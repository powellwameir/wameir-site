/*
 * Cloudflare cache purge for wameir.com.
 *
 * Reads credentials from .cf.local (git-ignored) or the environment:
 *   CLOUDFLARE_API_TOKEN  — scoped token with Zone -> Cache Purge
 *   CLOUDFLARE_ZONE_ID    — the zone id (Cloudflare dashboard -> Overview)
 *
 * Usage:
 *   node scripts/purge-cache.mjs                 # purge everything
 *   node scripts/purge-cache.mjs https://wameir.com/ https://wameir.com/team
 *
 * The token is never printed.
 */
import { readFileSync, existsSync } from "node:fs";

function loadCreds() {
  let token = process.env.CLOUDFLARE_API_TOKEN;
  let zone = process.env.CLOUDFLARE_ZONE_ID;
  if ((!token || !zone) && existsSync(".cf.local")) {
    const txt = readFileSync(".cf.local", "utf8");
    const get = (k) => {
      const m = txt.match(new RegExp(`^\\s*${k}\\s*=\\s*"?([^"\\n]+)"?`, "m"));
      return m ? m[1].trim() : undefined;
    };
    token = token || get("CLOUDFLARE_API_TOKEN");
    zone = zone || get("CLOUDFLARE_ZONE_ID");
  }
  return { token, zone };
}

const { token, zone } = loadCreds();
if (!token || !zone) {
  console.error(
    "Missing CLOUDFLARE_API_TOKEN or CLOUDFLARE_ZONE_ID. Set them in .cf.local (copy from .cf.example) or the environment.",
  );
  process.exit(1);
}

const urls = process.argv.slice(2);
const body = urls.length ? { files: urls } : { purge_everything: true };

const res = await fetch(
  `https://api.cloudflare.com/client/v4/zones/${zone}/purge_cache`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  },
);

const data = await res.json().catch(() => ({}));
if (res.ok && data.success) {
  console.log(urls.length ? `Purged ${urls.length} URL(s).` : "Purged everything.");
} else {
  console.error("Purge failed:", JSON.stringify(data.errors || data, null, 2));
  process.exit(1);
}

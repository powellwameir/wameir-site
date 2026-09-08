/**
 * Best-effort per-IP rate limiting for the contact API (§5A).
 *
 * This is an in-memory sliding window scoped to a single Worker isolate — it
 * stops rapid bursts cheaply without extra bindings or storing IPs anywhere
 * (IPs are treated as sensitive and never persisted or logged, §14). It is NOT
 * distributed across isolates/regions.
 *
 * TODO(§5A): for strict global limits, back this with Cloudflare KV or a
 * Durable Object and bind it in wrangler.toml.
 */
const WINDOW_MS = 60_000; // 1 minute
const MAX_HITS = 5; // per IP per window

const hits = new Map<string, number[]>();

export function rateLimit(
  key: string,
  max = MAX_HITS,
  windowMs = WINDOW_MS,
): boolean {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);

  // Opportunistic cleanup so the map doesn't grow unbounded.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }

  return recent.length <= max;
}

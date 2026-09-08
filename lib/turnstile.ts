/**
 * Cloudflare Turnstile server-side verification (§5A, §14). The secret is verified
 * here only and never reaches the browser. Returns a discriminated result so the
 * caller can distinguish "not configured" (dev) from "failed challenge".
 */
const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileResult =
  | { status: "ok" }
  | { status: "unconfigured" }
  | { status: "failed" };

export async function verifyTurnstile(
  token: string | undefined,
  ip?: string | null,
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // When no secret is set (e.g. local dev before provisioning), skip the check.
  // Production must always have the secret — the ContactForm shows a note otherwise.
  if (!secret) return { status: "unconfigured" };
  if (!token) return { status: "failed" };

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  try {
    const res = await fetch(SITEVERIFY, { method: "POST", body });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true ? { status: "ok" } : { status: "failed" };
  } catch {
    return { status: "failed" };
  }
}

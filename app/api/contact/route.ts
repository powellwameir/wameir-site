import { insertLead, type Lead } from "@/lib/db";
import { sendLeadNotification } from "@/lib/email";
import { verifyTurnstile } from "@/lib/turnstile";
import { rateLimit } from "@/lib/rateLimit";

// Runs as a Cloudflare Worker via the OpenNext adapter (Node.js compatibility
// runtime). Our clients stay fetch-based (Neon HTTP driver, Resend HTTP API), so
// no always-on server and no Node-only TCP/SMTP libraries (§3). Force dynamic so
// the handler is never statically evaluated at build time.
export const dynamic = "force-dynamic";

type Payload = {
  audience?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  company_url?: string; // honeypot
  turnstileToken?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // 1. Honeypot — silently accept-and-drop obvious bots; never store or email (§5A).
  if (body.company_url && body.company_url.trim() !== "") {
    return json({ ok: true });
  }

  // 2. Re-validate server-side.
  const audience = body.audience === "community" ? "community" : "seller";
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  if (!name || !EMAIL_RE.test(email) || message.length < 2) {
    return json({ error: "Please add your name, a valid email, and a message." }, 400);
  }

  // 3. Launch gate (§12, blocking #1): the form must not store data until the
  //    privacy notice is live. Flip CONTACT_FORM_ENABLED to "true" only then.
  if (process.env.CONTACT_FORM_ENABLED !== "true") {
    return json(
      { error: "Our form isn't live just yet." },
      503,
    );
  }

  // 4. Rate limit per IP (best-effort; IP is not stored or logged).
  const ip =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown";
  if (!rateLimit(ip)) {
    return json({ error: "Too many attempts. Please try again in a minute." }, 429);
  }

  // 5. Verify Turnstile server-side.
  const turnstile = await verifyTurnstile(body.turnstileToken, ip);
  if (turnstile.status === "failed") {
    return json({ error: "Spam check failed. Please try again." }, 400);
  }

  const lead: Lead = {
    audience,
    name,
    company: (body.company || "").trim() || undefined,
    email,
    phone: (body.phone || "").trim() || undefined,
    message,
    source: (body.source || "").trim() || undefined,
  };

  // 6. Store the lead, then 7. notify the team. A failed email must not lose the
  //    lead (it's already stored), but we still surface an error so the visitor
  //    can fall back to the mailto shown in the form.
  try {
    await insertLead(lead);
  } catch {
    return json({ error: "We couldn't save your message." }, 500);
  }

  try {
    await sendLeadNotification(lead);
  } catch {
    // Lead is safely stored; treat as success for the visitor (2xx). The failed
    // notification is a team-side concern to catch via monitoring/logs.
    return json({ ok: true, notified: false }, 202);
  }

  return json({ ok: true });
}

import type { Lead } from "./db";

/**
 * Transactional "new enquiry" notification via the Resend HTTP API (§5A).
 * HTTP-only (fetch) so it works on the edge runtime — never SMTP/Nodemailer.
 * Lead PII stays server-side: it goes only into this email to the team, never
 * into logs, analytics, or the client (§14).
 */
const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function sendLeadNotification(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.LEADS_NOTIFY_TO || "hello@wameir.com";
  if (!apiKey || !from) throw new Error("Email is not configured");

  const label = lead.audience === "seller" ? "Seller" : "Community";
  const subject = `New ${label} enquiry — ${lead.name}`;
  const lines = [
    `Audience: ${lead.audience}`,
    `Name:     ${lead.name}`,
    lead.company ? `Company:  ${lead.company}` : null,
    `Email:    ${lead.email}`,
    lead.phone ? `Phone:    ${lead.phone}` : null,
    lead.source ? `Source:   ${lead.source}` : null,
    "",
    "Message:",
    lead.message,
  ].filter((l): l is string => l !== null);

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text: lines.join("\n"),
      reply_to: lead.email,
    }),
  });

  if (!res.ok) {
    // Do not leak lead PII into the thrown message / logs.
    throw new Error(`Resend request failed with status ${res.status}`);
  }
}

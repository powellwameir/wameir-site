import { neon } from "@neondatabase/serverless";

/**
 * Leads persistence (§5A). Uses Neon's serverless HTTP driver so it runs on the
 * Cloudflare Workers edge runtime (no node:net TCP driver). One row per enquiry.
 */
export type Lead = {
  audience: "seller" | "community";
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
};

export async function insertLead(lead: Lead): Promise<void> {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not configured");

  const sql = neon(url);
  await sql`
    INSERT INTO leads (audience, name, company, email, phone, message, source)
    VALUES (
      ${lead.audience},
      ${lead.name},
      ${lead.company || null},
      ${lead.email},
      ${lead.phone || null},
      ${lead.message},
      ${lead.source || null}
    )
  `;
}

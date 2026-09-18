/*
 * Fixed copy strings (spec §7) — kept in one place so they stay verbatim across
 * every page and component. Do not paraphrase these.
 */

/** Early-stage disclaimer — verbatim (§7). The standing, site-wide line; it
 *  lives in the footer, so it reaches the pages that carry no StatusStrip
 *  (/approach, /team, /faq, /privacy). Pages that talk about goals say it
 *  instead through <StatusStrip />, which is dated. */
export const DISCLAIMER =
  "Wameir is early-stage. The resident benefits described here are goals we're working toward, not services running today.";

/*
 * The month the status line speaks for (audit v4 §1: the strip is dated, so a
 * reader can tell whether they are looking at current information).
 *
 * UPDATE THIS BY HAND when the status changes — notably on the day Wameir buys
 * its first company, when the strip's claim stops being true. It is deliberately
 * not derived from the current date: a date that advances on its own would keep
 * asserting freshness for a sentence nobody had re-checked.
 */
export const STATUS_AS_OF = "September 2026";
/** Machine-readable form of STATUS_AS_OF, for <time dateTime>. */
export const STATUS_AS_OF_ISO = "2026-09";

export const CONTACT_EMAIL = "hello@wameir.com";
export const LOCATION = "Greater Houston, Texas";

/*
 * Owner-supplied contact signals. Each is a PLACEHOLDER until filled in; empty
 * values degrade gracefully rather than publishing a guessed or dead link.
 */

// TODO(owner): founder scheduling link (Calendly / Cal.com). While empty, the
// call buttons open an email with a call-request subject and read "Request a call".
export const SCHEDULING_URL: string = "";

// TODO(owner): company LinkedIn page URL. Hidden in the footer while empty.
export const LINKEDIN_URL: string = "";

// TODO(owner): registered legal entity name (e.g. "Wameir … LLC"). While empty
// the copyright line reads "© 2026 Wameir."
export const LEGAL_ENTITY: string = "";

// TODO(owner): public phone number, display format (e.g. "(713) 555-0100").
// Hidden in the footer while empty.
export const PHONE: string = "";

export const COPYRIGHT = `© 2026 ${LEGAL_ENTITY || "Wameir"}.`;

/*
 * The call button's link and its label come from the same constant, so the label
 * can't promise a calendar that isn't there. While SCHEDULING_URL is empty the
 * button opens an email and says so; paste a scheduler URL and both change.
 */
export function callLabel(): string {
  return SCHEDULING_URL ? "Book a 20-minute call" : "Request a call";
}

/** Where the founder call CTAs point: the scheduler, or a mailto fallback. */
export function schedulingHref(): string {
  return (
    SCHEDULING_URL ||
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Confidential call request")}`
  );
}

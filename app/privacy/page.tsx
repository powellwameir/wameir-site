import type { Metadata } from "next";
import Section from "@/components/Section";
import { WeirWatermark } from "@/components/WeirLattice";
import { CONTACT_EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Wameir collects, uses, and protects the information you share.",
  robots: { index: false }, // placeholder — do not index until counsel-reviewed
};

/*
 * INTERNAL: still a hard launch gate (§12, blocking #1). This interim notice is
 * kept quiet and noindex; the contact FORM must not be enabled in production
 * (CONTACT_FORM_ENABLED) until a counsel-reviewed privacy notice is finalized
 * here. Copy below is truthful but must be reviewed by counsel before the form
 * collects data. Not legal advice.
 */
export default function PrivacyPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Privacy</span>
          <h1 className="font-display">Privacy Notice</h1>
          <p className="lede">How we handle the information you share with us.</p>
        </div>
      </header>

      <Section bg="paper">
        <div className="wrap">
          <div className="split__body" style={{ maxWidth: "64ch" }}>
            <p>
              Wameir is an early-stage company. Today, the primary way you share
              information with us is by emailing us directly — if you write to us, we
              use what you send only to reply and to follow up about a possible
              conversation.
            </p>
            <p>
              When our contact form goes live, it will collect only what we need — your
              name, company, email, an optional phone number, and your message. We will
              use that information solely to respond to your enquiry, store it securely
              with access limited to Wameir&apos;s founders, and never sell it or share
              it with third parties for their own use.
            </p>
            <p>
              You can ask us at any time what information we hold about you, or ask us
              to delete it. Just email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--gold)" }}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

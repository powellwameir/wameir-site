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
 * ⚠️ PLACEHOLDER — HARD LAUNCH GATE (§12, blocking #1).
 * This is NOT the published privacy notice. The contact form must NOT be enabled
 * in production (CONTACT_FORM_ENABLED) until a counsel-reviewed privacy notice
 * (Texas + general) is live here, describing what is collected, why, how it is
 * stored, and how to request deletion. Not legal advice.
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
          <div className="track__disclaimer" style={{ maxWidth: "64ch" }}>
            <strong>Draft — pending legal review.</strong> This privacy notice is a
            placeholder. Wameir&apos;s contact form is not enabled in production until
            a counsel-reviewed privacy notice is published here.
          </div>

          <div className="split__body" style={{ marginTop: 32, maxWidth: "64ch" }}>
            <p>
              When it is published, this notice will describe the personal
              information we collect through our contact form (such as your name,
              company, email, phone, and message), why we collect it, how it is stored
              and protected, who can access it, and how you can request that we delete
              it.
            </p>
            <p>
              Questions in the meantime? Email us at{" "}
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

import Section from "./Section";
import ContactForm from "./ContactForm";
import { WeirWatermark } from "./WeirLattice";
import { CONTACT_EMAIL, LOCATION } from "@/lib/content";

// Build-time flag: show the real form only once it's enabled (privacy notice live).
// Until then we show a clean "email us" CTA instead of a form that can't submit.
const FORM_ENABLED = process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true";

/**
 * Closing contact band (§5A). Navy so it echoes the hero and carries the
 * weir-lattice motif through to the closing screen (§4A).
 */
export default function ContactSection({
  audience = "seller",
  source = "/",
  eyebrow = "Start a conversation",
  heading,
}: {
  audience?: "seller" | "community";
  source?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
}) {
  return (
    <Section bg="navy" id="contact" className="invite">
      <WeirWatermark className="invite__watermark" />
      <div className="wrap">
        <div className="invite__grid">
          <div className="invite__intro">
            <span className="eyebrow eyebrow-gold-light">{eyebrow}</span>
            <h2 className="t-h2" style={{ marginTop: 16 }}>
              {heading ?? (
                <>
                  Let&apos;s talk about what&apos;s <span className="it">next.</span>
                </>
              )}
            </h2>
            <p>
              Whether you&apos;re exploring a sale or asking about your community,
              we&apos;d welcome the conversation. We move at your pace and keep it
              confidential.
            </p>
            <p className="mt-sm" style={{ color: "var(--cream-70)", fontSize: "0.9375rem" }}>
              {LOCATION} &middot;{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--gold-light)" }}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          {FORM_ENABLED ? (
            <ContactForm defaultAudience={audience} source={source} />
          ) : (
            <div className="contact-cta">
              <p className="contact-cta__lead">
                Send us a note and we&apos;ll reply personally.
              </p>
              <a
                className="btn btn--gold"
                href={`mailto:${CONTACT_EMAIL}?subject=Wameir%20enquiry`}
              >
                Email {CONTACT_EMAIL}
              </a>
              <p className="contact-cta__note">
                Every message is read by a founder — and kept confidential.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

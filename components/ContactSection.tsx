import Section from "./Section";
import ContactForm, { type Audience } from "./ContactForm";
import Button from "./Button";
import { CONTACT_EMAIL, LOCATION, SCHEDULING_URL, callLabel, schedulingHref } from "@/lib/content";

// Build-time flag: show the real form only once it's enabled (privacy notice live).
// Until then we show a clean "email us" CTA instead of a form that can't submit.
const FORM_ENABLED = process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true";

/**
 * Closing contact band (§5A). Navy so it echoes the hero and carries the
 * weir-lattice motif through to the closing screen (§4A). Lattice only, no
 * watermark: page headers carry the one watermark per page.
 */
export default function ContactSection({
  audience = "other",
  source = "/",
  eyebrow = "Start a conversation",
  heading,
  intro = "Whether you're thinking about selling or asking about your community, we'd like to hear from you. We move at your pace, and the conversation stays confidential.",
  lead = "Send us a note and we'll reply personally.",
}: {
  audience?: Audience;
  source?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  /** Opening paragraph, set per page so the closing band doesn't repeat verbatim. */
  intro?: React.ReactNode;
  lead?: React.ReactNode; // per-page lead line so the closing block doesn't read templated
}) {
  return (
    <Section bg="navy" id="contact" className="invite">
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
            <p>{intro}</p>
            <p className="mt-sm" style={{ color: "var(--cream-70)", fontSize: "0.9375rem" }}>
              {LOCATION} &middot;{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--gold-light)" }}>
                {CONTACT_EMAIL}
              </a>
            </p>
            {/* Founder fast-path: a confidential call, alongside the form/email. */}
            <div className="invite__call">
              <Button
                href={schedulingHref()}
                variant="line-light"
                arrow
                cta="book-call"
                ctaLocation="contact"
                {...(SCHEDULING_URL ? { target: "_blank", rel: "noopener" } : {})}
              >
                {callLabel()}
              </Button>
            </div>
          </div>
          {FORM_ENABLED ? (
            <ContactForm defaultAudience={audience} source={source} />
          ) : (
            <div className="contact-cta">
              <p className="contact-cta__lead">{lead}</p>
              <a
                className="btn btn--gold"
                data-cta="email"
                data-cta-location="contact"
                href={`mailto:${CONTACT_EMAIL}?subject=Wameir%20inquiry`}
              >
                Email {CONTACT_EMAIL}
              </a>
              <p className="contact-cta__note">
                Every message is read by a founder and kept confidential.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

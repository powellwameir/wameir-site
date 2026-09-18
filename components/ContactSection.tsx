import Section from "./Section";
import ContactForm, { type Audience } from "./ContactForm";
import Button from "./Button";
import { CONTACT_EMAIL } from "@/lib/content";

// Build-time flag: show the real form only once it's enabled (privacy notice live).
// Until then we show a clean "email us" CTA instead of a form that can't submit.
const FORM_ENABLED = process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true";

/**
 * Closing contact band (§5A). Navy so it echoes the hero and carries the
 * weir-lattice motif through to the closing screen (§4A). Lattice only, no
 * watermark: page headers carry the one watermark per page.
 *
 * Structure is deliberately flat — eyebrow, H2, ONE paragraph, ONE button.
 * It previously ran two paragraphs, two buttons pointing at the same mailto,
 * and a reassurance callout, all saying "contact us" (audit v5, A-1/A-2/A-3).
 * The location line lives in the footer only.
 */
export default function ContactSection({
  audience = "other",
  source = "/",
  eyebrow = "Start a conversation",
  heading,
  intro = "Whether you're thinking about selling or asking about your community, we'd like to hear from you. We move at your pace.",
}: {
  audience?: Audience;
  source?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  /** The band's only paragraph, set per page so it doesn't read templated. */
  intro?: React.ReactNode;
}) {
  return (
    <Section bg="navy" id="contact" className="invite">
      <div className="wrap">
        <div className={`invite__grid${FORM_ENABLED ? "" : " invite__grid--single"}`}>
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
            <div className="invite__actions">
              <Button
                href={`mailto:${CONTACT_EMAIL}?subject=Wameir%20inquiry`}
                variant="gold"
                arrow
                cta="email"
                ctaLocation="contact"
              >
                Email us
              </Button>
              {/*
                Second button goes here once a real scheduler exists: a
                "Request a call" Button, variant="line-light", cta="book-call",
                href={schedulingHref()} with a label from callLabel() (both in
                lib/content, waiting on SCHEDULING_URL). Until then one button,
                because two labels for the same mailto is one action wearing
                two hats.
              */}
            </div>
          </div>
          {FORM_ENABLED && <ContactForm defaultAudience={audience} source={source} />}
        </div>
      </div>
    </Section>
  );
}

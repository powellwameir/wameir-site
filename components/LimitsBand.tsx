import Section from "./Section";

/**
 * "Being straight with you" — the honest-limits band that closes each deep
 * page (§6 rule 2, §7). Load-bearing copy: never trimmed, never softened.
 */
export default function LimitsBand({
  eyebrow = "Being straight with you",
  heading,
  children,
}: {
  eyebrow?: string;
  heading: string;
  children: React.ReactNode;
}) {
  // navy-90: dark, like the contact band that closes the page. The light
  // "more goals" band sits between them, so the two never touch.
  return (
    <Section bg="navy-90" className="limits">
      <div className="wrap">
        <span className="eyebrow eyebrow-gold-light">{eyebrow}</span>
        <h2 className="limits__title">{heading}</h2>
        <p className="limits__body">{children}</p>
      </div>
    </Section>
  );
}

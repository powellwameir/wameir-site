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
  // navy-90: the contact band that follows is navy, so the two read as a pair.
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

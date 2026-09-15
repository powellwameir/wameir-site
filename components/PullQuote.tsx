import Section from "./Section";
import { WeirWatermark } from "./WeirLattice";

/*
 * Pull-quote band (§4A variety device): one existing line set large in Fraunces
 * with a gold tick and an optional gold key phrase (<span className="g">).
 * Use at most once or twice per page, and only with copy already on the page.
 * `size="md"` suits longer lines.
 */
export default function PullQuote({
  bg = "navy",
  size = "lg",
  eyebrow,
  after,
  children,
}: {
  bg?: "navy" | "cream";
  size?: "lg" | "md";
  eyebrow?: string;
  after?: React.ReactNode;
  children: React.ReactNode;
}) {
  const dark = bg === "navy";
  return (
    <Section bg={bg} className={dark ? "pullquote invite" : "pullquote"}>
      {dark && <WeirWatermark className="invite__watermark" />}
      <div className="wrap">
        <figure className="pullquote__figure">
          {eyebrow && (
            <figcaption className={dark ? "eyebrow eyebrow-gold-light" : "eyebrow"}>
              {eyebrow}
            </figcaption>
          )}
          <blockquote className={`pullquote__text pullquote__text--${size}`}>
            {children}
          </blockquote>
          {after && <div className="pullquote__after">{after}</div>}
        </figure>
      </div>
    </Section>
  );
}

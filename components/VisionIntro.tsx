/**
 * The opening block every vision section and deep page shares (§5.1): eyebrow,
 * headline and lede.
 *
 * It used to carry an early-stage `note` too. That claim is now <StatusStrip />,
 * one dated line used by every page that talks about goals, so the prop is gone
 * rather than left available to reintroduce a per-section wording.
 */
export default function VisionIntro({
  eyebrow,
  as: Heading = "h2",
  onDark = false,
  children,
  lede,
  className,
  long = false,
}: {
  eyebrow?: string;
  as?: "h1" | "h2";
  onDark?: boolean;
  children: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
  /** Headline over ~8 words: one size step down so it doesn't wrap to 4-5 lines. */
  long?: boolean;
}) {
  return (
    <div className={["vsec-intro", className].filter(Boolean).join(" ")}>
      {eyebrow && (
        <span className={`eyebrow${onDark ? " eyebrow-gold-light" : ""}`}>{eyebrow}</span>
      )}
      <Heading className={`t-h2 vsec-title${long ? " t-h2--long" : ""}`}>{children}</Heading>
      {lede && <p className="vsec-intro__lede">{lede}</p>}
    </div>
  );
}

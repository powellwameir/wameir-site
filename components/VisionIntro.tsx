/**
 * The opening block every vision section and deep page shares (§5.1): eyebrow,
 * headline, lede, and the early-stage note. The note lives here rather than in
 * each caller so a section can't ship without one.
 */
export default function VisionIntro({
  eyebrow,
  as: Heading = "h2",
  onDark = false,
  children,
  lede,
  note,
  className,
}: {
  eyebrow?: string;
  as?: "h1" | "h2";
  onDark?: boolean;
  children: React.ReactNode;
  lede?: React.ReactNode;
  note?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={["vsec-intro", className].filter(Boolean).join(" ")}>
      {eyebrow && (
        <span className={`eyebrow${onDark ? " eyebrow-gold-light" : ""}`}>{eyebrow}</span>
      )}
      <Heading className="t-h2 vsec-title">{children}</Heading>
      {lede && <p className="vsec-intro__lede">{lede}</p>}
      {note && <p className="track__disclaimer track__disclaimer--sm">{note}</p>}
    </div>
  );
}

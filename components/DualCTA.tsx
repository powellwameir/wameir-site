import Button from "./Button";

/**
 * The hero's dual audience-path fork (§5.1) — equal weight, both AA. Labels are
 * deliberately more specific than the header pair in Nav so the two don't repeat
 * in the same viewport. Directional gold arrows signal a path forward (§4A).
 * `onDark` tunes the second button's style to the band it sits on.
 */
export default function DualCTA({
  onDark = true,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
    >
      <Button href="/selling#how-it-works" variant="gold" arrow>
        See how a sale works
      </Button>
      <Button
        href="/working-toward"
        variant={onDark ? "line-light" : "line-ink"}
        arrow
      >
        What we&apos;re building for residents
      </Button>
    </div>
  );
}

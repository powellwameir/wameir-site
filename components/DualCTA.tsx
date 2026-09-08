import Button from "./Button";

/**
 * The dual audience-path fork (§5.1) — equal weight, both AA. Directional gold
 * arrows signal a path forward (§4A). `variant` tunes the second button's style
 * to the band it sits on (dark hero vs. light section).
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
      <Button href="/selling" variant="gold" arrow>
        Sell your company
      </Button>
      <Button
        href="/#communities"
        variant={onDark ? "line-light" : "line-ink"}
        arrow
      >
        For your community
      </Button>
    </div>
  );
}

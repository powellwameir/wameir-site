import Link from "next/link";

type Variant = "gold" | "line-light" | "line-ink";

const ArrowRight = () => (
  <svg
    className="arrow"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/**
 * Shared CTA button (§4.1 colour rules). CTA copy must be active and say what
 * happens (§6 rule 6). Renders a next/link for internal routes, a plain anchor
 * for external / mailto / hash links.
 */
export default function Button({
  href,
  variant = "gold",
  arrow = false,
  children,
  className,
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const cls = `btn btn--${variant}${className ? ` ${className}` : ""}`;
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const content = (
    <>
      {children}
      {arrow && <ArrowRight />}
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {content}
    </a>
  );
}

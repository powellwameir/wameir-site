import Link from "next/link";
import Arrow from "./Arrow";

type Variant = "gold" | "line-light" | "line-ink";

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
  id,
  target,
  rel,
  cta,
  ctaLocation,
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
  target?: string;
  rel?: string;
  /** Stable analytics hook, rendered as data-cta (no tracking attached here). */
  cta?: string;
  /** Where on the page the CTA sits, rendered as data-cta-location. */
  ctaLocation?: string;
}) {
  const cls = `btn btn--${variant}${className ? ` ${className}` : ""}`;
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const hooks = { id, "data-cta": cta, "data-cta-location": ctaLocation };
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className={cls} target={target} rel={rel} {...hooks}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} target={target} rel={rel} {...hooks}>
      {content}
    </a>
  );
}

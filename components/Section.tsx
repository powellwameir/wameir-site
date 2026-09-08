/**
 * Section wrapper — enforces the light-lock rule (§9) that every section declares
 * an explicit background. `bg` picks one of the four brand bands; `on-navy` is
 * added automatically for dark bands so secondary text uses --cream-70.
 */
type Bg = "navy" | "navy-90" | "cream" | "paper";

export default function Section({
  bg,
  id,
  className,
  children,
  padded = true,
}: {
  bg: Bg;
  id?: string;
  className?: string;
  children: React.ReactNode;
  padded?: boolean;
}) {
  const dark = bg === "navy" || bg === "navy-90";
  const classes = [
    padded ? "section" : "",
    `section--${bg}`,
    dark ? "on-navy" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

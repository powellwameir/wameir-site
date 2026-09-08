/*
 * Responsive <picture> for the graded assets in /public/img (§4A req 6).
 * Serves avif then webp, with a srcset across the exported widths, explicit
 * width/height to prevent layout shift, and lazy-loading below the fold
 * (pass `eager` for the hero). Assets are pre-graded at build time, so there
 * are no runtime CSS filters to fight the light-mode lock.
 */
export default function Picture({
  base,
  widths,
  sizes,
  alt,
  width,
  height,
  eager = false,
  className,
  imgClassName,
  imgStyle,
}: {
  base: string; // e.g. "/img/hero-houston-skyline"
  widths: number[]; // exported widths, ascending
  sizes: string; // e.g. "100vw" or "(max-width:880px) 100vw, 33vw"
  alt: string; // meaningful alt; "" only for purely decorative
  width: number; // intrinsic width (aspect ratio)
  height: number; // intrinsic height (aspect ratio)
  eager?: boolean;
  className?: string;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
}) {
  const srcset = (ext: string) =>
    widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element -- pre-graded assets, optimizer disabled */}
      <img
        src={`${base}-${widths[0]}.webp`}
        alt={alt}
        width={width}
        height={height}
        className={imgClassName}
        style={imgStyle}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(eager ? { fetchPriority: "high" as const } : {})}
      />
    </picture>
  );
}

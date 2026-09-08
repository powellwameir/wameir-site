"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Picture from "./Picture";

export type SellerSlide = {
  heading: string;
  body: string;
  base: string; // graded asset base, e.g. "/img/seller-longterm"
  alt: string;
};

/*
 * Seller "Why founders choose Wameir" carousel — one slide per point, each paired
 * with a graded image (§4A). Progressive enhancement:
 *   - No JS  -> renders as a stacked column of all three slides (image + text).
 *   - JS on  -> becomes a manual scroll-snap carousel with prev/next + dots + keys.
 * No autoplay; prefers-reduced-motion honored (instant vs smooth). Text sits on
 * the section background beside the image, never unshaded over the photo.
 */
export default function SellerCarousel({ slides }: { slides: SellerSlide[] }) {
  const [enhanced, setEnhanced] = useState(false);
  const [active, setActive] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);

  // Enhance to carousel only after mount, so SSR/no-JS stays a stacked column.
  useEffect(() => setEnhanced(true), []);

  useEffect(() => {
    if (!enhanced) return;
    const el = viewport.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-slide")));
        });
      },
      { root: el, threshold: 0.6 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [enhanced, slides.length]);

  const go = useCallback(
    (i: number) => {
      const el = viewport.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      const slide = el.querySelector<HTMLElement>(`[data-slide="${clamped}"]`);
      if (!slide) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: reduce ? "auto" : "smooth" });
    },
    [slides.length],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!enhanced) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  return (
    <div
      className="sc"
      data-enhanced={enhanced}
      role="group"
      aria-roledescription="carousel"
      aria-label="Why founders choose Wameir"
      onKeyDown={onKeyDown}
    >
      <div className="sc__viewport" ref={viewport}>
        {slides.map((s, i) => (
          <div
            key={s.heading}
            className="sc__slide"
            data-slide={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}: ${s.heading}`}
          >
            <Picture
              base={s.base}
              widths={[800, 1200, 1600]}
              sizes="(max-width: 880px) 100vw, 50vw"
              alt={s.alt}
              width={1600}
              height={1067}
              className="sc__pic"
              imgClassName="sc__img"
            />
            <div className="sc__text">
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls — enhancement only; hidden (and inert) without JS. */}
      <div className="carousel__controls" hidden={!enhanced}>
        <button
          type="button"
          className="carousel__arrow"
          aria-label="Previous"
          onClick={() => go(active - 1)}
          disabled={active === 0}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div className="carousel__dots">
          {slides.map((s, i) => (
            <button
              key={s.heading}
              type="button"
              className={`carousel__dot${i === active ? " is-active" : ""}`}
              aria-label={`Show: ${s.heading}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel__arrow"
          aria-label="Next"
          onClick={() => go(active + 1)}
          disabled={active === slides.length - 1}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}

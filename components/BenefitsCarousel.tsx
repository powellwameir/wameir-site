"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon, { type IconName } from "./Icon";

export type BenefitGroup = {
  head: string;
  items: { icon: IconName; title: string; pocket: string }[];
};

/*
 * Resident-benefits carousel (§5.1). One slide per group. Built on native CSS
 * scroll-snap so it swipes on touch and works with no JS (the slides are just a
 * horizontal scroll region). JS enhances it with prev/next + dot controls and
 * keyboard support, and respects prefers-reduced-motion (instant vs smooth).
 * No autoplay — motion only answers a user action (§4A).
 */
export default function BenefitsCarousel({ groups }: { groups: BenefitGroup[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Track the active slide from scroll position.
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-slide")));
        });
      },
      { root: el, threshold: 0.6 },
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [groups.length]);

  const go = useCallback(
    (i: number) => {
      const el = viewport.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(groups.length - 1, i));
      const slide = el.querySelector<HTMLElement>(`[data-slide="${clamped}"]`);
      if (!slide) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({
        left: slide.offsetLeft - el.offsetLeft,
        behavior: reduce ? "auto" : "smooth",
      });
    },
    [groups.length],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
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
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label="What we're working to bring to every community"
      onKeyDown={onKeyDown}
    >
      <div className="carousel__viewport" ref={viewport}>
        {groups.map((g, gi) => (
          <div
            key={g.head}
            className="carousel__slide"
            data-slide={gi}
            role="group"
            aria-roledescription="slide"
            aria-label={`${gi + 1} of ${groups.length}: ${g.head}`}
          >
            <div className="carousel__head">{g.head}</div>
            <div className="carousel__items">
              {g.items.map((item) => (
                <div className="bcard" key={item.title}>
                  <span className="bcard__icon">
                    <Icon name={item.icon} size={28} />
                  </span>
                  <h3>{item.title}</h3>
                  {/* Home summary stays scannable: title + one payoff line only.
                      The full reasoning lives on the /working-toward deep-dive. */}
                  <p className="bcard__payoff">{item.pocket}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="carousel__controls">
        <button
          type="button"
          className="carousel__arrow"
          aria-label="Previous group"
          onClick={() => go(active - 1)}
          disabled={active === 0}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div className="carousel__dots">
          {groups.map((g, i) => (
            <button
              key={g.head}
              type="button"
              className={`carousel__dot${i === active ? " is-active" : ""}`}
              aria-label={`Show: ${g.head}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel__arrow"
          aria-label="Next group"
          onClick={() => go(active + 1)}
          disabled={active === groups.length - 1}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Scroll-reveal motion layer. Card rows fade in once, left to right, as they
 * come into view. Styles live in globals.css ("Motion layer").
 *
 * Deliberately modest, because hidden content is worse than no motion:
 * - Only card rows reveal. Headings and body text are always present at first
 *   paint; a fast scroller never lands on an empty band.
 * - Nothing within the first two viewports is ever hidden.
 * - Opacity only, 200ms. No movement.
 * - Anything the observer misses (a jump past it, a tab restored in the
 *   background) is shown on the next scroll once it's on or above the screen.
 *   Printing shows everything, and automated browsers (screenshots, previews,
 *   crawlers) get no motion at all.
 * - Honors prefers-reduced-motion and #anchor arrivals: nothing is hidden.
 * - Progressive: without JS nothing is ever hidden. Attributes are removed
 *   after the reveal settles so cards return to their own hover transitions.
 */
const ROWS = [
  ".trio",
  ".tile-grid",
  ".who-grid",
  ".sp-stage", // /selling process: each stage's node, then its card
  ".platform", // /approach: the three technology layers
  ".benefits__grid", // goal cards
  ".points", // selling "What you can count on" cards
].join(", ");
const MAX_STAGGER_STEP = 4; // caps the last card's delay (4 x 50ms)
const SETTLE_MS = 600; // longest reveal (200ms + 200ms delay) plus headroom

export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (navigator.webdriver) return;
    // Arriving at a #anchor (e.g. an index link → /working-toward#goal): keep the
    // page static so the target is visible the moment the jump lands.
    if (window.location.hash) return;

    const timers: number[] = [];
    const pending = new Set<Element>();

    const show = (el: Element) => {
      if (!pending.delete(el)) return;
      io.unobserve(el);
      el.setAttribute("data-reveal-row", "shown");
      timers.push(window.setTimeout(() => el.removeAttribute("data-reveal-row"), SETTLE_MS));
    };
    const showAll = () => [...pending].forEach(show);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && show(e.target)),
      // Fires once the row is ~10% of the viewport into view.
      { rootMargin: "0px 0px -10% 0px" },
    );

    const twoViewports = window.innerHeight * 2;
    document.querySelectorAll(ROWS).forEach((el) => {
      if (el.getBoundingClientRect().top + window.scrollY < twoViewports) return;
      Array.from(el.children).forEach((child, i) =>
        (child as HTMLElement).style.setProperty("--reveal-i", String(Math.min(i, MAX_STAGGER_STEP))),
      );
      el.setAttribute("data-reveal-row", "pending");
      pending.add(el);
      io.observe(el);
    });

    // Fallback for rows the observer never reports: anything whose top is on or
    // above the bottom of the screen is shown on the next scroll frame.
    let frame = 0;
    const sweep = () => {
      frame = 0;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeprint", showAll);
    window.addEventListener("pageshow", sweep);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeprint", showAll);
      window.removeEventListener("pageshow", sweep);
      if (frame) window.cancelAnimationFrame(frame);
      timers.forEach((t) => window.clearTimeout(t));
      // Never leave anything hidden or mid-reveal behind (route change, remount).
      document.querySelectorAll("[data-reveal-row]").forEach((el) => el.removeAttribute("data-reveal-row"));
    };
  }, [pathname]);

  return null;
}

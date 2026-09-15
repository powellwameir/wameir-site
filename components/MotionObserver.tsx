"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Scroll-reveal motion layer. Section content fades and rises once as it enters
 * the viewport; card rows assemble left to right with a light stagger. Styles
 * live in globals.css ("Motion layer").
 *
 * - Honors prefers-reduced-motion: does nothing at all, content stays static.
 * - Progressive: without JS (or IntersectionObserver) nothing is ever hidden.
 * - Only below-the-fold targets are marked, so nothing animates on load (the
 *   hero entrance is the one on-load moment) and anchor jumps land on content.
 * - Once, never reversed; attributes are removed after the reveal settles so
 *   elements return to their own hover transitions.
 */
const BLOCKS = "main .section > .wrap";
const ROWS = [
  ".trio",
  ".tile-grid",
  ".who-grid",
  ".process",
  ".benefits__grid", // each benefits group's cards
  ".points", // selling "What you can count on" cards
].join(", ");
const MAX_STAGGER_STEP = 4; // caps the last card's delay (4 x 70ms)
const SETTLE_MS = 900; // longest reveal (400ms + 280ms delay) plus headroom

export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fold = window.innerHeight * 0.85;
    const belowFold = (el: Element) => el.getBoundingClientRect().top > fold;
    const timers: number[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          io.unobserve(el);
          const attr = el.hasAttribute("data-reveal-row") ? "data-reveal-row" : "data-reveal";
          el.setAttribute(attr, "shown");
          timers.push(window.setTimeout(() => el.removeAttribute(attr), SETTLE_MS));
        }
      },
      // Fires once the element is ~15% of the viewport into view.
      { rootMargin: "0px 0px -15% 0px" },
    );

    document.querySelectorAll(BLOCKS).forEach((el) => {
      if (!belowFold(el)) return;
      el.setAttribute("data-reveal", "pending");
      io.observe(el);
    });
    document.querySelectorAll(ROWS).forEach((el) => {
      if (!belowFold(el)) return;
      Array.from(el.children).forEach((child, i) =>
        (child as HTMLElement).style.setProperty(
          "--reveal-i",
          String(Math.min(i, MAX_STAGGER_STEP)),
        ),
      );
      el.setAttribute("data-reveal-row", "pending");
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      // Never leave anything hidden or mid-reveal behind (route change, remount).
      document.querySelectorAll("[data-reveal], [data-reveal-row]").forEach((el) => {
        el.removeAttribute("data-reveal");
        el.removeAttribute("data-reveal-row");
      });
    };
  }, [pathname]);

  return null;
}

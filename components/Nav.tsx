"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WeirMark } from "./WeirLattice";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/selling", label: "Selling" },
  { href: "/approach", label: "Approach" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`} data-open={open}>
      <div className="nav__inner">
        <Link className="nav__brand" href="/" aria-label="Wameir — home">
          <WeirMark size={38} />
          <b>WAMEIR</b>
        </Link>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__links">
            {LINKS.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="nav__link"
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Dual CTA (§5.1 fork) — both paths reachable from the bar / menu. */}
          <div className="nav__cta">
            <Link className="btn btn--line-light nav__cta-line" href="/#communities">
              For your community
            </Link>
            <Link className="btn btn--gold" href="/selling">
              Sell your company
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

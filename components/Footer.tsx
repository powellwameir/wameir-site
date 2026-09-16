import Link from "next/link";
import Button from "./Button";
import { WeirMark } from "./WeirLattice";
import {
  DISCLAIMER,
  CONTACT_EMAIL,
  LOCATION,
  COPYRIGHT,
  PHONE,
  LINKEDIN_URL,
  SCHEDULING_URL,
  schedulingHref,
} from "@/lib/content";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/working-toward", label: "Communities" },
  { href: "/lower-taxes", label: "Lower taxes" },
  { href: "/lower-insurance", label: "Lower insurance" },
  { href: "/home-monitoring", label: "Home monitoring" },
  { href: "/selling", label: "Selling" },
  { href: "/approach", label: "Approach" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Closing band — every page already ends with the contact section, so this
          offers the one thing that section doesn't lead with: a founder call. */}
      <div className="footer__cta">
        <div className="wrap footer__cta-inner">
          <p className="footer__cta-line">
            Community management, done right — in Greater Houston.
          </p>
          <Button
            href={schedulingHref()}
            variant="gold"
            arrow
            className="btn--lg"
            cta="book-call"
            ctaLocation="footer"
            {...(SCHEDULING_URL ? { target: "_blank", rel: "noopener" } : {})}
          >
            Book a confidential call
          </Button>
        </div>
      </div>
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <WeirMark size={34} />
            <b>WAMEIR</b>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="footer__contact">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            {PHONE && (
              <>
                <br />
                <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
              </>
            )}
            <br />
            {LOCATION}
            {LINKEDIN_URL && (
              <>
                <br />
                <a href={LINKEDIN_URL} target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </>
            )}
          </div>
        </div>
        <div className="footer__bottom">
          <span>{COPYRIGHT}</span>
          {/* Early-stage disclaimer — verbatim (§7). */}
          <span className="disc">{DISCLAIMER}</span>
        </div>
      </div>
    </footer>
  );
}

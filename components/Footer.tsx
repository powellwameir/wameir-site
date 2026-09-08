import Link from "next/link";
import { WeirMark } from "./WeirLattice";
import { DISCLAIMER, CONTACT_EMAIL, LOCATION, COPYRIGHT } from "@/lib/content";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/selling", label: "Selling" },
  { href: "/approach", label: "Approach" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="footer">
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
            <br />
            {LOCATION}
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

import Link from "next/link";
import { WeirMark } from "./WeirLattice";
import {
  DISCLAIMER,
  CONTACT_EMAIL,
  LOCATION,
  COPYRIGHT,
  PHONE,
  LINKEDIN_URL,
} from "@/lib/content";
import { GROUPS } from "@/lib/goals";

/*
 * Footer link groups, by audience. Founder links use the nav's own labels; the
 * community group lists every goal with a page of its own, named exactly as
 * its goal, read from lib/goals so a new goal page appears here automatically.
 */
const FOUNDER_LINKS = [
  { href: "/selling", label: "Selling" },
  { href: "/approach", label: "Approach" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
];

const COMMUNITY_LINKS = [
  { href: "/working-toward", label: "All eight goals" },
  ...GROUPS.flatMap((group) =>
    group.goals.flatMap((g) => (g.link ? [{ href: g.link.href, label: g.title }] : [])),
  ),
];

function LinkGroup({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  return (
    <div className="footer__col">
      <p className="eyebrow">{label}</p>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <Link className="footer__brand" href="/" aria-label="Wameir — home">
            <WeirMark size={34} />
            <b>WAMEIR</b>
          </Link>
          <nav className="footer__nav" aria-label="Footer">
            <LinkGroup label="For founders" links={FOUNDER_LINKS} />
            <LinkGroup label="For communities" links={COMMUNITY_LINKS} />
          </nav>
          <div className="footer__contact">
            <p className="eyebrow">Wameir</p>
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
          <span>
            {COPYRIGHT} <Link href="/privacy">Privacy</Link>
          </span>
          {/* Early-stage disclaimer — verbatim (§7). */}
          <span className="disc">{DISCLAIMER}</span>
        </div>
      </div>
    </footer>
  );
}

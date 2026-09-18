import Link from "next/link";
import Arrow from "./Arrow";
import Section from "./Section";
import BenefitsGrid from "./BenefitsGrid";
import JsonLd from "./JsonLd";
import { GROUPS } from "@/lib/goals";
import { SITE_URL } from "@/lib/seo";

const COUNT: Record<number, string> = { 1: "one", 2: "two", 3: "three", 4: "four" };

/*
 * The way out of a goal page: the other goals in the same group that have a
 * page of their own, then a link back to all eight. Sits between the
 * honest-limits band and the contact band, so a reader who finishes one page
 * reaches the next without going through the footer.
 *
 * Everything is read from lib/goals, so a new goal page appears here once its
 * goal carries a `link`. Also emits the page's BreadcrumbList structured data.
 */
export default function MoreGoals({ current }: { current: string }) {
  const group = GROUPS.find((gr) => gr.goals.some((g) => g.link?.href === current));
  if (!group) throw new Error(`No goal links to "${current}"`);

  const goal = group.goals.find((g) => g.link?.href === current)!;
  // Breadcrumbs for search: Home › For communities › this goal. The same
  // cluster the page belongs to for readers, stated for crawlers.
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", item: SITE_URL },
      { name: "For communities", item: `${SITE_URL}/working-toward` },
      { name: goal.title, item: `${SITE_URL}${current}` },
    ].map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })),
  };

  const items = group.goals
    .filter((g) => g.link && g.link.href !== current)
    .map((g) => ({
      icon: g.icon,
      title: g.title,
      goal: g.goal.charAt(0).toUpperCase() + g.goal.slice(1),
      href: g.link!.href,
    }));

  return (
    <Section bg="paper" className="more-goals">
      <JsonLd data={breadcrumbs} />
      <div className="wrap">
        {/* Not the group's name: the page's eyebrow already says it. */}
        <h2 className="group-head">The other {COUNT[items.length] ?? items.length} in this group</h2>
        <BenefitsGrid groups={[{ head: "", items }]} cols={2} />
        <Link className="teaser__link" href="/working-toward">
          See all eight goals <Arrow />
        </Link>
      </div>
    </Section>
  );
}

import Link from "next/link";
import Arrow from "./Arrow";
import Section from "./Section";
import BenefitsGrid from "./BenefitsGrid";
import { GROUPS } from "@/lib/goals";

/*
 * The way out of a goal page: the other goals in the same group that have a
 * page of their own, then a link back to all eight. Sits between the
 * honest-limits band and the contact band, so a reader who finishes one page
 * reaches the next without going through the footer.
 *
 * Everything is read from lib/goals, so a new goal page appears here once its
 * goal carries a `link`.
 */
export default function MoreGoals({ current }: { current: string }) {
  const group = GROUPS.find((gr) => gr.goals.some((g) => g.link?.href === current));
  if (!group) throw new Error(`No goal links to "${current}"`);

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
      <div className="wrap">
        <h2 className="eyebrow eyebrow--heading">{group.head}</h2>
        <BenefitsGrid groups={[{ head: "", items }]} cols={2} />
        <Link className="teaser__link" href="/working-toward">
          See all eight goals <Arrow />
        </Link>
      </div>
    </Section>
  );
}

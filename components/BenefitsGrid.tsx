import Link from "next/link";
import Icon, { type IconName } from "./Icon";

export type BenefitGroup = {
  head: string;
  items: { icon: IconName; title: string; goal: string; pocket: string; slug: string }[];
};

/*
 * Resident-benefits grid (§5.1). Every goal visible at once, grouped under its
 * header — no carousel, no JS. Each card links to its goal on /working-toward.
 * Each group's row picks up the scroll-reveal stagger from MotionObserver
 * (.benefits__grid).
 */
export default function BenefitsGrid({ groups }: { groups: BenefitGroup[] }) {
  return (
    <div className="benefits">
      {groups.map((g) => (
        <div className="benefits__group" key={g.head}>
          <h3 className="benefits__head">{g.head}</h3>
          <div className="benefits__grid">
            {g.items.map((item) => (
              <Link
                className="bcard bcard--link"
                href={`/working-toward#${item.slug}`}
                key={item.title}
              >
                <span className="bcard__icon">
                  <Icon name={item.icon} size={28} />
                </span>
                <span className="bcard__arrow" aria-hidden="true">
                  →
                </span>
                <h4 className="bcard__title">{item.title}</h4>
                {/* Two short sentences: the goal, then the payoff. The full
                    reasoning is one click away on /working-toward. */}
                <p>{item.goal}</p>
                <p className="bcard__payoff">{item.pocket}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

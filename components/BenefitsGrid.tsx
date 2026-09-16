import Link from "next/link";
import Arrow from "./Arrow";
import Icon, { type IconName } from "./Icon";

export type BenefitGroup = {
  head: string;
  items: { icon: IconName; title: string; goal: string; pocket?: string; href: string }[];
};

/*
 * Goal cards (§5.1), grouped under an optional header (omitted when `head` is
 * empty). No carousel, no JS. Each card links to `href`: a goal's own page, or
 * its row on /working-toward. `cols={2}` lays a two-card row out as a pair
 * rather than leaving an empty third slot. Each row picks up the scroll-reveal
 * stagger from MotionObserver (.benefits__grid).
 */
export default function BenefitsGrid({
  groups,
  cols = 3,
}: {
  groups: BenefitGroup[];
  cols?: 2 | 3;
}) {
  return (
    <div className="benefits">
      {groups.map((g) => (
        <div className="benefits__group" key={g.head}>
          {g.head && <h3 className="benefits__head">{g.head}</h3>}
          <div className={`benefits__grid${cols === 2 ? " benefits__grid--two" : ""}`}>
            {g.items.map((item) => (
              <Link className="bcard bcard--link" href={item.href} key={item.title}>
                <span className="bcard__icon">
                  <Icon name={item.icon} size={28} />
                </span>
                <span className="bcard__arrow">
                  <Arrow />
                </span>
                <h3 className="bcard__title">{item.title}</h3>
                <p>{item.goal}</p>
                {item.pocket && <p className="bcard__payoff">{item.pocket}</p>}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

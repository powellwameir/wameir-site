import Icon, { type IconName } from "./Icon";

export type BenefitGroup = {
  head: string;
  items: { icon: IconName; title: string; pocket: string }[];
};

/*
 * Resident-benefits grid (§5.1). Every goal visible at once, grouped under its
 * header — no carousel, no JS. Each group's row picks up the scroll-reveal
 * stagger from MotionObserver (.benefits__grid).
 */
export default function BenefitsGrid({ groups }: { groups: BenefitGroup[] }) {
  return (
    <div className="benefits">
      {groups.map((g) => (
        <div className="benefits__group" key={g.head}>
          <h3 className="benefits__head">{g.head}</h3>
          <div className="benefits__grid">
            {g.items.map((item) => (
              <div className="bcard" key={item.title}>
                <span className="bcard__icon">
                  <Icon name={item.icon} size={28} />
                </span>
                <h4 className="bcard__title">{item.title}</h4>
                {/* Home summary stays scannable: title + one payoff line only.
                    The full reasoning lives on the /working-toward deep-dive. */}
                <p className="bcard__payoff">{item.pocket}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

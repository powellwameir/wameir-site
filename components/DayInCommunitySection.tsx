import Section from "./Section";
import VisionIntro from "./VisionIntro";
import Icon, { type IconName } from "./Icon";

/*
 * "A day in a community" (§5.1) — the same day run two ways, as one ruled
 * ledger. Copy is verbatim from the design spec; the icons come from the
 * site's own family rather than the spec's inline SVGs.
 */
type Row = { icon: IconName; time: string; title: string; line: string };

const USUAL: Row[] = [
  {
    icon: "mail-x",
    time: "Monday → the following week",
    title: "You email about a gate code",
    line: "It lands in a shared inbox behind sixty others. You wait, then email again.",
  },
  {
    icon: "doc-alert",
    time: "Statement day",
    title: "Your bill has a charge you don't recognize",
    line: "No breakdown, no context. Sorting it out means a phone call and a hold.",
  },
  {
    icon: "alert-triangle",
    time: "Too late",
    title: "A slow leak goes unnoticed",
    line: "By the time anyone sees it, it's a flooded floor and an insurance claim.",
  },
  {
    icon: "clock",
    time: "Whenever",
    title: "You never quite know where things stand",
    line: "Requests, decisions, money — all a little opaque, all a little slow.",
  },
];

const OURS: Row[] = [
  {
    icon: "chat-lines",
    time: "In seconds",
    title: "You ask about a gate code",
    line: "You get the answer right away, day or night — and a real person for anything that actually needs one.",
  },
  {
    icon: "doc-check",
    time: "Any time",
    title: "Your bill explains itself",
    line: "Every charge is clear and online. You see what you owe and why, without a phone call.",
  },
  {
    icon: "droplet-check",
    time: "Early",
    title: "A sensor catches the leak",
    line: "A small alert while it's still a $40 part — the flood, the claim, the disruption never happen.",
  },
  {
    icon: "list-status",
    time: "Always",
    title: "You can see where things stand",
    line: "Requests, decisions, and the books — open and current. An association you can trust.",
  },
];

function Column({
  variant,
  tag,
  head,
  rows,
}: {
  variant: "before" | "after";
  tag: string;
  head: string;
  rows: Row[];
}) {
  return (
    <div className={`ledger__col ledger__col--${variant}`}>
      <div className="ledger__head">
        <span className="ledger__tag">{tag}</span>
        <h3 className="ledger__h">{head}</h3>
      </div>
      {rows.map((r) => (
        <div className="ledger__row" key={r.title}>
          <span className="ledger__ic" aria-hidden="true">
            <Icon name={r.icon} size={20} />
          </span>
          <div>
            <p className="ledger__time">{r.time}</p>
            <p className="ledger__t">{r.title}</p>
            <p className="ledger__s">{r.line}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DayInCommunitySection() {
  return (
    <Section bg="navy">
      <div className="wrap">
        <VisionIntro
          eyebrow="The vision"
          onDark
          lede="Most of what makes an HOA frustrating is small, daily friction — the email that sits for a week, the bill no one can explain, the problem found too late. Here's the same day, run the way we think it should be."
          note="Wameir is early-stage. This is the standard we're working toward for every community we take on — not a service running today."
        >
          A day in a community <span className="g">we&apos;re building toward.</span>
        </VisionIntro>

        <div className="ledger">
          <Column variant="before" tag="The usual" head="How it often goes" rows={USUAL} />
          <Column
            variant="after"
            tag="The Wameir way"
            head="How we want it to go"
            rows={OURS}
          />
        </div>

        <p className="vsec-closer">
          The technology stays out of sight. What you feel is a community that{" "}
          <span className="g">answers, explains, and looks ahead.</span>
        </p>
      </div>
    </Section>
  );
}

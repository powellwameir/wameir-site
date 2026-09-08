import Link from "next/link";
import { WeirWatermark } from "@/components/WeirLattice";

/**
 * Branded 404. Nav and Footer come from the root layout, so this just fills the
 * main slot with an in-voice message and clear ways back.
 */
export default function NotFound() {
  return (
    <section className="section section--navy on-navy invite" style={{ minHeight: "62vh" }}>
      <WeirWatermark className="invite__watermark" />
      <div className="wrap">
        <span className="eyebrow eyebrow-gold-light">Page not found</span>
        <h1 className="t-h2" style={{ marginTop: 16 }}>
          This one got away from us.
        </h1>
        <p style={{ color: "var(--cream-70)", marginTop: 16, maxWidth: "48ch" }}>
          The page you were after isn&apos;t here. Let&apos;s get you back to
          something useful.
        </p>
        <div
          style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}
        >
          <Link className="btn btn--gold" href="/">
            Back home
          </Link>
          <Link className="btn btn--line-light" href="/selling">
            Thinking about selling?
          </Link>
          <Link className="btn btn--line-light" href="/#contact">
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}

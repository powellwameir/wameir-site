import { STATUS_AS_OF, STATUS_AS_OF_ISO } from "@/lib/content";

/**
 * The early-stage status, said once per page in one place. It replaces the
 * separate early-stage callouts and repeated "not a service running today"
 * sentences (audit v5 G-1/G-9/G-12), so pages can talk about goals without
 * re-qualifying every paragraph.
 *
 * Dated (audit v4 §1): a status claim with no date can't be judged for
 * freshness, and this one is meant to stop being true. The date comes from
 * STATUS_AS_OF in lib/content, updated by hand.
 *
 * Works on both grounds: ink by default, cream inside .page-header or an
 * .on-navy band, the same convention .eyebrow uses.
 */
export default function StatusStrip() {
  return (
    <p className="status-strip">
      <span className="status-strip__dot" aria-hidden="true" />
      <span>
        <strong>
          Early stage, <time dateTime={STATUS_AS_OF_ISO}>{STATUS_AS_OF}</time>.
        </strong>{" "}
        Wameir hasn&apos;t bought its first company yet, so everything here is a goal,
        not a service running today.
      </span>
    </p>
  );
}

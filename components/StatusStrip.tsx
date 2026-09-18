/**
 * The early-stage status, said once per page in one place: a single line in
 * the page header. It replaces the separate early-stage callouts and repeated
 * "not a service running today" sentences (audit v5, G-1/G-9/G-12), so the
 * pages can talk about goals without re-qualifying every paragraph.
 */
export default function StatusStrip() {
  return (
    <p className="status-strip">
      <span className="status-strip__dot" aria-hidden="true" />
      <span>
        <strong>Early stage.</strong> Wameir hasn&apos;t bought its first company yet, so
        everything here is a goal, not a service running today.
      </span>
    </p>
  );
}

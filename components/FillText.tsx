/*
 * Renders copy that may still contain `[FILL: ...]` placeholders (audit v5 F-2:
 * the bios keep the shape of a fact we don't have yet rather than inventing one).
 *
 * Each placeholder renders as a dashed warning chip, reusing the .gated
 * treatment already used for unconsented photos, so an unfilled bio is obvious
 * on the preview instead of shipping as literal brackets in body copy.
 * `npm run check:fills` is the hard gate; this is the visible one.
 */
const FILL = /(\[FILL:[^\]]*\])/g;

export default function FillText({ text }: { text: string }) {
  const parts = text.split(FILL);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[FILL:") ? (
          <mark className="fill" key={i} title="Placeholder — needs a real fact before launch">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

import Picture from "./Picture";

export type SellerPoint = {
  heading: string;
  body: string;
  base: string; // graded asset base, e.g. "/img/seller-longterm"
  alt: string;
};

/*
 * "What you can count on" (§5.2): the three points side by side, each with its
 * graded photo — everything visible at once, no carousel. MotionObserver
 * staggers the row (.points).
 */
export default function SellerPoints({ points }: { points: SellerPoint[] }) {
  return (
    <div className="points">
      {points.map((p) => (
        <article className="card card--media" key={p.heading}>
          <Picture
            base={p.base}
            widths={[800, 1200]}
            sizes="(max-width: 880px) 100vw, 33vw"
            alt={p.alt}
            width={1200}
            height={800}
            className="card__media"
            imgClassName="card__media-img"
          />
          <div className="card__body">
            <h3>{p.heading}</h3>
            <p>{p.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

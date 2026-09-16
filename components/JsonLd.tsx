import { jsonLdHtml } from "@/lib/seo";

/** Renders schema.org structured data. Server-only; ships no JS. */
export default function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(data)} />;
}

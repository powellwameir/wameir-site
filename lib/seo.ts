import type { Metadata } from "next";

/*
 * Per-page metadata in one place. Next.js replaces (does not merge) a parent's
 * openGraph and twitter objects when a page sets its own, so every page builds
 * them here: the share image, site name and card type can't be dropped by a
 * page that only meant to change its title. Canonical is set per page, since
 * metadataBase alone doesn't emit one.
 */
export const SITE_URL = "https://wameir.com";
export const SITE_NAME = "Wameir";
/** The site description: root default, share cards, Home, Organization data. */
export const SITE_DESCRIPTION =
  "Wameir is buying HOA management companies in Greater Houston with its own money, and investing in their local teams, modern technology and better operations.";
const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "Wameir" };

export function pageMetadata({
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  /** Route path, e.g. "/lower-taxes". */
  path: string;
  title: string;
  description: string;
  /** Use the title as-is instead of appending " | Wameir" (Home). */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** Structured data as a script tag. `<` is escaped so no string can close it. */
export function jsonLdHtml(data: object): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

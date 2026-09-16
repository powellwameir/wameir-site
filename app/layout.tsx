import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionObserver from "@/components/MotionObserver";
import JsonLd from "@/components/JsonLd";
import { CONTACT_EMAIL, LOCATION } from "@/lib/content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

// Fonts self-hosted at build time via next/font (§3/§8 — no runtime CDN, automatic
// font-display: swap, no layout-shift). Exposed as CSS variables consumed in globals.css.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/*
 * Organization structured data. Only facts already public on the site: the
 * legal entity, phone and LinkedIn placeholders in lib/content stay out until
 * they're real, rather than being published empty or guessed.
 */
const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  areaServed: LOCATION,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wameir.com"),
  title: {
    default: "Wameir | Community management, done right",
    template: "%s | Wameir",
  },
  description: SITE_DESCRIPTION,
  // Fallback for routes without their own metadata (404). Pages build theirs
  // with pageMetadata(), which sets canonical, openGraph and twitter together.
  // One description everywhere: the share card used to say something different.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Wameir | Community management, done right",
    description: SITE_DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Wameir" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wameir | Community management, done right",
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#142036",
  colorScheme: "light", // Light-lock (§9)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MotionObserver />
        <JsonLd data={ORGANIZATION} />
        {/*
          Analytics (§12): privacy-friendly Cloudflare Web Analytics — no cookies,
          no PII. Enable by adding the beacon token from the Cloudflare dashboard.
          TODO(§12): set data-cf-beacon token, then uncomment.
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token":"REPLACE_WITH_TOKEN"}'></script>
        */}
      </body>
    </html>
  );
}

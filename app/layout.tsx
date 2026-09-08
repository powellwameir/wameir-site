import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://wameir.com"),
  title: {
    default: "Wameir | Community management, done right",
    template: "%s | Wameir",
  },
  description:
    "Wameir acquires exceptional HOA management companies in Greater Houston and invests in modern technology, stronger teams, and better operations.",
  openGraph: {
    type: "website",
    siteName: "Wameir",
    title: "Wameir | Community management, done right",
    description:
      "We acquire exceptional HOA management companies and invest in modern technology, stronger teams, and better operations.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Wameir" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wameir | Community management, done right",
    description: "Community management, done right. Greater Houston, Texas.",
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

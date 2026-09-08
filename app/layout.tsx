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
    // TODO(§8): add Open Graph share image (1200×630) once the asset exists.
  },
  twitter: {
    card: "summary",
    title: "Wameir | Community management, done right",
    description: "Community management, done right. Greater Houston, Texas.",
  },
  icons: {
    // Weir mark favicon (inline SVG data URI) — navy field, gold interlocking lattice.
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 140'%3E%3Crect width='240' height='140' fill='%23142036'/%3E%3Cpolyline points='30,38 70,96 110,38 150,96 190,38' fill='none' stroke='%23C9A85F' stroke-width='15' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpolyline points='30,102 70,44 110,102 150,44 190,102' fill='none' stroke='%23A8854A' stroke-width='15' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
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

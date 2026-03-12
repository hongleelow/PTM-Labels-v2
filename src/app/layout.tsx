import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/ui/MobileCTA";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/siteConfig";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "label manufacturer Malaysia",
    "custom labels",
    "shrink sleeve labels",
    "self-adhesive labels",
    "sticker printing Malaysia",
    "label printing Johor",
    "product packaging labels",
    "PTM Labels",
  ],
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <LocalBusinessJsonLd />
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}

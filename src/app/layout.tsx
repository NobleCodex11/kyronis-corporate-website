import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/config/company";
import { assets } from "@/config/assets";
import { seo } from "@/config/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,

  // ── Icons & Browser Tab ──────────────────────────────
  icons: {
    icon: assets.favicon,
    shortcut: assets.favicon,
    apple: assets.appleTouchIcon,
  },

  // ── Open Graph ───────────────────────────────────────
  openGraph: {
    title: seo.defaultTitle,
    description: seo.description,
    siteName: company.name,
    type: "website",
    locale: seo.locale,
    images: [
      {
        url: assets.ogImage,
        width: 1200,
        height: 630,
        alt: `${company.name} — ${company.tagline}`,
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.description,
    images: [assets.twitterImage],
  },

  // ── Web App Manifest ─────────────────────────────────
  manifest: "/manifest.webmanifest",

  // ── Robots ───────────────────────────────────────────
  robots: seo.robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

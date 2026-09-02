import type { Metadata } from "next";
import { Manrope, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://convertix-opal.vercel.app"),
  title: {
    default: "CONVERTIX — Luxury Website Design & Engineering for Service Businesses",
    template: "%s | Convertix",
  },
  description:
    "Convertix is a luxury digital design & web engineering studio by Selenix Technology. We design and build bespoke, high-converting Next.js websites, booking funnels, and 1-tap WhatsApp client acquisition platforms for modern service companies.",
  applicationName: "Convertix",
  generator: "Next.js 16",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Brand Specific
    "Convertix",
    "CONVERTIX",
    "Convertix Studio",
    "Convertix Web Design",
    "Convertix Digital Studio",
    "Convertix Selenix",
    "Convertix India",
    "Convertix official website",
    "Selenix Technology",
    // Core Services
    "bespoke website design for services",
    "service business web design",
    "high converting service websites",
    "luxury web design studio",
    "Next.js 16 web development agency",
    "sub second website speed optimization",
    "service booking engine website",
    "1-tap WhatsApp website desk",
    "appointment booking website builder",
    "dealership website design",
    "medical clinic web development",
    "consultant luxury website",
    "custom Next.js vs WordPress",
    "high ticket service websites",
    "best web design agency India",
    "editorial website design",
    "100 Lighthouse score website",
    "automated CRM lead capture website",
  ],
  authors: [{ name: "Convertix Studio" }, { name: "Selenix Technology" }],
  creator: "Selenix Technology",
  publisher: "Convertix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-IN": "/",
    },
  },
  verification: {
    google: "googleeef78ba5c027569d",
  },
  openGraph: {
    title: "CONVERTIX — Luxury Website Design & Engineering for Service Businesses",
    description:
      "We design and build bespoke, high-converting Next.js websites, booking funnels, and 1-tap WhatsApp client acquisition platforms for modern service companies.",
    url: "https://convertix-opal.vercel.app/",
    siteName: "Convertix",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://convertix-opal.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Convertix — Luxury Website Design & Web Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONVERTIX — Luxury Website Design & Engineering for Service Businesses",
    description:
      "Bespoke, sub-second Next.js websites, booking funnels, and WhatsApp lead capture for service companies.",
    images: ["https://convertix-opal.vercel.app/og-image.jpg"],
    creator: "@convertix",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <head>
        {/* JSON-LD Structured Data Schema for Google & AI Search Engines */}
        <JsonLd />
      </head>
      <body className="bg-[#0a0a0a] text-[#f3f1ec] min-h-screen relative font-sans selection:bg-[#e05a2b] selection:text-white">
        {/* Subtle Editorial Grain */}
        <div className="editorial-grain pointer-events-none" />

        {/* Minimal Custom Cursor (Desktop Only) */}
        <CustomCursor />

        {/* Global Floating WhatsApp Desk */}
        <WhatsAppButton />

        {/* Luxury Cookie Consent Popup */}
        <CookieConsent />

        {children}
      </body>
    </html>
  );
}

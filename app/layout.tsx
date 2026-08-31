import type { Metadata } from "next";
import { Manrope, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

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
  title: "CONVERTIX — The Dealership Operating System | Automotive Retail Technology",
  description:
    "An intelligent operating system for automotive dealerships. Convertix unifies showroom lead response, workshop service retention, and proactive insurance workflows into one cohesive platform.",
  keywords: [
    "automotive dealership software",
    "dealer CRM",
    "automotive lead management",
    "car dealership lead management",
    "dealer service reminders",
    "insurance renewal reminders",
    "DMS integration",
    "automotive sales software",
    "Selenix Technology",
  ],
  authors: [{ name: "Selenix Technology" }],
  openGraph: {
    title: "CONVERTIX — The Dealership Operating System",
    description:
      "AI-powered lead, service and insurance workflows engineered specifically for modern automotive retail.",
    url: "https://convertix.in",
    siteName: "Convertix",
    locale: "en_IN",
    type: "website",
  },
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
      <body className="bg-[#0a0a0a] text-[#f3f1ec] min-h-screen relative font-sans selection:bg-[#e05a2b] selection:text-white">
        {/* Subtle Editorial Grain */}
        <div className="editorial-grain pointer-events-none" />

        {/* Minimal Custom Cursor (Desktop Only) */}
        <CustomCursor />

        {/* Global Floating WhatsApp Desk */}
        <WhatsAppButton />

        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Convertix — The Dealership Operating System | AI-Powered Automotive Retail",
  description:
    "Transform dealership lead response speed from 24 hours to 10 minutes. AI-powered lead management, predictive service reminders, insurance renewals, SIM-integrated calling, and 2-way OEM DMS integration.",
  keywords: [
    "automotive dealership software",
    "dealer CRM",
    "automotive CRM",
    "lead management for dealerships",
    "car dealership lead management",
    "automotive lead management",
    "dealer service reminders",
    "automotive service reminders",
    "insurance renewal reminders",
    "DMS integration",
    "AI dealership software",
    "automotive sales software",
    "dealer management software",
    "lead follow-up automation",
    "automotive CRM India",
    "Selenix Technology",
  ],
  authors: [{ name: "Selenix Technology" }],
  openGraph: {
    title: "Convertix — The Dealership Operating System",
    description:
      "AI-powered lead, service and insurance workflows built specifically for modern automotive retail. 10-minute response speed, SIM-integrated calling, and 2-way DMS sync.",
    url: "https://convertix.in",
    siteName: "Convertix",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertix — The Dealership Operating System",
    description:
      "AI-powered lead, service and insurance workflows built specifically for modern automotive retail.",
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
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} dark antialiased scroll-smooth`}
    >
      <body className="bg-[#07080a] text-[#f5f6f8] min-h-screen relative font-sans selection:bg-[#d4ff00] selection:text-black">
        {/* Subtle Editorial Grain */}
        <div className="editorial-grain pointer-events-none" />

        {/* Fluid Magnetic Cursor */}
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}

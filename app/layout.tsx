import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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

export const metadata: Metadata = {
  title: "CONVERTIX — The Dealership Operating System | Luxury Automotive Retail Technology",
  description:
    "A new standard for automotive retail. Convertix unifies lead response, service retention, and insurance workflows into an intelligent operating system built for modern dealerships.",
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
      className={`${spaceGrotesk.variable} ${playfair.variable} ${cormorant.variable} ${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="bg-[#0a0a0a] text-[#f3f1ec] min-h-screen relative font-sans selection:bg-[#e05a2b] selection:text-white">
        {/* Subtle Editorial Grain */}
        <div className="editorial-grain pointer-events-none" />

        {/* Minimal Luxury Custom Cursor */}
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}

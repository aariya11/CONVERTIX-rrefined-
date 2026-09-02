import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Studio & Selenix Technology",
  description:
    "Learn about Convertix, a luxury digital design and web engineering studio by Selenix Technology rescuing service businesses from generic templates and slow websites.",
  keywords: [
    "about Convertix",
    "Selenix Technology studio",
    "luxury web design studio India",
    "Next.js web agency mission",
    "Convertix founders",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Convertix | Digital Design & Engineering Studio",
    description:
      "Convertix by Selenix Technology engineers bespoke, high-converting digital platforms for service companies.",
    url: "https://convertix-opal.vercel.app/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

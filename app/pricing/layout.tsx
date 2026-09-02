import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Packages & Transparent Pricing",
  description:
    "Explore Convertix web development tiers, bespoke design packages, and custom enterprise digital flagships engineered for high-growth service businesses.",
  keywords: [
    "web development packages",
    "service website design cost",
    "Next.js agency pricing",
    "bespoke website packages",
    "Convertix pricing",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Web Development Packages & Pricing | Convertix",
    description:
      "Transparent web engineering packages and custom digital flagship delivery for service businesses.",
    url: "https://convertix-opal.vercel.app/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

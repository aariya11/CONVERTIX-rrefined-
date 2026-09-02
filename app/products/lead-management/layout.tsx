import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Web Design & Lead Funnels for Service Businesses",
  description:
    "Convertix designs and engineers luxury, bespoke editorial websites and high-converting lead funnels for service companies. Sub-second Next.js speed, 1-tap WhatsApp capture, and automated CRM sync.",
  keywords: [
    "bespoke web design for services",
    "service business lead funnels",
    "luxury web design studio",
    "high converting service websites",
    "Next.js web agency",
    "Convertix web design",
  ],
  alternates: {
    canonical: "/products/lead-management",
  },
  openGraph: {
    title: "Bespoke Web Design & Lead Funnels | Convertix",
    description:
      "Luxury editorial web design and sub-second performance platforms built for premium service companies.",
    url: "https://convertix-opal.vercel.app/products/lead-management",
  },
};

export default function LeadManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

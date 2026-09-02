import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Booking Engines & Retention Architecture",
  description:
    "Interactive service menus, dynamic appointment scheduling engines, WhatsApp booking flows, and automated client retention funnels for service businesses.",
  keywords: [
    "service booking engine website",
    "appointment scheduler web design",
    "online booking funnels",
    "client retention architecture",
    "Convertix booking platforms",
  ],
  alternates: {
    canonical: "/products/service-insurance",
  },
  openGraph: {
    title: "Service Booking Engines & Retention | Convertix",
    description:
      "Interactive booking systems and automated client re-engagement funnels engineered for modern service businesses.",
    url: "https://convertix-opal.vercel.app/products/service-insurance",
  },
};

export default function ServiceInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

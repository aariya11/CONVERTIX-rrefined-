import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project — Project Consultation & Direct Desk",
  description:
    "Schedule a private architectural consultation for your service business website. Connect directly with our Lead Web Architect via call, WhatsApp (+91 9078 019 472), or online proposal request.",
  keywords: [
    "contact Convertix",
    "hire web design studio",
    "start a website project",
    "Convertix phone number",
    "Convertix WhatsApp",
    "+91 9078 019 472",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Start Your Project | Convertix Studio Consultation",
    description:
      "Schedule a consultation for your bespoke website build with our Lead Web Architect.",
    url: "https://convertix-opal.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

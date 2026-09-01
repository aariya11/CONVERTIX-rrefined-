"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

const TIERS = [
  {
    name: "High-Converting Service Website",
    tagline: "Bespoke design & sub-second speed",
    badge: "Most Popular",
    description: "Designed for premium service businesses needing an elite digital brand presence that converts high-value website visitors into inquiries.",
    features: [
      "Bespoke Luxury Editorial UI/UX Design",
      "Next.js 16 + React 19 Server Architecture",
      "1-Tap Floating WhatsApp Business Inbound Desk",
      "Sub-Second 100 Lighthouse Performance",
      "Full Local & Technical SEO Schema Markup",
      "100% Mobile Responsive Touch Optimization",
    ],
  },
  {
    name: "Service Booking & Retention Platform",
    tagline: "Interactive booking & automated funnels",
    badge: "Maximum Inquiries",
    description: "Engineered for appointment-based service companies, clinics, dealerships, and consultants needing structured booking workflows.",
    features: [
      "Everything in High-Converting Website",
      "Interactive Service Menus & Pricing Packages",
      "Dynamic Appointment Booking & Calendar Integration",
      "Automated WhatsApp & Email Confirmation Webhooks",
      "Proactive Client Re-Engagement & Retention Sequences",
      "Real-Time Inquiry Analytics & Conversion Tracking",
    ],
  },
  {
    name: "Custom Enterprise Digital Flagship",
    tagline: "Multi-service enterprise web architecture",
    badge: "Bespoke Studio Delivery",
    description: "The complete custom digital platform engineered for multi-location service brands, luxury retail networks, and high-growth enterprises.",
    features: [
      "Everything in Booking & Retention Platform",
      "Multi-Branch & Multi-Location Service Portals",
      "Custom CRM Integration (HubSpot, Salesforce, Custom DMS)",
      "Bespoke Cinematic Motion & Interactive 3D Visuals",
      "Dedicated Senior Creative Director & Lead Architect",
      "Priority SLA, Cloud Edge Hosting & Ongoing Optimization",
    ],
  },
];

export default function PricingPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20website%20development%20packages%20for%20our%20service%20business.";

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f3f1ec] relative overflow-hidden">
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-44 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
              Web Development Packages
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Transparent packages.
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              engineered for
            </span>{" "}
            growth<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead max-w-2xl">
            Choose the right website engagement package for your service business—or commission a custom enterprise digital flagship.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="p-6 sm:p-9 rounded-3xl bg-[#101010] border border-white/10 flex flex-col justify-between shadow-xl relative"
              >
                <div>
                  <span className="text-xs font-sans font-semibold tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#e05a2b] inline-block mb-5 uppercase">
                    {tier.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-1.5">
                    {tier.name}
                  </h3>
                  <p className="text-xs font-sans text-[#b8b5af] mb-4">{tier.tagline}</p>

                  <p className="body-standard text-xs mb-6">
                    {tier.description}
                  </p>

                  <div className="space-y-2.5 pt-5 border-t border-white/10 mb-6">
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#b8b5af] block">
                      Included Capabilities
                    </span>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-sans text-white/90">
                        <Check className="w-3.5 h-3.5 text-[#e05a2b] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playChirp();
                      setContactOpen(true);
                    }}
                    className="w-full min-h-[48px] px-6 rounded-full bg-[#f3f1ec] text-black font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#e05a2b] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Support */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                Have Custom Technical Requirements?
              </h4>
              <p className="text-xs font-sans text-[#b8b5af]">
                Direct Studio Desk: +91 9078 019 472
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-black transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href="tel:+919078019472"
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#e05a2b] text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}

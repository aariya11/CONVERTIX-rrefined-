"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

const TIERS = [
  {
    name: "Lead Management Edition",
    tagline: "Speed-to-lead & showroom execution",
    badge: "Introductory Offer",
    description: "Designed for single and multi-outlet showrooms needing 10-minute response times, SIM calling, and AI lead scoring.",
    features: [
      "AI-Powered Intent Prioritization Matrix",
      "SIM-Integrated Outbound Dialing & Auto Logging",
      "Automated Multi-Source Capture (OEM DMS, CarWale, Web)",
      "Smart 15m & 24h Inactivity Escalation Sentinels",
      "2-Way OEM DMS Realtime Writeback",
      "Showroom Floor Consultant Mobile App",
    ],
  },
  {
    name: "Service & Insurance Edition",
    tagline: "Predictive workshop & policy renewals",
    badge: "High Workshop ROI",
    description: "Designed for dealership service centers to eliminate empty bays, mistimed reminders, and lost insurance renewals.",
    features: [
      "Predictive Odometer Mileage Extrapolation Algorithm",
      "60/30/15-Day Insurance Expiry Radar",
      "1-Click Interactive WhatsApp Workshop Bay Booking",
      "SIM-Verified Telecall Duration Audit",
      "Service Advisor Escalation Sentinel",
      "2-Way Workshop Management DMS Sync",
    ],
  },
  {
    name: "Unified Enterprise Dealership OS",
    tagline: "Complete multi-branch showroom & workshop suite",
    badge: "Flagship Group Protocol",
    description: "The complete Convertix operating system unifying sales, service, insurance, and executive governance across regional dealer groups.",
    features: [
      "Everything in Leads & Pre-Sales Edition",
      "Everything in Service & Insurance Edition",
      "Built-in Cross-Department Dealer Chat",
      "Multi-Branch Executive Pivot Dashboard & Cockpit",
      "Custom OEM DMS Integration & Security Compliance SLA",
      "Dedicated Automotive Technology Account Director",
    ],
  },
];

export default function PricingPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20explore%20Convertix%20pricing%20for%20our%20dealership.";

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f3f1ec] relative overflow-hidden mobile-safe-bottom">
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
              Editions & Licensing
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Start with one.
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              scale to
            </span>{" "}
            both<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead max-w-2xl">
            Deploy Convertix Lead Management or Convertix Service & Insurance independently—or activate the complete unified enterprise suite.
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
                Multi-Brand Enterprise Dealership Group?
              </h4>
              <p className="text-xs font-sans text-[#b8b5af]">
                Direct Commercial Desk: +91 9078 019 472
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

      {/* Mobile Floating Bar */}
      <MobileFloatingBar onOpenContact={() => setContactOpen(true)} />

      {/* Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}

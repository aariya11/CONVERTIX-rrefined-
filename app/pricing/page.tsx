"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, Check } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

const TIERS = [
  {
    name: "Leads & Pre-Sales Edition",
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
      <section className="relative pt-36 sm:pt-48 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
              EDITIONS & LICENSING
            </span>
          </div>

          <h1 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85] mb-8">
            START WITH ONE.
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              scale to
            </span>{" "}
            BOTH<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#b8b5af] max-w-2xl font-normal leading-relaxed">
            Deploy Convertix Lead Management or Convertix Service & Insurance independently—or activate the complete unified enterprise suite.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="p-8 sm:p-10 rounded-3xl bg-[#0e0e0e] border border-white/10 flex flex-col justify-between shadow-2xl relative"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#e05a2b] inline-block mb-6">
                    {tier.badge}
                  </span>

                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs font-mono text-[#b8b5af] mb-6">{tier.tagline}</p>

                  <p className="text-xs font-mono text-[#b8b5af] leading-relaxed mb-8">
                    {tier.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 block">
                      INCLUDED CAPABILITIES
                    </span>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-white/80">
                        <Check className="w-3.5 h-3.5 text-[#e05a2b] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playChirp();
                      setContactOpen(true);
                    }}
                    className="w-full py-4 px-6 rounded-full bg-[#f3f1ec] text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#e05a2b] hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Support */}
          <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Multi-Brand Enterprise Dealership Group?
              </h4>
              <p className="text-xs font-mono text-[#b8b5af]">
                Direct Commercial Desk: +91 7888 028 729
              </p>
            </div>

            <a
              href="tel:+917888028729"
              className="px-6 py-3 rounded-full bg-[#e05a2b] text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors"
            >
              Direct Dial
            </a>
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

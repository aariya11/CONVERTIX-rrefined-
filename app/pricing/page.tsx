"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Check, Sparkles, Zap, RotateCw, Layers, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

const TIERS = [
  {
    name: "Leads & Pre-Sales Edition",
    tagline: "Speed-to-lead & showroom execution",
    icon: Zap,
    accent: "#d4ff00",
    badge: "Introductory Offer",
    description: "Designed for single and multi-outlet showrooms needing 10-minute response times, SIM calling, and AI lead scoring.",
    features: [
      "AI-Powered Intent Prioritization Matrix",
      "SIM-Integrated Outbound Dialing & Auto Logging",
      "Automated Multi-Source Capture (OEM DMS, CarWale, Web)",
      "Smart 15m & 24h Inactivity Escalation Sentinels",
      "2-Way OEM DMS Realtime Writeback",
      "Showroom Floor Consultant Mobile App",
      "Standard WhatsApp & SMS Notification Templates",
    ],
  },
  {
    name: "Service & Insurance Edition",
    tagline: "Predictive workshop & policy renewals",
    icon: RotateCw,
    accent: "#00f58c",
    badge: "High Workshop ROI",
    description: "Designed for dealership service centers to eliminate empty bays, mistimed reminders, and lost insurance renewals.",
    features: [
      "Predictive Odometer Mileage Extrapolation Algorithm",
      "60/30/15-Day Insurance Expiry Radar",
      "1-Click Interactive WhatsApp Workshop Bay Booking",
      "SIM-Verified Telecall Duration Audit",
      "Service Advisor Escalation Sentinel",
      "2-Way Workshop Management DMS Sync",
      "Automated Customer Feedback & NPS Tracker",
    ],
  },
  {
    name: "Unified Enterprise Dealership OS",
    tagline: "Complete multi-branch showroom & workshop suite",
    icon: Layers,
    accent: "#ffffff",
    badge: "Flagship Group Protocol",
    description: "The complete Convertix operating system unifying sales, service, insurance, and executive governance across regional dealer groups.",
    features: [
      "Everything in Leads & Pre-Sales Edition",
      "Everything in Service & Insurance Edition",
      "Built-in Cross-Department Dealer Chat",
      "Multi-Branch Executive Pivot Dashboard & Cockpit",
      "Custom OEM DMS Integration & Security Compliance SLA",
      "Dedicated Automotive Technology Account Director",
      "Custom SLA Thresholds & Regional Role-Based Access",
    ],
  },
];

export function PricingContent() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07080a] text-[#f5f6f8] relative overflow-hidden">
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
      <section className="relative pt-36 pb-20 border-b border-white/10">
        <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-xs font-mono text-[#d4ff00] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT DEALERSHIP PRICING & EDITIONS</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
            START WITH ONE.
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase">
              scale to
            </span>{" "}
            BOTH.
          </h1>

          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed">
            Choose Convertix Lead Management or Convertix Service & Insurance—or deploy the complete unified enterprise suite tailored to your dealership group volume.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-24 bg-[#090b10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {TIERS.map((tier) => {
              const Icon = tier.icon;

              return (
                <div
                  key={tier.name}
                  className="p-8 rounded-3xl bg-[#0e1118] border border-white/12 flex flex-col justify-between shadow-2xl relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${tier.accent}15`,
                          color: tier.accent,
                          borderColor: `${tier.accent}30`,
                        }}
                      >
                        {tier.badge}
                      </span>
                      <Icon className="w-5 h-5" style={{ color: tier.accent }} />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-xs font-mono text-white/50 mb-6">{tier.tagline}</p>

                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-8">
                      {tier.description}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 block">
                        Included Platform Capabilities
                      </span>
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-white/80">
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: tier.accent }} />
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
                      className="w-full py-3.5 px-6 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: tier.accent,
                        color: tier.accent === "#ffffff" ? "#000000" : "#000000",
                      }}
                    >
                      <span>Request Dealership Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Assistance Card */}
          <div className="p-8 rounded-3xl bg-[#11141d] border border-white/12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#00f58c]/15 text-[#00f58c] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  Need a custom multi-brand group proposal?
                </h4>
                <p className="text-xs font-mono text-white/60">
                  Speak directly with our Chief Commercial Officer: +91 7888 028 729
                </p>
              </div>
            </div>

            <a
              href="tel:+917888028729"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Direct Dial: +91 7888 028 729
            </a>
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

export default function PricingPage() {
  return <PricingContent />;
}

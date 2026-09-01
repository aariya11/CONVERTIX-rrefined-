"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

export default function ServiceInsurancePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20building%20a%20service%20booking%20website%20for%20our%20business.";

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

      {/* Product Hero */}
      <section className="relative pt-32 sm:pt-44 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
              Service 02 // Booking Engines & Retention Architecture
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Booking funnels
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              that
            </span>{" "}
            retain clients<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead max-w-3xl mb-10">
            Interactive service menus, appointment schedulers, WhatsApp booking flows, and automated client re-engagement funnels engineered for modern service businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                setContactOpen(true);
              }}
              className="min-h-[48px] px-8 py-3.5 rounded-full bg-[#e05a2b] text-white font-sans font-semibold text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-lg shadow-[#e05a2b]/20"
            >
              <span>Commission Your Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-sans text-sm font-medium hover:bg-[#25D366] hover:text-black transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Strategy Desk</span>
            </a>

            <a
              href="tel:+919078019472"
              className="text-sm font-sans font-medium text-[#b8b5af] hover:text-white transition-colors"
            >
              +91 9078 019 472
            </a>
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="py-24 sm:py-32 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-20">
            <div className="border-l border-white/10 pl-6 sm:pl-8 space-y-3">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Standard 01 // Frictionless Booking Time
              </span>
              <div className="text-5xl sm:text-7xl font-sans font-bold text-[#f3f1ec]">
                &lt;30s<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="body-standard">
                Customers can explore services, select packages, and confirm appointment requests in under 30 seconds directly from their mobile devices.
              </p>
            </div>

            <div className="border-l border-white/10 pl-6 sm:pl-8 space-y-3">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Standard 02 // Recurring Retention Lift
              </span>
              <div className="text-5xl sm:text-7xl font-sans font-bold text-[#f3f1ec]">
                +40%<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="body-standard">
                Automated re-booking reminders and proactive WhatsApp sequences keep your clients coming back on predictable service cycles.
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-8">
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block">
              Booking Engine Capabilities
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">Dynamic Schedulers</h3>
                <p className="body-standard text-xs">
                  Real-time calendar and appointment booking systems with instant SMS/WhatsApp confirmations.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">Interactive Pricing Menus</h3>
                <p className="body-standard text-xs">
                  Tiered service packages with clear value deliverables that eliminate endless client back-and-forth.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">Automated Webhooks</h3>
                <p className="body-standard text-xs">
                  Inquiries sync directly into your team's WhatsApp group, CRM, Google Sheets, or email inbox.
                </p>
              </div>
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

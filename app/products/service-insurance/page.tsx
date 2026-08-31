"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

export default function ServiceInsurancePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Service%20%26%20Insurance%20OS.";

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

      {/* Product Hero */}
      <section className="relative pt-32 sm:pt-44 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
              Suite 02 // Workshop & Renewal Architecture
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Service & insurance
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              retention
            </span>{" "}
            OS<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead max-w-3xl mb-10">
            Automated predictive service reminders, mileage extrapolation, enhanced telecall logging, and proactive insurance policy renewal workflows built for dealership workshops.
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
              <span>Schedule Workshop Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-sans text-sm font-medium hover:bg-[#25D366] hover:text-black transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Workshop Desk</span>
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
                Benchmark 01 // Mistimed Reminder Reduction
              </span>
              <div className="text-5xl sm:text-7xl font-sans font-bold text-[#f3f1ec]">
                &lt;10%<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="body-standard">
                Generic CRMs blast mistimed calendar reminders that annoy car owners. Convertix extrapolates actual driving velocity for pinpoint service bay booking.
              </p>
            </div>

            <div className="border-l border-white/10 pl-6 sm:pl-8 space-y-3">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Benchmark 02 // Policy Renewal Retention
              </span>
              <div className="text-5xl sm:text-7xl font-sans font-bold text-[#f3f1ec]">
                &gt;90%<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="body-standard">
                60/30/15-day multi-channel renewal sequences ensure vehicle owners renew policies with the dealership rather than third-party aggregators.
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-8">
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block">
              Workshop Capabilities
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">Mileage Algorithm</h3>
                <p className="body-standard text-xs">
                  Predicts exact vehicle inspection dates using historical driving frequency algorithms.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">Policy Expiry Radar</h3>
                <p className="body-standard text-xs">
                  Automated 60-day, 30-day, and 15-day multi-channel renewal sequences.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">1-Click WhatsApp Booking</h3>
                <p className="body-standard text-xs">
                  Customers confirm workshop pickup and bay reservation in a single tap on WhatsApp.
                </p>
              </div>
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

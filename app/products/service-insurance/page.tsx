"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

export default function ServiceInsurancePage() {
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

      {/* Editorial Product Hero */}
      <section className="relative pt-36 sm:pt-48 pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
              SUITE 02 // ARCHITECTURAL DOSSIER
            </span>
          </div>

          <h1 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85] mb-8">
            SERVICE & INSURANCE
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              retention
            </span>{" "}
            OS<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#b8b5af] max-w-3xl font-normal leading-relaxed mb-12">
            Automated predictive service reminders, mileage extrapolation, enhanced telecall logging, and proactive insurance policy renewal workflows built for dealership workshops.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                setContactOpen(true);
              }}
              className="py-4 px-8 rounded-full bg-[#e05a2b] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2"
            >
              <span>Schedule Workshop Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+917888028729"
              className="text-xs font-mono uppercase tracking-widest text-[#b8b5af] hover:text-white transition-colors"
            >
              Direct: +91 7888 028 729 →
            </a>
          </div>
        </div>
      </section>

      {/* Editorial Benchmarks */}
      <section className="py-32 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div className="border-l border-white/10 pl-8 space-y-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                BENCHMARK 01 // MISTIMED REMINDER REDUCTION
              </span>
              <div className="text-6xl sm:text-7xl font-display font-black text-[#f3f1ec]">
                &lt;10%<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="text-sm font-mono text-[#b8b5af] leading-relaxed">
                Generic CRMs blast mistimed calendar reminders that annoy car owners. Convertix extrapolates actual driving velocity for pinpoint service bay booking.
              </p>
            </div>

            <div className="border-l border-white/10 pl-8 space-y-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                BENCHMARK 02 // INSURANCE POLICY RENEWAL RATE
              </span>
              <div className="text-6xl sm:text-7xl font-display font-black text-[#f3f1ec]">
                &gt;90%<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="text-sm font-mono text-[#b8b5af] leading-relaxed">
                60/30/15-day multi-channel renewal sequences ensure vehicle owners renew policies with the dealership rather than third-party aggregators.
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e05a2b] block">
              WORKSHOP CAPABILITIES
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#0e0e0e] border border-white/10 space-y-3">
                <h3 className="text-xl font-display font-bold text-white">Mileage Algorithm</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                  Predicts exact vehicle inspection dates using historical driving frequency algorithms.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0e0e0e] border border-white/10 space-y-3">
                <h3 className="text-xl font-display font-bold text-white">Policy Expiry Horizon</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                  Automated 60-day, 30-day, and 15-day multi-channel renewal sequences.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0e0e0e] border border-white/10 space-y-3">
                <h3 className="text-xl font-display font-bold text-white">1-Click WhatsApp Booking</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  RotateCw,
  Gauge,
  ShieldCheck,
  Calendar,
  MessageSquare,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  BellRing,
} from "lucide-react";

export default function ServiceInsurancePage() {
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

      {/* Product Hero */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 border-b border-white/10">
        <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f58c]/10 border border-[#00f58c]/30 text-xs font-mono text-[#00f58c] mb-6">
            <RotateCw className="w-3.5 h-3.5" />
            <span>PRODUCT ARCHITECTURE // SUITE 02</span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.92] sm:leading-[0.9] mb-6 break-words">
            SERVICE & INSURANCE
            <br />
            <span className="font-editorial text-[#00f58c] font-normal italic lowercase">
              retention
            </span>{" "}
            AUTOMATION.
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-white/70 max-w-3xl font-normal leading-relaxed mb-8 sm:mb-10">
            Automated predictive service reminders, mileage-based odometer extrapolation, enhanced call monitoring with logging, and proactive insurance policy renewal workflows built for dealership workshops.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <MagneticButton
              variant="primary"
              onClick={() => setContactOpen(true)}
              className="!py-3.5 !px-6 text-xs w-full sm:w-auto"
            >
              <span>Deploy Service OS Instance</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <a
              href="tel:+917888028729"
              className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Consult Workshop Specialist
            </a>
          </div>
        </div>
      </section>

      {/* Core Benchmarks */}
      <section className="py-20 sm:py-24 bg-[#090b10] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Benchmark 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1118] border border-white/12 space-y-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                BENCHMARK 01 // MISTIMED SERVICE REMINDERS
              </span>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                <span className="text-3xl sm:text-5xl font-display font-black text-[#00f58c]">
                  &lt;10%
                </span>
                <span className="text-xs sm:text-sm font-mono text-white/40 line-through">DMS: &gt;60%</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Delayed or mistimed reminders lead to reduced workshop visits and poor customer retention. Convertix automates service notifications through WhatsApp, SMS, and calls—ensuring timely engagement and higher workshop traffic.
              </p>
            </div>

            {/* Benchmark 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1118] border border-white/12 space-y-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                BENCHMARK 02 // INSURANCE RENEWAL FOLLOW-UP RATE
              </span>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                <span className="text-3xl sm:text-5xl font-display font-black text-[#00f58c]">
                  &gt;90%
                </span>
                <span className="text-xs sm:text-sm font-mono text-white/40 line-through">DMS: &lt;30%</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Successful follow-ups decide whether renewals close or slip away. Convertix automates reminders, alerts, and tracking—ensuring timely follow-ups, higher renewal rates, and stronger customer retention.
              </p>
            </div>
          </div>

          {/* Feature Pillars */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Workshop Operational Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <Gauge className="w-5 h-5 text-[#00f58c]" />
                <h4 className="font-display font-bold text-base text-white">Mileage-Based Engine</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Predicts exact vehicle inspection dates using historical driving frequency algorithms rather than blind calendar intervals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#d4ff00]" />
                <h4 className="font-display font-bold text-base text-white">Policy Expiry Horizon</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Automated 60-day, 30-day, and 15-day multi-channel renewal sequences with direct insurer quotation integration.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <MessageSquare className="w-5 h-5 text-[#00d8f6]" />
                <h4 className="font-display font-bold text-base text-white">1-Click WhatsApp Booking</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Customers confirm workshop pickup and service slot in a single tap on WhatsApp without phone tag delays.
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

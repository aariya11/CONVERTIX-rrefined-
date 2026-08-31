"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Building2, ShieldCheck, Sparkles, Cpu, Award, Phone, ArrowRight } from "lucide-react";

export default function AboutPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/12 text-xs font-mono text-[#d4ff00] mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>SELENIX TECHNOLOGY // CONVERTIX DIVISION</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
            RE-ENGINEERING
            <br />
            <span className="font-editorial text-white/40 font-normal italic lowercase">the</span>{" "}
            AUTOMOTIVE RETAIL REALITY.
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-3xl font-normal leading-relaxed mb-10">
            Convertix was born out of a stark observation: while modern vehicles have become high-tech marvels, automotive dealership workflows were still burdened with 24-hour response delays, unverified phone calls, and disconnected software silos.
          </p>
        </div>
      </section>

      {/* Manifesto Body */}
      <section className="py-24 bg-[#090b10] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] mb-2 block">
                Our Engineering Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase mb-4">
                We bring innovation & efficiency across auto retail.
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal mb-6">
                We enable dealerships and OEMs to adopt smarter digital processes—from lead management to service and insurance—improving customer experience, operational efficiency, and profitability across the entire automotive retail ecosystem.
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                Convertix is not a generic CRM adapted for cars. Every workflow, data schema, SIM trigger, and escalation rule is purpose-built around dealership operations, consultant floor rhythms, and workshop bay capacities.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0e1118] border border-white/12 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-white/40 block pb-2 border-b border-white/10">
                Core Principles
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#d4ff00]/10 text-[#d4ff00] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Speed as a Competitive Moat</h4>
                    <p className="text-xs text-white/60">Reducing first customer contact from hours to minutes turns every advertising rupee into tangible showroom momentum.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#00f58c]/10 text-[#00f58c] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Zero Phantom Interactions</h4>
                    <p className="text-xs text-white/60">Hardware-free SIM telecall tracking provides verified audit trails and transparency without burdensome manual reporting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#00d8f6]/10 text-[#00d8f6] shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Seamless OEM Coexistence</h4>
                    <p className="text-xs text-white/60">2-Way bi-directional DMS sync ensures complete data integrity without disrupting manufacturer compliance.</p>
                  </div>
                </div>
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

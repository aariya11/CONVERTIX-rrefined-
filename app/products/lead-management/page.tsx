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
  Zap,
  PhoneCall,
  Database,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Clock,
  CheckCircle2,
  BarChart3,
  MessageCircle,
  Users,
} from "lucide-react";

export default function LeadManagementPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-xs font-mono text-[#d4ff00] mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>PRODUCT ARCHITECTURE // SUITE 01</span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.92] sm:leading-[0.9] mb-6 break-words">
            LEAD & PRE-SALES
            <br />
            <span className="font-editorial text-[#d4ff00] font-normal italic lowercase">
              speed
            </span>{" "}
            MANAGEMENT.
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-white/70 max-w-3xl font-normal leading-relaxed mb-8 sm:mb-10">
            An AI-powered lead management platform engineered for automotive dealerships—featuring automated multi-source lead ingestion, SIM-integrated calling, 2-way OEM DMS integration, and instant executive escalation protocols.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <MagneticButton
              variant="primary"
              onClick={() => setContactOpen(true)}
              className="!py-3.5 !px-6 text-xs w-full sm:w-auto"
            >
              <span>Deploy Lead OS Instance</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <a
              href="tel:+917888028729"
              className="w-full sm:w-auto text-center justify-center px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Consult Automotive Specialist
            </a>
          </div>
        </div>
      </section>

      {/* Core Operational Pillars */}
      <section className="py-20 sm:py-24 bg-[#090b10] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Benchmark 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1118] border border-white/12 space-y-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                BENCHMARK 01 // FIRST CONTACT LATENCY
              </span>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                <span className="text-3xl sm:text-5xl font-display font-black text-[#d4ff00]">
                  10–30 MIN
                </span>
                <span className="text-xs sm:text-sm font-mono text-white/40 line-through">DMS: 6–24 HOURS</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Most CRMs delay the first call due to manual lead assignment and lack of monitoring. Convertix automates lead capture, assignment, and notifications—ensuring instant response without manual supervision.
              </p>
            </div>

            {/* Benchmark 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1118] border border-white/12 space-y-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                BENCHMARK 02 // FOLLOW-UP EXECUTION RATE
              </span>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                <span className="text-3xl sm:text-5xl font-display font-black text-[#00f58c]">
                  &gt;90%
                </span>
                <span className="text-xs sm:text-sm font-mono text-white/40 line-through">DMS: &lt;40%</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Missed or delayed follow-ups cause high-value leads to drop off unnoticed. Convertix ensures timely engagement with automated scheduling, smart reminders, SIM-integrated calls, and AI alerts for inactive leads.
              </p>
            </div>
          </div>

          {/* Deep Feature Grid */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Core Architectural Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <Sparkles className="w-5 h-5 text-[#d4ff00]" />
                <h4 className="font-display font-bold text-base text-white">AI-Powered Prioritization</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Machine Learning models evaluate intent velocity, segment budget, and engagement signals to route hot leads to top consultants.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <PhoneCall className="w-5 h-5 text-[#00f58c]" />
                <h4 className="font-display font-bold text-base text-white">SIM-Integrated Calling</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Every outbound call is routed via SIM, automatically logged, duration-audited, and synced directly to the DMS master file.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <Database className="w-5 h-5 text-[#00d8f6]" />
                <h4 className="font-display font-bold text-base text-white">2-Way OEM DMS Protocol</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Direct bi-directional synchronization with Tata, Maruti, Hyundai & Mahindra dealership management systems.
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

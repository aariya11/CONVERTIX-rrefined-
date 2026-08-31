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

export default function LeadManagementPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Lead%20Management%20OS.";

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
              SUITE 01 // ARCHITECTURAL DOSSIER
            </span>
          </div>

          <h1 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85] mb-8">
            LEAD & PRE-SALES
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              velocity
            </span>{" "}
            OS<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#b8b5af] max-w-3xl font-normal leading-relaxed mb-12">
            An intelligent lead operating system engineered for automotive dealerships—featuring multi-source capture, SIM-integrated calling, 2-way OEM DMS integration, and instant executive escalation protocols.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => {
                soundManager.playChirp();
                setContactOpen(true);
              }}
              className="py-4 px-8 rounded-full bg-[#e05a2b] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2"
            >
              <span>Schedule Architecture Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-6 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-mono text-xs uppercase tracking-wider hover:bg-[#25D366] hover:text-black transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Lead Specialist</span>
            </a>

            <a
              href="tel:+919078019472"
              className="text-xs font-mono uppercase tracking-widest text-[#b8b5af] hover:text-white transition-colors"
            >
              +91 9078 019 472 →
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
                BENCHMARK 01 // FIRST CONTACT LATENCY
              </span>
              <div className="text-6xl sm:text-7xl font-display font-black text-[#f3f1ec]">
                10–30 MIN<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="text-sm font-mono text-[#b8b5af] leading-relaxed">
                Traditional CRMs delay first calls by 6–24 hours. Convertix automates multi-source ingestion and instant consultant routing without manual supervisor bottlenecks.
              </p>
            </div>

            <div className="border-l border-white/10 pl-8 space-y-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                BENCHMARK 02 // FOLLOW-UP EXECUTION RATE
              </span>
              <div className="text-6xl sm:text-7xl font-display font-black text-[#f3f1ec]">
                &gt;90%<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="text-sm font-mono text-[#b8b5af] leading-relaxed">
                Missed showroom follow-ups cause high-value buyers to drop off unnoticed. Convertix enforces follow-up SLAs with automated reminders and supervisor alerts.
              </p>
            </div>
          </div>

          {/* Feature Breakdown */}
          <div className="space-y-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e05a2b] block">
              PLATFORM CAPABILITIES
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#0e0e0e] border border-white/10 space-y-3">
                <h3 className="text-xl font-display font-bold text-white">AI Intent Scoring</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                  Machine learning algorithms calculate buyer intent velocity to rank incoming inquiries.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0e0e0e] border border-white/10 space-y-3">
                <h3 className="text-xl font-display font-bold text-white">SIM-Integrated Calling</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                  Every showroom dial is executed via SIM, automatically logged, and verified in real-time.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0e0e0e] border border-white/10 space-y-3">
                <h3 className="text-xl font-display font-bold text-white">2-Way OEM DMS Protocol</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                  Direct bi-directional sync with Tata, Maruti, Hyundai & Mahindra dealer systems.
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

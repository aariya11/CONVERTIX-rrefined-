"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

export default function AboutPage() {
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
              COMPANY ARCHIVE
            </span>
          </div>

          <h1 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85] mb-8">
            BUILT FOR
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              dealership
            </span>{" "}
            REALITY<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#b8b5af] max-w-3xl font-normal leading-relaxed">
            Convertix is engineered by Selenix Technology to solve the persistent operational gaps in modern automotive retail—where slow response times, disjointed follow-ups, and legacy software silently bleed showroom profit.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e05a2b]">
                OUR ORIGIN
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                Why We Built Convertix.
              </h2>
              <p className="text-sm font-mono text-[#b8b5af] leading-relaxed">
                Automotive retail moves fast. When a prospective buyer submits an inquiry, every minute of delay reduces conversion likelihood. We built Convertix to bridge the gap between dealership management systems, mobile sales consultants, and customer channels.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-12 border-l border-white/10 pl-8 sm:pl-12">
              <div className="space-y-3">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">PILLAR 01</span>
                <h3 className="text-2xl font-display font-bold text-white">Zero Hardware Complexity</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                  Native SIM calling ensures sales consultants use standard smartphones while dealership leadership maintains complete call duration transparency.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">PILLAR 02</span>
                <h3 className="text-2xl font-display font-bold text-white">Real-Time OEM Synchronization</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                  Deep bi-directional sync with Tata, Maruti, Hyundai & Mahindra dealership systems to ensure zero double data entry.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">PILLAR 03</span>
                <h3 className="text-2xl font-display font-bold text-white">Automated Governance</h3>
                <p className="text-xs font-mono text-[#b8b5af] leading-relaxed">
                  Inactivity sentinels escalate neglected leads automatically, protecting showroom investments from disappearing into the cracks.
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Hero */}
      <section className="relative pt-32 sm:pt-44 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
              Company Mission
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Built for
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              dealership
            </span>{" "}
            reality<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead max-w-3xl">
            Convertix is engineered by Selenix Technology to solve the persistent operational gaps in modern automotive retail—where slow response times, disjointed follow-ups, and legacy software silently bleed showroom profit.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 sm:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#e05a2b]">
                Our Origin
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white">
                Why We Built Convertix.
              </h2>
              <p className="body-standard">
                Automotive retail moves fast. When a prospective buyer submits an inquiry, every minute of delay reduces conversion likelihood. We built Convertix to bridge the gap between dealership management systems, mobile sales consultants, and customer channels.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8 sm:space-y-10 border-l border-white/10 pl-6 sm:pl-10">
              <div className="space-y-2">
                <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block font-semibold">Pillar 01</span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">Zero Hardware Complexity</h3>
                <p className="body-standard text-xs">
                  Native SIM calling ensures sales consultants use standard smartphones while dealership leadership maintains complete call duration transparency.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block font-semibold">Pillar 02</span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">Real-Time OEM Synchronization</h3>
                <p className="body-standard text-xs">
                  Deep bi-directional sync with Tata, Maruti, Hyundai & Mahindra dealership systems to ensure zero double data entry.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block font-semibold">Pillar 03</span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">Automated Governance</h3>
                <p className="body-standard text-xs">
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

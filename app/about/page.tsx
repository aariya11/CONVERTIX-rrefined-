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
              Studio Mission
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            We build
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              websites that
            </span>{" "}
            grow services<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead max-w-3xl">
            Convertix is a boutique digital design and web engineering studio by Selenix Technology. We exist to rescue modern service businesses from generic templates, slow WordPress page builders, and underperforming websites that silently bleed revenue.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 sm:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#e05a2b]">
                Our Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white">
                Why Standard Websites Fail Service Businesses.
              </h2>
              <p className="body-standard">
                Most web agencies build static digital brochures. When prospective clients visit, they encounter generic stock photos, 5-second loading delays, and clunky contact forms. We engineer websites as high-velocity conversion engines—pairing luxury editorial brand design with sub-second Next.js technology and direct WhatsApp communication.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8 sm:space-y-10 border-l border-white/10 pl-6 sm:pl-10">
              <div className="space-y-2">
                <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block font-semibold">Pillar 01</span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">Handcrafted Bespoke Code</h3>
                <p className="body-standard text-xs">
                  Zero page builder drag-and-drop bloat. Every website is custom coded in Next.js 16, React 19, and Tailwind CSS for unmatched speed, security, and scalability.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block font-semibold">Pillar 02</span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">Frictionless Client Inbound</h3>
                <p className="body-standard text-xs">
                  Built-in 1-tap WhatsApp consultation desks, real-time booking calendars, and automated lead webhooks that convert traffic into conversations.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block font-semibold">Pillar 03</span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">100 Google Core Web Vitals</h3>
                <p className="body-standard text-xs">
                  Sub-second page delivery across every mobile device, giving your service business the highest possible search ranking and ad conversion ROI.
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

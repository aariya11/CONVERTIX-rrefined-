"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

export default function LeadManagementPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20custom%20web%20design%20for%20our%20service%20business.";

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
              Service 01 // Bespoke Web Design & Lead Funnels
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Websites that
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              capture
            </span>{" "}
            clients<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead max-w-3xl mb-10">
            We design and engineer bespoke, high-converting digital platforms for service companies—featuring luxury editorial typography, sub-second performance, direct WhatsApp booking channels, and automated CRM lead capture.
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
              <span>Start Your Web Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-sans text-sm font-medium hover:bg-[#25D366] hover:text-black transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
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
                Standard 01 // Sub-Second Page Speed
              </span>
              <div className="text-5xl sm:text-7xl font-sans font-bold text-[#f3f1ec]">
                0.58s<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="body-standard">
                Generic service websites take 4–6 seconds to load, losing over 50% of ad traffic. We engineer lightweight Next.js platforms that render instantly.
              </p>
            </div>

            <div className="border-l border-white/10 pl-6 sm:pl-8 space-y-3">
              <span className="text-xs font-sans text-[#b8b5af] uppercase tracking-wider block">
                Standard 02 // Inquiry Conversion Rate
              </span>
              <div className="text-5xl sm:text-7xl font-sans font-bold text-[#f3f1ec]">
                3.4x Lift<span className="text-[#e05a2b]">.</span>
              </div>
              <p className="body-standard">
                Editorial visual hierarchy and friction-free inquiry funnels turn casual page scrollers into confirmed service consultations.
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-8">
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase block">
              Included Web Deliverables
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">Bespoke UI/UX Design</h3>
                <p className="body-standard text-xs">
                  Handcrafted responsive layouts, typography, and interactive motion tailored to your business.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">1-Tap WhatsApp Desk</h3>
                <p className="body-standard text-xs">
                  Direct floating conversation triggers that capture high-intent buyers in real time.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white">Next.js 16 Engineering</h3>
                <p className="body-standard text-xs">
                  Enterprise-grade code architecture with zero page-builder bloat and full SEO schema.
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

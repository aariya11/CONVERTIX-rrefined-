"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";

export default function RefundPolicyPage() {
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
      <section className="relative pt-32 sm:pt-44 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
            <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
              Financial Terms
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Refund &
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              cancellation
            </span>
            <span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead">
            Effective Date: January 1, 2026. Last Updated: September 1, 2026.
          </p>
        </div>
      </section>

      {/* Policy Prose */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12 text-sm sm:text-base font-sans text-[#b8b5af] leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              01 // Bespoke Service Nature
            </h2>
            <p>
              At <strong className="text-white">Convertix</strong> (operated by <strong className="text-white">Selenix Technology</strong>), we build customized, handcrafted digital platforms, Next.js web applications, and editorial visual designs tailored to each individual client's brand and technical specifications. Because our work involves custom allocation of senior creative directors, UI/UX designers, and software engineers from day one, our refund policy reflects this bespoke service delivery.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              02 // Project Kickoff Deposits
            </h2>
            <p>
              Initial project deposits (typically 40%–50% of the total project value) secure team allocation, architectural sprint scheduling, and foundational research.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Cancellation Prior to Kickoff:</strong> If a project is cancelled in writing within 48 hours of deposit payment and before any design or architectural work has commenced, a refund of 80% of the deposit will be issued (less payment processing and administrative setup fees).</li>
              <li><strong className="text-white">Cancellation After Discovery / Kickoff:</strong> Once discovery workshops, wireframes, or initial design concepts have commenced, the initial deposit is non-refundable.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              03 // Milestone-Based Sign-Offs
            </h2>
            <p>
              All projects follow transparent milestone stages (e.g., UI/UX Design Approval, Interactive Development Preview, Production Handover). Once a milestone is formally reviewed and approved by the Client, payments associated with that milestone are non-refundable.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              04 // Revision Guarantee & Satisfaction
            </h2>
            <p>
              We are committed to delivering world-class, premium digital craftsmanship. Each project engagement includes structured revision rounds at both the design and staging phases to ensure the final deliverable completely satisfies your business requirements and brand standards.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              05 // Contact Our Billing Desk
            </h2>
            <p>
              For questions regarding project billing, milestone invoicing, or contractual terms:
            </p>
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-1 text-xs sm:text-sm">
              <p><strong className="text-white">Convertix Billing // Selenix Technology</strong></p>
              <p>Direct Phone: <a href="tel:+919078019472" className="text-[#e05a2b] hover:underline">+91 9078 019 472</a></p>
              <p>WhatsApp Desk: <a href="https://wa.me/919078019472" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">+91 9078 019 472</a></p>
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

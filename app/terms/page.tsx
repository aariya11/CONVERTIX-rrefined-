"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";

export default function TermsPage() {
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
              Legal Documentation
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Terms &
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              conditions
            </span>
            <span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead">
            Effective Date: January 1, 2026. Last Updated: September 1, 2026.
          </p>
        </div>
      </section>

      {/* Legal Prose */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12 text-sm sm:text-base font-sans text-[#b8b5af] leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              01 // Agreement to Terms
            </h2>
            <p>
              These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("Client", "you"), and <strong className="text-white">Convertix</strong> (a digital design & software engineering studio operated by <strong className="text-white">Selenix Technology</strong>, "we", "us", or "our"), concerning your access to and use of our website, development packages, and bespoke digital services.
            </p>
            <p>
              By accessing our website or commissioning a project with Convertix, you agree that you have read, understood, and agreed to be bound by all of these Terms & Conditions. If you do not agree, you are expressly prohibited from using our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              02 // Studio Services & Project Scope
            </h2>
            <p>
              Convertix provides bespoke web design, UI/UX architecture, frontend engineering in modern Next.js/React, performance optimization, CRM integrations, and digital growth infrastructure for service businesses.
            </p>
            <p>
              Each project is governed by an agreed-upon Statement of Work (SOW) or formal project proposal. Any deliverables, feature additions, or modifications outside the signed SOW will be billed separately at our standard architectural hourly or milestone rates.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              03 // Code Ownership & Intellectual Property
            </h2>
            <p>
              Upon receipt of final, full payment for the project:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#f3f1ec]">
              <li>The Client receives 100% full ownership of the bespoke source code, custom design assets, and tailored database schemas created specifically for the project.</li>
              <li>Convertix retains ownership of proprietary developer frameworks, internal tooling, reusable UI primitives, and open-source libraries incorporated into the build.</li>
              <li>Convertix reserves the right to display the completed work in its design portfolio, marketing case studies, and social channels unless explicitly agreed otherwise under a signed Non-Disclosure Agreement (NDA).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              04 // Milestone Payments & Financial Terms
            </h2>
            <p>
              Standard engagements require an initial project kickoff deposit (typically 40%–50%) prior to the commencement of design and architectural sprint cycles. Subsequent milestone payments are tied to milestone sign-offs (e.g., Design Approval, Production Staging Review, and Final Production Handover/DNS Launch).
            </p>
            <p>
              Invoices are payable within seven (7) business days of issuance. Late payments may result in temporary suspension of active engineering sprints and deployment schedules.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              05 // Client Responsibilities
            </h2>
            <p>
              To ensure on-time delivery against agreed timelines, the Client agrees to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide required brand materials, high-resolution media, copy guidelines, and domain credentials in a timely manner.</li>
              <li>Appoint a primary point of contact with decision-making authority for design and technical sign-offs.</li>
              <li>Provide constructive consolidated feedback within five (5) business days during designated review milestones.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              06 // Limitation of Liability & Warranties
            </h2>
            <p>
              Convertix warrants that all custom code delivered will be free of critical defects and built to modern industry standards (sub-second performance, responsive mobile accessibility, and SEO schema compliance) upon launch.
            </p>
            <p>
              We provide a complimentary thirty (30) day post-launch bug warranty to rectify any technical errors identified following deployment. In no event shall Convertix or Selenix Technology be liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, domain registrar failures, or client-initiated code alterations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              07 // Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and defined following the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Odisha, India.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              08 // Studio Contact Desk
            </h2>
            <p>
              For legal inquiries, contract clarifications, or bespoke NDA requests:
            </p>
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-1 text-xs sm:text-sm">
              <p><strong className="text-white">Convertix Studio / Selenix Technology</strong></p>
              <p>Direct Phone: <a href="tel:+919078019472" className="text-[#e05a2b] hover:underline">+91 9078 019 472</a></p>
              <p>WhatsApp Desk: <a href="https://wa.me/919078019472" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">+91 9078 019 472</a></p>
              <p>Location: India</p>
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

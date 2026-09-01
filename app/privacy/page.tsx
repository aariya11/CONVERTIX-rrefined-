"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";

export default function PrivacyPage() {
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
              Privacy & Data Protection
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Privacy
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              policy
            </span>
            <span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead">
            Effective Date: January 1, 2026. Last Updated: September 1, 2026.
          </p>
        </div>
      </section>

      {/* Privacy Prose */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12 text-sm sm:text-base font-sans text-[#b8b5af] leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              01 // Overview
            </h2>
            <p>
              At <strong className="text-white">Convertix</strong> (operated by <strong className="text-white">Selenix Technology</strong>), we respect your privacy and are committed to protecting the personal data of our website visitors, prospective clients, and partners. This Privacy Policy outlines how we collect, process, store, and protect your information when you interact with our website or engage our design and web engineering services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              02 // Information We Collect
            </h2>
            <p>We may collect information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Direct Client Inquiries:</strong> Name, business email, telephone/WhatsApp number, company name, and project scope submitted through our consultation forms or direct WhatsApp chats.</li>
              <li><strong className="text-white">Technical & Usage Data:</strong> Anonymized IP addresses, browser types, device viewports, referrer URLs, and interaction timestamps collected via privacy-first analytics to evaluate Core Web Vitals and user journeys.</li>
              <li><strong className="text-white">Sound & UI Preferences:</strong> Minimal local storage values (e.g. sound enabled status, cookie consent preference) stored locally on your device with zero cross-site tracking.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              03 // How We Use Your Information
            </h2>
            <p>The information we collect is strictly used to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#f3f1ec]">
              <li>Respond to your project consultations, quote requests, and architectural inquiries within our 15-minute SLA.</li>
              <li>Prepare customized web development proposals, SOWs, and design sprint roadmaps.</li>
              <li>Deliver, deploy, and maintain custom web applications and bespoke codebases.</li>
              <li>Ensure the security, speed, and integrity of our web infrastructure.</li>
            </ul>
            <p className="text-white font-medium">
              We never sell, rent, monetize, or trade your personal or business data to third-party advertisers or data brokers under any circumstances.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              04 // Data Security & Storage
            </h2>
            <p>
              We implement enterprise-grade technical and organizational security measures, including SSL/TLS 256-bit encryption for all data in transit, restricted-access secure databases, and zero-trust internal protocols to safeguard your information against unauthorized access, loss, or disclosure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              05 // Third-Party Integrations
            </h2>
            <p>
              Our website links directly to WhatsApp (Meta Platforms) for live customer communication and utilizes trusted cloud hosting infrastructure (e.g., Vercel / AWS). Third-party providers operate under their respective privacy policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              06 // Your Rights & Data Access
            </h2>
            <p>
              Depending on your location, you have the right to request access to, correction of, or deletion of your personal contact data stored in our systems. To submit a data request, please contact our privacy desk directly.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              07 // Privacy Officer Contact
            </h2>
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-1 text-xs sm:text-sm">
              <p><strong className="text-white">Convertix Privacy Desk // Selenix Technology</strong></p>
              <p>Direct Phone: <a href="tel:+919078019472" className="text-[#e05a2b] hover:underline">+91 9078 019 472</a></p>
              <p>WhatsApp Desk: <a href="https://wa.me/919078019472" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">+91 9078 019 472</a></p>
              <p>Address: Selenix Technology, India</p>
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

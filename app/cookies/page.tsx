"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { ContactModal } from "@/components/ui/ContactModal";

export default function CookiesPage() {
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
              Cookie Preferences
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Cookie
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

      {/* Cookie Prose */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12 text-sm sm:text-base font-sans text-[#b8b5af] leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              01 // What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your computer, tablet, or mobile smartphone when you visit a website. They allow the website to recognize your device, maintain state, improve page load performance, and preserve your interaction preferences.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              02 // Cookies We Use
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                <span className="text-xs font-sans font-bold text-[#e05a2b] uppercase tracking-wider block">
                  01. Strictly Essential Cookies & Local Storage
                </span>
                <p className="text-sm">
                  Required for the website to function properly. These include remembering your cookie consent choice (<code className="text-[#e05a2b]">convertix_cookie_consent</code>) and maintaining navigation security. These cannot be switched off without impairing site functionality.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                <span className="text-xs font-sans font-bold text-[#e05a2b] uppercase tracking-wider block">
                  02. Experience & Preference Storage
                </span>
                <p className="text-sm">
                  Used to store your interactive audio synthesizer preferences (<code className="text-[#e05a2b]">convertix_sound_enabled</code>) across page visits so you enjoy a consistent editorial browsing experience.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                <span className="text-xs font-sans font-bold text-[#e05a2b] uppercase tracking-wider block">
                  03. Performance & Core Web Vitals Analytics
                </span>
                <p className="text-sm">
                  Anonymized telemetry to monitor sub-second page loads, Lighthouse scores, and server responsiveness to deliver an optimal web experience across mobile and desktop devices.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              03 // Managing & Disabling Cookies
            </h2>
            <p>
              You can control and manage cookies through your browser settings. Most web browsers allow you to view existing cookies, delete them, block third-party cookies, or block all cookies entirely. Note that disabling essential cookies may impact certain interactive features of our website.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              04 // Questions & Inquiries
            </h2>
            <p>
              If you have any questions regarding our cookie practices, please contact our web engineering desk:
            </p>
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-1 text-xs sm:text-sm">
              <p><strong className="text-white">Convertix Studio // Selenix Technology</strong></p>
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";
import { ArrowRight, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20discuss%20building%20a%20website%20for%20our%20service%20business.";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccessTone();
    setSubmitted(true);
  };

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
              Project Consultation
            </span>
          </div>

          <h1 className="h1-editorial text-[#f3f1ec] mb-6">
            Start your
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              website
            </span>{" "}
            project<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="body-lead max-w-2xl">
            Schedule a private architectural consultation for your service business website. Response SLA is strictly within 15 minutes.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            {/* Left Contact Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#e05a2b]">
                  Direct Studio Desk
                </span>
                <a
                  href="tel:+919078019472"
                  onClick={() => soundManager.playClick()}
                  className="text-2xl sm:text-3xl font-sans font-bold text-white hover:text-[#e05a2b] transition-colors block"
                >
                  +91 9078 019 472
                </a>
                <p className="body-standard text-xs">
                  Direct line to our Lead Web Design & Technical Director.
                </p>

                <div className="pt-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playChirp()}
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-black transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct Chat →</span>
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-6 border-t border-white/10 text-xs font-sans text-[#b8b5af]">
                <span className="text-white font-semibold uppercase tracking-wider block">
                  Parent Studio
                </span>
                <p className="text-white font-bold">Selenix Technology</p>
                <p>Digital Product & Web Engineering Studio</p>
                <p>India</p>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 border border-white/10 rounded-3xl p-6 sm:p-10 bg-[#101010]">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#e05a2b] mx-auto" />
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">
                    Project Inquiry Received.
                  </h3>
                  <p className="body-standard max-w-sm mx-auto">
                    Our Lead Web Architect will review your requirements and connect with your team within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="space-y-1">
                    <label className="text-white/70 uppercase tracking-wider block font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[48px] px-4 bg-[#161616] border border-white/10 rounded-xl text-white text-base sm:text-sm focus:border-[#e05a2b] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-white/70 uppercase tracking-wider block font-medium">Direct Mobile / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full min-h-[48px] px-4 bg-[#161616] border border-white/10 rounded-xl text-white text-base sm:text-sm focus:border-[#e05a2b] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-white/70 uppercase tracking-wider block font-medium">Service / Business Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Landmark Luxury Services"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full min-h-[48px] px-4 bg-[#161616] border border-white/10 rounded-xl text-white text-base sm:text-sm focus:border-[#e05a2b] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-white/70 uppercase tracking-wider block font-medium">Project Goals / Service Details</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We want to build a custom luxury website for our service company to increase high-paying client inquiries & bookings."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-[#161616] border border-white/10 rounded-xl text-white text-base sm:text-sm focus:border-[#e05a2b] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] rounded-full bg-[#e05a2b] text-white font-sans font-semibold text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 mt-2 touch-manipulation cursor-pointer"
                  >
                    <span>Request Project Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
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

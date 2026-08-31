"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ArrowRight, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919078019472?text=Hello%20Convertix%20Team%2C%20I%20would%20like%20to%20explore%20Convertix%20for%20our%20dealership.";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dealershipName: "",
    brand: "Tata Motors",
    outlets: "1–3 Outlets",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccessTone();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f3f1ec] relative overflow-hidden">
      <Navbar
        onOpenContact={() => {}}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={() => {}}
      />

      {/* Hero */}
      <section className="relative pt-36 sm:pt-48 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e05a2b]">
              ENTERPRISE DESK
            </span>
          </div>

          <h1 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-[-0.06em] text-[#f3f1ec] uppercase leading-[0.85] mb-8">
            TALK TO
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              automotive
            </span>{" "}
            SALES<span className="text-[#e05a2b]">.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#b8b5af] max-w-2xl font-normal leading-relaxed">
            Schedule a private architectural walkthrough for your showroom and service network. Response SLA is strictly within 15 minutes.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#e05a2b]">
                  COMMERCIAL DESK
                </span>
                <a
                  href="tel:+919078019472"
                  className="text-3xl sm:text-4xl font-display font-bold text-white hover:text-[#e05a2b] transition-colors block"
                >
                  +91 9078 019 472
                </a>
                <p className="text-xs font-mono text-[#b8b5af]">
                  Direct line to our Commercial Director.
                </p>

                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-mono text-xs uppercase tracking-wider hover:bg-[#25D366] hover:text-black transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat Directly on WhatsApp →</span>
                  </a>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10 text-xs font-mono">
                <span className="text-white/40 uppercase tracking-widest block">
                  PARENT ENTITY
                </span>
                <p className="text-white font-bold">Selenix Technology</p>
                <p className="text-[#b8b5af]">Automotive Software & Intelligence Division</p>
                <p className="text-[#b8b5af]">India</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 border border-white/10 rounded-3xl p-8 sm:p-12 bg-[#0e0e0e]">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#e05a2b] mx-auto" />
                  <h3 className="text-3xl font-display font-bold text-white">
                    Consultation Request Received.
                  </h3>
                  <p className="text-sm font-mono text-[#b8b5af]">
                    Our Automotive Specialist will connect with your leadership team within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
                  <div className="space-y-2">
                    <label className="text-white/60 uppercase tracking-wider block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Mahindra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-white/60 uppercase tracking-wider block">Direct Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/60 uppercase tracking-wider block">Dealership Group Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Landmark Automotive"
                        value={formData.dealershipName}
                        onChange={(e) => setFormData({ ...formData, dealershipName: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-white/60 uppercase tracking-wider block">Primary Brand</label>
                      <select
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                      >
                        <option>Tata Motors</option>
                        <option>Maruti Suzuki</option>
                        <option>Hyundai Motor</option>
                        <option>Mahindra & Mahindra</option>
                        <option>Kia Motors</option>
                        <option>Multi-Brand Dealer Group</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/60 uppercase tracking-wider block">Showroom Outlets</label>
                      <select
                        value={formData.outlets}
                        onChange={(e) => setFormData({ ...formData, outlets: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none"
                      >
                        <option>1–3 Outlets (Single Region)</option>
                        <option>4–10 Outlets (Multi-City)</option>
                        <option>10+ Outlets (Large Enterprise Group)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/60 uppercase tracking-wider block">Specific Objectives / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We want to cut lead response latency across 6 Tata outlets and automate workshop bay reminders."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded-xl text-white focus:border-[#e05a2b] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#e05a2b] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Request Executive Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => {}} />

      {/* Mobile Floating Bar */}
      <MobileFloatingBar onOpenContact={() => {}} />
    </main>
  );
}

"use client";

import { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { soundManager } from "@/components/lib/sound";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dealership: "",
    phone: "",
    email: "",
    outlets: "1-3 Outlets",
    brands: "",
    interest: "Both Lead Management & Service Suite",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playChirp();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#07080a] text-[#f5f6f8] relative overflow-hidden">
      <Navbar
        onOpenContact={() => {}}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={() => {}}
      />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 border-b border-white/10">
        <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-xs font-mono text-[#d4ff00] mb-6">
            <Phone className="w-3.5 h-3.5" />
            <span>ENTERPRISE ENGAGEMENT DESK</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
            TALK TO
            <br />
            <span className="text-[#d4ff00]">CONVERTIX.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-2xl font-normal leading-relaxed">
            Schedule an executive demonstration, request custom OEM DMS connector specs, or discuss your dealership group rollout directly with our technology team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#090b10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Info Desk (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-[#0e1118] border border-white/12 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff00] block pb-2 border-b border-white/10">
                  Direct Inquiries
                </span>

                <div className="space-y-4">
                  <a
                    href="tel:+917888028729"
                    className="flex items-start gap-3 text-white hover:text-[#d4ff00] transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00f58c] group-hover:bg-[#d4ff00] group-hover:text-black transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 block">Phone & WhatsApp</span>
                      <span className="font-mono font-bold text-base">+91 7888 028 729</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-white">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00d8f6]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 block">Corporate Office</span>
                      <span className="font-mono text-sm">Selenix Technology, India</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-xs font-mono text-white/50 space-y-1">
                  <p>Standard Dealership Evaluation SLA: &lt;15 Mins Response</p>
                  <p className="text-[#00f58c]">2-Way OEM DMS Integrations Active</p>
                </div>
              </div>
            </div>

            {/* Right: Booking Form (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#0e1118] border border-white/12 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#00f58c]/15 text-[#00f58c] border border-[#00f58c]/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">
                    Consultation Requested
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mb-8">
                    Our Automotive Technology Director will contact{" "}
                    <span className="text-white font-mono">{formData.phone}</span> within 15 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#d4ff00]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                        Dealership Group *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Apex Auto Group"
                        value={formData.dealership}
                        onChange={(e) => setFormData({ ...formData, dealership: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                        OEM Brands
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Tata / Maruti / Hyundai"
                        value={formData.brands}
                        onChange={(e) => setFormData({ ...formData, brands: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Showroom Outlets
                    </label>
                    <select
                      value={formData.outlets}
                      onChange={(e) => setFormData({ ...formData, outlets: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171a22] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#d4ff00] transition-colors"
                    >
                      <option value="1 Outlet">1 Single Showroom / Workshop</option>
                      <option value="2-4 Outlets">2 – 4 Outlets (Regional Hub)</option>
                      <option value="5-10 Outlets">5 – 10 Outlets (Major Group)</option>
                      <option value="10+ Outlets">10+ Outlets (Enterprise Network)</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-[#d4ff00] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#d4ff00]/10"
                    >
                      <span>Request Dealership Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => {}} />
    </main>
  );
}

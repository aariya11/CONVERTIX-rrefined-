"use client";

import { motion } from "framer-motion";

export function ServiceInsuranceSection() {
  return (
    <section id="retention" className="relative py-24 sm:py-36 bg-[#0a0a0a] border-t border-white/10 overflow-hidden defer-render">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#e05a2b]" />
          <span className="text-xs font-sans font-semibold tracking-wider text-[#e05a2b] uppercase">
            Service Architecture // Booking Systems
          </span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-24">
          <h2 className="h2-editorial text-[#f3f1ec]">
            Websites that
            <br />
            <span className="font-editorial text-[#b8b5af] font-normal italic lowercase tracking-tight">
              drive real
            </span>{" "}
            bookings<span className="text-[#e05a2b]">.</span>
          </h2>
        </div>

        {/* Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
          {/* Left Focus Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-image-wrapper rounded-3xl border border-white/12 aspect-[4/3] bg-[#121212] overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider">
                Service Booking Funnel
              </span>

              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-sans font-bold text-white block">
                  3.4x Inquiries
                </span>
                <p className="body-standard text-[#b8b5af]">
                  Bespoke booking flows engineered to turn passive page visitors into confirmed service appointments.
                </p>
              </div>

              <div className="text-xs font-sans text-[#b8b5af] border-t border-white/10 pt-3 flex justify-between">
                <span>Instant WhatsApp Dispatch</span>
                <span className="text-white font-medium">Auto-Synced</span>
              </div>
            </div>

            <p className="body-standard">
              Convertix replaces bloated generic forms with intuitive interactive booking flows, direct WhatsApp chat channels, and automated inquiry distribution.
            </p>
          </div>

          {/* Right Vertical Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 border-l border-white/10 pl-6 sm:pl-10">
            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                01. Interactive Service Menus
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Showcase your service scope with clarity and authority.
              </h3>
              <p className="body-standard pt-1">
                Structured packages, dynamic calculators, and clear visual deliverables that answer customer questions before they even speak to your team.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                02. 1-Click WhatsApp Booking Integration
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Friction-free customer communication.
              </h3>
              <p className="body-standard pt-1">
                Enable prospective clients to start a conversation, book an appointment, or request a quote in a single tap on WhatsApp.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold text-[#e05a2b] uppercase tracking-wider block">
                03. Automated CRM & Lead Routing
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Zero missed inquiries.
              </h3>
              <p className="body-standard pt-1">
                Inbound client inquiries are immediately routed via webhooks to your internal team, email, SMS, or CRM with full context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

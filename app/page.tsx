"use client";

import { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
import { MobileFloatingBar } from "@/components/navigation/MobileFloatingBar";
import { ContactModal } from "@/components/ui/ContactModal";

import { HeroSection } from "@/components/hero/HeroSection";
import { ProblemPoster } from "@/components/sections/ProblemPoster";
import { ChaosToControl } from "@/components/sections/ChaosToControl";
import { LeadManagementSection } from "@/components/sections/LeadManagementSection";
import { ResponseTimeScrubber } from "@/components/sections/ResponseTimeScrubber";
import { ServiceInsuranceSection } from "@/components/sections/ServiceInsuranceSection";
import { AIPrioritizationEngine } from "@/components/sections/AIPrioritizationEngine";
import { DealershipEcosystem } from "@/components/sections/DealershipEcosystem";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { WhyConvertix } from "@/components/sections/WhyConvertix";
import { DealershipRoiCalculator } from "@/components/sections/DealershipRoiCalculator";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f3f1ec] relative overflow-hidden mobile-safe-bottom">
      {/* Top Editorial Navigation */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* 01. Magazine Cover Hero */}
      <HeroSection onOpenContact={() => setContactOpen(true)} />

      {/* 02. Problem Statement: Every Minute Costs a Lead */}
      <ProblemPoster />

      {/* 03. Operational Paradigm: Chaos into Control */}
      <ChaosToControl />

      {/* 04. Suite 01: Leads Don't Wait */}
      <LeadManagementSection />

      {/* 05. Speed Benchmark: The Advantage of Speed */}
      <ResponseTimeScrubber />

      {/* 06. Suite 02: Keep Them Coming Back */}
      <ServiceInsuranceSection />

      {/* 07. Intelligence: AI That Knows Who Matters Now */}
      <AIPrioritizationEngine />

      {/* 08. Topology: The Connected Dealership Ecosystem */}
      <DealershipEcosystem />

      {/* 09. Capabilities: Vertical Feature Index */}
      <FeatureShowcase />

      {/* 10. Master Showcase: The Cockpit of Record */}
      <DashboardShowcase />

      {/* 11. Manifesto: Not Another Generic CRM */}
      <WhyConvertix />

      {/* 12. Financial Model: What Does Slow Response Cost You? */}
      <DealershipRoiCalculator onOpenContact={() => setContactOpen(true)} />

      {/* 13. Closing: Ready to Move Faster? */}
      <FinalCta onOpenContact={() => setContactOpen(true)} />

      {/* Luxury Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Fixed Mobile Bottom Navigation Bar (Respecting Safe Area) */}
      <MobileFloatingBar onOpenContact={() => setContactOpen(true)} />

      {/* Executive Walkthrough Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}

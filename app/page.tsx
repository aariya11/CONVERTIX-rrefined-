"use client";

import { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Footer } from "@/components/navigation/Footer";
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
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f3f1ec] relative overflow-hidden">
      {/* Top Editorial Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={handleOpenContact}
      />

      {/* 01. Magazine Cover Hero */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* 02. Problem Statement: Most Service Websites Leak High-Value Clients */}
      <ProblemPoster onOpenContact={handleOpenContact} />

      {/* 03. Transformation: Templates into Growth Engines */}
      <ChaosToControl />

      {/* 04. Service Architecture: Design That Captures Clients */}
      <LeadManagementSection onOpenContact={handleOpenContact} />

      {/* 05. Speed Benchmark: The Direct Cost of Slow Page Speed */}
      <ResponseTimeScrubber />

      {/* 06. Booking Systems: Websites That Drive Real Bookings */}
      <ServiceInsuranceSection onOpenContact={handleOpenContact} />

      {/* 07. Performance Standard: Engineering That Amplifies Results */}
      <AIPrioritizationEngine onOpenContact={handleOpenContact} />

      {/* 08. Topology: The Complete Digital Ecosystem */}
      <DealershipEcosystem onOpenContact={handleOpenContact} />

      {/* 09. Capabilities: Studio Capabilities Index */}
      <FeatureShowcase onOpenContact={handleOpenContact} />

      {/* 10. Performance Showcase: The Performance We Deliver */}
      <DashboardShowcase onOpenContact={handleOpenContact} />

      {/* 11. Manifesto: Not Another Generic Agency */}
      <WhyConvertix onOpenContact={handleOpenContact} />

      {/* 12. Revenue Model: What Is a Slow Website Costing Your Business? */}
      <DealershipRoiCalculator onOpenContact={handleOpenContact} />

      {/* 13. Frequently Asked Questions (SEO & AI Search Grounding) */}
      <FaqSection onOpenContact={handleOpenContact} />

      {/* 14. Closing: Ready to Build Your Website? */}
      <FinalCta onOpenContact={handleOpenContact} />

      {/* Luxury Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Client Project Commissioning Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}

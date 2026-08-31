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
import { FollowUpWorkflow } from "@/components/sections/FollowUpWorkflow";
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
    <main className="min-h-screen bg-[#07080a] text-[#f5f6f8] relative overflow-hidden">
      {/* Navigation */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection onOpenContact={() => setContactOpen(true)} />

      {/* 01. The Problem Editorial Poster */}
      <ProblemPoster />

      {/* 02. Chaos to Control Transformation */}
      <ChaosToControl />

      {/* 03. Lead & Pre-Sales Management Cockpit */}
      <LeadManagementSection />

      {/* 04. Speed-to-Lead Response Scrubber */}
      <ResponseTimeScrubber />

      {/* 05. Follow-Up Workflow Execution Engine */}
      <FollowUpWorkflow />

      {/* 06. Service & Insurance Retention Matrix */}
      <ServiceInsuranceSection />

      {/* 07. AI Prioritization Engine */}
      <AIPrioritizationEngine />

      {/* 08. Connected Dealership Ecosystem */}
      <DealershipEcosystem />

      {/* 09. 9-Feature Platform Showcase */}
      <FeatureShowcase />

      {/* 10. Multi-Branch Executive Dashboard */}
      <DashboardShowcase />

      {/* 11. Built for Automotive Retail Manifesto */}
      <WhyConvertix />

      {/* 12. Interactive Dealership ROI Calculator */}
      <DealershipRoiCalculator onOpenContact={() => setContactOpen(true)} />

      {/* 13. Dramatic Final CTA */}
      <FinalCta onOpenContact={() => setContactOpen(true)} />

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* VIP Demo & Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}

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
    <main className="min-h-screen bg-[#0a0a0a] text-[#f3f1ec] relative overflow-hidden">
      {/* Editorial Navigation */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* 01. Magazine Cover Hero */}
      <HeroSection onOpenContact={() => setContactOpen(true)} />

      {/* 02. Problem Poster: EVERY MINUTE COSTS A LEAD */}
      <ProblemPoster />

      {/* 03. Paradigm Shift: CHAOS INTO CONTROL */}
      <ChaosToControl />

      {/* 04. Suite 01: LEADS DON'T WAIT */}
      <LeadManagementSection />

      {/* 05. Speed-to-Lead Benchmark: THE ADVANTAGE OF SPEED */}
      <ResponseTimeScrubber />

      {/* 06. Suite 02: KEEP THEM COMING BACK */}
      <ServiceInsuranceSection />

      {/* 07. Intelligence: AI THAT KNOWS WHO MATTERS NOW */}
      <AIPrioritizationEngine />

      {/* 08. Nodal Graphic: THE CONNECTED DEALERSHIP ECOSYSTEM */}
      <DealershipEcosystem />

      {/* 09. System Capabilities: Vertical Feature Index */}
      <FeatureShowcase />

      {/* 10. Master Product View: THE COCKPIT OF RECORD */}
      <DashboardShowcase />

      {/* 11. Automotive Manifesto: NOT ANOTHER CRM */}
      <WhyConvertix />

      {/* 12. Financial Model: WHAT DOES SLOW RESPONSE COST YOU? */}
      <DealershipRoiCalculator onOpenContact={() => setContactOpen(true)} />

      {/* 13. Dramatic Ending: READY TO MOVE FASTER? */}
      <FinalCta onOpenContact={() => setContactOpen(true)} />

      {/* Luxury Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Subtle Mobile Quick Bar */}
      <MobileFloatingBar onOpenContact={() => setContactOpen(true)} />

      {/* Executive Consultation Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}

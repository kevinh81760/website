import { InvestorCTA } from "@/components/investors/InvestorCTA";
import { InvestorDifferentiation } from "@/components/investors/InvestorDifferentiation";
import { InvestorFounder } from "@/components/investors/InvestorFounder";
import { InvestorHero } from "@/components/investors/InvestorHero";
import { InvestorTechnology } from "@/components/investors/InvestorTechnology";
import { InvestorThesis } from "@/components/investors/InvestorThesis";
import { SpecTable } from "@/components/shared/SpecTable";
import { Footer } from "@/components/layout/Footer";
import { investorHardwareSection } from "@/lib/hardwareSpecs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Material | BURGERBOTS",
  description:
    "BurgerBots investor overview — live robotic kitchen assembly at 160 W Main Street, Los Gatos, with demonstration-based learning and scalable deployment.",
};

export default function InvestorsPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background text-text-primary">
      <InvestorHero />
      <SpecTable {...investorHardwareSection} background />
      <InvestorThesis />
      <InvestorFounder />
      <InvestorDifferentiation />
      <InvestorTechnology />
      <InvestorCTA />
      <Footer variant="minimal" />
    </main>
  );
}

import type { Metadata } from "next";
import { BobFactCards } from "@/components/home/BobFactCards";
import { MenuHighlights } from "@/components/home/MenuHighlights";
import { PixelMosaicShowcase } from "@/components/home/PixelMosaicShowcase";
import { VisitSection } from "@/components/home/VisitSection";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "BURGERBOTS",
  description:
    "Made by robots. Loved by humans. B.O.B. cooks every burger from scratch in Los Gatos, CA.",
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero />
      <BobFactCards />
      <PixelMosaicShowcase />
      <MenuHighlights />
      <VisitSection />
      <Footer variant="minimal" />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { MetricsGrid } from "@/components/shared/MetricsGrid";
import { investorDeckCopy, investorHeroCopy } from "@/lib/investorDeck";
import { investorMetrics } from "@/lib/metrics";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { siteConfig } from "@/lib/siteConfig";

export function InvestorHero() {
  return (
    <section className="relative overflow-hidden border-b border-text-primary/10 bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[56%] -right-24 hidden h-[min(90vh,800px)] w-[min(70vw,700px)] -translate-y-1/2 opacity-[0.07] mix-blend-multiply select-none md:block lg:-right-16"
      >
        <Image
          src="/robot-schematic.png"
          alt=""
          fill
          sizes="70vw"
          className="object-contain object-center"
          priority
        />
      </div>

      <div
        className="relative z-10 flex flex-col page-x pb-4 md:pb-8"
        style={{ paddingTop: NAV_BAR_HEIGHT_PX + 8 }}
      >
        <p className="type-eyebrow mb-2 md:mb-3">Investor Material</p>
        <h1 className="type-display-sm mb-3 max-w-3xl md:type-display-md md:mb-4">
          <span className="block text-brand">Automating the line.</span>
          <span className="block text-text-primary">Scaling consistency.</span>
        </h1>
        <p className="type-body max-w-2xl leading-snug md:hidden">
          {investorHeroCopy.introShort}
        </p>
        <p className="type-body-lg max-w-2xl hidden md:block">
          {investorHeroCopy.intro}
        </p>
        <Link
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-3 w-fit md:mt-6"
        >
          {investorDeckCopy.ctaLabel}
        </Link>
      </div>

      <MetricsGrid
        variant="investor"
        metrics={investorMetrics}
        eyebrow="Key metrics"
        background
        compact
        embedded
      />
    </section>
  );
}

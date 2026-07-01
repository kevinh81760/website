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
        className="pointer-events-none absolute top-[56%] -right-24 hidden h-[min(90vh,800px)] w-[min(70vw,700px)] -translate-y-[calc(50%+1.5in)] opacity-[0.07] mix-blend-multiply select-none md:block lg:-right-16"
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
        className="relative z-10 flex flex-col gap-5 page-x pb-8 md:gap-6 md:pb-12"
        style={{ paddingTop: NAV_BAR_HEIGHT_PX + 32 }}
      >
        <p className="type-eyebrow">Investor Material</p>
        <h1 className="type-display-sm max-w-3xl md:type-display-md">
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
          className="btn-primary w-fit"
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

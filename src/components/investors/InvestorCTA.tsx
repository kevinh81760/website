import { SectionCTA } from "@/components/shared/SectionCTA";
import { siteConfig } from "@/lib/siteConfig";

export function InvestorCTA() {
  return (
    <SectionCTA
      title="Request investor materials"
      description="Full deck, financial overview, and technical documentation available on request."
      ctaLabel="Request investor deck →"
      ctaHref={`mailto:${siteConfig.investorsEmail}?subject=Investor%20deck%20request`}
      email={siteConfig.investorsEmail}
      variant="dark"
      borderTop
      background={false}
    />
  );
}

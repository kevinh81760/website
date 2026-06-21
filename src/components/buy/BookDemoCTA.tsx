import { SectionCTA } from "@/components/shared/SectionCTA";
import { siteConfig } from "@/lib/siteConfig";

export function BookDemoCTA() {
  return (
    <SectionCTA
      title="Ready to put B.O.B. in your kitchen?"
      description="Book a call and we'll walk you through ownership, setup, and menu training for your operation."
      ctaLabel="Book a call →"
      ctaHref={siteConfig.calendlyUrl}
      email={siteConfig.salesEmail}
      variant="accent"
      background
    />
  );
}

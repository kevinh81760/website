import { ProseSectionGrid } from "@/components/shared/ProseSectionGrid";
import { howItWorksSections } from "@/lib/proseSections";

export function HowItWorksSection() {
  return (
    <ProseSectionGrid sections={howItWorksSections} title="How it works" />
  );
}

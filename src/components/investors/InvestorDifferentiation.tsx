import { ProseSectionGrid } from "@/components/shared/ProseSectionGrid";
import { investorDifferentiationSection } from "@/lib/proseSections";

export function InvestorDifferentiation() {
  return (
    <ProseSectionGrid
      sections={[investorDifferentiationSection]}
      headingColumn="narrow"
    />
  );
}

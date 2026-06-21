import { ProseSectionGrid } from "@/components/shared/ProseSectionGrid";
import { investorThesisSections } from "@/lib/proseSections";

export function InvestorThesis() {
  return (
    <ProseSectionGrid
      sections={investorThesisSections}
      eyebrow="Thesis"
      headingColumn="narrow"
    />
  );
}

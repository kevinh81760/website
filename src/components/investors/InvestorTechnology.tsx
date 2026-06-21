import { ModuleSpecGrid } from "@/components/shared/ModuleSpecGrid";
import { investorModules } from "@/lib/systemModules";

export function InvestorTechnology() {
  return (
    <ModuleSpecGrid
      modules={investorModules}
      eyebrow="Platform"
      title="System architecture"
      background
    />
  );
}

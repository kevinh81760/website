import { MetricsGrid } from "@/components/shared/MetricsGrid";
import { investorMetrics } from "@/lib/metrics";

export function InvestorMetrics() {
  return (
    <MetricsGrid
      variant="investor"
      metrics={investorMetrics}
      eyebrow="Key metrics"
      background
    />
  );
}

export type ProductMetric = {
  value: string;
  unit: string;
  label: string;
};

export type InvestorMetric = {
  label: string;
  value: string;
  detail: string;
};

export const productMetrics: ProductMetric[] = [
  {
    value: "300",
    unit: "covers/hour",
    label: "Per unit, without breaking pace during peak service.",
  },
  {
    value: "Same day",
    unit: "install",
    label: "Hours, not weeks. No structural changes to your kitchen.",
  },
  {
    value: "90 sec",
    unit: "module swap",
    label: "Hot-swap dispensary modules when the menu changes.",
  },
  {
    value: "Sub-mm",
    unit: "precision",
    label: "Consistent assembly on every bun, sauce, and topping.",
  },
];

export const investorMetrics: InvestorMetric[] = [
  {
    label: "Throughput",
    value: "300 covers/hr",
    detail: "Per unit at sustained peak volume",
  },
  {
    label: "Deployment",
    value: "< 1 day",
    detail: "Install and operational same day, no structural changes",
  },
  {
    label: "Menu swap",
    value: "90 sec",
    detail: "Hot-swap dispensary modules without stopping the line",
  },
  {
    label: "Precision",
    value: "Sub-mm",
    detail: "Assembly repeatability across thousands of orders",
  },
  {
    label: "Compute",
    value: "On-device",
    detail: "Local inference — no cloud dependency for production",
  },
  {
    label: "Training",
    value: "Demo-based",
    detail: "New recipes learned from live demonstrations, not code",
  },
];

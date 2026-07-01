export type FootprintSpec = {
  height: string;
  length: string;
  width: string;
  note: string;
};

export type HardwareSpec = {
  label: string;
  value: string;
};

export type HardwareSpecGroup = {
  title: string;
  specs: HardwareSpec[];
};

export type HardwareSpecSection = {
  eyebrow: string;
  title: string;
  intro: string;
  footprint: FootprintSpec;
  groups: HardwareSpecGroup[];
};

const standardFootprint: FootprintSpec = {
  height: "87″",
  length: "187″",
  width: "112″",
  note: "Configurable to kitchen layout",
};

export const buyHardwareSection: HardwareSpecSection = {
  eyebrow: "System specs",
  title: "Built for your kitchen",
  intro:
    "System layout is configurable. Footprint and station placement can be adjusted to match your kitchen, not the other way around.",
  footprint: standardFootprint,
  groups: [
    {
      title: "Line capacity",
      specs: [
        { label: "Fries lanes", value: "4" },
        { label: "Sauce types", value: "4" },
        {
          label: "Veggie cutters",
          value: "4",
        },
        { label: "Fries conveyor", value: "47″" },
      ],
    },
    {
      title: "Requirements",
      specs: [
        { label: "Power", value: "208–240 VAC" },
        { label: "Connectivity", value: "WiFi" },
      ],
    },
    {
      title: "Deployment",
      specs: [
        { label: "Delivery", value: "3–6 mo" },
        { label: "Setup", value: "7 days" },
      ],
    },
    {
      title: "Warranty",
      specs: [
        { label: "Robot", value: "12 mo" },
        { label: "System", value: "12 mo" },
        { label: "Software", value: "12 mo" },
      ],
    },
  ],
};

export const investorHardwareSection: HardwareSpecSection = {
  eyebrow: "Hardware",
  title: "Deployment at a glance",
  intro:
    "System layout is configurable. Footprint and station placement can be adjusted to match a given kitchen, not the other way around.",
  footprint: standardFootprint,
  groups: [
    {
      title: "Requirements",
      specs: [
        { label: "Power", value: "208–240 VAC" },
        { label: "Connectivity", value: "WiFi" },
      ],
    },
    {
      title: "Deployment",
      specs: [
        { label: "Delivery", value: "3–6 mo" },
        { label: "Setup", value: "7 days" },
      ],
    },
    {
      title: "Warranty",
      specs: [
        { label: "Robot", value: "12 mo" },
        { label: "System", value: "12 mo" },
        { label: "Software", value: "12 mo" },
      ],
    },
  ],
};

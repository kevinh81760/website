export type DeckTopic = {
  title: string;
  description: string;
};

export const investorDeckTopics: DeckTopic[] = [
  {
    title: "Market thesis",
    description:
      "Labor constraints, consistency at scale, and why commercial kitchens are the next automation frontier.",
  },
  {
    title: "Financial overview",
    description:
      "Unit economics, deployment model, and path to revenue across restaurant operators.",
  },
  {
    title: "Technology & deployment",
    description:
      "On-device robotics, demonstration-based learning, and same-day kitchen integration.",
  },
  {
    title: "Traction & partnerships",
    description:
      "Live production at Breaking Dawn, ABB Robotics partnership, and go-to-market strategy.",
  },
];

export const investorDeckCopy = {
  eyebrow: "Investor deck",
  title: "Full materials available on request.",
  description:
    "We share our deck, financial overview, and technical documentation with qualified investors. Reach out and we'll send everything over.",
  ctaLabel: "Request investor deck →",
  emailLabel: "Email investors →",
};

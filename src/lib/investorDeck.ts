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
  emailLabel: "Email us →",
};

export const investorHeroCopy = {
  intro:
    "BurgerBots is proving robotic kitchen assembly in a live restaurant today, one kitchen at 160 W Main Street in Los Gatos running two concepts, Breaking Dawn Brunch and First Born Los Gatos, operating since April 2025, and built to scale into additional locations from there. The system is designed to learn recipes from live demonstration, avoiding the retrofit and months long integration timelines typical of kitchen automation.",
  introShort:
    "BurgerBots is proving robotic kitchen assembly in a live Los Gatos restaurant today — built to scale with demonstration-based learning, not months-long integration.",
};

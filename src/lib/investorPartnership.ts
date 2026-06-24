export type PartnershipHighlight = {
  title: string;
  detail: string;
};

export type PressLink = {
  source: string;
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export const abbPartnershipHighlights: PartnershipHighlight[] = [
  {
    title: "IRB 360 FlexPicker",
    detail: "Delta robot for hygienic, high-speed topping selection.",
  },
  {
    title: "YuMi cobot",
    detail: "Human-safe final assembly with sub-millimeter placement.",
  },
  {
    title: "Inventory system",
    detail: "Real-time stock tracking across the full assembly cell.",
  },
];

export const abbPartnershipProof = [
  { value: "27 sec", label: "per burger" },
  { value: "Breaking Dawn", label: "Los Gatos, CA" },
  { value: "Food-grade", label: "hygienic cell" },
] as const;

export const abbPressLinks: PressLink[] = [
  {
    source: "ABB Robotics",
    title: "ABB and BurgerBots unveil robotic burger-making",
    href: "https://new.abb.com/news/detail/125513/prsrl-abb-and-burgerbots-unveil-robotic-burger-making-to-revolutionize-fast-food-prep",
    image: {
      src: "/assets/press/launch-day-storefront.png",
      alt: "Balloon arch at the BurgerBots restaurant opening in Los Gatos",
    },
  },
  {
    source: "The Robot Report",
    title: "BurgerBots opens restaurant with ABB robots preparing fast food",
    href: "https://www.therobotreport.com/burgerbots-opens-restaurant-with-abb-robots-preparing-fast-food/",
    image: {
      src: "/assets/press/robot-report-cover.jpg",
      alt: "Crowd at the BurgerBots launch at Breaking Dawn",
    },
  },
  {
    source: "Fast Casual",
    title: "BurgerBots opens 1st restaurant, ready to expand",
    href: "https://www.fastcasual.com/news/burgerbots-opens-1st-restaurant-ready-to-expand/",
    image: {
      src: "/assets/press/launch-day-crowd.png",
      alt: "Guests at the BurgerBots launch at Breaking Dawn",
    },
  },
];

export const abbPartnershipCopy = {
  eyebrow: "Partnership",
  title: "Built with ABB Robotics",
  body: "Industrial automation on a live commercial line — FlexPicker and YuMi working together at Breaking Dawn in Los Gatos, with ABB's global service network and hygienic design standards behind the cell. The same platform ABB deploys across food and beverage worldwide, proven on a live BurgerBots line.",
  image: {
    src: "/assets/abb-robotics-factory.png",
    alt: "ABB industrial robots in an automated assembly cell",
  },
};

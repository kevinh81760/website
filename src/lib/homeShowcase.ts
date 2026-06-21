import { siteConfig } from "@/lib/siteConfig";

export type ShowcaseTile = {
  id: string;
  type: "image" | "video";
  /** /public path or YouTube embed URL */
  src: string;
  alt: string;
  size: "sm" | "md" | "lg" | "wide";
  label?: string;
  cta?: { label: string; href: string };
};

export const homeShowcaseTiles: ShowcaseTile[] = [
  {
    id: "bob-demo",
    type: "video",
    src: siteConfig.demoVideoUrl,
    alt: "B.O.B. assembling burgers in the kitchen",
    size: "lg",
    label: "Meet B.O.B.",
  },
  {
    id: "grind",
    type: "image",
    src: "/technology.png",
    alt: "BurgerBot technology in the kitchen",
    size: "md",
    label: "Grind. Grill. Garnish.",
  },
  {
    id: "arm",
    type: "image",
    src: "/robot-arm.png",
    alt: "Robot assembly arm",
    size: "sm",
  },
  {
    id: "burger",
    type: "image",
    src: "/burger.png",
    alt: "Finished burger",
    size: "sm",
  },
  {
    id: "kitchen",
    type: "image",
    src: "/burgerbotthumbnail.jpg",
    alt: "Kitchen in action",
    size: "wide",
    label: "Every burger. Same love.",
  },
  {
    id: "visit",
    type: "image",
    src: "/burger.png",
    alt: "Come taste the future",
    size: "md",
    label: "Come taste the future.",
    cta: { label: "Try a Burger →", href: "/contact" },
  },
];

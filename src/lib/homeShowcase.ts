export type ShowcaseTile = {
  id: string;
  type: "image" | "video";
  /** /public path or embed URL */
  src: string;
  alt: string;
  size: "sm" | "md" | "lg" | "wide";
  label?: string;
  cta?: { label: string; href: string };
  /** Tailwind classes to adjust image framing within the tile */
  imageClassName?: string;
};

export const homeShowcaseTiles: ShowcaseTile[] = [
  {
    id: "bob-demo",
    type: "video",
    src: "/assets/burgerbots-live.mov",
    alt: "B.O.B. assembling burgers in the kitchen",
    size: "lg",
    label: "Meet B.O.B.",
  },
  {
    id: "grind",
    type: "image",
    src: "/assets/showcase/burgerbot-action.jpg",
    alt: "B.O.B. assembling burgers on the line",
    size: "md",
    imageClassName: "scale-[1.22] -translate-y-[10%]",
  },
  {
    id: "arm",
    type: "image",
    src: "/assets/showcase/burgerbots-kiosk.jpg",
    alt: "BurgerBots order kiosk",
    size: "sm",
  },
  {
    id: "burger",
    type: "image",
    src: "/assets/showcase/fried-chicken-on-belt.jpg",
    alt: "Fried chicken moving along the production belt",
    size: "sm",
  },
  {
    id: "kitchen",
    type: "image",
    src: "/assets/showcase/restaurant-view.jpg",
    alt: "Restaurant view with burger at Breaking Dawn",
    size: "wide",
    imageClassName: "scale-[1.22] -translate-y-[10%]",
  },
  {
    id: "visit",
    type: "video",
    src: "/assets/lettuce-tomato-burger-b-roll.mov",
    alt: "Come taste the future",
    size: "md",
    label: "Come taste the future.",
    cta: { label: "Try a Burger →", href: "#visit" },
  },
];

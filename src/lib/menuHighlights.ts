export type MenuItem = {
  id: string;
  name: string;
  description: string;
  kicker: string;
  note: string;
  ctaLabel: string;
  /** Replace with /showcase/menu-{id}.jpg when ready */
  image: string;
};

export const menuHighlights: MenuItem[] = [
  {
    id: "classic",
    name: "The Classic",
    description: "Ground fresh, grilled to order, dressed by B.O.B. The one that started it all.",
    kicker: "Signature pick",
    note: "Fresh-ground beef, melted cheese, and the same build every single time.",
    ctaLabel: "Try The Classic →",
    image: "/burger.png",
  },
  {
    id: "double",
    name: "Double Stack",
    description: "Two patties, double the robot love. For when one burger isn't enough.",
    kicker: "Built for hunger",
    note: "Two patties stacked with the same sub-millimeter care as the original.",
    ctaLabel: "Go double →",
    image: "/burger.png",
  },
  {
    id: "garden",
    name: "Garden Bot",
    description: "No patty, all precision. Veggies stacked with the same sub-mm care.",
    kicker: "Plant-based precision",
    note: "Crisp produce, layered to spec — no shortcuts, no compromise.",
    ctaLabel: "Try Garden Bot →",
    image: "/burger.png",
  },
];

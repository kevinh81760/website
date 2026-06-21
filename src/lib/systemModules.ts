export type SystemModule = {
  id: string;
  name: string;
  description: string;
  image?: string;
  specs?: string[];
};

export const systemModules: SystemModule[] = [
  {
    id: "assembler",
    name: "Assembler",
    description:
      "A six-axis robot arm that builds every burger to spec: bun, protein, toppings, sauces. Sub-millimeter consistency on every single order. Learns new recipes from a handful of live demonstrations.",
    image: "/robot-arm.png",
    specs: [
      "Six-axis manipulator",
      "Sub-mm placement repeatability",
      "Demo-based recipe acquisition",
      "Gentle handling for delicate ingredients",
    ],
  },
  {
    id: "dispensary",
    name: "Dispensary",
    description:
      "Gram-level precision for every sauce, liquid, and dry topping. Portion consistency is guaranteed, not approximated. The module hot-swaps in under 90 seconds when you change the menu.",
    image: "/burger.png",
    specs: [
      "Gram-level portion control",
      "Hot-swap modules (< 90 sec)",
      "Sauces, liquids, dry toppings",
      "No line stop for menu changes",
    ],
  },
  {
    id: "conveyor",
    name: "Conveyor",
    description:
      "A variable-speed belt that moves product between stations at a pace set by the live order queue. Self-adjusts to downstream bottlenecks detected by the onboard vision system.",
    image: "/technology.png",
    specs: [
      "Variable-speed belt system",
      "Queue-driven pacing",
      "Vision-based bottleneck detection",
      "Continuous hygiene monitoring",
    ],
  },
  {
    id: "interface",
    name: "Interface",
    description:
      "A single glove-friendly touchscreen gives operators full visibility into queue position, throughput, and system health in real time. No IT overhead, no proprietary software.",
    image: "/contact.png",
    specs: [
      "Glove-friendly touchscreen",
      "Real-time queue and throughput",
      "No IT overhead or logins",
      "Readable under kitchen lighting",
    ],
  },
  {
    id: "intelligence",
    name: "Intelligence",
    description:
      "On-device ML inference powers recipe learning, vision-based quality checks, and throughput optimization locally — no cloud round-trips during production.",
    specs: [
      "On-device ML inference",
      "Vision-based quality checks",
      "Local recipe and rhythm learning",
      "No cloud dependency in production",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    description:
      "One unit handles up to 300 covers an hour. Add more and they work together automatically, sharing the queue and balancing the load.",
    specs: [
      "300 covers/hr per unit",
      "Multi-unit queue sharing",
      "Automatic load balancing",
      "< 1 day new-site deployment",
    ],
  },
];

/** First four modules for the interactive buy-page showcase. */
export const showcaseModules = systemModules.slice(0, 4);

/** All modules with specs for the investor architecture grid. */
export const investorModules = systemModules.filter((m) => m.specs);

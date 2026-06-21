export type ProseSection = {
  heading: string;
  body: string[];
};

export const howItWorksSections: ProseSection[] = [
  {
    heading: "The system",
    body: [
      "BurgerBots is built around one idea: the robot should fit your kitchen, not the other way around. It installs in hours, not weeks. No structural changes, no disruption. Your staff keeps working while it gets set up.",
    ],
  },
  {
    heading: "The assembly arm",
    body: [
      "Gentle enough to handle a brioche bun without crushing it. Precise enough to place a tomato the same way, every time, for a thousand orders straight. Show it a new build a few times and it learns — no programming, no specialist, no downtime.",
    ],
  },
  {
    heading: "The dispensary",
    body: [
      "Every sauce, every topping, portioned the same way every time. Not approximately. Exactly. Swapping out a module takes under ninety seconds. Menu changes never mean stopping the line.",
    ],
  },
  {
    heading: "Built to scale",
    body: [
      "One unit handles up to 300 covers an hour. Add more and they work together automatically, sharing the queue and balancing the load. One location or four hundred — getting a new site up and running takes less than a day.",
    ],
  },
];

export const investorThesisSections: ProseSection[] = [
  {
    heading: "Market",
    body: [
      "Labor turnover in food service remains structurally high. The repetitive assembly work that defines QSR and fast-casual operations — portioning, stacking, plating — is exactly the work that burns people out fastest. Operators scale volume by adding headcount, not by improving throughput per square foot.",
      "Prior robotics solutions required kitchen redesign, months of integration, and brittle programming for every menu change. Adoption stalled because the integration cost exceeded the labor savings.",
    ],
  },
  {
    heading: "Problem",
    body: [
      "Kitchen robotics historically asked operators to rebuild around the robot: new layouts, custom conveyors, specialist integrators, and weeks of downtime per menu update. Systems that worked in the lab failed in production when recipes, staffing, or peak patterns changed.",
      "The gap is not hardware capability — it is deployability. Operators need a system that fits existing kitchens, learns new builds without code, and maintains consistency at volume without scaling headcount linearly.",
    ],
  },
  {
    heading: "Approach",
    body: [
      "BurgerBots is built on demonstration-based learning: operators show the system a recipe a few times, and it replicates assembly with sub-millimeter repeatability on every subsequent order. No programming, no specialist integrator, no production downtime for menu updates.",
      "The system installs in hours into kitchens operators already run. Assembly arm, dispensary, conveyor, and operator interface form a modular stack designed for side-by-side operation with existing staff — not full-line replacement.",
    ],
  },
  {
    heading: "Differentiation",
    body: [
      "On-device intelligence: recipe learning, vision-based quality checks, and throughput optimization run locally. No cloud round-trips during production. Data stays in the kitchen.",
      "Modular architecture: each dispensary module hot-swaps in under 90 seconds. Multi-unit deployments share order queues automatically — add capacity by adding units, not by re-architecting the line.",
      "Team background: founders from aerospace, autonomous vehicles, and AI research — fields where systems must work every time without exception. Live deployments with restaurants and QSR brands today.",
    ],
  },
];

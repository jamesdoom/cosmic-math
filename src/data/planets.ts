import type { Planet } from "../types";

export const planets: Planet[] = [
  {
    id: "ratio-rocketway",
    name: "Ratio Rocketway",
    description:
      "Master unit rates, proportions, and percentages to fuel your spacecraft.",
    missionIds: [
      "fuel-speed-academy",
      "supply-route-navigation",
      "asteroid-market",
    ],
  },

  {
    id: "fraction-frontier",
    name: "Fraction Frontier",
    description:
      "Compare, add, and multiply fractions to chart deep-space routes.",
    missionIds: [
      "fraction-orbit-lab",
      "recipe-refuel-station",
      "cargo-array-command",
    ],
  },
];

import type { Mission } from "../types";

export const missions: Mission[] = [
  {
    id: "fuel-speed-academy",
    planetId: "ratio-rocketway",
    title: "Fuel Speed Academy",
    topic: "Unit Rates",
    briefing:
      "Calculate unit rates to keep your spacecraft moving at the right speed.",
    badgeRewardId: "unit-rate-pilot",
    xpReward: 50,
    starReward: 90,
    questionIds: [
      "unit-rate-q1",
      "unit-rate-q2",
      "unit-rate-q3",
      "unit-rate-q4",
      "unit-rate-boss",
    ],
  },

  {
    id: "supply-route-navigation",
    planetId: "ratio-rocketway",
    title: "Supply Route Navigation",
    topic: "Proportional Relationships",
    briefing:
      "Use proportions to check whether space supply routes stay on course.",
    badgeRewardId: "navigation-specialist",
    xpReward: 60,
    starReward: 100,
    questionIds: [
      "proportion-q1",
      "proportion-q2",
      "proportion-q3",
      "proportion-q4",
      "proportion-boss",
    ],
  },

  {
    id: "asteroid-market",
    planetId: "ratio-rocketway",
    title: "Asteroid Market",
    topic: "Percent Change",
    briefing: "Calculate price changes in the asteroid trading market.",
    badgeRewardId: "market-commander",
    xpReward: 60,
    starReward: 100,
    questionIds: [
      "percent-q1",
      "percent-q2",
      "percent-q3",
      "percent-q4",
      "percent-boss",
    ],
  },

  {
    id: "fraction-orbit-lab",
    planetId: "fraction-frontier",
    title: "Fraction Orbit Lab",
    topic: "Comparing Fractions",
    briefing:
      "Compare fractions to choose stable orbits around distant moons.",
    badgeRewardId: "orbit-fractionist",
    xpReward: 70,
    starReward: 100,
    questionIds: [
      "compare-fractions-q1",
      "compare-fractions-q2",
      "compare-fractions-q3",
      "compare-fractions-q4",
      "compare-fractions-boss",
    ],
  },

  {
    id: "recipe-refuel-station",
    planetId: "fraction-frontier",
    title: "Recipe Refuel Station",
    topic: "Adding Fractions",
    briefing:
      "Add fractional fuel mixtures to prepare safe launch recipes.",
    badgeRewardId: "refuel-mixer",
    xpReward: 75,
    starReward: 100,
    questionIds: [
      "add-fractions-q1",
      "add-fractions-q2",
      "add-fractions-q3",
      "add-fractions-q4",
      "add-fractions-boss",
    ],
  },

  {
    id: "cargo-array-command",
    planetId: "fraction-frontier",
    title: "Cargo Array Command",
    topic: "Multiplying Fractions",
    briefing:
      "Multiply fractions to calculate cargo arrays and partial shipments.",
    badgeRewardId: "cargo-array-captain",
    xpReward: 80,
    starReward: 100,
    questionIds: [
      "multiply-fractions-q1",
      "multiply-fractions-q2",
      "multiply-fractions-q3",
      "multiply-fractions-q4",
      "multiply-fractions-boss",
    ],
  },
];

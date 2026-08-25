import type { Mission } from "../types";

export const missions: Mission[] = [
  {
    id: "data-observatory",
    planetId: "unit-one-orbit",
    title: "Data Observatory",
    topic: "Statistics and Interpreting Data",
    briefing:
      "Read data displays and use center, spread, and context to make decisions.",
    badgeRewardId: "data-observer",
    xpReward: 60,
    starReward: 100,
    questionIds: [
      "data-q1",
      "data-q2",
      "data-q3",
      "data-q4",
      "data-boss",
    ],
  },

  {
    id: "ratio-route-lab",
    planetId: "unit-one-orbit",
    title: "Ratio Route Lab",
    topic: "Ratio Relationships",
    briefing:
      "Use equivalent ratios and unit rates to compare routes, prices, and speeds.",
    badgeRewardId: "ratio-navigator",
    xpReward: 60,
    starReward: 100,
    questionIds: [
      "ratio-q1",
      "ratio-q2",
      "ratio-q3",
      "ratio-q4",
      "ratio-boss",
    ],
  },

  {
    id: "rational-number-range",
    planetId: "unit-one-orbit",
    title: "Rational Number Range",
    topic: "Rational Numbers and Absolute Value",
    briefing:
      "Compare rational numbers, order values, and use absolute value as distance from zero.",
    badgeRewardId: "rational-ranger",
    xpReward: 70,
    starReward: 100,
    questionIds: [
      "rational-q1",
      "rational-q2",
      "rational-q3",
      "rational-q4",
      "rational-boss",
    ],
  },

  {
    id: "integer-operations-command",
    planetId: "unit-one-orbit",
    title: "Integer Operations Command",
    topic: "Operations with Integers",
    briefing:
      "Add, subtract, multiply, and divide integers in real-world situations.",
    badgeRewardId: "integer-commander",
    xpReward: 70,
    starReward: 100,
    questionIds: [
      "integer-q1",
      "integer-q2",
      "integer-q3",
      "integer-q4",
      "integer-boss",
    ],
  },
];

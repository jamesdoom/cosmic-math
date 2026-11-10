import type { Mission } from "../types";

const questionIds = (prefix: string) => [
  ...Array.from({ length: 9 }, (_, index) => `${prefix}-q${index + 1}`),
  `${prefix}-boss`,
];

export const missions: Mission[] = [
  {
    id: "circle-relationships",
    planetId: "unit-four-circles",
    title: "4.5 Exploring Relationships in Circles",
    topic: "Radius, Diameter, and Pi",
    briefing:
      "Identify circle parts and use the relationships among radius, diameter, circumference, and pi.",
    badgeRewardId: "circle-scout",
    xpReward: 60,
    starReward: 100,
    questionIds: questionIds("circle-relations"),
  },
  {
    id: "finding-circumference",
    planetId: "unit-four-circles",
    title: "4.6 Finding Circumference",
    topic: "Circumference Formulas",
    briefing:
      "Find the circumference of circles from a radius or diameter and apply the result in context.",
    badgeRewardId: "orbit-measurer",
    xpReward: 65,
    starReward: 100,
    questionIds: questionIds("circumference"),
  },
  {
    id: "finding-radius-diameter",
    planetId: "unit-four-circles",
    title: "4.7 Finding Radius and Diameter",
    topic: "Working Backward from Circumference",
    briefing:
      "Use circumference to determine an unknown radius or diameter in mathematical and real-world problems.",
    badgeRewardId: "radius-ranger",
    xpReward: 70,
    starReward: 100,
    questionIds: questionIds("radius-diameter"),
  },
  {
    id: "exploring-circle-area",
    planetId: "unit-four-circles",
    title: "4.8 Exploring the Area of a Circle",
    topic: "How Radius Determines Area",
    briefing:
      "Explore why circle area depends on the square of the radius and compare circles of different sizes.",
    badgeRewardId: "area-explorer",
    xpReward: 75,
    starReward: 100,
    questionIds: questionIds("area-exploration"),
  },
  {
    id: "finding-circle-area",
    planetId: "unit-four-circles",
    title: "4.9 Finding the Area of a Circle",
    topic: "Area Formulas and Applications",
    briefing:
      "Calculate circle areas from a radius or diameter and solve measurement and cost problems.",
    badgeRewardId: "circle-area-master",
    xpReward: 80,
    starReward: 100,
    questionIds: questionIds("circle-area"),
  },
];

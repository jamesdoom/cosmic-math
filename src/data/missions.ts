import type { Mission } from "../types";

const questionIds = (prefix: string) => [
  ...Array.from({ length: 9 }, (_, index) => `${prefix}-q${index + 1}`),
  `${prefix}-boss`,
];

export const missions: Mission[] = [
  {
    id: "adding-rational-numbers",
    planetId: "unit-three-rational-numbers",
    title: "3.1 Adding Rational Numbers",
    topic: "Sums of Fractions and Decimals",
    briefing:
      "Add positive and negative rational numbers using number sense, models, and equivalent forms.",
    badgeRewardId: "rational-adder",
    xpReward: 60,
    starReward: 100,
    questionIds: questionIds("rational-addition"),
  },
  {
    id: "subtracting-rational-numbers",
    planetId: "unit-three-rational-numbers",
    title: "3.2 Subtracting Rational Numbers",
    topic: "Differences and Distance",
    briefing:
      "Subtract positive and negative rational numbers and find distances on a number line.",
    badgeRewardId: "difference-driver",
    xpReward: 65,
    starReward: 100,
    questionIds: questionIds("rational-subtraction"),
  },
  {
    id: "multiplying-rational-numbers",
    planetId: "unit-three-rational-numbers",
    title: "3.3 Multiplying Rational Numbers",
    topic: "Products and Sign Rules",
    briefing:
      "Multiply fractions and decimals while applying sign rules accurately.",
    badgeRewardId: "product-pilot",
    xpReward: 65,
    starReward: 100,
    questionIds: questionIds("rational-multiplication"),
  },
  {
    id: "dividing-rational-numbers",
    planetId: "unit-three-rational-numbers",
    title: "3.4 Dividing Rational Numbers",
    topic: "Quotients and Reciprocals",
    briefing:
      "Divide signed fractions and decimals by using reciprocals and division sign rules.",
    badgeRewardId: "quotient-commander",
    xpReward: 70,
    starReward: 100,
    questionIds: questionIds("rational-division"),
  },
  {
    id: "rational-problems-part-one",
    planetId: "unit-three-rational-numbers",
    title: "3.5 Solving Real-World Problems With Rational Numbers - Part 1",
    topic: "Addition and Subtraction in Context",
    briefing:
      "Model changes in money, temperature, elevation, and distance with rational-number addition and subtraction.",
    badgeRewardId: "context-navigator",
    xpReward: 70,
    starReward: 100,
    questionIds: questionIds("rational-context-one"),
  },
  {
    id: "rational-problems-part-two",
    planetId: "unit-three-rational-numbers",
    title: "3.6 Solving Real-World Problems With Rational Numbers - Part 2",
    topic: "Multiplication and Division in Context",
    briefing:
      "Use rational-number multiplication and division to solve rate, sharing, measurement, and cost problems.",
    badgeRewardId: "rate-ranger",
    xpReward: 75,
    starReward: 100,
    questionIds: questionIds("rational-context-two"),
  },
  {
    id: "rational-problems-part-three",
    planetId: "unit-three-rational-numbers",
    title: "3.7 Solving Real-World Problems With Rational Numbers - Part 3",
    topic: "Mixed Operations",
    briefing:
      "Choose and combine rational-number operations to solve multi-step situations.",
    badgeRewardId: "operation-orchestrator",
    xpReward: 80,
    starReward: 100,
    questionIds: questionIds("rational-context-three"),
  },
  {
    id: "rational-problems-part-four",
    planetId: "unit-three-rational-numbers",
    title: "3.8 Solving Real-World Problems With Rational Numbers - Part 4",
    topic: "Multi-Step Rational Reasoning",
    briefing:
      "Evaluate multi-step rational expressions and justify solutions using grouping, exponents, and absolute value.",
    badgeRewardId: "rational-master",
    xpReward: 85,
    starReward: 100,
    questionIds: questionIds("rational-context-four"),
  },
];

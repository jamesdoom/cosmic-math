import type { Mission } from "../types";

const questionIds = (prefix: string) => [
  ...Array.from({ length: 9 }, (_, index) => `${prefix}-q${index + 1}`),
  `${prefix}-boss`,
];

export const missions: Mission[] = [
  {
    id: "exploring-sample-space", planetId: "unit-two-probability", title: "2.1 Exploring Sample Space", topic: "Outcomes and Events",
    briefing: "Identify outcomes, events, and sample spaces for simple chance experiments.", badgeRewardId: "sample-space-scout",
    xpReward: 60, starReward: 100, questionIds: questionIds("sample-space-explore"),
  },
  {
    id: "determining-sample-space", planetId: "unit-two-probability", title: "2.2 Determining Sample Space", topic: "Organized Sample Spaces",
    briefing: "Use lists, tables, and tree diagrams to find every possible outcome of compound experiments.", badgeRewardId: "outcome-orbit",
    xpReward: 65, starReward: 100, questionIds: questionIds("sample-space-determine"),
  },
  {
    id: "equivalent-number-forms", planetId: "unit-two-probability", title: "2.3 Rewriting Numbers in Equivalent Forms", topic: "Fractions, Decimals, and Percents",
    briefing: "Rewrite rational numbers as equivalent fractions, decimals, and percents for use in probability.", badgeRewardId: "form-translator",
    xpReward: 65, starReward: 100, questionIds: questionIds("equivalent-forms"),
  },
  {
    id: "repeating-decimals-fractions", planetId: "unit-two-probability", title: "2.4 Converting Between Repeating Decimals and Fractions", topic: "Repeating Decimals",
    briefing: "Convert repeating decimals to fractions and recognize decimal forms of rational numbers.", badgeRewardId: "decimal-decoder",
    xpReward: 70, starReward: 100, questionIds: questionIds("repeating-decimals"),
  },
  {
    id: "probability", planetId: "unit-two-probability", title: "2.5 Probability", topic: "Simple Events",
    briefing: "Calculate probabilities of simple events and express them as fractions, decimals, or percents.", badgeRewardId: "probability-pilot",
    xpReward: 70, starReward: 100, questionIds: questionIds("probability"),
  },
  {
    id: "comparing-probabilities", planetId: "unit-two-probability", title: "2.6 Comparing Probabilities", topic: "Likelihood and Opposite Events",
    briefing: "Compare chances, describe likelihood, and use the probability of an event's opposite.", badgeRewardId: "chance-commander",
    xpReward: 75, starReward: 100, questionIds: questionIds("compare-probabilities"),
  },
  {
    id: "experimental-theoretical-probability", planetId: "unit-two-probability", title: "2.7 Experimental and Theoretical Probability", topic: "Expected and Observed Results",
    briefing: "Find experimental probability and compare observed results with theoretical expectations.", badgeRewardId: "experiment-explorer",
    xpReward: 75, starReward: 100, questionIds: questionIds("experiment-theory"),
  },
  {
    id: "simulating-trials", planetId: "unit-two-probability", title: "2.8 Simulating Small and Large Numbers of Trials", topic: "Designing Simulations",
    briefing: "Choose fair simulation models and predict how the number of trials affects results.", badgeRewardId: "simulation-specialist",
    xpReward: 80, starReward: 100, questionIds: questionIds("simulation-trials"),
  },
  {
    id: "probabilities-from-simulations", planetId: "unit-two-probability", title: "2.9 Experimental and Theoretical Probabilities From Simulations", topic: "Simulation Results and Predictions",
    briefing: "Analyze simulation data, compare probabilities, and make predictions for future trials.", badgeRewardId: "prediction-pro",
    xpReward: 85, starReward: 100, questionIds: questionIds("simulation-results"),
  },
];

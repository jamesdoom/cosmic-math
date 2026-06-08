import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: "unit-rate-q1",
    missionId: "fuel-speed-academy",
    prompt: "A shuttle travels 120 miles in 2 hours. What is the unit rate?",
    type: "multiple-choice",
    choices: ["40", "50", "60", "80"],
    correctAnswer: "60",
    explanation: "120 divided by 2 = 60 miles per hour.",
    hint: "Divide distance by time.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "unit-rate-q2",
    missionId: "fuel-speed-academy",
    prompt: "A rocket travels 180 miles in 3 hours. What is the unit rate?",
    type: "numeric",
    correctAnswer: 60,
    explanation: "180 divided by 3 = 60.",
    hint: "Think: amount per 1 hour.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "unit-rate-q3",
    missionId: "fuel-speed-academy",
    prompt: "500 miles in 8 hours. What is the closest unit rate?",
    type: "multiple-choice",
    choices: ["50", "62.5", "70", "80"],
    correctAnswer: "62.5",
    explanation: "500 divided by 8 = 62.5.",
    hint: "Divide total miles by hours.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "unit-rate-q4",
    missionId: "fuel-speed-academy",
    prompt:
      "Ship A: 240 miles in 4 hours. Ship B: 300 miles in 5 hours. Which is faster?",
    type: "multiple-choice",
    choices: ["Ship A", "Ship B", "Same speed"],
    correctAnswer: "Same speed",
    explanation: "Both equal 60 miles per hour.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "unit-rate-boss",
    missionId: "fuel-speed-academy",
    prompt:
      "Boss Mission: Which rescue ship reaches the station fastest?\nA: 400/5\nB: 270/3\nC: 480/6",
    type: "multiple-choice",
    choices: ["Ship A", "Ship B", "Ship C"],
    correctAnswer: "Ship B",
    explanation:
      "Ship A: 400 divided by 5 = 80. Ship B: 270 divided by 3 = 90. Ship C: 480 divided by 6 = 80. Ship B is fastest.",
    difficulty: "boss",
    starReward: 40,
  },

  {
    id: "proportion-q1",
    missionId: "supply-route-navigation",
    prompt:
      "A supply route sends 3 crates for every 2 ships. How many crates are needed for 6 ships?",
    type: "multiple-choice",
    choices: ["6", "9", "12", "18"],
    correctAnswer: "9",
    explanation: "6 ships is 3 groups of 2 ships, so 3 times 3 = 9 crates.",
    hint: "Find how many groups of 2 ships are in 6 ships.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "proportion-q2",
    missionId: "supply-route-navigation",
    prompt:
      "A rover uses 4 power cells to travel 20 miles. At the same rate, how many miles can it travel with 7 power cells?",
    type: "numeric",
    correctAnswer: 35,
    explanation:
      "20 miles divided by 4 cells = 5 miles per cell. 7 cells times 5 = 35 miles.",
    hint: "Find the miles per 1 power cell first.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "proportion-q3",
    missionId: "supply-route-navigation",
    prompt:
      "Which route keeps the same ratio as 5 satellites for every 8 relay towers?",
    type: "multiple-choice",
    choices: ["10 to 16", "12 to 18", "15 to 20", "20 to 28"],
    correctAnswer: "10 to 16",
    explanation:
      "5 to 8 multiplied by 2 gives 10 to 16, so the ratios are proportional.",
    hint: "Look for a pair made by multiplying both numbers by the same amount.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "proportion-q4",
    missionId: "supply-route-navigation",
    prompt:
      "A map shows 2 inches for every 50 space miles. How many space miles are represented by 7 inches?",
    type: "numeric",
    correctAnswer: 175,
    explanation:
      "50 divided by 2 = 25 space miles per inch. 7 inches times 25 = 175 space miles.",
    hint: "Find the miles for 1 inch, then multiply by 7.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "proportion-boss",
    missionId: "supply-route-navigation",
    prompt:
      "Boss Mission: Which cargo route is proportional to 6 fuel pods for 15 supply crates?\nA: 12 pods for 30 crates\nB: 18 pods for 36 crates\nC: 24 pods for 45 crates",
    type: "multiple-choice",
    choices: ["Route A", "Route B", "Route C"],
    correctAnswer: "Route A",
    explanation:
      "6 to 15 multiplied by 2 gives 12 to 30. The other routes do not multiply both numbers by the same amount.",
    hint: "Check whether both numbers use the same multiplier.",
    difficulty: "boss",
    starReward: 50,
  },

  {
    id: "percent-q1",
    missionId: "asteroid-market",
    prompt:
      "A moon gem costs 100 credits. Its price increases by 20%. What is the new price?",
    type: "multiple-choice",
    choices: ["110", "120", "125", "140"],
    correctAnswer: "120",
    explanation: "20% of 100 is 20. 100 + 20 = 120 credits.",
    hint: "Find the increase, then add it to the original price.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "percent-q2",
    missionId: "asteroid-market",
    prompt:
      "A fuel crystal drops from 80 credits to 60 credits. What is the percent decrease?",
    type: "numeric",
    correctAnswer: 25,
    explanation:
      "The price dropped by 20 credits. 20 divided by 80 = 0.25, which is 25%.",
    hint: "Percent decrease is change divided by the original amount.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "percent-q3",
    missionId: "asteroid-market",
    prompt:
      "An asteroid ore bundle costs 200 credits and is discounted by 15%. What is the sale price?",
    type: "multiple-choice",
    choices: ["150", "160", "170", "185"],
    correctAnswer: "170",
    explanation: "15% of 200 is 30. 200 - 30 = 170 credits.",
    hint: "A discount means subtract the percent amount.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "percent-q4",
    missionId: "asteroid-market",
    prompt:
      "A rare comet coin rises from 50 credits to 65 credits. What is the percent increase?",
    type: "numeric",
    correctAnswer: 30,
    explanation:
      "The increase is 15 credits. 15 divided by 50 = 0.30, which is 30%.",
    hint: "Percent increase is change divided by the original amount.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "percent-boss",
    missionId: "asteroid-market",
    prompt:
      "Boss Mission: A starship part costs 240 credits. It goes on sale for 25% off, then the sale price increases by 10%. What is the final price?",
    type: "multiple-choice",
    choices: ["180", "198", "204", "216"],
    correctAnswer: "198",
    explanation:
      "25% off 240 is 180. Then 10% of 180 is 18, so the final price is 198 credits.",
    hint: "Apply the discount first, then apply the increase to the sale price.",
    difficulty: "boss",
    starReward: 50,
  },

  {
    id: "compare-fractions-q1",
    missionId: "fraction-orbit-lab",
    prompt: "Which fraction is greater: 1/2 or 1/3?",
    type: "multiple-choice",
    choices: ["1/2", "1/3", "They are equal"],
    correctAnswer: "1/2",
    explanation:
      "With the same whole, one half is larger than one third.",
    hint: "Picture the same moon cut into 2 pieces or 3 pieces.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "compare-fractions-q2",
    missionId: "fraction-orbit-lab",
    prompt: "Which fraction is equal to 2/4?",
    type: "multiple-choice",
    choices: ["1/2", "2/3", "3/4", "4/6"],
    correctAnswer: "1/2",
    explanation: "2/4 simplifies to 1/2 because both numbers divide by 2.",
    hint: "Divide the numerator and denominator by the same number.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "compare-fractions-q3",
    missionId: "fraction-orbit-lab",
    prompt: "Which fraction is greatest?",
    type: "multiple-choice",
    choices: ["3/8", "1/2", "5/12", "2/3"],
    correctAnswer: "2/3",
    explanation:
      "Using a common denominator of 24 gives 9/24, 12/24, 10/24, and 16/24. So 2/3 is greatest.",
    hint: "Try rewriting each fraction with a denominator of 24.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "compare-fractions-q4",
    missionId: "fraction-orbit-lab",
    prompt: "Which symbol makes this true? 5/6 ___ 7/9",
    type: "multiple-choice",
    choices: [">", "<", "="],
    correctAnswer: ">",
    explanation:
      "5/6 equals 15/18, and 7/9 equals 14/18. Since 15/18 is greater, 5/6 > 7/9.",
    hint: "Use 18 as a common denominator.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "compare-fractions-boss",
    missionId: "fraction-orbit-lab",
    prompt:
      "Boss Mission: Three moons have safe orbit windows.\nA: 3/5 of an hour\nB: 5/8 of an hour\nC: 7/10 of an hour\nWhich moon has the longest safe window?",
    type: "multiple-choice",
    choices: ["Moon A", "Moon B", "Moon C"],
    correctAnswer: "Moon C",
    explanation:
      "Using denominator 40 gives A = 24/40, B = 25/40, and C = 28/40. Moon C is longest.",
    hint: "Rewrite each fraction with a common denominator.",
    difficulty: "boss",
    starReward: 50,
  },

  {
    id: "add-fractions-q1",
    missionId: "recipe-refuel-station",
    prompt: "A fuel recipe uses 1/4 tank of blue fuel and 1/4 tank of gold fuel. How much fuel is used total?",
    type: "multiple-choice",
    choices: ["1/8", "1/2", "2/8", "1"],
    correctAnswer: "1/2",
    explanation: "1/4 + 1/4 = 2/4, and 2/4 simplifies to 1/2.",
    hint: "The denominators already match.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "add-fractions-q2",
    missionId: "recipe-refuel-station",
    prompt: "What is 1/3 + 1/6?",
    type: "multiple-choice",
    choices: ["1/9", "2/9", "1/2", "2/6"],
    correctAnswer: "1/2",
    explanation: "1/3 is 2/6. Then 2/6 + 1/6 = 3/6 = 1/2.",
    hint: "Rewrite 1/3 using sixths.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "add-fractions-q3",
    missionId: "recipe-refuel-station",
    prompt: "A station mixes 2/5 tank of oxygen fuel and 1/10 tank of spark fuel. What fraction of a tank is the mixture?",
    type: "multiple-choice",
    choices: ["3/15", "1/2", "3/10", "2/15"],
    correctAnswer: "1/2",
    explanation: "2/5 is 4/10. Then 4/10 + 1/10 = 5/10 = 1/2.",
    hint: "Use tenths as the common denominator.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "add-fractions-q4",
    missionId: "recipe-refuel-station",
    prompt: "What is 3/4 + 1/8?",
    type: "multiple-choice",
    choices: ["4/12", "7/8", "1/2", "5/8"],
    correctAnswer: "7/8",
    explanation: "3/4 is 6/8. Then 6/8 + 1/8 = 7/8.",
    hint: "Rewrite 3/4 in eighths.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "add-fractions-boss",
    missionId: "recipe-refuel-station",
    prompt:
      "Boss Mission: A long-range launch needs 2/3 tank of solar fuel, 1/6 tank of comet fuel, and 1/12 tank of ion fuel. How much fuel is needed total?",
    type: "multiple-choice",
    choices: ["3/4", "5/6", "11/12", "1"],
    correctAnswer: "11/12",
    explanation:
      "2/3 = 8/12 and 1/6 = 2/12. Then 8/12 + 2/12 + 1/12 = 11/12.",
    hint: "Use twelfths for every fraction.",
    difficulty: "boss",
    starReward: 50,
  },

  {
    id: "multiply-fractions-q1",
    missionId: "cargo-array-command",
    prompt: "What is 1/2 of 8 cargo crates?",
    type: "numeric",
    correctAnswer: 4,
    explanation: "Half of 8 is 4.",
    hint: "Divide 8 into 2 equal groups.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "multiply-fractions-q2",
    missionId: "cargo-array-command",
    prompt: "What is 1/3 of 12 supply pods?",
    type: "numeric",
    correctAnswer: 4,
    explanation: "12 divided by 3 = 4.",
    hint: "One third means one of 3 equal groups.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "multiply-fractions-q3",
    missionId: "cargo-array-command",
    prompt: "What is 2/3 of 15 cargo units?",
    type: "numeric",
    correctAnswer: 10,
    explanation: "One third of 15 is 5, so two thirds is 10.",
    hint: "Find 1/3 first, then double it.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "multiply-fractions-q4",
    missionId: "cargo-array-command",
    prompt: "What is 3/4 of 20 shield panels?",
    type: "numeric",
    correctAnswer: 15,
    explanation: "One fourth of 20 is 5, so three fourths is 15.",
    hint: "Find 1/4 first, then multiply by 3.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "multiply-fractions-boss",
    missionId: "cargo-array-command",
    prompt:
      "Boss Mission: A freighter can carry 48 crates. It is filled to 5/8 capacity. How many crates are on board?",
    type: "numeric",
    correctAnswer: 30,
    explanation:
      "One eighth of 48 is 6. Five eighths is 5 times 6, which equals 30 crates.",
    hint: "Find 1/8 of 48 first.",
    difficulty: "boss",
    starReward: 50,
  },
];

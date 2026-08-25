import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: "data-q1",
    missionId: "data-observatory",
    prompt:
      "A class recorded these quiz scores: 6, 7, 7, 8, 9. What is the median score?",
    type: "numeric",
    correctAnswer: 7,
    explanation:
      "The values are already in order. The middle value is 7, so the median is 7.",
    hint: "The median is the middle value when data is ordered.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "data-q2",
    missionId: "data-observatory",
    prompt:
      "A survey asked students how many books they read: 1, 2, 2, 3, 7. Which measure is most affected by the outlier 7?",
    type: "multiple-choice",
    choices: ["Mean", "Median", "Mode"],
    correctAnswer: "Mean",
    explanation:
      "The mean uses every value, so a very high or low outlier can pull it away from the center.",
    hint: "Think about which measure adds all values before dividing.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "data-q3",
    missionId: "data-observatory",
    prompt:
      "A dot plot has values from 4 to 12. What is the range of the data?",
    type: "numeric",
    correctAnswer: 8,
    explanation: "Range is the greatest value minus the least value: 12 - 4 = 8.",
    hint: "Subtract the smallest value from the largest value.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "data-q4",
    missionId: "data-observatory",
    prompt:
      "Two teams have the same mean score. Team A has a range of 4, and Team B has a range of 16. Which team's scores are more spread out?",
    type: "multiple-choice",
    choices: ["Team A", "Team B", "They have the same spread"],
    correctAnswer: "Team B",
    explanation:
      "A larger range means the data values are more spread out. Team B has the larger range.",
    hint: "Compare the ranges.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "data-boss",
    missionId: "data-observatory",
    prompt:
      "Boss Mission: A rover tracks temperatures: -2, 0, 1, 3, 18. Which statement best describes the data?",
    type: "multiple-choice",
    choices: [
      "18 is an outlier that raises the mean",
      "18 lowers the median",
      "The data has no spread",
      "The range is 3",
    ],
    correctAnswer: "18 is an outlier that raises the mean",
    explanation:
      "Most values are near -2 to 3, but 18 is far away. That high outlier increases the mean.",
    hint: "Look for the value farthest from the rest.",
    difficulty: "boss",
    starReward: 50,
  },

  {
    id: "ratio-q1",
    missionId: "ratio-route-lab",
    prompt:
      "A recipe uses 3 cups of water for every 2 cups of mix. What is the ratio of water to mix?",
    type: "multiple-choice",
    choices: ["2:3", "3:2", "3:5", "5:3"],
    correctAnswer: "3:2",
    explanation:
      "The ratio compares water to mix, so water comes first: 3 cups to 2 cups.",
    hint: "Match the order named in the question.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "ratio-q2",
    missionId: "ratio-route-lab",
    prompt:
      "A shuttle travels 150 miles in 3 hours. How many miles does it travel per hour?",
    type: "numeric",
    correctAnswer: 50,
    explanation: "150 divided by 3 = 50 miles per hour.",
    hint: "Divide miles by hours.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "ratio-q3",
    missionId: "ratio-route-lab",
    prompt:
      "Which ratio is equivalent to 4:7?",
    type: "multiple-choice",
    choices: ["8:14", "8:11", "12:18", "16:21"],
    correctAnswer: "8:14",
    explanation:
      "Multiplying both parts of 4:7 by 2 gives 8:14.",
    hint: "Equivalent ratios multiply both numbers by the same factor.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "ratio-q4",
    missionId: "ratio-route-lab",
    prompt:
      "A store sells 5 notebooks for $12.50. What is the cost per notebook?",
    type: "numeric",
    correctAnswer: 2.5,
    explanation:
      "$12.50 divided by 5 = $2.50 per notebook.",
    hint: "Divide the total cost by the number of notebooks.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "ratio-boss",
    missionId: "ratio-route-lab",
    prompt:
      "Boss Mission: Which deal has the lower unit price?\nA: 6 batteries for $9\nB: 8 batteries for $11.20\nC: 10 batteries for $15",
    type: "multiple-choice",
    choices: ["Deal A", "Deal B", "Deal C"],
    correctAnswer: "Deal B",
    explanation:
      "Deal A is $1.50 each, Deal B is $1.40 each, and Deal C is $1.50 each. Deal B is lowest.",
    hint: "Find the cost for 1 battery in each deal.",
    difficulty: "boss",
    starReward: 50,
  },

  {
    id: "rational-q1",
    missionId: "rational-number-range",
    prompt: "Which number is greatest?",
    type: "multiple-choice",
    choices: ["-3", "-1", "-5", "-8"],
    correctAnswer: "-1",
    explanation:
      "On a number line, -1 is farthest to the right, so it is the greatest.",
    hint: "For negative numbers, closer to zero is greater.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "rational-q2",
    missionId: "rational-number-range",
    prompt: "What is the absolute value of -12?",
    type: "numeric",
    correctAnswer: 12,
    explanation:
      "Absolute value is distance from zero, so the absolute value of -12 is 12.",
    hint: "Distance from zero is never negative.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "rational-q3",
    missionId: "rational-number-range",
    prompt:
      "Order these numbers from least to greatest: -0.5, 1/4, -1.2",
    type: "multiple-choice",
    choices: [
      "-1.2, -0.5, 1/4",
      "-0.5, -1.2, 1/4",
      "1/4, -0.5, -1.2",
      "-1.2, 1/4, -0.5",
    ],
    correctAnswer: "-1.2, -0.5, 1/4",
    explanation:
      "-1.2 is least because it is farthest left. Then comes -0.5, then positive 1/4.",
    hint: "Convert 1/4 to 0.25 or picture the number line.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "rational-q4",
    missionId: "rational-number-range",
    prompt:
      "A diver is at -18 feet and a bird is at 12 feet. How far apart are they vertically?",
    type: "numeric",
    correctAnswer: 30,
    explanation:
      "The distance from -18 to 0 is 18, and from 0 to 12 is 12. Total distance is 30 feet.",
    hint: "Add the distances to zero from each side.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "rational-boss",
    missionId: "rational-number-range",
    prompt:
      "Boss Mission: Which statement is true?",
    type: "multiple-choice",
    choices: [
      "|-9| = -9",
      "-3.5 is greater than -2.5",
      "|-4| is less than 3",
      "-1/2 is greater than -3/4",
    ],
    correctAnswer: "-1/2 is greater than -3/4",
    explanation:
      "-1/2 is -0.5 and -3/4 is -0.75. Since -0.5 is closer to zero, it is greater.",
    hint: "Compare the two negative fractions on a number line.",
    difficulty: "boss",
    starReward: 50,
  },

  {
    id: "integer-q1",
    missionId: "integer-operations-command",
    prompt: "What is -6 + 10?",
    type: "numeric",
    correctAnswer: 4,
    explanation:
      "Starting at -6 and moving 10 units right lands on 4.",
    hint: "Adding a positive number moves right on the number line.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "integer-q2",
    missionId: "integer-operations-command",
    prompt: "What is 7 - 12?",
    type: "numeric",
    correctAnswer: -5,
    explanation:
      "Subtracting 12 from 7 moves 12 units left, landing at -5.",
    hint: "Subtracting a larger number can result in a negative answer.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "integer-q3",
    missionId: "integer-operations-command",
    prompt: "What is -4 x 6?",
    type: "numeric",
    correctAnswer: -24,
    explanation:
      "A negative times a positive is negative, and 4 x 6 = 24.",
    hint: "Different signs make a negative product.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "integer-q4",
    missionId: "integer-operations-command",
    prompt: "What is -36 divided by -9?",
    type: "numeric",
    correctAnswer: 4,
    explanation:
      "A negative divided by a negative is positive, and 36 divided by 9 = 4.",
    hint: "Same signs make a positive quotient.",
    difficulty: "medium",
    starReward: 15,
  },

  {
    id: "integer-boss",
    missionId: "integer-operations-command",
    prompt:
      "Boss Mission: A submarine is at -24 meters. It rises 9 meters, then drops 14 meters. What is its final elevation?",
    type: "numeric",
    correctAnswer: -29,
    explanation:
      "-24 + 9 = -15. Then -15 - 14 = -29 meters.",
    hint: "Rising means add. Dropping means subtract.",
    difficulty: "boss",
    starReward: 50,
  },
];

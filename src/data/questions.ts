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
    starReward: 10,
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
    starReward: 10,
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
    starReward: 10,
  },

  {
    id: "data-q5",
    missionId: "data-observatory",
    prompt:
      "A teacher records the number of minutes students read: 12, 18, 20, 20, 25. What is the mean number of minutes?",
    type: "numeric",
    correctAnswer: 19,
    explanation:
      "Add the values to get 95, then divide by 5 students. 95 divided by 5 = 19.",
    hint: "Mean means total divided by number of values.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "data-q6",
    missionId: "data-observatory",
    prompt:
      "A box plot has a minimum of 3, first quartile of 6, median of 8, third quartile of 13, and maximum of 15. What is the interquartile range?",
    type: "numeric",
    correctAnswer: 7,
    explanation:
      "The interquartile range is Q3 minus Q1. 13 - 6 = 7.",
    hint: "Use Q3 - Q1.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "data-q7",
    missionId: "data-observatory",
    prompt:
      "Two data sets have the same median. Set A has an interquartile range of 5, and Set B has an interquartile range of 12. Which set has more variability in the middle half?",
    type: "multiple-choice",
    choices: ["Set A", "Set B", "They have equal variability"],
    correctAnswer: "Set B",
    explanation:
      "A larger interquartile range means the middle half of the data is more spread out.",
    hint: "Compare the interquartile ranges.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "data-q8",
    missionId: "data-observatory",
    prompt:
      "A histogram shows most scores clustered between 80 and 90, with one score at 42. Which statement is most reasonable?",
    type: "multiple-choice",
    choices: [
      "The score of 42 may be an outlier",
      "The median must be 42",
      "The data have no variability",
      "All scores are below 50",
    ],
    correctAnswer: "The score of 42 may be an outlier",
    explanation:
      "Because 42 is far from the cluster of scores between 80 and 90, it may be an outlier.",
    hint: "Look for the value that is far from the rest.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "data-q9",
    missionId: "data-observatory",
    prompt:
      "A line plot shows these plant heights in inches: 5, 5, 6, 7, 7, 7, 8. What is the mode?",
    type: "numeric",
    correctAnswer: 7,
    explanation:
      "The mode is the value that appears most often. The value 7 appears three times.",
    hint: "Find the value with the most repeats.",
    difficulty: "easy",
    starReward: 10,
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
    starReward: 10,
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
    starReward: 10,
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
    starReward: 10,
  },

  {
    id: "ratio-q5",
    missionId: "ratio-route-lab",
    prompt:
      "A table shows 4 tickets cost $30. At the same rate, how much would 10 tickets cost?",
    type: "numeric",
    correctAnswer: 75,
    explanation:
      "$30 divided by 4 = $7.50 per ticket. 10 tickets cost 10 x $7.50 = $75.",
    hint: "Find the price for 1 ticket first.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "ratio-q6",
    missionId: "ratio-route-lab",
    prompt:
      "Which ordered pair could belong to a proportional relationship with constant of proportionality 3?",
    type: "multiple-choice",
    choices: ["(2, 6)", "(3, 7)", "(4, 10)", "(5, 12)"],
    correctAnswer: "(2, 6)",
    explanation:
      "For a constant of proportionality of 3, y = 3x. When x = 2, y = 6.",
    hint: "Check which pair has y divided by x equal to 3.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "ratio-q7",
    missionId: "ratio-route-lab",
    prompt:
      "A graph of a proportional relationship includes the point (6, 18). What is the constant of proportionality?",
    type: "numeric",
    correctAnswer: 3,
    explanation:
      "The constant of proportionality is y divided by x. 18 divided by 6 = 3.",
    hint: "Use y/x.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "ratio-q8",
    missionId: "ratio-route-lab",
    prompt:
      "A smoothie recipe uses 2 bananas for every 5 strawberries. If there are 15 strawberries, how many bananas are needed?",
    type: "numeric",
    correctAnswer: 6,
    explanation:
      "15 strawberries is 3 groups of 5, so multiply 2 bananas by 3 to get 6 bananas.",
    hint: "Scale both parts of the ratio by the same factor.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "ratio-q9",
    missionId: "ratio-route-lab",
    prompt:
      "Which situation has the greatest unit rate?",
    type: "multiple-choice",
    choices: [
      "96 pages in 4 days",
      "105 pages in 5 days",
      "69 pages in 3 days",
      "120 pages in 6 days",
    ],
    correctAnswer: "96 pages in 4 days",
    explanation:
      "The unit rates are 24, 21, 23, and 20 pages per day. The greatest rate is 24 pages per day.",
    hint: "Divide pages by days for each choice.",
    difficulty: "hard",
    starReward: 10,
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
    starReward: 10,
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
    starReward: 10,
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
    starReward: 10,
  },

  {
    id: "rational-q5",
    missionId: "rational-number-range",
    prompt:
      "Which number is closest to zero?",
    type: "multiple-choice",
    choices: ["-0.8", "0.6", "-1/4", "1.2"],
    correctAnswer: "-1/4",
    explanation:
      "The distance from zero is the absolute value. |-1/4| = 0.25, which is the smallest distance.",
    hint: "Compare absolute values.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "rational-q6",
    missionId: "rational-number-range",
    prompt:
      "A value is 6.5 units from zero on the number line and is less than 0. What is the value?",
    type: "numeric",
    correctAnswer: -6.5,
    explanation:
      "A number 6.5 units from zero can be 6.5 or -6.5. Since it is less than 0, the value is -6.5.",
    hint: "Less than zero means negative.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "rational-q7",
    missionId: "rational-number-range",
    prompt:
      "Which comparison is true?",
    type: "multiple-choice",
    choices: ["-0.25 < -0.5", "3/4 < 0.7", "-1.1 > -1.2", "-2/3 > 0"],
    correctAnswer: "-1.1 > -1.2",
    explanation:
      "For negative decimals, the number closer to zero is greater. -1.1 is to the right of -1.2.",
    hint: "Picture each number on a number line.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "rational-q8",
    missionId: "rational-number-range",
    prompt:
      "What is the distance between -3.5 and 2.5 on a number line?",
    type: "numeric",
    correctAnswer: 6,
    explanation:
      "The distance from -3.5 to 0 is 3.5, and from 0 to 2.5 is 2.5. The total is 6.",
    hint: "Add the distances on both sides of zero.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "rational-q9",
    missionId: "rational-number-range",
    prompt:
      "Which list is ordered from greatest to least?",
    type: "multiple-choice",
    choices: [
      "0.2, -0.1, -0.6, -1",
      "-1, -0.6, -0.1, 0.2",
      "-0.1, 0.2, -0.6, -1",
      "0.2, -1, -0.1, -0.6",
    ],
    correctAnswer: "0.2, -0.1, -0.6, -1",
    explanation:
      "Numbers farther right on the number line are greater. The correct order is 0.2, -0.1, -0.6, -1.",
    hint: "Start with the only positive number.",
    difficulty: "medium",
    starReward: 10,
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
    starReward: 10,
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
    starReward: 10,
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
    starReward: 10,
  },

  {
    id: "integer-q5",
    missionId: "integer-operations-command",
    prompt: "What is -8 - 6?",
    type: "numeric",
    correctAnswer: -14,
    explanation:
      "Starting at -8 and subtracting 6 moves 6 more units left to -14.",
    hint: "Subtracting a positive number moves left.",
    difficulty: "easy",
    starReward: 10,
  },

  {
    id: "integer-q6",
    missionId: "integer-operations-command",
    prompt:
      "A football team loses 7 yards on one play and gains 12 yards on the next play. What is the net change in yards?",
    type: "numeric",
    correctAnswer: 5,
    explanation:
      "The net change is -7 + 12 = 5 yards.",
    hint: "Represent the loss as negative and the gain as positive.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "integer-q7",
    missionId: "integer-operations-command",
    prompt: "What is (-5)(-9)?",
    type: "numeric",
    correctAnswer: 45,
    explanation:
      "A negative times a negative is positive, and 5 x 9 = 45.",
    hint: "Same signs make a positive product.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "integer-q8",
    missionId: "integer-operations-command",
    prompt:
      "A bank account balance changes by -$15 each day for 4 days. What is the total change?",
    type: "numeric",
    correctAnswer: -60,
    explanation:
      "The total change is 4 x -15 = -60 dollars.",
    hint: "Repeated equal changes can be represented with multiplication.",
    difficulty: "medium",
    starReward: 10,
  },

  {
    id: "integer-q9",
    missionId: "integer-operations-command",
    prompt:
      "Which expression has a value of -18?",
    type: "multiple-choice",
    choices: ["-6 x 3", "-6 x -3", "18 divided by -1 divided by -1", "-9 + 9"],
    correctAnswer: "-6 x 3",
    explanation:
      "-6 x 3 = -18. The other expressions equal 18, 18, and 0.",
    hint: "Check the sign of each result.",
    difficulty: "hard",
    starReward: 10,
  },
];

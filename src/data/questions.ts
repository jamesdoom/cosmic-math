import type { Difficulty, Question, QuestionType } from "../types";

type QuestionSeed = {
  prompt: string;
  type: QuestionType;
  choices?: string[];
  answer: string | number;
  explanation: string;
  hint: string;
  difficulty?: Difficulty;
};

function createQuestionSet(
  missionId: string,
  prefix: string,
  seeds: QuestionSeed[],
): Question[] {
  return seeds.map((seed, index) => ({
    id: `${prefix}-${index === seeds.length - 1 ? "boss" : `q${index + 1}`}`,
    missionId,
    prompt: seed.prompt,
    type: seed.type,
    choices: seed.choices,
    correctAnswer: seed.answer,
    explanation: seed.explanation,
    hint: seed.hint,
    difficulty: seed.difficulty ?? (index < 3 ? "easy" : "medium"),
    starReward: 10,
  }));
}

export const questions: Question[] = [
  ...createQuestionSet("adding-rational-numbers", "rational-addition", [
    {
      prompt: "Find the sum: -7 + 12.", type: "numeric", answer: 5,
      explanation: "The numbers have different signs. Subtract 7 from 12 and keep the positive sign to get 5.", hint: "Compare the absolute values of 7 and 12.",
    },
    {
      prompt: "Find the sum: 3.6 + (-5.1).", type: "numeric", answer: -1.5,
      explanation: "Subtract 3.6 from 5.1 and keep the sign of -5.1, giving -1.5.", hint: "Adding a negative is a move left on the number line.",
    },
    {
      prompt: "What is -2/3 + 5/6?", type: "multiple-choice", choices: ["1/6", "-1/6", "7/9", "1/2"], answer: "1/6",
      explanation: "Rewrite -2/3 as -4/6. Then -4/6 + 5/6 = 1/6.", hint: "Use a common denominator of 6.",
    },
    {
      prompt: "What is -1 1/4 + (-2 1/2)?", type: "multiple-choice", choices: ["-3 3/4", "-1 1/4", "1 1/4", "3 3/4"], answer: "-3 3/4",
      explanation: "Both numbers are negative, so add their absolute values: 1 1/4 + 2 1/2 = 3 3/4, then keep the negative sign.", hint: "When both addends are negative, the sum is negative.",
    },
    {
      prompt: "What is 7/8 + (-3/4)?", type: "multiple-choice", choices: ["1/8", "1/4", "5/8", "-1/8"], answer: "1/8",
      explanation: "Rewrite -3/4 as -6/8. Then 7/8 + (-6/8) = 1/8.", hint: "Use eighths for both fractions.",
    },
    {
      prompt: "Find the sum: -4.25 + 1.8.", type: "numeric", answer: -2.45,
      explanation: "The absolute-value difference is 4.25 - 1.8 = 2.45. The larger absolute value is negative.", hint: "Line up the decimal points before subtracting.",
    },
    {
      prompt: "Which pair has a sum of 0?", type: "multiple-choice", choices: ["-2.7 and 2.7", "-2.7 and -2.7", "2.7 and 0", "-2.7 and 1"], answer: "-2.7 and 2.7",
      explanation: "A number and its opposite have equal absolute values and a sum of 0.", hint: "Look for additive inverses.",
    },
    {
      prompt: "Start at -2.5 on a number line and move 6.75 units right. Where do you land?", type: "numeric", answer: 4.25,
      explanation: "Moving right means add: -2.5 + 6.75 = 4.25.", hint: "Translate a move right into addition.", difficulty: "hard",
    },
    {
      prompt: "Evaluate (-1.2) + 0.45 + 2.05.", type: "numeric", answer: 1.3,
      explanation: "First, 0.45 + 2.05 = 2.5. Then 2.5 + (-1.2) = 1.3.", hint: "Combine the positive addends first.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: Evaluate -3.5 + 2 1/4 + (-0.75).", type: "numeric", answer: -2,
      explanation: "Convert 2 1/4 to 2.25. Then -3.5 + 2.25 - 0.75 = -2.", hint: "Rewrite the mixed number as a decimal.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("subtracting-rational-numbers", "rational-subtraction", [
    {
      prompt: "Find the difference: 8 - 13.", type: "numeric", answer: -5,
      explanation: "Subtracting 13 from 8 moves 13 units left, ending at -5.", hint: "Rewrite subtraction as adding the opposite.",
    },
    {
      prompt: "Find the difference: -4.5 - 2.7.", type: "numeric", answer: -7.2,
      explanation: "Rewrite as -4.5 + (-2.7). Adding the absolute values gives -7.2.", hint: "Subtracting a positive moves farther left.",
    },
    {
      prompt: "What is 3/4 - (-1/2)?", type: "multiple-choice", choices: ["1 1/4", "1/4", "-1/4", "-1 1/4"], answer: "1 1/4",
      explanation: "Subtracting a negative means adding: 3/4 + 1/2 = 3/4 + 2/4 = 5/4, or 1 1/4.", hint: "Change subtraction of a negative to addition.",
    },
    {
      prompt: "What is -2/3 - 5/6?", type: "multiple-choice", choices: ["-1 1/2", "-1/6", "1/6", "1 1/2"], answer: "-1 1/2",
      explanation: "Rewrite -2/3 as -4/6. Then -4/6 - 5/6 = -9/6 = -3/2 = -1 1/2.", hint: "Use a common denominator before subtracting.",
    },
    {
      prompt: "Evaluate 6 - (-3.5).", type: "numeric", answer: 9.5,
      explanation: "Subtracting -3.5 is the same as adding 3.5, so 6 + 3.5 = 9.5.", hint: "Two consecutive negative signs become addition.",
    },
    {
      prompt: "What is the distance between -3.2 and 4.6 on a number line?", type: "numeric", answer: 7.8,
      explanation: "Distance is the absolute value of the difference: |4.6 - (-3.2)| = |7.8| = 7.8.", hint: "Distance is always nonnegative.",
    },
    {
      prompt: "Find the difference: 5.25 - 7.9.", type: "numeric", answer: -2.65,
      explanation: "Since 7.9 is greater than 5.25, the result is negative. The absolute-value difference is 2.65.", hint: "Write 7.9 as 7.90 before subtracting.",
    },
    {
      prompt: "Evaluate -1 1/4 - (-2 1/2).", type: "multiple-choice", choices: ["1 1/4", "-1 1/4", "-3 3/4", "3 3/4"], answer: "1 1/4",
      explanation: "Rewrite as -1 1/4 + 2 1/2. The result is 1 1/4.", hint: "Add the opposite of the second number.", difficulty: "hard",
    },
    {
      prompt: "Which expression is equivalent to -4 - 7?", type: "multiple-choice", choices: ["-4 + (-7)", "-4 + 7", "4 + (-7)", "4 + 7"], answer: "-4 + (-7)",
      explanation: "Subtracting 7 is equivalent to adding its opposite, -7.", hint: "Use a - b = a + (-b).", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: Evaluate 6.5 - (-2.25) - 4.75.", type: "numeric", answer: 4,
      explanation: "First, 6.5 - (-2.25) = 8.75. Then 8.75 - 4.75 = 4.", hint: "Work from left to right after changing subtraction of a negative to addition.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("multiplying-rational-numbers", "rational-multiplication", [
    {
      prompt: "Find the product: (-6)(4).", type: "numeric", answer: -24,
      explanation: "A negative times a positive is negative, and 6 x 4 = 24.", hint: "Determine the sign before multiplying the absolute values.",
    },
    {
      prompt: "Find the product: (-7)(-3).", type: "numeric", answer: 21,
      explanation: "A negative times a negative is positive, and 7 x 3 = 21.", hint: "Two negative factors produce a positive product.",
    },
    {
      prompt: "Find the product: -2.5 x 0.8.", type: "numeric", answer: -2,
      explanation: "The product is negative. Multiply 2.5 x 0.8 to get 2, so the answer is -2.", hint: "Ignore the signs first, then apply the sign rule.",
    },
    {
      prompt: "What is (-3/4)(8/9)?", type: "multiple-choice", choices: ["-2/3", "2/3", "-3/2", "3/4"], answer: "-2/3",
      explanation: "Multiply and simplify: (-3 x 8)/(4 x 9) = -24/36 = -2/3.", hint: "Cross-cancel common factors before multiplying.",
    },
    {
      prompt: "Which product is negative?", type: "multiple-choice", choices: ["(-4)(5)", "(-4)(-5)", "(4)(5)", "0(-5)"], answer: "(-4)(5)",
      explanation: "A product with exactly one negative factor is negative.", hint: "Count the negative factors.",
    },
    {
      prompt: "Evaluate 1.2 x (-0.5).", type: "numeric", answer: -0.6,
      explanation: "Half of 1.2 is 0.6, and one factor is negative, so the product is -0.6.", hint: "Multiplying by 0.5 finds one half.",
    },
    {
      prompt: "What is (-2/3)(-9/10)?", type: "multiple-choice", choices: ["3/5", "-3/5", "6/5", "-6/5"], answer: "3/5",
      explanation: "The product is positive. Cross-cancel to get (1 x 3)/(1 x 5) = 3/5.", hint: "Two negative factors give a positive result.",
    },
    {
      prompt: "Evaluate 0 x (-13.7).", type: "numeric", answer: 0,
      explanation: "Any rational number multiplied by 0 equals 0.", hint: "Use the zero property of multiplication.", difficulty: "hard",
    },
    {
      prompt: "A rectangle is 2.5 meters long and 1.2 meters wide. What is its area in square meters?", type: "numeric", answer: 3,
      explanation: "Area = length x width, so 2.5 x 1.2 = 3 square meters.", hint: "Multiply the two side lengths.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: Evaluate (-1.5)(-2 2/3).", type: "numeric", answer: 4,
      explanation: "Convert -2 2/3 to -8/3 and -1.5 to -3/2. Then (-3/2)(-8/3) = 4.", hint: "Convert both factors to improper fractions.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("dividing-rational-numbers", "rational-division", [
    {
      prompt: "Find the quotient: -24 / 6.", type: "numeric", answer: -4,
      explanation: "A negative divided by a positive is negative, and 24 / 6 = 4.", hint: "Determine the sign before dividing.",
    },
    {
      prompt: "Find the quotient: -30 / (-5).", type: "numeric", answer: 6,
      explanation: "A negative divided by a negative is positive, and 30 / 5 = 6.", hint: "Matching signs produce a positive quotient.",
    },
    {
      prompt: "Evaluate 3.6 / (-0.9).", type: "numeric", answer: -4,
      explanation: "The quotient is negative, and 3.6 / 0.9 = 4.", hint: "Ask how many groups of 0.9 fit in 3.6.",
    },
    {
      prompt: "What is (-5/6) / (1/3)?", type: "multiple-choice", choices: ["-2 1/2", "-5/18", "2 1/2", "-5/3"], answer: "-2 1/2",
      explanation: "Multiply by the reciprocal: (-5/6)(3/1) = -15/6 = -5/2 = -2 1/2.", hint: "Keep the first fraction, change division to multiplication, and flip the second.",
    },
    {
      prompt: "Dividing by -3/4 is equivalent to multiplying by which number?", type: "multiple-choice", choices: ["-4/3", "4/3", "-3/4", "3/4"], answer: "-4/3",
      explanation: "The reciprocal of -3/4 is -4/3.", hint: "Interchange the numerator and denominator while keeping the sign.",
    },
    {
      prompt: "What is (7/8) / (-7/16)?", type: "numeric", answer: -2,
      explanation: "Multiply by the reciprocal: (7/8)(-16/7) = -16/8 = -2.", hint: "Cancel the 7s before multiplying.",
    },
    {
      prompt: "Evaluate 0 / (-12).", type: "numeric", answer: 0,
      explanation: "Zero divided by any nonzero number equals 0.", hint: "The divisor is nonzero, so the quotient is defined.",
    },
    {
      prompt: "Evaluate -4.5 / 1.5.", type: "numeric", answer: -3,
      explanation: "A negative divided by a positive is negative, and 4.5 / 1.5 = 3.", hint: "Think of 4.5 as three groups of 1.5.", difficulty: "hard",
    },
    {
      prompt: "What is (-2/5) / (-6/5)?", type: "multiple-choice", choices: ["1/3", "-1/3", "3", "-3"], answer: "1/3",
      explanation: "Multiply by the reciprocal: (-2/5)(-5/6) = 10/30 = 1/3.", hint: "The signs match, so the quotient is positive.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: Evaluate 2 1/4 / (-3/8).", type: "numeric", answer: -6,
      explanation: "Convert 2 1/4 to 9/4. Then (9/4)(-8/3) = -72/12 = -6.", hint: "Convert the mixed number, then multiply by the reciprocal.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("rational-problems-part-one", "rational-context-one", [
    {
      prompt: "An account balance is -$12.50. A $20 deposit is made. What is the new balance in dollars?", type: "numeric", answer: 7.5,
      explanation: "Add the deposit to the balance: -12.50 + 20 = 7.50.", hint: "A deposit is a positive change.",
    },
    {
      prompt: "The temperature is -3.5 degrees and rises 8.25 degrees. What is the new temperature?", type: "numeric", answer: 4.75,
      explanation: "A rise means add: -3.5 + 8.25 = 4.75 degrees.", hint: "Combine a negative starting value with a positive change.",
    },
    {
      prompt: "An elevator moves from floor -2 to floor 5. How many floors does it rise?", type: "numeric", answer: 7,
      explanation: "The change is 5 - (-2) = 7 floors.", hint: "Final position minus starting position gives the change.",
    },
    {
      prompt: "A submarine is at -18.6 meters and descends another 7.4 meters. What is its new position?", type: "numeric", answer: -26,
      explanation: "Descending is a negative change: -18.6 + (-7.4) = -26 meters.", hint: "Both the starting position and change are below zero.",
    },
    {
      prompt: "A trail is 6.75 miles long. A hiker has 2.4 miles remaining. How many miles has the hiker completed?", type: "numeric", answer: 4.35,
      explanation: "Subtract the remaining distance: 6.75 - 2.4 = 4.35 miles.", hint: "Completed distance plus remaining distance equals the total.",
    },
    {
      prompt: "A football team gains 8 yards and then loses 13 yards. What is the net change in yards?", type: "numeric", answer: -5,
      explanation: "A gain is positive and a loss is negative: 8 + (-13) = -5 yards.", hint: "Represent the loss with a negative number.",
    },
    {
      prompt: "A diver moves from -4.2 meters to 3.1 meters relative to sea level. What distance does the diver travel vertically?", type: "numeric", answer: 7.3,
      explanation: "The distance is |3.1 - (-4.2)| = 7.3 meters.", hint: "Find the absolute value of final position minus starting position.",
    },
    {
      prompt: "A container holds 3.5 cups of juice. After 1.75 cups are used, how many cups remain?", type: "numeric", answer: 1.75,
      explanation: "Subtract the amount used: 3.5 - 1.75 = 1.75 cups.", hint: "Line up decimal points.", difficulty: "hard",
    },
    {
      prompt: "A stock changes by +2.4 points one day and -3.15 points the next. What is the total change?", type: "numeric", answer: -0.75,
      explanation: "Add the changes: 2.4 + (-3.15) = -0.75 point.", hint: "A decrease is represented by a negative number.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: An account starts at $45.75. A $62.50 payment is made, followed by an $18.25 deposit. What is the final balance in dollars?", type: "numeric", answer: 1.5,
      explanation: "Compute 45.75 - 62.50 + 18.25 = -16.75 + 18.25 = 1.50.", hint: "Apply the payment as a negative change and the deposit as a positive change.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("rational-problems-part-two", "rational-context-two", [
    {
      prompt: "Four tickets cost $12.75 each. What is the total cost in dollars?", type: "numeric", answer: 51,
      explanation: "Multiply the number of tickets by the cost per ticket: 4 x 12.75 = 51.", hint: "Equal groups suggest multiplication.",
    },
    {
      prompt: "The temperature drops 1.5 degrees each hour for 6 hours. What is the total temperature change?", type: "numeric", answer: -9,
      explanation: "A drop is negative, so 6 x (-1.5) = -9 degrees.", hint: "Multiply the hourly change by the number of hours.",
    },
    {
      prompt: "A recipe uses 3/4 cup of oats per batch. How many cups are needed for 6 batches?", type: "numeric", answer: 4.5,
      explanation: "Multiply 6 x 3/4 = 18/4 = 4.5 cups.", hint: "Multiply the amount per batch by the number of batches.",
    },
    {
      prompt: "A $24 debt is shared equally among 3 people. Which number represents each person's share of the debt?", type: "numeric", answer: -8,
      explanation: "Represent the debt as -24, then divide: -24 / 3 = -8 dollars per person.", hint: "Debt is represented by a negative value.",
    },
    {
      prompt: "A cyclist travels 9.6 miles in 1.5 hours at a constant rate. What is the rate in miles per hour?", type: "numeric", answer: 6.4,
      explanation: "Rate = distance / time, so 9.6 / 1.5 = 6.4 miles per hour.", hint: "Divide miles by hours.",
    },
    {
      prompt: "A 5/6-yard ribbon is cut into 5 equal pieces. How long is each piece?", type: "multiple-choice", choices: ["1/6 yard", "1/5 yard", "5/6 yard", "1/30 yard"], answer: "1/6 yard",
      explanation: "Divide by 5: (5/6) / 5 = (5/6)(1/5) = 1/6 yard.", hint: "Dividing by 5 is multiplying by 1/5.",
    },
    {
      prompt: "An elevator changes elevation by -2.25 meters per second for 4 seconds. What is the total change?", type: "numeric", answer: -9,
      explanation: "Multiply the rate by time: -2.25 x 4 = -9 meters.", hint: "A downward change is negative.",
    },
    {
      prompt: "Fruit costs $2.40 per pound. What is the cost of 3.5 pounds in dollars?", type: "numeric", answer: 8.4,
      explanation: "Multiply price per pound by pounds: 2.40 x 3.5 = 8.40.", hint: "Use cost = rate x quantity.", difficulty: "hard",
    },
    {
      prompt: "A water level changes -7.5 inches over 2.5 hours. What is the average change per hour?", type: "numeric", answer: -3,
      explanation: "Divide total change by time: -7.5 / 2.5 = -3 inches per hour.", hint: "A decrease produces a negative rate.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A container holds 2 1/4 gallons. How many 3/8-gallon bottles can be filled completely?", type: "numeric", answer: 6,
      explanation: "Convert 2 1/4 to 9/4, then divide: (9/4) / (3/8) = (9/4)(8/3) = 6.", hint: "Divide the total volume by the volume of one bottle.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("rational-problems-part-three", "rational-context-three", [
    {
      prompt: "A student has $30 and buys 4 notebooks costing $6.25 each. How much money remains?", type: "numeric", answer: 5,
      explanation: "The notebooks cost 4 x 6.25 = 25 dollars. Then 30 - 25 = 5 dollars.", hint: "Find the total purchase cost before subtracting.",
    },
    {
      prompt: "The temperature starts at -2 degrees, rises 1.5 degrees per hour for 3 hours, then drops 4 degrees. What is the final temperature?", type: "numeric", answer: -1.5,
      explanation: "Compute -2 + 3(1.5) - 4 = -2 + 4.5 - 4 = -1.5 degrees.", hint: "Multiply the hourly rise before combining the changes.",
    },
    {
      prompt: "A 12.5-mile hike includes 4.75 miles in the morning and 3.2 miles in the afternoon. How many miles remain?", type: "numeric", answer: 4.55,
      explanation: "Add completed miles: 4.75 + 3.2 = 7.95. Then 12.5 - 7.95 = 4.55 miles.", hint: "Add the two completed distances first.",
    },
    {
      prompt: "Three batches of soup make 2.5 cups each. After serving, 1.25 cups remain. How many cups were served?", type: "numeric", answer: 6.25,
      explanation: "The batches make 3 x 2.5 = 7.5 cups. Subtract the amount remaining: 7.5 - 1.25 = 6.25 cups served.", hint: "Multiply first, then subtract what remains.",
    },
    {
      prompt: "A submarine starts at -12.5 meters, descends 2.75 meters, then rises 6.4 meters. What is its final position?", type: "numeric", answer: -8.85,
      explanation: "Compute -12.5 - 2.75 + 6.4 = -15.25 + 6.4 = -8.85 meters.", hint: "A descent is negative and a rise is positive.",
    },
    {
      prompt: "Four friends split a $58 meal and a $10 tip equally. How much does each person pay?", type: "numeric", answer: 17,
      explanation: "Add the meal and tip: 58 + 10 = 68. Then 68 / 4 = 17 dollars.", hint: "Find the full bill before dividing.",
    },
    {
      prompt: "A store has 48 items, sells 3/8 of them, and receives 12 new items. How many items does it have now?", type: "numeric", answer: 42,
      explanation: "The store sells (3/8)(48) = 18 items, leaving 30. Then 30 + 12 = 42.", hint: "Find how many items were sold first.",
    },
    {
      prompt: "A runner completes 5 laps of 0.4 mile each, then runs another 1.25 miles. How far does the runner travel?", type: "numeric", answer: 3.25,
      explanation: "The laps total 5 x 0.4 = 2 miles. Then 2 + 1.25 = 3.25 miles.", hint: "Multiply the lap distance before adding the extra distance.", difficulty: "hard",
    },
    {
      prompt: "An account is at -$15. A fee of $10 is charged, then three deposits of $12.50 are made. What is the final balance?", type: "numeric", answer: 12.5,
      explanation: "Compute -15 - 10 + 3(12.50) = -25 + 37.50 = 12.50 dollars.", hint: "The fee is negative; the deposits are positive.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A tank holds 18.5 liters. It drains 2.25 liters per minute for 4 minutes, then 3.5 liters are added. How much water is in the tank?", type: "numeric", answer: 13,
      explanation: "The tank drains 2.25 x 4 = 9 liters. Then 18.5 - 9 + 3.5 = 13 liters.", hint: "Calculate the total drained before combining all changes.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("rational-problems-part-four", "rational-context-four", [
    {
      prompt: "Evaluate 3.5 + 2(-1.25).", type: "numeric", answer: 1,
      explanation: "Multiply first: 2(-1.25) = -2.5. Then 3.5 + (-2.5) = 1.", hint: "Use the order of operations.",
    },
    {
      prompt: "Evaluate |-4.5| - 2.75.", type: "numeric", answer: 1.75,
      explanation: "The absolute value of -4.5 is 4.5. Then 4.5 - 2.75 = 1.75.", hint: "Evaluate the absolute value first.",
    },
    {
      prompt: "Evaluate (-3)^2 - 4.5.", type: "numeric", answer: 4.5,
      explanation: "The exponent applies first: (-3)^2 = 9. Then 9 - 4.5 = 4.5.", hint: "The parentheses make the negative sign part of the base.",
    },
    {
      prompt: "Evaluate 6 - [2.5 + (-1.75)].", type: "numeric", answer: 5.25,
      explanation: "Evaluate the grouping symbols first: 2.5 + (-1.75) = 0.75. Then 6 - 0.75 = 5.25.", hint: "Simplify inside the brackets first.",
    },
    {
      prompt: "What is 3/4 + 2(-1/8)?", type: "multiple-choice", choices: ["1/2", "5/8", "1", "-1/2"], answer: "1/2",
      explanation: "Multiply first: 2(-1/8) = -2/8 = -1/4. Then 3/4 - 1/4 = 1/2.", hint: "Complete multiplication before addition.",
    },
    {
      prompt: "Evaluate (2.4 - 5.6) / (-0.8).", type: "numeric", answer: 4,
      explanation: "Inside the parentheses, 2.4 - 5.6 = -3.2. Then -3.2 / -0.8 = 4.", hint: "Evaluate the grouped subtraction first.",
    },
    {
      prompt: "Evaluate |-3/2| + (-1/2)^2.", type: "multiple-choice", choices: ["1 3/4", "1 1/4", "-1 1/4", "2"], answer: "1 3/4",
      explanation: "|-3/2| = 3/2 and (-1/2)^2 = 1/4. Their sum is 6/4 + 1/4 = 7/4 = 1 3/4.", hint: "Evaluate the absolute value and exponent before adding.",
    },
    {
      prompt: "In the expression 8 - 3(1.5 + 0.5), which operation should be completed first?", type: "multiple-choice", choices: ["Add 1.5 and 0.5", "Subtract 3 from 8", "Multiply 3 by 1.5", "Divide 8 by 3"], answer: "Add 1.5 and 0.5",
      explanation: "Operations inside grouping symbols are completed before multiplication or subtraction.", hint: "Look for parentheses.", difficulty: "hard",
    },
    {
      prompt: "A shopper has $25, buys 3 items at $4.50 each, and receives a $2.25 credit. How much money remains?", type: "numeric", answer: 13.75,
      explanation: "The expression is 25 - 3(4.50) + 2.25. Compute 25 - 13.50 + 2.25 = 13.75.", hint: "Multiply the item price by 3 before subtracting.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: Evaluate [(-2.5)^2 - |-1.75|] / 1.5.", type: "numeric", answer: 3,
      explanation: "Compute (-2.5)^2 = 6.25 and |-1.75| = 1.75. Then (6.25 - 1.75) / 1.5 = 4.5 / 1.5 = 3.", hint: "Evaluate the exponent and absolute value before subtracting and dividing.", difficulty: "boss",
    },
  ]),
];

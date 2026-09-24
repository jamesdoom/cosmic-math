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
  ...createQuestionSet("exploring-sample-space", "sample-space-explore", [
    {
      prompt: "A fair coin is flipped once. What is the sample space?",
      type: "multiple-choice", choices: ["{heads, tails}", "{heads}", "{1, 2}", "{heads, tails, edge}"], answer: "{heads, tails}",
      explanation: "A single coin flip has two possible outcomes: heads and tails.", hint: "List every result that can occur.",
    },
    {
      prompt: "A number cube labeled 1 through 6 is rolled. How many outcomes are in the sample space?",
      type: "numeric", answer: 6, explanation: "The sample space is {1, 2, 3, 4, 5, 6}, so it has 6 outcomes.", hint: "Count the labels on the cube.",
    },
    {
      prompt: "A spinner has equal sections labeled red, blue, green, and yellow. Which set is the sample space?",
      type: "multiple-choice", choices: ["{red, blue}", "{red, blue, green, yellow}", "{1, 2, 3, 4}", "{green, yellow}"], answer: "{red, blue, green, yellow}",
      explanation: "The sample space must include all four colors the spinner can land on.", hint: "Include every possible color.",
    },
    {
      prompt: "A bag contains tiles marked A, B, C, and D. One tile is selected. Which event means selecting a vowel?",
      type: "multiple-choice", choices: ["{A}", "{B, C, D}", "{A, B}", "{A, E}"], answer: "{A}",
      explanation: "A is the only vowel among the available tiles.", hint: "An event contains only outcomes that meet its condition.",
    },
    {
      prompt: "A number cube is rolled. Which outcomes make up the event 'roll a number greater than 4'?",
      type: "multiple-choice", choices: ["{4, 5, 6}", "{5, 6}", "{1, 2, 3, 4}", "{6}"], answer: "{5, 6}",
      explanation: "The numbers greater than 4 on the cube are 5 and 6.", hint: "Do not include 4 because the event says greater than 4.",
    },
    {
      prompt: "A card is chosen from cards numbered 2, 4, 6, 8, and 10. How many outcomes are in the event 'choose a multiple of 4'?",
      type: "numeric", answer: 2, explanation: "The multiples of 4 are 4 and 8, giving 2 favorable outcomes.", hint: "Find the listed numbers divisible by 4.",
    },
    {
      prompt: "Which experiment has exactly three possible outcomes?",
      type: "multiple-choice", choices: ["Flip a coin", "Roll a standard number cube", "Choose one of three labeled doors", "Choose a day of the week"], answer: "Choose one of three labeled doors",
      explanation: "The three labeled doors create exactly three possible outcomes.", hint: "Count the distinct results for each experiment.",
    },
    {
      prompt: "The sample space for a spinner is {1, 2, 3, 4, 5}. Which event is impossible?",
      type: "multiple-choice", choices: ["Spin an odd number", "Spin a number less than 3", "Spin a 6", "Spin a 5"], answer: "Spin a 6",
      explanation: "The number 6 is not in the spinner's sample space.", hint: "An impossible event has no outcomes in the sample space.",
    },
    {
      prompt: "A marble can be red, blue, or white. Which statement correctly describes an outcome?",
      type: "multiple-choice", choices: ["The marble is blue", "The set {red, blue, white}", "Selecting a marble many times", "The number of marbles in the bag"], answer: "The marble is blue",
      explanation: "An outcome is one specific possible result of an experiment.", hint: "Look for one result, not the entire sample space.",
    },
    {
      prompt: "Boss Mission: A spinner is labeled 1 through 8. How many outcomes are in the event 'land on a prime number'?",
      type: "numeric", answer: 4, explanation: "The prime numbers from 1 through 8 are 2, 3, 5, and 7.", hint: "Remember that 1 is not prime.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("determining-sample-space", "sample-space-determine", [
    {
      prompt: "A coin is flipped and a number cube is rolled. How many total outcomes are possible?",
      type: "numeric", answer: 12, explanation: "There are 2 coin outcomes and 6 cube outcomes, so 2 x 6 = 12.", hint: "Multiply the number of choices at each stage.",
    },
    {
      prompt: "Two coins are flipped. Which is the complete sample space?",
      type: "multiple-choice", choices: ["{HH, HT, TH, TT}", "{HH, TT}", "{H, T}", "{HT, TH}"], answer: "{HH, HT, TH, TT}",
      explanation: "The order of the two flips gives four distinct outcomes.", hint: "List heads or tails for both flips.",
    },
    {
      prompt: "A student chooses one shirt from 3 shirts and one pair of pants from 2 pairs. How many outfits are possible?",
      type: "numeric", answer: 6, explanation: "Each of 3 shirts can be paired with either of 2 pairs of pants: 3 x 2 = 6.", hint: "Use the fundamental counting principle.",
    },
    {
      prompt: "A spinner has sections A and B, and a coin is flipped. Which outcome belongs in the sample space?",
      type: "multiple-choice", choices: ["A-heads", "C-heads", "A-3", "tails-tails"], answer: "A-heads",
      explanation: "A is a spinner result and heads is a coin result, so A-heads is possible.", hint: "Combine one valid result from each part.",
    },
    {
      prompt: "A restaurant offers 2 soups, 3 sandwiches, and 2 drinks. How many meals with one of each are possible?",
      type: "numeric", answer: 12, explanation: "Multiply the choices: 2 x 3 x 2 = 12 meals.", hint: "Multiply the number of options in all three categories.",
    },
    {
      prompt: "Three coins are flipped. How many outcomes are in the sample space?",
      type: "numeric", answer: 8, explanation: "Each flip has 2 outcomes, so 2 x 2 x 2 = 8.", hint: "There are two choices at each of three stages.",
    },
    {
      prompt: "A two-digit code uses 1, 2, or 3 for each digit, and digits may repeat. How many codes are possible?",
      type: "numeric", answer: 9, explanation: "There are 3 choices for each digit, so 3 x 3 = 9 codes.", hint: "Repetition means all three choices remain available.",
    },
    {
      prompt: "A tree diagram has 4 branches at the first stage and 3 branches from each of those. How many endpoints will it have?",
      type: "numeric", answer: 12, explanation: "The tree has 4 x 3 = 12 complete paths, or endpoints.", hint: "Each first branch connects to three outcomes.",
    },
    {
      prompt: "Two number cubes are rolled. How many ordered outcomes have a sum of 4?",
      type: "numeric", answer: 3, explanation: "The ordered outcomes are (1,3), (2,2), and (3,1).", hint: "Order matters because there are two separate cubes.",
    },
    {
      prompt: "Boss Mission: A locker code has one letter from {A, B, C}, followed by two different digits from {1, 2, 3, 4}. How many codes are possible?",
      type: "numeric", answer: 36, explanation: "There are 3 letter choices, 4 first-digit choices, and 3 remaining second-digit choices: 3 x 4 x 3 = 36.", hint: "The second digit cannot repeat the first.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("equivalent-number-forms", "equivalent-forms", [
    {
      prompt: "Write 3/4 as a decimal.", type: "numeric", answer: 0.75,
      explanation: "Divide 3 by 4 to get 0.75.", hint: "A fraction bar means division.",
    },
    {
      prompt: "Which percent is equivalent to 0.35?", type: "multiple-choice", choices: ["3.5%", "35%", "350%", "0.35%"], answer: "35%",
      explanation: "Multiply 0.35 by 100 to get 35%.", hint: "Move the decimal point two places right.",
    },
    {
      prompt: "Which fraction is equivalent to 60% in simplest form?", type: "multiple-choice", choices: ["3/5", "6/5", "3/10", "2/3"], answer: "3/5",
      explanation: "60% = 60/100, which simplifies to 3/5.", hint: "Write the percent over 100 and simplify.",
    },
    {
      prompt: "Write 1 3/5 as a decimal.", type: "numeric", answer: 1.6,
      explanation: "3/5 = 0.6, so 1 3/5 = 1.6.", hint: "Convert the fractional part, then add the whole number.",
    },
    {
      prompt: "Which set contains three equivalent numbers?", type: "multiple-choice", choices: ["1/5, 0.2, 20%", "1/4, 0.4, 25%", "3/5, 0.3, 60%", "4/5, 0.8, 8%"], answer: "1/5, 0.2, 20%",
      explanation: "Dividing 1 by 5 gives 0.2, and 0.2 equals 20%.", hint: "Convert each value to a decimal.",
    },
    {
      prompt: "Write 0.125 as a fraction in simplest form.", type: "multiple-choice", choices: ["1/8", "1/4", "1/5", "125/10"], answer: "1/8",
      explanation: "0.125 = 125/1000, which simplifies to 1/8.", hint: "Write 125 over 1000 and simplify.",
    },
    {
      prompt: "A probability is 7/20. What is this probability as a percent?", type: "numeric", answer: 35,
      explanation: "7/20 = 0.35 = 35%.", hint: "Make an equivalent fraction with denominator 100.",
    },
    {
      prompt: "Which decimal is equivalent to 135%?", type: "numeric", answer: 1.35,
      explanation: "Divide 135 by 100 to convert the percent to 1.35.", hint: "Move the decimal point two places left.",
    },
    {
      prompt: "Order 1/2, 45%, and 0.6 from least to greatest.", type: "multiple-choice", choices: ["45%, 1/2, 0.6", "1/2, 45%, 0.6", "0.6, 1/2, 45%", "45%, 0.6, 1/2"], answer: "45%, 1/2, 0.6",
      explanation: "The values as decimals are 0.45, 0.50, and 0.60.", hint: "Rewrite all three as decimals.",
    },
    {
      prompt: "Boss Mission: In 32 trials, an event occurs 14 times. Express 14/32 as a decimal rounded to the nearest thousandth.", type: "numeric", answer: 0.438,
      explanation: "14 divided by 32 is 0.4375, which rounds to 0.438.", hint: "The fourth decimal digit tells you whether to round up.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("repeating-decimals-fractions", "repeating-decimals", [
    {
      prompt: "Which fraction is equivalent to 0.333...?", type: "multiple-choice", choices: ["1/3", "3/10", "3/11", "1/30"], answer: "1/3",
      explanation: "The repeating decimal 0.333... is equal to 1/3.", hint: "Think of one whole divided into three equal parts.",
    },
    {
      prompt: "Write 2/9 as a repeating decimal.", type: "multiple-choice", choices: ["0.222...", "0.202020...", "0.29", "0.0222..."], answer: "0.222...",
      explanation: "Dividing 2 by 9 gives a decimal with 2 repeating forever.", hint: "Divide the numerator by the denominator.",
    },
    {
      prompt: "Which fraction equals 0.666...?", type: "multiple-choice", choices: ["2/3", "6/10", "6/11", "1/6"], answer: "2/3",
      explanation: "0.666... is twice 0.333..., so it equals 2/3.", hint: "Use the familiar repeating decimal for thirds.",
    },
    {
      prompt: "Which decimal terminates instead of repeating forever?", type: "multiple-choice", choices: ["3/8", "2/3", "5/6", "4/9"], answer: "3/8",
      explanation: "3/8 = 0.375, which terminates. The other fractions produce repeating decimals.", hint: "A simplified denominator with only factors 2 and 5 gives a terminating decimal.",
    },
    {
      prompt: "What fraction in simplest form equals 0.121212...?", type: "multiple-choice", choices: ["4/33", "12/100", "12/99", "2/11"], answer: "4/33",
      explanation: "0.121212... = 12/99, and 12/99 simplifies to 4/33.", hint: "A two-digit repeating block can be written over 99.",
    },
    {
      prompt: "Write 7/11 as a repeating decimal.", type: "multiple-choice", choices: ["0.636363...", "0.777...", "0.61111...", "0.7"], answer: "0.636363...",
      explanation: "Long division gives the repeating block 63, so 7/11 = 0.636363....", hint: "Divide 7 by 11 and look for the repeating block.",
    },
    {
      prompt: "Which fraction is equivalent to 0.090909...?", type: "multiple-choice", choices: ["1/11", "9/10", "9/100", "1/9"], answer: "1/11",
      explanation: "1 divided by 11 is 0.090909..., with 09 repeating.", hint: "The repeating block 09 can be written as 9/99.",
    },
    {
      prompt: "What is 1.444... as a mixed number?", type: "multiple-choice", choices: ["1 4/9", "1 4/10", "1 1/4", "1 4/11"], answer: "1 4/9",
      explanation: "The repeating part 0.444... equals 4/9, so the number is 1 4/9.", hint: "Separate the whole number from the repeating decimal.",
    },
    {
      prompt: "Which statement is true?", type: "multiple-choice", choices: ["Every repeating decimal is rational", "No repeating decimal is rational", "Only terminating decimals are rational", "A repeating decimal cannot equal a fraction"], answer: "Every repeating decimal is rational",
      explanation: "Every repeating decimal can be written as a ratio of integers, so it is rational.", hint: "Rational numbers can be written as fractions.",
    },
    {
      prompt: "Boss Mission: Which fraction equals 0.272727...?", type: "multiple-choice", choices: ["3/11", "27/100", "27/90", "2/7"], answer: "3/11",
      explanation: "0.272727... = 27/99, and 27/99 simplifies to 3/11.", hint: "Write the repeating block 27 over 99, then simplify.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("probability", "probability", [
    {
      prompt: "A fair number cube is rolled. What is the probability of rolling a 5?", type: "multiple-choice", choices: ["1/6", "1/5", "5/6", "1/2"], answer: "1/6",
      explanation: "There is 1 favorable outcome out of 6 equally likely outcomes.", hint: "Probability is favorable outcomes divided by total outcomes.",
    },
    {
      prompt: "A bag has 3 red and 7 blue marbles. What is the probability of choosing a red marble?", type: "multiple-choice", choices: ["3/10", "7/10", "3/7", "1/3"], answer: "3/10",
      explanation: "There are 3 red marbles out of 10 total marbles.", hint: "Add the marbles to find the total.",
    },
    {
      prompt: "A spinner has 8 equal sections, and 2 are stars. What is the probability of landing on a star as a percent?", type: "numeric", answer: 25,
      explanation: "2/8 = 1/4 = 25%.", hint: "Simplify the fraction, then convert it to a percent.",
    },
    {
      prompt: "Which value cannot represent a probability?", type: "multiple-choice", choices: ["0", "0.45", "1", "1.2"], answer: "1.2",
      explanation: "A probability must be between 0 and 1, inclusive.", hint: "An event cannot occur more than 100% of the time.",
    },
    {
      prompt: "A card is selected from cards numbered 1 through 12. What is the probability of selecting a multiple of 3?", type: "multiple-choice", choices: ["1/3", "1/4", "4/9", "2/3"], answer: "1/3",
      explanation: "The favorable cards are 3, 6, 9, and 12, so 4/12 = 1/3.", hint: "List the multiples of 3 in the sample space.",
    },
    {
      prompt: "A fair coin is flipped. What is the probability of getting either heads or tails?", type: "numeric", answer: 1,
      explanation: "Heads or tails includes every possible outcome, so the probability is 1.", hint: "This event is certain.",
    },
    {
      prompt: "A jar contains 5 green, 4 yellow, and 1 purple bead. What is the probability of selecting a bead that is not purple?", type: "multiple-choice", choices: ["9/10", "1/10", "1/9", "4/5"], answer: "9/10",
      explanation: "Nine of the ten beads are green or yellow, so 9/10 are not purple.", hint: "Count all favorable colors or use the opposite event.",
    },
    {
      prompt: "The probability of an event is 0.08. How would you describe the event?", type: "multiple-choice", choices: ["Unlikely", "Equally likely to occur or not", "Likely", "Certain"], answer: "Unlikely",
      explanation: "A probability close to 0 represents an unlikely event.", hint: "Compare 0.08 with 0, 0.5, and 1.",
    },
    {
      prompt: "A letter is selected at random from the word SPACE. What is the probability of selecting a vowel?", type: "multiple-choice", choices: ["2/5", "3/5", "1/5", "1/2"], answer: "2/5",
      explanation: "The vowels are A and E, giving 2 favorable outcomes out of 5 letters.", hint: "Count A and E as favorable outcomes.",
    },
    {
      prompt: "Boss Mission: Two fair coins are flipped. What is the probability of getting exactly one head?", type: "multiple-choice", choices: ["1/2", "1/4", "3/4", "2/3"], answer: "1/2",
      explanation: "The sample space is HH, HT, TH, TT. Two of four outcomes have exactly one head, so 2/4 = 1/2.", hint: "List all four ordered outcomes.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("comparing-probabilities", "compare-probabilities", [
    {
      prompt: "Which event is more likely: an event with probability 0.65 or one with probability 3/5?", type: "multiple-choice", choices: ["0.65", "3/5", "They are equally likely", "Cannot be determined"], answer: "0.65",
      explanation: "3/5 = 0.60, and 0.65 is greater than 0.60.", hint: "Write both probabilities in the same form.",
    },
    {
      prompt: "If P(rain) = 0.3, what is P(no rain)?", type: "numeric", answer: 0.7,
      explanation: "Opposite events have probabilities that add to 1, so 1 - 0.3 = 0.7.", hint: "Subtract the event's probability from 1.",
    },
    {
      prompt: "Which probability represents an event that is equally likely to occur or not occur?", type: "multiple-choice", choices: ["0", "0.25", "0.5", "0.9"], answer: "0.5",
      explanation: "A probability of 0.5 gives the event and its opposite equal chances.", hint: "Look for one half.",
    },
    {
      prompt: "Event A has probability 40%. Event B has probability 3/8. Which event is more likely?", type: "multiple-choice", choices: ["Event A", "Event B", "They are equally likely", "Neither can occur"], answer: "Event A",
      explanation: "3/8 = 37.5%, so 40% is greater.", hint: "Convert 3/8 to a percent.",
    },
    {
      prompt: "The probability of winning a game is 7/20. What is the probability of not winning?", type: "multiple-choice", choices: ["13/20", "7/20", "13/7", "1/20"], answer: "13/20",
      explanation: "The opposite probability is 1 - 7/20 = 13/20.", hint: "Write 1 as 20/20.",
    },
    {
      prompt: "Which event is closest to certain?", type: "multiple-choice", choices: ["P = 0.12", "P = 0.49", "P = 0.76", "P = 0.98"], answer: "P = 0.98",
      explanation: "A probability closest to 1 is closest to certain.", hint: "Certain means a probability of 1.",
    },
    {
      prompt: "A spinner has equal red, blue, and green sections. Is landing on red more or less likely than not landing on red?", type: "multiple-choice", choices: ["Less likely", "More likely", "Equally likely", "Impossible"], answer: "Less likely",
      explanation: "P(red) = 1/3, while P(not red) = 2/3.", hint: "Compare one favorable section with the other two sections.",
    },
    {
      prompt: "Two events have probabilities 0.2 and 80%. What is true?", type: "multiple-choice", choices: ["They are opposite probabilities", "They are equal probabilities", "Both are unlikely", "Their sum is 0.2"], answer: "They are opposite probabilities",
      explanation: "80% = 0.8, and 0.2 + 0.8 = 1, so they can describe opposite events.", hint: "Convert the percent to a decimal and add.",
    },
    {
      prompt: "Order these probabilities from least to greatest: 55%, 1/2, 0.48.", type: "multiple-choice", choices: ["0.48, 1/2, 55%", "1/2, 0.48, 55%", "55%, 1/2, 0.48", "0.48, 55%, 1/2"], answer: "0.48, 1/2, 55%",
      explanation: "The decimal values are 0.48, 0.50, and 0.55.", hint: "Rewrite each value as a decimal.",
    },
    {
      prompt: "Boss Mission: Bag A has 4 red marbles out of 10. Bag B has 7 red marbles out of 16. From which bag is red more likely?", type: "multiple-choice", choices: ["Bag A", "Bag B", "They are equally likely", "Not enough information"], answer: "Bag B",
      explanation: "Bag A has probability 0.4. Bag B has probability 7/16 = 0.4375, which is greater.", hint: "Convert both fractions to decimals.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("experimental-theoretical-probability", "experiment-theory", [
    {
      prompt: "A coin lands heads 18 times in 30 flips. What is the experimental probability of heads?", type: "multiple-choice", choices: ["3/5", "1/2", "2/5", "18"], answer: "3/5",
      explanation: "Experimental probability is 18/30, which simplifies to 3/5.", hint: "Use observed successes over total trials.",
    },
    {
      prompt: "What is the theoretical probability of rolling an even number on a fair number cube?", type: "multiple-choice", choices: ["1/2", "1/3", "2/3", "1/6"], answer: "1/2",
      explanation: "The even outcomes 2, 4, and 6 make 3 of the 6 equally likely outcomes.", hint: "List the even faces.",
    },
    {
      prompt: "A spinner lands on blue 12 times in 50 spins. What is the experimental probability as a decimal?", type: "numeric", answer: 0.24,
      explanation: "Divide 12 by 50 to get 0.24.", hint: "Experimental probability is frequency divided by trials.",
    },
    {
      prompt: "A fair coin's theoretical probability of heads is 0.5. In 20 flips, heads appears 13 times. What is the difference between the experimental and theoretical probabilities?", type: "numeric", answer: 0.15,
      explanation: "The experimental probability is 13/20 = 0.65. The difference is 0.65 - 0.5 = 0.15.", hint: "Find 13 divided by 20 first.",
    },
    {
      prompt: "Why might experimental probability differ from theoretical probability?", type: "multiple-choice", choices: ["Random variation", "Theoretical probability is always wrong", "Fractions cannot show probability", "Every experiment must match exactly"], answer: "Random variation",
      explanation: "Random results can differ from the expected ratio, especially with fewer trials.", hint: "Chance does not guarantee an exact result in a small experiment.",
    },
    {
      prompt: "A bag has 2 red and 3 blue marbles. What is the theoretical probability of red?", type: "multiple-choice", choices: ["2/5", "3/5", "2/3", "1/5"], answer: "2/5",
      explanation: "There are 2 favorable marbles out of 5 total marbles.", hint: "Use the known contents of the bag.",
    },
    {
      prompt: "A basketball player makes 42 of 60 free throws. Based on this experiment, how many of the next 20 shots would you predict she will make?", type: "numeric", answer: 14,
      explanation: "42/60 = 0.7, and 0.7 x 20 = 14.", hint: "Apply the experimental rate to 20 shots.",
    },
    {
      prompt: "A fair spinner has 4 equal sections. In 100 spins, about how many times should one particular section occur theoretically?", type: "numeric", answer: 25,
      explanation: "Each section has probability 1/4, and 1/4 of 100 is 25.", hint: "Multiply the theoretical probability by the number of trials.",
    },
    {
      prompt: "Which change usually makes experimental probability closer to theoretical probability?", type: "multiple-choice", choices: ["Increasing the number of trials", "Stopping after one trial", "Changing the desired outcome", "Ignoring some results"], answer: "Increasing the number of trials",
      explanation: "With more trials, random variation tends to balance out and results often approach the theoretical probability.", hint: "Think about the law of large numbers.",
    },
    {
      prompt: "Boss Mission: A fair number cube is rolled 240 times. The number 6 appears 46 times. How many more sixes occurred than the theoretical prediction?", type: "numeric", answer: 6,
      explanation: "The theoretical prediction is 1/6 x 240 = 40. The experiment produced 46, which is 6 more.", hint: "First find one sixth of 240.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("simulating-trials", "simulation-trials", [
    {
      prompt: "Which tool can fairly simulate a 50% chance of success?", type: "multiple-choice", choices: ["A fair coin", "A six-sided cube with one success face", "A spinner with one of four success sections", "A bag with one success tile and four failure tiles"], answer: "A fair coin",
      explanation: "A fair coin has two equally likely outcomes, so one chosen outcome has probability 1/2.", hint: "Look for equal success and failure chances.",
    },
    {
      prompt: "To simulate a 1/4 chance using random digits 0 through 9, which assignment works?", type: "multiple-choice", choices: ["Use 0 or 1 as success", "Use only 0 as success", "Use 0, 1, 2, or 3 as success", "No exact assignment works with one digit"], answer: "No exact assignment works with one digit",
      explanation: "Ten equally likely digits cannot be split so that exactly one fourth represent success.", hint: "One fourth of 10 is not a whole number.",
    },
    {
      prompt: "A simulation uses 00 through 99. How many numbers should represent an event with probability 30%?", type: "numeric", answer: 30,
      explanation: "There are 100 equally likely two-digit outcomes, and 30% of 100 is 30.", hint: "Match the percent to the number of outcomes out of 100.",
    },
    {
      prompt: "Which simulation best models a bag with 3 red and 2 blue marbles?", type: "multiple-choice", choices: ["Spinner with 3 red and 2 blue equal sections", "Fair coin", "Standard number cube with 3 red and 3 blue faces", "Spinner with 2 red and 3 blue equal sections"], answer: "Spinner with 3 red and 2 blue equal sections",
      explanation: "The simulation must preserve the original 3:2 ratio of red to blue outcomes.", hint: "Match both the colors and their proportions.",
    },
    {
      prompt: "A student simulates 10 trials and another simulates 1,000 trials. Which result is generally more reliable for estimating probability?", type: "multiple-choice", choices: ["1,000 trials", "10 trials", "They must be identical", "Neither can estimate probability"], answer: "1,000 trials",
      explanation: "A larger number of trials usually gives a more stable estimate with less random variation.", hint: "Larger samples tend to vary less.",
    },
    {
      prompt: "A simulation models a 20% chance using a bag of equally likely tiles. What is the smallest number of tiles that can model this exactly?", type: "numeric", answer: 5,
      explanation: "20% = 1/5, so one success tile among 5 total tiles works.", hint: "Write 20% as a fraction in simplest form.",
    },
    {
      prompt: "To simulate rolling an even number on a fair number cube, which random-digit rule is valid?", type: "multiple-choice", choices: ["Even digit = success; odd digit = failure", "0 only = success", "Digits 0 through 7 = success", "Prime digit = success"], answer: "Even digit = success; odd digit = failure",
      explanation: "Five of the ten digits are even and five are odd, matching the 1/2 chance of rolling an even number.", hint: "The simulation needs equal numbers of success and failure outcomes.",
    },
    {
      prompt: "A simulation of 200 trials records 52 successes. What is the simulated probability as a percent?", type: "numeric", answer: 26,
      explanation: "52/200 = 0.26 = 26%.", hint: "Divide successes by trials and multiply by 100.",
    },
    {
      prompt: "Why should each trial in a probability simulation be performed under the same conditions?", type: "multiple-choice", choices: ["To keep outcome probabilities consistent", "To guarantee a success", "To reduce the sample space to one outcome", "To make every result alternate"], answer: "To keep outcome probabilities consistent",
      explanation: "Consistent conditions ensure each trial models the same chance process fairly.", hint: "A fair comparison requires the same rules each time.",
    },
    {
      prompt: "Boss Mission: Use random integers 1 through 20 to simulate an event with probability 35%. How many integers should represent success?", type: "numeric", answer: 7,
      explanation: "35% of 20 is 0.35 x 20 = 7, so 7 integers should represent success.", hint: "Multiply the number of equally likely integers by 0.35.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("probabilities-from-simulations", "simulation-results", [
    {
      prompt: "In a simulation, an event occurs 38 times in 100 trials. What is its experimental probability?", type: "numeric", answer: 0.38,
      explanation: "Experimental probability is 38/100 = 0.38.", hint: "Divide successes by total trials.",
    },
    {
      prompt: "A simulation gives an experimental probability of 0.62. About how many successes are predicted in 500 future trials?", type: "numeric", answer: 310,
      explanation: "Multiply 0.62 by 500 to predict 310 successes.", hint: "Probability times number of trials gives the predicted count.",
    },
    {
      prompt: "A fair coin simulation produces 47 heads in 100 trials. How does the result compare with the theoretical probability?", type: "multiple-choice", choices: ["It is 3 percentage points lower", "It is 3 percentage points higher", "It is exactly equal", "It is 47 percentage points lower"], answer: "It is 3 percentage points lower",
      explanation: "The experimental probability is 47%, compared with the theoretical 50%, a difference of 3 percentage points.", hint: "Compare 47% with 50%.",
    },
    {
      prompt: "Three simulations estimate the same probability: 0.41 from 20 trials, 0.38 from 200 trials, and 0.39 from 2,000 trials. Which estimate is generally most reliable?", type: "multiple-choice", choices: ["0.39 from 2,000 trials", "0.38 from 200 trials", "0.41 from 20 trials", "All must be equally reliable"], answer: "0.39 from 2,000 trials",
      explanation: "The estimate based on the largest number of trials is generally the most reliable.", hint: "Consider which estimate uses the largest sample.",
    },
    {
      prompt: "A simulation models a theoretical probability of 1/4. Which result is most reasonable after 400 trials?", type: "multiple-choice", choices: ["About 100 successes", "Exactly 25 successes", "About 300 successes", "Exactly 400 successes"], answer: "About 100 successes",
      explanation: "One fourth of 400 is 100, though a simulation may vary somewhat from that value.", hint: "Multiply 400 by 1/4.",
    },
    {
      prompt: "Simulation A records 72 successes in 120 trials. Simulation B records 175 successes in 250 trials. Which has the greater experimental probability?", type: "multiple-choice", choices: ["Simulation B", "Simulation A", "They are equal", "Cannot be determined"], answer: "Simulation B",
      explanation: "Simulation A is 72/120 = 0.60, while Simulation B is 175/250 = 0.70.", hint: "Compare each success count as a proportion of its trials.",
    },
    {
      prompt: "A game simulation shows a win rate of 18%. How many wins would you predict in 750 games?", type: "numeric", answer: 135,
      explanation: "0.18 x 750 = 135 predicted wins.", hint: "Convert 18% to 0.18 and multiply.",
    },
    {
      prompt: "A simulation of a fair six-sided number cube never rolls a 6 in 12 trials. Which conclusion is best?", type: "multiple-choice", choices: ["The result is possible because small samples can vary", "Rolling a 6 is impossible", "The cube must have only five sides", "The theoretical probability is 0"], answer: "The result is possible because small samples can vary",
      explanation: "A short simulation can produce unusual results even when an outcome has positive theoretical probability.", hint: "Experimental results do not have to match theory exactly.",
    },
    {
      prompt: "A simulation estimates P(A) = 0.27. What estimated probability should the opposite event have?", type: "numeric", answer: 0.73,
      explanation: "Opposite-event probabilities sum to 1, so 1 - 0.27 = 0.73.", hint: "Subtract from 1.",
    },
    {
      prompt: "Boss Mission: A simulation of 800 customers finds that 116 choose a new product. At this rate, how many of 3,000 customers are predicted to choose it?", type: "numeric", answer: 435,
      explanation: "The simulated rate is 116/800 = 0.145. Then 0.145 x 3,000 = 435.", hint: "Find the experimental probability first, then scale it to 3,000.", difficulty: "boss",
    },
  ]),
];

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
  ...createQuestionSet("circle-relationships", "circle-relations", [
    {
      prompt: "A circle has a radius of 6 centimeters. What is its diameter in centimeters?", type: "numeric", answer: 12,
      explanation: "The diameter is twice the radius, so d = 2(6) = 12 centimeters.", hint: "Use d = 2r.",
    },
    {
      prompt: "A circle has a diameter of 18 inches. What is its radius in inches?", type: "numeric", answer: 9,
      explanation: "The radius is half the diameter, so r = 18 / 2 = 9 inches.", hint: "Divide the diameter by 2.",
    },
    {
      prompt: "Which term names a segment from the center of a circle to a point on the circle?", type: "multiple-choice", choices: ["Radius", "Diameter", "Circumference", "Area"], answer: "Radius",
      explanation: "A radius connects the center of a circle to any point on the circle.", hint: "This segment is half as long as a diameter.",
    },
    {
      prompt: "Which description defines a diameter?", type: "multiple-choice", choices: ["A segment through the center with both endpoints on the circle", "The distance around a circle", "A segment from the center to the circle", "The region inside a circle"], answer: "A segment through the center with both endpoints on the circle",
      explanation: "A diameter crosses the center and has both endpoints on the circle.", hint: "A diameter is made from two radii in a straight line.",
    },
    {
      prompt: "For every circle, the ratio of circumference to diameter is approximately which number?", type: "multiple-choice", choices: ["3.14", "2", "1.5", "6.28"], answer: "3.14",
      explanation: "The ratio C / d is pi, which is approximately 3.14.", hint: "This constant is called pi.",
    },
    {
      prompt: "A circle has a radius of 4.5 meters. What is its diameter in meters?", type: "numeric", answer: 9,
      explanation: "Double the radius: d = 2(4.5) = 9 meters.", hint: "The diameter contains two radii.",
    },
    {
      prompt: "A circle has a diameter of 13 feet. What is its radius in feet?", type: "numeric", answer: 6.5,
      explanation: "Take half of the diameter: r = 13 / 2 = 6.5 feet.", hint: "A radius is one-half of a diameter.",
    },
    {
      prompt: "Which equation correctly relates diameter d and radius r?", type: "multiple-choice", choices: ["d = 2r", "d = r / 2", "d = r + 1", "d = r squared"], answer: "d = 2r",
      explanation: "A diameter is formed by two radii, so d = 2r.", hint: "Think about two center-to-edge segments placed end to end.", difficulty: "hard",
    },
    {
      prompt: "A circular table is 20 inches across through its center. What is the table's radius in inches?", type: "numeric", answer: 10,
      explanation: "The distance across through the center is the diameter. Half of 20 is 10 inches.", hint: "First identify 20 inches as the diameter.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: Which statement is always true for a circle?", type: "multiple-choice", choices: ["All radii have the same length", "The radius is twice the diameter", "Circumference divided by radius equals pi", "The diameter is three times the radius"], answer: "All radii have the same length",
      explanation: "Every radius of the same circle extends from its center to the circle, so all radii are congruent.", hint: "Test each statement using d = 2r and C = pi d.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("finding-circumference", "circumference", [
    {
      prompt: "A circle has a diameter of 10 centimeters. Using pi = 3.14, find its circumference in centimeters.", type: "numeric", answer: 31.4,
      explanation: "Use C = pi d: C = 3.14(10) = 31.4 centimeters.", hint: "Multiply the diameter by 3.14.",
    },
    {
      prompt: "A circle has a radius of 7 meters. Using pi = 3.14, find its circumference in meters.", type: "numeric", answer: 43.96,
      explanation: "Use C = 2 pi r: C = 2(3.14)(7) = 43.96 meters.", hint: "Double the radius before multiplying by 3.14.",
    },
    {
      prompt: "Which formula finds circumference C from diameter d?", type: "multiple-choice", choices: ["C = pi d", "C = pi d squared", "C = 2d", "C = d / pi"], answer: "C = pi d",
      explanation: "Circumference is pi times the diameter: C = pi d.", hint: "The ratio C / d equals pi.",
    },
    {
      prompt: "A circle has a diameter of 12.5 inches. Using pi = 3.14, find its circumference in inches.", type: "numeric", answer: 39.25,
      explanation: "Use C = pi d: C = 3.14(12.5) = 39.25 inches.", hint: "The diameter is already given, so use C = pi d.",
    },
    {
      prompt: "A circle has a radius of 3.5 feet. Using pi = 3.14, find its circumference in feet.", type: "numeric", answer: 21.98,
      explanation: "Use C = 2 pi r: C = 2(3.14)(3.5) = 21.98 feet.", hint: "Use C = 2 pi r.",
    },
    {
      prompt: "A circle has a diameter of 9 units. What is its exact circumference?", type: "multiple-choice", choices: ["9pi units", "18pi units", "4.5pi units", "81pi units"], answer: "9pi units",
      explanation: "Use C = pi d. With d = 9, the exact circumference is 9pi units.", hint: "Leave pi in the answer instead of replacing it with 3.14.",
    },
    {
      prompt: "A circular garden has a diameter of 14 meters. Using pi = 22/7, find the circumference in meters.", type: "numeric", answer: 44,
      explanation: "Use C = pi d: C = (22/7)(14) = 44 meters.", hint: "Fourteen divided by 7 is 2.",
    },
    {
      prompt: "A wheel has a diameter of 0.8 meter. Using pi = 3.14, how far does it travel in one complete rotation?", type: "numeric", answer: 2.512,
      explanation: "One rotation covers one circumference: C = 3.14(0.8) = 2.512 meters.", hint: "The distance in one rotation is the wheel's circumference.", difficulty: "hard",
    },
    {
      prompt: "A circle has a radius of 5.25 centimeters. Using pi = 3.14, find its circumference in centimeters.", type: "numeric", answer: 32.97,
      explanation: "Use C = 2 pi r: C = 2(3.14)(5.25) = 32.97 centimeters.", hint: "The diameter is 10.5 centimeters.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A wheel has a radius of 12 centimeters. Using pi = 3.14, how far does it roll in 5 complete rotations, in centimeters?", type: "numeric", answer: 376.8,
      explanation: "One rotation is 2(3.14)(12) = 75.36 centimeters. For 5 rotations, 75.36(5) = 376.8 centimeters.", hint: "Find one circumference, then multiply by 5.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("finding-radius-diameter", "radius-diameter", [
    {
      prompt: "A circle has a circumference of 31.4 centimeters. Using pi = 3.14, find its diameter in centimeters.", type: "numeric", answer: 10,
      explanation: "Use d = C / pi: d = 31.4 / 3.14 = 10 centimeters.", hint: "Rearrange C = pi d to solve for d.",
    },
    {
      prompt: "A circle has a circumference of 43.96 meters. Using pi = 3.14, find its radius in meters.", type: "numeric", answer: 7,
      explanation: "First find d = 43.96 / 3.14 = 14 meters. Then r = 14 / 2 = 7 meters.", hint: "Find the diameter first, then divide by 2.",
    },
    {
      prompt: "Which formula finds diameter d from circumference C?", type: "multiple-choice", choices: ["d = C / pi", "d = C pi", "d = 2C", "d = pi / C"], answer: "d = C / pi",
      explanation: "Divide both sides of C = pi d by pi to get d = C / pi.", hint: "Undo multiplication by pi.",
    },
    {
      prompt: "A circle has a circumference of 18.84 inches. Using pi = 3.14, find its radius in inches.", type: "numeric", answer: 3,
      explanation: "The diameter is 18.84 / 3.14 = 6 inches, so the radius is 6 / 2 = 3 inches.", hint: "Divide by pi, then divide by 2.",
    },
    {
      prompt: "A circle has a circumference of 62.8 feet. Using pi = 3.14, find its radius in feet.", type: "numeric", answer: 10,
      explanation: "The diameter is 62.8 / 3.14 = 20 feet. Half of 20 is 10 feet.", hint: "Use r = C / (2 pi).",
    },
    {
      prompt: "A circle has a circumference of 15.7 units. Using pi = 3.14, find its diameter.", type: "numeric", answer: 5,
      explanation: "Use d = C / pi: d = 15.7 / 3.14 = 5 units.", hint: "Divide the circumference by 3.14.",
    },
    {
      prompt: "A circle has an exact circumference of 9pi centimeters. What is its diameter in centimeters?", type: "numeric", answer: 9,
      explanation: "Since C = pi d and C = 9pi, the diameter is 9 centimeters.", hint: "Compare 9pi with pi times the diameter.",
    },
    {
      prompt: "A circular pond has a circumference of 44 meters. Using pi = 22/7, find its radius in meters.", type: "numeric", answer: 7,
      explanation: "The diameter is 44 / (22/7) = 14 meters, so the radius is 7 meters.", hint: "Find the diameter before taking half.", difficulty: "hard",
    },
    {
      prompt: "A circular running track has a circumference of 94.2 meters. Using pi = 3.14, find its diameter in meters.", type: "numeric", answer: 30,
      explanation: "Use d = C / pi: d = 94.2 / 3.14 = 30 meters.", hint: "Circumference divided by pi gives diameter.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A circular fountain has a circumference of 75.36 feet. Using pi = 3.14, find its radius in feet.", type: "numeric", answer: 12,
      explanation: "The diameter is 75.36 / 3.14 = 24 feet. The radius is 24 / 2 = 12 feet.", hint: "Use r = C / (2 pi).", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("exploring-circle-area", "area-exploration", [
    {
      prompt: "Which formula gives the area A of a circle with radius r?", type: "multiple-choice", choices: ["A = pi r squared", "A = 2 pi r", "A = pi r", "A = 2r squared"], answer: "A = pi r squared",
      explanation: "The area of a circle is pi times the square of its radius: A = pi r squared.", hint: "Area uses the radius twice as a factor.",
    },
    {
      prompt: "A circle has a radius of 3 units. What is its exact area?", type: "multiple-choice", choices: ["9pi square units", "6pi square units", "3pi square units", "18pi square units"], answer: "9pi square units",
      explanation: "Use A = pi r squared: A = pi(3 squared) = 9pi square units.", hint: "Square 3 before multiplying by pi.",
    },
    {
      prompt: "If the radius of a circle doubles, by what factor does its area change?", type: "numeric", answer: 4,
      explanation: "Area depends on r squared. Doubling r multiplies the area by 2 squared, or 4.", hint: "Compare r squared with (2r) squared.",
    },
    {
      prompt: "A circle has a diameter of 10 units. What is its exact area?", type: "multiple-choice", choices: ["25pi square units", "100pi square units", "10pi square units", "20pi square units"], answer: "25pi square units",
      explanation: "The radius is 5 units, so A = pi(5 squared) = 25pi square units.", hint: "Convert diameter to radius before using the area formula.",
    },
    {
      prompt: "Which unit is appropriate for the area of a circular garden measured in meters?", type: "multiple-choice", choices: ["Square meters", "Meters", "Cubic meters", "Meters per second"], answer: "Square meters",
      explanation: "Area measures a two-dimensional region, so it is reported in square units.", hint: "Area is measured with units squared.",
    },
    {
      prompt: "A circle has a radius of 6 centimeters. What is its exact area?", type: "multiple-choice", choices: ["36pi square centimeters", "12pi square centimeters", "6pi square centimeters", "18pi square centimeters"], answer: "36pi square centimeters",
      explanation: "Use A = pi r squared: A = pi(6 squared) = 36pi square centimeters.", hint: "Six squared is 36.",
    },
    {
      prompt: "For any circle, the ratio of its area to the square of its radius equals which constant?", type: "multiple-choice", choices: ["pi", "2", "The radius", "The diameter"], answer: "pi",
      explanation: "From A = pi r squared, dividing both sides by r squared gives A / r squared = pi.", hint: "Rearrange the circle area formula.",
    },
    {
      prompt: "If the radius of a circle triples, by what factor does its area change?", type: "numeric", answer: 9,
      explanation: "Tripling the radius multiplies area by 3 squared, which is 9.", hint: "Area changes with the square of the scale factor.", difficulty: "hard",
    },
    {
      prompt: "A circle has an exact area of 49pi square feet. What is its radius in feet?", type: "numeric", answer: 7,
      explanation: "Since A = pi r squared, r squared = 49 and r = 7 feet.", hint: "Find the positive number whose square is 49.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: Circle B has twice the radius of Circle A. How many times as large is the area of Circle B?", type: "numeric", answer: 4,
      explanation: "If Circle A has area pi r squared, Circle B has area pi(2r) squared = 4pi r squared, four times as much.", hint: "Square the radius scale factor.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("finding-circle-area", "circle-area", [
    {
      prompt: "A circle has a radius of 5 centimeters. Using pi = 3.14, find its area in square centimeters.", type: "numeric", answer: 78.5,
      explanation: "Use A = pi r squared: A = 3.14(5 squared) = 78.5 square centimeters.", hint: "Square the radius before multiplying by 3.14.",
    },
    {
      prompt: "A circle has a diameter of 12 meters. Using pi = 3.14, find its area in square meters.", type: "numeric", answer: 113.04,
      explanation: "The radius is 6 meters. Then A = 3.14(6 squared) = 113.04 square meters.", hint: "First divide the diameter by 2.",
    },
    {
      prompt: "A circle has a radius of 7 feet. Using pi = 22/7, find its area in square feet.", type: "numeric", answer: 154,
      explanation: "Use A = pi r squared: A = (22/7)(49) = 154 square feet.", hint: "Cancel 49 divided by 7 before multiplying by 22.",
    },
    {
      prompt: "A circular rug has a diameter of 20 feet. Using pi = 3.14, find its area in square feet.", type: "numeric", answer: 314,
      explanation: "The radius is 10 feet. Then A = 3.14(10 squared) = 314 square feet.", hint: "The radius is half the diameter.",
    },
    {
      prompt: "A circle has a radius of 2.5 inches. Using pi = 3.14, find its area to the nearest hundredth.", type: "numeric", answer: 19.63,
      explanation: "A = 3.14(2.5 squared) = 3.14(6.25) = 19.625, which rounds to 19.63 square inches.", hint: "Round 19.625 to two decimal places.",
    },
    {
      prompt: "A circular flower bed has a radius of 4.5 meters. Using pi = 3.14, find its area to the nearest hundredth.", type: "numeric", answer: 63.59,
      explanation: "A = 3.14(4.5 squared) = 3.14(20.25) = 63.585, which rounds to 63.59 square meters.", hint: "Square 4.5, multiply by 3.14, then round.",
    },
    {
      prompt: "A circle has a radius of 9 units. What is its exact area?", type: "multiple-choice", choices: ["81pi square units", "18pi square units", "9pi square units", "162pi square units"], answer: "81pi square units",
      explanation: "Use A = pi r squared: A = pi(9 squared) = 81pi square units.", hint: "Leave pi in exact form.",
    },
    {
      prompt: "A circular sign has a diameter of 15 inches. Using pi = 3.14, find its area to the nearest hundredth.", type: "numeric", answer: 176.63,
      explanation: "The radius is 7.5 inches. A = 3.14(7.5 squared) = 176.625, which rounds to 176.63 square inches.", hint: "Use a radius of 7.5 inches.", difficulty: "hard",
    },
    {
      prompt: "A pizza has a radius of 8 inches. Using pi = 3.14, find its area in square inches.", type: "numeric", answer: 200.96,
      explanation: "Use A = pi r squared: A = 3.14(8 squared) = 3.14(64) = 200.96 square inches.", hint: "Eight squared is 64.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A circular patio has a diameter of 18 feet. Covering it costs $2 per square foot. Using pi = 3.14, what is the total cost in dollars?", type: "numeric", answer: 508.68,
      explanation: "The radius is 9 feet. The area is 3.14(9 squared) = 254.34 square feet. At $2 per square foot, the cost is $508.68.", hint: "Find the area first, then multiply by the cost per square foot.", difficulty: "boss",
    },
  ]),
];

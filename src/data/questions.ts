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
  ...createQuestionSet("deriving-area-formulas", "area-derivation", [
    {
      prompt: "A triangle is cut from one side of a parallelogram and moved to the other side to form a rectangle. Which measurements stay the same?", type: "multiple-choice", choices: ["Base and perpendicular height", "Slanted side and perimeter", "Both diagonals", "All side lengths"], answer: "Base and perpendicular height",
      explanation: "Rearranging the piece creates a rectangle with the same base and perpendicular height as the parallelogram.", hint: "Compare the dimensions used in the rectangle area formula.",
    },
    {
      prompt: "Which formula is derived for the area A of a parallelogram with base b and perpendicular height h?", type: "multiple-choice", choices: ["A = bh", "A = b + h", "A = 2bh", "A = b squared"], answer: "A = bh",
      explanation: "A parallelogram can be rearranged into a rectangle with the same base and height, so A = bh.", hint: "Use the area formula for the rearranged rectangle.",
    },
    {
      prompt: "Two congruent trapezoids with bases b1 and b2 are joined to form a parallelogram. What is the parallelogram's base?", type: "multiple-choice", choices: ["b1 + b2", "b1 - b2", "2b1", "b1 times b2"], answer: "b1 + b2",
      explanation: "The two different trapezoid bases fit end to end, creating a parallelogram base of b1 + b2.", hint: "Picture the shorter and longer bases placed along one line.",
    },
    {
      prompt: "Which formula gives the area of one trapezoid with bases b1 and b2 and height h?", type: "multiple-choice", choices: ["A = 1/2(b1 + b2)h", "A = (b1 + b2)h", "A = b1b2h", "A = 1/2(b1 - b2)h"], answer: "A = 1/2(b1 + b2)h",
      explanation: "Two congruent trapezoids form a parallelogram with area (b1 + b2)h, so one trapezoid has half that area.", hint: "Divide the area of the combined parallelogram by 2.",
    },
    {
      prompt: "Why is a slanted side of a parallelogram not used as its height?", type: "multiple-choice", choices: ["It is not perpendicular to the base", "It is always too long", "It is part of the perimeter", "It is equal to the base"], answer: "It is not perpendicular to the base",
      explanation: "Height measures the perpendicular distance between the parallel bases, not the length of a slanted side.", hint: "A height meets the base at a right angle.",
    },
    {
      prompt: "A parallelogram has base 8 units and perpendicular height 5 units. What area does the rearranged rectangle show?", type: "numeric", answer: 40,
      explanation: "The rearranged rectangle has the same base and height, so A = 8(5) = 40 square units.", hint: "Multiply base by perpendicular height.",
    },
    {
      prompt: "A trapezoid has bases 6 and 10 units and height 4 units. Two copies form a parallelogram. What is the area of one trapezoid?", type: "numeric", answer: 32,
      explanation: "The combined parallelogram has area (6 + 10)(4) = 64. One trapezoid has half, or 32 square units.", hint: "Find the combined area, then divide by 2.",
    },
    {
      prompt: "A rhombus is split along a diagonal into regions that can be rearranged. Which formula can use its diagonals d1 and d2?", type: "multiple-choice", choices: ["A = 1/2 d1 d2", "A = d1 + d2", "A = 2d1d2", "A = d1 squared"], answer: "A = 1/2 d1 d2",
      explanation: "The perpendicular diagonals divide the rhombus into triangles whose combined area is one-half the product of the diagonals.", hint: "The four right triangles use half-diagonals as their legs.", difficulty: "hard",
    },
    {
      prompt: "If a parallelogram keeps the same base but its perpendicular height doubles, by what factor does its area change?", type: "numeric", answer: 2,
      explanation: "Because A = bh, replacing h with 2h gives A = b(2h) = 2bh, twice the original area.", hint: "Only one factor in bh is doubled.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A trapezoid has bases 7 and 13 units and height 6 units. Use the two-copy derivation to find its area.", type: "numeric", answer: 60,
      explanation: "Two copies form a parallelogram with area (7 + 13)(6) = 120 square units. One trapezoid has area 120 / 2 = 60 square units.", hint: "Add the bases, multiply by height, then take half.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("quadrilateral-area", "quadrilateral-area", [
    {
      prompt: "A parallelogram has base 9 centimeters and perpendicular height 6 centimeters. Find its area in square centimeters.", type: "numeric", answer: 54,
      explanation: "Use A = bh: A = 9(6) = 54 square centimeters.", hint: "Multiply the base by the perpendicular height.",
    },
    {
      prompt: "A trapezoid has bases 8 meters and 14 meters and height 5 meters. Find its area in square meters.", type: "numeric", answer: 55,
      explanation: "Use A = 1/2(b1 + b2)h: A = 1/2(8 + 14)(5) = 55 square meters.", hint: "Average the two bases, then multiply by the height.",
    },
    {
      prompt: "A rhombus has base 10 inches and perpendicular height 7 inches. Find its area in square inches.", type: "numeric", answer: 70,
      explanation: "A rhombus is a parallelogram, so A = bh = 10(7) = 70 square inches.", hint: "Use base times perpendicular height.",
    },
    {
      prompt: "A rhombus has diagonals of 16 feet and 10 feet. Find its area in square feet.", type: "numeric", answer: 80,
      explanation: "Use A = 1/2 d1 d2: A = 1/2(16)(10) = 80 square feet.", hint: "Multiply the diagonals, then divide by 2.",
    },
    {
      prompt: "A trapezoid has bases 4.5 units and 7.5 units and height 3 units. Find its area.", type: "numeric", answer: 18,
      explanation: "A = 1/2(4.5 + 7.5)(3) = 1/2(12)(3) = 18 square units.", hint: "Add the bases before multiplying.",
    },
    {
      prompt: "A parallelogram has base 12 yards, height 4 yards, and slanted side 7 yards. Which measurement is not needed to find its area?", type: "multiple-choice", choices: ["The 7-yard slanted side", "The 12-yard base", "The 4-yard height", "Both base and height"], answer: "The 7-yard slanted side",
      explanation: "Parallelogram area uses only the base and its perpendicular height.", hint: "Use A = bh.",
    },
    {
      prompt: "A parallelogram-shaped flag has base 12 feet and perpendicular height 4.5 feet. Find its area in square feet.", type: "numeric", answer: 54,
      explanation: "Use A = bh: A = 12(4.5) = 54 square feet.", hint: "The slanted appearance does not change the formula.",
    },
    {
      prompt: "A trapezoid has bases 6 inches and 9 inches and height 8 inches. Find its area in square inches.", type: "numeric", answer: 60,
      explanation: "A = 1/2(6 + 9)(8) = 1/2(15)(8) = 60 square inches.", hint: "Multiply the sum of the bases by half the height.", difficulty: "hard",
    },
    {
      prompt: "A rhombus has diagonals 7 meters and 12 meters. Find its area in square meters.", type: "numeric", answer: 42,
      explanation: "A = 1/2(7)(12) = 42 square meters.", hint: "Take half the product of the diagonals.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A trapezoid-shaped garden has bases 18 feet and 26 feet and height 12 feet. Sod costs $3 per square foot. What is the total cost in dollars?", type: "numeric", answer: 792,
      explanation: "The area is 1/2(18 + 26)(12) = 264 square feet. At $3 per square foot, the cost is 264(3) = $792.", hint: "Find the trapezoid area before applying the unit cost.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("polygon-area", "polygon-area", [
    {
      prompt: "A pentagon is decomposed into three non-overlapping triangles with areas 8, 11, and 9 square units. What is the pentagon's area?", type: "numeric", answer: 28,
      explanation: "Add the areas of the non-overlapping pieces: 8 + 11 + 9 = 28 square units.", hint: "The pieces cover the whole polygon without overlap.",
    },
    {
      prompt: "A regular hexagon is divided from its center into 6 congruent triangles. Each triangle has area 12 square centimeters. Find the hexagon's area.", type: "numeric", answer: 72,
      explanation: "Multiply the area of one triangle by 6: 6(12) = 72 square centimeters.", hint: "There are six equal pieces.",
    },
    {
      prompt: "How many triangles are formed when all diagonals from one vertex of an octagon are drawn without crossing outside the polygon?", type: "numeric", answer: 6,
      explanation: "An n-sided polygon forms n - 2 triangles from one vertex. For an octagon, 8 - 2 = 6.", hint: "Use the pattern n - 2.",
    },
    {
      prompt: "A polygon is decomposed into a rectangle with area 30 square feet and a triangle with area 12 square feet. What is the polygon's total area?", type: "numeric", answer: 42,
      explanation: "The pieces do not overlap, so add their areas: 30 + 12 = 42 square feet.", hint: "Combine the areas of all pieces.",
    },
    {
      prompt: "A regular pentagon is divided into 5 congruent triangles. Each triangle has base 6 meters and height 4 meters. Find the pentagon's area.", type: "numeric", answer: 60,
      explanation: "Each triangle has area 1/2(6)(4) = 12 square meters. Five triangles have area 5(12) = 60 square meters.", hint: "Find one triangle's area, then multiply by 5.",
    },
    {
      prompt: "Two students decompose the same polygon in different ways. If both decompositions cover the polygon without gaps or overlaps, what should be true?", type: "multiple-choice", choices: ["Both total areas should be equal", "The decomposition with more pieces has more area", "Only triangles give the correct area", "Only rectangles give the correct area"], answer: "Both total areas should be equal",
      explanation: "Different valid decompositions partition the same region, so the sums of their piece areas must match.", hint: "The polygon itself has not changed.",
    },
    {
      prompt: "A quadrilateral is divided by a diagonal into two triangles with areas 18 and 22 square inches. Find the quadrilateral's area.", type: "numeric", answer: 40,
      explanation: "Add the triangle areas: 18 + 22 = 40 square inches.", hint: "A diagonal partitions the quadrilateral into two non-overlapping regions.",
    },
    {
      prompt: "A regular hexagon is divided into 6 triangles. Each triangle has base 6 units and height 5 units. Find the hexagon's area.", type: "numeric", answer: 90,
      explanation: "Each triangle has area 1/2(6)(5) = 15. Six triangles have area 6(15) = 90 square units.", hint: "Calculate one congruent triangle first.", difficulty: "hard",
    },
    {
      prompt: "A polygon is split into two trapezoids with areas 24 and 31 square yards and one triangle with area 9 square yards. Find the total area.", type: "numeric", answer: 64,
      explanation: "Add all three non-overlapping areas: 24 + 31 + 9 = 64 square yards.", hint: "Every piece contributes to the total.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A regular octagon is divided into 8 congruent triangles. Each triangle has base 4 centimeters and height 6 centimeters. Find the octagon's area.", type: "numeric", answer: 96,
      explanation: "One triangle has area 1/2(4)(6) = 12 square centimeters. Eight triangles have area 8(12) = 96 square centimeters.", hint: "Find one triangle, then account for all eight.", difficulty: "boss",
    },
  ]),

  ...createQuestionSet("composite-figure-area", "composite-area", [
    {
      prompt: "An L-shaped figure fits inside a 10-by-8 rectangle with a 4-by-3 rectangle removed. Find its area in square units.", type: "numeric", answer: 68,
      explanation: "The outer rectangle has area 10(8) = 80. Subtract the cutout area 4(3) = 12 to get 68 square units.", hint: "Use outer area minus missing area.",
    },
    {
      prompt: "A composite figure contains a 6-by-5 rectangle and a triangle with base 6 and height 4, with no overlap. Find the total area.", type: "numeric", answer: 42,
      explanation: "The rectangle area is 30 and the triangle area is 1/2(6)(4) = 12. The total is 42 square units.", hint: "Find each area separately, then add.",
    },
    {
      prompt: "Two non-overlapping rectangles measure 8 by 3 units and 5 by 4 units. Find their combined area.", type: "numeric", answer: 44,
      explanation: "The areas are 8(3) = 24 and 5(4) = 20. Their sum is 44 square units.", hint: "Add the two rectangle areas.",
    },
    {
      prompt: "A 12-by-9 rectangle has a 3-by-5 rectangular section removed. Find the remaining area.", type: "numeric", answer: 93,
      explanation: "The large rectangle has area 108. The removed section has area 15, so 108 - 15 = 93 square units.", hint: "Subtract the cutout from the outer rectangle.",
    },
    {
      prompt: "A house-shaped figure contains an 8-by-6 rectangle topped by a triangle with base 8 and height 3. Find the total area.", type: "numeric", answer: 60,
      explanation: "The rectangle area is 48 and the triangle area is 1/2(8)(3) = 12. The total is 60 square units.", hint: "Add the wall and roof regions.",
    },
    {
      prompt: "Which strategy is most useful when a composite figure is drawn inside a rectangle with several missing pieces around it?", type: "multiple-choice", choices: ["Subtract the missing areas from the rectangle", "Add every side length", "Multiply the perimeter by the height", "Use only the largest piece"], answer: "Subtract the missing areas from the rectangle",
      explanation: "When an enclosing rectangle is convenient, subtracting the outside regions gives the composite figure's area.", hint: "Start with a simple shape that contains the whole figure.",
    },
    {
      prompt: "A floor plan consists of a 9-by-7 rectangle and an attached 4-by-3 rectangle. The regions do not overlap. Find the total area.", type: "numeric", answer: 75,
      explanation: "The areas are 9(7) = 63 and 4(3) = 12. Their sum is 75 square units.", hint: "Add the room areas.",
    },
    {
      prompt: "A 20-by-15 rectangular banner has a 5-by-5 square opening. Find the remaining area in square feet.", type: "numeric", answer: 275,
      explanation: "The banner area is 300 square feet and the opening is 25 square feet. The remaining area is 300 - 25 = 275 square feet.", hint: "Subtract the square opening.", difficulty: "hard",
    },
    {
      prompt: "A composite figure contains a trapezoid with bases 5 and 9 and height 4 plus a non-overlapping rectangle measuring 6 by 3. Find the total area.", type: "numeric", answer: 46,
      explanation: "The trapezoid area is 1/2(5 + 9)(4) = 28. The rectangle area is 18. The total is 46 square units.", hint: "Use two different area formulas, then add.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: An 18-by-12 rectangle has two non-overlapping rectangular cutouts measuring 3 by 4 and 5 by 2. Find the remaining area.", type: "numeric", answer: 194,
      explanation: "The outer area is 216. The cutouts total 12 + 10 = 22. The remaining area is 216 - 22 = 194 square units.", hint: "Subtract both missing regions from the outer area.", difficulty: "boss",
    },
  ]),

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

  ...createQuestionSet("circle-problem-solving", "circle-applications", [
    {
      prompt: "A circular garden needs fencing around its edge. Which measurement should be calculated?", type: "multiple-choice", choices: ["Circumference", "Area", "Radius squared", "Volume"], answer: "Circumference",
      explanation: "Fencing follows the distance around the garden, which is its circumference.", hint: "Decide whether the problem concerns the boundary or the inside region.",
    },
    {
      prompt: "A circular lawn needs sod covering its entire surface. Which measurement should be calculated?", type: "multiple-choice", choices: ["Area", "Circumference", "Diameter only", "Perimeter of a square"], answer: "Area",
      explanation: "Sod covers the region inside the circle, so the required measurement is area.", hint: "Covering a surface uses square units.",
    },
    {
      prompt: "A circular track has radius 20 meters. Using pi = 3.14, how far is 3 complete laps, in meters?", type: "numeric", answer: 376.8,
      explanation: "One lap is the circumference: 2(3.14)(20) = 125.6 meters. Three laps cover 3(125.6) = 376.8 meters.", hint: "Find one circumference, then multiply by 3.",
    },
    {
      prompt: "A circular pool has diameter 10 meters. A cover costs $4 per square meter. Using pi = 3.14, what is the cover's total cost in dollars?", type: "numeric", answer: 314,
      explanation: "The radius is 5 meters, so the area is 3.14(5 squared) = 78.5 square meters. The cost is 78.5(4) = $314.", hint: "Use area because the cover spans the pool's surface.",
    },
    {
      prompt: "A round table has diameter 6 feet. Trim costs $5 per foot around its edge. Using pi = 3.14, what is the trim's total cost in dollars?", type: "numeric", answer: 94.2,
      explanation: "The circumference is 3.14(6) = 18.84 feet. The cost is 18.84(5) = $94.20.", hint: "Find the distance around the table before applying the cost.",
    },
    {
      prompt: "A circular garden has radius 7 feet. Fencing costs $12 per foot. Using pi = 22/7, what is the total fencing cost in dollars?", type: "numeric", answer: 528,
      explanation: "The circumference is 2(22/7)(7) = 44 feet. The cost is 44(12) = $528.", hint: "Fencing uses circumference, not area.",
    },
    {
      prompt: "Two pizzas have radii 6 inches and 9 inches. Using pi = 3.14, how many more square inches of pizza does the larger one have?", type: "numeric", answer: 141.3,
      explanation: "The area difference is 3.14(9 squared - 6 squared) = 3.14(81 - 36) = 141.3 square inches.", hint: "Subtract the smaller circle's area from the larger circle's area.",
    },
    {
      prompt: "A wheel has diameter 0.7 meter. Using pi = 3.14, how far does it travel in 100 rotations, in meters?", type: "numeric", answer: 219.8,
      explanation: "One rotation covers 3.14(0.7) = 2.198 meters. One hundred rotations cover 219.8 meters.", hint: "Multiply one circumference by the number of rotations.", difficulty: "hard",
    },
    {
      prompt: "A circular fountain with radius 4 meters sits inside a 10-by-10-meter square plaza. Using pi = 3.14, how many square meters of the plaza are outside the fountain?", type: "numeric", answer: 49.76,
      explanation: "The plaza area is 100 square meters. The fountain area is 3.14(4 squared) = 50.24 square meters. The difference is 49.76 square meters.", hint: "Subtract the circle's area from the square's area.", difficulty: "hard",
    },
    {
      prompt: "Boss Mission: A circular running course has diameter 50 meters. Using pi = 3.14, how far does a runner travel in 8 complete laps, in meters?", type: "numeric", answer: 1256,
      explanation: "One lap is 3.14(50) = 157 meters. Eight laps cover 157(8) = 1,256 meters.", hint: "Use circumference for one lap, then multiply by 8.", difficulty: "boss",
    },
  ]),
];

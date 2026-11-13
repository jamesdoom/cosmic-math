import type { Mission } from "../types";

const questionIds = (prefix: string) => [
  ...Array.from({ length: 9 }, (_, index) => `${prefix}-q${index + 1}`),
  `${prefix}-boss`,
];

export const missions: Mission[] = [
  {
    id: "deriving-area-formulas",
    planetId: "unit-four-area",
    title: "4.1 Deriving Area Formulas for Trapezoids, Parallelograms, and Rhombi",
    topic: "Decomposing and Rearranging Quadrilaterals",
    briefing:
      "Use familiar rectangle and triangle areas to explain formulas for parallelograms, trapezoids, and rhombi.",
    badgeRewardId: "formula-forger",
    xpReward: 50,
    starReward: 100,
    questionIds: questionIds("area-derivation"),
  },
  {
    id: "quadrilateral-area",
    planetId: "unit-four-area",
    title: "4.2 Finding the Area of Trapezoids, Parallelograms, and Rhombi",
    topic: "Applying Quadrilateral Area Formulas",
    briefing:
      "Calculate the area of parallelograms, trapezoids, and rhombi from their relevant dimensions.",
    badgeRewardId: "quadrilateral-quantifier",
    xpReward: 55,
    starReward: 100,
    questionIds: questionIds("quadrilateral-area"),
  },
  {
    id: "polygon-area",
    planetId: "unit-four-area",
    title: "4.3 Finding the Area of Polygons",
    topic: "Decomposing Polygons",
    briefing:
      "Break polygons into familiar triangles and quadrilaterals, then combine their areas.",
    badgeRewardId: "polygon-pathfinder",
    xpReward: 60,
    starReward: 100,
    questionIds: questionIds("polygon-area"),
  },
  {
    id: "composite-figure-area",
    planetId: "unit-four-area",
    title: "4.4 Finding the Area of Composite Figures",
    topic: "Adding and Subtracting Areas",
    briefing:
      "Decompose composite figures or subtract missing regions to determine total area.",
    badgeRewardId: "composite-cartographer",
    xpReward: 60,
    starReward: 100,
    questionIds: questionIds("composite-area"),
  },
  {
    id: "circle-relationships",
    planetId: "unit-four-area",
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
    planetId: "unit-four-area",
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
    planetId: "unit-four-area",
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
    planetId: "unit-four-area",
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
    planetId: "unit-four-area",
    title: "4.9 Finding the Area of a Circle",
    topic: "Area Formulas and Applications",
    briefing:
      "Calculate circle areas from a radius or diameter and solve measurement and cost problems.",
    badgeRewardId: "circle-area-master",
    xpReward: 80,
    starReward: 100,
    questionIds: questionIds("circle-area"),
  },
  {
    id: "circle-problem-solving",
    planetId: "unit-four-area",
    title: "4.10 Using Circumference and Area to Solve Problems",
    topic: "Multi-Step Circle Applications",
    briefing:
      "Choose circumference or area, combine operations, and solve multi-step circle problems in context.",
    badgeRewardId: "circle-problem-solver",
    xpReward: 85,
    starReward: 100,
    questionIds: questionIds("circle-applications"),
  },
];

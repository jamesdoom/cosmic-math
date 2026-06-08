import type { Ship } from "../types";

export const ships: Ship[] = [
  {
    id: "explorer-shuttle",
    name: "Explorer Shuttle",
    price: 0,
    isStarter: true,
  },

  {
    id: "falcon-runner",
    name: "Falcon Runner",
    price: 100,
    isStarter: false,
  },

  {
    id: "nebula-cruiser",
    name: "Nebula Cruiser",
    price: 300,
    isStarter: false,
  },
];

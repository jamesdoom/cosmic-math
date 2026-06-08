export type AstronautRank =
  | "Cadet"
  | "Pilot"
  | "Commander"
  | "Captain"
  | "Cosmic Explorer"
  | "Galaxy Master";

export type Difficulty = "easy" | "medium" | "hard" | "boss";

export type QuestionType = "multiple-choice" | "numeric";

export type ProfileSettings = {
  motionEnabled: boolean;
  soundEnabled: boolean;
};

export type MissionProgress = {
  missionId: string;
  completed: boolean;
  highestScore: number;
  attempts: number;
  starsEarned: number;
};

export type StudentProfile = {
  name: string;
  rank: AstronautRank;
  xp: number;
  stars: number;
  equippedShipId: string;
  unlockedShipIds: string[];
  completedMissions: MissionProgress[];
  unlockedPlanetIds: string[];
  earnedBadgeIds: string[];
  settings: ProfileSettings;
};

export type Planet = {
  id: string;
  name: string;
  description: string;
  missionIds: string[];
};

export type Mission = {
  id: string;
  planetId: string;
  title: string;
  topic: string;
  briefing: string;
  badgeRewardId: string;
  xpReward: number;
  starReward: number;
  questionIds: string[];
};

export type Question = {
  id: string;
  missionId: string;
  prompt: string;
  type: QuestionType;
  choices?: string[];
  correctAnswer: string | number;
  explanation: string;
  hint?: string;
  difficulty: Difficulty;
  starReward: number;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Ship = {
  id: string;
  name: string;
  price: number;
  isStarter: boolean;
};

import type { AstronautRank } from "../types";

type RankThreshold = {
  rank: AstronautRank;
  xp: number;
};

export type RankProgress = {
  currentRank: AstronautRank;
  currentRankXp: number;
  nextRank: AstronautRank | null;
  nextRankXp: number | null;
  progressPercent: number;
  xpIntoRank: number;
  xpNeededForNextRank: number;
};

const RANK_THRESHOLDS: RankThreshold[] = [
  { rank: "Cadet", xp: 0 },
  { rank: "Pilot", xp: 50 },
  { rank: "Commander", xp: 120 },
  { rank: "Captain", xp: 220 },
  { rank: "Cosmic Explorer", xp: 350 },
  { rank: "Galaxy Master", xp: 500 },
];

export function getRankForXp(xp: number): AstronautRank {
  const rankThreshold = [...RANK_THRESHOLDS]
    .reverse()
    .find((threshold) => xp >= threshold.xp);

  return rankThreshold?.rank ?? "Cadet";
}

export function getRankProgress(xp: number): RankProgress {
  const currentRank = getRankForXp(xp);
  const currentRankIndex = RANK_THRESHOLDS.findIndex(
    (threshold) => threshold.rank === currentRank,
  );
  const currentRankThreshold = RANK_THRESHOLDS[currentRankIndex];
  const nextRankThreshold = RANK_THRESHOLDS[currentRankIndex + 1];

  if (!nextRankThreshold) {
    return {
      currentRank,
      currentRankXp: currentRankThreshold.xp,
      nextRank: null,
      nextRankXp: null,
      progressPercent: 100,
      xpIntoRank: xp - currentRankThreshold.xp,
      xpNeededForNextRank: 0,
    };
  }

  const xpIntoRank = xp - currentRankThreshold.xp;
  const xpNeededForNextRank = nextRankThreshold.xp - currentRankThreshold.xp;

  return {
    currentRank,
    currentRankXp: currentRankThreshold.xp,
    nextRank: nextRankThreshold.rank,
    nextRankXp: nextRankThreshold.xp,
    progressPercent: Math.min(
      100,
      Math.max(0, Math.round((xpIntoRank / xpNeededForNextRank) * 100)),
    ),
    xpIntoRank,
    xpNeededForNextRank,
  };
}

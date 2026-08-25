import type { StudentProfile } from "../types";
import { badges } from "../data/badges";
import { missions } from "../data/missions";
import { ships } from "../data/ships";
import { planets } from "../data/planets";
import { getRankForXp } from "./ranks";

const STORAGE_KEY = "cosmic-math-student-profile";
const STARTER_SHIP_ID = "explorer-shuttle";
const STARTER_PLANET_ID = "unit-one-orbit";

export function createDefaultProfile(name = "Cadet"): StudentProfile {
  return {
    name,
    rank: "Cadet",
    xp: 0,
    stars: 0,
    equippedShipId: "explorer-shuttle",
    unlockedShipIds: ["explorer-shuttle"],
    completedMissions: [],
    unlockedPlanetIds: ["unit-one-orbit"],
    earnedBadgeIds: [],
    settings: {
      motionEnabled: true,
      soundEnabled: false,
    },
  };
}

export function loadSavedProfile(): StudentProfile | null {
  const savedProfile = readStoredProfile();

  if (!savedProfile) {
    return null;
  }

  try {
    return normalizeProfile(JSON.parse(savedProfile));
  } catch {
    return null;
  }
}

export function loadProfile(): StudentProfile {
  return loadSavedProfile() ?? createDefaultProfile();
}

export function saveProfile(profile: StudentProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeProfile(profile)));
  } catch {
    // Some browser modes block localStorage. The in-memory React state still works.
  }
}

export function resetProfile(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage reset failures in restricted browser contexts.
  }
}

function readStoredProfile(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function normalizeProfile(savedProfile: unknown): StudentProfile {
  const fallbackProfile = createDefaultProfile();

  if (!savedProfile || typeof savedProfile !== "object") {
    return fallbackProfile;
  }

  const profileRecord = savedProfile as Partial<StudentProfile>;
  const xp = normalizeNonNegativeNumber(profileRecord.xp);
  const unlockedShipIds = normalizeStringList(profileRecord.unlockedShipIds);
  const repairedUnlockedShipIds = uniqueStrings([
    STARTER_SHIP_ID,
    ...unlockedShipIds.filter((shipId) =>
      ships.some((ship) => ship.id === shipId),
    ),
  ]);
  const equippedShipId =
    typeof profileRecord.equippedShipId === "string" &&
    repairedUnlockedShipIds.includes(profileRecord.equippedShipId)
      ? profileRecord.equippedShipId
      : STARTER_SHIP_ID;
  const knownMissionIds = missions.map((mission) => mission.id);
  const knownBadgeIds = badges.map((badge) => badge.id);

  return {
    ...fallbackProfile,
    name:
      typeof profileRecord.name === "string" && profileRecord.name.trim()
        ? profileRecord.name
        : fallbackProfile.name,
    rank: getRankForXp(xp),
    xp,
    stars: normalizeNonNegativeNumber(profileRecord.stars),
    equippedShipId,
    unlockedShipIds: repairedUnlockedShipIds,
    completedMissions: Array.isArray(profileRecord.completedMissions)
      ? profileRecord.completedMissions
          .filter((missionProgress) =>
            knownMissionIds.includes(missionProgress.missionId),
          )
          .map((missionProgress) => ({
            missionId: missionProgress.missionId,
            completed: Boolean(missionProgress.completed),
            highestScore: normalizeNonNegativeNumber(
              missionProgress.highestScore,
            ),
            attempts: normalizeNonNegativeNumber(missionProgress.attempts),
            starsEarned: normalizeNonNegativeNumber(
              missionProgress.starsEarned,
            ),
          }))
      : fallbackProfile.completedMissions,
    unlockedPlanetIds: uniqueStrings([
      STARTER_PLANET_ID,
      ...normalizeStringList(profileRecord.unlockedPlanetIds).filter(
        (planetId) => planets.some((planet) => planet.id === planetId),
      ),
    ]),
    earnedBadgeIds: normalizeStringList(profileRecord.earnedBadgeIds).filter(
      (badgeId) => knownBadgeIds.includes(badgeId),
    ),
    settings: {
      motionEnabled:
        profileRecord.settings?.motionEnabled ??
        fallbackProfile.settings.motionEnabled,
      soundEnabled:
        profileRecord.settings?.soundEnabled ??
        fallbackProfile.settings.soundEnabled,
    },
  };
}

function normalizeNonNegativeNumber(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? Math.floor(value)
    : 0;
}

function normalizeStringList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return uniqueStrings(value.filter((item) => typeof item === "string"));
}

function uniqueStrings(values: string[]): string[] {
  return [...new Set(values)];
}

import { useState } from "react";
import { badges } from "../data/badges";
import { missions } from "../data/missions";
import { planets } from "../data/planets";
import { ships } from "../data/ships";
import type {
  Badge,
  Mission,
  MissionProgress,
  Planet,
  ProfileSettings,
  Ship,
  StudentProfile,
} from "../types";
import { getRankProgress, type RankProgress } from "../utils/ranks";

type DashboardProps = {
  profile: StudentProfile;
  onContinueMission: (missionId: string) => void;
  onEquipShip: (shipId: string) => void;
  onUnlockShip: (shipId: string) => void;
  onUpdateSettings: (settings: ProfileSettings) => void;
  onGrantTestStars: () => void;
  onResetProfile: () => void;
};

function Dashboard({
  profile,
  onContinueMission,
  onEquipShip,
  onUnlockShip,
  onUpdateSettings,
  onGrantTestStars,
  onResetProfile,
}: DashboardProps) {
  const [selectedPlanetId, setSelectedPlanetId] = useState(() =>
    getDefaultPlanetId(profile),
  );
  const completedMissionCount = profile.completedMissions.filter(
    (mission) => mission.completed,
  ).length;
  const activePlanet =
    planets.find((planet) => planet.id === selectedPlanetId) ?? planets[0];
  const activePlanetUnlocked = profile.unlockedPlanetIds.includes(
    activePlanet.id,
  );
  const planetMissions = activePlanet.missionIds
    .map((missionId) => missions.find((mission) => mission.id === missionId))
    .filter((mission): mission is Mission => Boolean(mission));
  const earnedBadgeCount = badges.filter((badge) =>
    profile.earnedBadgeIds.includes(badge.id),
  ).length;
  const rankProgress = getRankProgress(profile.xp);
  const equippedShip = ships.find((ship) => ship.id === profile.equippedShipId);
  const missionStops = getMissionStops(
    planetMissions,
    profile.completedMissions,
    activePlanetUnlocked,
  );
  const recommendedMission = missionStops.find(
    (stop) => stop.state === "ready" || stop.state === "in-progress",
  );

  function handleResetClick() {
    const shouldReset = confirm(
      "Reset this Cosmic Math profile? This clears mission progress, stars, badges, and ships.",
    );

    if (shouldReset) {
      onResetProfile();
    }
  }

  return (
    <main
      className={
        profile.settings.motionEnabled
          ? "dashboard-screen motion-enabled"
          : "dashboard-screen motion-off"
      }
    >
      <section className="panel dashboard-panel">
        <DashboardHero profileName={profile.name} />

        <CurrentObjective
          activePlanet={activePlanet}
          isPlanetUnlocked={activePlanetUnlocked}
          recommendedMission={recommendedMission}
          onContinueMission={onContinueMission}
        />

        <StatsPanel
          completedMissionCount={completedMissionCount}
          profile={profile}
        />
        <RankProgressPanel profile={profile} rankProgress={rankProgress} />
        <PlanetSelector
          completedMissions={profile.completedMissions}
          selectedPlanetId={activePlanet.id}
          unlockedPlanetIds={profile.unlockedPlanetIds}
          onSelectPlanet={setSelectedPlanetId}
        />
        <PlanetOverview
          activePlanet={activePlanet}
          completedMissions={profile.completedMissions}
          equippedShip={equippedShip}
          isUnlocked={activePlanetUnlocked}
        />
        <QuestMap
          activePlanet={activePlanet}
          equippedShip={equippedShip}
          isPlanetUnlocked={activePlanetUnlocked}
          missionStops={missionStops}
          recommendedMission={recommendedMission}
          onContinueMission={onContinueMission}
        />
        <FlightPlan
          missionStops={missionStops}
          recommendedMission={recommendedMission}
          onContinueMission={onContinueMission}
        />
        <ShipHangar
          profile={profile}
          onEquipShip={onEquipShip}
          onUnlockShip={onUnlockShip}
        />
        <BadgeCollection
          badges={badges}
          earnedBadgeCount={earnedBadgeCount}
          earnedBadgeIds={profile.earnedBadgeIds}
        />
        <SettingsPanel
          settings={profile.settings}
          onUpdateSettings={onUpdateSettings}
        />
        <DevTools
          onGrantTestStars={onGrantTestStars}
          onResetProfile={handleResetClick}
        />
      </section>
    </main>
  );
}

type CurrentObjectiveProps = {
  activePlanet: Planet;
  isPlanetUnlocked: boolean;
  recommendedMission?: MissionStop;
  onContinueMission: (missionId: string) => void;
};

function CurrentObjective({
  activePlanet,
  isPlanetUnlocked,
  recommendedMission,
  onContinueMission,
}: CurrentObjectiveProps) {
  const objectiveTitle = recommendedMission
    ? recommendedMission.mission.title
    : isPlanetUnlocked
      ? `${activePlanet.name} complete`
      : `${activePlanet.name} locked`;
  const objectiveCopy = recommendedMission
    ? getObjectiveCopy(recommendedMission, activePlanet)
    : isPlanetUnlocked
      ? "This route is clear. Choose another unlocked planet or replay a mission for practice."
      : "Complete the previous planet route to unlock this destination.";

  return (
    <section className="current-objective">
      <div>
        <p className="eyebrow">Current Objective</p>
        <h2>{objectiveTitle}</h2>
        <p>{objectiveCopy}</p>
      </div>

      {recommendedMission ? (
        <button
          className="objective-action"
          onClick={() => onContinueMission(recommendedMission.mission.id)}
        >
          Launch Next Mission
        </button>
      ) : (
        <span className="objective-status">
          {isPlanetUnlocked ? "Route complete" : "Locked"}
        </span>
      )}
    </section>
  );
}

function getObjectiveCopy(stop: MissionStop, activePlanet: Planet) {
  if (stop.state === "in-progress") {
    return `Resume ${stop.mission.topic} training on ${activePlanet.name}. Improve your best score to keep moving.`;
  }

  return `Start ${stop.mission.topic} training on ${activePlanet.name}. Complete this mission to open the next route stop.`;
}

function DashboardHero({ profileName }: { profileName: string }) {
  return (
    <div className="dashboard-hero">
      <div>
        <p className="eyebrow">Mission Control</p>
        <h1>Welcome, {profileName}</h1>
      </div>

      <div className="dashboard-hero-art">
        <img
          alt=""
          className="dashboard-hero-image"
          src="/hero-dashboard.webp"
        />
      </div>
    </div>
  );
}

type SettingsPanelProps = {
  settings: ProfileSettings;
  onUpdateSettings: (settings: ProfileSettings) => void;
};

function SettingsPanel({ settings, onUpdateSettings }: SettingsPanelProps) {
  function handleToggle(setting: keyof ProfileSettings) {
    onUpdateSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  }

  return (
    <div className="settings-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Settings</p>
          <h2>Experience</h2>
          <p className="section-summary">
            Choose how much feedback the app uses while you play.
          </p>
        </div>
      </div>

      <div className="settings-grid">
        <label className="setting-toggle">
          <input
            checked={settings.motionEnabled}
            onChange={() => handleToggle("motionEnabled")}
            type="checkbox"
          />
          <span className="setting-toggle-control" />
          <span>
            <strong>Motion effects</strong>
            <small>Reward cards, route ship, and earned badges move gently.</small>
          </span>
        </label>

        <label className="setting-toggle">
          <input
            checked={settings.soundEnabled}
            onChange={() => handleToggle("soundEnabled")}
            type="checkbox"
          />
          <span className="setting-toggle-control" />
          <span>
            <strong>Sound effects</strong>
            <small>Correct answers, mission reports, badges, and planet unlocks.</small>
          </span>
        </label>
      </div>
    </div>
  );
}

type MissionStopState =
  | "locked"
  | "ready"
  | "in-progress"
  | "completed"
  | "perfected";

type MissionStop = {
  mission: Mission;
  progress?: MissionProgress;
  state: MissionStopState;
};

function getDefaultPlanetId(profile: StudentProfile) {
  const lastUnlockedPlanetId =
    profile.unlockedPlanetIds[profile.unlockedPlanetIds.length - 1];

  return (
    planets.find(
      (planet) =>
        profile.unlockedPlanetIds.includes(planet.id) &&
        !isPlanetComplete(planet, profile.completedMissions),
    )?.id ??
    lastUnlockedPlanetId ??
    planets[0].id
  );
}

function isPlanetComplete(planet: Planet, progressList: MissionProgress[]) {
  return planet.missionIds.every((missionId) =>
    progressList.some(
      (missionProgress) =>
        missionProgress.missionId === missionId && missionProgress.completed,
    ),
  );
}

function getMissionStops(
  missionList: Mission[],
  progressList: MissionProgress[],
  isPlanetUnlocked: boolean,
): MissionStop[] {
  let routeIsOpen = isPlanetUnlocked;

  return missionList.map((mission) => {
    const progress = progressList.find(
      (missionProgress) => missionProgress.missionId === mission.id,
    );
    const hasQuestions = mission.questionIds.length > 0;
    const isPerfected =
      Boolean(progress?.completed) && progress?.highestScore === 100;
    const state: MissionStopState = !hasQuestions || !routeIsOpen
      ? "locked"
      : isPerfected
        ? "perfected"
        : progress?.completed
          ? "completed"
          : progress
            ? "in-progress"
            : "ready";

    if (!progress?.completed) {
      routeIsOpen = false;
    }

    return {
      mission,
      progress,
      state,
    };
  });
}

type StatsPanelProps = {
  profile: StudentProfile;
  completedMissionCount: number;
};

function StatsPanel({ profile, completedMissionCount }: StatsPanelProps) {
  return (
    <div className="stat-grid">
      <p>
        <span>Rank</span>
        {profile.rank}
      </p>

      <p>
        <span>Stars</span>
        {profile.stars}
      </p>

      <p>
        <span>XP</span>
        {profile.xp}
      </p>

      <p>
        <span>Missions</span>
        {completedMissionCount}
      </p>
    </div>
  );
}

type RankProgressPanelProps = {
  profile: StudentProfile;
  rankProgress: RankProgress;
};

function RankProgressPanel({
  profile,
  rankProgress,
}: RankProgressPanelProps) {
  return (
    <div className="rank-progress-card">
      <div className="rank-progress-header">
        <div>
          <p className="eyebrow">Rank Progress</p>
          <h2>{profile.rank}</h2>
        </div>
        <p className="rank-progress-count">
          {rankProgress.nextRank ? `${rankProgress.progressPercent}%` : "Max rank"}
        </p>
      </div>

      <div className="rank-progress-track">
        <div
          className="rank-progress-fill"
          style={{ width: `${rankProgress.progressPercent}%` }}
        />
      </div>

      <p className="rank-progress-copy">
        {rankProgress.nextRank && rankProgress.nextRankXp
          ? `${profile.xp} / ${rankProgress.nextRankXp} XP toward ${rankProgress.nextRank}`
          : "Galaxy Master reached. Rank training complete."}
      </p>
    </div>
  );
}

type PlanetOverviewProps = {
  activePlanet: Planet;
  completedMissions: MissionProgress[];
  equippedShip?: Ship;
  isUnlocked: boolean;
};

function PlanetOverview({
  activePlanet,
  completedMissions,
  equippedShip,
  isUnlocked,
}: PlanetOverviewProps) {
  const unlockRequirement = getPlanetUnlockRequirement(
    activePlanet,
    completedMissions,
  );

  return (
    <div className={isUnlocked ? "planet-overview" : "planet-overview locked"}>
      <p className="eyebrow">{isUnlocked ? "Current Planet" : "Locked Planet"}</p>
      <h2>{activePlanet.name}</h2>
      <p className="section-summary">{activePlanet.description}</p>
      <p className="ship-line">
        {isUnlocked
          ? `Ship: ${equippedShip?.name ?? "Unknown Ship"}`
          : unlockRequirement}
      </p>
    </div>
  );
}

function getPlanetUnlockRequirement(
  planet: Planet,
  completedMissions: MissionProgress[],
) {
  const planetIndex = planets.findIndex((item) => item.id === planet.id);
  const previousPlanet = planets[planetIndex - 1];

  if (!previousPlanet) {
    return "Ready for launch.";
  }

  const completedCount = previousPlanet.missionIds.filter((missionId) =>
    completedMissions.some(
      (missionProgress) =>
        missionProgress.missionId === missionId && missionProgress.completed,
    ),
  ).length;

  return `Complete ${previousPlanet.name}: ${completedCount}/${previousPlanet.missionIds.length} missions complete.`;
}

type PlanetSelectorProps = {
  completedMissions: MissionProgress[];
  selectedPlanetId: string;
  unlockedPlanetIds: string[];
  onSelectPlanet: (planetId: string) => void;
};

function PlanetSelector({
  completedMissions,
  selectedPlanetId,
  unlockedPlanetIds,
  onSelectPlanet,
}: PlanetSelectorProps) {
  return (
    <div className="planet-selector-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Galaxy Route</p>
          <h2>Planets</h2>
          <p className="section-summary">
            Complete each route to unlock the next planet.
          </p>
        </div>
      </div>

      <div className="planet-selector-grid">
        {planets.map((planet, index) => (
          <PlanetCard
            completedMissions={completedMissions}
            index={index}
            isSelected={selectedPlanetId === planet.id}
            isUnlocked={unlockedPlanetIds.includes(planet.id)}
            key={planet.id}
            planet={planet}
            onSelectPlanet={onSelectPlanet}
          />
        ))}
      </div>
    </div>
  );
}

type PlanetCardProps = {
  completedMissions: MissionProgress[];
  index: number;
  isSelected: boolean;
  isUnlocked: boolean;
  planet: Planet;
  onSelectPlanet: (planetId: string) => void;
};

function PlanetCard({
  completedMissions,
  index,
  isSelected,
  isUnlocked,
  planet,
  onSelectPlanet,
}: PlanetCardProps) {
  const completedCount = planet.missionIds.filter((missionId) =>
    completedMissions.some(
      (missionProgress) =>
        missionProgress.missionId === missionId && missionProgress.completed,
    ),
  ).length;
  const isComplete = completedCount === planet.missionIds.length;
  const isNewPlanet = isUnlocked && !isComplete && completedCount === 0 && index > 0;
  const statusText = isComplete
    ? "Complete"
    : isNewPlanet
      ? "New"
      : isUnlocked
        ? "Unlocked"
        : "Locked";

  return (
    <button
      className={
        isSelected
          ? "planet-selector-card selected"
          : isUnlocked
            ? "planet-selector-card unlocked"
            : "planet-selector-card locked"
      }
      onClick={() => onSelectPlanet(planet.id)}
      type="button"
    >
      <span className="planet-selector-top">
        <span className="mission-number">Planet {index + 1}</span>
        <span
          className={
            isComplete
              ? "status-pill complete"
              : isNewPlanet
                ? "status-pill in-progress"
              : isUnlocked
                ? "status-pill available"
                : "status-pill locked"
          }
        >
          {statusText}
        </span>
      </span>
      <span className="planet-selector-name">{planet.name}</span>
      <span className="planet-selector-progress">
        {completedCount}/{planet.missionIds.length} missions complete
      </span>
    </button>
  );
}

type QuestMapProps = {
  activePlanet: Planet;
  equippedShip?: Ship;
  isPlanetUnlocked: boolean;
  missionStops: MissionStop[];
  recommendedMission?: MissionStop;
  onContinueMission: (missionId: string) => void;
};

function QuestMap({
  activePlanet,
  equippedShip,
  isPlanetUnlocked,
  missionStops,
  recommendedMission,
  onContinueMission,
}: QuestMapProps) {
  return (
    <div className="quest-map-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Quest Map</p>
          <h2>{activePlanet.name} Route</h2>
          <p className="section-summary">
            Follow the mission path and perfect each stop.
          </p>
        </div>
        <p className="collection-count">
          {isPlanetUnlocked
            ? `Next: ${recommendedMission?.mission.title ?? "Route complete"}`
            : "Locked destination"}
        </p>
      </div>

      <div className="quest-map">
        <div className="route-line" />

        {missionStops.map((stop, index) => (
          <QuestNode
            equippedShip={equippedShip}
            index={index}
            isRecommended={stop.mission.id === recommendedMission?.mission.id}
            key={stop.mission.id}
            stop={stop}
            onContinueMission={onContinueMission}
          />
        ))}
      </div>

      <div className="ship-route-card">
        <div className="ship-route-preview">
          <ShipSilhouette shipId={equippedShip?.id} size="small" />
        </div>
        <div>
          <p className="eyebrow">Active Ship</p>
          <h3>{equippedShip?.name ?? "Unknown Ship"}</h3>
          <p>
            {recommendedMission
              ? `Standing by for ${recommendedMission.mission.title}.`
              : isPlanetUnlocked
                ? "This planet route is complete."
                : "Complete the previous planet to launch here."}
          </p>
        </div>
      </div>
    </div>
  );
}

type QuestNodeProps = {
  stop: MissionStop;
  equippedShip?: Ship;
  index: number;
  isRecommended: boolean;
  onContinueMission: (missionId: string) => void;
};

function QuestNode({
  stop,
  equippedShip,
  index,
  isRecommended,
  onContinueMission,
}: QuestNodeProps) {
  const isLocked = stop.state === "locked";
  const statusText = getMissionStateLabel(stop.state);

  return (
    <button
      className={`quest-node ${stop.state}${isRecommended ? " recommended" : ""}`}
      disabled={isLocked}
      onClick={() => onContinueMission(stop.mission.id)}
      type="button"
    >
      <span className="quest-node-orbit">
        <span className="quest-node-number">{index + 1}</span>
      </span>
      <span className="quest-node-copy">
        <span className="quest-node-title">{stop.mission.title}</span>
        <span className="quest-node-topic">{stop.mission.topic}</span>
      </span>
      <span className={`status-pill ${getStatusPillClass(stop.state)}`}>
        {isRecommended ? "Recommended" : statusText}
      </span>
      {isRecommended && (
        <span className="route-ship-marker">
          <ShipSilhouette shipId={equippedShip?.id} size="tiny" />
        </span>
      )}
    </button>
  );
}

type FlightPlanProps = {
  missionStops: MissionStop[];
  recommendedMission?: MissionStop;
  onContinueMission: (missionId: string) => void;
};

function FlightPlan({
  missionStops,
  recommendedMission,
  onContinueMission,
}: FlightPlanProps) {
  return (
    <>
      <div className="mission-list-header">
        <div>
          <p className="eyebrow">Mission Route</p>
          <h2>Missions</h2>
          <p className="section-summary">Launch the next route stop or replay a completed mission.</p>
        </div>
      </div>

      <div className="mission-grid">
        {missionStops.map((stop, index) => (
          <MissionCard
            index={index}
            isRecommended={stop.mission.id === recommendedMission?.mission.id}
            key={stop.mission.id}
            stop={stop}
            onContinueMission={onContinueMission}
          />
        ))}
      </div>
    </>
  );
}

type MissionCardProps = {
  stop: MissionStop;
  index: number;
  isRecommended: boolean;
  onContinueMission: (missionId: string) => void;
};

function MissionCard({
  stop,
  index,
  isRecommended,
  onContinueMission,
}: MissionCardProps) {
  const { mission, progress, state } = stop;
  const isCompleted = Boolean(progress?.completed);
  const isLocked = state === "locked";
  const statusText = getMissionStateLabel(state);
  const missionStateClass = getMissionCardClass(state);
  const actionLabel = isLocked
    ? "Locked"
    : isCompleted
      ? "Replay Mission"
      : progress
        ? "Resume Mission"
        : "Start Mission";
  const stateNote = getMissionStateNote(stop);

  return (
    <article
      className={`mission-card ${missionStateClass}${
        isRecommended ? " recommended" : ""
      }`}
    >
      <div className="mission-card-top">
        <p className="mission-number">Mission {index + 1}</p>
        <span
          className={`status-pill ${getStatusPillClass(state)}`}
        >
          {isRecommended ? "Recommended" : statusText}
        </span>
      </div>

      <h3>{mission.title}</h3>
      <p className="topic-line">{mission.topic}</p>
      <p>{mission.briefing}</p>

      <div className="mission-meta">
        <p>
          <span>Best</span>
          {progress ? `${progress.highestScore}%` : "New"}
        </p>
        <p>
          <span>Attempts</span>
          {progress?.attempts ?? 0}
        </p>
        <p>
          <span>Reward</span>
          {mission.xpReward} XP
        </p>
        <p>
          <span>Stars</span>
          {progress?.starsEarned ?? 0}/{mission.starReward}
        </p>
      </div>

      <p className="mission-state-note">{stateNote}</p>

      <button
        disabled={isLocked}
        onClick={() => onContinueMission(mission.id)}
      >
        {actionLabel}
      </button>
    </article>
  );
}

function getMissionStateLabel(state: MissionStopState) {
  switch (state) {
    case "perfected":
      return "Perfected";
    case "completed":
      return "Complete";
    case "in-progress":
      return "In Progress";
    case "locked":
      return "Locked";
    case "ready":
      return "Ready";
  }
}

function getMissionCardClass(state: MissionStopState) {
  if (state === "ready") {
    return "available";
  }

  if (state === "perfected") {
    return "perfected";
  }

  return state;
}

function getStatusPillClass(state: MissionStopState) {
  if (state === "ready") {
    return "available";
  }

  if (state === "perfected" || state === "completed") {
    return "complete";
  }

  return state;
}

function getMissionStateNote({ mission, progress, state }: MissionStop) {
  switch (state) {
    case "perfected":
      return "Perfect score earned. Replay anytime for practice.";
    case "completed":
      return "Route stop complete. Replay to aim for 100%.";
    case "in-progress":
      return "Try again to improve your best score and rewards.";
    case "locked":
      return mission.questionIds.length === 0
        ? "Locked until mission questions are added."
        : "Complete the previous mission to unlock this stop.";
    case "ready":
      return progress ? "Ready for another attempt." : "Recommended next launch.";
  }
}

type ShipHangarProps = {
  profile: StudentProfile;
  onEquipShip: (shipId: string) => void;
  onUnlockShip: (shipId: string) => void;
};

function ShipHangar({
  profile,
  onEquipShip,
  onUnlockShip,
}: ShipHangarProps) {
  return (
    <div className="hangar-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Ship Hangar</p>
          <h2>Fleet</h2>
          <p className="section-summary">
            Unlock ships with stars and equip your favorite.
          </p>
        </div>
        <p className="collection-count">{profile.stars} stars available</p>
      </div>

      <div className="ship-grid">
        {ships.map((ship) => (
          <ShipCard
            key={ship.id}
            profile={profile}
            ship={ship}
            onEquipShip={onEquipShip}
            onUnlockShip={onUnlockShip}
          />
        ))}
      </div>
    </div>
  );
}

type ShipCardProps = {
  ship: Ship;
  profile: StudentProfile;
  onEquipShip: (shipId: string) => void;
  onUnlockShip: (shipId: string) => void;
};

function ShipCard({
  ship,
  profile,
  onEquipShip,
  onUnlockShip,
}: ShipCardProps) {
  const isEquipped = profile.equippedShipId === ship.id;
  const isOwned = profile.unlockedShipIds.includes(ship.id);
  const canUnlock = !isOwned && profile.stars >= ship.price;
  const starsNeeded = Math.max(0, ship.price - profile.stars);
  const shipState = isEquipped
    ? "Equipped"
    : isOwned
      ? "Owned"
      : canUnlock
        ? "Unlockable"
        : "Locked";

  return (
    <article
      className={
        isEquipped
          ? "ship-card equipped"
          : isOwned
            ? "ship-card owned"
            : canUnlock
              ? "ship-card unlockable"
              : "ship-card locked"
      }
    >
      <div className="ship-card-top">
        <div>
          <p className="mission-number">
            {ship.isStarter ? "Starter Ship" : "Unlockable Ship"}
          </p>
          <h3>{ship.name}</h3>
        </div>
        <span
          className={
            isEquipped
              ? "status-pill complete"
              : isOwned
                ? "status-pill available"
                : canUnlock
                  ? "status-pill in-progress"
                  : "status-pill locked"
          }
        >
          {shipState}
        </span>
      </div>

      <div className="ship-preview">
        <ShipSilhouette shipId={ship.id} size="large" />
      </div>

      <div className="ship-meta">
        <p>
          <span>Cost</span>
          {ship.price === 0 ? "Free" : `${ship.price} stars`}
        </p>
        <p>
          <span>Status</span>
          {canUnlock ? "Ready" : shipState}
        </p>
      </div>

      <p
        className={
          isOwned || canUnlock
            ? "ship-affordability ready"
            : "ship-affordability short"
        }
      >
        {isEquipped
          ? "Currently equipped."
          : isOwned
            ? "Owned and ready to equip."
            : canUnlock
              ? "Ready to unlock."
              : `Need ${starsNeeded} more stars.`}
      </p>

      {isOwned ? (
        <button disabled={isEquipped} onClick={() => onEquipShip(ship.id)}>
          {isEquipped ? "Equipped" : "Equip Ship"}
        </button>
      ) : (
        <button disabled={!canUnlock} onClick={() => onUnlockShip(ship.id)}>
          {canUnlock ? "Unlock Ship" : `Need ${starsNeeded} stars`}
        </button>
      )}
    </article>
  );
}

type ShipSilhouetteProps = {
  shipId?: string;
  size: "tiny" | "small" | "large";
};

function ShipSilhouette({ shipId = "explorer-shuttle", size }: ShipSilhouetteProps) {
  return (
    <span className={`ship-silhouette ${shipId} ${size}`} aria-hidden="true">
      <span className="ship-flame" />
      <span className="ship-wing left" />
      <span className="ship-body" />
      <span className="ship-wing right" />
      <span className="ship-window" />
    </span>
  );
}

type BadgeCollectionProps = {
  badges: Badge[];
  earnedBadgeCount: number;
  earnedBadgeIds: string[];
};

function BadgeCollection({
  badges: badgeList,
  earnedBadgeCount,
  earnedBadgeIds,
}: BadgeCollectionProps) {
  return (
    <div className="badge-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Badge Collection</p>
          <h2>Achievements</h2>
          <p className="section-summary">
            Earn badges by scoring 100% on missions.
          </p>
        </div>
        <p className="collection-count">
          {earnedBadgeCount}/{badgeList.length} earned
        </p>
      </div>

      <div className="badge-grid">
        {badgeList.map((badge) => (
          <BadgeCard
            badge={badge}
            isEarned={earnedBadgeIds.includes(badge.id)}
            key={badge.id}
          />
        ))}
      </div>
    </div>
  );
}

type BadgeCardProps = {
  badge: Badge;
  isEarned: boolean;
};

function BadgeCard({ badge, isEarned }: BadgeCardProps) {
  return (
    <article className={isEarned ? "badge-card earned" : "badge-card locked"}>
      <div className="badge-icon" title={isEarned ? badge.icon : "Locked badge"}>
        <span>{isEarned ? getBadgeInitials(badge.name) : "?"}</span>
      </div>
      <div>
        <div className="badge-card-top">
          <h3>{badge.name}</h3>
          <span
            className={isEarned ? "status-pill complete" : "status-pill locked"}
          >
            {isEarned ? "Earned" : "Locked"}
          </span>
        </div>
        <p>{badge.description}</p>
      </div>
    </article>
  );
}

function getBadgeInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);
}

type DevToolsProps = {
  onGrantTestStars: () => void;
  onResetProfile: () => void;
};

function DevTools({ onGrantTestStars, onResetProfile }: DevToolsProps) {
  return (
    <div className="dev-tools">
      <div>
        <p className="eyebrow">Dev Tools</p>
        <h2>Test Profile</h2>
        <p>
          Use these controls while checking progress, rewards, and ships.
        </p>
      </div>

      <div className="dev-tool-actions">
        <button className="secondary-button" onClick={onGrantTestStars}>
          Grant 100 Stars
        </button>
        <button className="danger-button" onClick={onResetProfile}>
          Reset Profile
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

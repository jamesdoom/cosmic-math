import { useState } from "react";
import Home from "./pages/Home";
import { loadSavedProfile, resetProfile, saveProfile } from "./utils/storage";
import Dashboard from "./pages/Dashboard";
import Mission from "./pages/Mission";
import type { ProfileSettings, StudentProfile } from "./types";
import { ships } from "./data/ships";

function App() {
  const [profile, setProfile] = useState<StudentProfile | null>(() =>
    loadSavedProfile(),
  );
  const [selectedMissionId, setSelectedMissionId] = useState(
    "fuel-speed-academy",
  );

  const [currentScreen, setCurrentScreen] = useState<"dashboard" | "mission">(
    "dashboard",
  );

  function handleStart(newProfile: StudentProfile) {
    setProfile(newProfile);
    setCurrentScreen("dashboard");
  }

  function handleProfileUpdate(updatedProfile: StudentProfile) {
    saveProfile(updatedProfile);
    setProfile(updatedProfile);
  }

  function handleSelectMission(missionId: string) {
    setSelectedMissionId(missionId);
    setCurrentScreen("mission");
  }

  function handleEquipShip(shipId: string) {
    setProfile((currentProfile) => {
      if (!currentProfile || !currentProfile.unlockedShipIds.includes(shipId)) {
        return currentProfile;
      }

      const updatedProfile = {
        ...currentProfile,
        equippedShipId: shipId,
      };

      saveProfile(updatedProfile);

      return updatedProfile;
    });
  }

  function handleUnlockShip(shipId: string) {
    const ship = ships.find((item) => item.id === shipId);

    if (!ship) {
      return;
    }

    setProfile((currentProfile) => {
      if (
        !currentProfile ||
        currentProfile.unlockedShipIds.includes(ship.id) ||
        currentProfile.stars < ship.price
      ) {
        return currentProfile;
      }

      const updatedProfile = {
        ...currentProfile,
        stars: currentProfile.stars - ship.price,
        unlockedShipIds: [...currentProfile.unlockedShipIds, ship.id],
      };

      saveProfile(updatedProfile);

      return updatedProfile;
    });
  }

  function handleGrantTestStars() {
    setProfile((currentProfile) => {
      if (!currentProfile) {
        return currentProfile;
      }

      const updatedProfile = {
        ...currentProfile,
        stars: currentProfile.stars + 100,
      };

      saveProfile(updatedProfile);

      return updatedProfile;
    });
  }

  function handleUpdateSettings(settings: ProfileSettings) {
    setProfile((currentProfile) => {
      if (!currentProfile) {
        return currentProfile;
      }

      const updatedProfile = {
        ...currentProfile,
        settings,
      };

      saveProfile(updatedProfile);

      return updatedProfile;
    });
  }

  function handleResetProfile() {
    resetProfile();
    setProfile(null);
    setCurrentScreen("dashboard");
    setSelectedMissionId("fuel-speed-academy");
  }

  if (!profile) {
    return <Home onStart={handleStart} />;
  }

  if (currentScreen === "mission") {
    return (
      <Mission
        missionId={selectedMissionId}
        profile={profile}
        onProfileUpdate={handleProfileUpdate}
        onBackToDashboard={() => setCurrentScreen("dashboard")}
      />
    );
  }

  return (
    <Dashboard
      profile={profile}
      onContinueMission={handleSelectMission}
      onEquipShip={handleEquipShip}
        onUnlockShip={handleUnlockShip}
        onUpdateSettings={handleUpdateSettings}
        onGrantTestStars={handleGrantTestStars}
        onResetProfile={handleResetProfile}
      />
  );
}

export default App;

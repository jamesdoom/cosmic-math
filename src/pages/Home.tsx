import { useState } from "react";
import { createDefaultProfile, saveProfile } from "../utils/storage";
import type { StudentProfile } from "../types";

type HomeProps = {
  onStart: (profile: StudentProfile) => void;
};

function Home({ onStart }: HomeProps) {
  const [name, setName] = useState("");

  function handleStart() {
    const profile = createDefaultProfile(name.trim() || "Cadet");

    saveProfile(profile);

    onStart(profile);
  }

  return (
    <main className="home-screen">
      <section className="panel home-panel">
        <p className="eyebrow">Space Academy</p>
        <h1>Cosmic Math</h1>

        <p>Explore the universe. Master math.</p>

        <label>
          <span>Astronaut name</span>
          <input
            type="text"
            placeholder="Cadet"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <button onClick={handleStart}>Start Mission</button>
      </section>
    </main>
  );
}

export default Home;

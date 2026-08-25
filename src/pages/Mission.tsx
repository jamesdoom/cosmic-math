import { useState } from "react";
import { badges } from "../data/badges";
import { missions } from "../data/missions";
import { planets } from "../data/planets";
import { questions } from "../data/questions";
import type {
  Badge,
  Mission as MissionData,
  MissionProgress,
  Question,
  StudentProfile,
} from "../types";
import { getRankForXp } from "../utils/ranks";

type MissionProps = {
  missionId: string;
  profile: StudentProfile;
  onProfileUpdate: (profile: StudentProfile) => void;
  onBackToDashboard: () => void;
};

type AnswerRecord = {
  questionId: string;
  submittedAnswer: string;
  correctAnswer: string;
  prompt: string;
  explanation: string;
  correct: boolean;
  starsEarned: number;
};

type AttemptSummary = {
  score: number;
  correctCount: number;
  totalQuestions: number;
  previousBestScore: number;
  bestScore: number;
  improvedBest: boolean;
  starsThisAttempt: number;
  newStarsEarned: number;
  xpThisAttempt: number;
  newXpEarned: number;
  badgeEarned: boolean;
  badgeAlreadyEarned: boolean;
  completed: boolean;
  previousRank: string;
  nextRank: string;
  unlockedPlanetName?: string;
  answerReview: AnswerRecord[];
};

type Feedback = {
  correct: boolean;
  explanation: string;
};

function normalizeAnswer(answer: string | number): string {
  return String(answer).trim().toLowerCase();
}

function isCorrectAnswer(answer: string, correctAnswer: string | number): boolean {
  if (typeof correctAnswer === "number") {
    const submittedNumber = Number(answer.trim());

    return (
      Number.isFinite(submittedNumber) &&
      Math.abs(submittedNumber - correctAnswer) < 0.001
    );
  }

  return normalizeAnswer(answer) === normalizeAnswer(correctAnswer);
}

function scoreAttempt(answers: AnswerRecord[], totalQuestions: number): number {
  if (totalQuestions === 0) {
    return 0;
  }

  const correctCount = answers.filter((answer) => answer.correct).length;

  return Math.round((correctCount / totalQuestions) * 100);
}

function updateMissionProgress(
  progress: MissionProgress[],
  nextProgress: MissionProgress,
): MissionProgress[] {
  const existingProgress = progress.find(
    (missionProgress) => missionProgress.missionId === nextProgress.missionId,
  );

  if (!existingProgress) {
    return [...progress, nextProgress];
  }

  return progress.map((missionProgress) =>
    missionProgress.missionId === nextProgress.missionId
      ? nextProgress
      : missionProgress,
  );
}

function getUnlockedPlanetsAfterMission(
  unlockedPlanetIds: string[],
  completedMissions: MissionProgress[],
  activeMission: MissionData,
): string[] {
  const activePlanetIndex = planets.findIndex(
    (planet) => planet.id === activeMission.planetId,
  );
  const activePlanet = planets[activePlanetIndex];
  const nextPlanet = planets[activePlanetIndex + 1];

  if (!activePlanet || !nextPlanet || unlockedPlanetIds.includes(nextPlanet.id)) {
    return unlockedPlanetIds;
  }

  const activePlanetComplete = activePlanet.missionIds.every((missionId) =>
    completedMissions.some(
      (missionProgress) =>
        missionProgress.missionId === missionId && missionProgress.completed,
    ),
  );

  return activePlanetComplete
    ? [...unlockedPlanetIds, nextPlanet.id]
    : unlockedPlanetIds;
}

function getNewlyUnlockedPlanetName(
  previousPlanetIds: string[],
  nextPlanetIds: string[],
): string | undefined {
  const newlyUnlockedPlanetId = nextPlanetIds.find(
    (planetId) => !previousPlanetIds.includes(planetId),
  );

  return planets.find((planet) => planet.id === newlyUnlockedPlanetId)?.name;
}

type SoundCue = "correct" | "incorrect" | "complete" | "badge" | "planet";

function playSoundCue(cue: SoundCue, soundEnabled: boolean) {
  if (!soundEnabled) {
    return;
  }

  const audioWindow = window as Window &
    typeof globalThis & {
      webkitAudioContext?: typeof AudioContext;
    };
  const AudioContextConstructor =
    audioWindow.AudioContext ?? audioWindow.webkitAudioContext;

  if (!AudioContextConstructor) {
    return;
  }

  const audioContext = new AudioContextConstructor();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const frequencyByCue: Record<SoundCue, number> = {
    correct: 660,
    incorrect: 220,
    complete: 880,
    badge: 990,
    planet: 1046,
  };

  oscillator.frequency.value = frequencyByCue[cue];
  oscillator.type = cue === "incorrect" ? "triangle" : "sine";
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.22);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.24);
  oscillator.addEventListener("ended", () => void audioContext.close());
}

function Mission({
  missionId,
  profile,
  onProfileUpdate,
  onBackToDashboard,
}: MissionProps) {
  const mission = missions.find((item) => item.id === missionId);
  const [questionIndex, setQuestionIndex] = useQuestionIndex();
  const [answer, setAnswer] = useAnswer();
  const [showHint, setShowHint] = useHint();
  const [feedback, setFeedback] = useFeedback();
  const [answers, setAnswers] = useAnswers();
  const [summary, setSummary] = useSummary();
  const [missionStarted, setMissionStarted] = useMissionStarted();

  if (!mission) {
    return <main>Mission not found.</main>;
  }

  const activeMission = mission;
  const missionQuestions = questions.filter((question) =>
    activeMission.questionIds.includes(question.id),
  );
  const currentQuestion = missionQuestions[questionIndex];
  const savedProgress = profile.completedMissions.find(
    (item) => item.missionId === activeMission.id,
  );
  const badgeReward = badges.find(
    (badge) => badge.id === activeMission.badgeRewardId,
  );

  function completeAttempt(attemptAnswers: AnswerRecord[]) {
    const score = scoreAttempt(attemptAnswers, missionQuestions.length);
    const correctCount = attemptAnswers.filter((item) => item.correct).length;
    const starsEarned = attemptAnswers.reduce(
      (total, item) => total + item.starsEarned,
      0,
    );
    const previousProgress = profile.completedMissions.find(
      (item) => item.missionId === activeMission.id,
    );
    const previousScore = previousProgress?.highestScore ?? 0;
    const previousStars = previousProgress?.starsEarned ?? 0;
    const nextHighestScore = Math.max(previousScore, score);
    const improvedBest = score > previousScore;
    const completed = previousProgress?.completed || score === 100;
    const nextProgress: MissionProgress = {
      missionId: activeMission.id,
      completed,
      highestScore: nextHighestScore,
      attempts: (previousProgress?.attempts ?? 0) + 1,
      starsEarned: Math.max(previousStars, starsEarned),
    };
    const nextCompletedMissions = updateMissionProgress(
      profile.completedMissions,
      nextProgress,
    );
    const previousXpReward = Math.round(
      activeMission.xpReward * (previousScore / 100),
    );
    const nextXpReward = Math.round(
      activeMission.xpReward * (nextHighestScore / 100),
    );
    const xpThisAttempt = Math.round(activeMission.xpReward * (score / 100));
    const xpEarned = Math.max(0, nextXpReward - previousXpReward);
    const starDelta = Math.max(0, starsEarned - previousStars);
    const badgeAlreadyEarned = profile.earnedBadgeIds.includes(
      activeMission.badgeRewardId,
    );
    const badgeEarned = score === 100 && !badgeAlreadyEarned;
    const nextXp = profile.xp + xpEarned;
    const nextRank = getRankForXp(nextXp);
    const nextUnlockedPlanetIds = getUnlockedPlanetsAfterMission(
      profile.unlockedPlanetIds,
      nextCompletedMissions,
      activeMission,
    );
    const unlockedPlanetName = getNewlyUnlockedPlanetName(
      profile.unlockedPlanetIds,
      nextUnlockedPlanetIds,
    );
    const updatedProfile: StudentProfile = {
      ...profile,
      xp: nextXp,
      rank: nextRank,
      stars: profile.stars + starDelta,
      completedMissions: nextCompletedMissions,
      unlockedPlanetIds: nextUnlockedPlanetIds,
      earnedBadgeIds: badgeEarned
        ? [...profile.earnedBadgeIds, activeMission.badgeRewardId]
        : profile.earnedBadgeIds,
    };

    onProfileUpdate(updatedProfile);
    setSummary({
      score,
      correctCount,
      totalQuestions: missionQuestions.length,
      previousBestScore: previousScore,
      bestScore: nextHighestScore,
      improvedBest,
      starsThisAttempt: starsEarned,
      newStarsEarned: starDelta,
      xpThisAttempt,
      newXpEarned: xpEarned,
      badgeEarned,
      badgeAlreadyEarned,
      completed,
      previousRank: profile.rank,
      nextRank,
      unlockedPlanetName,
      answerReview: attemptAnswers,
    });
    playSoundCue(
      unlockedPlanetName
        ? "planet"
        : badgeEarned
          ? "badge"
          : score === 100
            ? "complete"
            : "incorrect",
      profile.settings.soundEnabled,
    );
  }

  function handleSubmit(question: Question) {
    if (!answer.trim() || feedback) {
      return;
    }

    const correct = isCorrectAnswer(answer, question.correctAnswer);
    playSoundCue(
      correct ? "correct" : "incorrect",
      profile.settings.soundEnabled,
    );
    const answerRecord: AnswerRecord = {
      questionId: question.id,
      submittedAnswer: answer.trim(),
      correctAnswer: String(question.correctAnswer),
      prompt: question.prompt,
      explanation: question.explanation,
      correct,
      starsEarned: correct ? question.starReward : 0,
    };

    setAnswers((currentAnswers) => [...currentAnswers, answerRecord]);
    setFeedback({
      correct,
      explanation: question.explanation,
    });
  }

  function handleNext() {
    const isLastQuestion = questionIndex === missionQuestions.length - 1;

    if (isLastQuestion) {
      completeAttempt(answers);
      return;
    }

    setQuestionIndex((currentIndex) => currentIndex + 1);
    setAnswer("");
    setShowHint(false);
    setFeedback(null);
  }

  function resetAttempt() {
    setQuestionIndex(0);
    setAnswer("");
    setShowHint(false);
    setFeedback(null);
    setAnswers([]);
    setSummary(null);
    setMissionStarted(true);
  }

  function handleBackDuringMission() {
    if (answers.length === 0 && !answer.trim()) {
      onBackToDashboard();
      return;
    }

    const shouldLeave = confirm(
      "Return to Mission Control? Your current answers will not be saved.",
    );

    if (shouldLeave) {
      onBackToDashboard();
    }
  }

  if (summary) {
    return (
      <MissionReport
        activeMission={activeMission}
        badgeReward={badgeReward}
        motionEnabled={profile.settings.motionEnabled}
        onBackToDashboard={onBackToDashboard}
        onReplayMission={resetAttempt}
        summary={summary}
      />
    );
  }

  if (!currentQuestion) {
    return (
      <EmptyMission
        activeMission={activeMission}
        motionEnabled={profile.settings.motionEnabled}
        onBackToDashboard={onBackToDashboard}
      />
    );
  }

  if (!missionStarted) {
    return (
      <MissionIntro
        activeMission={activeMission}
        badgeReward={badgeReward}
        motionEnabled={profile.settings.motionEnabled}
        missionQuestions={missionQuestions}
        onBackToDashboard={onBackToDashboard}
        onBeginMission={() => setMissionStarted(true)}
        savedProgress={savedProgress}
      />
    );
  }

  return (
    <ActiveQuestion
      activeMission={activeMission}
      answer={answer}
      currentQuestion={currentQuestion}
      feedback={feedback}
      motionEnabled={profile.settings.motionEnabled}
      missionQuestions={missionQuestions}
      onAnswerChange={setAnswer}
      onBackDuringMission={handleBackDuringMission}
      onNext={handleNext}
      onSubmit={handleSubmit}
      questionIndex={questionIndex}
      savedProgress={savedProgress}
      setShowHint={setShowHint}
      showHint={showHint}
    />
  );
}

type MissionReportProps = {
  activeMission: MissionData;
  badgeReward?: Badge;
  motionEnabled: boolean;
  summary: AttemptSummary;
  onReplayMission: () => void;
  onBackToDashboard: () => void;
};

function MissionReport({
  activeMission,
  badgeReward,
  motionEnabled,
  summary,
  onReplayMission,
  onBackToDashboard,
}: MissionReportProps) {
  const rankedUp = summary.previousRank !== summary.nextRank;
  const badgeStatus = summary.badgeEarned
    ? `Badge earned: ${badgeReward?.name ?? "Mission Badge"}`
      : summary.badgeAlreadyEarned
        ? `Badge already earned: ${badgeReward?.name ?? "Mission Badge"}`
      : "Score 100% to earn this badge.";

  return (
    <main
      className={
        motionEnabled ? "mission-screen motion-enabled" : "mission-screen motion-off"
      }
    >
      <section className="panel mission-panel">
        <p className="eyebrow">Mission Report</p>
        <h1>{activeMission.title}</h1>

        <RewardHighlights
          badgeName={badgeReward?.name ?? "Mission Badge"}
          summary={summary}
        />

        <SummaryGrid summary={summary} />

        <p className={summary.completed ? "success-text" : "notice-text"}>
          {summary.completed
            ? `Perfect flight. ${activeMission.title} is complete.`
            : "Good effort. Replay when you are ready to raise your best score."}
        </p>

        <RewardBreakdown
          badgeName={badgeReward?.name ?? "Mission Badge"}
          badgeStatus={badgeStatus}
          summary={summary}
        />

        <p className={rankedUp ? "badge-callout" : "rank-callout"}>
          {rankedUp
            ? `Rank up: ${summary.previousRank} to ${summary.nextRank}.`
            : `Rank unchanged: ${summary.nextRank}.`}
        </p>

        {summary.unlockedPlanetName && (
          <div className="planet-unlock-callout">
            <p className="eyebrow">New Route Unlocked</p>
            <h2>{summary.unlockedPlanetName}</h2>
            <p>
              Your next route is ready. Return to Mission Control to launch
              from the new destination.
            </p>
          </div>
        )}

        <AnswerReview answerReview={summary.answerReview} />

        <div className="mission-actions report-actions">
          <button onClick={onReplayMission}>Replay Mission</button>
          <button className="secondary-button" onClick={onBackToDashboard}>
            {summary.unlockedPlanetName
              ? `Go to ${summary.unlockedPlanetName}`
              : "Return to Mission Control"}
          </button>
        </div>
      </section>
    </main>
  );
}

type RewardHighlightsProps = {
  badgeName: string;
  summary: AttemptSummary;
};

function RewardHighlights({ badgeName, summary }: RewardHighlightsProps) {
  const rewardItems = [
    {
      label: "Stars",
      value: `+${summary.newStarsEarned}`,
      detail: `${summary.starsThisAttempt} stars this run`,
      tone: summary.newStarsEarned > 0 ? "earned" : "quiet",
    },
    {
      label: "XP",
      value: `+${summary.newXpEarned}`,
      detail: `${summary.xpThisAttempt} XP this run`,
      tone: summary.newXpEarned > 0 ? "earned" : "quiet",
    },
    {
      label: "Badge",
      value: summary.badgeEarned ? "Earned" : "Pending",
      detail: summary.badgeEarned ? badgeName : "Score 100% to earn it",
      tone: summary.badgeEarned ? "earned" : "quiet",
    },
    {
      label: "Route",
      value: summary.unlockedPlanetName ? "Unlocked" : "No change",
      detail: summary.unlockedPlanetName ?? "Keep clearing the route",
      tone: summary.unlockedPlanetName ? "earned" : "quiet",
    },
  ];

  return (
    <div className="reward-highlight-grid">
      {rewardItems.map((item) => (
        <article
          className={`reward-highlight-card ${item.tone}`}
          key={item.label}
        >
          <p className="eyebrow">{item.label}</p>
          <h2>{item.value}</h2>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}

function SummaryGrid({ summary }: { summary: AttemptSummary }) {
  return (
    <div className="summary-grid">
      <p>
        <span>Score</span>
        {summary.score}%
      </p>
      <p>
        <span>Correct</span>
        {summary.correctCount}/{summary.totalQuestions}
      </p>
      <p>
        <span>Previous Best</span>
        {summary.previousBestScore}%
      </p>
      <p>
        <span>Best Score</span>
        {summary.bestScore}%
      </p>
    </div>
  );
}

type RewardBreakdownProps = {
  badgeName: string;
  badgeStatus: string;
  summary: AttemptSummary;
};

function RewardBreakdown({
  badgeName,
  badgeStatus,
  summary,
}: RewardBreakdownProps) {
  return (
    <div className="reward-breakdown">
      <article>
        <p className="eyebrow">Best Score</p>
        <h2>
          {summary.improvedBest ? "New mission best" : "Best score unchanged"}
        </h2>
        <p>
          Previous best: {summary.previousBestScore}%. This run:{" "}
          {summary.score}%.
        </p>
      </article>

      <article>
        <p className="eyebrow">Stars</p>
        <h2>{summary.newStarsEarned} new stars</h2>
        <p>
          This run earned {summary.starsThisAttempt} stars. Your profile gained{" "}
          {summary.newStarsEarned} based on your saved best.
        </p>
      </article>

      <article>
        <p className="eyebrow">XP</p>
        <h2>{summary.newXpEarned} new XP</h2>
        <p>
          This run was worth {summary.xpThisAttempt} XP. Your profile gained{" "}
          {summary.newXpEarned} XP from your improved best score.
        </p>
      </article>

      <article>
        <p className="eyebrow">Badge</p>
        <h2>{badgeName}</h2>
        <p>{badgeStatus}</p>
      </article>
    </div>
  );
}

function AnswerReview({ answerReview }: { answerReview: AnswerRecord[] }) {
  return (
    <div className="answer-review-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Answer Review</p>
          <h2>Flight Debrief</h2>
        </div>
      </div>

      <div className="answer-review-list">
        {answerReview.map((reviewItem, index) => (
          <article
            className={
              reviewItem.correct
                ? "answer-review-card correct-answer"
                : "answer-review-card missed-answer"
            }
            key={reviewItem.questionId}
          >
            <div className="answer-review-top">
              <p className="mission-number">Question {index + 1}</p>
              <span
                className={
                  reviewItem.correct
                    ? "status-pill complete"
                    : "status-pill locked"
                }
              >
                {reviewItem.correct ? "Correct" : "Review"}
              </span>
            </div>

            <h3>{reviewItem.prompt}</h3>

            <div className="answer-review-grid">
              <p>
                <span>Your Answer</span>
                {reviewItem.submittedAnswer}
              </p>
              <p>
                <span>Correct Answer</span>
                {reviewItem.correctAnswer}
              </p>
            </div>

            <p className="answer-explanation">{reviewItem.explanation}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

type EmptyMissionProps = {
  activeMission: MissionData;
  motionEnabled: boolean;
  onBackToDashboard: () => void;
};

function EmptyMission({
  activeMission,
  motionEnabled,
  onBackToDashboard,
}: EmptyMissionProps) {
  return (
    <main
      className={
        motionEnabled ? "mission-screen motion-enabled" : "mission-screen motion-off"
      }
    >
      <section className="panel mission-panel">
        <h1>{activeMission.title}</h1>
        <p>This mission is still being prepared.</p>
        <button onClick={onBackToDashboard}>Return to Mission Control</button>
      </section>
    </main>
  );
}

type MissionIntroProps = {
  activeMission: MissionData;
  badgeReward?: Badge;
  motionEnabled: boolean;
  missionQuestions: Question[];
  savedProgress?: MissionProgress;
  onBeginMission: () => void;
  onBackToDashboard: () => void;
};

function MissionIntro({
  activeMission,
  badgeReward,
  motionEnabled,
  missionQuestions,
  savedProgress,
  onBeginMission,
  onBackToDashboard,
}: MissionIntroProps) {
  return (
    <main
      className={
        motionEnabled ? "mission-screen motion-enabled" : "mission-screen motion-off"
      }
    >
      <section className="panel mission-panel">
        <div className="mission-intro">
          <p className="eyebrow">Launch Briefing</p>
          <h1>{activeMission.title}</h1>
          <p>{activeMission.briefing}</p>

          <div className="intro-grid">
            <p>
              <span>Topic</span>
              {activeMission.topic}
            </p>
            <p>
              <span>Questions</span>
              {missionQuestions.length}
            </p>
            <p>
              <span>Reward</span>
              {activeMission.xpReward} XP
            </p>
            <p>
              <span>Stars</span>
              Up to {activeMission.starReward}
            </p>
          </div>

          <MissionProgressStrip
            activeMission={activeMission}
            badgeReward={badgeReward}
            savedProgress={savedProgress}
            variant="intro"
          />

          <div className="mission-actions">
            <button onClick={onBeginMission}>Begin Mission</button>
            <button className="secondary-button" onClick={onBackToDashboard}>
              Return to Mission Control
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

type ActiveQuestionProps = {
  activeMission: MissionData;
  answer: string;
  currentQuestion: Question;
  feedback: Feedback | null;
  motionEnabled: boolean;
  missionQuestions: Question[];
  questionIndex: number;
  savedProgress?: MissionProgress;
  showHint: boolean;
  onAnswerChange: (answer: string) => void;
  onBackDuringMission: () => void;
  onNext: () => void;
  onSubmit: (question: Question) => void;
  setShowHint: (value: boolean | ((current: boolean) => boolean)) => void;
};

function ActiveQuestion({
  activeMission,
  answer,
  currentQuestion,
  feedback,
  motionEnabled,
  missionQuestions,
  questionIndex,
  savedProgress,
  showHint,
  onAnswerChange,
  onBackDuringMission,
  onNext,
  onSubmit,
  setShowHint,
}: ActiveQuestionProps) {
  return (
    <main
      className={
        motionEnabled ? "mission-screen motion-enabled" : "mission-screen motion-off"
      }
    >
      <section className="panel mission-panel">
        <div className="mission-header">
          <div>
            <p className="eyebrow">Question {questionIndex + 1}</p>
            <h1>{activeMission.title}</h1>
            <p>{activeMission.briefing}</p>
          </div>

          <div className="mission-header-actions">
            <p className="progress-pill">
              {questionIndex + 1}/{missionQuestions.length}
            </p>
            <button className="secondary-button" onClick={onBackDuringMission}>
              Mission Control
            </button>
          </div>
        </div>

        <MissionProgressStrip
          activeMission={activeMission}
          savedProgress={savedProgress}
          variant="active"
        />

        <article className="question-card">
          <div className="question-meta-row">
            <p className="topic-line">Topic: {activeMission.topic}</p>
            <span className={`difficulty-pill ${currentQuestion.difficulty}`}>
              {currentQuestion.difficulty}
            </span>
          </div>
          <h2 className="question-prompt">{currentQuestion.prompt}</h2>

          <QuestionAnswerControl
            answer={answer}
            currentQuestion={currentQuestion}
            feedback={feedback}
            onAnswerChange={onAnswerChange}
          />

          <div className="mission-actions">
            {currentQuestion.hint && !feedback && (
              <button
                className="secondary-button"
                onClick={() => setShowHint((current) => !current)}
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>
            )}

            {!feedback ? (
              <button
                disabled={!answer.trim()}
                onClick={() => onSubmit(currentQuestion)}
              >
                Check Answer
              </button>
            ) : (
              <button onClick={onNext}>
                {questionIndex === missionQuestions.length - 1
                  ? "Finish Mission"
                  : "Next Question"}
              </button>
            )}
          </div>

          {showHint && currentQuestion.hint && (
            <p className="hint-text">{currentQuestion.hint}</p>
          )}

          {feedback && <QuestionFeedback feedback={feedback} />}
        </article>
      </section>
    </main>
  );
}

type MissionProgressStripProps = {
  activeMission: MissionData;
  badgeReward?: Badge;
  savedProgress?: MissionProgress;
  variant: "intro" | "active";
};

function MissionProgressStrip({
  activeMission,
  badgeReward,
  savedProgress,
  variant,
}: MissionProgressStripProps) {
  return (
    <div className="saved-progress-strip">
      <p>
        <span>Status</span>
        {savedProgress?.completed
          ? "Complete"
            : savedProgress
              ? "Started"
              : "New"}
      </p>
      <p>
        <span>Best Score</span>
        {savedProgress ? `${savedProgress.highestScore}%` : "None"}
      </p>
      <p>
        <span>Attempts</span>
        {savedProgress?.attempts ?? 0}
      </p>
      <p>
        <span>{variant === "intro" ? "Badge" : "Best Stars"}</span>
        {variant === "intro"
          ? badgeReward?.name ?? "Mission Badge"
          : `${savedProgress?.starsEarned ?? 0}/${activeMission.starReward}`}
      </p>
    </div>
  );
}

type QuestionAnswerControlProps = {
  answer: string;
  currentQuestion: Question;
  feedback: Feedback | null;
  onAnswerChange: (answer: string) => void;
};

function QuestionAnswerControl({
  answer,
  currentQuestion,
  feedback,
  onAnswerChange,
}: QuestionAnswerControlProps) {
  if (currentQuestion.type === "multiple-choice") {
    return (
      <div className="choice-grid">
        {currentQuestion.choices?.map((choice) => (
          <button
            className={answer === choice ? "choice selected" : "choice"}
            disabled={Boolean(feedback)}
            key={choice}
            onClick={() => onAnswerChange(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    );
  }

  return (
    <label className="numeric-answer">
      <span>Answer</span>
      <input
        inputMode="decimal"
        placeholder="Type your answer"
        value={answer}
        disabled={Boolean(feedback)}
        onChange={(event) => onAnswerChange(event.target.value)}
      />
    </label>
  );
}

function QuestionFeedback({ feedback }: { feedback: Feedback }) {
  return (
    <div className={feedback.correct ? "feedback correct" : "feedback incorrect"}>
      <strong>{feedback.correct ? "Correct" : "Try this one again"}</strong>
      <p>{feedback.explanation}</p>
    </div>
  );
}

function useQuestionIndex() {
  return useState(0);
}

function useAnswer() {
  return useState("");
}

function useHint() {
  return useState(false);
}

function useFeedback() {
  return useState<Feedback | null>(null);
}

function useAnswers() {
  return useState<AnswerRecord[]>([]);
}

function useSummary() {
  return useState<AttemptSummary | null>(null);
}

function useMissionStarted() {
  return useState(false);
}

export default Mission;

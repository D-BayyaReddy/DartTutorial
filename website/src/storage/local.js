/*
  =============================================================================
  DART MASTER: LOCAL STORAGE STATE MANAGER
  =============================================================================
*/

const STORAGE_KEYS = {
  PROGRESS: "dart_master_progress",
  CODE_PREFIX: "dart_master_code_",
  SETTINGS: "dart_master_settings"
};

const DEFAULT_PROGRESS = {
  xp: 0,
  completedLessons: [], // list of lesson IDs
  unlockedChapters: ["Variables & Basics"], // Initial chapter unlocked
  achievements: [],
  currentLessonId: "variables-1"
};

const DEFAULT_SETTINGS = {
  theme: "dark",
  sidebarCollapsed: false,
  fontSize: 14
};

/**
 * Helper to fetch progress from localStorage. Falls back to default template.
 */
export function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!raw) return { ...DEFAULT_PROGRESS };
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch (e) {
    console.error("Failed to parse progress from local storage", e);
    return { ...DEFAULT_PROGRESS };
  }
}

/**
 * Saves progress object to localStorage.
 */
export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress to local storage", e);
  }
}

/**
 * Adds XP to the user progress and checks for milestones.
 * Returns { newXp, added }
 */
export function addXP(amount) {
  const progress = getProgress();
  progress.xp += amount;
  
  // Track Achievements
  const achievements = [...progress.achievements];
  if (progress.xp >= 100 && !achievements.includes("novice")) {
    achievements.push("novice");
  }
  if (progress.xp >= 500 && !achievements.includes("coder")) {
    achievements.push("coder");
  }
  if (progress.xp >= 1000 && !achievements.includes("expert")) {
    achievements.push("expert");
  }
  if (progress.xp >= 2500 && !achievements.includes("master")) {
    achievements.push("master");
  }
  
  progress.achievements = achievements;
  saveProgress(progress);
  return { newXp: progress.xp, achievements };
}

/**
 * Marks a lesson as completed, unlocks next content, and returns progress state.
 */
export function completeLesson(lessonId, xpReward = 50) {
  const progress = getProgress();
  
  // Add to completed list if not already there
  let firstTimeCompletion = false;
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    progress.xp += xpReward;
    firstTimeCompletion = true;
  }
  
  // Achievement tracking based on completions
  const achievements = [...progress.achievements];
  if (progress.completedLessons.length >= 1 && !achievements.includes("first_step")) {
    achievements.push("first_step");
  }
  if (progress.completedLessons.length >= 10 && !achievements.includes("ten_lessons")) {
    achievements.push("ten_lessons");
  }
  if (progress.completedLessons.length >= 25 && !achievements.includes("halfway")) {
    achievements.push("halfway");
  }
  if (progress.completedLessons.length >= 50 && !achievements.includes("dart_guru")) {
    achievements.push("dart_guru");
  }
  
  progress.achievements = achievements;
  saveProgress(progress);
  return { progress, firstTimeCompletion };
}

/**
 * Loads the user's cached editor code for a lesson. Falls back to starter code.
 */
export function getLessonCode(lessonId, defaultCode) {
  try {
    const code = localStorage.getItem(`${STORAGE_KEYS.CODE_PREFIX}${lessonId}`);
    return code !== null ? code : defaultCode;
  } catch (e) {
    console.error(`Failed to load code for lesson ${lessonId}`, e);
    return defaultCode;
  }
}

/**
 * Caches the user's typed code for a lesson.
 */
export function saveLessonCode(lessonId, code) {
  try {
    localStorage.setItem(`${STORAGE_KEYS.CODE_PREFIX}${lessonId}`, code);
  } catch (e) {
    console.error(`Failed to save code cache for lesson ${lessonId}`, e);
  }
}

/**
 * Resets user progress entirely.
 */
export function resetAllProgress() {
  try {
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    // Clear all cached codes
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(STORAGE_KEYS.CODE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.error("Failed to reset progress", e);
  }
}

/**
 * Gets theme, layout settings.
 */
export function getSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!raw) return { ...DEFAULT_SETTINGS };
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (e) {
    return { ...DEFAULT_SETTINGS };
  }
}

/**
 * Saves layout and theme preferences.
 */
export function saveSettings(settings) {
  try {
    const current = getSettings();
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({ ...current, ...settings }));
  } catch (e) {
    console.error("Failed to save settings", e);
  }
}

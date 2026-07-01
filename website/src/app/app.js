/*
  =============================================================================
  DART MASTER: PLATFORM APPLICATION ORCHESTRATOR
  =============================================================================
*/

import loader from "@monaco-editor/loader";
import { LESSONS } from "../lessons/index.js";
import * as storage from "../storage/local.js";
import { judge } from "../runtime/judge.js";
import { ConsoleTerminal } from "../runtime/console.js";
import * as ui from "../ui.js";

export class DartMasterApp {
  constructor() {
    this.lessons = LESSONS;
    this.progress = storage.getProgress();
    this.settings = storage.getSettings();
    this.activeLesson = null;
    this.editor = null;
    this.terminal = null;
    this.monacoInstance = null;
  }

  /**
   * Initializes components, layout resizers, loaders, and event listeners.
   */
  async init() {
    // 1. Initialize Console Terminal
    const consoleMount = document.getElementById("console-output-mount");
    this.terminal = new ConsoleTerminal(consoleMount);

    // 2. Initialize Resizing Handles & UI Themes
    ui.initResizing(() => {
      if (this.editor) this.editor.layout();
    });
    
    const themeBtn = document.getElementById("theme-toggle-btn");
    ui.initTheme(themeBtn, this.settings.theme, (theme) => {
      this.settings.theme = theme;
      storage.saveSettings({ theme });
      if (this.monacoInstance) {
        this.monacoInstance.editor.setTheme(theme === "dark" ? "vs-dark" : "vs");
      }
    });

    // 3. Render Curriculum Navigation List
    this.renderSyllabus();

    // 4. Load Active Lesson
    const lastLessonId = this.progress.currentLessonId || "var-1";
    const initialLesson = this.lessons.find(l => l.id === lastLessonId) || this.lessons[0];
    this.activeLesson = initialLesson;

    // 5. Load Monaco Editor asynchronously
    await this.initMonaco();

    // 6. Bind Event listeners
    this.bindEvents();

    // 7. Load Active Lesson Contents
    this.loadLesson(this.activeLesson);

    // 8. Update Progress Dashboard
    this.updateDashboardMetrics();
    
    ui.showToast("Welcome to Dart Master! Ready to code.", "info");
  }

  /**
   * Instantiates the Monaco Editor container and configures custom Dart syntax highlighting.
   */
  async initMonaco() {
    const mount = document.getElementById("monaco-mount-point");
    try {
      const monaco = await loader.init();
      this.monacoInstance = monaco;

      // Register Custom Dart Syntax Highlighting for professional look
      monaco.languages.register({ id: "dart" });
      monaco.languages.setMonarchTokensProvider("dart", {
        keywords: [
          "void", "int", "double", "String", "bool", "num", "dynamic", "var",
          "final", "const", "class", "extends", "implements", "with", "mixin",
          "factory", "required", "import", "export", "part", "as", "show", "hide",
          "assert", "is", "if", "else", "switch", "case", "default", "break",
          "continue", "return", "try", "catch", "finally", "throw", "rethrow",
          "async", "await", "yield", "static", "get", "set"
        ],
        tokenizer: {
          root: [
            [/[a-zA-Z_][a-zA-Z0-9_]*/, {
              cases: {
                "@keywords": "keyword",
                "@default": "identifier"
              }
            }],
            [/\/\/.*/, "comment"],
            [/\/\*[\s\S]*?\*\//, "comment"],
            [/\b\d+(\.\d+)?\b/, "number"],
            [/'[^']*'|"[^"]*"/, "string"],
            [/[{}()\[\]]/, "brackets"],
            [/[<>:=!&|+\-*/%]/, "operator"]
          ]
        }
      });

      // Configure editor colors
      monaco.editor.defineTheme("vs-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "keyword", foreground: "f59e0b", fontStyle: "bold" },
          { token: "string", foreground: "10b981" },
          { token: "comment", foreground: "71717a", fontStyle: "italic" },
          { token: "number", foreground: "3b82f6" }
        ],
        colors: {
          "editor.background": "#0f0f11",
          "editor.lineHighlightBackground": "#18181b"
        }
      });

      // Instantiate editor
      this.editor = monaco.editor.create(mount, {
        value: "",
        language: "dart",
        theme: this.settings.theme === "dark" ? "vs-dark" : "vs",
        automaticLayout: true,
        fontSize: this.settings.fontSize,
        tabSize: 2,
        minimap: { enabled: false },
        scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 }
      });

      // Cache code changes locally on typing
      this.editor.onDidChangeModelContent(() => {
        const code = this.editor.getValue();
        storage.saveLessonCode(this.activeLesson.id, code);
      });

    } catch (e) {
      console.error("Monaco loader failed", e);
      mount.innerHTML = `<div class="editor-placeholder-loader error-line">
        Failed to load code editor. Check your network connection.
      </div>`;
    }
  }

  /**
   * Binds panel actions and click triggers.
   */
  bindEvents() {
    // Run Code Button
    document.getElementById("btn-run-code").addEventListener("click", () => this.runActiveCode());
    
    // Ctrl + Enter shortcut inside browser
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        this.runActiveCode();
      }
    });

    // Next Lesson Button
    document.getElementById("btn-next-lesson").addEventListener("click", () => this.nextLesson());

    // Lesson actions
    document.getElementById("action-reset").addEventListener("click", () => this.resetLessonCode());
    document.getElementById("action-format").addEventListener("click", () => this.formatCode());
    document.getElementById("action-copy").addEventListener("click", () => this.copyCode());
    document.getElementById("action-fullscreen").addEventListener("click", () => this.toggleFullscreen());
    document.getElementById("btn-solution-unlock").addEventListener("click", () => this.revealSolution());

    // Sidebar collapse
    document.getElementById("toggle-sidebar-btn").addEventListener("click", () => {
      const sidebar = document.getElementById("syllabus-sidebar");
      sidebar.classList.toggle("collapsed");
      setTimeout(() => { if (this.editor) this.editor.layout(); }, 300);
    });

    // Tabs Controller
    const tabHeaders = document.querySelectorAll(".pane-tabs-header");
    tabHeaders.forEach(header => {
      header.addEventListener("click", (e) => {
        const targetBtn = e.target.closest(".tab-btn");
        if (!targetBtn) return;
        
        // Un-active all
        const section = header.closest(".panel-section");
        section.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        section.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        
        // Active chosen
        targetBtn.classList.add("active");
        const tabId = targetBtn.getAttribute("data-tab");
        section.querySelector(`#${tabId}`).classList.add("active");
      });
    });

    // Search lessons input handler
    document.getElementById("lesson-search").addEventListener("input", (e) => {
      this.searchLessons(e.target.value);
    });
  }

  /**
   * Renders the modular list of chapters and tasks inside syllabus.
   */
  renderSyllabus() {
    const nav = document.getElementById("syllabus-navigation");
    if (!nav) return;
    nav.innerHTML = "";

    // Group lessons by Chapter
    const chapters = {};
    this.lessons.forEach(lesson => {
      if (!chapters[lesson.chapter]) chapters[lesson.chapter] = [];
      chapters[lesson.chapter].push(lesson);
    });

    Object.keys(chapters).forEach((chapName) => {
      const container = document.createElement("div");
      container.className = "chapter-container";
      
      const title = document.createElement("div");
      title.className = "chapter-title";
      title.innerHTML = `<span>${chapName}</span>`;
      container.appendChild(title);

      const lessonsDiv = document.createElement("div");
      lessonsDiv.className = "chapter-lessons";

      chapters[chapName].forEach(lesson => {
        const isLocked = !this.isLessonUnlocked(lesson.id);
        const isCompleted = this.progress.completedLessons.includes(lesson.id);

        const item = document.createElement("div");
        item.className = `lesson-nav-item ${isLocked ? "locked" : ""} ${isCompleted ? "completed" : ""} ${this.activeLesson.id === lesson.id ? "active" : ""}`;
        item.setAttribute("data-id", lesson.id);

        item.innerHTML = `
          <div class="status-circle">
            <!-- Checkmark icon -->
            <svg viewBox="0 0 24 24" width="10" height="10"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </div>
          <!-- Lock icon -->
          <svg class="lock-icon" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
          <span class="nav-lesson-title">${lesson.title}</span>
          <span class="nav-lesson-xp">+${lesson.xpReward} XP</span>
        `;

        if (!isLocked) {
          item.addEventListener("click", () => {
            this.activeLesson = lesson;
            this.loadLesson(lesson);
            // Highlight active navigation item
            document.querySelectorAll(".lesson-nav-item").forEach(n => n.classList.remove("active"));
            item.classList.add("active");
          });
        }

        lessonsDiv.appendChild(item);
      });

      container.appendChild(lessonsDiv);
      nav.appendChild(container);
    });
  }

  /**
   * Checks if the previous lessons are completed to satisfy unlock bounds.
   */
  isLessonUnlocked(lessonId) {
    const idx = this.lessons.findIndex(l => l.id === lessonId);
    if (idx <= 0) return true; // First lesson is always unlocked
    
    // Check if the immediately preceding lesson is completed
    const prevLesson = this.lessons[idx - 1];
    return this.progress.completedLessons.includes(prevLesson.id);
  }

  /**
   * Loads the structured details of the lesson onto UI panels.
   */
  loadLesson(lesson) {
    this.activeLesson = lesson;
    this.progress.currentLessonId = lesson.id;
    storage.saveProgress(this.progress);

    // Update Meta info
    document.getElementById("lesson-title-display").textContent = lesson.title;
    document.getElementById("lesson-difficulty").textContent = lesson.difficulty;
    document.getElementById("lesson-time").textContent = lesson.estimatedTime;
    document.getElementById("lesson-explanation").innerHTML = lesson.explanation;

    // Reset Difficulty Badge Colors
    const badge = document.getElementById("lesson-difficulty");
    badge.className = `lesson-tag diff-${lesson.difficulty.toLowerCase()}`;

    // Load Objectives
    const objList = document.getElementById("lesson-objectives");
    objList.innerHTML = "";
    lesson.objectives.forEach(obj => {
      const li = document.createElement("li");
      li.textContent = obj;
      objList.appendChild(li);
    });

    // Set Editor Value (cached code or starter code)
    const code = storage.getLessonCode(lesson.id, lesson.starterCode);
    if (this.editor) {
      this.editor.setValue(code);
    }

    // Set Hints and Solution Content
    document.getElementById("lesson-hint-text").textContent = lesson.hint;
    document.getElementById("lesson-solution-code").textContent = lesson.solution;

    // Control Solution overlay locks
    const isCompleted = this.progress.completedLessons.includes(lesson.id);
    this.updateSolutionVisibility(isCompleted);

    // Reset console & test results views
    this.terminal.clear();
    this.terminal.writeSystem(`Active module: ${lesson.title}. Ready.`);
    
    const testMount = document.getElementById("test-runner-mount");
    testMount.innerHTML = `<div class="test-empty-state">
      Write your solution and press 'Run Code' to execute test assertions.
    </div>`;

    // Disable Next button until challenge passes
    document.getElementById("btn-next-lesson").disabled = !isCompleted;
    
    // Switch to instructions tab
    this.activateLeftTab("tab-instruction");
  }

  /**
   * Helper to active left pane tabs programmatically.
   */
  activateLeftTab(tabId) {
    const pane = document.getElementById("lesson-pane");
    pane.querySelectorAll(".tab-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
    });
    pane.querySelectorAll(".tab-content").forEach(c => {
      c.classList.toggle("active", c.id === tabId);
    });
  }

  /**
   * Reveals solution overlay.
   */
  updateSolutionVisibility(unlocked) {
    const lock = document.getElementById("solution-locked-overlay");
    const content = document.getElementById("solution-unlocked-content");
    const revealBtn = document.getElementById("btn-solution-unlock");

    if (unlocked) {
      lock.style.display = "none";
      content.style.display = "block";
      revealBtn.style.display = "none";
    } else {
      lock.style.display = "flex";
      content.style.display = "none";
      revealBtn.style.display = "block";
    }
  }

  /**
   * Reveals solutions.
   */
  revealSolution() {
    this.updateSolutionVisibility(true);
    this.activateLeftTab("tab-solution");
    ui.showToast("Solution revealed! XP gains for this lesson are halved.", "info");
  }

  /**
   * Formats source code in Monaco Editor.
   */
  formatCode() {
    if (this.editor) {
      this.editor.getAction("editor.action.formatDocument").run();
      ui.showToast("Document formatted.", "info");
    }
  }

  /**
   * Resets code to starter template.
   */
  resetLessonCode() {
    if (confirm("Are you sure you want to reset this editor back to the starter code template?")) {
      this.editor.setValue(this.activeLesson.starterCode);
      storage.saveLessonCode(this.activeLesson.id, this.activeLesson.starterCode);
      ui.showToast("Editor reset.", "info");
    }
  }

  /**
   * Copies code to clipboard.
   */
  copyCode() {
    if (this.editor) {
      navigator.clipboard.writeText(this.editor.getValue());
      ui.showToast("Source code copied to clipboard.", "success");
    }
  }

  /**
   * Toggles editor fullscreen mode.
   */
  toggleFullscreen() {
    const target = document.getElementById("monaco-mount-point");
    target.classList.toggle("fullscreen");
    if (target.classList.contains("fullscreen")) {
      document.getElementById("action-fullscreen").textContent = "Exit Fullscreen";
    } else {
      document.getElementById("action-fullscreen").textContent = "Fullscreen";
    }
    if (this.editor) this.editor.layout();
  }

  /**
   * Running active code against Online Judge validation asserts.
   */
  async runActiveCode() {
    const userCode = this.editor.getValue();
    this.terminal.clear();
    this.terminal.writeSystem("Compilation started...");

    // Switch right panel to console output
    this.activateRightTab("tab-console");

    // Run Judge
    const result = await judge(userCode, this.activeLesson.hiddenTests);

    // Print logs to terminal console
    if (result.consoleLogs.length > 0) {
      result.consoleLogs.forEach(line => this.terminal.writeLine(line, "stdout"));
    }

    if (result.error) {
      this.terminal.writeError(result.error);
      this.terminal.writeError("Execution failed. Review compiler warnings.");
      this.renderTestResults(result.testResults);
      ui.showToast("Tests failed with exceptions.", "error");
      return;
    }

    // Render Test Cases panel
    this.renderTestResults(result.testResults);

    if (result.success) {
      this.terminal.writeSuccess("✔ Validation Passed! All hidden tests successfully executed.");
      ui.showToast("Congratulations! Challenge passed.", "success");
      
      // Update completion progress
      const reward = this.activeLesson.xpReward;
      const { firstTimeCompletion } = storage.completeLesson(this.activeLesson.id, reward);
      if (firstTimeCompletion) {
        ui.triggerCelebration();
        ui.showToast(`Eearned +${reward} XP!`, "success");
      }
      
      // Update data states
      this.progress = storage.getProgress();
      this.updateDashboardMetrics();
      this.renderSyllabus();
      
      // Enable next button
      document.getElementById("btn-next-lesson").disabled = false;
      this.updateSolutionVisibility(true);
      
      // Navigate/Switch to tests tab
      this.activateRightTab("tab-tests");
    } else {
      this.terminal.writeError("❌ Validation Failed. Some test assertions did not pass.");
      ui.showToast("Some test cases failed. Adjust your code.", "error");
      this.activateRightTab("tab-tests");
    }
  }

  /**
   * Programmatically switches Right Tab selection.
   */
  activateRightTab(tabId) {
    const header = document.querySelector(".output-results-pane .pane-tabs-header");
    header.querySelectorAll(".tab-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
    });
    const section = header.closest(".panel-section");
    section.querySelectorAll(".tab-content").forEach(c => {
      c.classList.toggle("active", c.id === tabId);
    });
  }

  /**
   * Renders unit test details in Test Results tab.
   */
  renderTestResults(testResults) {
    const mount = document.getElementById("test-runner-mount");
    if (!mount) return;
    mount.innerHTML = "";

    testResults.forEach(test => {
      const card = document.createElement("div");
      card.className = `test-card ${test.passed ? "passed" : "failed"}`;

      card.innerHTML = `
        <div class="test-card-header">
          <div class="test-badge">${test.passed ? "✓" : "✗"}</div>
          <span>${test.description}</span>
        </div>
        ${!test.passed ? `
          <div class="test-details">
            <div>Expected: <span class="expected-val">${test.expected}</span></div>
            <div>Received: <span class="received-val">${test.received}</span></div>
          </div>
        ` : ""}
      `;
      mount.appendChild(card);
    });
  }

  /**
   * Steps to the next lesson challenge in syllabus list.
   */
  nextLesson() {
    const activeIdx = this.lessons.findIndex(l => l.id === this.activeLesson.id);
    if (activeIdx < this.lessons.length - 1) {
      const next = this.lessons[activeIdx + 1];
      this.loadLesson(next);
      this.renderSyllabus(); // Refresh sidebar states
    } else {
      ui.showToast("Congratulations! You've completed the final lesson in the Dart Fundamentals course!", "success");
    }
  }

  /**
   * Sidebar search filter.
   */
  searchLessons(query) {
    const term = query.toLowerCase().trim();
    const navItems = document.querySelectorAll(".lesson-nav-item");

    navItems.forEach(item => {
      const title = item.querySelector(".nav-lesson-title").textContent.toLowerCase();
      if (title.includes(term)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });

    // Hide empty chapters
    const chapters = document.querySelectorAll(".chapter-container");
    chapters.forEach(chap => {
      const visibleLessons = chap.querySelectorAll(".lesson-nav-item[style='display: flex;']");
      const anyVisible = visibleLessons.length > 0 || term === "";
      chap.style.display = anyVisible ? "block" : "none";
    });
  }

  /**
   * Synchronizes progress meters, XP labels, and values.
   */
  updateDashboardMetrics() {
    // 1. Update XP Label
    document.getElementById("xp-value").textContent = this.progress.xp;

    // 2. Calculate completion percentage
    const completedCount = this.progress.completedLessons.length;
    const totalCount = this.lessons.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    
    document.getElementById("progress-percentage").textContent = `${percentage}%`;
    document.getElementById("header-progress-fill").style.width = `${percentage}%`;
  }
}

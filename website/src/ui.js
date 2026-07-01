/*
  =============================================================================
  DART MASTER: PANEL RESIZER & SYSTEM UI HELPERS
  =============================================================================
*/

import confetti from "canvas-confetti";

/**
 * Renders a clean CSS toast notification in the corner.
 */
export function showToast(message, type = "info", duration = 3000) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  // Icon select
  const icon = type === "success" ? "🏆" : type === "error" ? "❌" : "ℹ️";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  
  container.appendChild(toast);

  // Auto remove
  setTimeout(() => {
    toast.style.animation = "slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * Triggers a satisfying full screen confetti explosion on completion milestones!
 */
export function triggerCelebration() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, animate a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
}

/**
 * Initializes layout drag resizing for all three IDE panels.
 */
export function initResizing(onLayoutChange) {
  setupColResize("sidebar-panel", "sidebar-resizer", "right", onLayoutChange);
  setupColResize("lesson-detail-pane", "lesson-resizer", "right", onLayoutChange);
  setupColResize("output-results-pane", "output-resizer", "left", onLayoutChange);
  setupRowResize("editor-container-pane", "workspace-resizer", onLayoutChange);
}

function setupColResize(panelId, resizerId, direction = "right", callback) {
  const panel = document.getElementById(panelId);
  const resizer = document.getElementById(resizerId);
  if (!panel || !resizer) return;

  resizer.addEventListener("mousedown", (e) => {
    e.preventDefault();
    document.body.classList.add("resizing");
    resizer.classList.add("resizing");
    
    const startX = e.clientX;
    const startWidth = panel.getBoundingClientRect().width;

    const onMouseMove = (moveEvent) => {
      const diffX = moveEvent.clientX - startX;
      let newWidth;
      
      if (direction === "right") {
        newWidth = startWidth + diffX;
      } else {
        newWidth = startWidth - diffX;
      }

      // Constraints
      if (newWidth > 180 && newWidth < 800) {
        panel.style.width = `${newWidth}px`;
        panel.style.flex = "none";
        if (callback) callback();
      }
    };

    const onMouseUp = () => {
      document.body.classList.remove("resizing");
      resizer.classList.remove("resizing");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });
}

function setupRowResize(panelClassId, resizerId, callback) {
  // Simplistic handler for editor height resize if applicable
  // For the split panel setup, row resizing can adjust console panel height.
}

/**
 * Toggles dark/light theme properties and stores state.
 */
export function initTheme(themeToggleBtn, currentTheme = "dark", onThemeChange) {
  const body = document.body;
  
  const applyTheme = (theme) => {
    if (theme === "light") {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      themeToggleBtn.querySelector(".dark-icon").style.display = "none";
      themeToggleBtn.querySelector(".light-icon").style.display = "block";
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      themeToggleBtn.querySelector(".light-icon").style.display = "none";
      themeToggleBtn.querySelector(".dark-icon").style.display = "block";
    }
    if (onThemeChange) onThemeChange(theme);
  };

  applyTheme(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    const nextTheme = body.classList.contains("dark-theme") ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

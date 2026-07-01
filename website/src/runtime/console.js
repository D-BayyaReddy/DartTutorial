/*
  =============================================================================
  DART MASTER: CONSOLE TERMINAL MANAGER
  =============================================================================
*/

/**
 * Handles clearing and appending colored output logs to the DOM console panel.
 */
export class ConsoleTerminal {
  constructor(mountElement) {
    this.mount = mountElement;
  }

  /**
   * Clears the console window.
   */
  clear() {
    if (this.mount) {
      this.mount.innerHTML = "";
    }
  }

  /**
   * Appends a log line with a specified class/type.
   */
  writeLine(text, type = "stdout") {
    if (!this.mount) return;

    const line = document.createElement("div");
    line.className = `console-line ${type}-line`;
    
    // Safety check for empty output
    line.textContent = text === "" ? "[Empty line]" : text;
    this.mount.appendChild(line);
    
    // Auto-scroll to bottom of terminal
    this.mount.scrollTop = this.mount.scrollHeight;
  }

  /**
   * Writes system state lines.
   */
  writeSystem(text) {
    this.writeLine(text, "system");
  }

  /**
   * Writes compiler/runtime error lines.
   */
  writeError(text) {
    this.writeLine(text, "error");
  }

  /**
   * Writes compilation warnings.
   */
  writeWarning(text) {
    this.writeLine(text, "warning");
  }

  /**
   * Writes execution success alerts.
   */
  writeSuccess(text) {
    this.writeLine(text, "success");
  }
}

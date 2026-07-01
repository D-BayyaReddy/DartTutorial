/*
  =============================================================================
  DART MASTER: SANDBOX CODE EXECUTOR
  =============================================================================
*/

import { transpile } from "./parser.js";
import { validate } from "./validator.js";

// Mock implementation of core Dart classes to enable runtime support
const DART_CORE_MOCKS = `
class StringBuffer {
  constructor() { this._buffer = []; }
  write(obj) { this._buffer.push(String(obj)); return this; }
  writeAll(objects, separator = "") { this._buffer.push(objects.join(separator)); return this; }
  clear() { this._buffer = []; }
  toString() { return this._buffer.join(""); }
}

class DateTime {
  constructor(year, month, day, hour = 0, minute = 0, second = 0) {
    if (year !== undefined) {
      this._date = new Date(year, (month || 1) - 1, day || 1, hour, minute, second);
    } else {
      this._date = new Date();
    }
  }
  static now() { return new DateTime(); }
  get year() { return this._date.getFullYear(); }
  get month() { return this._date.getMonth() + 1; }
  get day() { return this._date.getDate(); }
  get hour() { return this._date.getHours(); }
  get minute() { return this._date.getMinutes(); }
  get second() { return this._date.getSeconds(); }
  get millisecondsSinceEpoch() { return this._date.getTime(); }
  toString() { return this._date.toISOString().replace('T', ' ').substring(0, 19); }
}

class Duration {
  constructor({ days = 0, hours = 0, minutes = 0, seconds = 0 } = {}) {
    this.inMilliseconds = (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  }
  get inSeconds() { return Math.floor(this.inMilliseconds / 1000); }
  get inMinutes() { return Math.floor(this.inMilliseconds / 60000); }
  get inHours() { return Math.floor(this.inMilliseconds / 3600000); }
  get inDays() { return Math.floor(this.inMilliseconds / 86400000); }
  toString() { return this.inMilliseconds + " ms"; }
}

class Random {
  nextInt(max) { return Math.floor(Math.random() * max); }
  nextDouble() { return Math.random(); }
  nextBool() { return Math.random() >= 0.5; }
}

// Emulate simple Dart Delay Futures
const Future = {
  delayed: (duration, callback) => {
    return new globalThis.Promise((resolve) => {
      globalThis.setTimeout(() => {
        const res = callback ? callback() : null;
        resolve(res);
      }, duration.inMilliseconds || 0);
    });
  },
  wait: (futures) => globalThis.Promise.all(futures)
};
`;

/**
 * Inserts loop iterations counter to prevent browser hanging.
 */
function protectLoops(code) {
  let protectedCode = code;

  // Protect while loops
  protectedCode = protectedCode.replace(
    /\bwhile\s*\((.*?)\)\s*\{/g,
    "let __while_loop_ctr = 0; while($1) { if (__while_loop_ctr++ > 2000) throw new Error('Infinite loop warning: maximum of 2000 iterations exceeded.');"
  );

  // Protect standard for loops
  protectedCode = protectedCode.replace(
    /\bfor\s*\((.*?)\)\s*\{/g,
    "let __for_loop_ctr = 0; for($1) { if (__for_loop_ctr++ > 2000) throw new Error('Infinite loop warning: maximum of 2000 iterations exceeded.');"
  );

  // Protect do-while loops
  protectedCode = protectedCode.replace(
    /\bdo\s*\{/g,
    "let __do_loop_ctr = 0; do { if (__do_loop_ctr++ > 2000) throw new Error('Infinite loop warning: maximum of 2000 iterations exceeded.');"
  );

  return protectedCode;
}

/**
 * Executes Dart source code asynchronously. Captures standard console logs.
 * Returns { success: boolean, console: string[], error: string, scope: Object }
 */
export async function execute(dartCode) {
  // Validate Syntax first
  const valResult = validate(dartCode);
  if (!valResult.valid) {
    return {
      success: false,
      console: [],
      error: valResult.error,
      scope: {}
    };
  }

  // Transpile to JS
  let jsCode;
  try {
    jsCode = transpile(dartCode);
  } catch (err) {
    return {
      success: false,
      console: [],
      error: `Compiler Translation Error: ${err.message}`,
      scope: {}
    };
  }

  // Add loop protection
  jsCode = protectLoops(jsCode);

  // Create isolated output logs capturer
  const logs = [];
  const captureConsole = {
    log: (...args) => {
      logs.push(args.map(arg => {
        if (typeof arg === "object") {
          try {
            return JSON.stringify(arg);
          } catch(e) {
            return String(arg);
          }
        }
        return String(arg);
      }).join(" "));
    },
    error: (...args) => {
      logs.push(`[Error] ${args.join(" ")}`);
    },
    warn: (...args) => {
      logs.push(`[Warning] ${args.join(" ")}`);
    }
  };

  // Compile final sandboxed script
  try {
    const sandboxScope = {};
    
    // We bind variables to a local environment
    const runner = new Function("console", "mocks", "scope", `
      // Inject standard mocks
      ${DART_CORE_MOCKS}
      
      // Inject transpiled user code
      ${jsCode}

      // Capture all declared functions & classes to check inside tests
      try {
        if (typeof main === 'function') {
          scope.main = main;
        }
      } catch (e) {}

      // Gather functions for the assertion scope
      const declaredFunctions = {};
      
      // Dynamically extract function definitions if possible, or bind custom tests
      return {
        main: typeof main === 'function' ? main : null,
        // Bind other specific symbols for unit testing checks
        getVariable: (name) => {
          try { return eval(name); } catch(e) { return undefined; }
        },
        evaluateExpression: (expr) => {
          try { return eval(expr); } catch(e) { return undefined; }
        }
      };
    `);

    // Execute sandboxed code
    const runtimeEnvironment = runner(captureConsole, DART_CORE_MOCKS, sandboxScope);
    
    // Execute main() automatically if it exists
    if (runtimeEnvironment.main) {
      const maybePromise = runtimeEnvironment.main();
      if (maybePromise instanceof Promise) {
        await maybePromise;
      }
    }

    return {
      success: true,
      console: logs,
      error: null,
      scope: runtimeEnvironment
    };
  } catch (runtimeErr) {
    return {
      success: false,
      console: logs,
      error: `Runtime Exception: ${runtimeErr.message}`,
      scope: {}
    };
  }
}

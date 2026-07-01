/*
  =============================================================================
  DART MASTER: ONLINE TEST JUDGE
  =============================================================================
*/

import { execute } from "./executor.js";

/**
 * Runs the transpiled code, gathers console logs, and evaluates all unit tests.
 * Returns { success: boolean, consoleLogs: String[], testResults: Object[], error: String }
 */
export async function judge(dartCode, hiddenTests = []) {
  // Execute the user's code
  const execResult = await execute(dartCode);

  const testResults = [];
  let allTestsPassed = execResult.success;

  if (!execResult.success) {
    // If compilation or runtime failed, all tests fail automatically
    hiddenTests.forEach(test => {
      testResults.push({
        description: test.description,
        passed: false,
        expected: String(test.expected),
        received: "Execution Error"
      });
    });

    return {
      success: false,
      consoleLogs: execResult.console,
      testResults,
      error: execResult.error
    };
  }

  // Iterate and evaluate each test case
  for (const test of hiddenTests) {
    let passed = false;
    let received = "";

    try {
      if (test.type === "console") {
        // Console output check: check if the captured logs contain expected text
        const expectedStr = String(test.expected).trim();
        // Check if any line in console log equals or contains the expected value
        const found = execResult.console.some(line => line.trim().includes(expectedStr));
        passed = found;
        received = execResult.console.length > 0 
          ? execResult.console.join("\n") 
          : "[No console output]";
      } else if (test.type === "variable") {
        // Retrieve variable value from scope
        const val = execResult.scope.getVariable(test.target);
        passed = isEqual(val, test.expected);
        received = formatValue(val);
      } else if (test.type === "function" || test.type === "custom") {
        // Evaluate dynamic function call or expression
        const val = execResult.scope.evaluateExpression(test.target);
        passed = isEqual(val, test.expected);
        received = formatValue(val);
      }
    } catch (err) {
      passed = false;
      received = `Exception: ${err.message}`;
    }

    if (!passed) {
      allTestsPassed = false;
    }

    testResults.push({
      description: test.description,
      passed,
      expected: formatValue(test.expected),
      received: passed ? formatValue(test.expected) : received
    });
  }

  return {
    success: allTestsPassed,
    consoleLogs: execResult.console,
    testResults,
    error: null
  };
}

/**
 * Deep equality helper.
 */
function isEqual(a, b) {
  if (a === b) return true;
  
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      return a.every((val, i) => isEqual(val, b[i]));
    }
    
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => isEqual(a[key], b[key]));
  }
  
  return false;
}

/**
 * Formats values for visual displays (e.g. objects, lists).
 */
function formatValue(val) {
  if (val === undefined) return "undefined";
  if (val === null) return "null";
  if (typeof val === "object") {
    try {
      return JSON.stringify(val);
    } catch(e) {
      return String(val);
    }
  }
  if (typeof val === "string") return `"${val}"`;
  return String(val);
}

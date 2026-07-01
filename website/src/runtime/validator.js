/*
  =============================================================================
  DART MASTER: DART SYNTAX VALIDATOR & COMPILER CHECKER
  =============================================================================
*/

const UNSUPPORTED_KEYWORDS = [
  { term: "import 'package:", msg: "External packages are not supported in this educational sandbox. Only core Dart concepts are validated." },
  { term: "part of", msg: "'part of' library structures are not supported inside single file challenges." },
  { term: "deferred as", msg: "Deferred loading is not supported in this runtime." },
  { term: "native", msg: "Native declarations are forbidden." },
  { term: "isolate", msg: "Isolates (multi-threading) are not supported. Use async/await for asynchronous challenges." }
];

/**
 * Validates the Dart source code for obvious errors, unmatched braces,
 * and unsupported concepts. Returns { valid: boolean, error: String }
 */
export function validate(dartCode) {
  // Check for unsupported features
  for (const { term, msg } of UNSUPPORTED_KEYWORDS) {
    if (dartCode.includes(term)) {
      return {
        valid: false,
        error: `Compiler Warning: ${msg}`
      };
    }
  }

  // Bracket balance check
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  const stack = [];
  const lines = dartCode.split("\n");
  
  for (let l = 0; l < lines.length; l++) {
    const line = lines[l];
    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char in brackets) {
        stack.push({ char, line: l + 1, col: c + 1 });
      } else if (Object.values(brackets).includes(char)) {
        if (stack.length === 0) {
          return {
            valid: false,
            error: `Syntax Error: Unmatched closing character '${char}' at line ${l + 1}, column ${c + 1}.`
          };
        }
        const top = stack.pop();
        if (brackets[top.char] !== char) {
          return {
            valid: false,
            error: `Syntax Error: Mismatched brackets. Expected '${brackets[top.char]}' to close '${top.char}' from line ${top.line}, but found '${char}' at line ${l + 1}, column ${c + 1}.`
          };
        }
      }
    }
  }

  if (stack.length > 0) {
    const top = stack.pop();
    return {
      valid: false,
      error: `Syntax Error: Unclosed bracket '${top.char}' from line ${top.line}, column ${top.col}.`
    };
  }

  return { valid: true, error: null };
}

/*
  =============================================================================
  DART MASTER: DART TO JAVASCRIPT TRANSPILER / PARSER
  =============================================================================
*/

/**
 * Transpiles a string of Dart code into executable JavaScript.
 * Strips types, converts print statement routes, processes classes, constructors,
 * cascades, and arrow functions.
 */
export function transpile(dartCode) {
  let js = dartCode;

  // 1. Remove comments to simplify regex mapping
  js = js.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');

  // 2. Transpile Dart prints -> JS console.log
  js = js.replace(/\bprint\s*\(/g, "console.log(");

  // 3. Strip variable type annotations: e.g. "int age = 25;" -> "let age = 25;"
  // e.g., "double height = 5.9;" -> "let height = 5.9;"
  // e.g., "String name = 'Alice';" -> "let name = 'Alice';"
  // e.g., "bool isStudent = true;" -> "let isStudent = true;"
  // e.g., "List<int> numbers = [1, 2, 3];" -> "let numbers = [1, 2, 3];"
  // e.g., "Map<String, int> scores = {...};" -> "let scores = {...};"
  const types = ["int", "double", "String", "bool", "num", "dynamic", "void", "List", "Map", "Set", "var", "final", "const"];
  types.forEach(type => {
    // Match type name followed by generic brackets if present: e.g. List<int>
    const regex = new RegExp(`\\b${type}(?:<[^>]+>)?\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*=)`, 'g');
    js = js.replace(regex, 'let $1');
  });

  // 4. Handle class initializers/constructor syntactic sugar in Dart
  // e.g. Person(this.name, this.age); -> constructor(name, age) { this.name = name; this.age = age; }
  // Look for: ClassName(this.field1, this.field2, ...)
  // e.g. "Point(this.x, this.y);" inside "class Point { ... }"
  // We replace it with: "constructor(x, y) { this.x = x; this.y = y; }"
  // Match `Identifier(this.name, this.age) { ... }` or `Identifier(this.name, this.age);`
  js = js.replace(/\b([A-Z][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*\{([\s\S]*?)\}/g, (match, className, paramsStr, body) => {
    if (paramsStr.includes('this.')) {
      const params = paramsStr.split(',').map(p => p.trim());
      const cleanParams = params.map(p => p.replace('this.', ''));
      const assignments = params
        .filter(p => p.startsWith('this.'))
        .map(p => {
          const field = p.replace('this.', '');
          return `this.${field} = ${field};`;
        }).join('\n      ');
      return `constructor(${cleanParams.join(', ')}) {\n      ${assignments}\n      ${body}\n    }`;
    }
    return match;
  });

  // Parameter shorthand without body: e.g. Point(this.x, this.y);
  js = js.replace(/\b([A-Z][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*;/g, (match, className, paramsStr) => {
    if (paramsStr.includes('this.')) {
      const params = paramsStr.split(',').map(p => p.trim());
      const cleanParams = params.map(p => p.replace('this.', ''));
      const assignments = params
        .filter(p => p.startsWith('this.'))
        .map(p => {
          const field = p.replace('this.', '');
          return `this.${field} = ${field};`;
        }).join('\n      ');
      return `constructor(${cleanParams.join(', ')}) {\n      ${assignments}\n    }`;
    }
    // Handle redirecting/named constructor structure e.g. Point.origin() : x = 0, y = 0;
    if (className.includes('.')) {
      return ''; // Strip named constructors or handle separately
    }
    return `constructor(${paramsStr}) {}`;
  });

  // Handle initializer lists: e.g., "Point.origin() : x = 0, y = 0;"
  // We can transpile simple ones into constructors
  js = js.replace(/([A-Z][a-zA-Z0-9_]*)\.([a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*:\s*([^;{]+)(;|{)/g, (match, className, namedCtor, params, initializers, bodyToken) => {
    const assignments = initializers.split(',').map(i => {
      const parts = i.split('=');
      if (parts.length === 2) {
        return `this.${parts[0].trim()} = ${parts[1].trim()};`;
      }
      return i;
    }).join('\n      ');
    const hasBody = bodyToken === '{';
    return `static ${namedCtor}(${params}) {\n      const instance = Object.create(${className}.prototype);\n      ${assignments}\n      return instance;\n    }`;
  });

  // 5. Functions & Method declarations:
  // e.g. "int add(int a, int b)" -> "function add(a, b)"
  // Clean parameter lists: strip explicit types in function signatures.
  // Match `(int a, String name)` -> `(a, name)`
  js = js.replace(/\(([^)]*)\)/g, (match, group) => {
    if (!group.trim()) return match;
    let params = group.split(',').map(param => {
      let trimmed = param.trim();
      // Don't modify map declarations e.g. {'name': 'Alice'}
      if (trimmed.includes(':')) return param; 
      let parts = trimmed.split(/\s+/);
      if (parts.length > 1) {
        // Strip out annotations like `required`, `int`, etc.
        const cleanName = parts[parts.length - 1].replace(/[?]/g, '');
        // Keep default parameter values e.g. name = "User"
        if (trimmed.includes('=')) {
          const varName = parts[0].replace('required', '').trim();
          const eqIndex = trimmed.indexOf('=');
          return trimmed.substring(eqIndex); // Return `= default`
        }
        return cleanName;
      }
      return trimmed;
    });
    return '(' + params.join(', ') + ')';
  });

  // Re-write Dart type function definitions to JS functions
  // e.g., "let add(a, b) {" -> "function add(a, b) {"
  // e.g., "void main() {" -> "function main() {"
  // Check for type names followed by identifier + params + open bracket
  js = js.replace(/\b(?:int|double|String|bool|num|dynamic|void|List|Map|var|final)\s+([a-zA-Z_][a-zA-Z0-9_]*\s*\([^)]*\)\s*\{)/g, 'function $1');

  // Handle bare main function: "main() {" -> "function main() {"
  js = js.replace(/\bmain\s*\(\)\s*\{/g, 'function main() {');

  // 6. Cascade notation `..`
  // We support simple single-cascades by translating them into separate operations on a temporary variable
  // E.g. "var sb = StringBuffer()..write('A')..write('B');"
  // For simplicity, we can do a replace:
  // Replace `..` with `.` if it fits, but cascades return the original receiver object.
  // To simulate cascades roughly: we can replace `..` with `.` but that might return the wrong value if we assign it.
  // For basic lessons, we can replace `..` with `.` if it's evaluated for side-effects, or handle `StringBuffer` specifically in mock libraries.
  js = js.replace(/\.\./g, '.');

  // 7. Null-safety operators: e.g. "String? name"
  // We strip ? from types like "int?" or "String?". That is already done by types stripping.

  // 8. Dart List constructor/extension methods:
  // Add support for Dart List methods:
  // .add -> .push
  // .addAll -> .push(...items)
  // .clear() -> .length = 0
  // .remove -> JS filters or standard splicing. We can map:
  // ".add(" -> ".push("
  js = js.replace(/\.add\(/g, '.push(');
  // ".contains(" -> ".includes("
  js = js.replace(/\.contains\(/g, '.includes(');

  return js;
}

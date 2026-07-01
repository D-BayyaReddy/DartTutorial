/*
  =============================================================================
  DART MASTER: 50 PROGRESSIVE LEARNING MODULES SYLLABUS
  =============================================================================
*/

export const LESSONS = [
  // --- CHAPTER 1: VARIABLES & BASICS (1-5) ---
  {
    id: "var-1",
    slug: "hello-world",
    chapter: "Variables & Basics",
    title: "Hello, World!",
    difficulty: "Easy",
    estimatedTime: "3 mins",
    xpReward: 30,
    explanation: "Welcome to Dart! To start, we print text to the screen. In Dart, the `main()` function is the entry point of every application. We print values using the `print()` function, terminated with a semicolon.",
    objectives: [
      "Define a void `main()` function.",
      "Print the exact string 'Hello World!' to the console."
    ],
    starterCode: `void main() {
  // Write your code here
  
}`,
    hint: "Use print('Hello World!'); inside the main function.",
    solution: `void main() {
  print("Hello World!");
}`,
    hiddenTests: [
      { description: "Console prints 'Hello World!'", type: "console", expected: "Hello World!" }
    ]
  },
  {
    id: "var-2",
    slug: "declaring-variables",
    chapter: "Variables & Basics",
    title: "Declaring Variables",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Variables store data. We can declare a variable using the `var` keyword, which lets Dart infer the type automatically based on the value.",
    objectives: [
      "Declare a variable named `course` and assign it the value 'Dart Master'.",
      "Print the value of `course`."
    ],
    starterCode: `void main() {
  // Declare your variable here
  
}`,
    hint: "Write: var course = 'Dart Master'; and then print(course);",
    solution: `void main() {
  var course = "Dart Master";
  print(course);
}`,
    hiddenTests: [
      { description: "Variable 'course' exists with correct value", type: "variable", target: "course", expected: "Dart Master" },
      { description: "Console prints 'Dart Master'", type: "console", expected: "Dart Master" }
    ]
  },
  {
    id: "var-3",
    slug: "explicit-typing",
    chapter: "Variables & Basics",
    title: "Explicit Typing",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Instead of `var`, you can explicitly specify the data type. Common types are `int` for integers and `String` for texts.",
    objectives: [
      "Declare an explicitly typed integer variable named `lessonsCount` and set it to 50.",
      "Declare an explicitly typed String variable named `platformName` and set it to 'Dart Master'."
    ],
    starterCode: `void main() {
  // Explicitly type your variables
  
}`,
    hint: "Write: int lessonsCount = 50; String platformName = 'Dart Master';",
    solution: `void main() {
  int lessonsCount = 50;
  String platformName = "Dart Master";
}`,
    hiddenTests: [
      { description: "lessonsCount equals 50", type: "variable", target: "lessonsCount", expected: 50 },
      { description: "platformName equals 'Dart Master'", type: "variable", target: "platformName", expected: "Dart Master" }
    ]
  },
  {
    id: "var-4",
    slug: "final-vs-const",
    chapter: "Variables & Basics",
    title: "Read-only: final & const",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "If you don't intend to modify a variable, use `final` or `const`. A `final` variable is set once (evaluated at runtime), while `const` is a compile-time constant.",
    objectives: [
      "Declare a `const` double variable named `pi` and set it to 3.14159.",
      "Declare a `final` integer variable named `year` and set it to 2026."
    ],
    starterCode: `void main() {
  // Declare constants
  
}`,
    hint: "Write: const double pi = 3.14159; and final int year = 2026;",
    solution: `void main() {
  const double pi = 3.14159;
  final int year = 2026;
}`,
    hiddenTests: [
      { description: "pi equals 3.14159", type: "variable", target: "pi", expected: 3.14159 },
      { description: "year equals 2026", type: "variable", target: "year", expected: 2026 }
    ]
  },
  {
    id: "var-5",
    slug: "dynamic-types",
    chapter: "Variables & Basics",
    title: "Dynamic Types",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "The `dynamic` type instructs Dart to bypass static type-checking. Variables declared as `dynamic` can hold any object type and change types dynamically at runtime.",
    objectives: [
      "Declare a dynamic variable named `data` and initialize it to the integer 42.",
      "Reassign `data` to the string 'Dart' and print it."
    ],
    starterCode: `void main() {
  // Declare dynamic variable
  
}`,
    hint: "Write: dynamic data = 42; data = 'Dart'; print(data);",
    solution: `void main() {
  dynamic data = 42;
  data = "Dart";
  print(data);
}`,
    hiddenTests: [
      { description: "data has final value 'Dart'", type: "variable", target: "data", expected: "Dart" },
      { description: "Console prints 'Dart'", type: "console", expected: "Dart" }
    ]
  },

  // --- CHAPTER 2: BASIC DATA TYPES (6-10) ---
  {
    id: "type-1",
    slug: "numbers-int-double",
    chapter: "Basic Data Types",
    title: "Integers and Doubles",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Dart has two numeric types: `int` for integers and `double` for decimal numbers. Both inherit from the `num` class.",
    objectives: [
      "Declare an `int` named `items` equal to 12.",
      "Declare a `double` named `cost` equal to 5.99.",
      "Declare a `num` named `quantity` and set it to 10."
    ],
    starterCode: `void main() {
  // Define numeric types
  
}`,
    hint: "Write: int items = 12; double cost = 5.99; num quantity = 10;",
    solution: `void main() {
  int items = 12;
  double cost = 5.99;
  num quantity = 10;
}`,
    hiddenTests: [
      { description: "items equals 12", type: "variable", target: "items", expected: 12 },
      { description: "cost equals 5.99", type: "variable", target: "cost", expected: 5.99 },
      { description: "quantity equals 10", type: "variable", target: "quantity", expected: 10 }
    ]
  },
  {
    id: "type-2",
    slug: "string-interpolation",
    chapter: "Basic Data Types",
    title: "String Interpolation",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "Embed variable values inside a string using the `$` symbol, or `${expression}` for multi-variable equations/methods.",
    objectives: [
      "Declare a variable `name` equal to 'Bob'.",
      "Declare a variable `score` equal to 95.",
      "Define a string `message` using interpolation: 'Bob scored 95 points'."
    ],
    starterCode: `void main() {
  // Use string interpolation
  
}`,
    hint: "Write: String message = '$name scored $score points';",
    solution: `void main() {
  var name = "Bob";
  var score = 95;
  String message = "$name scored $score points";
}`,
    hiddenTests: [
      { description: "message equals 'Bob scored 95 points'", type: "variable", target: "message", expected: "Bob scored 95 points" }
    ]
  },
  {
    id: "type-3",
    slug: "multiline-strings",
    chapter: "Basic Data Types",
    title: "Multi-line Strings",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Creating strings extending across multiple lines is achieved using triple quotes (`'''` or `\"\"\"`).",
    objectives: [
      "Create a multi-line string variable named `poem` containing three lines of text.",
      "Print the value of `poem`."
    ],
    starterCode: `void main() {
  // Define multi-line string
  
}`,
    hint: "Write: var poem = '''Line 1\\nLine 2\\nLine 3'''; and print(poem);",
    solution: `void main() {
  var poem = """Line 1
Line 2
Line 3""";
  print(poem);
}`,
    hiddenTests: [
      { description: "Poem variable exists", type: "variable", target: "poem", expected: "Line 1\nLine 2\nLine 3" }
    ]
  },
  {
    id: "type-4",
    slug: "booleans",
    chapter: "Basic Data Types",
    title: "Booleans",
    difficulty: "Easy",
    estimatedTime: "3 mins",
    xpReward: 35,
    explanation: "The `bool` type represents true/false logic. Dart has strict boolean evaluations: only actual boolean objects evaluate to true in expressions.",
    objectives: [
      "Declare a `bool` variable `isCompleted` and set it to true.",
      "Declare a `bool` variable `isTrial` and set it to false."
    ],
    starterCode: `void main() {
  // Define boolean logic
  
}`,
    hint: "Write: bool isCompleted = true; and bool isTrial = false;",
    solution: `void main() {
  bool isCompleted = true;
  bool isTrial = false;
}`,
    hiddenTests: [
      { description: "isCompleted is true", type: "variable", target: "isCompleted", expected: true },
      { description: "isTrial is false", type: "variable", target: "isTrial", expected: false }
    ]
  },
  {
    id: "type-5",
    slug: "runes-emojis",
    chapter: "Basic Data Types",
    title: "Runes and Emojis",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Runes represent UTF-32 code points of strings. They are used to express emojis and international symbols. E.g., `\\u{1f600}`.",
    objectives: [
      "Declare a String named `smiley` containing the unicode escape for grinning face emoji: `\\u{1f600}`.",
      "Print the value of `smiley`."
    ],
    starterCode: `void main() {
  // Declare smiley emoji
  
}`,
    hint: "Write: String smiley = '\\u{1f600}'; and print(smiley);",
    solution: `void main() {
  String smiley = "\\u{1f600}";
  print(smiley);
}`,
    hiddenTests: [
      { description: "smiley is declared correctly", type: "variable", target: "smiley", expected: "😀" },
      { description: "Prints emoji", type: "console", expected: "😀" }
    ]
  },

  // --- CHAPTER 3: OPERATORS (11-15) ---
  {
    id: "op-1",
    slug: "arithmetic-operators",
    chapter: "Operators",
    title: "Arithmetic Operators",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Standard arithmetic operations: `+` (add), `-` (subtract), `*` (multiply), `/` (divide), `~/` (integer divide), and `%` (modulo).",
    objectives: [
      "Declare an integer `quotient` that stores `10 ~/ 3`.",
      "Declare an integer `remainder` that stores `10 % 3`."
    ],
    starterCode: `void main() {
  // Use division operators
  
}`,
    hint: "Use ~/ for integer division and % for modulo.",
    solution: `void main() {
  int quotient = 10 ~/ 3;
  int remainder = 10 % 3;
}`,
    hiddenTests: [
      { description: "quotient equals 3", type: "variable", target: "quotient", expected: 3 },
      { description: "remainder equals 1", type: "variable", target: "remainder", expected: 1 }
    ]
  },
  {
    id: "op-2",
    slug: "relational-operators",
    chapter: "Operators",
    title: "Relational Operators",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 35,
    explanation: "Relational checks compare inputs: `==` (equal), `!=` (not equal), `>` (greater than), and `<` (less than).",
    objectives: [
      "Compare if `15` is greater than or equal to `10`, assign to `bool check1`.",
      "Compare if `'Dart'` is equal to `'Java'`, assign to `bool check2`."
    ],
    starterCode: `void main() {
  // Relational comparisons
  
}`,
    hint: "Write: bool check1 = 15 >= 10; and bool check2 = 'Dart' == 'Java';",
    solution: `void main() {
  bool check1 = 15 >= 10;
  bool check2 = "Dart" == "Java";
}`,
    hiddenTests: [
      { description: "check1 is true", type: "variable", target: "check1", expected: true },
      { description: "check2 is false", type: "variable", target: "check2", expected: false }
    ]
  },
  {
    id: "op-3",
    slug: "type-test-operators",
    chapter: "Operators",
    title: "Type Test Operators",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Use `is` and `is!` to identify variables types at runtime.",
    objectives: [
      "Declare a variable `name` equal to 'Alice'.",
      "Check if `name is String`, assign to a boolean `isString`.",
      "Check if `name is! int`, assign to a boolean `isNotInt`."
    ],
    starterCode: `void main() {
  // Test variable types
  
}`,
    hint: "Write: bool isString = name is String; and bool isNotInt = name is! int;",
    solution: `void main() {
  var name = "Alice";
  bool isString = name is String;
  bool isNotInt = name is! int;
}`,
    hiddenTests: [
      { description: "isString is true", type: "variable", target: "isString", expected: true },
      { description: "isNotInt is true", type: "variable", target: "isNotInt", expected: true }
    ]
  },
  {
    id: "op-4",
    slug: "null-coalescing-assignment",
    chapter: "Operators",
    title: "Null-Coalescing Assignment",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "The `??=` operator assigns a value to a variable ONLY if that variable is currently null.",
    objectives: [
      "Declare a nullable integer variable `score` initialized to null.",
      "Assign it a value of `100` using `??=`.",
      "Print the value of `score`."
    ],
    starterCode: `void main() {
  // Use ??=
  
}`,
    hint: "Write: int? score; score ??= 100; print(score);",
    solution: `void main() {
  int? score;
  score ??= 100;
  print(score);
}`,
    hiddenTests: [
      { description: "score is assigned 100", type: "variable", target: "score", expected: 100 },
      { description: "Console prints 100", type: "console", expected: "100" }
    ]
  },
  {
    id: "op-5",
    slug: "cascade-notation",
    chapter: "Operators",
    title: "Cascade Notation",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Cascade notation (`..`) allows performing a sequence of operations on the same object without nesting variables.",
    objectives: [
      "Instantiate a `StringBuffer`.",
      "Chain write operations using `..` to write 'Dart ' and 'Master'.",
      "Assign the string conversion to variable `result` and print it."
    ],
    starterCode: `void main() {
  // Build a string using Cascade
  
}`,
    hint: "Write: var result = (StringBuffer()..write('Dart ')..write('Master')).toString();",
    solution: `void main() {
  var result = (StringBuffer()..write("Dart ")..write("Master")).toString();
  print(result);
}`,
    hiddenTests: [
      { description: "result equals 'Dart Master'", type: "variable", target: "result", expected: "Dart Master" },
      { description: "Console prints 'Dart Master'", type: "console", expected: "Dart Master" }
    ]
  },

  // --- CHAPTER 4: CONDITIONS (16-20) ---
  {
    id: "cond-1",
    slug: "if-else",
    chapter: "Conditions & Logic",
    title: "If-Else Statements",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Check values using conditional logic (`if`, `else if`, `else`). The condition check must resolve to a strict boolean.",
    objectives: [
      "Declare an integer variable `marks` equal to 85.",
      "If marks >= 90 print 'Excellent', else if marks >= 80 print 'Very Good', else print 'Pass'."
    ],
    starterCode: `void main() {
  // Implement conditional logic
  
}`,
    hint: "Create an if-else structure testing marks >= 90 and marks >= 80.",
    solution: `void main() {
  int marks = 85;
  if (marks >= 90) {
    print("Excellent");
  } else if (marks >= 80) {
    print("Very Good");
  } else {
    print("Pass");
  }
}`,
    hiddenTests: [
      { description: "Console outputs 'Very Good'", type: "console", expected: "Very Good" }
    ]
  },
  {
    id: "cond-2",
    slug: "ternary-operator",
    chapter: "Conditions & Logic",
    title: "Ternary Operator",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 45,
    explanation: "A shortcut syntax for simple if-else checks: `condition ? expr1 : expr2`.",
    objectives: [
      "Declare an integer `age` set to 20.",
      "Assign variable `status` to 'Adult' if age >= 18, else 'Minor' using ternary operator."
    ],
    starterCode: `void main() {
  // Use ternary statement
  
}`,
    hint: "Write: String status = age >= 18 ? 'Adult' : 'Minor';",
    solution: `void main() {
  int age = 20;
  String status = age >= 18 ? "Adult" : "Minor";
}`,
    hiddenTests: [
      { description: "status equals 'Adult'", type: "variable", target: "status", expected: "Adult" }
    ]
  },
  {
    id: "cond-3",
    slug: "traditional-switch",
    chapter: "Conditions & Logic",
    title: "Switch Statements",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 45,
    explanation: "A traditional switch statement tests an expression against multiple cases using `switch`, `case`, `break`, and `default`.",
    objectives: [
      "Declare a String `signal` set to 'yellow'.",
      "Switch on `signal`: if 'red' print 'Stop', if 'yellow' print 'Caution', default print 'Go'."
    ],
    starterCode: `void main() {
  // Define traditional switch
  
}`,
    hint: "Use cases for 'red', 'yellow' and default block.",
    solution: `void main() {
  var signal = "yellow";
  switch(signal) {
    case "red":
      print("Stop");
      break;
    case "yellow":
      print("Caution");
      break;
    default:
      print("Go");
  }
}`,
    hiddenTests: [
      { description: "Console prints 'Caution'", type: "console", expected: "Caution" }
    ]
  },
  {
    id: "cond-4",
    slug: "switch-expressions",
    chapter: "Conditions & Logic",
    title: "Switch Expressions (Dart 3+)",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "In modern Dart, `switch` can return values directly. It maps cases using `=>` and defaults using `_`.",
    objectives: [
      "Declare a String `code` equal to 'FR'.",
      "Create a variable `country` that evaluates `switch(code)`: 'US' => 'USA', 'FR' => 'France', _ => 'Other'."
    ],
    starterCode: `void main() {
  // Use Dart 3 Switch Expression
  
}`,
    hint: "Write: String country = switch(code) { 'US' => 'USA', 'FR' => 'France', _ => 'Other' };",
    solution: `void main() {
  var code = "FR";
  String country = switch(code) {
    "US" => "USA",
    "FR" => "France",
    _ => "Other"
  };
}`,
    hiddenTests: [
      { description: "country is set to 'France'", type: "variable", target: "country", expected: "France" }
    ]
  },
  {
    id: "cond-5",
    slug: "assert-statement",
    chapter: "Conditions & Logic",
    title: "Assertions",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Assertions (`assert`) check conditions at development time and crash execution with a message if the condition checks to false.",
    objectives: [
      "Declare a variable `score` equal to 50.",
      "Write an assert statement verifying that `score > 0` with message 'Score must be positive'."
    ],
    starterCode: `void main() {
  // Write assertion statement
  
}`,
    hint: "Write: assert(score > 0, 'Score must be positive');",
    solution: `void main() {
  int score = 50;
  assert(score > 0, "Score must be positive");
}`,
    hiddenTests: [
      { description: "Assert statement compiles successfully", type: "variable", target: "score", expected: 50 }
    ]
  },

  // --- CHAPTER 5: LOOPS (21-25) ---
  {
    id: "loop-1",
    slug: "for-loop",
    chapter: "Loops & Iterations",
    title: "For Loops",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 45,
    explanation: "The standard for loop executes code a set number of times: `for (init; cond; increment)`.",
    objectives: [
      "Write a for loop starting at `i = 1` up to `i <= 3`.",
      "Print the value of `i` in each loop iteration."
    ],
    starterCode: `void main() {
  // Print numbers 1 to 3
  
}`,
    hint: "Use: for (int i = 1; i <= 3; i++) { print(i); }",
    solution: `void main() {
  for (int i = 1; i <= 3; i++) {
    print(i);
  }
}`,
    hiddenTests: [
      { description: "Prints 1", type: "console", expected: "1" },
      { description: "Prints 2", type: "console", expected: "2" },
      { description: "Prints 3", type: "console", expected: "3" }
    ]
  },
  {
    id: "loop-2",
    slug: "while-loop",
    chapter: "Loops & Iterations",
    title: "While Loops",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "A `while` loop checks the boolean condition before running each loop iteration.",
    objectives: [
      "Declare a variable `counter` equal to 3.",
      "Loop while `counter > 0`, print `counter`, and decrement it."
    ],
    starterCode: `void main() {
  // Use a while loop
  
}`,
    hint: "Use: while (counter > 0) { print(counter); counter--; }",
    solution: `void main() {
  int counter = 3;
  while (counter > 0) {
    print(counter);
    counter--;
  }
}`,
    hiddenTests: [
      { description: "Prints 3", type: "console", expected: "3" },
      { description: "Prints 1", type: "console", expected: "1" }
    ]
  },
  {
    id: "loop-3",
    slug: "do-while",
    chapter: "Loops & Iterations",
    title: "Do-While Loops",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "A `do-while` loop executes the body first, then checks the condition. Guaranteed to run at least once.",
    objectives: [
      "Declare variable `num` equal to 5.",
      "Execute a do-while printing `num` once, while condition is false (`num < 5`)."
    ],
    starterCode: `void main() {
  // Do while structure
  
}`,
    hint: "Use: do { print(num); } while (num < 5);",
    solution: `void main() {
  int num = 5;
  do {
    print(num);
  } while (num < 5);
}`,
    hiddenTests: [
      { description: "Prints 5", type: "console", expected: "5" }
    ]
  },
  {
    id: "loop-4",
    slug: "break-continue",
    chapter: "Loops & Iterations",
    title: "Break and Continue",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "`continue` skips the rest of the current iteration. `break` stops the loop entirely.",
    objectives: [
      "Loop from 1 to 5. Skip iteration if index is 2.",
      "Stop loop if index is 4."
    ],
    starterCode: `void main() {
  // Implement continue and break
  
}`,
    hint: "Use if (i == 2) continue; and if (i == 4) break; inside for loop.",
    solution: `void main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 2) continue;
    if (i == 4) break;
    print(i);
  }
}`,
    hiddenTests: [
      { description: "Prints 1", type: "console", expected: "1" },
      { description: "Skips 2", type: "console", expected: "3" },
      { description: "Breaks at 4", type: "console", expected: "3" }
    ]
  },
  {
    id: "loop-5",
    slug: "for-each",
    chapter: "Loops & Iterations",
    title: "ForEach Method",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "Iterate lists directly using the functional `.forEach()` method.",
    objectives: [
      "Declare a list of strings `words = ['a', 'b'];`.",
      "Call `words.forEach()` to print each item."
    ],
    starterCode: `void main() {
  // Use forEach
  
}`,
    hint: "Write: words.forEach((item) => print(item));",
    solution: `void main() {
  var words = ["a", "b"];
  words.forEach((item) => print(item));
}`,
    hiddenTests: [
      { description: "Prints 'a'", type: "console", expected: "a" },
      { description: "Prints 'b'", type: "console", expected: "b" }
    ]
  },

  // --- CHAPTER 6: FUNCTIONS & PARAMETERS (26-30) ---
  {
    id: "func-1",
    slug: "declaring-functions",
    chapter: "Functions",
    title: "Basic Functions",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "Functions capture reusable blocks of code. State parameter types and return type for clarity.",
    objectives: [
      "Create a function `int add(int a, int b)` that returns the sum of a and b.",
      "Call the function inside `main` with inputs 3 and 7, and print the output."
    ],
    starterCode: `// Write your function here

void main() {
  // Call function
  
}`,
    hint: "Define: int add(int a, int b) { return a + b; }",
    solution: `int add(int a, int b) {
  return a + b;
}
void main() {
  print(add(3, 7));
}`,
    hiddenTests: [
      { description: "add function exists and returns sum", type: "function", target: "add(5, 10)", expected: 15 },
      { description: "Prints result 10", type: "console", expected: "10" }
    ]
  },
  {
    id: "func-2",
    slug: "optional-positional-parameters",
    chapter: "Functions",
    title: "Optional Positional Parameters",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Make parameters optional by wrapping them in brackets `[]` at the end of parameter list. Provide default values or handle null.",
    objectives: [
      "Define a function `String greet(String name, [String greeting = 'Hello'])`.",
      "The function returns '$greeting, $name!'."
    ],
    starterCode: `// Define greet here

void main() {
  
}`,
    hint: "Use: String greet(String name, [String greeting = 'Hello']) { return '$greeting, $name!'; }",
    solution: `String greet(String name, [String greeting = "Hello"]) {
  return "$greeting, $name!";
}
void main() {}`,
    hiddenTests: [
      { description: "Greeting with default parameter works", type: "function", target: "greet('Alice')", expected: "Hello, Alice!" },
      { description: "Greeting with custom parameter works", type: "function", target: "greet('Bob', 'Hi')", expected: "Hi, Bob!" }
    ]
  },
  {
    id: "func-3",
    slug: "named-parameters",
    chapter: "Functions",
    title: "Named Parameters",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Named parameters are enclosed in `{}`. They are optional by default unless marked with the `required` keyword.",
    objectives: [
      "Define a function `void createUser({required String username, int age = 18})`.",
      "The function should print 'User: $username, Age: $age'."
    ],
    starterCode: `// Define createUser

void main() {
  
}`,
    hint: "Use: void createUser({required String username, int age = 18}) { print('User: $username, Age: $age'); }",
    solution: `void createUser({required String username, int age = 18}) {
  print("User: $username, Age: $age");
}
void main() {}`,
    hiddenTests: [
      { description: "createUser works with required parameter only", type: "function", target: "( () => { createUser(username: 'coder'); } )()", expected: null },
      { description: "Prints default age 18", type: "console", expected: "User: coder, Age: 18" }
    ]
  },
  {
    id: "func-4",
    slug: "arrow-functions",
    chapter: "Functions",
    title: "Arrow Syntax",
    difficulty: "Easy",
    estimatedTime: "4 mins",
    xpReward: 40,
    explanation: "If a function body has only a single expression, shorten it using `=>` (arrow function syntax).",
    objectives: [
      "Define an arrow function `double multiply(double x, double y)` that returns the product."
    ],
    starterCode: `// Use => here

void main() {
  
}`,
    hint: "Write: double multiply(double x, double y) => x * y;",
    solution: `double multiply(double x, double y) => x * y;
void main() {}`,
    hiddenTests: [
      { description: "multiply returns expected product", type: "function", target: "multiply(3.0, 4.0)", expected: 12.0 }
    ]
  },
  {
    id: "func-5",
    slug: "anonymous-functions",
    chapter: "Functions",
    title: "Anonymous Functions",
    difficulty: "Medium",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "An anonymous function (or closure) has no name but can define logic. Often passed directly into lists/methods.",
    objectives: [
      "Declare a list of integers `scores = [1, 2];`.",
      "Map over scores using an anonymous function that doubles each value: `scores.map((n) => n * 2)`.",
      "Print the final collection list."
    ],
    starterCode: `void main() {
  var scores = [1, 2];
  // Map and print
  
}`,
    hint: "Write: var result = scores.map((n) => n * 2).toList(); print(result);",
    solution: `void main() {
  var scores = [1, 2];
  var result = scores.map((n) => n * 2).toList();
  print(result);
}`,
    hiddenTests: [
      { description: "Console output shows doubled list", type: "console", expected: "[2,4]" }
    ]
  },

  // --- CHAPTER 7: CLASSES & OOP (31-35) ---
  {
    id: "class-1",
    slug: "basic-classes",
    chapter: "Classes & Objects",
    title: "Basic Classes",
    difficulty: "Easy",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "A class defines standard blueprint objects. Add properties and methods to model state.",
    objectives: [
      "Define a class `User` with property `String name`.",
      "Add a method `greet()` printing 'Hello, my name is [name]'."
    ],
    starterCode: `// Define User class

void main() {
  
}`,
    hint: "Inside User: String name = ''; void greet() { print('Hello, my name is $name'); }",
    solution: `class User {
  String name = "";
  void greet() {
    print("Hello, my name is $name");
  }
}
void main() {}`,
    hiddenTests: [
      { description: "User class instantiates and has greet method", type: "function", target: "( () => { var u = User(); u.name = 'Bob'; u.greet(); } )()", expected: null },
      { description: "Console outputs name greeting", type: "console", expected: "Hello, my name is Bob" }
    ]
  },
  {
    id: "class-2",
    slug: "private-properties",
    chapter: "Classes & Objects",
    title: "Private Fields",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Dart secures values using prefix `_`. It makes variables private to their library (file).",
    objectives: [
      "Define a class `Account` with private variable `double _balance = 100.0`.",
      "Define a getter method `double get balance => _balance;` to retrieve the balance."
    ],
    starterCode: `// Define Account class

void main() {
  
}`,
    hint: "Use double _balance = 100.0; and double get balance => _balance; inside class Account.",
    solution: `class Account {
  double _balance = 100.0;
  double get balance => _balance;
}
void main() {}`,
    hiddenTests: [
      { description: "balance returns 100.0", type: "function", target: "Account().balance", expected: 100.0 }
    ]
  },
  {
    id: "class-3",
    slug: "setters-validation",
    chapter: "Classes & Objects",
    title: "Setters and Validation",
    difficulty: "Medium",
    estimatedTime: "7 mins",
    xpReward: 70,
    explanation: "A setter customizes writing properties: `set propertyName(type value) { ... }`.",
    objectives: [
      "Define a class `User` with a private property `int _age = 0`.",
      "Add a getter `age`.",
      "Add a setter `age` checking `if (value >= 0)` to assign the private variable, else print 'Invalid age'."
    ],
    starterCode: `// Define User class with setter validation

void main() {
  
}`,
    hint: "set age(int value) { if (value >= 0) _age = value; else print('Invalid age'); }",
    solution: `class User {
  int _age = 0;
  int get age => _age;
  set age(int value) {
    if (value >= 0) {
      _age = value;
    } else {
      print("Invalid age");
    }
  }
}
void main() {}`,
    hiddenTests: [
      { description: "Setter accepts positive value", type: "function", target: "( () => { var u = User(); u.age = 20; return u.age; } )()", expected: 20 },
      { description: "Setter rejects negative value", type: "function", target: "( () => { var u = User(); u.age = -5; } )()", expected: null },
      { description: "Rejection prints warning", type: "console", expected: "Invalid age" }
    ]
  },
  {
    id: "class-4",
    slug: "override-tostring",
    chapter: "Classes & Objects",
    title: "Overriding toString",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "By default, objects print as `Instance of 'ClassName'`. Overriding `toString()` outputs clean text descriptions.",
    objectives: [
      "Define class `Book` with properties `title` and `author`.",
      "Override `toString()` to return: '[title] by [author]'."
    ],
    starterCode: `// Override toString in Book class

void main() {
  
}`,
    hint: "Use: @override String toString() { return '$title by $author'; }",
    solution: `class Book {
  String title = "";
  String author = "";
  @override
  String toString() {
    return "$title by $author";
  }
}
void main() {}`,
    hiddenTests: [
      { description: "toString returns formatted string", type: "function", target: "( () => { var b = Book(); b.title='Dart'; b.author='Dev'; return b.toString(); } )()", expected: "Dart by Dev" }
    ]
  },
  {
    id: "class-5",
    slug: "custom-equality",
    chapter: "Classes & Objects",
    title: "Object Equality",
    difficulty: "Hard",
    estimatedTime: "8 mins",
    xpReward: 80,
    explanation: "Objects compare references by default. To compare properties, overload the `==` operator and `hashCode` getter.",
    objectives: [
      "Define class `Point` with `final int x, y;`.",
      "Add a constructor `Point(this.x, this.y);`.",
      "Override `operator ==` checking properties, and `hashCode` return `x.hashCode ^ y.hashCode`."
    ],
    starterCode: `// Point with custom equality

void main() {
  
}`,
    hint: "Use: @override bool operator ==(Object other) => other is Point && other.x == x && other.y == y;",
    solution: `class Point {
  final int x;
  final int y;
  Point(this.x, this.y);
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is Point && other.x == x && other.y == y;
  }
  @override
  int get hashCode => x.hashCode ^ y.hashCode;
}
void main() {}`,
    hiddenTests: [
      { description: "Equals operator matches matching values", type: "function", target: "Point(1, 2) == Point(1, 2)", expected: true },
      { description: "Equals operator flags mismatches", type: "function", target: "Point(1, 2) == Point(3, 4)", expected: false }
    ]
  },

  // --- CHAPTER 8: CONSTRUCTORS & INHERITANCE (36-40) ---
  {
    id: "ctor-1",
    slug: "generative-constructors",
    chapter: "Constructors & Inheritance",
    title: "Generative Constructors",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "Generative constructors initialize properties. Use formal parameter shorthand `this.field` to assign variables instantly.",
    objectives: [
      "Define a class `Car` with properties `brand` and `year`.",
      "Define a generative constructor `Car(this.brand, this.year);`."
    ],
    starterCode: `// Define Car generative constructor

void main() {
  
}`,
    hint: "Write: class Car { String brand; int year; Car(this.brand, this.year); }",
    solution: `class Car {
  String brand;
  int year;
  Car(this.brand, this.year);
}
void main() {}`,
    hiddenTests: [
      { description: "Constructor initializes values", type: "function", target: "( () => { var c = Car('Toyota', 2020); return c.brand; } )()", expected: "Toyota" }
    ]
  },
  {
    id: "ctor-2",
    slug: "named-constructors",
    chapter: "Constructors & Inheritance",
    title: "Named Constructors",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Named constructors let a class define multiple starting configurations: `ClassName.name(...)`.",
    objectives: [
      "Define a class `Color` with properties `red`, `green`, `blue`.",
      "Add generative constructor `Color(this.red, this.green, this.blue);`.",
      "Add a named constructor `Color.black() : red = 0, green = 0, blue = 0;`."
    ],
    starterCode: `// Named constructor on Color

void main() {
  
}`,
    hint: "Use initializer list syntax for black(): Color.black() : red = 0, green = 0, blue = 0;",
    solution: `class Color {
  int red;
  int green;
  int blue;
  Color(this.red, this.green, this.blue);
  Color.black() : red = 0, green = 0, blue = 0;
}
void main() {}`,
    hiddenTests: [
      { description: "black named constructor sets red to 0", type: "function", target: "Color.black().red", expected: 0 },
      { description: "black named constructor sets blue to 0", type: "function", target: "Color.black().blue", expected: 0 }
    ]
  },
  {
    id: "ctor-3",
    slug: "factory-constructors",
    chapter: "Constructors & Inheritance",
    title: "Factory Constructors",
    difficulty: "Hard",
    estimatedTime: "8 mins",
    xpReward: 80,
    explanation: "A `factory` constructor doesn't always build new instances. It can fetch matching cached objects or instantiate sub-classes.",
    objectives: [
      "Define a class `Logger` with a static map cache `static final Map<String, Logger> _cache = {};`.",
      "Create private constructor `Logger._internal(this.name);`.",
      "Create factory constructor `factory Logger(String name)` checking cache values."
    ],
    starterCode: `// Singleton Logger Factory

void main() {
  
}`,
    hint: "Inside factory: return _cache.putIfAbsent(name, () => Logger._internal(name));",
    solution: `class Logger {
  final String name;
  static final Map<String, Logger> _cache = {};
  Logger._internal(this.name);
  factory Logger(String name) {
    return _cache.putIfAbsent(name, () => Logger._internal(name));
  }
}
void main() {}`,
    hiddenTests: [
      { description: "Factory returns matching cached object reference", type: "function", target: "identical(Logger('UI'), Logger('UI'))", expected: true }
    ]
  },
  {
    id: "ctor-4",
    slug: "inheritance-extends",
    chapter: "Constructors & Inheritance",
    title: "Inheritance",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Subclasses extend parent classes using the `extends` keyword. They inherit all non-private fields and methods.",
    objectives: [
      "Define parent class `Animal` with property `name` and constructor `Animal(this.name)`.",
      "Define subclass `Dog` extending `Animal`. Use super initializer parameters `Dog(super.name);`."
    ],
    starterCode: `// Dog extends Animal

void main() {
  
}`,
    hint: "Write: class Dog extends Animal { Dog(super.name); }",
    solution: `class Animal {
  String name;
  Animal(this.name);
}
class Dog extends Animal {
  Dog(super.name);
}
void main() {}`,
    hiddenTests: [
      { description: "Dog subclass passes name to super", type: "function", target: "Dog('Fido').name", expected: "Fido" }
    ]
  },
  {
    id: "ctor-5",
    slug: "abstract-classes",
    chapter: "Constructors & Inheritance",
    title: "Abstract Classes & Interfaces",
    difficulty: "Medium",
    estimatedTime: "7 mins",
    xpReward: 70,
    explanation: "An `abstract class` defines signatures without code bodies. Classes implement them using `implements` to act as interfaces.",
    objectives: [
      "Define abstract class `Vehicle` with abstract method `void drive();`.",
      "Define class `Car` implementing `Vehicle` overriding `drive()` to print 'Car driving'."
    ],
    starterCode: `// Interfaces & Overrides

void main() {
  
}`,
    hint: "Write: class Car implements Vehicle { @override void drive() { print('Car driving'); } }",
    solution: `abstract class Vehicle {
  void drive();
}
class Car implements Vehicle {
  @override
  void drive() {
    print("Car driving");
  }
}
void main() {}`,
    hiddenTests: [
      { description: "Car overrides drive interface", type: "function", target: "( () => { var c = Car(); c.drive(); } )()", expected: null },
      { description: "Console prints drive notification", type: "console", expected: "Car driving" }
    ]
  },

  // --- CHAPTER 9: MIXINS, EXTENSIONS & GENERICS (41-45) ---
  {
    id: "adv-1",
    slug: "mixins-with",
    chapter: "Advanced OOP Concepts",
    title: "Mixins",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 65,
    explanation: "Mixins allow sharing functionality across multiple class structures. Defined using `mixin` and applied using `with`.",
    objectives: [
      "Define mixin `Flyer` with method `void fly() => print('Flying');`.",
      "Define class `Bird` with `Flyer` using `with Flyer`."
    ],
    starterCode: `// Mixin flyer integration

void main() {
  
}`,
    hint: "Write: mixin Flyer { void fly() => print('Flying'); } class Bird with Flyer {}",
    solution: `mixin Flyer {
  void fly() => print("Flying");
}
class Bird with Flyer {}
void main() {}`,
    hiddenTests: [
      { description: "Bird has fly behavior", type: "function", target: "( () => { var b = Bird(); b.fly(); } )()", expected: null },
      { description: "Console prints fly execution", type: "console", expected: "Flying" }
    ]
  },
  {
    id: "adv-2",
    slug: "extension-methods",
    chapter: "Advanced OOP Concepts",
    title: "Extension Methods",
    difficulty: "Hard",
    estimatedTime: "7 mins",
    xpReward: 70,
    explanation: "Extensions append properties or methods to existing classes without editing source code.",
    objectives: [
      "Create extension `ParseNumbers` on `String`.",
      "Define getter `int get toInt => int.parse(this);`."
    ],
    starterCode: `// String extensions toInt

void main() {
  
}`,
    hint: "Write: extension ParseNumbers on String { int get toInt => int.parse(this); }",
    solution: `extension ParseNumbers on String {
  int get toInt => int.parse(this);
}
void main() {}`,
    hiddenTests: [
      { description: "ToInt extension parses string successfully", type: "function", target: "'123'.toInt", expected: 123 }
    ]
  },
  {
    id: "adv-3",
    slug: "generic-classes",
    chapter: "Advanced OOP Concepts",
    title: "Generic Classes",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Generics declare classes capable of operating on user-defined types. E.g. `Box<T>`.",
    objectives: [
      "Define class `Box<T>` with variable `T content;`.",
      "Define constructor `Box(this.content);`."
    ],
    starterCode: `// Box Generic Class

void main() {
  
}`,
    hint: "Write: class Box<T> { T content; Box(this.content); }",
    solution: `class Box<T> {
  T content;
  Box(this.content);
}
void main() {}`,
    hiddenTests: [
      { description: "Box holds generic String values", type: "function", target: "Box<String>('Hello').content", expected: "Hello" },
      { description: "Box holds generic Integer values", type: "function", target: "Box<int>(42).content", expected: 42 }
    ]
  },
  {
    id: "adv-4",
    slug: "generic-constraints",
    chapter: "Advanced OOP Concepts",
    title: "Generic Constraints",
    difficulty: "Hard",
    estimatedTime: "7 mins",
    xpReward: 75,
    explanation: "Restrict generic types using `extends` inside parameter definitions. E.g., `<T extends num>` limits T to numeric inputs.",
    objectives: [
      "Define class `MathBox<T extends num>` with constructor `MathBox(this.value);`.",
      "Define `T value;`."
    ],
    starterCode: `// Numeric MathBox constraint

void main() {
  
}`,
    hint: "Write: class MathBox<T extends num> { T value; MathBox(this.value); }",
    solution: `class MathBox<T extends num> {
  T value;
  MathBox(this.value);
}
void main() {}`,
    hiddenTests: [
      { description: "MathBox accepts integers", type: "function", target: "MathBox<int>(10).value", expected: 10 }
    ]
  },
  {
    id: "adv-5",
    slug: "collections-where-map",
    chapter: "Advanced OOP Concepts",
    title: "List Filtering & Transformations",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Apply `.where()` to filter list items, and `.map()` to format/convert entries.",
    objectives: [
      "Given `scores = [50, 60, 70];` filter elements >= 60 and convert to list `passed`.",
      "Print the value of `passed`."
    ],
    starterCode: `void main() {
  var scores = [50, 60, 70];
  // Filter and print
  
}`,
    hint: "Write: var passed = scores.where((s) => s >= 60).toList(); print(passed);",
    solution: `void main() {
  var scores = [50, 60, 70];
  var passed = scores.where((s) => s >= 60).toList();
  print(passed);
}`,
    hiddenTests: [
      { description: "Console outputs passed list values", type: "console", expected: "[60,70]" }
    ]
  },

  // --- CHAPTER 10: NULL SAFETY, ASYNC & ADVANCED DART (46-50) ---
  {
    id: "last-1",
    slug: "nullable-types",
    chapter: "Modern Dart & Async",
    title: "Nullable Types",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "Sound null safety handles null values. Append `?` to types to declare nullable states.",
    objectives: [
      "Declare a nullable String `username` and assign it null.",
      "Assign variable `displayName` to `username ?? 'Guest'` using coalescing."
    ],
    starterCode: `void main() {
  // Use nullable types
  
}`,
    hint: "Write: String? username; String displayName = username ?? 'Guest';",
    solution: `void main() {
  String? username;
  String displayName = username ?? "Guest";
}`,
    hiddenTests: [
      { description: "displayName resolves to default value", type: "variable", target: "displayName", expected: "Guest" }
    ]
  },
  {
    id: "last-2",
    slug: "async-await-futures",
    chapter: "Modern Dart & Async",
    title: "Asynchronous Futures",
    difficulty: "Medium",
    estimatedTime: "7 mins",
    xpReward: 70,
    explanation: "Futures represent deferred return logic. Consume futures in synchronous-looking blocks using `async` and `await`.",
    objectives: [
      "Create async function `Future<String> fetchUser()` returning 'Alice' after a short delay.",
      "Inside async `main()`, `await` fetchUser result and print it."
    ],
    starterCode: `import 'dart:async';

// Define fetchUser here

void main() async {
  
}`,
    hint: "Use: Future<String> fetchUser() => Future.delayed(Duration(seconds: 0), () => 'Alice');",
    solution: `Future<String> fetchUser() {
  return Future.delayed(Duration(seconds: 0), () => "Alice");
}
void main() async {
  String user = await fetchUser();
  print(user);
}`,
    hiddenTests: [
      { description: "Main prints awaited future text", type: "console", expected: "Alice" }
    ]
  },
  {
    id: "last-3",
    slug: "exception-handling",
    chapter: "Modern Dart & Async",
    title: "Exception Handling",
    difficulty: "Easy",
    estimatedTime: "5 mins",
    xpReward: 50,
    explanation: "Intercept runtime errors inside `try-catch` blocks to prevent programs from crashing.",
    objectives: [
      "Wrap `int.parse('abc')` inside try-catch block.",
      "Print 'Error caught' inside the catch block."
    ],
    starterCode: `void main() {
  // Catch integer parse exceptions
  
}`,
    hint: "Use: try { int.parse('abc'); } catch(e) { print('Error caught'); }",
    solution: `void main() {
  try {
    int.parse("abc");
  } catch(e) {
    print("Error caught");
  }
}`,
    hiddenTests: [
      { description: "Prints safe catch output", type: "console", expected: "Error caught" }
    ]
  },
  {
    id: "last-4",
    slug: "dart-records",
    chapter: "Modern Dart & Async",
    title: "Records (Dart 3+)",
    difficulty: "Medium",
    estimatedTime: "6 mins",
    xpReward: 60,
    explanation: "Records provide structured anonymous tuple properties: `(double x, double y)`. Access fields using position indexes `$1`, `$2`.",
    objectives: [
      "Declare record variable `point` with coordinates `(10.5, 20.0)`.",
      "Print `point.$1`."
    ],
    starterCode: `void main() {
  // Define record coordinates
  
}`,
    hint: "Write: var point = (10.5, 20.0); print(point.$1);",
    solution: `void main() {
  var point = (10.5, 20.0);
  print(point.$1);
}`,
    hiddenTests: [
      { description: "Console prints index 1 value", type: "console", expected: "10.5" }
    ]
  },
  {
    id: "last-5",
    slug: "mini-project-calculator",
    chapter: "Modern Dart & Async",
    title: "Final Mini Project: Calculator",
    difficulty: "Hard",
    estimatedTime: "15 mins",
    xpReward: 150,
    explanation: "Congratulations on reaching the final challenge! Let's combine what we've learned to build a fully functional Calculator class capable of addition, subtraction, multiplication, and division.",
    objectives: [
      "Define a class `Calculator` with methods `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, and `divide(a, b)`.",
      "If b == 0 inside `divide`, print 'Error: division by zero' and return 0.0."
    ],
    starterCode: `// Implement Calculator class here

void main() {
  var calc = Calculator();
  print("Addition: \${calc.add(10, 5)}");
  print("Division by zero: \${calc.divide(10, 0)}");
}`,
    hint: "Check divisor == 0 before performing division.",
    solution: `class Calculator {
  double add(double a, double b) => a + b;
  double subtract(double a, double b) => a - b;
  double multiply(double a, double b) => a * b;
  double divide(double a, double b) {
    if (b == 0) {
      print("Error: division by zero");
      return 0.0;
    }
    return a / b;
  }
}
void main() {
  var calc = Calculator();
  print("Addition: \${calc.add(10, 5)}");
  print("Division by zero: \${calc.divide(10, 0)}");
}`,
    hiddenTests: [
      { description: "Calculator multiply works", type: "function", target: "Calculator().multiply(3, 4)", expected: 12.0 },
      { description: "Calculator divide checks for 0", type: "function", target: "Calculator().divide(10, 0)", expected: 0.0 },
      { description: "Calculator division prints error on zero", type: "console", expected: "Error: division by zero" }
    ]
  }
];

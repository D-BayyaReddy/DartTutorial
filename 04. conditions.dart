/*
  =============================================================================
  DART FUNDAMENTALS: CONDITIONS (CONTROL FLOW)
  =============================================================================
  
  Control flow statements allow you to control the execution path of your Dart code
  based on certain conditions.

  -----------------------------------------------------------------------------
  1. If, Else If, and Else
  -----------------------------------------------------------------------------
  - The `if` statement executes a block if a boolean condition is true.
  - `else if` evaluates another condition if the previous ones were false.
  - `else` handles any other case when all conditions fail.
  - In Dart, conditions must evaluate strictly to a boolean value.

  -----------------------------------------------------------------------------
  2. Switch Case Statements (Traditional)
  -----------------------------------------------------------------------------
  - Compares an expression to multiple cases using `switch`.
  - Executes code until it hits a `break`. If no match, falls back to `default`.
  - Supports comparing integers, strings, compile-time constants, and enums.

  -----------------------------------------------------------------------------
  3. Switch Expressions (Dart 3.0+)
  -----------------------------------------------------------------------------
  - A modern, concise syntax where the `switch` returns a value directly.
  - Replaces `case` and `break` with the fat arrow `=>` and uses commas.
  - Uses `_` as the wildcard default case.

  -----------------------------------------------------------------------------
  4. Assertions (assert)
  -----------------------------------------------------------------------------
  - Used during development to disrupt execution if a boolean condition is false.
  - Syntax: `assert(condition, optionalMessage);`
  - Ignored in production/release mode.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Write an `if-else if-else` chain that categorizes a temperature:
          - Temp >= 30: "Hot"
          - Temp >= 15 and < 30: "Warm"
          - Temp < 15: "Cold"
          Print the result.

  Task 2: Implement a traditional `switch-case` statement for a String variable `day`.
          - If "Monday" to "Friday": Print "Weekday"
          - If "Saturday" or "Sunday": Print "Weekend"
          - Otherwise: Print "Invalid Day"

  Task 3: Rewrite Task 2 using a Dart 3 Switch Expression, assigning the result 
          to a variable and printing that variable.

  Task 4: Write an `assert` statement that verifies a number `age` is greater 
          than or equal to 0. Execute with assert enabled (normally automatic in dev).
*/

void main() {
  // --- Example Code ---
  print("--- Conditions Examples ---");

  // 1. If-Else
  int score = 85;
  if (score >= 90) {
    print("Grade: A");
  } else if (score >= 80) {
    print("Grade: B");
  } else {
    print("Grade: C");
  }

  // 2. Traditional Switch Case
  String weather = "sunny";
  switch (weather) {
    case "rainy":
      print("Take an umbrella!");
      break;
    case "sunny":
      print("Wear sunglasses!");
      break;
    default:
      print("Enjoy your day!");
  }

  // 3. Switch Expression (Dart 3+)
  var trafficLight = "red";
  String action = switch (trafficLight) {
    "red" => "Stop",
    "yellow" => "Slow down",
    "green" => "Go",
    _ => "Unknown light color" // default case
  };
  print("Traffic Action: $action");

  // 4. Assert
  int count = 5;
  assert(count > 0, "Count must be positive");
  print("Assertion passed!");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 4) here!
}

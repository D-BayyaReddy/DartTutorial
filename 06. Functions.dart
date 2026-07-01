/*
  =============================================================================
  DART FUNDAMENTALS: FUNCTIONS
  =============================================================================
  
  Functions are self-contained blocks of code that perform specific tasks. 
  In Dart, functions are first-class objects (they can be assigned to variables, 
  passed as arguments, or returned from other functions).

  -----------------------------------------------------------------------------
  1. Standard Function Declaration
  -----------------------------------------------------------------------------
  - Syntax: `ReturnType functionName(ParameterType parameterName) { ... }`
  - Specifying return type is optional but highly recommended for clean, safe code.

  -----------------------------------------------------------------------------
  2. Parameters (Positional, Optional, Named)
  -----------------------------------------------------------------------------
  - Positional Parameters: Defined in order. All are required by default unless optional.
    Example: `void greet(String name, int age)`

  - Optional Positional Parameters: Wrapped in `[]`. Must be at the end.
    Example: `void greet(String name, [int? age])`

  - Named Parameters: Wrapped in `{}`. Passed by specifying their name. 
    Can be marked `required` or given a default value.
    Example: `void greet({required String name, int age = 18})`

  -----------------------------------------------------------------------------
  3. Arrow Syntax (=>)
  -----------------------------------------------------------------------------
  - A shorthand for functions that contain only a single expression.
  - Syntax: `ReturnType functionName() => expression;` (Implicitly returns the expression).

  -----------------------------------------------------------------------------
  4. Anonymous Functions (Lambdas)
  -----------------------------------------------------------------------------
  - Functions without a name. Often used as closures or passed to collections.
  - Syntax: `(parameter) { body; }` or `(parameter) => expression;`

  -----------------------------------------------------------------------------
  5. Lexical Scope
  -----------------------------------------------------------------------------
  - Scope is determined layout-wise by curly braces `{}`. Inside blocks can see outer variables, 
    but outer blocks cannot see inside variables.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Define a function `calculateArea` that takes `width` and `height` 
          as named parameters. `width` should have a default value of 10.0, 
          and `height` should be `required`. The function should return a double.
          Call it and print the result.

  Task 2: Define a function `introduce` with optional positional parameters:
          `String name` (required positional) and `[int? age, String? city]`. 
          Format and return a string describing the person, handling nulls gracefully.

  Task 3: Write an arrow function `isEvenNumber(int number)` that returns `true` 
          if the number is even, and `false` otherwise.

  Task 4: Write an anonymous function to filter a list of scores: `[45, 78, 92, 34, 60]`.
          Print only the scores that are greater than or equal to 60.
*/

// Standard function
int add(int a, int b) {
  return a + b;
}

// Named parameters with default and required values
void printDetails({required String name, String role = "Developer", int? age}) {
  print("Name: $name, Role: $role, Age: ${age ?? 'Unknown'}");
}

// Optional positional parameters
void describeTravel(String source, String destination, [String? transport]) {
  String mode = transport != null ? " by $transport" : "";
  print("Traveling from $source to $destination$mode.");
}

// Arrow function
int square(int val) => val * val;

void main() {
  // --- Example Code ---
  print("--- Functions Examples ---");

  // 1. Standard Function
  print("Addition: ${add(10, 20)}");

  // 2. Named Parameters
  printDetails(name: "Alice", age: 25);
  printDetails(name: "Bob"); // Uses default role "Developer"

  // Optional Positional Parameters
  describeTravel("New York", "London");
  describeTravel("Paris", "Rome", "Train");

  // 3. Arrow Function
  print("Square of 5: ${square(5)}");

  // 4. Anonymous Function passed to another function
  var list = ["apple", "banana", "orange"];
  print("Mapped List (anonymous function):");
  list.forEach((item) {
    print("Fruit length of $item: ${item.length}");
  });

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 4) here!
}

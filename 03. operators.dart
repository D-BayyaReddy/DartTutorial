/*
  =============================================================================
  DART FUNDAMENTALS: OPERATORS
  =============================================================================
  
  Dart supports a wide range of operators to perform arithmetic, comparisons, 
  logical operations, assignments, and more.

  -----------------------------------------------------------------------------
  1. Arithmetic Operators
  -----------------------------------------------------------------------------
  - `+` Addition, `-` Subtraction, `*` Multiplication, `/` Division.
  - `~/` Integer Division (returns an integer quotient, discarding remainder).
  - `%` Modulo (returns the remainder of division).
  - `++var` / `var++` Increment, `--var` / `var--` Decrement.

  -----------------------------------------------------------------------------
  2. Relational & Equality Operators
  -----------------------------------------------------------------------------
  - `==` Equal, `!=` Not Equal.
  - `>` Greater than, `<` Less than, `>=` Greater or equal, `<=` Less or equal.

  -----------------------------------------------------------------------------
  3. Type Test Operators
  -----------------------------------------------------------------------------
  - `as` Typecast (cast object to a specific type).
  - `is` True if the object has the specified type.
  - `is!` True if the object does not have the specified type.

  -----------------------------------------------------------------------------
  4. Assignment Operators
  -----------------------------------------------------------------------------
  - `=` Simple assignment.
  - `??=` Compound assignment operator. Assigns value ONLY if the variable is null.
  - Other compound assignments: `+=`, `-=`, `*=`, `/=`, etc.

  -----------------------------------------------------------------------------
  5. Logical Operators
  -----------------------------------------------------------------------------
  - `!` Inverts boolean value (Logical NOT).
  - `||` Logical OR (true if either condition is true).
  - `&&` Logical AND (true only if both conditions are true).

  -----------------------------------------------------------------------------
  6. Conditional Expressions
  -----------------------------------------------------------------------------
  - Ternary Operator: `condition ? expr1 : expr2` (if condition is true, evaluates to expr1, else expr2).
  - Null-coalescing: `expr1 ?? expr2` (evaluates to expr1 if non-null, otherwise expr2).

  -----------------------------------------------------------------------------
  7. Cascade Notation (..)
  -----------------------------------------------------------------------------
  - Allows you to perform a sequence of operations on the same object.
    Example: 
      var sb = StringBuffer()
        ..write('Hello ')
        ..write('Dart'); // Returns the StringBuffer, not the result of write().

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Declare two integers, `a = 10` and `b = 3`. Print the results of:
          - Standard division (`/`)
          - Integer division (`~/`)
          - Modulo (`%`)
          
  Task 2: Use the `is` operator to check if a variable holding "Hello" is a String.
          Check if a variable holding 5.5 is NOT an int using `is!`. Print both.

  Task 3: Declare a nullable integer `nullableScore`. 
          - Assign it a value using `??=` only if it is null. Print it.
          - Reassign a non-null value, run `??=` again, and print it to show it did not change.

  Task 4: Use a ternary operator to check if a number `x = 15` is even or odd, 
          and print the result. Use modulo (`%`) inside the condition.

  Task 5: Use a cascade operator (`..`) with a `StringBuffer` to build a string:
          "Dart is fast, modern, and fun!" and print the result.
*/

void main() {
  // --- Example Code ---
  print("--- Operators Examples ---");

  // 1. Arithmetic
  int a = 15;
  int b = 4;
  print("Addition: ${a + b}");
  print("Division: ${a / b}");
  print("Integer Division: ${a ~/ b}");
  print("Modulo: ${a % b}");

  // 2. Relational & Equality
  print("Is a == b? ${a == b}");
  print("Is a > b? ${a > b}");

  // 3. Type Test
  dynamic val = "Hello World";
  print("Is val String? ${val is String}");
  print("Is val int? ${val is int}");

  // 4. Assignment & Null-Coalescing Assignment
  int? count;
  count ??= 5; // assigns 5 because count was null
  print("Count after ??=: $count");
  count ??= 10; // does nothing because count is already 5
  print("Count after second ??=: $count");

  // 5. Logical
  bool hasKey = true;
  bool knowsPassword = false;
  print("Can enter? ${hasKey && knowsPassword}");
  print("Can enter with either? ${hasKey || knowsPassword}");

  // 6. Conditional Expressions
  int age = 20;
  String category = age >= 18 ? "Adult" : "Minor";
  print("Category: $category");

  String? optionalName;
  String displayName = optionalName ?? "Guest";
  print("Welcome, $displayName!");

  // 7. Cascade Notation
  var sb = StringBuffer();
  sb..write('Dart ')..write('is ')..write('great!');
  print("StringBuffer output: $sb");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 5) here!
}

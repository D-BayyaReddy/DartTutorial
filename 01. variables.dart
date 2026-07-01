/*
  =============================================================================
  DART FUNDAMENTALS: VARIABLES & DATA TYPES
  =============================================================================
  
  What is a Variable?
  - A variable is a container (storage location in memory) that holds a value.
  - In Dart, everything is an object, including numbers, functions, and null.
  - Therefore, variables in Dart store references to objects.

  -----------------------------------------------------------------------------
  1. Variable Declaration & Type Inference
  -----------------------------------------------------------------------------
  - Explicitly Typed: You specify the exact data type.
    Example: int age = 25;
             String name = "Alice";
             double height = 5.9;
             bool isStudent = true;

  - Type Inference (`var`): Dart automatically determines the type based on the initial value.
    Once assigned, the type is locked (statically typed).
    Example: var city = "New York"; // inferred as String. 
             // city = 123; // Error: A value of type 'int' can't be assigned to a variable of type 'String'.

  -----------------------------------------------------------------------------
  2. Dynamic Types (`dynamic`)
  -----------------------------------------------------------------------------
  - If you want a variable to hold any type of value and change types dynamically at runtime,
    use the `dynamic` keyword.
    Example: dynamic value = 10;
             value = "Hello"; // Allowed!

  -----------------------------------------------------------------------------
  3. Read-Only Variables: `final` vs `const`
  -----------------------------------------------------------------------------
  - `final`: The variable can only be set once. Its value is evaluated at runtime (when execution reaches it).
    Example: final DateTime now = DateTime.now(); // Evaluated when run.

  - `const`: A compile-time constant. Its value must be known at compile-time.
    Example: const double pi = 3.14159; // Hardcoded, known before running.
    Note: All `const` variables are implicitly `final`.

  -----------------------------------------------------------------------------
  4. Null Safety (Nullable vs Non-Nullable)
  -----------------------------------------------------------------------------
  - By default, variables in Dart cannot be null (non-nullable).
  - To allow a variable to be null, append a `?` to the type.
    Example: String? middleName; // Can be a String or null.
  - The `late` keyword is used to declare a non-nullable variable that is initialized after its declaration.
    Example: late String description;

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Declare three variables using explicit typing:
          - An integer for your age.
          - A double for your height in meters.
          - A boolean indicating whether you love programming.
          Print all three values.

  Task 2: Create a variable using the `var` keyword and assign a string to it.
          Try reassigning it to an integer. Observe the compile error, comment it out,
          and explain in a comment why it failed.

  Task 3: Declare a `dynamic` variable. Assign it an integer, print it,
          then reassign it to a double, print it, and finally reassign it to a string and print it.

  Task 4: Demonstrate the difference between `final` and `const`.
          - Create a `final` variable that stores the current timestamp (`DateTime.now()`).
          - Create a `const` variable for the gravity coefficient on Earth (9.81).
          - Try reassigning both and note the errors (comment them out).

  Task 5: Declare a nullable integer variable `score`. Assign it null first, print it,
          and then assign it a value of 100 and print it.
*/

void main() {
  // --- Example Code ---
  print("--- Variable Examples ---");
  
  // Explicitly Typed
  int x = 2;
  print("Explicit Int: x = $x");

  // Type Inference
  var name = "Dart";
  print("Inferred String: name = $name");

  // Dynamic Type
  dynamic temp = 42;
  print("Dynamic Initial: temp = $temp");
  temp = "Now I am a string";
  print("Dynamic Reassigned: temp = $temp");

  // Final and Const
  final runtimeConst = DateTime.now();
  const compileConst = 3.14;
  print("Final (Runtime): $runtimeConst");
  print("Const (Compile-time): $compileConst");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 5) here!
}



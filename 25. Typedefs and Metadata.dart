/*
  =============================================================================
  DART FUNDAMENTALS: TYPEDEFS & METADATA (ANNOTATIONS)
  =============================================================================
  
  This section covers Type Aliases (typedefs) to give descriptive names to 
  complex types, and Metadata (Annotations) to attach extra information to code.

  -----------------------------------------------------------------------------
  1. Typedefs (Type Aliases)
  -----------------------------------------------------------------------------
  - Used to define aliases for existing types, making code shorter and more descriptive.
  - Can represent function signatures or complex collections.
    Example: 
      `typedef JsonMap = Map<String, dynamic>;`
      `typedef Comparison<T> = int Function(T a, T b);`

  -----------------------------------------------------------------------------
  2. Metadata (Annotations)
  -----------------------------------------------------------------------------
  - Used to give the compiler or tools extra information about variables, 
    methods, classes, or parameters.
  - Standard Annotations:
    - `@override`: Informs the compiler that a subclass is overriding a parent method.
    - `@deprecated`: Flags a function or class as outdated. Triggers an IDE warning.
    - `@pragma`: Tells the compiler special instructions (e.g., inline a method).

  -----------------------------------------------------------------------------
  3. Custom Annotations
  -----------------------------------------------------------------------------
  - You can define your own custom annotations by creating a class with a `const` constructor.
    Example:
      ```dart
      class Todo {
        final String task;
        const Todo(this.task);
      }
      ```
      And then tagging your code: `@Todo("Finish coding this class") class User {}`

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Typedefs:
          - Define a type alias `Coordinates = List<double>`.
          - Define a type alias `UserCache = Map<int, String>`.
          - Instantiate variables using these aliases in main() and print their values.

  Task 2: Define a generic function typedef `Validator<T>` which is a function 
          taking type `T` and returning a `bool`.
          - Implement a string validator using this alias that checks if a string is not empty.
          - Call it in main().

  Task 3: Custom Annotations:
          - Define a custom annotation class `Reviewer` with fields `String name` 
            and `String date`. The constructor MUST be const.
          - Create a class `CoreLogic` and tag it with your `@Reviewer` annotation.
*/

// 1. Generic type aliases
typedef StringList = List<String>;
typedef Dictionary = Map<String, String>;
typedef CompareFunction<T> = int Function(T a, T b);

// 2. Custom Annotation definition
class DeveloperInfo {
  final String author;
  final String version;

  const DeveloperInfo({required this.author, required this.version});
}

// Applying standard annotations
class OldCalculator {
  @deprecated
  int add(int a, int b) => a + b;

  int addTwo(int a, int b) => a + b;
}

// Applying custom annotations
@DeveloperInfo(author: "Antigravity", version: "1.0")
class MainSystem {
  void init() => print("System booted.");
}

void main() {
  // --- Example Code ---
  print("--- Typedefs & Metadata Examples ---");

  // 1. Using Typedefs
  StringList names = ["Alice", "Bob"];
  Dictionary translations = {"hello": "hola"};
  print("Names list: $names");
  print("Translations: $translations");

  // Typedef for function signature
  CompareFunction<int> sorter = (a, b) => a.compareTo(b);
  print("Compare result: ${sorter(5, 10)}"); // -1

  // 2. Using Deprecated Code (hovering will show line-through warning in IDE)
  var calc = OldCalculator();
  // ignore: deprecated_member_use
  print("Using deprecated method: ${calc.add(2, 3)}"); 

  // 3. Custom Annotation Instantiate
  var sys = MainSystem();
  sys.init();

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

/*
  =============================================================================
  DART FUNDAMENTALS: EXTENSIONS (EXTENSION METHODS)
  =============================================================================
  
  Extension methods (introduced in Dart 2.7) allow you to add functionality/methods 
  to existing libraries, classes, or SDK types (like `String`, `int`, `List`) 
  without subclassing or modifying the original class source code.

  -----------------------------------------------------------------------------
  1. Basic Extension Syntax
  -----------------------------------------------------------------------------
  - Declared using the `extension` keyword.
  - Syntax:
    `extension ExtensionName on Type {`
    `  ReturnType newMethod() { ... }`
    `}`
  - Within the extension body, `this` refers to the instance of the object being called on.

  -----------------------------------------------------------------------------
  2. Generic Extensions
  -----------------------------------------------------------------------------
  - You can extend generic types like lists, maps, or iterables.
    Example: `extension ListExtensions<T> on List<T> { ... }`

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Create an extension `StringExtensions` on `String` that:
          - Defines a method `isEmail` returning true if it contains '@' and '.'.
          - Defines a getter `wordCount` that returns the number of words in the string 
            (split by space).
          Test both on different strings in main() and print the outputs.

  Task 2: Create an extension `IntExtensions` on `int` that:
          - Defines a getter `days` that returns a `Duration` object representing 
            that many days (e.g., `5.days` returns `Duration(days: 5)`).
          - Test this by printing the duration in main().

  Task 3: Create a generic extension `ListExtensions<T>` on `List<T>` that:
          - Defines a method `getRandomElement()` that returns a random element from the list.
            Hint: Use `import 'dart:math';` and `Random().nextInt(length)`.
          - Test it on both a list of strings and a list of integers in main().
*/

import 'dart:math';

// 1. Basic Extension on String
extension StringNumberParsing on String {
  // Method to check if string contains only digits
  bool get isNumeric => RegExp(r'^\d+$').hasMatch(this);

  // Method to capitalize the first letter of the string
  String capitalize() {
    if (isEmpty) return this;
    return this[0].toUpperCase() + substring(1);
  }
}

// 2. Generic Extension on List
extension ListMath<T extends num> on List<T> {
  // Method to sum elements of a numeric list
  T sum() {
    num total = 0;
    for (var item in this) {
      total += item;
    }
    return total as T;
  }
}

void main() {
  // --- Example Code ---
  print("--- Extensions Examples ---");

  // String extension test
  String str1 = "12345";
  String str2 = "hello";

  print("Is '$str1' numeric? ${str1.isNumeric}");
  print("Is '$str2' numeric? ${str2.isNumeric}");
  print("Capitalized '$str2': ${str2.capitalize()}");

  // Numeric list extension test
  List<int> integers = [1, 2, 3, 4, 5];
  List<double> doubles = [1.5, 2.5, 3.5];

  print("Sum of integers: ${integers.sum()}");
  print("Sum of doubles: ${doubles.sum()}");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

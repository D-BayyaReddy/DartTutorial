/*
  =============================================================================
  DART FUNDAMENTALS: BASIC DATA TYPES
  =============================================================================
  
  Dart is statically typed but supports type inference. Every value has a type.
  Here are the built-in basic data types in Dart:

  -----------------------------------------------------------------------------
  1. Numbers (num, int, double)
  -----------------------------------------------------------------------------
  - `int`: Integer values no larger than 64 bits. e.g., 10, -5.
  - `double`: 64-bit double-precision floating-point numbers. e.g., 3.14, -0.5.
  - `num`: The parent type of both `int` and `double`. Can hold either.

  -----------------------------------------------------------------------------
  2. Strings (String)
  -----------------------------------------------------------------------------
  - Represents a sequence of characters. Can use single or double quotes.
  - String Interpolation: Embed expressions inside strings using `${expression}` 
    or `$variable` (if just a single variable).
  - Multi-line Strings: Created using triple quotes (''' or """).

  -----------------------------------------------------------------------------
  3. Booleans (bool)
  -----------------------------------------------------------------------------
  - Represents boolean values. Only two compile-time constants: `true` and `false`.
  - In Dart, boolean evaluation is strict; only boolean values can be used in conditions.

  -----------------------------------------------------------------------------
  4. Collections Overview (List, Set, Map)
  -----------------------------------------------------------------------------
  - `List`: Ordered group of objects (arrays). e.g., [1, 2, 3].
  - `Set`: Unordered collection of unique items. e.g., {1, 2, 3}.
  - `Map`: Collection of key-value pairs. e.g., {'name': 'Alice', 'age': 25}.

  -----------------------------------------------------------------------------
  5. Runes & Unicode (Runes)
  -----------------------------------------------------------------------------
  - Runes represent UTF-32 code points of a string (useful for emojis/special symbols).
  - Written using `\uXXXX` (where XXXX is hexadecimal). If 4+ digits, wrap in curly braces `\u{XXXXXX}`.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Create a `num` variable that initially holds an integer. Reassign it 
          to a double value. Print it.
          
  Task 2: Create three variables: `firstName`, `lastName`, and `birthYear`.
          Use string interpolation to print a message:
          "My name is First Last and I am X years old." (Calculate age dynamically).

  Task 3: Declare a List of your favorite books, a Set of unique lucky numbers, 
          and a Map representing a smartphone's properties (brand, model, price).
          Print all of them.

  Task 4: Find the Unicode point of your favorite emoji, declare it as a String 
          using runes syntax, and print it.
*/

void main() {
  // --- Example Code ---
  print("--- Data Types Examples ---");

  // 1. Numbers
  int count = 10;
  double price = 19.99;
  num dynamicNum = 42; // Can be int
  dynamicNum = 42.5;   // Can be double
  print("Count: $count, Price: \$$price, num: $dynamicNum");

  // 2. Strings
  String singleQuote = 'Single quoted string';
  String doubleQuote = "Double quoted string";
  String multiLine = """
This is a
multi-line string
in Dart.
""";
  print(singleQuote);
  print(doubleQuote);
  print(multiLine);

  // String Interpolation
  String name = "Alice";
  print("Hello, ${name.toUpperCase()}! Next year you'll be ${25 + 1} years old.");

  // 3. Booleans
  bool isDartAwesome = true;
  print("Is Dart awesome? $isDartAwesome");

  // 4. Collections
  List<int> numbers = [1, 2, 3, 3]; // Allows duplicates
  Set<int> uniqueNumbers = {1, 2, 3, 3}; // Removes duplicates automatically
  Map<String, String> capitals = {
    'USA': 'Washington D.C.',
    'India': 'New Delhi',
    'UK': 'London'
  };
  print("List: $numbers");
  print("Set: $uniqueNumbers");
  print("Map: $capitals");

  // 5. Runes
  String heartEmoji = '\u2764';
  String laughEmoji = '\u{1f600}';
  print("I $heartEmoji Dart $laughEmoji");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 4) here!
}

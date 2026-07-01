/*
  =============================================================================
  DART FUNDAMENTALS: LIBRARIES & IMPORTS
  =============================================================================
  
  Libraries in Dart help manage code scoping and organization. Every Dart file 
  is itself a library, even if it doesn't declare a library name.

  -----------------------------------------------------------------------------
  1. Importing Libraries
  -----------------------------------------------------------------------------
  - Use the `import` keyword followed by the URI.
  - Can import built-in libraries (e.g., `dart:math`), third-party packages, 
    or local project files.

  -----------------------------------------------------------------------------
  2. Resolving Name Collisions (as keyword)
  -----------------------------------------------------------------------------
  - If two libraries define classes with the same name, use the `as` prefix to 
    namespace them.
    Example: 
      `import 'dart:html' as html;`
      `import 'my_custom_html.dart' as custom;`
      `html.Element vs custom.Element;`

  -----------------------------------------------------------------------------
  3. Selective Importing (show / hide)
  -----------------------------------------------------------------------------
  - `show`: Only imports specific members of the library.
    Example: `import 'dart:math' show max, min;`
  - `hide`: Imports everything EXCEPT specified members.
    Example: `import 'dart:math' hide pi;`

  -----------------------------------------------------------------------------
  4. Creating Modular Libraries (export, part, part of)
  -----------------------------------------------------------------------------
  - `export`: Lets one file act as an entrypoint to export multiple files. Allows 
    users to make a single import instead of many.
  - `part` & `part of`: Allows splitting a single large library file into multiple 
    physical files. (Note: Modern Dart encourages packages, but parts are still used 
    heavily in code generation like Freezed/JsonSerializable).

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Prefix Imports:
          - Import `dart:math` with the prefix `math`.
          - In main(), use the prefix to find and print the square root of 64 (`math.sqrt(64)`).

  Task 2: Selective Import:
          - Import only the `Random` class from `dart:math` using the `show` keyword.
          - Try printing `pi` and observe the compiler error. 
            Comment out the error and explain it in comments.
          - Use the `Random` class to generate a random number between 1 and 10 and print it.
*/

// Selective Import: Only load 'min' and 'max' from dart:math
import 'dart:math' show min, max;

// Namespace/Prefix Import: Avoid name collisions
import 'dart:convert' as convert; 

// Exporting classes to another client (Mock Example)
// export 'other_file.dart' show SomeClass;

void main() {
  // --- Example Code ---
  print("--- Libraries & Imports Examples ---");

  // Using members imported selectively (no prefix needed)
  int smaller = min(15, 30);
  int larger = max(15, 30);
  print("Smaller: $smaller, Larger: $larger");

  // Using prefix import to access jsonDecode without collision
  String jsonString = '{"name": "Alice"}';
  var decoded = convert.jsonDecode(jsonString);
  print("Decoded JSON using prefix: $decoded");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 and Task 2) here!
}

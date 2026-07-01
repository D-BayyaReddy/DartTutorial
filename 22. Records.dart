/*
  =============================================================================
  DART FUNDAMENTALS: RECORDS (DART 3.0+)
  =============================================================================
  
  Records are anonymous, immutable, aggregate types. They let you bundle multiple 
  values together into a single object, similar to tuples in other languages.

  -----------------------------------------------------------------------------
  1. Record Syntax & Types
  -----------------------------------------------------------------------------
  - Records are comma-separated lists of fields enclosed in parentheses `()`.
  - Can contain positional fields, named fields, or both.
    Example: 
      `var record = (1, 2, name: 'Alice');`
      Type declaration: `(int, int, {String name}) recordType;`

  -----------------------------------------------------------------------------
  2. Accessing Fields
  -----------------------------------------------------------------------------
  - Positional fields are accessed using `$<position>` (1-indexed).
    Example: `record.$1` (gets 1)
  - Named fields are accessed by name.
    Example: `record.name` (gets 'Alice')

  -----------------------------------------------------------------------------
  3. Structural Equality
  -----------------------------------------------------------------------------
  - Records are value-typed. Two records with the same field names, types, and values 
    are structurally equal (`==` returns true).

  -----------------------------------------------------------------------------
  4. Multiple Return Values
  -----------------------------------------------------------------------------
  - Before records, functions needed classes, lists, or maps to return multiple values.
    Now, functions can cleanly return records.
    Example: `(double lat, double lng) getLocation() => (34.05, -118.24);`

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Declare a record representing a book:
          - Positional fields: `String title`, `String author`.
          - Named field: `int publicationYear`.
          - Print the fields individually using `$1`, `$2`, and `.publicationYear`.

  Task 2: Write a function `divide(int dividend, int divisor)` that returns a record 
          containing:
          - A named field `quotient` (result of integer division `~/`).
          - A named field `remainder` (result of modulo `%`).
          Call the function and print the returned quotient and remainder.

  Task 3: Test record equality:
          - Create two records containing the same values: `var r1 = (name: "Dart", version: 3);` 
            and `var r2 = (name: "Dart", version: 3);`.
          - Compare them with `==` and print the result.
          - Change version on one of them, compare again, and print.
*/

// Function returning a Record
(double lat, double lon, {String description}) getCoordinates() {
  return (37.7749, -122.4194, description: "San Francisco");
}

void main() {
  // --- Example Code ---
  print("--- Records Examples ---");

  // 1. Basic Records Declaration
  var point = (10, 20); // positional
  var user = (id: 101, name: "Alice", isAdmin: true); // named

  // 2. Accessing fields
  print("Point X: ${point.$1}, Y: ${point.$2}");
  print("User ID: ${user.id}, Name: ${user.name}, Admin: ${user.isAdmin}");

  // Type annotations
  (int, int) coords = (5, 7);
  (String, {int age}) person = ("Bob", age: 30);
  print("Coords: $coords, Person: $person");

  // 3. Returning Multiple Values from a function
  var location = getCoordinates();
  print("Lat: ${location.$1}, Lng: ${location.$2}, City: ${location.description}");

  // 4. Structural Equality
  var a = (x: 1, y: 2);
  var b = (x: 1, y: 2);
  var c = (y: 2, x: 1); // Order of named fields does not affect type/equality
  print("a == b? ${a == b}"); // true
  print("a == c? ${a == c}"); // true

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

/*
  =============================================================================
  DART FUNDAMENTALS: NULL SAFETY
  =============================================================================
  
  Dart features Sound Null Safety. This means variables are non-nullable by default: 
  they cannot contain the value `null` unless you explicitly state they can. 
  This eliminates the notorious "Null Pointer Exception" class of bugs.

  -----------------------------------------------------------------------------
  1. Nullable Types (Type?)
  -----------------------------------------------------------------------------
  - To allow a variable to hold null, append a `?` to the end of its type.
    Example: `int? nullableInt;` (Defaults to null if not initialized).

  -----------------------------------------------------------------------------
  2. Assertion Operator (!)
  -----------------------------------------------------------------------------
  - If you are absolutely sure a nullable expression is not null, you can force-cast 
    it to a non-nullable type using the `!` operator.
  - WARNING: If the value is actually null, a runtime exception is thrown.
    Example: `int absoluteValue = nullableInt!;`

  -----------------------------------------------------------------------------
  3. Null-Aware Access Operator (?.)
  -----------------------------------------------------------------------------
  - Prevents crashing when calling methods or accessing properties of a null object.
  - Returns `null` instead of throwing an error if the receiver is null.
    Example: `String? name; int? length = name?.length;`

  -----------------------------------------------------------------------------
  4. Null-Coalescing Operator (??)
  -----------------------------------------------------------------------------
  - Returns the left-hand expression if it's not null; otherwise, returns the right-hand expression.
    Example: `String name = nullableName ?? "Guest";`

  -----------------------------------------------------------------------------
  5. The late Keyword
  -----------------------------------------------------------------------------
  - Used to declare a non-nullable variable that will be initialized AFTER declaration.
  - Can also be used for lazy initialization (value evaluated only when read).
    Example: `late String description;` (Must assign before reading).

  -----------------------------------------------------------------------------
  6. Type Promotion
  -----------------------------------------------------------------------------
  - Dart's analyzer tracks check conditions and automatically promotes a nullable 
    variable to a non-nullable one if it is proven to be non-null.
    Example:
      String? msg;
      if (msg != null) {
         print(msg.length); // msg promoted to String (no need for ?)
      }

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Declare a nullable String variable `middleName`. 
          - Print the character count of `middleName` using `?.` (so it handles null without crashing).
          - Use `??` to supply a default length of 0 if `middleName` is null.
          - Reassign `middleName = "William"`, print the length again, and verify.

  Task 2: Declare a class `Profile` with a `late String bio` field.
          - In main(), initialize `bio` with a value, then print it.
          - In comments, explain what happens if you try to print it BEFORE initialization.

  Task 3: Write a function `printLength(String? text)` that checks if the string 
          is null. If it is null, print "Empty text". If it's not null, leverage 
          type promotion to print the uppercase version of `text` and its length.
*/

class User {
  late String _id; // Declared non-nullable but initialized later

  void setID(String id) {
    _id = id;
  }

  String getID() => _id;
}

void main() {
  // --- Example Code ---
  print("--- Null Safety Examples ---");

  // 1. Nullable Declaration
  String? nickname; // defaults to null
  print("Nickname: $nickname");

  // 2. Null-Aware Access and Null-Coalescing
  print("Nickname length (null-aware): ${nickname?.length}");
  String displayName = nickname ?? "Anonymous";
  print("Display Name: $displayName");

  // 3. Assertion operator (caution: will throw if null!)
  nickname = "FlutterDev";
  print("Forced length check (!): ${nickname!.length}");

  // 4. Late initialization
  var user = User();
  user.setID("USR-1002");
  print("User ID (late): ${user.getID()}");

  // 5. Type Promotion
  String? message = "Sound Null Safety is great!";
  if (message != null) {
    // promoted to non-nullable String inside this block
    print("Promoted length: ${message.length}");
  }

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

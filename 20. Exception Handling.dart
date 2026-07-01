/*
  =============================================================================
  DART FUNDAMENTALS: EXCEPTION HANDLING
  =============================================================================
  
  Exceptions are events that disrupt the normal flow of instruction execution. 
  Exception handling allows a program to deal with errors gracefully instead of 
  crashing.

  -----------------------------------------------------------------------------
  1. Throwing Exceptions (throw)
  -----------------------------------------------------------------------------
  - You can throw any non-null object in Dart, though it's recommended to throw 
    instances implementing `Exception` or `Error`.
    Example: `throw Exception("Something went wrong");`

  -----------------------------------------------------------------------------
  2. Try, On, Catch, and Finally
  -----------------------------------------------------------------------------
  - `try`: Wraps code that might throw an exception.
  - `on`: Specifies a particular type of exception to catch.
  - `catch`: Obtains the exception object (`e`) and optionally its StackTrace (`s`).
  - `finally`: A block that executes regardless of whether an exception was thrown.

  -----------------------------------------------------------------------------
  3. Rethrow
  -----------------------------------------------------------------------------
  - Use `rethrow` to let an exception bubble up to the next outer caller after 
    handling or logging it locally.

  -----------------------------------------------------------------------------
  4. Custom Exceptions
  -----------------------------------------------------------------------------
  - Create custom exceptions by writing a class that implements `Exception`.
    Example:
      class OutOfFundsException implements Exception {
        final String message;
        OutOfFundsException(this.message);
        @override
        String toString() => "OutOfFundsException: $message";
      }

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Write a function `divide(int a, int b)` that returns `a ~/ b`.
          - If `b == 0`, throw an `UnsupportedError("Cannot divide by zero")`.
          - Call this function in main() within a `try-on-catch` block catching 
            `UnsupportedError`. Print a custom message when caught.

  Task 2: Custom Exception:
          - Create a custom exception class `InvalidAgeException` with a message.
          - Write a function `checkVotingEligibility(int age)` that throws 
            `InvalidAgeException` if `age < 18`.
          - Test it in main() inside a try-catch block, printing the exception.

  Task 3: Rethrow and Finally:
          - Write a function `processPayment()` that throws an exception.
          - Call it inside another function `transactionManager()`.
          - In `transactionManager()`, catch the exception, print "Payment failed, logged.", 
            use `rethrow` to pass it up, and use a `finally` block to print "Clearing transaction cache".
          - Call `transactionManager()` in main() and catch the rethrown exception.
*/

// Custom Exception definition
class AgeException implements Exception {
  final String message;
  AgeException(this.message);

  @override
  String toString() => "AgeException: $message";
}

// Function that throws custom exception
void registerUser(int age) {
  if (age < 0) {
    throw AgeException("Age cannot be negative ($age)");
  }
  print("User registered successfully.");
}

void parseNumber(String value) {
  try {
    int.parse(value);
  } on FormatException catch (e) {
    print("Specifically caught FormatException! Details: $e");
    rethrow; // pass exception back to caller
  }
}

void main() {
  // --- Example Code ---
  print("--- Exception Handling Examples ---");

  // 1. Specific On Catch and Finally
  try {
    print("Attempting to parse 'abc' to int...");
    parseNumber("abc");
  } on FormatException {
    print("Main caught FormatException after it was rethrown.");
  } finally {
    print("This 'finally' block always runs no matter what.");
  }

  // 2. Custom Exception
  print("\nRegistering user with age -5:");
  try {
    registerUser(-5);
  } catch (e, stackTrace) {
    print("Caught Exception: $e");
    print("StackTrace available: ${stackTrace.toString().split('\n').first}");
  }

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

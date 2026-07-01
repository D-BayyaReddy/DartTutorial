/*
  =============================================================================
  DART FUNDAMENTALS: CLASS MODIFIERS (DART 3.0+)
  =============================================================================
  
  Class modifiers control what capabilities a class has when imported from other 
  libraries/files. They let authors specify whether classes can be constructed, 
  extended, implemented, or used as mixins.

  -----------------------------------------------------------------------------
  1. sealed (Algebraic / Sum Types)
  -----------------------------------------------------------------------------
  - A `sealed` class cannot be constructed or extended outside of its own file.
  - Useful for defining a closed set of subtypes (e.g., UI States: Loading, Success, Error).
  - Crucial: The compiler knows all possible subtypes. If you use a sealed class 
    in a switch expression/statement, the compiler warns you if you miss a subtype 
    (Exhaustiveness checking).

  -----------------------------------------------------------------------------
  2. base
  -----------------------------------------------------------------------------
  - A `base` class allows inheritance but forbids implementation. 
  - Ensures that any subclass is a true child of the class, inheriting its 
    private properties and structural behavior.

  -----------------------------------------------------------------------------
  3. interface
  -----------------------------------------------------------------------------
  - An `interface` class allows implementation but forbids inheritance (`extends`).
  - Forces clients to override everything, avoiding inheritance chains.

  -----------------------------------------------------------------------------
  4. final
  -----------------------------------------------------------------------------
  - A `final` class cannot be extended OR implemented outside the file it is defined in.
  - Closes the class from any form of external subtyping.

  -----------------------------------------------------------------------------
  5. mixin class
  -----------------------------------------------------------------------------
  - Combines capabilities of a class and a mixin: can be instantiated normally 
    and also applied with the `with` keyword.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Sealed State Pattern:
          - Define a `sealed class LoginState`.
          - Define three subclasses in the same file: 
            `class LoginInitial extends LoginState`,
            `class LoginSuccess extends LoginState { final String token; LoginSuccess(this.token); }`,
            `class LoginFailure extends LoginState { final String error; LoginFailure(this.error); }`.
          - Write a function `handleState(LoginState state)` that returns a String:
            - If Initial: "Please enter your username and password."
            - If Success: "Welcome back! Token: [token]"
            - If Failure: "Login failed: [error]"
            Note: Use a switch expression without a default `_` wildcard to test 
            how Dart guarantees exhaustiveness checker.
          - Test all states in main().

  Task 2: Define a `final class SystemConfiguration`. Try creating a class `MyConfig` 
          that extends or implements it in a separate block (uncomment/comment to test 
          and explain why it fails).
*/

// 1. Sealed Class (Must define all subclasses in this library/file)
sealed class NetworkState {}
class Loading extends NetworkState {}
class Success extends NetworkState {
  final List<String> data;
  Success(this.data);
}
class Error extends NetworkState {
  final String message;
  Error(this.message);
}

// 2. Base Class (Subclasses must be marked 'base', 'final', or 'sealed')
base class Animal {
  void eat() => print("Eating...");
}
// Class inheriting from a base class must be base, final, or sealed itself
base class Lion extends Animal {}

// 3. Interface Class (Allows implementation only)
interface class Vehicle {
  void drive() => print("Driving...");
}
// Allowed: Implementing
class Car implements Vehicle {
  @override
  void drive() => print("Car driving...");
}
// Error if extended in another library (allowed in this same file since it's the same library)

// 4. Final Class (Cannot be subtyped at all)
final class Config {
  final String api = "https://api.example.com";
}

// 5. Mixin Class
mixin class Logger {
  void log(String msg) => print("[LOG]: $msg");
}
class Service with Logger {} // Used as mixin
var logger = Logger();       // Used as regular class

void main() {
  // --- Example Code ---
  print("--- Class Modifiers Examples ---");

  // Exhaustive Switch on Sealed class
  NetworkState state = Success(["User1", "User2"]);
  
  String uiOutput = switch (state) {
    Loading() => "Loading spinner spinning...",
    Success(data: var items) => "Rendered list: $items",
    Error(message: var msg) => "Display error alert: $msg"
    // No default case '_' required because 'NetworkState' is sealed!
  };
  print("UI State result: $uiOutput");

  // Mixin class usage
  var service = Service();
  service.log("Service started.");
  logger.log("Direct logger instance active.");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 and Task 2) here!
}

/*
  =============================================================================
  DART FUNDAMENTALS: MIXINS
  =============================================================================
  
  Mixins are a way of reusing a class's code in multiple class hierarchies 
  without using traditional inheritance (multiple inheritance isn't supported). 
  It allows sharing behaviors across completely unrelated classes.

  -----------------------------------------------------------------------------
  1. Declaring a Mixin
  -----------------------------------------------------------------------------
  - Declared using the `mixin` keyword.
  - A mixin cannot be instantiated and cannot have constructors.
    Example: `mixin Swimmer { void swim() => print("Swimming..."); }`

  -----------------------------------------------------------------------------
  2. Applying a Mixin (with keyword)
  -----------------------------------------------------------------------------
  - Use the `with` keyword followed by the mixin name when declaring a class.
  - You can apply multiple mixins separating them with commas.
    Example: `class Duck extends Animal with Swimmer, Flyer { ... }`

  -----------------------------------------------------------------------------
  3. Restricting Mixin Application (on keyword)
  -----------------------------------------------------------------------------
  - You can restrict a mixin so it can only be applied to classes that extend 
    or implement a specific base class.
  - Use the `on` keyword.
    Example: `mixin Barkable on Dog { ... }` // Can only be applied to Dogs.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Declare two mixins:
          - `Logger`: defines a method `log(String message)` printing "[LOG]: $message".
          - `Validator`: defines a method `isValidEmail(String email)` returning `true` 
            if the email contains "@", else `false`.
          Create a class `UserRegistration` that uses BOTH mixins (`with Logger, Validator`).
          In main(), create an instance, validate an email, and log the registration success/failure.

  Task 2: Restricting Mixins (`on` constraint):
          - Create a base class `Athlete`.
          - Create a mixin `DopingTest` restricted to `Athlete` classes using the `on` keyword.
            It should define a method `test()` that prints: "Athlete undergoing doping test...".
          - Create a class `Runner` that extends `Athlete` and uses `DopingTest`.
          - Try creating a class `Car` that uses `DopingTest` and comment out the code, 
            explaining in comments why it fails.
*/

// Unrelated Mixins defining specific behaviors
mixin Flyer {
  void fly() {
    print("Flapping wings and soaring in the sky!");
  }
}

mixin Swimmer {
  void swim() {
    print("Paddling through the water!");
  }
}

// Parent class
class Animal {
  final String name;
  Animal(this.name);
}

// Subclass applying mixins
class Duck extends Animal with Flyer, Swimmer {
  Duck(super.name);
}

// Restriction example
class Vehicle {}

// This mixin can only be applied to subclasses of Vehicle
mixin ElectricEngine on Vehicle {
  void chargeBattery() {
    print("Battery charging using regenerative power...");
  }
}

class Tesla extends Vehicle with ElectricEngine {}

void main() {
  // --- Example Code ---
  print("--- Mixins Examples ---");

  // Duck inherits from Animal and gains Flyer and Swimmer behaviors
  var duck = Duck("Donald");
  print("${duck.name} behaviors:");
  duck.fly();
  duck.swim();

  // Electric engine mixin applied to a vehicle subclass
  var modelS = Tesla();
  modelS.chargeBattery();

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 and Task 2) here!
}

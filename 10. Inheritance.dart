/*
  =============================================================================
  DART FUNDAMENTALS: INHERITANCE
  =============================================================================
  
  Inheritance is a key mechanism of OOP where a subclass (child class) inherits 
  properties and methods from a superclass (parent class). This promotes code reuse.

  -----------------------------------------------------------------------------
  1. Extends Keyword
  -----------------------------------------------------------------------------
  - Use the `extends` keyword to subclass a parent class.
  - Dart supports single-class inheritance (a class can only extend one parent class).

  -----------------------------------------------------------------------------
  2. Overriding Methods (@override)
  -----------------------------------------------------------------------------
  - Subclasses can re-define methods of their parent class to implement specific behaviors.
  - Decorating with `@override` is optional but recommended as it alerts the compiler.

  -----------------------------------------------------------------------------
  3. Super Keyword
  -----------------------------------------------------------------------------
  - Use `super` to reference properties/methods in the parent class.
  - E.g., `super.makeSound()` invokes the parent class method.

  -----------------------------------------------------------------------------
  4. Super Constructors
  -----------------------------------------------------------------------------
  - Subclasses must call one of the parent constructors.
  - If the parent class has no default (no-argument) constructor, you must 
    explicitly call the parent constructor in the initializer list.
    Traditional syntax: `Car(String brand) : super(brand);`
    Modern shorthand (Dart 2.17+): `Car(super.brand);` (Super parameter syntax).

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Create a base class `Device` with fields `brand` and `powerOn()`.
          - `powerOn()` prints: "[brand] is powering on."
          - Create a subclass `Smartphone` that extends `Device`.
          - Add a new field `os` (Operating System) to `Smartphone` and a constructor 
            using the modern super-parameter syntax to initialize both `brand` and `os`.
          - Overload/Override `powerOn()` in `Smartphone` to call `super.powerOn()` 
            first, then print: "OS loaded: [os]".
          - Instantiate `Smartphone` in main() and call `powerOn()`.

  Task 2: Define a hierarchy:
          - Class `Employee` with field `name` and constructor `Employee(this.name)`.
          - Subclass `Manager` that extends `Employee` and adds a list of string `teamMembers`.
          - Override `Employee` properties or build a description method that prints 
            the manager's name and details of their team.
*/

class Animal {
  String name;

  Animal(this.name);

  void makeSound() {
    print("$name makes a generic sound.");
  }
}

// Subclass extending Animal
class Dog extends Animal {
  String breed;

  // Constructor using modern super parameter shorthand
  Dog(super.name, this.breed);

  // Method Overriding
  @override
  void makeSound() {
    print("$name (the $breed) barks!");
  }

  void parentSound() {
    // Calling method from parent class
    super.makeSound();
  }
}

void main() {
  // --- Example Code ---
  print("--- Inheritance Examples ---");

  var genericAnimal = Animal("Some Creature");
  genericAnimal.makeSound();

  var dog = Dog("Buddy", "Golden Retriever");
  dog.makeSound(); // Calls overridden method
  dog.parentSound(); // Calls superclass method using 'super'

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 and Task 2) here!
}

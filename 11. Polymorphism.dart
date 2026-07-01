/*
  =============================================================================
  DART FUNDAMENTALS: POLYMORPHISM, ABSTRACT CLASSES & INTERFACES
  =============================================================================
  
  Polymorphism means "many forms". In OOP, it allows an object of a subclass to 
  be treated as an object of its superclass, while executing subclass-specific 
  behaviors at runtime.

  -----------------------------------------------------------------------------
  1. Runtime Polymorphism
  -----------------------------------------------------------------------------
  - You can declare a variable of type Parent but instantiate a Child.
    Example: `Shape s = Circle();`
  - Calling a method on `s` executes the overridden method in `Circle`.

  -----------------------------------------------------------------------------
  2. Abstract Classes (abstract class)
  -----------------------------------------------------------------------------
  - An abstract class cannot be instantiated directly (using `new` or constructor).
  - It acts as a blueprint to be extended. Can contain abstract methods (methods 
    without a body/implementation) which subclasses MUST implement.

  -----------------------------------------------------------------------------
  3. Interfaces (implements)
  -----------------------------------------------------------------------------
  - Dart does not have an explicit `interface` keyword. 
  - Instead, EVERY class implicitly defines an interface containing all its 
    instance fields and methods.
  - A class uses the `implements` keyword to implement one or more interfaces.
  - When you implement a class, you MUST override every field and method 
    defined in the interface class.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Define an abstract class `Vehicle` with:
          - An abstract method `startEngine()`.
          - An abstract method `stopEngine()`.
          Create two subclasses `Car` and `Motorcycle` that extend `Vehicle` 
          and implement both methods with specific print outputs.
          In main(), create a List of type `Vehicle` holding instances of 
          `Car` and `Motorcycle`. Loop through the list and call `startEngine()`.

  Task 2: Demonstrate the `implements` (interface) keyword:
          - Create a class `Flyer` with a method `fly()`.
          - Create a class `Swimmer` with a method `swim()`.
          - Create a class `Duck` that implements BOTH `Flyer` and `Swimmer`.
            Override and provide implementations for both `fly()` and `swim()`.
          - Instantiate `Duck` in main() and invoke both behaviors.
*/

// Abstract class definition
abstract class Shape {
  // Abstract method (no body)
  double getArea();

  // Regular method with implementation
  void printInfo() {
    print("This shape has an area of ${getArea()}");
  }
}

class Circle extends Shape {
  double radius;
  Circle(this.radius);

  @override
  double getArea() => 3.14159 * radius * radius;
}

class Square extends Shape {
  double side;
  Square(this.side);

  @override
  double getArea() => side * side;
}

// Interface implementation example
class Printer {
  void printData() {
    print("Printing generic page...");
  }
}

// 3DPrinter implements Printer interface, must override printData
class ThreeDPrinter implements Printer {
  @override
  void printData() {
    print("3D Printing a solid object model...");
  }
}

void main() {
  // --- Example Code ---
  print("--- Polymorphism Examples ---");

  // 1. Runtime Polymorphism
  // Variable of type Shape holding Circle and Square references
  List<Shape> shapes = [Circle(5), Square(4)];
  
  for (var shape in shapes) {
    shape.printInfo(); // executes shape-specific getArea() dynamically!
  }

  // 2. Interfaces (implements)
  Printer basicPrinter = Printer();
  Printer industrialPrinter = ThreeDPrinter(); // Polymorphic assignment
  
  basicPrinter.printData();
  industrialPrinter.printData(); // Executes ThreeDPrinter's version

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 and Task 2) here!
}

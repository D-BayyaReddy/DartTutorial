/*
  =============================================================================
  DART FUNDAMENTALS: OBJECTS
  =============================================================================
  
  In Dart, everything is an object. An object is an instance of a class. 
  Objects hold state (properties) and display behavior (methods).

  -----------------------------------------------------------------------------
  1. Instantiating Objects
  -----------------------------------------------------------------------------
  - An object is created from a class blueprint.
  - The `new` keyword is optional in Dart and typically omitted.
    Example: `var car = Car();` // Recommended
             `Car car = new Car();` // Allowed but discouraged

  -----------------------------------------------------------------------------
  2. Object Reference & Identity
  -----------------------------------------------------------------------------
  - Object variables hold references to objects in memory, not the objects themselves.
  - Assigning one object variable to another copies the reference, pointing to the same object.
  - The `identical()` function checks if two references point to the exact same memory location.

  -----------------------------------------------------------------------------
  3. Overriding toString()
  -----------------------------------------------------------------------------
  - By default, printing an object prints `Instance of 'ClassName'`.
  - Overriding the `toString()` method allows you to print a custom, human-readable string representation.

  -----------------------------------------------------------------------------
  4. Object Equality (== and hashCode)
  -----------------------------------------------------------------------------
  - By default, `==` evaluates to true only if two references point to the exact same object.
  - If you want logical equality (e.g., two different point objects with the same X and Y are equal),
    you must override both the `operator ==` and the `hashCode` getter.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Define a class `Laptop` with fields `brand` and `ram` (in GB).
          Overload/override the `toString()` method to print:
          "Laptop Specs: [brand] with [ram]GB RAM".
          Instantiate it in main() and print the object to test it.

  Task 2: Demonstrate reference copying:
          - Create two laptop references `lap1` and `lap2`.
          - Point `lap2` to `lap1`.
          - Change `lap2.ram` and print `lap1.ram`. Describe what happened in comments.
          - Use `identical(lap1, lap2)` to verify they are the same instance.

  Task 3: Override the `==` operator and `hashCode` getter on a class `Point` 
          (fields `int x, y`) so that two different instances with the same 
          x and y coordinates are considered equal. Test this in main().
*/

class Product {
  String name;
  double price;

  Product(this.name, this.price);

  // Overriding toString() for human-readable output
  @override
  String toString() {
    return "Product: $name (Price: \$$price)";
  }
}

class Coordinate {
  final int x;
  final int y;

  Coordinate(this.x, this.y);

  // Overriding equality operator
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is Coordinate && other.x == x && other.y == y;
  }

  // Always override hashCode when overriding ==
  @override
  int get hashCode => x.hashCode ^ y.hashCode;
}

void main() {
  // --- Example Code ---
  print("--- Objects Examples ---");

  // 1. Instantiation and toString()
  var p1 = Product("Laptop", 999.99);
  print(p1); // Automatically calls p1.toString()

  // 2. Reference vs Identity
  var p2 = p1; // copying reference
  print("Are p1 and p2 identical? ${identical(p1, p2)}");

  var p3 = Product("Laptop", 999.99); // new instance with same data
  print("Are p1 and p3 identical? ${identical(p1, p3)}");
  print("Are p1 and p3 equal by default ==? ${p1 == p3}"); // false, they are different instances in memory

  // 3. Custom logical equality
  var c1 = Coordinate(10, 20);
  var c2 = Coordinate(10, 20);
  print("c1 == c2 (Overridden equality): ${c1 == c2}"); // true, custom == logic
  print("Are c1 and c2 identical in memory? ${identical(c1, c2)}"); // false

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

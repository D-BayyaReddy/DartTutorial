/*
  =============================================================================
  DART FUNDAMENTALS: GENERICS
  =============================================================================
  
  Generics are used to write type-safe code while maintaining reusability. 
  They allow classes, interfaces, and methods to operate on parameterized types, 
  which are specified when the class or method is instantiated.

  -----------------------------------------------------------------------------
  1. Why Generics?
  -----------------------------------------------------------------------------
  - Type Safety: Ensures that you don't accidentally insert a double into a List of Strings.
  - Reduces code duplication: No need to write `IntList`, `StringList`, etc.
  - Better IDE autocomplete and compiler error checks.

  -----------------------------------------------------------------------------
  2. Generic Classes (Class<T>)
  -----------------------------------------------------------------------------
  - You can declare a class with one or more generic type parameters (usually `T`, `E`, `K`, `V`).
    Example:
      class Box<T> {
        T content;
        Box(this.content);
      }

  -----------------------------------------------------------------------------
  3. Generic Methods
  -----------------------------------------------------------------------------
  - You can declare methods that accept or return generic parameters.
    Example: `T getFirstItem<T>(List<T> list) => list.first;`

  -----------------------------------------------------------------------------
  4. Restricting Type Parameters (extends constraint)
  -----------------------------------------------------------------------------
  - You can constrain the types that can be used for a generic parameter.
    Example: `class Calculator<T extends num>`
    This restricts `T` to only be `num`, `int`, `double`, or their subtypes.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Create a generic class `Stack<T>` that represents a Last-In-First-Out stack.
          It should contain:
          - A private List `_items` of type `T`.
          - A method `push(T item)` to add items.
          - A method `pop()` returning type `T` (removes and returns the last element).
          - A getter `peek` to check the top element without removing it.
          Instantiate and test `Stack<String>` and `Stack<int>` in main().

  Task 2: Define a generic method `swap<T>(List<T> list, int index1, int index2)` 
          that swaps the elements at the specified indices in the list.
          Test it in main() and print the list before and after.

  Task 3: Constrained Generics:
          - Create an abstract class `Vehicle` with property `String brand`.
          - Create a class `Car` that extends `Vehicle`.
          - Create a class `Bike` that does NOT extend `Vehicle`.
          - Create a generic class `Garage<T extends Vehicle>` with a list of `T` 
            and a method to print all brands.
          - Try creating `Garage<Bike>` and observe the compiler error (comment it out).
*/

// Generic Class
class Pair<K, V> {
  final K key;
  final V value;

  Pair(this.key, this.value);

  void printDetails() {
    print("Pair [Key ($K): $key, Value ($V): $value]");
  }
}

// Generic Method
T checkTypeAndReturn<T>(T value) {
  print("Evaluating parameter of type: $T");
  return value;
}

// Restricted Generics
class NumberHolder<T extends num> {
  final T number;
  NumberHolder(this.number);

  double getSquare() => number.toDouble() * number.toDouble();
}

void main() {
  // --- Example Code ---
  print("--- Generics Examples ---");

  // 1. Instantiating Generic Class
  var stringIntPair = Pair<String, int>("UserAge", 28);
  stringIntPair.printDetails();

  var doubleBoolPair = Pair<double, bool>(9.81, true);
  doubleBoolPair.printDetails();

  // 2. Generic Method
  var resString = checkTypeAndReturn("Dart Language");
  var resInt = checkTypeAndReturn(100);
  print("Returned string: $resString, returned int: $resInt");

  // 3. Constrained Generics
  var intHolder = NumberHolder(10);
  var doubleHolder = NumberHolder(2.5);
  // var stringHolder = NumberHolder("hello"); // Compile Error! T must extend num

  print("Square of 10: ${intHolder.getSquare()}");
  print("Square of 2.5: ${doubleHolder.getSquare()}");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

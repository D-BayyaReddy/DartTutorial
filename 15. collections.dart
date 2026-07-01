/*
  =============================================================================
  DART FUNDAMENTALS: COLLECTIONS (DEEP DIVE)
  =============================================================================
  
  Collections are containers that group multiple values together. 
  Dart has three primary collections: List, Set, and Map.

  -----------------------------------------------------------------------------
  1. Lists (Ordered, Duplicates Allowed)
  -----------------------------------------------------------------------------
  - Common Operations: `add()`, `addAll()`, `remove()`, `removeAt()`.
  - Functional methods: 
    - `map()`: Transforms elements.
    - `where()`: Filters elements based on a condition (like `filter` in JS/Kotlin).
    - `reduce()` / `fold()`: Combines elements into a single value.

  -----------------------------------------------------------------------------
  2. Sets (Unordered, Unique Items Only)
  -----------------------------------------------------------------------------
  - Common Operations: `add()`, `remove()`, `contains()`.
  - Math operations: `intersection()`, `union()`, `difference()`.

  -----------------------------------------------------------------------------
  3. Maps (Key-Value Pairs)
  -----------------------------------------------------------------------------
  - Keys must be unique, values can be duplicates.
  - Common Operations: `containsKey()`, `putIfAbsent()`, `forEach()`.

  -----------------------------------------------------------------------------
  4. Collection Operators (Spread, Collection if/for)
  -----------------------------------------------------------------------------
  - Spread Operator (`...`): Inserts all elements of a collection into another.
  - Null-Aware Spread (`...?`): Prevents exception if the list to insert is null.
  - Collection `if`: Conditionally add an element during collection construction.
  - Collection `for`: Create list elements by looping through another iterable.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Given a list of integers `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`:
          - Filter out the odd numbers (keep only even numbers) using `.where()`.
          - Square the resulting numbers using `.map()`.
          - Convert the final output back to a List and print it.

  Task 2: Math Sets:
          - Define a Set of `englishSpeakers = {"Alice", "Bob", "Charlie"}`.
          - Define a Set of `spanishSpeakers = {"Bob", "David", "Edward"}`.
          - Find and print the intersection (who speaks both?).
          - Find and print the union (who speaks either language?).

  Task 3: Dynamic Collections (Spread and collection-if):
          - Declare a boolean `includePremium = true`.
          - Build a list of products `['Basic Account', 'Free Storage', if (includePremium) 'Unlimited Bandwidth']`.
          - Use a spread operator to merge a list of fallback features `['Email Support', 'Offline Mode']` into this list.
          - Print the final list.
*/

void main() {
  // --- Example Code ---
  print("--- Collections Examples ---");

  // 1. Lists - Functional APIs
  List<int> scoreList = [10, 25, 45, 60, 85, 90];
  
  // Filtering (where) and Mapping
  var passedScores = scoreList.where((score) => score >= 60).map((score) => "Score: $score").toList();
  print("Passed Scores formatted: $passedScores");

  // Reducing to a single sum
  int sumOfScores = scoreList.reduce((val, element) => val + element);
  print("Sum of all scores: $sumOfScores");

  // 2. Sets - Intersection and Union
  Set<String> setA = {"Apple", "Banana", "Orange"};
  Set<String> setB = {"Banana", "Mango", "Pineapple"};
  
  print("Intersection of sets: ${setA.intersection(setB)}");
  print("Union of sets: ${setA.union(setB)}");

  // 3. Maps
  Map<int, String> employeeMap = {101: "Alice", 102: "Bob"};
  employeeMap.putIfAbsent(103, () => "Charlie"); // adds only if key 103 doesn't exist
  print("Employees Map: $employeeMap");

  // 4. Spread and Collection operators
  var promoItems = ["Sunglasses", "Cap"];
  bool addFreeGift = true;
  
  var checkoutBasket = [
    "Laptop",
    "Mouse",
    if (addFreeGift) "Free Pen", // Collection if
    ...promoItems,                // Spread operator
  ];
  print("Checkout Basket: $checkoutBasket");

  // Collection for
  var baseNumbers = [1, 2, 3];
  var doubledNumbers = [for (var n in baseNumbers) n * 2]; // Collection for
  print("Doubled via Collection For: $doubledNumbers");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

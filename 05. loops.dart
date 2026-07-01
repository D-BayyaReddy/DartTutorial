/*
  =============================================================================
  DART FUNDAMENTALS: LOOPS (ITERATION)
  =============================================================================
  
  Loops allow you to repeat a block of code multiple times based on conditions.

  -----------------------------------------------------------------------------
  1. For Loop (Standard)
  -----------------------------------------------------------------------------
  - Used when you know how many times the loop should run.
  - Syntax: `for (initialization; condition; increment/decrement)`

  -----------------------------------------------------------------------------
  2. For-In Loop
  -----------------------------------------------------------------------------
  - Specifically designed to iterate over iterables (like Lists or Sets) concisely.
  - Syntax: `for (var item in iterable)`

  -----------------------------------------------------------------------------
  3. While Loop
  -----------------------------------------------------------------------------
  - Repeats a statement as long as the condition evaluates to true.
  - Evaluates the condition BEFORE executing the loop body.

  -----------------------------------------------------------------------------
  4. Do-While Loop
  -----------------------------------------------------------------------------
  - Similar to while, but evaluates the condition AFTER executing the loop body.
  - Guaranteed to run the loop body at least once.

  -----------------------------------------------------------------------------
  5. Break & Continue
  -----------------------------------------------------------------------------
  - `break`: Exits the loop entirely.
  - `continue`: Skips the rest of the current iteration and jumps to the next one.

  -----------------------------------------------------------------------------
  6. ForEach Method
  -----------------------------------------------------------------------------
  - Built-in method on iterables that executes a callback function for each element.
  - Syntax: `iterable.forEach((item) => print(item));`

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Write a standard `for` loop that prints the multiplication table of 5 
          (from 5 * 1 to 5 * 10).

  Task 2: Use a `while` loop to sum numbers from 1 to 50 and print the final sum.

  Task 3: Declare a List of names. Use a `for-in` loop to print each name in 
          uppercase letters.

  Task 4: Write a loop (any style) from 1 to 10. Use `continue` to skip printing 
          even numbers (only print odd numbers).

  Task 5: Declare a list of integers. Use the `.forEach()` method to double 
          each integer and print the result.
*/

void main() {
  // --- Example Code ---
  print("--- Loops Examples ---");

  // 1. Standard For Loop
  print("Standard For Loop (0 to 3):");
  for (int i = 0; i <= 3; i++) {
    print("i = $i");
  }

  // 2. For-In Loop
  print("\nFor-In Loop:");
  var fruits = ["Apple", "Banana", "Cherry"];
  for (var fruit in fruits) {
    print("Fruit: $fruit");
  }

  // 3. While Loop
  print("\nWhile Loop:");
  int count = 1;
  while (count <= 3) {
    print("Count: $count");
    count++;
  }

  // 4. Do-While Loop
  print("\nDo-While Loop:");
  int value = 5;
  do {
    print("Value printed once even though condition is false: $value");
    value++;
  } while (value < 5);

  // 5. Break and Continue
  print("\nBreak and Continue:");
  for (int i = 1; i <= 5; i++) {
    if (i == 2) {
      continue; // Skips 2
    }
    if (i == 4) {
      break; // Stops loop at 4
    }
    print("i = $i");
  }

  // 6. ForEach method
  print("\nForEach Method:");
  var numbers = [10, 20, 30];
  numbers.forEach((num) => print("Number: $num"));

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 5) here!
}

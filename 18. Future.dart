/*
  =============================================================================
  DART FUNDAMENTALS: FUTURES (ASYNC / AWAIT)
  =============================================================================
  
  A `Future<T>` represents a potential value or error that will be available 
  at some point in the future. It is Dart's equivalent of Promises in JS.

  -----------------------------------------------------------------------------
  1. Future States
  -----------------------------------------------------------------------------
  - Uncompleted: The asynchronous operation is still running.
  - Completed with value: The operation succeeded, returning type `T`.
  - Completed with error: The operation failed, throwing an exception.

  -----------------------------------------------------------------------------
  2. Handling Futures (Option A: then / catchError / whenComplete)
  -----------------------------------------------------------------------------
  - `.then()` executes when the future successfully completes.
  - `.catchError()` catches and handles any exceptions during execution.
  - `.whenComplete()` runs regardless of success or failure (similar to `finally`).

  -----------------------------------------------------------------------------
  3. Handling Futures (Option B: async & await)
  -----------------------------------------------------------------------------
  - Use the `async` keyword on a function to enable the `await` keyword.
  - `await` pauses execution of the function until the Future completes.
  - Error handling is done using standard `try-catch-finally` blocks.

  -----------------------------------------------------------------------------
  4. Concurrent Futures (Future.wait)
  -----------------------------------------------------------------------------
  - Executes multiple Futures concurrently and waits for all of them to complete.
    Example: `List results = await Future.wait([fetchA(), fetchB()]);`

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Create a function `fetchUserGreeting()` that returns a `Future<String>` 
          after a delay of 2 seconds (Hint: Use `Future.delayed(Duration(seconds: 2), () => "Hello")`).
          - Call this function in main().
          - Use `.then()` to print the greeting once complete.

  Task 2: Rewrite Task 1 inside an `async` function and use `await` to get the value.
          Print the result.

  Task 3: Create a function `fetchSecureData()` that simulates an API error:
          - Have it throw an `Exception("Network timed out")` after 1.5 seconds.
          - Call it using `async`/`await` and wrap it in a `try-catch` block 
            to safely print the error message: "Caught error: [error]".

  Task 4: Parallel execution:
          - Write two separate functions returning numbers: `fetchItemsCount()` 
            (returns 10 after 1s) and `fetchPricesSum()` (returns 250 after 2s).
          - Use `Future.wait` to run them concurrently in main(), sum their results, 
            and print "Total value: [sum]". Observe that it takes 2 seconds total, not 3.
*/

// Function returning a Future
Future<String> fetchUserRole() {
  return Future.delayed(Duration(seconds: 2), () {
    return "Administrator";
  });
}

// Function that might throw an error
Future<String> fetchApiKey() {
  return Future.delayed(Duration(seconds: 1), () {
    throw Exception("Unauthorized request");
  });
}

// Consuming Futures with async/await
Future<void> displayDashboard() async {
  print("Loading dashboard...");
  try {
    // Execution pauses here until fetchUserRole completes
    String role = await fetchUserRole();
    print("Dashboard loaded for role: $role");
  } catch (e) {
    print("Failed to load dashboard: $e");
  }
}

void main() async {
  // --- Example Code ---
  print("--- Futures Examples ---");

  // 1. Handling using then/catchError
  print("Requesting API Key...");
  fetchApiKey()
    .then((key) => print("API Key fetched: $key"))
    .catchError((error) => print("API Error handled: $error"))
    .whenComplete(() => print("API transaction finished."));

  // 2. Handling using async/await
  await displayDashboard();

  // 3. Concurrent Futures (Future.wait)
  print("\nLaunching concurrent tasks...");
  var stopwatch = Stopwatch()..start();
  
  var results = await Future.wait([
    Future.delayed(Duration(seconds: 2), () => "Data A"),
    Future.delayed(Duration(seconds: 2), () => "Data B"),
  ]);

  print("Concurrent tasks results: $results");
  print("Executed in: ${stopwatch.elapsed.inSeconds} seconds (not 4!)");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 4) here!
}

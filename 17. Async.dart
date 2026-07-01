/*
  =============================================================================
  DART FUNDAMENTALS: ASYNCHRONOUS PROGRAMMING CONCEPTS
  =============================================================================
  
  Dart is a single-threaded language. This means it executes one instruction at 
  a time in a sequence. However, Dart supports asynchronous operations (like network 
  requests or reading files) using an Event Loop, so it never blocks execution.

  -----------------------------------------------------------------------------
  1. The Event Loop
  -----------------------------------------------------------------------------
  - Think of Dart's thread of execution as running inside an endless loop.
  - The Event Loop processes tasks from two queues:
    1. Microtask Queue: Contains short, internal operations. It has HIGHER priority.
    2. Event Queue: Contains external events (I/O, mouse clicks, timers, futures).
  - The Event Loop will NEVER process anything from the Event Queue until the 
    Microtask Queue is completely empty.

  -----------------------------------------------------------------------------
  2. Synchronous vs Asynchronous
  -----------------------------------------------------------------------------
  - Synchronous: Code executes line-by-line. If line 2 takes 10 seconds, line 3 must wait.
  - Asynchronous: Code schedules a task to run later (e.g., in the event queue) and immediately 
    moves to the next instruction without waiting.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Predict the output order of the following block, then run it in main() 
          and write a comment explaining why the execution order happened the way it did:
          
          ```dart
          print("A");
          Future(() => print("B"));
          Future.microtask(() => print("C"));
          print("D");
          ```

  Task 2: Simulate scheduling:
          - Write a program that prints "Initializing App...".
          - Schedule a task in the Event Queue to print "Fetch complete from Database" 
            (Hint: Use a default Future constructor).
          - Print "App initialization sequence finished." (Synchronously).
          Observe which one prints first.
*/

import 'dart:async';

void main() {
  // --- Example Code ---
  print("--- Asynchronous Concepts Examples ---");

  // Step 1: Synchronous code executes immediately
  print("1. Start of main() [Sync]");

  // Step 2: Schedule a task on the Event Queue (lowest priority)
  Future(() {
    print("2. Event Queue Task: Processed by Event Loop [Async]");
  });

  // Step 3: Schedule a task on the Microtask Queue (higher priority than Event Queue)
  scheduleMicrotask(() {
    print("3. Microtask Queue Task: Runs before Event Queue [Async]");
  });

  // Step 4: Synchronous code finishes
  print("4. End of main() [Sync]");

  // The event loop will now wake up and process:
  // 1. Microtask Queue (prints #3)
  // 2. Event Queue (prints #2)

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 and Task 2) here!
}

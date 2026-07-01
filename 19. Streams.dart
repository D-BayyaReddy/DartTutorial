/*
  =============================================================================
  DART FUNDAMENTALS: STREAMS
  =============================================================================
  
  A `Stream` is a sequence of asynchronous events. While a `Future` returns 
  exactly one value (or error) once, a `Stream` can emit multiple values over 
  time and then close when completed. It's like a water pipe delivering drops of data.

  -----------------------------------------------------------------------------
  1. Types of Streams
  -----------------------------------------------------------------------------
  - Single-Subscription Streams: Can only be listened to ONCE. Good for sequence 
    operations (like downloading a file or database queries).
  - Broadcast Streams: Can have MULTIPLE listeners simultaneously. Good for 
    independent events (like button clicks, sensor data, or chat room alerts).
    Convert a stream to broadcast using `stream.asBroadcastStream()`.

  -----------------------------------------------------------------------------
  2. Creating Streams (async* and yield)
  -----------------------------------------------------------------------------
  - Use `async*` on a function returning a `Stream`.
  - Use the `yield` keyword to emit/send a value through the stream.
    Example:
      Stream<int> countStream(int max) async* {
        for (int i = 1; i <= max; i++) {
          yield i; // emits i
        }
      }

  -----------------------------------------------------------------------------
  3. Consuming Streams (await for & listen)
  -----------------------------------------------------------------------------
  - Option A: Use `await for` loop to process items as they arrive.
  - Option B: Use `.listen()` to setup handlers for new data, errors, or completion.

  -----------------------------------------------------------------------------
  4. Stream Transformations (map / where)
  -----------------------------------------------------------------------------
  - You can filter or format values flowing through a stream.
    Example: `stream.where((value) => value.isEven).map((value) => "Even: $value")`

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Create a stream generator `countdown(int seconds)` using `async*` 
          that emits integers from `seconds` down to 1, waiting 1 second 
          between each emission (use `await Future.delayed(Duration(seconds: 1))`).
          Consumes it using `await for` in main() and print the countdown.

  Task 2: Convert a stream to a Broadcast Stream:
          - Create a stream that emits three names of colors.
          - Convert it to a broadcast stream.
          - Set up two separate `.listen()` callbacks printing different prefixes:
            "Listener 1 heard: [color]" and "Listener 2 heard: [color]".

  Task 3: Stream Transformations:
          - Generate a periodic stream of numbers every 500 milliseconds:
            `Stream<int> periodicStream = Stream.periodic(Duration(milliseconds: 500), (x) => x).take(10);`
          - Transform this stream by filtering for odd numbers only, and then 
            doubling them.
          - Listen and print the values.
*/

import 'dart:async';

// Creating a Stream using async* and yield
Stream<int> numberGenerator(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(milliseconds: 500)); // Simulating latency
    yield i; // Emit the value
  }
}

void main() async {
  // --- Example Code ---
  print("--- Streams Examples ---");

  // 1. Consuming Stream using 'await for'
  print("Consuming with await for:");
  var stream1 = numberGenerator(3);
  await for (int val in stream1) {
    print("Received value: $val");
  }

  // 2. Consuming Stream using '.listen' with transform
  print("\nConsuming with .listen and transformation:");
  var stream2 = numberGenerator(5);
  
  // Transform: keep only odd values and map to a string message
  var subscription = stream2
      .where((val) => val % 2 != 0)
      .map((val) => "Odd number: $val")
      .listen(
        (data) => print(data),
        onError: (err) => print("Stream error: $err"),
        onDone: () => print("Stream completed!"),
      );

  // We await the completion of the stream to keep the console print clean
  await subscription.asFuture();

  // 3. Broadcast Stream
  print("\nBroadcast Stream Demo:");
  var singleStream = Stream<int>.periodic(Duration(milliseconds: 300), (x) => x).take(3);
  var broadcastStream = singleStream.asBroadcastStream();

  broadcastStream.listen((val) => print("Subscriber 1: $val"));
  broadcastStream.listen((val) => print("Subscriber 2: $val"));

  // Wait briefly for periodic stream to finish
  await Future.delayed(Duration(seconds: 1));

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

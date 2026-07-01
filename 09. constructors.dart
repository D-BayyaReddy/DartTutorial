/*
  =============================================================================
  DART FUNDAMENTALS: CONSTRUCTORS
  =============================================================================
  
  A constructor is a special method used to initialize objects of a class. 
  Dart offers several types of constructors.

  -----------------------------------------------------------------------------
  1. Default and Generative Constructors
  -----------------------------------------------------------------------------
  - If you don't declare a constructor, a default parameterless constructor is provided.
  - Generative Constructor: Creates a new instance. Dart has syntactic sugar to assign parameters:
    `Point(this.x, this.y);` (automatically assigns x and y fields).

  -----------------------------------------------------------------------------
  2. Named Constructors
  -----------------------------------------------------------------------------
  - Dart does not support constructor overloading (methods with same name but different signatures).
  - Instead, use Named Constructors to define multiple ways to build an object.
    Syntax: `ClassName.constructorName(...)`

  -----------------------------------------------------------------------------
  3. Initializer Lists
  -----------------------------------------------------------------------------
  - Executes BEFORE the constructor body runs. 
  - Perfect for setting final variables based on inputs or performing validations.
    Syntax: `Point(double x, double y) : this.x = x, this.y = y { ... }`

  -----------------------------------------------------------------------------
  4. Redirecting Constructors
  -----------------------------------------------------------------------------
  - A constructor that delegates initialization to another constructor of the same class.
    Syntax: `Point.alongXAxis(double x) : this(x, 0);` // calls main constructor

  -----------------------------------------------------------------------------
  5. Const Constructors
  -----------------------------------------------------------------------------
  - If your class produces state that never changes (all fields are `final`), you can 
    make the constructor `const`. This allows creating compile-time constants.
    Syntax: `const Point(this.x, this.y);`

  -----------------------------------------------------------------------------
  6. Factory Constructors
  -----------------------------------------------------------------------------
  - Defined with the `factory` keyword.
  - Unlike generative constructors, a factory constructor doesn't always create 
    a new instance. It can return an existing instance from a cache, or even a subclass.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Create a class `Person` with fields `name` and `age`. 
          - Create a generative constructor using syntactic sugar.
          - Create a named constructor `Person.guest()` that sets `name` to "Guest" 
            and `age` to 18.
          - Instantiate and print both in main().

  Task 2: Define a class `Rectangle` with fields `double width` and `double height`.
          - Use an initializer list to validate that width and height are greater than 0.
            If invalid, throw an ArgumentError (`assert(width > 0)` or `throw ArgumentError(...)`).
          - Add a redirecting constructor `Rectangle.square(double size)` that redirects to the primary constructor.

  Task 3: Define a `DatabaseConnection` class:
          - Use a private constructor `DatabaseConnection._internal()`.
          - Implement a `factory` constructor that returns a cached single instance 
            (Singleton pattern) of `DatabaseConnection`.
          - In main(), check if multiple calls to the factory constructor return the exact same instance.
*/

class Point {
  final double x;
  final double y;

  // 1. Generative Constructor with Syntactic Sugar
  Point(this.x, this.y);

  // 3. Initializer list (validates values before initialization)
  Point.origin() : x = 0, y = 0;

  // 4. Redirecting Constructor
  Point.alongXAxis(double x) : this(x, 0);

  // 5. Const Constructor (if class has final fields only)
  // const Point(this.x, this.y);

  @override
  String toString() => "Point($x, $y)";
}

// 6. Factory Constructor (Singleton Example)
class Logger {
  final String name;
  static final Map<String, Logger> _cache = {};

  // Private named constructor
  Logger._internal(this.name);

  // Factory constructor
  factory Logger(String name) {
    // If logger with this name exists, return it, otherwise create new
    return _cache.putIfAbsent(name, () => Logger._internal(name));
  }

  void log(String msg) => print("[$name] $msg");
}

void main() {
  // --- Example Code ---
  print("--- Constructors Examples ---");

  // Generative constructor
  var p1 = Point(3.0, 4.0);
  print("p1: $p1");

  // Initializer List (Origin)
  var pOrigin = Point.origin();
  print("pOrigin: $pOrigin");

  // Redirecting constructor
  var pX = Point.alongXAxis(10.0);
  print("pX: $pX");

  // Factory Constructor (Singleton caching behavior)
  var log1 = Logger("API");
  var log2 = Logger("API");
  var log3 = Logger("Database");

  log1.log("Fetching users...");
  log2.log("Connection stable."); // prints using same cached instance
  
  print("Are log1 and log2 the same instance? ${identical(log1, log2)}"); // true
  print("Are log1 and log3 the same instance? ${identical(log1, log3)}"); // false

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

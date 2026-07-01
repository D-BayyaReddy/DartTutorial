/*
  =============================================================================
  DART FUNDAMENTALS: ENUMS (BASIC & ENHANCED)
  =============================================================================
  
  An enumeration (enum) is a special type used to define a collection of 
  compile-time constant values. Enums make your code more readable and self-documenting.

  -----------------------------------------------------------------------------
  1. Basic Enums
  -----------------------------------------------------------------------------
  - Declared using the `enum` keyword.
  - Each enum value has an `index` (0-based) and a `name` property.
    Example: `enum Status { pending, active, completed }`

  -----------------------------------------------------------------------------
  2. Enhanced Enums (Dart 2.17+)
  -----------------------------------------------------------------------------
  - Enums in Dart act like classes and can define final instance variables, 
    getters, methods, and implement interfaces.
  - The constructor of an enhanced enum MUST be `const`.
  - Example:
    ```dart
    enum UserRole {
      admin(1, "Full Access"),
      user(2, "Restricted Access");

      final int id;
      final String label;
      const UserRole(this.id, this.label); // const constructor
    }
    ```

  -----------------------------------------------------------------------------
  3. Iterating Enums
  -----------------------------------------------------------------------------
  - Use `EnumName.values` to get a list of all enum constants.

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Define an enhanced enum `Membership` with:
          - Values: `silver` (10% discount), `gold` (20% discount), `platinum` (30% discount).
          - Field: `final double discountRate`.
          - Getter `percentageLabel` that returns a string (e.g., "10%", "20%", "30%").
          - Method `calculateDiscountedPrice(double originalPrice)` that returns 
            the final price after applying the discount rate.
          Test all three memberships in main() with an original price of 100.0.
*/

// Basic Enum
enum ConnectionStatus {
  disconnected,
  connecting,
  connected
}

// Enhanced Enum (Dart 2.17+)
enum Planet {
  mercury(mass: 3.30e23, radius: 2.4397e6),
  venus(mass: 4.87e24, radius: 6.0518e6),
  earth(mass: 5.97e24, radius: 6.3781e6);

  // Enum fields must be final
  final double mass;
  final double radius;

  // Enum constructor MUST be const
  const Planet({required this.mass, required this.radius});

  // Read-only getter
  double get surfaceGravity => (6.67430e-11 * mass) / (radius * radius);

  // Method
  void printInfo() {
    print("Planet: $name, Gravity: ${surfaceGravity.toStringAsFixed(2)} m/s^2");
  }
}

void main() {
  // --- Example Code ---
  print("--- Enums Examples ---");

  // 1. Basic Enum
  var currentStatus = ConnectionStatus.connecting;
  print("Current status name: ${currentStatus.name}");
  print("Current status index: ${currentStatus.index}");

  switch (currentStatus) {
    case ConnectionStatus.disconnected:
      print("Please reconnect.");
      break;
    case ConnectionStatus.connecting:
      print("Connecting to server...");
      break;
    case ConnectionStatus.connected:
      print("Connected successfully!");
      break;
  }

  // 2. Enhanced Enum
  print("\nPlanet Data:");
  Planet.earth.printInfo();
  Planet.venus.printInfo();

  // 3. Iterating Enums
  print("\nAll Planets:");
  for (var planet in Planet.values) {
    print("- ${planet.name} (Index: ${planet.index})");
  }

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1) here!
}

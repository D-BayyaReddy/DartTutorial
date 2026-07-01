/*
  =============================================================================
  DART FUNDAMENTALS: PATTERNS & DESTRUCTURING (DART 3.0+)
  =============================================================================
  
  Patterns are a major category of Dart syntax that match values against a schema 
  and destructure (extract) values out of complex objects.

  -----------------------------------------------------------------------------
  1. Destructuring Assignment
  -----------------------------------------------------------------------------
  - Break down structure values into separate local variables in a single step.
  - List destructuring: `var [a, b] = [1, 2];`
  - Record destructuring: `var (x, y) = (10, 20);`
  - Map destructuring: `var {'name': name, 'age': age} = {'name': 'Alice', 'age': 25};`

  -----------------------------------------------------------------------------
  2. If-Case Pattern Matching
  -----------------------------------------------------------------------------
  - Combines conditional checking with destructuring. If the value matches the pattern, 
    variables are bound and the block runs.
    Example:
      if (json case {'status': 'success', 'data': String content}) {
         print("Success content: $content");
      }

  -----------------------------------------------------------------------------
  3. Relational and Logical Operators in Switch Patterns
  -----------------------------------------------------------------------------
  - Use logic inside switches to matching value values.
    Example:
      String category = switch (score) {
        >= 90 => 'A',
        >= 80 && < 90 => 'B',
        _ => 'F'
      };

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Destructuring List and Map:
          - Given `var numbers = [100, 200, 300];` extract the first two elements 
            into variables `first` and `second`, ignoring the third (use `_` to skip).
          - Given `var person = {'username': 'coder123', 'status': 'active'};` 
            destructure it into local variables `username` and `status`.
          - Print the variables.

  Task 2: If-Case Matching:
          - Write an `if-case` statement that checks a dynamic `metadata` variable.
          - If it matches a Map containing `{'code': 200, 'message': String msg}`, 
            print "Success: [msg]".
          - Otherwise, print "Unknown payload".
          - Test it with matching and non-matching payloads.

  Task 3: Switch Patterns with Range Checks:
          - Implement a function `getWeatherTip(int temperature)` returning a String:
            - If temperature is < 0: "Freezing! Wear a heavy coat."
            - If temperature is between 0 and 15: "Chilly! A jacket will do."
            - If temperature is between 16 and 30: "Perfect! Enjoy the day."
            - Otherwise: "Hot! Stay hydrated."
            Use a Dart 3 switch expression with relational operators.
*/

// Custom class to demo object patterns
class Employee {
  final String name;
  final String department;
  Employee(this.name, this.department);
}

void main() {
  // --- Example Code ---
  print("--- Patterns Examples ---");

  // 1. Destructuring Lists & Maps
  var list = [1, 2];
  var [x, y] = list; // List destructuring
  print("List Destructured: x=$x, y=$y");

  var userMap = {'name': 'Alice', 'role': 'Manager'};
  var {'name': userName, 'role': userRole} = userMap; // Map destructuring
  print("Map Destructured: Name=$userName, Role=$userRole");

  // 2. Destructuring Custom Objects (Object Patterns)
  var emp = Employee("Bob", "Engineering");
  var Employee(name: empName, department: empDept) = emp;
  print("Employee Destructured: Name=$empName, Dept=$empDept");

  // 3. If-Case Pattern matching
  dynamic apiResult = {'status': 'error', 'code': 500, 'message': 'Internal Server Error'};
  if (apiResult case {'status': 'error', 'message': String errorMsg}) {
    print("API Error message: $errorMsg");
  }

  // 4. Switch Expressions with Relational & Logical patterns
  int age = 16;
  String message = switch (age) {
    < 13 => "Child",
    >= 13 && <= 19 => "Teenager",
    _ => "Adult"
  };
  print("Age Category: $message");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 to Task 3) here!
}

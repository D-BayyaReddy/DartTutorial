/*
  =============================================================================
  DART FUNDAMENTALS: CLASSES
  =============================================================================
  
  Dart is an object-oriented language. A class is a blueprint or template 
  for creating objects. It defines the state (fields/properties) and behavior 
  (methods/functions) that the created objects will have.

  -----------------------------------------------------------------------------
  1. Defining a Class
  -----------------------------------------------------------------------------
  - Use the `class` keyword.
  - Fields represent data stored in the object.
  - Methods define the operations that can be performed on the data.

  -----------------------------------------------------------------------------
  2. Encapsulation & Private Fields
  -----------------------------------------------------------------------------
  - Dart doesn't have keywords like `public`, `private`, or `protected`.
  - Instead, prefixing an identifier with an underscore `_` makes it private 
    to its library (the file it resides in).

  -----------------------------------------------------------------------------
  3. Getters and Setters (get / set)
  -----------------------------------------------------------------------------
  - Getters and setters allow you to intercept reads and writes to an object's properties.
  - Useful for validation, lazy loading, or computed fields.
  - Syntax:
    `Type get fieldName => _field;`
    `set fieldName(Type value) { _field = value; }`

  =============================================================================
  PRACTICE EXERCISES
  =============================================================================
  Task 1: Define a class `Book` with:
          - Public fields: `title`, `author`.
          - A method `read()` that prints: "Reading [title] by [author]".
          In the main function, instantiate the book, set fields, and call `read()`.

  Task 2: Define a class `BankAccount` with:
          - A private field `_balance` (initialize it to 0.0).
          - A getter `balance` to retrieve the balance.
          - A setter `deposit` that accepts a double value, checks if the value 
            is positive, and adds it to `_balance`. Print an error if negative.
          - In main(), test both valid and invalid deposits and print the balance.
*/

class User {
  // Fields
  String name = "";
  int age = 0;
  
  // Private field (private to this library/file)
  double _salary = 0.0;

  // Getter for salary
  double get salary => _salary;

  // Setter for salary with validation
  set salary(double newSalary) {
    if (newSalary >= 0) {
      _salary = newSalary;
    } else {
      print("Error: Salary cannot be negative!");
    }
  }

  // Method
  void showDetails() {
    print("User: $name, Age: $age, Salary: \$$_salary");
  }
}

void main() {
  // --- Example Code ---
  print("--- Classes Examples ---");

  // Instantiating the class
  var user = User();
  user.name = "Alice";
  user.age = 28;

  // Setting the salary via setter
  user.salary = 50000.0; 
  user.showDetails();

  // Trying an invalid salary
  print("\nAttempting invalid salary write:");
  user.salary = -1000.0; // Prints error
  print("Current salary remains: \$${user.salary}");

  print("\n--- Start Your Practice Exercises Below ---");
  // TODO: Implement the Practice Exercises (Task 1 and Task 2) here!
}

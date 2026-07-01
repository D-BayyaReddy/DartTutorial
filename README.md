# 🚀 The Dart Fundamentals Masterclass Guide

Welcome to the **Dart Fundamentals Masterclass**! This repository is designed to take you from a absolute beginner to an advanced Dart developer. 

Below you will find a complete index of all **26 training modules** available in this workspace. Each module is fully documented with notes in its header comments, contains clean executable syntax examples inside `main()`, and concludes with **practice tasks** for you to solve.

---

## 📚 Curriculum Table of Contents

### 1. Variables & Basic Control Flow

| Module | Core Concepts Covered | File Reference |
| :--- | :--- | :--- |
| **01. Variables** | Explicit typing, type inference (`var`), dynamic types, compile-time constants (`const` vs `final`), and null-safety declarations. | [01. variables.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/01.%20variables.dart) |
| **02. Data Types** | Numbers (`int`, `double`, `num`), Strings & interpolation, Booleans, basic collections representation, Runes (Unicode/emojis). | [02. data_types.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/02.%20data_types.dart) |
| **03. Operators** | Arithmetic, Relational/Comparison, Type testing (`is`, `is!`), Assignments (`??=`), Logicals, Ternary operator, and Cascade syntax (`..`). | [03. operators.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/03.%20operators.dart) |
| **04. Conditions** | Control flow: `if`, `else if`, `else`, traditional `switch-case`, modern Dart 3 **Switch Expressions**, and runtime `assert` validations. | [04. conditions.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/04.%20conditions.dart) |
| **05. Loops** | Standard `for` loop, `for-in` collection traversal, `while`, `do-while` loops, breaking/continuing statements, and `.forEach()` iteration. | [05. loops.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/05.%20loops.dart) |

---

### 2. Functional & Object-Oriented Programming (OOP)

| Module | Core Concepts Covered | File Reference |
| :--- | :--- | :--- |
| **06. Functions** | Function declarations, parameter configurations (positional, optional positional `[]`, named `{}` with default values and `required`), arrow syntax (`=>`), anonymous functions/lambdas, lexical scoping. | [06. Functions.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/06.%20Functions.dart) |
| **07. Classes** | Blueprint structure, member variables (properties), methods, library-private encapsulation (`_`), custom getters and setters (`get`, `set`). | [07. classes.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/07.%20classes.dart) |
| **08. Objects** | Object instantiations, reference vs value copying, reference checking (`identical()`), overriding `toString()`, custom logical equality overrides (`==` and `hashCode`). | [08. objects.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/08.%20objects.dart) |
| **09. Constructors** | Generative, named, redirecting constructors, initializer lists, `const` constructors (compile-time performance), and `factory` constructors (Singletons/Cache lookup). | [09. constructors.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/09.%20constructors.dart) |
| **10. Inheritance** | Class hierarchy (`extends`), method overrides (`@override`), parent access (`super`), parent constructor invocation, and modern super-parameters. | [10. Inheritance.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/10.%20Inheritance.dart) |
| **11. Polymorphism** | Runtime polymorphism, abstract classes, abstract methods (blueprints), and implicit interfaces (`implements`). | [11. Polymorphism.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/11.%20Polymorphism.dart) |
| **12. Mixins** | Multiple behavior composition without inheritance (`mixin`, `with` keywords), and restricted mixins (`on` constraint). | [12. Mixins.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/12.%20Mixins.dart) |
| **13. Extensions** | Extension methods (`extension Name on Type`), adding utility getters and methods to Dart SDK or third-party types without subclassing. | [13. Extensions.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/13.%20Extensions.dart) |

---

### 3. Collections, Null Safety & Generics

| Module | Core Concepts Covered | File Reference |
| :--- | :--- | :--- |
| **14. Null Safety** | Sound Null Safety, nullable variables (`?`), assertion operator (`!`), null-aware access (`?.`), null-coalescing (`??`), `late` initialization, and compiler type promotion. | [14. Null Safety.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/14.%20Null%20Safety.dart) |
| **15. Collections** | Deep dive: Lists (`map()`, `where()`, `reduce()`), Sets (uniqueness, union, intersection), Maps, spread operators (`...`, `...?`), and collection-if / collection-for. | [15. collections.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/15.%20collections.dart) |
| **16. Generics** | Type-safe abstractions, Generic classes (`Class<T>`), Generic methods, and Type constraints (`T extends num`). | [16. Generics.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/16.%20Generics.dart) |

---

### 4. Asynchronous Coding & Error Handling

| Module | Core Concepts Covered | File Reference |
| :--- | :--- | :--- |
| **17. Async Concepts** | Single-threaded engine, Dart Event Loop model, Microtask Queue vs Event Queue processing priority. | [17. Async.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/17.%20Async.dart) |
| **18. Futures** | Promises of value/error (`Future<T>`), handler chains (`then()`, `catchError()`, `whenComplete()`), synchronous-looking `async` / `await` syntax, error capturing (`try-catch`), and concurrent operations (`Future.wait`). | [18. Future.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/18.%20Future.dart) |
| **19. Streams** | Asynchronous sequences of multiple events, Single-subscription streams vs Broadcast streams, stream generators (`async*` & `yield`), consuming via `await for` or `.listen()`, stream transformers. | [19. Streams.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/19.%20Streams.dart) |
| **20. Exception Handling** | Core exceptions vs errors, `try-on-catch-finally` flow, throwing runtime objects, re-throwing exceptions, and writing custom Exception classes. | [20. Exception Handling.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/20.%20Exception%20Handling.dart) |

---

### 5. Advanced & Modern Features (Dart 3.0+)

| Module | Core Concepts Covered | File Reference |
| :--- | :--- | :--- |
| **21. Enums** | Standard enumerations, **Enhanced Enums** (constructors, fields, getters, methods), and iteration APIs. | [21. Enums.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/21.%20Enums.dart) |
| **22. Records** | Lightweight, anonymous, structural types (tuples), positional/named record properties, and multiple return parameters from functions. | [22. Records.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/22.%20Records.dart) |
| **23. Patterns** | Match types, list, map, and object destructuring, relational/logical patterns in switch matching. | [23. Patterns.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/23.%20Patterns.dart) |
| **24. Class Modifiers** | Advanced subtyping controls: `sealed` (algebraic sum types with compile-time exhaustiveness checks), `base` (forces inheritance), `interface` (forces implementations), `final` (prevents external subclassing/implementing), and `mixin class`. | [24. Class Modifiers.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/24.%20Class%20Modifiers.dart) |
| **25. Typedefs & Metadata** | Generic type aliases (for complex collections and functions), system annotations (`@override`, `@deprecated`), and custom annotations. | [25. Typedefs and Metadata.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/25.%20Typedefs%20and%20Metadata.dart) |
| **26. Libraries & Imports** | Imports, namespace alias prefixing (`as`), filtering symbols (`show`, `hide`), proxy files (`export`), and parts (`part`, `part of`). | [26. Libraries and Imports.dart](file:///c:/Users/bayya/Desktop/Flutter%20MasterClass/0.%20Dart%20fundamentals/26.%20Libraries%20and%20Imports.dart) |

---

## 🛠️ How to Practice
1. **Open the Module File**: Double-click on any `.dart` file link in the curriculum tables above to open the file.
2. **Read the Tutorials**: Read through the header block notes inside the file comment blocks.
3. **Run the Code**: Execute the file in your terminal to see the outputs of the concepts in action:
   ```bash
   dart "02. data_types.dart"
   ```
4. **Complete the Practice Tasks**: Write your code under the `// TODO: Implement the Practice Exercises...` section in the file. Re-run the file to check your solutions.

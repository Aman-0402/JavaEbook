const questions = [
    {
      question: "Which of these is a valid keyword in Java?",
      options: ["define", "function", "class", "var"],
      answer: "class"
    },
    {
      question: "Which loop executes at least once, even if the condition is false?",
      options: ["for", "while", "do-while", "foreach"],
      answer: "do-while"
    },
    {
        question: "What is the correct way to declare a string variable in Java?",
        options: [
          "String name = Aman;","string name = \"Aman\";","String name = \"Aman\";","Text name = \"Aman\";" ],
        answer: "String name = \"Aman\";"
      },
    {
      question: "Which of these is not a Java primitive type?",
      options: ["int", "String", "boolean", "double"],
      answer: "String"
    },
    {
      question: "What will be the output of `System.out.println(10 / 3);`?",
      options: ["3.33", "3", "3.0", "Error"],
      answer: "3"
    },
    {
      question: "Which of the following is not a logical operator?",
      options: ["&&", "||", "!", "&"],
      answer: "&"
    },
    {
      question: "What does the `++` operator do?",
      options: ["Multiplies by 2", "Adds 2", "Increases value by 1", "Decreases value by 1"],
      answer: "Increases value by 1"
    },
    {
      question: "Which operator is used to find remainder in division?",
      options: ["/", "%", "\\", "//"],
      answer: "%"
    },
    {
      question: "If `a = 4` and `b = 5`, what is the result of `a & b`?",
      options: ["0", "1", "4", "5"],
      answer: "4"
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: ["start()", "run()", "main()", "init()"],
      answer: "main()"
    },
    {
      question: "What is the size of a char data type in Java?",
      options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      answer: "2 bytes"
    },
    {
      question: "Which of the following is a valid variable declaration?",
      options: ["int 1number;", "float $price;", "boolean isAvailable;", "double value#;"],
      answer: "boolean isAvailable;"
    },
    {
      question: "Which keyword is used to declare a constant?",
      options: ["const", "constant", "final", "static"],
      answer: "final"
    },
    {
      question: "What type of comment is /* This is a comment */?",
      options: ["Single-line comment", "Multi-line comment", "Documentation comment", "Inline comment"],
      answer: "Multi-line comment"
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["implement", "inherits", "extends", "instanceof"],
      answer: "extends"
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "0"],
      answer: "false"
    },
    {
      question: "Which of the following is not an OOP concept in Java?",
      options: ["Encapsulation", "Polymorphism", "Abstraction", "Compilation"],
      answer: "Compilation"
    },
    {
      question: "Which exception is thrown when dividing by zero in Java (integers)?",
      options: ["ArithmeticException", "NullPointerException", "NumberFormatException", "IOException"],
      answer: "ArithmeticException"
    },
    {
      question: "Which access modifier allows visibility within the same package only?",
      options: ["public", "private", "protected", "default"],
      answer: "default"
    },
    {
      question: "Which data structure uses FIFO (First In First Out)?",
      options: ["Stack", "Queue", "ArrayList", "TreeMap"],
      answer: "Queue"
    },
    {
      question: "What is the result of: `System.out.println(5 + 2 * 3);`?",
      options: ["21", "11", "17", "15"],
      answer: "11"
    },
    {
      question: "Which method is used to compare two strings in Java?",
      options: ["==", "equals()", "compare()", "match()"],
      answer: "equals()"
    },
    {
      question: "Which loop is best when the number of iterations is known?",
      options: ["while", "do-while", "for", "foreach"],
      answer: "for"
    },
    {
      question: "Which of these can be used to create an object in Java?",
      options: ["class", "new", "this", "object"],
      answer: "new"
    },
    {
      question: "Which operator is used for logical AND?",
      options: ["&", "&&", "and", "||"],
      answer: "&&"
    },
    {
      question: "What is the result of 10 % 3?",
      options: ["0", "1", "3", "10"],
      answer: "1"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["==", ":=", "=", "=>"],
      answer: "="
    },
    {
      question: "What does the expression (5 > 3) ? \"Yes\" : \"No\" return?",
      options: ["Yes", "No", "Error", "null"],
      answer: "Yes"
    },
    {
      question: "Which of the following is a bitwise operator?",
      options: ["&&", "||", "&", "!"],
      answer: "&"
    },
    {
      question: "Which of these is a ternary operator in Java?",
      options: ["?:", "??", "if-else", "::"],
      answer: "?:"
    },
    {
      question: "What will be the result of the expression: `true && false || true`?",
      options: ["true", "false", "Syntax error", "null"],
      answer: "true"
    },
    {
      question: "Which of these will return `false`?",
      options: ["5 > 3", "4 == 4", "10 <= 2", "true || false"],
      answer: "10 <= 2"
    },
    {
      question: "What is the output of `System.out.println(3 + 4 * 2);`?",
      options: ["14", "11", "10", "16"],
      answer: "11"
    },
    {
      question: "Which is the correct operator for checking equality?",
      options: ["=", "==", ":=", "equals"],
      answer: "=="
    },
    {
      question: "Which statement is used to make decisions in Java?",
      options: ["loop", "switch", "if", "case"],
      answer: "if"
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for", "while", "do-while", "if-else"],
      answer: "do-while"
    },
    {
      question: "What is the default case in a switch used for?",
      options: ["To end the switch", "Executes if no case matches", "To break the loop", "None"],
      answer: "Executes if no case matches"
    },
    {
      question: "What does the 'continue' statement do?",
      options: ["Ends the program", "Skips current iteration", "Restarts loop", "Exits the method"],
      answer: "Skips current iteration"
    },
    {
      question: "Which of these is not a loop control structure?",
      options: ["for", "while", "continue", "case"],
      answer: "case"
    },
    {
      question: "What is the purpose of the 'break' statement in a loop?",
      options: ["Skips to next iteration", "Ends loop immediately", "Restarts loop", "Ignores error"],
      answer: "Ends loop immediately"
    },
    {
      question: "Which loop is ideal for iterating over arrays or collections?",
      options: ["for", "while", "do-while", "enhanced for (foreach)"],
      answer: "enhanced for (foreach)"
    },
    {
      question: "Which of these keywords is used to exit a switch block?",
      options: ["stop", "return", "exit", "break"],
      answer: "break"
    },
    {
      question: "How many times will the following loop execute?\n`for(int i = 0; i < 5; i++) {}`",
      options: ["4", "5", "6", "0"],
      answer: "5"
    },
    {
      question: "Which of the following can replace an if-else structure for multiple choices?",
      options: ["for", "do-while", "switch", "continue"],
      answer: "switch"
    },
    {
      question: "Which statement is used to make decisions in Java?",
      options: ["loop", "switch", "if", "case"],
      answer: "if"
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for", "while", "do-while", "if-else"],
      answer: "do-while"
    },
    {
      question: "What is the default case in a switch used for?",
      options: ["To end the switch", "Executes if no case matches", "To break the loop", "None"],
      answer: "Executes if no case matches"
    },
    {
      question: "What does the 'continue' statement do?",
      options: ["Ends the program", "Skips current iteration", "Restarts loop", "Exits the method"],
      answer: "Skips current iteration"
    },
    {
      question: "Which of these is not a loop control structure?",
      options: ["for", "while", "continue", "case"],
      answer: "case"
    },
    {
      question: "Which loop is best when the number of iterations is known?",
      options: ["while", "do-while", "for", "foreach"],
      answer: "for"
    },
    {
      question: "Which keyword ends the execution of a loop?",
      options: ["return", "stop", "break", "exit"],
      answer: "break"
    },
    {
      question: "Which keyword is used to handle multiple decision branches?",
      options: ["if", "switch", "break", "case"],
      answer: "switch"
    },
    {
      question: "What happens if break is not used in a switch statement?",
      options: ["Only default runs", "Error occurs", "All subsequent cases execute", "It exits the switch"],
      answer: "All subsequent cases execute"
    },
    {
      question: "What does this loop print?\n`for(int i = 1; i <= 3; i++) { System.out.print(i); }`",
      options: ["123", "0123", "321", "111"],
      answer: "123"
    },
    {
      question: "Which statement is used to exit from a method?",
      options: ["exit", "stop", "break", "return"],
      answer: "return"
    },
    {
      question: "Which control structure is used for checking multiple conditions?",
      options: ["switch", "if-else if", "continue", "goto"],
      answer: "if-else if"
    },
    {
      question: "Which of these is not a valid loop in Java?",
      options: ["for", "while", "repeat-until", "do-while"],
      answer: "repeat-until"
    },
    {
      question: "Which statement is used to jump to the next iteration in a loop?",
      options: ["break", "continue", "return", "goto"],
      answer: "continue"
    },
    {
      question: "What is the output of:\n`int i = 0; while(i < 2) { i++; System.out.print(i); }`?",
      options: ["0", "01", "12", "123"],
      answer: "12"
    },
    {
      question: "What is the index of the first element in an array?",
      options: ["-1", "0", "1", "None"],
      answer: "0"
    },
    {
      question: "Which of the following is mutable?",
      options: ["String", "StringBuilder", "final String", "char"],
      answer: "StringBuilder"
    },
    {
      question: "Which method is used to find the length of a string?",
      options: ["size()", "count()", "length", "getLength()"],
      answer: "length"
    },
    {
      question: "Which loop is best for traversing an array?",
      options: ["while", "do-while", "enhanced for-loop", "if-else"],
      answer: "enhanced for-loop"
    },
    {
      question: "Which class is thread-safe?",
      options: ["StringBuilder", "StringBuffer", "String", "None"],
      answer: "StringBuffer"
    },
    {
      question: "Which method is used to compare two strings for equality?",
      options: ["==", "compare()", "equals()", "match()"],
      answer: "equals()"
    },
    {
      question: "What is the output of: `\"Java\".charAt(1)`?",
      options: ["J", "a", "v", "error"],
      answer: "a"
    },
    {
      question: "What is returned by `new int[5].length`?",
      options: ["4", "5", "0", "Undefined"],
      answer: "5"
    },
    {
      question: "Which of these will create an array of 10 integers?",
      options: [
        "int arr = new int(10);",
        "int arr[] = new int[10];",
        "int arr[] = int[10];",
        "int arr[10];"
      ],
      answer: "int arr[] = new int[10];"
    },
    {
      question: "Which method is used to concatenate two strings?",
      options: ["append()", "concat()", "+", "combine()"],
      answer: "concat()"
    },
    {
      question: "What does `String s = null; s.length();` result in?",
      options: ["0", "null", "Error", "NullPointerException"],
      answer: "NullPointerException"
    },
    {
      question: "What is the output of:\n`String s = \"abc\";\nSystem.out.println(s.toUpperCase());`?",
      options: ["abc", "ABC", "Abc", "Syntax Error"],
      answer: "ABC"
    },
    {
      question: "Which of the following methods is used to convert a string to an integer?",
      options: ["Integer.convert()", "Integer.toInt()", "Integer.parseInt()", "parse()"],
      answer: "Integer.parseInt()"
    },
    {
      question: "How do you check the size of an array `arr`?",
      options: ["arr.size()", "arr.length", "arr.length()", "length(arr)"],
      answer: "arr.length"
    },
    {
      question: "What does the `trim()` method do in Java strings?",
      options: ["Removes all characters", "Removes whitespace from ends", "Deletes the string", "Cuts it in half"],
      answer: "Removes whitespace from ends"
    },
    {
      question: "What is an object?",
      options: ["A method", "An instance of a class", "A constructor", "A keyword"],
      answer: "An instance of a class"
    },
    {
      question: "Which keyword refers to the current object?",
      options: ["self", "this", "current", "obj"],
      answer: "this"
    },
    {
      question: "Which modifier provides the most restricted access?",
      options: ["public", "protected", "private", "default"],
      answer: "private"
    },
    {
      question: "What does method overloading require?",
      options: [
        "Same return types",
        "Different method names",
        "Same name, different parameters",
        "No parameters"
      ],
      answer: "Same name, different parameters"
    },
    {
      question: "Encapsulation is achieved using:",
      options: [
        "Constructors",
        "Inheritance",
        "Getters and setters",
        "Static methods"
      ],
      answer: "Getters and setters"
    },
    {
      question: "What is inheritance in Java?",
      options: [
        "Deriving new classes from existing ones",
        "Hiding class details",
        "Multiple methods with same name",
        "Memory allocation technique"
      ],
      answer: "Deriving new classes from existing ones"
    },
    {
      question: "Which keyword is used to inherit a class?",
      options: ["inherits", "extends", "super", "derive"],
      answer: "extends"
    },
    {
      question: "Which concept allows the same method to behave differently?",
      options: ["Encapsulation", "Polymorphism", "Abstraction", "Overriding"],
      answer: "Polymorphism"
    },
    {
      question: "Which keyword is used to call the superclass constructor?",
      options: ["this", "parent", "base", "super"],
      answer: "super"
    },
    {
      question: "Which of the following cannot be overridden?",
      options: ["Static methods", "Instance methods", "Constructors", "Both a and c"],
      answer: "Both a and c"
    },
    {
      question: "What is the default access modifier in Java?",
      options: ["public", "private", "default", "protected"],
      answer: "default"
    },
    {
      question: "What is the use of a constructor?",
      options: [
        "To destroy an object",
        "To initialize objects",
        "To write logic",
        "To inherit class"
      ],
      answer: "To initialize objects"
    },
    {
      question: "Can a class implement multiple interfaces?",
      options: ["Yes", "No", "Only one", "Only abstract class"],
      answer: "Yes"
    },
    {
      question: "Which of the following is true about abstract classes?",
      options: [
        "Cannot have any methods",
        "Can’t have constructors",
        "Can have abstract and non-abstract methods",
        "Can’t be inherited"
      ],
      answer: "Can have abstract and non-abstract methods"
    },
    {
      question: "Which of these is not related to OOP?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
      answer: "Compilation"
    },
    {
      question: "Which keyword is used to inherit a class?",
      options: ["this", "super", "extends", "inherit"],
      answer: "extends"
    },
    {
      question: "Which keyword refers to the parent class?",
      options: ["parent", "this", "super", "base"],
      answer: "super"
    },
    {
      question: "What is method overriding?",
      options: [
        "Same method in different class with same signature",
        "Same method with different return types",
        "Same method name with different parameters",
        "None"
      ],
      answer: "Same method in different class with same signature"
    },
    {
      question: "Which type of polymorphism is resolved at runtime?",
      options: [
        "Method overloading",
        "Method overriding",
        "Constructor overloading",
        "None"
      ],
      answer: "Method overriding"
    },
    {
      question: "What is the output of the following code?\nAnimal a = new Dog();\na.sound();",
      options: ["Animal sound", "Bark", "Error", "None of the above"],
      answer: "Bark"
    },
    {
      question: "What is method overloading?",
      options: [
        "Same method name with different parameters",
        "Same method in superclass and subclass",
        "Changing method return type only",
        "Two classes sharing the same method"
      ],
      answer: "Same method name with different parameters"
    },
    {
      question: "What type of inheritance does Java support?",
      options: [
        "Single",
        "Multiple",
        "Multilevel",
        "Single and Multilevel"
      ],
      answer: "Single and Multilevel"
    },
    {
      question: "Which keyword is used to prevent method overriding?",
      options: ["private", "static", "final", "protected"],
      answer: "final"
    },
    {
      question: "Can a subclass constructor call a superclass constructor?",
      options: ["Yes, using super()", "Yes, using this()", "No", "Only if it's static"],
      answer: "Yes, using super()"
    },
    {
      question: "Which concept allows objects of different types to be treated as objects of a common super type?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      answer: "Polymorphism"
    },
    {
      question: "Which of these is NOT allowed in Java inheritance?",
      options: [
        "A class extending another class",
        "A class implementing multiple interfaces",
        "Multiple class inheritance",
        "Multilevel inheritance"
      ],
      answer: "Multiple class inheritance"
    },
    {
      question: "What happens when a method is declared final?",
      options: [
        "It can be overridden",
        "It cannot be inherited",
        "It cannot be overridden",
        "It must be overridden"
      ],
      answer: "It cannot be overridden"
    },
    {
      question: "Which is an example of upcasting?",
      options: [
        "Dog d = new Animal();",
        "Animal a = new Dog();",
        "Dog a = new Dog();",
        "Dog a = new Animal();"
      ],
      answer: "Animal a = new Dog();"
    },
    {
      question: "Which type of polymorphism is also known as compile-time polymorphism?",
      options: [
        "Method overloading",
        "Method overriding",
        "Dynamic binding",
        "Late binding"
      ],
      answer: "Method overloading"
    },
    {
      question: "Which feature lets the subclass have its own version of a method?",
      options: [
        "Encapsulation",
        "Method overriding",
        "Method hiding",
        "Abstraction"
      ],
      answer: "Method overriding"
    },
    {
      question: "Which of these is true for abstract classes?",
      options: [
        "Can be instantiated",
        "Cannot have constructors",
        "Cannot contain non-abstract methods",
        "Cannot be instantiated"
      ],
      answer: "Cannot be instantiated"
    },
    {
      question: "Which keyword is used to create an interface?",
      options: ["abstract", "interface", "class", "implements"],
      answer: "interface"
    },
    {
      question: "What is the default access modifier of interface methods?",
      options: ["private", "protected", "public", "no modifier"],
      answer: "public"
    },
    {
      question: "Which version of Java introduced default methods in interfaces?",
      options: ["Java 6", "Java 7", "Java 8", "Java 9"],
      answer: "Java 8"
    },
    {
      question: "Which annotation is used to define a functional interface?",
      options: ["@Interface", "@Override", "@Functional", "@FunctionalInterface"],
      answer: "@FunctionalInterface"
    },
    {
      question: "Which of the following can an abstract class contain?",
      options: [
        "Only abstract methods",
        "Only static methods",
        "Constructors and non-abstract methods",
        "Only final methods"
      ],
      answer: "Constructors and non-abstract methods"
    },
    {
      question: "Which of the following can interfaces contain by default?",
      options: [
        "Constructors",
        "Static and default methods",
        "Instance variables",
        "Private constructors"
      ],
      answer: "Static and default methods"
    },
    {
      question: "Which keyword is used by a class to inherit an interface?",
      options: ["extends", "implements", "inherits", "interface"],
      answer: "implements"
    },
    {
      question: "Can an interface extend another interface?",
      options: ["Yes", "No", "Only one", "Only abstract interfaces"],
      answer: "Yes"
    },
    {
      question: "Can an interface have private methods in Java 9+?",
      options: ["Yes", "No", "Only public", "Only static"],
      answer: "Yes"
    },
    {
      question: "Which of these is true about a functional interface?",
      options: [
        "Must contain exactly one abstract method",
        "Can’t be used with lambda expressions",
        "Must contain only static methods",
        "Should be abstract"
      ],
      answer: "Must contain exactly one abstract method"
    },
    {
      question: "Which of these is false about interfaces?",
      options: [
        "Can contain default methods",
        "Can contain static methods",
        "Can be instantiated directly",
        "Can extend multiple interfaces"
      ],
      answer: "Can be instantiated directly"
    },
    {
      question: "What happens if a class does not implement all methods of an interface?",
      options: [
        "It will compile fine",
        "It must be declared abstract",
        "It will throw runtime exception",
        "It can still run"
      ],
      answer: "It must be declared abstract"
    },
    {
      question: "Can an abstract class implement an interface without defining all methods?",
      options: ["Yes", "No", "Only in Java 8", "Only in Java 11"],
      answer: "Yes"
    },
    {
      question: "What is the key difference between an abstract class and an interface?",
      options: [
        "Abstract classes cannot have constructors",
        "Interfaces can have private fields",
        "Abstract classes can have constructors and state",
        "Interfaces support inheritance"
      ],
      answer: "Abstract classes can have constructors and state"
    },
    {
      question: "Which keyword is used to define a package in Java?",
      options: ["import", "package", "class", "interface"],
      answer: "package"
    },
    {
      question: "Which Java package is automatically imported?",
      options: ["java.util", "java.io", "java.lang", "java.sql"],
      answer: "java.lang"
    },
    {
      question: "Which access specifier restricts access only to the same class?",
      options: ["private", "protected", "public", "default"],
      answer: "private"
    },
    {
      question: "Which access level allows access within the same package?",
      options: ["protected", "default", "private", "final"],
      answer: "default"
    },
    {
      question: "What does import java.util.*; do?",
      options: [
        "Imports one class",
        "Imports all classes from java.util",
        "Imports nothing",
        "Causes an error"
      ],
      answer: "Imports all classes from java.util"
    },
    {
      question: "Which statement is true about a package?",
      options: [
        "It cannot contain classes",
        "It groups related classes and interfaces",
        "It can only be imported once",
        "It must always be public"
      ],
      answer: "It groups related classes and interfaces"
    },
    {
      question: "How do you use a class without importing the package?",
      options: [
        "Using import static",
        "By its alias",
        "Using its fully qualified name",
        "It's not possible"
      ],
      answer: "Using its fully qualified name"
    },
    {
      question: "What is the purpose of static import?",
      options: [
        "To import static blocks",
        "To access static members without class name",
        "To import final methods",
        "To access private fields"
      ],
      answer: "To access static members without class name"
    },
    {
      question: "Which access modifier allows visibility in other packages via inheritance?",
      options: ["private", "default", "protected", "public"],
      answer: "protected"
    },
    {
      question: "Which access level provides the least visibility?",
      options: ["public", "private", "protected", "default"],
      answer: "private"
    },
    {
      question: "Can a class be declared as private?",
      options: ["Yes", "No", "Only in interfaces", "Only if it's abstract"],
      answer: "No"
    },
    {
      question: "Which keyword is used to include a package in your class?",
      options: ["include", "use", "import", "export"],
      answer: "import"
    },
    {
      question: "Which of the following is a valid Java package name?",
      options: ["123com", "com.example", "com-example", "com example"],
      answer: "com.example"
    },
    {
      question: "If no access modifier is specified, what is the default?",
      options: ["public", "private", "protected", "package-private"],
      answer: "package-private"
    },
    {
      question: "Can a Java file contain multiple classes in different packages?",
      options: ["Yes", "No", "Only if abstract", "Only in Java 11+"],
      answer: "No"
    },
    {
      question: "Which block is always executed?",
      options: ["try", "catch", "finally", "throw"],
      answer: "finally"
    },
    {
      question: "Which of these is a checked exception?",
      options: [
        "ArithmeticException",
        "NullPointerException",
        "IOException",
        "ArrayIndexOutOfBoundsException"
      ],
      answer: "IOException"
    },
    {
      question: "Which keyword is used to declare an exception in a method signature?",
      options: ["throw", "try", "catch", "throws"],
      answer: "throws"
    },
    {
      question: "What happens if an exception is not handled?",
      options: [
        "Program continues",
        "JVM crashes",
        "Program terminates abruptly",
        "Nothing happens"
      ],
      answer: "Program terminates abruptly"
    },
    {
      question: "Which class is used to create custom exceptions?",
      options: ["Throwable", "RuntimeException", "Error", "Exception"],
      answer: "Exception"
    },
    {
      question: "Which keyword is used to throw an exception explicitly?",
      options: ["throw", "throws", "try", "final"],
      answer: "throw"
    },
    {
      question: "Which type of exceptions are not checked at compile time?",
      options: ["Checked exceptions", "IOExceptions", "Runtime exceptions", "SQLException"],
      answer: "Runtime exceptions"
    },
    {
      question: "Which of these is a superclass of all exceptions?",
      options: ["Throwable", "Exception", "RuntimeException", "Object"],
      answer: "Throwable"
    },
    {
      question: "What is the use of catch block?",
      options: [
        "To throw exceptions",
        "To define custom exceptions",
        "To handle exceptions",
        "To run code after try"
      ],
      answer: "To handle exceptions"
    },
    {
      question: "What will the JVM do if no catch block is found for an exception?",
      options: [
        "Ignore the exception",
        "Automatically create a catch block",
        "Terminate the program",
        "Convert to RuntimeException"
      ],
      answer: "Terminate the program"
    },
    {
      question: "What is the output of `System.out.println(10 / 0);`?",
      options: [
        "0",
        "Compile-time error",
        "ArithmeticException",
        "NullPointerException"
      ],
      answer: "ArithmeticException"
    },
    {
      question: "Can you catch multiple exceptions in a single catch block?",
      options: ["Yes", "No", "Only for checked exceptions", "Only for runtime exceptions"],
      answer: "Yes"
    },
    {
      question: "Which keyword is used to define a block that may throw exceptions?",
      options: ["throws", "try", "throw", "catch"],
      answer: "try"
    },
    {
      question: "Which class represents unchecked exceptions?",
      options: ["IOException", "RuntimeException", "SQLException", "FileNotFoundException"],
      answer: "RuntimeException"
    },
    {
      question: "What is the purpose of `finally` block?",
      options: [
        "To declare an exception",
        "To rethrow an exception",
        "To execute code regardless of exception",
        "To override catch block"
      ],
      answer: "To execute code regardless of exception"
    },
    {
      question: "Which class is used for taking input from user in Java?",
      options: ["Console", "Scanner", "InputReader", "Reader"],
      answer: "Scanner"
    },
    {
      question: "Which stream reads data in binary form?",
      options: ["FileReader", "Scanner", "InputStream", "BufferedReader"],
      answer: "InputStream"
    },
    {
      question: "Which method is used to read a line from BufferedReader?",
      options: ["read()", "nextLine()", "readLine()", "getLine()"],
      answer: "readLine()"
    },
    {
      question: "Which package contains Scanner class?",
      options: ["java.io", "java.util", "java.lang", "java.file"],
      answer: "java.util"
    },
    {
      question: "What will FileWriter do if the file already exists?",
      options: ["Throws error", "Appends to file", "Deletes file", "Overwrites file"],
      answer: "Overwrites file"
    },
    {
      question: "Which class is used to write characters to a file?",
      options: ["FileOutputStream", "FileWriter", "BufferedReader", "Scanner"],
      answer: "FileWriter"
    },
    {
      question: "Which of these is used for buffered reading?",
      options: ["FileReader", "BufferedReader", "FileWriter", "InputStream"],
      answer: "BufferedReader"
    },
    {
      question: "Which of these is used for buffered writing?",
      options: ["BufferedWriter", "BufferedReader", "PrintWriter", "FileReader"],
      answer: "BufferedWriter"
    },
    {
      question: "Which class is used for reading primitive data types?",
      options: ["Scanner", "DataInputStream", "BufferedReader", "PrintStream"],
      answer: "DataInputStream"
    },
    {
      question: "What does the method nextInt() of Scanner class do?",
      options: [
        "Reads an integer token from input",
        "Reads the next line",
        "Reads all input",
        "Throws IOException"
      ],
      answer: "Reads an integer token from input"
    },
    {
      question: "Which class is used to read and write objects?",
      options: ["ObjectStream", "ObjectReader", "ObjectInputStream", "ObjectWriter"],
      answer: "ObjectInputStream"
    },
    {
      question: "Which stream is suitable for reading text files?",
      options: ["InputStream", "FileReader", "OutputStream", "FileOutputStream"],
      answer: "FileReader"
    },
    {
      question: "Which of the following is true about FileOutputStream?",
      options: [
        "Writes data as characters",
        "Writes data as bytes",
        "Reads data as bytes",
        "Reads data as characters"
      ],
      answer: "Writes data as bytes"
    },
    {
      question: "Which method of Scanner class is used to check if there is another token?",
      options: ["hasNext()", "next()", "checkNext()", "isNext()"],
      answer: "hasNext()"
    },
    {
      question: "How to close a stream or reader to free resources?",
      options: ["stop()", "finish()", "close()", "terminate()"],
      answer: "close()"
    },
    {
      question: "Which class provides methods for formatted output?",
      options: ["PrintStream", "BufferedReader", "Scanner", "FileWriter"],
      answer: "PrintStream"
    },
    {
      question: "Which collection allows duplicate elements?",
      options: ["Set", "Map", "List", "TreeSet"],
      answer: "List"
    },
    {
      question: "Which class maintains insertion order?",
      options: ["HashSet", "TreeSet", "ArrayList", "HashMap"],
      answer: "ArrayList"
    },
    {
      question: "What is used to sort elements of a TreeMap?",
      options: ["Values", "Keys", "HashCode", "None"],
      answer: "Keys"
    },
    {
      question: "Which interface is used for default sorting?",
      options: ["Comparator", "Iterator", "Comparable", "Collection"],
      answer: "Comparable"
    },
    {
      question: "Which method is used by Comparator?",
      options: ["compareTo()", "compare()", "sort()", "equals()"],
      answer: "compare()"
    },
    {
      question: "Which collection does not allow duplicate elements?",
      options: ["List", "Set", "Map", "Queue"],
      answer: "Set"
    },
    {
      question: "Which collection is synchronized and thread-safe?",
      options: ["ArrayList", "Vector", "LinkedList", "HashSet"],
      answer: "Vector"
    },
    {
      question: "Which interface allows iteration over a collection?",
      options: ["Iterable", "Iterator", "Collection", "Enumeration"],
      answer: "Iterator"
    },
    {
      question: "Which class implements a resizable-array?",
      options: ["LinkedList", "HashSet", "ArrayList", "TreeSet"],
      answer: "ArrayList"
    },
    {
      question: "Which interface does TreeSet implement for natural ordering?",
      options: ["List", "Set", "SortedSet", "Map"],
      answer: "SortedSet"
    },
    {
      question: "Which method adds an element to a List at a specific position?",
      options: ["add(index, element)", "insert()", "put()", "set()"],
      answer: "add(index, element)"
    },
    {
      question: "Which Map implementation allows one null key and multiple null values?",
      options: ["Hashtable", "HashMap", "TreeMap", "LinkedHashMap"],
      answer: "HashMap"
    },
    {
      question: "Which Map implementation sorts keys according to their natural ordering?",
      options: ["HashMap", "Hashtable", "TreeMap", "LinkedHashMap"],
      answer: "TreeMap"
    },
    {
      question: "Which method of List replaces an element at a given index?",
      options: ["add()", "set()", "replace()", "update()"],
      answer: "set()"
    },
    {
      question: "Which interface must a class implement to allow sorting using Collections.sort()?",
      options: ["Comparable", "Comparator", "Iterable", "Serializable"],
      answer: "Comparable"
    },
    {
      question: "What does the Collections.sort(List, Comparator) method do?",
      options: [
        "Sorts the list using natural ordering",
        "Sorts the list using the provided Comparator",
        "Sorts the list in reverse order",
        "Throws an error"
      ],
      answer: "Sorts the list using the provided Comparator"
    },
    {
      question: "Which method removes the first occurrence of a specified element from a List?",
      options: ["remove()", "delete()", "pop()", "discard()"],
      answer: "remove()"
    },
    {
      question: "Which interface extends Collection and defines a group of elements?",
      options: ["List", "Set", "Queue", "Map"],
      answer: "Collection"
    },
    {
      question: "Which method is used to get the size of a collection?",
      options: ["size()", "length()", "count()", "getSize()"],
      answer: "size()"
    },
    {
      question: "Which inner class can access only static members of outer class?",
      options: [
        "Member Inner Class",
        "Static Nested Class",
        "Local Inner Class",
        "Anonymous Inner Class"
      ],
      answer: "Static Nested Class"
    },
    {
      question: "Anonymous inner class must be:",
      options: [
        "Named",
        "Static",
        "Defined inside a method",
        "Defined and instantiated simultaneously"
      ],
      answer: "Defined and instantiated simultaneously"
    },
    {
      question: "Which class is defined inside a method?",
      options: [
        "Member Inner",
        "Static Nested",
        "Local Inner",
        "None"
      ],
      answer: "Local Inner"
    },
    {
      question: "Which inner class does not have a constructor?",
      options: [
        "Anonymous Inner",
        "Member Inner",
        "Static Nested",
        "Local Inner"
      ],
      answer: "Anonymous Inner"
    },
    {
      question: "What keyword is used to access a member inner class?",
      options: [
        "static",
        "new",
        "this",
        "final"
      ],
      answer: "new"
    },
    {
      question: "Which inner class can access both static and non-static members of outer class?",
      options: [
        "Static Nested Class",
        "Member Inner Class",
        "Anonymous Inner Class",
        "Local Inner Class"
      ],
      answer: "Member Inner Class"
    },
    {
      question: "What is the scope of a local inner class?",
      options: [
        "Class level",
        "Method level",
        "Package level",
        "Instance level"
      ],
      answer: "Method level"
    },
    {
      question: "How do you instantiate a static nested class?",
      options: [
        "OuterClass.InnerClass obj = new OuterClass.InnerClass();",
        "InnerClass obj = new InnerClass();",
        "OuterClass obj = new OuterClass(); InnerClass inner = obj.new InnerClass();",
        "None of the above"
      ],
      answer: "OuterClass.InnerClass obj = new OuterClass.InnerClass();"
    },
    {
      question: "Can an anonymous inner class have a name?",
      options: [
        "Yes",
        "No"
      ],
      answer: "No"
    },
    {
      question: "Which inner class is useful for implementing event listeners in GUI applications?",
      options: [
        "Static Nested Class",
        "Member Inner Class",
        "Local Inner Class",
        "Anonymous Inner Class"
      ],
      answer: "Anonymous Inner Class"
    },
    {
      question: "Which of these is true about member inner classes?",
      options: [
        "They can be declared static",
        "They cannot access outer class members",
        "They are associated with an instance of the outer class",
        "They must be declared inside a method"
      ],
      answer: "They are associated with an instance of the outer class"
    },
    {
      question: "Can a local inner class access local variables of the enclosing method?",
      options: [
        "Yes, if they are final or effectively final",
        "No, never",
        "Only if declared static",
        "Only if declared public"
      ],
      answer: "Yes, if they are final or effectively final"
    },
    {
      question: "Which inner class can have constructors?",
      options: [
        "Anonymous Inner Class",
        "Member Inner Class",
        "Local Inner Class",
        "Both Member Inner Class and Local Inner Class"
      ],
      answer: "Both Member Inner Class and Local Inner Class"
    },
    {
      question: "Which symbol is used in a lambda expression?",
      options: ["->", "::", "=>", "**"],
      answer: "->"
    },
    {
      question: "Which interface is used to represent a function that returns a boolean?",
      options: ["Supplier", "Consumer", "Predicate", "Function"],
      answer: "Predicate"
    },
    {
      question: "What is the output of System.out::println?",
      options: [
        "It executes the method",
        "It's a method reference",
        "It throws an error",
        "None of the above"
      ],
      answer: "It's a method reference"
    },
    {
      question: "What is the Stream API mainly used for?",
      options: [
        "Performing I/O operations",
        "Storing data",
        "Processing collections",
        "Defining classes"
      ],
      answer: "Processing collections"
    },
    {
      question: "Which package contains predefined functional interfaces?",
      options: ["java.io", "java.lang", "java.util.function", "java.stream"],
      answer: "java.util.function"
    },
    {
      question: "Which functional interface represents a function with no input and a return value?",
      options: ["Consumer", "Supplier", "Predicate", "Function"],
      answer: "Supplier"
    },
    {
      question: "Which functional interface accepts one argument and returns no result?",
      options: ["Consumer", "Supplier", "Predicate", "Function"],
      answer: "Consumer"
    },
    {
      question: "What does the filter() method of Stream do?",
      options: [
        "Transforms elements",
        "Filters elements based on a predicate",
        "Sorts elements",
        "Collects elements"
      ],
      answer: "Filters elements based on a predicate"
    },
    {
      question: "What is the return type of Stream.map()?",
      options: [
        "Stream<R>",
        "void",
        "List",
        "Optional"
      ],
      answer: "Stream<R>"
    },
    {
      question: "Which of the following is a terminal operation in Stream API?",
      options: [
        "map()",
        "filter()",
        "collect()",
        "peek()"
      ],
      answer: "collect()"
    },
    {
      question: "Which functional interface represents a function with one argument and one result?",
      options: [
        "Consumer<T>",
        "Supplier<T>",
        "Predicate<T>",
        "Function<T, R>"
      ],
      answer: "Function<T, R>"
    },
    {
      question: "How do you create a Stream from a Collection?",
      options: [
        "Collection.stream()",
        "Collection.getStream()",
        "Stream.of(Collection)",
        "Stream.create(Collection)"
      ],
      answer: "Collection.stream()"
    },
    {
      question: "What keyword is used to create a lambda expression in Java?",
      options: [
        "lambda",
        "->",
        "::",
        "fun"
      ],
      answer: "->"
    },
    {
      question: "Which method reference refers to a static method?",
      options: [
        "ClassName::staticMethod",
        "object::instanceMethod",
        "ClassName::new",
        "this::method"
      ],
      answer: "ClassName::staticMethod"
    },
    {
      question: "Which method in Stream API is used to convert a Stream back into a Collection?",
      options: [
        "toList()",
        "collect()",
        "reduce()",
        "forEach()"
      ],
      answer: "collect()"
    },
    {
      question: "Which method starts the thread execution?",
      options: ["run()", "execute()", "start()", "begin()"],
      answer: "start()"
    },
    {
      question: "Which interface must be implemented for multithreading?",
      options: ["Serializable", "Runnable", "Comparable", "EventListener"],
      answer: "Runnable"
    },
    {
      question: "Which keyword is used to prevent thread interference?",
      options: ["static", "final", "private", "synchronized"],
      answer: "synchronized"
    },
    {
      question: "What is the purpose of the join() method?",
      options: [
        "To pause the current thread",
        "To end a thread",
        "To wait for another thread to finish",
        "To start a thread"
      ],
      answer: "To wait for another thread to finish"
    },
    {
      question: "Which state does a thread enter after calling sleep()?",
      options: ["Ready", "Waiting", "New", "Dead"],
      answer: "Waiting"
    },
    {
      question: "Which thread state represents a thread that has finished execution?",
      options: ["New", "Runnable", "Terminated", "Blocked"],
      answer: "Terminated"
    },
    {
      question: "What is a daemon thread?",
      options: [
        "A thread that runs in the background",
        "A thread that has highest priority",
        "A thread that waits for user input",
        "A thread that runs only once"
      ],
      answer: "A thread that runs in the background"
    },
    {
      question: "How can you create a thread by extending a class?",
      options: [
        "Implement Runnable",
        "Extend Thread class",
        "Implement Callable",
        "Use ExecutorService"
      ],
      answer: "Extend Thread class"
    },
    {
      question: "What is thread starvation?",
      options: [
        "A thread waiting forever for a resource",
        "A thread that has low priority and never gets CPU time",
        "A thread that terminates unexpectedly",
        "A thread that consumes all CPU"
      ],
      answer: "A thread that has low priority and never gets CPU time"
    },
    {
      question: "Which method is used to pause a thread temporarily?",
      options: ["wait()", "pause()", "sleep()", "halt()"],
      answer: "sleep()"
    },
    {
      question: "Which class can be used to manage a pool of threads?",
      options: [
        "ThreadGroup",
        "ThreadPoolExecutor",
        "RunnablePool",
        "ThreadManager"
      ],
      answer: "ThreadPoolExecutor"
    },
    {
      question: "What does the volatile keyword do?",
      options: [
        "Prevents multiple threads from accessing variable",
        "Ensures visibility of changes to variables across threads",
        "Makes a variable immutable",
        "Declares a variable as final"
      ],
      answer: "Ensures visibility of changes to variables across threads"
    },
    {
      question: "Which method in Runnable interface must be overridden?",
      options: ["run()", "start()", "execute()", "stop()"],
      answer: "run()"
    },
    {
      question: "What is the default priority of a thread?",
      options: ["1", "5", "10", "0"],
      answer: "5"
    },
    {
      question: "Which interface extends Runnable and can return a result?",
      options: ["Callable", "Executor", "Future", "Thread"],
      answer: "Callable"
    },
    {
    question: "Which package contains Swing classes?",
    options: ["java.awt", "java.io", "javax.swing", "java.util"],
    answer: "javax.swing"
  },
  {
    question: "Which method is used to add components to JFrame?",
    options: ["append()", "put()", "add()", "insert()"],
    answer: "add()"
  },
  {
    question: "Which component is used for user input in Swing?",
    options: ["JLabel", "JTextField", "JButton", "JRadioButton"],
    answer: "JTextField"
  },
  {
    question: "Which interface is used for event handling?",
    options: ["ActionEvent", "EventListener", "ActionListener", "KeyEvent"],
    answer: "ActionListener"
  },
  {
    question: "Which layout manager arranges components in a row, one after another?",
    options: ["FlowLayout", "BorderLayout", "GridLayout", "BoxLayout"],
    answer: "FlowLayout"
  },
  {
    question: "What does JFrame represent in Swing?",
    options: [
      "A button component",
      "A container window",
      "A layout manager",
      "An event listener"
    ],
    answer: "A container window"
  },
  {
    question: "Which method is used to set the title of a JFrame?",
    options: ["setTitle()", "setName()", "setWindowTitle()", "title()"],
    answer: "setTitle()"
  },
  {
    question: "Which component is used to display text in Swing?",
    options: ["JTextArea", "JLabel", "JButton", "JTextField"],
    answer: "JLabel"
  },
  {
    question: "What does setVisible(true) do in a JFrame?",
    options: [
      "Makes the frame visible on screen",
      "Adds components",
      "Sets size",
      "Closes the frame"
    ],
    answer: "Makes the frame visible on screen"
  },
  {
    question: "Which event occurs when a button is clicked?",
    options: ["KeyEvent", "MouseEvent", "ActionEvent", "FocusEvent"],
    answer: "ActionEvent"
  },
  {
    question: "Which class should you extend to create a custom component in Swing?",
    options: ["JFrame", "JPanel", "JComponent", "Component"],
    answer: "JComponent"
  },
  {
    question: "Which method removes all components from a container?",
    options: ["removeAll()", "clear()", "deleteAll()", "reset()"],
    answer: "removeAll()"
  },
  {
    question: "Which method is used to repaint a component?",
    options: ["repaint()", "refresh()", "update()", "paint()"],
    answer: "repaint()"
  },
  {
    question: "Which of these is a top-level container in Swing?",
    options: ["JFrame", "JPanel", "JButton", "JLabel"],
    answer: "JFrame"
  },
  {
    question: "Which method registers an ActionListener to a button?",
    options: ["addListener()", "addActionListener()", "registerListener()", "addEventListener()"],
    answer: "addActionListener()"
  },
  {
    question: "Which package contains Swing classes?",
    options: ["java.awt", "java.io", "javax.swing", "java.util"],
    answer: "javax.swing"
  },
  {
    question: "Which method is used to add components to JFrame?",
    options: ["append()", "put()", "add()", "insert()"],
    answer: "add()"
  },
  {
    question: "Which component is used for user input in Swing?",
    options: ["JLabel", "JTextField", "JButton", "JRadioButton"],
    answer: "JTextField"
  },
  {
    question: "Which interface is used for event handling?",
    options: ["ActionEvent", "EventListener", "ActionListener", "KeyEvent"],
    answer: "ActionListener"
  },
  {
    question: "Which layout manager arranges components in a row, one after another?",
    options: ["FlowLayout", "BorderLayout", "GridLayout", "BoxLayout"],
    answer: "FlowLayout"
  },
  {
    question: "What does JFrame represent in Swing?",
    options: [
      "A button component",
      "A container window",
      "A layout manager",
      "An event listener"
    ],
    answer: "A container window"
  },
  {
    question: "Which method is used to set the title of a JFrame?",
    options: ["setTitle()", "setName()", "setWindowTitle()", "title()"],
    answer: "setTitle()"
  },
  {
    question: "Which component is used to display text in Swing?",
    options: ["JTextArea", "JLabel", "JButton", "JTextField"],
    answer: "JLabel"
  },
  {
    question: "What does setVisible(true) do in a JFrame?",
    options: [
      "Makes the frame visible on screen",
      "Adds components",
      "Sets size",
      "Closes the frame"
    ],
    answer: "Makes the frame visible on screen"
  },
  {
    question: "Which event occurs when a button is clicked?",
    options: ["KeyEvent", "MouseEvent", "ActionEvent", "FocusEvent"],
    answer: "ActionEvent"
  },
  {
    question: "Which class should you extend to create a custom component in Swing?",
    options: ["JFrame", "JPanel", "JComponent", "Component"],
    answer: "JComponent"
  },
  {
    question: "Which method removes all components from a container?",
    options: ["removeAll()", "clear()", "deleteAll()", "reset()"],
    answer: "removeAll()"
  },
  {
    question: "Which method is used to repaint a component?",
    options: ["repaint()", "refresh()", "update()", "paint()"],
    answer: "repaint()"
  },
  {
    question: "Which of these is a top-level container in Swing?",
    options: ["JFrame", "JPanel", "JButton", "JLabel"],
    answer: "JFrame"
  },
  {
    question: "Which method registers an ActionListener to a button?",
    options: ["addListener()", "addActionListener()", "registerListener()", "addEventListener()"],
    answer: "addActionListener()"
  },
  {
    question: "Which concept is mostly used in mini projects?",
    options: ["Inheritance", "Encapsulation", "OOP", "Method Overriding"],
    answer: "OOP"
  },
  {
    question: "Which class is used to write to a file in Java?",
    options: ["Scanner", "FileReader", "FileWriter", "PrintReader"],
    answer: "FileWriter"
  },
  {
    question: "Which collection is best for storing dynamic list of items?",
    options: ["Array", "LinkedList", "ArrayList", "HashMap"],
    answer: "ArrayList"
  },
  {
    question: "Which of these is NOT a pillar of OOP?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Compilation"],
    answer: "Compilation"
  },
  {
    question: "Which class is used to read text from a file?",
    options: ["FileReader", "FileWriter", "BufferedWriter", "FileWriter"],
    answer: "FileReader"
  },
  {
    question: "Which method is used to add an element to an ArrayList?",
    options: ["add()", "insert()", "put()", "append()"],
    answer: "add()"
  },
  {
    question: "What does OOP stand for?",
    options: ["Object Oriented Programming", "Open Object Programming", "Object Only Programming", "Object Oriented Procedure"],
    answer: "Object Oriented Programming"
  },
  {
    question: "Which keyword is used to inherit a class?",
    options: ["inherit", "extends", "implements", "super"],
    answer: "extends"
  },
  {
    question: "Which interface does ArrayList implement?",
    options: ["List", "Map", "Set", "Queue"],
    answer: "List"
  },
  {
    question: "Which class is used for buffered reading of characters?",
    options: ["BufferedReader", "BufferedWriter", "FileReader", "Scanner"],
    answer: "BufferedReader"
  },
  {
    question: "What happens if you try to write to a file that doesn’t exist with FileWriter?",
    options: ["Throws error", "Creates a new file", "Appends to file", "Deletes existing file"],
    answer: "Creates a new file"
  },
  {
    question: "Which OOP feature allows a class to have multiple forms?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    answer: "Polymorphism"
  },
  {
    question: "Which method is used to remove an element from an ArrayList?",
    options: ["remove()", "delete()", "discard()", "clear()"],
    answer: "remove()"
  },
  {
    question: "Which keyword is used to prevent inheritance of a class?",
    options: ["final", "static", "abstract", "private"],
    answer: "final"
  },
  {
    question: "What is the default value of a boolean variable?",
    options: ["true", "false", "0", "null"],
    answer: "false"
  },
  {
    question: "Which of these classes is immutable?",
    options: ["StringBuilder", "StringBuffer", "String", "StringWriter"],
    answer: "String"
  },
  {
    question: "Which method in Object class is used to compare two objects?",
    options: ["compare()", "equals()", "compareTo()", "match()"],
    answer: "equals()"
  },
  {
    question: "Which keyword is used to access the parent class constructor?",
    options: ["super", "this", "parent", "base"],
    answer: "super"
  },
  {
    question: "Which of the following can hold only unique elements?",
    options: ["List", "Set", "Map", "Queue"],
    answer: "Set"
  },
  {
    question: "Which method of ArrayList returns the element at the specified position?",
    options: ["get()", "fetch()", "elementAt()", "retrieve()"],
    answer: "get()"
  },
  {
    question: "What does the 'static' keyword mean in Java?",
    options: ["Instance-level", "Class-level", "Final", "Immutable"],
    answer: "Class-level"
  },
  {
    question: "Which class is used to read primitive data types and strings from the console?",
    options: ["Scanner", "BufferedReader", "Console", "InputStream"],
    answer: "Scanner"
  },
  {
    question: "Which method is used to write characters to a file?",
    options: ["write()", "print()", "put()", "store()"],
    answer: "write()"
  },
  {
    question: "Which of the following is not a valid Java identifier?",
    options: ["myVar", "_var", "2ndVar", "$value"],
    answer: "2ndVar"
  },
  {
    question: "Which class is the superclass of all classes in Java?",
    options: ["Object", "Class", "String", "Exception"],
    answer: "Object"
  },
  {
    question: "What is method overriding?",
    options: [
      "Same method name in subclass with same signature",
      "Different method name in subclass",
      "Same method name with different parameters",
      "Method with different return type"
    ],
    answer: "Same method name in subclass with same signature"
  },
  {
    question: "What is encapsulation in Java?",
    options: [
      "Hiding data implementation details",
      "Inheriting properties",
      "Multiple forms of a method",
      "Using abstract classes"
    ],
    answer: "Hiding data implementation details"
  },
  {
    question: "Which exception is thrown when an array is accessed with an illegal index?",
    options: [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IllegalArgumentException",
      "ClassCastException"
    ],
    answer: "ArrayIndexOutOfBoundsException"
  },
  {
    question: "Which interface does HashMap implement?",
    options: ["Map", "List", "Set", "Collection"],
    answer: "Map"
  },
  {
    question: "Which method removes all elements from a collection?",
    options: ["clear()", "removeAll()", "delete()", "discard()"],
    answer: "clear()"
  },
  {
    question: "Which loop is used when the number of iterations is known?",
    options: ["for", "while", "do-while", "if"],
    answer: "for"
  },
  {
    question: "What is the size of an int data type in Java?",
    options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
    answer: "4 bytes"
  },
  {
    question: "Which of these operators is used for bitwise AND?",
    options: ["&", "&&", "|", "^"],
    answer: "&"
  },
  {
    question: "What does the 'instanceof' keyword check?",
    options: [
      "If an object is null",
      "If an object is an instance of a class",
      "If a class extends another",
      "If a variable is primitive"
    ],
    answer: "If an object is an instance of a class"
  },
  {
    question: "Which modifier makes a method accessible only within its own package and subclasses?",
    options: ["public", "private", "protected", "default"],
    answer: "protected"
  },
  {
    question: "Which Java collection allows key-value pairs?",
    options: ["List", "Set", "Map", "Queue"],
    answer: "Map"
  },
  {
    question: "Which method returns the number of elements in a collection?",
    options: ["length()", "size()", "count()", "getSize()"],
    answer: "size()"
  },
  {
    question: "Which operator is used to concatenate two strings?",
    options: ["+", "&", ".", "&&"],
    answer: "+"
  },
  {
    question: "Which method converts a String to an integer?",
    options: ["Integer.parseInt()", "Integer.toString()", "String.valueOf()", "parseInt()"],
    answer: "Integer.parseInt()"
  },
  {
    question: "Which exception is thrown by the JVM when there is an arithmetic error like division by zero?",
    options: [
      "ArithmeticException",
      "NumberFormatException",
      "NullPointerException",
      "IOException"
    ],
    answer: "ArithmeticException"
  },
  {
    question: "Which method in Thread class is used to pause execution for a specified time?",
    options: ["wait()", "sleep()", "pause()", "stop()"],
    answer: "sleep()"
  },
  {
    question: "Which keyword is used to define a constant in Java?",
    options: ["const", "final", "static", "constant"],
    answer: "final"
  },
  {
    question: "Which method is used to start a thread?",
    options: ["start()", "run()", "execute()", "begin()"],
    answer: "start()"
  }
  ];
  
  function loadMCQ() {
    const content = document.getElementById("content");
    let html = "<h2>Java Multiple Choice Questions</h2>";
  
    questions.forEach((q, index) => {
      html += `<div class="mcq-block">
        <p><strong>Q${index + 1}:</strong> ${q.question}</p>`;
      q.options.forEach(option => {
        html += `<button onclick="checkMCQAnswer(this, '${option}', '${q.answer}')">${option}</button>`;
      });
      html += `</div>`;
    });
  
    content.innerHTML = html;
  }
  
  function checkMCQAnswer(button, selected, correct) {
    const buttons = button.parentElement.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
  
    if (selected === correct) {
      button.style.backgroundColor = "green";
      Swal.fire({
        icon: 'success',
        title: 'Correct! 🎉',
        text: 'You chose the right answer!',
        confirmButtonColor: '#28a745'
      });
    } else {
      button.style.backgroundColor = "red";
      Swal.fire({
        icon: 'error',
        title: 'Incorrect ❌',
        text: `Wrong answer! Correct answer: ${correct}`,
        confirmButtonColor: '#e74c3c'
      });
    }
  }
  
// Auto-generated seeder file containing 53 modules.
// Generated via seed-builder.js and updated via scripts.

export const modules = [
  {
    "order": 1,
    "title": "JavaScript Basics",
    "description": "Variables & Data Types",
    "detailedExplanation": "## JavaScript Basics (🟢 LEVEL 0 – FOUNDATION)\n\n### Variables & Data Types\nJavaScript is the brain of web applications. Before learning React, you must understand how JavaScript stores and processes data.\n\n### Variables\nVariables are containers that hold values. JavaScript is dynamically typed, meaning you don’t declare types explicitly.\n- `const`: Block-scoped. Used for values that should not be reassigned. **Always default to const.**\n- `let`: Block-scoped. Used for values that will change (e.g., counters in loops).\n- `var`: Function-scoped. (Avoid using this in modern code!).\n\n### Data Types\nData types define how data behaves.\n1. **Primitive Values**: (string, number, boolean, null, undefined, symbol). These are **immutable**. If you change a primitive, you are replacing the entire value.\n2. **Reference Values**: (Objects & Arrays). These are **mutable**. You can change their contents without replacing the object itself.\n\n### 👉 Why is this important for React?\nReact state works heavily with objects and arrays. React relies on **immutability** to know when to re-render the UI. If you mutate an object directly instead of creating a copy, React won't realize the state has changed!",
    "practiceTasks": [
      {
        "task": "Understand difference between const, let, and var"
      },
      {
        "task": "Differentiate between primitives and references"
      }
    ],
    "codeExample": "// Primitive Types (Immutable)\nconst name = \"Alice\";\nlet age = 25;\nconst isDeveloper = true;\n\n// Reference Types (Mutable)\nconst user = { name: \"Alice\", age: 25 };\nconst scores = [85, 90, 95];\n\n// Reassigning let\nage = 26;\n\nconsole.log(\"User:\", user);\nconsole.log(\"Age:\", age);",
    "quizzes": [
      {
        "question": "Question 1: Which keyword should you use by default to declare a variable?",
        "options": [
          "var",
          "let",
          "const",
          "function"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: What does it mean that JavaScript is 'dynamically typed'?",
        "options": [
          "Variables must declare their type",
          "Types are evaluated at runtime, so variables can hold any type of value",
          "It only supports dynamic web pages",
          "Types are strictly enforced"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which of the following is a primitive data type?",
        "options": [
          "Array",
          "Object",
          "Boolean",
          "Function"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: Are primitive values mutable or immutable?",
        "options": [
          "Mutable",
          "Immutable",
          "Depends on the variable keyword",
          "They change randomly"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: What is the scope of a variable declared with `let`?",
        "options": [
          "Global scope",
          "Function scope",
          "Block scope",
          "No scope"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: Which of the following is a reference type?",
        "options": [
          "String",
          "Number",
          "Array",
          "Undefined"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 7: Why is understanding immutability critical for React?",
        "options": [
          "React uses it to style components",
          "React relies on it to efficiently determine if state has changed and trigger a re-render",
          "React prohibits variables",
          "React uses it to fetch data"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Can you reassign a variable declared with `const`?",
        "options": [
          "Yes",
          "No, reassignment throws an error",
          "Only in strict mode",
          "Only if it is an object"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Can you change the properties of an object declared with `const`?",
        "options": [
          "Yes, the reference cannot change but the contents can",
          "No, the entire object is locked",
          "Only if it is an array",
          "Only in React"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: What does `typeof null` return?",
        "options": [
          "'null'",
          "'undefined'",
          "'object'",
          "'boolean'"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 11: Which keyword is considered legacy and should generally be avoided?",
        "options": [
          "let",
          "const",
          "var",
          "import"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 12: What value is assigned to an uninitialized `let` variable?",
        "options": [
          "null",
          "0",
          "false",
          "undefined"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 13: How do you declare a number variable?",
        "options": [
          "let num = '5';",
          "int num = 5;",
          "let num = 5;",
          "const num : 5;"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 14: What is the difference between `null` and `undefined`?",
        "options": [
          "They are identical",
          "`null` is intentional absence of value, `undefined` means a variable has been declared but not assigned",
          "`undefined` is intentional, `null` is unassigned",
          "`null` is a string, `undefined` is an object"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: What does `1 === '1'` evaluate to?",
        "options": [
          "true",
          "false",
          "undefined",
          "NaN"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: What does `1 == '1'` evaluate to?",
        "options": [
          "true",
          "false",
          "undefined",
          "NaN"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 17: Which operator checks for both value and type equality?",
        "options": [
          "==",
          "===",
          "=",
          "!=="
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 18: Is `NaN` (Not a Number) a primitive type?",
        "options": [
          "No, it's an object",
          "No, it's a function",
          "Yes, it is a special value of the Number type",
          "Yes, it is a String"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 19: What is a Boolean?",
        "options": [
          "A number with decimals",
          "A text string",
          "A true or false value",
          "An array"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 20: If `const arr = [1, 2]`, is `arr.push(3)` allowed?",
        "options": [
          "No, because arr is const",
          "Yes, because arrays are mutable reference types and push modifies the array contents, not the variable binding",
          "No, push is not a function",
          "Yes, but it returns an error"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Variable Declaration",
        "description": "Declare a string, number, and boolean using const. Print them using console.log()."
      },
      {
        "title": "Assignment 2: Mutability Test",
        "description": "Create an object with const. Try to reassign the object itself (should fail), then successfully change one of its properties."
      }
    ],
    "defaultFiles": {
      "/index.js": "// 1. Declare a const variable for your name\nconst myName = \"Developer\";\n\n// 2. Declare a let variable for your age\nlet myAge = 20;\n\nconsole.log(myName, \"is\", myAge, \"years old.\");\n"
    }
  },
  {
    "order": 2,
    "title": "Functions",
    "description": "Functions & Arrow Functions",
    "detailedExplanation": "## Functions (🟢 LEVEL 0 – FOUNDATION)\n\n### Functions & Arrow Functions\nFunctions are reusable blocks of logic that perform a specific task. They are treated as **first-class citizens** in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.\n\n### Traditional Functions\nTraditional function declarations are hoisted (moved to the top of their scope) and have their own `this` binding context.\n```javascript\nfunction greet(name) {\n  return \"Hello, \" + name;\n}\n```\n\n### Arrow Functions\nIntroduced in ES6, arrow functions provide a shorter syntax. More importantly, **arrow functions inherit `this` from their parent scope** (lexical scoping), making them extremely useful for callbacks and methods inside classes.\n```javascript\nconst greet = (name) => {\n  return \"Hello, \" + name;\n};\n\n// Shorthand implicit return\nconst multiply = (a, b) => a * b;\n```\n\n### 👉 Why is this important for React?\n- **Components are functions:** In modern React, a component is just a JavaScript function that returns JSX.\n- **Event handlers:** You will constantly pass arrow functions to events like `onClick={ () => doSomething() }`.",
    "practiceTasks": [
      {
        "task": "Understand traditional vs arrow functions"
      },
      {
        "task": "Learn implicit returns"
      }
    ],
    "codeExample": "// Traditional Function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow Function\nconst subtract = (a, b) => a - b;\n\n// Higher Order Function (taking a function as an argument)\nconst calculate = (x, y, operation) => {\n  return operation(x, y);\n};\n\nconsole.log(\"Add:\", calculate(5, 3, add));\nconsole.log(\"Subtract:\", calculate(5, 3, subtract));",
    "quizzes": [
      {
        "question": "Question 1: What is a function in JavaScript?",
        "options": [
          "A reusable block of logic",
          "A CSS style",
          "An HTML element",
          "A database table"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 2: What does it mean that functions are 'first-class citizens'?",
        "options": [
          "They run fastest",
          "They can be treated like any other variable (passed, returned, assigned)",
          "They require a license",
          "They only run on the server"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: How do traditional functions handle the `this` keyword?",
        "options": [
          "They inherit it from the parent",
          "They have their own `this` binding based on how they are called",
          "They do not have a `this` keyword",
          "It points to the Window object always"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: How do arrow functions handle the `this` keyword?",
        "options": [
          "They have their own binding",
          "They inherit it lexically from the parent scope",
          "They throw an error if you use `this`",
          "It always points to undefined"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Which syntax represents an arrow function?",
        "options": [
          "function => {}",
          "() => {}",
          "=> function() {}",
          "() -> {}"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: What is the implicit return in an arrow function?",
        "options": [
          "When you return false by default",
          "When you omit the curly braces, the expression is returned automatically",
          "When it returns undefined",
          "When it returns the arguments"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Which of the following is an implicit return?",
        "options": [
          "const add = (a, b) => { return a + b }",
          "const add = (a, b) => a + b",
          "function add(a, b) return a + b",
          "const add = (a) => {}"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What are React functional components?",
        "options": [
          "Just regular JavaScript functions that return UI elements (JSX)",
          "Special classes",
          "HTML files",
          "Server-side scripts"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: Can an arrow function be hoisted like a traditional function declaration?",
        "options": [
          "Yes",
          "No, because it is assigned to a variable (let/const)",
          "Only if declared with var",
          "Yes, but it is deprecated"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: If an arrow function takes exactly one parameter, do you need parentheses around the parameter?",
        "options": [
          "Yes, always",
          "No, they are optional (e.g., `name => 'Hello ' + name`)",
          "Yes, but only in strict mode",
          "No, unless it returns a string"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: What is a Higher-Order Function?",
        "options": [
          "A function that executes very fast",
          "A function that takes another function as an argument, or returns a function",
          "A function defined in the global scope",
          "A function with many parameters"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: Which is a valid use of an arrow function in a React onClick handler?",
        "options": [
          "onClick={doSomething}",
          "onClick={() => doSomething()}",
          "Both A and B",
          "Neither"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 13: What does `() => {}` return if it has curly braces but no `return` keyword?",
        "options": [
          "null",
          "0",
          "undefined",
          "an empty object"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 14: How do you implicitly return an object literal from an arrow function?",
        "options": [
          "() => { key: 'value' }",
          "() => ({ key: 'value' })",
          "() => return { key: 'value' }",
          "() => [key: 'value']"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: Can traditional functions be passed as props in React?",
        "options": [
          "Yes",
          "No",
          "Only arrow functions can",
          "Only if bound in the constructor"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 16: What is a callback function?",
        "options": [
          "A function executed immediately",
          "A function passed into another function to be executed later",
          "A recursive function",
          "A broken function"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: Which keyword is NOT used to define a function or method?",
        "options": [
          "function",
          "=>",
          "class",
          "def"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 18: Can arrow functions be used as constructors (with the `new` keyword)?",
        "options": [
          "Yes",
          "No, they lack their own `this` and prototype",
          "Only if they have parameters",
          "Only in Node.js"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: What does the `arguments` object do in traditional functions?",
        "options": [
          "Contains all passed arguments",
          "Returns the function name",
          "Throws an error",
          "Returns the return value"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: Do arrow functions have their own `arguments` object?",
        "options": [
          "Yes",
          "No, you must use rest parameters (...args) instead",
          "Only in React",
          "Only if explicitly declared"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Convert to Arrow",
        "description": "Write a traditional function that divides two numbers. Then rewrite the exact same logic as a one-line arrow function."
      },
      {
        "title": "Assignment 2: Callback Execution",
        "description": "Write a function 'processData' that takes a string and a callback function. Call the callback with the uppercase version of the string."
      }
    ],
    "defaultFiles": {
      "/index.js": "// 1. Write an arrow function to square a number\nconst square = (n) => n * n;\n\nconsole.log(\"Square of 4 is:\", square(4));\n"
    }
  },
  {
    "order": 3,
    "title": "ES6 Features",
    "description": "Modern JavaScript (Destructuring, Spread, Template Literals)",
    "detailedExplanation": "## ES6 Features (🟢 LEVEL 0 – FOUNDATION)\n\n### Modern JavaScript (ES6+)\nES6 (ECMAScript 2015) introduced syntax that makes JavaScript cleaner and more powerful. Mastering these features is a prerequisite for React.\n\n### 1. Destructuring\nDestructuring allows you to easily extract values from objects or arrays into distinct variables.\n```javascript\nconst user = { name: \"John\", age: 30 };\n// Instead of user.name and user.age:\nconst { name, age } = user;\n```\n\n### 2. Spread Operator (`...`)\nThe spread operator allows an iterable (like an array or object) to be expanded. It is the primary tool for copying data without mutating the original.\n```javascript\nconst arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]\n\nconst user = { name: \"John\", age: 30 };\nconst updatedUser = { ...user, age: 31 }; // New object copy\n```\n\n### 3. Template Literals\nTemplate literals use backticks (``) instead of quotes. They allow for multi-line strings and easy variable interpolation using `${}`.\n```javascript\nconst name = \"React\";\nconst greeting = `Welcome to ${name}!`;\n```\n\n### 👉 Why is this important for React?\n- **Destructuring** is used to extract `props` and the values returned by hooks like `useState`.\n- **Spread Operator** is absolutely necessary for updating state immutably.\n- **Template Literals** are used constantly for dynamic class names in JSX (`className={`btn ${isActive ? 'active' : ''}`}`).",
    "practiceTasks": [
      {
        "task": "Destructure objects and arrays"
      },
      {
        "task": "Copy data safely using the spread operator"
      }
    ],
    "codeExample": "// 1. Destructuring\nconst person = { first: 'Jane', last: 'Doe', city: 'NYC' };\nconst { first, city } = person;\nconsole.log(first, \"lives in\", city);\n\n// 2. Spread Operator\nconst originalArray = [10, 20];\nconst newArray = [...originalArray, 30];\nconsole.log(\"Copied Array:\", newArray);\n\nconst originalObj = { x: 1, y: 2 };\nconst newObj = { ...originalObj, z: 3 };\nconsole.log(\"Merged Object:\", newObj);\n\n// 3. Template Literals\nconst total = 50;\nconsole.log(`Your total is $${total} today.`);",
    "quizzes": [
      {
        "question": "Question 1: What does the destructuring assignment do?",
        "options": [
          "Deletes an object",
          "Extracts values from arrays or properties from objects into distinct variables",
          "Destroys variables",
          "Converts an object to a string"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What symbol represents the spread operator?",
        "options": [
          "...",
          "&&",
          "=>",
          "||"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 3: How do you use the spread operator to combine two arrays: a and b?",
        "options": [
          "[a, b]",
          "...a, ...b",
          "[...a, ...b]",
          "a + b"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: Which characters are used for template literals?",
        "options": [
          "Single quotes ''",
          "Double quotes \"\"",
          "Backticks ``",
          "Brackets []"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: How do you insert a variable `name` into a template literal?",
        "options": [
          "${name}",
          "#{name}",
          "+ name +",
          "{{name}}"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 6: What is the output of `const { a } = { a: 1, b: 2 }; console.log(a);`?",
        "options": [
          "1",
          "2",
          "undefined",
          "Error"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 7: If you update state using the spread operator `{ ...state, value: 2 }`, does it mutate the original state?",
        "options": [
          "Yes",
          "No, it creates a shallow copy with the updated value",
          "It throws an error",
          "It creates a deep clone"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: How do you extract the first two items of an array `arr` into variables `x` and `y`?",
        "options": [
          "const [x, y] = arr;",
          "const {x, y} = arr;",
          "const x, y = arr;",
          "const [x: y] = arr;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: Can template literals span multiple lines?",
        "options": [
          "Yes, without needing concatenation",
          "No, they must be on one line",
          "Only in Node.js",
          "Only if escaped with \\n"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: What is the 'rest' operator?",
        "options": [
          "Used to put the program to sleep",
          "Uses the `...` syntax to collect remaining arguments into an array",
          "Deletes variables",
          "A type of promise"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: How do you provide a default value during object destructuring?",
        "options": [
          "const { name || 'Guest' } = user;",
          "const { name = 'Guest' } = user;",
          "const { name: 'Guest' } = user;",
          "const name = user.name ? 'Guest'"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: What does `const clone = [...original]` do?",
        "options": [
          "Creates a deep clone",
          "Creates a shallow copy of the array",
          "Concatenates strings",
          "Mutates the original array"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: Why do we use the spread operator to update React state?",
        "options": [
          "Because React is slow",
          "Because React state must be immutable, so we create a new copy with the spread operator",
          "Because it looks cool",
          "To compress the data"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: How do you alias a destructured variable (rename it)?",
        "options": [
          "const { oldName as newName } = obj;",
          "const { oldName = newName } = obj;",
          "const { oldName: newName } = obj;",
          "const { newName : oldName } = obj;"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 15: What happens if you spread an object but place the spread operator AFTER a new key? e.g., `{ x: 1, ...obj }` (Assume obj has x: 2)",
        "options": [
          "x will be 1",
          "x will be 2 (overridden by obj)",
          "It throws an error",
          "x will be [1, 2]"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: What happens if you spread an object and place the new key AFTER the spread? e.g., `{ ...obj, x: 5 }`",
        "options": [
          "x will be 5, overriding whatever was in obj",
          "x will be whatever was in obj",
          "It throws an error",
          "Both values are kept"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 17: Can you spread an array into an object?",
        "options": [
          "Yes, the keys will be the array indices (0, 1, 2...)",
          "No, it throws an error",
          "Yes, but keys will be null",
          "Only in TypeScript"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: What does `const [a, , b] = [1, 2, 3];` do?",
        "options": [
          "Throws an error",
          "Sets a=1, b=2",
          "Sets a=1, b=3 (skipping 2)",
          "Sets a=1, b=undefined"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 19: ES6 was released in what year?",
        "options": [
          "2015",
          "2009",
          "2020",
          "1995"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: Which is the correct way to construct a dynamic class name using template literals?",
        "options": [
          "className={`btn btn-${color}`}",
          "className={'btn btn-${color}'}",
          "className=\"btn btn-${color}\"",
          "className={btn btn-{color}}"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Merging Profiles",
        "description": "Create two objects: basicInfo and preferences. Use the spread operator to combine them into a single userProfile object."
      },
      {
        "title": "Assignment 2: Array Destructuring",
        "description": "Create an array with three color strings. Use destructuring to assign the first and third colors to variables."
      }
    ],
    "defaultFiles": {
      "/index.js": "const user = { username: 'admin', role: 'moderator' };\n// Destructure 'username' from user\nconst { username } = user;\nconsole.log(`Hello ${username}`);\n"
    }
  },
  {
    "order": 4,
    "title": "Array Methods",
    "description": "map(), filter(), reduce()",
    "detailedExplanation": "## Array Methods (🟢 LEVEL 0 – FOUNDATION)\n\n### Functional Programming Tools\nModern JavaScript relies heavily on functional array methods instead of traditional `for` loops. These methods do not mutate the original array; instead, they return a new array or value.\n\n### 1. map()\nThe `map()` method creates a **new array** populated with the results of calling a provided function on every element in the calling array.\n- **Use case:** Transforming data. In React, it's used to transform an array of data into an array of UI elements.\n\n```javascript\nconst nums = [1, 2, 3];\nconst doubled = nums.map(num => num * 2); // [2, 4, 6]\n```\n\n### 2. filter()\nThe `filter()` method creates a **new array** with all elements that pass the test implemented by the provided function.\n- **Use case:** Removing unwanted data (e.g., deleting an item from a list).\n\n```javascript\nconst ages = [12, 18, 25, 8];\nconst adults = ages.filter(age => age >= 18); // [18, 25]\n```\n\n### 3. reduce()\nThe `reduce()` method executes a \"reducer\" callback function on each element, passing in the return value from the calculation on the preceding element. It reduces the array to a **single value**.\n- **Use case:** Summing numbers, or combining data into a single object.\n\n```javascript\nconst prices = [10, 20, 30];\nconst total = prices.reduce((acc, current) => acc + current, 0); // 60\n```\n\n### 👉 Why is this important for React?\n- You will use `map()` every single time you need to render a list of UI elements.\n- You will use `filter()` to implement \"delete\" functionality in your state without mutating the original array.",
    "practiceTasks": [
      {
        "task": "Transform array items using map"
      },
      {
        "task": "Extract single values using reduce"
      }
    ],
    "codeExample": "const tasks = [\n  { id: 1, title: 'Learn JS', completed: true },\n  { id: 2, title: 'Learn React', completed: false },\n  { id: 3, title: 'Build Project', completed: false }\n];\n\n// 1. map(): Get an array of titles\nconst titles = tasks.map(t => t.title);\nconsole.log(\"Titles:\", titles);\n\n// 2. filter(): Get only incomplete tasks\nconst pending = tasks.filter(t => !t.completed);\nconsole.log(\"Pending Tasks:\", pending);\n\n// 3. reduce(): Count completed tasks\nconst completedCount = tasks.reduce((acc, t) => {\n  return t.completed ? acc + 1 : acc;\n}, 0);\nconsole.log(\"Completed Count:\", completedCount);",
    "quizzes": [
      {
        "question": "Question 1: What does the map() method return?",
        "options": [
          "A single value",
          "A boolean",
          "A new array containing the transformed elements",
          "The original array mutated"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: Does map() mutate the original array?",
        "options": [
          "Yes",
          "No",
          "Only if it contains objects",
          "Depends on the callback"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which method is used to remove items from an array based on a condition?",
        "options": [
          "remove()",
          "slice()",
          "map()",
          "filter()"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 4: In React, which method is used exclusively to render lists of elements from an array of data?",
        "options": [
          "reduce()",
          "forEach()",
          "map()",
          "filter()"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What does the reduce() method return?",
        "options": [
          "A new array",
          "A single accumulated value",
          "A boolean",
          "Undefined"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: Why is forEach() NOT used to render lists in React JSX?",
        "options": [
          "It is too slow",
          "It returns undefined, but React needs an array of elements returned",
          "It mutates the array",
          "It is banned in React"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is the second argument passed to the reduce() method?",
        "options": [
          "The array itself",
          "The current index",
          "The initial value of the accumulator",
          "The callback function"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 8: If you have an array `[1, 2, 3]` and use `filter(num => num > 1)`, what is the result?",
        "options": [
          "[2, 3]",
          "[1]",
          "[1, 2, 3]",
          "true"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: What arguments are passed to the callback function in map()?",
        "options": [
          "element, index, array",
          "index, element",
          "accumulator, element",
          "key, value"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: What happens if the callback function in filter() returns false?",
        "options": [
          "The element is kept in the new array",
          "The element is excluded from the new array",
          "The loop stops",
          "An error is thrown"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: Can you chain these methods? e.g., `arr.filter().map()`",
        "options": [
          "Yes, because filter returns a new array",
          "No, they must be on separate lines",
          "Only reduce can be chained",
          "Only if the array is let, not const"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 12: Which method would you use to find the total sum of an array of numbers?",
        "options": [
          "map()",
          "filter()",
          "sum()",
          "reduce()"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 13: If you want to create an array of user names from an array of user objects, which method is best?",
        "options": [
          "filter()",
          "map()",
          "reduce()",
          "find()"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: What does `find()` do compared to `filter()`?",
        "options": [
          "They do the same thing",
          "find() returns the first matching element, filter() returns an array of all matches",
          "find() returns a boolean",
          "find() is faster"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: Which of these methods mutates the original array?",
        "options": [
          "map",
          "filter",
          "sort",
          "reduce"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 16: When using map() in React JSX, what special prop must you add to the returned elements?",
        "options": [
          "id",
          "index",
          "key",
          "ref"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 17: If your map callback is `num => num * 2`, what is it an example of?",
        "options": [
          "A pure function",
          "An impure function",
          "A reducer",
          "A state mutation"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: What is the accumulator in the reduce method?",
        "options": [
          "The current element",
          "The index",
          "The accumulated value previously returned in the last invocation of the callback",
          "The original array"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 19: If you omit the initial value in reduce(), what happens?",
        "options": [
          "It throws an error",
          "It uses 0 by default",
          "It uses the first element of the array as the initial value",
          "It returns undefined"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 20: How do you write a map function that implicitly returns an object literal?",
        "options": [
          "map(item => { id: item.id })",
          "map(item => ({ id: item.id }))",
          "map(item => return { id: item.id })",
          "map(item => object(item.id))"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Filter & Map",
        "description": "Given an array of strings, use filter() to keep strings longer than 4 characters, then use map() to convert them to uppercase."
      },
      {
        "title": "Assignment 2: Total Price",
        "description": "Given an array of objects representing items in a cart (with a 'price' property), use reduce() to calculate the total cost."
      }
    ],
    "defaultFiles": {
      "/index.js": "const numbers = [10, 20, 30];\n// Use map to multiply each number by 10\nconst multiplied = numbers.map(n => n * 10);\nconsole.log(multiplied);\n"
    }
  },
  {
    "order": 5,
    "title": "DOM Manipulation",
    "description": "JavaScript DOM Basics",
    "detailedExplanation": "## DOM Manipulation (🟢 LEVEL 0 – FOUNDATION)\n\n### The Document Object Model (DOM)\nThe DOM is a tree-like structure created by the browser when it loads an HTML page. It represents the HTML elements as JavaScript objects, allowing you to interact with the page using code.\n\n### Traditional DOM Manipulation\nIn Vanilla JavaScript, you directly access and modify the DOM.\n1. **Selecting**: `document.getElementById('my-id')` or `document.querySelector('.my-class')`\n2. **Modifying**: `element.textContent = \"New Text\"` or `element.classList.add('active')`\n3. **Events**: `element.addEventListener('click', () => { ... })`\n\n### The Problem with Manual DOM Manipulation\nWhile simple for small pages, manual DOM manipulation becomes a nightmare in large applications:\n- **It is slow:** Reading and writing to the actual DOM is a massive performance bottleneck.\n- **It is messy:** Keeping the UI synchronized with your data requires hundreds of event listeners and manual updates.\n- **It is hard to track:** Bugs occur when the DOM state doesn't match the application state.\n\n### 👉 The React Solution: The Virtual DOM\nReact solves this problem by abstracting the DOM entirely. \nInstead of you telling the browser *how* to update the DOM (Imperative), you tell React *what* the UI should look like based on the current state (Declarative). \n\nReact creates a lightweight copy of the DOM called the **Virtual DOM**. When state changes, React updates the Virtual DOM, compares it to the old version (Diffing), and automatically calculates the minimum number of actual DOM updates needed to reflect the change. You rarely, if ever, write `document.getElementById` in a React app!",
    "practiceTasks": [
      {
        "task": "Understand the concept of the Virtual DOM"
      },
      {
        "task": "Compare Declarative vs Imperative UI updates"
      }
    ],
    "codeExample": "// --- VANILLA JS (Imperative) ---\n// 1. Select the element\n// const btn = document.querySelector('#btn');\n// const countDisplay = document.querySelector('#count');\n// let count = 0;\n// 2. Attach event listener\n// btn.addEventListener('click', () => {\n//   count++;\n//   3. Manually update the DOM\n//   countDisplay.textContent = count;\n// });\n\n// --- REACT (Declarative) ---\n// You just define the state and the UI output.\n// React handles the DOM manipulation behind the scenes.\n// const [count, setCount] = useState(0);\n// return <button onClick={() => setCount(count + 1)}>{count}</button>;\n\nconsole.log(\"React handles DOM manipulation for you using the Virtual DOM!\");",
    "quizzes": [
      {
        "question": "Question 1: What does DOM stand for?",
        "options": [
          "Data Object Model",
          "Document Object Model",
          "Display Output Mechanism",
          "Document Orientation Model"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the DOM?",
        "options": [
          "A server database",
          "A programming language",
          "A tree-like representation of an HTML document accessible via JavaScript",
          "A CSS framework"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: Which Vanilla JS method is used to select an element by its ID?",
        "options": [
          "document.selectId()",
          "document.querySelectorId()",
          "document.getElementById()",
          "document.find()"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: What is a major problem with manual DOM manipulation in large apps?",
        "options": [
          "It is illegal",
          "It is very fast but uses too much memory",
          "It is slow, messy, and hard to keep synchronized with data",
          "It prevents CSS from loading"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: How does React interact with the DOM?",
        "options": [
          "It uses jQuery",
          "It updates the real DOM directly on every keystroke",
          "It uses a Virtual DOM to batch and optimize updates to the real DOM",
          "It replaces the DOM with Canvas"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: What is the Virtual DOM?",
        "options": [
          "A 3D representation of the UI",
          "A lightweight JavaScript copy of the actual DOM",
          "A cloud-based DOM",
          "A deprecated feature of React"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is the process of comparing the old Virtual DOM with the new one called?",
        "options": [
          "Diffing / Reconciliation",
          "Rendering",
          "Compiling",
          "Transpiling"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: In React, you tell it WHAT the UI should look like. What programming paradigm is this?",
        "options": [
          "Imperative",
          "Declarative",
          "Object-Oriented",
          "Procedural"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: In Vanilla JS, you dictate exactly HOW to update the UI step-by-step. What paradigm is this?",
        "options": [
          "Declarative",
          "Imperative",
          "Functional",
          "Asynchronous"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Should you use `document.getElementById` inside a React component?",
        "options": [
          "Yes, it is the best way to get data",
          "No, you should use state and let React handle the DOM (or use refs if absolutely necessary)",
          "Yes, but only in useEffect",
          "Only for buttons"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: Which is faster: updating a JavaScript object, or updating the actual browser DOM?",
        "options": [
          "The actual DOM",
          "A JavaScript object (like the Virtual DOM)",
          "They are the exact same speed",
          "Depends on the browser"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: What is the equivalent of `element.addEventListener('click', handler)` in React?",
        "options": [
          "<button onClick={handler}>",
          "element.bind('click')",
          "document.listen('click')",
          "<button click={handler}>"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 13: How do you change the text of an element in Vanilla JS?",
        "options": [
          "element.text = 'new'",
          "element.textContent = 'new'",
          "element.value = 'new'",
          "element.html = 'new'"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: What does `document.querySelector('.card')` select?",
        "options": [
          "All elements with class 'card'",
          "The first element with class 'card'",
          "The element with ID 'card'",
          "The `<card>` tag"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: Why is the Virtual DOM faster than updating the real DOM?",
        "options": [
          "It uses WebAssembly",
          "It minimizes actual reflows and repaints in the browser by batching updates",
          "It runs on the server",
          "It ignores CSS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: If you change a React component's state, what happens immediately?",
        "options": [
          "The real DOM updates",
          "The Virtual DOM updates and compares itself to the previous version",
          "The browser reloads",
          "Nothing"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: What React hook gives you direct access to a DOM node if you *really* need it (e.g., to manage focus)?",
        "options": [
          "useState",
          "useEffect",
          "useRef",
          "useDOM"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 18: Is the Virtual DOM exclusive to React?",
        "options": [
          "Yes, React patented it",
          "No, other frameworks like Vue also use a Virtual DOM",
          "Yes, it only works with JSX",
          "No, it's a native browser feature"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: In React, instead of `element.classList.add('active')`, how do you add a class?",
        "options": [
          "Use `className={isActive ? 'active' : ''}` controlled by state",
          "Use `class='active'`",
          "Use `document.add('active')`",
          "You cannot add classes dynamically"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: React's approach to the DOM prevents which common category of bugs?",
        "options": [
          "Syntax errors",
          "State mismatch (UI showing old data because DOM wasn't manually updated)",
          "Server crashes",
          "Database failures"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Mental Model",
        "description": "Write down the difference between Declarative (React) and Imperative (Vanilla JS) programming using the analogy of ordering a pizza."
      },
      {
        "title": "Assignment 2: Virtual DOM Benefits",
        "description": "Explain in 3 sentences why the Virtual DOM improves application performance."
      }
    ],
    "defaultFiles": {
      "/index.js": "// Simulated vanilla JS selection\nconsole.log(\"In vanilla JS, you use document.querySelector().\");\nconsole.log(\"In React, you use State and JSX!\");\n"
    }
  },
  {
    "order": 6,
    "title": "Introduction to React",
    "description": "What & Why of React",
    "detailedExplanation": "## Introduction to React (🟢 LEVEL 1 – REACT BASICS)\n\n### What is React?\nReact is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called \"components\". Developed and maintained by Facebook, it has become the standard for modern web development.\n\n### Core Philosophies\n1. **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.\n2. **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.\n3. **Learn Once, Write Anywhere**: You can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.\n\n### The Virtual DOM\nTraditional DOM manipulation is slow. React uses a Virtual DOM—a lightweight JavaScript representation of the actual DOM. When state changes, React updates the Virtual DOM, compares it with the previous version (a process called \"reconciliation\"), and calculates the most efficient way to update the real DOM.\n\n### Why use React?\n- **Speed & Efficiency**: The Virtual DOM ensures optimal rendering.\n- **Reusability**: Components can be reused across your application, keeping your codebase DRY (Don't Repeat Yourself).\n- **Strong Community**: React has a massive ecosystem of libraries, tools, and community support.",
    "practiceTasks": [
      {
        "task": "Understand the Virtual DOM concept"
      },
      {
        "task": "Identify the differences between library and framework"
      }
    ],
    "codeExample": "// A simple React Component\nfunction Welcome() {\n  return (\n    <div style={{ padding: '20px', textAlign: 'center' }}>\n      <h1>Welcome to React! ⚛️</h1>\n      <p>This is a declarative UI rendered efficiently.</p>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: Who developed React?",
        "options": [
          "Google",
          "Facebook (Meta)",
          "Microsoft",
          "Twitter"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What type of library is React?",
        "options": [
          "Routing library",
          "Database management",
          "UI Library",
          "Backend Framework"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: React uses a ____ DOM to optimize updates.",
        "options": [
          "Real",
          "Shadow",
          "Virtual",
          "Document"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: What is a core philosophy of React?",
        "options": [
          "Imperative programming",
          "Declarative programming",
          "Object-oriented only",
          "No state allowed"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: React applications are built using:",
        "options": [
          "Functions only",
          "Classes only",
          "Components",
          "Templates"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: What is the main benefit of the Virtual DOM?",
        "options": [
          "It looks better",
          "It is faster to update than the real DOM",
          "It replaces HTML",
          "It runs on the server only"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: React can be used for mobile development via:",
        "options": [
          "React Mobile",
          "React Native",
          "React Phone",
          "React App"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: In React, UI is described based on:",
        "options": [
          "Current State",
          "CSS animations",
          "Database queries",
          "Server responses"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: Keeping code DRY means:",
        "options": [
          "Don't Run Yet",
          "Don't Repeat Yourself",
          "Do React Yourself",
          "Daily React Yaml"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: React updates the real DOM through a process called:",
        "options": [
          "Mutation",
          "Reconciliation",
          "Rendering",
          "Execution"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: Which of the following is true?",
        "options": [
          "React is a framework like Angular",
          "React is a library",
          "React is a language",
          "React is an OS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: Can React render on the server?",
        "options": [
          "Yes, using Node.js",
          "No, client side only",
          "Only with PHP",
          "Only with Python"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 13: React components should ideally be:",
        "options": [
          "Coupled",
          "Isolated and encapsulated",
          "Dependent on each other",
          "Massive and complex"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: Declarative code focuses on:",
        "options": [
          "How to do something",
          "What the outcome should be",
          "Managing memory",
          "Direct DOM targeting"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: Imperative code (unlike React) typically uses:",
        "options": [
          "Virtual DOM",
          "document.getElementById",
          "State management",
          "Hooks"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: React relies heavily on which JavaScript feature?",
        "options": [
          "ES6 syntax",
          "Java",
          "TypeScript only",
          "jQuery"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 17: What is the abbreviation for User Interface?",
        "options": [
          "UI",
          "UX",
          "UR",
          "UT"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: Is React open source?",
        "options": [
          "Yes",
          "No",
          "Only for personal use",
          "Only for enterprise"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 19: What does React.StrictMode do?",
        "options": [
          "Makes the app faster",
          "Highlights potential problems in the app",
          "Forces TypeScript",
          "Compiles the code"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: Which is NOT a reason to use React?",
        "options": [
          "Component reusability",
          "Virtual DOM performance",
          "Built-in database management",
          "Strong community"
        ],
        "correctAnswer": 2
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Compare React vs Vanilla JS",
        "description": "Write a short paragraph explaining the difference between declarative React code and imperative Vanilla JS code."
      },
      {
        "title": "Assignment 2: First Impressions",
        "description": "Create a simple React component that renders your name and your favorite programming language."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\n\nexport default function App() {\n  return (\n    <div style={{fontFamily:'monospace',padding:20}}>\n      <h1>Hello React!</h1>\n      <p>Edit this file to see live changes.</p>\n    </div>\n  );\n}",
      "/index.js": "import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 7,
    "title": "Project Setup",
    "description": "Environment Setup using Vite",
    "detailedExplanation": "## Project Setup (🟢 LEVEL 1 – REACT BASICS)\n\n### Introduction to Vite\nHistorically, Create React App (CRA) was the standard tool for setting up React projects. However, CRA is now deprecated and incredibly slow. The modern standard for setting up React projects is **Vite**.\n\nVite (French word for \"quick\", pronounced /vit/) is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:\n1. A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).\n2. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.\n\n### Setting up a React App with Vite\nTo create a new React project, open your terminal and run:\n\n```bash\nnpm create vite@latest my-react-app -- --template react\n```\n\nOnce the project is created, navigate into the directory and install the dependencies:\n```bash\ncd my-react-app\nnpm install\nnpm run dev\n```\n\n### Project Structure\nA typical Vite React project looks like this:\n- `index.html`: The main entry point. Notice the `<script type=\"module\" src=\"/src/main.jsx\"></script>` tag.\n- `src/main.jsx`: Where the React application is mounted to the DOM.\n- `src/App.jsx`: The root component of your application.\n- `package.json`: Contains metadata about the project, scripts (dev, build, preview), and dependencies.\n\n### Why Vite over CRA?\nVite serves source code over native ESM. This means the browser takes over part of the bundling job during development, resulting in near-instant server start times and incredibly fast hot module replacement, regardless of app size.",
    "practiceTasks": [
      {
        "task": "Initialize a Vite project locally"
      },
      {
        "task": "Install npm dependencies"
      }
    ],
    "codeExample": "// Inside src/main.jsx of a Vite project\nimport React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './App.jsx'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n)",
    "quizzes": [
      {
        "question": "Question 1: What is the modern standard tool for setting up React projects?",
        "options": [
          "Create React App",
          "Vite",
          "Webpack",
          "Babel"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What does the word 'Vite' mean in French?",
        "options": [
          "Light",
          "Fast/Quick",
          "React",
          "Bundle"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which command creates a Vite React project?",
        "options": [
          "npx create-react-app",
          "npm create vite@latest",
          "npm init react",
          "vite start"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What bundler does Vite use for production builds?",
        "options": [
          "Webpack",
          "Parcel",
          "Rollup",
          "Browserify"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What is HMR?",
        "options": [
          "Hot Module Replacement",
          "Hyper Markup React",
          "High Memory Render",
          "Huge Module Resolver"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 6: Why is Vite faster than CRA during development?",
        "options": [
          "It uses Webpack",
          "It serves source code over native ESM",
          "It compiles to WebAssembly",
          "It skips CSS loading"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Where is the React app typically mounted in a Vite project?",
        "options": [
          "index.html",
          "public/index.html",
          "src/main.jsx",
          "App.jsx"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 8: What file contains project scripts and dependencies?",
        "options": [
          "vite.config.js",
          "package.json",
          "index.html",
          "main.jsx"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Which script is usually used to start the Vite development server?",
        "options": [
          "npm start",
          "npm run dev",
          "npm run build",
          "npm serve"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What extension is recommended for React files containing JSX in Vite?",
        "options": [
          ".js",
          ".jsx",
          ".ts",
          ".react"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: Does Vite support TypeScript out of the box?",
        "options": [
          "Yes",
          "No",
          "Only with Webpack",
          "Only in production"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 12: What is the main entry point HTML file in a Vite project?",
        "options": [
          "public/index.html",
          "index.html in the project root",
          "src/index.html",
          "App.html"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: How does Vite handle CSS imports?",
        "options": [
          "Requires manual Webpack config",
          "Supports them out of the box",
          "CSS is not supported",
          "Only SCSS is supported"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: What tag is used in index.html to load the main React script in Vite?",
        "options": [
          "<script src='bundle.js'>",
          "<script type='module' src='/src/main.jsx'>",
          "<link rel='react'>",
          "<import react>"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: What does 'npm install' do?",
        "options": [
          "Starts the server",
          "Builds the app",
          "Installs dependencies listed in package.json",
          "Creates a new project"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 16: Which command builds the app for production?",
        "options": [
          "npm run dev",
          "npm run build",
          "npm start",
          "npm deploy"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: Create React App (CRA) is currently considered:",
        "options": [
          "The best tool available",
          "Deprecated and slow",
          "Only for enterprise",
          "Only for Vue"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 18: Vite was created by the founder of which other popular framework?",
        "options": [
          "React",
          "Vue",
          "Angular",
          "Svelte"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: What does React.StrictMode do?",
        "options": [
          "Throws errors for unsafe lifecycles",
          "Renders components twice in development",
          "Warns about legacy string ref API",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 20: Can Vite be used with frameworks other than React?",
        "options": [
          "No",
          "Yes (Vue, Svelte, etc.)",
          "Only Angular",
          "Only Vanilla JS"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Local Setup",
        "description": "Install Node.js on your machine, create a new React app using Vite, and start the development server."
      },
      {
        "title": "Assignment 2: Explore Structure",
        "description": "Look through the generated Vite project. Identify index.html, main.jsx, and App.jsx. Change the text in App.jsx and observe HMR in action."
      }
    ],
    "defaultFiles": {
      "/App.js": "export default function App() {\n  return <h2>Vite Setup Successful! ⚡</h2>;\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 8,
    "title": "JSX",
    "description": "Writing UI with JSX",
    "detailedExplanation": "## JSX (JavaScript XML) (🟢 LEVEL 1 – REACT BASICS)\n\n### What is JSX?\nJSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript files. React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.\n\n### Why JSX?\nInstead of artificially separating technologies by putting markup and logic in separate files (like traditional HTML and JS files), React separates *concerns* with loosely coupled units called \"components\" that contain both.\n\n### JSX Rules\n1. **Return a single root element**: To return multiple elements from a component, wrap them with a single parent tag. You can use a `<div>` or a Fragment `<></>`.\n2. **Close all the tags**: JSX requires tags to be explicitly closed: `<img />` instead of `<img>`.\n3. **camelCase all most things**: JSX turns into JavaScript, and attributes written in JSX become keys of JavaScript objects. Therefore, you must use camelCase for attributes. For example, `class` becomes `className`, and `tabindex` becomes `tabIndex`.\n\n### Embedding JavaScript in JSX\nYou can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`. This includes variables, function calls, and object properties.\n\n```jsx\nconst name = 'Josh Perez';\nconst element = <h1>Hello, {name}</h1>;\n```\n\n### JSX prevents Injection Attacks\nBy default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.",
    "practiceTasks": [
      {
        "task": "Embed Javascript expressions inside JSX"
      },
      {
        "task": "Use camelCase for HTML attributes"
      }
    ],
    "codeExample": "export default function Avatar() {\n  const user = {\n    name: 'Hedy Lamarr',\n    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',\n    imageSize: 90,\n  };\n\n  return (\n    <>\n      <h1>{user.name}</h1>\n      <img\n        className=\"avatar\"\n        src={user.imageUrl}\n        alt={'Photo of ' + user.name}\n        style={{\n          width: user.imageSize,\n          height: user.imageSize,\n          borderRadius: '50%'\n        }}\n      />\n    </>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What does JSX stand for?",
        "options": [
          "Java Syntax Extension",
          "JavaScript XML",
          "JSON Syntax XML",
          "JavaScript XHR"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Can browsers read JSX directly?",
        "options": [
          "Yes",
          "No, it must be compiled",
          "Only Chrome can",
          "Only Firefox can"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What compiles JSX down to standard JavaScript?",
        "options": [
          "Webpack",
          "Babel",
          "npm",
          "Node.js"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: How do you embed a JavaScript expression inside JSX?",
        "options": [
          "Using quotes ''",
          "Using parentheses ()",
          "Using curly braces {}",
          "Using square brackets []"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: Which of the following is a rule of JSX?",
        "options": [
          "Must return a single parent element",
          "All tags must be closed",
          "Attributes use camelCase",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 6: What is the JSX equivalent of the HTML 'class' attribute?",
        "options": [
          "class",
          "className",
          "classList",
          "cssClass"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is the JSX equivalent of the HTML 'for' attribute?",
        "options": [
          "for",
          "htmlFor",
          "labelFor",
          "reactFor"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: How do you write an inline style in JSX?",
        "options": [
          "style='color: red'",
          "style={color: red}",
          "style={{color: 'red'}}",
          "style=['color: red']"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: What is a React Fragment?",
        "options": [
          "An error handler",
          "A way to group a list of children without adding extra nodes to the DOM",
          "A styling component",
          "A database query"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What is the shorthand syntax for a Fragment?",
        "options": [
          "<Fragment>",
          "<//>",
          "<>",
          "<Wrap>"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 11: Are self-closing tags required for elements with no children in JSX?",
        "options": [
          "Yes (e.g., <img />)",
          "No (e.g., <img>)",
          "Only for custom components",
          "Only for HTML tags"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 12: JSX prevents which type of security vulnerability by default?",
        "options": [
          "SQL Injection",
          "XSS (Cross-Site Scripting)",
          "CSRF",
          "DDoS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: What does React do to values embedded in JSX before rendering?",
        "options": [
          "Executes them as code",
          "Escapes them to a string",
          "Ignores them",
          "Encrypts them"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: Can you use an if-statement inside JSX curly braces?",
        "options": [
          "Yes",
          "No, you must use expressions like ternaries",
          "Only if it returns a string",
          "Only in class components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: Which of the following is a valid JSX expression?",
        "options": [
          "<h1>{ 1 + 1 }</h1>",
          "<h1>{ if (true) return 2; }</h1>",
          "<h1>{ var x = 2; }</h1>",
          "<h1>{ for (let i=0; i<2; i++) }</h1>"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 16: In JSX, boolean attributes with no value provided default to:",
        "options": [
          "false",
          "undefined",
          "true",
          "null"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 17: Comments inside JSX are written as:",
        "options": [
          "// comment",
          "<!-- comment -->",
          "{/* comment */}",
          "/* comment */"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 18: JSX is strictly required to use React.",
        "options": [
          "True",
          "False, you can use React.createElement()",
          "True, since v16",
          "False, you can use plain HTML"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: Which attribute naming convention does JSX use?",
        "options": [
          "snake_case",
          "kebab-case",
          "camelCase",
          "PascalCase"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 20: When setting an event listener in JSX, how is it formatted?",
        "options": [
          "onclick",
          "onClick",
          "on-click",
          "clickListener"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: JSX Profile",
        "description": "Create a JSX component that displays a user profile card. Use a JavaScript object to store the user data and inject it into the JSX using curly braces."
      },
      {
        "title": "Assignment 2: Conditional JSX",
        "description": "Create a component that takes an 'isLoggedIn' variable. Use a ternary operator inside JSX to display 'Welcome Back' if true, or 'Please Log In' if false."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\n\nexport default function App() {\n  const language = \"React\";\n  const isAwesome = true;\n  return (\n    <div>\n      <h1>Hello {language}!</h1>\n      <p>Is JSX awesome? {isAwesome ? \"Yes!\" : \"No\"}</p>\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 9,
    "title": "Rendering Elements",
    "description": "React DOM Rendering",
    "detailedExplanation": "## Rendering Elements (🟢 LEVEL 1 – REACT BASICS)\n\n### What is an Element?\nElements are the smallest building blocks of React apps. An element describes what you want to see on the screen:\n```jsx\nconst element = <h1>Hello, world</h1>;\n```\n\nUnlike browser DOM elements, React elements are plain JavaScript objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.\n\n### Rendering an Element into the DOM\nLet’s say there is a `<div>` somewhere in your HTML file:\n```html\n<div id=\"root\"></div>\n```\nWe call this a “root” DOM node because everything inside it will be managed by React DOM.\n\nTo render a React element into a root DOM node, pass the DOM element to `ReactDOM.createRoot()`, then pass the React element to `root.render()`:\n```jsx\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nconst element = <h1>Hello, world</h1>;\nroot.render(element);\n```\n\n### Updating the Rendered Element\nReact elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.\n\nWith our knowledge so far, the only way to update the UI is to create a new element, and pass it to `root.render()`. (Note: In practice, most React apps only call `root.render()` once, and use state to update components).\n\n### React Only Updates What’s Necessary\nReact DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state. This reconciliation process is what makes React extremely fast.",
    "practiceTasks": [
      {
        "task": "Understand ReactDOM.createRoot"
      },
      {
        "task": "Understand React element immutability"
      }
    ],
    "codeExample": "import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst root = createRoot(document.getElementById('root'));\n\nfunction tick() {\n  const element = (\n    <div>\n      <h1>Hello, world!</h1>\n      <h2>It is {new Date().toLocaleTimeString()}.</h2>\n    </div>\n  );\n  root.render(element);\n}\n\n// In standard React apps, state is used instead of setInterval.\nsetInterval(tick, 1000);",
    "quizzes": [
      {
        "question": "Question 1: What is the smallest building block of a React application?",
        "options": [
          "Component",
          "Element",
          "Module",
          "Prop"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Are React elements mutable?",
        "options": [
          "Yes",
          "No, they are immutable",
          "Only in class components",
          "Only in development"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What is a React element?",
        "options": [
          "A plain JavaScript object",
          "An actual DOM node",
          "A CSS class",
          "A database record"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 4: Which package is responsible for rendering React elements to the browser DOM?",
        "options": [
          "react",
          "react-native",
          "react-dom",
          "react-router"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: In modern React (v18+), how do you create a root to render into?",
        "options": [
          "ReactDOM.render()",
          "ReactDOM.createRoot()",
          "React.mount()",
          "document.createRoot()"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: What happens if you pass a new element to root.render()?",
        "options": [
          "The entire DOM is destroyed and rebuilt",
          "React DOM compares the new element with the previous one and applies only necessary updates",
          "It throws an error",
          "It creates a new window"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is the ID of the div typically used as the React root in index.html?",
        "options": [
          "react-app",
          "app",
          "root",
          "main"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 8: If an element is immutable, how do React UIs update?",
        "options": [
          "By creating a new element and re-rendering",
          "By mutating the element using jQuery",
          "By refreshing the browser",
          "UIs cannot update in React"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: React's process of comparing the old and new Virtual DOM is called:",
        "options": [
          "Diffing/Reconciliation",
          "Rendering",
          "Compiling",
          "Transpiling"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: In a typical React app, how many times is root.render() called?",
        "options": [
          "Once per component",
          "Once per file",
          "Usually just once at the entry point",
          "Every time state changes"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 11: What is the difference between a React Element and a DOM Element?",
        "options": [
          "They are the same",
          "React elements are cheap JS objects; DOM elements are expensive browser objects",
          "DOM elements are JS objects; React elements are browser objects",
          "React elements are HTML"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: What method is called on the root object to display the element?",
        "options": [
          "root.display()",
          "root.show()",
          "root.render()",
          "root.mount()"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 13: Can you have multiple root DOM nodes in a single HTML page?",
        "options": [
          "Yes",
          "No",
          "Only if they use the same ID",
          "Only in React Native"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 14: What happens to elements inside the root DOM node when root.render() is called?",
        "options": [
          "They are kept alongside React elements",
          "They are replaced by the React elements",
          "They are moved to the head",
          "Nothing"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: Which statement creates a valid React Element?",
        "options": [
          "const el = <h1>Hi</h1>;",
          "const el = new ReactElement('h1', 'Hi');",
          "const el = document.createElement('h1');",
          "const el = React.createElement('h1', null, 'Hi');"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 16: JSX ultimately compiles down to calls to:",
        "options": [
          "document.createElement()",
          "React.createElement()",
          "innerHTML",
          "console.log()"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: Does React.StrictMode affect the production build?",
        "options": [
          "Yes, it slows it down",
          "No, it only runs in development",
          "Yes, it adds polyfills",
          "No, it is removed in development"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 18: What is passed as the first argument to ReactDOM.createRoot()?",
        "options": [
          "A React component",
          "A DOM element",
          "A string ID",
          "A callback function"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: If you change the text of an <h1> rendered by React, what does React update?",
        "options": [
          "The entire body",
          "The <h1> element and all its siblings",
          "Only the specific text node inside the <h1>",
          "The root div"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 20: Why is direct DOM manipulation (e.g., innerHTML) discouraged in React?",
        "options": [
          "It is illegal",
          "It breaks React's reconciliation and state synchronization",
          "It is too fast",
          "It causes syntax errors"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Tick Tock",
        "description": "Use setInterval to call root.render() every second with a new element containing the current time."
      },
      {
        "title": "Assignment 2: Multiple Roots",
        "description": "Create two separate div elements in HTML (root1 and root2). Render a different React component into each root."
      }
    ],
    "defaultFiles": {
      "/App.js": "export default function App() {\n  return <h2>Rendered via createRoot()</h2>;\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);"
    }
  },
  {
    "order": 10,
    "title": "Components",
    "description": "Functional Components",
    "detailedExplanation": "## Components (Functional) (🟢 LEVEL 1 – REACT BASICS)\n\n### What are Components?\nComponents let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called \"props\") and return React elements describing what should appear on the screen.\n\n### Functional Components\nThe simplest way to define a component is to write a JavaScript function:\n\n```jsx\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n\nThis function is a valid React component because it accepts a single \"props\" (which stands for properties) object argument with data and returns a React element. We call such components \"function components\" because they are literally JavaScript functions.\n\n### Rendering a Component\nPreviously, we only encountered React elements that represent DOM tags (like `<div />`). However, elements can also represent user-defined components:\n\n```jsx\nconst element = <Welcome name=\"Sara\" />;\n```\n\nWhen React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object (props).\n\n### Composing Components\nComponents can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.\n\n### Component Naming Convention\n**Always start component names with a capital letter.**\nReact treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires `Welcome` to be in scope.",
    "practiceTasks": [
      {
        "task": "Create your first functional component"
      },
      {
        "task": "Render a component inside another component"
      }
    ],
    "codeExample": "function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <Welcome name=\"Sara\" />\n      <Welcome name=\"Cahal\" />\n      <Welcome name=\"Edite\" />\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a React Component?",
        "options": [
          "A CSS file",
          "A JavaScript function that returns React elements",
          "A database table",
          "An HTML tag"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: How must a React component name start?",
        "options": [
          "With a lowercase letter",
          "With a capital letter",
          "With an underscore",
          "With a number"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What happens if a component name starts with a lowercase letter?",
        "options": [
          "It throws a syntax error",
          "React treats it as a standard HTML/DOM tag",
          "It works normally",
          "It is ignored"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What input does a functional component receive?",
        "options": [
          "An array of arguments",
          "A single 'props' object",
          "The DOM node",
          "The global state"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Which of the following is a valid functional component?",
        "options": [
          "function MyComp() { return <div />; }",
          "const MyComp = () => <div />;",
          "Both A and B",
          "Neither"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: Can a component render other components?",
        "options": [
          "Yes",
          "No",
          "Only if they are class components",
          "Only if they are in the same file"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 7: What is the primary benefit of using components?",
        "options": [
          "Reusability and separation of concerns",
          "Faster execution speed",
          "Smaller bundle size",
          "Database integration"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: Which component is typically at the top of the component tree?",
        "options": [
          "Index",
          "Root",
          "App",
          "Main"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: How do you use a component named 'Header' in JSX?",
        "options": [
          "{Header}",
          "Header()",
          "<Header />",
          "[Header]"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 10: Is it required to use the 'return' keyword in a functional component?",
        "options": [
          "Yes, unless using an arrow function with implicit return",
          "No, React auto-returns the last line",
          "Yes, always",
          "No, it returns undefined by default"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 11: What should a component return if you want it to render nothing?",
        "options": [
          "null",
          "false",
          "'' (empty string)",
          "Any of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 12: What is the difference between a Component and an Element?",
        "options": [
          "An Element is a description of UI; a Component is a function that returns Elements",
          "They are the exact same thing",
          "An Element is a function; a Component is an object",
          "Elements are CSS, Components are JS"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 13: Can you define a component inside another component?",
        "options": [
          "Yes, and it's recommended",
          "Yes, but it's a bad practice as it destroys and recreates the component on every render",
          "No, it causes a compilation error",
          "Only in class components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: How do you export a component so it can be used in other files?",
        "options": [
          "export default ComponentName;",
          "module.export = ComponentName;",
          "send ComponentName;",
          "export ComponentName;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 15: How do you import a default exported component named 'Button' from './Button.js'?",
        "options": [
          "import { Button } from './Button';",
          "import Button from './Button';",
          "require('./Button');",
          "load Button from './Button';"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: What is 'composition' in React?",
        "options": [
          "Combining CSS files",
          "Building complex UIs from smaller components",
          "Compiling JSX to JS",
          "Managing database state"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: Which of the following is NOT a good reason to create a new component?",
        "options": [
          "The code is used in multiple places",
          "The UI piece is complex and needs its own logic",
          "You want to add a single inline CSS style",
          "To make the parent component easier to read"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 18: Class components are considered:",
        "options": [
          "The modern standard",
          "Legacy, functional components with hooks are preferred",
          "Faster than functional components",
          "Required for API calls"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: What happens when you render <Welcome name='Sara' />?",
        "options": [
          "React calls the Welcome component with {name: 'Sara'} as props",
          "React creates a standard HTML <Welcome> tag",
          "React throws an error",
          "React calls Welcome() with no arguments"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: Can a functional component be an arrow function?",
        "options": [
          "Yes",
          "No",
          "Only if it doesn't take props",
          "Only if it doesn't return JSX"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Component Breakdown",
        "description": "Create a webpage layout with a Header, Sidebar, MainContent, and Footer component. Render them all inside the App component."
      },
      {
        "title": "Assignment 2: Reusable Button",
        "description": "Create a reusable Button component that accepts 'text' as a prop and renders a styled button."
      }
    ],
    "defaultFiles": {
      "/App.js": "function Profile() {\n  return <img src=\"https://i.imgur.com/MK3eW3As.jpg\" alt=\"Katherine Johnson\" />;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <h2>Amazing Scientists</h2>\n      <Profile />\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 11,
    "title": "Styling",
    "description": "CSS in React",
    "detailedExplanation": "## Styling (CSS in React) (🟢 LEVEL 1 – REACT BASICS)\n\n### How to Style React Components\nThere are several ways to apply styles to React components. The most common approaches are:\n\n### 1. Inline Styles\nIn React, inline styles are not specified as a string. Instead, they are specified with an object whose key is the camelCased version of the style name, and whose value is the style's value, usually a string.\n\n```jsx\nconst divStyle = {\n  color: 'blue',\n  backgroundColor: 'lightgray', // Note camelCase!\n  padding: '10px' // Value as a string\n};\n\nfunction StyledDiv() {\n  return <div style={divStyle}>Hello World!</div>;\n}\n```\n\n### 2. Normal CSS (Global or Component-Specific)\nYou can write regular CSS files and import them directly into your JavaScript files. Note that unless you use CSS Modules, these styles will be global.\n\n```css\n/* App.css */\n.my-button {\n  background-color: blue;\n  color: white;\n}\n```\n```jsx\n// App.jsx\nimport './App.css';\n\nfunction Button() {\n  return <button className=\"my-button\">Click Me</button>; // Note className!\n}\n```\n\n### 3. CSS Modules\nCSS Modules solve the global scope problem by automatically generating unique class names. Files must be named with `.module.css`.\n```css\n/* Button.module.css */\n.btn { color: red; }\n```\n```jsx\nimport styles from './Button.module.css';\nfunction Button() {\n  return <button className={styles.btn}>Click Me</button>;\n}\n```\n\n### 4. Utility-First Frameworks (like Tailwind CSS)\nMany modern React projects use Tailwind CSS, where you apply pre-existing utility classes directly in the JSX `className` attribute.",
    "practiceTasks": [
      {
        "task": "Apply inline styles using JavaScript objects"
      },
      {
        "task": "Apply CSS classes using className"
      }
    ],
    "codeExample": "import React from 'react';\nimport './styles.css'; // Assume this file exists\n\nexport default function StylingDemo() {\n  // Inline style object\n  const inlineStyle = {\n    padding: '20px',\n    border: '2px solid purple',\n    borderRadius: '8px',\n    marginTop: '20px'\n  };\n\n  return (\n    <div>\n      <h1 className=\"global-header\">Styled with External CSS</h1>\n      <div style={inlineStyle}>\n        Styled with Inline JavaScript Object\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: How do you apply a CSS class to a JSX element?",
        "options": [
          "class='my-class'",
          "className='my-class'",
          "css='my-class'",
          "styleClass='my-class'"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: How are inline styles written in React?",
        "options": [
          "As a CSS string",
          "As an array",
          "As a JavaScript object",
          "As HTML attributes"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: What is the correct way to write 'background-color' in a React inline style object?",
        "options": [
          "background-color",
          "backgroundColor",
          "bgColor",
          "Background-Color"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What does importing a standard CSS file in a React component do?",
        "options": [
          "Scopes the CSS to that component only",
          "Injects the CSS globally",
          "Converts it to inline styles",
          "Ignores the CSS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: What is a CSS Module?",
        "options": [
          "A CSS file where all class names are scoped locally by default",
          "A Node.js module for CSS parsing",
          "A global CSS framework",
          "A way to write CSS in JS"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 6: What is the naming convention for a CSS Module file?",
        "options": [
          "style.css",
          "style.module.css",
          "style.scss",
          "style.local.css"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: When using CSS Modules, how do you apply the class 'container'?",
        "options": [
          "className='container'",
          "className={styles.container}",
          "class={styles.container}",
          "className={container}"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Can you use numeric values for dimensions in inline styles?",
        "options": [
          "Yes, React automatically appends 'px' to many properties",
          "No, you must always provide a string with a unit",
          "Yes, it implies 'em'",
          "No, numbers throw errors"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: Which of the following is a valid inline style assignment?",
        "options": [
          "<div style='color: red'>",
          "<div style={{color: 'red'}}>",
          "<div style={color: 'red'}>",
          "<div style=color: red>"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What happens if you use 'class' instead of 'className' in JSX?",
        "options": [
          "The app crashes immediately",
          "It works, but React throws a warning in the console",
          "Nothing, it's perfectly fine",
          "The CSS is ignored completely"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: Tailwind CSS relies primarily on:",
        "options": [
          "CSS Modules",
          "Inline styles",
          "Utility classes applied via className",
          "Styled components"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 12: What is 'Styled Components'?",
        "options": [
          "A CSS framework like Bootstrap",
          "A library for writing CSS-in-JS using tagged template literals",
          "A built-in React feature",
          "A way to inline styles"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: In an inline style object, how do you write the value for padding?",
        "options": [
          "10",
          "'10px'",
          "Either A or B",
          "Neither"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 14: Why does JSX use className instead of class?",
        "options": [
          "Because class is a reserved keyword in JavaScript",
          "Because it looks better",
          "To differentiate from HTML",
          "Because of CSS conflicts"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 15: How do you combine multiple dynamic class names in React?",
        "options": [
          "className={class1 + ' ' + class2}",
          "className={`${class1} ${class2}`}",
          "Using a library like 'clsx' or 'classnames'",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 16: Are pseudo-classes (like :hover) supported in React inline styles?",
        "options": [
          "Yes",
          "No",
          "Only on links",
          "Only in class components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: If you need hover states, which approach should you use?",
        "options": [
          "Inline styles",
          "External CSS classes",
          "CSS Modules",
          "B or C"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 18: Which styling approach ensures zero risk of class name collisions globally?",
        "options": [
          "Standard CSS",
          "CSS Modules",
          "Inline Styles",
          "Both B and C"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 19: How do you conditionally apply a style class?",
        "options": [
          "className={isActive ? 'active' : ''}",
          "className={isActive && 'active'}",
          "Both are valid (though the second might output 'false' as a string if not careful)",
          "You cannot conditionally apply classes"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: What is the downside of using inline styles for everything?",
        "options": [
          "No pseudo-classes/media queries",
          "Hard to maintain",
          "Performance overhead for large apps",
          "All of the above"
        ],
        "correctAnswer": 3
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Styling Methods",
        "description": "Create three buttons. Style the first with inline styles, the second with a standard CSS class, and the third with a CSS Module."
      },
      {
        "title": "Assignment 2: Conditional Styling",
        "description": "Create a 'Toggle' button. When clicked, toggle the background color between green and red using conditional inline styles."
      }
    ],
    "defaultFiles": {
      "/App.js": "import './styles.css';\n\nexport default function App() {\n  return (\n    <div className=\"container\">\n      <h2 style={{ color: '#3b82f6' }}>Styling in React</h2>\n      <button className=\"btn\">Click Me</button>\n    </div>\n  );\n}",
      "/styles.css": ".container {\n  padding: 20px;\n  background: #1e1e1e;\n  border-radius: 8px;\n}\n.btn {\n  padding: 10px 20px;\n  background: #10b981;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 12,
    "title": "Props",
    "description": "Passing Data Between Components",
    "detailedExplanation": "## Props (Passing Data) (🟢 LEVEL 1 – REACT BASICS)\n\n### What are Props?\n\"Props\" is a special keyword in React, which stands for properties and is being used for passing data from one component to another. \n\nProps are the **inputs** to a component. They are single values or objects containing a set of values that are passed to Components on creation using a naming convention similar to HTML-tag attributes.\n\n### Data Flow is Unidirectional\nIn React, data flows in one direction: from parent to child. This is known as \"top-down\" or \"unidirectional\" data flow. A child component can never pass data directly back up to a parent via props (though it can call a function provided by the parent via props).\n\n### Props are Read-Only\nWhether you declare a component as a function or a class, **it must never modify its own props**.\n\nConsider this sum function:\n```js\nfunction sum(a, b) {\n  return a + b;\n}\n```\nSuch functions are called \"pure\" because they do not attempt to change their inputs, and always return the same result for the same inputs. **All React components must act like pure functions with respect to their props.**\n\n### How to Pass and Receive Props\n**Parent Component:** passes props as attributes.\n```jsx\nfunction App() {\n  return <Greeting name=\"Alice\" age={25} isStudent={true} />;\n}\n```\n\n**Child Component:** receives props as an object.\n```jsx\nfunction Greeting(props) {\n  return <p>Hello {props.name}, you are {props.age} years old.</p>;\n}\n```\n\n### Destructuring Props\nIt is very common to destructure the props object directly in the function signature for cleaner code:\n```jsx\nfunction Greeting({ name, age }) {\n  return <p>Hello {name}, you are {age} years old.</p>;\n}\n```\n\n### The `children` Prop\nEvery component has access to a special prop called `children`, which contains whatever is placed between the opening and closing tags of the component.",
    "practiceTasks": [
      {
        "task": "Pass strings, numbers, and booleans as props"
      },
      {
        "task": "Destructure props in the function signature"
      }
    ],
    "codeExample": "// Parent Component\nexport default function App() {\n  return (\n    <div>\n      <UserCard name=\"John Doe\" role=\"Admin\" />\n      <UserCard name=\"Jane Smith\" role=\"Editor\" />\n    </div>\n  );\n}\n\n// Child Component (Destructuring props)\nfunction UserCard({ name, role }) {\n  return (\n    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>\n      <h3>{name}</h3>\n      <p>Role: {role}</p>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What does 'props' stand for in React?",
        "options": [
          "Proportions",
          "Properties",
          "Prototypes",
          "Proposals"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: How does data flow in React?",
        "options": [
          "Bottom-up",
          "Bidirectional",
          "Top-down (Unidirectional)",
          "Randomly"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: Can a component modify its own props?",
        "options": [
          "Yes",
          "No, props are read-only",
          "Only in class components",
          "Only if passed as an object"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: How do you pass a number '42' as a prop named 'age'?",
        "options": [
          "age='42'",
          "age=42",
          "age={42}",
          "age-[42]"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: In the component signature `function Avatar(props)`, what is `props`?",
        "options": [
          "An array of attributes",
          "A string",
          "A JavaScript object containing the attributes",
          "A React Element"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: What is a common ES6 technique used to extract variables from the props object?",
        "options": [
          "Spread operator",
          "Destructuring assignment",
          "Arrow functions",
          "Template literals"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Which is the correct way to destructure props directly in the parameters?",
        "options": [
          "function Card([title, body])",
          "function Card({title, body})",
          "function Card(props.title, props.body)",
          "function Card(title, body)"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What is the special prop that allows you to pass elements directly inside a component's tags?",
        "options": [
          "props.inner",
          "props.content",
          "props.children",
          "props.elements"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: Given `<Button>Click Me</Button>`, how does the Button component access 'Click Me'?",
        "options": [
          "props.text",
          "props.value",
          "props.children",
          "props.content"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 10: Can you pass a function as a prop?",
        "options": [
          "Yes",
          "No",
          "Only if it is an arrow function",
          "Only if it is named 'onClick'"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 11: What happens if you pass a prop but the child component doesn't use it?",
        "options": [
          "React throws an error",
          "The app crashes",
          "Nothing, the prop is simply ignored",
          "It is rendered as an HTML attribute"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 12: If you omit the value of a boolean prop (e.g., `<Video autoPlay />`), what does it default to?",
        "options": [
          "true",
          "false",
          "undefined",
          "null"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 13: What is defaultProps used for?",
        "options": [
          "Defining the CSS for a component",
          "Setting default values for props if none are provided",
          "Deleting props",
          "Validating prop types"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: How are props accessed in a Class component?",
        "options": [
          "this.props",
          "props",
          "super.props",
          "this.state"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 15: React components must act like ____ functions with respect to their props.",
        "options": [
          "Impure",
          "Async",
          "Pure",
          "Recursive"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 16: Can a child component pass data back to a parent using ONLY standard variables?",
        "options": [
          "Yes",
          "No, data only flows down. (Callbacks are required for upward communication)",
          "Yes, via Context",
          "Yes, by mutating props"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: What library is historically used to enforce type checking on props?",
        "options": [
          "TypeScript",
          "PropTypes",
          "Flow",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 18: Is `<Profile user={userObject} />` a valid way to pass an object?",
        "options": [
          "Yes",
          "No",
          "Only if userObject is a string",
          "Only if spread syntax is used"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 19: How can you pass all properties of an object `person` as individual props?",
        "options": [
          "<Profile {person} />",
          "<Profile ...person />",
          "<Profile {...person} />",
          "<Profile props=person />"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 20: What happens if a parent component re-renders?",
        "options": [
          "All child components are destroyed",
          "All child components receive new props and re-render",
          "Child components freeze",
          "State is reset"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Product Card",
        "description": "Create a Product component that accepts title, price, and description as props. Render three different products in your App."
      },
      {
        "title": "Assignment 2: Children Prop Wrapper",
        "description": "Create a 'CardWrapper' component that applies a border and padding to whatever is passed inside its opening and closing tags using the props.children property."
      }
    ],
    "defaultFiles": {
      "/App.js": "function Badge({ text, color }) {\n  return <span style={{ background: color, padding: '4px 8px', borderRadius: '4px' }}>{text}</span>;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <h2>Props Example</h2>\n      <Badge text=\"New!\" color=\"lightgreen\" />\n      <Badge text=\"Updated\" color=\"lightblue\" />\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 13,
    "title": "State",
    "description": "useState Hook",
    "detailedExplanation": "## State – useState Hook (🟡 LEVEL 2 – CORE REACT)\n\n### What is State?\nState is data that changes over time within a component. While props are passed down from a parent and are read-only, **state is managed entirely within the component itself**. \n\nWhen state changes, React automatically re-renders the component to ensure the UI stays synchronized with the latest data. \n\n### The `useState` Hook\nIn functional components, you manage state using the `useState` Hook. A Hook is a special function that lets you \"hook into\" React features.\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\n### Key Concepts of `useState`:\n1. **Initialization**: `useState(0)` initializes the state variable `count` to `0`.\n2. **Destructuring**: `useState` returns an array with two elements. We use array destructuring to assign them to variables: the current state (`count`) and the function that updates it (`setCount`).\n3. **Immutability**: You must *never* mutate state directly (e.g., `count = 5`). You must always use the setter function (`setCount(5)`).\n4. **Asynchronous Updates**: State updates in React are asynchronous. Calling `setCount(1)` does not instantly change `count`. It schedules an update for the next render.\n\n### Previous State Updates\nIf your new state depends on the previous state, you should pass a function to the setter instead of a direct value:\n```jsx\nsetCount(prevCount => prevCount + 1);\n```\nThis ensures you are always working with the most up-to-date value, especially if multiple updates happen quickly.",
    "practiceTasks": [
      {
        "task": "Initialize state using the useState hook"
      },
      {
        "task": "Update state based on previous state values"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div style={{ textAlign: 'center', padding: '20px' }}>\n      <h2>Counter: {count}</h2>\n      <button \n        onClick={() => setCount(count + 1)}\n        style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}\n      >\n        Increment\n      </button>\n      <button \n        onClick={() => setCount(0)}\n        style={{ marginLeft: '10px', padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}\n      >\n        Reset\n      </button>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is State in React?",
        "options": [
          "CSS properties",
          "Data that changes over time and triggers re-renders",
          "Read-only data passed from a parent",
          "Database connections"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Which Hook is used to add state to a functional component?",
        "options": [
          "useEffect",
          "useReducer",
          "useState",
          "useContext"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: What does useState return?",
        "options": [
          "A string",
          "An object",
          "An array with two elements",
          "A boolean"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: How do you correctly update state in React?",
        "options": [
          "state.value = 'new'",
          "this.state.value = 'new'",
          "Using the setter function returned by useState",
          "You cannot update state"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What happens immediately when you call a state setter function?",
        "options": [
          "The DOM updates instantly",
          "React schedules a re-render",
          "The browser reloads",
          "The component is unmounted"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: If you have `const [age, setAge] = useState(20);`, what is the initial value of age?",
        "options": [
          "undefined",
          "0",
          "20",
          "null"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 7: Why should you not mutate state directly (e.g., state.count = 5)?",
        "options": [
          "It causes an infinite loop",
          "It throws a compilation error",
          "React will not know the state changed and won't trigger a re-render",
          "It is illegal in JavaScript"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 8: When should you pass a function to a state setter (e.g., setCount(prev => prev + 1))?",
        "options": [
          "Always",
          "Never",
          "When the new state depends on the previous state",
          "When the component mounts"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: Can a component have multiple useState hooks?",
        "options": [
          "Yes",
          "No",
          "Only if they are numbers",
          "Only in class components"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: What is the difference between props and state?",
        "options": [
          "They are the same",
          "Props are mutable, state is immutable",
          "Props are passed from parents (read-only), state is managed internally (mutable)",
          "State is for CSS, props are for data"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 11: Is state preserved if the component is removed from the DOM?",
        "options": [
          "Yes, always",
          "No, state is destroyed when the component unmounts",
          "Only if you use Redux",
          "Only if stored in localStorage"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: Which JavaScript syntax is used to extract the two values from useState?",
        "options": [
          "Object destructuring",
          "Array destructuring",
          "Spread operator",
          "Rest parameters"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: Can you put useState inside an if-statement?",
        "options": [
          "Yes",
          "No, Hooks must be called at the top level",
          "Only if it is true",
          "Only in development"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: What is the initial state if you call useState() without arguments?",
        "options": [
          "0",
          "null",
          "undefined",
          "false"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 15: Which data types can be stored in state?",
        "options": [
          "Strings and numbers only",
          "Objects and arrays only",
          "Any JavaScript data type",
          "Only primitive types"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 16: If two components use the same custom Hook that calls useState, do they share state?",
        "options": [
          "Yes",
          "No, they get completely independent state",
          "Only if they are siblings",
          "Only if they are parent-child"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: What happens if you update state with the exact same value it currently holds?",
        "options": [
          "React re-renders anyway",
          "React bails out and skips the re-render",
          "React throws a warning",
          "The app crashes"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 18: How do you update an object in state?",
        "options": [
          "By mutating the object directly",
          "By creating a new object copy using the spread operator and updating the copy",
          "By pushing to it",
          "You cannot put objects in state"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: What happens to state during a hard browser refresh?",
        "options": [
          "It persists",
          "It resets to the initial value",
          "It throws an error",
          "It is saved to cookies"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: React state updates are:",
        "options": [
          "Synchronous",
          "Asynchronous / Batched",
          "Instant",
          "Blocked by the main thread"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Counter App",
        "description": "Create a Counter component with an increment, decrement, and reset button. Prevent the counter from going below zero."
      },
      {
        "title": "Assignment 2: Text Input State",
        "description": "Create a text input field. Use state to track the text being typed and display it live below the input."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { useState } from 'react';\n\nexport default function App() {\n  const [isVisible, setIsVisible] = useState(true);\n\n  return (\n    <div>\n      <button onClick={() => setIsVisible(!isVisible)}>\n        Toggle Message\n      </button>\n      {isVisible && <p>Hello! I am a stateful component.</p>}\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 14,
    "title": "Event Handling",
    "description": "Handling User Events",
    "detailedExplanation": "## Event Handling (🟡 LEVEL 2 – CORE REACT)\n\n### React Events\nHandling events in React is very similar to handling events on DOM elements in Vanilla JS, but with a few syntactic differences:\n\n1. React events are named using **camelCase**, rather than lowercase. (e.g., `onClick` instead of `onclick`).\n2. With JSX you pass a **function** as the event handler, rather than a string.\n\n```jsx\n// Vanilla JS:\n// <button onclick=\"activateLasers()\">\n\n// React:\n<button onClick={activateLasers}>\n  Activate Lasers\n</button>\n```\n\n### The Event Object\nReact passes a \"SyntheticEvent\" to your event handlers. This is a cross-browser wrapper around the browser's native event. It has the same interface as the native event, including `e.preventDefault()` and `e.stopPropagation()`.\n\n### Preventing Default Behavior\nYou cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly.\n\n```jsx\nfunction Form() {\n  function handleSubmit(e) {\n    e.preventDefault();\n    console.log('You clicked submit.');\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n```\n\n### Passing Arguments to Event Handlers\nInside a loop, it is common to want to pass an extra parameter to an event handler. You can do this using an inline arrow function:\n\n```jsx\n<button onClick={(e) => deleteRow(id, e)}>Delete Row</button>\n```\nOr using `bind`:\n```jsx\n<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> // Common in older class components\n```\n\n### Common Events\n- **Mouse**: `onClick`, `onMouseEnter`, `onMouseLeave`\n- **Form**: `onChange`, `onSubmit`\n- **Keyboard**: `onKeyDown`, `onKeyUp`",
    "practiceTasks": [
      {
        "task": "Attach an onClick handler to a button"
      },
      {
        "task": "Prevent default form submission"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function EventDemo() {\n  const [coords, setCoords] = useState({ x: 0, y: 0 });\n\n  const handleMouseMove = (e) => {\n    setCoords({ x: e.clientX, y: e.clientY });\n  };\n\n  return (\n    <div \n      onMouseMove={handleMouseMove}\n      style={{ height: '300px', background: '#1e1e1e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}\n    >\n      <h3>Move your mouse here: X: {coords.x}, Y: {coords.y}</h3>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: How are React events named?",
        "options": [
          "lowercase (onclick)",
          "camelCase (onClick)",
          "kebab-case (on-click)",
          "PascalCase (OnClick)"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is passed to an event handler in React?",
        "options": [
          "A string",
          "A function",
          "A SyntheticEvent object",
          "An HTML element"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: How do you prevent the default behavior of a form submission in React?",
        "options": [
          "return false;",
          "e.preventDefault();",
          "e.stopPropagation();",
          "Both A and B"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What is the correct syntax for an onClick handler?",
        "options": [
          "onClick='handleClick'",
          "onClick={handleClick()}",
          "onClick={handleClick}",
          "onClick={() => handleClick()}"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What happens if you write `onClick={handleClick()}` in JSX?",
        "options": [
          "It works normally",
          "The function executes immediately when the component renders, instead of waiting for a click",
          "It throws a syntax error",
          "It is ignored"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: What is a SyntheticEvent in React?",
        "options": [
          "A fake event used only for testing",
          "A cross-browser wrapper around the browser's native event",
          "A styling library",
          "A server-side event"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: How do you pass an argument 'id' to an event handler?",
        "options": [
          "onClick={deleteItem(id)}",
          "onClick={(e) => deleteItem(id, e)}",
          "onClick={deleteItem.bind(id)}",
          "Both B and C"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 8: Which event triggers when an input field's value changes?",
        "options": [
          "onClick",
          "onSubmit",
          "onChange",
          "onHover"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: Can you attach an event handler directly to a custom component (e.g. `<MyButton onClick={...} />`)?",
        "options": [
          "Yes, it attaches to the root DOM node automatically",
          "No, custom components don't understand DOM events unless you pass it as a prop and attach it manually inside",
          "Yes, but only in class components",
          "No, it is illegal"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Which event handles keyboard key presses?",
        "options": [
          "onMouseOver",
          "onChange",
          "onKeyDown",
          "onInput"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 11: What does e.stopPropagation() do?",
        "options": [
          "Stops the default browser action",
          "Stops the event from bubbling up the DOM tree",
          "Stops the component from rendering",
          "Deletes the event object"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: Are React events attached to the specific DOM nodes you render?",
        "options": [
          "Yes, exactly like Vanilla JS",
          "No, React uses event delegation and attaches one handler to the document root",
          "Yes, but only for buttons",
          "No, they are attached to the Window object"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: Which event fires when the mouse moves over an element?",
        "options": [
          "onMouseEnter",
          "onMouseLeave",
          "onClick",
          "onSubmit"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 14: If you need access to the event object in an inline function, how do you write it?",
        "options": [
          "onClick={() => handleClick(e)}",
          "onClick={(event) => handleClick(event)}",
          "onClick={handleClick(e)}",
          "onClick={(e)}"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: Why does React use SyntheticEvents?",
        "options": [
          "For better performance",
          "To ensure events work identically across all browsers",
          "To enable server-side rendering",
          "To bypass the DOM entirely"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: Which event is typically attached to a <form> tag?",
        "options": [
          "onClick",
          "onChange",
          "onSubmit",
          "onLoad"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 17: How do you capture an event in the capture phase rather than the bubble phase?",
        "options": [
          "Use onClickCapture instead of onClick",
          "Pass a boolean flag",
          "Use e.capture()",
          "You cannot capture events in React"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: What happens to SyntheticEvent objects after the event callback has been invoked? (Pre-React 17)",
        "options": [
          "They are kept in memory forever",
          "They are pooled and nullified for performance",
          "They are sent to the server",
          "They are converted to native events"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: What type of component can have event handlers?",
        "options": [
          "Only class components",
          "Only functional components",
          "Both class and functional components",
          "Only higher-order components"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 20: How can you get the value of an input field when an onChange event fires?",
        "options": [
          "e.target.value",
          "e.value",
          "e.target",
          "e.input.value"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Click Tracker",
        "description": "Create a button that tracks its own clicks. Use onClick to update state and display the total clicks."
      },
      {
        "title": "Assignment 2: Mouse Coordinates",
        "description": "Create a component that tracks the X and Y coordinates of the mouse on the screen using the onMouseMove event."
      }
    ],
    "defaultFiles": {
      "/App.js": "export default function App() {\n  function handleClick(e) {\n    alert('Button clicked!');\n  }\n\n  return (\n    <div>\n      <h2>Event Handling</h2>\n      <button onClick={handleClick}>Click Me</button>\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 15,
    "title": "Conditional Rendering",
    "description": "Dynamic UI Logic",
    "detailedExplanation": "## Conditional Rendering (🟡 LEVEL 2 – CORE REACT)\n\n### What is Conditional Rendering?\nIn React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application. Conditional rendering in React works the same way conditions work in JavaScript. \n\n### 1. The `if` Statement\nThe simplest way to conditionally render is to use an `if` statement to return different elements based on a condition.\n```jsx\nfunction Greeting(props) {\n  if (props.isLoggedIn) {\n    return <h1>Welcome back!</h1>;\n  }\n  return <h1>Please sign in.</h1>;\n}\n```\n\n### 2. Logical && Operator\nYou may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical `&&` operator. It’s useful for conditionally rendering an element if a condition is true, and doing nothing otherwise.\n\n```jsx\nfunction Mailbox(props) {\n  const unreadMessages = props.unreadMessages;\n  return (\n    <div>\n      <h1>Hello!</h1>\n      {unreadMessages.length > 0 &&\n        <h2>You have {unreadMessages.length} unread messages.</h2>\n      }\n    </div>\n  );\n}\n```\n*Warning: If the condition evaluates to `0`, React will render `0` instead of ignoring it.*\n\n### 3. Ternary Operator (Condition ? True : False)\nAnother method for conditionally rendering elements inline is to use the JavaScript conditional operator `condition ? true : false`.\n\n```jsx\nreturn (\n  <div>\n    {isLoggedIn ? <LogoutButton /> : <LoginButton />}\n  </div>\n);\n```\n\n### Preventing Component from Rendering\nIn rare cases, you might want a component to hide itself even though it was rendered by another component. To do this, return `null` instead of its render output. Returning `null` does not affect the firing of the component's lifecycle methods.",
    "practiceTasks": [
      {
        "task": "Use the ternary operator to toggle UI elements"
      },
      {
        "task": "Use the && operator to hide/show UI elements"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function LoginStatus() {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n\n  return (\n    <div style={{ padding: '20px', border: '1px solid gray' }}>\n      <h2>{isLoggedIn ? 'Welcome User!' : 'Please log in to continue.'}</h2>\n      \n      {/* Ternary Operator */}\n      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>\n        {isLoggedIn ? 'Log Out' : 'Log In'}\n      </button>\n\n      {/* Logical && */}\n      {isLoggedIn && <p style={{ color: 'green' }}>✅ You have full access.</p>}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is conditional rendering in React?",
        "options": [
          "Using CSS to hide elements",
          "Rendering different UI elements based on state or props",
          "A way to loop through arrays",
          "A performance optimization"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Which operator is used to render an element ONLY if a condition is true?",
        "options": [
          "||",
          "&&",
          "?",
          "==="
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What does `condition ? <A /> : <B />` do?",
        "options": [
          "Renders A if true, B if false",
          "Renders A and B",
          "Throws an error",
          "Renders A if false, B if true"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 4: Can you use an `if` statement directly inside JSX curly braces `{}`?",
        "options": [
          "Yes",
          "No, you must use expressions like ternaries or &&",
          "Only in class components",
          "Only if it returns a string"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: What should a component return to hide itself completely?",
        "options": [
          "false",
          "undefined",
          "null",
          "'' (empty string)"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: What is the danger of using `length && <Component />` if length is 0?",
        "options": [
          "It will crash",
          "React will render the number '0' on the screen",
          "It will render the Component anyway",
          "It will throw a warning"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: How can you fix the `0 && <Component />` issue?",
        "options": [
          "Use length > 0 && <Component />",
          "Use !!length && <Component />",
          "Use a ternary: length ? <Component /> : null",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 8: Which method is best for assigning different components to a variable before the return statement?",
        "options": [
          "Logical &&",
          "Ternary Operator",
          "Standard if/else statements",
          "Switch statements"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: Does returning `null` from a component prevent it from mounting?",
        "options": [
          "Yes",
          "No, it still mounts, it just renders empty output",
          "Only if it has no state",
          "Only in production"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What does `true && 'Hello'` evaluate to in JavaScript (and React)?",
        "options": [
          "true",
          "'Hello'",
          "undefined",
          "false"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: What does `false && 'Hello'` evaluate to in JavaScript?",
        "options": [
          "true",
          "'Hello'",
          "false",
          "null"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 12: How does React handle boolean values (true, false) when rendered in JSX?",
        "options": [
          "It converts them to strings",
          "It ignores them (renders nothing)",
          "It throws an error",
          "It renders 'true' or 'false'"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: Can you use a switch statement for conditional rendering?",
        "options": [
          "Yes, usually outside of the JSX return statement",
          "No, switch statements are banned in React",
          "Yes, directly inside JSX curly braces",
          "Only in Redux"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 14: What is the ternary operator syntax?",
        "options": [
          "condition && true || false",
          "condition ? true : false",
          "if (condition) true else false",
          "condition ! true ? false"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: If `user` is null, what will `{user ? user.name : 'Guest'}` render?",
        "options": [
          "An error",
          "undefined",
          "'Guest'",
          "null"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 16: What happens if you use the logical OR `||` operator? e.g., `{name || 'Anonymous'}`",
        "options": [
          "It renders name if truthy, otherwise 'Anonymous'",
          "It always renders 'Anonymous'",
          "It throws an error",
          "It renders both"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 17: Is it possible to conditionally render attributes on an element? (e.g. disabled={isDisabled})",
        "options": [
          "Yes",
          "No",
          "Only for style attributes",
          "Only for custom components"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: Which approach is most readable for complex, multi-branch conditional rendering?",
        "options": [
          "Nested ternaries",
          "If-else blocks returning different JSX before the main return",
          "Multiple && operators",
          "None of the above"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: Nested ternaries (condition1 ? A : condition2 ? B : C) are generally considered:",
        "options": [
          "Best practice",
          "Good for performance",
          "Hard to read and should often be avoided",
          "The only way to write conditions"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 20: React ignores which of the following values when rendering?",
        "options": [
          "Numbers and strings",
          "null, undefined, true, false",
          "Arrays and Objects",
          "Functions"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Admin Dashboard",
        "description": "Create a component that receives a 'role' prop. If the role is 'admin', render an AdminPanel component. Otherwise, render a UserProfile component."
      },
      {
        "title": "Assignment 2: Loading Spinner",
        "description": "Create a state variable 'isLoading'. Use conditional rendering to show a 'Loading...' text while true, and 'Content Loaded' when false. Add a button to toggle it."
      }
    ],
    "defaultFiles": {
      "/App.js": "export default function App() {\n  const isLoading = true;\n  return (\n    <div>\n      {isLoading ? <p>Loading data...</p> : <p>Data loaded successfully!</p>}\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 16,
    "title": "Lists & Keys",
    "description": "Rendering Lists",
    "detailedExplanation": "## Lists and Keys (🟡 LEVEL 2 – CORE REACT)\n\n### Rendering Multiple Components\nIn React, you can build collections of elements and include them in JSX using curly braces `{}`. \nThe standard way to transform arrays of data into arrays of React elements is using the JavaScript `map()` function.\n\n```jsx\nconst numbers = [1, 2, 3, 4, 5];\nconst listItems = numbers.map((number) =>\n  <li>{number}</li>\n);\n\nreturn <ul>{listItems}</ul>;\n```\n\n### Keys\nA \"key\" is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.\n\n```jsx\nconst todos = [{id: 1, text: 'Wash car'}, {id: 2, text: 'Buy milk'}];\nconst todoItems = todos.map((todo) =>\n  <li key={todo.id}>\n    {todo.text}\n  </li>\n);\n```\n\n### Rules of Keys:\n1. **Keys must be unique among siblings**: They don't need to be globally unique, just unique among the array elements.\n2. **Keys should be stable**: Avoid using `Math.random()` or the array index (if the list can reorder) as keys. If an item's key changes, React will destroy and recreate the component, hurting performance and losing state.\n3. **Use IDs from your data**: The best pick for a key is a unique ID from your database.\n4. **Index as a last resort**: Only use the array index as a key if the list is static, never reordered, and has no IDs.\n\n### Where to put the key?\nA good rule of thumb is that elements inside the `map()` call need keys. If you extract a `ListItem` component, the key belongs on the `<ListItem />` tag inside the array mapping, not on the `<li>` inside the component itself.",
    "practiceTasks": [
      {
        "task": "Render a list of elements using array.map"
      },
      {
        "task": "Assign unique keys to mapped elements"
      }
    ],
    "codeExample": "import React from 'react';\n\nexport default function UserList() {\n  const users = [\n    { id: 'u1', name: 'Alice' },\n    { id: 'u2', name: 'Bob' },\n    { id: 'u3', name: 'Charlie' }\n  ];\n\n  return (\n    <div>\n      <h2>User Directory</h2>\n      <ul>\n        {users.map(user => (\n          // The key must be on the outermost element returned from map\n          <li key={user.id} style={{ padding: '5px', listStyleType: 'square' }}>\n            {user.name} (ID: {user.id})\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: Which array method is most commonly used to render lists in React?",
        "options": [
          "filter()",
          "reduce()",
          "map()",
          "forEach()"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: What special attribute must be given to elements generated from an array?",
        "options": [
          "id",
          "index",
          "key",
          "ref"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: Why does React need keys?",
        "options": [
          "To style the elements differently",
          "To track which items have changed, been added, or removed for performance",
          "To connect to a database",
          "To validate the data type"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What makes an ideal key?",
        "options": [
          "A unique, stable ID from your data",
          "Math.random()",
          "The array index",
          "The current timestamp"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: Why is using the array index as a key sometimes bad?",
        "options": [
          "It throws a syntax error",
          "If the list reorders or items are deleted, React can get confused and map state to the wrong items",
          "It uses too much memory",
          "It is bad practice in JavaScript"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: When is it acceptable to use the array index as a key?",
        "options": [
          "Never",
          "Always",
          "When the list is static, never changes, and has no IDs",
          "When fetching data from an API"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 7: Do keys need to be globally unique across the entire application?",
        "options": [
          "Yes",
          "No, they only need to be unique among their sibling elements",
          "Only if using Redux",
          "Only if rendering custom components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Where should the key attribute be placed?",
        "options": [
          "Inside the component definition",
          "On the outermost element returned by the map() call",
          "On the root div of the App",
          "In the state object"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: What happens if you forget to add a key to a list item?",
        "options": [
          "The app crashes",
          "React throws a warning in the console but still renders the list",
          "The items render twice",
          "The items become invisible"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Are keys passed as props to the child component? (Can you access props.key?)",
        "options": [
          "Yes",
          "No, React consumes the key internally. You cannot access props.key.",
          "Only in class components",
          "Only if you use TypeScript"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: If you need the same value as the key inside the component, what should you do?",
        "options": [
          "Access this.props.key",
          "Pass it explicitly as a different prop (e.g., id={item.id})",
          "Read it from the DOM",
          "It is impossible"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: What happens if two elements in the same list have the same key?",
        "options": [
          "React merges them into one",
          "React throws a warning and may render incorrectly or behave unpredictably",
          "It improves performance",
          "The app crashes"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: If a key changes on an element, what does React do?",
        "options": [
          "It updates the CSS",
          "It destroys the old component instance and creates a completely new one",
          "It ignores the change",
          "It throws an error"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: How can you render a list of objects like `{ id: 1, name: 'A' }`?",
        "options": [
          "Use a for loop inside JSX",
          "Convert the objects to strings",
          "Use map to return JSX for each object",
          "You cannot render objects"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 15: Which statement correctly renders a list of items?",
        "options": [
          "{items.map(item => <li key={item.id}>{item.name}</li>)}",
          "{items.forEach(item => <li key={item.id}>{item.name}</li>)}",
          "{items.filter(item => <li key={item.id}>{item.name}</li>)}",
          "{items.reduce(item => <li key={item.id}>{item.name}</li>)}"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 16: Can you use template literals inside the key? (e.g., `key={`item-${item.id}`}`)",
        "options": [
          "Yes",
          "No",
          "Only if it returns a number",
          "Only if it returns a boolean"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 17: What does map() return that makes it suitable for JSX?",
        "options": [
          "A new array of JSX elements",
          "undefined",
          "A single string",
          "A boolean"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: If you extract a <ListItem /> component, does the key go on the <li> inside ListItem, or on the <ListItem /> tag inside map?",
        "options": [
          "On the <li>",
          "On the <ListItem />",
          "On both",
          "Neither"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: Why shouldn't you use `Math.random()` as a key?",
        "options": [
          "Because keys must be strings",
          "Because the key will change on every render, causing React to unnecessarily destroy and recreate the DOM node",
          "Because it generates too long numbers",
          "Because it is slow"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: Does React recommend rendering lists using `for` loops instead of `map()`?",
        "options": [
          "Yes, it is faster",
          "No, `map()` is the declarative and preferred approach in JSX",
          "It doesn't matter",
          "Only in Next.js"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Render an Array",
        "description": "Create an array of your favorite movies (objects with an id and title). Use map() to render them into an ordered list."
      },
      {
        "title": "Assignment 2: Filter and Render",
        "description": "Create an array of tasks (id, title, completed). Filter the array to only get completed tasks, then map over the filtered array to display them."
      }
    ],
    "defaultFiles": {
      "/App.js": "export default function App() {\n  const fruits = ['Apple', 'Banana', 'Cherry'];\n  return (\n    <ul>\n      {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}\n    </ul>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 17,
    "title": "Forms",
    "description": "Controlled Components",
    "detailedExplanation": "## Forms – Controlled Components (🟡 LEVEL 2 – CORE REACT)\n\n### What is a Controlled Component?\nIn traditional HTML, forms (like text inputs or textareas) handle their own state. When you type, the HTML element updates itself internally. \n\nIn React, **we don't want the HTML to control itself**. Instead, we want **React state** to have full control over the inputs. \n\nA \"Controlled Component\" is a form element where React controls its value using `useState`.\n\n### 👉 The Concept: State as the Single Source of Truth\n1. The form data is stored in React state.\n2. The input displays whatever is in the state (using the 'value' attribute).\n3. When the user types, an 'onChange' event fires, updating the state.\n4. The state updates, causing the input to instantly re-render with the new text.\n\n### Why is this important?\nBecause React controls the input, you gain **full control** over it. You can:\n- Instantly validate the input as the user types (e.g., \"Password must be 8 characters\").\n- Format the data instantly (e.g., forcing uppercase).\n- Easily submit the exact data to an API without needing to scrape the DOM.\n\n### Example Flow:\n```jsx\nconst [text, setText] = useState(\"\");\n\n// The input is completely locked to the 'text' state\nreturn (\n  <input \n    value={text} \n    onChange={(e) => setText(e.target.value)} \n  />\n);\n```\nIf you remove the onChange handler but keep the value tied to state, the input becomes read-only and you won't be able to type in it at all!",
    "practiceTasks": [
      {
        "task": "Create a controlled input field"
      },
      {
        "task": "Handle multiple inputs with a single state object"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function MultiInputForm() {\n  const [formData, setFormData] = useState({ firstName: '', email: '' });\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    // Update the specific field dynamically\n    setFormData(prev => ({ ...prev, [name]: value }));\n  };\n\n  return (\n    <form style={{ padding: '20px' }}>\n      <label>\n        First Name:\n        <input name=\"firstName\" value={formData.firstName} onChange={handleChange} />\n      </label>\n      <br/><br/>\n      <label>\n        Email:\n        <input name=\"email\" value={formData.email} onChange={handleChange} />\n      </label>\n      <div style={{ marginTop: '20px' }}>\n        <strong>Live Data:</strong> {JSON.stringify(formData)}\n      </div>\n    </form>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a controlled component?",
        "options": [
          "An input whose value is controlled by React state",
          "A component that has no state",
          "A component connected to a database",
          "A form element controlled by the DOM"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 2: In a controlled component, what attribute binds the input to the state?",
        "options": [
          "control",
          "bind",
          "value",
          "state"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: Which event handler is used to detect typing in an input field?",
        "options": [
          "onType",
          "onKey",
          "onClick",
          "onChange"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 4: How do you access the value typed by the user in an onChange event?",
        "options": [
          "event.value",
          "event.target.value",
          "event.input",
          "event.text"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: What makes React the 'single source of truth' in forms?",
        "options": [
          "The state dictates what the input displays via the value attribute",
          "React saves data to localStorage",
          "React automatically validates forms",
          "Forms are submitted via Ajax"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 6: What happens if you provide a value to an input but omit the onChange handler?",
        "options": [
          "It works normally",
          "The input becomes read-only and you cannot type in it",
          "React throws an error",
          "The value becomes undefined"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: How do you handle form submission in React?",
        "options": [
          "Use an action attribute on the form",
          "Attach an onSubmit handler to the <form> and call event.preventDefault()",
          "Use an onClick handler on the input field",
          "Wait for the page to reload"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What is an uncontrolled component?",
        "options": [
          "A component with bugs",
          "An input whose value is managed by the DOM, accessed via refs",
          "An input without a name attribute",
          "A component that renders infinitely"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Which Hook is typically used to handle form inputs in a functional component?",
        "options": [
          "useEffect",
          "useRef",
          "useState",
          "useContext"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 10: When managing multiple inputs with a single state object, what property helps identify which input changed?",
        "options": [
          "event.target.id",
          "event.target.name",
          "event.target.className",
          "event.target.type"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: How do you update an object in state dynamically based on the input name?",
        "options": [
          "setFormData(prev => ({...prev, [event.target.name]: event.target.value}))",
          "setFormData({event.target.name: event.target.value})",
          "setFormData(event.target.value)",
          "setFormData(prev => ({name: value}))"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 12: Which tag is used for a multi-line text input in React?",
        "options": [
          "<input type='textarea'>",
          "<textarea></textarea>",
          "<multiline>",
          "<textfield>"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: How do you set the value of a <textarea> in React?",
        "options": [
          "<textarea>Hello</textarea>",
          "Using the 'value' attribute: <textarea value='Hello' />",
          "Using the 'text' attribute",
          "Using 'innerHTML'"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: How do you set the selected value of a <select> dropdown in React?",
        "options": [
          "Set the 'selected' attribute on the <option>",
          "Set the 'value' attribute on the root <select> tag",
          "Set the 'checked' attribute",
          "It handles itself automatically"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: What is the standard way to handle a checkbox in React?",
        "options": [
          "Use 'value' and 'onChange'",
          "Use 'checked' (boolean) and 'onChange'",
          "Use 'selected' and 'onClick'",
          "Use 'status' and 'onChange'"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: How can you prevent users from submitting a form if a field is empty?",
        "options": [
          "Use HTML 'required' attribute",
          "Validate the state inside the onSubmit handler and return early if invalid",
          "Both A and B",
          "Forms validate themselves automatically"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 17: What popular library simplifies form handling and validation in React?",
        "options": [
          "Redux",
          "React Router",
          "React Hook Form",
          "Axios"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 18: If you want an input to have a default value but be uncontrolled, what attribute do you use?",
        "options": [
          "value",
          "defaultValue",
          "initialValue",
          "placeholder"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: Why does React recommend controlled components?",
        "options": [
          "They allow for instant input validation, conditional disabling, and enforcing formats",
          "They are faster",
          "They use less memory",
          "They don't require JavaScript"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: Can a form contain both controlled and uncontrolled components?",
        "options": [
          "Yes, though it is usually better to stick to one approach",
          "No, it throws an error",
          "Only in class components",
          "Only if wrapped in a Context Provider"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Simple Registration Form",
        "description": "Create a controlled form with fields for Username, Email, and Password. Log the state to the console when the form is submitted."
      },
      {
        "title": "Assignment 2: Character Counter",
        "description": "Create a controlled textarea component. Display the number of characters the user has typed directly below the textarea."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { useState } from 'react';\n\nexport default function App() {\n  const [text, setText] = useState('');\n  return (\n    <div>\n      <input value={text} onChange={e => setText(e.target.value)} />\n      <p>You typed: {text}</p>\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 18,
    "title": "useEffect",
    "description": "Side Effects Handling",
    "detailedExplanation": "## useEffect – Side Effects (🟡 LEVEL 2 – CORE REACT)\n\n### What are Side Effects?\nData fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations \"side effects\" (or just \"effects\"), you've likely performed them in your components before.\n\n### The `useEffect` Hook\nThe Effect Hook, `useEffect`, adds the ability to perform side effects from a function component.\n\n```jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  // Similar to componentDidMount and componentDidUpdate:\n  useEffect(() => {\n    // Update the document title using the browser API\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Click me\n    </button>\n  );\n}\n```\n\n### Controlling When Effects Run (The Dependency Array)\nBy default, effects run after every completed render. However, you can choose to fire them only when certain values have changed by passing an array as an optional second argument.\n\n1. **No array**: Runs after *every* render.\n2. **Empty array `[]`**: Runs *only once* after the initial render (like componentDidMount). Good for initial API data fetching.\n3. **Array with variables `[prop, state]`**: Runs on initial render AND whenever any dependency in the array changes.\n\n### Cleaning Up Effects\nSome effects require cleanup to reduce memory leaks, such as removing event listeners or clearing timeouts. If your effect returns a function, React will run it when it is time to clean up (before the component unmounts, and before re-running the effect on subsequent renders).\n\n```jsx\nuseEffect(() => {\n  const timer = setInterval(() => console.log('Tick'), 1000);\n  \n  // Cleanup function\n  return () => {\n    clearInterval(timer);\n  };\n}, []); // Empty array ensures this setup runs once.\n```\n\n### Rules of Hooks\n1. Only call Hooks **at the top level**. Don’t call Hooks inside loops, conditions, or nested functions.\n2. Only call Hooks **from React function components** or custom Hooks.",
    "practiceTasks": [
      {
        "task": "Run an effect only once on mount"
      },
      {
        "task": "Implement an effect cleanup function"
      }
    ],
    "codeExample": "import React, { useState, useEffect } from 'react';\n\nexport default function Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(prev => prev + 1);\n    }, 1000);\n\n    // Cleanup interval on unmount\n    return () => clearInterval(interval);\n  }, []); // Empty array: runs only on mount\n\n  return <div><h3>Seconds passed: {seconds}</h3></div>;\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a 'side effect' in React?",
        "options": [
          "A bug",
          "An operation that affects something outside the component, like data fetching or manual DOM manipulation",
          "A CSS animation",
          "A state update"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Which hook is used to handle side effects?",
        "options": [
          "useState",
          "useEffect",
          "useMemo",
          "useContext"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: When does useEffect run by default if no dependency array is provided?",
        "options": [
          "Never",
          "Only once on mount",
          "After every render",
          "Before every render"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: How do you make useEffect run ONLY once after the initial render?",
        "options": [
          "Pass an empty array [] as the second argument",
          "Pass [null] as the second argument",
          "Do not pass a second argument",
          "Return false from the effect"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: What is the purpose of the dependency array in useEffect?",
        "options": [
          "To declare variables",
          "To tell React which values the effect depends on, so it only re-runs when those values change",
          "To pass props to the effect",
          "To inject CSS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: If you return a function from inside useEffect, what is it used for?",
        "options": [
          "It is a callback for API data",
          "It is the cleanup function, executed before the component unmounts or before the effect re-runs",
          "It throws an error",
          "It sets the state"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Which of the following requires a cleanup function?",
        "options": [
          "Changing document.title",
          "Fetching data once",
          "Setting up a setInterval or WebSocket connection",
          "Console logging"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 8: What happens if you omit a state variable from the dependency array but use it inside the effect?",
        "options": [
          "It works perfectly",
          "The effect might see 'stale' (outdated) values of that state",
          "The app crashes instantly",
          "React automatically fixes it"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Can you make the callback function passed to useEffect an async function directly? (e.g., `useEffect(async () => {})`)",
        "options": [
          "Yes",
          "No, because useEffect expects the return value to be a cleanup function (or nothing), but async functions return a Promise.",
          "Only in React 18",
          "Yes, but it is deprecated"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: How SHOULD you fetch data inside useEffect?",
        "options": [
          "useEffect(async () => { await fetch() })",
          "Define an async function inside the effect and call it immediately",
          "Use a standard promise chain (.then)",
          "Both B and C are correct"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 11: What happens if you update a state variable inside a useEffect that has no dependency array?",
        "options": [
          "It works perfectly",
          "It creates an infinite loop of rendering and running the effect",
          "The state doesn't update",
          "React throws a syntax error"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: What is the equivalent of the cleanup function in class components?",
        "options": [
          "componentDidMount",
          "componentDidUpdate",
          "componentWillUnmount",
          "render"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 13: Is it possible to have multiple useEffect hooks in a single component?",
        "options": [
          "Yes, it is recommended to separate different concerns into multiple effects",
          "No, only one is allowed",
          "Only if they have the exact same dependency array",
          "Only in custom hooks"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 14: Which of the following is NOT a rule of hooks?",
        "options": [
          "Call hooks at the top level",
          "Call hooks only from React functions",
          "Hooks can be called conditionally inside an if-statement",
          "Hooks must start with 'use'"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 15: If dependency array is `[id]`, when will the effect run?",
        "options": [
          "Only on mount",
          "After every render",
          "On mount and whenever `id` changes",
          "Never"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 16: Why does React run effects twice in development mode (with StrictMode)?",
        "options": [
          "To slow down the app",
          "To help you find bugs by ensuring your effects are resilient and properly cleaned up",
          "It is a bug in React",
          "To double fetch data"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: What is prop drilling? (Unrelated to useEffect, but good to know!)",
        "options": [
          "Passing props through multiple layers of components",
          "A power tool",
          "Drilling into the DOM",
          "A CSS technique"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: Can useEffect be used to replace all lifecycle methods of a class component?",
        "options": [
          "Yes, it covers the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount",
          "No, it only replaces componentDidMount",
          "No, it cannot handle unmounting",
          "No, it is totally different"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 19: Where should functions that are called inside useEffect but don't use component state be defined?",
        "options": [
          "Inside the effect",
          "Outside the component to avoid recreating them on every render",
          "Inside the component body",
          "Any of the above"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: What is a 'stale closure' in the context of useEffect?",
        "options": [
          "When an effect captures old state/props because dependencies were omitted",
          "A broken CSS class",
          "A closed database connection",
          "A syntax error"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Fetching Data",
        "description": "Use useEffect to fetch data from 'https://jsonplaceholder.typicode.com/users' when the component mounts. Display the names in a list."
      },
      {
        "title": "Assignment 2: Window Width Tracker",
        "description": "Use useEffect to attach a 'resize' event listener to the window. Update state with the current window width and display it. Remember to return a cleanup function to remove the listener!"
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { useEffect } from 'react';\n\nexport default function App() {\n  useEffect(() => {\n    console.log(\"Component Mounted!\");\n  }, []);\n\n  return <h2>Check the console!</h2>;\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 19,
    "title": "Lifecycle",
    "description": "Component Lifecycle",
    "detailedExplanation": "## Component Lifecycle (🟡 LEVEL 2 – CORE REACT)\n\n### What is the Component Lifecycle?\nEvery React component goes through a series of \"lifecycle\" phases from the time it is created and inserted into the DOM until it is removed. \n\nHistorically, this was managed using Class Components and specific lifecycle methods (like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`). Today, functional components achieve the exact same lifecycle management using the `useEffect` Hook.\n\n### The Three Main Phases\n1. **Mounting (Birth):** The phase when a component is created and inserted into the DOM.\n   - *Class:* `constructor()`, `render()`, `componentDidMount()`\n   - *Functional:* The function body runs, then `useEffect(..., [])` runs.\n\n2. **Updating (Growth):** The phase when a component's state or props change, causing a re-render.\n   - *Class:* `render()`, `componentDidUpdate()`\n   - *Functional:* The function body runs again, then `useEffect(..., [deps])` runs if dependencies changed.\n\n3. **Unmounting (Death):** The phase when a component is removed from the DOM.\n   - *Class:* `componentWillUnmount()`\n   - *Functional:* The cleanup function returned by `useEffect` runs.\n\n### Why is this important?\nUnderstanding the lifecycle helps you know **when** to fetch data (on mount), **when** to react to changes (on update), and **when** to clean up resources like event listeners or timers (on unmount) to prevent memory leaks.\n\n### Mental Model Shift\nWhile it's useful to know the class lifecycle names (as you will see them in older codebases), modern React encourages a different mental model. Instead of thinking \"what happens when the component mounts\", think \"synchronize this side effect with this state\". `useEffect` is an engine for synchronizing external systems with React state.",
    "practiceTasks": [
      {
        "task": "Understand Mounting, Updating, and Unmounting"
      },
      {
        "task": "Map class lifecycle methods to useEffect patterns"
      }
    ],
    "codeExample": "import React, { useState, useEffect } from 'react';\n\nfunction ChildComponent() {\n  useEffect(() => {\n    console.log(\"1. Component Mounted! (Birth)\");\n\n    return () => {\n      console.log(\"3. Component Unmounted! (Death)\");\n    };\n  }, []);\n\n  return <p>I am alive! Check the console.</p>;\n}\n\nexport default function LifecycleDemo() {\n  const [showChild, setShowChild] = useState(true);\n\n  return (\n    <div>\n      <button onClick={() => setShowChild(!showChild)}>\n        Toggle Child Component (Mount/Unmount)\n      </button>\n      {showChild && <ChildComponent />}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What are the three main phases of a React component's lifecycle?",
        "options": [
          "Initialization, Execution, Termination",
          "Mounting, Updating, Unmounting",
          "Rendering, Compiling, Deploying",
          "Setup, Run, Stop"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Which phase occurs when a component is first inserted into the DOM?",
        "options": [
          "Mounting",
          "Updating",
          "Unmounting",
          "Rendering"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 3: Which hook is primarily used to replicate lifecycle methods in functional components?",
        "options": [
          "useState",
          "useContext",
          "useEffect",
          "useMemo"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: What is the class component equivalent of `useEffect(() => {...}, [])`?",
        "options": [
          "componentDidUpdate",
          "componentWillUnmount",
          "componentDidMount",
          "render"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What is the class component equivalent of the cleanup function returned by useEffect?",
        "options": [
          "componentDidMount",
          "componentDidUpdate",
          "componentWillUnmount",
          "constructor"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: When does the 'Updating' phase occur?",
        "options": [
          "When the component is first created",
          "When state or props change",
          "When the component is removed from the DOM",
          "When the user closes the browser"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Why do we need an unmounting phase (cleanup)?",
        "options": [
          "To save data to the database",
          "To prevent memory leaks by removing timers or event listeners",
          "To speed up the network",
          "To trigger a re-render"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: In modern React, instead of thinking about 'lifecycle methods', we are encouraged to think about:",
        "options": [
          "Synchronizing state with side effects",
          "Manipulating the DOM",
          "Object Oriented Programming",
          "CSS Animations"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: If a component re-renders but its dependencies haven't changed, does the useEffect run?",
        "options": [
          "Yes",
          "No",
          "Only if it returns a function",
          "Only in StrictMode"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Which legacy lifecycle method is used to stop a component from rendering if data hasn't changed? (For performance optimization in Class components)",
        "options": [
          "componentDidMount",
          "shouldComponentUpdate",
          "componentWillUnmount",
          "getDerivedStateFromProps"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: What functional React feature replaces the need for `shouldComponentUpdate`?",
        "options": [
          "React.memo",
          "useEffect",
          "useState",
          "useRef"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 12: Can a component be unmounted and then mounted again?",
        "options": [
          "Yes",
          "No",
          "Only in React Native",
          "Only if the page is refreshed"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 13: When does the cleanup function of an effect run?",
        "options": [
          "Right before the component unmounts",
          "Right before the effect runs again (on updates)",
          "Both A and B",
          "Never"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 14: Which class method runs BEFORE the component mounts?",
        "options": [
          "constructor",
          "componentDidMount",
          "componentDidUpdate",
          "render"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 15: What happens if you fetch data in the main body of a functional component (outside of useEffect)?",
        "options": [
          "It works fine",
          "It fetches data on every single render, potentially crashing the app or causing infinite loops",
          "It throws a syntax error",
          "It runs only once"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: In which phase should you focus an input field programmatically?",
        "options": [
          "Before render",
          "During render",
          "After Mount (e.g. inside useEffect)",
          "During Unmount"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 17: What is the order of execution when a functional component mounts?",
        "options": [
          "Run function body -> Run useEffect -> Paint screen",
          "Run function body -> Paint screen -> Run useEffect",
          "Run useEffect -> Run function body -> Paint screen",
          "Paint screen -> Run function body -> Run useEffect"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 18: If a component has multiple useEffects, what order do they run in?",
        "options": [
          "Random order",
          "Alphabetical order",
          "The order they are defined in the code",
          "Reverse order"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 19: Does changing a `useRef` value trigger an update phase (re-render)?",
        "options": [
          "Yes",
          "No",
          "Only if it is a string",
          "Only if it is a DOM node"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: Strict Mode in development runs which phase twice to help detect side-effect bugs?",
        "options": [
          "The render phase and effect setup/cleanup",
          "The unmount phase",
          "The build phase",
          "The deployment phase"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Lifecycle Logging",
        "description": "Convert a class component with componentDidMount and componentWillUnmount into a functional component using useEffect."
      },
      {
        "title": "Assignment 2: Interval Cleanup",
        "description": "Create a component that starts a setInterval on mount. Ensure you properly clear the interval on unmount so it stops logging when the component is hidden."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { useState, useEffect } from 'react';\n\nfunction Logger() {\n  useEffect(() => {\n    console.log(\"Mounted!\");\n    return () => console.log(\"Unmounted!\");\n  }, []);\n  return <h2>I am logging my lifecycle!</h2>;\n}\n\nexport default function App() {\n  const [show, setShow] = useState(true);\n  return (\n    <div>\n      <button onClick={() => setShow(!show)}>Toggle Logger</button>\n      {show && <Logger />}\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 20,
    "title": "Routing",
    "description": "React Router Basics",
    "detailedExplanation": "## Routing – React Router Basics (🟡 LEVEL 3 – INTERMEDIATE)\n\n### What is Routing?\nRouting is the process of navigating between different pages in a web application. In traditional websites, clicking a link causes the browser to make a request to the server, which then sends back an entirely new HTML page. This causes a full page reload and a slow, flickering user experience.\n\n### 👉 Concept: Single Page Application (SPA)\nReact applications are typically **Single Page Applications (SPAs)**. This means:\n- Only **one** actual HTML page (`index.html`) is ever loaded by the browser.\n- When you \"navigate\" to a new page, the browser does **not** reload.\n- Instead, React simply intercepts the click, looks at the URL, and uses JavaScript to instantly swap out the UI components on the screen to match the requested route.\n\n### React Router DOM\nTo achieve routing in React, the standard library is `react-router-dom`.\n\n### Core Components\n1. **`<BrowserRouter>`**: Wraps your entire application and connects it to the browser's URL history.\n2. **`<Routes>` & `<Route>`**: Defines the mapping between URLs and your React components.\n3. **`<Link>`**: Replaces the traditional HTML `<a href=\"...\">` tag. Instead of reloading the page, it seamlessly updates the URL and tells React to render the new component.\n\n### Basic Setup Example\n```jsx\nimport { BrowserRouter, Routes, Route, Link } from \"react-router-dom\";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      {/* Navigation Menu */}\n      <nav>\n        <Link to=\"/\">Home</Link>\n        <Link to=\"/about\">About</Link>\n      </nav>\n\n      {/* Route Definitions */}\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n        <Route path=\"*\" element={<NotFound />} /> {/* Catch-all for 404 */}\n      </Routes>\n    </BrowserRouter>\n  );\n}\n```\n\nBy mastering routing, you transition from building single-screen widgets to full-fledged web applications.",
    "practiceTasks": [
      {
        "task": "Understand the concept of a Single Page Application"
      },
      {
        "task": "Set up BrowserRouter, Routes, and Route"
      }
    ],
    "codeExample": "import React from 'react';\n// Assuming react-router-dom is installed\nimport { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nconst Home = () => <h2>🏠 Home Page</h2>;\nconst About = () => <h2>ℹ️ About Us</h2>;\n\nexport default function RoutingDemo() {\n  return (\n    <BrowserRouter>\n      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>\n        <nav style={{ marginBottom: '20px', borderBottom: '1px solid #444', paddingBottom: '10px' }}>\n          <Link to=\"/\" style={{ marginRight: '15px', color: '#61dafb' }}>Home</Link>\n          <Link to=\"/about\" style={{ color: '#61dafb' }}>About</Link>\n        </nav>\n        \n        <Routes>\n          <Route path=\"/\" element={<Home />} />\n          <Route path=\"/about\" element={<About />} />\n        </Routes>\n      </div>\n    </BrowserRouter>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a Single Page Application (SPA)?",
        "options": [
          "An app that only has one component",
          "An app where only one HTML page is loaded and navigation is handled by JS without a full page reload",
          "An app that only runs on one screen size",
          "A website that cannot have links"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the standard library used for routing in React?",
        "options": [
          "react-navigation",
          "react-router-dom",
          "react-routes",
          "next-router"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What does the `<BrowserRouter>` component do?",
        "options": [
          "It styles the app for different browsers",
          "It connects the React app to the browser's URL history API",
          "It blocks external links",
          "It compiles React code"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: In React Router, what replaces the traditional HTML `<a>` tag to prevent full page reloads?",
        "options": [
          "<Button>",
          "<Href>",
          "<Link>",
          "<Nav>"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What happens if you use a standard `<a href='/about'>` instead of `<Link to='/about'>` in an SPA?",
        "options": [
          "It works exactly the same",
          "It causes a full page reload, breaking the SPA experience",
          "It throws a syntax error",
          "It crashes the browser"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: How do you define a route that catches all undefined URLs (a 404 page)?",
        "options": [
          "<Route path='404' />",
          "<Route path='error' />",
          "<Route path='*' />",
          "<Route default />"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 7: What is the purpose of the `<Routes>` component?",
        "options": [
          "It holds all the routing logic and selects the first `<Route>` that matches the URL",
          "It creates the navigation bar",
          "It fetches data from the server",
          "It defines the HTML header"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: How do you specify which component should render for a specific path in v6 of React Router?",
        "options": [
          "component={Home}",
          "element={<Home />}",
          "render={() => <Home />}",
          "target={Home}"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Can you have multiple `<BrowserRouter>` components in one app?",
        "options": [
          "Yes, it's recommended",
          "No, you should only have one at the root of your application hierarchy",
          "Only if they are nested",
          "Only in development mode"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What does the `<NavLink>` component do that `<Link>` doesn't?",
        "options": [
          "It is faster",
          "It can automatically apply an 'active' CSS class when its route is the current URL",
          "It can link to external websites",
          "It is used for backend routing"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: Which hook is used to programmatically navigate the user (e.g., after a login succeeds)?",
        "options": [
          "useLocation",
          "useParams",
          "useNavigate",
          "useRouter"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 12: What does `useLocation()` return?",
        "options": [
          "The user's GPS coordinates",
          "An object containing information about the current URL (pathname, search, hash)",
          "The previous page visited",
          "A function to redirect"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: Is React Router an official Facebook package?",
        "options": [
          "Yes",
          "No, it is a third-party library maintained by Remix Software",
          "Yes, it is built into React",
          "No, it is maintained by Google"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: How do you navigate to a previous page programmatically?",
        "options": [
          "navigate('back')",
          "navigate(-1)",
          "navigate(0)",
          "goBack()"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: What is a HashRouter?",
        "options": [
          "A router that hashes the data",
          "A router that uses the hash portion of the URL (e.g., example.com/#/about) to keep the UI in sync",
          "A router for passwords",
          "A router exclusively for React Native"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: Why might you use HashRouter instead of BrowserRouter?",
        "options": [
          "It is faster",
          "Your web server doesn't support catching dynamic URLs and routing them to index.html (like static file hosts)",
          "It looks better",
          "It is the modern standard"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: Which prop is required on the `<Link>` component?",
        "options": [
          "href",
          "src",
          "to",
          "path"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 18: Can `<Link>` components be used outside of a `<BrowserRouter>`?",
        "options": [
          "Yes",
          "No, they must be rendered inside a router context",
          "Only if they have an absolute URL",
          "Only in class components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: In older versions of React Router (v5), what prop was used instead of `element`?",
        "options": [
          "component",
          "render",
          "children",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 20: What happens if the user manually types a URL like `/dashboard` in the browser bar?",
        "options": [
          "The browser requests `/dashboard` from the server. The server must be configured to return `index.html` so React Router can take over.",
          "React Router intercepts it before it leaves the browser",
          "It always crashes",
          "It loads a new HTML page called dashboard.html"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Basic Navigation",
        "description": "Create a React app with react-router-dom. Setup three routes: Home, Contact, and Services. Add a navigation bar with Links to all three."
      },
      {
        "title": "Assignment 2: Catch-All 404",
        "description": "Add a 'Page Not Found' component to your router that renders when a user visits a URL that does not match any defined routes."
      }
    ],
    "defaultFiles": {
      "/App.js": "import { BrowserRouter, Routes, Route, Link } from \"react-router-dom\";\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Link to=\"/\" style={{marginRight: 10}}>Home</Link>\n      <Link to=\"/profile\">Profile</Link>\n      \n      <Routes>\n        <Route path=\"/\" element={<h3>Home Route</h3>} />\n        <Route path=\"/profile\" element={<h3>Profile Route</h3>} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 21,
    "title": "Nested Routing",
    "description": "Advanced Routing",
    "detailedExplanation": "## Nested Routing (🟡 LEVEL 3 – INTERMEDIATE)\n\n### What is Nested Routing?\nIn many web applications, the layout of a page consists of a persistent outer shell (like a sidebar, header, or dashboard layout) and a dynamic inner content area that changes based on the URL. \n\n**Nested routing** is the technique of defining routes inside of other routes.\n\n### 👉 Used for: Dashboards, Layouts, and Tabs\nInstead of copying your Sidebar component into every single dashboard page, you create a parent `DashboardLayout` route that renders the Sidebar permanently, and uses an `<Outlet />` to render the nested child routes.\n\n### The `<Outlet />` Component\nThe `<Outlet />` component from `react-router-dom` acts as a placeholder. It tells the parent route exactly **where** to render its matching child route.\n\n### Example Setup:\n```jsx\nimport { Routes, Route, Outlet, Link } from \"react-router-dom\";\n\n// The Parent Layout\nfunction DashboardLayout() {\n  return (\n    <div className=\"layout\">\n      <aside>\n        <h3>Sidebar</h3>\n        <Link to=\"/dashboard/stats\">Stats</Link>\n        <Link to=\"/dashboard/settings\">Settings</Link>\n      </aside>\n      \n      <main>\n        {/* The child route components will be injected HERE */}\n        <Outlet /> \n      </main>\n    </div>\n  );\n}\n\n// The Router Configuration\nfunction App() {\n  return (\n    <Routes>\n      <Route path=\"/dashboard\" element={<DashboardLayout />}>\n        {/* Nested Routes */}\n        <Route path=\"stats\" element={<h2>Statistics</h2>} />\n        <Route path=\"settings\" element={<h2>Settings</h2>} />\n      </Route>\n    </Routes>\n  );\n}\n```\n\nWhen the user visits `/dashboard/stats`, React Router renders the `<DashboardLayout>`, and replaces the `<Outlet />` inside it with the `<h2>Statistics</h2>` component.",
    "practiceTasks": [
      {
        "task": "Understand the purpose of the <Outlet /> component"
      },
      {
        "task": "Configure nested routes in your Routes configuration"
      }
    ],
    "codeExample": "import React from 'react';\nimport { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';\n\nconst Layout = () => (\n  <div style={{ display: 'flex', gap: '20px' }}>\n    <nav style={{ width: '150px', borderRight: '1px solid #ccc', paddingRight: '10px' }}>\n      <h4>Menu</h4>\n      <ul style={{ listStyle: 'none', padding: 0 }}>\n        <li><Link to=\"/app/profile\">Profile</Link></li>\n        <li><Link to=\"/app/settings\">Settings</Link></li>\n      </ul>\n    </nav>\n    <main style={{ padding: '20px', flex: 1 }}>\n      <Outlet /> {/* Child components render here! */}\n    </main>\n  </div>\n);\n\nexport default function NestedRouteDemo() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/app\" element={<Layout />}>\n          <Route path=\"profile\" element={<h3>User Profile Area</h3>} />\n          <Route path=\"settings\" element={<h3>Account Settings Area</h3>} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is nested routing?",
        "options": [
          "Routing to an external website",
          "Defining routes inside other routes to create complex, multi-layered layouts",
          "Routing that uses hash tags",
          "A way to loop through routes"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What component is used as a placeholder in a parent route to render child routes?",
        "options": [
          "<Placeholder />",
          "<Child />",
          "<Outlet />",
          "<Inject />"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: What is a common use case for nested routing?",
        "options": [
          "Creating a unified Dashboard layout with a persistent sidebar",
          "Connecting to a database",
          "Handling form submissions",
          "Styling components"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 4: In the route definition `<Route path='dashboard' element={<Layout />}><Route path='stats' element={<Stats />}/></Route>`, what is the full URL to reach the Stats component?",
        "options": [
          "/stats",
          "/dashboard/stats",
          "/dashboard",
          "/layout/stats"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: If a user navigates to `/dashboard` (but not `/dashboard/stats`), what renders inside the `<Outlet />` by default?",
        "options": [
          "The Stats component",
          "An error",
          "Nothing (it is empty)",
          "The entire app crashes"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: How do you render a default child component when the user visits the parent URL (e.g., `/dashboard`)?",
        "options": [
          "Use a <Route index element={<DefaultComponent />} /> inside the parent",
          "Use path='/'",
          "Use path='default'",
          "You cannot do this"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 7: Do nested paths need a leading slash (e.g., path='/stats') in React Router v6?",
        "options": [
          "Yes, always",
          "No, relative paths (path='stats') are preferred inside nested routes",
          "It doesn't matter",
          "Only if it is the root"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What happens if you forget to include the `<Outlet />` component in your parent Layout?",
        "options": [
          "The child routes will render at the bottom of the page",
          "The child routes will not render at all, even if the URL is correct",
          "The app crashes",
          "React automatically appends them"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Can you nest routes infinitely deep?",
        "options": [
          "No, max depth is 2",
          "Yes, you can have layouts inside layouts inside layouts",
          "Only up to 5 levels",
          "Only in Enterprise React"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: If a parent route has `path='users'` and a child has `path=':id'`, what does the child match?",
        "options": [
          "/users",
          "/users/id",
          "/users/anything (e.g., /users/123)",
          "/id"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 11: Which layout pattern heavily relies on nested routing?",
        "options": [
          "Single-page landing pages",
          "Tabbed navigation interfaces",
          "Popup modals",
          "Footer links"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: Is the `<Outlet />` component imported from 'react'?",
        "options": [
          "Yes",
          "No, it is imported from 'react-router-dom'",
          "No, it is a built-in HTML tag",
          "No, it is from 'redux'"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: Can an `<Outlet />` pass data to the child components?",
        "options": [
          "No, it is just a placeholder",
          "Yes, using the `context` prop: `<Outlet context={[data, setData]} />`",
          "Yes, using standard props",
          "Only via Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: If data is passed via `<Outlet context={data} />`, how does the child component receive it?",
        "options": [
          "By reading props.data",
          "Using the `useOutletContext()` hook",
          "Using useContext()",
          "Using useState()"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: What is an 'index route'?",
        "options": [
          "The first route in the file",
          "A child route with no path that renders in the parent's Outlet at the parent's exact URL",
          "A route for index.html",
          "A deprecated feature"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: What happens if two child routes have the exact same path?",
        "options": [
          "React Router renders both",
          "React Router matches the first one defined",
          "It throws an error",
          "It merges their components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: Can a Layout component hold state (e.g., whether a sidebar is open or closed)?",
        "options": [
          "Yes, it is a normal React component",
          "No, layouts must be stateless",
          "Only if it is a Class component",
          "Only if using Redux"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: When navigating from `/dashboard/stats` to `/dashboard/settings`, does the parent `<Layout>` unmount and remount?",
        "options": [
          "Yes",
          "No, it stays mounted, which preserves its state and avoids re-rendering the outer shell",
          "Only if it has no state",
          "Depends on the browser"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: How do relative links work inside a nested component?",
        "options": [
          "A `<Link to='settings'>` inside `/dashboard` will navigate to `/dashboard/settings`",
          "It navigates to `/settings`",
          "Relative links are not allowed",
          "It opens a new tab"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: Why is Nested Routing considered an architecture best practice for complex apps?",
        "options": [
          "It prevents XSS attacks",
          "It aligns UI hierarchy with URL structure, making code modular and reducing redundant layout code",
          "It increases bundle size",
          "It removes the need for CSS"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Admin Layout",
        "description": "Create an Admin layout with a top navbar and a sidebar. Use nested routing to render 'Users' and 'Products' pages inside the main content area."
      },
      {
        "title": "Assignment 2: Index Route",
        "description": "Add an index route to your Admin layout so that visiting '/admin' displays a 'Welcome to the Dashboard' component by default."
      }
    ],
    "defaultFiles": {
      "/App.js": "import { BrowserRouter, Routes, Route, Link, Outlet } from \"react-router-dom\";\n\nconst Layout = () => (\n  <div style={{ border: '2px solid blue', padding: 10 }}>\n    <h3>Parent Layout</h3>\n    <Link to=\"/parent/child\">Load Child</Link>\n    <div style={{ border: '2px dashed red', padding: 10, marginTop: 10 }}>\n      <Outlet />\n    </div>\n  </div>\n);\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/parent\" element={<Layout />}>\n          <Route path=\"child\" element={<p>I am the child!</p>} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 22,
    "title": "Dynamic Routing",
    "description": "URL Parameters",
    "detailedExplanation": "## Dynamic Routing (🟡 LEVEL 3 – INTERMEDIATE)\n\n### What is Dynamic Routing?\nIn real-world applications, you rarely have static URLs for everything. If you are building a blog or an e-commerce site, you don't create a separate route for every single post or product.\n\nInstead, you use **Dynamic Routing**: creating routes based on parameters.\n\n### 👉 Example: User Profile Page\nIf you want a route to match any user ID (e.g., `/users/123`, `/users/abc`), you define a route with a **URL Parameter**.\n\nIn React Router, you denote a URL parameter by prefixing a path segment with a colon (`:`).\n\n```jsx\n// The Route Configuration\n<Route path=\"/users/:userId\" element={<UserProfile />} />\n```\nThe `:userId` segment is dynamic. It will match any string placed in that position of the URL.\n\n### Accessing URL Parameters\nWhen the `<UserProfile>` component renders, it needs to know *which* ID was requested so it can fetch the correct data. You extract this parameter using the `useParams` hook.\n\n```jsx\nimport { useParams } from \"react-router-dom\";\n\nfunction UserProfile() {\n  // Extract the userId from the URL\n  const params = useParams();\n  const userId = params.userId;\n\n  // Destructured version:\n  // const { userId } = useParams();\n\n  return (\n    <div>\n      <h1>User Profile</h1>\n      <p>Fetching data for user ID: {userId}</p>\n    </div>\n  );\n}\n```\n\n### Multiple Parameters\nYou can have multiple dynamic segments in a single route:\n```jsx\n<Route path=\"/store/:category/:productId\" element={<ProductPage />} />\n```\nVisiting `/store/shoes/nike-air` would result in `useParams()` returning:\n`{ category: 'shoes', productId: 'nike-air' }`.",
    "practiceTasks": [
      {
        "task": "Define routes with URL parameters using the colon (:) syntax"
      },
      {
        "task": "Extract URL parameters inside a component using the useParams hook"
      }
    ],
    "codeExample": "import React from 'react';\nimport { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';\n\nconst ItemDetail = () => {\n  const { id } = useParams();\n  return (\n    <div style={{ padding: '20px', background: '#222', borderRadius: '8px' }}>\n      <h2>Viewing Item Details</h2>\n      <p style={{ color: '#00ffcc' }}>Dynamic ID captured from URL: <strong>{id}</strong></p>\n    </div>\n  );\n};\n\nexport default function DynamicRoutingDemo() {\n  return (\n    <BrowserRouter>\n      <div>\n        <h3>Select an Item:</h3>\n        <ul>\n          <li><Link to=\"/items/101\">Item 101</Link></li>\n          <li><Link to=\"/items/999\">Item 999</Link></li>\n          <li><Link to=\"/items/apple\">Item \"apple\"</Link></li>\n        </ul>\n        \n        <Routes>\n          <Route path=\"/items/:id\" element={<ItemDetail />} />\n        </Routes>\n      </div>\n    </BrowserRouter>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is the purpose of dynamic routing?",
        "options": [
          "To create animated transitions between pages",
          "To handle URLs that have variable segments (like IDs) using a single route definition",
          "To route backend API requests",
          "To change CSS dynamically"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: How do you define a URL parameter in a route path?",
        "options": [
          "By wrapping it in curly braces: {id}",
          "By prefixing it with a dollar sign: $id",
          "By prefixing it with a colon: :id",
          "By prefixing it with a question mark: ?id"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: If a route is defined as `<Route path='/blog/:postId' />`, which of the following URLs will match it?",
        "options": [
          "/blog/123",
          "/blog/hello-world",
          "Both A and B",
          "/blog"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: Which React Router hook is used to extract dynamic parameters from the URL?",
        "options": [
          "useRouter",
          "useLocation",
          "useParams",
          "useDynamic"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What type of data does `useParams()` return?",
        "options": [
          "An array of strings",
          "An object containing key/value pairs of the dynamic params",
          "A single string",
          "A boolean"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: Given the route `/users/:userId` and the URL `/users/99`, what does `useParams()` return?",
        "options": [
          "{ id: 99 }",
          "{ userId: '99' }",
          "[ 99 ]",
          "{ user: 99 }"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is the data type of the value extracted from `useParams()`?",
        "options": [
          "Number",
          "String",
          "Boolean",
          "Object"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: If you have `<Route path='/store/:category/:itemId' />`, how do you destructure the params?",
        "options": [
          "const { category, itemId } = useParams();",
          "const [category, itemId] = useParams();",
          "const { params } = useParams();",
          "const id = useParams('itemId');"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: What is a Query String (Query Parameter)?",
        "options": [
          "The part of the URL after the `?` (e.g., ?sort=asc)",
          "The part of the URL after the `:`",
          "The domain name",
          "The hash `#` tag"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: Does `useParams()` extract query strings like `?sort=asc`?",
        "options": [
          "Yes",
          "No, you must use `useSearchParams()` for query strings",
          "Only if defined in the path",
          "Only in development"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: What happens if a user navigates to `/users/` when the route is defined as `/users/:id`?",
        "options": [
          "The route matches and id is undefined",
          "The route does NOT match, because the parameter is required by default",
          "It redirects to Home",
          "It crashes the app"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: How can you make a URL parameter optional in React Router v6?",
        "options": [
          "Append a `?` to the parameter: `path='/users/:id?'`",
          "You cannot make them optional in v6; you must define two separate routes",
          "Prepend a `?`",
          "Wrap it in brackets `[:id]`"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 13: If you define a static route `/users/new` and a dynamic route `/users/:id`, what happens when a user visits `/users/new`?",
        "options": [
          "It matches the dynamic route and id becomes 'new'",
          "React Router is smart enough to match the static `/users/new` route first due to specificity ranking",
          "It throws a conflict error",
          "It renders both"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: Can you use dynamic parameters in nested routes?",
        "options": [
          "Yes, the child route will have access to the parent's parameters",
          "No, parameters are lost in nested routes",
          "Only if explicitly passed as props",
          "Only via Context"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 15: If a component extracts an `id` from the URL, what is the typical next step?",
        "options": [
          "Render the ID in a large font",
          "Use `useEffect` to fetch data from an API based on that ID",
          "Delete the ID from the URL",
          "Update global state with Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: What happens if you fetch data in a component based on a URL parameter, and the user clicks a link that changes the parameter (e.g., from /user/1 to /user/2)?",
        "options": [
          "The component is unmounted and remounted completely",
          "The component remains mounted, but the URL changes. You must include the ID in the `useEffect` dependency array to trigger a re-fetch.",
          "The page reloads completely",
          "React throws an error"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: Which is the correct way to link to a dynamic route using a variable `userId`?",
        "options": [
          "<Link to='/users/:userId'>",
          "<Link to={'/users/' + userId}>",
          "<Link to={`/users/${userId}`}>",
          "Both B and C are correct"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 18: Can a route path be entirely dynamic? e.g., `<Route path='/:anything' />`",
        "options": [
          "Yes",
          "No",
          "Only if it is the only route",
          "Only if wrapped in an Outlet"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 19: What is the main advantage of dynamic routing for an e-commerce store?",
        "options": [
          "It improves website security",
          "You only need to write one generic 'Product Details' component that can render any product based on the URL",
          "It forces the user to log in",
          "It reduces CSS size"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: What hook can be used to read and modify the URL query string (e.g., `?page=2`)?",
        "options": [
          "useParams",
          "useSearchParams",
          "useQuery",
          "useURL"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Blog Router",
        "description": "Create a blog routing system. Define a route '/posts/:slug'. When visited, the component should extract the 'slug' using useParams and display 'Reading post: [slug]'."
      },
      {
        "title": "Assignment 2: Multi-param Route",
        "description": "Create a route that takes two parameters: a category and an item ID (e.g., '/shop/:category/:id'). Display both parameters on the screen."
      }
    ],
    "defaultFiles": {
      "/App.js": "import { BrowserRouter, Routes, Route, Link, useParams } from \"react-router-dom\";\n\nfunction Profile() {\n  const { username } = useParams();\n  return <h2>Hello, {username}!</h2>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Link to=\"/u/alice\" style={{marginRight: 10}}>Alice</Link>\n      <Link to=\"/u/bob\">Bob</Link>\n      <Routes>\n        <Route path=\"/u/:username\" element={<Profile />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 23,
    "title": "Lifting State Up",
    "description": "Shared State",
    "detailedExplanation": "## Lifting State Up (🟡 LEVEL 3 – INTERMEDIATE)\n\n### The Problem: Sharing State\nIn React, state is local to a component. But what happens when **multiple components need to access and modify the same state**? \n\nFor example, imagine a `TemperatureInput` component and a `WaterBoilingVerdict` component. The verdict component needs to know the temperature entered in the input component to display whether water would boil.\n\nIf the temperature state lives inside the `TemperatureInput`, the `WaterBoilingVerdict` cannot access it, because data only flows **downwards** in React.\n\n### 👉 Concept: Single Source of Truth\nOften, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. \n\n### How to Lift State Up\n1. **Find the closest common parent:** Identify the component that renders both of the components that need the state.\n2. **Move the state to the parent:** Remove the `useState` hook from the child and place it in the parent.\n3. **Pass state down as props:** Pass the state value down to the children as read-only props.\n4. **Pass callbacks down as props:** Since children cannot modify parent state directly, the parent must pass down a function (e.g., the state setter) that the child can call when an event occurs.\n\n### Example:\n```jsx\nfunction Parent() {\n  const [sharedText, setSharedText] = useState(\"\");\n\n  return (\n    <div>\n      {/* Child 1 receives the state and the setter */}\n      <InputBox text={sharedText} onTextChange={setSharedText} />\n      \n      {/* Child 2 only receives the state to display it */}\n      <DisplayBox text={sharedText} />\n    </div>\n  );\n}\n\nfunction InputBox({ text, onTextChange }) {\n  // When input changes, it calls the parent's setter function!\n  return <input value={text} onChange={(e) => onTextChange(e.target.value)} />;\n}\n\nfunction DisplayBox({ text }) {\n  return <h1>You typed: {text}</h1>;\n}\n```\n\nBy lifting state up, you create a \"single source of truth\". The parent controls the data, and the children merely reflect it or trigger requests to change it.",
    "practiceTasks": [
      {
        "task": "Identify when state needs to be shared between siblings"
      },
      {
        "task": "Move state to a common ancestor and pass it down as props"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\n// The Parent Component\nexport default function LiftingStateDemo() {\n  // 1. State lives here!\n  const [count, setCount] = useState(0);\n\n  return (\n    <div style={{ padding: '20px', border: '2px solid #ccc' }}>\n      <h3>Parent Component</h3>\n      \n      {/* 2. Pass state and setter down as props */}\n      <ChildA currentCount={count} onIncrement={() => setCount(count + 1)} />\n      <ChildB currentCount={count} />\n    </div>\n  );\n}\n\nfunction ChildA({ currentCount, onIncrement }) {\n  return (\n    <div style={{ background: '#333', margin: '10px', padding: '10px' }}>\n      <p>Child A (Controls the state)</p>\n      <button onClick={onIncrement}>Increment Shared Count</button>\n    </div>\n  );\n}\n\nfunction ChildB({ currentCount }) {\n  return (\n    <div style={{ background: '#555', margin: '10px', padding: '10px' }}>\n      <p>Child B (Reads the state)</p>\n      <h2>Total Count is: {currentCount}</h2>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What does 'Lifting State Up' mean in React?",
        "options": [
          "Moving state to a global Redux store",
          "Moving state from a child component to its closest common parent component",
          "Uploading state to a server",
          "Passing state from parent to child"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Why do we need to lift state up?",
        "options": [
          "Because state is too heavy",
          "Because sibling components cannot share data directly; they must communicate through a common parent",
          "Because it improves rendering speed",
          "Because children cannot have state"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What is the 'single source of truth' principle?",
        "options": [
          "Every component has its own state",
          "There should be only one place where a specific piece of changing data lives and is modified",
          "React is the only truth",
          "Data is stored in a single database"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: If Component A and Component B both need to read and update a 'searchQuery' state, where should 'searchQuery' be declared?",
        "options": [
          "In Component A",
          "In Component B",
          "In the closest common parent of A and B",
          "In an external CSS file"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: How does a child component modify state that has been lifted to a parent?",
        "options": [
          "The child directly mutates `this.parent.state`",
          "The child uses `document.getElementById` to change the parent",
          "The parent passes down a callback function (like a state setter) as a prop, and the child calls it",
          "It is impossible"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: If state is lifted up, how is it passed back down to the children?",
        "options": [
          "As context",
          "As local state",
          "As props",
          "As global variables"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 7: Which of the following is passed as a prop when lifting state up?",
        "options": [
          "The state value itself",
          "A callback function to update the state",
          "Both A and B",
          "Neither"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 8: What happens when the child calls the parent's state-updating callback?",
        "options": [
          "The child component re-renders independently",
          "The parent's state changes, causing the parent (and all its children) to re-render with the new data",
          "The app crashes",
          "The callback is ignored"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Is 'Lifting State Up' a feature, a rule, or a pattern?",
        "options": [
          "A hard-coded feature of React",
          "A syntax rule",
          "A common design pattern for data flow in React",
          "A deprecated library"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 10: If you find yourself passing state through 10 levels of components just so siblings can share it, what problem are you experiencing?",
        "options": [
          "State synchronization",
          "Prop drilling",
          "Memory leaking",
          "Callback hell"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: Which advanced React feature solves the 'Prop Drilling' problem created by lifting state up too high?",
        "options": [
          "Context API",
          "React Router",
          "CSS Modules",
          "Virtual DOM"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 12: When should you NOT lift state up?",
        "options": [
          "When two components need the same data",
          "When the state is entirely local to a single component (like whether a dropdown is currently open)",
          "When you want a single source of truth",
          "When writing functional components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: Given `<Parent><ChildA/><ChildB/></Parent>`, if ChildA updates the lifted state in Parent, does ChildB re-render?",
        "options": [
          "Yes, because Parent re-renders and passes the new props to ChildB",
          "No, components only re-render if their own state changes",
          "Only if ChildB is a class component",
          "It crashes"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 14: What is the naming convention for callback props used to update lifted state?",
        "options": [
          "They must be named set[StateName]",
          "They often start with 'on' or 'handle' (e.g., onTemperatureChange)",
          "They must be named 'callback'",
          "There is no convention"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: If a parent passes `count` to ChildA and `count` to ChildB, and ChildA increments it, what value does ChildB see?",
        "options": [
          "The old value",
          "The new incremented value",
          "Undefined",
          "Null"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: Is it possible for a child to have its own local state AND receive lifted state from a parent?",
        "options": [
          "Yes, components can mix local state and props freely",
          "No, a component must be entirely stateless or entirely stateful",
          "Only in class components",
          "Only if the parent allows it"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 17: Lifting state up promotes:",
        "options": [
          "Data duplication",
          "Two-way data binding",
          "Top-down (unidirectional) data flow",
          "Global state pollution"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 18: What is a controlled component in the context of lifting state up?",
        "options": [
          "A component that is controlled by a CSS file",
          "A component that does not maintain its own local state, but is fully controlled by props passed from a parent",
          "A component connected to an API",
          "A component that controls its parent"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: If you have 5 separate input fields that all contribute to a single 'User Form', where should the state live?",
        "options": [
          "In a global Redux store",
          "In the common 'User Form' parent component",
          "Inside each individual input field",
          "In the Window object"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: What is the primary drawback of lifting state too high up the component tree?",
        "options": [
          "It causes too many components to re-render unnecessarily (Prop Drilling)",
          "It breaks the Virtual DOM",
          "It uses too much CSS",
          "It is insecure"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Shared Input",
        "description": "Create a Parent component with state 'text'. Create two children: an InputBox and a TextDisplay. Ensure typing in the InputBox updates the TextDisplay by lifting state."
      },
      {
        "title": "Assignment 2: Independent vs Shared State",
        "description": "Create two independent Counter components. Then, lift their state to a parent so that clicking either counter increments a single, shared total count."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { useState } from 'react';\n\nfunction SiblingA({ onToggle }) {\n  return <button onClick={onToggle}>Toggle Secret</button>;\n}\n\nfunction SiblingB({ show }) {\n  return show ? <p>React is awesome!</p> : null;\n}\n\nexport default function Parent() {\n  const [showSecret, setShowSecret] = useState(false);\n  return (\n    <div>\n      <SiblingA onToggle={() => setShowSecret(!showSecret)} />\n      <SiblingB show={showSecret} />\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 24,
    "title": "Context API",
    "description": "Global State Management",
    "detailedExplanation": "## Context API (🟡 LEVEL 3 – INTERMEDIATE)\n\n### The Problem: Prop Drilling\nAs your application grows, you will inevitably lift state up to common ancestors. However, sometimes that common ancestor is very high in the component tree.\n\nPassing props down through multiple layers of intermediate components (who don't even need the data themselves) just to reach a deeply nested child is called **Prop Drilling**. It makes code messy, tightly coupled, and hard to refactor.\n\n### 👉 Concept: Global Data Sharing\nContext provides a way to pass data through the component tree without having to pass props down manually at every level. It is designed to share data that can be considered \"global\" for a tree of React components, such as the current authenticated user, theme (dark/light), or preferred language.\n\n### How to use Context\n\n**1. Create the Context**\n```jsx\nimport { createContext } from 'react';\n// Creates a Context object.\nexport const ThemeContext = createContext('light');\n```\n\n**2. Provide the Context**\nEvery Context object comes with a Provider React component that allows consuming components to subscribe to context changes. Wrap the tree of components that need the data in a `Provider` and pass a `value` prop.\n```jsx\nfunction App() {\n  const [theme, setTheme] = useState('dark');\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n```\n\n**3. Consume the Context (The `useContext` Hook)**\nAny component nested inside the Provider can access the value using the `useContext` Hook, completely bypassing the components in between!\n```jsx\nimport { useContext } from 'react';\nimport { ThemeContext } from './App'; // Import the context object\n\nfunction DeeplyNestedButton() {\n  const theme = useContext(ThemeContext); // Extracts 'dark'\n  return <button className={theme}>I am styled by context!</button>;\n}\n```\n\n### When to Use Context\nApply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition (passing components as `children`) is often a simpler alternative. Use Context primarily for truly global data.",
    "practiceTasks": [
      {
        "task": "Create a Context using createContext"
      },
      {
        "task": "Provide context values and consume them with useContext"
      }
    ],
    "codeExample": "import React, { useState, createContext, useContext } from 'react';\n\n// 1. Create Context\nconst UserContext = createContext();\n\nexport default function ContextDemo() {\n  const [user, setUser] = useState(\"Jane Doe\");\n\n  return (\n    // 2. Provide Context\n    <UserContext.Provider value={user}>\n      <div style={{ border: '1px solid gray', padding: '10px' }}>\n        <h2>Parent Component</h2>\n        <p>I provide the context value: {user}</p>\n        <IntermediateComponent />\n      </div>\n    </UserContext.Provider>\n  );\n}\n\n// Intermediate component doesn't need to pass props!\nfunction IntermediateComponent() {\n  return (\n    <div style={{ border: '1px dashed gray', padding: '10px', margin: '10px' }}>\n      <p>Intermediate Layer (No props passed here!)</p>\n      <DeepChildComponent />\n    </div>\n  );\n}\n\nfunction DeepChildComponent() {\n  // 3. Consume Context\n  const userName = useContext(UserContext);\n  return (\n    <div style={{ background: '#333', padding: '10px' }}>\n      <h3 style={{ color: 'gold' }}>Deeply Nested Child</h3>\n      <p>I retrieved the username directly from Context: <strong>{userName}</strong></p>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What problem does the Context API solve?",
        "options": [
          "Slow rendering",
          "Prop Drilling (passing props through many unnecessary levels)",
          "Database connection issues",
          "CSS specificity"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is 'Prop Drilling'?",
        "options": [
          "A dental procedure",
          "Passing props down through multiple intermediate components that don't need the data, just to reach a deeply nested child",
          "Drilling holes in the DOM",
          "A performance optimization technique"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What function creates a Context object?",
        "options": [
          "React.createState()",
          "React.buildContext()",
          "React.createContext()",
          "React.makeProvider()"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: What component is used to supply the context value to the component tree?",
        "options": [
          "<Context.Supplier>",
          "<Context.Provider>",
          "<Context.Giver>",
          "<Context.Source>"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Which prop is required on a Context Provider to pass the data?",
        "options": [
          "data",
          "state",
          "value",
          "context"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: Which Hook is used to consume/access the context data in a functional component?",
        "options": [
          "useContext",
          "useProvider",
          "useState",
          "useData"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 7: What argument must you pass to `useContext`?",
        "options": [
          "A string name",
          "The Context Object itself (created by createContext)",
          "A default value",
          "The Provider component"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: If a component calls `useContext(MyContext)` but there is no matching Provider above it in the tree, what value does it receive?",
        "options": [
          "Undefined",
          "An error is thrown",
          "The default value passed to createContext()",
          "Null"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: Can a Context value be dynamic (i.e., tied to state)?",
        "options": [
          "Yes, you can pass a state variable to the Provider's value prop, and updates will trigger re-renders",
          "No, Context values must be static strings or numbers",
          "Only if it is an object",
          "Only in class components"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: What happens to consuming components when the Provider's `value` prop changes?",
        "options": [
          "Nothing",
          "They crash",
          "Every component that consumes that context is forced to re-render",
          "The whole application reloads"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 11: Is it possible to have multiple different Context Providers in one application?",
        "options": [
          "Yes, you can nest multiple providers (e.g., ThemeProvider inside AuthProvider)",
          "No, you can only have one Context per app",
          "Only if they use the same variable name",
          "Yes, but they must be in separate files"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 12: What is a common use case for Context?",
        "options": [
          "Current authenticated user",
          "UI theme (dark/light mode)",
          "Preferred language",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 13: Should Context be used to replace ALL state management in your app?",
        "options": [
          "Yes, it completely replaces local state",
          "No, it should be used sparingly for truly global data, as it makes component reuse difficult",
          "Yes, it replaces Redux entirely",
          "No, it is deprecated"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: Can you pass an object with both state and a setter function into a Context Provider?",
        "options": [
          "Yes, e.g., `value={{ user, setUser }}`",
          "No, Context only accepts primitive values",
          "No, you must use Redux for that",
          "Only if the object is frozen"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 15: If Component C consumes Context, and Component B is between Provider A and Component C, does Component B re-render when the context value changes?",
        "options": [
          "Yes, always",
          "No, only Component C (the consumer) re-renders, bypassing Component B (unless B is also a consumer or parent state forces a render)",
          "Yes, because of prop drilling",
          "It throws an error"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: What is the class component equivalent of `useContext`?",
        "options": [
          "this.props.context",
          "static contextType or <Context.Consumer>",
          "this.context()",
          "There is no equivalent"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: If you pass a new object literal directly into the `value` prop (e.g., `value={{ color: 'red' }}`), what performance issue might occur?",
        "options": [
          "It will use too much memory",
          "It will create a new object reference on every render, causing all consumers to re-render unnecessarily",
          "It will throw a syntax error",
          "None"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 18: How do you fix the object reference performance issue in Context Providers?",
        "options": [
          "Use Redux",
          "Memoize the object using the `useMemo` hook before passing it to `value`",
          "Pass it as a string",
          "You cannot fix it"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: Is Context a replacement for component composition (passing components as children)?",
        "options": [
          "Yes",
          "No, the React docs suggest composition is often a simpler solution than Context for avoiding prop drilling",
          "They are the exact same thing",
          "Context is deprecated"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: Where should Context Providers typically be placed?",
        "options": [
          "At the very bottom of the tree",
          "As high up in the tree as necessary (often near the root or App component) to wrap all components that need the data",
          "Inside a useEffect hook",
          "Inside a map function"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Theme Switcher",
        "description": "Create a ThemeContext. Wrap your App in its Provider. Create a nested button that consumes the context to style itself, and another button to toggle the theme between 'light' and 'dark'."
      },
      {
        "title": "Assignment 2: Auth Context",
        "description": "Create an AuthContext that provides a 'user' object and a 'logout' function. Consume the context in a deeply nested Navbar component to show the user's name."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { createContext, useContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction Text() {\n  const theme = useContext(ThemeContext);\n  return <h2 style={{ color: theme === 'dark' ? 'white' : 'black', background: theme === 'dark' ? 'black' : 'white' }}>Current Theme: {theme}</h2>;\n}\n\nexport default function App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Text />\n    </ThemeContext.Provider>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 25,
    "title": "Custom Hooks",
    "description": "Reusable Logic",
    "detailedExplanation": "## Custom Hooks (🟡 LEVEL 3 – INTERMEDIATE)\n\n### What is a Custom Hook?\nA Custom Hook is a JavaScript function whose name starts with \"use\" and that may call other Hooks.\n\nBuilding your own Hooks lets you extract component logic into reusable functions. When you want to share logic between two JavaScript functions, you extract it to a third function. Both components and Hooks are functions, so this works for them too!\n\n### 👉 Concept: Reusable Logic\nImagine you have a component that fetches data from an API and displays it. The logic to handle `loading`, `error`, and `data` states using `useState` and `useEffect` is verbose.\n\nIf another component needs to fetch data from a different API, you'd have to copy-paste all that state and effect logic. Instead, you can extract it into a Custom Hook.\n\n### Creating a Custom Hook\n```jsx\nimport { useState, useEffect } from 'react';\n\n// Custom Hook must start with \"use\"\nexport function useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch(url)\n      .then(res => res.json())\n      .then(data => {\n        setData(data);\n        setLoading(false);\n      });\n  }, [url]);\n\n  // Return whatever the consuming component needs\n  return { data, loading };\n}\n```\n\n### Using the Custom Hook\nNow, any component can use this logic with a single line of code!\n\n```jsx\nimport { useFetch } from './useFetch';\n\nfunction UserList() {\n  const { data, loading } = useFetch('https://api.example.com/users');\n\n  if (loading) return <p>Loading users...</p>;\n  return <div>{data.map(user => <p>{user.name}</p>)}</div>;\n}\n```\n\n### Rules of Custom Hooks\n1. **Name must start with \"use\"**: This is a strict convention. It allows React to automatically check for Hook rule violations.\n2. **Custom Hooks share stateful logic, not state itself**: Each *call* to a Hook gets a completely independent, isolated state. They do not share data with each other (unless combined with Context).",
    "practiceTasks": [
      {
        "task": "Extract complex state logic into a separate function starting with 'use'"
      },
      {
        "task": "Return state and updater functions from a Custom Hook"
      }
    ],
    "codeExample": "import React, { useState, useEffect } from 'react';\n\n// --- The Custom Hook ---\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    \n    // Cleanup\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return width;\n}\n\n// --- The Component ---\nexport default function App() {\n  // Consuming the custom hook\n  const width = useWindowWidth();\n\n  return (\n    <div style={{ padding: '20px', textAlign: 'center' }}>\n      <h2>Custom Hook Demo</h2>\n      <p>Resize your browser window!</p>\n      <div style={{ padding: '20px', background: width < 600 ? 'coral' : 'lightblue', transition: 'background 0.5s' }}>\n        Current Window Width: <strong>{width}px</strong>\n        <p>{width < 600 ? 'Mobile View' : 'Desktop View'}</p>\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a Custom Hook in React?",
        "options": [
          "A CSS styling feature",
          "A JavaScript function whose name starts with 'use' and that calls other Hooks",
          "A built-in method to modify the DOM",
          "A premium React feature"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the primary purpose of a Custom Hook?",
        "options": [
          "To style components",
          "To extract and reuse stateful logic across multiple components",
          "To fetch data from a database directly",
          "To create new HTML tags"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What naming convention MUST be followed when creating a Custom Hook?",
        "options": [
          "It must start with 'get'",
          "It must be uppercase",
          "It must start with 'use' (e.g., useFetch)",
          "It must end with 'Hook'"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: Why does React enforce the 'use' naming convention for Custom Hooks?",
        "options": [
          "It sounds cool",
          "So the React linter can automatically check that the Rules of Hooks are followed inside it",
          "Because it is required by Webpack",
          "To distinguish them from class components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Can a Custom Hook call built-in Hooks like `useState` and `useEffect`?",
        "options": [
          "Yes, that is the entire point of a Custom Hook",
          "No, Custom Hooks cannot call built-in Hooks",
          "Only `useState`, not `useEffect`",
          "Only in production"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 6: If two different components call the same Custom Hook (e.g., `useCounter`), do they share the same state value?",
        "options": [
          "Yes, the state is global",
          "No, Custom Hooks share stateful *logic*, not state itself. Each call gets completely independent state.",
          "It depends on the props",
          "Yes, unless you use Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What can a Custom Hook return?",
        "options": [
          "Only an array",
          "Only an object",
          "Only JSX",
          "Anything you want (arrays, objects, primitives) depending on what the consuming component needs"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 8: Is `useFetch` a built-in React Hook?",
        "options": [
          "Yes",
          "No, it is a common example of a Custom Hook you would build yourself",
          "Yes, introduced in React 18",
          "No, it is from Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Which of the following is a valid Custom Hook signature?",
        "options": [
          "function fetchData() {}",
          "function useAuth() {}",
          "const GetUser = () => {}",
          "class useTheme {}"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Where can you call a Custom Hook?",
        "options": [
          "Inside a class component",
          "At the top level of a functional component (or inside another Custom Hook)",
          "Inside a regular JavaScript helper function",
          "Inside a nested if-statement"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 11: If you want to extract the logic for tracking mouse coordinates into a hook, what would be a good name for it?",
        "options": [
          "mouseTracker",
          "getMousePosition",
          "useMousePosition",
          "TrackMouse"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 12: Can a Custom Hook take arguments?",
        "options": [
          "No",
          "Yes, just like any normal JavaScript function",
          "Only a single object argument",
          "Only a string argument"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: If a Custom Hook returns an array `[value, setValue]`, what pattern is it mimicking?",
        "options": [
          "The `useEffect` pattern",
          "The `useState` pattern",
          "The Context pattern",
          "The Redux pattern"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: Does extracting logic into a Custom Hook change how the component behaves?",
        "options": [
          "Yes, it makes it slower",
          "No, it works exactly the same as if the code was written directly inside the component",
          "Yes, it prevents re-renders",
          "Yes, it makes it asynchronous"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: What is a common use case for a Custom Hook?",
        "options": [
          "Form validation handling",
          "Window resize tracking",
          "API Data fetching",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 16: Can you publish your Custom Hooks to npm for others to use?",
        "options": [
          "Yes, libraries like 'react-use' are built entirely on this concept",
          "No, they are strictly local to a project",
          "Only if approved by Facebook",
          "Only if they contain no state"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 17: If a Custom Hook uses `useEffect` to attach an event listener, where should the cleanup (removeEventListener) happen?",
        "options": [
          "In the component using the hook",
          "Inside the Custom Hook's `useEffect` return function",
          "In `index.js`",
          "It happens automatically"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 18: What happens if you don't start your Custom Hook name with 'use'?",
        "options": [
          "It crashes the app immediately",
          "React won't be able to check for hook violations, potentially leading to hard-to-find bugs",
          "Nothing, it's just a suggestion",
          "It converts it to a class component"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: Can a Custom Hook call another Custom Hook?",
        "options": [
          "Yes",
          "No",
          "Only if they are in the same file",
          "Only if they don't use state"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: What problem do Custom Hooks solve that previously required complex patterns like Higher-Order Components (HOCs) or Render Props?",
        "options": [
          "Reusing stateful logic between components",
          "Writing CSS",
          "Connecting to SQL databases",
          "Routing"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: useToggle Hook",
        "description": "Create a custom hook called useToggle that manages a boolean state. It should return an array with the current boolean value and a function to toggle it. Use it to toggle a piece of text on screen."
      },
      {
        "title": "Assignment 2: useLocalStorage Hook",
        "description": "Create a custom hook called useLocalStorage(key, initialValue) that syncs a piece of state with the browser's localStorage."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { useState } from 'react';\n\n// Custom Hook\nfunction useToggle(initialValue = false) {\n  const [value, setValue] = useState(initialValue);\n  const toggle = () => setValue(prev => !prev);\n  return [value, toggle];\n}\n\nexport default function App() {\n  const [isLightsOn, toggleLights] = useToggle(false);\n  return (\n    <div>\n      <h2>Lights are {isLightsOn ? 'ON 💡' : 'OFF 🌑'}</h2>\n      <button onClick={toggleLights}>Toggle Lights</button>\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 26,
    "title": "useRef",
    "description": "DOM Access",
    "detailedExplanation": "## useRef (🟡 LEVEL 3 – INTERMEDIATE)\n\n### What is useRef?\n`useRef` is a React Hook that lets you reference a value that’s not needed for rendering. It returns a mutable object whose `.current` property is initialized to the passed argument.\n\n```jsx\nconst refContainer = useRef(initialValue);\n```\n\n### Two Main Use Cases\n\n#### 1. Accessing DOM Elements\nIn React, you rarely manipulate the DOM directly. However, sometimes you absolutely must (e.g., to manage focus, text selection, or integrate with third-party DOM libraries). You can use a ref to get direct access to a DOM node.\n\n```jsx\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n\n  const onButtonClick = () => {\n    // `current` points to the mounted text input element\n    inputEl.current.focus();\n  };\n\n  return (\n    <>\n      <input ref={inputEl} type=\"text\" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}\n```\n\n#### 2. Storing Mutable Values Without Re-rendering\nState (`useState`) causes a component to re-render when it changes. \nRefs (`useRef`) **do not** cause a re-render when changed.\n\nIf you need to keep track of a mutable value (like a timer ID, a previous state value, or a flag to prevent an effect from running twice) but updating that value shouldn't redraw the UI, `useRef` is the perfect tool.\n\n```jsx\nfunction Timer() {\n  const timerId = useRef(null);\n\n  const start = () => {\n    timerId.current = setInterval(() => console.log('Tick'), 1000);\n  };\n\n  const stop = () => {\n    clearInterval(timerId.current);\n  };\n  // ...\n}\n```\n\n### Summary\nThink of `useRef` as a \"box\" that can hold a mutable value in its `.current` property. It survives re-renders, but changing it does not trigger a re-render.",
    "practiceTasks": [
      {
        "task": "Access a DOM element directly using a ref"
      },
      {
        "task": "Store a mutable value that shouldn't trigger a re-render"
      }
    ],
    "codeExample": "import React, { useRef, useState } from 'react';\n\nexport default function RefDemo() {\n  const [renderCount, setRenderCount] = useState(0);\n  \n  // 1. DOM Reference\n  const inputRef = useRef(null);\n  \n  // 2. Mutable value that doesn't cause re-renders\n  const clickCountRef = useRef(0);\n\n  const handleFocus = () => {\n    inputRef.current.focus();\n    inputRef.current.style.backgroundColor = 'lightyellow';\n  };\n\n  const handleSecretClick = () => {\n    clickCountRef.current += 1;\n    console.log(\"Secret clicks:\", clickCountRef.current);\n    // Notice the UI doesn't update when you click this!\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>useRef Demo</h2>\n      \n      <div>\n        <input ref={inputRef} type=\"text\" placeholder=\"I can be focused\" />\n        <button onClick={handleFocus} style={{ marginLeft: '10px' }}>Focus Input</button>\n      </div>\n\n      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid gray' }}>\n        <button onClick={handleSecretClick}>Secret Click (Check Console)</button>\n        <p>Secret Clicks (won't update until re-render): {clickCountRef.current}</p>\n        \n        <button onClick={() => setRenderCount(renderCount + 1)}>\n          Force Re-render (State change)\n        </button>\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What does the `useRef` hook return?",
        "options": [
          "A state variable",
          "A function",
          "A mutable object with a `.current` property",
          "A DOM node"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: What is the primary difference between `useState` and `useRef` when their values change?",
        "options": [
          "`useState` is faster",
          "Changing a `useState` value triggers a component re-render; changing a `useRef` value does NOT trigger a re-render",
          "They are identical",
          "`useRef` is only for strings"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which property of the ref object holds the actual value?",
        "options": [
          "ref.value",
          "ref.target",
          "ref.node",
          "ref.current"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 4: What is one common use case for `useRef`?",
        "options": [
          "Fetching data from an API",
          "Routing to a new page",
          "Directly accessing a DOM element (e.g., to manage focus)",
          "Styling text"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: How do you attach a ref to a JSX element?",
        "options": [
          "<input use={myRef} />",
          "<input id={myRef} />",
          "<input ref={myRef} />",
          "<input dom={myRef} />"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: If you have `const inputRef = useRef(null)`, how do you programmatically focus the input?",
        "options": [
          "inputRef.focus()",
          "inputRef.current.focus()",
          "inputRef.setFocus()",
          "document.focus(inputRef)"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Does the value stored in a ref persist across component re-renders?",
        "options": [
          "Yes, it persists for the full lifetime of the component",
          "No, it resets on every render",
          "Only if it is a number",
          "Only in class components"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: Can `useRef` be used to store mutable data like a timer ID from `setInterval`?",
        "options": [
          "Yes, it is perfectly suited for this because changing it won't cause unnecessary re-renders",
          "No, you must use state for timers",
          "Yes, but it will cause a re-render every tick",
          "No, it is only for DOM elements"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: When should you NOT use a ref?",
        "options": [
          "To manage input focus",
          "To trigger a media playback",
          "To store data that should be displayed and updated on the screen (use state instead)",
          "To integrate with a 3rd party non-React DOM library"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 10: Is mutating `ref.current` a side effect?",
        "options": [
          "Yes",
          "No",
          "Only if it's a DOM node",
          "Only in StrictMode"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 11: Can you pass a ref to a custom functional component (e.g., `<MyInput ref={inputRef} />`) out of the box?",
        "options": [
          "Yes, it works automatically",
          "No, functional components don't have instances. You must use `React.forwardRef` to pass it down to a DOM node inside the component.",
          "Yes, but only in React 18",
          "No, you can never do this"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 12: What happens if you render a ref's value in JSX (e.g., `<h1>{myRef.current}</h1>`) and then update `myRef.current`?",
        "options": [
          "The text updates on screen instantly",
          "The text does NOT update on screen because refs don't trigger re-renders",
          "It throws an error",
          "The app crashes"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: What is the initial value of `useRef('hello')`?",
        "options": [
          "null",
          "undefined",
          "{ current: 'hello' }",
          "'hello'"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 14: Which built-in React hook is `useRef` conceptually similar to, but without the re-rendering?",
        "options": [
          "useEffect",
          "useState",
          "useContext",
          "useReducer"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 15: Can you use `useRef` to track the previous value of a piece of state?",
        "options": [
          "Yes, by updating the ref in a `useEffect` (which runs after the render)",
          "No, it is impossible",
          "Only if you use Redux",
          "Only for strings"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 16: Is the `.current` property mutable?",
        "options": [
          "Yes, you can freely reassign it (e.g., `myRef.current = newValue`)",
          "No, it is strictly read-only",
          "Only if it holds a DOM node",
          "Only in class components"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 17: When is the `.current` property set when used on a DOM element (like `<div ref={myRef}>`)?",
        "options": [
          "Before render",
          "During render",
          "After the component mounts (the ref is null during the first render)",
          "When the user clicks it"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 18: What is the class component equivalent of `useRef` for creating a generic mutable instance variable?",
        "options": [
          "this.state",
          "Just adding a property to the class instance (e.g., `this.myVar = 'hello'`)",
          "this.props",
          "this.ref"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: What is `createRef`?",
        "options": [
          "A hook",
          "The older API for creating refs, mostly used in class components (it creates a new ref on every render if used in a function component)",
          "A routing feature",
          "A DOM method"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 20: If you want to read a value from an uncontrolled form input, which hook is best?",
        "options": [
          "useState",
          "useContext",
          "useRef",
          "useEffect"
        ],
        "correctAnswer": 2
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Auto-Focus",
        "description": "Create an input field that automatically focuses itself as soon as the component mounts on the screen using useRef and useEffect."
      },
      {
        "title": "Assignment 2: Stopwatch Timer",
        "description": "Create a stopwatch. Use state for the elapsed time, but use a ref to store the setInterval ID so you can clear it when a 'Stop' button is clicked."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { useRef } from 'react';\n\nexport default function App() {\n  const inputRef = useRef(null);\n  return (\n    <div>\n      <input ref={inputRef} type=\"text\" placeholder=\"Click button to focus me\" />\n      <button onClick={() => inputRef.current.focus()}>Focus</button>\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 27,
    "title": "Portals",
    "description": "Rendering Outside DOM",
    "detailedExplanation": "## Portals (🟡 LEVEL 3 – INTERMEDIATE)\n\n### What are Portals?\nBy default, React renders components as children of the nearest parent node in the DOM tree. This creates a strict parent-child hierarchy in the HTML structure.\n\nHowever, sometimes you need to render a child component at a completely different place in the DOM, physically outside of its parent component's DOM hierarchy. \n\n**Portals** provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.\n\n### 👉 Used for: Modals, Tooltips, and Popups\nImagine a generic `<div>` with `overflow: hidden` or a specific `z-index` constraint. If you try to render a Modal (popup window) inside that div, the modal might get clipped or hidden behind other elements.\n\nTo fix this, you want the Modal to be appended directly to `document.body` or a dedicated `<div id=\"modal-root\"></div>`, so it sits on top of everything else.\n\n### How to use Portals\nYou use `ReactDOM.createPortal(child, container)`.\n\n- **child**: Any renderable React child (an element, string, or fragment).\n- **container**: A DOM element (like `document.getElementById('modal-root')`).\n\n```jsx\nimport ReactDOM from 'react-dom';\n\nfunction Modal({ children }) {\n  // Instead of returning the children normally, we wrap them in a Portal.\n  // This sends the HTML to document.body, ignoring where <Modal> was actually placed in the code!\n  return ReactDOM.createPortal(\n    <div className=\"modal-overlay\">\n      {children}\n    </div>,\n    document.body\n  );\n}\n```\n\n### Event Bubbling through Portals\nEven though a portal can be anywhere in the physical DOM tree, it behaves like a normal React child in every other way. This includes **Event Bubbling**. An event fired from inside a portal will bubble up to ancestors in the *React* tree, even if those ancestors are not ancestors in the *DOM* tree.",
    "practiceTasks": [
      {
        "task": "Understand why physical DOM constraints require Portals"
      },
      {
        "task": "Use ReactDOM.createPortal to render a component outside its parent"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\nimport { createPortal } from 'react-dom';\n\n// The Modal Component using a Portal\nfunction Modal({ children, onClose }) {\n  return createPortal(\n    <div style={{\n      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,\n      backgroundColor: 'rgba(0,0,0,0.7)',\n      display: 'flex', justifyContent: 'center', alignItems: 'center',\n      zIndex: 1000\n    }}>\n      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', color: 'black' }}>\n        {children}\n        <br/><br/>\n        <button onClick={onClose}>Close Modal</button>\n      </div>\n    </div>,\n    document.body // Appends the HTML directly to the <body> tag!\n  );\n}\n\nexport default function PortalDemo() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div style={{ padding: '20px', border: '2px solid red', overflow: 'hidden', height: '100px' }}>\n      <h2>Portal Demo</h2>\n      <p>This div has overflow hidden. A normal modal would be clipped.</p>\n      \n      <button onClick={() => setIsOpen(true)}>Open Portal Modal</button>\n\n      {isOpen && (\n        <Modal onClose={() => setIsOpen(false)}>\n          <h3>I am a Modal!</h3>\n          <p>I live in document.body, escaping the red box.</p>\n        </Modal>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a React Portal?",
        "options": [
          "A routing system",
          "A way to render a component into a DOM node that exists outside the parent component's DOM hierarchy",
          "A tool for making API requests",
          "A 3D animation feature"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the primary use case for Portals?",
        "options": [
          "Rendering text",
          "Creating modals, tooltips, and dropdowns that need to break out of hidden overflows or z-index constraints",
          "Routing to new pages",
          "Connecting to Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which method is used to create a Portal?",
        "options": [
          "React.createPortal()",
          "ReactDOM.createPortal()",
          "window.createPortal()",
          "document.createPortal()"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What are the two arguments required by `createPortal`?",
        "options": [
          "(event, handler)",
          "(state, setter)",
          "(childElement, targetDOMNode)",
          "(component, props)"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: If you render a Modal component inside a deeply nested `<div>`, where does the physical HTML go if you use a Portal to `document.body`?",
        "options": [
          "Inside the deeply nested div",
          "At the end of the `<body>` tag",
          "In the `<head>`",
          "It is deleted"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: How does Event Bubbling work with Portals?",
        "options": [
          "Events do not bubble",
          "Events bubble up the physical DOM tree",
          "Events bubble up the *React* component tree, ignoring the physical DOM structure",
          "Events crash the app"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 7: If a user clicks a button inside a Portal, can an `onClick` handler on the React parent component catch the event?",
        "options": [
          "Yes, because React maintains the logical component hierarchy for events",
          "No, because the physical DOM node is outside the parent",
          "Only if the event is prevented",
          "Only in class components"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: Does rendering a component in a Portal change its ability to access Context?",
        "options": [
          "Yes, it loses access to Context",
          "No, it still accesses Context normally because it remains in the same React tree",
          "Only if the Context is global",
          "It throws an error"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Which package do you import `createPortal` from?",
        "options": [
          "react",
          "react-dom",
          "react-router-dom",
          "react-portal"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Why might a standard modal fail if rendered normally without a Portal?",
        "options": [
          "Because of parent elements with `overflow: hidden` or lower `z-index` values cutting it off",
          "Because React prevents absolute positioning",
          "Because modals require jQuery",
          "Because CSS is ignored"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 11: What is typically passed as the second argument (the container) to `createPortal`?",
        "options": [
          "document.body or a dedicated div like document.getElementById('modal-root')",
          "A React component",
          "A string ID",
          "null"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 12: Can you use Portals in server-side rendering (SSR)?",
        "options": [
          "Yes, easily",
          "No, because the DOM (e.g., document.body) does not exist on the server",
          "Only with Next.js",
          "Only with Express"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 13: Do Portals require Class components?",
        "options": [
          "Yes",
          "No, they work perfectly fine in functional components",
          "Yes, they require lifecycle methods",
          "Only in React 15"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 14: Does returning `createPortal` from a component's render function replace the component entirely in the DOM?",
        "options": [
          "Yes, the component renders nothing in its original DOM location, and sends its output to the portal target",
          "No, it renders in both places",
          "It renders an iframe",
          "It throws an error"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 15: What happens if the target DOM node for the Portal doesn't exist?",
        "options": [
          "React creates it automatically",
          "It throws a JavaScript error (Target container is not a DOM element)",
          "It defaults to the body",
          "It renders normally"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 16: Is `document.body` the only valid target for a Portal?",
        "options": [
          "Yes",
          "No, any valid DOM element can be the target",
          "Only divs can be targets",
          "Only spans can be targets"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 17: Can a Portal return multiple elements (like a Fragment)?",
        "options": [
          "Yes",
          "No, it must be a single element",
          "Only strings",
          "Only components"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 18: How does a Portal affect the Virtual DOM?",
        "options": [
          "It creates a separate Virtual DOM",
          "It remains part of the same Virtual DOM tree, despite being physically detached in the real DOM",
          "It deletes the Virtual DOM",
          "It bypasses the Virtual DOM entirely"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 19: Can you unmount a Portal component like any other component?",
        "options": [
          "Yes, by using conditional rendering (e.g., `isOpen && <Modal />`)",
          "No, it stays forever",
          "Only by refreshing the page",
          "Only by using manual DOM methods"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 20: Why not just use absolute positioning in CSS instead of a Portal?",
        "options": [
          "CSS is slower",
          "Because parent constraints like `overflow: hidden` or `transform` properties can restrict absolutely positioned elements, breaking the layout. Portals escape these physical constraints completely.",
          "Absolute positioning is deprecated",
          "Portals are a CSS feature"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Simple Portal",
        "description": "Create a 'Tooltip' component that uses a Portal to render text directly into document.body when hovered over a button."
      },
      {
        "title": "Assignment 2: Reusable Modal",
        "description": "Create a reusable Modal component that accepts 'isOpen', 'onClose', and 'children' props. Use a Portal to render it over the entire screen."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React, { useState } from 'react';\nimport { createPortal } from 'react-dom';\n\nfunction PortalMessage() {\n  return createPortal(\n    <div style={{ position: 'fixed', top: 10, right: 10, background: 'green', color: 'white', padding: 10 }}>\n      I am ported to the body!\n    </div>,\n    document.body\n  );\n}\n\nexport default function App() {\n  const [show, setShow] = useState(false);\n  return (\n    <div>\n      <button onClick={() => setShow(!show)}>Toggle Portal</button>\n      {show && <PortalMessage />}\n    </div>\n  );\n}",
      "/index.js": "import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 28,
    "title": "Performance Optimization",
    "description": "memo, useMemo, useCallback",
    "detailedExplanation": "## Performance Optimization (🔵 LEVEL 4 – ADVANCED REACT)\n\n### Preventing Unnecessary Re-renders\nReact is inherently fast thanks to the Virtual DOM. However, as your application grows, React might start re-rendering components unnecessarily. \n\nEvery time a parent component re-renders, **all of its children re-render by default**. If a child component performs heavy calculations or renders a massive list, this can cause significant lag.\n\nTo solve this, React provides three primary optimization tools: `React.memo`, `useMemo`, and `useCallback`.\n\n### 1. React.memo (Component Level)\n`React.memo` is a Higher-Order Component. If your component renders the exact same result given the same props, you can wrap it in `React.memo` for a performance boost. React will memorize the rendered output and skip re-rendering if the props haven't changed.\n\n```jsx\nconst HeavyComponent = React.memo(function HeavyComponent({ data }) {\n  /* renders using data */\n});\n```\n\n### 2. useMemo (Value Level)\nThe `useMemo` hook lets you cache the result of a heavy calculation between re-renders. It only recalculates the value if one of its dependencies changes.\n\n```jsx\nconst expensiveResult = useMemo(() => {\n  return performHeavyCalculation(data);\n}, [data]); // Only recalculate if 'data' changes\n```\n\n### 3. useCallback (Function Level)\nFunctions declared inside a component are recreated on every single render. If you pass a function as a prop to a `React.memo` child, the child will ALWAYS re-render because the function reference is new every time! \n\n`useCallback` caches a function definition between re-renders so its reference stays the same.\n\n```jsx\nconst handleAction = useCallback(() => {\n  doSomething(id);\n}, [id]); // Only recreate function if 'id' changes\n```\n\n### 👉 The Golden Rule of Optimization\n**Do not optimize prematurely.** \n`useMemo` and `useCallback` themselves carry a performance cost (React has to do work to cache and check dependencies). Only use them when you are actually passing props to highly optimized child components, or when a calculation is genuinely slow.",
    "practiceTasks": [
      {
        "task": "Understand when child components re-render"
      },
      {
        "task": "Apply React.memo, useMemo, and useCallback appropriately"
      }
    ],
    "codeExample": "import React, { useState, useMemo, useCallback } from 'react';\n\n// A child component wrapped in React.memo\nconst ChildComponent = React.memo(({ onAction }) => {\n  console.log(\"ChildComponent Re-rendered!\");\n  return (\n    <div style={{ background: '#333', padding: '10px', marginTop: '10px' }}>\n      <p>I am a heavy child component.</p>\n      <button onClick={onAction}>Trigger Action</button>\n    </div>\n  );\n});\n\nexport default function OptimizationDemo() {\n  const [count, setCount] = useState(0);\n  const [text, setText] = useState(\"\");\n\n  // 1. useMemo: Caching a heavy calculation\n  const expensiveCalculation = useMemo(() => {\n    console.log(\"Calculating heavy math...\");\n    let num = 0;\n    for (let i = 0; i < 10000000; i++) { num += 1; }\n    return num;\n  }, []); // Empty array: runs only once!\n\n  // 2. useCallback: Caching the function reference\n  // If we didn't use useCallback, the ChildComponent would re-render every time we type in the input!\n  const handleChildAction = useCallback(() => {\n    console.log(\"Action triggered from child!\");\n  }, []);\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Optimization Demo (Check Console)</h2>\n      \n      <div>\n        <label>Type here (causes Parent to render): </label>\n        <input value={text} onChange={e => setText(e.target.value)} />\n      </div>\n\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment Count</button>\n      \n      <p>Heavy Math Result: {expensiveCalculation}</p>\n\n      {/* Child only re-renders if its props change. Since we used useCallback, the prop stays exactly the same! */}\n      <ChildComponent onAction={handleChildAction} />\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What happens by default when a parent component re-renders?",
        "options": [
          "Nothing",
          "All of its child components re-render as well",
          "Only the parent re-renders",
          "The app crashes"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the purpose of React.memo?",
        "options": [
          "To memoize a function",
          "To skip re-rendering a component if its props have not changed",
          "To fetch data faster",
          "To cache state globally"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which Hook is used to cache the RESULT of an expensive calculation?",
        "options": [
          "useCallback",
          "useEffect",
          "useMemo",
          "useRef"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: Which Hook is used to cache a FUNCTION DEFINITION between re-renders?",
        "options": [
          "useCallback",
          "useMemo",
          "useState",
          "useFunction"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: Why might a React.memo child STILL re-render even if its props *look* the same?",
        "options": [
          "Because React is buggy",
          "Because an inline function or object literal was passed as a prop, creating a new memory reference on every render",
          "Because the child has no state",
          "Because it is forced to"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: How does `useCallback` fix the issue of a React.memo child unnecessarily re-rendering?",
        "options": [
          "It forces the child to ignore props",
          "It ensures the function passed as a prop retains the exact same memory reference across renders (unless its dependencies change)",
          "It converts the function to a string",
          "It deletes the function"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is premature optimization?",
        "options": [
          "Optimizing code before running it",
          "Spending time applying useMemo/useCallback everywhere without verifying if a performance problem actually exists",
          "Optimizing the server",
          "Optimizing CSS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Does `useMemo` execute its callback function during rendering or after rendering?",
        "options": [
          "During rendering",
          "After rendering (like useEffect)",
          "Before rendering",
          "Never"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: Can `useMemo` be used to cause side effects (like API calls)?",
        "options": [
          "Yes",
          "No, it runs during rendering and should be a pure calculation. Use useEffect for side effects.",
          "Only if it is async",
          "Only in class components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: If you pass an empty array `[]` as the second argument to `useMemo`, when does the calculation run?",
        "options": [
          "On every render",
          "Never",
          "Only once, during the initial render",
          "When the component unmounts"
        ],
        "correctAnswer": 2
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: React.memo",
        "description": "Create a Parent component with a counter and an input field. Create a Child component that receives the input text. Wrap the Child in React.memo and prove via console.logs that it does NOT re-render when the counter changes."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Performance Optimization</h2>\\n      <p>memo, useMemo, useCallback</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 29,
    "title": "Code Splitting",
    "description": "Lazy Loading & Suspense",
    "detailedExplanation": "## Code Splitting (🔵 LEVEL 4 – ADVANCED REACT)\n\n### What is Code Splitting?\nWhen you build a React application (using tools like Vite, Webpack, or Create React App), all of your JavaScript files are usually \"bundled\" into a single, massive file. \n\nIf your app is large, this bundle can become huge (megabytes in size). The user has to download this entire file before they can see or interact with *anything* on your website. This results in terrible loading times.\n\n**Code Splitting** is the practice of splitting your bundle into smaller chunks, which you can then load on demand (lazy loading).\n\n### React.lazy() and Suspense\nReact provides a built-in way to lazy-load components using `React.lazy()` and `<Suspense>`.\n\n```jsx\nimport React, { Suspense } from 'react';\n\n// Instead of a normal import:\n// import HeavyChart from './HeavyChart';\n\n// Use React.lazy for dynamic imports:\nconst HeavyChart = React.lazy(() => import('./HeavyChart'));\n\nfunction Dashboard() {\n  return (\n    <div>\n      <h2>Dashboard</h2>\n      {/* Suspense provides a fallback UI while the chunk is downloading */}\n      <Suspense fallback={<div>Loading chart...</div>}>\n        <HeavyChart />\n      </Suspense>\n    </div>\n  );\n}\n```\n\n### 👉 Route-Based Code Splitting\nThe most common and effective place to introduce code splitting is at the route level. Users usually only visit one page at a time. It makes no sense to force them to download the code for the Settings page when they are just viewing the Home page.\n\nBy wrapping your route components in `React.lazy`, your bundler will automatically create separate files for each route, drastically improving your initial load time!",
    "practiceTasks": [
      {
        "task": "Understand the benefits of reducing initial bundle size"
      },
      {
        "task": "Implement React.lazy and Suspense"
      }
    ],
    "codeExample": "import React, { Suspense, useState } from 'react';\n\n// Simulating a lazily loaded component\n// In a real app, this would be: const LazyComponent = React.lazy(() => import('./LazyComponent'));\nconst LazyComponent = React.lazy(() => {\n  return new Promise(resolve => {\n    setTimeout(() => resolve({\n      default: () => <div style={{ padding: '20px', background: '#005f73', color: 'white' }}>Hello! I was lazy loaded over the network!</div>\n    }), 2000); // Simulated 2-second network delay\n  });\n});\n\nexport default function CodeSplittingDemo() {\n  const [showLazy, setShowLazy] = useState(false);\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Code Splitting & Lazy Loading</h2>\n      <p>Clicking the button will \"download\" the component code before rendering it.</p>\n      \n      <button onClick={() => setShowLazy(true)}>Load Heavy Component</button>\n\n      <div style={{ marginTop: '20px' }}>\n        {showLazy && (\n          <Suspense fallback={<h3 style={{ color: 'coral' }}>Downloading chunk... Please wait...</h3>}>\n            <LazyComponent />\n          </Suspense>\n        )}\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a JavaScript 'bundle'?",
        "options": [
          "A package of goods",
          "A single file containing all of your app's code and dependencies merged together",
          "A React component",
          "A CSS file"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the main problem with a massive, single bundle?",
        "options": [
          "It looks ugly",
          "It takes a long time to download, delaying the initial load of the application",
          "It runs too fast",
          "It causes memory leaks"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What is Code Splitting?",
        "options": [
          "Breaking the CSS into multiple files",
          "Splitting the JavaScript bundle into smaller chunks that can be loaded on demand",
          "Deleting unused code",
          "Splitting the screen in half"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Which React function is used to dynamically import a component?",
        "options": [
          "React.split()",
          "React.dynamic()",
          "React.lazy()",
          "React.import()"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What component MUST wrap a lazily loaded component to provide a fallback UI?",
        "options": [
          "<Placeholder>",
          "<Fallback>",
          "<Suspense>",
          "<Loading>"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: What prop does `<Suspense>` accept to show a loading indicator?",
        "options": [
          "loading",
          "fallback",
          "spinner",
          "wait"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is the most common place to implement code splitting in a React app?",
        "options": [
          "At the route level (Route-based code splitting)",
          "Inside every single button",
          "Inside the CSS",
          "In the database"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: Does `React.lazy()` work with named exports (e.g., `export const MyComp`)?",
        "options": [
          "Yes",
          "No, it currently only supports default exports",
          "Only in Vite",
          "Only in Webpack"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: What syntax does `React.lazy()` use internally?",
        "options": [
          "Dynamic `import()` syntax",
          "Standard `require()`",
          "Ajax requests",
          "Fetch API"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: If a user is on a slow network, what will they see while a lazy component is downloading?",
        "options": [
          "A blank white screen",
          "The UI provided to the `fallback` prop of the `<Suspense>` wrapper",
          "An error page",
          "A browser alert"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Lazy Loading a Route",
        "description": "Set up React Router. Create an 'About' page component. Import the About component using React.lazy() and wrap your Routes in a Suspense component."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Code Splitting</h2>\\n      <p>Lazy Loading & Suspense</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 30,
    "title": "Error Boundaries",
    "description": "Error Handling in React",
    "detailedExplanation": "## Error Boundaries (🔵 LEVEL 4 – ADVANCED REACT)\n\n### The Problem: UI Crashes\nIn the past, JavaScript errors inside React components used to corrupt React’s internal state and cause it to emit cryptic errors. Even worse, if an error occurred anywhere in the component tree during rendering, **the entire application would unmount and show a blank white screen**.\n\nA localized error in a minor widget (like a user avatar failing to render) shouldn't crash your entire dashboard!\n\n### 👉 Concept: Catching Errors\nError boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree.\n\nError boundaries act like a `catch {}` block, but for components.\n\n### Creating an Error Boundary\nCurrently, Error Boundaries **must be Class Components**. There is no Hook equivalent yet. A class component becomes an error boundary if it defines either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch()`.\n\n```jsx\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state so the next render shows the fallback UI.\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    // You can also log the error to an error reporting service\n    console.error(\"Caught an error:\", error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>;\n    }\n    return this.props.children; \n  }\n}\n```\n\n### Usage\nWrap components that might fail inside the boundary:\n```jsx\n<ErrorBoundary>\n  <WidgetThatMightCrash />\n</ErrorBoundary>\n```",
    "practiceTasks": [
      {
        "task": "Understand the consequences of unhandled render errors"
      },
      {
        "task": "Implement a Class component with getDerivedStateFromError"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\n// The Error Boundary (Must be a class component)\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return (\n        <div style={{ padding: '20px', background: '#ffcccc', color: '#990000', border: '1px solid red' }}>\n          <h2>Oops! The widget crashed.</h2>\n          <p>But the rest of the application is still working fine!</p>\n          <button onClick={() => this.setState({ hasError: false })}>Try Again</button>\n        </div>\n      );\n    }\n    return this.props.children; \n  }\n}\n\n// A buggy component that intentionally crashes\nfunction BuggyWidget() {\n  const [crash, setCrash] = useState(false);\n  \n  if (crash) {\n    // Simulating a runtime error!\n    throw new Error(\"I crashed!\");\n  }\n\n  return (\n    <div style={{ background: '#eee', padding: '10px', color: 'black' }}>\n      <h4>I am a normal widget.</h4>\n      <button onClick={() => setCrash(true)}>Crash Me!</button>\n    </div>\n  );\n}\n\nexport default function ErrorBoundaryDemo() {\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Error Boundary Demo</h2>\n      <p>If you don't use an Error Boundary, clicking the button below would turn the entire screen blank.</p>\n      \n      <ErrorBoundary>\n        <BuggyWidget />\n      </ErrorBoundary>\n\n      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid green' }}>\n        <h4>Sidebar (Safe Zone)</h4>\n        <p>I am outside the boundary. I will not crash!</p>\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What happens if a component throws an error during rendering and there is no Error Boundary?",
        "options": [
          "The component simply disappears",
          "The entire React component tree unmounts, resulting in a blank white screen",
          "React automatically reloads the page",
          "An alert box appears"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is an Error Boundary?",
        "options": [
          "A CSS feature to contain elements",
          "A React component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI",
          "A firewall for React",
          "A Redux middleware"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which type of component MUST an Error Boundary be?",
        "options": [
          "A Functional Component",
          "A Class Component",
          "A Higher Order Component",
          "A Pure Component"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Which lifecycle method is used to update state so the next render shows a fallback UI?",
        "options": [
          "componentDidMount",
          "static getDerivedStateFromError",
          "componentWillUnmount",
          "render"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Which lifecycle method is typically used to log the error information to an external service (like Sentry)?",
        "options": [
          "componentDidUpdate",
          "static getDerivedStateFromError",
          "componentDidCatch",
          "constructor"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: Where do Error Boundaries catch errors?",
        "options": [
          "In event handlers (like onClick)",
          "In asynchronous code (like setTimeout or fetch)",
          "In server-side rendering",
          "During rendering, in lifecycle methods, and in constructors of the whole tree below them"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 7: If an error occurs inside an `onClick` event handler, will the Error Boundary catch it?",
        "options": [
          "Yes",
          "No, React doesn't need error boundaries for event handlers. You should use standard try/catch blocks.",
          "Only if it is a class component",
          "Only in production"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Does an Error Boundary catch errors within itself?",
        "options": [
          "Yes",
          "No, it only catches errors in the components below it in the tree",
          "Only syntax errors",
          "Only network errors"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: If you have multiple widgets on a dashboard, how should you use Error Boundaries?",
        "options": [
          "Wrap the entire app in one boundary",
          "Wrap each individual widget in its own Error Boundary so if one crashes, the others remain fully functional",
          "Don't use them",
          "Put them inside the widgets"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What is a popular third-party library that provides a pre-built Error Boundary component (so you don't have to write a class component yourself)?",
        "options": [
          "react-error-boundary",
          "react-router",
          "redux-thunk",
          "axios"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Create a Boundary",
        "description": "Write an ErrorBoundary class component. Use it to wrap a child component that intentionally throws an error when a button is clicked."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Error Boundaries</h2>\\n      <p>Error Handling in React</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 31,
    "title": "Higher Order Components",
    "description": "HOC Pattern",
    "detailedExplanation": "## Higher Order Components (🔵 LEVEL 4 – ADVANCED REACT)\n\n### What is a Higher-Order Component (HOC)?\nA Higher-Order Component is an advanced technique in React for reusing component logic. \nWhile a normal component transforms props into UI, a higher-order component transforms a component into another component.\n\nSpecifically, **a higher-order component is a function that takes a component and returns a new component.**\n\n```jsx\nconst EnhancedComponent = higherOrderComponent(WrappedComponent);\n```\n\n### 👉 The Concept: Wrapping Components\nImagine you have multiple components that all need to check if a user is logged in before rendering. If they aren't logged in, they should redirect to a login page.\n\nInstead of writing this logic inside every single component, you can create a `withAuth` HOC.\n\n```jsx\n// The HOC\nfunction withAuth(WrappedComponent) {\n  // It returns a new component\n  return function EnhancedComponent(props) {\n    const isAuthenticated = checkLoginStatus();\n    \n    if (!isAuthenticated) {\n      return <p>Please log in to view this page.</p>;\n    }\n    \n    // Renders the original component, passing through all props!\n    return <WrappedComponent {...props} />;\n  };\n}\n\n// Usage:\nconst ProtectedDashboard = withAuth(Dashboard);\nconst ProtectedProfile = withAuth(Profile);\n```\n\n### Note on Modern React\nHOCs were extremely popular before React Hooks were introduced. Today, many use cases for HOCs are better solved using **Custom Hooks**. However, you will still see HOCs in older codebases, and they are still highly useful for injecting props or wrapping components in specific Providers (like `connect` in Redux or `withRouter` in older React Router).",
    "practiceTasks": [
      {
        "task": "Understand that an HOC is a function returning a component"
      },
      {
        "task": "Pass props down through an HOC"
      }
    ],
    "codeExample": "import React from 'react';\n\n// --- The Higher Order Component (HOC) ---\n// Note the naming convention: it starts with \"with\"\nfunction withStyling(WrappedComponent) {\n  return function(props) {\n    return (\n      <div style={{ border: '2px solid #00ffcc', padding: '20px', borderRadius: '8px', background: '#222' }}>\n        <h4 style={{ color: '#00ffcc', marginTop: 0 }}>[Enhanced by HOC]</h4>\n        {/* Pass all props down to the original component */}\n        <WrappedComponent {...props} />\n      </div>\n    );\n  }\n}\n\n// --- Regular Components ---\nconst BasicButton = ({ label }) => <button>{label}</button>;\nconst BasicText = ({ content }) => <p>{content}</p>;\n\n// --- Enhanced Components ---\n// We create new components by passing our basic ones into the HOC!\nconst FancyButton = withStyling(BasicButton);\nconst FancyText = withStyling(BasicText);\n\nexport default function HocDemo() {\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Higher-Order Components Demo</h2>\n      \n      <h3>Normal Components:</h3>\n      <BasicButton label=\"Click Me\" />\n      <BasicText content=\"I am normal text.\" />\n      \n      <h3 style={{ marginTop: '30px' }}>HOC Enhanced Components:</h3>\n      <FancyButton label=\"Click Me\" />\n      <br />\n      <FancyText content=\"I am fancy text.\" />\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a Higher-Order Component (HOC)?",
        "options": [
          "A component that sits at the top of the app",
          "A function that takes a component and returns a new component",
          "A component with advanced CSS",
          "A Redux term for store"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What does a normal component transform?",
        "options": [
          "Props into UI",
          "Components into components",
          "State into Context",
          "HTML into JavaScript"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 3: What is the standard naming convention for an HOC?",
        "options": [
          "Starts with 'use' (e.g., useAuth)",
          "Starts with 'with' (e.g., withAuth)",
          "Ends with 'HOC' (e.g., AuthHOC)",
          "Starts with 'get' (e.g., getAuth)"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Why do we use HOCs?",
        "options": [
          "To write less CSS",
          "To reuse component logic across multiple components",
          "To fetch data faster",
          "To replace Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: If an HOC returns a new component, what MUST it do with the props?",
        "options": [
          "Delete them",
          "Pass them through to the wrapped component using the spread operator `{...props}`",
          "Change their names",
          "Store them in Context"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: What modern React feature has largely replaced many use cases for HOCs?",
        "options": [
          "Custom Hooks",
          "React Router",
          "Context API",
          "Error Boundaries"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 7: Can an HOC add new props to the wrapped component?",
        "options": [
          "Yes, it can inject additional props (like data or functions) before rendering the wrapped component",
          "No, it must only pass through existing props",
          "Only if the wrapped component is a class",
          "Only if it is written in TypeScript"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: What is a very famous example of an HOC from the Redux library?",
        "options": [
          "useSelector",
          "Provider",
          "connect()",
          "dispatch()"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: Should you mutate the original component inside an HOC (e.g., `WrappedComponent.prototype.newMethod = ...`)?",
        "options": [
          "Yes, it is the best way",
          "No, you should use composition by returning a completely new component that wraps the original",
          "Only in class components",
          "Only if you need to access state"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Where should you apply an HOC?",
        "options": [
          "Inside the render method of another component",
          "Outside the component definition, usually at the module export level",
          "Inside a useEffect hook",
          "Inside an onClick handler"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: withLogger",
        "description": "Create an HOC called withLogger that logs 'Component Mounted' to the console inside a useEffect whenever the wrapped component mounts."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Higher Order Components</h2>\\n      <p>HOC Pattern</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 32,
    "title": "Render Props",
    "description": "Sharing Logic Pattern",
    "detailedExplanation": "## Render Props (🔵 LEVEL 4 – ADVANCED REACT)\n\n### What is a Render Prop?\nThe term \"render prop\" refers to a technique for sharing code between React components using a prop whose value is a function.\n\nA component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.\n\n```jsx\n<DataProvider render={data => (\n  <h1>Hello {data.target}</h1>\n)}/>\n```\n\n### 👉 The Concept: Sharing Logic\nLike Higher-Order Components (HOCs), Render Props were a very popular way to share stateful logic before React Hooks were introduced. \n\nImagine you want to track the mouse position on the screen. Multiple components need this data. Instead of duplicating the `onMouseMove` logic, you create a `<MouseTracker>` component. But how does the `<MouseTracker>` tell the other components what the coordinates are?\n\nYou pass a function as a prop!\n\n```jsx\nclass MouseTracker extends React.Component {\n  state = { x: 0, y: 0 };\n\n  handleMouseMove = (event) => {\n    this.setState({ x: event.clientX, y: event.clientY });\n  }\n\n  render() {\n    return (\n      <div onMouseMove={this.handleMouseMove}>\n        {/* Instead of rendering something static, we call the render prop! */}\n        {this.props.render(this.state)}\n      </div>\n    );\n  }\n}\n\n// Usage:\n<MouseTracker render={(mouse) => (\n  <p>The mouse is at: {mouse.x}, {mouse.y}</p>\n)}/>\n```\n\n### Modern Context\nToday, **Custom Hooks** have largely replaced the need for Render Props. Tracking mouse position is much simpler with a `useMousePosition()` hook. However, you will still encounter Render Props in libraries like Formik or React Router (v5), and they remain a powerful pattern for component inversion of control.",
    "practiceTasks": [
      {
        "task": "Understand the inversion of control provided by render props"
      },
      {
        "task": "Pass a function returning JSX as a prop"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\n// The component with the Render Prop\nfunction MouseTracker({ render }) {\n  const [coords, setCoords] = useState({ x: 0, y: 0 });\n\n  const handleMouseMove = (e) => {\n    // We get the bounding rect to make the coordinates relative to the box\n    const rect = e.currentTarget.getBoundingClientRect();\n    setCoords({\n      x: e.clientX - rect.left,\n      y: e.clientY - rect.top\n    });\n  };\n\n  return (\n    <div \n      onMouseMove={handleMouseMove} \n      style={{ height: '200px', border: '2px dashed gray', position: 'relative' }}\n    >\n      {/* We pass the state to the function provided by the parent */}\n      {render(coords)}\n    </div>\n  );\n}\n\nexport default function RenderPropsDemo() {\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Render Props Demo</h2>\n      <p>Move your mouse inside the dashed box.</p>\n      \n      <MouseTracker render={(mouse) => (\n        <div style={{\n          position: 'absolute',\n          left: mouse.x + 10,\n          top: mouse.y + 10,\n          background: 'coral',\n          padding: '5px',\n          borderRadius: '4px',\n          pointerEvents: 'none' // Crucial so it doesn't block mouse movements\n        }}>\n          X: {Math.round(mouse.x)} | Y: {Math.round(mouse.y)}\n        </div>\n      )} />\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a Render Prop?",
        "options": [
          "A prop that forces a component to re-render",
          "A technique for sharing code between React components using a prop whose value is a function",
          "A tool for rendering HTML strings",
          "A prop used exclusively for CSS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the primary purpose of Render Props?",
        "options": [
          "To reuse stateful logic across multiple components",
          "To fetch data",
          "To style components",
          "To implement routing"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 3: In the Render Props pattern, what does the component with the render prop do instead of implementing its own render logic?",
        "options": [
          "It crashes",
          "It calls the function passed to the prop and returns the result",
          "It renders an empty div",
          "It passes the props to the parent"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Does the prop HAVE to be named `render`?",
        "options": [
          "Yes, it is a strict requirement",
          "No, it is just a convention. You can name it anything, even `children`.",
          "Only in Class components",
          "Only in Functional components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: If you pass a function as the `children` prop (e.g., `<Mouse>{(data) => <h1>{data}</h1>}</Mouse>`), is that still a Render Prop pattern?",
        "options": [
          "Yes, it is the exact same pattern, just using the `children` prop instead of a prop named `render`",
          "No, that is illegal in React",
          "No, that is called a Higher Order Component",
          "Only if it is an array"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 6: What modern React feature has largely replaced the need for Render Props?",
        "options": [
          "Context API",
          "React Router",
          "Custom Hooks",
          "Redux"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 7: What is a potential downside of using too many Render Props?",
        "options": [
          "It causes 'Callback Hell' or deeply nested component trees (wrapper hell)",
          "It is too fast",
          "It deletes the Virtual DOM",
          "It requires TypeScript"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: Which popular form library famously uses the Render Props pattern?",
        "options": [
          "Axios",
          "Formik",
          "Lodash",
          "Moment.js"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: In a `<MouseTracker render={(mouse) => <p>{mouse.x}</p>} />` component, who decides *what* is rendered on the screen?",
        "options": [
          "The MouseTracker component",
          "The parent component passing the render prop",
          "The browser",
          "React automatically"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: If you pass an inline function to a render prop (as shown above), what performance issue might occur if the parent component re-renders?",
        "options": [
          "The app crashes",
          "A new function reference is created on every render, which can cause the child to re-render unnecessarily if it uses React.memo",
          "The component becomes read-only",
          "Nothing happens"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Toggle Render Prop",
        "description": "Create a Toggle component with a boolean state. Instead of rendering UI directly, pass the boolean and a toggle function to a render prop."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Render Props</h2>\\n      <p>Sharing Logic Pattern</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 33,
    "title": "Compound Components",
    "description": "Advanced Component Design",
    "detailedExplanation": "## Compound Components (🔵 LEVEL 4 – ADVANCED REACT)\n\n### What are Compound Components?\nCompound Components is an advanced React pattern where multiple, distinct components work together to form a cohesive single unit. They share implicit state behind the scenes.\n\nThink of standard HTML elements like `<select>` and `<option>`. An `<option>` doesn't do much on its own, and a `<select>` is useless without options. They work *together*.\n\n```html\n<select>\n  <option value=\"1\">One</option>\n  <option value=\"2\">Two</option>\n</select>\n```\n\n### 👉 The Concept: Implicit State Sharing\nIf you want to build a custom accessible Dropdown, or an Accordion, or a Tab system, you could pass a massive configuration object as a prop:\n`<Tabs config={[{title: 'Tab 1', content: '...'}]} />`\n\nHowever, this is inflexible. What if you want one tab title to have an icon?\n\nCompound components allow you to write declarative, flexible JSX while sharing state using the **Context API**.\n\n```jsx\n// Highly flexible, declarative JSX!\n<Tabs>\n  <Tabs.List>\n    <Tabs.Tab index={0}>Tab 1</Tabs.Tab>\n    <Tabs.Tab index={1}>Tab 2</Tabs.Tab>\n  </Tabs.List>\n  <Tabs.Panels>\n    <Tabs.Panel index={0}>Content 1</Tabs.Panel>\n    <Tabs.Panel index={1}>Content 2</Tabs.Panel>\n  </Tabs.Panels>\n</Tabs>\n```\n\n### How it works\n1. The parent `<Tabs>` component holds the state (e.g., `activeTabIndex`) and provides it via Context.\n2. The child components (`<Tabs.Tab>`, `<Tabs.Panel>`) consume that context to know whether they should be styled as active, or whether they should render their content at all.\n3. The user gets total control over the layout (putting the tabs below the panels, adding extra divs, etc.) without breaking the logic!",
    "practiceTasks": [
      {
        "task": "Understand implicit state sharing"
      },
      {
        "task": "Use Context to link parent and child components"
      }
    ],
    "codeExample": "import React, { useState, createContext, useContext } from 'react';\n\n// 1. Create the Context\nconst AccordionContext = createContext();\n\n// 2. The Parent Component (Provides State)\nfunction Accordion({ children }) {\n  const [openIndex, setOpenIndex] = useState(null);\n\n  const toggle = (index) => {\n    setOpenIndex(prev => prev === index ? null : index);\n  };\n\n  return (\n    <AccordionContext.Provider value={{ openIndex, toggle }}>\n      <div style={{ border: '1px solid gray', borderRadius: '4px', width: '300px' }}>\n        {children}\n      </div>\n    </AccordionContext.Provider>\n  );\n}\n\n// 3. Child Components (Consume State)\nAccordion.Item = function AccordionItem({ index, title, children }) {\n  const { openIndex, toggle } = useContext(AccordionContext);\n  const isOpen = openIndex === index;\n\n  return (\n    <div style={{ borderBottom: '1px solid gray' }}>\n      <button \n        onClick={() => toggle(index)}\n        style={{ width: '100%', padding: '10px', textAlign: 'left', background: '#333', color: 'white', cursor: 'pointer', border: 'none' }}\n      >\n        {title} {isOpen ? '▲' : '▼'}\n      </button>\n      {isOpen && (\n        <div style={{ padding: '10px', background: '#1e1e1e' }}>\n          {children}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default function CompoundComponentsDemo() {\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Compound Components Demo</h2>\n      \n      {/* Declarative usage! The user can control the layout. */}\n      <Accordion>\n        <Accordion.Item index={0} title=\"Section 1\">\n          <p>Content for section 1...</p>\n        </Accordion.Item>\n        <Accordion.Item index={1} title=\"Section 2\">\n          <p>Content for section 2...</p>\n        </Accordion.Item>\n        <Accordion.Item index={2} title=\"Section 3\">\n          <p>Content for section 3...</p>\n        </Accordion.Item>\n      </Accordion>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is the Compound Components pattern?",
        "options": [
          "A way to combine multiple JavaScript files",
          "A pattern where multiple components work together to form a cohesive unit, sharing implicit state",
          "A tool for hashing passwords",
          "A CSS technique"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is a native HTML example of a compound component?",
        "options": [
          "`<input />`",
          "`<img />`",
          "`<select>` and `<option>`",
          "`<br />`"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: What is the main benefit of using Compound Components over passing a massive 'configuration object' as a prop?",
        "options": [
          "It runs much faster",
          "It provides the user with declarative, flexible control over the UI layout and rendering",
          "It uses less memory",
          "It requires no JavaScript"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Which React API is heavily used behind the scenes to make Compound Components work?",
        "options": [
          "Context API",
          "Fetch API",
          "React Router",
          "Redux"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: In an `<Accordion>` compound component, where does the state (e.g., which panel is open) typically live?",
        "options": [
          "In the child `<Accordion.Item>`",
          "In the parent `<Accordion>` component",
          "In the global Window object",
          "In localStorage"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: How do the child components access the state held by the parent component?",
        "options": [
          "By passing props infinitely",
          "By consuming the Context provided by the parent",
          "Using document.getElementById",
          "By guessing"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Why do we often attach child components as properties of the parent (e.g., `Accordion.Item = function...`)?",
        "options": [
          "It is required by React",
          "It is a convenient namespace pattern that clearly communicates that the child is meant to be used with the parent",
          "It improves performance",
          "It prevents memory leaks"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: If you want to render an extra `<div>` between `<Tabs.Tab>` elements in a compound component, will it break the logic?",
        "options": [
          "Yes, always",
          "No, because Context allows state to bypass the extra DOM elements, giving you layout flexibility",
          "Only in class components",
          "It will crash the browser"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: What type of UI elements are best built using Compound Components?",
        "options": [
          "A simple button",
          "A static paragraph of text",
          "Complex, multi-part interactive UIs like Tabs, Accordions, Dropdowns, and Modals",
          "Images"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 10: What hook does the child component use to access the shared state?",
        "options": [
          "useState",
          "useContext",
          "useEffect",
          "useReducer"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Tabs Component",
        "description": "Build a compound <Tabs> component using Context. It should have a Parent <Tabs>, a <Tabs.List> for the buttons, and <Tabs.Panels> for the content."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Compound Components</h2>\\n      <p>Advanced Component Design</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 34,
    "title": "Fetch API",
    "description": "Fetching Data",
    "detailedExplanation": "## Fetch API (🔵 LEVEL 5 – DATA HANDLING)\n\n### Interacting with Servers\nMost React applications are useless without data. To get data into your React app, you need to communicate with a server (an API) over the network. \n\nThe most standard, built-in way to do this in modern JavaScript is the **Fetch API**.\n\n### 👉 Concept: Asynchronous Data\nNetwork requests take time. When you ask a server for data, your JavaScript code does not stop and wait. Instead, `fetch()` returns a **Promise**. You must handle this promise using `.then()` or `async / await`.\n\n### Basic Fetch Example\nThe best place to fetch initial data for a component is inside a `useEffect` hook with an empty dependency array (so it only runs once when the component mounts).\n\n```jsx\nimport { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    // 1. Make the request\n    fetch('https://jsonplaceholder.typicode.com/users')\n      // 2. Parse the JSON response\n      .then(response => response.json())\n      // 3. Update the state with the data\n      .then(data => setUsers(data));\n  }, []);\n\n  return (\n    <ul>\n      {users.map(user => <li key={user.id}>{user.name}</li>)}\n    </ul>\n  );\n}\n```\n\n### Async / Await Syntax\nMany developers prefer the `async / await` syntax over `.then()`. However, because the `useEffect` callback function cannot be async itself, you must define an async function *inside* the effect and call it immediately.\n\n```jsx\nuseEffect(() => {\n  const fetchData = async () => {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n    const data = await response.json();\n    setUsers(data);\n  };\n\n  fetchData();\n}, []);\n```\n\n### POST Requests\nTo send data to a server (like submitting a form), you provide a configuration object to `fetch`.\n\n```javascript\nfetch('https://api.example.com/data', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: \"John\" })\n});\n```",
    "practiceTasks": [
      {
        "task": "Make a GET request using fetch"
      },
      {
        "task": "Parse the response using .json()"
      }
    ],
    "codeExample": "import React, { useState, useEffect } from 'react';\n\nexport default function FetchDemo() {\n  const [todo, setTodo] = useState(null);\n  const [loading, setLoading] = useState(false);\n\n  const fetchRandomTodo = async () => {\n    setLoading(true);\n    try {\n      // Get a random ID between 1 and 100\n      const randomId = Math.floor(Math.random() * 100) + 1;\n      \n      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`);\n      const data = await response.json();\n      \n      setTodo(data);\n    } catch (error) {\n      console.error(\"Error fetching data: \", error);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  // Fetch immediately on mount\n  useEffect(() => {\n    fetchRandomTodo();\n  }, []);\n\n  return (\n    <div style={{ padding: '20px', background: '#1e1e1e', borderRadius: '8px', border: '1px solid #444' }}>\n      <h2>Fetch API Demo</h2>\n      <button onClick={fetchRandomTodo} disabled={loading} style={{ marginBottom: '20px' }}>\n        {loading ? 'Fetching...' : 'Fetch Random Todo'}\n      </button>\n\n      {todo && (\n        <div style={{ padding: '15px', background: '#333', borderRadius: '5px' }}>\n          <h4>{todo.title}</h4>\n          <p>Status: {todo.completed ? '✅ Completed' : '❌ Pending'}</p>\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is the Fetch API used for?",
        "options": [
          "Styling components",
          "Routing between pages",
          "Making network requests to get or send data to a server",
          "Managing local state"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: What does the `fetch()` function return?",
        "options": [
          "A string",
          "A Promise",
          "A React Component",
          "An array"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Where is the best place to call `fetch` when you want data to load as soon as a component appears?",
        "options": [
          "Inside the render body directly",
          "Inside a useEffect hook with an empty dependency array []",
          "Inside a useMemo hook",
          "Inside a CSS file"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Why do we need to call `response.json()` after a successful fetch?",
        "options": [
          "Because fetch returns a string by default",
          "To convert the raw HTTP Response body stream into a JavaScript object",
          "To encrypt the data",
          "To send the data back to the server"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Does `response.json()` return a Promise?",
        "options": [
          "Yes, it is asynchronous and must be awaited or chained with .then()",
          "No, it returns the object instantly",
          "Only if the data is large",
          "Only in Node.js"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 6: Why can't you write `useEffect(async () => { ... })`?",
        "options": [
          "Because useEffect does not support promises",
          "Because the return value of an async function is a Promise, but useEffect expects the return value to be a cleanup function (or nothing)",
          "Because React bans async functions",
          "It actually works perfectly"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: How do you correctly use `async/await` inside `useEffect`?",
        "options": [
          "You can't",
          "Define the async function outside the component",
          "Define the async function inside the effect and call it immediately",
          "Use a Custom Hook only"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 8: What is the default HTTP method used by `fetch()` if none is specified?",
        "options": [
          "POST",
          "PUT",
          "DELETE",
          "GET"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 9: How do you make a POST request with `fetch`?",
        "options": [
          "fetch('url', 'POST', data)",
          "fetch('url').post(data)",
          "fetch('url', { method: 'POST', body: JSON.stringify(data) })",
          "post('url', data)"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 10: What header is usually required when sending JSON data in a POST request?",
        "options": [
          "Accept: text/html",
          "Content-Type: application/json",
          "Authorization: Bearer",
          "Cache-Control: no-cache"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Fetch and Display",
        "description": "Use the Fetch API to get a list of users from 'https://jsonplaceholder.typicode.com/users' and display their names in a list."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Fetch API</h2>\\n      <p>Fetching Data</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 35,
    "title": "Axios",
    "description": "HTTP Requests",
    "detailedExplanation": "## Axios (🔵 LEVEL 5 – DATA HANDLING)\n\n### What is Axios?\nWhile the built-in `fetch()` API is great, many developers prefer a third-party library called **Axios**. \nAxios is a promise-based HTTP client for the browser and Node.js.\n\n### 👉 Why use Axios over Fetch?\nAxios provides several quality-of-life improvements over standard fetch:\n\n1. **Automatic JSON Parsing:** You don't need to call `.json()`! Axios automatically transforms the response data into JSON. The data is available on the `response.data` property.\n2. **Error Handling:** `fetch()` does NOT reject a promise on HTTP error statuses (like 404 or 500). It only rejects on network failures. You have to manually check `if (!response.ok)`. **Axios automatically throws an error for any status outside the 2xx range**, making it much easier to catch errors!\n3. **Interceptors:** Axios allows you to intercept requests or responses before they are handled (e.g., to automatically attach an Authorization token to every request).\n4. **Timeouts:** Axios lets you easily set request timeouts.\n\n### Example Comparison\n\n**Using Fetch:**\n```javascript\nfetch('https://api.example.com/users')\n  .then(res => {\n    if (!res.ok) throw new Error('Network response was not ok');\n    return res.json();\n  })\n  .then(data => console.log(data))\n  .catch(err => console.error(err));\n```\n\n**Using Axios:**\n```javascript\nimport axios from 'axios';\n\naxios.get('https://api.example.com/users')\n  .then(res => console.log(res.data)) // Automatically parsed!\n  .catch(err => console.error(err));  // Catches 404s and 500s automatically!\n```\n\n### Global Defaults\nA huge benefit of Axios is setting global configuration for your entire app:\n```javascript\naxios.defaults.baseURL = 'https://api.example.com';\naxios.defaults.headers.common['Authorization'] = 'Bearer token123';\n\n// Now you can just do:\naxios.get('/users'); // Automatically uses the base URL and auth header!\n```",
    "practiceTasks": [
      {
        "task": "Understand automatic JSON parsing in Axios"
      },
      {
        "task": "Understand Axios error handling vs Fetch"
      }
    ],
    "codeExample": "// NOTE: This is a conceptual example for the Playground.\n// In a real environment, you must run: npm install axios\n// import axios from 'axios';\n\nimport React, { useState } from 'react';\n\nexport default function AxiosDemo() {\n  const [data, setData] = useState(null);\n  const [error, setError] = useState(null);\n\n  const handleFetch = async () => {\n    try {\n      // Using standard fetch here to simulate Axios behavior in the playground\n      // In Axios, this would be: const response = await axios.get('url');\n      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n      const jsonData = await response.json(); // Axios does this automatically!\n      \n      // Axios puts the payload inside a 'data' object\n      const axiosStyleResponse = { data: jsonData, status: 200 };\n      \n      setData(axiosStyleResponse.data);\n      setError(null);\n    } catch (err) {\n      setError(err.message);\n    }\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Axios Concepts</h2>\n      <p>Axios simplifies requests by automatically parsing JSON and throwing errors on 404/500 HTTP statuses.</p>\n      \n      <button onClick={handleFetch}>Simulate Axios Request</button>\n\n      {error && <p style={{ color: 'red' }}>Error: {error}</p>}\n      {data && (\n        <pre style={{ background: '#333', padding: '10px', marginTop: '20px', color: '#00ffcc' }}>\n          {JSON.stringify(data, null, 2)}\n        </pre>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is Axios?",
        "options": [
          "A state management library",
          "A built-in browser API",
          "A popular third-party, promise-based HTTP client",
          "A CSS framework"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: What is a major advantage of Axios over the Fetch API?",
        "options": [
          "It is faster",
          "It automatically transforms JSON data, so you don't have to call .json()",
          "It works without the internet",
          "It doesn't use Promises"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Where does Axios place the actual JSON payload returned from the server?",
        "options": [
          "response.json",
          "response.body",
          "response.data",
          "response.payload"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: How does Fetch handle a 404 or 500 HTTP error status?",
        "options": [
          "It throws an error into the .catch() block",
          "It resolves the promise normally, and you must manually check `response.ok`",
          "It crashes the app",
          "It retries the request"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: How does Axios handle a 404 or 500 HTTP error status?",
        "options": [
          "It automatically rejects the promise, triggering the .catch() block",
          "It resolves normally",
          "It ignores the error",
          "It alerts the user"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 6: What is an Axios 'Interceptor'?",
        "options": [
          "A virus",
          "A way to run code or modify requests/responses globally before they are handled by then/catch",
          "A routing feature",
          "A tool to intercept DOM events"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: How do you make a POST request with Axios?",
        "options": [
          "axios.post('/url', { name: 'John' })",
          "axios.send('/url', { name: 'John' })",
          "axios('/url').post({ name: 'John' })",
          "axios.request('POST', '/url')"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: What feature does Axios have that makes it easy to work with a single API across your app?",
        "options": [
          "axios.setAPI()",
          "axios.defaults.baseURL",
          "axios.config.server",
          "axios.init()"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Does Axios work in Node.js environments (like backend servers) as well as the browser?",
        "options": [
          "Yes",
          "No, only in the browser",
          "No, only in Node.js",
          "Only with Next.js"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: Is Axios built into React?",
        "options": [
          "Yes",
          "No, you must install it via npm (`npm install axios`)",
          "Yes, but you have to enable it",
          "No, it is built into the browser"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Mental Model",
        "description": "Write down the three main benefits of using Axios over the native Fetch API."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Axios</h2>\\n      <p>HTTP Requests</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 36,
    "title": "Async Handling",
    "description": "Loading & Error States",
    "detailedExplanation": "## Async Handling (🔵 LEVEL 5 – DATA HANDLING)\n\n### The Three States of Asynchronous Data\nWhen you build robust React applications, you must account for the fact that network requests take time and can fail. \n\nEvery time you fetch data, your UI should handle three distinct states:\n1. **Loading State**: The request has started, but data hasn't arrived yet. Show a spinner or skeleton loader.\n2. **Success State**: The data has arrived successfully. Render the data.\n3. **Error State**: The request failed (network issue, 500 server error, etc.). Show an error message to the user.\n\n### 👉 Concept: Managing State variables\nTo handle this properly, you typically need three pieces of state:\n\n```jsx\nconst [data, setData] = useState(null);\nconst [isLoading, setIsLoading] = useState(true);\nconst [error, setError] = useState(null);\n```\n\n### Example Implementation\n\n```jsx\nuseEffect(() => {\n  const loadData = async () => {\n    // 1. Reset state (in case of re-fetching)\n    setIsLoading(true);\n    setError(null);\n\n    try {\n      // 2. Fetch the data\n      const response = await fetch('https://api.example.com/data');\n      if (!response.ok) throw new Error(\"Failed to fetch data\");\n      \n      const result = await response.json();\n      \n      // 3. Success: Save data\n      setData(result);\n    } catch (err) {\n      // 4. Error: Save error message\n      setError(err.message);\n    } finally {\n      // 5. Always stop loading, regardless of success or failure\n      setIsLoading(false);\n    }\n  };\n\n  loadData();\n}, []);\n\n// --- Conditional Rendering based on state ---\nif (isLoading) return <p>Loading data...</p>;\nif (error) return <p>Error: {error}</p>;\nreturn <div>{data.name}</div>;\n```\n\nHandling these three states ensures your application feels professional, responsive, and doesn't crash silently when APIs fail.",
    "practiceTasks": [
      {
        "task": "Implement Loading, Success, and Error states in a component"
      },
      {
        "task": "Use try/catch/finally blocks"
      }
    ],
    "codeExample": "import React, { useState, useEffect } from 'react';\n\nexport default function AsyncHandlingDemo() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  const fetchWithCondition = (shouldFail) => {\n    setLoading(true);\n    setError(null);\n    setData(null);\n\n    // Simulate a network request taking 1.5 seconds\n    setTimeout(() => {\n      if (shouldFail) {\n        // Simulating an error\n        setError(\"Network error: Could not reach the server!\");\n        setLoading(false);\n      } else {\n        // Simulating success\n        setData({ message: \"Data loaded successfully!\", id: 101 });\n        setLoading(false);\n      }\n    }, 1500);\n  };\n\n  return (\n    <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '8px' }}>\n      <h2>Robust Async Handling</h2>\n      \n      <div style={{ marginBottom: '20px' }}>\n        <button onClick={() => fetchWithCondition(false)} style={{ marginRight: '10px' }}>\n          Fetch (Success)\n        </button>\n        <button onClick={() => fetchWithCondition(true)}>\n          Fetch (Fail)\n        </button>\n      </div>\n\n      {/* 1. Loading State */}\n      {loading && (\n        <div style={{ color: 'lightblue', fontSize: '18px' }}>⏳ Loading data... Please wait.</div>\n      )}\n\n      {/* 2. Error State */}\n      {error && (\n        <div style={{ color: '#ff6b6b', background: '#3b1c1c', padding: '10px', borderRadius: '5px' }}>\n          ⚠️ {error}\n        </div>\n      )}\n\n      {/* 3. Success State */}\n      {data && (\n        <div style={{ color: '#51cf66', background: '#193b22', padding: '10px', borderRadius: '5px' }}>\n          ✅ {data.message} (ID: {data.id})\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What are the three core states you must handle when fetching data?",
        "options": [
          "Red, Green, Blue",
          "Loading, Success, Error",
          "Mount, Update, Unmount",
          "State, Props, Context"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Why is a 'Loading' state important?",
        "options": [
          "To make the app run slower",
          "To provide visual feedback to the user that a network request is in progress",
          "To satisfy React compiler rules",
          "To style the component"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What is the best way to track loading and error states?",
        "options": [
          "Using CSS classes",
          "Using dedicated React state variables (e.g., `isLoading`, `error`)",
          "Using Redux only",
          "Saving them to localStorage"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: In a `try/catch` block, where should you place the code that executes if the fetch succeeds?",
        "options": [
          "In the `try` block, after the `await` statements",
          "In the `catch` block",
          "In the `finally` block",
          "Outside the block completely"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: What is the purpose of the `finally` block in a `try/catch/finally` structure?",
        "options": [
          "To throw a final error",
          "To execute code regardless of whether the try succeeded or failed (e.g., setting `isLoading` to false)",
          "To retry the request",
          "To terminate the application"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: If you do not handle the 'Error' state, what happens if the API goes down?",
        "options": [
          "The app fixes it automatically",
          "The user might see an infinite loading spinner or a blank screen, with no idea what went wrong",
          "React shows a generic error page",
          "The browser reloads"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What should you do before starting a new fetch request (if the component allows re-fetching)?",
        "options": [
          "Reset the error state to null and set loading to true",
          "Set the data to null",
          "Unmount the component",
          "Change the URL"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: Which conditional rendering pattern is commonly used for async states?",
        "options": [
          "Early returns (`if (loading) return <Spinner />`)",
          "Ternary operators in JSX",
          "Both are very common",
          "Neither"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: What does `throw new Error('msg')` do?",
        "options": [
          "It logs a message to the console",
          "It stops execution of the `try` block and jumps immediately to the `catch` block",
          "It creates a new HTML element",
          "It resolves a Promise"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Libraries like React Query or SWR handle these three states (loading, error, data) for you automatically.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: The Three States",
        "description": "Create a component with three buttons: 'Start Load', 'Succeed', and 'Fail'. Use state to mimic a data fetch cycle, showing a Loading message, a Success message, or an Error message based on the button clicked."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Async Handling</h2>\\n      <p>Loading & Error States</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 37,
    "title": "API Caching",
    "description": "Performance Optimization",
    "detailedExplanation": "## API Caching (🔵 LEVEL 5 – DATA HANDLING)\n\n### The Problem: Redundant Requests\nWhen users navigate through an SPA (Single Page Application), components mount and unmount frequently. \n\nIf a user visits the \"Profile\" page, goes to \"Settings\", and then clicks back to \"Profile\", the `useEffect` hook in the Profile component will fire again, making another network request to the server to fetch the exact same data.\n\nThis results in:\n- Wasted bandwidth.\n- Unnecessary load on the server.\n- Slow, laggy UI experiences (the user sees a loading spinner every time they navigate).\n\n### 👉 Concept: Caching\nCaching is the practice of storing the result of an expensive operation (like an API request) so that subsequent requests for the same data can be served instantly from memory, rather than making another network call.\n\n### Manual Caching\nYou can implement caching manually by lifting state up to a global Context or Redux store. If the data already exists in the store, the component skips the `fetch` call.\n\n### Server State Libraries (The Modern Standard)\nWriting manual caching logic is tedious and prone to bugs (cache invalidation is notoriously difficult). \n\nModern React applications rely on dedicated \"Server State\" libraries, most notably **React Query (TanStack Query)** and **SWR**.\n\nThese libraries completely replace the traditional `useEffect` + `fetch` pattern.\n\n```jsx\nimport { useQuery } from '@tanstack/react-query';\n\nfunction UserProfile() {\n  // React Query handles the fetch, the caching, the loading state, and the error state!\n  const { data, isLoading, error } = useQuery(['userProfile'], fetchUserData);\n\n  if (isLoading) return <p>Loading...</p>;\n  if (error) return <p>Error loading profile.</p>;\n  return <div>{data.name}</div>;\n}\n```\n\n### Benefits of React Query / SWR\n- **Instant Navigation**: Data is served from the cache instantly.\n- **Background Fetching**: The library silently updates the cache in the background while the user views the stale data.\n- **Deduplication**: If two components request the same API endpoint at the same time, only ONE network request is made.\n- **Auto-Retries**: Automatically retries failed requests.",
    "practiceTasks": [
      {
        "task": "Understand the Stale-While-Revalidate concept"
      },
      {
        "task": "Identify when redundant API calls are being made"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\n// A simple manual cache implementation\nconst simpleCache = {};\n\nexport default function ApiCachingDemo() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [logs, setLogs] = useState([]);\n\n  const addLog = (msg) => setLogs(prev => [...prev, msg]);\n\n  const fetchData = async () => {\n    const url = 'https://jsonplaceholder.typicode.com/users/1';\n    \n    // 1. Check if we already have the data in our cache\n    if (simpleCache[url]) {\n      addLog(\"✅ CACHE HIT: Serving data instantly from memory!\");\n      setData(simpleCache[url]);\n      return; // Skip the network request completely!\n    }\n\n    // 2. If not in cache, make the network request\n    addLog(\"🌐 CACHE MISS: Making network request...\");\n    setLoading(true);\n    \n    setTimeout(async () => { // Simulated delay\n      try {\n        const response = await fetch(url);\n        const result = await response.json();\n        \n        // 3. Save the result to the cache for next time\n        simpleCache[url] = result;\n        \n        setData(result);\n        addLog(\"💾 Saved response to cache.\");\n      } catch (err) {\n        addLog(\"❌ Error fetching data.\");\n      } finally {\n        setLoading(false);\n      }\n    }, 1500);\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>API Caching Concepts</h2>\n      <button onClick={fetchData} disabled={loading}>\n        {loading ? 'Fetching...' : 'Fetch User Data'}\n      </button>\n\n      <div style={{ marginTop: '20px', padding: '10px', background: '#222' }}>\n        <h4>Activity Log:</h4>\n        {logs.map((log, i) => <p key={i} style={{ margin: '5px 0', fontSize: '14px' }}>{log}</p>)}\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is the primary goal of API Caching?",
        "options": [
          "To encrypt network data",
          "To store API responses in memory so subsequent requests for the same data are instant and don't require a network call",
          "To force the server to respond faster",
          "To style components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What problem does caching solve in a standard SPA?",
        "options": [
          "Routing errors",
          "Redundant network requests and loading spinners when navigating between previously visited components",
          "Syntax errors",
          "Database crashes"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: If you rely solely on `useEffect` with an empty dependency array for fetching, what happens when you navigate away from the component and come back?",
        "options": [
          "The data stays on the screen",
          "The component unmounts and remounts, triggering the `useEffect` and causing a fresh network request",
          "The component crashes",
          "React caches it automatically"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What is notoriously the hardest part of implementing a cache manually?",
        "options": [
          "Writing the fetch request",
          "Cache Invalidation (knowing when to delete stale data and fetch fresh data)",
          "Displaying the data",
          "Storing the data"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Which of the following is a popular 'Server State' library for React that handles caching automatically?",
        "options": [
          "Redux",
          "React Router",
          "React Query (TanStack Query)",
          "Axios"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: What is 'Deduplication' in the context of React Query/SWR?",
        "options": [
          "Deleting duplicate files",
          "If multiple components request the same API endpoint at the exact same time, the library only makes ONE network request and shares the result with all components",
          "Multiplying data",
          "A CSS trick"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What does the 'Stale-While-Revalidate' (SWR) caching strategy do?",
        "options": [
          "It deletes stale data immediately",
          "It returns stale data instantly from the cache to show the UI, while silently fetching fresh data in the background",
          "It prevents any background requests",
          "It throws an error if data is stale"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Why are traditional state management libraries like Redux no longer recommended for storing API data?",
        "options": [
          "Because Redux is dead",
          "Because Server State (API data) is fundamentally different from Client State (UI toggles). Server State requires caching, deduplication, and background updates, which Redux doesn't handle natively.",
          "Because Redux is too fast",
          "Because it uses too much memory"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: If you implement a manual cache using a global Javascript object (e.g., `const cache = {}`), what happens when the user hard-refreshes the browser?",
        "options": [
          "The cache persists",
          "The cache is completely wiped out because it was stored in memory",
          "The server crashes",
          "It is saved to a file"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Which feature is typically provided out-of-the-box by libraries like React Query?",
        "options": [
          "Auto-retrying failed requests",
          "Pagination and Infinite Scroll caching",
          "Background refetching on window focus",
          "All of the above"
        ],
        "correctAnswer": 3
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Caching Theory",
        "description": "Write a short paragraph explaining the difference between 'Client State' (e.g., is a modal open) and 'Server State' (e.g., a list of users from a database)."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>API Caching</h2>\\n      <p>Performance Optimization</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 38,
    "title": "State Management",
    "description": "Introduction",
    "detailedExplanation": "## State Management (🔴 LEVEL 6 – STATE MANAGEMENT)\n\n### The Challenge of Scale\nAs your React application grows from a simple widget to a massive platform, the way you manage data must evolve.\n\nIn a small app, using `useState` in a parent component and passing it down via props works perfectly. However, what happens when:\n- A Sidebar component needs the user's avatar.\n- A Header component needs the user's notification count.\n- A Settings page needs the user's email.\n- A Checkout page needs the user's cart items.\n\nIf all of these components are located in entirely different branches of your component tree, managing that data using only `useState` and \"Prop Drilling\" becomes an unmaintainable nightmare.\n\n### 👉 Concept: Global State\nGlobal State Management refers to storing data in a centralized location that is accessible from *anywhere* in your application, without needing to pass props.\n\n### The Evolution of State Management\n1. **Prop Drilling:** Passing state down through multiple layers manually. (Hard to maintain).\n2. **Context API:** React's built-in solution for global state. Great for simple, rarely-changing data (like themes or basic auth). However, putting highly dynamic data (like a chat feed) into Context can cause severe performance issues because it forces every consuming component to re-render whenever the Context updates.\n3. **External State Libraries:** Dedicated libraries that sit outside the React component tree. Components subscribe only to the specific piece of data they need. If that data changes, only the subscribed component re-renders.\n\n### Choosing the Right Tool\nYou don't always need an external library!\n- **Local UI state** (e.g., is a dropdown open?): Use `useState`.\n- **Global UI state** (e.g., light/dark mode): Use **Context API**.\n- **Server state** (e.g., fetched user profile): Use **React Query** or **SWR**.\n- **Complex, shared client state** (e.g., a massive shopping cart or video editor timeline): Use **Zustand**, **Redux Toolkit**, or **Jotai**.",
    "practiceTasks": [
      {
        "task": "Understand the difference between Local, Global, and Server state"
      },
      {
        "task": "Identify the limitations of Prop Drilling and Context API"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\n// This is a conceptual demonstration of WHY we need global state.\n// Notice how the 'cartCount' state has to be lifted to the very top, \n// just so both the Header and the ProductList can access it.\n\nfunction Header({ cartCount }) {\n  return (\n    <div style={{ padding: '10px', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>\n      <h3>My Store</h3>\n      <h4>🛒 Cart ({cartCount})</h4>\n    </div>\n  );\n}\n\nfunction ProductList({ onAddToCart }) {\n  return (\n    <div style={{ padding: '20px' }}>\n      <div style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>\n        <p>Awesome Shoes</p>\n        <button onClick={onAddToCart}>Add to Cart</button>\n      </div>\n    </div>\n  );\n}\n\nexport default function StateManagementDemo() {\n  // The state lives at the root of the app\n  const [cartCount, setCartCount] = useState(0);\n\n  return (\n    <div style={{ border: '2px solid #61dafb' }}>\n      <p style={{ textAlign: 'center', color: '#61dafb' }}>\n        In this simple app, lifting state works. But imagine if Header and ProductList were separated by 10 layers of components!\n      </p>\n      \n      {/* We have to drill the state down as props */}\n      <Header cartCount={cartCount} />\n      <ProductList onAddToCart={() => setCartCount(c => c + 1)} />\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What does 'Global State' mean?",
        "options": [
          "State that is stored on a global server",
          "State that is accessible from anywhere in your application, without passing props",
          "State that is shared between different users",
          "State that cannot be changed"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Why does 'Prop Drilling' become unmaintainable in large apps?",
        "options": [
          "It slows down the network",
          "It requires passing data through many intermediate components that don't need it, making code messy and tightly coupled",
          "It uses too much CSS",
          "It causes syntax errors"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Is the Context API suitable for complex, rapidly changing global state (like a stock ticker)?",
        "options": [
          "Yes, it is built exactly for that",
          "No, Context causes all consuming components to re-render when the value changes, which can lead to severe performance issues with rapidly changing data",
          "Yes, but only in Next.js",
          "No, Context cannot hold dynamic data"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Where should local UI state (like whether a modal is open or closed) be stored?",
        "options": [
          "In Redux",
          "In localStorage",
          "In the component's own `useState`",
          "In an external database"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: If you fetch a list of users from an API, what is the modern recommended way to store and cache that 'Server State'?",
        "options": [
          "Using `useState` and `useEffect`",
          "Using Redux",
          "Using a dedicated server state library like React Query or SWR",
          "Using the Context API"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: Which of the following is an example of 'Client State' that might require a library like Redux or Zustand?",
        "options": [
          "Data from a REST API",
          "A massive, interactive shopping cart or complex multi-step wizard form",
          "The current URL",
          "The user's IP address"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Do you always need Redux for a React application?",
        "options": [
          "Yes, it is mandatory",
          "No, many applications can be built entirely with `useState`, Context API, and React Query",
          "Only for mobile apps",
          "Yes, otherwise state is lost"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What is a major benefit of external state libraries (like Zustand or Redux) over Context?",
        "options": [
          "They are built into React",
          "Components can subscribe to specific slices of state, preventing unnecessary re-renders of the whole tree",
          "They don't use JavaScript",
          "They automatically write tests"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: If a deeply nested `Avatar` component needs the user's profile picture, which approach is best?",
        "options": [
          "Prop drill it from the `App` component",
          "Fetch it directly inside the `Avatar` component",
          "Consume it from a global Auth Context or state store",
          "Hardcode it"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 10: What happens to React state when the browser tab is completely closed?",
        "options": [
          "It is saved permanently",
          "It is wiped out entirely from memory",
          "It is sent to the server",
          "It is cached in cookies"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: State Planning",
        "description": "Write down three examples of data that should be Local State, and three examples of data that should be Global State in a large e-commerce app."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>State Management</h2>\\n      <p>Introduction</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 39,
    "title": "Redux Toolkit",
    "description": "Global State with Redux Toolkit",
    "detailedExplanation": "## Redux Toolkit (🔴 LEVEL 6 – STATE MANAGEMENT)\n\n### What is Redux?\nRedux is the most famous state management library in the React ecosystem. It follows a strict unidirectional data flow pattern.\n\nIn Redux, your entire application's state is stored in a single, centralized object tree called the **Store**. Components cannot modify the Store directly. Instead, they must **dispatch** an **action**. A **reducer** function then takes that action and calculates the new state.\n\n### The Problem with Old Redux\nHistorically, Redux was criticized for being heavily verbose. It required writing hundreds of lines of \"boilerplate\" code (action types, action creators, massive switch statements, and immutable spread operators) just to update a single value.\n\n### 👉 Enter Redux Toolkit (RTK)\nRedux Toolkit is the official, modern, and recommended way to write Redux logic. It eliminates the boilerplate and includes tools that simplify development.\n\n### Key Concepts in RTK:\n\n**1. Slices (createSlice)**\nA \"slice\" represents a specific piece of your global state (e.g., the 'cart' slice or the 'user' slice). RTK's `createSlice` function automatically generates the action creators and reducers for you!\n\n**2. Immer (Built-in Mutability)**\nIn standard React and old Redux, you MUST update state immutably (using spread operators `...`). \nRTK uses a library called **Immer** under the hood. This means **you can write code that *looks* like it is mutating the state directly**, and Immer safely translates it into an immutable update!\n\n```javascript\nimport { createSlice } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => {\n      // Look! It seems like we are mutating the state directly!\n      // Thanks to RTK and Immer, this is perfectly safe and correct.\n      state.value += 1; \n    }\n  }\n});\n\nexport const { increment } = counterSlice.actions;\nexport default counterSlice.reducer;\n```\n\n**3. The Hooks (useSelector and useDispatch)**\n- `useSelector`: Allows a component to read data from the Redux store. The component will automatically re-render only when the specific data it selected changes.\n- `useDispatch`: Gives the component the ability to dispatch actions to update the store.\n\n```jsx\nimport { useSelector, useDispatch } from 'react-redux';\nimport { increment } from './counterSlice';\n\nfunction Counter() {\n  const count = useSelector((state) => state.counter.value);\n  const dispatch = useDispatch();\n\n  return <button onClick={() => dispatch(increment())}>{count}</button>;\n}\n```",
    "practiceTasks": [
      {
        "task": "Understand the concept of a Redux Store, Actions, and Reducers"
      },
      {
        "task": "Learn how createSlice simplifies Redux boilerplate"
      }
    ],
    "codeExample": "// NOTE: This is a conceptual example. \n// In a real environment, you must install @reduxjs/toolkit and react-redux.\n\nimport React, { useState } from 'react';\n\n// Simulating the RTK Slice logic\nconst simulateReduxSlice = {\n  name: 'cart',\n  initialState: { items: [] },\n  reducers: {\n    addItem: (state, action) => {\n      state.items.push(action.payload); // Immer handles this mutation safely!\n    }\n  }\n};\n\nexport default function RTKDemo() {\n  // Simulating the Redux Store\n  const [storeItems, setStoreItems] = useState([]);\n\n  // Simulating useDispatch\n  const dispatchAddItem = (item) => {\n    setStoreItems(prev => [...prev, item]); // Standard immutable update\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Redux Toolkit Concepts</h2>\n      <p>Redux Toolkit eliminates boilerplate. You define \"Slices\" which generate actions and reducers automatically.</p>\n      \n      <div style={{ background: '#222', padding: '15px', borderRadius: '8px' }}>\n        <h4>Global Store: Cart Slice</h4>\n        <p>Items in Cart: <strong>{storeItems.length}</strong></p>\n        <ul>\n          {storeItems.map((item, idx) => <li key={idx}>{item}</li>)}\n        </ul>\n      </div>\n\n      <div style={{ marginTop: '20px' }}>\n        {/* Simulating a component dispatching an action */}\n        <button onClick={() => dispatchAddItem('Laptop 💻')}>Dispatch 'addItem' Action</button>\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is Redux?",
        "options": [
          "A database",
          "A predictable state container for JavaScript apps",
          "A React Router plugin",
          "A CSS framework"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: In Redux, components cannot change the state directly. What must they do instead?",
        "options": [
          "Call `setState()`",
          "Use `document.getElementById`",
          "Dispatch an action",
          "Emit an event"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: What is a Reducer?",
        "options": [
          "A function that fetches data from an API",
          "A pure function that takes the current state and an action, and returns the new state",
          "A tool to compress images",
          "A component that renders lists"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Why was older Redux heavily criticized?",
        "options": [
          "It was too slow",
          "It required massive amounts of verbose 'boilerplate' code",
          "It didn't work with React",
          "It was insecure"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: What is Redux Toolkit (RTK)?",
        "options": [
          "A separate paid tool",
          "The official, modern, and recommended toolset for writing Redux logic efficiently",
          "A UI library",
          "A database engine"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: What does `createSlice` do in RTK?",
        "options": [
          "It cuts strings in half",
          "It accepts an initial state and an object of reducer functions, and automatically generates action creators and action types",
          "It creates a new React component",
          "It deletes data from the store"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: In standard React, mutating state directly (e.g., `state.value = 5`) is illegal. Why is it allowed inside RTK `createSlice` reducers?",
        "options": [
          "Because Redux ignores the rules",
          "Because RTK uses a library called Immer under the hood, which translates the mutating syntax into safe, immutable updates",
          "Because it is a class component",
          "It is actually still illegal in RTK"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Which Hook is used to read data from the Redux store?",
        "options": [
          "useContext",
          "useState",
          "useSelector",
          "useStore"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 9: Which Hook is used to trigger a state change in Redux?",
        "options": [
          "useDispatch",
          "useAction",
          "useReducer",
          "useTrigger"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: What happens when the data selected by `useSelector` changes?",
        "options": [
          "The component must be manually updated",
          "The component automatically re-renders with the new data",
          "The app crashes",
          "The Redux store resets"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Slice Creation",
        "description": "Write out the code for a `themeSlice` using RTK's createSlice. It should have an initial state of 'light' and a reducer called `toggleTheme`."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Redux Toolkit</h2>\\n      <p>Global State with Redux Toolkit</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 40,
    "title": "Middleware",
    "description": "Async State Handling",
    "detailedExplanation": "## Middleware (🔴 LEVEL 6 – STATE MANAGEMENT)\n\n### What is Middleware?\nIn Redux, when a component dispatches an action, it goes straight to the Reducer to update the state.\nBut what if you want to intercept that action *before* it reaches the Reducer? \n\nFor example, what if you want to log every action to the console? Or what if the action requires fetching data from a server (which takes time) before the state can be updated?\n\n**Middleware** provides a third-party extension point between dispatching an action and the moment it reaches the reducer. \n\n### 👉 Concept: Handling Asynchronous Actions\nReducers MUST be pure functions. This means they cannot contain side effects like API calls or `setTimeout`. If you want to fetch data and store it in Redux, you cannot do it inside a Reducer.\n\nYou must handle the async logic *before* the data reaches the reducer. This is where middleware shines.\n\n### Redux Thunk\nThe most common middleware for async logic in Redux is called **Redux Thunk** (which is built into Redux Toolkit by default).\n\nA \"Thunk\" is a special type of action creator that returns a *function* instead of a standard action object. Because it's a function, it can perform async operations!\n\n```javascript\nimport { createAsyncThunk } from '@reduxjs/toolkit';\n\n// 1. Create the async thunk\nexport const fetchUsers = createAsyncThunk(\n  'users/fetchUsers',\n  async () => {\n    const response = await fetch('https://api.example.com/users');\n    return response.json(); // The returned data becomes the payload\n  }\n);\n\n// 2. Handle the results in your slice using 'extraReducers'\nconst usersSlice = createSlice({\n  name: 'users',\n  initialState: { entities: [], loading: false },\n  reducers: {},\n  extraReducers: (builder) => {\n    // RTK automatically dispatches 'pending', 'fulfilled', and 'rejected' actions!\n    builder\n      .addCase(fetchUsers.pending, (state) => {\n        state.loading = true;\n      })\n      .addCase(fetchUsers.fulfilled, (state, action) => {\n        state.loading = false;\n        state.entities = action.payload;\n      });\n  }\n});\n```\n\nWith `createAsyncThunk`, Redux Toolkit automatically handles the loading, success, and error states for your API calls!",
    "practiceTasks": [
      {
        "task": "Understand why reducers must be pure functions"
      },
      {
        "task": "Learn how createAsyncThunk automatically handles loading/success/error states"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function MiddlewareDemo() {\n  const [logs, setLogs] = useState([]);\n\n  const logAction = (msg) => setLogs(prev => [...prev, msg]);\n\n  // Simulating a Thunk (Async Middleware Action)\n  const dispatchAsyncThunk = () => {\n    logAction(\"1. UI Dispatched 'fetchData' Thunk.\");\n    logAction(\"2. Middleware intercepts it! Starting API call...\");\n    logAction(\"3. Middleware dispatches 'fetchData/pending'.\");\n    \n    // Simulate API delay\n    setTimeout(() => {\n      logAction(\"4. API call successful! Data received.\");\n      logAction(\"5. Middleware dispatches 'fetchData/fulfilled' with payload.\");\n      logAction(\"6. Reducer receives payload and updates Global Store.\");\n    }, 2000);\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Middleware & Thunks Demo</h2>\n      <p>Reducers must be pure. Middleware handles the messy async API calls before data reaches the reducer.</p>\n      \n      <button onClick={dispatchAsyncThunk}>Dispatch Async Action (Thunk)</button>\n\n      <div style={{ marginTop: '20px', background: '#111', padding: '15px', fontFamily: 'monospace', color: '#00ff00' }}>\n        <h4>Redux Action Log:</h4>\n        {logs.length === 0 ? <p>Waiting for actions...</p> : logs.map((log, i) => <p key={i}>{log}</p>)}\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is Middleware in the context of Redux?",
        "options": [
          "A backend server",
          "Code that intercepts actions between the dispatch and the reducer",
          "A CSS processor",
          "A database engine"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Why can't you put API calls directly inside a Redux Reducer?",
        "options": [
          "Because Reducers must be pure, synchronous functions with no side effects",
          "Because Redux cannot connect to the internet",
          "Because API calls are too fast",
          "Because Reducers only accept strings"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 3: What is a 'Thunk'?",
        "options": [
          "A sound effect",
          "A middleware that allows you to write action creators that return a function (which can be async) instead of an action object",
          "A type of Redux reducer",
          "An error thrown by the store"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Is Redux Thunk included in Redux Toolkit by default?",
        "options": [
          "Yes",
          "No, you must install it separately",
          "Only in development mode",
          "Only for Next.js"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: Which RTK function simplifies writing async thunks for API calls?",
        "options": [
          "createAsyncReducer",
          "createAsyncThunk",
          "createFetch",
          "asyncDispatch"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: When using `createAsyncThunk`, what three action types does RTK automatically dispatch for you?",
        "options": [
          "start, stop, error",
          "pending, fulfilled, rejected",
          "loading, success, fail",
          "try, catch, finally"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Where do you handle the `pending`, `fulfilled`, and `rejected` actions generated by a thunk inside a `createSlice`?",
        "options": [
          "In the standard `reducers` object",
          "In the `extraReducers` field",
          "Inside the component",
          "In the Context API"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What is a common use case for standard (non-thunk) custom middleware?",
        "options": [
          "Styling components",
          "Logging every action to the console for debugging",
          "Rendering UI elements",
          "Validating HTML"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: When an async thunk succeeds, where does the returned data go?",
        "options": [
          "It is appended to the DOM",
          "It becomes the `action.payload` of the `fulfilled` action",
          "It is stored in localStorage",
          "It is deleted"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Does Redux Toolkit require you to write a massive switch statement to handle thunk actions?",
        "options": [
          "Yes",
          "No, the builder pattern in `extraReducers` eliminates the need for switch statements",
          "Only for rejected actions",
          "Only in TypeScript"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Thunk Workflow",
        "description": "Write down the exact sequence of events (actions dispatched) when a user clicks a button that triggers a createAsyncThunk."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Middleware</h2>\\n      <p>Async State Handling</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 41,
    "title": "Authentication Basics",
    "description": "Login System",
    "detailedExplanation": "## Authentication Basics (🔴 LEVEL 7 – AUTHENTICATION)\n\n### What is Authentication?\nAuthentication (AuthN) is the process of verifying *who* a user is (e.g., logging in). \nAuthorization (AuthZ) is the process of verifying *what* a user is allowed to do (e.g., admin vs regular user).\n\n### The Challenge with React (SPAs)\nIn traditional web apps, the server handles everything using sessions and cookies. When you log in, the server gives your browser a session cookie. Every time you request a new HTML page, the cookie is sent automatically.\n\nReact Single Page Applications (SPAs) are different. Because the frontend (React) and the backend (API) are completely decoupled, they communicate via JSON requests. We need a way to prove our identity to the API on every single request.\n\n### 👉 The Authentication Flow\n1. **Login:** The user types their email and password into a React form.\n2. **Request:** React sends a POST request with those credentials to the backend API.\n3. **Verification:** The backend verifies the password against the database.\n4. **Token Generation:** The backend generates a secure \"Token\" (like a wristband at a concert) and sends it back to React.\n5. **Storage:** React saves this Token (usually in localStorage or an HttpOnly cookie).\n6. **Subsequent Requests:** Every time React asks the server for private data (like user settings), it attaches the Token to the request headers.\n7. **Logout:** React simply deletes the Token from storage.\n\n### Storing Auth State in React\nYour React app needs to know if the user is logged in so it can update the UI (e.g., show \"Logout\" instead of \"Login\", or hide the dashboard).\n\nThis is the perfect use case for **Global State**! \nTypically, you create an `AuthContext` or a Zustand/Redux store that holds an `isAuthenticated` boolean and a `user` object.",
    "practiceTasks": [
      {
        "task": "Understand the Token-based authentication flow"
      },
      {
        "task": "Manage global authentication state"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function AuthFlowDemo() {\n  const [isAuthenticated, setIsAuthenticated] = useState(false);\n  const [username, setUsername] = useState(\"\");\n  const [password, setPassword] = useState(\"\");\n  const [logs, setLogs] = useState([]);\n\n  const addLog = (msg) => setLogs(prev => [...prev, msg]);\n\n  const handleLogin = (e) => {\n    e.preventDefault();\n    addLog(`1. Sent POST request with credentials for ${username}...`);\n    \n    setTimeout(() => {\n      if (password === \"password123\") {\n        addLog(\"2. Server verified password and returned a secure TOKEN.\");\n        addLog(\"3. Saving TOKEN to localStorage.\");\n        setIsAuthenticated(true);\n      } else {\n        addLog(\"❌ Server rejected credentials.\");\n      }\n    }, 1000);\n  };\n\n  const handleLogout = () => {\n    addLog(\"🔴 Deleting TOKEN from localStorage.\");\n    setIsAuthenticated(false);\n    setUsername(\"\");\n    setPassword(\"\");\n  };\n\n  return (\n    <div style={{ padding: '20px', maxWidth: '400px', background: '#1a1a2e', borderRadius: '8px' }}>\n      <h2>Auth Flow Demo</h2>\n      \n      {!isAuthenticated ? (\n        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>\n          <input placeholder=\"Username\" value={username} onChange={e => setUsername(e.target.value)} required />\n          <input type=\"password\" placeholder=\"Try 'password123'\" value={password} onChange={e => setPassword(e.target.value)} required />\n          <button type=\"submit\">Log In</button>\n        </form>\n      ) : (\n        <div style={{ background: '#0f3460', padding: '15px', borderRadius: '5px' }}>\n          <h3>Welcome, {username}!</h3>\n          <p>You have the access token.</p>\n          <button onClick={handleLogout} style={{ background: '#e94560' }}>Log Out</button>\n        </div>\n      )}\n\n      <div style={{ marginTop: '20px', fontSize: '12px', color: '#00ffcc' }}>\n        {logs.map((l, i) => <p key={i}>{l}</p>)}\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is the difference between Authentication and Authorization?",
        "options": [
          "Authentication verifies WHO you are; Authorization verifies WHAT you are allowed to do",
          "They are the exact same thing",
          "Authentication is for servers, Authorization is for clients",
          "Authentication uses CSS, Authorization uses JS"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 2: Why do React SPAs need a different authentication approach than traditional websites?",
        "options": [
          "Because React cannot use passwords",
          "Because the frontend and backend are decoupled and communicate via stateless API requests, rather than relying solely on server-rendered session cookies",
          "Because React is faster",
          "Because APIs don't support security"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: In a modern SPA flow, what does the server send back after a successful login?",
        "options": [
          "An HTML page",
          "A secure Token",
          "A JavaScript function",
          "A database table"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What is the purpose of the Token?",
        "options": [
          "It acts like a digital wristband, proving to the API that the user is authenticated on subsequent requests",
          "It styles the application",
          "It encrypts the database",
          "It speeds up rendering"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: Where is Auth State (e.g., `isAuthenticated: true`) typically stored in a React application?",
        "options": [
          "In a local `useState` inside the login form",
          "In a Global State mechanism (like Context API or Redux) so the whole app knows the user's status",
          "In the CSS file",
          "In the `package.json`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: If a user refreshes the page, React state is wiped. How do you keep the user logged in?",
        "options": [
          "It is impossible",
          "By storing the Token in `localStorage` (or an HttpOnly cookie) and checking it when the app first loads",
          "By asking them to login again on every refresh",
          "By saving it to `document.title`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: How does React 'log out' a user?",
        "options": [
          "By sending a massive payload to the server",
          "By simply deleting the Token from storage and updating the global Auth state to false",
          "By crashing the app",
          "By closing the browser window"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What happens if a user tries to fetch private data but doesn't attach the Token to the request?",
        "options": [
          "The server returns the data anyway",
          "The server responds with a 401 Unauthorized or 403 Forbidden error",
          "The server deletes the user's account",
          "React automatically generates a new token"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: When making a request to a protected API endpoint, where is the Token usually placed?",
        "options": [
          "In the URL query string",
          "In the HTTP Request Headers (e.g., `Authorization: Bearer <token>`)",
          "In the `body` of a GET request",
          "In the CSS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What is the main security risk of storing tokens in `localStorage`?",
        "options": [
          "It is too slow",
          "It is vulnerable to XSS (Cross-Site Scripting) attacks, meaning malicious JavaScript can steal the token",
          "It deletes itself randomly",
          "It only holds 10 characters"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Global Auth State",
        "description": "Create an AuthContext that holds an 'isAuthenticated' boolean. Provide it at the root of your app. Create a Navbar component that reads this context to show either a 'Login' or 'Logout' button."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Authentication Basics</h2>\\n      <p>Login System</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 42,
    "title": "JWT Authentication",
    "description": "Secure Auth",
    "detailedExplanation": "## JSON Web Token (JWT) (🔴 LEVEL 7 – AUTHENTICATION)\n\n### What is a JWT?\nJSON Web Token (JWT, pronounced \"jot\") is an open standard that defines a compact, self-contained way for securely transmitting information between parties as a JSON object.\n\nIn React applications, JWT is the industry standard format for the \"Tokens\" used in authentication.\n\n### 👉 The Anatomy of a JWT\nA JWT is a long string divided into three parts, separated by dots (`.`):\n`xxxxx.yyyyy.zzzzz`\n\n1. **Header (xxxxx):** Contains metadata about the token (e.g., the algorithm used to sign it, like HMAC SHA256 or RSA).\n2. **Payload (yyyyy):** Contains the actual data (called \"claims\"). For example, it might contain the user's ID, username, role, and the token's expiration timestamp (`exp`).\n3. **Signature (zzzzz):** This is the magic part. The server takes the Header, the Payload, and a **Secret Key** (that only the server knows) and encrypts them to create the signature.\n\n### Why is the Signature important?\nThe Header and Payload are just Base64 encoded—they are **NOT encrypted**. Anyone can decode a JWT and read the payload data. \n\nHowever, because of the Signature, **nobody can modify the payload**. If a hacker decodes the token, changes their `role` from \"user\" to \"admin\", and sends it back to the server, the server will check the signature against its Secret Key. The signature won't match the altered payload, and the server will reject the token!\n\n### How React uses JWTs\n1. The user logs in. The backend generates a JWT and sends it to React.\n2. React saves the JWT in `localStorage`.\n3. When React needs to fetch protected data, it attaches the JWT to the Axios or Fetch headers:\n```javascript\naxios.get('/api/protected', {\n  headers: { Authorization: `Bearer ${token}` }\n});\n```\n4. The server receives the request, verifies the JWT signature using its Secret Key, and grants access.\n\n### Decoding in React\nBecause the payload isn't encrypted, your React app can decode the JWT to read the user's information (like their name or ID) without needing to make an extra API request! (Use a library like `jwt-decode`).",
    "practiceTasks": [
      {
        "task": "Understand the structure of a JWT (Header, Payload, Signature)"
      },
      {
        "task": "Learn how to attach a JWT to an Authorization header"
      }
    ],
    "codeExample": "// Conceptual representation of JWT decoding\nimport React, { useState } from 'react';\n\nexport default function JWTDemo() {\n  const [tokenInfo, setTokenInfo] = useState(null);\n\n  const simulateJWTGeneration = () => {\n    // 1. A simulated Base64 encoded payload\n    const payload = {\n      sub: \"1234567890\",\n      name: \"John Doe\",\n      role: \"admin\",\n      iat: 1516239022\n    };\n    \n    // In reality, this string is base64 encoded by the server\n    setTokenInfo(payload);\n  };\n\n  return (\n    <div style={{ padding: '20px', border: '1px solid #444' }}>\n      <h2>JWT Concept Demo</h2>\n      <p>A JWT payload contains data (claims) that is readable by the client, but verified by the server's signature.</p>\n      \n      <button onClick={simulateJWTGeneration}>Simulate Decoding a JWT</button>\n\n      {tokenInfo && (\n        <div style={{ marginTop: '20px', background: '#222', padding: '15px' }}>\n          <h4>Decoded Payload Data:</h4>\n          <ul>\n            <li>User ID (sub): <strong>{tokenInfo.sub}</strong></li>\n            <li>Name: <strong>{tokenInfo.name}</strong></li>\n            <li>Role: <strong style={{ color: 'coral' }}>{tokenInfo.role}</strong></li>\n          </ul>\n          <p style={{ fontSize: '12px', color: 'gray', marginTop: '10px' }}>\n            * Note: Because the client can read this, NEVER put passwords inside a JWT payload!\n          </p>\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What does JWT stand for?",
        "options": [
          "Java Web Token",
          "JSON Web Token",
          "JavaScript Window Tracker",
          "JSON Wireless Transmission"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: How many parts make up a standard JWT?",
        "options": [
          "One",
          "Two",
          "Three (Header, Payload, Signature)",
          "Four"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: What separates the three parts of a JWT?",
        "options": [
          "Commas (,)",
          "Dashes (-)",
          "Dots (.)",
          "Slashes (/)"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: Is the payload of a standard JWT encrypted?",
        "options": [
          "Yes, it is highly encrypted military-grade security",
          "No, it is merely Base64 encoded and can be easily decoded and read by anyone",
          "Only if sent over HTTP",
          "Only the username is encrypted"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Should you put sensitive information like a user's password inside a JWT payload?",
        "options": [
          "Yes, it is safe",
          "No, because anyone who intercepts the token can decode and read the payload",
          "Yes, but only if it's hashed",
          "It doesn't matter"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: If the payload is readable, how is a JWT secure?",
        "options": [
          "The server trusts all JSONs",
          "The server generates a Signature using a Secret Key. If the payload is tampered with, the signature becomes invalid and the server rejects it.",
          "It uses a blockchain",
          "It is locked to an IP address"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: How does a React application typically send a JWT to the backend for protected requests?",
        "options": [
          "In the `Authorization` HTTP header, prefixed with `Bearer `",
          "In the URL query string",
          "In the POST body of every request",
          "Via an alert box"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: What does it mean if a JWT is 'self-contained'?",
        "options": [
          "It deletes itself after use",
          "It contains all the necessary information about the user, so the server doesn't need to query the database to verify their identity",
          "It is stored in a self-closing HTML tag",
          "It runs its own code"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: How can a React app access the user's name if it is stored in the JWT payload?",
        "options": [
          "It must ask the server",
          "It can decode the payload part of the token directly in the browser (e.g., using the `jwt-decode` library) to read the name",
          "It must guess it",
          "It is impossible"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What does the `exp` claim in a JWT payload represent?",
        "options": [
          "Experience points",
          "Expiration time (when the token becomes invalid)",
          "Export format",
          "Expected origin"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Understanding JWTs",
        "description": "Go to jwt.io. Paste in the default token provided there. Look at the decoded payload. Change the name in the payload and observe what happens to the signature."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>JWT Authentication</h2>\\n      <p>Secure Auth</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 43,
    "title": "Protected Routes",
    "description": "Route Security",
    "detailedExplanation": "## Protected Routes (🔴 LEVEL 7 – AUTHENTICATION)\n\n### What is a Protected Route?\nIn a typical application, some pages are public (Home, Login, Register) and some are private (Dashboard, Settings, Profile). \n\nA **Protected Route** (or Private Route) is a React Router pattern that restricts access to certain routes. If a user tries to access a protected route without being authenticated, they are automatically redirected to the Login page.\n\n### 👉 Concept: Wrapper Components\nThe standard way to implement a protected route in React Router v6 is to create a wrapper component that checks the global authentication state.\n\nIf the user is authenticated, it renders the `<Outlet />` (which displays the child routes).\nIf the user is NOT authenticated, it renders a `<Navigate />` component to redirect them.\n\n### Example Implementation\n\n**1. Create the Wrapper Component**\n```jsx\nimport { Navigate, Outlet } from 'react-router-dom';\n// Assume useAuth is a custom hook reading from your AuthContext\nimport { useAuth } from './AuthContext';\n\nconst ProtectedRoute = () => {\n  const { isAuthenticated } = useAuth();\n\n  // If not logged in, redirect to login page and replace the history stack\n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" replace />;\n  }\n\n  // If logged in, render the child routes!\n  return <Outlet />;\n};\nexport default ProtectedRoute;\n```\n\n**2. Apply it in your Router**\nYou use Nested Routing to wrap all your private pages inside the `ProtectedRoute`!\n\n```jsx\n<Routes>\n  {/* Public Routes */}\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/login\" element={<Login />} />\n\n  {/* Protected Routes Wrapper */}\n  <Route element={<ProtectedRoute />}>\n    <Route path=\"/dashboard\" element={<Dashboard />} />\n    <Route path=\"/settings\" element={<Settings />} />\n  </Route>\n</Routes>\n```\n\n### Why use `replace` in Navigate?\nUsing `<Navigate to=\"/login\" replace />` replaces the current entry in the browser's history stack. This ensures that after the user logs in, if they click the browser's \"Back\" button, they won't be redirected back to the intermediate redirection point (which would just bounce them forward again).",
    "practiceTasks": [
      {
        "task": "Understand the logic of redirecting unauthenticated users"
      },
      {
        "task": "Implement a ProtectedRoute using React Router v6"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\nimport { BrowserRouter, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';\n\n// A mock authentication context/hook\nfunction useAuth(authState) {\n  return { isAuthenticated: authState };\n}\n\n// 1. The Protected Route Wrapper\nconst ProtectedRoute = ({ authState }) => {\n  const { isAuthenticated } = useAuth(authState);\n\n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" replace />;\n  }\n  return <Outlet />;\n};\n\nexport default function ProtectedRoutesDemo() {\n  const [isAuthenticated, setIsAuthenticated] = useState(false);\n\n  return (\n    <BrowserRouter>\n      <div style={{ padding: '20px' }}>\n        <h2>Protected Routes Demo</h2>\n        \n        <div style={{ marginBottom: '20px' }}>\n          <button onClick={() => setIsAuthenticated(!isAuthenticated)}>\n            {isAuthenticated ? 'Log Out' : 'Log In as User'}\n          </button>\n          <span style={{ marginLeft: '15px' }}>Status: {isAuthenticated ? '🟢 Authenticated' : '🔴 Unauthenticated'}</span>\n        </div>\n\n        <nav style={{ marginBottom: '20px', borderBottom: '1px solid gray', paddingBottom: '10px' }}>\n          <Link to=\"/\" style={{ marginRight: '10px' }}>Home (Public)</Link>\n          <Link to=\"/login\" style={{ marginRight: '10px' }}>Login (Public)</Link>\n          <Link to=\"/dashboard\" style={{ color: 'coral' }}>Dashboard (Protected!)</Link>\n        </nav>\n\n        <div style={{ padding: '20px', border: '1px dashed #666' }}>\n          <Routes>\n            <Route path=\"/\" element={<h3>🏠 Home Page</h3>} />\n            <Route path=\"/login\" element={<h3>🔑 Login Page</h3>} />\n\n            {/* The Protected Wrapper */}\n            <Route element={<ProtectedRoute authState={isAuthenticated} />}>\n              <Route path=\"/dashboard\" element={<h3 style={{ color: 'coral' }}>🛡️ Secret Dashboard Data!</h3>} />\n            </Route>\n          </Routes>\n        </div>\n      </div>\n    </BrowserRouter>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is a Protected Route?",
        "options": [
          "A route that uses HTTPS",
          "A route configuration that checks if a user is authenticated before allowing access to a specific component",
          "A route hidden from Google SEO",
          "A route that requires a password typed in the URL"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the standard approach to creating Protected Routes in React Router v6?",
        "options": [
          "Wrapping private routes inside a layout component that checks auth state and renders an `<Outlet />` or a `<Navigate />`",
          "Using `window.location.href` to redirect",
          "Writing `if(not_logged_in)` inside every single component",
          "Editing the server configuration"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 3: What component does React Router provide to perform declarative redirects?",
        "options": [
          "<Redirect /> (in v5) or <Navigate /> (in v6)",
          "<RouteRedirect />",
          "<Link />",
          "<Push />"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 4: If the user is authenticated, what must the ProtectedRoute wrapper component return to render the requested page?",
        "options": [
          "return true",
          "return <Outlet />",
          "return props.children",
          "Both B and C are valid depending on the implementation pattern"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 5: What does the `replace` prop do on the `<Navigate />` component?",
        "options": [
          "It replaces the entire HTML document",
          "It replaces the current entry in the browser's history stack, so the user doesn't get stuck in a 'back-button loop'",
          "It replaces the URL with a random string",
          "It replaces the component with a string"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: Can you have multiple different types of protected routes? (e.g., one for logged-in users, one for Admins only)",
        "options": [
          "Yes, you can create an `<AdminRoute>` wrapper that checks if `user.role === 'admin'`",
          "No, React Router only supports one type of protection",
          "Yes, but only in Redux",
          "No, authorization must happen on the server only"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 7: Why should you rely on an Auth Context (or global state) inside the Protected Route rather than just checking `localStorage.getItem('token')` directly?",
        "options": [
          "Because localStorage is too slow",
          "Because changing localStorage doesn't trigger a React re-render. Reading from Context ensures the route reacts immediately if the user logs out.",
          "Because localStorage is banned in React",
          "You should actually check localStorage directly"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: If a user is NOT authenticated and tries to visit `/dashboard`, what is the expected behavior?",
        "options": [
          "They see a blank screen",
          "They are redirected to the `/login` route",
          "The browser throws a 404 error",
          "They see the dashboard but without data"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Is client-side routing protection (Protected Routes) enough to keep your app completely secure?",
        "options": [
          "Yes, nobody can bypass React Router",
          "No, a savvy user can manipulate JS to bypass the client route. True security ALWAYS requires the backend API to verify the token before sending sensitive data.",
          "Yes, as long as it is obfuscated",
          "Only if you use Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What happens if the auth state is still 'loading' (e.g., verifying the token with the server) when the Protected Route renders?",
        "options": [
          "It redirects to login immediately",
          "It should return a loading spinner or skeleton UI until the auth status is definitively known (true or false)",
          "It crashes",
          "It renders the protected content anyway"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: RequireAuth Wrapper",
        "description": "Create a RequireAuth component. It should take children as props. If a hardcoded 'isLoggedIn' boolean is false, return <Navigate to='/login' />. Otherwise, return the children."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Protected Routes</h2>\\n      <p>Route Security</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    }
  },
  {
    "order": 44,
    "title": "Jest Basics",
    "description": "JS Testing Framework",
    "detailedExplanation": "## Jest Basics (🟢 LEVEL 8 – TESTING)\n\n### What is Software Testing?\nIn software development, writing code is only half the battle. Ensuring that the code works correctly (and continues to work when you add new features) is just as important. \n\n**Automated Testing** involves writing small programs that run your actual code and verify that the output matches your expectations. If you change a function and break its logic, your tests will fail, catching the bug before your users ever see it!\n\n### 👉 Enter Jest\n**Jest** is a delightful JavaScript Testing Framework maintained by Facebook. It focuses on simplicity and works out-of-the-box for React applications.\n\n### Core Concepts\n\n1. **Test Suites (`describe`)**: Groups related tests together.\n2. **Tests (`test` or `it`)**: An individual test case that verifies one specific behavior.\n3. **Expectations (`expect`)**: The core assertion. You \"expect\" a value to equal something.\n4. **Matchers (`toBe`, `toEqual`, etc.)**: Functions that define how to compare the expected output with the actual output.\n\n### Basic Example\nImagine you have a simple function that adds two numbers:\n```javascript\n// math.js\nexport function add(a, b) {\n  return a + b;\n}\n```\n\nHere is how you would test it using Jest:\n```javascript\n// math.test.js\nimport { add } from './math';\n\ndescribe('Math utilities', () => {\n  \n  test('adds 1 + 2 to equal 3', () => {\n    // 1. Call the function\n    const result = add(1, 2);\n    \n    // 2. Make an assertion\n    expect(result).toBe(3);\n  });\n\n  test('adds negative numbers correctly', () => {\n    expect(add(-1, -1)).toBe(-2);\n  });\n\n});\n```\n\n### Running Tests\nWhen you run the `jest` command in your terminal, Jest searches your project for files ending in `.test.js` or `.spec.js`, runs them, and prints a beautiful report of passes and fails.",
    "practiceTasks": [
      {
        "task": "Understand the structure of describe, test, and expect"
      },
      {
        "task": "Learn the difference between .toBe and .toEqual"
      }
    ],
    "codeExample": "// Conceptual Jest Example\nimport React, { useState } from 'react';\n\nexport default function JestDemo() {\n  const [logs, setLogs] = useState([]);\n\n  const runSimulatedTest = () => {\n    setLogs([]);\n    const addLog = (msg, color) => setLogs(prev => [...prev, { msg, color }]);\n    \n    addLog(\"Running Jest Test Suite...\", \"#00ffcc\");\n    \n    setTimeout(() => {\n      // Simulating a passing test\n      addLog(\"PASS: adds 1 + 2 to equal 3\", \"#51cf66\");\n      \n      // Simulating a failing test\n      setTimeout(() => {\n        addLog(\"FAIL: adds negative numbers correctly\", \"#ff6b6b\");\n        addLog(\"  Expected: -2\", \"gray\");\n        addLog(\"  Received: 0\", \"gray\");\n        \n        setTimeout(() => {\n          addLog(\"Test Suites: 1 failed, 1 total\", \"white\");\n          addLog(\"Tests:       1 failed, 1 passed, 2 total\", \"white\");\n        }, 500);\n      }, 500);\n    }, 500);\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Jest Testing Concept</h2>\n      <p>Jest runs your code and verifies expectations. If an expectation is wrong, the test fails!</p>\n      \n      <button onClick={runSimulatedTest}>Run Simulated Tests</button>\n\n      {logs.length > 0 && (\n        <div style={{ marginTop: '20px', background: '#111', padding: '15px', fontFamily: 'monospace' }}>\n          {logs.map((log, i) => <div key={i} style={{ color: log.color, marginBottom: '5px' }}>{log.msg}</div>)}\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is automated software testing?",
        "options": [
          "Writing code that runs automatically on a timer",
          "Writing small programs that execute your application code and verify its output matches expectations",
          "Testing the internet connection speed",
          "Deploying the code automatically"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is Jest?",
        "options": [
          "A database",
          "A popular JavaScript testing framework maintained by Facebook",
          "A React Router plugin",
          "A CSS preprocessor"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which function is used to group related tests together in Jest?",
        "options": [
          "`group()`",
          "`test()`",
          "`describe()`",
          "`suite()`"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: Which function defines an individual test case?",
        "options": [
          "`test()` or `it()`",
          "`run()`",
          "`assert()`",
          "`execute()`"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: What is a 'Matcher' in Jest?",
        "options": [
          "A dating app feature",
          "A method used with `expect()` to compare the actual output with the expected output (e.g., `.toBe()`, `.toEqual()`)",
          "A tool to match CSS classes",
          "A function that generates random data"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: If you want to test if an object strictly equals another object in Jest, which matcher should you use?",
        "options": [
          "`.toBe()`",
          "`.toEqual()`",
          "`.toMatch()`",
          "`.isSame()`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What file extension does Jest automatically look for when searching for tests?",
        "options": [
          "`.test.js` or `.spec.js`",
          "`.jest.js`",
          "`.test.jsx` only",
          "`.check.js`"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: If `add(2, 2)` returns `5`, what will Jest do?",
        "options": [
          "Automatically fix the code",
          "Throw an error and mark the test as FAILED",
          "Ignore it",
          "Pause the program"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Can Jest test basic JavaScript functions that don't use React?",
        "options": [
          "No, it only works for React",
          "Yes, Jest is a general-purpose JavaScript testing framework and can test any JS function",
          "Only if it is run in Node.js",
          "Only in production"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Why is automated testing important?",
        "options": [
          "It proves the developer is smart",
          "It prevents regressions (old bugs reappearing) and gives confidence when adding new features or refactoring",
          "It makes the app run faster for the user",
          "It reduces the CSS file size"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Mental Execution",
        "description": "Write out a Jest test block to test a function called `multiply(a, b)`. Expect multiply(3, 4) to be 12."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Unit Testing</h2>\\n      <p>Using Jest</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 8
  },
  {
    "order": 45,
    "title": "React Testing Library",
    "description": "Test React components",
    "detailedExplanation": "## React Testing Library (RTL) (🟢 LEVEL 8 – TESTING)\n\n### Testing UI Components\nJest is great for testing pure JavaScript functions (like math logic). But how do you test a React component? You need to render the component, click buttons, and read the text on the screen.\n\n### 👉 Enter React Testing Library\nReact Testing Library (RTL) is a lightweight solution for testing React components. \nIts guiding principle is:\n> **\"The more your tests resemble the way your software is used, the more confidence they can give you.\"**\n\nInstead of testing the *implementation details* of a component (like checking if a state variable changed from `false` to `true`), RTL forces you to test what the *user actually sees and does*.\n\n### Core Workflow\n1. **Render**: Mount the component into an isolated, simulated DOM.\n2. **Query**: Find elements on the screen (just like a user scanning the page with their eyes).\n3. **Act**: Simulate user interactions (clicking, typing).\n4. **Assert**: Verify the DOM looks correct.\n\n### Basic Example\nImagine a simple Toggle component:\n```jsx\n// Toggle.js\nexport default function Toggle() {\n  const [isOn, setIsOn] = useState(false);\n  return <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>;\n}\n```\n\nHere is how you test it with RTL:\n```javascript\n// Toggle.test.js\nimport { render, screen, fireEvent } from '@testing-library/react';\nimport Toggle from './Toggle';\n\ntest('toggles between ON and OFF', () => {\n  // 1. Render the component\n  render(<Toggle />);\n  \n  // 2. Query the button element (find the button that says 'OFF')\n  const buttonElement = screen.getByText('OFF');\n  expect(buttonElement).toBeInTheDocument();\n\n  // 3. Act: Click the button\n  fireEvent.click(buttonElement);\n\n  // 4. Assert: The button text should now be 'ON'\n  expect(screen.getByText('ON')).toBeInTheDocument();\n});\n```\n\nBecause we tested the *text* instead of the *state*, our test ensures the component actually works from a user's perspective!",
    "practiceTasks": [
      {
        "task": "Understand the philosophy of testing user behavior vs implementation details"
      },
      {
        "task": "Familiarize yourself with the `render`, `screen`, and `fireEvent` functions"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function RTLDemo() {\n  const [text, setText] = useState(\"\");\n  const [logs, setLogs] = useState([]);\n\n  const addLog = (msg) => setLogs(prev => [...prev, msg]);\n\n  const simulateRTLTest = () => {\n    setLogs([]);\n    addLog(\"1. render(<InputComponent />)\");\n    addLog(\"2. screen.getByPlaceholderText('Type here')\");\n    \n    setTimeout(() => {\n      addLog(\"3. userEvent.type(input, 'Hello World')\");\n      setText(\"Hello World\"); // Simulating the act\n      \n      setTimeout(() => {\n        addLog(\"4. expect(screen.getByText('You typed: Hello World')).toBeInTheDocument()\");\n        addLog(\"✅ Test Passed!\", \"#51cf66\");\n      }, 1000);\n    }, 1000);\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>React Testing Library Concept</h2>\n      <p>RTL tests what the user sees, not how the code is written.</p>\n      \n      <div style={{ border: '1px solid gray', padding: '15px', marginBottom: '20px' }}>\n        <h4>Target Component:</h4>\n        <input \n          placeholder=\"Type here\" \n          value={text} \n          onChange={e => setText(e.target.value)} \n        />\n        <p>You typed: <strong>{text}</strong></p>\n      </div>\n\n      <button onClick={simulateRTLTest}>Run Simulated RTL Test</button>\n\n      {logs.length > 0 && (\n        <div style={{ marginTop: '20px', background: '#222', padding: '10px', color: '#00ffcc' }}>\n          {logs.map((log, i) => <p key={i} style={{ color: log === \"✅ Test Passed!\" ? '#51cf66' : '#00ffcc' }}>{log}</p>)}\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is the primary guiding principle of React Testing Library (RTL)?",
        "options": [
          "Tests should be as fast as possible",
          "The more your tests resemble the way your software is used, the more confidence they can give you",
          "Never test UI components",
          "Always test internal state directly"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: Does RTL encourage testing 'Implementation Details' (like checking the exact name of a state variable)?",
        "options": [
          "Yes, that is the most robust way to test",
          "No, it strongly discourages it. It encourages testing the actual DOM output that the user interacts with.",
          "Yes, but only for class components",
          "It doesn't matter"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What function from RTL is used to mount a component into the simulated test DOM?",
        "options": [
          "`mount()`",
          "`render()`",
          "`create()`",
          "`load()`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What object from RTL is used to query the simulated DOM to find elements?",
        "options": [
          "`document`",
          "`window`",
          "`screen`",
          "`query`"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: Which of the following is an example of an RTL query?",
        "options": [
          "`screen.findByCssClass`",
          "`screen.getByText`",
          "`screen.getById`",
          "`screen.findByTag`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: How do you simulate a user clicking a button in an RTL test?",
        "options": [
          "`button.click()`",
          "`simulate('click', button)`",
          "`fireEvent.click(buttonElement)`",
          "`triggerClick(button)`"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 7: What custom Jest matcher is provided by `@testing-library/jest-dom` to check if an element is visible in the DOM?",
        "options": [
          "`.toBeTrue()`",
          "`.toBeRendered()`",
          "`.toBeInTheDocument()`",
          "`.toExist()`"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 8: If you change the internal state variable name from `isOn` to `active`, but the UI behaves exactly the same, will a properly written RTL test fail?",
        "options": [
          "Yes, because the state name changed",
          "No, because RTL tests the rendered output (the UI), not the internal implementation details. This makes tests resilient to refactoring.",
          "Yes, because Jest is strict",
          "The test will crash"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Why might you use `userEvent.type()` instead of `fireEvent.change()`?",
        "options": [
          "`userEvent` is deprecated",
          "`userEvent` more accurately simulates real user interactions (firing keydown, keypress, keyup events in sequence)",
          "It is shorter to write",
          "It runs faster"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What happens if `screen.getByText('Hello')` cannot find an element with that text?",
        "options": [
          "It returns null",
          "It returns an empty array",
          "It throws an error, failing the test immediately",
          "It waits infinitely"
        ],
        "correctAnswer": 2
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Writing a Test",
        "description": "Imagine a component <Counter /> that displays 'Count: 0' and has a button saying 'Add 1'. Write down the 4 steps (Render, Query, Act, Assert) you would use to test that clicking the button changes the text to 'Count: 1'."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>React Testing</h2>\\n      <p>Using React Testing Library</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 8
  },
  {
    "order": 46,
    "title": "Snapshot Testing",
    "description": "Prevent UI regressions",
    "detailedExplanation": "## Snapshot Testing (🟢 LEVEL 8 – TESTING)\n\n### The Problem: Accidental UI Changes\nSometimes, you make a small change to a CSS file or a nested component, and it accidentally alters the visual structure of a completely different component elsewhere in the app. \n\nWriting manual RTL tests (`expect(screen.getByText(...))`) for every single visual element on every page is tedious and impractical.\n\n### 👉 Concept: Snapshot Testing\nSnapshot testing is a way to ensure your UI does not change unexpectedly. \n\nA snapshot test works like this:\n1. **First Run:** Jest renders your React component and takes a \"Snapshot\" (saving a copy of the generated HTML/JSON structure) to a file in your project.\n2. **Subsequent Runs:** Every time the test runs in the future, Jest renders the component again and compares the new output to the saved Snapshot.\n3. **Result:** If they match, the test passes. If there is *even a single character difference*, the test fails!\n\n### How to Write a Snapshot Test\nYou typically use the `react-test-renderer` package (or RTL's `asFragment()`).\n\n```javascript\nimport renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('renders correctly', () => {\n  // Generate the UI\n  const tree = renderer\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n    \n  // Assert that it matches the saved snapshot!\n  expect(tree).toMatchSnapshot();\n});\n```\n\n### Handling Failures\nWhen a snapshot test fails, it means one of two things:\n1. **It's a Bug:** You accidentally broke the UI. You should fix your code!\n2. **It's an Intentional Change:** You *meant* to change the button color from blue to red. In this case, you run `jest --updateSnapshot` (or press `u` in watch mode) to overwrite the old snapshot with the new, correct version.\n\nSnapshot tests are incredible for preventing regressions in complex UI layouts.",
    "practiceTasks": [
      {
        "task": "Understand the concept of a baseline snapshot"
      },
      {
        "task": "Learn when to update a snapshot"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function SnapshotDemo() {\n  const [html, setHtml] = useState('<div class=\"box\">\n  <h1>Hello</h1>\n</div>');\n  const [snapshot, setSnapshot] = useState('<div class=\"box\">\n  <h1>Hello</h1>\n</div>');\n  const [result, setResult] = useState(null);\n\n  const runSnapshotTest = () => {\n    if (html === snapshot) {\n      setResult({ passed: true, msg: \"✅ PASS: New render matches saved snapshot!\" });\n    } else {\n      setResult({ passed: false, msg: \"❌ FAIL: Snapshot mismatch detected!\" });\n    }\n  };\n\n  const updateSnapshot = () => {\n    setSnapshot(html);\n    setResult({ passed: true, msg: \"🔄 Snapshot Updated. Test passes.\" });\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Snapshot Testing Demo</h2>\n      <p>Change the current code. The test will fail until you intentionally update the snapshot!</p>\n\n      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>\n        <div style={{ flex: 1 }}>\n          <h4>Saved Snapshot (Last Known Good):</h4>\n          <pre style={{ background: '#222', padding: '10px', color: '#aaa' }}>{snapshot}</pre>\n        </div>\n        \n        <div style={{ flex: 1 }}>\n          <h4>Current Component Output:</h4>\n          <textarea \n            value={html} \n            onChange={e => setHtml(e.target.value)}\n            style={{ width: '100%', height: '80px', background: '#333', color: 'white', fontFamily: 'monospace' }}\n          />\n        </div>\n      </div>\n\n      <button onClick={runSnapshotTest} style={{ marginRight: '10px' }}>Run Test</button>\n      <button onClick={updateSnapshot} style={{ background: '#e67e22' }}>Update Snapshot</button>\n\n      {result && (\n        <div style={{ marginTop: '20px', padding: '10px', background: result.passed ? '#193b22' : '#3b1c1c', color: result.passed ? '#51cf66' : '#ff6b6b' }}>\n          {result.msg}\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is the primary purpose of Snapshot Testing?",
        "options": [
          "To take screenshots of the browser",
          "To ensure your UI does not change unexpectedly (preventing regressions)",
          "To speed up rendering",
          "To test API performance"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: How does a Snapshot Test work on the very first run?",
        "options": [
          "It fails",
          "It renders the component, saves the serialized HTML/JSON output to a physical file, and passes",
          "It asks the user to take a photo",
          "It compares the code to GitHub"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What happens on subsequent runs of a Snapshot Test?",
        "options": [
          "It generates a new snapshot and compares it to the saved one. If they differ, the test fails.",
          "It generates a new snapshot and overwrites the old one automatically",
          "It ignores the snapshot",
          "It takes a screenshot"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Which Jest matcher is used for snapshot testing?",
        "options": [
          "`.toEqualSnapshot()`",
          "`.toMatchSnapshot()`",
          "`.toBeSame()`",
          "`.toMatchImage()`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: What should you do if a Snapshot test fails because you INTENTIONALLY changed a component's design?",
        "options": [
          "Delete the test",
          "Change the code back",
          "Update the snapshot (e.g., by running `jest --updateSnapshot` or pressing 'u' in watch mode) so the new design becomes the baseline",
          "Ignore the failure forever"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: What should you do if a Snapshot test fails, but you did NOT intend to change that component?",
        "options": [
          "Update the snapshot anyway",
          "Investigate the failure, as you likely introduced an accidental bug/regression, and fix your code",
          "Delete the component",
          "Ignore it"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Are Snapshot tests a replacement for unit tests (e.g., testing that a button click actually increments a counter)?",
        "options": [
          "Yes, they cover everything",
          "No, snapshot tests only verify the structural output. You still need RTL/Unit tests to verify interactive behavior.",
          "Yes, if used with Redux",
          "No, they only work on CSS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Should Snapshot files (`__snapshots__/`) be committed to your version control system (e.g., Git)?",
        "options": [
          "No, they are temporary files",
          "Yes, they must be committed so your CI server and other developers can compare their changes against the accepted baseline",
          "Only if they are small",
          "Never"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: What package is commonly used to generate the snapshot tree for React components?",
        "options": [
          "react-dom",
          "react-test-renderer",
          "react-snapshot",
          "jest-dom"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: If a component renders dynamic data that changes every second (like `Date.now()`), what will happen to the snapshot test?",
        "options": [
          "It will pass",
          "It will fail on every single run because the new output will never match the saved snapshot",
          "It will ignore the date",
          "It will crash"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Intended vs Unintended",
        "description": "Write down the difference in how a developer should respond when a snapshot test fails intentionally vs unintentionally."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Build Optimization</h2>\\n      <p>Production Build</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 8
  },
  {
    "order": 47,
    "title": "Mocking",
    "description": "Simulate API calls in tests",
    "detailedExplanation": "## Mocking (🟢 LEVEL 8 – TESTING)\n\n### The Problem: Unreliable Dependencies\nWhen writing automated tests, your components should be tested in **isolation**. \n\nIf your `UserProfile` component fetches data from `https://api.example.com/user`, running a test will actually make that network request. This is bad for several reasons:\n1. **Slow:** Network requests take seconds; tests should take milliseconds.\n2. **Unreliable:** If the API is down, or your WiFi drops, your test fails (even if your component code is perfect).\n3. **Destructive:** If the component sends a POST request (e.g., `deleteAccount()`), your test might accidentally delete real data!\n\n### 👉 Concept: Mocking\nMocking means replacing a real function, module, or API with a \"fake\" version specifically for the test. This fake version returns predictable, hardcoded data instantly.\n\n### Mocking Functions in Jest\nJest provides `jest.fn()` to create mock functions. You can track if they were called, how many times they were called, and what arguments were passed.\n\n```javascript\nconst myMock = jest.fn();\nmyMock('hello');\n\nexpect(myMock).toHaveBeenCalled();\nexpect(myMock).toHaveBeenCalledWith('hello');\n```\n\n### Mocking API Calls (Axios / Fetch)\nInstead of hitting a real API, you tell Jest to intercept the call and return fake data.\n\n```javascript\nimport axios from 'axios';\nimport { render, screen } from '@testing-library/react';\nimport UserProfile from './UserProfile';\n\n// 1. Tell Jest to mock the entire axios library\njest.mock('axios');\n\ntest('fetches and displays user data', async () => {\n  // 2. Setup the mock to return specific fake data\n  axios.get.mockResolvedValue({\n    data: { name: 'John Doe', age: 30 }\n  });\n\n  // 3. Render the component\n  render(<UserProfile />);\n\n  // 4. Assert that the component rendered the fake data!\n  const nameElement = await screen.findByText('John Doe');\n  expect(nameElement).toBeInTheDocument();\n});\n```\n\nBy mocking the API, your test runs instantly, requires no internet, and guarantees predictable results!",
    "practiceTasks": [
      {
        "task": "Understand why isolation is critical for unit tests"
      },
      {
        "task": "Learn how to use jest.mock and jest.fn"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function MockingDemo() {\n  const [logs, setLogs] = useState([]);\n\n  const addLog = (msg) => setLogs(prev => [...prev, msg]);\n\n  const runTestWithoutMock = () => {\n    setLogs([]);\n    addLog(\"🌐 Making REAL network request...\");\n    addLog(\"⏳ Waiting...\");\n    setTimeout(() => {\n      addLog(\"❌ Test FAILED: API took too long or returned unexpected dynamic data.\", \"#ff6b6b\");\n    }, 2000);\n  };\n\n  const runTestWithMock = () => {\n    setLogs([]);\n    addLog(\"🛡️ Injecting MOCK API...\");\n    addLog(\"⚡ Mock intercepted request! Returning instant hardcoded data: { name: 'Fake User' }\");\n    addLog(\"✅ Test PASSED instantly!\", \"#51cf66\");\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Mocking APIs in Tests</h2>\n      <p>Tests should never hit real APIs. They should use predictable, instant Mocks.</p>\n      \n      <div style={{ display: 'flex', gap: '10px' }}>\n        <button onClick={runTestWithoutMock} style={{ background: '#e94560' }}>Run Test (Real API)</button>\n        <button onClick={runTestWithMock} style={{ background: '#51cf66', color: '#111' }}>Run Test (Mock API)</button>\n      </div>\n\n      {logs.length > 0 && (\n        <div style={{ marginTop: '20px', background: '#222', padding: '15px', fontFamily: 'monospace', color: '#00ffcc' }}>\n          {logs.map((log, i) => <p key={i}>{log}</p>)}\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: Why should you NOT make real API calls in automated tests?",
        "options": [
          "It is too slow",
          "It is unreliable (tests fail if WiFi drops)",
          "It can be destructive (accidentally deleting real data)",
          "All of the above"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Question 2: What does 'Mocking' mean in testing?",
        "options": [
          "Making fun of bad code",
          "Replacing a real function or module with a fake, controllable version",
          "Copying code from StackOverflow",
          "Hiding errors"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Which Jest function is used to create a basic mock function?",
        "options": [
          "`jest.mock()`",
          "`jest.create()`",
          "`jest.fn()`",
          "`jest.fake()`"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: If you pass a function as a prop to a component (e.g., `<Button onClick={myMock} />`), how do you test if the component clicked it?",
        "options": [
          "`expect(myMock).toHaveBeenCalled()`",
          "`expect(myMock).toBeTrue()`",
          "`expect(myMock).toBeClicked()`",
          "`expect(myMock).toRun()`"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 5: How do you mock an entire external library like Axios in Jest?",
        "options": [
          "`jest.fake('axios')`",
          "`jest.mock('axios')`",
          "`axios.mock()`",
          "`import mockAxios`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: What does `mockResolvedValue()` do?",
        "options": [
          "It resolves an error",
          "It tells the mock function to return a Promise that resolves with a specific piece of hardcoded data",
          "It deletes the mock",
          "It tests the resolution"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is a major benefit of mocking API calls?",
        "options": [
          "Tests run instantly and predictably without needing internet access",
          "It makes the actual application run faster in production",
          "It writes the API backend for you",
          "It improves CSS performance"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 8: Can you mock a function to return a rejected promise to test how your component handles API errors?",
        "options": [
          "No, mocks only succeed",
          "Yes, using `mockRejectedValue()`",
          "Only in E2E tests",
          "Only if the server is offline"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: What does `expect(myMock).toHaveBeenCalledWith(5)` verify?",
        "options": [
          "That the function was called 5 times",
          "That the function was called and the argument passed to it was exactly the number 5",
          "That the function returned 5",
          "That the function took 5 seconds to run"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Are mocks used in production code?",
        "options": [
          "Yes, always",
          "No, mocking is strictly a testing concept used to isolate components during test execution",
          "Only for admins",
          "Yes, to save bandwidth"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Mocking an API",
        "description": "Write down the Jest code to mock the 'axios' module, and then set 'axios.get' to resolve with a data object containing `{ user: 'Admin' }`."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Deployment</h2>\\n      <p>Hosting with Vercel / Netlify</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 8
  },
  {
    "order": 48,
    "title": "useReducer",
    "description": "Complex state management",
    "detailedExplanation": "## useReducer (🟣 LEVEL 9 – ADVANCED HOOKS)\n\n### Beyond useState\n`useState` is perfect for simple, independent pieces of state (like a boolean flag or a single string). \n\nHowever, what if your component has **complex state logic** that involves multiple sub-values, or when the next state depends heavily on the previous state? Having five different `useState` hooks that all need to update at the exact same time can lead to bugs and messy code.\n\n### 👉 Enter useReducer\n`useReducer` is an alternative to `useState`. It is usually preferable when you have complex state logic. If you are familiar with Redux, you already know how `useReducer` works!\n\nIt accepts a **reducer function** and an **initial state**, and returns the current state paired with a **dispatch** method.\n\n### The Reducer Function\nA reducer is a pure function that takes the current `state` and an `action` object, and returns the *new* state.\n\n```javascript\n// The reducer function\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return { count: 0 };\n    default:\n      throw new Error();\n  }\n}\n```\n\n### Using the Hook\nInside your component, you use the hook and dispatch actions instead of calling setters directly.\n\n```jsx\nimport { useReducer } from 'react';\n\nfunction Counter() {\n  // Initialize the hook\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n\n  return (\n    <>\n      Count: {state.count}\n      {/* Dispatch an action object to trigger a state change */}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n    </>\n  );\n}\n```\n\n### Why use useReducer?\n1. **Predictability:** State transitions are explicitly defined as actions. You can't just set the state to arbitrary values.\n2. **Clean Components:** The complex update logic is extracted *outside* the component into the reducer function, keeping the component clean.\n3. **Testing:** Reducers are pure functions, making them incredibly easy to unit test independently of React.",
    "practiceTasks": [
      {
        "task": "Understand the relationship between state, action, and reducer"
      },
      {
        "task": "Refactor multiple related useState hooks into a single useReducer"
      }
    ],
    "codeExample": "import React, { useReducer } from 'react';\n\n// 1. Define the Reducer function outside the component\nfunction formReducer(state, action) {\n  switch (action.type) {\n    case 'UPDATE_FIELD':\n      // Return a new object spreading the old state, updating the specific field\n      return { ...state, [action.field]: action.value };\n    case 'RESET':\n      return { username: '', email: '', age: '' };\n    default:\n      return state;\n  }\n}\n\nexport default function UseReducerDemo() {\n  // 2. Initialize the hook with the reducer and initial state\n  const [state, dispatch] = useReducer(formReducer, {\n    username: '',\n    email: '',\n    age: ''\n  });\n\n  // 3. Dispatch actions\n  const handleChange = (e) => {\n    dispatch({ \n      type: 'UPDATE_FIELD', \n      field: e.target.name, \n      value: e.target.value \n    });\n  };\n\n  return (\n    <div style={{ padding: '20px', border: '1px solid gray' }}>\n      <h2>useReducer Form Demo</h2>\n      <p>Managing multiple related state fields with a single reducer.</p>\n      \n      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>\n        <input name=\"username\" placeholder=\"Username\" value={state.username} onChange={handleChange} />\n        <input name=\"email\" placeholder=\"Email\" value={state.email} onChange={handleChange} />\n        <input name=\"age\" type=\"number\" placeholder=\"Age\" value={state.age} onChange={handleChange} />\n        \n        <button onClick={() => dispatch({ type: 'RESET' })}>Reset Form</button>\n      </div>\n\n      <div style={{ marginTop: '20px', background: '#222', padding: '10px' }}>\n        <h4>Current State Object:</h4>\n        <pre>{JSON.stringify(state, null, 2)}</pre>\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is `useReducer` primarily used for?",
        "options": [
          "Fetching API data",
          "Routing between pages",
          "Managing complex state logic that involves multiple sub-values or complex transitions",
          "Styling components"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: What two arguments does the `useReducer` hook accept?",
        "options": [
          "state and setState",
          "A reducer function and an initial state",
          "An action and a payload",
          "A dependency array and a callback"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What does the `useReducer` hook return?",
        "options": [
          "An array containing the current state and a `dispatch` function",
          "A single string",
          "A React component",
          "A Promise"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 4: What is a reducer function?",
        "options": [
          "A function that deletes data",
          "A pure function that takes the current state and an action, and returns the newly updated state",
          "A CSS compiler",
          "An API handler"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Which global state management library uses the exact same Reducer pattern?",
        "options": [
          "Context API",
          "React Router",
          "Redux",
          "Axios"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: How do you trigger a state update when using `useReducer`?",
        "options": [
          "By calling `setState(newValue)`",
          "By calling `dispatch({ type: 'ACTION_NAME' })`",
          "By modifying the state object directly",
          "By reloading the page"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is typically passed inside the `dispatch` function?",
        "options": [
          "An HTML element",
          "An 'action' object, which must have a `type` property describing what happened",
          "A callback function",
          "A CSS string"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Why is `useReducer` often better than `useState` for complex objects?",
        "options": [
          "It is faster",
          "It extracts the complex update logic out of the component and centralizes it in a predictable reducer function",
          "It uses less memory",
          "It works without JavaScript"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: Should a reducer function cause side effects (like making an API call)?",
        "options": [
          "Yes, that is its main purpose",
          "No, a reducer MUST be a pure function. It only calculates the next state.",
          "Only if it is async",
          "Only in class components"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: Can `useReducer` be used instead of `useState` for simple counters?",
        "options": [
          "Yes, it works, but it's usually overkill for simple state",
          "No, it throws an error for numbers",
          "Only in Next.js",
          "No, it only accepts objects"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Reducer Logic",
        "description": "Write a reducer function that handles a 'TOGGLE_THEME' action, flipping a state object between { theme: 'light' } and { theme: 'dark' }."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Environment Variables</h2>\\n      <p>Config Management</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 9
  },
  {
    "order": 49,
    "title": "useLayoutEffect",
    "description": "DOM mutation before paint",
    "detailedExplanation": "## useLayoutEffect (🟣 LEVEL 9 – ADVANCED HOOKS)\n\n### The Problem with useEffect\nThe standard `useEffect` hook runs **asynchronously AFTER** the browser has painted the screen. \n\nThis is great for 99% of use cases (like fetching data or setting up subscriptions) because it doesn't block the browser from showing the UI to the user.\n\nHowever, if your effect involves **mutating the DOM** (e.g., reading an element's physical width and then changing its height based on that), using `useEffect` can cause a visual **flicker**.\nThe browser paints the initial state, *then* the effect runs and changes the DOM, and *then* the browser paints again instantly.\n\n### 👉 Enter useLayoutEffect\nThe signature is identical to `useEffect`, but it fires **synchronously BEFORE** the browser has a chance to paint the screen.\n\n```jsx\nimport { useLayoutEffect, useState, useRef } from 'react';\n\nfunction Tooltip() {\n  const [height, setHeight] = useState(0);\n  const ref = useRef(null);\n\n  // Runs BEFORE the user sees the screen\n  useLayoutEffect(() => {\n    // Read physical DOM measurements\n    const rect = ref.current.getBoundingClientRect();\n    // Trigger a synchronous re-render with the new height\n    setHeight(rect.height);\n  }, []);\n\n  return <div ref={ref}>Tooltip height: {height}</div>;\n}\n```\n\n### The Flow\n1. React renders the component (Virtual DOM).\n2. React updates the physical DOM.\n3. **`useLayoutEffect` runs synchronously.** (If it updates state, React immediately re-renders and updates the physical DOM again).\n4. **Browser paints the screen.** (The user only ever sees the final result).\n5. `useEffect` runs asynchronously.\n\n### When to use it?\nUse it **only** when you need to read layout from the DOM and synchronously re-render to prevent visual flickering. \nBecause it blocks the browser from painting, overusing it will make your app feel slow and unresponsive. Always default to `useEffect`.",
    "practiceTasks": [
      {
        "task": "Understand the React rendering and painting timeline"
      },
      {
        "task": "Identify when to use useLayoutEffect instead of useEffect"
      }
    ],
    "codeExample": "import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';\n\nexport default function LayoutEffectDemo() {\n  const [value, setValue] = useState(0);\n  const [logs, setLogs] = useState([]);\n  \n  const addLog = (msg) => setLogs(prev => [...prev, msg]);\n\n  // Notice the order in the console logs!\n  useLayoutEffect(() => {\n    if (value === 0) return;\n    addLog(\"⚡ useLayoutEffect ran (DOM updated, but not painted yet)\");\n    \n    // Simulating a DOM measurement that causes a state update\n    if (value === 10) {\n      // This will cause a synchronous re-render BEFORE the browser paints \"10\"\n      setValue(999); \n    }\n  }, [value]);\n\n  useEffect(() => {\n    if (value === 0) return;\n    addLog(\"🐢 useEffect ran (Browser has already painted the screen)\");\n  }, [value]);\n\n  const handleTrigger = () => {\n    setLogs([]);\n    addLog(\"🔄 State updated to 10. React is processing...\");\n    setValue(10);\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>useLayoutEffect vs useEffect</h2>\n      <p>If you set the value to 10, the layout effect instantly intercepts it and changes it to 999 BEFORE you ever see the \"10\" flicker on screen.</p>\n      \n      <div style={{ fontSize: '24px', margin: '20px 0' }}>\n        Current Value: <strong style={{ color: 'coral' }}>{value}</strong>\n      </div>\n\n      <button onClick={handleTrigger}>Trigger Flicker Test</button>\n      <button onClick={() => { setValue(0); setLogs([]); }} style={{ marginLeft: '10px' }}>Reset</button>\n\n      {logs.length > 0 && (\n        <div style={{ marginTop: '20px', background: '#222', padding: '10px', color: '#00ffcc', fontFamily: 'monospace' }}>\n          {logs.map((log, i) => <p key={i}>{log}</p>)}\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: When does standard `useEffect` run?",
        "options": [
          "Before the component renders",
          "Synchronously during the render",
          "Asynchronously AFTER the browser has painted the screen",
          "Never"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: When does `useLayoutEffect` run?",
        "options": [
          "Synchronously BEFORE the browser has a chance to paint the screen",
          "After the component unmounts",
          "When the user clicks a button",
          "Asynchronously on a background thread"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 3: What is the primary use case for `useLayoutEffect`?",
        "options": [
          "Making API calls",
          "Reading physical DOM measurements (like width/height) and mutating the DOM to prevent visual flickering",
          "Writing to localStorage",
          "Adding event listeners"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: Why should you default to `useEffect` instead of `useLayoutEffect`?",
        "options": [
          "Because `useLayoutEffect` doesn't exist in React 18",
          "Because `useLayoutEffect` is synchronous and blocks the browser from painting, which can cause the app to feel slow or unresponsive if overused",
          "Because `useEffect` is faster",
          "Because it is required by Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: If you update state inside `useLayoutEffect`, what happens?",
        "options": [
          "The app crashes",
          "React forces a synchronous re-render before the browser paints, ensuring the user only sees the final result",
          "React ignores the state update",
          "The browser paints the screen twice"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: Is the signature (the arguments it takes) of `useLayoutEffect` different from `useEffect`?",
        "options": [
          "Yes, it takes 3 arguments",
          "No, it takes the exact same arguments (a callback function and a dependency array)",
          "Yes, it only takes an object",
          "Yes, it takes no dependencies"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: If you are fetching data from an API, which hook should you use?",
        "options": [
          "useLayoutEffect",
          "useEffect",
          "useReducer",
          "useRef"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: If you have a tooltip component that needs to measure its own width to calculate whether to appear on the left or right side of a button without flickering, which hook should you use?",
        "options": [
          "useEffect",
          "useLayoutEffect",
          "useContext",
          "useState"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: What warning does React throw if you use `useLayoutEffect` in a Server-Side Rendering (SSR) environment like Next.js?",
        "options": [
          "It throws a syntax error",
          "It warns that `useLayoutEffect` does nothing on the server, because there is no DOM to measure",
          "It warns about memory leaks",
          "It disables React"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: In the execution timeline, which runs first?",
        "options": [
          "useLayoutEffect",
          "useEffect",
          "They run at the exact same time",
          "It is random"
        ],
        "correctAnswer": 0
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: The Flicker Test",
        "description": "Write a short explanation of what 'Visual Flickering' means in the context of React rendering, and how useLayoutEffect prevents it."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Folder Structure</h2>\\n      <p>Scalable Architecture</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 9
  },
  {
    "order": 50,
    "title": "useImperativeHandle",
    "description": "Customize exposed refs",
    "detailedExplanation": "## useImperativeHandle (🟣 LEVEL 9 – ADVANCED HOOKS)\n\n### The Problem with Refs and Components\nNormally, if you pass a `ref` from a parent component to a standard DOM element (like an `<input ref={myRef} />`), the parent gets full access to the raw DOM node (e.g., `myRef.current.focus()`).\n\nBut what if you want to pass a ref to a **Custom React Component**?\n```jsx\n<MyCustomInput ref={inputRef} />\n```\nBy default, functional components cannot be given refs. You must use `React.forwardRef` to forward the ref down to a DOM element inside the child.\n\nBut what if you don't want the parent to have full access to the raw DOM node? What if you only want the parent to be able to call a specific custom function, like `shake()` or `clear()`?\n\n### 👉 Enter useImperativeHandle\n`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`.\n\nIt allows a child component to say: *\"Hey Parent, you gave me a ref. Instead of giving you the raw HTML element, I am going to give you an object with exactly three custom functions that you are allowed to call.\"*\n\n### Example Implementation\n\n```jsx\nimport { forwardRef, useImperativeHandle, useRef } from 'react';\n\n// 1. Wrap the component in forwardRef\nconst CustomInput = forwardRef((props, ref) => {\n  const inputRef = useRef(null);\n\n  // 2. Customize what the parent's ref.current will be\n  useImperativeHandle(ref, () => ({\n    // The parent can call this function!\n    focusAndClear: () => {\n      inputRef.current.focus();\n      inputRef.current.value = '';\n    }\n  }));\n\n  return <input ref={inputRef} type=\"text\" />;\n});\n\n// 3. The Parent Component\nfunction Parent() {\n  const customRef = useRef();\n\n  return (\n    <>\n      <CustomInput ref={customRef} />\n      {/* The parent calls the custom function exposed by the child */}\n      <button onClick={() => customRef.current.focusAndClear()}>Action</button>\n    </>\n  );\n}\n```\n\n### When to use it?\nVery rarely. React dictates a declarative, top-down data flow using props. Calling functions directly on child components (imperative programming) goes against React's philosophy. \nOnly use it for focusing, text selection, media playback, or triggering imperative animations.",
    "practiceTasks": [
      {
        "task": "Understand the difference between Declarative and Imperative code"
      },
      {
        "task": "Learn how to combine forwardRef with useImperativeHandle"
      }
    ],
    "codeExample": "import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';\n\n// 1. Child Component wrapped in forwardRef\nconst SecretBox = forwardRef((props, ref) => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  // 2. Expose specific custom methods to the parent\n  useImperativeHandle(ref, () => ({\n    openBox: () => setIsOpen(true),\n    closeBox: () => setIsOpen(false),\n    toggleBox: () => setIsOpen(!isOpen)\n  }));\n\n  return (\n    <div style={{ \n      width: '150px', height: '150px', \n      background: isOpen ? '#51cf66' : '#862e9c', \n      display: 'flex', justifyContent: 'center', alignItems: 'center',\n      borderRadius: '8px', color: 'white', fontWeight: 'bold'\n    }}>\n      {isOpen ? '🔓 OPEN' : '🔒 LOCKED'}\n    </div>\n  );\n});\n\nexport default function ImperativeHandleDemo() {\n  // 3. Parent creates a ref\n  const boxRef = useRef(null);\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>useImperativeHandle Demo</h2>\n      <p>The Parent component is imperatively calling methods exposed by the Child component.</p>\n      \n      <SecretBox ref={boxRef} />\n\n      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>\n        {/* Parent triggers child methods directly via the ref! */}\n        <button onClick={() => boxRef.current.openBox()}>Open Box</button>\n        <button onClick={() => boxRef.current.closeBox()}>Close Box</button>\n        <button onClick={() => boxRef.current.toggleBox()}>Toggle Box</button>\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: By default, can you pass a `ref` attribute to a custom Functional Component?",
        "options": [
          "Yes, it works exactly like an HTML element",
          "No, functional components don't have instances. You must wrap them in `React.forwardRef` first.",
          "Only in Class components",
          "Only if the ref is a string"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the purpose of `useImperativeHandle`?",
        "options": [
          "To fetch data imperatively",
          "To customize the object/methods exposed to a parent component when using a `ref`",
          "To bypass React Router",
          "To mutate state directly"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: What hook MUST wrap the child component in order to use `useImperativeHandle`?",
        "options": [
          "`React.memo`",
          "`React.Fragment`",
          "`React.forwardRef`",
          "`React.Suspense`"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 4: Instead of exposing the raw DOM element to the parent, what does `useImperativeHandle` usually expose?",
        "options": [
          "A Redux store",
          "An object containing specific, custom functions that the parent is allowed to call",
          "A CSS file",
          "A new React element"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: Why does React recommend using `useImperativeHandle` sparingly?",
        "options": [
          "Because it is deprecated",
          "Because it relies on imperative code (calling methods directly), which goes against React's core philosophy of declarative, prop-driven UI",
          "Because it uses too much memory",
          "Because it crashes the browser"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: What is a valid use case for `useImperativeHandle`?",
        "options": [
          "Passing user data to a child",
          "Triggering a complex imperative animation or focus management inside a child component from a parent",
          "Styling a component",
          "Routing to a new page"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: If the child exposes `{ shake: () => {...} }` via `useImperativeHandle`, how does the parent call it?",
        "options": [
          "`child.shake()`",
          "`ref.current.shake()`",
          "`ref.shake()`",
          "`shake(ref)`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What are the first two arguments of `useImperativeHandle`?",
        "options": [
          "state and action",
          "The `ref` object received from the parent, and a callback function that returns the custom object to expose",
          "A string and a boolean",
          "A DOM node and a class"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: What is the meaning of 'Imperative' programming vs 'Declarative' programming?",
        "options": [
          "They are the same",
          "Imperative dictates *how* to do something step-by-step (e.g., `element.focus()`); Declarative dictates *what* the result should be (e.g., `isOpen={true}`)",
          "Imperative uses CSS, Declarative uses HTML",
          "Imperative is for backends"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: If you just want the parent to have direct access to the child's `<input>` DOM node to read its value, do you need `useImperativeHandle`?",
        "options": [
          "Yes, always",
          "No, you can just use `React.forwardRef` to pass the ref directly to the `<input>`. `useImperativeHandle` is only needed to *restrict or customize* what is exposed.",
          "No, refs are not needed for inputs",
          "Yes, to prevent XSS"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Custom Methods",
        "description": "Explain why you would use `useImperativeHandle` instead of just passing a ref directly to an underlying DOM element."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Design Patterns</h2>\\n      <p>Clean Code Practices</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 9
  },
  {
    "order": 51,
    "title": "Folder Structure",
    "description": "Scalable Architecture",
    "detailedExplanation": "## Folder Structure (🟢 LEVEL 10 – BEST PRACTICES)\n\n### The Need for Architecture\nWhen you start learning React, you usually put all your components inside a `src/components` folder and all your API calls inside `src/App.js`. \n\nThis works fine for a 10-file project. But what happens when your project grows to 500 files, 50 routes, and 30 different API endpoints? Without a well-planned Folder Structure (Architecture), your project will become a \"Big Ball of Mud.\"\n\n### 👉 Scalable Feature-Based Architecture\nIn modern, large-scale React applications, grouping files **by feature** rather than **by file type** is the standard best practice.\n\nInstead of having a folder of 100 components and a folder of 100 hooks, you group everything related to a specific domain (like 'users' or 'products') together.\n\n### A Standard Enterprise Structure\n```text\nsrc/\n ├── assets/        # Global static files (images, global css)\n ├── components/    # GLOBAL, reusable UI components (Buttons, Modals, Inputs)\n ├── config/        # Global configurations (env vars, theme config)\n ├── hooks/         # GLOBAL custom hooks (useWindowSize, useAuth)\n ├── layouts/       # Structural layouts (DashboardLayout, AuthLayout)\n ├── lib/           # Third-party library configurations (axios instance, auth0)\n ├── pages/         # Route entry points (Login, Dashboard, UserProfile)\n ├── store/         # Global Redux/Zustand stores\n ├── utils/         # Pure JS helper functions (formatDate, calculateTax)\n │\n └── features/      # THE HEART OF YOUR APP\n      ├── auth/     # Everything related to Authentication!\n      │    ├── api/          # Auth-specific fetch calls\n      │    ├── components/   # LoginForm, SignupForm\n      │    ├── hooks/        # useLogin, useSignup\n      │    └── index.js      # Public API for the 'auth' feature\n      │\n      └── users/    # Everything related to Users!\n           ├── api/\n           ├── components/\n           └── index.js\n```\n\n### Why use the `features` folder?\nIt enforces **Encapsulation**. A developer working on the 'auth' feature knows that all the logic, UI, and state they need is inside `src/features/auth`. They don't have to hunt across 5 different global folders to find the pieces.\n\n### The Barrel Pattern (`index.js`)\nEach feature folder should have an `index.js` at its root. This file explicitly exports only what other parts of the application are allowed to use. This prevents components from importing deeply nested files from other features, keeping your architecture clean and decoupled.",
    "practiceTasks": [
      {
        "task": "Understand the difference between global components and feature components"
      },
      {
        "task": "Learn the benefits of encapsulation in software architecture"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function ArchitectureDemo() {\n  const [selectedFolder, setSelectedFolder] = useState(null);\n\n  const folderDetails = {\n    'components': 'Contains generic, reusable UI blocks used everywhere: <Button>, <Card>, <Spinner>.',\n    'pages': 'Contains components that map directly to Routes (e.g., /login -> LoginPage). They usually just combine a Layout with a Feature component.',\n    'features': 'Contains domain-specific logic. E.g., features/auth contains the LoginForm, the login API call, and the useAuth hook.',\n    'utils': 'Contains pure JavaScript helper functions that don\\'t use React hooks (e.g., formatDate(date), calculateTotal(cart)).',\n    'lib': 'Contains configurations for third-party libraries (e.g., setting up the base URL for Axios, or initializing Firebase).'\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>Feature-Based Architecture</h2>\n      <p>Click a folder to understand its purpose in a scalable enterprise React app.</p>\n      \n      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>\n        <div style={{ flex: 1, background: '#1e1e1e', padding: '15px', borderRadius: '8px', border: '1px solid #444', fontFamily: 'monospace' }}>\n          <h4 style={{ margin: '0 0 10px 0', color: 'gray' }}>src/</h4>\n          {Object.keys(folderDetails).map(folder => (\n            <div \n              key={folder}\n              onClick={() => setSelectedFolder(folder)}\n              style={{ \n                cursor: 'pointer', \n                padding: '5px', \n                color: selectedFolder === folder ? '#00ffcc' : 'white',\n                background: selectedFolder === folder ? '#004433' : 'transparent',\n                borderRadius: '4px'\n              }}\n            >\n              📁 {folder}/\n            </div>\n          ))}\n        </div>\n\n        <div style={{ flex: 1, background: '#222', padding: '15px', borderRadius: '8px', border: '1px dashed #666' }}>\n          <h4>Folder Details:</h4>\n          {selectedFolder ? (\n            <p style={{ color: '#00ffcc', fontSize: '16px', lineHeight: '1.5' }}>\n              {folderDetails[selectedFolder]}\n            </p>\n          ) : (\n            <p style={{ color: 'gray' }}>Select a folder from the left to view details.</p>\n          )}\n        </div>\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: Why is grouping by 'file type' (e.g., putting all 100 components in one folder) bad for large applications?",
        "options": [
          "It uses too much memory",
          "It makes finding related files difficult and leads to a 'Big Ball of Mud' architecture",
          "React crashes",
          "It is illegal in JavaScript"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the modern standard for structuring large-scale React applications?",
        "options": [
          "Grouping by developer",
          "Grouping by file extension (.js, .css)",
          "Grouping by feature/domain (e.g., auth, products, users)",
          "Putting everything in one file"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 3: In a feature-based architecture, what should go in the `src/components/` folder?",
        "options": [
          "Only generic, globally reusable UI components (like Buttons, Modals, Spinners)",
          "Every component in the app",
          "Only pages",
          "Only state"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 4: Where would you place the `LoginForm` component in a feature-based architecture?",
        "options": [
          "`src/components/LoginForm.js`",
          "`src/pages/LoginForm.js`",
          "`src/features/auth/components/LoginForm.js`",
          "`src/utils/LoginForm.js`"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 5: What is the purpose of the `src/utils/` folder?",
        "options": [
          "To hold React components",
          "To hold CSS files",
          "To hold pure JavaScript helper functions that do not use React logic (e.g., `formatCurrency`)",
          "To hold API calls"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 6: What belongs in the `src/lib/` folder?",
        "options": [
          "The React library source code",
          "Configurations and setups for 3rd-party libraries (like an Axios instance or Auth0 setup)",
          "Component libraries",
          "Images"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What is the 'Barrel Pattern'?",
        "options": [
          "Rolling code",
          "Using an `index.js` file at the root of a folder to explicitly export only what should be public, hiding internal details",
          "A CSS layout technique",
          "A database structure"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: Where should components that act as route entry points (e.g., mapped directly to `/dashboard`) live?",
        "options": [
          "`src/pages/` (or `src/routes/`)",
          "`src/features/`",
          "`src/components/`",
          "`src/layouts/`"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: What is a major benefit of the `features/` folder pattern?",
        "options": [
          "It forces you to write more code",
          "It enforces encapsulation, making it easy to delete, move, or refactor an entire feature without breaking the rest of the app",
          "It runs 10x faster",
          "It doesn't require Webpack"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: If you have a custom hook `useAuth` that only the Login and Signup components use, where should it live?",
        "options": [
          "`src/hooks/useAuth.js`",
          "`src/features/auth/hooks/useAuth.js`",
          "`src/utils/useAuth.js`",
          "`src/App.js`"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Folder Design",
        "description": "Design a basic folder structure for a Blog application. Include at least a global components folder, a pages folder, and two feature folders ('posts' and 'comments')."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Performance Deep Dive</h2>\\n      <p>Advanced Optimization</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 10
  },
  {
    "order": 52,
    "title": "Custom ESLint",
    "description": "Enforcing clean code",
    "detailedExplanation": "## Custom ESLint (🟢 LEVEL 10 – BEST PRACTICES)\n\n### What is a Linter?\nWhen you work on a team, every developer has a different coding style. One person uses single quotes, another uses double quotes. One person leaves dead code everywhere, another person meticulously deletes it. \n\nWithout strict rules, a codebase quickly becomes a chaotic mess.\n\nA **Linter** (like ESLint) is a static code analysis tool that scans your code for stylistic errors, bugs, and suspicious constructs *before* you even run the code.\n\n### 👉 ESLint in React\nIf you use Vite or Create React App, ESLint is usually configured for you out-of-the-box. It comes with rules like `react-hooks/exhaustive-deps`, which yells at you if you forget to include a variable in a `useEffect` dependency array.\n\nHowever, in enterprise environments, you need to **customize** ESLint to enforce your team's specific best practices.\n\n### Customizing ESLint (`.eslintrc.cjs`)\nYou configure ESLint using a configuration file at the root of your project.\n\n```javascript\n// .eslintrc.cjs\nmodule.exports = {\n  root: true,\n  env: { browser: true, es2020: true },\n  extends: [\n    'eslint:recommended',\n    'plugin:react/recommended',\n    'plugin:react-hooks/recommended',\n  ],\n  ignorePatterns: ['dist', '.eslintrc.cjs'],\n  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },\n  settings: { react: { version: '18.2' } },\n  plugins: ['react-refresh'],\n  rules: {\n    // CUSTOM RULES:\n    'no-unused-vars': 'error',          // Throw an error if a variable is declared but never used\n    'react/prop-types': 'off',          // Turn off prop-types checking (if using TypeScript)\n    'no-console': 'warn',               // Warn if someone leaves console.log in the code\n    'eqeqeq': 'error',                  // Force the use of === instead of ==\n  },\n}\n```\n\n### Prettier vs ESLint\n- **Prettier** is a code *formatter*. It only cares about how the code looks (tabs vs spaces, max line length). \n- **ESLint** is a code *quality* tool. It cares about how the code works (unused variables, infinite loops, hook rules).\n\nThey are often used together! You use Prettier to format the code, and ESLint to catch bugs and enforce logic rules.",
    "practiceTasks": [
      {
        "task": "Understand the difference between a Linter and a Formatter"
      },
      {
        "task": "Learn how to read and modify an .eslintrc file"
      }
    ],
    "codeExample": "import React, { useState } from 'react';\n\nexport default function LinterDemo() {\n  const [logs, setLogs] = useState([]);\n\n  const runLinter = () => {\n    setLogs([]);\n    const addLog = (msg, isError) => setLogs(prev => [...prev, { msg, isError }]);\n    \n    addLog(\"Scanning code with ESLint...\", false);\n    \n    setTimeout(() => {\n      // Simulating Linter output\n      addLog(\"❌ Error: 'data' is assigned a value but never used (no-unused-vars)\", true);\n      addLog(\"⚠️ Warning: Unexpected console statement (no-console)\", true);\n      addLog(\"❌ Error: Expected '===' and instead saw '==' (eqeqeq)\", true);\n      addLog(\"❌ Error: React Hook useEffect has a missing dependency: 'userId' (react-hooks/exhaustive-deps)\", true);\n      \n      setTimeout(() => {\n        addLog(\"✖ 4 problems (3 errors, 1 warning)\", true);\n      }, 500);\n    }, 1000);\n  };\n\n  return (\n    <div style={{ padding: '20px' }}>\n      <h2>ESLint Concept Demo</h2>\n      <p>A linter scans your code to enforce quality and style rules BEFORE you run it.</p>\n      \n      <div style={{ background: '#1e1e1e', padding: '15px', border: '1px solid #444', marginBottom: '20px', fontFamily: 'monospace' }}>\n        <p style={{ color: 'gray' }}>// Bad Code Example</p>\n        <p><span style={{ color: '#c678dd' }}>function</span> <span style={{ color: '#61afef' }}>fetchData</span>() {'{'}</p>\n        <p style={{ paddingLeft: '20px' }}><span style={{ color: '#c678dd' }}>const</span> data = <span style={{ color: '#98c379' }}>\"hello\"</span>; <span style={{ color: 'gray' }}>// Unused variable!</span></p>\n        <p style={{ paddingLeft: '20px' }}><span style={{ color: '#e5c07b' }}>console</span>.<span style={{ color: '#61afef' }}>log</span>(<span style={{ color: '#98c379' }}>\"Fetching...\"</span>); <span style={{ color: 'gray' }}>// Console log left in production!</span></p>\n        <p style={{ paddingLeft: '20px' }}><span style={{ color: '#c678dd' }}>if</span> (id == <span style={{ color: '#d19a66' }}>5</span>) {'{ ... }'} <span style={{ color: 'gray' }}>// Loose equality used!</span></p>\n        <p>{'}'}</p>\n      </div>\n\n      <button onClick={runLinter} style={{ background: '#e94560' }}>Run ESLint Scan</button>\n\n      {logs.length > 0 && (\n        <div style={{ marginTop: '20px', background: '#111', padding: '15px', fontFamily: 'monospace' }}>\n          {logs.map((log, i) => <div key={i} style={{ color: log.isError ? '#ff6b6b' : '#00ffcc', marginBottom: '5px' }}>{log.msg}</div>)}\n        </div>\n      )}\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is ESLint?",
        "options": [
          "A CSS styling tool",
          "A static code analysis tool that finds and fixes problems in your JavaScript code",
          "A React Router package",
          "A database system"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 2: What is the primary difference between ESLint and Prettier?",
        "options": [
          "There is no difference",
          "ESLint is for code quality and catching bugs; Prettier is strictly for formatting (spacing, quotes)",
          "Prettier catches bugs, ESLint formats code",
          "ESLint is for CSS, Prettier is for JS"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: Where do you configure custom ESLint rules?",
        "options": [
          "In the `index.html` file",
          "In the `.eslintrc` (or `.eslintrc.cjs`) file",
          "In the `package.json` only",
          "In the Redux store"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What does the rule `'no-unused-vars': 'error'` do?",
        "options": [
          "It deletes variables",
          "It throws an error if you declare a variable but never use it anywhere in your code",
          "It forces you to use variables twice",
          "It ignores variables"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: What does the `'eqeqeq': 'error'` rule enforce?",
        "options": [
          "That all functions are equal",
          "That you must use strict equality (`===`) instead of loose equality (`==`)",
          "That you cannot use the equals sign",
          "That variables must be constants"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: Why might a team set `'no-console': 'warn'` or `'error'`?",
        "options": [
          "Because `console.log` crashes the app",
          "To prevent developers from accidentally leaving debugging logs in the production code that the user might see",
          "Because the console is deprecated",
          "To save memory"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: Which highly important ESLint plugin is specifically designed for React Hooks?",
        "options": [
          "`eslint-plugin-react-router`",
          "`eslint-plugin-react-hooks`",
          "`eslint-plugin-redux`",
          "`eslint-plugin-jest`"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What critical rule does `eslint-plugin-react-hooks` enforce regarding `useEffect`?",
        "options": [
          "That `useEffect` must return a string",
          "The `exhaustive-deps` rule, ensuring that all variables used inside the effect are listed in the dependency array",
          "That `useEffect` must be async",
          "That it cannot be used"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 9: What happens if you run an automated CI/CD pipeline and ESLint finds 3 'Errors'?",
        "options": [
          "The pipeline usually fails and prevents the code from being deployed",
          "It deploys anyway",
          "It fixes the errors automatically",
          "It emails the user"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 10: Can ESLint automatically fix certain issues?",
        "options": [
          "No, you must fix everything manually",
          "Yes, by running `eslint --fix`, it can automatically fix simple issues like spacing, quotes, or adding missing dependencies to a hook",
          "Only in TypeScript",
          "Only if you pay for it"
        ],
        "correctAnswer": 1
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: ESLint Configuration",
        "description": "Write a short JSON snippet of an ESLint configuration that turns the 'no-unused-vars' rule completely 'off'."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>SSR & SSG</h2>\\n      <p>Server-Side Rendering with Next.js</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 10
  },
  {
    "order": 53,
    "title": "Final Project",
    "description": "Build a real-world app",
    "detailedExplanation": "## Final Project (🟢 LEVEL 10 – BEST PRACTICES)\n\n### The Capstone\nCongratulations! You have traversed the entire landscape of modern React development. \n\nYou have learned:\n- **Foundation:** JavaScript ES6, Array Methods, DOM.\n- **Core React:** JSX, Components, State, Props, Context.\n- **Intermediate:** React Router, Custom Hooks, Portals.\n- **Advanced:** Performance (useMemo), Error Boundaries, Code Splitting.\n- **Ecosystem:** Axios, React Query, Redux Toolkit, JWT Authentication.\n- **Testing & Architecture:** Jest, RTL, Scalable Folder Structures, ESLint.\n\n### 👉 The Real-World Application\nReading about code is entirely different from writing it. To truly cement your knowledge, you must build a comprehensive, full-stack application from scratch.\n\n### Recommended Final Project: A Project Management Tool (e.g., Jira Clone / Trello Clone)\nThis project forces you to use **every single concept** you've learned.\n\n**Requirements:**\n1. **Authentication:** Users must be able to Register, Login, and receive a JWT. (Module 41-43)\n2. **Architecture:** Use a scalable, feature-based folder structure. (Module 51)\n3. **Routing:** Implement nested routes for dashboards and protected routes to block unauthenticated users. (Module 21, 43)\n4. **State Management:** \n   - Use *React Query* to fetch boards and tasks from an API. (Module 37)\n   - Use *Redux Toolkit* or *Zustand* to manage drag-and-drop UI state or theme settings. (Module 39)\n5. **Performance:** Lazy load the heavy chart components or settings pages using `React.lazy` and `Suspense`. (Module 29)\n6. **Forms:** Build controlled forms for creating new tasks, complete with validation. (Module 17)\n7. **Custom Hooks:** Extract localstorage or media-query logic into reusable custom hooks. (Module 25)\n8. **Testing:** Write tests using React Testing Library to ensure users can successfully create a task. (Module 45)\n\n### Next Steps\nDo not copy a tutorial character-for-character. \nRead the documentation. Read the errors in your console. Struggle through the bugs. \n\nThat is how you become a Senior React Developer. Good luck!",
    "practiceTasks": [
      {
        "task": "Design your database schema and API endpoints"
      },
      {
        "task": "Build, test, and deploy a real-world application"
      }
    ],
    "codeExample": "import React, { useState, useEffect } from 'react';\n\nexport default function Graduation() {\n  const [showConfetti, setShowConfetti] = useState(false);\n\n  useEffect(() => {\n    // Simulate graduating after 1 second of mounting!\n    const timer = setTimeout(() => {\n      setShowConfetti(true);\n    }, 1000);\n    return () => clearTimeout(timer);\n  }, []);\n\n  return (\n    <div style={{ padding: '40px', textAlign: 'center', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', borderRadius: '12px', color: 'white', position: 'relative', overflow: 'hidden' }}>\n      \n      {showConfetti && (\n        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZpdTcxanp6Nmp5aXF4czAwaDZvdmE1ZnB2YXdvcHhlbmE2YXRwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif) center/cover', opacity: 0.3, pointerEvents: 'none' }} />\n      )}\n\n      <h1 style={{ fontSize: '48px', margin: '0 0 10px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>🎉 Congratulations! 🎉</h1>\n      <h3 style={{ color: '#00ffcc', fontWeight: '300' }}>You have completed the React Mastery Curriculum.</h3>\n      \n      <div style={{ marginTop: '40px', background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '8px', display: 'inline-block', textAlign: 'left' }}>\n        <h4>Your Final Mission:</h4>\n        <ul style={{ lineHeight: '1.8' }}>\n          <li>✅ Build a real-world project from scratch.</li>\n          <li>✅ Implement a scalable folder architecture.</li>\n          <li>✅ Secure it with JWT Authentication.</li>\n          <li>✅ Manage complex data with Redux & React Query.</li>\n          <li>✅ Deploy it to Vercel or Netlify.</li>\n        </ul>\n      </div>\n\n      <div style={{ marginTop: '40px' }}>\n        <button \n          onClick={() => alert(\"Go build something amazing!\")}\n          style={{ padding: '15px 30px', fontSize: '20px', background: '#e94560', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)' }}\n        >\n          Start Building 🚀\n        </button>\n      </div>\n    </div>\n  );\n}",
    "quizzes": [
      {
        "question": "Question 1: What is the best way to solidify your knowledge of React?",
        "options": [
          "Reading more tutorials",
          "Watching another 10-hour video course",
          "Building a comprehensive, real-world application from scratch",
          "Copying and pasting code"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Question 2: Which of the following describes a 'Feature-Based' architecture?",
        "options": [
          "Putting all components in `src/components`",
          "Grouping files (API, components, hooks) by their domain/feature (e.g., `features/auth`)",
          "Putting all logic in `App.js`",
          "A database pattern"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 3: If you implement Authentication in your final project, what should the backend return upon a successful login?",
        "options": [
          "An HTML page",
          "A JSON Web Token (JWT)",
          "A React component",
          "A Redux store"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 4: What library is recommended for fetching, caching, and managing 'Server State' (like a list of tasks from an API) in modern React?",
        "options": [
          "Redux",
          "React Query (or SWR)",
          "Context API",
          "useState"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 5: If your final project has a massive, heavy charting library that is only used on the /stats route, how should you optimize it?",
        "options": [
          "Delete the library",
          "Use `React.lazy` and `<Suspense>` to code-split the route so the chart code isn't downloaded until the user visits that page",
          "Use `useMemo`",
          "Use Redux"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 6: How should you prevent unauthenticated users from accessing the /dashboard route in your final project?",
        "options": [
          "By hiding the link in the CSS",
          "By implementing a `<ProtectedRoute>` wrapper using React Router that checks the global auth state and redirects to `/login` if false",
          "By throwing an Error",
          "By asking nicely"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 7: What tool should you use to ensure your code formatting is consistent across the entire project?",
        "options": [
          "ESLint",
          "Prettier",
          "Jest",
          "Vite"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 8: What tool should you use to catch bugs, unused variables, and hook dependency issues?",
        "options": [
          "ESLint",
          "Prettier",
          "Jest",
          "Webpack"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Question 9: If you want to ensure your `<LoginForm>` renders correctly and successfully submits data when a user clicks 'Login', what tool should you use?",
        "options": [
          "React Router",
          "React Testing Library (RTL)",
          "Redux Toolkit",
          "Axios"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Question 10: What makes a developer 'Senior'?",
        "options": [
          "Knowing every React API by memory",
          "Never having bugs",
          "The ability to read documentation, debug errors independently, design scalable architectures, and solve real-world problems",
          "Typing really fast"
        ],
        "correctAnswer": 2
      }
    ],
    "assignments": [
      {
        "title": "Assignment 1: Final Project Planning",
        "description": "Write down the exact technology stack you will use for your final project (e.g., React, Vite, React Router, Redux Toolkit, React Query, TailwindCSS, etc.) and what each piece will do."
      }
    ],
    "defaultFiles": {
      "/App.js": "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>Final Project</h2>\\n      <p>Real-world Application</p>\\n    </div>\\n  );\\n}",
      "/index.js": "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
    },
    "level": 10
  }
];

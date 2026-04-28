import fs from 'fs';
import { modules } from './seeder.js';

const level0Data = {
  "JavaScript Basics": {
    detailedExplanation: `## JavaScript Basics (🟢 LEVEL 0 – FOUNDATION)

### Variables & Data Types
JavaScript is the brain of web applications. Before learning React, you must understand how JavaScript stores and processes data.

### Variables
Variables are containers that hold values. JavaScript is dynamically typed, meaning you don’t declare types explicitly.
- \`const\`: Block-scoped. Used for values that should not be reassigned. **Always default to const.**
- \`let\`: Block-scoped. Used for values that will change (e.g., counters in loops).
- \`var\`: Function-scoped. (Avoid using this in modern code!).

### Data Types
Data types define how data behaves.
1. **Primitive Values**: (string, number, boolean, null, undefined, symbol). These are **immutable**. If you change a primitive, you are replacing the entire value.
2. **Reference Values**: (Objects & Arrays). These are **mutable**. You can change their contents without replacing the object itself.

### 👉 Why is this important for React?
React state works heavily with objects and arrays. React relies on **immutability** to know when to re-render the UI. If you mutate an object directly instead of creating a copy, React won't realize the state has changed!`,
    codeExample: `// Primitive Types (Immutable)
const name = "Alice";
let age = 25;
const isDeveloper = true;

// Reference Types (Mutable)
const user = { name: "Alice", age: 25 };
const scores = [85, 90, 95];

// Reassigning let
age = 26;

console.log("User:", user);
console.log("Age:", age);`,
    defaultFiles: {
      '/index.js': `// 1. Declare a const variable for your name\nconst myName = "Developer";\n\n// 2. Declare a let variable for your age\nlet myAge = 20;\n\nconsole.log(myName, "is", myAge, "years old.");\n`
    },
    quizzes: [
      ["Which keyword should you use by default to declare a variable?", ["var", "let", "const", "function"], 2],
      ["What does it mean that JavaScript is 'dynamically typed'?", ["Variables must declare their type", "Types are evaluated at runtime, so variables can hold any type of value", "It only supports dynamic web pages", "Types are strictly enforced"], 1],
      ["Which of the following is a primitive data type?", ["Array", "Object", "Boolean", "Function"], 2],
      ["Are primitive values mutable or immutable?", ["Mutable", "Immutable", "Depends on the variable keyword", "They change randomly"], 1],
      ["What is the scope of a variable declared with `let`?", ["Global scope", "Function scope", "Block scope", "No scope"], 2],
      ["Which of the following is a reference type?", ["String", "Number", "Array", "Undefined"], 2],
      ["Why is understanding immutability critical for React?", ["React uses it to style components", "React relies on it to efficiently determine if state has changed and trigger a re-render", "React prohibits variables", "React uses it to fetch data"], 1],
      ["Can you reassign a variable declared with `const`?", ["Yes", "No, reassignment throws an error", "Only in strict mode", "Only if it is an object"], 1],
      ["Can you change the properties of an object declared with `const`?", ["Yes, the reference cannot change but the contents can", "No, the entire object is locked", "Only if it is an array", "Only in React"], 0],
      ["What does `typeof null` return?", ["'null'", "'undefined'", "'object'", "'boolean'"], 2],
      ["Which keyword is considered legacy and should generally be avoided?", ["let", "const", "var", "import"], 2],
      ["What value is assigned to an uninitialized `let` variable?", ["null", "0", "false", "undefined"], 3],
      ["How do you declare a number variable?", ["let num = '5';", "int num = 5;", "let num = 5;", "const num : 5;"], 2],
      ["What is the difference between `null` and `undefined`?", ["They are identical", "`null` is intentional absence of value, `undefined` means a variable has been declared but not assigned", "`undefined` is intentional, `null` is unassigned", "`null` is a string, `undefined` is an object"], 1],
      ["What does `1 === '1'` evaluate to?", ["true", "false", "undefined", "NaN"], 1],
      ["What does `1 == '1'` evaluate to?", ["true", "false", "undefined", "NaN"], 0],
      ["Which operator checks for both value and type equality?", ["==", "===", "=", "!=="], 1],
      ["Is `NaN` (Not a Number) a primitive type?", ["No, it's an object", "No, it's a function", "Yes, it is a special value of the Number type", "Yes, it is a String"], 2],
      ["What is a Boolean?", ["A number with decimals", "A text string", "A true or false value", "An array"], 2],
      ["If `const arr = [1, 2]`, is `arr.push(3)` allowed?", ["No, because arr is const", "Yes, because arrays are mutable reference types and push modifies the array contents, not the variable binding", "No, push is not a function", "Yes, but it returns an error"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Variable Declaration", description: "Declare a string, number, and boolean using const. Print them using console.log()." },
      { title: "Assignment 2: Mutability Test", description: "Create an object with const. Try to reassign the object itself (should fail), then successfully change one of its properties." }
    ],
    practiceTasks: [
      { task: "Understand difference between const, let, and var" },
      { task: "Differentiate between primitives and references" }
    ]
  },

  "Functions": {
    detailedExplanation: `## Functions (🟢 LEVEL 0 – FOUNDATION)

### Functions & Arrow Functions
Functions are reusable blocks of logic that perform a specific task. They are treated as **first-class citizens** in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

### Traditional Functions
Traditional function declarations are hoisted (moved to the top of their scope) and have their own \`this\` binding context.
\`\`\`javascript
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

### Arrow Functions
Introduced in ES6, arrow functions provide a shorter syntax. More importantly, **arrow functions inherit \`this\` from their parent scope** (lexical scoping), making them extremely useful for callbacks and methods inside classes.
\`\`\`javascript
const greet = (name) => {
  return "Hello, " + name;
};

// Shorthand implicit return
const multiply = (a, b) => a * b;
\`\`\`

### 👉 Why is this important for React?
- **Components are functions:** In modern React, a component is just a JavaScript function that returns JSX.
- **Event handlers:** You will constantly pass arrow functions to events like \`onClick={ () => doSomething() }\`.`,
    codeExample: `// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const subtract = (a, b) => a - b;

// Higher Order Function (taking a function as an argument)
const calculate = (x, y, operation) => {
  return operation(x, y);
};

console.log("Add:", calculate(5, 3, add));
console.log("Subtract:", calculate(5, 3, subtract));`,
    defaultFiles: {
      '/index.js': `// 1. Write an arrow function to square a number\nconst square = (n) => n * n;\n\nconsole.log("Square of 4 is:", square(4));\n`
    },
    quizzes: [
      ["What is a function in JavaScript?", ["A reusable block of logic", "A CSS style", "An HTML element", "A database table"], 0],
      ["What does it mean that functions are 'first-class citizens'?", ["They run fastest", "They can be treated like any other variable (passed, returned, assigned)", "They require a license", "They only run on the server"], 1],
      ["How do traditional functions handle the `this` keyword?", ["They inherit it from the parent", "They have their own `this` binding based on how they are called", "They do not have a `this` keyword", "It points to the Window object always"], 1],
      ["How do arrow functions handle the `this` keyword?", ["They have their own binding", "They inherit it lexically from the parent scope", "They throw an error if you use `this`", "It always points to undefined"], 1],
      ["Which syntax represents an arrow function?", ["function => {}", "() => {}", "=> function() {}", "() -> {}"], 1],
      ["What is the implicit return in an arrow function?", ["When you return false by default", "When you omit the curly braces, the expression is returned automatically", "When it returns undefined", "When it returns the arguments"], 1],
      ["Which of the following is an implicit return?", ["const add = (a, b) => { return a + b }", "const add = (a, b) => a + b", "function add(a, b) return a + b", "const add = (a) => {}"], 1],
      ["What are React functional components?", ["Just regular JavaScript functions that return UI elements (JSX)", "Special classes", "HTML files", "Server-side scripts"], 0],
      ["Can an arrow function be hoisted like a traditional function declaration?", ["Yes", "No, because it is assigned to a variable (let/const)", "Only if declared with var", "Yes, but it is deprecated"], 1],
      ["If an arrow function takes exactly one parameter, do you need parentheses around the parameter?", ["Yes, always", "No, they are optional (e.g., `name => 'Hello ' + name`)", "Yes, but only in strict mode", "No, unless it returns a string"], 1],
      ["What is a Higher-Order Function?", ["A function that executes very fast", "A function that takes another function as an argument, or returns a function", "A function defined in the global scope", "A function with many parameters"], 1],
      ["Which is a valid use of an arrow function in a React onClick handler?", ["onClick={doSomething}", "onClick={() => doSomething()}", "Both A and B", "Neither"], 2],
      ["What does `() => {}` return if it has curly braces but no `return` keyword?", ["null", "0", "undefined", "an empty object"], 2],
      ["How do you implicitly return an object literal from an arrow function?", ["() => { key: 'value' }", "() => ({ key: 'value' })", "() => return { key: 'value' }", "() => [key: 'value']"], 1],
      ["Can traditional functions be passed as props in React?", ["Yes", "No", "Only arrow functions can", "Only if bound in the constructor"], 0],
      ["What is a callback function?", ["A function executed immediately", "A function passed into another function to be executed later", "A recursive function", "A broken function"], 1],
      ["Which keyword is NOT used to define a function or method?", ["function", "=>", "class", "def"], 3],
      ["Can arrow functions be used as constructors (with the `new` keyword)?", ["Yes", "No, they lack their own `this` and prototype", "Only if they have parameters", "Only in Node.js"], 1],
      ["What does the `arguments` object do in traditional functions?", ["Contains all passed arguments", "Returns the function name", "Throws an error", "Returns the return value"], 0],
      ["Do arrow functions have their own `arguments` object?", ["Yes", "No, you must use rest parameters (...args) instead", "Only in React", "Only if explicitly declared"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Convert to Arrow", description: "Write a traditional function that divides two numbers. Then rewrite the exact same logic as a one-line arrow function." },
      { title: "Assignment 2: Callback Execution", description: "Write a function 'processData' that takes a string and a callback function. Call the callback with the uppercase version of the string." }
    ],
    practiceTasks: [
      { task: "Understand traditional vs arrow functions" },
      { task: "Learn implicit returns" }
    ]
  },

  "ES6 Features": {
    detailedExplanation: `## ES6 Features (🟢 LEVEL 0 – FOUNDATION)

### Modern JavaScript (ES6+)
ES6 (ECMAScript 2015) introduced syntax that makes JavaScript cleaner and more powerful. Mastering these features is a prerequisite for React.

### 1. Destructuring
Destructuring allows you to easily extract values from objects or arrays into distinct variables.
\`\`\`javascript
const user = { name: "John", age: 30 };
// Instead of user.name and user.age:
const { name, age } = user;
\`\`\`

### 2. Spread Operator (\`...\`)
The spread operator allows an iterable (like an array or object) to be expanded. It is the primary tool for copying data without mutating the original.
\`\`\`javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const user = { name: "John", age: 30 };
const updatedUser = { ...user, age: 31 }; // New object copy
\`\`\`

### 3. Template Literals
Template literals use backticks (\`\`) instead of quotes. They allow for multi-line strings and easy variable interpolation using \`\${}\`.
\`\`\`javascript
const name = "React";
const greeting = \`Welcome to \${name}!\`;
\`\`\`

### 👉 Why is this important for React?
- **Destructuring** is used to extract \`props\` and the values returned by hooks like \`useState\`.
- **Spread Operator** is absolutely necessary for updating state immutably.
- **Template Literals** are used constantly for dynamic class names in JSX (\`className={\`btn \${isActive ? 'active' : ''}\`}\`).`,
    codeExample: `// 1. Destructuring
const person = { first: 'Jane', last: 'Doe', city: 'NYC' };
const { first, city } = person;
console.log(first, "lives in", city);

// 2. Spread Operator
const originalArray = [10, 20];
const newArray = [...originalArray, 30];
console.log("Copied Array:", newArray);

const originalObj = { x: 1, y: 2 };
const newObj = { ...originalObj, z: 3 };
console.log("Merged Object:", newObj);

// 3. Template Literals
const total = 50;
console.log(\`Your total is $\${total} today.\`);`,
    defaultFiles: {
      '/index.js': `const user = { username: 'admin', role: 'moderator' };\n// Destructure 'username' from user\nconst { username } = user;\nconsole.log(\`Hello \${username}\`);\n`
    },
    quizzes: [
      ["What does the destructuring assignment do?", ["Deletes an object", "Extracts values from arrays or properties from objects into distinct variables", "Destroys variables", "Converts an object to a string"], 1],
      ["What symbol represents the spread operator?", ["...", "&&", "=>", "||"], 0],
      ["How do you use the spread operator to combine two arrays: a and b?", ["[a, b]", "...a, ...b", "[...a, ...b]", "a + b"], 2],
      ["Which characters are used for template literals?", ["Single quotes ''", "Double quotes \"\"", "Backticks ``", "Brackets []"], 2],
      ["How do you insert a variable `name` into a template literal?", ["${name}", "#{name}", "+ name +", "{{name}}"], 0],
      ["What is the output of `const { a } = { a: 1, b: 2 }; console.log(a);`?", ["1", "2", "undefined", "Error"], 0],
      ["If you update state using the spread operator `{ ...state, value: 2 }`, does it mutate the original state?", ["Yes", "No, it creates a shallow copy with the updated value", "It throws an error", "It creates a deep clone"], 1],
      ["How do you extract the first two items of an array `arr` into variables `x` and `y`?", ["const [x, y] = arr;", "const {x, y} = arr;", "const x, y = arr;", "const [x: y] = arr;"], 0],
      ["Can template literals span multiple lines?", ["Yes, without needing concatenation", "No, they must be on one line", "Only in Node.js", "Only if escaped with \\n"], 0],
      ["What is the 'rest' operator?", ["Used to put the program to sleep", "Uses the `...` syntax to collect remaining arguments into an array", "Deletes variables", "A type of promise"], 1],
      ["How do you provide a default value during object destructuring?", ["const { name || 'Guest' } = user;", "const { name = 'Guest' } = user;", "const { name: 'Guest' } = user;", "const name = user.name ? 'Guest'"], 1],
      ["What does `const clone = [...original]` do?", ["Creates a deep clone", "Creates a shallow copy of the array", "Concatenates strings", "Mutates the original array"], 1],
      ["Why do we use the spread operator to update React state?", ["Because React is slow", "Because React state must be immutable, so we create a new copy with the spread operator", "Because it looks cool", "To compress the data"], 1],
      ["How do you alias a destructured variable (rename it)?", ["const { oldName as newName } = obj;", "const { oldName = newName } = obj;", "const { oldName: newName } = obj;", "const { newName : oldName } = obj;"], 2],
      ["What happens if you spread an object but place the spread operator AFTER a new key? e.g., `{ x: 1, ...obj }` (Assume obj has x: 2)", ["x will be 1", "x will be 2 (overridden by obj)", "It throws an error", "x will be [1, 2]"], 1],
      ["What happens if you spread an object and place the new key AFTER the spread? e.g., `{ ...obj, x: 5 }`", ["x will be 5, overriding whatever was in obj", "x will be whatever was in obj", "It throws an error", "Both values are kept"], 0],
      ["Can you spread an array into an object?", ["Yes, the keys will be the array indices (0, 1, 2...)", "No, it throws an error", "Yes, but keys will be null", "Only in TypeScript"], 0],
      ["What does `const [a, , b] = [1, 2, 3];` do?", ["Throws an error", "Sets a=1, b=2", "Sets a=1, b=3 (skipping 2)", "Sets a=1, b=undefined"], 2],
      ["ES6 was released in what year?", ["2015", "2009", "2020", "1995"], 0],
      ["Which is the correct way to construct a dynamic class name using template literals?", ["className={`btn btn-${color}`}", "className={'btn btn-${color}'}", "className=\"btn btn-${color}\"", "className={btn btn-{color}}"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Merging Profiles", description: "Create two objects: basicInfo and preferences. Use the spread operator to combine them into a single userProfile object." },
      { title: "Assignment 2: Array Destructuring", description: "Create an array with three color strings. Use destructuring to assign the first and third colors to variables." }
    ],
    practiceTasks: [
      { task: "Destructure objects and arrays" },
      { task: "Copy data safely using the spread operator" }
    ]
  },

  "Array Methods": {
    detailedExplanation: `## Array Methods (🟢 LEVEL 0 – FOUNDATION)

### Functional Programming Tools
Modern JavaScript relies heavily on functional array methods instead of traditional \`for\` loops. These methods do not mutate the original array; instead, they return a new array or value.

### 1. map()
The \`map()\` method creates a **new array** populated with the results of calling a provided function on every element in the calling array.
- **Use case:** Transforming data. In React, it's used to transform an array of data into an array of UI elements.

\`\`\`javascript
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2); // [2, 4, 6]
\`\`\`

### 2. filter()
The \`filter()\` method creates a **new array** with all elements that pass the test implemented by the provided function.
- **Use case:** Removing unwanted data (e.g., deleting an item from a list).

\`\`\`javascript
const ages = [12, 18, 25, 8];
const adults = ages.filter(age => age >= 18); // [18, 25]
\`\`\`

### 3. reduce()
The \`reduce()\` method executes a "reducer" callback function on each element, passing in the return value from the calculation on the preceding element. It reduces the array to a **single value**.
- **Use case:** Summing numbers, or combining data into a single object.

\`\`\`javascript
const prices = [10, 20, 30];
const total = prices.reduce((acc, current) => acc + current, 0); // 60
\`\`\`

### 👉 Why is this important for React?
- You will use \`map()\` every single time you need to render a list of UI elements.
- You will use \`filter()\` to implement "delete" functionality in your state without mutating the original array.`,
    codeExample: `const tasks = [
  { id: 1, title: 'Learn JS', completed: true },
  { id: 2, title: 'Learn React', completed: false },
  { id: 3, title: 'Build Project', completed: false }
];

// 1. map(): Get an array of titles
const titles = tasks.map(t => t.title);
console.log("Titles:", titles);

// 2. filter(): Get only incomplete tasks
const pending = tasks.filter(t => !t.completed);
console.log("Pending Tasks:", pending);

// 3. reduce(): Count completed tasks
const completedCount = tasks.reduce((acc, t) => {
  return t.completed ? acc + 1 : acc;
}, 0);
console.log("Completed Count:", completedCount);`,
    defaultFiles: {
      '/index.js': `const numbers = [10, 20, 30];\n// Use map to multiply each number by 10\nconst multiplied = numbers.map(n => n * 10);\nconsole.log(multiplied);\n`
    },
    quizzes: [
      ["What does the map() method return?", ["A single value", "A boolean", "A new array containing the transformed elements", "The original array mutated"], 2],
      ["Does map() mutate the original array?", ["Yes", "No", "Only if it contains objects", "Depends on the callback"], 1],
      ["Which method is used to remove items from an array based on a condition?", ["remove()", "slice()", "map()", "filter()"], 3],
      ["In React, which method is used exclusively to render lists of elements from an array of data?", ["reduce()", "forEach()", "map()", "filter()"], 2],
      ["What does the reduce() method return?", ["A new array", "A single accumulated value", "A boolean", "Undefined"], 1],
      ["Why is forEach() NOT used to render lists in React JSX?", ["It is too slow", "It returns undefined, but React needs an array of elements returned", "It mutates the array", "It is banned in React"], 1],
      ["What is the second argument passed to the reduce() method?", ["The array itself", "The current index", "The initial value of the accumulator", "The callback function"], 2],
      ["If you have an array `[1, 2, 3]` and use `filter(num => num > 1)`, what is the result?", ["[2, 3]", "[1]", "[1, 2, 3]", "true"], 0],
      ["What arguments are passed to the callback function in map()?", ["element, index, array", "index, element", "accumulator, element", "key, value"], 0],
      ["What happens if the callback function in filter() returns false?", ["The element is kept in the new array", "The element is excluded from the new array", "The loop stops", "An error is thrown"], 1],
      ["Can you chain these methods? e.g., `arr.filter().map()`", ["Yes, because filter returns a new array", "No, they must be on separate lines", "Only reduce can be chained", "Only if the array is let, not const"], 0],
      ["Which method would you use to find the total sum of an array of numbers?", ["map()", "filter()", "sum()", "reduce()"], 3],
      ["If you want to create an array of user names from an array of user objects, which method is best?", ["filter()", "map()", "reduce()", "find()"], 1],
      ["What does `find()` do compared to `filter()`?", ["They do the same thing", "find() returns the first matching element, filter() returns an array of all matches", "find() returns a boolean", "find() is faster"], 1],
      ["Which of these methods mutates the original array?", ["map", "filter", "sort", "reduce"], 2],
      ["When using map() in React JSX, what special prop must you add to the returned elements?", ["id", "index", "key", "ref"], 2],
      ["If your map callback is `num => num * 2`, what is it an example of?", ["A pure function", "An impure function", "A reducer", "A state mutation"], 0],
      ["What is the accumulator in the reduce method?", ["The current element", "The index", "The accumulated value previously returned in the last invocation of the callback", "The original array"], 2],
      ["If you omit the initial value in reduce(), what happens?", ["It throws an error", "It uses 0 by default", "It uses the first element of the array as the initial value", "It returns undefined"], 2],
      ["How do you write a map function that implicitly returns an object literal?", ["map(item => { id: item.id })", "map(item => ({ id: item.id }))", "map(item => return { id: item.id })", "map(item => object(item.id))"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Filter & Map", description: "Given an array of strings, use filter() to keep strings longer than 4 characters, then use map() to convert them to uppercase." },
      { title: "Assignment 2: Total Price", description: "Given an array of objects representing items in a cart (with a 'price' property), use reduce() to calculate the total cost." }
    ],
    practiceTasks: [
      { task: "Transform array items using map" },
      { task: "Extract single values using reduce" }
    ]
  },

  "DOM Manipulation": {
    detailedExplanation: `## DOM Manipulation (🟢 LEVEL 0 – FOUNDATION)

### The Document Object Model (DOM)
The DOM is a tree-like structure created by the browser when it loads an HTML page. It represents the HTML elements as JavaScript objects, allowing you to interact with the page using code.

### Traditional DOM Manipulation
In Vanilla JavaScript, you directly access and modify the DOM.
1. **Selecting**: \`document.getElementById('my-id')\` or \`document.querySelector('.my-class')\`
2. **Modifying**: \`element.textContent = "New Text"\` or \`element.classList.add('active')\`
3. **Events**: \`element.addEventListener('click', () => { ... })\`

### The Problem with Manual DOM Manipulation
While simple for small pages, manual DOM manipulation becomes a nightmare in large applications:
- **It is slow:** Reading and writing to the actual DOM is a massive performance bottleneck.
- **It is messy:** Keeping the UI synchronized with your data requires hundreds of event listeners and manual updates.
- **It is hard to track:** Bugs occur when the DOM state doesn't match the application state.

### 👉 The React Solution: The Virtual DOM
React solves this problem by abstracting the DOM entirely. 
Instead of you telling the browser *how* to update the DOM (Imperative), you tell React *what* the UI should look like based on the current state (Declarative). 

React creates a lightweight copy of the DOM called the **Virtual DOM**. When state changes, React updates the Virtual DOM, compares it to the old version (Diffing), and automatically calculates the minimum number of actual DOM updates needed to reflect the change. You rarely, if ever, write \`document.getElementById\` in a React app!`,
    codeExample: `// --- VANILLA JS (Imperative) ---
// 1. Select the element
// const btn = document.querySelector('#btn');
// const countDisplay = document.querySelector('#count');
// let count = 0;
// 2. Attach event listener
// btn.addEventListener('click', () => {
//   count++;
//   3. Manually update the DOM
//   countDisplay.textContent = count;
// });

// --- REACT (Declarative) ---
// You just define the state and the UI output.
// React handles the DOM manipulation behind the scenes.
// const [count, setCount] = useState(0);
// return <button onClick={() => setCount(count + 1)}>{count}</button>;

console.log("React handles DOM manipulation for you using the Virtual DOM!");`,
    defaultFiles: {
      '/index.js': `// Simulated vanilla JS selection\nconsole.log("In vanilla JS, you use document.querySelector().");\nconsole.log("In React, you use State and JSX!");\n`
    },
    quizzes: [
      ["What does DOM stand for?", ["Data Object Model", "Document Object Model", "Display Output Mechanism", "Document Orientation Model"], 1],
      ["What is the DOM?", ["A server database", "A programming language", "A tree-like representation of an HTML document accessible via JavaScript", "A CSS framework"], 2],
      ["Which Vanilla JS method is used to select an element by its ID?", ["document.selectId()", "document.querySelectorId()", "document.getElementById()", "document.find()"], 2],
      ["What is a major problem with manual DOM manipulation in large apps?", ["It is illegal", "It is very fast but uses too much memory", "It is slow, messy, and hard to keep synchronized with data", "It prevents CSS from loading"], 2],
      ["How does React interact with the DOM?", ["It uses jQuery", "It updates the real DOM directly on every keystroke", "It uses a Virtual DOM to batch and optimize updates to the real DOM", "It replaces the DOM with Canvas"], 2],
      ["What is the Virtual DOM?", ["A 3D representation of the UI", "A lightweight JavaScript copy of the actual DOM", "A cloud-based DOM", "A deprecated feature of React"], 1],
      ["What is the process of comparing the old Virtual DOM with the new one called?", ["Diffing / Reconciliation", "Rendering", "Compiling", "Transpiling"], 0],
      ["In React, you tell it WHAT the UI should look like. What programming paradigm is this?", ["Imperative", "Declarative", "Object-Oriented", "Procedural"], 1],
      ["In Vanilla JS, you dictate exactly HOW to update the UI step-by-step. What paradigm is this?", ["Declarative", "Imperative", "Functional", "Asynchronous"], 1],
      ["Should you use `document.getElementById` inside a React component?", ["Yes, it is the best way to get data", "No, you should use state and let React handle the DOM (or use refs if absolutely necessary)", "Yes, but only in useEffect", "Only for buttons"], 1],
      ["Which is faster: updating a JavaScript object, or updating the actual browser DOM?", ["The actual DOM", "A JavaScript object (like the Virtual DOM)", "They are the exact same speed", "Depends on the browser"], 1],
      ["What is the equivalent of `element.addEventListener('click', handler)` in React?", ["<button onClick={handler}>", "element.bind('click')", "document.listen('click')", "<button click={handler}>"], 0],
      ["How do you change the text of an element in Vanilla JS?", ["element.text = 'new'", "element.textContent = 'new'", "element.value = 'new'", "element.html = 'new'"], 1],
      ["What does `document.querySelector('.card')` select?", ["All elements with class 'card'", "The first element with class 'card'", "The element with ID 'card'", "The `<card>` tag"], 1],
      ["Why is the Virtual DOM faster than updating the real DOM?", ["It uses WebAssembly", "It minimizes actual reflows and repaints in the browser by batching updates", "It runs on the server", "It ignores CSS"], 1],
      ["If you change a React component's state, what happens immediately?", ["The real DOM updates", "The Virtual DOM updates and compares itself to the previous version", "The browser reloads", "Nothing"], 1],
      ["What React hook gives you direct access to a DOM node if you *really* need it (e.g., to manage focus)?", ["useState", "useEffect", "useRef", "useDOM"], 2],
      ["Is the Virtual DOM exclusive to React?", ["Yes, React patented it", "No, other frameworks like Vue also use a Virtual DOM", "Yes, it only works with JSX", "No, it's a native browser feature"], 1],
      ["In React, instead of `element.classList.add('active')`, how do you add a class?", ["Use `className={isActive ? 'active' : ''}` controlled by state", "Use `class='active'`", "Use `document.add('active')`", "You cannot add classes dynamically"], 0],
      ["React's approach to the DOM prevents which common category of bugs?", ["Syntax errors", "State mismatch (UI showing old data because DOM wasn't manually updated)", "Server crashes", "Database failures"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Mental Model", description: "Write down the difference between Declarative (React) and Imperative (Vanilla JS) programming using the analogy of ordering a pizza." },
      { title: "Assignment 2: Virtual DOM Benefits", description: "Explain in 3 sentences why the Virtual DOM improves application performance." }
    ],
    practiceTasks: [
      { task: "Understand the concept of the Virtual DOM" },
      { task: "Compare Declarative vs Imperative UI updates" }
    ]
  }
};

async function updateLevel0() {
  let updatedCount = 0;
  
  modules.forEach(mod => {
    if (level0Data[mod.title]) {
      const data = level0Data[mod.title];
      mod.detailedExplanation = data.detailedExplanation;
      mod.codeExample = data.codeExample;
      mod.quizzes = data.quizzes.map((q, i) => ({
        question: "Question " + (i + 1) + ": " + q[0],
        options: q[1],
        correctAnswer: q[2]
      }));
      mod.assignments = data.assignments;
      mod.practiceTasks = data.practiceTasks;
      if (data.defaultFiles) {
        mod.defaultFiles = data.defaultFiles;
      }
      updatedCount++;
    }
  });

  // Fix the \\n literal bug for all other generated placeholder modules
  modules.forEach(mod => {
    if (mod.detailedExplanation.includes('\\\\n')) {
      mod.detailedExplanation = mod.detailedExplanation.replace(/\\\\n/g, '\\n');
    }
    if (mod.codeExample.includes('\\\\n')) {
      mod.codeExample = mod.codeExample.replace(/\\\\n/g, '\\n');
    }
  });

  // VERY IMPORTANT: Use standard newlines (\n) to prevent syntax errors
  const fileContent = "// Auto-generated seeder file containing 53 modules.\n" +
                      "// Generated via seed-builder.js and updated via scripts.\n\n" +
                      "export const modules = " + JSON.stringify(modules, null, 2) + ";\n";
                      
  fs.writeFileSync('./seeder.js', fileContent);
  console.log("✅ Successfully injected high-quality content into " + updatedCount + " Level 0 modules and fixed formatting bugs!");
}

updateLevel0();

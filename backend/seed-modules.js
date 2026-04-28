// Run: node seed-modules.js
// This generates seeder.js with all 53 modules

import fs from 'fs';

const topics = [
  // [order, title, description, level, concepts, quizPairs, codeSnippet, assign1, assign2]
  [1,"JavaScript Basics","Variables & Data Types",0,
    "JavaScript has three variable keywords: `var` (function-scoped, hoisted), `let` (block-scoped, reassignable), and `const` (block-scoped, not reassignable). The seven primitive types are: string, number, boolean, null, undefined, symbol, and bigint. Use `typeof` to check a value's type. Prefer `const` by default; use `let` only when you need to reassign. Avoid `var` in modern code.\n\n### Key Concepts\n- **var vs let vs const**: var is hoisted and function-scoped; let/const are block-scoped.\n- **Primitive Types**: Immutable values stored directly (not by reference).\n- **Type Coercion**: JS auto-converts types in comparisons; use `===` to avoid surprises.\n- **typeof null**: Returns `'object'` — a famous JS quirk.\n\n### Examples\n```js\nconst name = 'Alice'; // string\nlet age = 25;         // number\nvar active = true;    // boolean (avoid var)\nconsole.log(typeof name); // 'string'\nconsole.log(null == undefined); // true (loose)\nconsole.log(null === undefined); // false (strict)\n```\n\n### Best Practices\n1. Always use `const` unless reassignment is needed.\n2. Use `===` over `==` to avoid implicit coercion.\n3. Declare variables at the top of their scope.",
    [
      ["Which keyword creates a block-scoped variable?",["var","let","function","class"],1],
      ["What does typeof null return?",["'null'","'undefined'","'object'","'boolean'"],2],
      ["Which is NOT a primitive type?",["string","array","boolean","symbol"],1],
      ["What does const prevent?",["Mutation of value","Reassignment of binding","Both","Neither"],1],
      ["var is scoped to:",["Block","Function","Module","Global only"],1],
      ["What is the result of 1 + '1'?",["2","'11'","NaN","Error"],1],
      ["Which statement is true about let?",["It is function-scoped","It is hoisted with initialization","It is block-scoped","It cannot hold numbers"],2],
      ["NaN === NaN evaluates to:",["true","false","undefined","TypeError"],1],
      ["Which type represents intentional absence of value?",["undefined","null","0","false"],1],
      ["Template literals use:",["Single quotes","Double quotes","Backticks","Brackets"],2],
      ["What does === check?",["Value only","Type only","Value and type","Reference"],2],
      ["Which is a falsy value?",["'false'","1","[]","0"],3],
      ["typeof undefined returns:",["'null'","'void'","'undefined'","'object'"],2],
      ["Which declaration is hoisted with its value?",["let","const","var","import"],2],
      ["What is typeof 42?",["'int'","'float'","'number'","'integer'"],2],
      ["Symbol() creates:",["A string","A unique identifier","A number","An object"],1],
      ["Which keyword was introduced in ES6?",["var","function","let","try"],2],
      ["What is BigInt used for?",["Decimal numbers","Integers larger than 2^53","Strings","Booleans"],1],
      ["let in a block is accessible:",["Everywhere in file","Only in that block","Only in function","In global scope"],1],
      ["Which avoids variable hoisting issues?",["Using var everywhere","Using let and const","Avoiding variables","Using global"],1],
    ],
    `// Variables Demo\nconst pi = 3.14;\nlet score = 0;\nscore += 10;\nconsole.log(pi, score);\n\n// Types\nconsole.log(typeof 'hello'); // string\nconsole.log(typeof 42);      // number\nconsole.log(typeof true);    // boolean\nconsole.log(typeof null);    // object (quirk!)`,
    "Create a script declaring variables of each type and log typeof for each",
    "Build a type-checker function that returns a description of any value passed"
  ],
  [2,"Functions & Arrow Functions","Functions — Functions & Arrow Functions",0,
    "Functions are reusable blocks of code. JavaScript supports **function declarations** (hoisted), **function expressions** (not hoisted), and **arrow functions** (ES6, concise syntax). Arrow functions do not have their own `this`, making them ideal for callbacks. Default parameters, rest parameters (`...args`), and higher-order functions are key ES6 function features.\n\n### Key Concepts\n- **Declaration vs Expression**: Declarations are hoisted; expressions are not.\n- **Arrow Functions**: Shorter syntax; lexically bind `this`.\n- **Default Params**: `function greet(name = 'World')` — fallback when argument is undefined.\n- **Rest Params**: `function sum(...nums)` collects remaining args into an array.\n\n### Examples\n```js\n// Declaration\nfunction add(a, b) { return a + b; }\n\n// Expression\nconst multiply = function(a, b) { return a * b; };\n\n// Arrow\nconst divide = (a, b) => a / b;\n\n// Default param\nconst greet = (name = 'World') => 'Hello, ' + name;\n\n// Rest param\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\nconsole.log(sum(1, 2, 3, 4)); // 10\n```\n\n### Best Practices\n1. Use arrow functions for callbacks and array methods.\n2. Use function declarations for top-level named functions.\n3. Prefer rest params over the `arguments` object.",
    [
      ["Arrow functions bind `this` from:",["Call site","Enclosing scope","Global","Prototype"],1],
      ["Which is hoisted?",["Function expression","Arrow function","Function declaration","const function"],2],
      ["Default parameter syntax:",["function f(x=0)","function f(x||0)","function f(x?0)","function f(x default 0)"],0],
      ["Rest parameter collects args into:",["An object","A string","An array","A Set"],2],
      ["Arrow function with one param needs:",["Parentheses","No parentheses required","Curly braces","return keyword"],1],
      ["Arrow function returning object literal:",["() => {}","() => ({})","() -> {}","=> ()"],1],
      ["What does IIFE stand for?",["Immediately Invoked Function Expression","Internal Interface Function","Indexed Iterable Function","None"],0],
      ["Higher-order functions:",["Take/return functions","Only return arrays","Only use loops","Are deprecated"],0],
      ["The arguments object is NOT available in:",["Regular functions","Arrow functions","Both","Neither"],1],
      ["Which creates a closure?",["A function inside a function","A class","An array","An object"],0],
      ["Pure functions have:",["No side effects","Access to DOM","Global state","All of above"],0],
      ["Function.prototype.bind returns:",["A value","A new bound function","undefined","An array"],1],
      ["What does call() do?",["Defines a function","Invokes with specific this","Creates closure","Hoists function"],1],
      ["Which is a function expression?",["function f(){}","const f = function(){}","class F{}","const f = () => {}; // also this"],1],
      ["Recursion is:",["A loop","A function calling itself","An arrow function","A rest param"],1],
      ["typeof a function returns:",["'object'","'class'","'function'","'lambda'"],2],
      ["Which statement correctly uses rest params?",["function f(a, ...b)","function f(...a, b)","function f(a..., b)","function f(a, b...)"],0],
      ["Arrow function implicit return requires:",["Parentheses around body","Curly braces","No curly braces and no return","A semicolon"],2],
      ["apply() differs from call() in:",["It returns a new function","It takes args as array","It binds this permanently","It is asynchronous"],1],
      ["Which is a higher-order function?",["parseInt","map","isNaN","typeof"],1],
    ],
    `const greet = (name = 'World') => \`Hello, \${name}!\`;\nconsole.log(greet());         // Hello, World!\nconsole.log(greet('Alice'));  // Hello, Alice!\n\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\nconsole.log(sum(1, 2, 3)); // 6`,
    "Write a calculator with add, subtract, multiply, divide as arrow functions",
    "Build a compose() function that chains two functions: compose(f,g)(x) => f(g(x))"
  ],
  [3,"Modern JavaScript (ES6+)","ES6 Features — Destructuring, Spread, Template Literals",0,
    "ES6 introduced powerful syntax improvements. **Destructuring** lets you unpack values from arrays and objects. The **spread operator** (`...`) expands iterables. **Rest** collects remaining elements. **Template literals** enable string interpolation with backticks. **Shorthand properties** and **computed keys** simplify object creation. These features reduce boilerplate and improve readability.\n\n### Key Concepts\n- **Object Destructuring**: `const { name, age } = user;`\n- **Array Destructuring**: `const [first, ...rest] = arr;`\n- **Spread in arrays**: `[...arr1, ...arr2]` to merge.\n- **Spread in objects**: `{ ...obj, newKey: value }` to clone/extend.\n- **Template Literals**: Multi-line strings with expressions.\n\n### Examples\n```js\nconst user = { name: 'Alice', age: 30 };\nconst { name, age = 18 } = user; // default value\n\nconst [a, b, ...rest] = [1, 2, 3, 4];\nconsole.log(rest); // [3, 4]\n\nconst merged = { ...user, role: 'admin' };\nconsole.log(`Name: ${name}, Age: ${age}`);\n```\n\n### Best Practices\n1. Use destructuring in function params: `function f({ name, age }) {}`\n2. Use spread to avoid mutating original arrays/objects.\n3. Use template literals instead of string concatenation.",
    [
      ["Destructuring syntax for objects uses:",["[]","()","{}","<>"],2],
      ["Spread operator is written as:",["..","...","****","->"],1],
      ["Template literal delimiter:",["Single quote","Double quote","Backtick","Slash"],2],
      ["Which destructures with a default?",["const {a=1}=obj","const {a||1}=obj","const {a?1}=obj","const a=obj.a||1 only"],0],
      ["const [a,,b]=[1,2,3] — b equals:",["1","2","3","undefined"],2],
      ["Spread in function call: Math.max(...[1,2,3]) returns:",["[1,2,3]","3","1","NaN"],1],
      ["Object spread creates:",["A reference","A shallow clone","A deep clone","A proxy"],1],
      ["Template literal expression syntax:",["${expr}","#{expr}","{{expr}}","(expr)"],0],
      ["Rest in destructuring must be:",["First element","Middle element","Last element","Anywhere"],2],
      ["Which renames a destructured key?",["const {a:b}=obj","const {a=>b}=obj","const a as b=obj","const {a,b}=obj"],0],
      ["Spread merging two objects: later keys:",["Are ignored","Override earlier keys","Throw error","Are prefixed"],1],
      ["Nested destructuring:",["Is not allowed","Is supported","Requires lodash","Only in arrays"],1],
      ["const {a,...rest}={a:1,b:2,c:3} — rest is:",["{}","a:1","{b:2,c:3}","undefined"],2],
      ["Tagged template literals:",["Are just strings","Pass template parts to a function","Create HTML","Are deprecated"],1],
      ["Which is valid shorthand property?",["{name:name}","{name}","{name=>name}","{'name':name}"],1],
      ["Computed property name syntax:",["{[expr]:val}","{expr:val}","{'expr':val}","{(expr):val}"],0],
      ["Array destructuring swap trick:",["[a,b]=[b,a]","swap(a,b)","temp=a;a=b;b=temp","Impossible"],0],
      ["Optional chaining (?.) was introduced in:",["ES5","ES6","ES2020","ES2015"],2],
      ["Nullish coalescing (??) returns right side when left is:",["Falsy","null or undefined","0","false"],1],
      ["Which correctly uses spread for array copy?",["[...arr]","arr.copy()","[arr]","copy(arr)"],0],
    ],
    `const { name, age = 18 } = { name: 'Bob' };\nconsole.log(name, age); // Bob 18\n\nconst nums = [1,2,3];\nconst more = [...nums, 4, 5];\nconsole.log(more); // [1,2,3,4,5]\n\nconst tag = (strings, ...vals) => strings.raw[0] + vals.map(v=>v*2).join('');\nconsole.log(tag\`val \${3} end\`);`,
    "Refactor a function that accepts 5 separate params to use a single destructured object param",
    "Write a mergeDeep helper using spread that merges two config objects"
  ],
  [4,"Array Methods","Array Methods — map(), filter(), reduce()",0,
    "Array methods like `map()`, `filter()`, and `reduce()` are the cornerstone of functional JavaScript. **`map()`** transforms each element and returns a new array. **`filter()`** selects elements matching a predicate. **`reduce()`** accumulates elements into a single value. These methods are pure (non-mutating) and chainable. Other essential methods: `find`, `findIndex`, `some`, `every`, `flat`, `flatMap`.\n\n### Key Concepts\n- **map()**: `arr.map(item => item * 2)` — always returns same length array.\n- **filter()**: `arr.filter(item => item > 0)` — returns subset.\n- **reduce()**: `arr.reduce((acc, cur) => acc + cur, 0)` — accumulator pattern.\n\n### Examples\n```js\nconst nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);      // [2,4,6,8,10]\nconst evens = nums.filter(n => n % 2 === 0); // [2,4]\nconst sum = nums.reduce((acc, n) => acc + n, 0); // 15\n\n// Chaining\nconst result = nums\n  .filter(n => n > 2)\n  .map(n => n * 10);\nconsole.log(result); // [30, 40, 50]\n```\n\n### Best Practices\n1. Prefer map/filter/reduce over for loops for transformations.\n2. Always provide the initial value argument to reduce().\n3. Chain methods for readability but watch performance on large arrays.",
    [
      ["map() returns:",["Same array modified","New array of same length","Filtered array","A single value"],1],
      ["filter() returns:",["All elements","Elements matching predicate","Single value","Modified original"],1],
      ["reduce() initial value is:",["Required","Optional but recommended","Ignored","Always 0"],1],
      ["Which method checks if ANY element matches?",["every","some","find","includes"],1],
      ["Which method checks if ALL elements match?",["some","find","every","filter"],2],
      ["find() returns:",["Array of matches","First matching element","Index","Boolean"],1],
      ["findIndex() returns:",["Element","First matching index or -1","All indices","Boolean"],1],
      ["flat() is used to:",["Sort arrays","Flatten nested arrays","Merge objects","Map and flatten"],1],
      ["flatMap() is equivalent to:",["map then flat(1)","filter then map","flat then map","reduce"],0],
      ["forEach() differs from map() because it:",["Returns new array","Returns undefined","Filters elements","Sorts elements"],1],
      ["sort() by default sorts:",["Numerically","By string Unicode","By insertion order","Randomly"],1],
      ["Which doesn't mutate the original?",["push","pop","map","splice"],2],
      ["slice() vs splice():",["Both mutate","slice mutates, splice doesn't","splice mutates, slice doesn't","Neither mutates"],2],
      ["Array.from() creates array from:",["Numbers only","Iterables/array-like","Objects only","Functions"],1],
      ["includes() checks:",["Index","Value existence","Type","Length"],1],
      ["reduce() accumulator starts at:",["0","First element","Initial value argument","undefined"],2],
      ["Which array method is used for side effects only?",["map","filter","forEach","reduce"],2],
      ["concat() returns:",["Modified original","New merged array","Flattened array","Sorted array"],1],
      ["reverse() in JS:",["Returns new array","Mutates original","Neither","Creates copy then reverses"],1],
      ["indexOf() vs findIndex():",["Same","indexOf uses value, findIndex uses function","findIndex uses value","Both use functions"],1],
    ],
    `const products = [\n  { name: 'Apple', price: 1.5, inStock: true },\n  { name: 'Mango', price: 3.0, inStock: false },\n  { name: 'Banana', price: 0.5, inStock: true },\n];\n\nconst available = products.filter(p => p.inStock);\nconst names = available.map(p => p.name);\nconst total = available.reduce((sum, p) => sum + p.price, 0);\nconsole.log(names);  // ['Apple', 'Banana']\nconsole.log(total);  // 2`,
    "Transform an array of user objects: filter adults, map to names, reduce to a comma-separated string",
    "Implement your own myMap(), myFilter(), and myReduce() functions from scratch"
  ],
  [5,"DOM Manipulation","DOM Manipulation — JavaScript DOM Basics",0,
    "The Document Object Model (DOM) is a tree representation of an HTML document. JavaScript can select, create, modify, and delete DOM nodes. **Selection**: `getElementById`, `querySelector`, `querySelectorAll`. **Modification**: `innerHTML`, `textContent`, `setAttribute`, `classList`. **Creation**: `createElement`, `appendChild`, `insertBefore`. **Events**: `addEventListener`, `removeEventListener`.\n\n### Key Concepts\n- **querySelector** vs **getElementById**: querySelector is more flexible (CSS selectors).\n- **innerHTML** vs **textContent**: innerHTML parses HTML; textContent is safer (no XSS).\n- **Event Delegation**: Attach one listener to a parent instead of many children.\n- **Event Bubbling**: Events propagate up the DOM tree.\n\n### Examples\n```js\nconst btn = document.querySelector('#myBtn');\nconst output = document.querySelector('#output');\n\nbtn.addEventListener('click', () => {\n  const li = document.createElement('li');\n  li.textContent = 'New item ' + Date.now();\n  document.querySelector('ul').appendChild(li);\n});\n\n// Event delegation\ndocument.querySelector('ul').addEventListener('click', (e) => {\n  if (e.target.tagName === 'LI') e.target.remove();\n});\n```\n\n### Best Practices\n1. Cache DOM selections in variables — don't query in loops.\n2. Use textContent instead of innerHTML to prevent XSS.\n3. Use event delegation for dynamic elements.",
    [
      ["querySelector returns:",["All matches","First match","An array","NodeList"],1],
      ["querySelectorAll returns:",["First element","Last element","NodeList","HTMLCollection live"],2],
      ["Which is safer against XSS?",["innerHTML","outerHTML","textContent","insertAdjacentHTML"],2],
      ["appendChild adds a child:",["At the beginning","At the end","After sibling","Before sibling"],1],
      ["addEventListener 3rd param controls:",["Event type","Callback","Capture/bubble phase","Return value"],2],
      ["event.preventDefault() does:",["Stops propagation","Cancels default browser behavior","Removes listener","Captures event"],1],
      ["event.stopPropagation() does:",["Prevents default","Stops event bubbling","Removes element","Adds listener"],1],
      ["classList.toggle() does:",["Adds a class","Removes a class","Adds if absent, removes if present","Checks class"],2],
      ["getElementById is:",["Slower than querySelector","Faster than querySelector","Same speed","Deprecated"],1],
      ["Which creates a new element?",["document.new()","document.create()","document.createElement()","new Element()"],2],
      ["Event delegation attaches listener to:",["Each child","Parent element","document only","window only"],1],
      ["DOMContentLoaded fires when:",["Images load","Full page loads","HTML parsed","CSS loads"],2],
      ["removeEventListener requires:",["Same function reference","Any function","No arguments","Just event type"],0],
      ["setAttribute('class','x') vs classList:",["Same","setAttribute replaces all classes","classList is deprecated","No difference"],1],
      ["insertBefore(newNode, refNode) inserts:",["After refNode","Before refNode","As last child","As first child"],1],
      ["cloneNode(true) clones:",["Element only","Element and all descendants","Only text","Only attributes"],1],
      ["Which selects all p inside .container?",["'.container p'","'p.container'","'p > .container'","'.container > p only'"],0],
      ["dataset property accesses:",["CSS variables","data-* attributes","Event data","Node data"],1],
      ["style.display='none' vs classList:",["Same effect visually","style has higher specificity","classList is faster","No difference"],1],
      ["MutationObserver is used to:",["Animate elements","Observe DOM changes","Handle events","Style elements"],1],
    ],
    `// Note: DOM APIs work in browser, not Node.js\n// This demo simulates the concept:\nconst elements = ['div', 'p', 'span', 'ul', 'li'];\nelements.forEach(tag => {\n  console.log('Element:', tag, '| Text via textContent is safe');\n});\n\n// Simulated event delegation pattern:\nconst handleClick = (targetTag) => {\n  if (targetTag === 'BUTTON') console.log('Button clicked!');\n  else console.log('Other element:', targetTag);\n};\nhandleClick('BUTTON');\nhandleClick('DIV');`,
    "Build a dynamic todo list: add items on button click, delete on item click",
    "Create a live character counter for a textarea using DOM events"
  ],
];

function makeModule(data) {
  const [order, title, description, level, explanation, quizPairs, codeEx, assign1, assign2] = data;
  const levelLabels = ['🟢 LEVEL 0 – FOUNDATION','🟢 LEVEL 1 – REACT BASICS','🟡 LEVEL 2 – CORE REACT','🟡 LEVEL 3 – INTERMEDIATE','🔵 LEVEL 4 – ADVANCED REACT','🔵 LEVEL 5 – DATA HANDLING','🔴 LEVEL 6 – STATE MANAGEMENT','🔴 LEVEL 7 – AUTHENTICATION','🟣 LEVEL 8 – TESTING','🟣 LEVEL 9 – DEPLOYMENT','🟣 LEVEL 10 – EXPERT'];
  return {
    order,
    title,
    description,
    detailedExplanation: `## ${title}\n*${levelLabels[level]}*\n\n${explanation}`,
    practiceTasks: [{ task: assign1 }],
    defaultFiles: {
      '/App.js': `import React from 'react';\n\nexport default function App() {\n  return (\n    <div style={{fontFamily:'monospace',padding:20}}>\n      <h2>${title}</h2>\n      <pre style={{background:'#1e1e1e',color:'#d4d4d4',padding:16,borderRadius:8}}>\n{/* Open the playground to run examples for this module */}\n      </pre>\n    </div>\n  );\n}`,
      '/index.js': `import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    codeExample: codeEx,
    quizzes: quizPairs.map(([question, options, correctAnswer]) => ({ question, options, correctAnswer })),
    assignments: [
      { title: `Assignment 1: ${assign1}`, description: assign1 },
      { title: `Assignment 2: ${assign2}`, description: assign2 },
    ]
  };
}

const modules = topics.map(makeModule);

fs.writeFileSync(
  './seeder-generated.js',
  `export const modules = ${JSON.stringify(modules, null, 2)};\n`
);

console.log(`Generated ${modules.length} modules successfully!`);
console.log('Output: seeder-generated.js');

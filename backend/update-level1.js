import fs from 'fs';
import { modules } from './seeder.js';

const level1Data = {
  "Introduction to React": {
    detailedExplanation: `## Introduction to React (🟢 LEVEL 1 – REACT BASICS)

### What is React?
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components". Developed and maintained by Facebook, it has become the standard for modern web development.

### Core Philosophies
1. **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
2. **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
3. **Learn Once, Write Anywhere**: You can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

### The Virtual DOM
Traditional DOM manipulation is slow. React uses a Virtual DOM—a lightweight JavaScript representation of the actual DOM. When state changes, React updates the Virtual DOM, compares it with the previous version (a process called "reconciliation"), and calculates the most efficient way to update the real DOM.

### Why use React?
- **Speed & Efficiency**: The Virtual DOM ensures optimal rendering.
- **Reusability**: Components can be reused across your application, keeping your codebase DRY (Don't Repeat Yourself).
- **Strong Community**: React has a massive ecosystem of libraries, tools, and community support.`,
    codeExample: `// A simple React Component
function Welcome() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to React! ⚛️</h1>
      <p>This is a declarative UI rendered efficiently.</p>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import React from 'react';\n\nexport default function App() {\n  return (\n    <div style={{fontFamily:'monospace',padding:20}}>\n      <h1>Hello React!</h1>\n      <p>Edit this file to see live changes.</p>\n    </div>\n  );\n}`,
      '/index.js': `import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["Who developed React?", ["Google", "Facebook (Meta)", "Microsoft", "Twitter"], 1],
      ["What type of library is React?", ["Routing library", "Database management", "UI Library", "Backend Framework"], 2],
      ["React uses a ____ DOM to optimize updates.", ["Real", "Shadow", "Virtual", "Document"], 2],
      ["What is a core philosophy of React?", ["Imperative programming", "Declarative programming", "Object-oriented only", "No state allowed"], 1],
      ["React applications are built using:", ["Functions only", "Classes only", "Components", "Templates"], 2],
      ["What is the main benefit of the Virtual DOM?", ["It looks better", "It is faster to update than the real DOM", "It replaces HTML", "It runs on the server only"], 1],
      ["React can be used for mobile development via:", ["React Mobile", "React Native", "React Phone", "React App"], 1],
      ["In React, UI is described based on:", ["Current State", "CSS animations", "Database queries", "Server responses"], 0],
      ["Keeping code DRY means:", ["Don't Run Yet", "Don't Repeat Yourself", "Do React Yourself", "Daily React Yaml"], 1],
      ["React updates the real DOM through a process called:", ["Mutation", "Reconciliation", "Rendering", "Execution"], 1],
      ["Which of the following is true?", ["React is a framework like Angular", "React is a library", "React is a language", "React is an OS"], 1],
      ["Can React render on the server?", ["Yes, using Node.js", "No, client side only", "Only with PHP", "Only with Python"], 0],
      ["React components should ideally be:", ["Coupled", "Isolated and encapsulated", "Dependent on each other", "Massive and complex"], 1],
      ["Declarative code focuses on:", ["How to do something", "What the outcome should be", "Managing memory", "Direct DOM targeting"], 1],
      ["Imperative code (unlike React) typically uses:", ["Virtual DOM", "document.getElementById", "State management", "Hooks"], 1],
      ["React relies heavily on which JavaScript feature?", ["ES6 syntax", "Java", "TypeScript only", "jQuery"], 0],
      ["What is the abbreviation for User Interface?", ["UI", "UX", "UR", "UT"], 0],
      ["Is React open source?", ["Yes", "No", "Only for personal use", "Only for enterprise"], 0],
      ["What does React.StrictMode do?", ["Makes the app faster", "Highlights potential problems in the app", "Forces TypeScript", "Compiles the code"], 1],
      ["Which is NOT a reason to use React?", ["Component reusability", "Virtual DOM performance", "Built-in database management", "Strong community"], 2]
    ],
    assignments: [
      { title: "Assignment 1: Compare React vs Vanilla JS", description: "Write a short paragraph explaining the difference between declarative React code and imperative Vanilla JS code." },
      { title: "Assignment 2: First Impressions", description: "Create a simple React component that renders your name and your favorite programming language." }
    ],
    practiceTasks: [
      { task: "Understand the Virtual DOM concept" },
      { task: "Identify the differences between library and framework" }
    ]
  },

  "Project Setup": {
    detailedExplanation: `## Project Setup (🟢 LEVEL 1 – REACT BASICS)

### Introduction to Vite
Historically, Create React App (CRA) was the standard tool for setting up React projects. However, CRA is now deprecated and incredibly slow. The modern standard for setting up React projects is **Vite**.

Vite (French word for "quick", pronounced /vit/) is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:
1. A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
2. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

### Setting up a React App with Vite
To create a new React project, open your terminal and run:

\`\`\`bash
npm create vite@latest my-react-app -- --template react
\`\`\`

Once the project is created, navigate into the directory and install the dependencies:
\`\`\`bash
cd my-react-app
npm install
npm run dev
\`\`\`

### Project Structure
A typical Vite React project looks like this:
- \`index.html\`: The main entry point. Notice the \`<script type="module" src="/src/main.jsx"></script>\` tag.
- \`src/main.jsx\`: Where the React application is mounted to the DOM.
- \`src/App.jsx\`: The root component of your application.
- \`package.json\`: Contains metadata about the project, scripts (dev, build, preview), and dependencies.

### Why Vite over CRA?
Vite serves source code over native ESM. This means the browser takes over part of the bundling job during development, resulting in near-instant server start times and incredibly fast hot module replacement, regardless of app size.`,
    codeExample: `// Inside src/main.jsx of a Vite project
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
    defaultFiles: {
      '/App.js': `export default function App() {\n  return <h2>Vite Setup Successful! ⚡</h2>;\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is the modern standard tool for setting up React projects?", ["Create React App", "Vite", "Webpack", "Babel"], 1],
      ["What does the word 'Vite' mean in French?", ["Light", "Fast/Quick", "React", "Bundle"], 1],
      ["Which command creates a Vite React project?", ["npx create-react-app", "npm create vite@latest", "npm init react", "vite start"], 1],
      ["What bundler does Vite use for production builds?", ["Webpack", "Parcel", "Rollup", "Browserify"], 2],
      ["What is HMR?", ["Hot Module Replacement", "Hyper Markup React", "High Memory Render", "Huge Module Resolver"], 0],
      ["Why is Vite faster than CRA during development?", ["It uses Webpack", "It serves source code over native ESM", "It compiles to WebAssembly", "It skips CSS loading"], 1],
      ["Where is the React app typically mounted in a Vite project?", ["index.html", "public/index.html", "src/main.jsx", "App.jsx"], 2],
      ["What file contains project scripts and dependencies?", ["vite.config.js", "package.json", "index.html", "main.jsx"], 1],
      ["Which script is usually used to start the Vite development server?", ["npm start", "npm run dev", "npm run build", "npm serve"], 1],
      ["What extension is recommended for React files containing JSX in Vite?", [".js", ".jsx", ".ts", ".react"], 1],
      ["Does Vite support TypeScript out of the box?", ["Yes", "No", "Only with Webpack", "Only in production"], 0],
      ["What is the main entry point HTML file in a Vite project?", ["public/index.html", "index.html in the project root", "src/index.html", "App.html"], 1],
      ["How does Vite handle CSS imports?", ["Requires manual Webpack config", "Supports them out of the box", "CSS is not supported", "Only SCSS is supported"], 1],
      ["What tag is used in index.html to load the main React script in Vite?", ["<script src='bundle.js'>", "<script type='module' src='/src/main.jsx'>", "<link rel='react'>", "<import react>"], 1],
      ["What does 'npm install' do?", ["Starts the server", "Builds the app", "Installs dependencies listed in package.json", "Creates a new project"], 2],
      ["Which command builds the app for production?", ["npm run dev", "npm run build", "npm start", "npm deploy"], 1],
      ["Create React App (CRA) is currently considered:", ["The best tool available", "Deprecated and slow", "Only for enterprise", "Only for Vue"], 1],
      ["Vite was created by the founder of which other popular framework?", ["React", "Vue", "Angular", "Svelte"], 1],
      ["What does React.StrictMode do?", ["Throws errors for unsafe lifecycles", "Renders components twice in development", "Warns about legacy string ref API", "All of the above"], 3],
      ["Can Vite be used with frameworks other than React?", ["No", "Yes (Vue, Svelte, etc.)", "Only Angular", "Only Vanilla JS"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Local Setup", description: "Install Node.js on your machine, create a new React app using Vite, and start the development server." },
      { title: "Assignment 2: Explore Structure", description: "Look through the generated Vite project. Identify index.html, main.jsx, and App.jsx. Change the text in App.jsx and observe HMR in action." }
    ],
    practiceTasks: [
      { task: "Initialize a Vite project locally" },
      { task: "Install npm dependencies" }
    ]
  },

  "JSX": {
    detailedExplanation: `## JSX (JavaScript XML) (🟢 LEVEL 1 – REACT BASICS)

### What is JSX?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript files. React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

### Why JSX?
Instead of artificially separating technologies by putting markup and logic in separate files (like traditional HTML and JS files), React separates *concerns* with loosely coupled units called "components" that contain both.

### JSX Rules
1. **Return a single root element**: To return multiple elements from a component, wrap them with a single parent tag. You can use a \`<div>\` or a Fragment \`<></>\`.
2. **Close all the tags**: JSX requires tags to be explicitly closed: \`<img />\` instead of \`<img>\`.
3. **camelCase all most things**: JSX turns into JavaScript, and attributes written in JSX become keys of JavaScript objects. Therefore, you must use camelCase for attributes. For example, \`class\` becomes \`className\`, and \`tabindex\` becomes \`tabIndex\`.

### Embedding JavaScript in JSX
You can embed any JavaScript expression in JSX by wrapping it in curly braces \`{}\`. This includes variables, function calls, and object properties.

\`\`\`jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
\`\`\`

### JSX prevents Injection Attacks
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.`,
    codeExample: `export default function Avatar() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%'
        }}
      />
    </>
  );
}`,
    defaultFiles: {
      '/App.js': `import React from 'react';\n\nexport default function App() {\n  const language = "React";\n  const isAwesome = true;\n  return (\n    <div>\n      <h1>Hello {language}!</h1>\n      <p>Is JSX awesome? {isAwesome ? "Yes!" : "No"}</p>\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What does JSX stand for?", ["Java Syntax Extension", "JavaScript XML", "JSON Syntax XML", "JavaScript XHR"], 1],
      ["Can browsers read JSX directly?", ["Yes", "No, it must be compiled", "Only Chrome can", "Only Firefox can"], 1],
      ["What compiles JSX down to standard JavaScript?", ["Webpack", "Babel", "npm", "Node.js"], 1],
      ["How do you embed a JavaScript expression inside JSX?", ["Using quotes ''", "Using parentheses ()", "Using curly braces {}", "Using square brackets []"], 2],
      ["Which of the following is a rule of JSX?", ["Must return a single parent element", "All tags must be closed", "Attributes use camelCase", "All of the above"], 3],
      ["What is the JSX equivalent of the HTML 'class' attribute?", ["class", "className", "classList", "cssClass"], 1],
      ["What is the JSX equivalent of the HTML 'for' attribute?", ["for", "htmlFor", "labelFor", "reactFor"], 1],
      ["How do you write an inline style in JSX?", ["style='color: red'", "style={color: red}", "style={{color: 'red'}}", "style=['color: red']"], 2],
      ["What is a React Fragment?", ["An error handler", "A way to group a list of children without adding extra nodes to the DOM", "A styling component", "A database query"], 1],
      ["What is the shorthand syntax for a Fragment?", ["<Fragment>", "<//>", "<>", "<Wrap>"], 2],
      ["Are self-closing tags required for elements with no children in JSX?", ["Yes (e.g., <img />)", "No (e.g., <img>)", "Only for custom components", "Only for HTML tags"], 0],
      ["JSX prevents which type of security vulnerability by default?", ["SQL Injection", "XSS (Cross-Site Scripting)", "CSRF", "DDoS"], 1],
      ["What does React do to values embedded in JSX before rendering?", ["Executes them as code", "Escapes them to a string", "Ignores them", "Encrypts them"], 1],
      ["Can you use an if-statement inside JSX curly braces?", ["Yes", "No, you must use expressions like ternaries", "Only if it returns a string", "Only in class components"], 1],
      ["Which of the following is a valid JSX expression?", ["<h1>{ 1 + 1 }</h1>", "<h1>{ if (true) return 2; }</h1>", "<h1>{ var x = 2; }</h1>", "<h1>{ for (let i=0; i<2; i++) }</h1>"], 0],
      ["In JSX, boolean attributes with no value provided default to:", ["false", "undefined", "true", "null"], 2],
      ["Comments inside JSX are written as:", ["// comment", "<!-- comment -->", "{/* comment */}", "/* comment */"], 2],
      ["JSX is strictly required to use React.", ["True", "False, you can use React.createElement()", "True, since v16", "False, you can use plain HTML"], 1],
      ["Which attribute naming convention does JSX use?", ["snake_case", "kebab-case", "camelCase", "PascalCase"], 2],
      ["When setting an event listener in JSX, how is it formatted?", ["onclick", "onClick", "on-click", "clickListener"], 1]
    ],
    assignments: [
      { title: "Assignment 1: JSX Profile", description: "Create a JSX component that displays a user profile card. Use a JavaScript object to store the user data and inject it into the JSX using curly braces." },
      { title: "Assignment 2: Conditional JSX", description: "Create a component that takes an 'isLoggedIn' variable. Use a ternary operator inside JSX to display 'Welcome Back' if true, or 'Please Log In' if false." }
    ],
    practiceTasks: [
      { task: "Embed Javascript expressions inside JSX" },
      { task: "Use camelCase for HTML attributes" }
    ]
  },

  "Rendering Elements": {
    detailedExplanation: `## Rendering Elements (🟢 LEVEL 1 – REACT BASICS)

### What is an Element?
Elements are the smallest building blocks of React apps. An element describes what you want to see on the screen:
\`\`\`jsx
const element = <h1>Hello, world</h1>;
\`\`\`

Unlike browser DOM elements, React elements are plain JavaScript objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

### Rendering an Element into the DOM
Let’s say there is a \`<div>\` somewhere in your HTML file:
\`\`\`html
<div id="root"></div>
\`\`\`
We call this a “root” DOM node because everything inside it will be managed by React DOM.

To render a React element into a root DOM node, pass the DOM element to \`ReactDOM.createRoot()\`, then pass the React element to \`root.render()\`:
\`\`\`jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <h1>Hello, world</h1>;
root.render(element);
\`\`\`

### Updating the Rendered Element
React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to \`root.render()\`. (Note: In practice, most React apps only call \`root.render()\` once, and use state to update components).

### React Only Updates What’s Necessary
React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state. This reconciliation process is what makes React extremely fast.`,
    codeExample: `import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

// In standard React apps, state is used instead of setInterval.
setInterval(tick, 1000);`,
    defaultFiles: {
      '/App.js': `export default function App() {\n  return <h2>Rendered via createRoot()</h2>;\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);`
    },
    quizzes: [
      ["What is the smallest building block of a React application?", ["Component", "Element", "Module", "Prop"], 1],
      ["Are React elements mutable?", ["Yes", "No, they are immutable", "Only in class components", "Only in development"], 1],
      ["What is a React element?", ["A plain JavaScript object", "An actual DOM node", "A CSS class", "A database record"], 0],
      ["Which package is responsible for rendering React elements to the browser DOM?", ["react", "react-native", "react-dom", "react-router"], 2],
      ["In modern React (v18+), how do you create a root to render into?", ["ReactDOM.render()", "ReactDOM.createRoot()", "React.mount()", "document.createRoot()"], 1],
      ["What happens if you pass a new element to root.render()?", ["The entire DOM is destroyed and rebuilt", "React DOM compares the new element with the previous one and applies only necessary updates", "It throws an error", "It creates a new window"], 1],
      ["What is the ID of the div typically used as the React root in index.html?", ["react-app", "app", "root", "main"], 2],
      ["If an element is immutable, how do React UIs update?", ["By creating a new element and re-rendering", "By mutating the element using jQuery", "By refreshing the browser", "UIs cannot update in React"], 0],
      ["React's process of comparing the old and new Virtual DOM is called:", ["Diffing/Reconciliation", "Rendering", "Compiling", "Transpiling"], 0],
      ["In a typical React app, how many times is root.render() called?", ["Once per component", "Once per file", "Usually just once at the entry point", "Every time state changes"], 2],
      ["What is the difference between a React Element and a DOM Element?", ["They are the same", "React elements are cheap JS objects; DOM elements are expensive browser objects", "DOM elements are JS objects; React elements are browser objects", "React elements are HTML"], 1],
      ["What method is called on the root object to display the element?", ["root.display()", "root.show()", "root.render()", "root.mount()"], 2],
      ["Can you have multiple root DOM nodes in a single HTML page?", ["Yes", "No", "Only if they use the same ID", "Only in React Native"], 0],
      ["What happens to elements inside the root DOM node when root.render() is called?", ["They are kept alongside React elements", "They are replaced by the React elements", "They are moved to the head", "Nothing"], 1],
      ["Which statement creates a valid React Element?", ["const el = <h1>Hi</h1>;", "const el = new ReactElement('h1', 'Hi');", "const el = document.createElement('h1');", "const el = React.createElement('h1', null, 'Hi');"], 3],
      ["JSX ultimately compiles down to calls to:", ["document.createElement()", "React.createElement()", "innerHTML", "console.log()"], 1],
      ["Does React.StrictMode affect the production build?", ["Yes, it slows it down", "No, it only runs in development", "Yes, it adds polyfills", "No, it is removed in development"], 1],
      ["What is passed as the first argument to ReactDOM.createRoot()?", ["A React component", "A DOM element", "A string ID", "A callback function"], 1],
      ["If you change the text of an <h1> rendered by React, what does React update?", ["The entire body", "The <h1> element and all its siblings", "Only the specific text node inside the <h1>", "The root div"], 2],
      ["Why is direct DOM manipulation (e.g., innerHTML) discouraged in React?", ["It is illegal", "It breaks React's reconciliation and state synchronization", "It is too fast", "It causes syntax errors"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Tick Tock", description: "Use setInterval to call root.render() every second with a new element containing the current time." },
      { title: "Assignment 2: Multiple Roots", description: "Create two separate div elements in HTML (root1 and root2). Render a different React component into each root." }
    ],
    practiceTasks: [
      { task: "Understand ReactDOM.createRoot" },
      { task: "Understand React element immutability" }
    ]
  },

  "Components": {
    detailedExplanation: `## Components (Functional) (🟢 LEVEL 1 – REACT BASICS)

### What are Components?
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

### Functional Components
The simplest way to define a component is to write a JavaScript function:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

This function is a valid React component because it accepts a single "props" (which stands for properties) object argument with data and returns a React element. We call such components "function components" because they are literally JavaScript functions.

### Rendering a Component
Previously, we only encountered React elements that represent DOM tags (like \`<div />\`). However, elements can also represent user-defined components:

\`\`\`jsx
const element = <Welcome name="Sara" />;
\`\`\`

When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object (props).

### Composing Components
Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

### Component Naming Convention
**Always start component names with a capital letter.**
React treats components starting with lowercase letters as DOM tags. For example, \`<div />\` represents an HTML div tag, but \`<Welcome />\` represents a component and requires \`Welcome\` to be in scope.`,
    codeExample: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `function Profile() {\n  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <h2>Amazing Scientists</h2>\n      <Profile />\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is a React Component?", ["A CSS file", "A JavaScript function that returns React elements", "A database table", "An HTML tag"], 1],
      ["How must a React component name start?", ["With a lowercase letter", "With a capital letter", "With an underscore", "With a number"], 1],
      ["What happens if a component name starts with a lowercase letter?", ["It throws a syntax error", "React treats it as a standard HTML/DOM tag", "It works normally", "It is ignored"], 1],
      ["What input does a functional component receive?", ["An array of arguments", "A single 'props' object", "The DOM node", "The global state"], 1],
      ["Which of the following is a valid functional component?", ["function MyComp() { return <div />; }", "const MyComp = () => <div />;", "Both A and B", "Neither"], 2],
      ["Can a component render other components?", ["Yes", "No", "Only if they are class components", "Only if they are in the same file"], 0],
      ["What is the primary benefit of using components?", ["Reusability and separation of concerns", "Faster execution speed", "Smaller bundle size", "Database integration"], 0],
      ["Which component is typically at the top of the component tree?", ["Index", "Root", "App", "Main"], 2],
      ["How do you use a component named 'Header' in JSX?", ["{Header}", "Header()", "<Header />", "[Header]"], 2],
      ["Is it required to use the 'return' keyword in a functional component?", ["Yes, unless using an arrow function with implicit return", "No, React auto-returns the last line", "Yes, always", "No, it returns undefined by default"], 0],
      ["What should a component return if you want it to render nothing?", ["null", "false", "'' (empty string)", "Any of the above"], 3],
      ["What is the difference between a Component and an Element?", ["An Element is a description of UI; a Component is a function that returns Elements", "They are the exact same thing", "An Element is a function; a Component is an object", "Elements are CSS, Components are JS"], 0],
      ["Can you define a component inside another component?", ["Yes, and it's recommended", "Yes, but it's a bad practice as it destroys and recreates the component on every render", "No, it causes a compilation error", "Only in class components"], 1],
      ["How do you export a component so it can be used in other files?", ["export default ComponentName;", "module.export = ComponentName;", "send ComponentName;", "export ComponentName;"], 0],
      ["How do you import a default exported component named 'Button' from './Button.js'?", ["import { Button } from './Button';", "import Button from './Button';", "require('./Button');", "load Button from './Button';"], 1],
      ["What is 'composition' in React?", ["Combining CSS files", "Building complex UIs from smaller components", "Compiling JSX to JS", "Managing database state"], 1],
      ["Which of the following is NOT a good reason to create a new component?", ["The code is used in multiple places", "The UI piece is complex and needs its own logic", "You want to add a single inline CSS style", "To make the parent component easier to read"], 2],
      ["Class components are considered:", ["The modern standard", "Legacy, functional components with hooks are preferred", "Faster than functional components", "Required for API calls"], 1],
      ["What happens when you render <Welcome name='Sara' />?", ["React calls the Welcome component with {name: 'Sara'} as props", "React creates a standard HTML <Welcome> tag", "React throws an error", "React calls Welcome() with no arguments"], 0],
      ["Can a functional component be an arrow function?", ["Yes", "No", "Only if it doesn't take props", "Only if it doesn't return JSX"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Component Breakdown", description: "Create a webpage layout with a Header, Sidebar, MainContent, and Footer component. Render them all inside the App component." },
      { title: "Assignment 2: Reusable Button", description: "Create a reusable Button component that accepts 'text' as a prop and renders a styled button." }
    ],
    practiceTasks: [
      { task: "Create your first functional component" },
      { task: "Render a component inside another component" }
    ]
  },

  "Styling": {
    detailedExplanation: `## Styling (CSS in React) (🟢 LEVEL 1 – REACT BASICS)

### How to Style React Components
There are several ways to apply styles to React components. The most common approaches are:

### 1. Inline Styles
In React, inline styles are not specified as a string. Instead, they are specified with an object whose key is the camelCased version of the style name, and whose value is the style's value, usually a string.

\`\`\`jsx
const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray', // Note camelCase!
  padding: '10px' // Value as a string
};

function StyledDiv() {
  return <div style={divStyle}>Hello World!</div>;
}
\`\`\`

### 2. Normal CSS (Global or Component-Specific)
You can write regular CSS files and import them directly into your JavaScript files. Note that unless you use CSS Modules, these styles will be global.

\`\`\`css
/* App.css */
.my-button {
  background-color: blue;
  color: white;
}
\`\`\`
\`\`\`jsx
// App.jsx
import './App.css';

function Button() {
  return <button className="my-button">Click Me</button>; // Note className!
}
\`\`\`

### 3. CSS Modules
CSS Modules solve the global scope problem by automatically generating unique class names. Files must be named with \`.module.css\`.
\`\`\`css
/* Button.module.css */
.btn { color: red; }
\`\`\`
\`\`\`jsx
import styles from './Button.module.css';
function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
\`\`\`

### 4. Utility-First Frameworks (like Tailwind CSS)
Many modern React projects use Tailwind CSS, where you apply pre-existing utility classes directly in the JSX \`className\` attribute.`,
    codeExample: `import React from 'react';
import './styles.css'; // Assume this file exists

export default function StylingDemo() {
  // Inline style object
  const inlineStyle = {
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '8px',
    marginTop: '20px'
  };

  return (
    <div>
      <h1 className="global-header">Styled with External CSS</h1>
      <div style={inlineStyle}>
        Styled with Inline JavaScript Object
      </div>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import './styles.css';\n\nexport default function App() {\n  return (\n    <div className="container">\n      <h2 style={{ color: '#3b82f6' }}>Styling in React</h2>\n      <button className="btn">Click Me</button>\n    </div>\n  );\n}`,
      '/styles.css': `.container {\n  padding: 20px;\n  background: #1e1e1e;\n  border-radius: 8px;\n}\n.btn {\n  padding: 10px 20px;\n  background: #10b981;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["How do you apply a CSS class to a JSX element?", ["class='my-class'", "className='my-class'", "css='my-class'", "styleClass='my-class'"], 1],
      ["How are inline styles written in React?", ["As a CSS string", "As an array", "As a JavaScript object", "As HTML attributes"], 2],
      ["What is the correct way to write 'background-color' in a React inline style object?", ["background-color", "backgroundColor", "bgColor", "Background-Color"], 1],
      ["What does importing a standard CSS file in a React component do?", ["Scopes the CSS to that component only", "Injects the CSS globally", "Converts it to inline styles", "Ignores the CSS"], 1],
      ["What is a CSS Module?", ["A CSS file where all class names are scoped locally by default", "A Node.js module for CSS parsing", "A global CSS framework", "A way to write CSS in JS"], 0],
      ["What is the naming convention for a CSS Module file?", ["style.css", "style.module.css", "style.scss", "style.local.css"], 1],
      ["When using CSS Modules, how do you apply the class 'container'?", ["className='container'", "className={styles.container}", "class={styles.container}", "className={container}"], 1],
      ["Can you use numeric values for dimensions in inline styles?", ["Yes, React automatically appends 'px' to many properties", "No, you must always provide a string with a unit", "Yes, it implies 'em'", "No, numbers throw errors"], 0],
      ["Which of the following is a valid inline style assignment?", ["<div style='color: red'>", "<div style={{color: 'red'}}>", "<div style={color: 'red'}>", "<div style=color: red>"], 1],
      ["What happens if you use 'class' instead of 'className' in JSX?", ["The app crashes immediately", "It works, but React throws a warning in the console", "Nothing, it's perfectly fine", "The CSS is ignored completely"], 1],
      ["Tailwind CSS relies primarily on:", ["CSS Modules", "Inline styles", "Utility classes applied via className", "Styled components"], 2],
      ["What is 'Styled Components'?", ["A CSS framework like Bootstrap", "A library for writing CSS-in-JS using tagged template literals", "A built-in React feature", "A way to inline styles"], 1],
      ["In an inline style object, how do you write the value for padding?", ["10", "'10px'", "Either A or B", "Neither"], 2],
      ["Why does JSX use className instead of class?", ["Because class is a reserved keyword in JavaScript", "Because it looks better", "To differentiate from HTML", "Because of CSS conflicts"], 0],
      ["How do you combine multiple dynamic class names in React?", ["className={class1 + ' ' + class2}", "className={\`${class1} ${class2}\`}", "Using a library like 'clsx' or 'classnames'", "All of the above"], 3],
      ["Are pseudo-classes (like :hover) supported in React inline styles?", ["Yes", "No", "Only on links", "Only in class components"], 1],
      ["If you need hover states, which approach should you use?", ["Inline styles", "External CSS classes", "CSS Modules", "B or C"], 3],
      ["Which styling approach ensures zero risk of class name collisions globally?", ["Standard CSS", "CSS Modules", "Inline Styles", "Both B and C"], 3],
      ["How do you conditionally apply a style class?", ["className={isActive ? 'active' : ''}", "className={isActive && 'active'}", "Both are valid (though the second might output 'false' as a string if not careful)", "You cannot conditionally apply classes"], 0],
      ["What is the downside of using inline styles for everything?", ["No pseudo-classes/media queries", "Hard to maintain", "Performance overhead for large apps", "All of the above"], 3]
    ],
    assignments: [
      { title: "Assignment 1: Styling Methods", description: "Create three buttons. Style the first with inline styles, the second with a standard CSS class, and the third with a CSS Module." },
      { title: "Assignment 2: Conditional Styling", description: "Create a 'Toggle' button. When clicked, toggle the background color between green and red using conditional inline styles." }
    ],
    practiceTasks: [
      { task: "Apply inline styles using JavaScript objects" },
      { task: "Apply CSS classes using className" }
    ]
  },

  "Props": {
    detailedExplanation: `## Props (Passing Data) (🟢 LEVEL 1 – REACT BASICS)

### What are Props?
"Props" is a special keyword in React, which stands for properties and is being used for passing data from one component to another. 

Props are the **inputs** to a component. They are single values or objects containing a set of values that are passed to Components on creation using a naming convention similar to HTML-tag attributes.

### Data Flow is Unidirectional
In React, data flows in one direction: from parent to child. This is known as "top-down" or "unidirectional" data flow. A child component can never pass data directly back up to a parent via props (though it can call a function provided by the parent via props).

### Props are Read-Only
Whether you declare a component as a function or a class, **it must never modify its own props**.

Consider this sum function:
\`\`\`js
function sum(a, b) {
  return a + b;
}
\`\`\`
Such functions are called "pure" because they do not attempt to change their inputs, and always return the same result for the same inputs. **All React components must act like pure functions with respect to their props.**

### How to Pass and Receive Props
**Parent Component:** passes props as attributes.
\`\`\`jsx
function App() {
  return <Greeting name="Alice" age={25} isStudent={true} />;
}
\`\`\`

**Child Component:** receives props as an object.
\`\`\`jsx
function Greeting(props) {
  return <p>Hello {props.name}, you are {props.age} years old.</p>;
}
\`\`\`

### Destructuring Props
It is very common to destructure the props object directly in the function signature for cleaner code:
\`\`\`jsx
function Greeting({ name, age }) {
  return <p>Hello {name}, you are {age} years old.</p>;
}
\`\`\`

### The \`children\` Prop
Every component has access to a special prop called \`children\`, which contains whatever is placed between the opening and closing tags of the component.`,
    codeExample: `// Parent Component
export default function App() {
  return (
    <div>
      <UserCard name="John Doe" role="Admin" />
      <UserCard name="Jane Smith" role="Editor" />
    </div>
  );
}

// Child Component (Destructuring props)
function UserCard({ name, role }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `function Badge({ text, color }) {\n  return <span style={{ background: color, padding: '4px 8px', borderRadius: '4px' }}>{text}</span>;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <h2>Props Example</h2>\n      <Badge text="New!" color="lightgreen" />\n      <Badge text="Updated" color="lightblue" />\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What does 'props' stand for in React?", ["Proportions", "Properties", "Prototypes", "Proposals"], 1],
      ["How does data flow in React?", ["Bottom-up", "Bidirectional", "Top-down (Unidirectional)", "Randomly"], 2],
      ["Can a component modify its own props?", ["Yes", "No, props are read-only", "Only in class components", "Only if passed as an object"], 1],
      ["How do you pass a number '42' as a prop named 'age'?", ["age='42'", "age=42", "age={42}", "age-[42]"], 2],
      ["In the component signature `function Avatar(props)`, what is `props`?", ["An array of attributes", "A string", "A JavaScript object containing the attributes", "A React Element"], 2],
      ["What is a common ES6 technique used to extract variables from the props object?", ["Spread operator", "Destructuring assignment", "Arrow functions", "Template literals"], 1],
      ["Which is the correct way to destructure props directly in the parameters?", ["function Card([title, body])", "function Card({title, body})", "function Card(props.title, props.body)", "function Card(title, body)"], 1],
      ["What is the special prop that allows you to pass elements directly inside a component's tags?", ["props.inner", "props.content", "props.children", "props.elements"], 2],
      ["Given `<Button>Click Me</Button>`, how does the Button component access 'Click Me'?", ["props.text", "props.value", "props.children", "props.content"], 2],
      ["Can you pass a function as a prop?", ["Yes", "No", "Only if it is an arrow function", "Only if it is named 'onClick'"], 0],
      ["What happens if you pass a prop but the child component doesn't use it?", ["React throws an error", "The app crashes", "Nothing, the prop is simply ignored", "It is rendered as an HTML attribute"], 2],
      ["If you omit the value of a boolean prop (e.g., `<Video autoPlay />`), what does it default to?", ["true", "false", "undefined", "null"], 0],
      ["What is defaultProps used for?", ["Defining the CSS for a component", "Setting default values for props if none are provided", "Deleting props", "Validating prop types"], 1],
      ["How are props accessed in a Class component?", ["this.props", "props", "super.props", "this.state"], 0],
      ["React components must act like ____ functions with respect to their props.", ["Impure", "Async", "Pure", "Recursive"], 2],
      ["Can a child component pass data back to a parent using ONLY standard variables?", ["Yes", "No, data only flows down. (Callbacks are required for upward communication)", "Yes, via Context", "Yes, by mutating props"], 1],
      ["What library is historically used to enforce type checking on props?", ["TypeScript", "PropTypes", "Flow", "All of the above"], 3],
      ["Is `<Profile user={userObject} />` a valid way to pass an object?", ["Yes", "No", "Only if userObject is a string", "Only if spread syntax is used"], 0],
      ["How can you pass all properties of an object `person` as individual props?", ["<Profile {person} />", "<Profile ...person />", "<Profile {...person} />", "<Profile props=person />"], 2],
      ["What happens if a parent component re-renders?", ["All child components are destroyed", "All child components receive new props and re-render", "Child components freeze", "State is reset"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Product Card", description: "Create a Product component that accepts title, price, and description as props. Render three different products in your App." },
      { title: "Assignment 2: Children Prop Wrapper", description: "Create a 'CardWrapper' component that applies a border and padding to whatever is passed inside its opening and closing tags using the props.children property." }
    ],
    practiceTasks: [
      { task: "Pass strings, numbers, and booleans as props" },
      { task: "Destructure props in the function signature" }
    ]
  }
};

async function updateLevel1() {
  let updatedCount = 0;
  
  // Update the imported modules in memory
  modules.forEach(mod => {
    if (level1Data[mod.title]) {
      const data = level1Data[mod.title];
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

  // Write back to seeder.js
  const fileContent = "// Auto-generated seeder file containing 53 modules.\\n" +
                      "// Generated via seed-builder.js and updated via scripts.\\n\\n" +
                      "export const modules = " + JSON.stringify(modules, null, 2) + ";\\n";
                      
  fs.writeFileSync('./seeder.js', fileContent);
  console.log("✅ Successfully injected high-quality content into " + updatedCount + " Level 1 modules!");
}

updateLevel1();

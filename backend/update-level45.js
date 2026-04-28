import fs from 'fs';
import { modules } from './seeder.js';

// The fixed explanation for Module 17 (Forms) - avoiding raw HTML tags!
const module17Explanation = `## Forms – Controlled Components (🟡 LEVEL 2 – CORE REACT)

### What is a Controlled Component?
In traditional HTML, forms (like text inputs or textareas) handle their own state. When you type, the HTML element updates itself internally. 

In React, **we don't want the HTML to control itself**. Instead, we want **React state** to have full control over the inputs. 

A "Controlled Component" is a form element where React controls its value using \`useState\`.

### 👉 The Concept: State as the Single Source of Truth
1. The form data is stored in React state.
2. The input displays whatever is in the state (using the 'value' attribute).
3. When the user types, an 'onChange' event fires, updating the state.
4. The state updates, causing the input to instantly re-render with the new text.

### Why is this important?
Because React controls the input, you gain **full control** over it. You can:
- Instantly validate the input as the user types (e.g., "Password must be 8 characters").
- Format the data instantly (e.g., forcing uppercase).
- Easily submit the exact data to an API without needing to scrape the DOM.

### Example Flow:
\`\`\`jsx
const [text, setText] = useState("");

// The input is completely locked to the 'text' state
return (
  <input 
    value={text} 
    onChange={(e) => setText(e.target.value)} 
  />
);
\`\`\`
If you remove the onChange handler but keep the value tied to state, the input becomes read-only and you won't be able to type in it at all!`;

const level45Data = {
  "Performance Optimization": {
    detailedExplanation: `## Performance Optimization (🔵 LEVEL 4 – ADVANCED REACT)

### Preventing Unnecessary Re-renders
React is inherently fast thanks to the Virtual DOM. However, as your application grows, React might start re-rendering components unnecessarily. 

Every time a parent component re-renders, **all of its children re-render by default**. If a child component performs heavy calculations or renders a massive list, this can cause significant lag.

To solve this, React provides three primary optimization tools: \`React.memo\`, \`useMemo\`, and \`useCallback\`.

### 1. React.memo (Component Level)
\`React.memo\` is a Higher-Order Component. If your component renders the exact same result given the same props, you can wrap it in \`React.memo\` for a performance boost. React will memorize the rendered output and skip re-rendering if the props haven't changed.

\`\`\`jsx
const HeavyComponent = React.memo(function HeavyComponent({ data }) {
  /* renders using data */
});
\`\`\`

### 2. useMemo (Value Level)
The \`useMemo\` hook lets you cache the result of a heavy calculation between re-renders. It only recalculates the value if one of its dependencies changes.

\`\`\`jsx
const expensiveResult = useMemo(() => {
  return performHeavyCalculation(data);
}, [data]); // Only recalculate if 'data' changes
\`\`\`

### 3. useCallback (Function Level)
Functions declared inside a component are recreated on every single render. If you pass a function as a prop to a \`React.memo\` child, the child will ALWAYS re-render because the function reference is new every time! 

\`useCallback\` caches a function definition between re-renders so its reference stays the same.

\`\`\`jsx
const handleAction = useCallback(() => {
  doSomething(id);
}, [id]); // Only recreate function if 'id' changes
\`\`\`

### 👉 The Golden Rule of Optimization
**Do not optimize prematurely.** 
\`useMemo\` and \`useCallback\` themselves carry a performance cost (React has to do work to cache and check dependencies). Only use them when you are actually passing props to highly optimized child components, or when a calculation is genuinely slow.`,
    codeExample: `import React, { useState, useMemo, useCallback } from 'react';

// A child component wrapped in React.memo
const ChildComponent = React.memo(({ onAction }) => {
  console.log("ChildComponent Re-rendered!");
  return (
    <div style={{ background: '#333', padding: '10px', marginTop: '10px' }}>
      <p>I am a heavy child component.</p>
      <button onClick={onAction}>Trigger Action</button>
    </div>
  );
});

export default function OptimizationDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 1. useMemo: Caching a heavy calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating heavy math...");
    let num = 0;
    for (let i = 0; i < 10000000; i++) { num += 1; }
    return num;
  }, []); // Empty array: runs only once!

  // 2. useCallback: Caching the function reference
  // If we didn't use useCallback, the ChildComponent would re-render every time we type in the input!
  const handleChildAction = useCallback(() => {
    console.log("Action triggered from child!");
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Optimization Demo (Check Console)</h2>
      
      <div>
        <label>Type here (causes Parent to render): </label>
        <input value={text} onChange={e => setText(e.target.value)} />
      </div>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <p>Heavy Math Result: {expensiveCalculation}</p>

      {/* Child only re-renders if its props change. Since we used useCallback, the prop stays exactly the same! */}
      <ChildComponent onAction={handleChildAction} />
    </div>
  );
}`,
    quizzes: [
      ["What happens by default when a parent component re-renders?", ["Nothing", "All of its child components re-render as well", "Only the parent re-renders", "The app crashes"], 1],
      ["What is the purpose of React.memo?", ["To memoize a function", "To skip re-rendering a component if its props have not changed", "To fetch data faster", "To cache state globally"], 1],
      ["Which Hook is used to cache the RESULT of an expensive calculation?", ["useCallback", "useEffect", "useMemo", "useRef"], 2],
      ["Which Hook is used to cache a FUNCTION DEFINITION between re-renders?", ["useCallback", "useMemo", "useState", "useFunction"], 0],
      ["Why might a React.memo child STILL re-render even if its props *look* the same?", ["Because React is buggy", "Because an inline function or object literal was passed as a prop, creating a new memory reference on every render", "Because the child has no state", "Because it is forced to"], 1],
      ["How does `useCallback` fix the issue of a React.memo child unnecessarily re-rendering?", ["It forces the child to ignore props", "It ensures the function passed as a prop retains the exact same memory reference across renders (unless its dependencies change)", "It converts the function to a string", "It deletes the function"], 1],
      ["What is premature optimization?", ["Optimizing code before running it", "Spending time applying useMemo/useCallback everywhere without verifying if a performance problem actually exists", "Optimizing the server", "Optimizing CSS"], 1],
      ["Does `useMemo` execute its callback function during rendering or after rendering?", ["During rendering", "After rendering (like useEffect)", "Before rendering", "Never"], 0],
      ["Can `useMemo` be used to cause side effects (like API calls)?", ["Yes", "No, it runs during rendering and should be a pure calculation. Use useEffect for side effects.", "Only if it is async", "Only in class components"], 1],
      ["If you pass an empty array `[]` as the second argument to `useMemo`, when does the calculation run?", ["On every render", "Never", "Only once, during the initial render", "When the component unmounts"], 2]
    ],
    assignments: [
      { title: "Assignment 1: React.memo", description: "Create a Parent component with a counter and an input field. Create a Child component that receives the input text. Wrap the Child in React.memo and prove via console.logs that it does NOT re-render when the counter changes." }
    ],
    practiceTasks: [
      { task: "Understand when child components re-render" },
      { task: "Apply React.memo, useMemo, and useCallback appropriately" }
    ]
  },

  "Code Splitting": {
    detailedExplanation: `## Code Splitting (🔵 LEVEL 4 – ADVANCED REACT)

### What is Code Splitting?
When you build a React application (using tools like Vite, Webpack, or Create React App), all of your JavaScript files are usually "bundled" into a single, massive file. 

If your app is large, this bundle can become huge (megabytes in size). The user has to download this entire file before they can see or interact with *anything* on your website. This results in terrible loading times.

**Code Splitting** is the practice of splitting your bundle into smaller chunks, which you can then load on demand (lazy loading).

### React.lazy() and Suspense
React provides a built-in way to lazy-load components using \`React.lazy()\` and \`<Suspense>\`.

\`\`\`jsx
import React, { Suspense } from 'react';

// Instead of a normal import:
// import HeavyChart from './HeavyChart';

// Use React.lazy for dynamic imports:
const HeavyChart = React.lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Suspense provides a fallback UI while the chunk is downloading */}
      <Suspense fallback={<div>Loading chart...</div>}>
        <HeavyChart />
      </Suspense>
    </div>
  );
}
\`\`\`

### 👉 Route-Based Code Splitting
The most common and effective place to introduce code splitting is at the route level. Users usually only visit one page at a time. It makes no sense to force them to download the code for the Settings page when they are just viewing the Home page.

By wrapping your route components in \`React.lazy\`, your bundler will automatically create separate files for each route, drastically improving your initial load time!`,
    codeExample: `import React, { Suspense, useState } from 'react';

// Simulating a lazily loaded component
// In a real app, this would be: const LazyComponent = React.lazy(() => import('./LazyComponent'));
const LazyComponent = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve({
      default: () => <div style={{ padding: '20px', background: '#005f73', color: 'white' }}>Hello! I was lazy loaded over the network!</div>
    }), 2000); // Simulated 2-second network delay
  });
});

export default function CodeSplittingDemo() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Code Splitting & Lazy Loading</h2>
      <p>Clicking the button will "download" the component code before rendering it.</p>
      
      <button onClick={() => setShowLazy(true)}>Load Heavy Component</button>

      <div style={{ marginTop: '20px' }}>
        {showLazy && (
          <Suspense fallback={<h3 style={{ color: 'coral' }}>Downloading chunk... Please wait...</h3>}>
            <LazyComponent />
          </Suspense>
        )}
      </div>
    </div>
  );
}`,
    quizzes: [
      ["What is a JavaScript 'bundle'?", ["A package of goods", "A single file containing all of your app's code and dependencies merged together", "A React component", "A CSS file"], 1],
      ["What is the main problem with a massive, single bundle?", ["It looks ugly", "It takes a long time to download, delaying the initial load of the application", "It runs too fast", "It causes memory leaks"], 1],
      ["What is Code Splitting?", ["Breaking the CSS into multiple files", "Splitting the JavaScript bundle into smaller chunks that can be loaded on demand", "Deleting unused code", "Splitting the screen in half"], 1],
      ["Which React function is used to dynamically import a component?", ["React.split()", "React.dynamic()", "React.lazy()", "React.import()"], 2],
      ["What component MUST wrap a lazily loaded component to provide a fallback UI?", ["<Placeholder>", "<Fallback>", "<Suspense>", "<Loading>"], 2],
      ["What prop does `<Suspense>` accept to show a loading indicator?", ["loading", "fallback", "spinner", "wait"], 1],
      ["What is the most common place to implement code splitting in a React app?", ["At the route level (Route-based code splitting)", "Inside every single button", "Inside the CSS", "In the database"], 0],
      ["Does `React.lazy()` work with named exports (e.g., `export const MyComp`)?", ["Yes", "No, it currently only supports default exports", "Only in Vite", "Only in Webpack"], 1],
      ["What syntax does `React.lazy()` use internally?", ["Dynamic `import()` syntax", "Standard `require()`", "Ajax requests", "Fetch API"], 0],
      ["If a user is on a slow network, what will they see while a lazy component is downloading?", ["A blank white screen", "The UI provided to the `fallback` prop of the `<Suspense>` wrapper", "An error page", "A browser alert"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Lazy Loading a Route", description: "Set up React Router. Create an 'About' page component. Import the About component using React.lazy() and wrap your Routes in a Suspense component." }
    ],
    practiceTasks: [
      { task: "Understand the benefits of reducing initial bundle size" },
      { task: "Implement React.lazy and Suspense" }
    ]
  },

  "Error Boundaries": {
    detailedExplanation: `## Error Boundaries (🔵 LEVEL 4 – ADVANCED REACT)

### The Problem: UI Crashes
In the past, JavaScript errors inside React components used to corrupt React’s internal state and cause it to emit cryptic errors. Even worse, if an error occurred anywhere in the component tree during rendering, **the entire application would unmount and show a blank white screen**.

A localized error in a minor widget (like a user avatar failing to render) shouldn't crash your entire dashboard!

### 👉 Concept: Catching Errors
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree.

Error boundaries act like a \`catch {}\` block, but for components.

### Creating an Error Boundary
Currently, Error Boundaries **must be Class Components**. There is no Hook equivalent yet. A class component becomes an error boundary if it defines either (or both) of the lifecycle methods \`static getDerivedStateFromError()\` or \`componentDidCatch()\`.

\`\`\`jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}
\`\`\`

### Usage
Wrap components that might fail inside the boundary:
\`\`\`jsx
<ErrorBoundary>
  <WidgetThatMightCrash />
</ErrorBoundary>
\`\`\``,
    codeExample: `import React, { useState } from 'react';

// The Error Boundary (Must be a class component)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', background: '#ffcccc', color: '#990000', border: '1px solid red' }}>
          <h2>Oops! The widget crashed.</h2>
          <p>But the rest of the application is still working fine!</p>
          <button onClick={() => this.setState({ hasError: false })}>Try Again</button>
        </div>
      );
    }
    return this.props.children; 
  }
}

// A buggy component that intentionally crashes
function BuggyWidget() {
  const [crash, setCrash] = useState(false);
  
  if (crash) {
    // Simulating a runtime error!
    throw new Error("I crashed!");
  }

  return (
    <div style={{ background: '#eee', padding: '10px', color: 'black' }}>
      <h4>I am a normal widget.</h4>
      <button onClick={() => setCrash(true)}>Crash Me!</button>
    </div>
  );
}

export default function ErrorBoundaryDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Error Boundary Demo</h2>
      <p>If you don't use an Error Boundary, clicking the button below would turn the entire screen blank.</p>
      
      <ErrorBoundary>
        <BuggyWidget />
      </ErrorBoundary>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid green' }}>
        <h4>Sidebar (Safe Zone)</h4>
        <p>I am outside the boundary. I will not crash!</p>
      </div>
    </div>
  );
}`,
    quizzes: [
      ["What happens if a component throws an error during rendering and there is no Error Boundary?", ["The component simply disappears", "The entire React component tree unmounts, resulting in a blank white screen", "React automatically reloads the page", "An alert box appears"], 1],
      ["What is an Error Boundary?", ["A CSS feature to contain elements", "A React component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI", "A firewall for React", "A Redux middleware"], 1],
      ["Which type of component MUST an Error Boundary be?", ["A Functional Component", "A Class Component", "A Higher Order Component", "A Pure Component"], 1],
      ["Which lifecycle method is used to update state so the next render shows a fallback UI?", ["componentDidMount", "static getDerivedStateFromError", "componentWillUnmount", "render"], 1],
      ["Which lifecycle method is typically used to log the error information to an external service (like Sentry)?", ["componentDidUpdate", "static getDerivedStateFromError", "componentDidCatch", "constructor"], 2],
      ["Where do Error Boundaries catch errors?", ["In event handlers (like onClick)", "In asynchronous code (like setTimeout or fetch)", "In server-side rendering", "During rendering, in lifecycle methods, and in constructors of the whole tree below them"], 3],
      ["If an error occurs inside an `onClick` event handler, will the Error Boundary catch it?", ["Yes", "No, React doesn't need error boundaries for event handlers. You should use standard try/catch blocks.", "Only if it is a class component", "Only in production"], 1],
      ["Does an Error Boundary catch errors within itself?", ["Yes", "No, it only catches errors in the components below it in the tree", "Only syntax errors", "Only network errors"], 1],
      ["If you have multiple widgets on a dashboard, how should you use Error Boundaries?", ["Wrap the entire app in one boundary", "Wrap each individual widget in its own Error Boundary so if one crashes, the others remain fully functional", "Don't use them", "Put them inside the widgets"], 1],
      ["What is a popular third-party library that provides a pre-built Error Boundary component (so you don't have to write a class component yourself)?", ["react-error-boundary", "react-router", "redux-thunk", "axios"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Create a Boundary", description: "Write an ErrorBoundary class component. Use it to wrap a child component that intentionally throws an error when a button is clicked." }
    ],
    practiceTasks: [
      { task: "Understand the consequences of unhandled render errors" },
      { task: "Implement a Class component with getDerivedStateFromError" }
    ]
  },

  "Higher Order Components": {
    detailedExplanation: `## Higher Order Components (🔵 LEVEL 4 – ADVANCED REACT)

### What is a Higher-Order Component (HOC)?
A Higher-Order Component is an advanced technique in React for reusing component logic. 
While a normal component transforms props into UI, a higher-order component transforms a component into another component.

Specifically, **a higher-order component is a function that takes a component and returns a new component.**

\`\`\`jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
\`\`\`

### 👉 The Concept: Wrapping Components
Imagine you have multiple components that all need to check if a user is logged in before rendering. If they aren't logged in, they should redirect to a login page.

Instead of writing this logic inside every single component, you can create a \`withAuth\` HOC.

\`\`\`jsx
// The HOC
function withAuth(WrappedComponent) {
  // It returns a new component
  return function EnhancedComponent(props) {
    const isAuthenticated = checkLoginStatus();
    
    if (!isAuthenticated) {
      return <p>Please log in to view this page.</p>;
    }
    
    // Renders the original component, passing through all props!
    return <WrappedComponent {...props} />;
  };
}

// Usage:
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedProfile = withAuth(Profile);
\`\`\`

### Note on Modern React
HOCs were extremely popular before React Hooks were introduced. Today, many use cases for HOCs are better solved using **Custom Hooks**. However, you will still see HOCs in older codebases, and they are still highly useful for injecting props or wrapping components in specific Providers (like \`connect\` in Redux or \`withRouter\` in older React Router).`,
    codeExample: `import React from 'react';

// --- The Higher Order Component (HOC) ---
// Note the naming convention: it starts with "with"
function withStyling(WrappedComponent) {
  return function(props) {
    return (
      <div style={{ border: '2px solid #00ffcc', padding: '20px', borderRadius: '8px', background: '#222' }}>
        <h4 style={{ color: '#00ffcc', marginTop: 0 }}>[Enhanced by HOC]</h4>
        {/* Pass all props down to the original component */}
        <WrappedComponent {...props} />
      </div>
    );
  }
}

// --- Regular Components ---
const BasicButton = ({ label }) => <button>{label}</button>;
const BasicText = ({ content }) => <p>{content}</p>;

// --- Enhanced Components ---
// We create new components by passing our basic ones into the HOC!
const FancyButton = withStyling(BasicButton);
const FancyText = withStyling(BasicText);

export default function HocDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Higher-Order Components Demo</h2>
      
      <h3>Normal Components:</h3>
      <BasicButton label="Click Me" />
      <BasicText content="I am normal text." />
      
      <h3 style={{ marginTop: '30px' }}>HOC Enhanced Components:</h3>
      <FancyButton label="Click Me" />
      <br />
      <FancyText content="I am fancy text." />
    </div>
  );
}`,
    quizzes: [
      ["What is a Higher-Order Component (HOC)?", ["A component that sits at the top of the app", "A function that takes a component and returns a new component", "A component with advanced CSS", "A Redux term for store"], 1],
      ["What does a normal component transform?", ["Props into UI", "Components into components", "State into Context", "HTML into JavaScript"], 0],
      ["What is the standard naming convention for an HOC?", ["Starts with 'use' (e.g., useAuth)", "Starts with 'with' (e.g., withAuth)", "Ends with 'HOC' (e.g., AuthHOC)", "Starts with 'get' (e.g., getAuth)"], 1],
      ["Why do we use HOCs?", ["To write less CSS", "To reuse component logic across multiple components", "To fetch data faster", "To replace Redux"], 1],
      ["If an HOC returns a new component, what MUST it do with the props?", ["Delete them", "Pass them through to the wrapped component using the spread operator `{...props}`", "Change their names", "Store them in Context"], 1],
      ["What modern React feature has largely replaced many use cases for HOCs?", ["Custom Hooks", "React Router", "Context API", "Error Boundaries"], 0],
      ["Can an HOC add new props to the wrapped component?", ["Yes, it can inject additional props (like data or functions) before rendering the wrapped component", "No, it must only pass through existing props", "Only if the wrapped component is a class", "Only if it is written in TypeScript"], 0],
      ["What is a very famous example of an HOC from the Redux library?", ["useSelector", "Provider", "connect()", "dispatch()"], 2],
      ["Should you mutate the original component inside an HOC (e.g., `WrappedComponent.prototype.newMethod = ...`)?", ["Yes, it is the best way", "No, you should use composition by returning a completely new component that wraps the original", "Only in class components", "Only if you need to access state"], 1],
      ["Where should you apply an HOC?", ["Inside the render method of another component", "Outside the component definition, usually at the module export level", "Inside a useEffect hook", "Inside an onClick handler"], 1]
    ],
    assignments: [
      { title: "Assignment 1: withLogger", description: "Create an HOC called withLogger that logs 'Component Mounted' to the console inside a useEffect whenever the wrapped component mounts." }
    ],
    practiceTasks: [
      { task: "Understand that an HOC is a function returning a component" },
      { task: "Pass props down through an HOC" }
    ]
  },

  "Fetch API": {
    detailedExplanation: `## Fetch API (🔵 LEVEL 5 – DATA HANDLING)

### Interacting with Servers
Most React applications are useless without data. To get data into your React app, you need to communicate with a server (an API) over the network. 

The most standard, built-in way to do this in modern JavaScript is the **Fetch API**.

### 👉 Concept: Asynchronous Data
Network requests take time. When you ask a server for data, your JavaScript code does not stop and wait. Instead, \`fetch()\` returns a **Promise**. You must handle this promise using \`.then()\` or \`async / await\`.

### Basic Fetch Example
The best place to fetch initial data for a component is inside a \`useEffect\` hook with an empty dependency array (so it only runs once when the component mounts).

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 1. Make the request
    fetch('https://jsonplaceholder.typicode.com/users')
      // 2. Parse the JSON response
      .then(response => response.json())
      // 3. Update the state with the data
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
\`\`\`

### Async / Await Syntax
Many developers prefer the \`async / await\` syntax over \`.then()\`. However, because the \`useEffect\` callback function cannot be async itself, you must define an async function *inside* the effect and call it immediately.

\`\`\`jsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

  fetchData();
}, []);
\`\`\`

### POST Requests
To send data to a server (like submitting a form), you provide a configuration object to \`fetch\`.

\`\`\`javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "John" })
});
\`\`\``,
    codeExample: `import React, { useState, useEffect } from 'react';

export default function FetchDemo() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomTodo = async () => {
    setLoading(true);
    try {
      // Get a random ID between 1 and 100
      const randomId = Math.floor(Math.random() * 100) + 1;
      
      const response = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${randomId}\`);
      const data = await response.json();
      
      setTodo(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch immediately on mount
  useEffect(() => {
    fetchRandomTodo();
  }, []);

  return (
    <div style={{ padding: '20px', background: '#1e1e1e', borderRadius: '8px', border: '1px solid #444' }}>
      <h2>Fetch API Demo</h2>
      <button onClick={fetchRandomTodo} disabled={loading} style={{ marginBottom: '20px' }}>
        {loading ? 'Fetching...' : 'Fetch Random Todo'}
      </button>

      {todo && (
        <div style={{ padding: '15px', background: '#333', borderRadius: '5px' }}>
          <h4>{todo.title}</h4>
          <p>Status: {todo.completed ? '✅ Completed' : '❌ Pending'}</p>
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["What is the Fetch API used for?", ["Styling components", "Routing between pages", "Making network requests to get or send data to a server", "Managing local state"], 2],
      ["What does the `fetch()` function return?", ["A string", "A Promise", "A React Component", "An array"], 1],
      ["Where is the best place to call `fetch` when you want data to load as soon as a component appears?", ["Inside the render body directly", "Inside a useEffect hook with an empty dependency array []", "Inside a useMemo hook", "Inside a CSS file"], 1],
      ["Why do we need to call `response.json()` after a successful fetch?", ["Because fetch returns a string by default", "To convert the raw HTTP Response body stream into a JavaScript object", "To encrypt the data", "To send the data back to the server"], 1],
      ["Does `response.json()` return a Promise?", ["Yes, it is asynchronous and must be awaited or chained with .then()", "No, it returns the object instantly", "Only if the data is large", "Only in Node.js"], 0],
      ["Why can't you write `useEffect(async () => { ... })`?", ["Because useEffect does not support promises", "Because the return value of an async function is a Promise, but useEffect expects the return value to be a cleanup function (or nothing)", "Because React bans async functions", "It actually works perfectly"], 1],
      ["How do you correctly use `async/await` inside `useEffect`?", ["You can't", "Define the async function outside the component", "Define the async function inside the effect and call it immediately", "Use a Custom Hook only"], 2],
      ["What is the default HTTP method used by `fetch()` if none is specified?", ["POST", "PUT", "DELETE", "GET"], 3],
      ["How do you make a POST request with `fetch`?", ["fetch('url', 'POST', data)", "fetch('url').post(data)", "fetch('url', { method: 'POST', body: JSON.stringify(data) })", "post('url', data)"], 2],
      ["What header is usually required when sending JSON data in a POST request?", ["Accept: text/html", "Content-Type: application/json", "Authorization: Bearer", "Cache-Control: no-cache"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Fetch and Display", description: "Use the Fetch API to get a list of users from 'https://jsonplaceholder.typicode.com/users' and display their names in a list." }
    ],
    practiceTasks: [
      { task: "Make a GET request using fetch" },
      { task: "Parse the response using .json()" }
    ]
  },

  "Axios": {
    detailedExplanation: `## Axios (🔵 LEVEL 5 – DATA HANDLING)

### What is Axios?
While the built-in \`fetch()\` API is great, many developers prefer a third-party library called **Axios**. 
Axios is a promise-based HTTP client for the browser and Node.js.

### 👉 Why use Axios over Fetch?
Axios provides several quality-of-life improvements over standard fetch:

1. **Automatic JSON Parsing:** You don't need to call \`.json()\`! Axios automatically transforms the response data into JSON. The data is available on the \`response.data\` property.
2. **Error Handling:** \`fetch()\` does NOT reject a promise on HTTP error statuses (like 404 or 500). It only rejects on network failures. You have to manually check \`if (!response.ok)\`. **Axios automatically throws an error for any status outside the 2xx range**, making it much easier to catch errors!
3. **Interceptors:** Axios allows you to intercept requests or responses before they are handled (e.g., to automatically attach an Authorization token to every request).
4. **Timeouts:** Axios lets you easily set request timeouts.

### Example Comparison

**Using Fetch:**
\`\`\`javascript
fetch('https://api.example.com/users')
  .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`

**Using Axios:**
\`\`\`javascript
import axios from 'axios';

axios.get('https://api.example.com/users')
  .then(res => console.log(res.data)) // Automatically parsed!
  .catch(err => console.error(err));  // Catches 404s and 500s automatically!
\`\`\`

### Global Defaults
A huge benefit of Axios is setting global configuration for your entire app:
\`\`\`javascript
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token123';

// Now you can just do:
axios.get('/users'); // Automatically uses the base URL and auth header!
\`\`\``,
    codeExample: `// NOTE: This is a conceptual example for the Playground.
// In a real environment, you must run: npm install axios
// import axios from 'axios';

import React, { useState } from 'react';

export default function AxiosDemo() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    try {
      // Using standard fetch here to simulate Axios behavior in the playground
      // In Axios, this would be: const response = await axios.get('url');
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const jsonData = await response.json(); // Axios does this automatically!
      
      // Axios puts the payload inside a 'data' object
      const axiosStyleResponse = { data: jsonData, status: 200 };
      
      setData(axiosStyleResponse.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Axios Concepts</h2>
      <p>Axios simplifies requests by automatically parsing JSON and throwing errors on 404/500 HTTP statuses.</p>
      
      <button onClick={handleFetch}>Simulate Axios Request</button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <pre style={{ background: '#333', padding: '10px', marginTop: '20px', color: '#00ffcc' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}`,
    quizzes: [
      ["What is Axios?", ["A state management library", "A built-in browser API", "A popular third-party, promise-based HTTP client", "A CSS framework"], 2],
      ["What is a major advantage of Axios over the Fetch API?", ["It is faster", "It automatically transforms JSON data, so you don't have to call .json()", "It works without the internet", "It doesn't use Promises"], 1],
      ["Where does Axios place the actual JSON payload returned from the server?", ["response.json", "response.body", "response.data", "response.payload"], 2],
      ["How does Fetch handle a 404 or 500 HTTP error status?", ["It throws an error into the .catch() block", "It resolves the promise normally, and you must manually check `response.ok`", "It crashes the app", "It retries the request"], 1],
      ["How does Axios handle a 404 or 500 HTTP error status?", ["It automatically rejects the promise, triggering the .catch() block", "It resolves normally", "It ignores the error", "It alerts the user"], 0],
      ["What is an Axios 'Interceptor'?", ["A virus", "A way to run code or modify requests/responses globally before they are handled by then/catch", "A routing feature", "A tool to intercept DOM events"], 1],
      ["How do you make a POST request with Axios?", ["axios.post('/url', { name: 'John' })", "axios.send('/url', { name: 'John' })", "axios('/url').post({ name: 'John' })", "axios.request('POST', '/url')"], 0],
      ["What feature does Axios have that makes it easy to work with a single API across your app?", ["axios.setAPI()", "axios.defaults.baseURL", "axios.config.server", "axios.init()"], 1],
      ["Does Axios work in Node.js environments (like backend servers) as well as the browser?", ["Yes", "No, only in the browser", "No, only in Node.js", "Only with Next.js"], 0],
      ["Is Axios built into React?", ["Yes", "No, you must install it via npm (`npm install axios`)", "Yes, but you have to enable it", "No, it is built into the browser"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Mental Model", description: "Write down the three main benefits of using Axios over the native Fetch API." }
    ],
    practiceTasks: [
      { task: "Understand automatic JSON parsing in Axios" },
      { task: "Understand Axios error handling vs Fetch" }
    ]
  },

  "Async Handling": {
    detailedExplanation: `## Async Handling (🔵 LEVEL 5 – DATA HANDLING)

### The Three States of Asynchronous Data
When you build robust React applications, you must account for the fact that network requests take time and can fail. 

Every time you fetch data, your UI should handle three distinct states:
1. **Loading State**: The request has started, but data hasn't arrived yet. Show a spinner or skeleton loader.
2. **Success State**: The data has arrived successfully. Render the data.
3. **Error State**: The request failed (network issue, 500 server error, etc.). Show an error message to the user.

### 👉 Concept: Managing State variables
To handle this properly, you typically need three pieces of state:

\`\`\`jsx
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
\`\`\`

### Example Implementation

\`\`\`jsx
useEffect(() => {
  const loadData = async () => {
    // 1. Reset state (in case of re-fetching)
    setIsLoading(true);
    setError(null);

    try {
      // 2. Fetch the data
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) throw new Error("Failed to fetch data");
      
      const result = await response.json();
      
      // 3. Success: Save data
      setData(result);
    } catch (err) {
      // 4. Error: Save error message
      setError(err.message);
    } finally {
      // 5. Always stop loading, regardless of success or failure
      setIsLoading(false);
    }
  };

  loadData();
}, []);

// --- Conditional Rendering based on state ---
if (isLoading) return <p>Loading data...</p>;
if (error) return <p>Error: {error}</p>;
return <div>{data.name}</div>;
\`\`\`

Handling these three states ensures your application feels professional, responsive, and doesn't crash silently when APIs fail.`,
    codeExample: `import React, { useState, useEffect } from 'react';

export default function AsyncHandlingDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWithCondition = (shouldFail) => {
    setLoading(true);
    setError(null);
    setData(null);

    // Simulate a network request taking 1.5 seconds
    setTimeout(() => {
      if (shouldFail) {
        // Simulating an error
        setError("Network error: Could not reach the server!");
        setLoading(false);
      } else {
        // Simulating success
        setData({ message: "Data loaded successfully!", id: 101 });
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '8px' }}>
      <h2>Robust Async Handling</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => fetchWithCondition(false)} style={{ marginRight: '10px' }}>
          Fetch (Success)
        </button>
        <button onClick={() => fetchWithCondition(true)}>
          Fetch (Fail)
        </button>
      </div>

      {/* 1. Loading State */}
      {loading && (
        <div style={{ color: 'lightblue', fontSize: '18px' }}>⏳ Loading data... Please wait.</div>
      )}

      {/* 2. Error State */}
      {error && (
        <div style={{ color: '#ff6b6b', background: '#3b1c1c', padding: '10px', borderRadius: '5px' }}>
          ⚠️ {error}
        </div>
      )}

      {/* 3. Success State */}
      {data && (
        <div style={{ color: '#51cf66', background: '#193b22', padding: '10px', borderRadius: '5px' }}>
          ✅ {data.message} (ID: {data.id})
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["What are the three core states you must handle when fetching data?", ["Red, Green, Blue", "Loading, Success, Error", "Mount, Update, Unmount", "State, Props, Context"], 1],
      ["Why is a 'Loading' state important?", ["To make the app run slower", "To provide visual feedback to the user that a network request is in progress", "To satisfy React compiler rules", "To style the component"], 1],
      ["What is the best way to track loading and error states?", ["Using CSS classes", "Using dedicated React state variables (e.g., `isLoading`, `error`)", "Using Redux only", "Saving them to localStorage"], 1],
      ["In a `try/catch` block, where should you place the code that executes if the fetch succeeds?", ["In the `try` block, after the `await` statements", "In the `catch` block", "In the `finally` block", "Outside the block completely"], 0],
      ["What is the purpose of the `finally` block in a `try/catch/finally` structure?", ["To throw a final error", "To execute code regardless of whether the try succeeded or failed (e.g., setting `isLoading` to false)", "To retry the request", "To terminate the application"], 1],
      ["If you do not handle the 'Error' state, what happens if the API goes down?", ["The app fixes it automatically", "The user might see an infinite loading spinner or a blank screen, with no idea what went wrong", "React shows a generic error page", "The browser reloads"], 1],
      ["What should you do before starting a new fetch request (if the component allows re-fetching)?", ["Reset the error state to null and set loading to true", "Set the data to null", "Unmount the component", "Change the URL"], 0],
      ["Which conditional rendering pattern is commonly used for async states?", ["Early returns (`if (loading) return <Spinner />`)", "Ternary operators in JSX", "Both are very common", "Neither"], 2],
      ["What does `throw new Error('msg')` do?", ["It logs a message to the console", "It stops execution of the `try` block and jumps immediately to the `catch` block", "It creates a new HTML element", "It resolves a Promise"], 1],
      ["Libraries like React Query or SWR handle these three states (loading, error, data) for you automatically.", ["True", "False"], 0]
    ],
    assignments: [
      { title: "Assignment 1: The Three States", description: "Create a component with three buttons: 'Start Load', 'Succeed', and 'Fail'. Use state to mimic a data fetch cycle, showing a Loading message, a Success message, or an Error message based on the button clicked." }
    ],
    practiceTasks: [
      { task: "Implement Loading, Success, and Error states in a component" },
      { task: "Use try/catch/finally blocks" }
    ]
  }
};

async function updateLevel45() {
  let updatedCount = 0;
  
  // 1. Fix Module 17 (Forms)
  const formsModule = modules.find(m => m.title === "Forms");
  if (formsModule) {
    formsModule.detailedExplanation = module17Explanation;
    console.log("✅ Fixed detailedExplanation for Module 17 (Removed raw HTML tags)");
  }

  // 2. Update Level 4 and 5 modules
  modules.forEach(mod => {
    if (level45Data[mod.title]) {
      const data = level45Data[mod.title];
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

  const fileContent = "// Auto-generated seeder file containing 53 modules.\n" +
                      "// Generated via seed-builder.js and updated via scripts.\n\n" +
                      "export const modules = " + JSON.stringify(modules, null, 2) + ";\n";
                      
  fs.writeFileSync('./seeder.js', fileContent);
  console.log("✅ Successfully injected high-quality content into " + updatedCount + " Level 4 & 5 modules!");
}

updateLevel45();

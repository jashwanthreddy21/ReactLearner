import fs from 'fs';
import { modules } from './seeder.js';

const level2Data = {
  "State": {
    detailedExplanation: `## State – useState Hook (🟡 LEVEL 2 – CORE REACT)

### What is State?
State is data that changes over time within a component. While props are passed down from a parent and are read-only, **state is managed entirely within the component itself**. 

When state changes, React automatically re-renders the component to ensure the UI stays synchronized with the latest data. 

### The \`useState\` Hook
In functional components, you manage state using the \`useState\` Hook. A Hook is a special function that lets you "hook into" React features.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### Key Concepts of \`useState\`:
1. **Initialization**: \`useState(0)\` initializes the state variable \`count\` to \`0\`.
2. **Destructuring**: \`useState\` returns an array with two elements. We use array destructuring to assign them to variables: the current state (\`count\`) and the function that updates it (\`setCount\`).
3. **Immutability**: You must *never* mutate state directly (e.g., \`count = 5\`). You must always use the setter function (\`setCount(5)\`).
4. **Asynchronous Updates**: State updates in React are asynchronous. Calling \`setCount(1)\` does not instantly change \`count\`. It schedules an update for the next render.

### Previous State Updates
If your new state depends on the previous state, you should pass a function to the setter instead of a direct value:
\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`
This ensures you are always working with the most up-to-date value, especially if multiple updates happen quickly.`,
    codeExample: `import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Counter: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ marginLeft: '10px', padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import React, { useState } from 'react';\n\nexport default function App() {\n  const [isVisible, setIsVisible] = useState(true);\n\n  return (\n    <div>\n      <button onClick={() => setIsVisible(!isVisible)}>\n        Toggle Message\n      </button>\n      {isVisible && <p>Hello! I am a stateful component.</p>}\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is State in React?", ["CSS properties", "Data that changes over time and triggers re-renders", "Read-only data passed from a parent", "Database connections"], 1],
      ["Which Hook is used to add state to a functional component?", ["useEffect", "useReducer", "useState", "useContext"], 2],
      ["What does useState return?", ["A string", "An object", "An array with two elements", "A boolean"], 2],
      ["How do you correctly update state in React?", ["state.value = 'new'", "this.state.value = 'new'", "Using the setter function returned by useState", "You cannot update state"], 2],
      ["What happens immediately when you call a state setter function?", ["The DOM updates instantly", "React schedules a re-render", "The browser reloads", "The component is unmounted"], 1],
      ["If you have `const [age, setAge] = useState(20);`, what is the initial value of age?", ["undefined", "0", "20", "null"], 2],
      ["Why should you not mutate state directly (e.g., state.count = 5)?", ["It causes an infinite loop", "It throws a compilation error", "React will not know the state changed and won't trigger a re-render", "It is illegal in JavaScript"], 2],
      ["When should you pass a function to a state setter (e.g., setCount(prev => prev + 1))?", ["Always", "Never", "When the new state depends on the previous state", "When the component mounts"], 2],
      ["Can a component have multiple useState hooks?", ["Yes", "No", "Only if they are numbers", "Only in class components"], 0],
      ["What is the difference between props and state?", ["They are the same", "Props are mutable, state is immutable", "Props are passed from parents (read-only), state is managed internally (mutable)", "State is for CSS, props are for data"], 2],
      ["Is state preserved if the component is removed from the DOM?", ["Yes, always", "No, state is destroyed when the component unmounts", "Only if you use Redux", "Only if stored in localStorage"], 1],
      ["Which JavaScript syntax is used to extract the two values from useState?", ["Object destructuring", "Array destructuring", "Spread operator", "Rest parameters"], 1],
      ["Can you put useState inside an if-statement?", ["Yes", "No, Hooks must be called at the top level", "Only if it is true", "Only in development"], 1],
      ["What is the initial state if you call useState() without arguments?", ["0", "null", "undefined", "false"], 2],
      ["Which data types can be stored in state?", ["Strings and numbers only", "Objects and arrays only", "Any JavaScript data type", "Only primitive types"], 2],
      ["If two components use the same custom Hook that calls useState, do they share state?", ["Yes", "No, they get completely independent state", "Only if they are siblings", "Only if they are parent-child"], 1],
      ["What happens if you update state with the exact same value it currently holds?", ["React re-renders anyway", "React bails out and skips the re-render", "React throws a warning", "The app crashes"], 1],
      ["How do you update an object in state?", ["By mutating the object directly", "By creating a new object copy using the spread operator and updating the copy", "By pushing to it", "You cannot put objects in state"], 1],
      ["What happens to state during a hard browser refresh?", ["It persists", "It resets to the initial value", "It throws an error", "It is saved to cookies"], 1],
      ["React state updates are:", ["Synchronous", "Asynchronous / Batched", "Instant", "Blocked by the main thread"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Counter App", description: "Create a Counter component with an increment, decrement, and reset button. Prevent the counter from going below zero." },
      { title: "Assignment 2: Text Input State", description: "Create a text input field. Use state to track the text being typed and display it live below the input." }
    ],
    practiceTasks: [
      { task: "Initialize state using the useState hook" },
      { task: "Update state based on previous state values" }
    ]
  },

  "Event Handling": {
    detailedExplanation: `## Event Handling (🟡 LEVEL 2 – CORE REACT)

### React Events
Handling events in React is very similar to handling events on DOM elements in Vanilla JS, but with a few syntactic differences:

1. React events are named using **camelCase**, rather than lowercase. (e.g., \`onClick\` instead of \`onclick\`).
2. With JSX you pass a **function** as the event handler, rather than a string.

\`\`\`jsx
// Vanilla JS:
// <button onclick="activateLasers()">

// React:
<button onClick={activateLasers}>
  Activate Lasers
</button>
\`\`\`

### The Event Object
React passes a "SyntheticEvent" to your event handlers. This is a cross-browser wrapper around the browser's native event. It has the same interface as the native event, including \`e.preventDefault()\` and \`e.stopPropagation()\`.

### Preventing Default Behavior
You cannot return \`false\` to prevent default behavior in React. You must call \`preventDefault\` explicitly.

\`\`\`jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

### Passing Arguments to Event Handlers
Inside a loop, it is common to want to pass an extra parameter to an event handler. You can do this using an inline arrow function:

\`\`\`jsx
<button onClick={(e) => deleteRow(id, e)}>Delete Row</button>
\`\`\`
Or using \`bind\`:
\`\`\`jsx
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> // Common in older class components
\`\`\`

### Common Events
- **Mouse**: \`onClick\`, \`onMouseEnter\`, \`onMouseLeave\`
- **Form**: \`onChange\`, \`onSubmit\`
- **Keyboard**: \`onKeyDown\`, \`onKeyUp\``,
    codeExample: `import React, { useState } from 'react';

export default function EventDemo() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      style={{ height: '300px', background: '#1e1e1e', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <h3>Move your mouse here: X: {coords.x}, Y: {coords.y}</h3>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `export default function App() {\n  function handleClick(e) {\n    alert('Button clicked!');\n  }\n\n  return (\n    <div>\n      <h2>Event Handling</h2>\n      <button onClick={handleClick}>Click Me</button>\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["How are React events named?", ["lowercase (onclick)", "camelCase (onClick)", "kebab-case (on-click)", "PascalCase (OnClick)"], 1],
      ["What is passed to an event handler in React?", ["A string", "A function", "A SyntheticEvent object", "An HTML element"], 2],
      ["How do you prevent the default behavior of a form submission in React?", ["return false;", "e.preventDefault();", "e.stopPropagation();", "Both A and B"], 1],
      ["What is the correct syntax for an onClick handler?", ["onClick='handleClick'", "onClick={handleClick()}", "onClick={handleClick}", "onClick={() => handleClick()}"], 2],
      ["What happens if you write `onClick={handleClick()}` in JSX?", ["It works normally", "The function executes immediately when the component renders, instead of waiting for a click", "It throws a syntax error", "It is ignored"], 1],
      ["What is a SyntheticEvent in React?", ["A fake event used only for testing", "A cross-browser wrapper around the browser's native event", "A styling library", "A server-side event"], 1],
      ["How do you pass an argument 'id' to an event handler?", ["onClick={deleteItem(id)}", "onClick={(e) => deleteItem(id, e)}", "onClick={deleteItem.bind(id)}", "Both B and C"], 3],
      ["Which event triggers when an input field's value changes?", ["onClick", "onSubmit", "onChange", "onHover"], 2],
      ["Can you attach an event handler directly to a custom component (e.g. `<MyButton onClick={...} />`)?", ["Yes, it attaches to the root DOM node automatically", "No, custom components don't understand DOM events unless you pass it as a prop and attach it manually inside", "Yes, but only in class components", "No, it is illegal"], 1],
      ["Which event handles keyboard key presses?", ["onMouseOver", "onChange", "onKeyDown", "onInput"], 2],
      ["What does e.stopPropagation() do?", ["Stops the default browser action", "Stops the event from bubbling up the DOM tree", "Stops the component from rendering", "Deletes the event object"], 1],
      ["Are React events attached to the specific DOM nodes you render?", ["Yes, exactly like Vanilla JS", "No, React uses event delegation and attaches one handler to the document root", "Yes, but only for buttons", "No, they are attached to the Window object"], 1],
      ["Which event fires when the mouse moves over an element?", ["onMouseEnter", "onMouseLeave", "onClick", "onSubmit"], 0],
      ["If you need access to the event object in an inline function, how do you write it?", ["onClick={() => handleClick(e)}", "onClick={(event) => handleClick(event)}", "onClick={handleClick(e)}", "onClick={(e)}"], 1],
      ["Why does React use SyntheticEvents?", ["For better performance", "To ensure events work identically across all browsers", "To enable server-side rendering", "To bypass the DOM entirely"], 1],
      ["Which event is typically attached to a <form> tag?", ["onClick", "onChange", "onSubmit", "onLoad"], 2],
      ["How do you capture an event in the capture phase rather than the bubble phase?", ["Use onClickCapture instead of onClick", "Pass a boolean flag", "Use e.capture()", "You cannot capture events in React"], 0],
      ["What happens to SyntheticEvent objects after the event callback has been invoked? (Pre-React 17)", ["They are kept in memory forever", "They are pooled and nullified for performance", "They are sent to the server", "They are converted to native events"], 1],
      ["What type of component can have event handlers?", ["Only class components", "Only functional components", "Both class and functional components", "Only higher-order components"], 2],
      ["How can you get the value of an input field when an onChange event fires?", ["e.target.value", "e.value", "e.target", "e.input.value"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Click Tracker", description: "Create a button that tracks its own clicks. Use onClick to update state and display the total clicks." },
      { title: "Assignment 2: Mouse Coordinates", description: "Create a component that tracks the X and Y coordinates of the mouse on the screen using the onMouseMove event." }
    ],
    practiceTasks: [
      { task: "Attach an onClick handler to a button" },
      { task: "Prevent default form submission" }
    ]
  },

  "Conditional Rendering": {
    detailedExplanation: `## Conditional Rendering (🟡 LEVEL 2 – CORE REACT)

### What is Conditional Rendering?
In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application. Conditional rendering in React works the same way conditions work in JavaScript. 

### 1. The \`if\` Statement
The simplest way to conditionally render is to use an \`if\` statement to return different elements based on a condition.
\`\`\`jsx
function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}
\`\`\`

### 2. Logical && Operator
You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical \`&&\` operator. It’s useful for conditionally rendering an element if a condition is true, and doing nothing otherwise.

\`\`\`jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2>
      }
    </div>
  );
}
\`\`\`
*Warning: If the condition evaluates to \`0\`, React will render \`0\` instead of ignoring it.*

### 3. Ternary Operator (Condition ? True : False)
Another method for conditionally rendering elements inline is to use the JavaScript conditional operator \`condition ? true : false\`.

\`\`\`jsx
return (
  <div>
    {isLoggedIn ? <LogoutButton /> : <LoginButton />}
  </div>
);
\`\`\`

### Preventing Component from Rendering
In rare cases, you might want a component to hide itself even though it was rendered by another component. To do this, return \`null\` instead of its render output. Returning \`null\` does not affect the firing of the component's lifecycle methods.`,
    codeExample: `import React, { useState } from 'react';

export default function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: '20px', border: '1px solid gray' }}>
      <h2>{isLoggedIn ? 'Welcome User!' : 'Please log in to continue.'}</h2>
      
      {/* Ternary Operator */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>

      {/* Logical && */}
      {isLoggedIn && <p style={{ color: 'green' }}>✅ You have full access.</p>}
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `export default function App() {\n  const isLoading = true;\n  return (\n    <div>\n      {isLoading ? <p>Loading data...</p> : <p>Data loaded successfully!</p>}\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is conditional rendering in React?", ["Using CSS to hide elements", "Rendering different UI elements based on state or props", "A way to loop through arrays", "A performance optimization"], 1],
      ["Which operator is used to render an element ONLY if a condition is true?", ["||", "&&", "?", "==="], 1],
      ["What does `condition ? <A /> : <B />` do?", ["Renders A if true, B if false", "Renders A and B", "Throws an error", "Renders A if false, B if true"], 0],
      ["Can you use an `if` statement directly inside JSX curly braces `{}`?", ["Yes", "No, you must use expressions like ternaries or &&", "Only in class components", "Only if it returns a string"], 1],
      ["What should a component return to hide itself completely?", ["false", "undefined", "null", "'' (empty string)"], 2],
      ["What is the danger of using `length && <Component />` if length is 0?", ["It will crash", "React will render the number '0' on the screen", "It will render the Component anyway", "It will throw a warning"], 1],
      ["How can you fix the `0 && <Component />` issue?", ["Use length > 0 && <Component />", "Use !!length && <Component />", "Use a ternary: length ? <Component /> : null", "All of the above"], 3],
      ["Which method is best for assigning different components to a variable before the return statement?", ["Logical &&", "Ternary Operator", "Standard if/else statements", "Switch statements"], 2],
      ["Does returning `null` from a component prevent it from mounting?", ["Yes", "No, it still mounts, it just renders empty output", "Only if it has no state", "Only in production"], 1],
      ["What does `true && 'Hello'` evaluate to in JavaScript (and React)?", ["true", "'Hello'", "undefined", "false"], 1],
      ["What does `false && 'Hello'` evaluate to in JavaScript?", ["true", "'Hello'", "false", "null"], 2],
      ["How does React handle boolean values (true, false) when rendered in JSX?", ["It converts them to strings", "It ignores them (renders nothing)", "It throws an error", "It renders 'true' or 'false'"], 1],
      ["Can you use a switch statement for conditional rendering?", ["Yes, usually outside of the JSX return statement", "No, switch statements are banned in React", "Yes, directly inside JSX curly braces", "Only in Redux"], 0],
      ["What is the ternary operator syntax?", ["condition && true || false", "condition ? true : false", "if (condition) true else false", "condition ! true ? false"], 1],
      ["If `user` is null, what will `{user ? user.name : 'Guest'}` render?", ["An error", "undefined", "'Guest'", "null"], 2],
      ["What happens if you use the logical OR `||` operator? e.g., `{name || 'Anonymous'}`", ["It renders name if truthy, otherwise 'Anonymous'", "It always renders 'Anonymous'", "It throws an error", "It renders both"], 0],
      ["Is it possible to conditionally render attributes on an element? (e.g. disabled={isDisabled})", ["Yes", "No", "Only for style attributes", "Only for custom components"], 0],
      ["Which approach is most readable for complex, multi-branch conditional rendering?", ["Nested ternaries", "If-else blocks returning different JSX before the main return", "Multiple && operators", "None of the above"], 1],
      ["Nested ternaries (condition1 ? A : condition2 ? B : C) are generally considered:", ["Best practice", "Good for performance", "Hard to read and should often be avoided", "The only way to write conditions"], 2],
      ["React ignores which of the following values when rendering?", ["Numbers and strings", "null, undefined, true, false", "Arrays and Objects", "Functions"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Admin Dashboard", description: "Create a component that receives a 'role' prop. If the role is 'admin', render an AdminPanel component. Otherwise, render a UserProfile component." },
      { title: "Assignment 2: Loading Spinner", description: "Create a state variable 'isLoading'. Use conditional rendering to show a 'Loading...' text while true, and 'Content Loaded' when false. Add a button to toggle it." }
    ],
    practiceTasks: [
      { task: "Use the ternary operator to toggle UI elements" },
      { task: "Use the && operator to hide/show UI elements" }
    ]
  },

  "Lists & Keys": {
    detailedExplanation: `## Lists and Keys (🟡 LEVEL 2 – CORE REACT)

### Rendering Multiple Components
In React, you can build collections of elements and include them in JSX using curly braces \`{}\`. 
The standard way to transform arrays of data into arrays of React elements is using the JavaScript \`map()\` function.

\`\`\`jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

return <ul>{listItems}</ul>;
\`\`\`

### Keys
A "key" is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

\`\`\`jsx
const todos = [{id: 1, text: 'Wash car'}, {id: 2, text: 'Buy milk'}];
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
\`\`\`

### Rules of Keys:
1. **Keys must be unique among siblings**: They don't need to be globally unique, just unique among the array elements.
2. **Keys should be stable**: Avoid using \`Math.random()\` or the array index (if the list can reorder) as keys. If an item's key changes, React will destroy and recreate the component, hurting performance and losing state.
3. **Use IDs from your data**: The best pick for a key is a unique ID from your database.
4. **Index as a last resort**: Only use the array index as a key if the list is static, never reordered, and has no IDs.

### Where to put the key?
A good rule of thumb is that elements inside the \`map()\` call need keys. If you extract a \`ListItem\` component, the key belongs on the \`<ListItem />\` tag inside the array mapping, not on the \`<li>\` inside the component itself.`,
    codeExample: `import React from 'react';

export default function UserList() {
  const users = [
    { id: 'u1', name: 'Alice' },
    { id: 'u2', name: 'Bob' },
    { id: 'u3', name: 'Charlie' }
  ];

  return (
    <div>
      <h2>User Directory</h2>
      <ul>
        {users.map(user => (
          // The key must be on the outermost element returned from map
          <li key={user.id} style={{ padding: '5px', listStyleType: 'square' }}>
            {user.name} (ID: {user.id})
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `export default function App() {\n  const fruits = ['Apple', 'Banana', 'Cherry'];\n  return (\n    <ul>\n      {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}\n    </ul>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["Which array method is most commonly used to render lists in React?", ["filter()", "reduce()", "map()", "forEach()"], 2],
      ["What special attribute must be given to elements generated from an array?", ["id", "index", "key", "ref"], 2],
      ["Why does React need keys?", ["To style the elements differently", "To track which items have changed, been added, or removed for performance", "To connect to a database", "To validate the data type"], 1],
      ["What makes an ideal key?", ["A unique, stable ID from your data", "Math.random()", "The array index", "The current timestamp"], 0],
      ["Why is using the array index as a key sometimes bad?", ["It throws a syntax error", "If the list reorders or items are deleted, React can get confused and map state to the wrong items", "It uses too much memory", "It is bad practice in JavaScript"], 1],
      ["When is it acceptable to use the array index as a key?", ["Never", "Always", "When the list is static, never changes, and has no IDs", "When fetching data from an API"], 2],
      ["Do keys need to be globally unique across the entire application?", ["Yes", "No, they only need to be unique among their sibling elements", "Only if using Redux", "Only if rendering custom components"], 1],
      ["Where should the key attribute be placed?", ["Inside the component definition", "On the outermost element returned by the map() call", "On the root div of the App", "In the state object"], 1],
      ["What happens if you forget to add a key to a list item?", ["The app crashes", "React throws a warning in the console but still renders the list", "The items render twice", "The items become invisible"], 1],
      ["Are keys passed as props to the child component? (Can you access props.key?)", ["Yes", "No, React consumes the key internally. You cannot access props.key.", "Only in class components", "Only if you use TypeScript"], 1],
      ["If you need the same value as the key inside the component, what should you do?", ["Access this.props.key", "Pass it explicitly as a different prop (e.g., id={item.id})", "Read it from the DOM", "It is impossible"], 1],
      ["What happens if two elements in the same list have the same key?", ["React merges them into one", "React throws a warning and may render incorrectly or behave unpredictably", "It improves performance", "The app crashes"], 1],
      ["If a key changes on an element, what does React do?", ["It updates the CSS", "It destroys the old component instance and creates a completely new one", "It ignores the change", "It throws an error"], 1],
      ["How can you render a list of objects like `{ id: 1, name: 'A' }`?", ["Use a for loop inside JSX", "Convert the objects to strings", "Use map to return JSX for each object", "You cannot render objects"], 2],
      ["Which statement correctly renders a list of items?", ["{items.map(item => <li key={item.id}>{item.name}</li>)}", "{items.forEach(item => <li key={item.id}>{item.name}</li>)}", "{items.filter(item => <li key={item.id}>{item.name}</li>)}", "{items.reduce(item => <li key={item.id}>{item.name}</li>)}"], 0],
      ["Can you use template literals inside the key? (e.g., `key={\`item-\${item.id}\`}`)", ["Yes", "No", "Only if it returns a number", "Only if it returns a boolean"], 0],
      ["What does map() return that makes it suitable for JSX?", ["A new array of JSX elements", "undefined", "A single string", "A boolean"], 0],
      ["If you extract a <ListItem /> component, does the key go on the <li> inside ListItem, or on the <ListItem /> tag inside map?", ["On the <li>", "On the <ListItem />", "On both", "Neither"], 1],
      ["Why shouldn't you use `Math.random()` as a key?", ["Because keys must be strings", "Because the key will change on every render, causing React to unnecessarily destroy and recreate the DOM node", "Because it generates too long numbers", "Because it is slow"], 1],
      ["Does React recommend rendering lists using `for` loops instead of `map()`?", ["Yes, it is faster", "No, `map()` is the declarative and preferred approach in JSX", "It doesn't matter", "Only in Next.js"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Render an Array", description: "Create an array of your favorite movies (objects with an id and title). Use map() to render them into an ordered list." },
      { title: "Assignment 2: Filter and Render", description: "Create an array of tasks (id, title, completed). Filter the array to only get completed tasks, then map over the filtered array to display them." }
    ],
    practiceTasks: [
      { task: "Render a list of elements using array.map" },
      { task: "Assign unique keys to mapped elements" }
    ]
  },

  "Forms": {
    detailedExplanation: `## Forms – Controlled Components (🟡 LEVEL 2 – CORE REACT)

### Form Handling in React
HTML form elements like \`<input>\`, \`<textarea>\`, and \`<select>\` typically maintain their own state and update it based on user input. 
In React, mutable state is kept in the state property of components, and only updated with \`setState()\` or the \`useState\` setter function.

We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input.

### Controlled Components
An input form element whose value is controlled by React in this way is called a **"controlled component"**.

\`\`\`jsx
function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
Because the \`value\` attribute is set on our form element, the displayed value will always be \`name\`, making the React state the source of truth. Since \`handleChange\` runs on every keystroke to update the React state, the displayed value will update as the user types.

### Handling Multiple Inputs
When you need to handle multiple controlled \`input\` elements, you can add a \`name\` attribute to each element and let the handler function choose what to do based on the value of \`event.target.name\`. You can store all form fields in a single state object.

### Uncontrolled Components
Alternatively, you can use uncontrolled components, where form data is handled by the DOM itself. To write an uncontrolled component, instead of writing an event handler for every state update, you use a \`ref\` (via \`useRef\`) to get form values from the DOM when needed. However, Controlled Components are the recommended standard in React.`,
    codeExample: `import React, { useState } from 'react';

export default function MultiInputForm() {
  const [formData, setFormData] = useState({ firstName: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the specific field dynamically
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form style={{ padding: '20px' }}>
      <label>
        First Name:
        <input name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br/><br/>
      <label>
        Email:
        <input name="email" value={formData.email} onChange={handleChange} />
      </label>
      <div style={{ marginTop: '20px' }}>
        <strong>Live Data:</strong> {JSON.stringify(formData)}
      </div>
    </form>
  );
}`,
    defaultFiles: {
      '/App.js': `import React, { useState } from 'react';\n\nexport default function App() {\n  const [text, setText] = useState('');\n  return (\n    <div>\n      <input value={text} onChange={e => setText(e.target.value)} />\n      <p>You typed: {text}</p>\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is a controlled component?", ["An input whose value is controlled by React state", "A component that has no state", "A component connected to a database", "A form element controlled by the DOM"], 0],
      ["In a controlled component, what attribute binds the input to the state?", ["control", "bind", "value", "state"], 2],
      ["Which event handler is used to detect typing in an input field?", ["onType", "onKey", "onClick", "onChange"], 3],
      ["How do you access the value typed by the user in an onChange event?", ["event.value", "event.target.value", "event.input", "event.text"], 1],
      ["What makes React the 'single source of truth' in forms?", ["The state dictates what the input displays via the value attribute", "React saves data to localStorage", "React automatically validates forms", "Forms are submitted via Ajax"], 0],
      ["What happens if you provide a value to an input but omit the onChange handler?", ["It works normally", "The input becomes read-only and you cannot type in it", "React throws an error", "The value becomes undefined"], 1],
      ["How do you handle form submission in React?", ["Use an action attribute on the form", "Attach an onSubmit handler to the <form> and call event.preventDefault()", "Use an onClick handler on the input field", "Wait for the page to reload"], 1],
      ["What is an uncontrolled component?", ["A component with bugs", "An input whose value is managed by the DOM, accessed via refs", "An input without a name attribute", "A component that renders infinitely"], 1],
      ["Which Hook is typically used to handle form inputs in a functional component?", ["useEffect", "useRef", "useState", "useContext"], 2],
      ["When managing multiple inputs with a single state object, what property helps identify which input changed?", ["event.target.id", "event.target.name", "event.target.className", "event.target.type"], 1],
      ["How do you update an object in state dynamically based on the input name?", ["setFormData(prev => ({...prev, [event.target.name]: event.target.value}))", "setFormData({event.target.name: event.target.value})", "setFormData(event.target.value)", "setFormData(prev => ({name: value}))"], 0],
      ["Which tag is used for a multi-line text input in React?", ["<input type='textarea'>", "<textarea></textarea>", "<multiline>", "<textfield>"], 1],
      ["How do you set the value of a <textarea> in React?", ["<textarea>Hello</textarea>", "Using the 'value' attribute: <textarea value='Hello' />", "Using the 'text' attribute", "Using 'innerHTML'"], 1],
      ["How do you set the selected value of a <select> dropdown in React?", ["Set the 'selected' attribute on the <option>", "Set the 'value' attribute on the root <select> tag", "Set the 'checked' attribute", "It handles itself automatically"], 1],
      ["What is the standard way to handle a checkbox in React?", ["Use 'value' and 'onChange'", "Use 'checked' (boolean) and 'onChange'", "Use 'selected' and 'onClick'", "Use 'status' and 'onChange'"], 1],
      ["How can you prevent users from submitting a form if a field is empty?", ["Use HTML 'required' attribute", "Validate the state inside the onSubmit handler and return early if invalid", "Both A and B", "Forms validate themselves automatically"], 2],
      ["What popular library simplifies form handling and validation in React?", ["Redux", "React Router", "React Hook Form", "Axios"], 2],
      ["If you want an input to have a default value but be uncontrolled, what attribute do you use?", ["value", "defaultValue", "initialValue", "placeholder"], 1],
      ["Why does React recommend controlled components?", ["They allow for instant input validation, conditional disabling, and enforcing formats", "They are faster", "They use less memory", "They don't require JavaScript"], 0],
      ["Can a form contain both controlled and uncontrolled components?", ["Yes, though it is usually better to stick to one approach", "No, it throws an error", "Only in class components", "Only if wrapped in a Context Provider"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Simple Registration Form", description: "Create a controlled form with fields for Username, Email, and Password. Log the state to the console when the form is submitted." },
      { title: "Assignment 2: Character Counter", description: "Create a controlled textarea component. Display the number of characters the user has typed directly below the textarea." }
    ],
    practiceTasks: [
      { task: "Create a controlled input field" },
      { task: "Handle multiple inputs with a single state object" }
    ]
  },

  "useEffect": {
    detailedExplanation: `## useEffect – Side Effects (🟡 LEVEL 2 – CORE REACT)

### What are Side Effects?
Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations "side effects" (or just "effects"), you've likely performed them in your components before.

### The \`useEffect\` Hook
The Effect Hook, \`useEffect\`, adds the ability to perform side effects from a function component.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
}
\`\`\`

### Controlling When Effects Run (The Dependency Array)
By default, effects run after every completed render. However, you can choose to fire them only when certain values have changed by passing an array as an optional second argument.

1. **No array**: Runs after *every* render.
2. **Empty array \`[]\`**: Runs *only once* after the initial render (like componentDidMount). Good for initial API data fetching.
3. **Array with variables \`[prop, state]\`**: Runs on initial render AND whenever any dependency in the array changes.

### Cleaning Up Effects
Some effects require cleanup to reduce memory leaks, such as removing event listeners or clearing timeouts. If your effect returns a function, React will run it when it is time to clean up (before the component unmounts, and before re-running the effect on subsequent renders).

\`\`\`jsx
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  
  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []); // Empty array ensures this setup runs once.
\`\`\`

### Rules of Hooks
1. Only call Hooks **at the top level**. Don’t call Hooks inside loops, conditions, or nested functions.
2. Only call Hooks **from React function components** or custom Hooks.`,
    codeExample: `import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty array: runs only on mount

  return <div><h3>Seconds passed: {seconds}</h3></div>;
}`,
    defaultFiles: {
      '/App.js': `import React, { useEffect } from 'react';\n\nexport default function App() {\n  useEffect(() => {\n    console.log("Component Mounted!");\n  }, []);\n\n  return <h2>Check the console!</h2>;\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is a 'side effect' in React?", ["A bug", "An operation that affects something outside the component, like data fetching or manual DOM manipulation", "A CSS animation", "A state update"], 1],
      ["Which hook is used to handle side effects?", ["useState", "useEffect", "useMemo", "useContext"], 1],
      ["When does useEffect run by default if no dependency array is provided?", ["Never", "Only once on mount", "After every render", "Before every render"], 2],
      ["How do you make useEffect run ONLY once after the initial render?", ["Pass an empty array [] as the second argument", "Pass [null] as the second argument", "Do not pass a second argument", "Return false from the effect"], 0],
      ["What is the purpose of the dependency array in useEffect?", ["To declare variables", "To tell React which values the effect depends on, so it only re-runs when those values change", "To pass props to the effect", "To inject CSS"], 1],
      ["If you return a function from inside useEffect, what is it used for?", ["It is a callback for API data", "It is the cleanup function, executed before the component unmounts or before the effect re-runs", "It throws an error", "It sets the state"], 1],
      ["Which of the following requires a cleanup function?", ["Changing document.title", "Fetching data once", "Setting up a setInterval or WebSocket connection", "Console logging"], 2],
      ["What happens if you omit a state variable from the dependency array but use it inside the effect?", ["It works perfectly", "The effect might see 'stale' (outdated) values of that state", "The app crashes instantly", "React automatically fixes it"], 1],
      ["Can you make the callback function passed to useEffect an async function directly? (e.g., `useEffect(async () => {})`)", ["Yes", "No, because useEffect expects the return value to be a cleanup function (or nothing), but async functions return a Promise.", "Only in React 18", "Yes, but it is deprecated"], 1],
      ["How SHOULD you fetch data inside useEffect?", ["useEffect(async () => { await fetch() })", "Define an async function inside the effect and call it immediately", "Use a standard promise chain (.then)", "Both B and C are correct"], 3],
      ["What happens if you update a state variable inside a useEffect that has no dependency array?", ["It works perfectly", "It creates an infinite loop of rendering and running the effect", "The state doesn't update", "React throws a syntax error"], 1],
      ["What is the equivalent of the cleanup function in class components?", ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "render"], 2],
      ["Is it possible to have multiple useEffect hooks in a single component?", ["Yes, it is recommended to separate different concerns into multiple effects", "No, only one is allowed", "Only if they have the exact same dependency array", "Only in custom hooks"], 0],
      ["Which of the following is NOT a rule of hooks?", ["Call hooks at the top level", "Call hooks only from React functions", "Hooks can be called conditionally inside an if-statement", "Hooks must start with 'use'"], 2],
      ["If dependency array is `[id]`, when will the effect run?", ["Only on mount", "After every render", "On mount and whenever `id` changes", "Never"], 2],
      ["Why does React run effects twice in development mode (with StrictMode)?", ["To slow down the app", "To help you find bugs by ensuring your effects are resilient and properly cleaned up", "It is a bug in React", "To double fetch data"], 1],
      ["What is prop drilling? (Unrelated to useEffect, but good to know!)", ["Passing props through multiple layers of components", "A power tool", "Drilling into the DOM", "A CSS technique"], 0],
      ["Can useEffect be used to replace all lifecycle methods of a class component?", ["Yes, it covers the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount", "No, it only replaces componentDidMount", "No, it cannot handle unmounting", "No, it is totally different"], 0],
      ["Where should functions that are called inside useEffect but don't use component state be defined?", ["Inside the effect", "Outside the component to avoid recreating them on every render", "Inside the component body", "Any of the above"], 1],
      ["What is a 'stale closure' in the context of useEffect?", ["When an effect captures old state/props because dependencies were omitted", "A broken CSS class", "A closed database connection", "A syntax error"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Fetching Data", description: "Use useEffect to fetch data from 'https://jsonplaceholder.typicode.com/users' when the component mounts. Display the names in a list." },
      { title: "Assignment 2: Window Width Tracker", description: "Use useEffect to attach a 'resize' event listener to the window. Update state with the current window width and display it. Remember to return a cleanup function to remove the listener!" }
    ],
    practiceTasks: [
      { task: "Run an effect only once on mount" },
      { task: "Implement an effect cleanup function" }
    ]
  },

  "Lifecycle": {
    detailedExplanation: `## Component Lifecycle (🟡 LEVEL 2 – CORE REACT)

### What is the Component Lifecycle?
Every React component goes through a series of "lifecycle" phases from the time it is created and inserted into the DOM until it is removed. 

Historically, this was managed using Class Components and specific lifecycle methods (like \`componentDidMount\`, \`componentDidUpdate\`, \`componentWillUnmount\`). Today, functional components achieve the exact same lifecycle management using the \`useEffect\` Hook.

### The Three Main Phases
1. **Mounting (Birth):** The phase when a component is created and inserted into the DOM.
   - *Class:* \`constructor()\`, \`render()\`, \`componentDidMount()\`
   - *Functional:* The function body runs, then \`useEffect(..., [])\` runs.

2. **Updating (Growth):** The phase when a component's state or props change, causing a re-render.
   - *Class:* \`render()\`, \`componentDidUpdate()\`
   - *Functional:* The function body runs again, then \`useEffect(..., [deps])\` runs if dependencies changed.

3. **Unmounting (Death):** The phase when a component is removed from the DOM.
   - *Class:* \`componentWillUnmount()\`
   - *Functional:* The cleanup function returned by \`useEffect\` runs.

### Why is this important?
Understanding the lifecycle helps you know **when** to fetch data (on mount), **when** to react to changes (on update), and **when** to clean up resources like event listeners or timers (on unmount) to prevent memory leaks.

### Mental Model Shift
While it's useful to know the class lifecycle names (as you will see them in older codebases), modern React encourages a different mental model. Instead of thinking "what happens when the component mounts", think "synchronize this side effect with this state". \`useEffect\` is an engine for synchronizing external systems with React state.`,
    codeExample: `import React, { useState, useEffect } from 'react';

function ChildComponent() {
  useEffect(() => {
    console.log("1. Component Mounted! (Birth)");

    return () => {
      console.log("3. Component Unmounted! (Death)");
    };
  }, []);

  return <p>I am alive! Check the console.</p>;
}

export default function LifecycleDemo() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <button onClick={() => setShowChild(!showChild)}>
        Toggle Child Component (Mount/Unmount)
      </button>
      {showChild && <ChildComponent />}
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import React, { useState, useEffect } from 'react';\n\nfunction Logger() {\n  useEffect(() => {\n    console.log("Mounted!");\n    return () => console.log("Unmounted!");\n  }, []);\n  return <h2>I am logging my lifecycle!</h2>;\n}\n\nexport default function App() {\n  const [show, setShow] = useState(true);\n  return (\n    <div>\n      <button onClick={() => setShow(!show)}>Toggle Logger</button>\n      {show && <Logger />}\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What are the three main phases of a React component's lifecycle?", ["Initialization, Execution, Termination", "Mounting, Updating, Unmounting", "Rendering, Compiling, Deploying", "Setup, Run, Stop"], 1],
      ["Which phase occurs when a component is first inserted into the DOM?", ["Mounting", "Updating", "Unmounting", "Rendering"], 0],
      ["Which hook is primarily used to replicate lifecycle methods in functional components?", ["useState", "useContext", "useEffect", "useMemo"], 2],
      ["What is the class component equivalent of `useEffect(() => {...}, [])`?", ["componentDidUpdate", "componentWillUnmount", "componentDidMount", "render"], 2],
      ["What is the class component equivalent of the cleanup function returned by useEffect?", ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "constructor"], 2],
      ["When does the 'Updating' phase occur?", ["When the component is first created", "When state or props change", "When the component is removed from the DOM", "When the user closes the browser"], 1],
      ["Why do we need an unmounting phase (cleanup)?", ["To save data to the database", "To prevent memory leaks by removing timers or event listeners", "To speed up the network", "To trigger a re-render"], 1],
      ["In modern React, instead of thinking about 'lifecycle methods', we are encouraged to think about:", ["Synchronizing state with side effects", "Manipulating the DOM", "Object Oriented Programming", "CSS Animations"], 0],
      ["If a component re-renders but its dependencies haven't changed, does the useEffect run?", ["Yes", "No", "Only if it returns a function", "Only in StrictMode"], 1],
      ["Which legacy lifecycle method is used to stop a component from rendering if data hasn't changed? (For performance optimization in Class components)", ["componentDidMount", "shouldComponentUpdate", "componentWillUnmount", "getDerivedStateFromProps"], 1],
      ["What functional React feature replaces the need for `shouldComponentUpdate`?", ["React.memo", "useEffect", "useState", "useRef"], 0],
      ["Can a component be unmounted and then mounted again?", ["Yes", "No", "Only in React Native", "Only if the page is refreshed"], 0],
      ["When does the cleanup function of an effect run?", ["Right before the component unmounts", "Right before the effect runs again (on updates)", "Both A and B", "Never"], 2],
      ["Which class method runs BEFORE the component mounts?", ["constructor", "componentDidMount", "componentDidUpdate", "render"], 0],
      ["What happens if you fetch data in the main body of a functional component (outside of useEffect)?", ["It works fine", "It fetches data on every single render, potentially crashing the app or causing infinite loops", "It throws a syntax error", "It runs only once"], 1],
      ["In which phase should you focus an input field programmatically?", ["Before render", "During render", "After Mount (e.g. inside useEffect)", "During Unmount"], 2],
      ["What is the order of execution when a functional component mounts?", ["Run function body -> Run useEffect -> Paint screen", "Run function body -> Paint screen -> Run useEffect", "Run useEffect -> Run function body -> Paint screen", "Paint screen -> Run function body -> Run useEffect"], 1],
      ["If a component has multiple useEffects, what order do they run in?", ["Random order", "Alphabetical order", "The order they are defined in the code", "Reverse order"], 2],
      ["Does changing a `useRef` value trigger an update phase (re-render)?", ["Yes", "No", "Only if it is a string", "Only if it is a DOM node"], 1],
      ["Strict Mode in development runs which phase twice to help detect side-effect bugs?", ["The render phase and effect setup/cleanup", "The unmount phase", "The build phase", "The deployment phase"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Lifecycle Logging", description: "Convert a class component with componentDidMount and componentWillUnmount into a functional component using useEffect." },
      { title: "Assignment 2: Interval Cleanup", description: "Create a component that starts a setInterval on mount. Ensure you properly clear the interval on unmount so it stops logging when the component is hidden." }
    ],
    practiceTasks: [
      { task: "Understand Mounting, Updating, and Unmounting" },
      { task: "Map class lifecycle methods to useEffect patterns" }
    ]
  }
};

async function updateLevel2() {
  let updatedCount = 0;
  
  modules.forEach(mod => {
    if (level2Data[mod.title]) {
      const data = level2Data[mod.title];
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
  console.log("✅ Successfully injected high-quality content into " + updatedCount + " Level 2 modules!");
}

updateLevel2();

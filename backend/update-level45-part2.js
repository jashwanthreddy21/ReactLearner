import fs from 'fs';
import { modules } from './seeder.js';

const remainingData = {
  "Render Props": {
    detailedExplanation: `## Render Props (🔵 LEVEL 4 – ADVANCED REACT)

### What is a Render Prop?
The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

\`\`\`jsx
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
\`\`\`

### 👉 The Concept: Sharing Logic
Like Higher-Order Components (HOCs), Render Props were a very popular way to share stateful logic before React Hooks were introduced. 

Imagine you want to track the mouse position on the screen. Multiple components need this data. Instead of duplicating the \`onMouseMove\` logic, you create a \`<MouseTracker>\` component. But how does the \`<MouseTracker>\` tell the other components what the coordinates are?

You pass a function as a prop!

\`\`\`jsx
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {/* Instead of rendering something static, we call the render prop! */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage:
<MouseTracker render={(mouse) => (
  <p>The mouse is at: {mouse.x}, {mouse.y}</p>
)}/>
\`\`\`

### Modern Context
Today, **Custom Hooks** have largely replaced the need for Render Props. Tracking mouse position is much simpler with a \`useMousePosition()\` hook. However, you will still encounter Render Props in libraries like Formik or React Router (v5), and they remain a powerful pattern for component inversion of control.`,
    codeExample: `import React, { useState } from 'react';

// The component with the Render Prop
function MouseTracker({ render }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // We get the bounding rect to make the coordinates relative to the box
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      onMouseMove={handleMouseMove} 
      style={{ height: '200px', border: '2px dashed gray', position: 'relative' }}
    >
      {/* We pass the state to the function provided by the parent */}
      {render(coords)}
    </div>
  );
}

export default function RenderPropsDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Render Props Demo</h2>
      <p>Move your mouse inside the dashed box.</p>
      
      <MouseTracker render={(mouse) => (
        <div style={{
          position: 'absolute',
          left: mouse.x + 10,
          top: mouse.y + 10,
          background: 'coral',
          padding: '5px',
          borderRadius: '4px',
          pointerEvents: 'none' // Crucial so it doesn't block mouse movements
        }}>
          X: {Math.round(mouse.x)} | Y: {Math.round(mouse.y)}
        </div>
      )} />
    </div>
  );
}`,
    quizzes: [
      ["What is a Render Prop?", ["A prop that forces a component to re-render", "A technique for sharing code between React components using a prop whose value is a function", "A tool for rendering HTML strings", "A prop used exclusively for CSS"], 1],
      ["What is the primary purpose of Render Props?", ["To reuse stateful logic across multiple components", "To fetch data", "To style components", "To implement routing"], 0],
      ["In the Render Props pattern, what does the component with the render prop do instead of implementing its own render logic?", ["It crashes", "It calls the function passed to the prop and returns the result", "It renders an empty div", "It passes the props to the parent"], 1],
      ["Does the prop HAVE to be named `render`?", ["Yes, it is a strict requirement", "No, it is just a convention. You can name it anything, even `children`.", "Only in Class components", "Only in Functional components"], 1],
      ["If you pass a function as the `children` prop (e.g., `<Mouse>{(data) => <h1>{data}</h1>}</Mouse>`), is that still a Render Prop pattern?", ["Yes, it is the exact same pattern, just using the `children` prop instead of a prop named `render`", "No, that is illegal in React", "No, that is called a Higher Order Component", "Only if it is an array"], 0],
      ["What modern React feature has largely replaced the need for Render Props?", ["Context API", "React Router", "Custom Hooks", "Redux"], 2],
      ["What is a potential downside of using too many Render Props?", ["It causes 'Callback Hell' or deeply nested component trees (wrapper hell)", "It is too fast", "It deletes the Virtual DOM", "It requires TypeScript"], 0],
      ["Which popular form library famously uses the Render Props pattern?", ["Axios", "Formik", "Lodash", "Moment.js"], 1],
      ["In a `<MouseTracker render={(mouse) => <p>{mouse.x}</p>} />` component, who decides *what* is rendered on the screen?", ["The MouseTracker component", "The parent component passing the render prop", "The browser", "React automatically"], 1],
      ["If you pass an inline function to a render prop (as shown above), what performance issue might occur if the parent component re-renders?", ["The app crashes", "A new function reference is created on every render, which can cause the child to re-render unnecessarily if it uses React.memo", "The component becomes read-only", "Nothing happens"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Toggle Render Prop", description: "Create a Toggle component with a boolean state. Instead of rendering UI directly, pass the boolean and a toggle function to a render prop." }
    ],
    practiceTasks: [
      { task: "Understand the inversion of control provided by render props" },
      { task: "Pass a function returning JSX as a prop" }
    ]
  },

  "Compound Components": {
    detailedExplanation: `## Compound Components (🔵 LEVEL 4 – ADVANCED REACT)

### What are Compound Components?
Compound Components is an advanced React pattern where multiple, distinct components work together to form a cohesive single unit. They share implicit state behind the scenes.

Think of standard HTML elements like \`<select>\` and \`<option>\`. An \`<option>\` doesn't do much on its own, and a \`<select>\` is useless without options. They work *together*.

\`\`\`html
<select>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>
\`\`\`

### 👉 The Concept: Implicit State Sharing
If you want to build a custom accessible Dropdown, or an Accordion, or a Tab system, you could pass a massive configuration object as a prop:
\`<Tabs config={[{title: 'Tab 1', content: '...'}]} />\`

However, this is inflexible. What if you want one tab title to have an icon?

Compound components allow you to write declarative, flexible JSX while sharing state using the **Context API**.

\`\`\`jsx
// Highly flexible, declarative JSX!
<Tabs>
  <Tabs.List>
    <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
    <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel index={0}>Content 1</Tabs.Panel>
    <Tabs.Panel index={1}>Content 2</Tabs.Panel>
  </Tabs.Panels>
</Tabs>
\`\`\`

### How it works
1. The parent \`<Tabs>\` component holds the state (e.g., \`activeTabIndex\`) and provides it via Context.
2. The child components (\`<Tabs.Tab>\`, \`<Tabs.Panel>\`) consume that context to know whether they should be styled as active, or whether they should render their content at all.
3. The user gets total control over the layout (putting the tabs below the panels, adding extra divs, etc.) without breaking the logic!`,
    codeExample: `import React, { useState, createContext, useContext } from 'react';

// 1. Create the Context
const AccordionContext = createContext();

// 2. The Parent Component (Provides State)
function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggle }}>
      <div style={{ border: '1px solid gray', borderRadius: '4px', width: '300px' }}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

// 3. Child Components (Consume State)
Accordion.Item = function AccordionItem({ index, title, children }) {
  const { openIndex, toggle } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div style={{ borderBottom: '1px solid gray' }}>
      <button 
        onClick={() => toggle(index)}
        style={{ width: '100%', padding: '10px', textAlign: 'left', background: '#333', color: 'white', cursor: 'pointer', border: 'none' }}
      >
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div style={{ padding: '10px', background: '#1e1e1e' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default function CompoundComponentsDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Compound Components Demo</h2>
      
      {/* Declarative usage! The user can control the layout. */}
      <Accordion>
        <Accordion.Item index={0} title="Section 1">
          <p>Content for section 1...</p>
        </Accordion.Item>
        <Accordion.Item index={1} title="Section 2">
          <p>Content for section 2...</p>
        </Accordion.Item>
        <Accordion.Item index={2} title="Section 3">
          <p>Content for section 3...</p>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}`,
    quizzes: [
      ["What is the Compound Components pattern?", ["A way to combine multiple JavaScript files", "A pattern where multiple components work together to form a cohesive unit, sharing implicit state", "A tool for hashing passwords", "A CSS technique"], 1],
      ["What is a native HTML example of a compound component?", ["`<input />`", "`<img />`", "`<select>` and `<option>`", "`<br />`"], 2],
      ["What is the main benefit of using Compound Components over passing a massive 'configuration object' as a prop?", ["It runs much faster", "It provides the user with declarative, flexible control over the UI layout and rendering", "It uses less memory", "It requires no JavaScript"], 1],
      ["Which React API is heavily used behind the scenes to make Compound Components work?", ["Context API", "Fetch API", "React Router", "Redux"], 0],
      ["In an `<Accordion>` compound component, where does the state (e.g., which panel is open) typically live?", ["In the child `<Accordion.Item>`", "In the parent `<Accordion>` component", "In the global Window object", "In localStorage"], 1],
      ["How do the child components access the state held by the parent component?", ["By passing props infinitely", "By consuming the Context provided by the parent", "Using document.getElementById", "By guessing"], 1],
      ["Why do we often attach child components as properties of the parent (e.g., `Accordion.Item = function...`)?", ["It is required by React", "It is a convenient namespace pattern that clearly communicates that the child is meant to be used with the parent", "It improves performance", "It prevents memory leaks"], 1],
      ["If you want to render an extra `<div>` between `<Tabs.Tab>` elements in a compound component, will it break the logic?", ["Yes, always", "No, because Context allows state to bypass the extra DOM elements, giving you layout flexibility", "Only in class components", "It will crash the browser"], 1],
      ["What type of UI elements are best built using Compound Components?", ["A simple button", "A static paragraph of text", "Complex, multi-part interactive UIs like Tabs, Accordions, Dropdowns, and Modals", "Images"], 2],
      ["What hook does the child component use to access the shared state?", ["useState", "useContext", "useEffect", "useReducer"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Tabs Component", description: "Build a compound <Tabs> component using Context. It should have a Parent <Tabs>, a <Tabs.List> for the buttons, and <Tabs.Panels> for the content." }
    ],
    practiceTasks: [
      { task: "Understand implicit state sharing" },
      { task: "Use Context to link parent and child components" }
    ]
  },

  "API Caching": {
    detailedExplanation: `## API Caching (🔵 LEVEL 5 – DATA HANDLING)

### The Problem: Redundant Requests
When users navigate through an SPA (Single Page Application), components mount and unmount frequently. 

If a user visits the "Profile" page, goes to "Settings", and then clicks back to "Profile", the \`useEffect\` hook in the Profile component will fire again, making another network request to the server to fetch the exact same data.

This results in:
- Wasted bandwidth.
- Unnecessary load on the server.
- Slow, laggy UI experiences (the user sees a loading spinner every time they navigate).

### 👉 Concept: Caching
Caching is the practice of storing the result of an expensive operation (like an API request) so that subsequent requests for the same data can be served instantly from memory, rather than making another network call.

### Manual Caching
You can implement caching manually by lifting state up to a global Context or Redux store. If the data already exists in the store, the component skips the \`fetch\` call.

### Server State Libraries (The Modern Standard)
Writing manual caching logic is tedious and prone to bugs (cache invalidation is notoriously difficult). 

Modern React applications rely on dedicated "Server State" libraries, most notably **React Query (TanStack Query)** and **SWR**.

These libraries completely replace the traditional \`useEffect\` + \`fetch\` pattern.

\`\`\`jsx
import { useQuery } from '@tanstack/react-query';

function UserProfile() {
  // React Query handles the fetch, the caching, the loading state, and the error state!
  const { data, isLoading, error } = useQuery(['userProfile'], fetchUserData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile.</p>;
  return <div>{data.name}</div>;
}
\`\`\`

### Benefits of React Query / SWR
- **Instant Navigation**: Data is served from the cache instantly.
- **Background Fetching**: The library silently updates the cache in the background while the user views the stale data.
- **Deduplication**: If two components request the same API endpoint at the same time, only ONE network request is made.
- **Auto-Retries**: Automatically retries failed requests.`,
    codeExample: `import React, { useState } from 'react';

// A simple manual cache implementation
const simpleCache = {};

export default function ApiCachingDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs(prev => [...prev, msg]);

  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    
    // 1. Check if we already have the data in our cache
    if (simpleCache[url]) {
      addLog("✅ CACHE HIT: Serving data instantly from memory!");
      setData(simpleCache[url]);
      return; // Skip the network request completely!
    }

    // 2. If not in cache, make the network request
    addLog("🌐 CACHE MISS: Making network request...");
    setLoading(true);
    
    setTimeout(async () => { // Simulated delay
      try {
        const response = await fetch(url);
        const result = await response.json();
        
        // 3. Save the result to the cache for next time
        simpleCache[url] = result;
        
        setData(result);
        addLog("💾 Saved response to cache.");
      } catch (err) {
        addLog("❌ Error fetching data.");
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>API Caching Concepts</h2>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch User Data'}
      </button>

      <div style={{ marginTop: '20px', padding: '10px', background: '#222' }}>
        <h4>Activity Log:</h4>
        {logs.map((log, i) => <p key={i} style={{ margin: '5px 0', fontSize: '14px' }}>{log}</p>)}
      </div>
    </div>
  );
}`,
    quizzes: [
      ["What is the primary goal of API Caching?", ["To encrypt network data", "To store API responses in memory so subsequent requests for the same data are instant and don't require a network call", "To force the server to respond faster", "To style components"], 1],
      ["What problem does caching solve in a standard SPA?", ["Routing errors", "Redundant network requests and loading spinners when navigating between previously visited components", "Syntax errors", "Database crashes"], 1],
      ["If you rely solely on `useEffect` with an empty dependency array for fetching, what happens when you navigate away from the component and come back?", ["The data stays on the screen", "The component unmounts and remounts, triggering the `useEffect` and causing a fresh network request", "The component crashes", "React caches it automatically"], 1],
      ["What is notoriously the hardest part of implementing a cache manually?", ["Writing the fetch request", "Cache Invalidation (knowing when to delete stale data and fetch fresh data)", "Displaying the data", "Storing the data"], 1],
      ["Which of the following is a popular 'Server State' library for React that handles caching automatically?", ["Redux", "React Router", "React Query (TanStack Query)", "Axios"], 2],
      ["What is 'Deduplication' in the context of React Query/SWR?", ["Deleting duplicate files", "If multiple components request the same API endpoint at the exact same time, the library only makes ONE network request and shares the result with all components", "Multiplying data", "A CSS trick"], 1],
      ["What does the 'Stale-While-Revalidate' (SWR) caching strategy do?", ["It deletes stale data immediately", "It returns stale data instantly from the cache to show the UI, while silently fetching fresh data in the background", "It prevents any background requests", "It throws an error if data is stale"], 1],
      ["Why are traditional state management libraries like Redux no longer recommended for storing API data?", ["Because Redux is dead", "Because Server State (API data) is fundamentally different from Client State (UI toggles). Server State requires caching, deduplication, and background updates, which Redux doesn't handle natively.", "Because Redux is too fast", "Because it uses too much memory"], 1],
      ["If you implement a manual cache using a global Javascript object (e.g., `const cache = {}`), what happens when the user hard-refreshes the browser?", ["The cache persists", "The cache is completely wiped out because it was stored in memory", "The server crashes", "It is saved to a file"], 1],
      ["Which feature is typically provided out-of-the-box by libraries like React Query?", ["Auto-retrying failed requests", "Pagination and Infinite Scroll caching", "Background refetching on window focus", "All of the above"], 3]
    ],
    assignments: [
      { title: "Assignment 1: Caching Theory", description: "Write a short paragraph explaining the difference between 'Client State' (e.g., is a modal open) and 'Server State' (e.g., a list of users from a database)." }
    ],
    practiceTasks: [
      { task: "Understand the Stale-While-Revalidate concept" },
      { task: "Identify when redundant API calls are being made" }
    ]
  }
};

async function updateRemaining() {
  let updatedCount = 0;
  
  modules.forEach(mod => {
    if (remainingData[mod.title]) {
      const data = remainingData[mod.title];
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
  console.log("✅ Successfully injected remaining " + updatedCount + " Level 4 & 5 modules!");
}

updateRemaining();

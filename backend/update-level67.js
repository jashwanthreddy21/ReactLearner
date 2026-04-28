import fs from 'fs';
import { modules } from './seeder.js';

const level67Data = {
  "State Management": {
    detailedExplanation: "## State Management (🔴 LEVEL 6 – STATE MANAGEMENT)\n\n### The Challenge of Scale\nAs your React application grows from a simple widget to a massive platform, the way you manage data must evolve.\n\nIn a small app, using `useState` in a parent component and passing it down via props works perfectly. However, what happens when:\n- A Sidebar component needs the user's avatar.\n- A Header component needs the user's notification count.\n- A Settings page needs the user's email.\n- A Checkout page needs the user's cart items.\n\nIf all of these components are located in entirely different branches of your component tree, managing that data using only `useState` and \"Prop Drilling\" becomes an unmaintainable nightmare.\n\n### 👉 Concept: Global State\nGlobal State Management refers to storing data in a centralized location that is accessible from *anywhere* in your application, without needing to pass props.\n\n### The Evolution of State Management\n1. **Prop Drilling:** Passing state down through multiple layers manually. (Hard to maintain).\n2. **Context API:** React's built-in solution for global state. Great for simple, rarely-changing data (like themes or basic auth). However, putting highly dynamic data (like a chat feed) into Context can cause severe performance issues because it forces every consuming component to re-render whenever the Context updates.\n3. **External State Libraries:** Dedicated libraries that sit outside the React component tree. Components subscribe only to the specific piece of data they need. If that data changes, only the subscribed component re-renders.\n\n### Choosing the Right Tool\nYou don't always need an external library!\n- **Local UI state** (e.g., is a dropdown open?): Use `useState`.\n- **Global UI state** (e.g., light/dark mode): Use **Context API**.\n- **Server state** (e.g., fetched user profile): Use **React Query** or **SWR**.\n- **Complex, shared client state** (e.g., a massive shopping cart or video editor timeline): Use **Zustand**, **Redux Toolkit**, or **Jotai**.",
    codeExample: `import React, { useState } from 'react';

// This is a conceptual demonstration of WHY we need global state.
// Notice how the 'cartCount' state has to be lifted to the very top, 
// just so both the Header and the ProductList can access it.

function Header({ cartCount }) {
  return (
    <div style={{ padding: '10px', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h3>My Store</h3>
      <h4>🛒 Cart ({cartCount})</h4>
    </div>
  );
}

function ProductList({ onAddToCart }) {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>
        <p>Awesome Shoes</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default function StateManagementDemo() {
  // The state lives at the root of the app
  const [cartCount, setCartCount] = useState(0);

  return (
    <div style={{ border: '2px solid #61dafb' }}>
      <p style={{ textAlign: 'center', color: '#61dafb' }}>
        In this simple app, lifting state works. But imagine if Header and ProductList were separated by 10 layers of components!
      </p>
      
      {/* We have to drill the state down as props */}
      <Header cartCount={cartCount} />
      <ProductList onAddToCart={() => setCartCount(c => c + 1)} />
    </div>
  );
}`,
    quizzes: [
      ["What does 'Global State' mean?", ["State that is stored on a global server", "State that is accessible from anywhere in your application, without passing props", "State that is shared between different users", "State that cannot be changed"], 1],
      ["Why does 'Prop Drilling' become unmaintainable in large apps?", ["It slows down the network", "It requires passing data through many intermediate components that don't need it, making code messy and tightly coupled", "It uses too much CSS", "It causes syntax errors"], 1],
      ["Is the Context API suitable for complex, rapidly changing global state (like a stock ticker)?", ["Yes, it is built exactly for that", "No, Context causes all consuming components to re-render when the value changes, which can lead to severe performance issues with rapidly changing data", "Yes, but only in Next.js", "No, Context cannot hold dynamic data"], 1],
      ["Where should local UI state (like whether a modal is open or closed) be stored?", ["In Redux", "In localStorage", "In the component's own `useState`", "In an external database"], 2],
      ["If you fetch a list of users from an API, what is the modern recommended way to store and cache that 'Server State'?", ["Using `useState` and `useEffect`", "Using Redux", "Using a dedicated server state library like React Query or SWR", "Using the Context API"], 2],
      ["Which of the following is an example of 'Client State' that might require a library like Redux or Zustand?", ["Data from a REST API", "A massive, interactive shopping cart or complex multi-step wizard form", "The current URL", "The user's IP address"], 1],
      ["Do you always need Redux for a React application?", ["Yes, it is mandatory", "No, many applications can be built entirely with `useState`, Context API, and React Query", "Only for mobile apps", "Yes, otherwise state is lost"], 1],
      ["What is a major benefit of external state libraries (like Zustand or Redux) over Context?", ["They are built into React", "Components can subscribe to specific slices of state, preventing unnecessary re-renders of the whole tree", "They don't use JavaScript", "They automatically write tests"], 1],
      ["If a deeply nested `Avatar` component needs the user's profile picture, which approach is best?", ["Prop drill it from the `App` component", "Fetch it directly inside the `Avatar` component", "Consume it from a global Auth Context or state store", "Hardcode it"], 2],
      ["What happens to React state when the browser tab is completely closed?", ["It is saved permanently", "It is wiped out entirely from memory", "It is sent to the server", "It is cached in cookies"], 1]
    ],
    assignments: [
      { title: "Assignment 1: State Planning", description: "Write down three examples of data that should be Local State, and three examples of data that should be Global State in a large e-commerce app." }
    ],
    practiceTasks: [
      { task: "Understand the difference between Local, Global, and Server state" },
      { task: "Identify the limitations of Prop Drilling and Context API" }
    ]
  },

  "Redux Toolkit": {
    detailedExplanation: "## Redux Toolkit (🔴 LEVEL 6 – STATE MANAGEMENT)\n\n### What is Redux?\nRedux is the most famous state management library in the React ecosystem. It follows a strict unidirectional data flow pattern.\n\nIn Redux, your entire application's state is stored in a single, centralized object tree called the **Store**. Components cannot modify the Store directly. Instead, they must **dispatch** an **action**. A **reducer** function then takes that action and calculates the new state.\n\n### The Problem with Old Redux\nHistorically, Redux was criticized for being heavily verbose. It required writing hundreds of lines of \"boilerplate\" code (action types, action creators, massive switch statements, and immutable spread operators) just to update a single value.\n\n### 👉 Enter Redux Toolkit (RTK)\nRedux Toolkit is the official, modern, and recommended way to write Redux logic. It eliminates the boilerplate and includes tools that simplify development.\n\n### Key Concepts in RTK:\n\n**1. Slices (createSlice)**\nA \"slice\" represents a specific piece of your global state (e.g., the 'cart' slice or the 'user' slice). RTK's `createSlice` function automatically generates the action creators and reducers for you!\n\n**2. Immer (Built-in Mutability)**\nIn standard React and old Redux, you MUST update state immutably (using spread operators `...`). \nRTK uses a library called **Immer** under the hood. This means **you can write code that *looks* like it is mutating the state directly**, and Immer safely translates it into an immutable update!\n\n```javascript\nimport { createSlice } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => {\n      // Look! It seems like we are mutating the state directly!\n      // Thanks to RTK and Immer, this is perfectly safe and correct.\n      state.value += 1; \n    }\n  }\n});\n\nexport const { increment } = counterSlice.actions;\nexport default counterSlice.reducer;\n```\n\n**3. The Hooks (useSelector and useDispatch)**\n- `useSelector`: Allows a component to read data from the Redux store. The component will automatically re-render only when the specific data it selected changes.\n- `useDispatch`: Gives the component the ability to dispatch actions to update the store.\n\n```jsx\nimport { useSelector, useDispatch } from 'react-redux';\nimport { increment } from './counterSlice';\n\nfunction Counter() {\n  const count = useSelector((state) => state.counter.value);\n  const dispatch = useDispatch();\n\n  return <button onClick={() => dispatch(increment())}>{count}</button>;\n}\n```",
    codeExample: `// NOTE: This is a conceptual example. 
// In a real environment, you must install @reduxjs/toolkit and react-redux.

import React, { useState } from 'react';

// Simulating the RTK Slice logic
const simulateReduxSlice = {
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Immer handles this mutation safely!
    }
  }
};

export default function RTKDemo() {
  // Simulating the Redux Store
  const [storeItems, setStoreItems] = useState([]);

  // Simulating useDispatch
  const dispatchAddItem = (item) => {
    setStoreItems(prev => [...prev, item]); // Standard immutable update
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Redux Toolkit Concepts</h2>
      <p>Redux Toolkit eliminates boilerplate. You define "Slices" which generate actions and reducers automatically.</p>
      
      <div style={{ background: '#222', padding: '15px', borderRadius: '8px' }}>
        <h4>Global Store: Cart Slice</h4>
        <p>Items in Cart: <strong>{storeItems.length}</strong></p>
        <ul>
          {storeItems.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        {/* Simulating a component dispatching an action */}
        <button onClick={() => dispatchAddItem('Laptop 💻')}>Dispatch 'addItem' Action</button>
      </div>
    </div>
  );
}`,
    quizzes: [
      ["What is Redux?", ["A database", "A predictable state container for JavaScript apps", "A React Router plugin", "A CSS framework"], 1],
      ["In Redux, components cannot change the state directly. What must they do instead?", ["Call `setState()`", "Use `document.getElementById`", "Dispatch an action", "Emit an event"], 2],
      ["What is a Reducer?", ["A function that fetches data from an API", "A pure function that takes the current state and an action, and returns the new state", "A tool to compress images", "A component that renders lists"], 1],
      ["Why was older Redux heavily criticized?", ["It was too slow", "It required massive amounts of verbose 'boilerplate' code", "It didn't work with React", "It was insecure"], 1],
      ["What is Redux Toolkit (RTK)?", ["A separate paid tool", "The official, modern, and recommended toolset for writing Redux logic efficiently", "A UI library", "A database engine"], 1],
      ["What does `createSlice` do in RTK?", ["It cuts strings in half", "It accepts an initial state and an object of reducer functions, and automatically generates action creators and action types", "It creates a new React component", "It deletes data from the store"], 1],
      ["In standard React, mutating state directly (e.g., `state.value = 5`) is illegal. Why is it allowed inside RTK `createSlice` reducers?", ["Because Redux ignores the rules", "Because RTK uses a library called Immer under the hood, which translates the mutating syntax into safe, immutable updates", "Because it is a class component", "It is actually still illegal in RTK"], 1],
      ["Which Hook is used to read data from the Redux store?", ["useContext", "useState", "useSelector", "useStore"], 2],
      ["Which Hook is used to trigger a state change in Redux?", ["useDispatch", "useAction", "useReducer", "useTrigger"], 0],
      ["What happens when the data selected by `useSelector` changes?", ["The component must be manually updated", "The component automatically re-renders with the new data", "The app crashes", "The Redux store resets"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Slice Creation", description: "Write out the code for a `themeSlice` using RTK's createSlice. It should have an initial state of 'light' and a reducer called `toggleTheme`." }
    ],
    practiceTasks: [
      { task: "Understand the concept of a Redux Store, Actions, and Reducers" },
      { task: "Learn how createSlice simplifies Redux boilerplate" }
    ]
  },

  "Middleware": {
    detailedExplanation: "## Middleware (🔴 LEVEL 6 – STATE MANAGEMENT)\n\n### What is Middleware?\nIn Redux, when a component dispatches an action, it goes straight to the Reducer to update the state.\nBut what if you want to intercept that action *before* it reaches the Reducer? \n\nFor example, what if you want to log every action to the console? Or what if the action requires fetching data from a server (which takes time) before the state can be updated?\n\n**Middleware** provides a third-party extension point between dispatching an action and the moment it reaches the reducer. \n\n### 👉 Concept: Handling Asynchronous Actions\nReducers MUST be pure functions. This means they cannot contain side effects like API calls or `setTimeout`. If you want to fetch data and store it in Redux, you cannot do it inside a Reducer.\n\nYou must handle the async logic *before* the data reaches the reducer. This is where middleware shines.\n\n### Redux Thunk\nThe most common middleware for async logic in Redux is called **Redux Thunk** (which is built into Redux Toolkit by default).\n\nA \"Thunk\" is a special type of action creator that returns a *function* instead of a standard action object. Because it's a function, it can perform async operations!\n\n```javascript\nimport { createAsyncThunk } from '@reduxjs/toolkit';\n\n// 1. Create the async thunk\nexport const fetchUsers = createAsyncThunk(\n  'users/fetchUsers',\n  async () => {\n    const response = await fetch('https://api.example.com/users');\n    return response.json(); // The returned data becomes the payload\n  }\n);\n\n// 2. Handle the results in your slice using 'extraReducers'\nconst usersSlice = createSlice({\n  name: 'users',\n  initialState: { entities: [], loading: false },\n  reducers: {},\n  extraReducers: (builder) => {\n    // RTK automatically dispatches 'pending', 'fulfilled', and 'rejected' actions!\n    builder\n      .addCase(fetchUsers.pending, (state) => {\n        state.loading = true;\n      })\n      .addCase(fetchUsers.fulfilled, (state, action) => {\n        state.loading = false;\n        state.entities = action.payload;\n      });\n  }\n});\n```\n\nWith `createAsyncThunk`, Redux Toolkit automatically handles the loading, success, and error states for your API calls!",
    codeExample: `import React, { useState } from 'react';

export default function MiddlewareDemo() {
  const [logs, setLogs] = useState([]);

  const logAction = (msg) => setLogs(prev => [...prev, msg]);

  // Simulating a Thunk (Async Middleware Action)
  const dispatchAsyncThunk = () => {
    logAction("1. UI Dispatched 'fetchData' Thunk.");
    logAction("2. Middleware intercepts it! Starting API call...");
    logAction("3. Middleware dispatches 'fetchData/pending'.");
    
    // Simulate API delay
    setTimeout(() => {
      logAction("4. API call successful! Data received.");
      logAction("5. Middleware dispatches 'fetchData/fulfilled' with payload.");
      logAction("6. Reducer receives payload and updates Global Store.");
    }, 2000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Middleware & Thunks Demo</h2>
      <p>Reducers must be pure. Middleware handles the messy async API calls before data reaches the reducer.</p>
      
      <button onClick={dispatchAsyncThunk}>Dispatch Async Action (Thunk)</button>

      <div style={{ marginTop: '20px', background: '#111', padding: '15px', fontFamily: 'monospace', color: '#00ff00' }}>
        <h4>Redux Action Log:</h4>
        {logs.length === 0 ? <p>Waiting for actions...</p> : logs.map((log, i) => <p key={i}>{log}</p>)}
      </div>
    </div>
  );
}`,
    quizzes: [
      ["What is Middleware in the context of Redux?", ["A backend server", "Code that intercepts actions between the dispatch and the reducer", "A CSS processor", "A database engine"], 1],
      ["Why can't you put API calls directly inside a Redux Reducer?", ["Because Reducers must be pure, synchronous functions with no side effects", "Because Redux cannot connect to the internet", "Because API calls are too fast", "Because Reducers only accept strings"], 0],
      ["What is a 'Thunk'?", ["A sound effect", "A middleware that allows you to write action creators that return a function (which can be async) instead of an action object", "A type of Redux reducer", "An error thrown by the store"], 1],
      ["Is Redux Thunk included in Redux Toolkit by default?", ["Yes", "No, you must install it separately", "Only in development mode", "Only for Next.js"], 0],
      ["Which RTK function simplifies writing async thunks for API calls?", ["createAsyncReducer", "createAsyncThunk", "createFetch", "asyncDispatch"], 1],
      ["When using `createAsyncThunk`, what three action types does RTK automatically dispatch for you?", ["start, stop, error", "pending, fulfilled, rejected", "loading, success, fail", "try, catch, finally"], 1],
      ["Where do you handle the `pending`, `fulfilled`, and `rejected` actions generated by a thunk inside a `createSlice`?", ["In the standard `reducers` object", "In the `extraReducers` field", "Inside the component", "In the Context API"], 1],
      ["What is a common use case for standard (non-thunk) custom middleware?", ["Styling components", "Logging every action to the console for debugging", "Rendering UI elements", "Validating HTML"], 1],
      ["When an async thunk succeeds, where does the returned data go?", ["It is appended to the DOM", "It becomes the `action.payload` of the `fulfilled` action", "It is stored in localStorage", "It is deleted"], 1],
      ["Does Redux Toolkit require you to write a massive switch statement to handle thunk actions?", ["Yes", "No, the builder pattern in `extraReducers` eliminates the need for switch statements", "Only for rejected actions", "Only in TypeScript"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Thunk Workflow", description: "Write down the exact sequence of events (actions dispatched) when a user clicks a button that triggers a createAsyncThunk." }
    ],
    practiceTasks: [
      { task: "Understand why reducers must be pure functions" },
      { task: "Learn how createAsyncThunk automatically handles loading/success/error states" }
    ]
  },

  "Authentication Basics": {
    detailedExplanation: "## Authentication Basics (🔴 LEVEL 7 – AUTHENTICATION)\n\n### What is Authentication?\nAuthentication (AuthN) is the process of verifying *who* a user is (e.g., logging in). \nAuthorization (AuthZ) is the process of verifying *what* a user is allowed to do (e.g., admin vs regular user).\n\n### The Challenge with React (SPAs)\nIn traditional web apps, the server handles everything using sessions and cookies. When you log in, the server gives your browser a session cookie. Every time you request a new HTML page, the cookie is sent automatically.\n\nReact Single Page Applications (SPAs) are different. Because the frontend (React) and the backend (API) are completely decoupled, they communicate via JSON requests. We need a way to prove our identity to the API on every single request.\n\n### 👉 The Authentication Flow\n1. **Login:** The user types their email and password into a React form.\n2. **Request:** React sends a POST request with those credentials to the backend API.\n3. **Verification:** The backend verifies the password against the database.\n4. **Token Generation:** The backend generates a secure \"Token\" (like a wristband at a concert) and sends it back to React.\n5. **Storage:** React saves this Token (usually in localStorage or an HttpOnly cookie).\n6. **Subsequent Requests:** Every time React asks the server for private data (like user settings), it attaches the Token to the request headers.\n7. **Logout:** React simply deletes the Token from storage.\n\n### Storing Auth State in React\nYour React app needs to know if the user is logged in so it can update the UI (e.g., show \"Logout\" instead of \"Login\", or hide the dashboard).\n\nThis is the perfect use case for **Global State**! \nTypically, you create an `AuthContext` or a Zustand/Redux store that holds an `isAuthenticated` boolean and a `user` object.",
    codeExample: `import React, { useState } from 'react';

export default function AuthFlowDemo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs(prev => [...prev, msg]);

  const handleLogin = (e) => {
    e.preventDefault();
    addLog(\`1. Sent POST request with credentials for \${username}...\`);
    
    setTimeout(() => {
      if (password === "password123") {
        addLog("2. Server verified password and returned a secure TOKEN.");
        addLog("3. Saving TOKEN to localStorage.");
        setIsAuthenticated(true);
      } else {
        addLog("❌ Server rejected credentials.");
      }
    }, 1000);
  };

  const handleLogout = () => {
    addLog("🔴 Deleting TOKEN from localStorage.");
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', background: '#1a1a2e', borderRadius: '8px' }}>
      <h2>Auth Flow Demo</h2>
      
      {!isAuthenticated ? (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          <input type="password" placeholder="Try 'password123'" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Log In</button>
        </form>
      ) : (
        <div style={{ background: '#0f3460', padding: '15px', borderRadius: '5px' }}>
          <h3>Welcome, {username}!</h3>
          <p>You have the access token.</p>
          <button onClick={handleLogout} style={{ background: '#e94560' }}>Log Out</button>
        </div>
      )}

      <div style={{ marginTop: '20px', fontSize: '12px', color: '#00ffcc' }}>
        {logs.map((l, i) => <p key={i}>{l}</p>)}
      </div>
    </div>
  );
}`,
    quizzes: [
      ["What is the difference between Authentication and Authorization?", ["Authentication verifies WHO you are; Authorization verifies WHAT you are allowed to do", "They are the exact same thing", "Authentication is for servers, Authorization is for clients", "Authentication uses CSS, Authorization uses JS"], 0],
      ["Why do React SPAs need a different authentication approach than traditional websites?", ["Because React cannot use passwords", "Because the frontend and backend are decoupled and communicate via stateless API requests, rather than relying solely on server-rendered session cookies", "Because React is faster", "Because APIs don't support security"], 1],
      ["In a modern SPA flow, what does the server send back after a successful login?", ["An HTML page", "A secure Token", "A JavaScript function", "A database table"], 1],
      ["What is the purpose of the Token?", ["It acts like a digital wristband, proving to the API that the user is authenticated on subsequent requests", "It styles the application", "It encrypts the database", "It speeds up rendering"], 0],
      ["Where is Auth State (e.g., `isAuthenticated: true`) typically stored in a React application?", ["In a local `useState` inside the login form", "In a Global State mechanism (like Context API or Redux) so the whole app knows the user's status", "In the CSS file", "In the `package.json`"], 1],
      ["If a user refreshes the page, React state is wiped. How do you keep the user logged in?", ["It is impossible", "By storing the Token in `localStorage` (or an HttpOnly cookie) and checking it when the app first loads", "By asking them to login again on every refresh", "By saving it to `document.title`"], 1],
      ["How does React 'log out' a user?", ["By sending a massive payload to the server", "By simply deleting the Token from storage and updating the global Auth state to false", "By crashing the app", "By closing the browser window"], 1],
      ["What happens if a user tries to fetch private data but doesn't attach the Token to the request?", ["The server returns the data anyway", "The server responds with a 401 Unauthorized or 403 Forbidden error", "The server deletes the user's account", "React automatically generates a new token"], 1],
      ["When making a request to a protected API endpoint, where is the Token usually placed?", ["In the URL query string", "In the HTTP Request Headers (e.g., `Authorization: Bearer <token>`)", "In the `body` of a GET request", "In the CSS"], 1],
      ["What is the main security risk of storing tokens in `localStorage`?", ["It is too slow", "It is vulnerable to XSS (Cross-Site Scripting) attacks, meaning malicious JavaScript can steal the token", "It deletes itself randomly", "It only holds 10 characters"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Global Auth State", description: "Create an AuthContext that holds an 'isAuthenticated' boolean. Provide it at the root of your app. Create a Navbar component that reads this context to show either a 'Login' or 'Logout' button." }
    ],
    practiceTasks: [
      { task: "Understand the Token-based authentication flow" },
      { task: "Manage global authentication state" }
    ]
  },

  "JSON Web Token": {
    detailedExplanation: "## JSON Web Token (JWT) (🔴 LEVEL 7 – AUTHENTICATION)\n\n### What is a JWT?\nJSON Web Token (JWT, pronounced \"jot\") is an open standard that defines a compact, self-contained way for securely transmitting information between parties as a JSON object.\n\nIn React applications, JWT is the industry standard format for the \"Tokens\" used in authentication.\n\n### 👉 The Anatomy of a JWT\nA JWT is a long string divided into three parts, separated by dots (`.`):\n`xxxxx.yyyyy.zzzzz`\n\n1. **Header (xxxxx):** Contains metadata about the token (e.g., the algorithm used to sign it, like HMAC SHA256 or RSA).\n2. **Payload (yyyyy):** Contains the actual data (called \"claims\"). For example, it might contain the user's ID, username, role, and the token's expiration timestamp (`exp`).\n3. **Signature (zzzzz):** This is the magic part. The server takes the Header, the Payload, and a **Secret Key** (that only the server knows) and encrypts them to create the signature.\n\n### Why is the Signature important?\nThe Header and Payload are just Base64 encoded—they are **NOT encrypted**. Anyone can decode a JWT and read the payload data. \n\nHowever, because of the Signature, **nobody can modify the payload**. If a hacker decodes the token, changes their `role` from \"user\" to \"admin\", and sends it back to the server, the server will check the signature against its Secret Key. The signature won't match the altered payload, and the server will reject the token!\n\n### How React uses JWTs\n1. The user logs in. The backend generates a JWT and sends it to React.\n2. React saves the JWT in `localStorage`.\n3. When React needs to fetch protected data, it attaches the JWT to the Axios or Fetch headers:\n```javascript\naxios.get('/api/protected', {\n  headers: { Authorization: `Bearer \${token}` }\n});\n```\n4. The server receives the request, verifies the JWT signature using its Secret Key, and grants access.\n\n### Decoding in React\nBecause the payload isn't encrypted, your React app can decode the JWT to read the user's information (like their name or ID) without needing to make an extra API request! (Use a library like `jwt-decode`).",
    codeExample: `// Conceptual representation of JWT decoding
import React, { useState } from 'react';

export default function JWTDemo() {
  const [tokenInfo, setTokenInfo] = useState(null);

  const simulateJWTGeneration = () => {
    // 1. A simulated Base64 encoded payload
    const payload = {
      sub: "1234567890",
      name: "John Doe",
      role: "admin",
      iat: 1516239022
    };
    
    // In reality, this string is base64 encoded by the server
    setTokenInfo(payload);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #444' }}>
      <h2>JWT Concept Demo</h2>
      <p>A JWT payload contains data (claims) that is readable by the client, but verified by the server's signature.</p>
      
      <button onClick={simulateJWTGeneration}>Simulate Decoding a JWT</button>

      {tokenInfo && (
        <div style={{ marginTop: '20px', background: '#222', padding: '15px' }}>
          <h4>Decoded Payload Data:</h4>
          <ul>
            <li>User ID (sub): <strong>{tokenInfo.sub}</strong></li>
            <li>Name: <strong>{tokenInfo.name}</strong></li>
            <li>Role: <strong style={{ color: 'coral' }}>{tokenInfo.role}</strong></li>
          </ul>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '10px' }}>
            * Note: Because the client can read this, NEVER put passwords inside a JWT payload!
          </p>
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["What does JWT stand for?", ["Java Web Token", "JSON Web Token", "JavaScript Window Tracker", "JSON Wireless Transmission"], 1],
      ["How many parts make up a standard JWT?", ["One", "Two", "Three (Header, Payload, Signature)", "Four"], 2],
      ["What separates the three parts of a JWT?", ["Commas (,)", "Dashes (-)", "Dots (.)", "Slashes (/)"], 2],
      ["Is the payload of a standard JWT encrypted?", ["Yes, it is highly encrypted military-grade security", "No, it is merely Base64 encoded and can be easily decoded and read by anyone", "Only if sent over HTTP", "Only the username is encrypted"], 1],
      ["Should you put sensitive information like a user's password inside a JWT payload?", ["Yes, it is safe", "No, because anyone who intercepts the token can decode and read the payload", "Yes, but only if it's hashed", "It doesn't matter"], 1],
      ["If the payload is readable, how is a JWT secure?", ["The server trusts all JSONs", "The server generates a Signature using a Secret Key. If the payload is tampered with, the signature becomes invalid and the server rejects it.", "It uses a blockchain", "It is locked to an IP address"], 1],
      ["How does a React application typically send a JWT to the backend for protected requests?", ["In the `Authorization` HTTP header, prefixed with `Bearer `", "In the URL query string", "In the POST body of every request", "Via an alert box"], 0],
      ["What does it mean if a JWT is 'self-contained'?", ["It deletes itself after use", "It contains all the necessary information about the user, so the server doesn't need to query the database to verify their identity", "It is stored in a self-closing HTML tag", "It runs its own code"], 1],
      ["How can a React app access the user's name if it is stored in the JWT payload?", ["It must ask the server", "It can decode the payload part of the token directly in the browser (e.g., using the `jwt-decode` library) to read the name", "It must guess it", "It is impossible"], 1],
      ["What does the `exp` claim in a JWT payload represent?", ["Experience points", "Expiration time (when the token becomes invalid)", "Export format", "Expected origin"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Understanding JWTs", description: "Go to jwt.io. Paste in the default token provided there. Look at the decoded payload. Change the name in the payload and observe what happens to the signature." }
    ],
    practiceTasks: [
      { task: "Understand the structure of a JWT (Header, Payload, Signature)" },
      { task: "Learn how to attach a JWT to an Authorization header" }
    ]
  },

  "Protected Routes": {
    detailedExplanation: "## Protected Routes (🔴 LEVEL 7 – AUTHENTICATION)\n\n### What is a Protected Route?\nIn a typical application, some pages are public (Home, Login, Register) and some are private (Dashboard, Settings, Profile). \n\nA **Protected Route** (or Private Route) is a React Router pattern that restricts access to certain routes. If a user tries to access a protected route without being authenticated, they are automatically redirected to the Login page.\n\n### 👉 Concept: Wrapper Components\nThe standard way to implement a protected route in React Router v6 is to create a wrapper component that checks the global authentication state.\n\nIf the user is authenticated, it renders the `<Outlet />` (which displays the child routes).\nIf the user is NOT authenticated, it renders a `<Navigate />` component to redirect them.\n\n### Example Implementation\n\n**1. Create the Wrapper Component**\n```jsx\nimport { Navigate, Outlet } from 'react-router-dom';\n// Assume useAuth is a custom hook reading from your AuthContext\nimport { useAuth } from './AuthContext';\n\nconst ProtectedRoute = () => {\n  const { isAuthenticated } = useAuth();\n\n  // If not logged in, redirect to login page and replace the history stack\n  if (!isAuthenticated) {\n    return <Navigate to=\"/login\" replace />;\n  }\n\n  // If logged in, render the child routes!\n  return <Outlet />;\n};\nexport default ProtectedRoute;\n```\n\n**2. Apply it in your Router**\nYou use Nested Routing to wrap all your private pages inside the `ProtectedRoute`!\n\n```jsx\n<Routes>\n  {/* Public Routes */}\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/login\" element={<Login />} />\n\n  {/* Protected Routes Wrapper */}\n  <Route element={<ProtectedRoute />}>\n    <Route path=\"/dashboard\" element={<Dashboard />} />\n    <Route path=\"/settings\" element={<Settings />} />\n  </Route>\n</Routes>\n```\n\n### Why use `replace` in Navigate?\nUsing `<Navigate to=\"/login\" replace />` replaces the current entry in the browser's history stack. This ensures that after the user logs in, if they click the browser's \"Back\" button, they won't be redirected back to the intermediate redirection point (which would just bounce them forward again).",
    codeExample: `import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';

// A mock authentication context/hook
function useAuth(authState) {
  return { isAuthenticated: authState };
}

// 1. The Protected Route Wrapper
const ProtectedRoute = ({ authState }) => {
  const { isAuthenticated } = useAuth(authState);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default function ProtectedRoutesDemo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h2>Protected Routes Demo</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
            {isAuthenticated ? 'Log Out' : 'Log In as User'}
          </button>
          <span style={{ marginLeft: '15px' }}>Status: {isAuthenticated ? '🟢 Authenticated' : '🔴 Unauthenticated'}</span>
        </div>

        <nav style={{ marginBottom: '20px', borderBottom: '1px solid gray', paddingBottom: '10px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home (Public)</Link>
          <Link to="/login" style={{ marginRight: '10px' }}>Login (Public)</Link>
          <Link to="/dashboard" style={{ color: 'coral' }}>Dashboard (Protected!)</Link>
        </nav>

        <div style={{ padding: '20px', border: '1px dashed #666' }}>
          <Routes>
            <Route path="/" element={<h3>🏠 Home Page</h3>} />
            <Route path="/login" element={<h3>🔑 Login Page</h3>} />

            {/* The Protected Wrapper */}
            <Route element={<ProtectedRoute authState={isAuthenticated} />}>
              <Route path="/dashboard" element={<h3 style={{ color: 'coral' }}>🛡️ Secret Dashboard Data!</h3>} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}`,
    quizzes: [
      ["What is a Protected Route?", ["A route that uses HTTPS", "A route configuration that checks if a user is authenticated before allowing access to a specific component", "A route hidden from Google SEO", "A route that requires a password typed in the URL"], 1],
      ["What is the standard approach to creating Protected Routes in React Router v6?", ["Wrapping private routes inside a layout component that checks auth state and renders an `<Outlet />` or a `<Navigate />`", "Using `window.location.href` to redirect", "Writing `if(not_logged_in)` inside every single component", "Editing the server configuration"], 0],
      ["What component does React Router provide to perform declarative redirects?", ["<Redirect /> (in v5) or <Navigate /> (in v6)", "<RouteRedirect />", "<Link />", "<Push />"], 0],
      ["If the user is authenticated, what must the ProtectedRoute wrapper component return to render the requested page?", ["return true", "return <Outlet />", "return props.children", "Both B and C are valid depending on the implementation pattern"], 3],
      ["What does the `replace` prop do on the `<Navigate />` component?", ["It replaces the entire HTML document", "It replaces the current entry in the browser's history stack, so the user doesn't get stuck in a 'back-button loop'", "It replaces the URL with a random string", "It replaces the component with a string"], 1],
      ["Can you have multiple different types of protected routes? (e.g., one for logged-in users, one for Admins only)", ["Yes, you can create an `<AdminRoute>` wrapper that checks if `user.role === 'admin'`", "No, React Router only supports one type of protection", "Yes, but only in Redux", "No, authorization must happen on the server only"], 0],
      ["Why should you rely on an Auth Context (or global state) inside the Protected Route rather than just checking `localStorage.getItem('token')` directly?", ["Because localStorage is too slow", "Because changing localStorage doesn't trigger a React re-render. Reading from Context ensures the route reacts immediately if the user logs out.", "Because localStorage is banned in React", "You should actually check localStorage directly"], 1],
      ["If a user is NOT authenticated and tries to visit `/dashboard`, what is the expected behavior?", ["They see a blank screen", "They are redirected to the `/login` route", "The browser throws a 404 error", "They see the dashboard but without data"], 1],
      ["Is client-side routing protection (Protected Routes) enough to keep your app completely secure?", ["Yes, nobody can bypass React Router", "No, a savvy user can manipulate JS to bypass the client route. True security ALWAYS requires the backend API to verify the token before sending sensitive data.", "Yes, as long as it is obfuscated", "Only if you use Redux"], 1],
      ["What happens if the auth state is still 'loading' (e.g., verifying the token with the server) when the Protected Route renders?", ["It redirects to login immediately", "It should return a loading spinner or skeleton UI until the auth status is definitively known (true or false)", "It crashes", "It renders the protected content anyway"], 1]
    ],
    assignments: [
      { title: "Assignment 1: RequireAuth Wrapper", description: "Create a RequireAuth component. It should take children as props. If a hardcoded 'isLoggedIn' boolean is false, return <Navigate to='/login' />. Otherwise, return the children." }
    ],
    practiceTasks: [
      { task: "Understand the logic of redirecting unauthenticated users" },
      { task: "Implement a ProtectedRoute using React Router v6" }
    ]
  }
};

async function updateLevel67() {
  let updatedCount = 0;
  
  modules.forEach(mod => {
    if (level67Data[mod.title]) {
      const data = level67Data[mod.title];
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
  console.log("✅ Successfully injected high-quality content into " + updatedCount + " Level 6 & 7 modules!");
}

updateLevel67();

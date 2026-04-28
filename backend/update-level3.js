import fs from 'fs';
import { modules } from './seeder.js';

// The new explanation for Module 17 (Forms)
const module17Explanation = `## Forms – Controlled Components (🟡 LEVEL 2 – CORE REACT)

### What is a Controlled Component?
In traditional HTML, forms (like \`<input>\` or \`<textarea>\`) handle their own state. When you type, the HTML element updates itself. 

In React, **we don't want the HTML to control itself**. Instead, we want **React state** to have full control over the inputs. 

A "Controlled Component" is a form element where React controls its value using \`useState\`.

### 👉 The Concept: State as the Single Source of Truth
1. The form data is stored in React state.
2. The input displays whatever is in the state (using the \`value\` attribute).
3. When the user types, an \`onChange\` event fires, updating the state.
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
<input 
  value={text} 
  onChange={(e) => setText(e.target.value)} 
/>
\`\`\`
If you remove the \`onChange\` handler but keep the \`value={text}\`, the input becomes read-only and you won't be able to type in it at all!`;

const level3Data = {
  "Routing": {
    detailedExplanation: `## Routing – React Router Basics (🟡 LEVEL 3 – INTERMEDIATE)

### What is Routing?
Routing is the process of navigating between different pages in a web application. In traditional websites, clicking a link causes the browser to make a request to the server, which then sends back an entirely new HTML page. This causes a full page reload and a slow, flickering user experience.

### 👉 Concept: Single Page Application (SPA)
React applications are typically **Single Page Applications (SPAs)**. This means:
- Only **one** actual HTML page (\`index.html\`) is ever loaded by the browser.
- When you "navigate" to a new page, the browser does **not** reload.
- Instead, React simply intercepts the click, looks at the URL, and uses JavaScript to instantly swap out the UI components on the screen to match the requested route.

### React Router DOM
To achieve routing in React, the standard library is \`react-router-dom\`.

### Core Components
1. **\`<BrowserRouter>\`**: Wraps your entire application and connects it to the browser's URL history.
2. **\`<Routes>\` & \`<Route>\`**: Defines the mapping between URLs and your React components.
3. **\`<Link>\`**: Replaces the traditional HTML \`<a href="...">\` tag. Instead of reloading the page, it seamlessly updates the URL and tells React to render the new component.

### Basic Setup Example
\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Menu */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

By mastering routing, you transition from building single-screen widgets to full-fledged web applications.`,
    codeExample: `import React from 'react';
// Assuming react-router-dom is installed
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Us</h2>;

export default function RoutingDemo() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <nav style={{ marginBottom: '20px', borderBottom: '1px solid #444', paddingBottom: '10px' }}>
          <Link to="/" style={{ marginRight: '15px', color: '#61dafb' }}>Home</Link>
          <Link to="/about" style={{ color: '#61dafb' }}>About</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}`,
    defaultFiles: {
      '/App.js': `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Link to="/" style={{marginRight: 10}}>Home</Link>\n      <Link to="/profile">Profile</Link>\n      \n      <Routes>\n        <Route path="/" element={<h3>Home Route</h3>} />\n        <Route path="/profile" element={<h3>Profile Route</h3>} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is a Single Page Application (SPA)?", ["An app that only has one component", "An app where only one HTML page is loaded and navigation is handled by JS without a full page reload", "An app that only runs on one screen size", "A website that cannot have links"], 1],
      ["What is the standard library used for routing in React?", ["react-navigation", "react-router-dom", "react-routes", "next-router"], 1],
      ["What does the `<BrowserRouter>` component do?", ["It styles the app for different browsers", "It connects the React app to the browser's URL history API", "It blocks external links", "It compiles React code"], 1],
      ["In React Router, what replaces the traditional HTML `<a>` tag to prevent full page reloads?", ["<Button>", "<Href>", "<Link>", "<Nav>"], 2],
      ["What happens if you use a standard `<a href='/about'>` instead of `<Link to='/about'>` in an SPA?", ["It works exactly the same", "It causes a full page reload, breaking the SPA experience", "It throws a syntax error", "It crashes the browser"], 1],
      ["How do you define a route that catches all undefined URLs (a 404 page)?", ["<Route path='404' />", "<Route path='error' />", "<Route path='*' />", "<Route default />"], 2],
      ["What is the purpose of the `<Routes>` component?", ["It holds all the routing logic and selects the first `<Route>` that matches the URL", "It creates the navigation bar", "It fetches data from the server", "It defines the HTML header"], 0],
      ["How do you specify which component should render for a specific path in v6 of React Router?", ["component={Home}", "element={<Home />}", "render={() => <Home />}", "target={Home}"], 1],
      ["Can you have multiple `<BrowserRouter>` components in one app?", ["Yes, it's recommended", "No, you should only have one at the root of your application hierarchy", "Only if they are nested", "Only in development mode"], 1],
      ["What does the `<NavLink>` component do that `<Link>` doesn't?", ["It is faster", "It can automatically apply an 'active' CSS class when its route is the current URL", "It can link to external websites", "It is used for backend routing"], 1],
      ["Which hook is used to programmatically navigate the user (e.g., after a login succeeds)?", ["useLocation", "useParams", "useNavigate", "useRouter"], 2],
      ["What does `useLocation()` return?", ["The user's GPS coordinates", "An object containing information about the current URL (pathname, search, hash)", "The previous page visited", "A function to redirect"], 1],
      ["Is React Router an official Facebook package?", ["Yes", "No, it is a third-party library maintained by Remix Software", "Yes, it is built into React", "No, it is maintained by Google"], 1],
      ["How do you navigate to a previous page programmatically?", ["navigate('back')", "navigate(-1)", "navigate(0)", "goBack()"], 1],
      ["What is a HashRouter?", ["A router that hashes the data", "A router that uses the hash portion of the URL (e.g., example.com/#/about) to keep the UI in sync", "A router for passwords", "A router exclusively for React Native"], 1],
      ["Why might you use HashRouter instead of BrowserRouter?", ["It is faster", "Your web server doesn't support catching dynamic URLs and routing them to index.html (like static file hosts)", "It looks better", "It is the modern standard"], 1],
      ["Which prop is required on the `<Link>` component?", ["href", "src", "to", "path"], 2],
      ["Can `<Link>` components be used outside of a `<BrowserRouter>`?", ["Yes", "No, they must be rendered inside a router context", "Only if they have an absolute URL", "Only in class components"], 1],
      ["In older versions of React Router (v5), what prop was used instead of `element`?", ["component", "render", "children", "All of the above"], 3],
      ["What happens if the user manually types a URL like `/dashboard` in the browser bar?", ["The browser requests `/dashboard` from the server. The server must be configured to return `index.html` so React Router can take over.", "React Router intercepts it before it leaves the browser", "It always crashes", "It loads a new HTML page called dashboard.html"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Basic Navigation", description: "Create a React app with react-router-dom. Setup three routes: Home, Contact, and Services. Add a navigation bar with Links to all three." },
      { title: "Assignment 2: Catch-All 404", description: "Add a 'Page Not Found' component to your router that renders when a user visits a URL that does not match any defined routes." }
    ],
    practiceTasks: [
      { task: "Understand the concept of a Single Page Application" },
      { task: "Set up BrowserRouter, Routes, and Route" }
    ]
  },

  "Nested Routing": {
    detailedExplanation: `## Nested Routing (🟡 LEVEL 3 – INTERMEDIATE)

### What is Nested Routing?
In many web applications, the layout of a page consists of a persistent outer shell (like a sidebar, header, or dashboard layout) and a dynamic inner content area that changes based on the URL. 

**Nested routing** is the technique of defining routes inside of other routes.

### 👉 Used for: Dashboards, Layouts, and Tabs
Instead of copying your Sidebar component into every single dashboard page, you create a parent \`DashboardLayout\` route that renders the Sidebar permanently, and uses an \`<Outlet />\` to render the nested child routes.

### The \`<Outlet />\` Component
The \`<Outlet />\` component from \`react-router-dom\` acts as a placeholder. It tells the parent route exactly **where** to render its matching child route.

### Example Setup:
\`\`\`jsx
import { Routes, Route, Outlet, Link } from "react-router-dom";

// The Parent Layout
function DashboardLayout() {
  return (
    <div className="layout">
      <aside>
        <h3>Sidebar</h3>
        <Link to="/dashboard/stats">Stats</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </aside>
      
      <main>
        {/* The child route components will be injected HERE */}
        <Outlet /> 
      </main>
    </div>
  );
}

// The Router Configuration
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Nested Routes */}
        <Route path="stats" element={<h2>Statistics</h2>} />
        <Route path="settings" element={<h2>Settings</h2>} />
      </Route>
    </Routes>
  );
}
\`\`\`

When the user visits \`/dashboard/stats\`, React Router renders the \`<DashboardLayout>\`, and replaces the \`<Outlet />\` inside it with the \`<h2>Statistics</h2>\` component.`,
    codeExample: `import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <nav style={{ width: '150px', borderRight: '1px solid #ccc', paddingRight: '10px' }}>
      <h4>Menu</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/app/profile">Profile</Link></li>
        <li><Link to="/app/settings">Settings</Link></li>
      </ul>
    </nav>
    <main style={{ padding: '20px', flex: 1 }}>
      <Outlet /> {/* Child components render here! */}
    </main>
  </div>
);

export default function NestedRouteDemo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route path="profile" element={<h3>User Profile Area</h3>} />
          <Route path="settings" element={<h3>Account Settings Area</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`,
    defaultFiles: {
      '/App.js': `import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";\n\nconst Layout = () => (\n  <div style={{ border: '2px solid blue', padding: 10 }}>\n    <h3>Parent Layout</h3>\n    <Link to="/parent/child">Load Child</Link>\n    <div style={{ border: '2px dashed red', padding: 10, marginTop: 10 }}>\n      <Outlet />\n    </div>\n  </div>\n);\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/parent" element={<Layout />}>\n          <Route path="child" element={<p>I am the child!</p>} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is nested routing?", ["Routing to an external website", "Defining routes inside other routes to create complex, multi-layered layouts", "Routing that uses hash tags", "A way to loop through routes"], 1],
      ["What component is used as a placeholder in a parent route to render child routes?", ["<Placeholder />", "<Child />", "<Outlet />", "<Inject />"], 2],
      ["What is a common use case for nested routing?", ["Creating a unified Dashboard layout with a persistent sidebar", "Connecting to a database", "Handling form submissions", "Styling components"], 0],
      ["In the route definition `<Route path='dashboard' element={<Layout />}><Route path='stats' element={<Stats />}/></Route>`, what is the full URL to reach the Stats component?", ["/stats", "/dashboard/stats", "/dashboard", "/layout/stats"], 1],
      ["If a user navigates to `/dashboard` (but not `/dashboard/stats`), what renders inside the `<Outlet />` by default?", ["The Stats component", "An error", "Nothing (it is empty)", "The entire app crashes"], 2],
      ["How do you render a default child component when the user visits the parent URL (e.g., `/dashboard`)?", ["Use a <Route index element={<DefaultComponent />} /> inside the parent", "Use path='/'", "Use path='default'", "You cannot do this"], 0],
      ["Do nested paths need a leading slash (e.g., path='/stats') in React Router v6?", ["Yes, always", "No, relative paths (path='stats') are preferred inside nested routes", "It doesn't matter", "Only if it is the root"], 1],
      ["What happens if you forget to include the `<Outlet />` component in your parent Layout?", ["The child routes will render at the bottom of the page", "The child routes will not render at all, even if the URL is correct", "The app crashes", "React automatically appends them"], 1],
      ["Can you nest routes infinitely deep?", ["No, max depth is 2", "Yes, you can have layouts inside layouts inside layouts", "Only up to 5 levels", "Only in Enterprise React"], 1],
      ["If a parent route has `path='users'` and a child has `path=':id'`, what does the child match?", ["/users", "/users/id", "/users/anything (e.g., /users/123)", "/id"], 2],
      ["Which layout pattern heavily relies on nested routing?", ["Single-page landing pages", "Tabbed navigation interfaces", "Popup modals", "Footer links"], 1],
      ["Is the `<Outlet />` component imported from 'react'?", ["Yes", "No, it is imported from 'react-router-dom'", "No, it is a built-in HTML tag", "No, it is from 'redux'"], 1],
      ["Can an `<Outlet />` pass data to the child components?", ["No, it is just a placeholder", "Yes, using the `context` prop: `<Outlet context={[data, setData]} />`", "Yes, using standard props", "Only via Redux"], 1],
      ["If data is passed via `<Outlet context={data} />`, how does the child component receive it?", ["By reading props.data", "Using the `useOutletContext()` hook", "Using useContext()", "Using useState()"], 1],
      ["What is an 'index route'?", ["The first route in the file", "A child route with no path that renders in the parent's Outlet at the parent's exact URL", "A route for index.html", "A deprecated feature"], 1],
      ["What happens if two child routes have the exact same path?", ["React Router renders both", "React Router matches the first one defined", "It throws an error", "It merges their components"], 1],
      ["Can a Layout component hold state (e.g., whether a sidebar is open or closed)?", ["Yes, it is a normal React component", "No, layouts must be stateless", "Only if it is a Class component", "Only if using Redux"], 0],
      ["When navigating from `/dashboard/stats` to `/dashboard/settings`, does the parent `<Layout>` unmount and remount?", ["Yes", "No, it stays mounted, which preserves its state and avoids re-rendering the outer shell", "Only if it has no state", "Depends on the browser"], 1],
      ["How do relative links work inside a nested component?", ["A `<Link to='settings'>` inside `/dashboard` will navigate to `/dashboard/settings`", "It navigates to `/settings`", "Relative links are not allowed", "It opens a new tab"], 0],
      ["Why is Nested Routing considered an architecture best practice for complex apps?", ["It prevents XSS attacks", "It aligns UI hierarchy with URL structure, making code modular and reducing redundant layout code", "It increases bundle size", "It removes the need for CSS"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Admin Layout", description: "Create an Admin layout with a top navbar and a sidebar. Use nested routing to render 'Users' and 'Products' pages inside the main content area." },
      { title: "Assignment 2: Index Route", description: "Add an index route to your Admin layout so that visiting '/admin' displays a 'Welcome to the Dashboard' component by default." }
    ],
    practiceTasks: [
      { task: "Understand the purpose of the <Outlet /> component" },
      { task: "Configure nested routes in your Routes configuration" }
    ]
  },

  "Dynamic Routing": {
    detailedExplanation: `## Dynamic Routing (🟡 LEVEL 3 – INTERMEDIATE)

### What is Dynamic Routing?
In real-world applications, you rarely have static URLs for everything. If you are building a blog or an e-commerce site, you don't create a separate route for every single post or product.

Instead, you use **Dynamic Routing**: creating routes based on parameters.

### 👉 Example: User Profile Page
If you want a route to match any user ID (e.g., \`/users/123\`, \`/users/abc\`), you define a route with a **URL Parameter**.

In React Router, you denote a URL parameter by prefixing a path segment with a colon (\`:\`).

\`\`\`jsx
// The Route Configuration
<Route path="/users/:userId" element={<UserProfile />} />
\`\`\`
The \`:userId\` segment is dynamic. It will match any string placed in that position of the URL.

### Accessing URL Parameters
When the \`<UserProfile>\` component renders, it needs to know *which* ID was requested so it can fetch the correct data. You extract this parameter using the \`useParams\` hook.

\`\`\`jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  // Extract the userId from the URL
  const params = useParams();
  const userId = params.userId;

  // Destructured version:
  // const { userId } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Fetching data for user ID: {userId}</p>
    </div>
  );
}
\`\`\`

### Multiple Parameters
You can have multiple dynamic segments in a single route:
\`\`\`jsx
<Route path="/store/:category/:productId" element={<ProductPage />} />
\`\`\`
Visiting \`/store/shoes/nike-air\` would result in \`useParams()\` returning:
\`{ category: 'shoes', productId: 'nike-air' }\`.`,
    codeExample: `import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: '20px', background: '#222', borderRadius: '8px' }}>
      <h2>Viewing Item Details</h2>
      <p style={{ color: '#00ffcc' }}>Dynamic ID captured from URL: <strong>{id}</strong></p>
    </div>
  );
};

export default function DynamicRoutingDemo() {
  return (
    <BrowserRouter>
      <div>
        <h3>Select an Item:</h3>
        <ul>
          <li><Link to="/items/101">Item 101</Link></li>
          <li><Link to="/items/999">Item 999</Link></li>
          <li><Link to="/items/apple">Item "apple"</Link></li>
        </ul>
        
        <Routes>
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}`,
    defaultFiles: {
      '/App.js': `import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";\n\nfunction Profile() {\n  const { username } = useParams();\n  return <h2>Hello, {username}!</h2>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Link to="/u/alice" style={{marginRight: 10}}>Alice</Link>\n      <Link to="/u/bob">Bob</Link>\n      <Routes>\n        <Route path="/u/:username" element={<Profile />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is the purpose of dynamic routing?", ["To create animated transitions between pages", "To handle URLs that have variable segments (like IDs) using a single route definition", "To route backend API requests", "To change CSS dynamically"], 1],
      ["How do you define a URL parameter in a route path?", ["By wrapping it in curly braces: {id}", "By prefixing it with a dollar sign: $id", "By prefixing it with a colon: :id", "By prefixing it with a question mark: ?id"], 2],
      ["If a route is defined as `<Route path='/blog/:postId' />`, which of the following URLs will match it?", ["/blog/123", "/blog/hello-world", "Both A and B", "/blog"], 2],
      ["Which React Router hook is used to extract dynamic parameters from the URL?", ["useRouter", "useLocation", "useParams", "useDynamic"], 2],
      ["What type of data does `useParams()` return?", ["An array of strings", "An object containing key/value pairs of the dynamic params", "A single string", "A boolean"], 1],
      ["Given the route `/users/:userId` and the URL `/users/99`, what does `useParams()` return?", ["{ id: 99 }", "{ userId: '99' }", "[ 99 ]", "{ user: 99 }"], 1],
      ["What is the data type of the value extracted from `useParams()`?", ["Number", "String", "Boolean", "Object"], 1],
      ["If you have `<Route path='/store/:category/:itemId' />`, how do you destructure the params?", ["const { category, itemId } = useParams();", "const [category, itemId] = useParams();", "const { params } = useParams();", "const id = useParams('itemId');"], 0],
      ["What is a Query String (Query Parameter)?", ["The part of the URL after the `?` (e.g., ?sort=asc)", "The part of the URL after the `:`", "The domain name", "The hash `#` tag"], 0],
      ["Does `useParams()` extract query strings like `?sort=asc`?", ["Yes", "No, you must use `useSearchParams()` for query strings", "Only if defined in the path", "Only in development"], 1],
      ["What happens if a user navigates to `/users/` when the route is defined as `/users/:id`?", ["The route matches and id is undefined", "The route does NOT match, because the parameter is required by default", "It redirects to Home", "It crashes the app"], 1],
      ["How can you make a URL parameter optional in React Router v6?", ["Append a `?` to the parameter: `path='/users/:id?'`", "You cannot make them optional in v6; you must define two separate routes", "Prepend a `?`", "Wrap it in brackets `[:id]`"], 0],
      ["If you define a static route `/users/new` and a dynamic route `/users/:id`, what happens when a user visits `/users/new`?", ["It matches the dynamic route and id becomes 'new'", "React Router is smart enough to match the static `/users/new` route first due to specificity ranking", "It throws a conflict error", "It renders both"], 1],
      ["Can you use dynamic parameters in nested routes?", ["Yes, the child route will have access to the parent's parameters", "No, parameters are lost in nested routes", "Only if explicitly passed as props", "Only via Context"], 0],
      ["If a component extracts an `id` from the URL, what is the typical next step?", ["Render the ID in a large font", "Use `useEffect` to fetch data from an API based on that ID", "Delete the ID from the URL", "Update global state with Redux"], 1],
      ["What happens if you fetch data in a component based on a URL parameter, and the user clicks a link that changes the parameter (e.g., from /user/1 to /user/2)?", ["The component is unmounted and remounted completely", "The component remains mounted, but the URL changes. You must include the ID in the `useEffect` dependency array to trigger a re-fetch.", "The page reloads completely", "React throws an error"], 1],
      ["Which is the correct way to link to a dynamic route using a variable `userId`?", ["<Link to='/users/:userId'>", "<Link to={'/users/' + userId}>", "<Link to={`/users/${userId}`}>", "Both B and C are correct"], 3],
      ["Can a route path be entirely dynamic? e.g., `<Route path='/:anything' />`", ["Yes", "No", "Only if it is the only route", "Only if wrapped in an Outlet"], 0],
      ["What is the main advantage of dynamic routing for an e-commerce store?", ["It improves website security", "You only need to write one generic 'Product Details' component that can render any product based on the URL", "It forces the user to log in", "It reduces CSS size"], 1],
      ["What hook can be used to read and modify the URL query string (e.g., `?page=2`)?", ["useParams", "useSearchParams", "useQuery", "useURL"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Blog Router", description: "Create a blog routing system. Define a route '/posts/:slug'. When visited, the component should extract the 'slug' using useParams and display 'Reading post: [slug]'." },
      { title: "Assignment 2: Multi-param Route", description: "Create a route that takes two parameters: a category and an item ID (e.g., '/shop/:category/:id'). Display both parameters on the screen." }
    ],
    practiceTasks: [
      { task: "Define routes with URL parameters using the colon (:) syntax" },
      { task: "Extract URL parameters inside a component using the useParams hook" }
    ]
  },

  "Lifting State Up": {
    detailedExplanation: `## Lifting State Up (🟡 LEVEL 3 – INTERMEDIATE)

### The Problem: Sharing State
In React, state is local to a component. But what happens when **multiple components need to access and modify the same state**? 

For example, imagine a \`TemperatureInput\` component and a \`WaterBoilingVerdict\` component. The verdict component needs to know the temperature entered in the input component to display whether water would boil.

If the temperature state lives inside the \`TemperatureInput\`, the \`WaterBoilingVerdict\` cannot access it, because data only flows **downwards** in React.

### 👉 Concept: Single Source of Truth
Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. 

### How to Lift State Up
1. **Find the closest common parent:** Identify the component that renders both of the components that need the state.
2. **Move the state to the parent:** Remove the \`useState\` hook from the child and place it in the parent.
3. **Pass state down as props:** Pass the state value down to the children as read-only props.
4. **Pass callbacks down as props:** Since children cannot modify parent state directly, the parent must pass down a function (e.g., the state setter) that the child can call when an event occurs.

### Example:
\`\`\`jsx
function Parent() {
  const [sharedText, setSharedText] = useState("");

  return (
    <div>
      {/* Child 1 receives the state and the setter */}
      <InputBox text={sharedText} onTextChange={setSharedText} />
      
      {/* Child 2 only receives the state to display it */}
      <DisplayBox text={sharedText} />
    </div>
  );
}

function InputBox({ text, onTextChange }) {
  // When input changes, it calls the parent's setter function!
  return <input value={text} onChange={(e) => onTextChange(e.target.value)} />;
}

function DisplayBox({ text }) {
  return <h1>You typed: {text}</h1>;
}
\`\`\`

By lifting state up, you create a "single source of truth". The parent controls the data, and the children merely reflect it or trigger requests to change it.`,
    codeExample: `import React, { useState } from 'react';

// The Parent Component
export default function LiftingStateDemo() {
  // 1. State lives here!
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '2px solid #ccc' }}>
      <h3>Parent Component</h3>
      
      {/* 2. Pass state and setter down as props */}
      <ChildA currentCount={count} onIncrement={() => setCount(count + 1)} />
      <ChildB currentCount={count} />
    </div>
  );
}

function ChildA({ currentCount, onIncrement }) {
  return (
    <div style={{ background: '#333', margin: '10px', padding: '10px' }}>
      <p>Child A (Controls the state)</p>
      <button onClick={onIncrement}>Increment Shared Count</button>
    </div>
  );
}

function ChildB({ currentCount }) {
  return (
    <div style={{ background: '#555', margin: '10px', padding: '10px' }}>
      <p>Child B (Reads the state)</p>
      <h2>Total Count is: {currentCount}</h2>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import React, { useState } from 'react';\n\nfunction SiblingA({ onToggle }) {\n  return <button onClick={onToggle}>Toggle Secret</button>;\n}\n\nfunction SiblingB({ show }) {\n  return show ? <p>React is awesome!</p> : null;\n}\n\nexport default function Parent() {\n  const [showSecret, setShowSecret] = useState(false);\n  return (\n    <div>\n      <SiblingA onToggle={() => setShowSecret(!showSecret)} />\n      <SiblingB show={showSecret} />\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What does 'Lifting State Up' mean in React?", ["Moving state to a global Redux store", "Moving state from a child component to its closest common parent component", "Uploading state to a server", "Passing state from parent to child"], 1],
      ["Why do we need to lift state up?", ["Because state is too heavy", "Because sibling components cannot share data directly; they must communicate through a common parent", "Because it improves rendering speed", "Because children cannot have state"], 1],
      ["What is the 'single source of truth' principle?", ["Every component has its own state", "There should be only one place where a specific piece of changing data lives and is modified", "React is the only truth", "Data is stored in a single database"], 1],
      ["If Component A and Component B both need to read and update a 'searchQuery' state, where should 'searchQuery' be declared?", ["In Component A", "In Component B", "In the closest common parent of A and B", "In an external CSS file"], 2],
      ["How does a child component modify state that has been lifted to a parent?", ["The child directly mutates `this.parent.state`", "The child uses `document.getElementById` to change the parent", "The parent passes down a callback function (like a state setter) as a prop, and the child calls it", "It is impossible"], 2],
      ["If state is lifted up, how is it passed back down to the children?", ["As context", "As local state", "As props", "As global variables"], 2],
      ["Which of the following is passed as a prop when lifting state up?", ["The state value itself", "A callback function to update the state", "Both A and B", "Neither"], 2],
      ["What happens when the child calls the parent's state-updating callback?", ["The child component re-renders independently", "The parent's state changes, causing the parent (and all its children) to re-render with the new data", "The app crashes", "The callback is ignored"], 1],
      ["Is 'Lifting State Up' a feature, a rule, or a pattern?", ["A hard-coded feature of React", "A syntax rule", "A common design pattern for data flow in React", "A deprecated library"], 2],
      ["If you find yourself passing state through 10 levels of components just so siblings can share it, what problem are you experiencing?", ["State synchronization", "Prop drilling", "Memory leaking", "Callback hell"], 1],
      ["Which advanced React feature solves the 'Prop Drilling' problem created by lifting state up too high?", ["Context API", "React Router", "CSS Modules", "Virtual DOM"], 0],
      ["When should you NOT lift state up?", ["When two components need the same data", "When the state is entirely local to a single component (like whether a dropdown is currently open)", "When you want a single source of truth", "When writing functional components"], 1],
      ["Given `<Parent><ChildA/><ChildB/></Parent>`, if ChildA updates the lifted state in Parent, does ChildB re-render?", ["Yes, because Parent re-renders and passes the new props to ChildB", "No, components only re-render if their own state changes", "Only if ChildB is a class component", "It crashes"], 0],
      ["What is the naming convention for callback props used to update lifted state?", ["They must be named set[StateName]", "They often start with 'on' or 'handle' (e.g., onTemperatureChange)", "They must be named 'callback'", "There is no convention"], 1],
      ["If a parent passes `count` to ChildA and `count` to ChildB, and ChildA increments it, what value does ChildB see?", ["The old value", "The new incremented value", "Undefined", "Null"], 1],
      ["Is it possible for a child to have its own local state AND receive lifted state from a parent?", ["Yes, components can mix local state and props freely", "No, a component must be entirely stateless or entirely stateful", "Only in class components", "Only if the parent allows it"], 0],
      ["Lifting state up promotes:", ["Data duplication", "Two-way data binding", "Top-down (unidirectional) data flow", "Global state pollution"], 2],
      ["What is a controlled component in the context of lifting state up?", ["A component that is controlled by a CSS file", "A component that does not maintain its own local state, but is fully controlled by props passed from a parent", "A component connected to an API", "A component that controls its parent"], 1],
      ["If you have 5 separate input fields that all contribute to a single 'User Form', where should the state live?", ["In a global Redux store", "In the common 'User Form' parent component", "Inside each individual input field", "In the Window object"], 1],
      ["What is the primary drawback of lifting state too high up the component tree?", ["It causes too many components to re-render unnecessarily (Prop Drilling)", "It breaks the Virtual DOM", "It uses too much CSS", "It is insecure"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Shared Input", description: "Create a Parent component with state 'text'. Create two children: an InputBox and a TextDisplay. Ensure typing in the InputBox updates the TextDisplay by lifting state." },
      { title: "Assignment 2: Independent vs Shared State", description: "Create two independent Counter components. Then, lift their state to a parent so that clicking either counter increments a single, shared total count." }
    ],
    practiceTasks: [
      { task: "Identify when state needs to be shared between siblings" },
      { task: "Move state to a common ancestor and pass it down as props" }
    ]
  },

  "Context API": {
    detailedExplanation: `## Context API (🟡 LEVEL 3 – INTERMEDIATE)

### The Problem: Prop Drilling
As your application grows, you will inevitably lift state up to common ancestors. However, sometimes that common ancestor is very high in the component tree.

Passing props down through multiple layers of intermediate components (who don't even need the data themselves) just to reach a deeply nested child is called **Prop Drilling**. It makes code messy, tightly coupled, and hard to refactor.

### 👉 Concept: Global Data Sharing
Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme (dark/light), or preferred language.

### How to use Context

**1. Create the Context**
\`\`\`jsx
import { createContext } from 'react';
// Creates a Context object.
export const ThemeContext = createContext('light');
\`\`\`

**2. Provide the Context**
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. Wrap the tree of components that need the data in a \`Provider\` and pass a \`value\` prop.
\`\`\`jsx
function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
\`\`\`

**3. Consume the Context (The \`useContext\` Hook)**
Any component nested inside the Provider can access the value using the \`useContext\` Hook, completely bypassing the components in between!
\`\`\`jsx
import { useContext } from 'react';
import { ThemeContext } from './App'; // Import the context object

function DeeplyNestedButton() {
  const theme = useContext(ThemeContext); // Extracts 'dark'
  return <button className={theme}>I am styled by context!</button>;
}
\`\`\`

### When to Use Context
Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition (passing components as \`children\`) is often a simpler alternative. Use Context primarily for truly global data.`,
    codeExample: `import React, { useState, createContext, useContext } from 'react';

// 1. Create Context
const UserContext = createContext();

export default function ContextDemo() {
  const [user, setUser] = useState("Jane Doe");

  return (
    // 2. Provide Context
    <UserContext.Provider value={user}>
      <div style={{ border: '1px solid gray', padding: '10px' }}>
        <h2>Parent Component</h2>
        <p>I provide the context value: {user}</p>
        <IntermediateComponent />
      </div>
    </UserContext.Provider>
  );
}

// Intermediate component doesn't need to pass props!
function IntermediateComponent() {
  return (
    <div style={{ border: '1px dashed gray', padding: '10px', margin: '10px' }}>
      <p>Intermediate Layer (No props passed here!)</p>
      <DeepChildComponent />
    </div>
  );
}

function DeepChildComponent() {
  // 3. Consume Context
  const userName = useContext(UserContext);
  return (
    <div style={{ background: '#333', padding: '10px' }}>
      <h3 style={{ color: 'gold' }}>Deeply Nested Child</h3>
      <p>I retrieved the username directly from Context: <strong>{userName}</strong></p>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import React, { createContext, useContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction Text() {\n  const theme = useContext(ThemeContext);\n  return <h2 style={{ color: theme === 'dark' ? 'white' : 'black', background: theme === 'dark' ? 'black' : 'white' }}>Current Theme: {theme}</h2>;\n}\n\nexport default function App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <Text />\n    </ThemeContext.Provider>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What problem does the Context API solve?", ["Slow rendering", "Prop Drilling (passing props through many unnecessary levels)", "Database connection issues", "CSS specificity"], 1],
      ["What is 'Prop Drilling'?", ["A dental procedure", "Passing props down through multiple intermediate components that don't need the data, just to reach a deeply nested child", "Drilling holes in the DOM", "A performance optimization technique"], 1],
      ["What function creates a Context object?", ["React.createState()", "React.buildContext()", "React.createContext()", "React.makeProvider()"], 2],
      ["What component is used to supply the context value to the component tree?", ["<Context.Supplier>", "<Context.Provider>", "<Context.Giver>", "<Context.Source>"], 1],
      ["Which prop is required on a Context Provider to pass the data?", ["data", "state", "value", "context"], 2],
      ["Which Hook is used to consume/access the context data in a functional component?", ["useContext", "useProvider", "useState", "useData"], 0],
      ["What argument must you pass to `useContext`?", ["A string name", "The Context Object itself (created by createContext)", "A default value", "The Provider component"], 1],
      ["If a component calls `useContext(MyContext)` but there is no matching Provider above it in the tree, what value does it receive?", ["Undefined", "An error is thrown", "The default value passed to createContext()", "Null"], 2],
      ["Can a Context value be dynamic (i.e., tied to state)?", ["Yes, you can pass a state variable to the Provider's value prop, and updates will trigger re-renders", "No, Context values must be static strings or numbers", "Only if it is an object", "Only in class components"], 0],
      ["What happens to consuming components when the Provider's `value` prop changes?", ["Nothing", "They crash", "Every component that consumes that context is forced to re-render", "The whole application reloads"], 2],
      ["Is it possible to have multiple different Context Providers in one application?", ["Yes, you can nest multiple providers (e.g., ThemeProvider inside AuthProvider)", "No, you can only have one Context per app", "Only if they use the same variable name", "Yes, but they must be in separate files"], 0],
      ["What is a common use case for Context?", ["Current authenticated user", "UI theme (dark/light mode)", "Preferred language", "All of the above"], 3],
      ["Should Context be used to replace ALL state management in your app?", ["Yes, it completely replaces local state", "No, it should be used sparingly for truly global data, as it makes component reuse difficult", "Yes, it replaces Redux entirely", "No, it is deprecated"], 1],
      ["Can you pass an object with both state and a setter function into a Context Provider?", ["Yes, e.g., `value={{ user, setUser }}`", "No, Context only accepts primitive values", "No, you must use Redux for that", "Only if the object is frozen"], 0],
      ["If Component C consumes Context, and Component B is between Provider A and Component C, does Component B re-render when the context value changes?", ["Yes, always", "No, only Component C (the consumer) re-renders, bypassing Component B (unless B is also a consumer or parent state forces a render)", "Yes, because of prop drilling", "It throws an error"], 1],
      ["What is the class component equivalent of `useContext`?", ["this.props.context", "static contextType or <Context.Consumer>", "this.context()", "There is no equivalent"], 1],
      ["If you pass a new object literal directly into the `value` prop (e.g., `value={{ color: 'red' }}`), what performance issue might occur?", ["It will use too much memory", "It will create a new object reference on every render, causing all consumers to re-render unnecessarily", "It will throw a syntax error", "None"], 1],
      ["How do you fix the object reference performance issue in Context Providers?", ["Use Redux", "Memoize the object using the `useMemo` hook before passing it to `value`", "Pass it as a string", "You cannot fix it"], 1],
      ["Is Context a replacement for component composition (passing components as children)?", ["Yes", "No, the React docs suggest composition is often a simpler solution than Context for avoiding prop drilling", "They are the exact same thing", "Context is deprecated"], 1],
      ["Where should Context Providers typically be placed?", ["At the very bottom of the tree", "As high up in the tree as necessary (often near the root or App component) to wrap all components that need the data", "Inside a useEffect hook", "Inside a map function"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Theme Switcher", description: "Create a ThemeContext. Wrap your App in its Provider. Create a nested button that consumes the context to style itself, and another button to toggle the theme between 'light' and 'dark'." },
      { title: "Assignment 2: Auth Context", description: "Create an AuthContext that provides a 'user' object and a 'logout' function. Consume the context in a deeply nested Navbar component to show the user's name." }
    ],
    practiceTasks: [
      { task: "Create a Context using createContext" },
      { task: "Provide context values and consume them with useContext" }
    ]
  },

  "Custom Hooks": {
    detailedExplanation: `## Custom Hooks (🟡 LEVEL 3 – INTERMEDIATE)

### What is a Custom Hook?
A Custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.

Building your own Hooks lets you extract component logic into reusable functions. When you want to share logic between two JavaScript functions, you extract it to a third function. Both components and Hooks are functions, so this works for them too!

### 👉 Concept: Reusable Logic
Imagine you have a component that fetches data from an API and displays it. The logic to handle \`loading\`, \`error\`, and \`data\` states using \`useState\` and \`useEffect\` is verbose.

If another component needs to fetch data from a different API, you'd have to copy-paste all that state and effect logic. Instead, you can extract it into a Custom Hook.

### Creating a Custom Hook
\`\`\`jsx
import { useState, useEffect } from 'react';

// Custom Hook must start with "use"
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  // Return whatever the consuming component needs
  return { data, loading };
}
\`\`\`

### Using the Custom Hook
Now, any component can use this logic with a single line of code!

\`\`\`jsx
import { useFetch } from './useFetch';

function UserList() {
  const { data, loading } = useFetch('https://api.example.com/users');

  if (loading) return <p>Loading users...</p>;
  return <div>{data.map(user => <p>{user.name}</p>)}</div>;
}
\`\`\`

### Rules of Custom Hooks
1. **Name must start with "use"**: This is a strict convention. It allows React to automatically check for Hook rule violations.
2. **Custom Hooks share stateful logic, not state itself**: Each *call* to a Hook gets a completely independent, isolated state. They do not share data with each other (unless combined with Context).`,
    codeExample: `import React, { useState, useEffect } from 'react';

// --- The Custom Hook ---
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// --- The Component ---
export default function App() {
  // Consuming the custom hook
  const width = useWindowWidth();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Custom Hook Demo</h2>
      <p>Resize your browser window!</p>
      <div style={{ padding: '20px', background: width < 600 ? 'coral' : 'lightblue', transition: 'background 0.5s' }}>
        Current Window Width: <strong>{width}px</strong>
        <p>{width < 600 ? 'Mobile View' : 'Desktop View'}</p>
      </div>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import React, { useState } from 'react';\n\n// Custom Hook\nfunction useToggle(initialValue = false) {\n  const [value, setValue] = useState(initialValue);\n  const toggle = () => setValue(prev => !prev);\n  return [value, toggle];\n}\n\nexport default function App() {\n  const [isLightsOn, toggleLights] = useToggle(false);\n  return (\n    <div>\n      <h2>Lights are {isLightsOn ? 'ON 💡' : 'OFF 🌑'}</h2>\n      <button onClick={toggleLights}>Toggle Lights</button>\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is a Custom Hook in React?", ["A CSS styling feature", "A JavaScript function whose name starts with 'use' and that calls other Hooks", "A built-in method to modify the DOM", "A premium React feature"], 1],
      ["What is the primary purpose of a Custom Hook?", ["To style components", "To extract and reuse stateful logic across multiple components", "To fetch data from a database directly", "To create new HTML tags"], 1],
      ["What naming convention MUST be followed when creating a Custom Hook?", ["It must start with 'get'", "It must be uppercase", "It must start with 'use' (e.g., useFetch)", "It must end with 'Hook'"], 2],
      ["Why does React enforce the 'use' naming convention for Custom Hooks?", ["It sounds cool", "So the React linter can automatically check that the Rules of Hooks are followed inside it", "Because it is required by Webpack", "To distinguish them from class components"], 1],
      ["Can a Custom Hook call built-in Hooks like `useState` and `useEffect`?", ["Yes, that is the entire point of a Custom Hook", "No, Custom Hooks cannot call built-in Hooks", "Only `useState`, not `useEffect`", "Only in production"], 0],
      ["If two different components call the same Custom Hook (e.g., `useCounter`), do they share the same state value?", ["Yes, the state is global", "No, Custom Hooks share stateful *logic*, not state itself. Each call gets completely independent state.", "It depends on the props", "Yes, unless you use Redux"], 1],
      ["What can a Custom Hook return?", ["Only an array", "Only an object", "Only JSX", "Anything you want (arrays, objects, primitives) depending on what the consuming component needs"], 3],
      ["Is `useFetch` a built-in React Hook?", ["Yes", "No, it is a common example of a Custom Hook you would build yourself", "Yes, introduced in React 18", "No, it is from Redux"], 1],
      ["Which of the following is a valid Custom Hook signature?", ["function fetchData() {}", "function useAuth() {}", "const GetUser = () => {}", "class useTheme {}"], 1],
      ["Where can you call a Custom Hook?", ["Inside a class component", "At the top level of a functional component (or inside another Custom Hook)", "Inside a regular JavaScript helper function", "Inside a nested if-statement"], 1],
      ["If you want to extract the logic for tracking mouse coordinates into a hook, what would be a good name for it?", ["mouseTracker", "getMousePosition", "useMousePosition", "TrackMouse"], 2],
      ["Can a Custom Hook take arguments?", ["No", "Yes, just like any normal JavaScript function", "Only a single object argument", "Only a string argument"], 1],
      ["If a Custom Hook returns an array `[value, setValue]`, what pattern is it mimicking?", ["The `useEffect` pattern", "The `useState` pattern", "The Context pattern", "The Redux pattern"], 1],
      ["Does extracting logic into a Custom Hook change how the component behaves?", ["Yes, it makes it slower", "No, it works exactly the same as if the code was written directly inside the component", "Yes, it prevents re-renders", "Yes, it makes it asynchronous"], 1],
      ["What is a common use case for a Custom Hook?", ["Form validation handling", "Window resize tracking", "API Data fetching", "All of the above"], 3],
      ["Can you publish your Custom Hooks to npm for others to use?", ["Yes, libraries like 'react-use' are built entirely on this concept", "No, they are strictly local to a project", "Only if approved by Facebook", "Only if they contain no state"], 0],
      ["If a Custom Hook uses `useEffect` to attach an event listener, where should the cleanup (removeEventListener) happen?", ["In the component using the hook", "Inside the Custom Hook's `useEffect` return function", "In `index.js`", "It happens automatically"], 1],
      ["What happens if you don't start your Custom Hook name with 'use'?", ["It crashes the app immediately", "React won't be able to check for hook violations, potentially leading to hard-to-find bugs", "Nothing, it's just a suggestion", "It converts it to a class component"], 1],
      ["Can a Custom Hook call another Custom Hook?", ["Yes", "No", "Only if they are in the same file", "Only if they don't use state"], 0],
      ["What problem do Custom Hooks solve that previously required complex patterns like Higher-Order Components (HOCs) or Render Props?", ["Reusing stateful logic between components", "Writing CSS", "Connecting to SQL databases", "Routing"], 0]
    ],
    assignments: [
      { title: "Assignment 1: useToggle Hook", description: "Create a custom hook called useToggle that manages a boolean state. It should return an array with the current boolean value and a function to toggle it. Use it to toggle a piece of text on screen." },
      { title: "Assignment 2: useLocalStorage Hook", description: "Create a custom hook called useLocalStorage(key, initialValue) that syncs a piece of state with the browser's localStorage." }
    ],
    practiceTasks: [
      { task: "Extract complex state logic into a separate function starting with 'use'" },
      { task: "Return state and updater functions from a Custom Hook" }
    ]
  },

  "useRef": {
    detailedExplanation: `## useRef (🟡 LEVEL 3 – INTERMEDIATE)

### What is useRef?
\`useRef\` is a React Hook that lets you reference a value that’s not needed for rendering. It returns a mutable object whose \`.current\` property is initialized to the passed argument.

\`\`\`jsx
const refContainer = useRef(initialValue);
\`\`\`

### Two Main Use Cases

#### 1. Accessing DOM Elements
In React, you rarely manipulate the DOM directly. However, sometimes you absolutely must (e.g., to manage focus, text selection, or integrate with third-party DOM libraries). You can use a ref to get direct access to a DOM node.

\`\`\`jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // \`current\` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
\`\`\`

#### 2. Storing Mutable Values Without Re-rendering
State (\`useState\`) causes a component to re-render when it changes. 
Refs (\`useRef\`) **do not** cause a re-render when changed.

If you need to keep track of a mutable value (like a timer ID, a previous state value, or a flag to prevent an effect from running twice) but updating that value shouldn't redraw the UI, \`useRef\` is the perfect tool.

\`\`\`jsx
function Timer() {
  const timerId = useRef(null);

  const start = () => {
    timerId.current = setInterval(() => console.log('Tick'), 1000);
  };

  const stop = () => {
    clearInterval(timerId.current);
  };
  // ...
}
\`\`\`

### Summary
Think of \`useRef\` as a "box" that can hold a mutable value in its \`.current\` property. It survives re-renders, but changing it does not trigger a re-render.`,
    codeExample: `import React, { useRef, useState } from 'react';

export default function RefDemo() {
  const [renderCount, setRenderCount] = useState(0);
  
  // 1. DOM Reference
  const inputRef = useRef(null);
  
  // 2. Mutable value that doesn't cause re-renders
  const clickCountRef = useRef(0);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'lightyellow';
  };

  const handleSecretClick = () => {
    clickCountRef.current += 1;
    console.log("Secret clicks:", clickCountRef.current);
    // Notice the UI doesn't update when you click this!
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>useRef Demo</h2>
      
      <div>
        <input ref={inputRef} type="text" placeholder="I can be focused" />
        <button onClick={handleFocus} style={{ marginLeft: '10px' }}>Focus Input</button>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid gray' }}>
        <button onClick={handleSecretClick}>Secret Click (Check Console)</button>
        <p>Secret Clicks (won't update until re-render): {clickCountRef.current}</p>
        
        <button onClick={() => setRenderCount(renderCount + 1)}>
          Force Re-render (State change)
        </button>
      </div>
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import React, { useRef } from 'react';\n\nexport default function App() {\n  const inputRef = useRef(null);\n  return (\n    <div>\n      <input ref={inputRef} type="text" placeholder="Click button to focus me" />\n      <button onClick={() => inputRef.current.focus()}>Focus</button>\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What does the `useRef` hook return?", ["A state variable", "A function", "A mutable object with a `.current` property", "A DOM node"], 2],
      ["What is the primary difference between `useState` and `useRef` when their values change?", ["`useState` is faster", "Changing a `useState` value triggers a component re-render; changing a `useRef` value does NOT trigger a re-render", "They are identical", "`useRef` is only for strings"], 1],
      ["Which property of the ref object holds the actual value?", ["ref.value", "ref.target", "ref.node", "ref.current"], 3],
      ["What is one common use case for `useRef`?", ["Fetching data from an API", "Routing to a new page", "Directly accessing a DOM element (e.g., to manage focus)", "Styling text"], 2],
      ["How do you attach a ref to a JSX element?", ["<input use={myRef} />", "<input id={myRef} />", "<input ref={myRef} />", "<input dom={myRef} />"], 2],
      ["If you have `const inputRef = useRef(null)`, how do you programmatically focus the input?", ["inputRef.focus()", "inputRef.current.focus()", "inputRef.setFocus()", "document.focus(inputRef)"], 1],
      ["Does the value stored in a ref persist across component re-renders?", ["Yes, it persists for the full lifetime of the component", "No, it resets on every render", "Only if it is a number", "Only in class components"], 0],
      ["Can `useRef` be used to store mutable data like a timer ID from `setInterval`?", ["Yes, it is perfectly suited for this because changing it won't cause unnecessary re-renders", "No, you must use state for timers", "Yes, but it will cause a re-render every tick", "No, it is only for DOM elements"], 0],
      ["When should you NOT use a ref?", ["To manage input focus", "To trigger a media playback", "To store data that should be displayed and updated on the screen (use state instead)", "To integrate with a 3rd party non-React DOM library"], 2],
      ["Is mutating `ref.current` a side effect?", ["Yes", "No", "Only if it's a DOM node", "Only in StrictMode"], 0],
      ["Can you pass a ref to a custom functional component (e.g., `<MyInput ref={inputRef} />`) out of the box?", ["Yes, it works automatically", "No, functional components don't have instances. You must use `React.forwardRef` to pass it down to a DOM node inside the component.", "Yes, but only in React 18", "No, you can never do this"], 1],
      ["What happens if you render a ref's value in JSX (e.g., `<h1>{myRef.current}</h1>`) and then update `myRef.current`?", ["The text updates on screen instantly", "The text does NOT update on screen because refs don't trigger re-renders", "It throws an error", "The app crashes"], 1],
      ["What is the initial value of `useRef('hello')`?", ["null", "undefined", "{ current: 'hello' }", "'hello'"], 2],
      ["Which built-in React hook is `useRef` conceptually similar to, but without the re-rendering?", ["useEffect", "useState", "useContext", "useReducer"], 1],
      ["Can you use `useRef` to track the previous value of a piece of state?", ["Yes, by updating the ref in a `useEffect` (which runs after the render)", "No, it is impossible", "Only if you use Redux", "Only for strings"], 0],
      ["Is the `.current` property mutable?", ["Yes, you can freely reassign it (e.g., `myRef.current = newValue`)", "No, it is strictly read-only", "Only if it holds a DOM node", "Only in class components"], 0],
      ["When is the `.current` property set when used on a DOM element (like `<div ref={myRef}>`)?", ["Before render", "During render", "After the component mounts (the ref is null during the first render)", "When the user clicks it"], 2],
      ["What is the class component equivalent of `useRef` for creating a generic mutable instance variable?", ["this.state", "Just adding a property to the class instance (e.g., `this.myVar = 'hello'`)", "this.props", "this.ref"], 1],
      ["What is `createRef`?", ["A hook", "The older API for creating refs, mostly used in class components (it creates a new ref on every render if used in a function component)", "A routing feature", "A DOM method"], 1],
      ["If you want to read a value from an uncontrolled form input, which hook is best?", ["useState", "useContext", "useRef", "useEffect"], 2]
    ],
    assignments: [
      { title: "Assignment 1: Auto-Focus", description: "Create an input field that automatically focuses itself as soon as the component mounts on the screen using useRef and useEffect." },
      { title: "Assignment 2: Stopwatch Timer", description: "Create a stopwatch. Use state for the elapsed time, but use a ref to store the setInterval ID so you can clear it when a 'Stop' button is clicked." }
    ],
    practiceTasks: [
      { task: "Access a DOM element directly using a ref" },
      { task: "Store a mutable value that shouldn't trigger a re-render" }
    ]
  },

  "Portals": {
    detailedExplanation: `## Portals (🟡 LEVEL 3 – INTERMEDIATE)

### What are Portals?
By default, React renders components as children of the nearest parent node in the DOM tree. This creates a strict parent-child hierarchy in the HTML structure.

However, sometimes you need to render a child component at a completely different place in the DOM, physically outside of its parent component's DOM hierarchy. 

**Portals** provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

### 👉 Used for: Modals, Tooltips, and Popups
Imagine a generic \`<div>\` with \`overflow: hidden\` or a specific \`z-index\` constraint. If you try to render a Modal (popup window) inside that div, the modal might get clipped or hidden behind other elements.

To fix this, you want the Modal to be appended directly to \`document.body\` or a dedicated \`<div id="modal-root"></div>\`, so it sits on top of everything else.

### How to use Portals
You use \`ReactDOM.createPortal(child, container)\`.

- **child**: Any renderable React child (an element, string, or fragment).
- **container**: A DOM element (like \`document.getElementById('modal-root')\`).

\`\`\`jsx
import ReactDOM from 'react-dom';

function Modal({ children }) {
  // Instead of returning the children normally, we wrap them in a Portal.
  // This sends the HTML to document.body, ignoring where <Modal> was actually placed in the code!
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      {children}
    </div>,
    document.body
  );
}
\`\`\`

### Event Bubbling through Portals
Even though a portal can be anywhere in the physical DOM tree, it behaves like a normal React child in every other way. This includes **Event Bubbling**. An event fired from inside a portal will bubble up to ancestors in the *React* tree, even if those ancestors are not ancestors in the *DOM* tree.`,
    codeExample: `import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// The Modal Component using a Portal
function Modal({ children, onClose }) {
  return createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', color: 'black' }}>
        {children}
        <br/><br/>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.body // Appends the HTML directly to the <body> tag!
  );
}

export default function PortalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '20px', border: '2px solid red', overflow: 'hidden', height: '100px' }}>
      <h2>Portal Demo</h2>
      <p>This div has overflow hidden. A normal modal would be clipped.</p>
      
      <button onClick={() => setIsOpen(true)}>Open Portal Modal</button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3>I am a Modal!</h3>
          <p>I live in document.body, escaping the red box.</p>
        </Modal>
      )}
    </div>
  );
}`,
    defaultFiles: {
      '/App.js': `import React, { useState } from 'react';\nimport { createPortal } from 'react-dom';\n\nfunction PortalMessage() {\n  return createPortal(\n    <div style={{ position: 'fixed', top: 10, right: 10, background: 'green', color: 'white', padding: 10 }}>\n      I am ported to the body!\n    </div>,\n    document.body\n  );\n}\n\nexport default function App() {\n  const [show, setShow] = useState(false);\n  return (\n    <div>\n      <button onClick={() => setShow(!show)}>Toggle Portal</button>\n      {show && <PortalMessage />}\n    </div>\n  );\n}`,
      '/index.js': `import { createRoot } from 'react-dom/client';\nimport App from './App';\ncreateRoot(document.getElementById('root')).render(<App />);`
    },
    quizzes: [
      ["What is a React Portal?", ["A routing system", "A way to render a component into a DOM node that exists outside the parent component's DOM hierarchy", "A tool for making API requests", "A 3D animation feature"], 1],
      ["What is the primary use case for Portals?", ["Rendering text", "Creating modals, tooltips, and dropdowns that need to break out of hidden overflows or z-index constraints", "Routing to new pages", "Connecting to Redux"], 1],
      ["Which method is used to create a Portal?", ["React.createPortal()", "ReactDOM.createPortal()", "window.createPortal()", "document.createPortal()"], 1],
      ["What are the two arguments required by `createPortal`?", ["(event, handler)", "(state, setter)", "(childElement, targetDOMNode)", "(component, props)"], 2],
      ["If you render a Modal component inside a deeply nested `<div>`, where does the physical HTML go if you use a Portal to `document.body`?", ["Inside the deeply nested div", "At the end of the `<body>` tag", "In the `<head>`", "It is deleted"], 1],
      ["How does Event Bubbling work with Portals?", ["Events do not bubble", "Events bubble up the physical DOM tree", "Events bubble up the *React* component tree, ignoring the physical DOM structure", "Events crash the app"], 2],
      ["If a user clicks a button inside a Portal, can an `onClick` handler on the React parent component catch the event?", ["Yes, because React maintains the logical component hierarchy for events", "No, because the physical DOM node is outside the parent", "Only if the event is prevented", "Only in class components"], 0],
      ["Does rendering a component in a Portal change its ability to access Context?", ["Yes, it loses access to Context", "No, it still accesses Context normally because it remains in the same React tree", "Only if the Context is global", "It throws an error"], 1],
      ["Which package do you import `createPortal` from?", ["react", "react-dom", "react-router-dom", "react-portal"], 1],
      ["Why might a standard modal fail if rendered normally without a Portal?", ["Because of parent elements with `overflow: hidden` or lower `z-index` values cutting it off", "Because React prevents absolute positioning", "Because modals require jQuery", "Because CSS is ignored"], 0],
      ["What is typically passed as the second argument (the container) to `createPortal`?", ["document.body or a dedicated div like document.getElementById('modal-root')", "A React component", "A string ID", "null"], 0],
      ["Can you use Portals in server-side rendering (SSR)?", ["Yes, easily", "No, because the DOM (e.g., document.body) does not exist on the server", "Only with Next.js", "Only with Express"], 1],
      ["Do Portals require Class components?", ["Yes", "No, they work perfectly fine in functional components", "Yes, they require lifecycle methods", "Only in React 15"], 1],
      ["Does returning `createPortal` from a component's render function replace the component entirely in the DOM?", ["Yes, the component renders nothing in its original DOM location, and sends its output to the portal target", "No, it renders in both places", "It renders an iframe", "It throws an error"], 0],
      ["What happens if the target DOM node for the Portal doesn't exist?", ["React creates it automatically", "It throws a JavaScript error (Target container is not a DOM element)", "It defaults to the body", "It renders normally"], 1],
      ["Is `document.body` the only valid target for a Portal?", ["Yes", "No, any valid DOM element can be the target", "Only divs can be targets", "Only spans can be targets"], 1],
      ["Can a Portal return multiple elements (like a Fragment)?", ["Yes", "No, it must be a single element", "Only strings", "Only components"], 0],
      ["How does a Portal affect the Virtual DOM?", ["It creates a separate Virtual DOM", "It remains part of the same Virtual DOM tree, despite being physically detached in the real DOM", "It deletes the Virtual DOM", "It bypasses the Virtual DOM entirely"], 1],
      ["Can you unmount a Portal component like any other component?", ["Yes, by using conditional rendering (e.g., `isOpen && <Modal />`)", "No, it stays forever", "Only by refreshing the page", "Only by using manual DOM methods"], 0],
      ["Why not just use absolute positioning in CSS instead of a Portal?", ["CSS is slower", "Because parent constraints like `overflow: hidden` or `transform` properties can restrict absolutely positioned elements, breaking the layout. Portals escape these physical constraints completely.", "Absolute positioning is deprecated", "Portals are a CSS feature"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Simple Portal", description: "Create a 'Tooltip' component that uses a Portal to render text directly into document.body when hovered over a button." },
      { title: "Assignment 2: Reusable Modal", description: "Create a reusable Modal component that accepts 'isOpen', 'onClose', and 'children' props. Use a Portal to render it over the entire screen." }
    ],
    practiceTasks: [
      { task: "Understand why physical DOM constraints require Portals" },
      { task: "Use ReactDOM.createPortal to render a component outside its parent" }
    ]
  }
};

async function updateLevel3() {
  let updatedCount = 0;
  
  // First, fix Module 17 specifically
  const formsModule = modules.find(m => m.title === "Forms");
  if (formsModule) {
    formsModule.detailedExplanation = module17Explanation;
    console.log("✅ Fixed detailedExplanation for Module 17 (Forms)");
  }

  // Next, update Level 3 modules (20-27)
  modules.forEach(mod => {
    if (level3Data[mod.title]) {
      const data = level3Data[mod.title];
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
  console.log("✅ Successfully injected high-quality content into " + updatedCount + " Level 3 modules!");
}

updateLevel3();

import fs from 'fs';
import { modules } from './seeder.js';

const level10Data = [
  {
    order: 51,
    level: 10,
    title: "Folder Structure",
    description: "Scalable Architecture",
    detailedExplanation: "## Folder Structure (🟢 LEVEL 10 – BEST PRACTICES)\n\n### The Need for Architecture\nWhen you start learning React, you usually put all your components inside a `src/components` folder and all your API calls inside `src/App.js`. \n\nThis works fine for a 10-file project. But what happens when your project grows to 500 files, 50 routes, and 30 different API endpoints? Without a well-planned Folder Structure (Architecture), your project will become a \"Big Ball of Mud.\"\n\n### 👉 Scalable Feature-Based Architecture\nIn modern, large-scale React applications, grouping files **by feature** rather than **by file type** is the standard best practice.\n\nInstead of having a folder of 100 components and a folder of 100 hooks, you group everything related to a specific domain (like 'users' or 'products') together.\n\n### A Standard Enterprise Structure\n```text\nsrc/\n ├── assets/        # Global static files (images, global css)\n ├── components/    # GLOBAL, reusable UI components (Buttons, Modals, Inputs)\n ├── config/        # Global configurations (env vars, theme config)\n ├── hooks/         # GLOBAL custom hooks (useWindowSize, useAuth)\n ├── layouts/       # Structural layouts (DashboardLayout, AuthLayout)\n ├── lib/           # Third-party library configurations (axios instance, auth0)\n ├── pages/         # Route entry points (Login, Dashboard, UserProfile)\n ├── store/         # Global Redux/Zustand stores\n ├── utils/         # Pure JS helper functions (formatDate, calculateTax)\n │\n └── features/      # THE HEART OF YOUR APP\n      ├── auth/     # Everything related to Authentication!\n      │    ├── api/          # Auth-specific fetch calls\n      │    ├── components/   # LoginForm, SignupForm\n      │    ├── hooks/        # useLogin, useSignup\n      │    └── index.js      # Public API for the 'auth' feature\n      │\n      └── users/    # Everything related to Users!\n           ├── api/\n           ├── components/\n           └── index.js\n```\n\n### Why use the `features` folder?\nIt enforces **Encapsulation**. A developer working on the 'auth' feature knows that all the logic, UI, and state they need is inside `src/features/auth`. They don't have to hunt across 5 different global folders to find the pieces.\n\n### The Barrel Pattern (`index.js`)\nEach feature folder should have an `index.js` at its root. This file explicitly exports only what other parts of the application are allowed to use. This prevents components from importing deeply nested files from other features, keeping your architecture clean and decoupled.",
    codeExample: `import React, { useState } from 'react';

export default function ArchitectureDemo() {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const folderDetails = {
    'components': 'Contains generic, reusable UI blocks used everywhere: <Button>, <Card>, <Spinner>.',
    'pages': 'Contains components that map directly to Routes (e.g., /login -> LoginPage). They usually just combine a Layout with a Feature component.',
    'features': 'Contains domain-specific logic. E.g., features/auth contains the LoginForm, the login API call, and the useAuth hook.',
    'utils': 'Contains pure JavaScript helper functions that don\\'t use React hooks (e.g., formatDate(date), calculateTotal(cart)).',
    'lib': 'Contains configurations for third-party libraries (e.g., setting up the base URL for Axios, or initializing Firebase).'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Feature-Based Architecture</h2>
      <p>Click a folder to understand its purpose in a scalable enterprise React app.</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1, background: '#1e1e1e', padding: '15px', borderRadius: '8px', border: '1px solid #444', fontFamily: 'monospace' }}>
          <h4 style={{ margin: '0 0 10px 0', color: 'gray' }}>src/</h4>
          {Object.keys(folderDetails).map(folder => (
            <div 
              key={folder}
              onClick={() => setSelectedFolder(folder)}
              style={{ 
                cursor: 'pointer', 
                padding: '5px', 
                color: selectedFolder === folder ? '#00ffcc' : 'white',
                background: selectedFolder === folder ? '#004433' : 'transparent',
                borderRadius: '4px'
              }}
            >
              📁 {folder}/
            </div>
          ))}
        </div>

        <div style={{ flex: 1, background: '#222', padding: '15px', borderRadius: '8px', border: '1px dashed #666' }}>
          <h4>Folder Details:</h4>
          {selectedFolder ? (
            <p style={{ color: '#00ffcc', fontSize: '16px', lineHeight: '1.5' }}>
              {folderDetails[selectedFolder]}
            </p>
          ) : (
            <p style={{ color: 'gray' }}>Select a folder from the left to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}`,
    quizzes: [
      ["Why is grouping by 'file type' (e.g., putting all 100 components in one folder) bad for large applications?", ["It uses too much memory", "It makes finding related files difficult and leads to a 'Big Ball of Mud' architecture", "React crashes", "It is illegal in JavaScript"], 1],
      ["What is the modern standard for structuring large-scale React applications?", ["Grouping by developer", "Grouping by file extension (.js, .css)", "Grouping by feature/domain (e.g., auth, products, users)", "Putting everything in one file"], 2],
      ["In a feature-based architecture, what should go in the `src/components/` folder?", ["Only generic, globally reusable UI components (like Buttons, Modals, Spinners)", "Every component in the app", "Only pages", "Only state"], 0],
      ["Where would you place the `LoginForm` component in a feature-based architecture?", ["`src/components/LoginForm.js`", "`src/pages/LoginForm.js`", "`src/features/auth/components/LoginForm.js`", "`src/utils/LoginForm.js`"], 2],
      ["What is the purpose of the `src/utils/` folder?", ["To hold React components", "To hold CSS files", "To hold pure JavaScript helper functions that do not use React logic (e.g., `formatCurrency`)", "To hold API calls"], 2],
      ["What belongs in the `src/lib/` folder?", ["The React library source code", "Configurations and setups for 3rd-party libraries (like an Axios instance or Auth0 setup)", "Component libraries", "Images"], 1],
      ["What is the 'Barrel Pattern'?", ["Rolling code", "Using an `index.js` file at the root of a folder to explicitly export only what should be public, hiding internal details", "A CSS layout technique", "A database structure"], 1],
      ["Where should components that act as route entry points (e.g., mapped directly to `/dashboard`) live?", ["`src/pages/` (or `src/routes/`)", "`src/features/`", "`src/components/`", "`src/layouts/`"], 0],
      ["What is a major benefit of the `features/` folder pattern?", ["It forces you to write more code", "It enforces encapsulation, making it easy to delete, move, or refactor an entire feature without breaking the rest of the app", "It runs 10x faster", "It doesn't require Webpack"], 1],
      ["If you have a custom hook `useAuth` that only the Login and Signup components use, where should it live?", ["`src/hooks/useAuth.js`", "`src/features/auth/hooks/useAuth.js`", "`src/utils/useAuth.js`", "`src/App.js`"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Folder Design", description: "Design a basic folder structure for a Blog application. Include at least a global components folder, a pages folder, and two feature folders ('posts' and 'comments')." }
    ],
    practiceTasks: [
      { task: "Understand the difference between global components and feature components" },
      { task: "Learn the benefits of encapsulation in software architecture" }
    ]
  },
  {
    order: 52,
    level: 10,
    title: "Custom ESLint",
    description: "Enforcing clean code",
    detailedExplanation: "## Custom ESLint (🟢 LEVEL 10 – BEST PRACTICES)\n\n### What is a Linter?\nWhen you work on a team, every developer has a different coding style. One person uses single quotes, another uses double quotes. One person leaves dead code everywhere, another person meticulously deletes it. \n\nWithout strict rules, a codebase quickly becomes a chaotic mess.\n\nA **Linter** (like ESLint) is a static code analysis tool that scans your code for stylistic errors, bugs, and suspicious constructs *before* you even run the code.\n\n### 👉 ESLint in React\nIf you use Vite or Create React App, ESLint is usually configured for you out-of-the-box. It comes with rules like `react-hooks/exhaustive-deps`, which yells at you if you forget to include a variable in a `useEffect` dependency array.\n\nHowever, in enterprise environments, you need to **customize** ESLint to enforce your team's specific best practices.\n\n### Customizing ESLint (`.eslintrc.cjs`)\nYou configure ESLint using a configuration file at the root of your project.\n\n```javascript\n// .eslintrc.cjs\nmodule.exports = {\n  root: true,\n  env: { browser: true, es2020: true },\n  extends: [\n    'eslint:recommended',\n    'plugin:react/recommended',\n    'plugin:react-hooks/recommended',\n  ],\n  ignorePatterns: ['dist', '.eslintrc.cjs'],\n  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },\n  settings: { react: { version: '18.2' } },\n  plugins: ['react-refresh'],\n  rules: {\n    // CUSTOM RULES:\n    'no-unused-vars': 'error',          // Throw an error if a variable is declared but never used\n    'react/prop-types': 'off',          // Turn off prop-types checking (if using TypeScript)\n    'no-console': 'warn',               // Warn if someone leaves console.log in the code\n    'eqeqeq': 'error',                  // Force the use of === instead of ==\n  },\n}\n```\n\n### Prettier vs ESLint\n- **Prettier** is a code *formatter*. It only cares about how the code looks (tabs vs spaces, max line length). \n- **ESLint** is a code *quality* tool. It cares about how the code works (unused variables, infinite loops, hook rules).\n\nThey are often used together! You use Prettier to format the code, and ESLint to catch bugs and enforce logic rules.",
    codeExample: `import React, { useState } from 'react';

export default function LinterDemo() {
  const [logs, setLogs] = useState([]);

  const runLinter = () => {
    setLogs([]);
    const addLog = (msg, isError) => setLogs(prev => [...prev, { msg, isError }]);
    
    addLog("Scanning code with ESLint...", false);
    
    setTimeout(() => {
      // Simulating Linter output
      addLog("❌ Error: 'data' is assigned a value but never used (no-unused-vars)", true);
      addLog("⚠️ Warning: Unexpected console statement (no-console)", true);
      addLog("❌ Error: Expected '===' and instead saw '==' (eqeqeq)", true);
      addLog("❌ Error: React Hook useEffect has a missing dependency: 'userId' (react-hooks/exhaustive-deps)", true);
      
      setTimeout(() => {
        addLog("✖ 4 problems (3 errors, 1 warning)", true);
      }, 500);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>ESLint Concept Demo</h2>
      <p>A linter scans your code to enforce quality and style rules BEFORE you run it.</p>
      
      <div style={{ background: '#1e1e1e', padding: '15px', border: '1px solid #444', marginBottom: '20px', fontFamily: 'monospace' }}>
        <p style={{ color: 'gray' }}>// Bad Code Example</p>
        <p><span style={{ color: '#c678dd' }}>function</span> <span style={{ color: '#61afef' }}>fetchData</span>() {'{'}</p>
        <p style={{ paddingLeft: '20px' }}><span style={{ color: '#c678dd' }}>const</span> data = <span style={{ color: '#98c379' }}>"hello"</span>; <span style={{ color: 'gray' }}>// Unused variable!</span></p>
        <p style={{ paddingLeft: '20px' }}><span style={{ color: '#e5c07b' }}>console</span>.<span style={{ color: '#61afef' }}>log</span>(<span style={{ color: '#98c379' }}>"Fetching..."</span>); <span style={{ color: 'gray' }}>// Console log left in production!</span></p>
        <p style={{ paddingLeft: '20px' }}><span style={{ color: '#c678dd' }}>if</span> (id == <span style={{ color: '#d19a66' }}>5</span>) {'{ ... }'} <span style={{ color: 'gray' }}>// Loose equality used!</span></p>
        <p>{'}'}</p>
      </div>

      <button onClick={runLinter} style={{ background: '#e94560' }}>Run ESLint Scan</button>

      {logs.length > 0 && (
        <div style={{ marginTop: '20px', background: '#111', padding: '15px', fontFamily: 'monospace' }}>
          {logs.map((log, i) => <div key={i} style={{ color: log.isError ? '#ff6b6b' : '#00ffcc', marginBottom: '5px' }}>{log.msg}</div>)}
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["What is ESLint?", ["A CSS styling tool", "A static code analysis tool that finds and fixes problems in your JavaScript code", "A React Router package", "A database system"], 1],
      ["What is the primary difference between ESLint and Prettier?", ["There is no difference", "ESLint is for code quality and catching bugs; Prettier is strictly for formatting (spacing, quotes)", "Prettier catches bugs, ESLint formats code", "ESLint is for CSS, Prettier is for JS"], 1],
      ["Where do you configure custom ESLint rules?", ["In the `index.html` file", "In the `.eslintrc` (or `.eslintrc.cjs`) file", "In the `package.json` only", "In the Redux store"], 1],
      ["What does the rule `'no-unused-vars': 'error'` do?", ["It deletes variables", "It throws an error if you declare a variable but never use it anywhere in your code", "It forces you to use variables twice", "It ignores variables"], 1],
      ["What does the `'eqeqeq': 'error'` rule enforce?", ["That all functions are equal", "That you must use strict equality (`===`) instead of loose equality (`==`)", "That you cannot use the equals sign", "That variables must be constants"], 1],
      ["Why might a team set `'no-console': 'warn'` or `'error'`?", ["Because `console.log` crashes the app", "To prevent developers from accidentally leaving debugging logs in the production code that the user might see", "Because the console is deprecated", "To save memory"], 1],
      ["Which highly important ESLint plugin is specifically designed for React Hooks?", ["`eslint-plugin-react-router`", "`eslint-plugin-react-hooks`", "`eslint-plugin-redux`", "`eslint-plugin-jest`"], 1],
      ["What critical rule does `eslint-plugin-react-hooks` enforce regarding `useEffect`?", ["That `useEffect` must return a string", "The `exhaustive-deps` rule, ensuring that all variables used inside the effect are listed in the dependency array", "That `useEffect` must be async", "That it cannot be used"], 1],
      ["What happens if you run an automated CI/CD pipeline and ESLint finds 3 'Errors'?", ["The pipeline usually fails and prevents the code from being deployed", "It deploys anyway", "It fixes the errors automatically", "It emails the user"], 0],
      ["Can ESLint automatically fix certain issues?", ["No, you must fix everything manually", "Yes, by running `eslint --fix`, it can automatically fix simple issues like spacing, quotes, or adding missing dependencies to a hook", "Only in TypeScript", "Only if you pay for it"], 1]
    ],
    assignments: [
      { title: "Assignment 1: ESLint Configuration", description: "Write a short JSON snippet of an ESLint configuration that turns the 'no-unused-vars' rule completely 'off'." }
    ],
    practiceTasks: [
      { task: "Understand the difference between a Linter and a Formatter" },
      { task: "Learn how to read and modify an .eslintrc file" }
    ]
  },
  {
    order: 53,
    level: 10,
    title: "Final Project",
    description: "Build a real-world app",
    detailedExplanation: "## Final Project (🟢 LEVEL 10 – BEST PRACTICES)\n\n### The Capstone\nCongratulations! You have traversed the entire landscape of modern React development. \n\nYou have learned:\n- **Foundation:** JavaScript ES6, Array Methods, DOM.\n- **Core React:** JSX, Components, State, Props, Context.\n- **Intermediate:** React Router, Custom Hooks, Portals.\n- **Advanced:** Performance (useMemo), Error Boundaries, Code Splitting.\n- **Ecosystem:** Axios, React Query, Redux Toolkit, JWT Authentication.\n- **Testing & Architecture:** Jest, RTL, Scalable Folder Structures, ESLint.\n\n### 👉 The Real-World Application\nReading about code is entirely different from writing it. To truly cement your knowledge, you must build a comprehensive, full-stack application from scratch.\n\n### Recommended Final Project: A Project Management Tool (e.g., Jira Clone / Trello Clone)\nThis project forces you to use **every single concept** you've learned.\n\n**Requirements:**\n1. **Authentication:** Users must be able to Register, Login, and receive a JWT. (Module 41-43)\n2. **Architecture:** Use a scalable, feature-based folder structure. (Module 51)\n3. **Routing:** Implement nested routes for dashboards and protected routes to block unauthenticated users. (Module 21, 43)\n4. **State Management:** \n   - Use *React Query* to fetch boards and tasks from an API. (Module 37)\n   - Use *Redux Toolkit* or *Zustand* to manage drag-and-drop UI state or theme settings. (Module 39)\n5. **Performance:** Lazy load the heavy chart components or settings pages using `React.lazy` and `Suspense`. (Module 29)\n6. **Forms:** Build controlled forms for creating new tasks, complete with validation. (Module 17)\n7. **Custom Hooks:** Extract localstorage or media-query logic into reusable custom hooks. (Module 25)\n8. **Testing:** Write tests using React Testing Library to ensure users can successfully create a task. (Module 45)\n\n### Next Steps\nDo not copy a tutorial character-for-character. \nRead the documentation. Read the errors in your console. Struggle through the bugs. \n\nThat is how you become a Senior React Developer. Good luck!",
    codeExample: `import React, { useState, useEffect } from 'react';

export default function Graduation() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Simulate graduating after 1 second of mounting!
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', borderRadius: '12px', color: 'white', position: 'relative', overflow: 'hidden' }}>
      
      {showConfetti && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZpdTcxanp6Nmp5aXF4czAwaDZvdmE1ZnB2YXdvcHhlbmE2YXRwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif) center/cover', opacity: 0.3, pointerEvents: 'none' }} />
      )}

      <h1 style={{ fontSize: '48px', margin: '0 0 10px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>🎉 Congratulations! 🎉</h1>
      <h3 style={{ color: '#00ffcc', fontWeight: '300' }}>You have completed the React Mastery Curriculum.</h3>
      
      <div style={{ marginTop: '40px', background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '8px', display: 'inline-block', textAlign: 'left' }}>
        <h4>Your Final Mission:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>✅ Build a real-world project from scratch.</li>
          <li>✅ Implement a scalable folder architecture.</li>
          <li>✅ Secure it with JWT Authentication.</li>
          <li>✅ Manage complex data with Redux & React Query.</li>
          <li>✅ Deploy it to Vercel or Netlify.</li>
        </ul>
      </div>

      <div style={{ marginTop: '40px' }}>
        <button 
          onClick={() => alert("Go build something amazing!")}
          style={{ padding: '15px 30px', fontSize: '20px', background: '#e94560', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)' }}
        >
          Start Building 🚀
        </button>
      </div>
    </div>
  );
}`,
    quizzes: [
      ["What is the best way to solidify your knowledge of React?", ["Reading more tutorials", "Watching another 10-hour video course", "Building a comprehensive, real-world application from scratch", "Copying and pasting code"], 2],
      ["Which of the following describes a 'Feature-Based' architecture?", ["Putting all components in `src/components`", "Grouping files (API, components, hooks) by their domain/feature (e.g., `features/auth`)", "Putting all logic in `App.js`", "A database pattern"], 1],
      ["If you implement Authentication in your final project, what should the backend return upon a successful login?", ["An HTML page", "A JSON Web Token (JWT)", "A React component", "A Redux store"], 1],
      ["What library is recommended for fetching, caching, and managing 'Server State' (like a list of tasks from an API) in modern React?", ["Redux", "React Query (or SWR)", "Context API", "useState"], 1],
      ["If your final project has a massive, heavy charting library that is only used on the /stats route, how should you optimize it?", ["Delete the library", "Use `React.lazy` and `<Suspense>` to code-split the route so the chart code isn't downloaded until the user visits that page", "Use `useMemo`", "Use Redux"], 1],
      ["How should you prevent unauthenticated users from accessing the /dashboard route in your final project?", ["By hiding the link in the CSS", "By implementing a `<ProtectedRoute>` wrapper using React Router that checks the global auth state and redirects to `/login` if false", "By throwing an Error", "By asking nicely"], 1],
      ["What tool should you use to ensure your code formatting is consistent across the entire project?", ["ESLint", "Prettier", "Jest", "Vite"], 1],
      ["What tool should you use to catch bugs, unused variables, and hook dependency issues?", ["ESLint", "Prettier", "Jest", "Webpack"], 0],
      ["If you want to ensure your `<LoginForm>` renders correctly and successfully submits data when a user clicks 'Login', what tool should you use?", ["React Router", "React Testing Library (RTL)", "Redux Toolkit", "Axios"], 1],
      ["What makes a developer 'Senior'?", ["Knowing every React API by memory", "Never having bugs", "The ability to read documentation, debug errors independently, design scalable architectures, and solve real-world problems", "Typing really fast"], 2]
    ],
    assignments: [
      { title: "Assignment 1: Final Project Planning", description: "Write down the exact technology stack you will use for your final project (e.g., React, Vite, React Router, Redux Toolkit, React Query, TailwindCSS, etc.) and what each piece will do." }
    ],
    practiceTasks: [
      { task: "Design your database schema and API endpoints" },
      { task: "Build, test, and deploy a real-world application" }
    ]
  }
];

async function updateLevel10() {
  let updatedCount = 0;
  
  level10Data.forEach(newData => {
    // Overwrite the specific indexes for Modules 51, 52, 53
    const index = newData.order - 1; // 50, 51, 52
    
    if (modules[index]) {
      modules[index].title = newData.title;
      modules[index].description = newData.description;
      modules[index].level = newData.level;
      modules[index].detailedExplanation = newData.detailedExplanation;
      modules[index].codeExample = newData.codeExample;
      modules[index].quizzes = newData.quizzes.map((q, i) => ({
        question: "Question " + (i + 1) + ": " + q[0],
        options: q[1],
        correctAnswer: q[2]
      }));
      modules[index].assignments = newData.assignments;
      modules[index].practiceTasks = newData.practiceTasks;
      updatedCount++;
    }
  });

  const fileContent = "// Auto-generated seeder file containing 53 modules.\n" +
                      "// Generated via seed-builder.js and updated via scripts.\n\n" +
                      "export const modules = " + JSON.stringify(modules, null, 2) + ";\n";
                      
  fs.writeFileSync('./seeder.js', fileContent);
  console.log("✅ Successfully injected high-quality content and aligned titles for " + updatedCount + " Level 10 modules!");
}

updateLevel10();

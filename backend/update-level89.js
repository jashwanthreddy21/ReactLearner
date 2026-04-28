import fs from 'fs';
import { modules } from './seeder.js';

const level89Data = [
  {
    order: 44,
    level: 8,
    title: "Jest Basics",
    description: "JS Testing Framework",
    detailedExplanation: "## Jest Basics (🟢 LEVEL 8 – TESTING)\n\n### What is Software Testing?\nIn software development, writing code is only half the battle. Ensuring that the code works correctly (and continues to work when you add new features) is just as important. \n\n**Automated Testing** involves writing small programs that run your actual code and verify that the output matches your expectations. If you change a function and break its logic, your tests will fail, catching the bug before your users ever see it!\n\n### 👉 Enter Jest\n**Jest** is a delightful JavaScript Testing Framework maintained by Facebook. It focuses on simplicity and works out-of-the-box for React applications.\n\n### Core Concepts\n\n1. **Test Suites (`describe`)**: Groups related tests together.\n2. **Tests (`test` or `it`)**: An individual test case that verifies one specific behavior.\n3. **Expectations (`expect`)**: The core assertion. You \"expect\" a value to equal something.\n4. **Matchers (`toBe`, `toEqual`, etc.)**: Functions that define how to compare the expected output with the actual output.\n\n### Basic Example\nImagine you have a simple function that adds two numbers:\n```javascript\n// math.js\nexport function add(a, b) {\n  return a + b;\n}\n```\n\nHere is how you would test it using Jest:\n```javascript\n// math.test.js\nimport { add } from './math';\n\ndescribe('Math utilities', () => {\n  \n  test('adds 1 + 2 to equal 3', () => {\n    // 1. Call the function\n    const result = add(1, 2);\n    \n    // 2. Make an assertion\n    expect(result).toBe(3);\n  });\n\n  test('adds negative numbers correctly', () => {\n    expect(add(-1, -1)).toBe(-2);\n  });\n\n});\n```\n\n### Running Tests\nWhen you run the `jest` command in your terminal, Jest searches your project for files ending in `.test.js` or `.spec.js`, runs them, and prints a beautiful report of passes and fails.",
    codeExample: `// Conceptual Jest Example
import React, { useState } from 'react';

export default function JestDemo() {
  const [logs, setLogs] = useState([]);

  const runSimulatedTest = () => {
    setLogs([]);
    const addLog = (msg, color) => setLogs(prev => [...prev, { msg, color }]);
    
    addLog("Running Jest Test Suite...", "#00ffcc");
    
    setTimeout(() => {
      // Simulating a passing test
      addLog("PASS: adds 1 + 2 to equal 3", "#51cf66");
      
      // Simulating a failing test
      setTimeout(() => {
        addLog("FAIL: adds negative numbers correctly", "#ff6b6b");
        addLog("  Expected: -2", "gray");
        addLog("  Received: 0", "gray");
        
        setTimeout(() => {
          addLog("Test Suites: 1 failed, 1 total", "white");
          addLog("Tests:       1 failed, 1 passed, 2 total", "white");
        }, 500);
      }, 500);
    }, 500);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Jest Testing Concept</h2>
      <p>Jest runs your code and verifies expectations. If an expectation is wrong, the test fails!</p>
      
      <button onClick={runSimulatedTest}>Run Simulated Tests</button>

      {logs.length > 0 && (
        <div style={{ marginTop: '20px', background: '#111', padding: '15px', fontFamily: 'monospace' }}>
          {logs.map((log, i) => <div key={i} style={{ color: log.color, marginBottom: '5px' }}>{log.msg}</div>)}
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["What is automated software testing?", ["Writing code that runs automatically on a timer", "Writing small programs that execute your application code and verify its output matches expectations", "Testing the internet connection speed", "Deploying the code automatically"], 1],
      ["What is Jest?", ["A database", "A popular JavaScript testing framework maintained by Facebook", "A React Router plugin", "A CSS preprocessor"], 1],
      ["Which function is used to group related tests together in Jest?", ["`group()`", "`test()`", "`describe()`", "`suite()`"], 2],
      ["Which function defines an individual test case?", ["`test()` or `it()`", "`run()`", "`assert()`", "`execute()`"], 0],
      ["What is a 'Matcher' in Jest?", ["A dating app feature", "A method used with `expect()` to compare the actual output with the expected output (e.g., `.toBe()`, `.toEqual()`)", "A tool to match CSS classes", "A function that generates random data"], 1],
      ["If you want to test if an object strictly equals another object in Jest, which matcher should you use?", ["`.toBe()`", "`.toEqual()`", "`.toMatch()`", "`.isSame()`"], 1],
      ["What file extension does Jest automatically look for when searching for tests?", ["`.test.js` or `.spec.js`", "`.jest.js`", "`.test.jsx` only", "`.check.js`"], 0],
      ["If `add(2, 2)` returns `5`, what will Jest do?", ["Automatically fix the code", "Throw an error and mark the test as FAILED", "Ignore it", "Pause the program"], 1],
      ["Can Jest test basic JavaScript functions that don't use React?", ["No, it only works for React", "Yes, Jest is a general-purpose JavaScript testing framework and can test any JS function", "Only if it is run in Node.js", "Only in production"], 1],
      ["Why is automated testing important?", ["It proves the developer is smart", "It prevents regressions (old bugs reappearing) and gives confidence when adding new features or refactoring", "It makes the app run faster for the user", "It reduces the CSS file size"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Mental Execution", description: "Write out a Jest test block to test a function called `multiply(a, b)`. Expect multiply(3, 4) to be 12." }
    ],
    practiceTasks: [
      { task: "Understand the structure of describe, test, and expect" },
      { task: "Learn the difference between .toBe and .toEqual" }
    ]
  },
  {
    order: 45,
    level: 8,
    title: "React Testing Library",
    description: "Test React components",
    detailedExplanation: "## React Testing Library (RTL) (🟢 LEVEL 8 – TESTING)\n\n### Testing UI Components\nJest is great for testing pure JavaScript functions (like math logic). But how do you test a React component? You need to render the component, click buttons, and read the text on the screen.\n\n### 👉 Enter React Testing Library\nReact Testing Library (RTL) is a lightweight solution for testing React components. \nIts guiding principle is:\n> **\"The more your tests resemble the way your software is used, the more confidence they can give you.\"**\n\nInstead of testing the *implementation details* of a component (like checking if a state variable changed from `false` to `true`), RTL forces you to test what the *user actually sees and does*.\n\n### Core Workflow\n1. **Render**: Mount the component into an isolated, simulated DOM.\n2. **Query**: Find elements on the screen (just like a user scanning the page with their eyes).\n3. **Act**: Simulate user interactions (clicking, typing).\n4. **Assert**: Verify the DOM looks correct.\n\n### Basic Example\nImagine a simple Toggle component:\n```jsx\n// Toggle.js\nexport default function Toggle() {\n  const [isOn, setIsOn] = useState(false);\n  return <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>;\n}\n```\n\nHere is how you test it with RTL:\n```javascript\n// Toggle.test.js\nimport { render, screen, fireEvent } from '@testing-library/react';\nimport Toggle from './Toggle';\n\ntest('toggles between ON and OFF', () => {\n  // 1. Render the component\n  render(<Toggle />);\n  \n  // 2. Query the button element (find the button that says 'OFF')\n  const buttonElement = screen.getByText('OFF');\n  expect(buttonElement).toBeInTheDocument();\n\n  // 3. Act: Click the button\n  fireEvent.click(buttonElement);\n\n  // 4. Assert: The button text should now be 'ON'\n  expect(screen.getByText('ON')).toBeInTheDocument();\n});\n```\n\nBecause we tested the *text* instead of the *state*, our test ensures the component actually works from a user's perspective!",
    codeExample: `import React, { useState } from 'react';

export default function RTLDemo() {
  const [text, setText] = useState("");
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs(prev => [...prev, msg]);

  const simulateRTLTest = () => {
    setLogs([]);
    addLog("1. render(<InputComponent />)");
    addLog("2. screen.getByPlaceholderText('Type here')");
    
    setTimeout(() => {
      addLog("3. userEvent.type(input, 'Hello World')");
      setText("Hello World"); // Simulating the act
      
      setTimeout(() => {
        addLog("4. expect(screen.getByText('You typed: Hello World')).toBeInTheDocument()");
        addLog("✅ Test Passed!", "#51cf66");
      }, 1000);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>React Testing Library Concept</h2>
      <p>RTL tests what the user sees, not how the code is written.</p>
      
      <div style={{ border: '1px solid gray', padding: '15px', marginBottom: '20px' }}>
        <h4>Target Component:</h4>
        <input 
          placeholder="Type here" 
          value={text} 
          onChange={e => setText(e.target.value)} 
        />
        <p>You typed: <strong>{text}</strong></p>
      </div>

      <button onClick={simulateRTLTest}>Run Simulated RTL Test</button>

      {logs.length > 0 && (
        <div style={{ marginTop: '20px', background: '#222', padding: '10px', color: '#00ffcc' }}>
          {logs.map((log, i) => <p key={i} style={{ color: log === "✅ Test Passed!" ? '#51cf66' : '#00ffcc' }}>{log}</p>)}
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["What is the primary guiding principle of React Testing Library (RTL)?", ["Tests should be as fast as possible", "The more your tests resemble the way your software is used, the more confidence they can give you", "Never test UI components", "Always test internal state directly"], 1],
      ["Does RTL encourage testing 'Implementation Details' (like checking the exact name of a state variable)?", ["Yes, that is the most robust way to test", "No, it strongly discourages it. It encourages testing the actual DOM output that the user interacts with.", "Yes, but only for class components", "It doesn't matter"], 1],
      ["What function from RTL is used to mount a component into the simulated test DOM?", ["`mount()`", "`render()`", "`create()`", "`load()`"], 1],
      ["What object from RTL is used to query the simulated DOM to find elements?", ["`document`", "`window`", "`screen`", "`query`"], 2],
      ["Which of the following is an example of an RTL query?", ["`screen.findByCssClass`", "`screen.getByText`", "`screen.getById`", "`screen.findByTag`"], 1],
      ["How do you simulate a user clicking a button in an RTL test?", ["`button.click()`", "`simulate('click', button)`", "`fireEvent.click(buttonElement)`", "`triggerClick(button)`"], 2],
      ["What custom Jest matcher is provided by `@testing-library/jest-dom` to check if an element is visible in the DOM?", ["`.toBeTrue()`", "`.toBeRendered()`", "`.toBeInTheDocument()`", "`.toExist()`"], 2],
      ["If you change the internal state variable name from `isOn` to `active`, but the UI behaves exactly the same, will a properly written RTL test fail?", ["Yes, because the state name changed", "No, because RTL tests the rendered output (the UI), not the internal implementation details. This makes tests resilient to refactoring.", "Yes, because Jest is strict", "The test will crash"], 1],
      ["Why might you use `userEvent.type()` instead of `fireEvent.change()`?", ["`userEvent` is deprecated", "`userEvent` more accurately simulates real user interactions (firing keydown, keypress, keyup events in sequence)", "It is shorter to write", "It runs faster"], 1],
      ["What happens if `screen.getByText('Hello')` cannot find an element with that text?", ["It returns null", "It returns an empty array", "It throws an error, failing the test immediately", "It waits infinitely"], 2]
    ],
    assignments: [
      { title: "Assignment 1: Writing a Test", description: "Imagine a component <Counter /> that displays 'Count: 0' and has a button saying 'Add 1'. Write down the 4 steps (Render, Query, Act, Assert) you would use to test that clicking the button changes the text to 'Count: 1'." }
    ],
    practiceTasks: [
      { task: "Understand the philosophy of testing user behavior vs implementation details" },
      { task: "Familiarize yourself with the `render`, `screen`, and `fireEvent` functions" }
    ]
  },
  {
    order: 46,
    level: 8,
    title: "Snapshot Testing",
    description: "Prevent UI regressions",
    detailedExplanation: "## Snapshot Testing (🟢 LEVEL 8 – TESTING)\n\n### The Problem: Accidental UI Changes\nSometimes, you make a small change to a CSS file or a nested component, and it accidentally alters the visual structure of a completely different component elsewhere in the app. \n\nWriting manual RTL tests (`expect(screen.getByText(...))`) for every single visual element on every page is tedious and impractical.\n\n### 👉 Concept: Snapshot Testing\nSnapshot testing is a way to ensure your UI does not change unexpectedly. \n\nA snapshot test works like this:\n1. **First Run:** Jest renders your React component and takes a \"Snapshot\" (saving a copy of the generated HTML/JSON structure) to a file in your project.\n2. **Subsequent Runs:** Every time the test runs in the future, Jest renders the component again and compares the new output to the saved Snapshot.\n3. **Result:** If they match, the test passes. If there is *even a single character difference*, the test fails!\n\n### How to Write a Snapshot Test\nYou typically use the `react-test-renderer` package (or RTL's `asFragment()`).\n\n```javascript\nimport renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('renders correctly', () => {\n  // Generate the UI\n  const tree = renderer\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n    \n  // Assert that it matches the saved snapshot!\n  expect(tree).toMatchSnapshot();\n});\n```\n\n### Handling Failures\nWhen a snapshot test fails, it means one of two things:\n1. **It's a Bug:** You accidentally broke the UI. You should fix your code!\n2. **It's an Intentional Change:** You *meant* to change the button color from blue to red. In this case, you run `jest --updateSnapshot` (or press `u` in watch mode) to overwrite the old snapshot with the new, correct version.\n\nSnapshot tests are incredible for preventing regressions in complex UI layouts.",
    codeExample: `import React, { useState } from 'react';

export default function SnapshotDemo() {
  const [html, setHtml] = useState('<div class="box">\n  <h1>Hello</h1>\n</div>');
  const [snapshot, setSnapshot] = useState('<div class="box">\n  <h1>Hello</h1>\n</div>');
  const [result, setResult] = useState(null);

  const runSnapshotTest = () => {
    if (html === snapshot) {
      setResult({ passed: true, msg: "✅ PASS: New render matches saved snapshot!" });
    } else {
      setResult({ passed: false, msg: "❌ FAIL: Snapshot mismatch detected!" });
    }
  };

  const updateSnapshot = () => {
    setSnapshot(html);
    setResult({ passed: true, msg: "🔄 Snapshot Updated. Test passes." });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Snapshot Testing Demo</h2>
      <p>Change the current code. The test will fail until you intentionally update the snapshot!</p>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <h4>Saved Snapshot (Last Known Good):</h4>
          <pre style={{ background: '#222', padding: '10px', color: '#aaa' }}>{snapshot}</pre>
        </div>
        
        <div style={{ flex: 1 }}>
          <h4>Current Component Output:</h4>
          <textarea 
            value={html} 
            onChange={e => setHtml(e.target.value)}
            style={{ width: '100%', height: '80px', background: '#333', color: 'white', fontFamily: 'monospace' }}
          />
        </div>
      </div>

      <button onClick={runSnapshotTest} style={{ marginRight: '10px' }}>Run Test</button>
      <button onClick={updateSnapshot} style={{ background: '#e67e22' }}>Update Snapshot</button>

      {result && (
        <div style={{ marginTop: '20px', padding: '10px', background: result.passed ? '#193b22' : '#3b1c1c', color: result.passed ? '#51cf66' : '#ff6b6b' }}>
          {result.msg}
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["What is the primary purpose of Snapshot Testing?", ["To take screenshots of the browser", "To ensure your UI does not change unexpectedly (preventing regressions)", "To speed up rendering", "To test API performance"], 1],
      ["How does a Snapshot Test work on the very first run?", ["It fails", "It renders the component, saves the serialized HTML/JSON output to a physical file, and passes", "It asks the user to take a photo", "It compares the code to GitHub"], 1],
      ["What happens on subsequent runs of a Snapshot Test?", ["It generates a new snapshot and compares it to the saved one. If they differ, the test fails.", "It generates a new snapshot and overwrites the old one automatically", "It ignores the snapshot", "It takes a screenshot"], 1],
      ["Which Jest matcher is used for snapshot testing?", ["`.toEqualSnapshot()`", "`.toMatchSnapshot()`", "`.toBeSame()`", "`.toMatchImage()`"], 1],
      ["What should you do if a Snapshot test fails because you INTENTIONALLY changed a component's design?", ["Delete the test", "Change the code back", "Update the snapshot (e.g., by running `jest --updateSnapshot` or pressing 'u' in watch mode) so the new design becomes the baseline", "Ignore the failure forever"], 2],
      ["What should you do if a Snapshot test fails, but you did NOT intend to change that component?", ["Update the snapshot anyway", "Investigate the failure, as you likely introduced an accidental bug/regression, and fix your code", "Delete the component", "Ignore it"], 1],
      ["Are Snapshot tests a replacement for unit tests (e.g., testing that a button click actually increments a counter)?", ["Yes, they cover everything", "No, snapshot tests only verify the structural output. You still need RTL/Unit tests to verify interactive behavior.", "Yes, if used with Redux", "No, they only work on CSS"], 1],
      ["Should Snapshot files (`__snapshots__/`) be committed to your version control system (e.g., Git)?", ["No, they are temporary files", "Yes, they must be committed so your CI server and other developers can compare their changes against the accepted baseline", "Only if they are small", "Never"], 1],
      ["What package is commonly used to generate the snapshot tree for React components?", ["react-dom", "react-test-renderer", "react-snapshot", "jest-dom"], 1],
      ["If a component renders dynamic data that changes every second (like `Date.now()`), what will happen to the snapshot test?", ["It will pass", "It will fail on every single run because the new output will never match the saved snapshot", "It will ignore the date", "It will crash"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Intended vs Unintended", description: "Write down the difference in how a developer should respond when a snapshot test fails intentionally vs unintentionally." }
    ],
    practiceTasks: [
      { task: "Understand the concept of a baseline snapshot" },
      { task: "Learn when to update a snapshot" }
    ]
  },
  {
    order: 47,
    level: 8,
    title: "Mocking",
    description: "Simulate API calls in tests",
    detailedExplanation: "## Mocking (🟢 LEVEL 8 – TESTING)\n\n### The Problem: Unreliable Dependencies\nWhen writing automated tests, your components should be tested in **isolation**. \n\nIf your `UserProfile` component fetches data from `https://api.example.com/user`, running a test will actually make that network request. This is bad for several reasons:\n1. **Slow:** Network requests take seconds; tests should take milliseconds.\n2. **Unreliable:** If the API is down, or your WiFi drops, your test fails (even if your component code is perfect).\n3. **Destructive:** If the component sends a POST request (e.g., `deleteAccount()`), your test might accidentally delete real data!\n\n### 👉 Concept: Mocking\nMocking means replacing a real function, module, or API with a \"fake\" version specifically for the test. This fake version returns predictable, hardcoded data instantly.\n\n### Mocking Functions in Jest\nJest provides `jest.fn()` to create mock functions. You can track if they were called, how many times they were called, and what arguments were passed.\n\n```javascript\nconst myMock = jest.fn();\nmyMock('hello');\n\nexpect(myMock).toHaveBeenCalled();\nexpect(myMock).toHaveBeenCalledWith('hello');\n```\n\n### Mocking API Calls (Axios / Fetch)\nInstead of hitting a real API, you tell Jest to intercept the call and return fake data.\n\n```javascript\nimport axios from 'axios';\nimport { render, screen } from '@testing-library/react';\nimport UserProfile from './UserProfile';\n\n// 1. Tell Jest to mock the entire axios library\njest.mock('axios');\n\ntest('fetches and displays user data', async () => {\n  // 2. Setup the mock to return specific fake data\n  axios.get.mockResolvedValue({\n    data: { name: 'John Doe', age: 30 }\n  });\n\n  // 3. Render the component\n  render(<UserProfile />);\n\n  // 4. Assert that the component rendered the fake data!\n  const nameElement = await screen.findByText('John Doe');\n  expect(nameElement).toBeInTheDocument();\n});\n```\n\nBy mocking the API, your test runs instantly, requires no internet, and guarantees predictable results!",
    codeExample: `import React, { useState } from 'react';

export default function MockingDemo() {
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs(prev => [...prev, msg]);

  const runTestWithoutMock = () => {
    setLogs([]);
    addLog("🌐 Making REAL network request...");
    addLog("⏳ Waiting...");
    setTimeout(() => {
      addLog("❌ Test FAILED: API took too long or returned unexpected dynamic data.", "#ff6b6b");
    }, 2000);
  };

  const runTestWithMock = () => {
    setLogs([]);
    addLog("🛡️ Injecting MOCK API...");
    addLog("⚡ Mock intercepted request! Returning instant hardcoded data: { name: 'Fake User' }");
    addLog("✅ Test PASSED instantly!", "#51cf66");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mocking APIs in Tests</h2>
      <p>Tests should never hit real APIs. They should use predictable, instant Mocks.</p>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={runTestWithoutMock} style={{ background: '#e94560' }}>Run Test (Real API)</button>
        <button onClick={runTestWithMock} style={{ background: '#51cf66', color: '#111' }}>Run Test (Mock API)</button>
      </div>

      {logs.length > 0 && (
        <div style={{ marginTop: '20px', background: '#222', padding: '15px', fontFamily: 'monospace', color: '#00ffcc' }}>
          {logs.map((log, i) => <p key={i}>{log}</p>)}
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["Why should you NOT make real API calls in automated tests?", ["It is too slow", "It is unreliable (tests fail if WiFi drops)", "It can be destructive (accidentally deleting real data)", "All of the above"], 3],
      ["What does 'Mocking' mean in testing?", ["Making fun of bad code", "Replacing a real function or module with a fake, controllable version", "Copying code from StackOverflow", "Hiding errors"], 1],
      ["Which Jest function is used to create a basic mock function?", ["`jest.mock()`", "`jest.create()`", "`jest.fn()`", "`jest.fake()`"], 2],
      ["If you pass a function as a prop to a component (e.g., `<Button onClick={myMock} />`), how do you test if the component clicked it?", ["`expect(myMock).toHaveBeenCalled()`", "`expect(myMock).toBeTrue()`", "`expect(myMock).toBeClicked()`", "`expect(myMock).toRun()`"], 0],
      ["How do you mock an entire external library like Axios in Jest?", ["`jest.fake('axios')`", "`jest.mock('axios')`", "`axios.mock()`", "`import mockAxios`"], 1],
      ["What does `mockResolvedValue()` do?", ["It resolves an error", "It tells the mock function to return a Promise that resolves with a specific piece of hardcoded data", "It deletes the mock", "It tests the resolution"], 1],
      ["What is a major benefit of mocking API calls?", ["Tests run instantly and predictably without needing internet access", "It makes the actual application run faster in production", "It writes the API backend for you", "It improves CSS performance"], 0],
      ["Can you mock a function to return a rejected promise to test how your component handles API errors?", ["No, mocks only succeed", "Yes, using `mockRejectedValue()`", "Only in E2E tests", "Only if the server is offline"], 1],
      ["What does `expect(myMock).toHaveBeenCalledWith(5)` verify?", ["That the function was called 5 times", "That the function was called and the argument passed to it was exactly the number 5", "That the function returned 5", "That the function took 5 seconds to run"], 1],
      ["Are mocks used in production code?", ["Yes, always", "No, mocking is strictly a testing concept used to isolate components during test execution", "Only for admins", "Yes, to save bandwidth"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Mocking an API", description: "Write down the Jest code to mock the 'axios' module, and then set 'axios.get' to resolve with a data object containing `{ user: 'Admin' }`." }
    ],
    practiceTasks: [
      { task: "Understand why isolation is critical for unit tests" },
      { task: "Learn how to use jest.mock and jest.fn" }
    ]
  },
  {
    order: 48,
    level: 9,
    title: "useReducer",
    description: "Complex state management",
    detailedExplanation: "## useReducer (🟣 LEVEL 9 – ADVANCED HOOKS)\n\n### Beyond useState\n`useState` is perfect for simple, independent pieces of state (like a boolean flag or a single string). \n\nHowever, what if your component has **complex state logic** that involves multiple sub-values, or when the next state depends heavily on the previous state? Having five different `useState` hooks that all need to update at the exact same time can lead to bugs and messy code.\n\n### 👉 Enter useReducer\n`useReducer` is an alternative to `useState`. It is usually preferable when you have complex state logic. If you are familiar with Redux, you already know how `useReducer` works!\n\nIt accepts a **reducer function** and an **initial state**, and returns the current state paired with a **dispatch** method.\n\n### The Reducer Function\nA reducer is a pure function that takes the current `state` and an `action` object, and returns the *new* state.\n\n```javascript\n// The reducer function\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return { count: 0 };\n    default:\n      throw new Error();\n  }\n}\n```\n\n### Using the Hook\nInside your component, you use the hook and dispatch actions instead of calling setters directly.\n\n```jsx\nimport { useReducer } from 'react';\n\nfunction Counter() {\n  // Initialize the hook\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n\n  return (\n    <>\n      Count: {state.count}\n      {/* Dispatch an action object to trigger a state change */}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n    </>\n  );\n}\n```\n\n### Why use useReducer?\n1. **Predictability:** State transitions are explicitly defined as actions. You can't just set the state to arbitrary values.\n2. **Clean Components:** The complex update logic is extracted *outside* the component into the reducer function, keeping the component clean.\n3. **Testing:** Reducers are pure functions, making them incredibly easy to unit test independently of React.",
    codeExample: `import React, { useReducer } from 'react';

// 1. Define the Reducer function outside the component
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      // Return a new object spreading the old state, updating the specific field
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return { username: '', email: '', age: '' };
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  // 2. Initialize the hook with the reducer and initial state
  const [state, dispatch] = useReducer(formReducer, {
    username: '',
    email: '',
    age: ''
  });

  // 3. Dispatch actions
  const handleChange = (e) => {
    dispatch({ 
      type: 'UPDATE_FIELD', 
      field: e.target.name, 
      value: e.target.value 
    });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid gray' }}>
      <h2>useReducer Form Demo</h2>
      <p>Managing multiple related state fields with a single reducer.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input name="username" placeholder="Username" value={state.username} onChange={handleChange} />
        <input name="email" placeholder="Email" value={state.email} onChange={handleChange} />
        <input name="age" type="number" placeholder="Age" value={state.age} onChange={handleChange} />
        
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset Form</button>
      </div>

      <div style={{ marginTop: '20px', background: '#222', padding: '10px' }}>
        <h4>Current State Object:</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}`,
    quizzes: [
      ["What is `useReducer` primarily used for?", ["Fetching API data", "Routing between pages", "Managing complex state logic that involves multiple sub-values or complex transitions", "Styling components"], 2],
      ["What two arguments does the `useReducer` hook accept?", ["state and setState", "A reducer function and an initial state", "An action and a payload", "A dependency array and a callback"], 1],
      ["What does the `useReducer` hook return?", ["An array containing the current state and a `dispatch` function", "A single string", "A React component", "A Promise"], 0],
      ["What is a reducer function?", ["A function that deletes data", "A pure function that takes the current state and an action, and returns the newly updated state", "A CSS compiler", "An API handler"], 1],
      ["Which global state management library uses the exact same Reducer pattern?", ["Context API", "React Router", "Redux", "Axios"], 2],
      ["How do you trigger a state update when using `useReducer`?", ["By calling `setState(newValue)`", "By calling `dispatch({ type: 'ACTION_NAME' })`", "By modifying the state object directly", "By reloading the page"], 1],
      ["What is typically passed inside the `dispatch` function?", ["An HTML element", "An 'action' object, which must have a `type` property describing what happened", "A callback function", "A CSS string"], 1],
      ["Why is `useReducer` often better than `useState` for complex objects?", ["It is faster", "It extracts the complex update logic out of the component and centralizes it in a predictable reducer function", "It uses less memory", "It works without JavaScript"], 1],
      ["Should a reducer function cause side effects (like making an API call)?", ["Yes, that is its main purpose", "No, a reducer MUST be a pure function. It only calculates the next state.", "Only if it is async", "Only in class components"], 1],
      ["Can `useReducer` be used instead of `useState` for simple counters?", ["Yes, it works, but it's usually overkill for simple state", "No, it throws an error for numbers", "Only in Next.js", "No, it only accepts objects"], 0]
    ],
    assignments: [
      { title: "Assignment 1: Reducer Logic", description: "Write a reducer function that handles a 'TOGGLE_THEME' action, flipping a state object between { theme: 'light' } and { theme: 'dark' }." }
    ],
    practiceTasks: [
      { task: "Understand the relationship between state, action, and reducer" },
      { task: "Refactor multiple related useState hooks into a single useReducer" }
    ]
  },
  {
    order: 49,
    level: 9,
    title: "useLayoutEffect",
    description: "DOM mutation before paint",
    detailedExplanation: "## useLayoutEffect (🟣 LEVEL 9 – ADVANCED HOOKS)\n\n### The Problem with useEffect\nThe standard `useEffect` hook runs **asynchronously AFTER** the browser has painted the screen. \n\nThis is great for 99% of use cases (like fetching data or setting up subscriptions) because it doesn't block the browser from showing the UI to the user.\n\nHowever, if your effect involves **mutating the DOM** (e.g., reading an element's physical width and then changing its height based on that), using `useEffect` can cause a visual **flicker**.\nThe browser paints the initial state, *then* the effect runs and changes the DOM, and *then* the browser paints again instantly.\n\n### 👉 Enter useLayoutEffect\nThe signature is identical to `useEffect`, but it fires **synchronously BEFORE** the browser has a chance to paint the screen.\n\n```jsx\nimport { useLayoutEffect, useState, useRef } from 'react';\n\nfunction Tooltip() {\n  const [height, setHeight] = useState(0);\n  const ref = useRef(null);\n\n  // Runs BEFORE the user sees the screen\n  useLayoutEffect(() => {\n    // Read physical DOM measurements\n    const rect = ref.current.getBoundingClientRect();\n    // Trigger a synchronous re-render with the new height\n    setHeight(rect.height);\n  }, []);\n\n  return <div ref={ref}>Tooltip height: {height}</div>;\n}\n```\n\n### The Flow\n1. React renders the component (Virtual DOM).\n2. React updates the physical DOM.\n3. **`useLayoutEffect` runs synchronously.** (If it updates state, React immediately re-renders and updates the physical DOM again).\n4. **Browser paints the screen.** (The user only ever sees the final result).\n5. `useEffect` runs asynchronously.\n\n### When to use it?\nUse it **only** when you need to read layout from the DOM and synchronously re-render to prevent visual flickering. \nBecause it blocks the browser from painting, overusing it will make your app feel slow and unresponsive. Always default to `useEffect`.",
    codeExample: `import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

export default function LayoutEffectDemo() {
  const [value, setValue] = useState(0);
  const [logs, setLogs] = useState([]);
  
  const addLog = (msg) => setLogs(prev => [...prev, msg]);

  // Notice the order in the console logs!
  useLayoutEffect(() => {
    if (value === 0) return;
    addLog("⚡ useLayoutEffect ran (DOM updated, but not painted yet)");
    
    // Simulating a DOM measurement that causes a state update
    if (value === 10) {
      // This will cause a synchronous re-render BEFORE the browser paints "10"
      setValue(999); 
    }
  }, [value]);

  useEffect(() => {
    if (value === 0) return;
    addLog("🐢 useEffect ran (Browser has already painted the screen)");
  }, [value]);

  const handleTrigger = () => {
    setLogs([]);
    addLog("🔄 State updated to 10. React is processing...");
    setValue(10);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>useLayoutEffect vs useEffect</h2>
      <p>If you set the value to 10, the layout effect instantly intercepts it and changes it to 999 BEFORE you ever see the "10" flicker on screen.</p>
      
      <div style={{ fontSize: '24px', margin: '20px 0' }}>
        Current Value: <strong style={{ color: 'coral' }}>{value}</strong>
      </div>

      <button onClick={handleTrigger}>Trigger Flicker Test</button>
      <button onClick={() => { setValue(0); setLogs([]); }} style={{ marginLeft: '10px' }}>Reset</button>

      {logs.length > 0 && (
        <div style={{ marginTop: '20px', background: '#222', padding: '10px', color: '#00ffcc', fontFamily: 'monospace' }}>
          {logs.map((log, i) => <p key={i}>{log}</p>)}
        </div>
      )}
    </div>
  );
}`,
    quizzes: [
      ["When does standard `useEffect` run?", ["Before the component renders", "Synchronously during the render", "Asynchronously AFTER the browser has painted the screen", "Never"], 2],
      ["When does `useLayoutEffect` run?", ["Synchronously BEFORE the browser has a chance to paint the screen", "After the component unmounts", "When the user clicks a button", "Asynchronously on a background thread"], 0],
      ["What is the primary use case for `useLayoutEffect`?", ["Making API calls", "Reading physical DOM measurements (like width/height) and mutating the DOM to prevent visual flickering", "Writing to localStorage", "Adding event listeners"], 1],
      ["Why should you default to `useEffect` instead of `useLayoutEffect`?", ["Because `useLayoutEffect` doesn't exist in React 18", "Because `useLayoutEffect` is synchronous and blocks the browser from painting, which can cause the app to feel slow or unresponsive if overused", "Because `useEffect` is faster", "Because it is required by Redux"], 1],
      ["If you update state inside `useLayoutEffect`, what happens?", ["The app crashes", "React forces a synchronous re-render before the browser paints, ensuring the user only sees the final result", "React ignores the state update", "The browser paints the screen twice"], 1],
      ["Is the signature (the arguments it takes) of `useLayoutEffect` different from `useEffect`?", ["Yes, it takes 3 arguments", "No, it takes the exact same arguments (a callback function and a dependency array)", "Yes, it only takes an object", "Yes, it takes no dependencies"], 1],
      ["If you are fetching data from an API, which hook should you use?", ["useLayoutEffect", "useEffect", "useReducer", "useRef"], 1],
      ["If you have a tooltip component that needs to measure its own width to calculate whether to appear on the left or right side of a button without flickering, which hook should you use?", ["useEffect", "useLayoutEffect", "useContext", "useState"], 1],
      ["What warning does React throw if you use `useLayoutEffect` in a Server-Side Rendering (SSR) environment like Next.js?", ["It throws a syntax error", "It warns that `useLayoutEffect` does nothing on the server, because there is no DOM to measure", "It warns about memory leaks", "It disables React"], 1],
      ["In the execution timeline, which runs first?", ["useLayoutEffect", "useEffect", "They run at the exact same time", "It is random"], 0]
    ],
    assignments: [
      { title: "Assignment 1: The Flicker Test", description: "Write a short explanation of what 'Visual Flickering' means in the context of React rendering, and how useLayoutEffect prevents it." }
    ],
    practiceTasks: [
      { task: "Understand the React rendering and painting timeline" },
      { task: "Identify when to use useLayoutEffect instead of useEffect" }
    ]
  },
  {
    order: 50,
    level: 9,
    title: "useImperativeHandle",
    description: "Customize exposed refs",
    detailedExplanation: "## useImperativeHandle (🟣 LEVEL 9 – ADVANCED HOOKS)\n\n### The Problem with Refs and Components\nNormally, if you pass a `ref` from a parent component to a standard DOM element (like an `<input ref={myRef} />`), the parent gets full access to the raw DOM node (e.g., `myRef.current.focus()`).\n\nBut what if you want to pass a ref to a **Custom React Component**?\n```jsx\n<MyCustomInput ref={inputRef} />\n```\nBy default, functional components cannot be given refs. You must use `React.forwardRef` to forward the ref down to a DOM element inside the child.\n\nBut what if you don't want the parent to have full access to the raw DOM node? What if you only want the parent to be able to call a specific custom function, like `shake()` or `clear()`?\n\n### 👉 Enter useImperativeHandle\n`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`.\n\nIt allows a child component to say: *\"Hey Parent, you gave me a ref. Instead of giving you the raw HTML element, I am going to give you an object with exactly three custom functions that you are allowed to call.\"*\n\n### Example Implementation\n\n```jsx\nimport { forwardRef, useImperativeHandle, useRef } from 'react';\n\n// 1. Wrap the component in forwardRef\nconst CustomInput = forwardRef((props, ref) => {\n  const inputRef = useRef(null);\n\n  // 2. Customize what the parent's ref.current will be\n  useImperativeHandle(ref, () => ({\n    // The parent can call this function!\n    focusAndClear: () => {\n      inputRef.current.focus();\n      inputRef.current.value = '';\n    }\n  }));\n\n  return <input ref={inputRef} type=\"text\" />;\n});\n\n// 3. The Parent Component\nfunction Parent() {\n  const customRef = useRef();\n\n  return (\n    <>\n      <CustomInput ref={customRef} />\n      {/* The parent calls the custom function exposed by the child */}\n      <button onClick={() => customRef.current.focusAndClear()}>Action</button>\n    </>\n  );\n}\n```\n\n### When to use it?\nVery rarely. React dictates a declarative, top-down data flow using props. Calling functions directly on child components (imperative programming) goes against React's philosophy. \nOnly use it for focusing, text selection, media playback, or triggering imperative animations.",
    codeExample: `import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

// 1. Child Component wrapped in forwardRef
const SecretBox = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // 2. Expose specific custom methods to the parent
  useImperativeHandle(ref, () => ({
    openBox: () => setIsOpen(true),
    closeBox: () => setIsOpen(false),
    toggleBox: () => setIsOpen(!isOpen)
  }));

  return (
    <div style={{ 
      width: '150px', height: '150px', 
      background: isOpen ? '#51cf66' : '#862e9c', 
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      borderRadius: '8px', color: 'white', fontWeight: 'bold'
    }}>
      {isOpen ? '🔓 OPEN' : '🔒 LOCKED'}
    </div>
  );
});

export default function ImperativeHandleDemo() {
  // 3. Parent creates a ref
  const boxRef = useRef(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useImperativeHandle Demo</h2>
      <p>The Parent component is imperatively calling methods exposed by the Child component.</p>
      
      <SecretBox ref={boxRef} />

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        {/* Parent triggers child methods directly via the ref! */}
        <button onClick={() => boxRef.current.openBox()}>Open Box</button>
        <button onClick={() => boxRef.current.closeBox()}>Close Box</button>
        <button onClick={() => boxRef.current.toggleBox()}>Toggle Box</button>
      </div>
    </div>
  );
}`,
    quizzes: [
      ["By default, can you pass a `ref` attribute to a custom Functional Component?", ["Yes, it works exactly like an HTML element", "No, functional components don't have instances. You must wrap them in `React.forwardRef` first.", "Only in Class components", "Only if the ref is a string"], 1],
      ["What is the purpose of `useImperativeHandle`?", ["To fetch data imperatively", "To customize the object/methods exposed to a parent component when using a `ref`", "To bypass React Router", "To mutate state directly"], 1],
      ["What hook MUST wrap the child component in order to use `useImperativeHandle`?", ["`React.memo`", "`React.Fragment`", "`React.forwardRef`", "`React.Suspense`"], 2],
      ["Instead of exposing the raw DOM element to the parent, what does `useImperativeHandle` usually expose?", ["A Redux store", "An object containing specific, custom functions that the parent is allowed to call", "A CSS file", "A new React element"], 1],
      ["Why does React recommend using `useImperativeHandle` sparingly?", ["Because it is deprecated", "Because it relies on imperative code (calling methods directly), which goes against React's core philosophy of declarative, prop-driven UI", "Because it uses too much memory", "Because it crashes the browser"], 1],
      ["What is a valid use case for `useImperativeHandle`?", ["Passing user data to a child", "Triggering a complex imperative animation or focus management inside a child component from a parent", "Styling a component", "Routing to a new page"], 1],
      ["If the child exposes `{ shake: () => {...} }` via `useImperativeHandle`, how does the parent call it?", ["`child.shake()`", "`ref.current.shake()`", "`ref.shake()`", "`shake(ref)`"], 1],
      ["What are the first two arguments of `useImperativeHandle`?", ["state and action", "The `ref` object received from the parent, and a callback function that returns the custom object to expose", "A string and a boolean", "A DOM node and a class"], 1],
      ["What is the meaning of 'Imperative' programming vs 'Declarative' programming?", ["They are the same", "Imperative dictates *how* to do something step-by-step (e.g., `element.focus()`); Declarative dictates *what* the result should be (e.g., `isOpen={true}`)", "Imperative uses CSS, Declarative uses HTML", "Imperative is for backends"], 1],
      ["If you just want the parent to have direct access to the child's `<input>` DOM node to read its value, do you need `useImperativeHandle`?", ["Yes, always", "No, you can just use `React.forwardRef` to pass the ref directly to the `<input>`. `useImperativeHandle` is only needed to *restrict or customize* what is exposed.", "No, refs are not needed for inputs", "Yes, to prevent XSS"], 1]
    ],
    assignments: [
      { title: "Assignment 1: Custom Methods", description: "Explain why you would use `useImperativeHandle` instead of just passing a ref directly to an underlying DOM element." }
    ],
    practiceTasks: [
      { task: "Understand the difference between Declarative and Imperative code" },
      { task: "Learn how to combine forwardRef with useImperativeHandle" }
    ]
  }
];

async function updateLevel89() {
  let updatedCount = 0;
  
  level89Data.forEach(newData => {
    // We update by index to overwrite whatever is in positions 43 through 49
    // This perfectly aligns the curriculum with the user's requested titles
    const index = newData.order - 1; // e.g., order 44 is index 43
    
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
  console.log("✅ Successfully injected high-quality content and aligned titles for " + updatedCount + " Level 8 & 9 modules!");
}

updateLevel89();

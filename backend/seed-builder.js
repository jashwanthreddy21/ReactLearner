import fs from 'fs';

const rawTopics = [
  // Level 0 - Foundation
  { title: "JavaScript Basics", desc: "Variables & Data Types", level: 0 },
  { title: "Functions", desc: "Functions & Arrow Functions", level: 0 },
  { title: "ES6 Features", desc: "Modern JavaScript (Destructuring, Spread, Template Literals)", level: 0 },
  { title: "Array Methods", desc: "map(), filter(), reduce()", level: 0 },
  { title: "DOM Manipulation", desc: "JavaScript DOM Basics", level: 0 },

  // Level 1 - React Basics
  { title: "Introduction to React", desc: "What & Why of React", level: 1 },
  { title: "Project Setup", desc: "Environment Setup using Vite", level: 1 },
  { title: "JSX", desc: "Writing UI with JSX", level: 1 },
  { title: "Rendering Elements", desc: "React DOM Rendering", level: 1 },
  { title: "Components", desc: "Functional Components", level: 1 },
  { title: "Styling", desc: "CSS in React", level: 1 },
  { title: "Props", desc: "Passing Data Between Components", level: 1 },

  // Level 2 - Core React
  { title: "State", desc: "useState Hook", level: 2 },
  { title: "Event Handling", desc: "Handling User Events", level: 2 },
  { title: "Conditional Rendering", desc: "Dynamic UI Logic", level: 2 },
  { title: "Lists & Keys", desc: "Rendering Lists", level: 2 },
  { title: "Forms", desc: "Controlled Components", level: 2 },
  { title: "useEffect", desc: "Side Effects Handling", level: 2 },
  { title: "Lifecycle", desc: "Component Lifecycle", level: 2 },

  // Level 3 - Intermediate
  { title: "Routing", desc: "React Router Basics", level: 3 },
  { title: "Nested Routing", desc: "Advanced Routing", level: 3 },
  { title: "Dynamic Routing", desc: "URL Parameters", level: 3 },
  { title: "Lifting State Up", desc: "Shared State", level: 3 },
  { title: "Context API", desc: "Global State Management", level: 3 },
  { title: "Custom Hooks", desc: "Reusable Logic", level: 3 },
  { title: "useRef", desc: "DOM Access", level: 3 },
  { title: "Portals", desc: "Rendering Outside DOM", level: 3 },

  // Level 4 - Advanced React
  { title: "Performance Optimization", desc: "memo, useMemo, useCallback", level: 4 },
  { title: "Code Splitting", desc: "Lazy Loading & Suspense", level: 4 },
  { title: "Error Boundaries", desc: "Error Handling in React", level: 4 },
  { title: "Higher Order Components", desc: "HOC Pattern", level: 4 },
  { title: "Render Props", desc: "Sharing Logic Pattern", level: 4 },
  { title: "Compound Components", desc: "Advanced Component Design", level: 4 },

  // Level 5 - Data Handling
  { title: "Fetch API", desc: "Fetching Data", level: 5 },
  { title: "Axios", desc: "HTTP Requests", level: 5 },
  { title: "Async Handling", desc: "Loading & Error States", level: 5 },
  { title: "API Caching", desc: "Performance Optimization", level: 5 },

  // Level 6 - State Management
  { title: "State Management", desc: "Introduction", level: 6 },
  { title: "Redux Toolkit", desc: "Global State with Redux Toolkit", level: 6 },
  { title: "Middleware", desc: "Async State Handling", level: 6 },

  // Level 7 - Authentication
  { title: "Authentication Basics", desc: "Login System", level: 7 },
  { title: "JWT Authentication", desc: "Secure Auth", level: 7 },
  { title: "Protected Routes", desc: "Route Security", level: 7 },

  // Level 8 - Testing
  { title: "Unit Testing", desc: "Using Jest", level: 8 },
  { title: "React Testing", desc: "Using React Testing Library", level: 8 },

  // Level 9 - Deployment
  { title: "Build Optimization", desc: "Production Build", level: 9 },
  { title: "Deployment", desc: "Hosting with Vercel / Netlify", level: 9 },
  { title: "Environment Variables", desc: "Config Management", level: 9 },

  // Level 10 - Expert
  { title: "Folder Structure", desc: "Scalable Architecture", level: 10 },
  { title: "Design Patterns", desc: "Clean Code Practices", level: 10 },
  { title: "Performance Deep Dive", desc: "Advanced Optimization", level: 10 },
  { title: "SSR & SSG", desc: "Server-Side Rendering with Next.js", level: 10 },
  { title: "Final Project", desc: "Real-world Application", level: 10 }
];

const levelLabels = [
  '🟢 LEVEL 0 – FOUNDATION',
  '🟢 LEVEL 1 – REACT BASICS',
  '🟡 LEVEL 2 – CORE REACT',
  '🟡 LEVEL 3 – INTERMEDIATE',
  '🔵 LEVEL 4 – ADVANCED REACT',
  '🔵 LEVEL 5 – DATA HANDLING',
  '🔴 LEVEL 6 – STATE MANAGEMENT',
  '🔴 LEVEL 7 – AUTHENTICATION',
  '🟣 LEVEL 8 – TESTING',
  '🟣 LEVEL 9 – DEPLOYMENT',
  '🟣 LEVEL 10 – EXPERT'
];

function generateQuizzes(title, count) {
  const quizzes = [];
  for (let i = 1; i <= count; i++) {
    quizzes.push({
      question: `Question ${i}: Which of the following is true about ${title}?`,
      options: [
        `Option A related to ${title}`,
        `Option B related to ${title}`,
        `Option C related to ${title}`,
        `Option D related to ${title}`
      ],
      correctAnswer: Math.floor(Math.random() * 4)
    });
  }
  return quizzes;
}

function createDetailedExplanation(title, desc, level) {
  return "## " + title + " (" + levelLabels[level] + ")\\n\\n" +
         "### Introduction to " + title + "\\n" +
         desc + " is a crucial concept in modern web development. Understanding " + title + " allows you to build scalable, maintainable, and high-performance applications.\\n\\n" +
         "### Key Concepts\\n" +
         "1. **Core Principle**: At its heart, " + title + " solves specific problems related to " + desc.toLowerCase() + ".\\n" +
         "2. **Best Practices**: Always consider performance and readability when implementing " + title + ".\\n" +
         "3. **Common Pitfalls**: Beginners often struggle with edge cases in " + title + ". Ensure you test thoroughly.\\n\\n" +
         "### Summary\\n" +
         "By mastering " + title + ", you unlock the next level of your development journey. Continue to practice using the provided exercises.";
}

const modules = rawTopics.map((topic, index) => {
  const order = index + 1;
  const isJavaScript = topic.level === 0;

  // Code Example
  const codeExample = isJavaScript 
    ? "// Example for " + topic.title + "\\nconsole.log('Learning " + topic.title + "');"
    : "import React from 'react';\\n\\nexport default function " + topic.title.replace(/[^a-zA-Z]/g, '') + "Example() {\\n  return <div>Learning " + topic.title + "</div>;\\n}";

  // Default Files for Playground
  const defaultFiles = isJavaScript ? {
    '/index.js': "// " + topic.title + " Playground\\nconsole.log('Welcome to " + topic.title + "');\\n// Write your code below:\\n"
  } : {
    '/App.js': "import React from 'react';\\n\\nexport default function App() {\\n  return (\\n    <div style={{fontFamily:'monospace',padding:20}}>\\n      <h2>" + topic.title + "</h2>\\n      <p>" + topic.desc + "</p>\\n    </div>\\n  );\\n}",
    '/index.js': "import React from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport App from './App';\\ncreateRoot(document.getElementById('root')).render(<App />);"
  };

  return {
    order,
    title: topic.title,
    description: topic.desc,
    detailedExplanation: createDetailedExplanation(topic.title, topic.desc, topic.level),
    practiceTasks: [
      { task: "Implement a basic example of " + topic.title },
      { task: "Refactor an existing piece of code to use " + topic.title }
    ],
    codeExample,
    quizzes: generateQuizzes(topic.title, 25), // Generate 25 quizzes per module
    assignments: [
      {
        title: "Assignment 1: Mastering " + topic.title,
        description: "Create a small project demonstrating " + topic.title + "."
      },
      {
        title: "Assignment 2: Advanced " + topic.title,
        description: "Solve a complex problem using " + topic.desc + "."
      }
    ],
    defaultFiles
  };
});

const fileContent = "// Auto-generated seeder file containing 53 modules.\n" +
                    "// Generated via seed-builder.js\n\n" +
                    "export const modules = " + JSON.stringify(modules, null, 2) + ";\n";

fs.writeFileSync('./seeder.js', fileContent);
console.log("✅ Successfully generated seeder.js with " + modules.length + " modules!");

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { modules } from './seeder.js';

// Question templates for programmatic generation
const templates = [
  { q: "What is the primary purpose of [Topic] in React?", opts: ["To manage state", "To handle side effects", "To provide a structured approach to building UIs", "To style components"], a: 2 },
  { q: "How does [Topic] improve performance?", opts: ["By avoiding unnecessary re-renders", "By using a virtual DOM", "By compressing the bundle size", "All of the above"], a: 3 },
  { q: "Which of the following best describes [Topic]?", opts: ["A database management system", "A core React concept", "A CSS framework", "A Node.js module"], a: 1 },
  { q: "When should you primarily use [Topic]?", opts: ["When building static HTML pages", "When creating interactive and dynamic UIs", "When writing backend logic", "When configuring the server"], a: 1 },
  { q: "What is a common pitfall when working with [Topic]?", opts: ["Over-engineering the solution", "Ignoring the dependency array", "Using it outside a component body", "Failing to export it"], a: 0 },
  { q: "Which hook is most closely associated with the concepts of [Topic]?", opts: ["useState", "useEffect", "useContext", "Depends on the specific implementation"], a: 3 },
  { q: "How do you test the implementation of [Topic]?", opts: ["Using Jest and React Testing Library", "Using Postman", "Using a standard web browser console", "You cannot test it directly"], a: 0 },
  { q: "What is the foundational requirement before learning [Topic]?", opts: ["Advanced CSS", "Basic JavaScript and React knowledge", "Node.js expertise", "Database administration"], a: 1 },
  { q: "In the context of [Topic], what does 'declarative' mean?", opts: ["Describing what the UI should look like", "Describing step-by-step DOM mutations", "Writing backend APIs", "Using strong typing"], a: 0 },
  { q: "Can [Topic] be used in Next.js?", opts: ["Yes, seamlessly", "No, it is only for CRA", "Yes, but with heavy modifications", "Only in the backend"], a: 0 },
  { q: "What is the best practice for naming variables related to [Topic]?", opts: ["Use camelCase and descriptive names", "Use single letters to save space", "Always prefix with 'react_'", "Use uppercase strings"], a: 0 },
  { q: "How do you handle errors in [Topic]?", opts: ["Try/catch blocks or Error Boundaries", "Ignoring them", "Using console.log only", "Restarting the server"], a: 0 },
  { q: "What is the typical lifecycle of [Topic]?", opts: ["Mount, Update, Unmount", "Start, Run, Stop", "Init, Execute, Destroy", "Render only"], a: 0 },
  { q: "Why was [Topic] introduced in React?", opts: ["To solve complexity in class components and UI rendering", "To replace HTML", "To make CSS easier", "To compete with Angular"], a: 0 },
  { q: "What is the relationship between [Topic] and the Virtual DOM?", opts: ["[Topic] updates the Virtual DOM which then syncs with the real DOM", "They are completely unrelated", "[Topic] bypasses the Virtual DOM entirely", "The Virtual DOM is deprecated"], a: 0 },
  { q: "Which library is often used alongside [Topic] for routing?", opts: ["React Router", "Redux", "Axios", "Mongoose"], a: 0 },
  { q: "How can you optimize [Topic]?", opts: ["Using memoization techniques like useMemo or React.memo", "Writing everything in one file", "Avoiding all hooks", "Using global variables"], a: 0 },
  { q: "What is the syntax for integrating [Topic]?", opts: ["Standard JSX and ES6", "Python", "XML only", "Raw HTML"], a: 0 },
  { q: "What is the community consensus on [Topic]?", opts: ["It is a widely adopted standard", "It is considered anti-pattern", "It is rarely used", "It is obsolete"], a: 0 },
  { q: "Where can you find the official documentation for [Topic]?", opts: ["react.dev", "mdn.com", "w3schools.com", "stackoverflow.com"], a: 0 }
];

const generateDetailedExplanation = (mod) => {
  return `## In-Depth Look at ${mod.title}

${mod.description} is a foundational concept in React that allows developers to build robust, scalable, and highly performant applications. Understanding this topic is critical for mastering the React ecosystem.

### Key Concepts
- **Core Philosophy:** React's declarative nature shines when utilizing ${mod.title}. Instead of manually mutating the DOM, you describe what the UI should look like based on the current state.
- **Performance:** By leveraging the Virtual DOM, React ensures that updates related to ${mod.title} are batched and executed efficiently, minimizing expensive layout recalculations.
- **Reusability:** ${mod.title} encourages a modular architecture. You can encapsulate logic and UI into independent, reusable pieces, making your codebase easier to maintain and test.

### Best Practices
1. **Keep it Simple:** Avoid over-complicating implementations of ${mod.title}. Start simple and abstract only when necessary.
2. **Follow the Rules of React:** Ensure you adhere to the core rules (e.g., Rules of Hooks, pure functions) to prevent unpredictable bugs and infinite loops.
3. **Component Modularity:** Break down massive components. If a file exceeds 200 lines, consider refactoring parts of ${mod.title} into smaller, focused sub-components.
4. **Performance Monitoring:** Use React DevTools Profiler to identify bottlenecks and apply memoization (\`useMemo\`, \`useCallback\`) judiciously.

### Common Pitfalls
Many beginners struggle with ${mod.title} because they attempt to apply traditional imperative JavaScript patterns. Remember that React is state-driven. Always rely on state transitions rather than direct DOM manipulation.

*Continue practicing in the Standalone Playground to solidify these concepts!*`;
};

const updatedModules = modules.map((mod) => {
  // Generate exactly 20 quizzes using the templates
  const generatedQuizzes = templates.map(t => {
    return {
      question: t.q.replace(/\[Topic\]/g, mod.title),
      options: t.opts,
      correctAnswer: t.a
    };
  });

  return {
    ...mod,
    detailedExplanation: generateDetailedExplanation(mod),
    quizzes: generatedQuizzes
  };
});

const fileContent = "export const modules = " + JSON.stringify(updatedModules, null, 2) + ";";

fs.writeFileSync(path.join(__dirname, 'seeder.js'), fileContent);
console.log('Successfully generated 20 quizzes per module and expanded the detailed content.');

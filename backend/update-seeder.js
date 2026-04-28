import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { modules } from './seeder.js';

const updatedModules = modules.map((mod) => ({
  ...mod,
  codeExample: `// Code Example for ${mod.title}\nfunction Example() {\n  return <div>Welcome to ${mod.title}!</div>;\n}`,
  quizzes: [
    {
      question: `Which of the following is true about ${mod.title}?`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 1,
    },
    {
      question: `What is the primary use of ${mod.title}?`,
      options: ['To style components', 'To manage logic', 'To render UI', 'None of the above'],
      correctAnswer: 2,
    }
  ],
  assignments: [
    {
      title: `Assignment 1: Apply ${mod.title}`,
      description: `In this assignment, you will build a small application that thoroughly utilizes the concepts of ${mod.title}. Make sure to follow best practices.`
    }
  ]
}));

const fileContent = "export const modules = " + JSON.stringify(updatedModules, null, 2) + ";";

fs.writeFileSync(path.join(__dirname, 'seeder.js'), fileContent);
console.log('Successfully updated seeder.js with quizzes, assignments, and code examples.');

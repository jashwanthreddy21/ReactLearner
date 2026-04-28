import fs from 'fs';
import { modules } from './seeder.js';

const jwtData = {
  "JWT Authentication": {
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
  }
};

async function updateJWT() {
  const mod = modules.find(m => m.title === "JWT Authentication");
  if (mod) {
    const data = jwtData["JWT Authentication"];
    mod.detailedExplanation = data.detailedExplanation;
    mod.codeExample = data.codeExample;
    mod.quizzes = data.quizzes.map((q, i) => ({
      question: "Question " + (i + 1) + ": " + q[0],
      options: q[1],
      correctAnswer: q[2]
    }));
    mod.assignments = data.assignments;
    mod.practiceTasks = data.practiceTasks;
    
    const fileContent = "// Auto-generated seeder file containing 53 modules.\n" +
                        "// Generated via seed-builder.js and updated via scripts.\n\n" +
                        "export const modules = " + JSON.stringify(modules, null, 2) + ";\n";
                        
    fs.writeFileSync('./seeder.js', fileContent);
    console.log("✅ Successfully injected JWT module!");
  } else {
    console.log("❌ Could not find JWT module");
  }
}

updateJWT();

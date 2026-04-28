# React Learning Platform 🚀

A comprehensive, full-stack web application designed to teach React through interactive, hands-on learning. The platform features an integrated live coding environment, structured curriculum modules, and progress tracking.

## 🌟 Features

- **Interactive Code Playground:** Built-in VS Code-like coding environment using `@codesandbox/sandpack-react` allowing users to write, execute, and test React code directly in the browser.
- **Structured Curriculum:** Step-by-step learning modules with detailed explanations and contextual assignments.
- **User Authentication:** Secure JWT-based registration and login system with encrypted passwords using `bcryptjs`.
- **Progress Tracking:** Saves user progress across modules using Zustand for frontend state and MongoDB for persistence.
- **Modern UI/UX:** Responsive, sleek design built with Tailwind CSS v4 and Lucide React icons.

## 🛠 Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS v4
- React Router DOM
- Zustand (State Management)
- Axios
- Sandpack React (Live Code Editor)

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (JSON Web Tokens) for Authentication

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally, or a MongoDB Atlas URI

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd ReactLearningPlatform
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

*(Note: The project may use `mongodb-memory-server` for local development. Check `backend/config/db.js` for exact DB configuration).*

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Start the Vite development server:

```bash
npm run dev
```

### 4. Seed the Database (Optional)

If you want to populate the database with initial curriculum content, run the seeder script from the backend directory:

```bash
cd backend
node force-seed.js # or node seeder.js based on your setup
```

## 📝 License

This project is licensed under the ISC License.

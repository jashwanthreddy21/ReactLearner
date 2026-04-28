import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from './store/useAuthStore';
import Dashboard from './pages/Dashboard';
import ModuleViewer from './pages/ModuleViewer';
import StandalonePlayground from './pages/StandalonePlayground';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';

function App() {
  const { user } = useAuthStore();
  
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50 font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/modules/:id" element={<ModuleViewer />} />
            <Route path="/playground" element={<StandalonePlayground />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { BookOpen, LogOut, User, Code } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-slate-800 border-b border-slate-700 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-brand-500 hover:text-brand-400 transition-colors">
          <BookOpen className="w-6 h-6" />
          <span>ReactMastery</span>
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/playground" className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors mr-2">
                <Code className="w-4 h-4" />
                Playground
              </Link>
              <Link to="/dashboard" className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <User className="w-4 h-4" />
                Dashboard
              </Link>
              <button onClick={onLogout} className="text-slate-300 hover:text-red-400 flex items-center gap-2 transition-colors">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-slate-300 hover:text-white transition-colors">Login</Link>
              <Link to="/register" className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-md transition-colors shadow-lg shadow-brand-500/20">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

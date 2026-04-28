import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { BookOpen, LogOut, User, Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const NavLinks = () => (
    <>
      {user ? (
        <>
          <Link to="/playground" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
            <Code className="w-4 h-4" />
            Playground
          </Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
            <User className="w-4 h-4" />
            Dashboard
          </Link>
          <button onClick={onLogout} className="text-slate-300 hover:text-red-400 flex items-center gap-2 transition-colors text-left">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-md transition-colors shadow-lg shadow-brand-500/20 text-center">Sign Up</Link>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-slate-800 border-b border-slate-700 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-brand-500 hover:text-brand-400 transition-colors">
          <BookOpen className="w-6 h-6" />
          <span>ReactMastery</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-4 border-t border-slate-700 pt-4">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

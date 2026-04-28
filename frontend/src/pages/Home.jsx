import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Layout, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 inline-block p-4 rounded-2xl bg-gradient-to-tr from-brand-600/20 to-purple-600/20 ring-1 ring-white/10 backdrop-blur-xl">
          <Code2 className="w-16 h-16 text-brand-500" />
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-purple-400">
          Master React Step-by-Step
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Go from beginner to advanced with interactive modules and a real-time VS Code-like playground. Learn by doing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register" className="bg-brand-600 hover:bg-brand-500 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] hover:-translate-y-1">
            Start Learning Now
          </Link>
          <Link to="/login" className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-8 py-4 rounded-xl transition-all border border-slate-700">
            I already have an account
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24 text-left">
        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
          <Layout className="w-10 h-10 text-brand-400 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-slate-200">Structured Path</h3>
          <p className="text-slate-400">10 modules carefully crafted to take you from React concepts to advanced performance patterns.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
          <Code2 className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-slate-200">Live Playground</h3>
          <p className="text-slate-400">Write real React code in a multi-file editor with instant preview. No setup required.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
          <Zap className="w-10 h-10 text-yellow-400 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-slate-200">Instant Feedback</h3>
          <p className="text-slate-400">See errors and console output instantly, exactly like a real developer environment.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

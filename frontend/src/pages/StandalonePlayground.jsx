import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import Playground from '../playground/Playground';

const StandalonePlayground = () => {
  const location = useLocation();
  const assignment = location.state;

  return (
    <div className="flex-grow flex flex-col w-full h-[calc(100vh-73px)] overflow-hidden">
      <header className="bg-[#252526] border-b border-black px-6 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-1.5 bg-[#1e1e1e] rounded-md text-[#cccccc] hover:text-white transition-colors border border-slate-700">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 128 128" width="20" height="20">
              <path fill="#007ACC" d="M93.3 14.5L34.1 63.8l59.2 49.3c3.2 2.7 7.7.4 7.7-3.8V18.3c0-4.2-4.5-6.5-7.7-3.8z"/>
              <path fill="#0065A9" d="M34.1 63.8l-19.6-16.3c-2.4-2-5.9-.2-5.9 2.9v33c0 3.1 3.5 4.9 5.9 2.9l19.6-16.3v-6.2z"/>
            </svg>
            <h1 className="text-lg font-semibold text-white">React Playground</h1>
          </div>
        </div>
      </header>

      {assignment && (
        <div className="bg-amber-900/40 border-b border-amber-700/50 p-4 shrink-0 flex items-start gap-4 shadow-inner">
          <Info className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-amber-400 font-bold text-lg mb-1">{assignment.assignmentTitle}</h2>
            <p className="text-amber-100/80 text-sm leading-relaxed">{assignment.assignmentDesc}</p>
          </div>
        </div>
      )}

      <div className="flex-grow w-full overflow-hidden">
        <Playground />
      </div>
    </div>
  );
};

export default StandalonePlayground;

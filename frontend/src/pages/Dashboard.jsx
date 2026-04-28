import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import useProgressStore from '../store/useProgressStore';
import { PlayCircle, CheckCircle2, Circle } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { modules, getModules, isLoading } = useProgressStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      getModules();
    }
  }, [user, navigate, getModules]);

  if (isLoading || !modules.length) {
    return <div className="flex-grow flex items-center justify-center text-slate-400">Loading modules...</div>;
  }

  // Fallback to array if completedModules is undefined
  const completed = user?.completedModules || [];
  
  // Find next module
  const nextModule = modules.find(m => !completed.includes(m._id)) || modules[modules.length - 1];
  const progressPercent = modules.length > 0 ? Math.round((completed.length / modules.length) * 100) : 0;

  return (
    <div className="flex-grow max-w-6xl mx-auto w-full p-4 md:p-6">
      <header className="mb-6 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center md:text-left">Welcome back, {user?.name.split(' ')[0]}!</h1>
        <p className="text-slate-400 text-base md:text-lg text-center md:text-left">Ready to continue your React journey?</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800 rounded-2xl p-5 md:p-6 border border-slate-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10">
              <PlayCircle className="w-32 h-32 md:w-48 md:h-48 text-brand-500" />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-300 mb-2">Up Next</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{nextModule.title}</h3>
            <p className="text-slate-400 mb-6 md:mb-8 max-w-md text-sm md:text-base">{nextModule.description}</p>
            <Link to={`/modules/${nextModule._id}`} className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-5 py-3 md:px-6 md:py-3 rounded-xl font-medium transition-colors shadow-lg shadow-brand-500/20 w-full md:w-auto justify-center">
              <PlayCircle className="w-5 h-5" />
              {completed.length === 0 ? 'Start Learning' : 'Resume Learning'}
            </Link>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5 md:p-6 border border-slate-700">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">Course Modules</h3>
            <div className="space-y-4">
              {modules.map((module, index) => {
                const isCompleted = completed.includes(module._id);
                
                return (
                  <Link 
                    key={module._id} 
                    to={`/modules/${module._id}`}
                    className={`flex items-center justify-between p-3 md:p-4 rounded-xl border bg-slate-700/30 border-slate-700 hover:border-brand-500 transition-colors`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0">
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                        ) : (
                          <Circle className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-200 text-sm md:text-base">
                          {module.order}. {module.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-400 hidden sm:block">{module.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800 rounded-2xl p-5 md:p-6 border border-slate-700">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Your Progress</h3>
            <div className="flex justify-between text-xs md:text-sm mb-2">
              <span className="text-slate-400">Completed</span>
              <span className="text-brand-400 font-medium">{completed.length} / {modules.length}</span>
            </div>
            <div className="h-3 md:h-4 bg-slate-900 rounded-full overflow-hidden mb-4 md:mb-6">
              <div 
                className="h-full bg-gradient-to-r from-brand-600 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-white">{progressPercent}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

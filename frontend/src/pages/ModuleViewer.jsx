import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useProgressStore from '../store/useProgressStore';
import useAuthStore from '../store/useAuthStore';
import { ChevronLeft, ChevronRight, CheckCircle, Code, BookOpen, HelpCircle, Briefcase } from 'lucide-react';
import { SandpackProvider, SandpackCodeEditor } from '@codesandbox/sandpack-react';

const ModuleViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentModule, getModuleById, completeModule, modules, getModules, isLoading } = useProgressStore();
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('learn'); // 'learn', 'example', 'quiz', 'assignment'
  const [quizScores, setQuizScores] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    if (!modules.length) {
      getModules();
      return; // wait for modules to load
    }
    
    // Removed locking restriction logic


    getModuleById(id);
    setActiveTab('learn');
    setQuizScores({});
    setQuizSubmitted(false);
  }, [id, getModules, getModuleById, modules, navigate, user]);

  if (isLoading || !currentModule || !modules.length) {
    return <div className="flex-grow flex items-center justify-center text-slate-400 h-full">Loading module...</div>;
  }

  const currentIndex = modules.findIndex(m => m._id === id);
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  const handleComplete = () => {
    completeModule(id);
    if (nextModule) {
      navigate(`/modules/${nextModule._id}`);
    } else {
      navigate('/dashboard');
    }
  };

  const handleQuizChange = (qIndex, oIndex) => {
    if (!quizSubmitted) {
      setQuizScores({ ...quizScores, [qIndex]: oIndex });
    }
  };

  const calculateQuizScore = () => {
    if (!currentModule.quizzes) return 0;
    let score = 0;
    currentModule.quizzes.forEach((q, idx) => {
      if (quizScores[idx] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <div className="flex-grow flex flex-col h-full bg-[#0E1117] text-slate-300 font-sans overflow-hidden">
      {/* Notion-style Header */}
      <header className="px-4 md:px-8 py-4 md:py-6 flex flex-col gap-3 md:gap-4 shrink-0 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-4 text-slate-400">
          <Link to="/dashboard" className="hover:text-white transition-colors flex items-center gap-1 text-xs md:text-sm font-medium">
            <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" /> Back to Dashboard
          </Link>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          Module {currentModule.order}: {currentModule.title}
        </h1>
        <p className="text-base md:text-lg text-slate-400 line-clamp-2 md:line-clamp-none">{currentModule.description}</p>
        
        {/* Tabs */}
        <div className="flex gap-4 md:gap-6 mt-2 md:mt-4 border-b border-slate-800 overflow-x-auto scrollbar-hide no-scrollbar">
          <button 
            onClick={() => setActiveTab('learn')}
            className={`pb-2 md:pb-3 text-xs md:text-sm font-semibold flex items-center gap-2 transition-colors border-b-2 whitespace-nowrap ${activeTab === 'learn' ? 'text-brand-400 border-brand-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}
          >
            <BookOpen className="w-3 h-3 md:w-4 md:h-4" /> Learn
          </button>
          <button 
            onClick={() => setActiveTab('example')}
            className={`pb-2 md:pb-3 text-xs md:text-sm font-semibold flex items-center gap-2 transition-colors border-b-2 whitespace-nowrap ${activeTab === 'example' ? 'text-purple-400 border-purple-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}
          >
            <Code className="w-3 h-3 md:w-4 md:h-4" /> Code Example
          </button>
          <button 
            onClick={() => setActiveTab('quiz')}
            className={`pb-2 md:pb-3 text-xs md:text-sm font-semibold flex items-center gap-2 transition-colors border-b-2 whitespace-nowrap ${activeTab === 'quiz' ? 'text-green-400 border-green-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}
          >
            <HelpCircle className="w-3 h-3 md:w-4 md:h-4" /> Quiz
          </button>
          <button 
            onClick={() => setActiveTab('assignment')}
            className={`pb-2 md:pb-3 text-xs md:text-sm font-semibold flex items-center gap-2 transition-colors border-b-2 whitespace-nowrap ${activeTab === 'assignment' ? 'text-amber-400 border-amber-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}
          >
            <Briefcase className="w-3 h-3 md:w-4 md:h-4" /> Assignment
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto custom-scrollbar">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8 pb-10 md:pb-20 pt-2 md:pt-4">
          
          {/* LEARN TAB */}
          {activeTab === 'learn' && (
            <div className="prose prose-invert prose-brand max-w-none prose-sm md:prose-lg">
              <div dangerouslySetInnerHTML={{ __html: currentModule.detailedExplanation.replace(/\n/g, '<br/>') }} />
              {currentModule.practiceTasks && currentModule.practiceTasks.length > 0 && (
                <div className="mt-8 md:mt-12 p-4 md:p-6 bg-slate-900 rounded-2xl border border-slate-800">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 mt-0">Practice Tasks</h3>
                  <ul className="space-y-3 m-0 p-0 list-none">
                    {currentModule.practiceTasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-500 shrink-0" />
                        <span className="text-sm md:text-base text-slate-300">{task.task}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs md:text-sm text-slate-400">Head over to the <Link to="/playground" className="text-brand-400 underline">Playground</Link> to practice these tasks!</p>
                </div>
              )}
            </div>
          )}

          {/* CODE EXAMPLE TAB */}
          {activeTab === 'example' && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#1e1e1e]">
              <div className="bg-[#252526] px-4 py-2 md:py-3 flex items-center border-b border-black">
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-400">App.js</span>
              </div>
              <div className="p-2 md:p-4">
                <SandpackProvider 
                  template="react" 
                  theme="dark"
                  files={{ "/App.js": currentModule.codeExample || "// No example provided" }}
                >
                  <SandpackCodeEditor readOnly showLineNumbers wrapContent style={{ minHeight: '300px', md: { minHeight: '400px' } }} />
                </SandpackProvider>
              </div>
            </div>
          )}

          {/* QUIZ TAB */}
          {activeTab === 'quiz' && (
            <div className="space-y-6 md:space-y-8">
              {currentModule.quizzes && currentModule.quizzes.length > 0 ? (
                <>
                  {currentModule.quizzes.map((quiz, qIdx) => (
                    <div key={qIdx} className="bg-slate-900 p-4 md:p-6 rounded-2xl border border-slate-800">
                      <h3 className="text-lg md:text-xl font-medium text-white mb-4">{qIdx + 1}. {quiz.question}</h3>
                      <div className="space-y-3">
                        {quiz.options.map((opt, oIdx) => {
                          const isSelected = quizScores[qIdx] === oIdx;
                          const isCorrect = oIdx === quiz.correctAnswer;
                          
                          let bgClass = "bg-slate-800 hover:bg-slate-700";
                          if (quizSubmitted) {
                            if (isCorrect) bgClass = "bg-green-900/50 border-green-500/50";
                            else if (isSelected && !isCorrect) bgClass = "bg-red-900/50 border-red-500/50";
                          } else if (isSelected) {
                            bgClass = "bg-brand-900/50 border-brand-500/50";
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleQuizChange(qIdx, oIdx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left px-4 py-3 md:px-5 md:py-4 rounded-xl border ${quizSubmitted ? 'border-transparent' : isSelected ? 'border-brand-500' : 'border-slate-700'} ${bgClass} transition-colors`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-brand-400' : 'border-slate-500'}`}>
                                  {isSelected && <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-brand-400 rounded-full" />}
                                </div>
                                <span className={`text-sm md:text-base ${isSelected ? 'text-white' : 'text-slate-300'}`}>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  
                  {!quizSubmitted ? (
                    <button 
                      onClick={() => setQuizSubmitted(true)}
                      disabled={Object.keys(quizScores).length < currentModule.quizzes.length}
                      className="bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:hover:bg-brand-600 text-white px-8 py-3 rounded-xl font-bold transition-colors w-full"
                    >
                      Submit Quiz
                    </button>
                  ) : (
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Quiz Results</h3>
                      <p className="text-base md:text-lg text-slate-300">You scored <span className="font-bold text-brand-400">{calculateQuizScore()}</span> out of {currentModule.quizzes.length}</p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-slate-400">No quizzes available for this module.</p>
              )}
            </div>
          )}

          {/* ASSIGNMENT TAB */}
          {activeTab === 'assignment' && (
            <div className="space-y-6">
              {currentModule.assignments && currentModule.assignments.length > 0 ? (
                currentModule.assignments.map((assn, idx) => (
                  <div key={idx} className="bg-slate-900 p-4 md:p-6 rounded-2xl border border-slate-800">
                    <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">{assn.title}</h3>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">{assn.description}</p>
                    <div className="mt-6 flex justify-end">
                      <Link to="/playground" state={{ assignmentTitle: assn.title, assignmentDesc: assn.description }} className="w-full md:w-auto justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm md:text-base">
                        <Code className="w-4 h-4" /> Open Playground
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-slate-400">No assignments for this module.</p>
              )}
            </div>
          )}

          {/* Next/Complete Button Footer */}
          <div className="mt-10 md:mt-16 flex flex-col md:flex-row items-center justify-between border-t border-slate-800 pt-6 md:pt-8 gap-4">
            {prevModule ? (
              <Link to={`/modules/${prevModule._id}`} className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors font-medium text-sm md:text-base order-2 md:order-1">
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" /> Previous Module
              </Link>
            ) : <div className="order-2 md:order-1"></div>}
            
            <button 
              onClick={handleComplete}
              className="w-full md:w-auto justify-center bg-white text-slate-900 hover:bg-slate-200 px-6 py-2.5 md:px-8 md:py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-lg shadow-white/10 order-1 md:order-2 text-sm md:text-base"
            >
              Mark Complete \u0026 Continue <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModuleViewer;

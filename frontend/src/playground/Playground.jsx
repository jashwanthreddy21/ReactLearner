import React, { useEffect, useState, useRef } from 'react';
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackFileExplorer,
  useSandpack,
} from '@codesandbox/sandpack-react';

// ─── Inject global CSS ────────────────────────────────────────────────────────
function injectStyles() {
  const id = 'sp-global-fix';
  if (document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = `
    .sp-wrapper { height: 100% !important; min-height: 0 !important; display: flex !important; flex-direction: column !important; }
    .sp-layout  { height: 100% !important; min-height: 0 !important; flex: 1 1 auto !important; }
    .sp-file-explorer, .sp-code-editor, .sp-preview-container, .sp-console { height: 100% !important; min-height: 0 !important; }
    .sp-cm { height: 100% !important; }
    .cm-editor { height: 100% !important; }
    .cm-scroller { height: 100% !important; overflow: auto !important; }
    .sp-preview-iframe { height: 100% !important; }
  `;
  document.head.appendChild(s);
}

// ─── Default files ────────────────────────────────────────────────────────────
const REACT_FILES = {
  '/App.js': `import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>React Playground ⚛️</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}`,
  '/styles.css': `.container { font-family: sans-serif; text-align: center; padding: 20px; }
h1 { color: #3b82f6; }
button { margin-top: 12px; padding: 8px 20px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; }`,
  '/index.js': `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);`,
};

const DEFAULT_JS_CODE = `// JavaScript Playground 🟨
// Click ▶ Run to execute. Output appears in the Console below.

const greet = name => \`Hello, \${name}!\`;
console.log(greet("World"));
console.log("Array map:", [1, 2, 3].map(x => x * 2));
console.log("Object:", { name: "React", version: 18 });

// Uncomment to test async:
// const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(await res.json());
`;

// ─── Shared styles ────────────────────────────────────────────────────────────
const HDR = {
  background: '#252526', color: '#aaa', padding: '5px 14px',
  fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
  letterSpacing: '0.07em', borderBottom: '1px solid #1a1a1a',
  flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
};

const runBtnStyle = (bg = '#16a34a') => ({
  display: 'flex', alignItems: 'center', gap: 5,
  padding: '4px 14px', background: bg, color: 'white',
  border: 'none', borderRadius: 5, fontWeight: 700,
  fontSize: 12, cursor: 'pointer', letterSpacing: '0.04em',
});

// ─── Custom Run Button for React (uses useSandpack) ───────────────────────────
const ReactRunButton = () => {
  const { sandpack } = useSandpack();
  return (
    <button
      style={runBtnStyle()}
      onClick={() => sandpack.runSandpack()}
      onMouseEnter={e => e.currentTarget.style.background = '#15803d'}
      onMouseLeave={e => e.currentTarget.style.background = '#16a34a'}
    >
      ▶ Run
    </button>
  );
};

// ─── React Playground Layout ──────────────────────────────────────────────────
const ReactLayout = () => {
  const [isMobile] = useState(window.innerWidth < 768);
  const [activeView, setActiveView] = useState('preview'); // 'preview' or 'console'

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden' }}>
        {/* Code Editor (Top half) */}
        <div style={{ flex: '0 0 60%', display: 'flex', flexDirection: 'column', borderBottom: '1px solid #2d2d2d', minWidth: 0 }}>
          <div style={HDR}>
            <span>Code Editor</span>
            <ReactRunButton />
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <SandpackCodeEditor showLineNumbers showTabs closableTabs showInlineErrors wrapContent style={{ height: '100%' }} />
          </div>
        </div>

        {/* Preview / Console Toggle (Bottom half) */}
        <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <div style={{ ...HDR, background: '#1a1a1a' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <button 
                onClick={() => setActiveView('preview')}
                style={{ background: 'none', border: 'none', color: activeView === 'preview' ? '#00ffcc' : '#666', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
              >
                LIVE PREVIEW
              </button>
              <button 
                onClick={() => setActiveView('console')}
                style={{ background: 'none', border: 'none', color: activeView === 'console' ? '#00ffcc' : '#666', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
              >
                CONSOLE
              </button>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {activeView === 'preview' ? (
              <div style={{ flex: 1, overflow: 'hidden', background: '#fff' }}>
                <SandpackPreview showNavigator={false} showRefreshButton showOpenInCodeSandbox={false} style={{ height: '100%' }} />
              </div>
            ) : (
              <div style={{ flex: 1, overflow: 'hidden', background: '#0d0d0d' }}>
                <SandpackConsole showHeader={false} style={{ height: '100%', background: '#0d0d0d' }} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* File Explorer */}
      <div style={{ width: 170, display: 'flex', flexDirection: 'column', borderRight: '1px solid #2d2d2d', background: '#252526', flexShrink: 0 }}>
        <div style={HDR}><span>Explorer</span></div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <SandpackFileExplorer autoHiddenFiles />
        </div>
      </div>

      {/* Code Editor */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid #2d2d2d', minWidth: 0 }}>
        <div style={HDR}>
          <span>Code Editor — React</span>
          <ReactRunButton />
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <SandpackCodeEditor showLineNumbers showTabs closableTabs showInlineErrors wrapContent style={{ height: '100%' }} />
        </div>
      </div>

      {/* Preview + Console */}
      <div style={{ width: '38%', minWidth: 280, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ flex: '0 0 55%', display: 'flex', flexDirection: 'column', borderBottom: '1px solid #2d2d2d', minHeight: 0 }}>
          <div style={HDR}><span>Live Preview</span></div>
          <div style={{ flex: 1, overflow: 'hidden', background: '#fff' }}>
            <SandpackPreview showNavigator={false} showRefreshButton showOpenInCodeSandbox={false} style={{ height: '100%' }} />
          </div>
        </div>
        <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', background: '#0d0d0d', minHeight: 0 }}>
          <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', display: 'inline-block' }} />
              Console Output
            </span>
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <SandpackConsole showHeader={false} style={{ height: '100%', background: '#0d0d0d' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── JavaScript Custom Playground (no Sandpack runtime needed) ────────────────
const JSPlayground = () => {
  const [code, setCode] = useState(DEFAULT_JS_CODE);
  const [logs, setLogs] = useState([{ type: 'info', text: 'Click ▶ Run to execute your code.' }]);
  const [running, setRunning] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);
  const [activeView, setActiveView] = useState('editor'); // 'editor' or 'console'
  const iframeRef = useRef(null);
  const handlerRef = useRef(null);

  const runCode = () => {
    setLogs([]);
    setRunning(true);
    if (isMobile) setActiveView('console');

    // Remove previous iframe
    if (iframeRef.current) iframeRef.current.remove();
    if (handlerRef.current) window.removeEventListener('message', handlerRef.current);

    const newLogs = [];
    const handler = (e) => {
      if (!e.data || e.data.__src !== 'js-playground') return;
      const entry = { type: e.data.level || 'log', text: e.data.args };
      newLogs.push(entry);
      setLogs([...newLogs]);
      if (e.data.level === 'done') setRunning(false);
    };
    handlerRef.current = handler;
    window.addEventListener('message', handler);

    const srcdoc = `<!DOCTYPE html>
<html>
<head>
<script>
(function() {
  const levels = ['log','warn','error','info','debug'];
  levels.forEach(level => {
    const orig = console[level].bind(console);
    console[level] = function(...args) {
      orig(...args);
      const formatted = args.map(a => {
        try { return typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a); }
        catch(e) { return String(a); }
      }).join(' ');
      window.parent.postMessage({ __src: 'js-playground', level, args: formatted }, '*');
    };
  });
  window.addEventListener('error', (e) => {
    window.parent.postMessage({ __src: 'js-playground', level: 'error', args: 'Uncaught ' + e.message }, '*');
  });
  window.addEventListener('unhandledrejection', (e) => {
    window.parent.postMessage({ __src: 'js-playground', level: 'error', args: 'Unhandled Promise: ' + e.reason }, '*');
  });
})();
<\/script>
</head>
<body>
<script type="module">
${code}
window.parent.postMessage({ __src: 'js-playground', level: 'done', args: '' }, '*');
<\/script>
</body>
</html>`;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.sandbox = 'allow-scripts';
    iframe.srcdoc = srcdoc;
    document.body.appendChild(iframe);
    iframeRef.current = iframe;

    // Timeout fallback
    setTimeout(() => { setRunning(false); }, 5000);
  };

  useEffect(() => () => {
    if (iframeRef.current) iframeRef.current.remove();
    if (handlerRef.current) window.removeEventListener('message', handlerRef.current);
  }, []);

  const logColor = { log: '#d4d4d4', info: '#60a5fa', warn: '#fbbf24', error: '#f87171', debug: '#a78bfa', done: 'transparent' };

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden' }}>
        <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <button 
              onClick={() => setActiveView('editor')}
              style={{ background: 'none', border: 'none', color: activeView === 'editor' ? '#00ffcc' : '#666', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
            >
              CODE
            </button>
            <button 
              onClick={() => setActiveView('console')}
              style={{ background: 'none', border: 'none', color: activeView === 'console' ? '#00ffcc' : '#666', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
            >
              CONSOLE
            </button>
          </div>
          <button
            style={runBtnStyle(running ? '#15803d' : '#16a34a')}
            onClick={runCode}
            disabled={running}
          >
            {running ? '...' : '▶ Run'}
          </button>
        </div>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {activeView === 'editor' ? (
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              spellCheck={false}
              style={{
                flex: 1, background: '#1e1e1e', color: '#d4d4d4',
                fontFamily: '"Fira Code", monospace',
                fontSize: 13, lineHeight: 1.6, padding: '12px',
                border: 'none', outline: 'none', resize: 'none',
              }}
            />
          ) : (
            <div style={{ flex: 1, overflow: 'auto', background: '#0d0d0d', padding: '8px 0', fontFamily: '"Fira Code", monospace', fontSize: 12 }}>
              {logs.filter(l => l.type !== 'done').map((log, i) => (
                <div key={i} style={{ padding: '3px 14px', color: logColor[log.type] || '#d4d4d4', borderBottom: '1px solid #111', whiteSpace: 'pre-wrap' }}>
                  {log.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Code Editor */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid #2d2d2d', minWidth: 0 }}>
        <div style={HDR}>
          <span>Code Editor — JavaScript</span>
          <button
            style={runBtnStyle(running ? '#15803d' : '#16a34a')}
            onClick={runCode}
            disabled={running}
          >
            {running ? '⏳ Running...' : '▶ Run'}
          </button>
        </div>
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          spellCheck={false}
          style={{
            flex: 1, background: '#1e1e1e', color: '#d4d4d4',
            fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
            fontSize: 13, lineHeight: 1.6, padding: '12px 16px',
            border: 'none', outline: 'none', resize: 'none',
            tabSize: 2,
          }}
          onKeyDown={e => {
            if (e.key === 'Tab') {
              e.preventDefault();
              const { selectionStart: s, selectionEnd: end } = e.target;
              const newCode = code.substring(0, s) + '  ' + code.substring(end);
              setCode(newCode);
              requestAnimationFrame(() => { e.target.selectionStart = e.target.selectionEnd = s + 2; });
            }
          }}
        />
      </div>

      {/* Console */}
      <div style={{ width: '40%', minWidth: 300, display: 'flex', flexDirection: 'column', background: '#0d0d0d', flexShrink: 0 }}>
        <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', display: 'inline-block' }} />
            Console Output
          </span>
          <button
            onClick={() => setLogs([])}
            style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 11, fontWeight: 600, padding: '2px 6px' }}
          >
            Clear
          </button>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '8px 0', fontFamily: '"Fira Code", monospace', fontSize: 12 }}>
          {logs.filter(l => l.type !== 'done').map((log, i) => (
            <div key={i} style={{
              padding: '3px 14px',
              color: logColor[log.type] || '#d4d4d4',
              borderBottom: '1px solid #111',
              borderLeft: `3px solid ${log.type === 'error' ? '#f87171' : log.type === 'warn' ? '#fbbf24' : 'transparent'}`,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}>
              {log.type === 'warn' ? '⚠ ' : log.type === 'error' ? '✖ ' : '› '}
              {log.text}
            </div>
          ))}
          {logs.length === 0 && (
            <div style={{ padding: '10px 14px', color: '#4b5563', fontStyle: 'italic', fontSize: 12 }}>No output yet. Click ▶ Run.</div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
const Playground = ({ activeLang = 'react' }) => {
  useEffect(() => { injectStyles(); }, []);

  if (activeLang === 'javascript') {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#1e1e1e' }}>
        <JSPlayground />
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#1e1e1e' }}>
      <SandpackProvider
        key="react"
        template="react"
        theme="dark"
        files={REACT_FILES}
        customSetup={{ dependencies: { react: '^18.0.0', 'react-dom': '^18.0.0' } }}
        options={{ autorun: false, autoReload: false }}
        style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <ReactLayout />
      </SandpackProvider>
    </div>
  );
};

export default Playground;

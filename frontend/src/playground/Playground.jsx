import React, { useEffect, useState, useRef } from 'react';
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackFileExplorer,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

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
  const [activeView, setActiveView] = useState('preview');

  if (isMobile) {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <PanelGroup direction="vertical">
          <Panel defaultSize={60} minSize={20}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
              <div style={HDR}>
                <span>Code Editor</span>
                <ReactRunButton />
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <SandpackCodeEditor showLineNumbers showTabs closableTabs showInlineErrors wrapContent style={{ height: '100%' }} />
              </div>
            </div>
          </Panel>
          <PanelResizeHandle style={{ height: 4, background: '#1a1a1a', cursor: 'row-resize' }} />
          <Panel defaultSize={40} minSize={20}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
              <div style={{ ...HDR, background: '#1a1a1a' }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setActiveView('preview')} style={{ background: 'none', border: 'none', color: activeView === 'preview' ? '#00ffcc' : '#666', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>LIVE PREVIEW</button>
                  <button onClick={() => setActiveView('console')} style={{ background: 'none', border: 'none', color: activeView === 'console' ? '#00ffcc' : '#666', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>CONSOLE</button>
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
          </Panel>
        </PanelGroup>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <PanelGroup direction="horizontal">
        <Panel defaultSize={15} minSize={10} maxSize={30}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRight: '1px solid #2d2d2d', background: '#252526' }}>
            <div style={HDR}><span>Explorer</span></div>
            <div style={{ flex: 1, overflow: 'auto' }}>
              <SandpackFileExplorer autoHiddenFiles />
            </div>
          </div>
        </Panel>
        <PanelResizeHandle style={{ width: 4, background: '#1a1a1a', cursor: 'col-resize' }} />
        <Panel defaultSize={45} minSize={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRight: '1px solid #2d2d2d', minWidth: 0 }}>
            <div style={HDR}>
              <span>Code Editor — React</span>
              <ReactRunButton />
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <SandpackCodeEditor showLineNumbers showTabs closableTabs showInlineErrors wrapContent style={{ height: '100%' }} />
            </div>
          </div>
        </Panel>
        <PanelResizeHandle style={{ width: 4, background: '#1a1a1a', cursor: 'col-resize' }} />
        <Panel defaultSize={40} minSize={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
            <PanelGroup direction="vertical">
              <Panel defaultSize={55} minSize={20}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderBottom: '1px solid #2d2d2d', minHeight: 0 }}>
                  <div style={HDR}><span>Live Preview</span></div>
                  <div style={{ flex: 1, overflow: 'hidden', background: '#fff' }}>
                    <SandpackPreview showNavigator={false} showRefreshButton showOpenInCodeSandbox={false} style={{ height: '100%' }} />
                  </div>
                </div>
              </Panel>
              <PanelResizeHandle style={{ height: 4, background: '#1a1a1a', cursor: 'row-resize' }} />
              <Panel defaultSize={45} minSize={20}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d', minHeight: 0 }}>
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
              </Panel>
            </PanelGroup>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

// ─── JavaScript Custom Playground ─────────────────────────────────────────────
const JSPlayground = () => {
  const [code, setCode] = useState(DEFAULT_JS_CODE);
  const [logs, setLogs] = useState([{ type: 'info', text: 'Click ▶ Run to execute your code.' }]);
  const [running, setRunning] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);
  const iframeRef = useRef(null);
  const handlerRef = useRef(null);

  const runCode = () => {
    setLogs([]);
    setRunning(true);
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
    const srcdoc = `<!DOCTYPE html><html><head><script>
(function() {
  const levels = ['log','warn','error','info','debug'];
  levels.forEach(level => {
    const orig = console[level].bind(console);
    console[level] = function(...args) {
      orig(...args);
      const formatted = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
      window.parent.postMessage({ __src: 'js-playground', level, args: formatted }, '*');
    };
  });
})();
</script></head><body><script type="module">${code}
window.parent.postMessage({ __src: 'js-playground', level: 'done', args: '' }, '*');</script></body></html>`;
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.sandbox = 'allow-scripts';
    iframe.srcdoc = srcdoc;
    document.body.appendChild(iframe);
    iframeRef.current = iframe;
    setTimeout(() => { setRunning(false); }, 5000);
  };

  useEffect(() => () => {
    if (iframeRef.current) iframeRef.current.remove();
    if (handlerRef.current) window.removeEventListener('message', handlerRef.current);
  }, []);

  const logColor = { log: '#d4d4d4', info: '#60a5fa', warn: '#fbbf24', error: '#f87171', debug: '#a78bfa' };

  if (isMobile) {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <PanelGroup direction="vertical">
          <Panel defaultSize={60} minSize={20}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
              <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
                <span>Editor</span>
                <button style={runBtnStyle(running ? '#15803d' : '#16a34a')} onClick={runCode} disabled={running}>{running ? '...' : '▶ Run'}</button>
              </div>
              <textarea value={code} onChange={e => setCode(e.target.value)} spellCheck={false} style={{ flex: 1, background: '#1e1e1e', color: '#d4d4d4', fontFamily: 'monospace', fontSize: 13, padding: 12, border: 'none', outline: 'none', resize: 'none' }} />
            </div>
          </Panel>
          <PanelResizeHandle style={{ height: 4, background: '#1a1a1a', cursor: 'row-resize' }} />
          <Panel defaultSize={40} minSize={20}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d', overflow: 'auto', padding: 8, fontFamily: 'monospace', fontSize: 12 }}>
              {logs.filter(l => l.type !== 'done').map((log, i) => <div key={i} style={{ color: logColor[log.type] || '#d4d4d4', padding: '2px 0' }}>{log.text}</div>)}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <PanelGroup direction="horizontal">
        <Panel defaultSize={60} minSize={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRight: '1px solid #2d2d2d' }}>
            <div style={HDR}>
              <span>Code Editor</span>
              <button style={runBtnStyle(running ? '#15803d' : '#16a34a')} onClick={runCode} disabled={running}>{running ? '⏳' : '▶ Run'}</button>
            </div>
            <textarea value={code} onChange={e => setCode(e.target.value)} spellCheck={false} style={{ flex: 1, background: '#1e1e1e', color: '#d4d4d4', fontFamily: 'monospace', fontSize: 13, padding: 16, border: 'none', outline: 'none', resize: 'none' }} />
          </div>
        </Panel>
        <PanelResizeHandle style={{ width: 4, background: '#1a1a1a', cursor: 'col-resize' }} />
        <Panel defaultSize={40} minSize={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d' }}>
            <div style={HDR}><span>Console Output</span></div>
            <div style={{ flex: 1, overflow: 'auto', padding: 12, fontFamily: 'monospace', fontSize: 12 }}>
              {logs.filter(l => l.type !== 'done').map((log, i) => <div key={i} style={{ color: logColor[log.type], padding: '2px 0' }}>{log.text}</div>)}
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
const Playground = ({ activeLang = 'react' }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .sp-wrapper { height: 100% !important; display: flex !important; flex-direction: column !important; }
      .sp-layout { height: 100% !important; flex: 1 1 auto !important; }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  if (activeLang === 'javascript') {
    return <div style={{ width: '100%', height: '100%', background: '#1e1e1e' }}><JSPlayground /></div>;
  }

  return (
    <div style={{ width: '100%', height: '100%', background: '#1e1e1e' }}>
      <SandpackProvider
        key="react"
        template="react"
        theme="dark"
        files={REACT_FILES}
        customSetup={{ dependencies: { react: '^18.0.0', 'react-dom': '^18.0.0' } }}
        options={{ autorun: false }}
        style={{ width: '100%', height: '100%' }}
      >
        <ReactLayout />
      </SandpackProvider>
    </div>
  );
};

export default Playground;

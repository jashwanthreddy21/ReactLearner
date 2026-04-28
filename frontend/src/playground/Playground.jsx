import React, { useEffect, useState, useRef } from 'react';
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';

// ─── Default files ────────────────────────────────────────────────────────────
const REACT_DEFAULT_APP = `import React, { useState } from "react";
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
}`;

const REACT_DEFAULT_CSS = `.container { font-family: sans-serif; text-align: center; padding: 20px; }
h1 { color: #3b82f6; }
button { margin-top: 12px; padding: 8px 20px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; }`;

const DEFAULT_JS_CODE = `// JavaScript Playground 🟨
// Click ▶ Run to execute. Output appears in the Console below.

const greet = name => \`Hello, \${name}!\`;
console.log(greet("World"));
console.log("Array map:", [1, 2, 3].map(x => x * 2));
console.log("Object:", { name: "React", version: 18 });
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

// ─── React Local Playground (No CodeSandbox dependencies) ───────────────────
const LocalReactPlayground = () => {
  const [files, setFiles] = useState({ 'App.js': REACT_DEFAULT_APP, 'styles.css': REACT_DEFAULT_CSS });
  const [activeFile, setActiveFile] = useState('App.js');
  const [logs, setLogs] = useState([{ type: 'info', text: 'Click ▶ Run to execute your React code.' }]);
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
      if (!e.data || e.data.__src !== 'react-playground') return;
      const entry = { type: e.data.level || 'log', text: e.data.args };
      newLogs.push(entry);
      setLogs([...newLogs]);
      if (e.data.level === 'done') setRunning(false);
    };
    handlerRef.current = handler;
    window.addEventListener('message', handler);

    // Strip imports/exports to allow Babel standalone to execute inline
    const userCode = files['App.js']
      .replace(/import\s+.*?;?\n/g, '') // remove imports
      .replace(/export\s+default\s+/g, ''); // remove export default

    const srcdoc = `<!DOCTYPE html><html><head>
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>${files['styles.css']}</style>
<script>
(function() {
  const levels = ['log','warn','error','info','debug'];
  levels.forEach(level => {
    const orig = console[level].bind(console);
    console[level] = function(...args) {
      orig(...args);
      const formatted = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
      window.parent.postMessage({ __src: 'react-playground', level, args: formatted }, '*');
    };
  });
  window.onerror = function(msg, url, lineNo, columnNo, error) {
    window.parent.postMessage({ __src: 'react-playground', level: 'error', args: msg }, '*');
    return false;
  };
})();
</s` + `cript></head><body><div id="root"></div><script type="text/babel">
try {
  const { useState, useEffect, useRef, useMemo, useCallback } = React;
  
  ${userCode}
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  window.parent.postMessage({ __src: 'react-playground', level: 'done', args: '' }, '*');
} catch (err) {
  document.getElementById('root').innerHTML = '<div style="color:#f87171;font-family:monospace;padding:20px;">Runtime Error: ' + err.message + '</div>';
  window.parent.postMessage({ __src: 'react-playground', level: 'error', args: err.message }, '*');
  window.parent.postMessage({ __src: 'react-playground', level: 'done', args: '' }, '*');
}
</s` + `cript></body></html>`;

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.sandbox = 'allow-scripts allow-same-origin';
    iframe.srcdoc = srcdoc;
    
    // Find the preview container and append
    const container = document.getElementById('react-preview-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(iframe);
      iframeRef.current = iframe;
    }
    
    setTimeout(() => { setRunning(false); }, 5000);
  };

  useEffect(() => () => {
    if (iframeRef.current) iframeRef.current.remove();
    if (handlerRef.current) window.removeEventListener('message', handlerRef.current);
  }, []);

  const updateFile = (val) => {
    setFiles({ ...files, [activeFile]: val });
  };

  const logColor = { log: '#d4d4d4', info: '#60a5fa', warn: '#fbbf24', error: '#f87171', debug: '#a78bfa', done: 'transparent' };

  if (isMobile) {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <PanelGroup orientation="vertical">
          <Panel defaultSize={50} minSize={20}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
              <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span onClick={() => setActiveFile('App.js')} style={{ cursor: 'pointer', color: activeFile === 'App.js' ? '#fff' : '#666' }}>App.js</span>
                  <span onClick={() => setActiveFile('styles.css')} style={{ cursor: 'pointer', color: activeFile === 'styles.css' ? '#fff' : '#666' }}>styles.css</span>
                </div>
                <button style={runBtnStyle(running ? '#15803d' : '#16a34a')} onClick={runCode} disabled={running}>{running ? '...' : '▶ Run'}</button>
              </div>
              <textarea
                value={files[activeFile]}
                onChange={e => updateFile(e.target.value)}
                spellCheck={false}
                style={{
                  flex: 1, background: '#1e1e1e', color: '#d4d4d4',
                  fontFamily: '"Fira Code", monospace',
                  fontSize: 13, lineHeight: 1.6, padding: '12px',
                  border: 'none', outline: 'none', resize: 'none',
                }}
              />
            </div>
          </Panel>
          <PanelResizeHandle style={{ height: 8, background: '#2d2d2d', cursor: 'row-resize', zIndex: 10 }} />
          <Panel defaultSize={50} minSize={20}>
             <PanelGroup orientation="vertical">
                <Panel defaultSize={60} minSize={20}>
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
                    <div style={{ ...HDR, background: '#1a1a1a', color: '#fff', borderBottom: '1px solid #000' }}>Live Preview</div>
                    <div id="react-preview-container" style={{ flex: 1, overflow: 'hidden' }}>
                      {/* Iframe goes here */}
                    </div>
                  </div>
                </Panel>
                <PanelResizeHandle style={{ height: 8, background: '#2d2d2d', cursor: 'row-resize', zIndex: 10 }} />
                <Panel defaultSize={40} minSize={20}>
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d' }}>
                    <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>Console</div>
                    <div style={{ flex: 1, overflow: 'auto', padding: '8px 0', fontFamily: '"Fira Code", monospace', fontSize: 12 }}>
                      {logs.filter(l => l.type !== 'done').map((log, i) => (
                        <div key={i} style={{ padding: '3px 14px', color: logColor[log.type] || '#d4d4d4', borderBottom: '1px solid #111', whiteSpace: 'pre-wrap' }}>
                          {log.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </Panel>
             </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <PanelGroup orientation="horizontal">
        <Panel defaultSize={15} minSize={10} maxSize={30}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRight: '1px solid #2d2d2d', background: '#252526' }}>
            <div style={HDR}><span>Explorer</span></div>
            <div style={{ padding: '10px 0' }}>
              <div onClick={() => setActiveFile('App.js')} style={{ padding: '6px 20px', cursor: 'pointer', background: activeFile === 'App.js' ? '#37373d' : 'transparent', color: activeFile === 'App.js' ? '#fff' : '#ccc', fontSize: 13 }}>📄 App.js</div>
              <div onClick={() => setActiveFile('styles.css')} style={{ padding: '6px 20px', cursor: 'pointer', background: activeFile === 'styles.css' ? '#37373d' : 'transparent', color: activeFile === 'styles.css' ? '#fff' : '#ccc', fontSize: 13 }}>📄 styles.css</div>
            </div>
          </div>
        </Panel>
        <PanelResizeHandle style={{ width: 8, background: '#2d2d2d', cursor: 'col-resize', zIndex: 10 }} />
        <Panel defaultSize={45} minSize={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRight: '1px solid #2d2d2d', minWidth: 0 }}>
            <div style={HDR}>
              <span>Code Editor — {activeFile}</span>
              <button style={runBtnStyle(running ? '#15803d' : '#16a34a')} onClick={runCode} disabled={running}>{running ? '⏳' : '▶ Run'}</button>
            </div>
            <textarea
              value={files[activeFile]}
              onChange={e => updateFile(e.target.value)}
              spellCheck={false}
              style={{
                flex: 1, background: '#1e1e1e', color: '#d4d4d4',
                fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
                fontSize: 13, lineHeight: 1.6, padding: '12px 16px',
                border: 'none', outline: 'none', resize: 'none', tabSize: 2,
              }}
              onKeyDown={e => {
                if (e.key === 'Tab') {
                  e.preventDefault();
                  const { selectionStart: s, selectionEnd: end } = e.target;
                  const newCode = files[activeFile].substring(0, s) + '  ' + files[activeFile].substring(end);
                  updateFile(newCode);
                  requestAnimationFrame(() => { e.target.selectionStart = e.target.selectionEnd = s + 2; });
                }
              }}
            />
          </div>
        </Panel>
        <PanelResizeHandle style={{ width: 8, background: '#2d2d2d', cursor: 'col-resize', zIndex: 10 }} />
        <Panel defaultSize={40} minSize={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
            <PanelGroup orientation="vertical">
              <Panel defaultSize={55} minSize={20}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderBottom: '1px solid #2d2d2d', minHeight: 0 }}>
                  <div style={HDR}><span>Live Preview</span></div>
                  <div id="react-preview-container" style={{ flex: 1, overflow: 'hidden', background: '#fff' }}>
                    {/* Iframe injected here */}
                    <div style={{ padding: 20, color: '#666', textAlign: 'center', fontFamily: 'sans-serif' }}>Click "Run" to view output.</div>
                  </div>
                </div>
              </Panel>
              <PanelResizeHandle style={{ height: 8, background: '#2d2d2d', cursor: 'row-resize', zIndex: 10 }} />
              <Panel defaultSize={45} minSize={20}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d', minHeight: 0 }}>
                  <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', display: 'inline-block' }} />
                      Console Output
                    </span>
                    <button onClick={() => setLogs([])} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 11, fontWeight: 600 }}>Clear</button>
                  </div>
                  <div style={{ flex: 1, overflow: 'auto', padding: '8px 0', fontFamily: '"Fira Code", monospace', fontSize: 12 }}>
                    {logs.filter(l => l.type !== 'done').map((log, i) => (
                      <div key={i} style={{ padding: '3px 14px', color: logColor[log.type] || '#d4d4d4', borderBottom: '1px solid #111', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                        {log.type === 'warn' ? '⚠ ' : log.type === 'error' ? '✖ ' : '› '}
                        {log.text}
                      </div>
                    ))}
                    {logs.length === 0 && <div style={{ padding: '10px 14px', color: '#4b5563', fontStyle: 'italic', fontSize: 12 }}>No output yet.</div>}
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
</s` + `cript></head><body><script type="module">
${code}
window.parent.postMessage({ __src: 'js-playground', level: 'done', args: '' }, '*');
</s` + `cript></body></html>`;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.sandbox = 'allow-scripts allow-same-origin';
    iframe.srcdoc = srcdoc;
    document.body.appendChild(iframe);
    iframeRef.current = iframe;
    
    setTimeout(() => { setRunning(false); }, 5000);
  };

  useEffect(() => () => {
    if (iframeRef.current) iframeRef.current.remove();
    if (handlerRef.current) window.removeEventListener('message', handlerRef.current);
  }, []);

  const logColor = { log: '#d4d4d4', info: '#60a5fa', warn: '#fbbf24', error: '#f87171', debug: '#a78bfa', done: 'transparent' };

  if (isMobile) {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <PanelGroup orientation="vertical">
          <Panel defaultSize={60} minSize={20}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
              <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
                <span>Code Editor — JavaScript</span>
                <button
                  style={runBtnStyle(running ? '#15803d' : '#16a34a')}
                  onClick={runCode}
                  disabled={running}
                >
                  {running ? '...' : '▶ Run'}
                </button>
              </div>
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
            </div>
          </Panel>
          <PanelResizeHandle style={{ height: 8, background: '#2d2d2d', cursor: 'row-resize', zIndex: 10 }} />
          <Panel defaultSize={40} minSize={20}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d', minWidth: 0 }}>
              <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', display: 'inline-block' }} />
                  Console Output
                </span>
                <button onClick={() => setLogs([])} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 11, fontWeight: 600, padding: '2px 6px' }}>Clear</button>
              </div>
              <div style={{ flex: 1, overflow: 'auto', padding: '8px 0', fontFamily: '"Fira Code", monospace', fontSize: 12 }}>
                {logs.filter(l => l.type !== 'done').map((log, i) => (
                  <div key={i} style={{ padding: '3px 14px', color: logColor[log.type] || '#d4d4d4', borderBottom: '1px solid #111', whiteSpace: 'pre-wrap' }}>
                    {log.text}
                  </div>
                ))}
                {logs.length === 0 && <div style={{ padding: '10px 14px', color: '#4b5563', fontStyle: 'italic', fontSize: 12 }}>No output yet. Click ▶ Run.</div>}
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <PanelGroup orientation="horizontal">
        <Panel defaultSize={60} minSize={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRight: '1px solid #2d2d2d', minWidth: 0 }}>
            <div style={HDR}>
              <span>Code Editor — JavaScript</span>
              <button style={runBtnStyle(running ? '#15803d' : '#16a34a')} onClick={runCode} disabled={running}>{running ? '⏳ Running...' : '▶ Run'}</button>
            </div>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              spellCheck={false}
              style={{
                flex: 1, background: '#1e1e1e', color: '#d4d4d4',
                fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
                fontSize: 13, lineHeight: 1.6, padding: '12px 16px',
                border: 'none', outline: 'none', resize: 'none', tabSize: 2,
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
        </Panel>
        <PanelResizeHandle style={{ width: 8, background: '#2d2d2d', cursor: 'col-resize', zIndex: 10 }} />
        <Panel defaultSize={40} minSize={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d', flexShrink: 0 }}>
            <div style={{ ...HDR, background: '#1a1a1a', borderBottom: '1px solid #000' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', display: 'inline-block' }} />
                Console Output
              </span>
              <button onClick={() => setLogs([])} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 11, fontWeight: 600, padding: '2px 6px' }}>Clear</button>
            </div>
            <div style={{ flex: 1, overflow: 'auto', padding: '8px 0', fontFamily: '"Fira Code", monospace', fontSize: 12 }}>
              {logs.filter(l => l.type !== 'done').map((log, i) => (
                <div key={i} style={{
                  padding: '3px 14px', color: logColor[log.type] || '#d4d4d4', borderBottom: '1px solid #111',
                  borderLeft: `3px solid ${log.type === 'error' ? '#f87171' : log.type === 'warn' ? '#fbbf24' : 'transparent'}`,
                  whiteSpace: 'pre-wrap', wordBreak: 'break-all',
                }}>
                  {log.type === 'warn' ? '⚠ ' : log.type === 'error' ? '✖ ' : '› '}
                  {log.text}
                </div>
              ))}
              {logs.length === 0 && <div style={{ padding: '10px 14px', color: '#4b5563', fontStyle: 'italic', fontSize: 12 }}>No output yet. Click ▶ Run.</div>}
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
const Playground = ({ activeLang = 'react' }) => {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1e1e1e' }}>
      {activeLang === 'javascript' ? <JSPlayground /> : <LocalReactPlayground />}
    </div>
  );
};

export default Playground;

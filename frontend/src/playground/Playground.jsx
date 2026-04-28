import React from 'react';
import { 
  SandpackProvider, 
  SandpackLayout, 
  SandpackCodeEditor, 
  SandpackPreview,
  SandpackConsole,
  SandpackFileExplorer
} from '@codesandbox/sandpack-react';

const Playground = () => {
  const defaultFiles = {
    "/App.js": `import React from "react";\nimport "./styles.css";\n\nexport default function App() {\n  return (\n    <div className="container">\n      <h1>React Playground 🚀</h1>\n      <p>Edit this file and click "Run" to see the output.</p>\n    </div>\n  );\n}`,
    "/styles.css": `.container {\n  font-family: sans-serif;\n  text-align: center;\n  padding: 20px;\n}\n\nh1 {\n  color: #3b82f6;\n}`,
    "/index.js": `import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);`
  };

  return (
    <div className="w-full h-full flex-grow bg-[#1e1e1e] flex flex-col font-sans relative">
      <style>
        {`
          .sp-wrapper, .sp-layout {
            height: 100% !important;
            min-height: 100% !important;
          }
        `}
      </style>
      <SandpackProvider 
        template="react" 
        theme="dark"
        files={defaultFiles}
        customSetup={{
          dependencies: {
            "react": "^18.0.0",
            "react-dom": "^18.0.0",
          }
        }}
        options={{
          autorun: false,
          autoReload: false,
          classes: {
            "sp-wrapper": "h-full w-full",
            "sp-layout": "h-full w-full rounded-none border-none bg-transparent flex flex-row",
            "sp-editor": "h-full",
            "sp-preview": "h-full",
          }
        }}
      >
        <SandpackLayout className="flex-grow flex w-full h-full rounded-none overflow-hidden">
          {/* File Explorer */}
          <div className="w-64 h-full flex flex-col border-r border-slate-800 bg-[#252526] shrink-0">
            <div className="text-[#cccccc] px-4 py-2 text-xs uppercase tracking-wider font-semibold border-b border-[#1e1e1e] flex justify-between items-center shrink-0">
              <span>Explorer</span>
            </div>
            <div className="flex-grow overflow-y-auto">
              <SandpackFileExplorer autoHiddenFiles />
            </div>
          </div>

          {/* Editor Side */}
          <div className="flex-grow h-full flex flex-col border-r border-slate-800">
            <div className="bg-[#252526] text-[#cccccc] px-4 py-2 text-xs uppercase tracking-wider font-semibold border-b border-[#1e1e1e] flex justify-between items-center shrink-0">
              <span>Code Editor</span>
            </div>
            <div className="flex-grow overflow-hidden bg-[#1e1e1e]">
              <SandpackCodeEditor 
                showLineNumbers 
                showTabs 
                closableTabs={true}
                showInlineErrors
                wrapContent
                style={{ height: '100%', minHeight: '100%' }}
              />
            </div>
          </div>
          
          {/* Preview & Console Side */}
          <div className="w-1/3 h-full flex flex-col bg-white shrink-0 min-w-[300px]">
            <div className="bg-[#252526] text-[#cccccc] px-4 py-2 text-xs uppercase tracking-wider font-semibold flex justify-between items-center shrink-0">
              <span>Live Preview</span>
            </div>
            <div className="h-2/3 border-b border-slate-200">
              <SandpackPreview 
                showNavigator={true} 
                showRefreshButton={true}
                showOpenInCodeSandbox={false}
                style={{ height: '100%', minHeight: '100%' }}
              />
            </div>
            <div className="h-1/3 bg-[#1e1e1e] flex flex-col">
              <div className="bg-[#252526] text-[#cccccc] px-4 py-2 text-xs uppercase tracking-wider font-semibold border-b border-black flex justify-between items-center shrink-0">
                <span>Console</span>
              </div>
              <div className="flex-grow overflow-hidden custom-scrollbar">
                <SandpackConsole 
                  style={{ height: '100%', minHeight: '100%' }}
                />
              </div>
            </div>
          </div>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default Playground;

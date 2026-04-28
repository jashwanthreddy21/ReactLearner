import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import Playground from '../playground/Playground';

const LANGUAGES = [
  { id: 'react', label: 'React', icon: '⚛️' },
  { id: 'javascript', label: 'JavaScript', icon: '🟨' },
];

const NAVBAR_HEIGHT = 57; // matches Navbar p-4 + content height

const StandalonePlayground = () => {
  const location = useLocation();
  const assignment = location.state;
  const [activeLang, setActiveLang] = useState('react');
  const [isMobile] = useState(window.innerWidth < 768);

  const headerHeight = isMobile ? 60 : 48;
  const assignmentBarHeight = assignment ? (isMobile ? 120 : 80) : 0;
  const playgroundTop = NAVBAR_HEIGHT + headerHeight + assignmentBarHeight;

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e]">
      <h1 style={{ color: 'white', position: 'fixed', top: 0, left: 0, zIndex: 999, background: 'red' }}>RENDERING STANDALONE</h1>
      {/* Header bar — fixed/sticky below navbar */}
      <div style={{
        position: 'fixed',
        top: NAVBAR_HEIGHT,
        left: 0,
        right: 0,
        minHeight: headerHeight,
        background: '#252526',
        borderBottom: '1px solid #000',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '8px 12px' : '0 24px',
        zIndex: 40,
        gap: 8
      }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 16, width: isMobile ? '100%' : 'auto' }}>
          <Link
            to="/dashboard"
            style={{
              padding: '6px',
              background: '#1e1e1e',
              borderRadius: 6,
              color: '#cccccc',
              border: '1px solid #475569',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ChevronLeft style={{ width: 16, height: 16 }} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg viewBox="0 0 128 128" width="16" height="16">
              <path fill="#007ACC" d="M93.3 14.5L34.1 63.8l59.2 49.3c3.2 2.7 7.7.4 7.7-3.8V18.3c0-4.2-4.5-6.5-7.7-3.8z"/>
              <path fill="#0065A9" d="M34.1 63.8l-19.6-16.3c-2.4-2-5.9-.2-5.9 2.9v33c0 3.1 3.5 4.9 5.9 2.9l19.6-16.3v-6.2z"/>
            </svg>
            <span style={{ color: 'white', fontWeight: 600, fontSize: isMobile ? 14 : 16 }}>Playground</span>
          </div>
        </div>

        {/* Centre — Language Switcher */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          background: '#1e1e1e',
          borderRadius: 8,
          padding: 2,
          border: '1px solid #475569',
          width: isMobile ? '100%' : 'auto',
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          {LANGUAGES.map(l => (
            <button
              key={l.id}
              onClick={() => setActiveLang(l.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: isMobile ? '4px 12px' : '5px 16px',
                borderRadius: 6,
                border: 'none',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                background: activeLang === l.id ? '#2563eb' : 'transparent',
                color: activeLang === l.id ? '#ffffff' : '#9ca3af',
                flex: isMobile ? 1 : 'none'
              }}
            >
              <span>{l.icon}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>

        {/* Right spacer (hidden on mobile) */}
        {!isMobile && <div style={{ width: 120 }} />}
      </div>

      {/* Assignment banner */}
      {assignment && (
        <div style={{
          position: 'fixed',
          top: NAVBAR_HEIGHT + headerHeight,
          left: 0,
          right: 0,
          maxHeight: isMobile ? 100 : 80,
          background: 'rgba(120, 53, 15, 0.4)',
          borderBottom: '1px solid rgba(180, 120, 60, 0.5)',
          padding: isMobile ? '8px 16px' : '12px 24px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 8,
          zIndex: 40,
          overflowY: 'auto'
        }}>
          <Info style={{ width: 18, height: 18, color: '#fbbf24', flexShrink: 0, marginTop: 2 }} />
          <div>
            <h2 style={{ color: '#fbbf24', fontWeight: 700, fontSize: 14, margin: '0 0 2px 0' }}>
              {assignment.assignmentTitle}
            </h2>
            <p style={{ color: 'rgba(254,243,199,0.8)', fontSize: 12, margin: 0, lineHeight: 1.4 }}>
              {assignment.assignmentDesc}
            </p>
          </div>
        </div>
      )}

      {/* Playground area */}
      <div style={{
        position: 'fixed',
        top: playgroundTop,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
      }}>
        <Playground activeLang={activeLang} />
      </div>
    </div>
  );
};

export default StandalonePlayground;

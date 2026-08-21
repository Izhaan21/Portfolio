import { useState } from 'react';
import ResumeModal from '../components/ResumeModal';

export default function AboutSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}

      <section id="about" className="about-section">
        <div className="container">
          <div className="about-inner">
            {/* Left: bio */}
            <div>
              <span className="section-eyebrow">About Me</span>
              <h2 className="section-heading">
                Who Am <span className="h-accent">I?</span>
              </h2>

              <div style={{ marginTop: 28 }}>
                <p className="about-desc">
                  I'm <strong style={{ color: 'var(--text)' }}>Izhaan Hasan Saifi</strong>, a Mobile Developer who loves building complete, end-to-end applications. Starting my journey with <strong style={{ color: 'var(--text)' }}>Flutter</strong> and <strong style={{ color: 'var(--text)' }}>Android</strong>, I've recently expanded into the backend to engineer my own secure RESTful APIs using <strong style={{ color: 'var(--text)' }}>.NET (C#)</strong> and MySQL.
                </p>
                <p className="about-desc" style={{ marginTop: 12 }}>
                  From integrating Personalized AI in mobile apps to designing JWT-secured backend systems, I enjoy tackling challenges across the entire tech stack. My goal is always to ship production-quality software that looks great and runs seamlessly.
                </p>
                <p className="about-desc" style={{ marginTop: 12 }}>
                  Alongside mobile development, I'm actively strengthening my{' '}
                  <strong style={{ color: 'var(--accent)' }}>DSA skills in C++ and Java</strong> —
                  solving problems on LeetCode and preparing for placements.
                </p>
              </div>

              <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  className="btn-hire"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  &gt;_ Let's Talk
                </a>
                <button
                  onClick={() => setResumeOpen(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '9px 24px',
                    background: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    color: '#0d0f0f',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, background 0.3s ease',
                    borderRadius: 2,
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  View Resume
                </button>
              </div>
            </div>

            {/* Right: terminal card */}
            <div>
              <div className="terminal-card">
                <div className="term-bar">
                  <div className="term-dots">
                    <span className="term-dot" style={{ background: '#ff5f57' }} />
                    <span className="term-dot" style={{ background: '#ffbd2e' }} />
                    <span className="term-dot" style={{ background: '#28c840' }} />
                  </div>
                  <span className="term-title">~/izhaan — zsh</span>
                </div>

                <div className="term-body">
                  <div>
                    <span className="term-prompt">❯ </span>
                    <span className="term-cmd">cat</span>
                    <span style={{ color: 'var(--text)' }}> developer.json</span>
                  </div>
                  <div className="term-out">{`{`}</div>
                  <div className="term-out">
                    &nbsp;&nbsp;<span className="term-key">"name"</span>:{' '}
                    <span className="term-val">"Izhaan Hasan Saifi"</span>,
                  </div>
                  <div className="term-out">
                    &nbsp;&nbsp;<span className="term-key">"role"</span>:{' '}
                    <span className="term-val">"Mobile Developer"</span>,
                  </div>
                  <div className="term-out">
                    &nbsp;&nbsp;<span className="term-key">"stack"</span>: [
                  </div>
                  {['Flutter', 'Android / Kotlin', 'Firebase', 'Personalized AI', 'REST APIs', '.NET / C#', 'MySQL'].map(
                    (s) => (
                      <div className="term-out" key={s}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="term-val">"{s}"</span>,
                      </div>
                    )
                  )}
                  <div className="term-out">&nbsp;&nbsp;],</div>
                  <div className="term-out">
                    &nbsp;&nbsp;<span className="term-key">"dsa"</span>:{' '}
                    <span className="term-val">"C++ & Java"</span>,
                  </div>
                  <div className="term-out">
                    &nbsp;&nbsp;<span className="term-key">"available"</span>:{' '}
                    <span style={{ color: 'var(--accent)' }}>true</span>,
                  </div>
                  <div className="term-out">
                    &nbsp;&nbsp;<span className="term-key">"location"</span>:{' '}
                    <span className="term-val">"India 🇮🇳"</span>
                  </div>
                  <div className="term-out">{`}`}</div>
                  <div style={{ marginTop: 4 }}>
                    <span className="term-prompt">❯ </span>
                    <span className="term-cursor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react';

const projects = [
  {
    id: 1,
    emoji: '🕌',
    category: '//RECENT WORK',
    title: 'Al Aalim',
    subtitle: 'AI-Powered Islamic Companion',
    desc: 'An intelligent Islamic knowledge app powered by Personalized AI. Features chat interface, Qibla compass, prayer times, and multi-language support. MVVM architecture with Jetpack Compose.',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Personalized AI'],
    github: 'https://github.com/Izhaan21',
    demo: 'https://play.google.com/store/apps/details?id=com.alaalim.app',
    gradient: 'linear-gradient(160deg, #0f1923 0%, #1a2744 60%, #0d1b3e 100%)',
    screenBg: 'linear-gradient(180deg, #1a2744 0%, #0f1923 100%)',
    accentColor: '#4f8ef7',
    phoneColor: '#1a1f2e',
  },
  {
    id: 2,
    emoji: '💸',
    category: '//FULL STACK',
    title: 'ScanSpend',
    subtitle: 'Smart Expense Tracking API & App',
    desc: 'A complete full-stack expense tracking solution. Features a responsive Flutter frontend seamlessly integrated with a robust ASP.NET Core REST API. Backed by MySQL and protected by JWT authentication.',
    tech: ['Flutter', '.NET (C#)', 'MySQL', 'JWT', 'Render'],
    github: 'https://github.com/Izhaan21',
    demo: null,
    gradient: 'linear-gradient(160deg, #161e38 0%, #2b5876 60%, #4e4376 100%)',
    screenBg: 'linear-gradient(180deg, #4e4376 0%, #2b5876 100%)',
    accentColor: '#8ca1cc',
    phoneColor: '#1a1f2e',
  }
];

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function PhoneMockup({ project }) {
  return (
    <div className="phone-wrap">
      <div className="phone-frame" style={{ '--phone-color': project.phoneColor }}>
        {/* Dynamic island */}
        <div className="phone-island" />
        {/* Screen */}
        <div className="phone-screen" style={{ background: project.screenBg }}>
          <div className="phone-screen-content">
            <span style={{ fontSize: '3.5rem' }}>{project.emoji}</span>
            <div style={{ marginTop: 12, fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {project.subtitle}
            </div>
          </div>
        </div>
        {/* Home indicator */}
        <div className="phone-indicator" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const p = projects[current];

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        <div className="project-featured">
          {/* Left: Phone mockup */}
          <div className="project-featured-visual" style={{ background: p.gradient, padding: '40px 0 0' }}>
            <PhoneMockup project={p} />
          </div>

          {/* Right: Info */}
          <div className="project-featured-info">
            <div>
              <span className="project-eyebrow">{p.category}</span>
              <h3 className="project-featured-title">{p.title}</h3>
              <p className="project-featured-desc">{p.desc}</p>

              <div className="project-tech-row">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hire"
                  style={{ gap: 8 }}
                >
                  <GitHubIcon /> GitHub
                </a>
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-hero"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  >
                    <ExternalIcon /> Live Demo
                  </a>
                ) : (
                  <span className="demo-coming" title="Coming soon">
                    🚀 Coming to Play Store
                  </span>
                )}
              </div>
            </div>

            <div className="project-meta">
              <span className="project-title-small">{p.subtitle}</span>
              {projects.length > 1 && (
                <button
                  className="next-btn"
                  onClick={() => setCurrent((c) => (c + 1) % projects.length)}
                >
                  NEXT <span style={{ fontSize: '0.9rem' }}>→</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        {projects.length > 1 && (
          <div style={{
            height: 2,
            background: 'var(--border)',
            borderLeft: '1px solid var(--border)',
            borderRight: '1px solid var(--border)',
          }}>
            <div style={{
              height: '100%',
              width: `${((current + 1) / projects.length) * 100}%`,
              background: 'var(--accent)',
              transition: 'width 0.4s ease',
            }} />
          </div>
        )}

        {/* Dot navigation */}
        {projects.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? 'var(--accent)' : 'var(--border-light)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

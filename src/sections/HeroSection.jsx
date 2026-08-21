import { useEffect, useRef, useState } from 'react';
import ResumeModal from '../components/ResumeModal';

const ROLES = [
  { label: 'dev.role', value: 'Mobile Application Developer' },
  { label: 'dev.skills', value: 'DSA  →  C++ & Java' },
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIdx].value;
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 65);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <>
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-top">
            <div className="hero-intro-box">

              {/* Name */}
              <h1 className="hero-name-alt" style={{ color: '#ffffff' }}>
                Izhaan Hasan Saifi
              </h1>

              {/* Typewriter — dynamic label per role */}
              <p className="hero-typewriter">
                <span className="fn-name">{ROLES[roleIdx].label}</span>
                <span className="fn-paren">&nbsp;=&nbsp;"</span>
                <span className="fn-string">{displayed}</span>
                <span className="cursor">|</span>
                <span className="fn-paren">"</span>
              </p>

              {/* CTA Buttons */}
              <a
                href="#contact"
                className="hero-contact-btn"
                id="hero-contact-cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>git commit --hire-me</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <button
                onClick={() => setResumeOpen(true)}
                className="hero-contact-btn"
                style={{
                  background: 'var(--accent)',
                  color: '#0d0f0f',
                  border: '1px solid var(--accent)',
                  cursor: 'pointer',
                }}
              >
                <span>View Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </button>
            </div>

            {/* Profile Photo — clean circle */}
            <div className="hero-photo-wrap">
              <img
                src="/profile.jpg"
                alt="Izhaan Hasan Saifi"
                className="hero-photo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-photo-placeholder" style={{ display: 'none' }}>👨‍💻</div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="hero-bottom-bar hero-bottom-bar-custom">
            <p className="hero-desc hero-desc-custom">
              <strong>// izhaan.dev</strong> — Mobile (Flutter/Kotlin) | Backend (.NET &amp; MySQL) | Security (JWT) &amp; AI Integration
            </p>
            <div className="hero-social-block">
              <a href="https://github.com/Izhaan21" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/izhaan-hasan-saifi-882791214/" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hasanizhaan21@gmail.com" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Email">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

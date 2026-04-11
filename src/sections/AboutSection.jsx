export default function AboutSection() {
  return (
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
                I'm <strong style={{ color: 'var(--text)' }}>Izhaan Hasan Saifi</strong>, a Mobile
                Developer focused on Flutter and Android. I build apps that are fast, functional, and
                feel great to use — from architecture to the last animation.
              </p>
              <p className="about-desc" style={{ marginTop: 12 }}>
                I've worked with Firebase, AI APIs, REST services, and custom design systems. My goal
                is always to ship apps that are production-quality, maintainable, and user-first.
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
              <a
                href="https://drive.google.com/file/d/16xRD_e1eFsBmjGd-x7ppALzgmpHhRB2D/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
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
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease, background 0.3s ease',
                  borderRadius: 2,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = 'var(--accent-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'var(--accent)';
                }}
              >
                ↓ resume.pdf
              </a>
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
                {['Flutter', 'Android / Kotlin', 'Firebase', 'Gemini AI', 'REST APIs'].map(
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
  );
}

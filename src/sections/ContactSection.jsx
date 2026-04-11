import { contactLinks } from '../data/portfolio';

function MailIcon() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
      alt="Gmail"
      style={{
        width: 24,
        height: 24,
      }}
    />
  );
}

function LinkedInIcon() {
  return (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
      alt="LinkedIn"
      style={{
        width: 24,
        height: 24,
      }}
    />
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 24, height: 24, color: 'var(--text)' }}>
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
    </svg>
  );
}

const iconMap = { mail: MailIcon, linkedin: LinkedInIcon, github: GitHubIcon };

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div>
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-heading">Let's Work Together</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 12, maxWidth: 480 }}>
            Open for freelance, contracts, and full-time roles. Reach out — I respond within 24 hours.
          </p>
        </div>

        <div className="contact-cards">
          {contactLinks.map((c) => {
            const Icon = iconMap[c.icon];
            const isExternal = c.id !== 'email';
            return (
              <a
                key={c.id}
                href={c.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="contact-card"
                style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}
              >
                <div className="contact-card-icon-wrap">
                  <Icon />
                </div>
                <div className="contact-card-label">{c.label}</div>
                <div className="contact-card-value">{c.value}</div>
                <div className="contact-card-link">{c.cta}</div>
              </a>
            );
          })}
        </div>

        {/* Quick CTA row */}
        <div style={{
          marginTop: 32,
          padding: '24px 32px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 6 }}>
              Prefer a direct message?
            </p>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
              hasanizhaan21@gmail.com
            </p>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hasanizhaan21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hire"
            style={{ flexShrink: 0 }}
          >
            Send Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}

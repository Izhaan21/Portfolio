export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Big CTA Section */}
      <div className="footer-cta">
        <h2 className="footer-cta-text">
          Let's <span>Build</span><br />Together
        </h2>
        <p className="footer-cta-sub">
          <span style={{ color: 'var(--accent)' }}>$</span> izhaan --hire --open-to-work
        </p>
        <a
          href="#contact"
          className="btn-hire"
          style={{ fontSize: '0.85rem', padding: '14px 36px' }}
          onClick={(e) => go(e, '#contact')}
        >
          git init --collaboration
        </a>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom container">
        <span className="footer-copy">
          <span style={{ color: 'var(--accent)' }}>// </span>
          © 2025 Izhaan Hasan Saifi — Mobile Developer
        </span>
        <div className="footer-socials">
          <a href="https://github.com/Izhaan21" target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/izhaan-hasan-saifi-882791214/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
          <a href="mailto:hasanizhaan21@gmail.com" className="footer-social-link">Email</a>
        </div>
      </div>
    </footer>
  );
}

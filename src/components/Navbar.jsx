import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggle } = useTheme();

  // Scroll-spy: fixed 120px offset = ticker (37px) + navbar (68px) + small buffer
  useEffect(() => {
    const OFFSET = 120;

    const handleScroll = () => {
      const scrollPos = window.scrollY + OFFSET;
      const sections = navLinks
        .map(({ id }) => {
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop } : null;
        })
        .filter(Boolean);

      // Find the last section whose top is above our scroll position
      let current = sections[0]?.id || 'home';
      for (const sec of sections) {
        if (scrollPos >= sec.top) current = sec.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href, id) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(id);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="nav-logo" onClick={(e) => go(e, '#home', 'home')} style={{ fontFamily: '"Fira Code", Consolas, monospace', textTransform: 'none', letterSpacing: '-1px', fontSize: '1.4rem' }}>
            <span style={{ color: 'var(--accent)' }}>&lt;</span>Izhaan <span style={{ color: 'var(--text-muted)' }}>/</span><span style={{ color: 'var(--accent)' }}>&gt;</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href, l.id)}
                  className={activeSection === l.id ? 'nav-active' : ''}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>



          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href, l.id)}
              style={{ color: activeSection === l.id ? 'var(--accent)' : undefined }}
            >
              {l.label}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}

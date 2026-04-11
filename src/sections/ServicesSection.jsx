import { useState } from 'react';

const services = [
  {
    name: 'Flutter Apps',
    num: '/01',
    desc: 'Cross-platform mobile apps for iOS and Android from a single codebase. Smooth animations, custom widgets, and pixel-perfect design.',
    tags: ['Flutter', 'Dart', 'Material UI', 'Custom Animations'],
  },
  {
    name: 'Android Dev',
    num: '/02',
    desc: 'Native Android development with Kotlin and Jetpack Compose. MVVM architecture, clean code, and robust performance.',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'XML Layouts'],
  },
  {
    name: 'Firebase Integration',
    num: '/03',
    desc: 'Full backend integration with Firebase — Firestore, Auth, Storage, Functions, and real-time data sync.',
    tags: ['Firestore', 'Auth', 'Firebase Hosting', 'Cloud Functions'],
  },
  {
    name: 'AI Integration',
    num: '/04',
    desc: 'Embedding AI capabilities into mobile apps — chat interfaces, Personalized AI, image recognition, and smart automation.',
    tags: ['Personalized AI', 'REST APIs', 'Chat UI', 'NLP'],
  },
  {
    name: 'App UI/UX Design',
    num: '/05',
    desc: 'Designing clean, intuitive app interfaces in Figma. Wireframes, prototypes, and design systems.',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'Micro-Animations'],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <span className="section-eyebrow">What I Do</span>
          <h2 className="section-heading">Services</h2>
        </div>

        <div className="services-inner">
          <ul className="services-list">
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <li
                  key={s.num}
                  className={`service-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: isActive ? 'var(--accent)' : 'var(--text-dim)',
                      minWidth: 28,
                      transition: 'color 0.3s',
                    }}>
                      {s.num}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem, 3vw, 2.4rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      color: isActive ? 'var(--text)' : 'var(--text-muted)',
                      transition: 'color 0.3s ease',
                    }}>
                      {s.name}
                    </span>
                  </div>
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '1.3rem',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'opacity 0.3s, transform 0.3s',
                    flexShrink: 0,
                  }}>→</span>
                </li>
              );
            })}
          </ul>

          <div className="services-preview">
            <span className="service-preview-number">{services[active].num}</span>
            <div className="service-preview-title">{services[active].name}</div>
            <p className="service-preview-desc">{services[active].desc}</p>
            <div className="service-preview-tags">
              {services[active].tags.map((t, i) => (
                <span key={t} className={`service-tag ${i === 0 ? 'accent' : ''}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

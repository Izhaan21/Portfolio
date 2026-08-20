const techStack = [
  {
    name: 'Flutter',
    category: 'mobile',
    color: '#54C5F8',
    bg: 'rgba(84,197,248,0.08)',
    border: 'rgba(84,197,248,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    name: 'Android',
    category: 'mobile',
    color: '#3DDC84',
    bg: 'rgba(61,220,132,0.08)',
    border: 'rgba(61,220,132,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
  },
  {
    name: 'Kotlin',
    category: 'mobile',
    color: '#7F52FF',
    bg: 'rgba(127,82,255,0.08)',
    border: 'rgba(127,82,255,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  },
  {
    name: 'Dart',
    category: 'mobile',
    color: '#00B4AB',
    bg: 'rgba(0,180,171,0.08)',
    border: 'rgba(0,180,171,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    name: 'C++',
    category: 'dsa',
    color: '#00599C',
    bg: 'rgba(0,89,156,0.1)',
    border: 'rgba(0,89,156,0.3)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'Java',
    category: 'dsa',
    color: '#ED8B00',
    bg: 'rgba(237,139,0,0.08)',
    border: 'rgba(237,139,0,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Firebase',
    category: 'backend',
    color: '#FFCA28',
    bg: 'rgba(255,202,40,0.08)',
    border: 'rgba(255,202,40,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'C#',
    category: 'backend',
    color: '#178600',
    bg: 'rgba(23,134,0,0.08)',
    border: 'rgba(23,134,0,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: '.NET Core',
    category: 'backend',
    color: '#512BD4',
    bg: 'rgba(81,43,212,0.08)',
    border: 'rgba(81,43,212,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  },
  {
    name: 'MySQL',
    category: 'backend',
    color: '#4479A1',
    bg: 'rgba(68,121,161,0.08)',
    border: 'rgba(68,121,161,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'JWT',
    category: 'backend',
    color: '#fb015b',
    bg: 'rgba(251,1,91,0.08)',
    border: 'rgba(251,1,91,0.2)',
    logo: 'https://jwt.io/img/pic_logo.svg',
  },
  {
    name: 'Render',
    category: 'backend',
    color: '#46E3B7',
    bg: 'rgba(70,227,183,0.08)',
    border: 'rgba(70,227,183,0.2)',
    logo: 'https://cdn.simpleicons.org/render/46E3B7',
  },
  {
    name: 'Git',
    category: 'tools',
    color: '#F05032',
    bg: 'rgba(240,80,50,0.08)',
    border: 'rgba(240,80,50,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    category: 'tools',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.15)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Postman',
    category: 'tools',
    color: '#FF6C37',
    bg: 'rgba(255,108,55,0.08)',
    border: 'rgba(255,108,55,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  },
  {
    name: 'REST APIs',
    category: 'tools',
    color: '#009688',
    bg: 'rgba(0,150,136,0.08)',
    border: 'rgba(0,150,136,0.2)',
    logo: 'https://img.icons8.com/color/48/api.png',
  },
  {
    name: 'Figma',
    category: 'tools',
    color: '#A259FF',
    bg: 'rgba(162,89,255,0.08)',
    border: 'rgba(162,89,255,0.2)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
];

const dsaTopics = [
  { name: 'Arrays & Strings',   icon: '[ ]',  level: 'Strong' },
  { name: 'Linked Lists',        icon: '→',    level: 'Strong' },
  { name: 'Stacks & Queues',    icon: '⊞',    level: 'Strong' },
  { name: 'Trees & Graphs',     icon: '⬡',    level: 'Intermediate' },
  { name: 'Recursion & DP',     icon: '∞',    level: 'Intermediate' },
  { name: 'Sorting & Searching',icon: '⇅',    level: 'Strong' },
  { name: 'Hashing',             icon: '#',    level: 'Strong' },
  { name: 'Greedy Algorithms',  icon: '→*',   level: 'Intermediate' },
];

function TechCard({ tech }) {
  return (
    <div
      className="tech-card"
      style={{
        '--tech-color': tech.color,
        '--tech-bg': tech.bg,
        '--tech-border': tech.border,
      }}
    >
      <div className="tech-logo">
        <img
          src={tech.logo}
          alt={tech.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: tech.name === 'GitHub' ? 'var(--icon-filter)' : 'none',
          }}
        />
      </div>
      <div className="tech-name">{tech.name}</div>
    </div>
  );
}

const groupLabel = (key) => ({
  mobile:  'Mobile Development',
  dsa:     'DSA & Problem Solving',
  backend: 'Backend & Cloud',
  tools:   'Tools & Design',
}[key]);

export default function SkillsSection() {
  const groups = ['mobile', 'dsa', 'backend', 'tools'];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* ── Tech Stack ─────────────────────────── */}
        <div style={{ marginBottom: 52 }}>
          <span className="section-eyebrow">My Expertise</span>
          <h2 className="section-heading">Tech Stack</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: 12, fontFamily: 'var(--font-mono)', maxWidth: 500 }}>
            Technologies I use to build fast, polished mobile applications and secure backend APIs.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginBottom: 80 }}>
          {groups.map((key) => {
            const techs = techStack.filter((t) => t.category === key);
            if (!techs.length) return null;
            return (
              <div key={key}>
                <h3 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--text)',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                  paddingBottom: 8,
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ color: 'var(--accent)', marginRight: 10 }}>//</span>
                  {groupLabel(key)}
                </h3>
                <div className="tech-grid">
                  {techs.map((tech) => <TechCard key={tech.name} tech={tech} />)}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

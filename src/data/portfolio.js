export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skills = {
  Languages: ['Dart', 'Kotlin', 'Java', 'C++', 'C#'],
  Frameworks: ['Flutter', 'Android (Jetpack Compose)', 'Android (XML)', '.NET', 'ASP.NET Core'],
  Databases: ['MySQL'],
  'Security & Auth': ['JWT (JSON Web Tokens)'],
  'Tools & Services': ['Firebase', 'Git', 'GitHub', 'REST APIs', 'Figma', 'Postman', 'Render'],
};

export const projects = [
  {
    id: 1,
    title: 'Al Aalim',
    category: 'Android · AI',
    description:
      'An intelligent Islamic knowledge app powered by AI. Features a chat interface, Qibla compass, prayer times, and multi-language support. Built with Kotlin, Jetpack Compose, and Firebase.',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Personalized AI'],
    github: 'https://github.com/Izhaan21/Al_Aalim',
    demo: 'https://play.google.com/store/apps/details?id=com.alaalim.app',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accentColor: '#5c6bc0',
  },
  {
    id: 2,
    title: 'ScanSpend',
    category: 'Full Stack · Mobile',
    description: 'A full-stack expense tracking application featuring a Flutter mobile app and a secure ASP.NET Core REST API. Implemented JWT authentication and MySQL for data management, with the backend deployed on Render.',
    tech: ['Flutter', 'C#', '.NET', 'MySQL', 'JWT', 'Render'],
    github: 'https://github.com/Izhaan21/ScanSpend',
    demo: null,
    gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
    accentColor: '#4e4376',
  }
];

export const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'hasanizhaan21@gmail.com',
    href: 'mailto:hasanizhaan21@gmail.com',
    icon: 'mail',
    cta: 'Send Email →',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/izhaan-hasan-saifi',
    href: 'https://www.linkedin.com/in/izhaan-hasan-saifi-882791214/',
    icon: 'linkedin',
    cta: 'Connect →',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Izhaan21',
    href: 'https://github.com/Izhaan21',
    icon: 'github',
    cta: 'View Code →',
  },
];


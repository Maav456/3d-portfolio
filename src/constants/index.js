export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 4, name: 'Contact', href: '#contact' },
];

export const myProjects = [
  {
    title: 'MERN - School Management System',
    desc: 'A **School Management System** streamlining administrative tasks, student records, attendance, exams, and communication.',
    subdesc: 'Built with Node.js, MongoDB, Express.js, and React.js, designed for schools to manage data efficiently.',
    href: 'https://github.com/Maav456/WEbApp-Mern-School-Mangement-System.git',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2E1E1B',
      border: '1px solid #5A3A35',
      boxShadow: '0px 0px 40px 5px rgba(170, 60, 48, 0.2)',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Website - LearnGrow Educational Platform',
    desc: '**LearnGrow** is a platform for Class 10 students to access and manage study materials in PDF and image formats.',
    subdesc: 'Features subject-wise navigation, an admin panel for uploads, and dark mode support for a better learning experience.',
    href: 'https://github.com/Maav456/learngrow.git',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#142B40',
      border: '1px solid #284660',
      boxShadow: '0px 0px 40px 5px rgba(47, 109, 181, 0.2)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Quote - React Quote App',
    desc: 'A sleek React app that fetches and displays random or category-based quotes with sharing options.',
    subdesc: 'Features a minimalist UI, dark mode support, and social media sharing.',
    href: 'https://github.com/Maav456/Reactquoteapp.git',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#319A77',
      border: '1px solid rgba(208, 213, 221, 0.8)',
      boxShadow: '0px 0px 30px 5px rgba(35, 131, 96, 0.15)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => ({
  deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
  deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
  cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
  reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
  ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
  targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
});

export const workExperiences = [
  {
    id: 1,
    name: 'MongoDB',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: 'MongoDB simplifies data management with a flexible document-based structure, fast queries, and seamless integration with Node.js.',
    icon: '/assets/mongodb-ar21.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Express.js',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: 'Express.js enables fast and scalable web applications with minimal yet powerful backend capabilities.',
    icon: '/assets/expressjs-ar21.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'React.js',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: 'React helps build dynamic and responsive UIs with its component-based architecture and virtual DOM.',
    icon: '/assets/reactjs-ar21.svg',
    animation: 'salute',
  },
];

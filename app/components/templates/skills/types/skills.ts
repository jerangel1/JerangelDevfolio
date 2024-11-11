export type Skill = {
  name: string;
  icon: string;
  level: number; // 1-100
  category: "language" | "framework" | "tool";
  href: string;
  description: string;
};

// Función mejorada para responsive
export const getResponsiveRadius = (baseRadius: number) => {
  if (typeof window !== "undefined") {
    const smallestDimension = Math.min(window.innerWidth, window.innerHeight);
    const baseSize = smallestDimension * 0.8;
    const scale = baseSize / 800;
    return baseRadius * scale;
  }
  return baseRadius;
};
export const orbits = [
  { radius: getResponsiveRadius(100), minLevel: 90 },
  { radius: getResponsiveRadius(180), minLevel: 80 },
  { radius: getResponsiveRadius(260), minLevel: 70 },
  { radius: getResponsiveRadius(340), minLevel: 0 },
];
export const skills: Skill[] = [
  // Languages
  {
    name: "TypeScript",
    icon: "/typescript.png",
    level: 90,
    category: "language",
    href: "https://www.typescriptlang.org/",
    description: "My primary language for web development! I love using TypeScript's type system to build robust applications. It's essential in my daily workflow, especially with Next.js and React, helping me catch errors early and write more maintainable code.",
  },
  {
    name: "JavaScript",
    icon: "/javascript-logo.png",
    level: 88,
    category: "language",
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    description: "The foundation of my frontend skills! While I prefer TypeScript for larger projects, I'm highly proficient in JavaScript for creating interactive and dynamic web experiences with smooth animations.",
  },
  {
    name: "Python",
    icon: "/python-logo.png",
    level: 85,
    category: "language",
    href: "https://www.python.org/",
    description: "My backend companion! I love using Python for building APIs, automation scripts, and data processing. Its clean syntax and powerful libraries make backend development a joy.",
  },
  {
    name: "HTML",
    icon: "/html-logo.png",
    level: 95,
    category: "language",
    href: "https://www.freecodecamp.org/espanol/news/aprende-html-y-css-curso-desde-cero/",
    description: "The backbone of web development! I focus on writing semantic and accessible HTML, ensuring great SEO and user experience. Clean markup is crucial for maintainable projects.",
  },
  {
    name: "CSS",
    icon: "/css-logo.png",
    level: 85,
    category: "language",
    href: "https://css-tricks.com/",
    description: "The styling powerhouse! I love crafting responsive layouts with Grid and Flexbox, creating smooth animations, and ensuring pixel-perfect designs across all devices.",
  },
  {
    name: "PHP",
    icon: "/php.png",
    level: 70,
    category: "language",
    href: "https://www.php.net/manual/es/intro-whatis.php",
    description: "While not my primary focus, I'm comfortable working with PHP, especially in WordPress development and legacy systems. It was my introduction to backend development.",
  },
  // Frameworks
  {
    name: "Next.js",
    icon: "/logoNext.png",
    level: 90,
    category: "framework",
    href: "https://nextjs.org/",
    description: "My go-to framework! I love leveraging Next.js's powerful features like server components, app router, and hybrid rendering. Combined with TypeScript, it's my preferred stack for building modern web applications.",
  },
  {
    name: "React",
    icon: "/react.png",
    level: 88,
    category: "framework",
    href: "https://es.react.dev/",
    description: "The heart of my frontend development! Expert at building reusable components, managing complex state, and creating performant user interfaces. React + TypeScript is my power combo!",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.png",
    level: 90,
    category: "framework",
    href: "https://tailwindcss.com/",
    description: "My favorite styling solution! The utility-first approach perfectly fits my workflow. I love how it speeds up development while maintaining design consistency across large applications.",
  },
  {
    name: "Bootstrap",
    icon: "/bootstrap-logo.png",
    level: 85,
    category: "framework",
    href: "https://getbootstrap.com/",
    description: "A reliable framework for rapid prototyping! While I prefer Tailwind for custom projects, Bootstrap is great for quickly building responsive interfaces with its comprehensive component library.",
  },
  {
    name: "Flask",
    icon: "/flask.png",
    level: 75,
    category: "framework",
    href: "https://flask.palletsprojects.com/en/3.0.x/",
    description: "My preferred Python web framework! I use Flask to build lightweight APIs and backend services. Its simplicity and flexibility make it perfect for microservices architecture.",
  },
  // Tools
  {
    name: "Node.js",
    icon: "/nodejs.png",
    level: 80,
    category: "tool",
    href: "https://nodejs.org/en",
    description: "Essential for modern web development! I use Node.js for building APIs, running development tools, and managing npm packages. Its ecosystem is invaluable in my daily workflow.",
  },
  {
    name: "Git",
    icon: "/git.png",
    level: 85,
    category: "tool",
    href: "https://git-scm.com/",
    description: "Version control master! Comfortable with complex Git workflows, including feature branching, rebasing, and resolving merge conflicts. Essential for any serious development work.",
  },
  {
    name: "GitHub",
    icon: "/github.png",
    level: 85,
    category: "tool",
    href: "https://github.com/",
    description: "More than just a code repository! I actively use GitHub for project management, CI/CD with Actions, and collaboration. It's central to my development workflow.",
  },
  {
    name: "Netlify",
    icon: "/netlify.png",
    level: 75,
    category: "tool",
    href: "https://www.netlify.com/",
    description: "Great for static site deployment! While I prefer Vercel for Next.js projects, Netlify is my choice for static sites and JAMstack applications. Their form handling and serverless functions are super useful.",
  },
  {
    name: "Vercel",
    icon: "/vercelLogo.png",
    level: 85,
    category: "tool",
    href: "https://vercel.com",
    description: "My preferred deployment platform! Perfect for Next.js applications with its zero-config setup, powerful analytics, and edge functions. The development experience is unmatched!",
  },
  {
    name: "WordPress",
    icon: "/wordpress.png",
    level: 75,
    category: "tool",
    href: "https://wordpress.com",
    description: "When clients need a CMS! While not my primary focus, I'm proficient in WordPress development, including custom themes and plugins. Great for content-driven websites.",
  },
  {
    name: "Firebase",
    icon: "/firebase-logo.png",
    level: 70,
    category: "tool",
    href: "https://firebase.google.com",
    description: "Perfect for rapid prototyping! I use Firebase when I need quick backend solutions. Its authentication, real-time database, and hosting features are great for MVPs and small projects.",
  },
  {
    name: "Figma",
    icon: "/figma.png",
    level: 80,
    category: "tool",
    href: "https://www.figma.com",
    description: "My design playground! I use Figma for UI/UX design, prototyping, and collaborating with designers. Love creating and implementing design systems from Figma to code.",
  },
  {
    name: "Canva",
    icon: "/canva.png",
    level: 85,
    category: "tool",
    href: "https://www.canva.com",
    description: "Quick and effective design tool! Perfect for creating social media graphics, presentations, and marketing materials when I need something professional-looking quickly.",
  },
  {
    name: "Docker",
    icon: "/docker.png",
    level: 70,
    category: "tool",
    href: "https://www.docker.com/",
    description: "Containerization made easy! While still learning, I use Docker to maintain consistent development environments and simplify deployment processes across different platforms.",
  },
];

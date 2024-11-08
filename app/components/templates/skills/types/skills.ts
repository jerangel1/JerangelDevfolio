export type Skill = {
    name: string;
    icon: string;
    level: number; // 1-100
    category: "language" | "framework" | "tool";
    href: string;
    description: string;
  }
  
  export const skills: Skill[] = [
    // Languages
    {
      name: "JavaScript",
      icon: "/javascript-logo.png",
      level: 90,
      category: "language",
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      description: "I utilize JavaScript to enhance user interfaces with interactivity, animations, and dynamic functionality on web pages."
    },
    {
      name: "TypeScript",
      icon: "/typescript.png",
      level: 85,
      category: "language",
      href: "https://www.typescriptlang.org/",
      description: "I leverage TypeScript, a superset of JavaScript, for scalable and maintainable web development projects, adding static typing for improved code quality."
    },
    {
      name: "HTML",
      icon: "/html-logo.png",
      level: 95,
      category: "language",
      href: "https://www.freecodecamp.org/espanol/news/aprende-html-y-css-curso-desde-cero/",
      description: "I use HTML to structure content and create visually appealing and responsive web pages."
    },
    {
      name: "CSS",
      icon: "/css-logo.png",
      level: 85,
      category: "language",
      href: "https://css-tricks.com/",
      description: "I apply CSS for styling and layout, ensuring a consistent and attractive presentation of web content across different devices."
    },
    {
      name: "Python",
      icon: "/python-logo.png",
      level: 75,
      category: "language",
      href: "https://www.python.org/",
      description: "I employ Python for various applications, including web development, scripting, and data analysis, leveraging its simplicity and versatility."
    },
    {
      name: "PHP",
      icon: "/php.png",
      level: 70,
      category: "language",
      href: "https://www.php.net/manual/es/intro-whatis.php",
      description: "I use PHP to develop dynamic and server-side web applications, integrating it seamlessly with databases for efficient data processing."
    },
    // Frameworks
    {
      name: "React",
      icon: "/react.png",
      level: 88,
      category: "framework",
      href: "https://es.react.dev/",
      description: "I harness the power of React to build fast, scalable, and interactive user interfaces, creating seamless single-page applications."
    },
    {
      name: "Next.js",
      icon: "/logoNext.png",
      level: 85,
      category: "framework",
      href: "https://nextjs.org/",
      description: "I utilize Next.js to enhance React applications with features like server-side rendering and optimized performance."
    },
    {
      name: "Tailwind CSS",
      icon: "/tailwind.png",
      level: 90,
      category: "framework",
      href: "https://tailwindcss.com/",
      description: "I employ Tailwind CSS for efficient styling, streamlining the development process and ensuring consistent and maintainable designs."
    },
    {
      name: "Bootstrap",
      icon: "/bootstrap-logo.png",
      level: 85,
      category: "framework",
      href: "https://getbootstrap.com/",
      description: "I use Bootstrap to create responsive and visually appealing designs, accelerating the development of mobile-friendly web applications."
    },
    {
      name: "Flask",
      icon: "/flask.png",
      level: 70,
      category: "framework",
      href: "https://flask.palletsprojects.com/en/3.0.x/",
      description: "I leverage Flask to build lightweight and modular web applications in Python, focusing on simplicity and ease of use."
    },
    // Tools
    {
      name: "Node.js",
      icon: "/nodejs.png",
      level: 80,
      category: "tool",
      href: "https://nodejs.org/en",
      description: "I use Node.js to develop scalable and server-side web applications, leveraging its asynchronous and event-driven architecture."
    },
    {
      name: "Git",
      icon: "/git.png",
      level: 85,
      category: "tool",
      href: "https://git-scm.com/",
      description: "I utilize Git for version control, ensuring collaborative and efficient development workflows, and maintaining code integrity."
    },
    {
      name: "GitHub",
      icon: "/github.png",
      level: 85,
      category: "tool",
      href: "https://github.com/",
      description: "I use GitHub as a collaborative platform for version control, code review, and project management, facilitating team collaboration."
    },
    {
      name: "Netlify",
      icon: "/netlify.png",
      level: 75,
      category: "tool",
      href: "https://www.netlify.com/",
      description: "I deploy web applications seamlessly with Netlify, benefiting from its continuous integration, deployment, and serverless functions."
    },
    {
      name: "Vercel",
      icon: "/vercelLogo.png",
      level: 80,
      category: "tool",
      href: "https://vercel.com",
      description: "I leverage Vercel for hosting and deploying applications with a focus on performance, scalability, and serverless functions."
    },
    {
      name: "WordPress",
      icon: "/wordpress.png",
      level: 75,
      category: "tool",
      href: "https://wordpress.com",
      description: "I use WordPress to create dynamic and customizable websites, leveraging its user-friendly content management system."
    },
    {
      name: "Firebase",
      icon: "/firebase-logo.png",
      level: 70,
      category: "tool",
      href: "https://firebase.google.com",
      description: "I integrate Firebase to develop real-time applications, leverage cloud services, and ensure seamless authentication and data storage."
    },
    {
      name: "Figma",
      icon: "/figma.png",
      level: 80,
      category: "tool",
      href: "https://www.figma.com",
      description: "I use Figma for collaborative design and prototyping, streamlining the design-to-development workflow for web and mobile applications."
    },
    {
      name: "Canva",
      icon: "/canva.png",
      level: 85,
      category: "tool",
      href: "https://www.canva.com",
      description: "I use Canva for graphic design, creating visual content, and enhancing the overall aesthetics of various projects."
    },
    {
      name: "Docker",
      icon: "/docker.png",
      level: 70,
      category: "tool",
      href: "https://www.docker.com/",
      description: "I implement Docker for containerization, enabling consistent deployment and scalability of applications across different environments."
    }
  ];
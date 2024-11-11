export type Tech = {
  imgSrc: string;
  altText: string;
};

export type Project = {
  id: number;
  name: string;
  repository: string;
  isPrivate: boolean;
  imgSrc: string;
  altText: string;
  techStack: Tech[];
  description: string;
  previewLink: string;
};


export const projects: Project[] = [
  {
    id: 1,
    name: "Real-Time Lottery Results Web App",
    repository: "https://github.com/jerangel1",
    isPrivate: true,
    imgSrc: "/projects-img/LotteryResults.png",
    altText: "App web photos y videos",
    techStack: [
      { imgSrc: "/LogoReact.png", altText: "React Logo" },
      { imgSrc: "/typescript.png", altText: "typesScript Logo" },
      { imgSrc: "/postgress.png", altText: "Postgress Logo" },
    ],
    description:
      "Leveraging HTML, CSS, and secure Firebase Storage, this platform boasts meticulous design and intuitive functionality. Figma-driven UI ensures consistent visuals across device.This platform was instrumental in the success of a recent wedding celebration. By enabling guests to contribute photos using a QR code, we eliminated 90% of photo management burden for the wedding couple. The platform also enriched the experience for guests by allowing them to share photos in real time, ❤️ Create a more engaging and memorable event.",
    previewLink: "https://monitor.betsol.la/",
  },
  {
    id: 2,
    name: "Landing Page for lottery products",
    repository: "https://github.com/jerangel1",
    isPrivate: true,
    imgSrc: "/projects-img/PollaWeb.png",
    altText: "Landing Page for lottery",
    techStack: [
      { imgSrc: "/typescript.png", altText: "Typescript Logo" },
      { imgSrc: "/tailwind.png", altText: "JavaScript Logo" },
      { imgSrc: "/LogoReact.png", altText: "React logo" },
    ],
    description: `
      I crafted a robust Financial Dashboard application from scratch using Next.js. This full-stack project showcases my expertise in building powerful and responsive web applications.
  
    `,
    previewLink: "https://nextjs-dashboard-seven-alpha-95.vercel.app/",
  },
  {
    id: 3,
    name: "Blog For Tips about Astro Framework",
    repository: "https://github.com/jerangel1/astrobuild.tips",
    isPrivate: false,
    imgSrc: "/projects-img/Astrobuilds.png",
    altText: "Blog para usar Astro",
    techStack: [
      { imgSrc: "/javascript-logo.png", altText: "JavaScript Logo" },
      { imgSrc: "/typescript.png", altText: "Typescript Logo" },
      { imgSrc: "/netlify.png", altText: "Netlify  Logo" },
    ],
    description:
      "Embark on Mokepon, my meticulously crafted fighting game that epitomizes technical excellence. Engineered with JavaScript, it intricately weaves game logic, showcasing sophisticated DOM manipulation and dynamic array structures. Deployment through Firebase ensures a seamless, high-performance gaming experience. 🎮",
    previewLink: "https://astrobuild-tips-8c3.pages.dev/",
  },
  {
    id: 4,
    name: "Landing page for GitCode",
    repository: "https://github.com/jerangel1/gitCodeHtml",
    isPrivate: false,
    imgSrc: "/projects-img/gitCode.png",
    altText: "Landing page for GitCode",
    techStack: [
      { imgSrc: "/html-logo.png", altText: "html  Logo" },
      { imgSrc: "/css-logo.png", altText: "CSS ogo" },
      { imgSrc: "/javascript-logo.png", altText: "Javascript logo" },
    ],
    description: "The website you're looking at 🔝",
    previewLink: "https://jerangel1.github.io/gitCodeHtml/",
  },
  {
    id: 5,
    name: "Email Code Extractor API",
    repository: "https://github.com/jerangel1/email-code-extractor",
    isPrivate: false,
    imgSrc: "/projects-img/fastapi-extractor.png",
    altText: "FastAPI Email Extractor",
    techStack: [
      { imgSrc: "/python-logo.png", altText: "Python Logo" },
      { imgSrc: "/fastapi-logo.png", altText: "FastAPI Logo" },
      { imgSrc: "/swagger-logo.png", altText: "Swagger Logo" },
      { imgSrc: "/render-logo.png", altText: "Render Logo" },
    ],
    description: 
      "Automated email code extraction service built with FastAPI. Features IMAP integration for real-time email monitoring, Swagger documentation for easy API testing, and secure code extraction for streaming services. Deployed on Render for reliable performance. The frontend, built with Next.js, provides a user-friendly interface for managing and retrieving codes. 🚀",
    previewLink: "https://api-email-extractor.onrender.com/docs",
  },
  {
    id: 6,
    name: "E-commerce WordPress Site",
    repository: "https://github.com/jerangel1/wp-ecommerce",
    isPrivate: false,
    imgSrc: "/projects-img/wordpress-ecommerce.png",
    altText: "WordPress E-commerce",
    techStack: [
      { imgSrc: "/wordpress-logo.png", altText: "WordPress Logo" },
      { imgSrc: "/woocommerce-logo.png", altText: "WooCommerce Logo" },
      { imgSrc: "/php-logo.png", altText: "PHP Logo" },
      { imgSrc: "/mysql-logo.png", altText: "MySQL Logo" },
    ],
    description:
      "Custom e-commerce solution built on WordPress. Integrated WooCommerce for robust shopping features, custom theme development, and optimized for performance. Includes secure payment processing, inventory management, and responsive design for all devices. 🛍️",
    previewLink: "https://your-ecommerce-site.com",
  },
  {
    id: 7,
    name: "NoCountry Mobile App",
    repository: "https://github.com/jerangel1/nocountry-mobile",
    isPrivate: false,
    imgSrc: "/projects-img/react-native-app.png",
    altText: "React Native Mobile App",
    techStack: [
      { imgSrc: "/react-native-logo.png", altText: "React Native Logo" },
      { imgSrc: "/typescript.png", altText: "TypeScript Logo" },
      { imgSrc: "/redux-logo.png", altText: "Redux Logo" },
      { imgSrc: "/firebase-logo.png", altText: "Firebase Logo" },
    ],
    description:
      "Mobile application developed for NoCountry using React Native. Features cross-platform compatibility, smooth animations, and integrated state management with Redux. Includes real-time updates, push notifications, and offline functionality. Collaborated with a team of developers to deliver a polished user experience. 📱",
    previewLink: "https://expo.dev/@yourusername/nocountry-app",
  },
  {
    id: 8,
    name: "Admin Dashboard & User Management",
    repository: "https://github.com/jerangel1/admin-dashboard",
    isPrivate: false,
    imgSrc: "/projects-img/admin-dashboard.png",
    altText: "Admin Dashboard Interface",
    techStack: [
      { imgSrc: "/next-logo.png", altText: "Next.js Logo" },
      { imgSrc: "/typescript.png", altText: "TypeScript Logo" },
      { imgSrc: "/prisma-logo.png", altText: "Prisma Logo" },
      { imgSrc: "/tailwind.png", altText: "Tailwind Logo" },
      { imgSrc: "/postgresql-logo.png", altText: "PostgreSQL Logo" },
    ],
    description: 
      "Full-stack admin dashboard built with Next.js 14 and TypeScript. Features include user authentication with NextAuth, role-based access control, real-time data updates with Server Actions, and responsive design with Tailwind CSS. Integrated with Prisma ORM and PostgreSQL for robust data management. Includes dark mode, analytics dashboard, and comprehensive user management system. 📊",
    previewLink: "https://admin-dashboard-demo.vercel.app",
  },
];

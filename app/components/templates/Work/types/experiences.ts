export const experiences = [
  {
    id: 1,
    position: "Office Manager",
    date: "2013-2017",
    url: "https://www.instagram.com/turismundovalencia/?hl=es",
    company: "Travel Agency Turismundo C.A",
    content:
      "Entusiastic professional with more than 5 years of experience in the tourism sector with a proven record of success in achieving sales goals, developing marketing strategies, and improving customer satisfaction.",
    category: {
      tag: "Sales",
    },
    link: {
      url: "https://www.instagram.com/turismundovalencia/?hl=es",
      text: "Read more",
    },
  },
  {
    id: 2,
    position: "Director",
    date: "2018-2023",
    company: "Pravenca C.A",
    url: "https://pravenca1.wixsite.com/website-1",
    content:
      "Executive Director with a proven track record of success in growing and transforming businesses. Led the development and implementation of strategic plans that resulted in a 25% annual increase in sales. Proactively managed the company's performance, taking corrective action to ensure efficiency and quality. Represented the company to clients, suppliers, and partners, building strong relationships.",
    category: {
      tag: "Strategy",
    },
    link: {
      url: "https://pravenca1.wixsite.com/website-1",
      text: "Read more",
    },
  },
  {
    id: 3,
    position: "Web Developer",
    date: "2020-2022",
    url: "https://jerangel1.github.io/Portfolio/",
    company: "Freelance",
    content:
      "Skilled Web Developer with a proven track record of success in creating high-quality, user-friendly websites and web applications.",
    category: {
      tag: "Frontend",
    },
    link: {
      url: "https://jerangel1.github.io/Portfolio/",
      text: "Read more",
    },
  },
  {
    id: 4,
    position: "Junior Developer",
    date: "Sep-Dec-2023",
    url: "https://koa.agency/",
    company: "Koa Agency",
    content:
      "I worked on the development of two websites for an integrative education and psychotherapeutic accompaniment course on the essence of motherhood. I was responsible for editing the pages URLs to improve SEO, restructuring the content according to Adobe XD mockups, and delivering the project on time",
    category: {
      tag: "Full Stack",
    },
    link: {
      url: "https://koa.agency/",
      text: "Read more",
    },
  },
  {
    id: 5,
    position: "Frontend Developer",
    date: "Feb-2024",
    url: "https://betsol.la/",
    company: "Betsol.la",
    content:
      "I'm deeply engaged in the development and creation of mobile and web applications, where I specialize in frontend responsibilities. My role involves meticulously crafting user interfaces and experiences that captivate and delight users. Utilizing tools like Figma and Canva, I design intuitive and visually appealing interfaces that enhance user engagement and satisfaction. Through careful attention to detail and a keen understanding of user behavior, I strive to create seamless and immersive experiences that leave a lasting impression.",
    category: {
      tag: "Frontend",
    },
    link: {
      url: "https://betsol.la/",
      text: "Read more",
    },
  },
  {
    id: 6,
    position: "Full Stack Mobile Developer",
    date: "Oct-2024",
    url: "https://www.nocountry.tech/",
    company: "No Country",
    content: 
      "Developed an MVP educational mobile application using React Native as part of an agile team simulating a real work environment. The application enables student performance evaluation by connecting all stakeholders in the educational process: principals, teachers, parents, and students. Implemented key features such as user authentication, customized dashboards, notification system, and real-time grade management. Worked in a cross-functional team using agile methodologies, Git for version control, and participated in daily standups and sprint reviews.",
    category: {
      tag: "Mobile Development",
    },
    link: {
      url: "https://www.nocountry.tech/",
      text: "Read more",
    },
    highlights: [
      "Full stack development with React Native and Node.js",
      "Team collaboration using agile methodologies",
      "Implementation of authentication and authorization",
      "Responsive mobile interface design",
      "RESTful API integration",
      "Version control with Git and GitHub",
      "Participation in agile ceremonies"
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "JWT",
      "Git"
    ]
  }
];

export interface Experience {
    id: number;
    position: string;
    date: string;
    url: string;
    company: string;
    content: string;
    category: {
      tag: string;
    };
    link: {
      url: string;
      text: string;
    };
    highlights?: string[]; // opcional
    technologies?: string[]; // opcional
  }
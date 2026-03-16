import type { PortfolioContent } from "../types/portfolioContent";

export const defaultPortfolioContent: PortfolioContent = {
  typewriterStrings: [
    "Software Engineer",
    "Full-Stack Developer",
    "Web Application Builder",
    "AI-Enabled Web Applications Engineer",
    "Scalable Web App Builder",
  ],
  projects: [
    {
      imgPath:
        "https://raw.githubusercontent.com/krochet94/project_config/main/images/portfolio_phonealone.png",
      title: "PhoneAlone",
      description:
        "Smartphone E-commerce projects using MERN Stack, complete with CRUD for user/product/order, Login/Register, Add Review, Payment using Stripe API, data visualization and many more FUNCTIONALITIES.",
      ghLink: "https://github.com/krochet94/Phone_Alone",
      demoLink: "https://phone-alone.vercel.app/",
      isBlog: false,
    },
    {
      imgPath:
        "https://raw.githubusercontent.com/krochet94/project_config/main/images/portfolio_time-tracker.png",
      title: "Time Tracker",
      description:
        "A Simple Time Tracking App using React.js, Firebase(Auth, Firestore Database and Hosting) and MUI",
      ghLink: "https://github.com/krochet94/react-time-tracker",
      demoLink: "https://time-tracker-react-278d0.web.app",
      isBlog: false,
    },
  ],
  skillset: [
    { icon: "DiReact", desc: "React" },
    { icon: "SiTypescript", desc: "TypeScript" },
    { icon: "DiJavascript1", desc: "JavaScript" },
    { icon: "DiNodejs", desc: "Node.js" },
    { icon: "SiFirebase", desc: "Firebase" },
    { icon: "SiExpress", desc: "Express.js" },
    { icon: "SiNextdotjs", desc: "Next.js" },
    { icon: "SiRedux", desc: "Redux" },
    { icon: "SiVite", desc: "Vite" },
    { icon: "SiTailwindcss", desc: "Tailwind CSS" },
    { icon: "SiMui", desc: "Material UI (MUI)" },
    { icon: "SiPostgresql", desc: "PostgreSQL" },
    { icon: "SiMysql", desc: "MySQL" },
    { icon: "DiMongodb", desc: "MongoDB" },
    { icon: "FaAws", desc: "AWS" },
    { icon: "DiPython", desc: "Python" },
    { icon: "SiOpenai", desc: "OpenAI GPT API" },
    { icon: "FaRobot", desc: "Claude API" },
    { icon: "FaBrain", desc: "Prompt Engineering" },
    { icon: "FaCogs", desc: "AI Workflow Automation" },
  ],
  tools: [
    { icon: "DiVisualstudio", desc: "Visual Studio" },
    { icon: "DiGit", desc: "Git" },
    { icon: "SiGithub", desc: "Github" },
    { icon: "SiGithubcopilot", desc: "GitHub Copilot" },
    { icon: "FaChrome", desc: "Browser DevTools" },
    { icon: "SiPostman", desc: "Postman" },
    { icon: "SiJira", desc: "Jira" },
    { icon: "SiWebpack", desc: "Webpack" },
    { icon: "SiSentry", desc: "Sentry" },
    { icon: "FaRobot", desc: "Claude" },
    { icon: "SiOpenai", desc: "ChatGPT" },
    { icon: "SiGoogle", desc: "Gemini" },
  ],
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://fb.com/krochet94",
      icon: "FaFacebook",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/krochet94",
      icon: "FaLinkedinIn",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/krochet94",
      icon: "AiOutlineTwitter",
    },
    {
      platform: "GitHub",
      url: "https://github.com/krochet94",
      icon: "AiFillGithub",
    },
  ],
  contact: {
    cvUrl: "https://krochet94.github.io/Portfolio/CarlAragoncillo-CV.pdf",
    location: "Midsayap, North Cotabato, Philippines",
    email: "carljasoncainaragoncillo@gmail.com",
    phone: "+63 930 528 1043",
  },
  about: {
    imgPath:
      "https://raw.githubusercontent.com/krochet94/project_config/main/images/portfolio_about.jpg",
    bioParagraphs: [
      "Motivated and detail-oriented Full Stack Web Developer specialized in MERN Stack Technology, with a passion for building modern, scalable web applications.",
      "Proficient in Javascript, React, Node, Typescript and Python, with a strong understanding of object-oriented programming principles. Skilled in working with the MERN and Next.js and building full-stack web applications. Proficient in integrating GCP/Firebase for realtime database and authentication.",
      "Is experienced in agile development methodologies and working collaboratively in a team environment.",
    ],
  },
};

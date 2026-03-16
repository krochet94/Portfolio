import type { PortfolioContent } from "../types/portfolioContent";

export const defaultPortfolioContent: PortfolioContent = {
  typewriterStrings: [
    "MERN Stack Developer",
    "Fullstack Web Developer",
    "Javascript Developer",
    "Frontend Web Developer",
    "Backend Web Developer",
  ],
  projects: [
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/phonealone.png",
      title: "PhoneAlone",
      description:
        "Smartphone E-commerce projects using MERN Stack, complete with CRUD for user/product/order, Login/Register, Add Review, Payment using Stripe API, data visualization and many more FUNCTIONALITIES.",
      ghLink: "https://github.com/krochet94/Phone_Alone",
      demoLink: "https://phone-alone.vercel.app/",
      isBlog: false,
    },
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/time-tracker.png",
      title: "Time Tracker",
      description:
        "A Simple Time Tracking App using React.js, Firebase(Auth, Firestore Database and Hosting) and MUI",
      ghLink: "https://github.com/krochet94/react-time-tracker",
      demoLink: "https://time-tracker-react-278d0.web.app",
      isBlog: false,
    },
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/todoApp-reactFirebase.jpg",
      title: "Simple Todo App",
      description:
        "A simple todo web app using Next, Firebase and Mantine.dev. Have basic create, update, delete, filter and sort functionalities.",
      ghLink: "https://github.com/krochet94/Simple-Todo-App",
      demoLink: "https://simple-todo-app-rose.vercel.app",
      isBlog: false,
    },
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/next-simple-api.png",
      title: "Simple Api Fetching and Display",
      description: "Simple Api Fetching and Display using NextJs and MUI.",
      ghLink: "https://github.com/krochet94/nextjs-simple-api",
      demoLink: "https://nextjs-simple-api-zeta.vercel.app",
      isBlog: false,
    },
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/randomquotemachine-react.jpg",
      title: "Random Quote Machine",
      description:
        "A simple random quote machine project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, JQuery, Bootstrap 5, Font-awesome and the FCC testable project",
      ghLink: "https://github.com/krochet94/Random-Quote-Machine_React",
      demoLink: "https://krochet94.github.io/Random-Quote-Machine_React/",
      isBlog: false,
    },
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/markdownpreviewer-react.jpg",
      title: "Markdown Previewer",
      description:
        "A simple markdown previewer project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, Bootstrap 5, Marked and the FCC testable project",
      ghLink: "https://github.com/krochet94/Markdown-Previewer_React",
      demoLink: "https://krochet94.github.io/Markdown-Previewer_React/",
      isBlog: false,
    },
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/drummachine-react.jpg",
      title: "Drum Machine",
      description:
        "A simple markdown previewer project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, Bootstrap 5 and the FCC testable project",
      ghLink: "https://github.com/krochet94/Drum-Machine_React",
      demoLink: "https://krochet94.github.io/Drum-Machine_React/",
      isBlog: false,
    },
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/jscalculator-react.jpg",
      title: "Javascript Calculator",
      description:
        "A simple javascript calculator project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, Bootstrap 5 and the FCC testable project",
      ghLink: "https://github.com/krochet94/JS-Calculator_React",
      demoLink: "https://krochet94.github.io/JS-Calculator_React/",
      isBlog: false,
    },
    {
      imgPath: "https://krochet94.github.io/Portfolio/img/pomodorotimer-react.jpg",
      title: "Pomodoro Timer",
      description:
        "A simple javascript calculator project using React for FreeCodeCamp Certification. Additional CDNs used were React-DOM, Babel, Materialize, Material Icons and the FCC testable project",
      ghLink: "https://github.com/krochet94/Pomodoro-Timer_React/",
      demoLink: "https://krochet94.github.io/Pomodoro-Timer_React/",
      isBlog: false,
    },
  ],
  skillset: [
    { icon: "DiJavascript1", desc: "Javascript" },
    { icon: "DiReact", desc: "React" },
    { icon: "DiNodejs", desc: "Node.js" },
    { icon: "SiNextdotjs", desc: "Next.js" },
    { icon: "SiFirebase", desc: "Firebase" },
    { icon: "SiExpress", desc: "Express.js" },
    { icon: "DiMongodb", desc: "MongoDB" },
    { icon: "SiRedux", desc: "Redux" },
    { icon: "DiHtml5", desc: "HTML" },
    { icon: "DiCss3", desc: "CSS" },
    { icon: "DiPython", desc: "Python" },
    { icon: "DiGit", desc: "Git" },
    { icon: "FaAws", desc: "AWS" },
  ],
  tools: [
    { icon: "DiVisualstudio", desc: "Visual Studio" },
    { icon: "SiGithub", desc: "Github" },
    { icon: "SiVercel", desc: "Vercel" },
    { icon: "SiPostman", desc: "Postman" },
    { icon: "SiHeroku", desc: "Heroku" },
    { icon: "SiGitlab", desc: "Gitlab" },
    { icon: "SiJira", desc: "Jira" },
    { icon: "SiTrello", desc: "Trello" },
  ],
  socialLinks: [
    { platform: "Facebook", url: "https://fb.com/krochet94", icon: "FaFacebook" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/krochet94", icon: "FaLinkedinIn" },
    { platform: "Twitter", url: "https://twitter.com/krochet94", icon: "AiOutlineTwitter" },
    { platform: "GitHub", url: "https://github.com/krochet94", icon: "AiFillGithub" },
  ],
  contact: {
    cvUrl: "https://krochet94.github.io/Portfolio/CarlAragoncillo-CV.pdf",
  },
};

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "NextJS Developer",
    icon: backend,
  },
  {
    title: "Javascript and Typescript",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend - Developer",
    company_name: "Confidential",
    icon: starbucks,
    iconBg: "#383E56",
    date: "09/2022 - current",
    points: [
      "Working as a frontend developer for the team, fulfill tickets from Techlead",
      "Communicate with customer about the working flow and business of the project",
      "Develop, update components in Storybook following the UI design in Figma created by Designer",
      "Fixing frontend bug for the project, clean and defactoring code",
      "Checking website for WCAG standard",
      "Fix UI errors in AEM forms."
    ],
  },
  {
    title: "Frontend - Developer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "01/2023 - 07/2023",
    points: [
      "Develop pages according to Figma design",
      "Create components for webstie",
      "Working directly with customer",
      "Handling APIs come from ChatGPT",
      "Fix Ui bugs"
    ],
  },
  {
    title: "Frontend - Developer",
    company_name: "Confidential",
    icon: shopify,
    iconBg: "#383E56",
    date: "07/2022 - 06/2023",
    points: [
      "Fixing bugs for the UI.",
      "Working directly with customers about project's tickets.",
      "Complete tickets from customer's PM",
      "Convert to NextJS 13",
      "Optimize the UI, enhance user's experience"
    ],
  },
  {
    title: "Frontend - Developer",
    company_name: "Confidential",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "07/2021 - 06/2022",
    points: [
      "Fixing bugs for the UI.",
      "Build website frontend for Veritone Corp 's Energy Application with ReactJS by completing tickets in Jira platform",
      "Develop website following the UI design in Figma created by partners from Veritone Corp.",
      "Optimize the UI, enhance user's experience.",
      "Working with partners from US on working flow and ticket requirements"
    ],
  },
  {
    title: "Fullstack - Developer",
    company_name: "Confidential",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "07/2021 - 06/2022",
    points: [
      "Developed an user management website using backend NodeJS and front end ReactJS from scratch",
      "Working with MUI to build UI and PostgresQL for storing data"
    ],
  },
  {
    title: "Frontend - Developer",
    company_name: "Confidential",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "10/2020 - 06/2021",
    points: [
      "Maintain and update front end code for IOC (Intelligent Operation Center) - a prodcut developed by Viettel Corp application using ReactJS.",
      "Fixing bugs for the front end code.",
      "Help customer to implement and using the appication."
    ],
  },
  {
    title: "Fullstack - Developer",
    company_name: "Confidential",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "05/2018 - 09/2020",
    points: [
      "Working as backend and frontend developer (mainly backend)",
      "Working with PM on designing features for the application.",
      "Developed database for the project.",
      "Learn from the best software engineers.",
      "Using NodeJS, ReactJS and MongoDB"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

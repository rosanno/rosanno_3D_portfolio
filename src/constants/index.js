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
  laravel,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  camalig,
  clothing,
  yariga,
  musichubs,
  weather,
  airbnb,
  vscode,
  visualstudio,
  postman,
  materialui,
  vue,
  mysql,
  csharp,
  java,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    category: "frontend",
    name: "HTML 5",
    icon: html,
  },
  {
    category: "frontend",
    name: "CSS 3",
    icon: css,
  },
  {
    category: "frontend",
    name: "JavaScript",
    icon: javascript,
  },
  {
    category: "frontend",
    name: "TypeScript",
    icon: typescript,
  },
  {
    category: "frontend",
    name: "React JS",
    icon: reactjs,
  },
  {
    category: "frontend",
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    category: "frontend",
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    category: "frontend",
    name: "Vue",
    icon: vue,
  },
  {
    category: "frontend",
    name: "Material UI",
    icon: materialui,
  },
  {
    category: "backend",
    name: "Node JS",
    icon: nodejs,
  },
  {
    category: "backend",
    name: "Laravel",
    icon: laravel,
  },
  {
    category: "backend",
    name: "MongoDB",
    icon: mongodb,
  },
  {
    category: "backend",
    name: "MySql",
    icon: mysql,
  },
  {
    category: "language",
    name: "CSharp",
    icon: csharp,
  },
  {
    category: "language",
    name: "Java",
    icon: java,
  },
  {
    category: "tools",
    name: "vscode",
    icon: vscode,
  },
  {
    category: "tools",
    name: "visualstudio",
    icon: visualstudio,
  },
  {
    category: "tools",
    name: "postman",
    icon: postman,
  },
  {
    category: "tools",
    name: "git",
    icon: git,
  },
  {
    category: "tools",
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Assistant/Graphics Design Intern",
    company_name: "LGU CAMALIG",
    icon: camalig,
    iconBg: "#fff",
    date: "November 2019 - March 2020",
    points: [
      "Provided technical assistance and troubleshooting for software and hardware issues.",
      "Design a business license plate, the mayor's permit sticker, the mayor's banner for the brgy fiesta, and an employee t-shirt.",
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
    name: "Clothing",
    description:
      "Ecommerce Web App is an online platform where customers can browse and purchase products. The platform will allow users to register and login to their accounts, add products to their carts, checkout, and make payments using a secure payment gateway.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: clothing,
    live_link: "https://clothing-store-9fx7.vercel.app/",
    source_code_link: "https://github.com/rosanno/clothing-store",
  },
  {
    name: "Real Estate Dashboard",
    description:
      "Real estate admin dashboard is a web-based application that will allow the real estate company to manage the properties by adding new properties, editing existing properties, and deleting properties. The company will also be able to view a list of all properties and filter them based on various criteria, such as location, type, price, and availability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: yariga,
    live_link: "https://realt-state-refine.netlify.app/",
    source_code_link: "https://github.com/rosanno/refine_dashboard",
  },
  {
    name: "Music Hubs",
    description:
      "The online music player web app is a web-based application that allows users to listen to their favorite music tracks from a variety of genres and artists. The application will allow users to search for music, browse albums and artists, and enjoy their favorite songs with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vitejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "reduxjs toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: musichubs,
    live_link: "https://musical-pixie-d19449.netlify.app/",
    source_code_link: "https://github.com/rosanno/music-hubs",
  },
  {
    name: "Local Weather",
    description:
      "The online weather web app is a web-based application that provides users with real-time weather information for a specific location. The application will allow users to view current weather conditions, hourly and daily weather forecasts, and weather alerts. Additionally, the application will provide users with weather history and trends for the selected location.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    live_link: "https://thelocalweathers.netlify.app/",
    source_code_link: "https://github.com/rosanno/weather-app",
  },
  {
    name: "Airbnb clone",
    description:
      "Airbnb clone web app is a platform that mimics the functionality and features of the popular travel and accommodation booking website, Airbnb. It allows users to search and book lodging options such as apartments, houses, villas, and other vacation rentals from hosts worldwide.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    live_link: "",
    source_code_link: "https://github.com/rosanno/airbnb-clone2",
  },
];

export { services, technologies, experiences, testimonials, projects };

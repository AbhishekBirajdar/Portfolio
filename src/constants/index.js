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
  accenture,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Visionary",
    icon: creator,
  },
  {
    title: "Leader",
    icon: backend,
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
    title: "Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#ffffff",
    date: "August 2021 - August 2023",
    points: [
      "Orchestrated the integration of various components using Apache NIFI and ConText, enhancing data flow efficiency.",
      "Managed the implementation of a robust CI/CD pipeline using GitLab, resulting in streamlined development and deployment processes.",
      "Established a sophisticated monitoring system using Monit and Grafana's Dashboard, coupled with Telegraf for efficient metric collection.",
      "Led code review efforts for each module within the Client Statements system, ensuring process compliance and high-quality deliverables",
      "Collaborated with cross-functional teams to align technical strategies with business goals, fostering a cohesive work environment.",
      "Mentored junior developers, providing technical guidance, and fostering skill development.",
    ],
  },
  {
    title: "Associate Application Developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#ffffff",
    date: "Aug 2021 - Oct 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Bhaba Atomic Research Center",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Jan 2020",
    points: [
      "Demonstrated business-focused UI skills, creating an impactful Human Machine Interface (HMI) prototype in Reactor Control Division",
      " Utilized Python, Matplotlib, & Tkinter", 
      "led a team of 4 and liaised between the mentor and team",
      "Played a pivotal role in risk analysis & risk mitigation leading to an integrated alert system within the HMI ",
      ],
  },
  {
    title: "Summer Intern",
    company_name: "VESIT- Mumbai University",
    icon: shopify,
    iconBg: "#ffffff",
    date: "May 2018 - July 2019",
    points: [
      "Modifications to a ARM Microcontroller based Humnoid Robot to enhance its efficiency in real life scenarios",
      "Applied knowledge of Linux and C programming and designed for Sample Mine Detections in Soil using Infrared and Ultrasonic senors",
      "Implemented and achieved basic identification attributes in bot",
    ],
  },
  {
    title: "Technical Research Intern",
    company_name: "Board of Radiation and Isotope Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - Jan 2019",
    points: [
      "Operated PLCs operations in radioisotope and radiation technology for healthcare, research, and agriculture.",
      "Calibrated the PLCs for maximum efficiency for exposing onions to isotopic radiation for increasing shelf life.",
      "Collaborating with cross-functional teams including Scientists and Technicians to create high-quality products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Visionary leader who combines their creative prowess with a tech-savvy mindset, all while displaying a remarkable aptitude for rapid learning.",
    name: "Dr. Nadir Charnia",
    designation: "Professor",
    company: "Mumbai Univeristy",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Invaluable team player,  brilliant mind and vocal about unique problem-solving ideas.",
    name: "Amrita Prasad",
    designation: "Senior Software Analyst",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Strategic approach to every situation, complemented by his analytical thinking, and can light up any room with their great sense of humor",
    name: "Aloke Tewary",
    designation: "Senior SOftware Engineer",
    company: "Here Technologies",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Social Distancing Violations",
    description:
      "Developed a User Application for real-time identification and intervention of Social Distancing violations in Marketplaces, Hospitals, and enclosed areasolution for transportation needs.",
    tags: [
      {
        name: "SupportVectorMachine",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Yolov3",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Road Survellence Bot",
    description:
      "Engineered a mobile application that delivers qualitative route recommendations based on the correlation between road quality and travel time.",
    tags: [
      {
        name: "K-means ",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "NoSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Covid-19 Chatbot",
    description:
      "Developed an intelligent COVID-Chatbot with Natural Language Processing capabilities to detect and manage stress.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "LSTM",
        color: "green-text-gradient",
      },
      {
        name: "neuralnetworks",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };

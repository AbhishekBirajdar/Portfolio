// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   meta,
//   accenture,
//   tesla,
//   shopify,
//   carrent,
//   jobit,
//   tripguide,
//   threejs,
// } from "../assets";

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },

// ];

// const services = [
//   {
//     title: "Software Developer",
//     icon: web,
//   },
//   {
//     title: "Machine Learning",
//     icon: mobile,
//   },
//   {
//     title: "Visionary",
//     icon: creator,
//   },
//   {
//     title: "Leader",
//     icon: backend,
//   },
  
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

// src/constants/index.js
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
  nifi,
  numpy,
  python,
  grafana,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
  },
  {
    id: "experience",
    title: "Experience",
    path: "/experience",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];

// Reframed as Data / Analytics focused services
const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Data Visualization & BI",
    icon: creator,
  },
  {
    title: "Data Engineering Foundations",
    icon: backend,
  },
];

// Re-ordered / tweaked to highlight data stack
const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "TensorFlow",
    icon: threejs, // if you prefer, keep tensorflow icon here instead
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Apache NiFi",
    icon: nifi,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Figma",
    icon: figma,
  },
];


const experiences = [
  {
    title: "Data Analyst / Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#ffffff",
    date: "August 2021 - August 2023",
    points: [
      "Analyzed large-scale financial data across 22+ enterprise applications supporting APAC & EMEA regulatory reporting.",
      "Designed automated ETL workflows using Apache NiFi, improving data pipeline efficiency and reducing manual intervention by 30%.",
      "Performed root-cause analysis on data quality issues, improving accuracy of client statements and compliance outputs.",
      "Built monitoring dashboards using Grafana and Telegraf to track 200+ data pipeline metrics, enabling faster incident resolution.",
      "Collaborated with cross-functional teams to translate business requirements into analytics tasks and reporting enhancements.",
      "Mentored junior team members on SQL debugging, data validation techniques, and pipeline best practices."
    ],
  },
  {
    title: "Junior Data Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#ffffff",
    date: "Aug 2021 - Oct 2021",
    points: [
      "Assisted in developing internal reporting tools using React.js and Python to automate data validation and QA checks.",
      "Worked with designers and product managers to improve usability of analytics dashboards.",
      "Implemented performance fixes and optimized queries to enhance data retrieval processes.",
      "Contributed to code reviews and identified improvements in analytics scripts and data handling functions."
    ],
  },
  {
    title: "Data Research Intern",
    company_name: "Bhabha Atomic Research Centre (BARC)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Jan 2020",
    points: [
      "Performed analytical research for reactor control systems, using Python and Matplotlib to visualize safety patterns.",
      "Led a team of 4 to build an HMI prototype for the Reactor Control Division, improving data clarity for critical decision-making.",
      "Conducted risk assessment and anomaly analysis, contributing to an automated real-time alert system.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "VESIT – Mumbai University",
    icon: shopify,
    iconBg: "#ffffff",
    date: "May 2018 - July 2019",
    points: [
      "Built embedded-system experiments for sensor-based anomaly detection using infrared and ultrasonic data.",
      "Analyzed environmental data from ARM microcontroller outputs to evaluate real-time terrain and obstacle patterns.",
      "Improved detection accuracy of an early-stage humanoid robot prototype through iterative testing and data analysis."
    ],
  },
  {
    title: "Technical Research Intern",
    company_name: "Board of Radiation & Isotope Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - Jan 2019",
    points: [
      "Performed data collection and calibration for radiation exposure experiments in the agriculture domain.",
      "Optimized PLC parameters through statistical analysis to increase efficiency of food irradiation processes.",
      "Collaborated with scientists to convert raw experimental data into clear reports and operational insights."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhishek combines analytical thinking with creativity, consistently uncovering insights that improve outcomes. His ability to learn rapidly makes him an invaluable contributor.",
    name: "Dr. Nadir Charnia",
    designation: "Professor",
    company: "Mumbai University",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "A reliable team member with a sharp data-driven mindset. Abhishek brings clarity to complex problems and always contributes high-quality work.",
    name: "Amrita Prasad",
    designation: "Senior Software Analyst",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "His structured thinking, collaborative nature, and strong analytical skills make him stand out. Abhishek can translate data into meaningful strategies effortlessly.",
    name: "Aloke Tewary",
    designation: "Senior Software Engineer",
    company: "Here Technologies",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "COVID-19 Social Distancing Analytics",
    description:
      "Built a real-time analytics system that detects social distancing violations using YOLOv3, OpenCV, and SVM. Generated visual insights for crowd density, risk zones, and behavioral patterns.",
    tags: [
      { name: "ComputerVision", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Road Quality Prediction & Route Insights",
    description:
      "Developed a predictive analytics model to estimate road quality and travel-time impact using K-means clustering on sensor and GPS data. Built a mobile interface to visualize safer, faster route options.",
    tags: [
      { name: "Clustering", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Geospatial", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "COVID Mental Health NLP Chatbot",
    description:
      "Created an NLP-powered chatbot using LSTM and sentiment analysis to detect stress levels during COVID-19. Extracted linguistic patterns and emotional cues from user input to provide guided responses.",
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "LSTM", color: "green-text-gradient" },
      { name: "DeepLearning", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

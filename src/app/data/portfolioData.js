export const personalInfo = {
  name: "Izaz Ahmad",
  title: "Full Stack Engineer & React Native Developer",
  email: "youremail@example.com",
  phone: "Phone Number",
  location: "Peshawar, Pakistan",
  github: "https://github.com/IzazAhmadHaider",
  linkedin: "https://www.linkedin.com/in/izaz-ahmad-035a721a3/",
  portfolio: "#",
  summary:
    "Full Stack Engineer specializing in the MERN stack with strong expertise in React, Node.js, AWS, and Redis. Experienced in building scalable AI-driven platforms for call analytics and omnichannel customer support with clean, maintainable, user-centric implementations.",
  highlights: [
    "AI-driven customer support systems across calls, SMS, and messaging channels",
    "Production-grade REST APIs and cloud workflows on AWS Lambda, S3, EC2, and API Gateway",
    "Performance optimization with Redis caching, queues, and real-time pipelines",
  ],
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contacts", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Redis (caching & queues)"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS Lambda", "S3", "EC2", "API Gateway", "CloudWatch", "Vercel"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Postman", "WebSockets", "Agile / Scrum"],
  },
];

export const experiences = [
  {
    company: "Najoomi Technologies",
    role: "Full Stack Engineer",
    duration: "Aug 2025 - Present",
    points: [
      "Building AI customer service agents supporting calls, SMS, voice messages, and image interactions.",
      "Developing core MERN modules with scalable frontend architecture and high-performance backend services.",
      "Implementing AWS-based cloud workflows and serverless microservices for reliable AI deployment.",
      "Optimizing latency and throughput with Redis-based caching and session strategies.",
    ],
  },
  {
    company: "MetaFront LLP",
    role: "Associate Software Engineer",
    duration: "Apr 2022 - Aug 2025",
    points: [
      "Developed React.js applications for internet service registration and operations.",
      "Designed responsive interfaces with Tailwind CSS and reusable UI patterns.",
      "Implemented secure PDF download/upload workflows and integrated backend APIs.",
      "Contributed to sprint planning, code reviews, and iterative product improvements.",
    ],
  },
  {
    company: "HiWIFI",
    role: "Intern Software Engineer",
    duration: "Jan 2022 - Apr 2022",
    points: [
      "Contributed to map-centric planning systems for internet infrastructure using Mapbox and MapLibre.",
      "Built frontend features using React, Tailwind CSS, and Mantine UI.",
      "Integrated REST APIs and supported network cost/cable optimization workflows.",
    ],
  },
];

export const projects = [
  {
    name: "Xperia",
    subtitle: "AI-Driven Call Analytics Platform",
    stack: ["MERN", "AWS", "Redis", "WebSockets"],
    description:
      "Built modules for automated call scoring with GenAI, NLP, and speech-emotion signals. Delivered scalable upload-processing APIs and real-time dashboards for QA and performance insights.",
  },
  {
    name: "QuickTalk",
    subtitle: "Autonomous Omnichannel AI Contact Center",
    stack: ["MERN", "AWS", "Redis", "WebSockets"],
    description:
      "Implemented backend and product modules enabling document ingestion, knowledge extraction, and omnichannel AI agent deployment with monitoring, callback flows, and handoff support.",
  },
  {
    name: "GIGA Fiber",
    subtitle: "Internet Service Registration Platform",
    stack: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    description:
      "Developed full registration workflows, integrated property PDF handling, and improved reliability through iterative frontend and API enhancements in agile sprints.",
  },
  {
    name: "DIM Connect",
    subtitle: "Geo Planning Application",
    stack: ["React.js", "Node.js", "PostgreSQL", "Mapbox/MapLibre"],
    description:
      "Built map-based planning features and API-driven data flows, helping operations teams optimize cable routes and deployment costs.",
  },
];


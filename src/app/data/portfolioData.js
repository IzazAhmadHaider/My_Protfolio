export const personalInfo = {
  name: "Izaz Ahmad",
  role: "Full Stack Engineer",
  title: "Full Stack Engineer · React Native · AI Products",
  email: "izazahmadhaider0@gmail.com",
  location: "Islamabad, Pakistan",
  github: "https://github.com/IzazAhmadHaider",
  linkedin: "https://www.linkedin.com/in/izaz-ahmad-035a721a3/",
  x: "https://x.com/IzazCodes",
  resume: "/IZAZAHMAD.pdf",
  availability: "Open to freelance work and full-time roles",
  summary:
    "Full Stack Engineer building production web and mobile products end to end — from React and React Native front ends to Node.js, Python and Supabase back ends. I ship AI features into real products: call analytics, RAG-powered support agents, and LLM pipelines that turn messy data into structured records.",
};

export const stats = [
  { value: "4+", label: "Years building production software" },
  { value: "12+", label: "Products and services shipped" },
  { value: "Web · Mobile · AI", label: "End-to-end ownership" },
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contacts", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "TanStack Query",
      "Framer Motion",
      "Three.js / GSAP",
      "Astro",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Expo & EAS",
      "Expo Router",
      "Reanimated",
      "MapLibre",
      "Push notifications",
      "Kotlin (Android)",
      "Google Play releases",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase (RLS, RPC, Edge Functions)",
    ],
  },
  {
    title: "AI & LLM",
    items: [
      "OpenAI",
      "Google Gemini",
      "Anthropic Claude",
      "LangChain",
      "RAG pipelines",
      "Pinecone",
      "Structured extraction",
      "OCR (ONNX)",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (Lambda, S3, EC2, Cognito)",
      "Google Cloud (Pub/Sub, Storage)",
      "Kafka",
      "WebSockets",
      "Docker",
      "Nginx",
      "Vercel",
    ],
  },
  {
    title: "Quality & Workflow",
    items: [
      "Playwright",
      "Vitest",
      "Design systems",
      "Accessibility",
      "Git & GitHub",
      "Postman",
      "Agile / Scrum",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Peshawar",
    duration: "2018 - 2022",
  },
];

export const certifications = [
  {
    name: "Master JavaScript from Basics to Advanced",
    issuer: "Udemy",
    date: "Oct 2022",
    credentialId: "UC-e13228f5-9ce7-44b9-a9c1-1fa85e610bd9",
    credentialUrl: "https://www.udemy.com/certificate/UC-e13228f5-9ce7-44b9-a9c1-1fa85e610bd9/",
  },
  {
    name: "The Complete ReactJs Course - Basics to Advanced",
    issuer: "Udemy",
    date: "Oct 2022",
    credentialId: "UC-1af2e8f8-e847-4af5-bbfb-ed4b653046bc",
    credentialUrl: "https://www.udemy.com/certificate/UC-1af2e8f8-e847-4af5-bbfb-ed4b653046bc/",
  },
  {
    name: "HTML5 - From Basics to Advanced level",
    issuer: "Udemy",
    date: "Oct 2022",
    credentialId: "UC-e2646864-3521-4141-9adc-7c9486a7541b",
    credentialUrl: "https://www.udemy.com/certificate/UC-e2646864-3521-4141-9adc-7c9486a7541b/",
  },
];

export const experiences = [
  {
    company: "Najoomi Technologies",
    role: "Full Stack Engineer",
    duration: "Aug 2025 - Present",
    current: true,
    points: [
      "Core frontend engineer on Xperia, an AI call-analytics platform — dashboards, call reports, scoring workflows and multilingual (incl. RTL) PDF report generation.",
      "Built the React + TypeScript admin portal for Xperia's multi-tenant operations, and contributed to the Python/FastAPI and Flask services behind it.",
      "Designed a Playwright test suite with mocked, end-to-end and data-mutating tiers, plus a hard guard that blocks runs against production.",
      "Worked on QuickTalk, an omnichannel AI contact center — RAG with LangChain and Pinecone, real-time chat over Redis Pub/Sub and WebSockets, and Paddle billing.",
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

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & Platforms" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "tools", label: "Tools" },
];

export const projects = [
  {
    name: "Xperia",
    subtitle: "AI-Driven Call Analytics Platform",
    context: "Najoomi Technologies",
    categories: ["ai", "web"],
    featured: true,
    description:
      "A multi-tenant platform that scores customer-support calls with GenAI, NLP and speech-emotion signals, and turns them into dashboards and agent performance reports.",
    highlights: [
      "Built core frontend modules: call uploads, reports, score editing and analytics dashboards",
      "Client-side PDF reports with Arabic/Persian shaping and right-to-left layout",
      "Playwright suites (mocked, e2e, mutating) with a guard that refuses to run against production",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "AWS Cognito", "Recharts", "Python", "PostgreSQL", "Playwright"],
    links: [{ label: "xperia.najoomi.ai", href: "https://xperia.najoomi.ai" }],
  },
  {
    name: "YauzaiSafar",
    subtitle: "Intercity Carpooling Marketplace for Pakistan",
    context: "Personal product",
    categories: ["mobile", "ai", "web"],
    featured: true,
    status: "Live on Google Play",
    description:
      "Drivers post rides, passengers post requests, and both sides match and coordinate over WhatsApp. Includes a live trip map, push notifications and full English/Urdu (RTL) support.",
    highlights: [
      "Expo app on Supabase with Row Level Security, RPCs, Realtime, pg_cron and an Edge Function",
      "AI ingest pipeline: Gemini turns messy WhatsApp ride posts into reviewed, de-duplicated listings",
      "Companion Kotlin Android app (NotiFlow) and an Astro website with blog and admin console",
    ],
    stack: ["React Native", "Expo", "Supabase", "MapLibre", "Gemini", "Astro", "Kotlin"],
    links: [{ label: "yauzaisafar.com", href: "https://yauzaisafar.com" }],
  },
  {
    name: "QuickTalk",
    subtitle: "Autonomous Omnichannel AI Contact Center",
    context: "Najoomi Technologies",
    categories: ["ai", "web"],
    featured: true,
    description:
      "AI agents that answer customers across chat, calls, SMS, voice notes and images — trained on each business's own documents, with monitoring, callbacks and human handoff.",
    highlights: [
      "RAG pipeline with LangChain and Pinecone for document ingestion and grounded answers",
      "Real-time chat over Redis Pub/Sub and WebSockets in a React web agent portal",
      "Subscription billing service integrated with Paddle",
    ],
    stack: ["Node.js", "LangChain", "Pinecone", "Redis", "WebSockets", "React", "GCP Pub/Sub"],
  },
  {
    name: "Reader+",
    subtitle: "Daily Learning App — Big Ideas from Great Books",
    context: "Hizli System",
    categories: ["mobile"],
    featured: true,
    description:
      "Turns the best ideas from books into short swipeable lessons — a Quick read or a Deep dive — with a daily set of topics and reading streaks.",
    highlights: [
      "Free-tier limits enforced in Postgres (RLS + RPC), mirrored in the client for UI only",
      "Offline-friendly data layer with persisted TanStack Query cache",
      "Strict design-system contract: tokens, typography and accessibility rules",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "TanStack Query", "Reanimated"],
    links: [{ label: "readerplus.hizlisystem.com", href: "https://readerplus.hizlisystem.com" }],
  },
  {
    name: "Hizli System",
    subtitle: "Software Studio Website & Admin Console",
    context: "Hizli System",
    categories: ["web", "ai"],
    description:
      "Marketing site for a software studio, plus a hidden admin console that drafts Reader+ content from book text with Claude, and a free in-browser video compressor.",
    highlights: [
      "Admin behind a secret path, Supabase auth with mandatory 2FA and RLS",
      "Video tool re-encodes files fully on-device with WebCodecs — nothing is uploaded",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Three.js", "GSAP", "Supabase", "Claude API"],
    links: [{ label: "hizlisystem.com", href: "https://hizlisystem.com" }],
  },
  {
    name: "Xperia Admin Portal",
    subtitle: "Multi-Tenant Operations Dashboard",
    context: "Najoomi Technologies",
    categories: ["web"],
    description:
      "Internal portal for monitoring tenants, scoring, billing and configuration across Xperia, with a typed React front end over Python services.",
    stack: ["React 19", "TypeScript", "TanStack Query", "Vite", "Django", "Docker", "Nginx"],
  },
  {
    name: "Crixer",
    subtitle: "Offline-First Cricket Scoring App",
    context: "Personal project",
    categories: ["mobile"],
    description:
      "A digital scorebook: tap once per ball and get full scorecards, partnerships, fall of wickets and over-by-over graphs, with unlimited undo.",
    highlights: [
      "Pure TypeScript scoring engine — (state, event) → state — fully unit-tested with Vitest",
      "Sync-ready local schema: UUID v7 keys, timestamps and soft deletes",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Drizzle ORM", "SQLite", "Vitest"],
  },
  {
    name: "ScreenText",
    subtitle: "Offline Screen OCR for Windows",
    context: "Personal tool",
    categories: ["tools", "ai"],
    description:
      "Select and copy any text on screen — including pages you'd have to scroll — from apps, videos, PDFs and sites that block copying. Runs fully offline.",
    stack: ["Python", "PyQt6", "RapidOCR (ONNX)", "NumPy"],
  },
  {
    name: "NaukriNow",
    subtitle: "Job Hiring & Talent Platform",
    context: "Personal project",
    categories: ["web"],
    description:
      "Real-time job listings, skill-based search and employer–candidate matching, with JWT and Google sign-in and file uploads.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    name: "Notivo",
    subtitle: "Minimal Rich-Text Notes",
    context: "Personal project",
    categories: ["web", "tools"],
    description:
      "A single-page, paper-like notes app with read and edit modes, a Notion-style block menu and autosave.",
    stack: ["Next.js", "React", "TipTap", "Tailwind CSS", "Supabase"],
  },
  {
    name: "GIGA Fiber",
    subtitle: "Internet Service Registration Platform",
    context: "MetaFront LLP",
    categories: ["web"],
    description:
      "Full registration workflows with property PDF handling, improved through iterative frontend and API work in agile sprints.",
    stack: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    name: "DIM Connect",
    subtitle: "Geo Planning Application",
    context: "HiWIFI",
    categories: ["web"],
    description:
      "Map-based planning features and API-driven data flows that help operations teams optimize cable routes and deployment costs.",
    stack: ["React.js", "Node.js", "PostgreSQL", "Mapbox / MapLibre"],
  },
];

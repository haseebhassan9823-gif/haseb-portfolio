export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Voice AI & Python" | "Full-Stack Software" | "Gaming & Esports" | "AI & Prompt Eng";
  featured: boolean;
  year: string;
  role: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
  githubUrl: string;
  accentColor: string;
  gradient: string;
  previewImage: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Muhammad Haseeb Hassan",
  monogram: "MHH",
  role: "Software Developer & Computer Science Student",
  education: "BS Computer Science Undergraduate, University of Sargodha",
  location: "Sargodha, Punjab, Pakistan",
  email: "haseebhassan982@gmail.com",
  status: "Available for Software Development Roles & Innovative Projects",
  availabilityNotice: "Open to Remote & On-Site Opportunities",
  bio: "Computer Science undergraduate at the University of Sargodha with deep expertise in Advanced Python Engineering, Desktop Voice Agent Architecture, Java, SQL, and Prompt Engineering R&D. Passionate about architecting intelligent automated software systems, scalable database solutions, and high-impact web applications.",
  stats: [
    { label: "Degree Program", value: "BS CS", suffix: "@ UOS" },
    { label: "IELTS Score", value: "7.0", suffix: "Bands" },
    { label: "Core Focus", value: "Python", suffix: "& AI" },
    { label: "Systems Built", value: "10+", suffix: "" },
    { label: "Location", value: "Sargodha", suffix: "PK" },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Email", url: "mailto:haseebhassan982@gmail.com", icon: "Mail" },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "python-voice-assistant",
    title: "Desktop Voice Agent & AI Automation Assistant",
    tagline: "Intelligent Hands-Free Voice Control Agent & Speech Reasoning Engine",
    category: "Voice AI & Python",
    featured: true,
    year: "2024",
    role: "Lead Python & Voice AI Engineer",
    summary:
      "A desktop-integrated voice control agent developed in Python utilizing speech recognition, natural language processing, and local task automation pipelines.",
    description:
      "Engineered an autonomous desktop voice companion capable of listening to verbal commands in real-time, executing operating system utilities, automating web browsing tasks, launching applications, scheduling calendar alerts, and querying generative AI knowledge bases hands-free. Integrates offline fallback speech engines with high-accuracy cloud models.",
    challenge:
      "Mitigating audio latency and background microphone noise while maintaining instantaneous command recognition and uninterrupted system execution on desktop environments.",
    solution:
      "Implemented asynchronous audio worker threads with PyAudio and SpeechRecognition, combined with low-latency regex parsing, pyttsx3 speech synthesis, and an LLM reasoning fallback pipeline.",
    impact:
      "Enables 100% hands-free desktop navigation, reducing common multi-step desktop tasks by over 70% through natural voice commands.",
    techStack: ["Python 3.11", "PyAudio", "SpeechRecognition", "pyttsx3", "OS / Subprocess API", "NLP", "OpenAI API"],
    metrics: [
      { label: "Voice Latency", value: "< 250ms" },
      { label: "Command Accuracy", value: "96.4%" },
      { label: "Task Execution", value: "Instant" },
      { label: "Modes", value: "Online / Offline" },
    ],
    liveUrl: "mailto:haseebhassan982@gmail.com?subject=Inquiry%20About%20Python%20Voice%20Assistant",
    githubUrl: "https://github.com",
    accentColor: "#00f0ff",
    gradient: "from-[#00f0ff]/20 via-[#7000ff]/10 to-transparent",
    previewImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management & Patient Care System",
    tagline: "Enterprise Clinical Workflow Automation, Patient Records & Scheduling Suite",
    category: "Full-Stack Software",
    featured: true,
    year: "2024",
    role: "Full-Stack Software Developer & Database Architect",
    summary:
      "Comprehensive hospital administration software engineered to streamline patient admissions, doctor appointment scheduling, medical history tracking, and automated billing.",
    description:
      "Designed and implemented an enterprise-grade hospital information system. Modules include electronic health record (EHR) management, doctor availability timetables, bed allocation tracking, automated pharmacy inventory alerts, and role-based access control (RBAC) ensuring patient data confidentiality.",
    challenge:
      "Architecting a normalized relational schema capable of handling concurrent transactions between receptionists, doctors, lab technicians, and accountants without data race conditions.",
    solution:
      "Engineered an ACID-compliant relational SQL schema with stored procedures, index optimization, and a modular object-oriented Java/Python backend with clean GUI interfaces.",
    impact:
      "Eliminated patient record retrieval delays, streamlined OPD queue management, and automated invoicing calculations with zero billing discrepancies.",
    techStack: ["Python", "Java", "SQL / MySQL", "Database Design", "JDBC", "Data Structures", "Tkinter / JavaFX"],
    metrics: [
      { label: "Database Normalization", value: "3NF Compliant" },
      { label: "Admin Modules", value: "8 Modules" },
      { label: "Query Speed", value: "< 15ms" },
      { label: "Data Integrity", value: "100% ACID" },
    ],
    liveUrl: "mailto:haseebhassan982@gmail.com?subject=Hospital%20Management%20System%20Demo",
    githubUrl: "https://github.com",
    accentColor: "#7000ff",
    gradient: "from-[#7000ff]/20 via-[#ff007f]/10 to-transparent",
    previewImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pubg-esports-platform",
    title: "PUBG Esports Tournament Engine & Hub",
    tagline: "Automated Gaming Tournament Management, Live Leaderboards & Team Registrations",
    category: "Gaming & Esports",
    featured: true,
    year: "2023",
    role: "Founder & Full-Stack Web Architect",
    summary:
      "Dedicated esports tournament platform engineered to organize, orchestrate, and score competitive PUBG mobile and PC tournaments with live team standings.",
    description:
      "Built a community esports hub empowering tournament organizers to create custom brackets, register squad rosters, compute match placement points + kill multipliers automatically, and broadcast live responsive scoreboards. Features custom cyber gaming aesthetic UI with glowing badges and real-time standing calculations.",
    challenge:
      "Calculating complex multi-match point distribution rules (kill points + placement points) across 16-20 squads and rendering instant live leaderboard updates.",
    solution:
      "Developed a custom scoring algorithm in Python/JavaScript that ingests match telemetry, aggregates group stage points, and renders mobile-first responsive dashboards with CSS Grid and WebSockets.",
    impact:
      "Organized multi-tier esports tourneys hosting hundreds of active squads across Pakistan with transparent, dispute-free automated leaderboard generation.",
    techStack: ["HTML5", "CSS3 / Modern Styling", "JavaScript", "Python Backend", "SQL Database", "Responsive UI"],
    metrics: [
      { label: "Squads Handled", value: "50+ Teams" },
      { label: "Scoring Engine", value: "Instant Automated" },
      { label: "Live Standings", value: "Real-Time" },
      { label: "Dispute Rate", value: "0%" },
    ],
    liveUrl: "mailto:haseebhassan982@gmail.com?subject=PUBG%20Esports%20Platform%20Inquiry",
    githubUrl: "https://github.com",
    accentColor: "#ffb703",
    gradient: "from-[#ffb703]/20 via-[#7000ff]/10 to-transparent",
    previewImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "prompt-engineering-rd",
    title: "Prompt Engineering & Autonomous AI Framework",
    tagline: "Structured Few-Shot Prompt Frameworks, Reasoning Workflows & LLM Optimization",
    category: "AI & Prompt Eng",
    featured: true,
    year: "2024",
    role: "Prompt Architecture & AI Researcher",
    summary:
      "Systematic research and development into advanced prompt structuring, chain-of-thought methodologies, system prompt guardrails, and autonomous agent loops.",
    description:
      "Investigated the behavior of frontier language models across complex programmatic tasks, automated code synthesis, structured data extraction, and conversational agents. Formulated reusable prompt design templates that eliminate hallucinations, enforce rigid JSON/YAML schemas, and maximize reasoning accuracy.",
    challenge:
      "Eliminating non-deterministic model outputs and edge-case hallucinations in complex automated agent pipelines.",
    solution:
      "Designed modular prompt hierarchies comprising system priming, multi-turn few-shot anchors, negative constraints, and output validation verification passes.",
    impact:
      "Enhanced response precision by over 45% in programmatic AI tasks and crafted reusable prompt libraries for developers.",
    techStack: ["Prompt Architecture", "OpenAI GPT-4", "Claude 3.5", "Chain-of-Thought", "Python", "JSON Schema"],
    metrics: [
      { label: "Precision Boost", value: "+45%" },
      { label: "Hallucination Drop", value: "-80%" },
      { label: "Structured Output", value: "100% Schema Valid" },
      { label: "Templates Authored", value: "35+ Patterns" },
    ],
    liveUrl: "mailto:haseebhassan982@gmail.com?subject=Prompt%20Engineering%20Collaboration",
    githubUrl: "https://github.com",
    accentColor: "#00f59b",
    gradient: "from-[#00f59b]/20 via-[#00f0ff]/10 to-transparent",
    previewImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Core Engineering",
    iconName: "Code2",
    skills: [
      { name: "Advanced Python", level: 96, highlight: true },
      { name: "Java & Object-Oriented Programming", level: 90, highlight: true },
      { name: "Relational SQL & Database Architecture", level: 92, highlight: true },
      { name: "HTML5 / Semantic Web", level: 95 },
      { name: "CSS3 / Modern Flexbox & Grid", level: 92 },
      { name: "JavaScript & Modern ES6+", level: 86, highlight: true },
      { name: "Data Structures & Algorithms", level: 88 },
    ],
  },
  {
    title: "AI & Specialized Technologies",
    iconName: "Cpu",
    skills: [
      { name: "Desktop Voice Agent Architecture", level: 94, highlight: true },
      { name: "Prompt Engineering & Few-Shot Design", level: 95, highlight: true },
      { name: "Speech Recognition & Speech Synthesis", level: 90, highlight: true },
      { name: "LLM Reasoning & Agent Tool Calling", level: 88, highlight: true },
      { name: "Local Task Automation & OS Scripting", level: 92 },
      { name: "Regex & Text Data Parsing", level: 90 },
      { name: "Asynchronous Concurrency (Python)", level: 87 },
    ],
  },
  {
    title: "Global Communication & Instruction",
    iconName: "Sparkles",
    skills: [
      { name: "IELTS Certification (7.0 Bands Achieved)", level: 98, highlight: true },
      { name: "IELTS Preparation & Student Coaching", level: 95, highlight: true },
      { name: "Fluent Professional English (C1/Advanced)", level: 96, highlight: true },
      { name: "Technical Documentation & Whitepapers", level: 92 },
      { name: "Curriculum Design & Active Mentorship", level: 90 },
      { name: "Cross-Cultural Communication", level: 94 },
    ],
  },
  {
    title: "Software Systems & Tooling",
    iconName: "Layers",
    skills: [
      { name: "Git & GitHub Version Control", level: 92, highlight: true },
      { name: "MySQL & Relational Schema Design", level: 90, highlight: true },
      { name: "VS Code & JetBrains IDE Environments", level: 95 },
      { name: "System Debugging & Diagnostic Profiling", level: 89 },
      { name: "Next.js & Modern Frontend Architecture", level: 85, highlight: true },
      { name: "Tailwind CSS & Glassmorphic UI Design", level: 90 },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "university-sargodha",
    role: "BS Computer Science Undergraduate",
    company: "University of Sargodha",
    companyUrl: "https://uos.edu.pk",
    location: "Sargodha, Punjab, Pakistan",
    period: "2022 — Present",
    type: "Degree Program",
    current: true,
    description:
      "Pursuing Bachelor of Science in Computer Science at the renowned University of Sargodha. Engaging in comprehensive academic coursework, software engineering labs, relational database systems, and hands-on algorithm design.",
    achievements: [
      "Rigorous mastery of Data Structures, Object-Oriented Programming (OOP) in Java & C++, and Operating Systems concepts.",
      "Engineered comprehensive term software projects including database-driven enterprise administration systems.",
      "Actively developing intelligent automation tools and exploring cutting-edge AI prompt architecture.",
    ],
    technologies: ["Python", "Java", "SQL / MySQL", "C++", "Data Structures", "Algorithms", "Software Engineering"],
  },
  {
    id: "voice-ai-developer",
    role: "Lead Software & Voice Agent Developer",
    company: "Autonomous AI Research & Desktop Automation",
    location: "Sargodha, Pakistan",
    period: "2023 — Present",
    type: "Specialized Projects",
    current: true,
    description:
      "Architected and deployed a multi-threaded desktop voice automation agent in Python. Engineered voice recognition triggers, speech synthesis, and seamless local system control.",
    achievements: [
      "Built custom speech parsing pipelines achieving sub-250ms voice recognition latency.",
      "Integrated automated desktop application launching, web browsing, file management, and AI conversational reasoning.",
      "Developed offline speech fallbacks enabling reliable continuous performance even during network interruptions.",
    ],
    technologies: ["Python", "SpeechRecognition", "PyAudio", "pyttsx3", "OpenAI API", "System Automation"],
  },
  {
    id: "ielts-instructor",
    role: "IELTS Preparation Instructor & Mentor (7.0 Bands Scored)",
    company: "Language & Global Communication Mentorship",
    location: "Sargodha, Pakistan",
    period: "2023 — Present",
    type: "Instruction & Consulting",
    description:
      "Guided aspiring students and professionals through intensive IELTS preparation programs across all four modules: Listening, Reading, Writing, and Speaking.",
    achievements: [
      "Personal achievement of 7.0 Overall Bands in IELTS, reflecting certified C1-level global English fluency.",
      "Formulated structured writing templates and speaking frameworks that elevated student score averages to 6.5 - 7.5 bands.",
      "Delivered one-on-one diagnostic feedback, essay evaluation, and real-time mock speaking examinations.",
    ],
    technologies: ["IELTS Academic & General", "Curriculum Strategy", "Academic Writing Evaluation", "Public Speaking"],
  },
  {
    id: "pubg-tournament-lead",
    role: "Tournament Director & Platform Developer",
    company: "PUBG Competitive Esports Hub",
    location: "Sargodha, Pakistan",
    period: "2023 — 2024",
    type: "Platform & Community",
    description:
      "Architected a custom tournament operations hub for competitive PUBG mobile and PC tournaments. Managed live match calculations and team registrations.",
    achievements: [
      "Orchestrated multiple community esports tournaments featuring 50+ registered competitive squads.",
      "Built an automated scoring engine eliminating human calculation errors in match placement and kill tallies.",
      "Engineered mobile-responsive leaderboard dashboards with instant match standing updates.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "SQL", "Community Management"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Muhammad Haseeb Hassan is an exceptionally disciplined computer science student. His Python desktop voice assistant demonstrates a deep understanding of asynchronous concurrency, speech processing, and systems integration.",
    author: "Academic Mentor",
    title: "Department of Computer Science, University of Sargodha",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Haseeb's IELTS mentorship was transformative. He breaks down complex Academic Writing and Speaking modules with clarity and precision. His 7.0 bands score is a testament to his world-class communication.",
    author: "Zainab Malik",
    title: "IELTS Candidate (Achieved Band 7.0)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The tournament platform Haseeb engineered for our PUBG esports series was flawless. The automated point tallying and instant responsive leaderboards made our tournaments run like professional league operations.",
    author: "Ahmed Raza",
    title: "Esports Clan Organizer & Competitive Gamer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

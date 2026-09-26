import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Trophy,
  Users,
  Video
} from "lucide-react";

export const resumePath = "https://drive.google.com/file/d/1unSHES8ajpaTugD_jynoqtSlyZgaHhwM/view?usp=sharing";

export const socialLinks = {
  github: "https://github.com/pritam195",
  linkedin: "https://www.linkedin.com/in/chavanpritam/",
  leetcode: "https://leetcode.com/u/chavan_pritam/",
  codechef: "https://www.codechef.com/users/chavan_pritam",
  email: "mailto:chavanpritam172@gmail.com",
  phone: "tel:+919130238226",
  location: "Mumbai, Maharashtra"
};

export const academicProfile = {
  college: "VJTI Mumbai",
  degree: "B.Tech EXTC",
  minor: "Data Science Minor",
  cgpa: "7.82/10"
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    tone: "teal",
    skills: ["C++", "Python", "JavaScript", "SQL"]
  },
  {
    title: "Frontend Engineering",
    icon: Globe2,
    tone: "teal",
    skills: ["React", "Vite", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    tone: "amber",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT"]
  },
  {
    title: "Databases & Storage",
    icon: Database,
    tone: "sky",
    skills: ["MongoDB", "MySQL", "Firebase", "Redis", "SQL"]
  },
  {
    title: "Realtime Systems",
    icon: Network,
    tone: "emerald",
    skills: ["Socket.IO", "WebRTC", "Realtime Chat", "Live Collaboration"]
  },
  {
    title: "AI, ML & Data",
    icon: BrainCircuit,
    tone: "blue",
    skills: ["scikit-learn", "pandas", "NumPy", "Sentence Transformers", "Matplotlib", "pdfplumber", "Gemini API"]
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    tone: "orange",
    skills: ["Git", "GitHub", "Postman", "Docker", "Vercel", "Render"]
  },
  {
    title: "CS Fundamentals",
    icon: Layers3,
    tone: "slate",
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"]
  }
];

export const projectFilters = ["All", "Full Stack", "ML", "Real-Time", "Data"];

export const projects = [
  {
    title: "Vync",
    subtitle: "Real-Time Meeting Platform",
    description:
      "Video meeting platform with authenticated and guest meetings, real-time chat, collaborative whiteboard, live code editor, waiting rooms, and host controls — built with WebRTC and Socket.IO.",
    metric: { value: "49", label: "relay UDP ports via coturn" },
    categories: ["Full Stack", "Real-Time"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "WebRTC", "Redis", "JWT", "Docker", "coturn"],
    highlights: [
      "Real-time chat, collaborative whiteboard, and code editor via Socket.IO; WebRTC for peer-to-peer video",
      "Redis-powered active room-state layer for participants, waiting rooms, whiteboards, and live-code during high-frequency updates",
      "coturn TURN server with STUN/TURN fallback using 49 relay UDP ports for reliable connectivity across restrictive NATs",
      "JWT authentication with bcrypt hashing, protecting 19 REST APIs with authorization middleware"
    ],
    icon: Video,
    github: "https://github.com/pritam195/Vync",
    live: ""
  },
  {
    title: "PulseQueue",
    subtitle: "Distributed Job Processing Engine",
    description:
      "Distributed background job processing engine with priority queues, delayed jobs, at-least-once delivery, configurable worker concurrency, and fault-tolerant recovery mechanisms.",
    metric: { value: "966", label: "jobs/sec across 20 workers" },
    categories: ["Full Stack", "Data"],
    techStack: ["Node.js", "Redis", "MongoDB", "React", "Express"],
    highlights: [
      "Atomic Redis Lua operations for priority dequeuing and delayed-job promotion",
      "Heartbeat leases and a Reaper to automatically recover jobs from crashed workers",
      "Exponential backoff with jitter and MongoDB-backed Dead Letter Queue (DLQ)",
      "Benchmarked 966 jobs/sec across 20 workers with 4.0s P99 latency via SIGKILL chaos testing"
    ],
    icon: Layers3,
    github: "https://github.com/pritam195/PulseQueue",
    live: ""
  },
  {
    title: "Sentinel",
    subtitle: "Inventory & Dynamic Pricing Engine",
    description:
      "Event-driven inventory and dynamic pricing engine that autonomously triggers pricing and reorder recommendations from real-time demand velocity and stock depletion signals.",
    metric: { value: "SSE", label: "real-time event streaming" },
    categories: ["Full Stack", "ML"],
    techStack: ["Node.js", "Express", "MongoDB", "React", "Google Gemini API"],
    highlights: [
      "Event-driven engine triggering pricing and reorder recommendations from demand velocity signals",
      "Google Gemini as pluggable advisory engine behind a Human-in-the-Loop approval workflow with JSON schema validation",
      "Automatic fallback to rule-based logic on AI drift or failure",
      "Real-time SSE streaming and idempotent event handling with immutable audit log for complete decision traceability"
    ],
    icon: ShieldCheck,
    github: "https://github.com/pritam195/Sentinel",
    live: ""
  },
  {
    title: "CodeSense",
    subtitle: "Codebase RAG Platform",
    description:
      "Full-stack RAG platform enabling developers to query unfamiliar codebases in natural language and receive grounded, citation-backed answers via a repository upload and indexing pipeline.",
    metric: { value: "AST", label: "Tree-sitter chunking" },
    categories: ["Full Stack", "ML", "Data"],
    techStack: ["Python", "FastAPI", "React", "FAISS", "Tree-sitter", "Neo4j", "Sentence Transformers"],
    highlights: [
      "Code-aware retrieval using Tree-sitter AST-based structure-preserving chunking",
      "Sentence Transformer embeddings in FAISS with hybrid retrieval combining semantic search and BM25 via RRF",
      "Full-stack repository upload and indexing pipeline for natural language codebase queries",
      "Citation-backed answers grounded in actual source code"
    ],
    icon: BrainCircuit,
    github: "https://github.com/pritam195/CodeSense",
    live: ""
  },
  {
    title: "ResumeAI",
    subtitle: "AI-Powered Resume Analyzer",
    description:
      "Full-stack resume intelligence platform that compares resumes with job descriptions and returns match quality, semantic similarity, and improvement feedback.",
    metric: { value: "25+", label: "tech categories parsed" },
    categories: ["Full Stack", "ML", "Data"],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Flask",
      "Firebase Auth",
      "Gemini API",
      "pdfplumber",
      "Tailwind CSS"
    ],
    highlights: [
      "3-tier architecture: React frontend, Express backend, Flask ML service",
      "Aho-Corasick O(n) skill extraction with alias canonicalization",
      "10-dimension resume quality engine with weighted scoring and semantic similarity",
      "Secure authentication with Firebase Auth and JWT"
    ],
    icon: BrainCircuit,
    github: "https://github.com/pritam195/ResumeAI",
    live: ""
  },
  {
    title: "CampusCart",
    subtitle: "Real-Time Campus Marketplace",
    description:
      "MERN marketplace for campus buying and selling with authentication, product listings, orders, feedback, image uploads, and buyer-seller chat.",
    metric: { value: "20+", label: "REST APIs across 6 modules" },
    categories: ["Full Stack", "Real-Time"],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "bcrypt",
      "Cloudinary",
      "Multer",
      "Tailwind CSS"
    ],
    highlights: [
      "20+ RESTful APIs across 6 modules",
      "Real-time buyer-seller chat using Socket.IO",
      "JWT authentication, bcrypt password hashing, and protected routes",
      "Vercel, Render, and MongoDB Atlas deployment with restricted CORS origins"
    ],
    icon: Globe2,
    github: "https://github.com/pritam195/CampusCart",
    live: ""
  },
  {
    title: "SafeRoutePlanner",
    subtitle: "Safety-Aware Route Planner",
    description:
      "Navigation system that compares safest and shortest pedestrian routes using graph algorithms and geospatial safety scoring on Mumbai road data.",
    metric: { value: "108K", label: "road segments analyzed" },
    categories: ["ML", "Data"],
    techStack: ["React", "Leaflet.js", "Express", "Flask", "Python", "OSMnx", "NetworkX", "GeoPandas", "Shapely"],
    highlights: [
      "Modified Dijkstra algorithm for safest and shortest route comparison",
      "5-feature safety-scoring engine for 108,000 Mumbai road segments",
      "Grid-based graph caching for optimized route computation",
      "Interactive Leaflet.js interface with segment-level safety visualization"
    ],
    icon: ShieldCheck,
    github: "https://github.com/pritam195/SafeRoutePlanner",
  },
  {
    title: "Credit Risk Prediction",
    subtitle: "ML Risk Banding Model",
    description:
      "Compared Logistic Regression and Random Forest models on 5,000 borrower records across 14 financial and behavioral features, achieving a best ROC-AUC of 0.87 with probability-based risk segmentation.",
    metric: { value: "0.87", label: "ROC-AUC score" },
    categories: ["ML", "Data"],
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    highlights: [
      "Compared Logistic Regression and Random Forest on 5,000 borrower records across 14 financial and behavioral features",
      "Feature-importance analysis ranked top 5 default-risk drivers: credit score, annual income, and debt-to-income ratio",
      "Segmented borrowers into 4 probability-based risk bands for early identification and monitoring of risky accounts",
      "Evaluated both models using classification metrics; achieved best ROC-AUC score of 0.87"
    ],
    icon: Layers3,
    github: "https://github.com/pritam195/Credit-Risk-Default-Prediction",
    live: ""
  }
];

export const achievements = [
  {
    title: "LOC Hackathon Finalist",
    description: "Top 30 of 300+ teams at D.J. Sanghvi College of Engineering.",
    icon: Trophy
  },
  {
    title: "Smart India Hackathon 2025",
    description: "Led team to clear the institute-level internal round at VJTI.",
    icon: Users
  },
  {
    title: "Community of Coders",
    description: "Mentored 4 juniors in end-to-end web development during Inheritance 2025.",
    icon: Code2
  },
  {
    title: "LeetCode — Knight",
    description: "500+ problems solved, peak rating 1867.",
    icon: BrainCircuit
  },
  {
    title: "CodeChef — 3 Star",
    description: "Peak rating 1701.",
    icon: Trophy
  },
  {
    title: "Codeforces — Specialist",
    description: "Peak rating 1519.",
    icon: Trophy
  }
];

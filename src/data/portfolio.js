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

export const resumePath = "/Resume 07.pdf";

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
    live: "https://resume-ai-dusky-six.vercel.app/"
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
      "Axios",
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
    live: "https://campus-cart-delta.vercel.app"
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
    live: ""
  },
  {
    title: "Vync",
    subtitle: "Real-Time Meeting Platform",
    description:
      "Video meeting platform with authenticated and guest meetings, chat, whiteboard, live code collaboration, waiting rooms, and host controls.",
    metric: { value: "STUN/TURN", label: "WebRTC fallback support" },
    categories: ["Full Stack", "Real-Time"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "WebRTC", "Redis", "JWT", "Docker", "coturn"],
    highlights: [
      "WebRTC and Socket.IO signaling for audio-video, chat, and file sharing",
      "Collaborative whiteboard and live code editor",
      "Redis-backed active room state for participants, waiting rooms, whiteboard, and code",
      "coturn TURN server with STUN/TURN fallback, containerized via Docker Compose"
    ],
    icon: Video,
    github: "https://github.com/pritam195/Vync",
    live: "https://vync-client.vercel.app"
  },
  {
    title: "Credit Risk Default Prediction",
    subtitle: "ML Risk Banding Model",
    description:
      "Machine learning model that predicts loan default risk, compares classifiers, and groups borrowers into explainable risk bands.",
    metric: { value: "87%", label: "AUC-ROC achieved" },
    categories: ["ML", "Data"],
    techStack: ["Python", "pandas", "NumPy", "scikit-learn", "Logistic Regression", "Random Forest"],
    highlights: [
      "Built and compared Logistic Regression and Random Forest classifiers",
      "Segmented borrowers into risk categories based on model output",
      "Analyzed default-risk drivers including credit score, income, and debt-to-income ratio",
      "Achieved 87% AUC-ROC on the LendingClub dataset"
    ],
    icon: Layers3,
    github: "https://github.com/pritam195",
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
    title: "LeetCode",
    description: "Solved 500+ data structures and algorithms problems.",
    icon: BrainCircuit
  },
  {
    title: "CodeChef",
    description: "3-Star coder with a maximum rating of 1601.",
    icon: Trophy
  },
  {
    title: "Football Team Member",
    description: "Balanced competitive sport with engineering projects and academics.",
    icon: Users
  }
];

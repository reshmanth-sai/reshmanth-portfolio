// Single source of truth for everything rendered on the site.
// Edit this file to update the portfolio; components are presentation only.

export const profile = {
  name: "Reshmanth Sai",
  fullName: "Naidu Reshmanth Sai",
  headline: "builds AI systems you can audit.",
  intro:
    "CSE student at VIT Chennai. I keep the deterministic, safety-critical logic outside the model's decision path so every output can be traced.",
  email: "naidureshmanthsai@gmail.com",
  location: "Chennai, India",
  status: "Open to SWE and ML internships",
  resume: "/resume.pdf",
  photo: "/reshmanth.jpg",
  github: "https://github.com/reshmanth-sai",
  githubUser: "reshmanth-sai",
  linkedin: "https://linkedin.com/in/reshmanth-sai",
  siteUrl: "https://reshmanth-portfolio.vercel.app",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export const marquee = [
  "Python",
  "TypeScript",
  "FastAPI",
  "Next.js",
  "scikit-learn",
  "Hugging Face",
  "YOLO",
  "PostgreSQL",
  "Gemma",
  "Node.js",
  "React",
  "ByteTrack",
  "Prisma",
  "WebSockets",
];

export const principles = [
  {
    title: "Simplicity is the prerequisite for reliability.",
    body: "A hash chain in Postgres beats a blockchain when the problem is a registry. Pick the smallest thing that can be verified.",
  },
  {
    title: "AI should augment human agency, not replace thought.",
    body: "The model drafts, extracts and translates. Triage rules, tax slabs and verification checks stay hand-written.",
  },
  {
    title: "Architecture is the art of decisions you can't easily undo.",
    body: "Trade-offs get written down with the reason: ByteTrack over BoT-SORT, LoRa over Wi-Fi, a regex pre-filter before the LLM.",
  },
];

export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  hook: string;
  core: string; // the deterministic, auditable part of the system
  stack: string[];
  live?: string;
  github: string;
  tint?: boolean;
};

export const projects: Project[] = [
  {
    slug: "medigem",
    name: "MediGem",
    year: "2026",
    role: "Offline AI health co-pilot",
    hook:
      "An offline-first assistant for rural healthcare workers. Runs Gemma 3:4B fully on-device with Faster-Whisper speech input and answers in Tamil, Hindi and English.",
    core:
      "Emergency Engine: 11 triage rules across 6 acute categories, evaluated outside the LLM's decision path so emergency logic cannot hallucinate.",
    stack: ["Gemma 3:4B", "Faster-Whisper", "FastAPI", "React", "SQLite"],
    live: "https://medigem.vercel.app",
    github: "https://github.com/reshmanth-sai/MediGem",
  },
  {
    slug: "provenance",
    name: "Provenance",
    year: "2026",
    role: "Tamper-evident document registry",
    hook:
      "A certificate and document verification registry. Each record hashes its own content plus the previous record's hash, giving an auditable chain without a distributed blockchain.",
    core:
      "Append-only SHA-256 hash chain in Postgres, a two-tier trust model (issuer-verified vs self-uploaded with an upgrade path) and a public GET /verify/:id endpoint.",
    stack: ["Next.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/reshmanth-sai/Provenance",
    tint: true,
  },
  {
    slug: "promptguard",
    name: "PromptGuard",
    year: "2026",
    role: "AI security firewall",
    hook:
      "Screens user input for prompt-injection and jailbreak attempts before it reaches a downstream LLM. Flagged inputs never cost a generation.",
    core:
      "Zero-latency regex and keyword layer (role-override phrasing, injection markers, known jailbreak templates) as stage one of a two-stage pipeline.",
    stack: ["TypeScript", "Node.js"],
    github: "https://github.com/reshmanth-sai/PromptGuard",
  },
  {
    slug: "safebuild",
    name: "SafeBuild AI",
    year: "2025",
    role: "Construction-site safety vision",
    hook:
      "Real-time PPE compliance detection for construction sites, pushing live updates to four dashboards over WebSockets.",
    core:
      "YOLO + ByteTrack pipeline behind a FastAPI/SQLite service, plus a simulated wearable rescue layer on LoRa 865-867 MHz. ByteTrack chosen over BoT-SORT on speed.",
    stack: ["YOLO", "ByteTrack", "FastAPI", "SQLite", "WebSockets"],
    github: "https://github.com/reshmanth-sai/SafeBuild-Ai",
    tint: true,
  },
  {
    slug: "taxsense",
    name: "TaxSense",
    year: "2025",
    role: "AI-assisted tax filing",
    hook:
      "End-to-end Indian tax-filing platform. Gemini reads Form 16 documents into structured data; the dashboard, document vault and onboarding run on React and Express.",
    core:
      "Hand-written TypeScript tax engine: slab tables for both regimes, deduction caps, Section 87A rebate and cess. Every figure is reproducible without the model.",
    stack: ["React", "TypeScript", "Tailwind", "Express", "Gemini API"],
    live: "https://taxsense-copilot.vercel.app",
    github: "https://github.com/reshmanth-sai/TaxSense",
  },
];

export const moreProjects = [
  {
    name: "RepairGraph",
    blurb: "Graph-based repair knowledge explorer.",
    lang: "TypeScript",
    href: "https://github.com/reshmanth-sai/RepairGraph",
  },
  {
    name: "SortArena",
    blurb: "Head-to-head sorting algorithm visualiser.",
    lang: "JavaScript",
    href: "https://github.com/reshmanth-sai/SortArena",
  },
  {
    name: "Project Zenith",
    blurb: "Interactive celestial simulation in the browser.",
    lang: "TypeScript",
    href: "https://github.com/reshmanth-sai/Project-Zenith",
  },
  {
    name: "TrafficVision",
    blurb: "Traffic analysis with computer vision.",
    lang: "Python",
    href: "https://github.com/reshmanth-sai/TrafficVision",
  },
  {
    name: "campuspilot",
    blurb: "Autonomous AI system for campus complaint handling.",
    lang: "JavaScript",
    href: "https://github.com/reshmanth-sai/campuspilot",
  },
  {
    name: "stock-direction-predictor",
    blurb: "Direction classification on market time series.",
    lang: "Jupyter",
    href: "https://github.com/reshmanth-sai/stock-direction-predictor",
  },
];

export const experience = [
  {
    period: "Jun 2026 - Jul 2026",
    title: "Summer Intern, AI and Machine Learning",
    org: "Indian Institute of Computing and Technology, Delhi",
    points: [
      "Fake news detection: end-to-end text-classification pipeline over 38,605 articles. Removed a Reuters-dateline artifact that caused trivial class separation, then benchmarked 5 TF-IDF classifiers. Linear SVC reached 99.64% accuracy, 0.9964 F1 and 0.9998 ROC-AUC on a 7,721-article held-out set.",
      "Phishing email detection: classifier over 82,073 emails combining TF-IDF with 7 engineered signals (URL count, urgency keywords, capitalisation ratio) with a leakage-safe split. Best model (MLP) reached 98.46% accuracy and 0.9986 ROC-AUC on 16,415 held-out emails.",
    ],
  },
  {
    period: "2025 - Jan 2029 (expected)",
    title: "B.Tech, Computer Science and Engineering",
    org: "Vellore Institute of Technology, Chennai",
    points: ["GPA 9.0 / 10.0"],
  },
];

export const metrics = [
  { value: 99.64, suffix: "%", decimals: 2, label: "Fake-news classifier accuracy" },
  { value: 98.46, suffix: "%", decimals: 2, label: "Phishing classifier accuracy" },
  { value: 95, suffix: "%", decimals: 0, label: "MVCRT-Net on Kvasir (5 classes)" },
  { value: 120678, suffix: "", decimals: 0, label: "Documents classified end to end" },
  { value: 9.0, suffix: "", decimals: 1, label: "GPA at VIT Chennai" },
  { value: 2, suffix: "", decimals: 0, label: "Manuscripts in the pipeline" },
];

export const publications = [
  {
    status: "Under review",
    title: "Mind Mirror: AI-Powered Emotional Journal and Mood Analysis Platform",
    blurb:
      "A locally hosted journaling and mood-analysis platform. DistilBERT fine-tuned on GoEmotions with token-level attribution for interpretability. Contributed to model development, experimentation and evaluation.",
    stats: ["70.80% accuracy", "0.5818 macro F1", "0.7032 weighted F1"],
    stack: "React, TypeScript, Node.js, FastAPI",
  },
  {
    status: "In preparation",
    title: "MVCRT-Net: A Hybrid Deep Learning Framework for Gastrointestinal Disease Classification",
    blurb:
      "Fuses CNN, ResNet-50 and ViT branches through multi-head self-attention to separate visually similar GI disease classes on a 5-class Kvasir subset. Validated with 5-fold cross-validation and paired significance tests.",
    stats: ["95% accuracy", "5-fold CV", "beats CNN, ResNet-50, ViT"],
    stack: "PyTorch, ResNet-50, ViT",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL"] },
  {
    group: "AI and ML",
    items: ["Machine learning", "Deep learning", "NLP", "Computer vision", "LLMs", "Agentic systems"],
  },
  {
    group: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "FastAPI",
      "scikit-learn",
      "Transformers",
      "Ultralytics YOLO",
      "ByteTrack",
      "Google ADK",
    ],
  },
  {
    group: "Data and tools",
    items: ["PostgreSQL", "SQLite", "Prisma", "Git", "GitHub", "Vercel", "WebSockets", "Docker"],
  },
];

export const certifications = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic Academy",
    date: "Aug 2026",
  },
  {
    title: "Google Cloud Gen AI Academy APAC 2026, Cohort 2",
    issuer: "Google Cloud and Hack2skill",
    date: "Jul 2026",
  },
  {
    title: "MERN Full Stack Developer, Grade A (91/100)",
    issuer: "Ethnus",
    date: "Jul 2026",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google via Coursera",
    date: "Jun 2026",
  },
];

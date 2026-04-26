import type {
  AchievementItem,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
} from "@/types/portfolio";

export const aboutPoints = [
  "Backend-oriented software engineer focused on scalable API architecture and system performance.",
  "Hands-on with Java, Spring Boot, microservices, and modern full-stack engineering via MERN.",
  "Actively integrating Generative AI and LLM workflows into practical production-style applications.",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST APIs", "Microservices", "MERN Stack"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "TiDB", "MongoDB"],
  },
  {
    title: "AI and Tools",
    skills: ["Generative AI", "LLM Integration", "Spring AI", "AI Agents", "Git", "Docker", "Postman", "Render", "Vercel"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Course Attainment System",
    description:
      "Built a full-stack attainment platform with 3 dashboards and 15+ modules, reducing manual KPI analytics from 6-7 hours to 20-30 minutes through automation.",
    stack: ["MERN Stack", "REST APIs", "TiDB"],
    links: [
      { label: "GitHub", href: "https://github.com/Pranav09-08" },
    ],
  },
  {
    title: "Supplier Management Dashboard",
    description:
      "Developed an end-to-end supplier workflow platform with 2 dashboards and 10+ modules for onboarding, approvals, lifecycle tracking, and performance analytics.",
    stack: ["MERN Stack", "Workflow Automation", "Analytics"],
    links: [
      { label: "GitHub", href: "https://github.com/Pranav09-08" },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    org: "CustomSoft",
    period: "Jan 2026 - Present",
    summary:
      "Developing ERP and hotel agent systems with MERN Stack. Delivered 15+ ERP modules and 7+ agent modules with scalable REST APIs and modular architecture.",
  },
  {
    role: "Full Stack Development Intern",
    org: "Sumago Infotech Private Ltd.",
    period: "Jan 2024 - Apr 2024",
    summary:
      "Built and deployed 6+ modules for an Exam Management ERP using MERN Stack, collaborating with stakeholders to convert requirements into secure, reliable features.",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "IETE 2025 Winner",
    value: "850+ Teams",
    detail: "Secured winner position by developing an innovative attainment system under national-level competition pressure.",
  },
  {
    title: "Best Employee of Quarter",
    value: "100+ Employees",
    detail: "Recognized by CollegeDunia for exceptional execution quality, consistency, and timely delivery.",
  },
  {
    title: "State Merit Rank",
    value: "113th",
    detail: "Achieved 113th state merit rank in diploma academics, demonstrating strong long-term performance discipline.",
  },
  {
    title: "DSA Practice",
    value: "400+ Problems",
    detail: "Solved 400+ problems across competitive coding platforms to strengthen algorithmic and interview readiness.",
  },
];

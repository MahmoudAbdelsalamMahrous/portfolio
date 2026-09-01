// Edit this file to update all the content on your site.

export const profile = {
  name: "Mahmoud",
  role: "Full Stack Software Engineer (in training)",
  tagline: "Computer Science student building toward a career in full stack engineering — and eventually, my own startup.",
  location: "Egypt",
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  resumeUrl: "", // put a link to a hosted PDF resume here, or leave blank to hide the button
};

export const about = {
  paragraphs: [
    "I'm a first-year Computer Science student at the University of the People, currently working toward a 2030 graduation. I'm building the fundamentals now — data structures, algorithms, and real projects — with a clear goal in mind.",
    "Short term, I want to work as a Full Stack Software Engineer at a major tech company to learn from strong engineering teams and ship real products at scale.",
    "Long term, I plan to use that experience to launch my own tech startup.",
  ],
};

export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "SQL"] },
  { category: "Tools", items: ["Git & GitHub", "VS Code", "Linux", "Figma"] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Replace this with a short description of a real project — what it does, what problem it solves, and what you used to build it.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/your-username/project-one",
    liveUrl: "",
  },
  {
    title: "Project Two",
    description: "Replace this with your second project. Focus on impact and what you learned building it.",
    tags: ["Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/your-username/project-two",
    liveUrl: "",
  },
  {
    title: "Project Three",
    description: "A third project slot — swap in coursework, a hackathon build, or a personal tool you made.",
    tags: ["React", "API"],
    githubUrl: "https://github.com/your-username/project-three",
    liveUrl: "",
  },
];

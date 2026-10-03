export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;

  overview: string;

  problem: string[];
  solution: string[];

  info: {
    client: string;
    duration: string;
    role: string;
  };

  technologies: string[];
  impact: string;

  github?: string;
  figma?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Content Studio",
    category: "Web Application",
    image: "/images/Natureverse Cover.png",

    overview:
      "An AI-powered content generation platform designed to help creators generate blogs, ads, and scripts efficiently.",

    problem: [
      "Creating a scalable architecture that could handle complex data visualizations",
      "Ensuring real-time collaboration features worked seamlessly across devices",
      "Building an intuitive interface for non-technical users",
      "Optimizing performance for large datasets",
    ],

    solution: [
      "Implemented a modular component system using React and TypeScript",
      "Utilized WebSocket connections for real-time data synchronization",
      "Conducted extensive user testing and iterative design improvements",
      "Employed virtual scrolling and data pagination techniques",
    ],

    info: {
      client: "Internal Project",
      duration: "3 Months",
      role: "Full Stack Developer",
    },

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "WebSocket",
      "Tailwind",
    ],

    impact:
      "Reduced content creation time by 65% and improved system efficiency with real-time collaboration support.",

    github: "https://github.com/yourusername/natureverse",
    figma: "https://www.figma.com/design/your-file",
  },

  {
    id: 2,
    title: "Coming Soon",
    category: "Coming Soon",
    image: "/motion/ComingSoonCard1.gif",


    overview: "Coming Soon",

    problem: ["Coming Soon"],

    solution: ["Coming Soon"],

    info: {
      client: "Coming Soon",
      duration: "Coming Soon",
      role: "Coming Soon",
    },

    technologies: ["Coming Soon"],

    impact: "Coming Soon",


  },

  {
    id: 3,
    title: "Coming Soon",
    category: "Coming Soon",
    image: "/motion/ComingSoonCard2.gif",


    overview: "Coming Soon",

    problem: ["Coming Soon"],

    solution: ["Coming Soon"],

    info: {
      client: "Coming Soon",
      duration: "Coming Soon",
      role: "Coming Soon",
    },

    technologies: ["Coming Soon"],

    impact: "Coming Soon",


  },

  {
    id: 4,
    title: "Coming Soon",
    category: "Coming Soon",
    image: "/motion/ComingSoonCard3.gif",


    overview: "Coming Soon",

    problem: ["Coming Soon"],

    solution: ["Coming Soon"],

    info: {
      client: "Coming Soon",
      duration: "Coming Soon",
      role: "Coming Soon",
    },

    technologies: ["Coming Soon"],

    impact: "Coming Soon",


  },

  {
    id: 5,
    title: "Coming Soon",
    category: "Coming Soon",
    image: "/motion/ComingSoonCard4.gif",


    overview: "Coming Soon",

    problem: ["Coming Soon"],

    solution: ["Coming Soon"],

    info: {
      client: "Coming Soon",
      duration: "Coming Soon",
      role: "Coming Soon",
    },

    technologies: ["Coming Soon"],

    impact: "Coming Soon",


  },

  {
    id: 6,
    title: "Coming Soon",
    category: "Coming Soon",
    image: "/motion/ComingSoonCard1.gif",


    overview: "Coming Soon",

    problem: ["Coming Soon"],

    solution: ["Coming Soon"],

    info: {
      client: "Coming Soon",
      duration: "Coming Soon",
      role: "Coming Soon",
    },

    technologies: ["Coming Soon"],

    impact: "Coming Soon",

  },

];

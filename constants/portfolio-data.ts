export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: {
    code?: string;
    demo?: string;
    npm?: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ContactInfo {
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface PersonalInfo {
  name: {
    first: string;
    last: string;
  };
  title: string;
  description: string;
  currentStatus: string;
}

export const personalInfo: PersonalInfo = {
  name: {
    first: "MUSTAFA",
    last: "SHAKIR"
  },
  title: "Software Engineer",
  description: "Backend-focused Software Engineer with experience in building scalable and performant applications. Passionate about solving complex problems with elegant solutions.",
  currentStatus: "Available for new opportunities"
};

export const contactInfo: ContactInfo = {
  email: "hello@shakirmustafa.com",
  location: "Bengaluru, Karnataka", 
  linkedin: "https://linkedin.com/in/otatopotato",
  github: "https://github.com/RtiM0"
};

export const aboutText = {
  intro: "I'm a software engineer with a strong background in backend development, skilled in creating robust and scalable systems. My experience spans across various domains including e-commerce, fintech, and social media platforms.",
  details: "I enjoy tackling complex challenges, from optimizing system performance to designing and implementing new product features from the ground up. I'm always eager to learn and apply new technologies to build efficient and impactful solutions.",
  expertise: [
    "Backend Development",
    "System Design & Architecture", 
    "Full-Stack Development",
    "Cloud & DevOps",
    "Database Management",
    "API Design",
    "Performance Optimization"
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["Java", "Python", "JavaScript", "Kotlin", "Golang"]
  },
  {
    title: "BACKEND", 
    skills: ["Spring Boot", "NestJS", "Django", "Kafka", "Celery"]
  },
  {
    title: "FRONTEND",
    skills: ["ReactJS", "Next.js", "Tailwind CSS", "Android", "Flutter"]
  },
  {
    title: "DATABASE & TOOLS",
    skills: ["PostgreSQL", "MongoDB", "Elasticsearch", "Docker", "AWS", "Terraform"]
  }
];

export const projects: Project[] = [
  {
    title: "E-COMMERCE PLATFORM",
    description: "A full-stack e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory management, advanced search, and mobile-responsive design.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    links: {
      code: "#",
      demo: "#"
    }
  },
  {
    title: "TASK MANAGEMENT APP", 
    description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built for productivity and ease of use.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    links: {
      code: "#",
      demo: "#"
    }
  },
  {
    title: "DATA VISUALIZATION DASHBOARD",
    description: "An interactive dashboard for analyzing business metrics with real-time data processing, custom charts, and export functionality. Handles large datasets efficiently.",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    links: {
      code: "#", 
      demo: "#"
    }
  },
  {
    title: "OPEN SOURCE LIBRARY",
    description: "A lightweight React component library for building accessible forms with validation. Used by 500+ developers with comprehensive documentation and TypeScript support.",
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
    links: {
      code: "#",
      npm: "#"
    }
  }
];

export const experiences: Experience[] = [
  {
    title: "SDE 2 - BACKEND",
    company: "Jar",
    period: "07/2023 - Present",
    description: "Leading full-stack development of an e-commerce channel, and improving web performance and infrastructure.",
    achievements: [
      "Led development of an e-commerce platform, scaling to handle thousands of daily orders.",
      "Migrated SMS processing to ScyllaDB, reducing infrastructure costs by 60%.",
      "Developed a health insurance vertical with A/B testing capabilities for a 20 million user base.",
      "Built a P2P investment product with robust KYC and queueing systems."
    ]
  },
  {
    title: "CO-FOUNDER, SOFTWARE ENGINEER",
    company: "prettyRECON", 
    period: "11/2020 - Present",
    description: "Co-founded and built an online reconnaissance tool for pen-testers and bug bounty hunters, achieving profitability with over 100 recurring subscribers.",
    achievements: [
      "Built the entire backend from scratch, creating a profitable product.",
      "Designed a system to schedule and process resource-intensive tasks for hundreds of active users.",
      "Managed data storage and indexing using Postgres and Elasticsearch.",
      "Implemented verification systems and managed stack deployment."
    ]
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "Quriverse",
    period: "09/2022 - 06/2023",
    description: "Developed core features for a social media platform, including a content ranking system and real-time event delivery.",
    achievements: [
      "Developed a 3-component scoring system to rank user posts.",
      "Built a real-time system with Redis Pub/Sub for event delivery to thousands of clients.",
      "Created a scalable serverless solution for media processing and delivery.",
      "Wrote Infrastructure as Code (IaaC) for CI/CD using Terraform and CloudFormation."
    ]
  }
];
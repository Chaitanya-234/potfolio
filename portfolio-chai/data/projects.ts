export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  github: string;
  demo: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
}

export const projectCategories: ProjectCategory[] = [
  { id: "all", label: "All Projects" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "frontend", label: "Frontend" }
];

export const projects: Project[] = [
  {
    id: "ecommerce-api",
    title: "E-Commerce Microservices API",
    description: "A comprehensive e-commerce platform built with Spring Boot microservices architecture. Features include user authentication, product catalog, order management, and payment processing with AWS integration.",
    tags: ["Java", "Spring Boot", "Microservices", "AWS", "Docker", "MySQL"],
    categories: ["backend", "cloud"],
    github: "https://github.com/chaitanya-ambekar/ecommerce-microservices",
    demo: "https://ecommerce-demo.aws.com"
  },
  {
    id: "task-management",
    title: "Task Management System",
    description: "A full-stack task management application with real-time updates, team collaboration features, and advanced filtering. Built with React frontend and Spring Boot backend.",
    tags: ["React", "Spring Boot", "WebSocket", "PostgreSQL", "Redis", "Docker"],
    categories: ["fullstack"],
    github: "https://github.com/chaitanya-ambekar/task-management",
    demo: "https://taskmanager-demo.com"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects and skills. Built with Next.js, TypeScript, and Tailwind CSS with smooth animations and dark mode support.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    categories: ["frontend"],
    github: "https://github.com/chaitanya-ambekar/portfolio",
    demo: "https://chaitanya-ambekar.dev"
  },
  {
    id: "cloud-deployment",
    title: "AWS Cloud Infrastructure",
    description: "Automated cloud infrastructure setup using Terraform and AWS services. Includes CI/CD pipelines, monitoring, and auto-scaling configurations for high availability applications.",
    tags: ["AWS", "Terraform", "CI/CD", "Docker", "Kubernetes", "Monitoring"],
    categories: ["cloud"],
    github: "https://github.com/chaitanya-ambekar/aws-infrastructure",
    demo: "https://infrastructure-docs.com"
  },
  {
    id: "api-gateway",
    title: "API Gateway & Authentication",
    description: "A robust API gateway solution with JWT authentication, rate limiting, and request routing. Includes comprehensive security features and monitoring capabilities.",
    tags: ["Spring Security", "JWT", "API Gateway", "Rate Limiting", "Monitoring"],
    categories: ["backend"],
    github: "https://github.com/chaitanya-ambekar/api-gateway",
    demo: "https://api-gateway-docs.com"
  },
  {
    id: "data-analytics",
    title: "Data Analytics Dashboard",
    description: "A real-time data analytics dashboard with interactive visualizations. Processes large datasets and provides insights through dynamic charts and reports.",
    tags: ["React", "D3.js", "Spring Boot", "Elasticsearch", "Kafka", "Docker"],
    categories: ["fullstack"],
    github: "https://github.com/chaitanya-ambekar/data-analytics",
    demo: "https://analytics-dashboard.com"
  }
];

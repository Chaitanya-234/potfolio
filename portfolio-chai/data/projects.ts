// data/projects.ts

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
  { id: "ai-ml", label: "AI/ML" },
];

export const projects: Project[] = [
  {
    id: "mblogger",
    title: "MBlogger Media Platform",
    description: "Social media platform supporting posts, images, and videos with Spring Security + OAuth authentication and Amazon S3 integration for scalable media storage.",
    tags: ["Spring Boot", "Spring Security", "OAuth 2.0", "MySQL", "AWS S3", "REST API"],
    categories: ["backend", "cloud"],
    github: "https://github.com/chaitanyaambekar",
    demo: "#",
  },
  {
    id: "textile-ecommerce",
    title: "Textile E-commerce Platform",
    description: "Scalable e-commerce platform on AWS with auto-scaling, achieving 99.9% uptime under 5,000+ concurrent users and 25% improved backend processing.",
    tags: ["Spring Boot", "AWS EC2", "AWS RDS", "Auto Scaling", "MySQL", "Nginx", "Docker"],
    categories: ["backend", "cloud", "fullstack"],
    github: "https://github.com/chaitanyaambekar",
    demo: "#",
  },
  {
    id: "online-voting",
    title: "Online Voting System",
    description: "Secure electronic voting system with encryption and multifactor authentication, enabling 10,000+ user participation with 98% uptime.",
    tags: ["JSP", "Java Servlets", "MySQL", "Encryption", "MFA", "Security"],
    categories: ["backend", "fullstack"],
    github: "https://github.com/chaitanyaambekar",
    demo: "#",
  },
  {
    id: "ai-media-monitoring",
    title: "AI Media Monitoring System",
    description: "Multilingual news analysis system for PIB, processing 50,000+ articles daily with mBERT classification and sentiment analysis achieving 95% accuracy.",
    tags: ["Python", "NLP", "mBERT", "BERT", "Sentiment Analysis", "Machine Learning"],
    categories: ["ai-ml"],
    github: "https://github.com/chaitanyaambekar",
    demo: "#",
  },
  {
    id: "assessment-system",
    title: "Assessment Evaluation System",
    description: "Code assessment platform with real-time compilation and testing across multiple programming languages, processing 500+ assessments daily.",
    tags: ["Spring Boot", "Judge0 API", "Multi-language", "Real-time", "REST API"],
    categories: ["backend"],
    github: "https://github.com/chaitanyaambekar",
    demo: "#",
  },
  {
    id: "ai-problem-generator",
    title: "AI-Powered Problem Generator",
    description: "Automated system that generates and validates coding problems across multiple languages, reducing manual configuration time by 80%.",
    tags: ["Generative AI", "GPT", "Spring Boot", "Code Generation", "API Integration"],
    categories: ["ai-ml", "backend"],
    github: "https://github.com/chaitanyaambekar",
    demo: "#",
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Integration",
    description: "Secure payment system integrating with Razorpay and Stripe, ensuring PCI compliance and smooth transaction processing.",
    tags: ["Spring Boot", "Razorpay", "Stripe", "PCI Compliance", "Security", "REST API"],
    categories: ["backend"],
    github: "https://github.com/chaitanyaambekar",
    demo: "#",
  },
  {
    id: "kafka-architecture",
    title: "Kafka Event-Driven Architecture",
    description: "Transitioned backend to event-driven architecture using Apache Kafka, cutting processing latency by 50% and improving throughput by 70%.",
    tags: ["Apache Kafka", "Event-Driven", "Microservices", "Spring Boot", "Performance"],
    categories: ["backend", "cloud"],
    github: "https://github.com/chaitanyaambekar",
    demo: "#",
  },
];

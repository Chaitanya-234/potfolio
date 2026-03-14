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
{ id: "all",       label: "All Projects"   },
{ id: "fullstack", label: "Full Stack"      },
{ id: "backend",   label: "Backend"         },
{ id: "cloud",     label: "Cloud & DevOps"  },
{ id: "ai-ml",     label: "AI/ML"           },
];

export const projects: Project[] = [
{
id: "devmetrix",
title: "DevMetrix",
description:
"Full-stack developer resource platform built from scratch with Next.js and Spring Boot. Features free tools, tech comparisons, code examples, blog posts, and an AI-powered DevBot assistant for real-time technical queries.",
tags: ["Next.js", "Spring Boot", "MySQL", "REST API", "SSR", "AI Chatbot"],
categories: ["fullstack", "backend"],
github: "https://github.com/Chaitanya-234",
demo: "https://devmetrix.cloud",
},
{
id: "mblogger",
title: "MBlogger",
description:
"Full-featured social media platform enabling users to upload and manage posts, images, videos, and documents. Integrates Cloudflare R2 for scalable cloud media storage and optimised MySQL schema for efficient content management.",
tags: ["Spring Boot", "MySQL", "Cloudflare R2", "REST API", "Media Streaming"],
categories: ["fullstack", "backend", "cloud"],
github: "https://github.com/Chaitanya-234/Mloggler",
demo: "#",
},
{
id: "textile-ecommerce",
title: "Textile E-Commerce Platform",
description:
"Production-deployed e-commerce platform on AWS EC2 supporting end-to-end purchase flows. Achieved 99.9% uptime through high availability architecture with Application Load Balancer and Auto Scaling groups.",
tags: ["Spring Boot", "AWS EC2", "ALB", "Auto Scaling", "MySQL", "Custom Domain"],
categories: ["fullstack", "backend", "cloud"],
github: "https://github.com/Chaitanya-234/Etextile--Springboot",
demo: "#",
},
{
id: "ai-media-monitoring",
title: "Automated Media Monitoring System",
description:
"Multilingual news analysis system built for the Press Information Bureau (Govt. of India), processing 50,000+ articles daily. Uses mBERT for multilingual classification and BERT derivatives for sentiment analysis with 95% accuracy. Findings published in a Scopus-indexed journal.",
    tags: ["Python", "NLP", "mBERT", "BERT", "Sentiment Analysis", "Multilingual", "Research"],
    categories: ["ai-ml"],
    github: "https://github.com/Chaitanya-234/Automated-Media-Monitoring-and-Feedback-System-for-Government-of-India",
    demo: "#",
  },
];
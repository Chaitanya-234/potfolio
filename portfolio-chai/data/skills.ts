// data/skills.ts

export interface SkillCategory {
  id: string;
title: string;
color: string;
skills: string[];
}

export const skills: SkillCategory[] = [
{
id: "languages",
title: "Languages",
color: "from-blue-400 to-cyan-400",
skills: ["Java", "Python", "SQL"],
},
{
id: "backend",
title: "Backend & Frameworks",
color: "from-cyan-400 to-teal-400",
skills: [
"Spring Boot",
"Spring MVC",
"Hibernate",
"REST APIs",
"Microservices",
"JSP",
"Apache Kafka",
"Event-Driven Architecture",
],
},
{
id: "cloud",
title: "Cloud & DevOps",
color: "from-orange-400 to-red-400",
skills: [
"AWS EC2",
"AWS S3",
"Application Load Balancer",
"Auto Scaling",
"CI/CD Pipelines",
"Docker",
"Nginx",
"Cloudflare R2",
],
},
{
id: "database",
title: "Database",
color: "from-green-400 to-emerald-400",
skills: [
"MySQL",
"Database Schema Design",
"Query Optimization",
"Connection Pooling",
],
},
{
id: "security",
title: "Security & Integration",
color: "from-purple-400 to-pink-400",
skills: [
"JWT",
"OAuth2",
"Amazon S3 Pre-signed URLs",
"Payment Gateway Integration",
],
},
{
id: "ai-ml",
title: "AI / ML",
color: "from-pink-400 to-rose-400",
skills: [
"NLP",
"mBERT",
"BERT",
"Multilingual Text Classification",
"Sentiment Analysis",
],
},
{
id: "frontend",
title: "Frontend",
color: "from-indigo-400 to-purple-400",
skills: ["Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
},
{
id: "tools",
title: "Tools & Methodologies",
color: "from-yellow-400 to-orange-400",
skills: [
"Git",
"GitHub",
"Git Bash",
"Agile / Scrum",
"Peer Code Reviews",
"System Design",
],
},
];
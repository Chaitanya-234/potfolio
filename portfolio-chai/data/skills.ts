export interface SkillCategory {
  id: string;
  title: string;
  color: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    color: "from-blue-400 to-cyan-400",
    skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "Microservices", "Maven", "Gradle"]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    color: "from-orange-400 to-red-400",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", "Terraform", "CloudFormation"]
  },
  {
    id: "database",
    title: "Database",
    color: "from-green-400 to-emerald-400",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "SQL", "Database Design"]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    color: "from-purple-400 to-pink-400",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    id: "tools",
    title: "Development Tools",
    color: "from-yellow-400 to-orange-400",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Swagger", "JUnit", "Mockito"]
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    color: "from-indigo-400 to-purple-400",
    skills: ["Problem Solving", "Team Collaboration", "Code Review", "Agile/Scrum", "Technical Writing", "Mentoring"]
  }
];

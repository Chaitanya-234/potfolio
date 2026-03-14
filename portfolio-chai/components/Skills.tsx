"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills, SkillCategory } from "../data/skills";
import {
  SiMysql, SiSpring, SiApachekafka,
  SiAmazonaws, SiDocker, SiNginx, SiCloudflare,
  SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiGit, SiGithub,
} from "react-icons/si";
import {
  FaJava, FaPython, FaServer, FaDatabase, FaCloud,
  FaShieldAlt, FaBrain, FaCode, FaTools, FaLayerGroup,
} from "react-icons/fa";

// Category icon map
const categoryIcons: Record<string, React.ReactNode> = {
  languages:  <FaCode />,
  backend:    <FaServer />,
  cloud:      <FaCloud />,
  database:   <FaDatabase />,
  security:   <FaShieldAlt />,
  "ai-ml":    <FaBrain />,
  frontend:   <FaLayerGroup />,
  tools:      <FaTools />,
};

// Per-skill icon map
const skillIcons: Record<string, React.ReactNode> = {
  "Java":                             <FaJava />,
  "Python":                           <FaPython />,
  "SQL":                              <FaDatabase />,
  "Spring Boot":                      <SiSpring />,
  "Spring MVC":                       <SiSpring />,
  "Hibernate":                        <SiSpring />,
  "REST APIs":                        <FaServer />,
  "Microservices":                    <FaServer />,
  "JSP":                              <SiJavascript />,
  "Apache Kafka":                     <SiApachekafka />,
  "Event-Driven Architecture":        <SiApachekafka />,
  "AWS EC2":                          <SiAmazonaws />,
  "AWS S3":                           <SiAmazonaws />,
  "Application Load Balancer":        <SiAmazonaws />,
  "Auto Scaling":                     <SiAmazonaws />,
  "CI/CD Pipelines":                  <FaCloud />,
  "Docker":                           <SiDocker />,
  "Nginx":                            <SiNginx />,
  "Cloudflare R2":                    <SiCloudflare />,
  "MySQL":                            <SiMysql />,
  "Database Schema Design":           <FaDatabase />,
  "Query Optimization":               <FaDatabase />,
  "Connection Pooling":               <FaDatabase />,
  "JWT":                              <FaShieldAlt />,
  "OAuth2":                           <FaShieldAlt />,
  "Amazon S3 Pre-signed URLs":        <SiAmazonaws />,
  "Payment Gateway Integration":      <FaShieldAlt />,
  "NLP":                              <FaBrain />,
  "mBERT":                            <FaBrain />,
  "BERT":                             <FaBrain />,
  "Multilingual Text Classification": <FaBrain />,
  "Sentiment Analysis":               <FaBrain />,
  "Next.js":                          <SiNextdotjs />,
  "TypeScript":                       <SiTypescript />,
  "JavaScript":                       <SiJavascript />,
  "HTML":                             <SiHtml5 />,
  "CSS":                              <SiCss3 />,
  "Git":                              <SiGit />,
  "GitHub":                           <SiGithub />,
  "Git Bash":                         <SiGit />,
  "Agile / Scrum":                    <FaTools />,
  "Peer Code Reviews":                <FaCode />,
  "System Design":                    <FaLayerGroup />,
};

// Per-category accent color
const categoryAccent: Record<string, string> = {
  languages:  "#3B82F6",
  backend:    "#06B6D4",
  cloud:      "#F97316",
  database:   "#10B981",
  security:   "#8B5CF6",
  "ai-ml":    "#EC4899",
  frontend:   "#A855F7",
  tools:      "#EAB308",
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden bg-black/20"
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00D9FF, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #8338EC, transparent)" }}
      />

      <div className="max-w-7xl w-full relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            My toolkit
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Skills &{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #00D9FF, #8338EC)" }}
            >
              Technologies
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 mx-auto h-px w-24 origin-left"
            style={{ background: "linear-gradient(90deg, #00D9FF, #8338EC)" }}
          />
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((category: SkillCategory, index: number) => {
            const accent = categoryAccent[category.id] ?? "#00D9FF";
            const isHovered = hoveredCard === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                onHoverStart={() => setHoveredCard(category.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative rounded-2xl p-6 cursor-default overflow-hidden flex flex-col"
                style={{
                  background: isHovered
                    ? `linear-gradient(145deg, ${accent}10, rgba(255,255,255,0.03))`
                    : "rgba(255,255,255,0.03)",
                  border: isHovered
                    ? `1px solid ${accent}55`
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isHovered
                    ? `0 20px 50px ${accent}18, inset 0 1px 0 rgba(255,255,255,0.06)`
                    : "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                  transition: "background 0.35s, border 0.35s, box-shadow 0.35s",
                }}
              >
                {/* Top glow line */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}99, transparent)` }}
                />

                {/* ── Card header ── */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 transition-all duration-300"
                    style={{
                      background: `${accent}18`,
                      border: `1px solid ${accent}44`,
                      color: accent,
                      boxShadow: isHovered ? `0 0 14px ${accent}33` : "none",
                    }}
                  >
                    {categoryIcons[category.id] ?? <FaCode />}
                  </div>
                  <h3
                    className="font-bold text-base leading-tight transition-colors duration-300"
                    style={{ color: isHovered ? accent : "rgba(255,255,255,0.85)" }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-4 transition-all duration-300"
                  style={{ background: isHovered ? `${accent}33` : "rgba(255,255,255,0.06)" }}
                />

                {/* ── Skills list ── */}
                <div className="flex flex-col gap-2 flex-1">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.07 + skillIndex * 0.04 }}
                      className="flex items-center gap-2.5"
                    >
                      <span
                        className="text-xs flex-shrink-0"
                        style={{ color: `${accent}88` }}
                      >
                        {skillIcons[skill] ?? (
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full"
                            style={{ background: accent, opacity: 0.5 }}
                          />
                        )}
                      </span>
                      <span
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="mt-4 flex justify-end">
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider"
                    style={{
                      background: `${accent}14`,
                      border: `1px solid ${accent}33`,
                      color: `${accent}99`,
                    }}
                  >
                    {category.skills.length} skills
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
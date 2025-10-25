"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects, projectCategories, Project, ProjectCategory } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project: Project) =>
    activeFilter === "all" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {projectCategories.map((cat: ProjectCategory, index: number) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + (index * 0.1) }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-primary to-accent text-dark-bg shadow-lg shadow-primary/30"
                  : "bg-primary/10 border border-primary text-primary hover:bg-primary/20 hover:border-primary/50"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,217,255,0.3)"
              }}
              className="card-glow rounded-2xl p-8 group cursor-pointer"
            >
              <motion.div
                className="relative overflow-hidden rounded-xl mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/50">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-gradient group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string, tagIndex: number) => (
                  <motion.span 
                    key={tag} 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.1) + (tagIndex * 0.05) }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 217, 255, 0.2)" }}
                    className="px-3 py-1 bg-primary/10 border border-primary rounded-full text-sm hover:border-primary/50 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 btn-glow text-sm py-2 px-4"
                >
                  <FaGithub className="text-lg" /> GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 btn-glow bg-white/10 text-sm py-2 px-4"
                >
                  <FaExternalLinkAlt className="text-lg" /> Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

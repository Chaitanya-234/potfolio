"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills, SkillCategory } from "../data/skills";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20 bg-black/20">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category: SkillCategory, index: number) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,217,255,0.2)"
              }}
              className="card-glow rounded-2xl p-8 group cursor-pointer"
            >
              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mr-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </motion.div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill: string, skillIndex: number) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(0, 217, 255, 1)", 
                      color: "#0A0E27",
                      y: -2
                    }}
                    className="px-4 py-2 bg-primary/10 border border-primary rounded-full text-sm font-medium cursor-pointer transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{skill}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0"
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                      {skill}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

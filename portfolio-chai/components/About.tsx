"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, -2, 2, 0],
                boxShadow: "0 0 60px rgba(0,217,255,0.6)"
              }}
              transition={{ 
                duration: 0.4,
                rotate: { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
              }}
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chaitanya&backgroundColor=00D9FF"
              alt="Profile"
              className="relative w-64 h-64 rounded-full border-4 border-primary shadow-[0_0_40px_rgba(0,217,255,0.4)] mx-auto z-10"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-2 max-w-2xl"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 leading-relaxed mb-4"
          >
            I'm a passionate Software Engineer specializing in backend development with Java and Spring Boot. With a strong foundation in cloud technologies and DevOps practices, I build scalable applications that solve real-world problems.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-300 leading-relaxed mb-6"
          >
            Currently working as an Associate Software Engineer at Thinkhumble Creative Solutions, where I've improved system performance by 40% and reduced processing latency by 50% through event-driven architecture.
          </motion.p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-lg">Bachelor of Engineering (Computer Engineering)</h4>
                <p className="text-gray-400">International Institute of Information Technology, Pune | GPA: 8.86</p>
                <p className="text-sm text-gray-500">November 2021 - July 2024</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-lg">Diploma in Computer Engineering</h4>
                <p className="text-gray-400">Government Polytechnic, Khamgaon | 94.11%</p>
                <p className="text-sm text-gray-500">July 2018 - August 2021</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

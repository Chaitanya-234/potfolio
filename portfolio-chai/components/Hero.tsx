"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const roles = ["Software Engineer", "Backend Developer", "AWS Enthusiast", "Problem Solver"];
  const typingSpeed = 100;

  // Pre-defined particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 20, delay: 0.5, duration: 3.2 },
    { left: 85, top: 15, delay: 1.2, duration: 4.1 },
    { left: 25, top: 60, delay: 0.8, duration: 3.8 },
    { left: 70, top: 45, delay: 1.5, duration: 4.3 },
    { left: 15, top: 80, delay: 0.3, duration: 3.5 },
    { left: 90, top: 70, delay: 1.8, duration: 4.0 },
    { left: 50, top: 25, delay: 0.7, duration: 3.7 },
    { left: 35, top: 85, delay: 1.1, duration: 4.2 },
    { left: 75, top: 30, delay: 0.9, duration: 3.9 },
    { left: 20, top: 50, delay: 1.3, duration: 3.6 },
    { left: 60, top: 75, delay: 0.6, duration: 4.4 },
    { left: 40, top: 10, delay: 1.7, duration: 3.3 },
    { left: 80, top: 55, delay: 0.4, duration: 3.4 },
    { left: 30, top: 35, delay: 1.4, duration: 4.5 },
    { left: 65, top: 90, delay: 0.2, duration: 3.1 },
    { left: 45, top: 65, delay: 1.6, duration: 3.9 },
    { left: 95, top: 40, delay: 0.1, duration: 4.1 },
    { left: 55, top: 5, delay: 1.9, duration: 3.7 },
    { left: 5, top: 55, delay: 0.8, duration: 4.0 },
    { left: 85, top: 25, delay: 1.0, duration: 3.8 }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-accent/20" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(0,217,255,0.1), rgba(131,56,236,0.1))",
            "linear-gradient(135deg, rgba(131,56,236,0.1), rgba(255,0,110,0.1))",
            "linear-gradient(225deg, rgba(255,0,110,0.1), rgba(0,217,255,0.1))",
            "linear-gradient(315deg, rgba(0,217,255,0.1), rgba(131,56,236,0.1))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating particles */}
      {isMounted && particlePositions.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary text-xl font-semibold mb-4"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-7xl font-black mb-6 text-gradient"
        >
          Chaitanya Ambekar
        </motion.h1>
        <div className="text-3xl md:text-4xl h-16 mb-8">
          <span className="border-r-4 border-primary animate-pulse">{text}</span>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          Software Engineer with 1+ years of experience in Java, Spring Boot, AWS cloud deployment, and microservices architecture. Building scalable, secure, and high-performance applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.a 
            href="#projects" 
            className="btn-glow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

// components/ThemeToggle.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.classList.toggle("dark", isDark);
    // Add smooth transition to all elements
    document.documentElement.style.transition = "background-color 0.3s ease, color 0.3s ease";
  }, [isDark]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.button
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        delay: 1
      }}
      whileHover={{ 
        scale: 1.15, 
        rotate: 15,
        boxShadow: "0 10px 30px rgba(0,217,255,0.6)"
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-[0_5px_25px_rgba(0,217,255,0.4)] z-50 group relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 90 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="relative z-10"
        >
          {isDark ? (
            <FaMoon className="text-xl text-white" />
          ) : (
            <FaSun className="text-xl text-white" />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
        {isDark ? "Switch to Light" : "Switch to Dark"}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;

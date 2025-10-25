"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Parallax background elements */}
      <motion.div
        className="fixed inset-0 -z-20"
        style={{
          background: `radial-gradient(circle at ${50 + scrollY * 0.02}% ${50 + scrollY * 0.01}%, rgba(0,217,255,0.1) 0%, transparent 50%)`,
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full -z-10"
        animate={{
          y: scrollY * 0.1,
          rotate: scrollY * 0.05,
        }}
        transition={{ duration: 0.1 }}
      />
      
      <motion.div
        className="fixed top-3/4 right-1/4 w-24 h-24 border border-accent/20 rounded-lg -z-10"
        animate={{
          y: -scrollY * 0.08,
          rotate: -scrollY * 0.03,
        }}
        transition={{ duration: 0.1 }}
      />
      
      <motion.div
        className="fixed top-1/2 right-1/3 w-16 h-16 border border-secondary/20 rounded-full -z-10"
        animate={{
          y: scrollY * 0.06,
          rotate: scrollY * 0.08,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default ScrollAnimations;

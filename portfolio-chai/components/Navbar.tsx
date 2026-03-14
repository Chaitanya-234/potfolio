"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import Image from "next/image";

const navLinks = ["Home", "About", "Skills", "Projects"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 120;
      for (const section of navLinks) {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Desktop navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6 pointer-events-none"
      >
        <motion.nav
          animate={{
            backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
          }}
          className="pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled ? "rgba(10,14,39,0.85)" : "rgba(10,14,39,0.5)",
            border: scrolled
              ? "1px solid rgba(0,217,255,0.15)"
              : "1px solid rgba(255,255,255,0.07)",
            boxShadow: scrolled
              ? "0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,217,255,0.05)"
              : "none",
          }}
        >
          {/* ── Logo image ── */}
          <motion.button
            onClick={() => scrollToSection("Home")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            className="mr-2 rounded-xl overflow-hidden flex-shrink-0"
            style={{
              width: 44,
              height: 36,
              border: "1px solid rgba(0,217,255,0.2)",
              background: "rgba(0,217,255,0.06)",
            }}
          >
            <Image
              src="/logo.png"
              alt="CA Logo"
              width={44}
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </motion.button>

          {/* Divider */}
          <div className="w-px h-5 mx-1" style={{ background: "rgba(255,255,255,0.1)" }} />

          {/* Nav links */}
          {navLinks.map((link) => {
            const isActive = activeSection === link;
            return (
              <motion.button
                key={link}
                onClick={() => scrollToSection(link)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-3.5 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? "#00D9FF" : "rgba(255,255,255,0.5)" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "rgba(0,217,255,0.1)",
                      border: "1px solid rgba(0,217,255,0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </motion.button>
            );
          })}

          {/* Divider */}
          <div className="w-px h-5 mx-1" style={{ background: "rgba(255,255,255,0.1)" }} />

          {/* Resume button */}
          <motion.a
            href="/Chaitanya-Resume.pdf"
            download
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #00D9FF18, #8338EC18)",
              border: "1px solid rgba(0,217,255,0.25)",
              color: "#00D9FF",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #00D9FF28, #8338EC28)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,217,255,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #00D9FF18, #8338EC18)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,217,255,0.25)";
            }}
          >
            <FiDownload className="text-xs" />
            Resume
          </motion.a>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden ml-1 p-1.5 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {mobileOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
          </motion.button>
        </motion.nav>
      </motion.header>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] left-1/2 -translate-x-1/2 z-40 w-[90vw] max-w-sm rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,14,39,0.97)",
              border: "1px solid rgba(0,217,255,0.15)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Mobile header with logo */}
            <div
              className="flex items-center gap-3 px-4 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-8 h-7 rounded-lg overflow-hidden flex-shrink-0"
                style={{ border: "1px solid rgba(0,217,255,0.2)" }}
              >
                <Image
                  src="/logo.png"
                  alt="CA Logo"
                  width={32}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-white/60">Chaitanya Ambekar</span>
            </div>

            <div className="flex flex-col p-3 gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link;
                return (
                  <motion.button
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(link)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200"
                    style={{
                      background: isActive ? "rgba(0,217,255,0.08)" : "transparent",
                      border: isActive ? "1px solid rgba(0,217,255,0.18)" : "1px solid transparent",
                      color: isActive ? "#00D9FF" : "rgba(255,255,255,0.6)",
                    }}
                  >
                    <span>{link}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00D9FF" }} />
                    )}
                  </motion.button>
                );
              })}

              <div className="my-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

              <motion.a
                href="/Chaitanya-Resume.pdf"
                download
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #00D9FF12, #8338EC12)",
                  border: "1px solid rgba(0,217,255,0.2)",
                  color: "#00D9FF",
                }}
                onClick={() => setMobileOpen(false)}
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
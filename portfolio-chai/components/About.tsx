"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiBriefcase, FiAward } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";

const stats = [
  { value: "1+",   label: "Years Experience" },
  { value: "99.9%", label: "Uptime Achieved"  },
  { value: "50%",  label: "Latency Reduced"  },
  { value: "60%",  label: "Effort Automated" },
];

const education = [
  {
    degree: "B.E. Computer Engineering",
    institution: "IIIT Pune",
    period: "2021 – 2024",
    score: "CGPA 8.7",
    color: "#00D9FF",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Govt. Polytechnic, Khamgaon",
    period: "2018 – 2021",
    score: "94.11%",
    color: "#8338EC",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00D9FF, #8338EC)" }}
      />

      <div className="max-w-6xl w-full relative z-10">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Who I am
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            About{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #00D9FF, #8338EC)" }}
            >
              Me
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

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Avatar + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-10"
          >
            {/* Avatar */}
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #00D9FF, #8338EC, transparent, #00D9FF)",
                  WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
                }}
              />
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, #00D9FF55, #8338EC44)" }}
              />
              {/* Avatar image */}
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chaitanya&backgroundColor=00D9FF"
                alt="Chaitanya Ambekar"
                className="relative w-56 h-56 rounded-full z-10"
                style={{ border: "3px solid rgba(0,217,255,0.3)" }}
              />
              {/* Online badge */}
              <div
                className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: "rgba(10,14,39,0.9)",
                  border: "1px solid rgba(16,185,129,0.4)",
                  color: "#10B981",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Open to work
              </div>
            </div>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { icon: <FiMapPin className="text-xs" />, text: "Pune, India" },
                { icon: <FiBriefcase className="text-xs" />, text: "Thinkhumble Creative Solutions" },
                { icon: <FiAward className="text-xs" />, text: "Scopus Published" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <span style={{ color: "#00D9FF" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-2xl p-4 text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="text-2xl font-black mb-1"
                    style={{
                      background: "linear-gradient(135deg, #00D9FF, #8338EC)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40 font-medium leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Bio + education ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Bio */}
            <div>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                I'm a Software Engineer with 1+ year of production experience building
                scalable microservices and RESTful APIs using{" "}
                <span className="text-white font-semibold">Java and Spring Boot</span>.
              </p>
              <p className="text-white/55 text-base leading-relaxed">
                At Thinkhumble Creative Solutions, I've deployed production applications
                on <span className="text-white/75 font-medium">AWS with 99.9% uptime</span>,
                migrated submission processing to{" "}
                <span className="text-white/75 font-medium">Apache Kafka</span> cutting
                latency by 50%, and integrated AI-driven automation that reduced manual
                effort by 60%. I also hold a{" "}
                <span className="text-white/75 font-medium">Scopus-indexed NLP publication</span> on
                multilingual news classification for the Government of India.
              </p>
            </div>

            {/* Currently working on */}
            <div
              className="flex items-start gap-3 p-4 rounded-2xl"
              style={{
                background: "rgba(0,217,255,0.05)",
                border: "1px solid rgba(0,217,255,0.12)",
              }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(0,217,255,0.12)", color: "#00D9FF" }}
              >
                <FiBriefcase className="text-sm" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">
                  Currently
                </p>
                <p className="text-sm text-white/70">
                  Associate Software Engineer at{" "}
                  <span className="text-white font-semibold">Thinkhumble Creative Solutions</span>
                  {" "}— building scalable backend systems, cloud infrastructure, and AI-powered tooling.
                </p>
              </div>
            </div>

            {/* Education timeline */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <HiOutlineAcademicCap className="text-lg" style={{ color: "#00D9FF" }} />
                <h3 className="text-base font-bold text-white/80 uppercase tracking-widest text-sm">
                  Education
                </h3>
              </div>

              <div className="relative flex flex-col gap-4 pl-4">
                {/* Timeline line */}
                <div
                  className="absolute left-0 top-2 bottom-2 w-px"
                  style={{ background: "linear-gradient(to bottom, #00D9FF44, #8338EC44)" }}
                />

                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="relative pl-5 py-4 pr-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[22px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2"
                      style={{
                        background: edu.color,
                        borderColor: "rgba(10,14,39,1)",
                        boxShadow: `0 0 8px ${edu.color}88`,
                      }}
                    />

                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <p className="text-sm font-bold text-white/90 mb-0.5">{edu.degree}</p>
                        <p className="text-xs text-white/45">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: `${edu.color}18`,
                            border: `1px solid ${edu.color}44`,
                            color: edu.color,
                          }}
                        >
                          {edu.score}
                        </span>
                        <span className="text-[10px] text-white/30">{edu.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
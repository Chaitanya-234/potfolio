"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects, projectCategories, Project, ProjectCategory } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectAccents: Record<string, { bg: string; label: string }> = {
  "devmetrix":            { bg: "from-cyan-500/30 to-blue-600/30",    label: "DEV" },
  "mblogger":             { bg: "from-violet-500/30 to-purple-700/30", label: "MB"  },
  "textile-ecommerce":    { bg: "from-orange-400/30 to-rose-600/30",   label: "EC"  },
  "ai-media-monitoring":  { bg: "from-emerald-400/30 to-teal-600/30",  label: "AI"  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = projects.filter((project: Project) =>
    activeFilter === "all" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color, rgba(0,217,255,1)) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color, rgba(0,217,255,1)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl w-full relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Featured{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #00D9FF, #8338EC)" }}
            >
              Projects
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

        {/* ── Filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {projectCategories.map((cat: ProjectCategory, index: number) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.07 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat.id)}
              className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden"
              style={
                activeFilter === cat.id
                  ? {
                      background: "linear-gradient(135deg, #00D9FF22, #8338EC22)",
                      border: "1px solid #00D9FF88",
                      color: "#00D9FF",
                      boxShadow: "0 0 20px #00D9FF22",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.55)",
                    }
              }
            >
              {activeFilter === cat.id && (
                <motion.div
                  layoutId="filterBg"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #00D9FF11, #8338EC11)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* ── Project count ── */}
        <motion.p
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xs text-white/30 tracking-widest uppercase mb-10"
        >
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </motion.p>

        {/* ── Cards grid ── */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => {
              const accent = projectAccents[project.id] ?? {
                bg: "from-primary/20 to-accent/20",
                label: project.title.slice(0, 3).toUpperCase(),
              };
              const isHovered = hoveredId === project.id;
              const hasLiveDemo = project.demo !== "#";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92, y: -20 }}
                  transition={{ delay: index * 0.08, duration: 0.45, type: "spring", stiffness: 120 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: isHovered
                      ? "1px solid rgba(0,217,255,0.35)"
                      : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: isHovered
                      ? "0 24px 60px rgba(0,217,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)"
                      : "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
                    transition: "border 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Hover glow top edge */}
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, #00D9FF88, transparent)" }}
                  />

                  {/* ── Thumbnail banner ── */}
                  <div className={`relative w-full h-44 bg-gradient-to-br ${accent.bg} flex items-center justify-center overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    <div
                      className="absolute w-32 h-32 rounded-full opacity-30 blur-2xl"
                      style={{ background: "radial-gradient(circle, #00D9FF, #8338EC)" }}
                    />
                    <span
                      className="relative z-10 font-black tracking-widest text-white/70"
                      style={{ fontSize: "2rem", fontFamily: "monospace", letterSpacing: "0.2em" }}
                    >
                      {accent.label}
                    </span>

                    {/* Live badge — top left, only when demo exists */}
                    {hasLiveDemo && (
                      <div
                        className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                        style={{
                          background: "rgba(0,0,0,0.5)",
                          border: "1px solid rgba(16,185,129,0.5)",
                          color: "#10B981",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        Live
                      </div>
                    )}

                    {/* Category badges — top right */}
                    <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end max-w-[55%]">
                      {project.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                          style={{
                            background: "rgba(0,0,0,0.45)",
                            border: "1px solid rgba(0,217,255,0.3)",
                            color: "#00D9FF",
                            backdropFilter: "blur(6px)",
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Card body ── */}
                  <div className="p-7">
                    <h3
                      className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-5 text-white/50 group-hover:text-white/65 transition-colors duration-300 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md font-medium"
                          style={{
                            background: "rgba(0,217,255,0.07)",
                            border: "1px solid rgba(0,217,255,0.15)",
                            color: "rgba(0,217,255,0.75)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ── Action buttons ── */}
                    <div className="flex gap-3 pt-1 border-t border-white/[0.06]">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.7)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                          (e.currentTarget as HTMLElement).style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                        }}
                      >
                        <FaGithub className="text-base" />
                        GitHub
                      </motion.a>

                      {hasLiveDemo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                          style={{
                            background: "linear-gradient(135deg, #00D9FF18, #8338EC18)",
                            border: "1px solid rgba(0,217,255,0.3)",
                            color: "#00D9FF",
                          }}
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-white/30 text-sm tracking-widest uppercase"
          >
            No projects in this category yet
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
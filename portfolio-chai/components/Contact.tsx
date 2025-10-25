"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20 bg-black/20">
      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-300 text-lg mb-12"
        >
          Have a project in mind or want to collaborate? Let's connect!
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-4 bg-white/5 border border-primary/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
            />
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 opacity-0"
              whileFocus={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-4 bg-white/5 border border-primary/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
            />
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/10 to-secondary/10 opacity-0"
              whileFocus={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full p-4 bg-white/5 border border-primary/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50 resize-none"
            />
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0"
              whileFocus={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.button 
            type="submit" 
            className="w-full btn-glow text-lg relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <span className="relative z-10">Send Message</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { icon: FaEnvelope, href: "mailto:chaitnaya.a@gmail.com", color: "from-red-500 to-pink-500", label: "Email" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/chaitanya-ambekar", color: "from-blue-500 to-blue-600", label: "LinkedIn" },
            { icon: FaGithub, href: "https://github.com/chaitanyaambekar", color: "from-gray-600 to-gray-800", label: "GitHub" },
            { icon: FaPhone, href: "tel:+919309729333", color: "from-green-500 to-green-600", label: "Phone" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + (index * 0.1) }}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                rotate: [0, -10, 10, 0]
              }}
              whileTap={{ scale: 0.9 }}
              className={`w-14 h-14 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
            >
              <social.icon className="text-xl relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                {social.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

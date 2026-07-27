'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const frontendSkills = [
    "Angular", "TypeScript", "Node.js", "JavaScript", "HTML/CSS/XML", "SCSS"
  ];

  const backendSkills = [
    "C#", ".NET", "SQL", "REST APIs", "Microsoft SQL Server", "SSMS", "Python", "Java", "C"
  ];

  return (
    <section id="skills" className="pt-12 pb-16 px-6 bg-[#232129] text-white m-0">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-8">
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Frontend Card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-2xl bg-[#2d2b35] border border-white/10 shadow-sm hover:shadow-sm hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-[#00B5B5]">Frontend</h3>
            <ul className="space-y-1.5">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="relative pl-6 text-[#E0E0E0] text-[0.9rem] leading-relaxed">
                  <div className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full bg-[#00B5B5]" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-2xl bg-[#2d2b35] border border-white/10 shadow-sm hover:shadow-sm hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-[#00B5B5]">Backend</h3>
            <ul className="space-y-1.5">
              {backendSkills.map((skill, index) => (
                <li key={index} className="relative pl-6 text-[#E0E0E0] text-[0.9rem] leading-relaxed">
                  <div className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full bg-[#00B5B5]" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection; 
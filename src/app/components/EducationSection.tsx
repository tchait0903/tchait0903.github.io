'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EducationSection: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <motion.section
      id="education"
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="pt-12 pb-16 px-6 bg-[#232129] text-white"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="p-6 rounded-2xl bg-[#2d2b35] border border-white/10 shadow-sm hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-[#00B5B5] mb-1">
            Cleveland State University
          </h3>
          <p className="text-sm font-medium mb-1">
            Bachelor of Science, Computer Science
          </p>
          <p className="text-[#CCCCCC] text-sm mb-4">Aug 2020 – May 2023</p>

          <p className="font-semibold text-sm mb-2">Awards &amp; Societies:</p>
          <p className="text-[#E0E0E0] text-sm leading-relaxed">
            3× President&apos;s Award • 3× Choose Ohio First + STEM Fellows Member • 2× National Society of Leadership and Success
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
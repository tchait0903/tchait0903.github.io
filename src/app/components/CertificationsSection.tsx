'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Animation variants for the section reveal
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const CertificationsSection: React.FC = () => {
  const [certRef, isVisible] = useIntersectionObserver();

  const certifications = [
    {
      title: 'Microsoft Azure',
      items: ['Azure Fundamentals (AZ900)', 'Data Fundamentals (DP900)', 'AI Fundamentals (AI900)'],
    },
    {
      title: 'Other Certifications',
      items: ['LambdaTest - Test Automation'],
    },
  ];

  return (
    <motion.section
      id="certifications"
      ref={certRef}
      custom={0}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className="py-10 px-6 bg-[#18171C] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications</h2>
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        {certifications.map((cat, idx) => (
          <motion.div
            key={idx}
            custom={idx + 1}
            variants={sectionVariants}
            className="bg-[#2d2b35] border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-[#00B5B5] mb-4">{cat.title}</h3>
            <ul className="list-none space-y-2">
              {cat.items.map((item, i) => (
                <li key={i} className="relative pl-6 text-[#E0E0E0] leading-relaxed">
                  <span className="absolute left-0 top-[0.6em] w-2 h-2 rounded-full bg-[#00B5B5]" />
                  <span className="text-[#E0E0E0] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
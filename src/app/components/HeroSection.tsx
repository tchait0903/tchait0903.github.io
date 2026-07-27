'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const HeroSection: React.FC = () => {
  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({ top: aboutSection.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center bg-gradient-to-br from-[#18171C] to-[#232129] text-white text-center px-6 overflow-hidden"
    >
      <motion.div 
        className="z-10 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-[clamp(3rem,8vw,6rem)] font-bold mb-2 bg-gradient-to-br from-[#00B5B5] to-[#8EC5FC] bg-clip-text text-transparent leading-tight"
        >
          Ted Chait
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-[clamp(1.25rem,3vw,2rem)] mb-6 text-[#EAEAEA]"
        >
          Software Engineer
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-[clamp(1rem,1.5vw,1.25rem)] max-w-2xl mx-auto mb-8 leading-relaxed text-[#E0E0E0]"
        >
          I&apos;m a passionate software engineer with experience in full-stack development, specializing in creating intuitive, responsive, and accessible web applications.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex justify-center flex-wrap gap-4"
        >
          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/tchait/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00B5B5] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(0,181,181,0.5)] hover:shadow-[0_8px_30px_rgba(0,181,181,0.7)] hover:-translate-y-1 focus:shadow-[0_8px_30px_rgba(0,181,181,0.7)] focus:-translate-y-1 transition-all duration-300 outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#232129]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM8 8.65C7.45 8.65 7 8.2 7 7.65C7 7.1 7.45 6.65 8 6.65C8.55 6.65 9 7.1 9 7.65C9 8.2 8.55 8.65 8 8.65ZM18 17H16V13.5C16 12.67 15.33 12 14.5 12C13.67 12 13 12.67 13 13.5V17H11V10H13V11C13.52 10.24 14.45 9.65 15.5 9.65C16.88 9.65 18 10.77 18 12.15V17Z" fill="white"/>
            </svg>
            LinkedIn
          </motion.a>

          {/* GitHub Button */}
          <motion.a
            href="https://github.com/tchait0903"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00B5B5] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(0,181,181,0.5)] hover:shadow-[0_8px_30px_rgba(0,181,181,0.7)] hover:-translate-y-1 focus:shadow-[0_8px_30px_rgba(0,181,181,0.7)] focus:-translate-y-1 transition-all duration-300 outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#232129]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.49 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
            </svg>
            GitHub
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00B5B5] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(0,181,181,0.5)] hover:shadow-[0_8px_30px_rgba(0,181,181,0.7)] hover:-translate-y-1 focus:shadow-[0_8px_30px_rgba(0,181,181,0.7)] focus:-translate-y-1 transition-all duration-300 outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#232129]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="white"/>
            </svg>
            Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-300 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-2"
        role="button"
        tabIndex={0}
        onClick={handleScrollClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleScrollClick();
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-sm mb-2 text-white font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-5 h-5 border-r-2 border-b-2 border-white rotate-45" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 
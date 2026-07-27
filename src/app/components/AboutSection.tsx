'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const AboutSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="pt-16 pb-20 px-6 bg-[#18171C] text-white m-0 overflow-hidden">
      <motion.div 
        className="max-w-5xl mx-auto flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <motion.div variants={itemVariants} className="w-full max-w-[400px] shrink-0">
            <Image 
              src="/images/irlpfp.jpg" 
              alt="Ted Chait" 
              className="w-full h-auto rounded-2xl shadow-sm object-cover" 
              width={400} 
              height={533} 
              priority
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex-1 text-lg leading-relaxed space-y-6">
            <p>
              Hi, I&apos;m Ted Chait, a <span className="text-[#00B5B5] font-medium">Full Stack Software Engineer</span> passionate about creating clean enterprise level solutions. My journey began at <span className="text-[#00B5B5] font-medium">Cleveland State University</span>, where I earned my <span className="text-[#00B5B5] font-medium">Bachelor&apos;s in Computer Science</span>.
            </p>
            <p>
              Currently, I&apos;m working at <span className="text-[#00B5B5] font-medium">MRI Software</span> where I&apos;m modernizing a Windows database maintenance tool, bringing functionality to the web using <span className="text-[#00B5B5] font-medium">Angular</span>, <span className="text-[#00B5B5] font-medium">TypeScript</span>, <span className="text-[#00B5B5] font-medium">.NET</span>, <span className="text-[#00B5B5] font-medium">C#</span>, and <span className="text-[#00B5B5] font-medium">SQL Server</span>.
            </p>
            <p>
              I&apos;m proficient in both frontend technologies like <span className="text-[#00B5B5] font-medium">Angular</span>, <span className="text-[#00B5B5] font-medium">TypeScript</span>, <span className="text-[#00B5B5] font-medium">JavaScript</span>, and <span className="text-[#00B5B5] font-medium">HTML/CSS</span>, as well as backend technologies such as <span className="text-[#00B5B5] font-medium">C#</span>, <span className="text-[#00B5B5] font-medium">.NET</span>, and <span className="text-[#00B5B5] font-medium">SQL</span>. I work with a variety of tools including <span className="text-[#00B5B5] font-medium">Visual Studio</span>, <span className="text-[#00B5B5] font-medium">VSCode</span>, <span className="text-[#00B5B5] font-medium">Git</span>, <span className="text-[#00B5B5] font-medium">Azure</span>, and <span className="text-[#00B5B5] font-medium">Jira</span>.
            </p>
            <p>
              I&apos;m passionate about creating clean, accessible, and efficient software solutions and am always eager to learn new technologies and approaches to improve my craft.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
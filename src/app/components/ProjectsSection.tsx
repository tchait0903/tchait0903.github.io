// ProjectsSection.tsx - Refactored with Tailwind CSS and Framer Motion
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, liveLink, repoLink }) => (
  <motion.div
    className="rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    {/* Image placeholder – replace with actual <Image> component if needed */}
    <div className="h-48 bg-gray-100 flex items-center justify-center">
      <span className="text-gray-400 uppercase tracking-wider text-sm">Image Placeholder</span>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-teal-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-500"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-2">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
          >
            Live Demo
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const projects: ProjectCardProps[] = [
    {
      title: 'Personal Portfolio',
      description:
        'A responsive personal portfolio website showcasing my projects and skills, built with Next.js and TypeScript.',
      image: '/images/portfolio.png',
      techStack: ['Next.js', 'TypeScript', 'React'],
      liveLink: 'https://tedchait.dev',
      repoLink: 'https://github.com/tchait0903/tchait0903.github.io',
    },
    {
      title: 'SQL Database Manager',
      description:
        'Web-based database management tool for SQL Server, featuring schema visualization and query execution.',
      image: '/images/dbmanager.png',
      techStack: ['Angular', 'TypeScript', '.NET', 'SQL Server'],
    },
    {
      title: 'Task Management App',
      description:
        'A full-stack task management application with user authentication and real-time updates.',
      image: '/images/taskapp.png',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      repoLink: 'https://github.com/tchait0903/task-manager',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 px-6 bg-gray-50 min-h-screen"
    >
      <motion.h2
        custom={0}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Projects
      </motion.h2>
      <motion.div
        custom={1}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, i) => (
          <motion.div key={i} custom={i + 2} variants={sectionVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
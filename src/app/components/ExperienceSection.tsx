'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: (string | React.ReactNode)[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Tech = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#00B5B5] font-medium">{children}</span>
);

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer I',
    company: 'MRI Software • Solon, OH',
    period: 'Oct 2023 – Present',
    bullets: [
      'Part of a team modernizing a Windows database maintenance tool, bringing functionality to the web',
      <>Creating sleek front-end pages and components with <Tech>Angular</Tech> and <Tech>TypeScript</Tech>, using the VSCode editor</>,
      <>Creating a robust back-end with RESTful APIs using <Tech>C#</Tech>, <Tech>.NET</Tech>, and <Tech>Visual Studio</Tech></>,
      <>Using <Tech>SQL</Tech> and <Tech>Microsoft SQL Server</Tech>/<Tech>SSMS</Tech> to maintain databases</>,
      <>Active participant that leads both standups and retrospectives in an agile environment using <Tech>Jira</Tech> to track tasks</>,
      <>Utilizing <Tech>Confluence</Tech> to provide and update detailed documentation about our products</>,
    ],
  },
  {
    title: 'Product Development Intern',
    company: 'MRI Software • Solon, OH',
    period: 'May 2023 – Aug 2023',
    bullets: [
      'Part of a team that modernized web pages with cleaner UI and design',
      'Integrated pages with backend database tables',
      'Engaged in code reviews with other interns and employees',
      <>QA tested pages using <Tech>Playwright</Tech></>,
      'Updated Import/Export API to reach 1:1 parity with Windows functionality',
      <>Wrote a suite of API tests using <Tech>Postman</Tech>, then automated them with <Tech>Jenkins</Tech></>,
      'Improved Swagger documentation for APIs, promoting cleanliness and detail',
      <>Created issue cards in <Tech>Jira</Tech> for API tests using <Tech>Gherkin</Tech> syntax</>,
    ],
  },
  {
    title: "Maintenance and Enhancement of GCP's IT Search Engine",
    company: 'Cleveland State University • Cleveland, OH',
    period: 'Fall 2022 – Spring 2023',
    bullets: [
      'Led a team that managed and enhanced an IT-related search website for Northeast Ohio',
      'Sponsored by the Greater Cleveland Partnership, which is made up of 12,000 companies',
      'Revamped IT job search page, promoting recent and relevant job postings to the user with advanced filtering options',
      'Utilized a chatbot which answers common questions and connects users to employees',
      'Presented to the 2023 Senior Design Symposium and 2023 Choose Ohio First conference event',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="pt-12 pb-16 px-6 bg-[#18171C] text-white"
    >
      <motion.h2
        variants={cardVariants}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="p-6 rounded-2xl bg-[#232129] border border-white/10 shadow-sm hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-[#00B5B5] mb-1">{exp.title}</h3>
            <p className="text-[#CCCCCC] text-sm mb-4">
              {exp.company} • {exp.period}
            </p>
            <ul className="space-y-2">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="relative pl-5 text-[#E0E0E0] text-sm leading-relaxed">
                  <span className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full bg-[#00B5B5]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
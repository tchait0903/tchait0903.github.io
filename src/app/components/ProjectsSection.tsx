'use client';

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const sectionStyles: React.CSSProperties = {
  padding: "40px 24px",
  background: "#ffffff",
  margin: 0,
};

const sectionTitle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "48px",
  textAlign: "center",
};

const projectsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const projectCard: React.CSSProperties = {
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  background: "#ffffff",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

const projectImageContainer: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
};

/*
const projectImage: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
};
*/

const projectContent: React.CSSProperties = {
  padding: "24px",
  paddingTop: "0px",
};

const projectTitle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "8px",
  color: "#232129",
};

const projectDescription: React.CSSProperties = {
  fontSize: "1rem",
  color: "#666",
  marginBottom: "16px",
  lineHeight: 1.6,
};

const techStack: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "16px",
};

const techTag: React.CSSProperties = {
  padding: "4px 12px",
  borderRadius: "50px",
  fontSize: "0.8rem",
  background: "rgba(0, 181, 181, 0.1)",
  color: "#00B5B5",
  fontWeight: "medium",
};

const projectLinks: React.CSSProperties = {
  display: "flex",
  gap: "16px",
};

const projectLink: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: "#00B5B5",
  fontWeight: "medium",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const animatedSectionStyles = (isVisible: boolean): React.CSSProperties => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
});

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, /*image,*/ techStack: technologies, liveLink, repoLink }) => {
  return (
    <div 
      style={projectCard}
      onMouseOver={(e) => {
        const target = e.currentTarget as HTMLDivElement;
        target.style.transform = "translateY(-8px)";
        target.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.15)";
        
        const imgElement = target.querySelector('img') as HTMLImageElement;
        if (imgElement) {
          imgElement.style.transform = "scale(1.05)";
        }
      }}
      onMouseOut={(e) => {
        const target = e.currentTarget as HTMLDivElement;
        target.style.transform = "translateY(0)";
        target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.1)";
        
        const imgElement = target.querySelector('img') as HTMLImageElement;
        if (imgElement) {
          imgElement.style.transform = "scale(1)";
        }
      }}
    >
      <div style={projectImageContainer}>
        {/* <img src={image} alt={title} style={projectImage} /> */}
      </div>
      <div style={projectContent}>
        <h3 style={projectTitle}>{title}</h3>
        <p style={projectDescription}>{description}</p>
        <div style={techStack}>
          {technologies.map((tech, index) => (
            <span key={index} style={techTag}>{tech}</span>
          ))}
        </div>
        <div style={projectLinks}>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" style={projectLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L20 5M20 5V10M20 5H15M9 14L4 19M4 19V14M4 19H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Live Demo
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" style={projectLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.49 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
              </svg>
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [projectsRef, isProjectsVisible] = useIntersectionObserver();

  const projects: ProjectCardProps[] = [
    {
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website showcasing my projects and skills, built with Next.js and TypeScript.",
      image: "/images/portfolio.png",
      techStack: ["Next.js", "TypeScript", "React"],
      liveLink: "https://tedchait.dev",
      repoLink: "https://github.com/tchait0903/tchait0903.github.io",
    },
    {
      title: "SQL Database Manager",
      description: "Web-based database management tool for SQL Server, featuring schema visualization and query execution.",
      image: "/images/dbmanager.png",
      techStack: ["Angular", "TypeScript", ".NET", "SQL Server"],
    },
    {
      title: "Task Management App",
      description: "A full-stack task management application with user authentication and real-time updates.",
      image: "/images/taskapp.png",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      repoLink: "https://github.com/tchait0903/task-manager",
    },
  ];

  return (
    <section id="projects" ref={projectsRef} style={{ ...sectionStyles, ...animatedSectionStyles(isProjectsVisible) }}>
      <h2 style={sectionTitle}>Projects</h2>
      <div style={{ textAlign: 'center', color: '#E0E0E0', fontSize: '1.2rem', marginBottom: '32px' }}>
        This section is currently under construction. Check back soon!
      </div>
      <div style={projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 
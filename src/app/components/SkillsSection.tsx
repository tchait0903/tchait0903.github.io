'use client';

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const sectionStyles: React.CSSProperties = {
  padding: "80px 24px",
  background: "#ffffff",
  margin: 0,
};

const darkSectionStyles: React.CSSProperties = {
  background: "#232129",
  color: "#ffffff",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "48px",
  textAlign: "center",
};

const skillsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const skillCard: React.CSSProperties = {
  padding: "32px",
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  background: "#ffffff",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const skillCardDark: React.CSSProperties = {
  ...skillCard,
  background: "#2d2b35",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const listStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const listItemStyles: React.CSSProperties = {
  marginBottom: "12px",
  paddingLeft: "24px",
  position: "relative",
  lineHeight: "1.6",
};

const bulletPointStyles: React.CSSProperties = {
  content: '""',
  position: "absolute",
  left: "0",
  top: "0.7em",
  width: "8px",
  height: "8px",
  backgroundColor: "#00B5B5",
  borderRadius: "50%",
  transform: "translateY(-50%)",
};

const bulletPointDarkStyles: React.CSSProperties = {
  ...bulletPointStyles,
  backgroundColor: "#00B5B5",
};

const animatedSectionStyles = (isVisible: boolean): React.CSSProperties => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
});

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = () => {
  const [skillsRef, isSkillsVisible] = useIntersectionObserver();

  return (
    <section ref={skillsRef} style={{ ...sectionStyles, ...darkSectionStyles, ...animatedSectionStyles(isSkillsVisible) }}>
      <h2 style={sectionTitle}>Skills</h2>
      <div style={skillsGrid}>
        <div 
          style={skillCardDark}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(-8px)";
            target.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "#00B5B5" }}>Operating Systems</h3>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Windows
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Linux
            </li>
          </ul>
        </div>

        <div 
          style={skillCardDark}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(-8px)";
            target.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "#00B5B5" }}>Frontend</h3>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Angular
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              TypeScript
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Node.js
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              JavaScript
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              HTML/CSS/XML
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              SCSS
            </li>
          </ul>
        </div>

        <div 
          style={skillCardDark}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(-8px)";
            target.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "#00B5B5" }}>Backend</h3>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              C#
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              .NET
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              SQL
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              REST APIs
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Microsoft SQL Server
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              SSMS
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Python
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Java
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              C
            </li>
          </ul>
        </div>

        <div 
          style={skillCardDark}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(-8px)";
            target.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "#00B5B5" }}>Other Tools & Technologies</h3>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Visual Studio
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              VSCode
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Agile
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              SDLC
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Scrum
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              GitHub
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Azure
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Git
            </li>
          </ul>
        </div>

        <div 
          style={skillCardDark}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(-8px)";
            target.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "#00B5B5" }}>More Tools</h3>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Postman
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Microsoft Office Suite
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              IntelliJ IDEs
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Jira
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              TFS
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Playwright
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Swagger
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Jenkins
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Gherkin
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Confluence
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Kanban
            </li>
          </ul>
        </div>

        <div 
          style={skillCardDark}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(-8px)";
            target.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.3)";
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "#00B5B5" }}>Soft Skills</h3>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Communicative
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Problem-solving
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Time-managing
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Collaborative
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Adaptable
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Curious
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Accountable
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointDarkStyles} />
              Client-focused
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 
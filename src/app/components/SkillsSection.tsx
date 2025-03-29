'use client';

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const sectionStyles: React.CSSProperties = {
  padding: "40px 24px 60px 24px",
  background: "#232129",
  margin: 0,
  color: "#ffffff",
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
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
  gap: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
  justifyContent: "center",
  padding: "0 16px",
};

const skillCard: React.CSSProperties = {
  padding: "24px",
  paddingTop: "0px",
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  background: "#2d2b35",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  color: "#E0E0E0",
};

const skillCardDark: React.CSSProperties = {
  ...skillCard,
};

const listStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const listItemStyles: React.CSSProperties = {
  marginBottom: "8px",
  paddingLeft: "24px",
  position: "relative",
  lineHeight: "1.4",
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


const SkillsSection: React.FC = () => {
  const [skillsRef, isSkillsVisible] = useIntersectionObserver();

  return (
    <section id="skills" ref={skillsRef} style={{ ...sectionStyles, ...darkSectionStyles, ...animatedSectionStyles(isSkillsVisible) }}>
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
          <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "#00B5B5" }}>Frontend</h3>
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
          <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "#00B5B5" }}>Backend</h3>
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
      </div>
    </section>
  );
};

export default SkillsSection; 
'use client';

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const sectionStyles: React.CSSProperties = {
  padding: "80px 24px",
  background: "#232129",
  color: "#ffffff",
  margin: 0,
};

const sectionTitle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "48px",
  textAlign: "center",
};

const aboutContentStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1000px",
  margin: "0 auto",
  gap: "48px",
};

const textColumn: React.CSSProperties = {
  flex: 1,
  fontSize: "1.125rem",
  lineHeight: 1.6,
};

const bioHighlight: React.CSSProperties = {
  color: "#00B5B5",
  fontWeight: "500",
};

const aboutImageStyles: React.CSSProperties = {
  width: "100%",
  maxWidth: "400px",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  alignSelf: "center",
  marginBottom: "32px",
};

const animatedSectionStyles = (isVisible: boolean): React.CSSProperties => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
});

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [aboutRef, isAboutVisible] = useIntersectionObserver();

  return (
    <section ref={aboutRef} style={{ ...sectionStyles, ...animatedSectionStyles(isAboutVisible) }}>
      <h2 style={sectionTitle}>About Me</h2>
      <div style={aboutContentStyles}>
        <img src="/images/irlpfp.jpg" alt="Ted Chait" style={aboutImageStyles} />
        <div style={textColumn}>
          <p>
            Hi, I'm Ted Chait, a <span style={bioHighlight}>Full Stack Software Engineer</span> passionate about creating clean enterprise level solutions. My journey began at <span style={bioHighlight}>Cleveland State University</span>, where I earned my <span style={bioHighlight}>Bachelor's in Computer Science</span> with a GPA of 3.63.
          </p>
          <p>
            Currently, I'm working at <span style={bioHighlight}>MRI Software</span> where I'm modernizing a Windows database maintenance tool, bringing functionality to the web using <span style={bioHighlight}>Angular</span>, <span style={bioHighlight}>TypeScript</span>, <span style={bioHighlight}>.NET</span>, <span style={bioHighlight}>C#</span>, and <span style={bioHighlight}>SQL Server</span>.
          </p>
          <p>
            I'm proficient in both frontend technologies like <span style={bioHighlight}>Angular</span>, <span style={bioHighlight}>TypeScript</span>, <span style={bioHighlight}>JavaScript</span>, and <span style={bioHighlight}>HTML/CSS</span>, as well as backend technologies such as <span style={bioHighlight}>C#</span>, <span style={bioHighlight}>.NET</span>, and <span style={bioHighlight}>SQL</span>. I work with a variety of tools including <span style={bioHighlight}>Visual Studio</span>, <span style={bioHighlight}>VSCode</span>, <span style={bioHighlight}>Git</span>, <span style={bioHighlight}>Azure</span>, and <span style={bioHighlight}>Jira</span>.
          </p>
          <p>
            I'm passionate about creating clean, accessible, and efficient software solutions and am always eager to learn new technologies and approaches to improve my craft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
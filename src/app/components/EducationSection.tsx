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

const educationContainer: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const educationCard: React.CSSProperties = {
  padding: "24px",
  background: "#2d2b35",
  borderRadius: "16px",
  marginBottom: "32px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const schoolName: React.CSSProperties = {
  fontSize: "1.5rem",
  color: "#00B5B5",
  marginBottom: "8px",
};

const degree: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "500",
  marginBottom: "8px",
};

const details: React.CSSProperties = {
  color: "#E0E0E0",
  marginBottom: "16px",
};

const awardsTitle: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: "500",
  marginTop: "16px",
  marginBottom: "8px",
};

const animatedSectionStyles = (isVisible: boolean): React.CSSProperties => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
});


const EducationSection: React.FC = () => {
  const [educationRef, isEducationVisible] = useIntersectionObserver();

  return (
    <section id="education" ref={educationRef} style={{ ...sectionStyles, ...animatedSectionStyles(isEducationVisible) }}>
      <h2 style={sectionTitle}>Education</h2>
      <div style={educationContainer}>
        <div style={educationCard}>
          <h3 style={schoolName}>Cleveland State University</h3>
          <p style={degree}>Bachelor of Science, Computer Science</p>
          <p style={details}>Aug 2020 - May 2023</p>
          <p style={awardsTitle}>Awards & Societies:</p>
          <p style={details}>
            3x President&apos;s Award, 3x Choose Ohio First + STEM Fellows Member, 2x National Society of Leadership and Success
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 
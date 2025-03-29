'use client';

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const sectionStyles: React.CSSProperties = {
  padding: "40px 24px 60px 24px",
  background: "#18171C",
  color: "#ffffff",
  margin: 0,
};

const sectionTitle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "48px",
  textAlign: "center",
};

const certificationsContainer: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const certificationGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
  gap: "32px",
  justifyContent: "center",
  padding: "0 16px",
};

const certCard: React.CSSProperties = {
  padding: "24px",
  paddingTop: "0px",
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  background: "#232129",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const certTitle: React.CSSProperties = {
  fontSize: "1.5rem",
  color: "#00B5B5",
  marginBottom: "16px",
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
  color: "#E0E0E0",
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

const animatedSectionStyles = (isVisible: boolean): React.CSSProperties => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
});

const CertificationsSection: React.FC = () => {
  const [certRef, isCertVisible] = useIntersectionObserver();

  return (
    <section id="certifications" ref={certRef} style={{ ...sectionStyles, ...animatedSectionStyles(isCertVisible) }}>
      <h2 style={sectionTitle}>Certifications</h2>
      <div style={certificationsContainer}>
        <div style={certificationGrid}>
          <div 
            style={certCard}
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
            <h3 style={certTitle}>Microsoft Azure</h3>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Azure Fundamentals (AZ900)
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Data Fundamentals (DP900)
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                AI Fundamentals (AI900)
              </li>
            </ul>
          </div>

          <div 
            style={certCard}
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
            <h3 style={certTitle}>Other Certifications</h3>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                LambdaTest - Test Automation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection; 
'use client';

import React from 'react';
import { useScrollNavigation } from '../hooks/useScrollNavigation';

const footerStyles: React.CSSProperties = {
  background: "#18171C",
  color: "#ffffff",
  padding: "32px 24px",
  textAlign: "center",
};

const footerContentStyles: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const footerLinksStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "32px",
  flexWrap: "wrap",
};

const footerLinkStyles: React.CSSProperties = {
  color: "#E0E0E0",
  textDecoration: "none",
  transition: "color 0.3s ease",
  fontSize: "0.95rem",
  display: "inline-flex",
  alignItems: "center",
};

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { scrollToSection } = useScrollNavigation();
  
  return (
    <footer style={footerStyles}>
      <div style={footerContentStyles}>
        <nav style={footerLinksStyles}>
          <a 
            href="#home" 
            style={footerLinkStyles}
            onClick={scrollToSection}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#E0E0E0";
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            style={footerLinkStyles}
            onClick={scrollToSection}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#E0E0E0";
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            style={footerLinkStyles}
            onClick={scrollToSection}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#E0E0E0";
            }}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            style={footerLinkStyles}
            onClick={scrollToSection}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#E0E0E0";
            }}
          >
            Experience
          </a>
          <a 
            href="#education" 
            style={footerLinkStyles}
            onClick={scrollToSection}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#E0E0E0";
            }}
          >
            Education
          </a>
          <a 
            href="#certifications" 
            style={footerLinkStyles}
            onClick={scrollToSection}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#E0E0E0";
            }}
          >
            Certifications
          </a>
          <a 
            href="#contact" 
            style={footerLinkStyles}
            onClick={scrollToSection}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#E0E0E0";
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer; 
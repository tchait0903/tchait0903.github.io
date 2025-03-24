'use client';

import React from 'react';

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
  gap: "16px",
};

const footerLinksStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  marginBottom: "16px",
  flexWrap: "wrap",
};

const footerLinkStyles: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const copyrightStyles: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(255, 255, 255, 0.7)",
};

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={footerStyles}>
      <div style={footerContentStyles}>
        <nav style={footerLinksStyles}>
          <a 
            href="#home" 
            style={footerLinkStyles}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#ffffff";
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            style={footerLinkStyles}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#ffffff";
            }}
          >
            About
          </a>
          <a 
            href="#experience" 
            style={footerLinkStyles}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#ffffff";
            }}
          >
            Experience
          </a>
          <a 
            href="#skills" 
            style={footerLinkStyles}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#ffffff";
            }}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            style={footerLinkStyles}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#ffffff";
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            style={footerLinkStyles}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#00B5B5";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "#ffffff";
            }}
          >
            Contact
          </a>
        </nav>
        <p style={copyrightStyles}>
          © {currentYear} Ted Chait. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
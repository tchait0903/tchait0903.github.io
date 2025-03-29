'use client';

import React from 'react';

const heroSectionStyles: React.CSSProperties = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(135deg, #18171C 0%, #232129 100%)',
  color: '#ffffff',
  textAlign: 'center',
  padding: '0 24px',
  position: 'relative',
  overflow: 'hidden',
};

const heroContentStyles: React.CSSProperties = {
  zIndex: 1,
  width: '100%',
  maxWidth: '900px',
};

const nameStyles: React.CSSProperties = {
  fontSize: 'clamp(3rem, 8vw, 6rem)',
  fontWeight: 'bold',
  marginBottom: '8px',
  backgroundImage: 'linear-gradient(135deg, #00B5B5 0%, #8EC5FC 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 1.1,
};

const subtitleStyles: React.CSSProperties = {
  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
  marginBottom: '24px',
  color: '#EAEAEA',
};

const descriptionStyles: React.CSSProperties = {
  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
  maxWidth: '600px',
  margin: '0 auto 32px',
  lineHeight: 1.6,
  color: '#E0E0E0',
};

const ctaButtonStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: '#00B5B5',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '50px',
  fontSize: '1rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(0, 181, 181, 0.5)',
  margin: '0 10px 16px',
};

const buttonContainerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '16px',
};

const scrollIndicatorStyles: React.CSSProperties = {
  position: 'absolute',
  bottom: '32px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 0.7,
  transition: 'opacity 0.3s ease',
  cursor: 'pointer',
};

const scrollTextStyles: React.CSSProperties = {
  fontSize: '0.875rem',
  marginBottom: '8px',
  color: '#ffffff',
};

const scrollArrowStyles: React.CSSProperties = {
  width: '20px',
  height: '20px',
  borderRight: '2px solid #ffffff',
  borderBottom: '2px solid #ffffff',
  transform: 'rotate(45deg)',
  animation: 'scrollIndicator 2s infinite',
};

const HeroSection: React.FC = () => {
  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={heroSectionStyles}>
      <div style={heroContentStyles}>
        <h1 style={nameStyles}>Ted Chait</h1>
        <h2 style={subtitleStyles}>Software Engineer</h2>
        <p style={descriptionStyles}>
          I&apos;m a passionate software engineer with experience in full-stack development, specializing in creating intuitive, responsive, and accessible web applications.
        </p>
        <div style={buttonContainerStyles}>
          <a
            href="https://www.linkedin.com/in/tchait/"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonStyles}
            title="Connect with me on LinkedIn"
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.transform = 'translateY(-3px)';
              target.style.boxShadow = '0 8px 30px rgba(0, 181, 181, 0.7)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = '0 4px 20px rgba(0, 181, 181, 0.5)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM8 8.65C7.45 8.65 7 8.2 7 7.65C7 7.1 7.45 6.65 8 6.65C8.55 6.65 9 7.1 9 7.65C9 8.2 8.55 8.65 8 8.65ZM18 17H16V13.5C16 12.67 15.33 12 14.5 12C13.67 12 13 12.67 13 13.5V17H11V10H13V11C13.52 10.24 14.45 9.65 15.5 9.65C16.88 9.65 18 10.77 18 12.15V17Z" fill="white"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/tchait0903"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonStyles}
            title="Check out my GitHub projects"
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.transform = 'translateY(-3px)';
              target.style.boxShadow = '0 8px 30px rgba(0, 181, 181, 0.7)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = '0 4px 20px rgba(0, 181, 181, 0.5)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.49 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
            </svg>
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={ctaButtonStyles}
            title="Download my Resume"
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.transform = 'translateY(-3px)';
              target.style.boxShadow = '0 8px 30px rgba(0, 181, 181, 0.7)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = '0 4px 20px rgba(0, 181, 181, 0.5)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="white"/>
            </svg>
            Resume
          </a>
        </div>
      </div>
      <div
        style={scrollIndicatorStyles}
        onClick={handleScrollClick}
        onMouseOver={(e) => {
          const target = e.currentTarget as HTMLDivElement;
          target.style.opacity = '1';
        }}
        onMouseOut={(e) => {
          const target = e.currentTarget as HTMLDivElement;
          target.style.opacity = '0.7';
        }}
      >
        <span style={scrollTextStyles}>Scroll Down</span>
        <div style={scrollArrowStyles}></div>
      </div>
      <style>{`
        @keyframes scrollIndicator {
          0% {
            opacity: 0;
            transform: rotate(45deg) translate(-5px, -5px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(45deg) translate(5px, 5px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 
'use client';

import React from 'react';

const heroSectionStyles: React.CSSProperties = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(135deg, #232129 0%, #333 100%)',
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
  maxWidth: '700px',
  margin: '0 auto 32px',
  lineHeight: 1.6,
  color: '#D0D0D0',
};

const ctaButtonStyles: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#00B5B5',
  color: '#ffffff',
  padding: '12px 32px',
  borderRadius: '50px',
  fontSize: '1rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(0, 181, 181, 0.5)',
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

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section style={heroSectionStyles}>
      <div style={heroContentStyles}>
        <h1 style={nameStyles}>Ted Chait</h1>
        <h2 style={subtitleStyles}>Software Engineer</h2>
        <p style={descriptionStyles}>
          I'm a passionate software engineer with experience in full-stack development, specializing in creating intuitive, responsive, and accessible web applications.
        </p>
        <a
          href="https://www.linkedin.com/in/ted-chait/"
          target="_blank"
          rel="noopener noreferrer"
          style={ctaButtonStyles}
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
          Connect on LinkedIn
        </a>
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
      <style jsx>{`
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
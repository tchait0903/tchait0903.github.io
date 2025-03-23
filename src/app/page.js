'use client';

import { useEffect } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  overflow: "hidden",
  margin: 0,
  padding: 0,
}

const heroStyles = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(45, 45, 45, 0.95) 100%)",
  color: "white",
  position: "relative",
  overflow: "hidden",
  margin: 0,
  padding: 0,
}

const profileImageStyles = {
  width: "280px",
  height: "280px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #00B5B5",
  boxShadow: "0 0 20px rgba(0, 181, 181, 0.3)",
  marginBottom: "32px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
}

const heroContentStyles = {
  width: "100%",
  maxWidth: "1200px",
  padding: "0 24px",
  position: "relative",
  zIndex: 1,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "16px",
  padding: "48px 24px",
  backdropFilter: "blur(8px)",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 800,
  fontSize: "4rem",
  fontWeight: "bold",
  lineHeight: 1.2,
}

const headingAccentStyles = {
  color: "#00B5B5",
  textShadow: "0 0 10px rgba(0, 181, 181, 0.5)",
}

const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.25rem",
  lineHeight: 1.6,
  maxWidth: 600,
  opacity: 0.9,
}

const sectionStyles = {
  padding: "80px 24px",
  background: "#ffffff",
  margin: 0,
}

const darkSectionStyles = {
  ...sectionStyles,
  background: "#1a1a1a",
  color: "white",
}

const skillsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "32px",
  marginTop: "32px",
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
}

const skillCard = {
  background: "#ffffff",
  padding: "32px",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  border: "1px solid rgba(0, 0, 0, 0.1)",
}

const skillCardDark = {
  ...skillCard,
  background: "#2d2d2d",
  border: "1px solid rgba(255, 255, 255, 0.1)",
}

const experienceTimeline = {
  position: "relative",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
}

const timelineItem = {
  padding: "32px",
  background: "#ffffff",
  borderRadius: "16px",
  marginBottom: "32px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
}

const timelineItemDark = {
  ...timelineItem,
  background: "#2d2d2d",
  border: "1px solid rgba(255, 255, 255, 0.1)",
}

const contactSection = {
  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  padding: "80px 24px",
  textAlign: "center",
  color: "white",
  margin: 0,
}

const contactButtonContainer = {
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
}

const contactButton = {
  background: "#00B5B5",
  color: "#1a1a1a",
  padding: "16px 32px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  fontSize: "1.1rem",
  border: "none",
  cursor: "pointer",
}

const linkedInButton = {
  ...contactButton,
  background: "#0077b5",
  color: "white",
}

const githubButton = {
  ...contactButton,
  background: "#f6f8fa",
  color: "#24292e",
  border: "1px solid rgba(255, 255, 255, 0.1)",
}

const resumeButton = {
  ...contactButton,
  background: "#4a4a4a",
  color: "white",
  border: "1px solid rgba(255, 255, 255, 0.2)",
}

const sectionTitle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "48px",
  textAlign: "center",
}

const animatedSectionStyles = (isVisible) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
});

const listStyles = {
  listStyle: "none",
  padding: 0,
  margin: 0,
}

const listItemStyles = {
  marginBottom: "12px",
  paddingLeft: "24px",
  position: "relative",
  lineHeight: "1.6",
}

const bulletPointStyles = {
  content: '""',
  position: "absolute",
  left: "0",
  top: "0.7em",
  width: "8px",
  height: "8px",
  backgroundColor: "#232129",
  borderRadius: "50%",
  transform: "translateY(-50%)",
}

const bulletPointDarkStyles = {
  ...bulletPointStyles,
  backgroundColor: "#ffffff",
}

const techHighlight = {
  color: "#00B5B5",
  fontWeight: "500",
}

export default function Home() {
  const [aboutRef, isAboutVisible] = useIntersectionObserver();
  const [skillsRef, isSkillsVisible] = useIntersectionObserver();
  const [experienceRef, isExperienceVisible] = useIntersectionObserver();
  const [contactRef, isContactVisible] = useIntersectionObserver();

  useEffect(() => {
    // Apply global styles
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
  }, []);

  return (
    <main style={{ ...pageStyles, margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={heroContentStyles}>
          <img
            src="/images/irlpfp.jpg"
            alt="Ted - Full Stack Developer"
            style={profileImageStyles}
            onMouseOver={e => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 181, 181, 0.5)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 181, 181, 0.3)";
            }}
          />
          <h1 style={headingStyles}>
            Hi, I'm <span style={headingAccentStyles}>Ted</span>
            <br />
            Full Stack Developer
          </h1>
          <p style={paragraphStyles}>
            I build robust web applications using .NET and Angular, turning complex ideas into elegant solutions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} style={{ ...sectionStyles, ...animatedSectionStyles(isAboutVisible) }}>
        <h2 style={sectionTitle}>About Me</h2>
        <p style={{ ...paragraphStyles, maxWidth: "800px", margin: "0 auto" }}>
          With 2 years of experience in full-stack development, I specialize in creating scalable web applications
          using .NET and Angular. I'm passionate about writing clean, maintainable code and building
          user-friendly interfaces that make a difference.
        </p>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} style={{ ...darkSectionStyles, ...animatedSectionStyles(isSkillsVisible) }}>
        <h2 style={sectionTitle}>Skills</h2>
        <div style={skillsGrid}>
          <div style={skillCardDark}>
            <h3 style={{ color: "#00B5B5", marginBottom: "24px" }}>Backend Development</h3>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                .NET Core
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                C#
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                RESTful APIs
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                SQL Server
              </li>
            </ul>
          </div>
          <div style={skillCardDark}>
            <h3 style={{ color: "#00B5B5", marginBottom: "24px" }}>Frontend Development</h3>
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
                HTML5/CSS3
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                Responsive Design
              </li>
            </ul>
          </div>
          <div style={skillCardDark}>
            <h3 style={{ color: "#00B5B5", marginBottom: "24px" }}>Tools & Technologies</h3>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                Git
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                Azure
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                Docker
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointDarkStyles} />
                CI/CD
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} style={{ ...sectionStyles, ...animatedSectionStyles(isExperienceVisible) }}>
        <h2 style={sectionTitle}>Experience</h2>
        <div style={experienceTimeline}>
          <div style={timelineItem}>
            <h3 style={{ color: "#00B5B5", marginBottom: "16px" }}>Software Engineer I</h3>
            <p style={{ color: "#666", marginBottom: "8px" }}>MRI Software • Solon, OH • Oct 2023 - Present</p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Modernizing a Windows database maintenance tool for web platforms using <span style={techHighlight}>Angular</span>, <span style={techHighlight}>TypeScript</span>, <span style={techHighlight}>C#</span>, and <span style={techHighlight}>.NET</span>
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Developing RESTful APIs and managing databases with <span style={techHighlight}>SQL Server</span>/<span style={techHighlight}>SSMS</span>
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Leading standups and retrospectives in an agile environment, managing tasks with <span style={techHighlight}>Jira</span>
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Maintaining comprehensive product documentation using <span style={techHighlight}>Confluence</span>
              </li>
            </ul>
          </div>

          <div style={timelineItem}>
            <h3 style={{ color: "#00B5B5", marginBottom: "16px" }}>Product Development Intern</h3>
            <p style={{ color: "#666", marginBottom: "8px" }}>MRI Software • Solon, OH • May 2023 - Aug 2023</p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Modernized web pages with improved UI/UX design and integrated backend database functionality
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Implemented QA testing using <span style={techHighlight}>Playwright</span> and participated in code reviews
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Enhanced Import/Export API to achieve 1:1 parity with Windows functionality
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Created and automated API tests using <span style={techHighlight}>Postman</span> and <span style={techHighlight}>Jenkins</span>
              </li>
              <li style={listItemStyles}>
                <div style={bulletPointStyles} />
                Improved API documentation with detailed <span style={techHighlight}>Swagger</span> specs and <span style={techHighlight}>Gherkin</span> syntax for <span style={techHighlight}>Jira</span> cards
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} style={{ ...contactSection, ...animatedSectionStyles(isContactVisible) }}>
        <h2 style={sectionTitle}>Get in Touch</h2>
        <p style={{ ...paragraphStyles, maxWidth: "600px", margin: "0 auto 32px" }}>
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div style={contactButtonContainer}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={resumeButton}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            Resume
          </a>
          <a
            href="mailto:tchait0903@gmail.com"
            style={contactButton}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/tchait"
            target="_blank"
            rel="noopener noreferrer"
            style={linkedInButton}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tchait0903"
            target="_blank"
            rel="noopener noreferrer"
            style={githubButton}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
} 
'use client';

import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const sectionStyles: React.CSSProperties = {
  padding: "80px 24px",
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

const experienceTimeline: React.CSSProperties = {
  position: "relative",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
};

const timelineItem: React.CSSProperties = {
  padding: "24px",
  background: "#232129",
  borderRadius: "16px",
  marginBottom: "32px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
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
  width: "6px",
  height: "6px",
  backgroundColor: "#00B5B5",
  borderRadius: "50%",
  transform: "translateY(-50%)",
};

const techHighlight: React.CSSProperties = {
  color: "#00B5B5",
  fontWeight: "500",
};

const animatedSectionStyles = (isVisible: boolean): React.CSSProperties => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
});

const ExperienceSection: React.FC = () => {
  const [experienceRef, isExperienceVisible] = useIntersectionObserver();

  return (
    <section id="experience" ref={experienceRef} style={{ ...sectionStyles, ...animatedSectionStyles(isExperienceVisible) }}>
      <h2 style={sectionTitle}>Experience</h2>
      <div style={experienceTimeline}>
        <div style={timelineItem}>
          <h3 style={{ color: "#00B5B5", marginBottom: "8px" }}>Software Engineer I</h3>
          <p style={{ color: "#CCCCCC", marginBottom: "24px" }}>MRI Software • Solon, OH • Oct 2023 - Present</p>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Part of a team modernizing a Windows database maintenance tool, bringing functionality to the web
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Creating sleek front-end pages and components with <span style={techHighlight}>Angular</span> and <span style={techHighlight}>TypeScript</span>, using the VSCode editor
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Creating a robust back-end with RESTful APIs using <span style={techHighlight}>C#</span>, <span style={techHighlight}>.NET</span>, and <span style={techHighlight}>Visual Studio</span>
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Using <span style={techHighlight}>SQL</span> and <span style={techHighlight}>Microsoft SQL Server</span>/<span style={techHighlight}>SSMS</span> to maintain databases
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Active participant that leads both standups and retrospectives in an agile environment using <span style={techHighlight}>Jira</span> to track tasks
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Utilizing <span style={techHighlight}>Confluence</span> to provide and update detailed documentation about our products
            </li>
          </ul>
        </div>

        <div style={timelineItem}>
          <h3 style={{ color: "#00B5B5", marginBottom: "8px" }}>Product Development Intern</h3>
          <p style={{ color: "#CCCCCC", marginBottom: "24px" }}>MRI Software • Solon, OH • May 2023 - Aug 2023</p>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Part of a team that modernized web pages with cleaner UI and design
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Integrated pages with backend database tables
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Engaged in code reviews with other interns and employees
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              QA tested pages using <span style={techHighlight}>Playwright</span>
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Updated Import/Export API to reach 1:1 parity with Windows functionality
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Wrote a suite of API tests using <span style={techHighlight}>Postman</span>, then automated them with <span style={techHighlight}>Jenkins</span>
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Improved Swagger documentation for APIs, promoting cleanliness and detail
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Created issue cards in <span style={techHighlight}>Jira</span> for API tests using <span style={techHighlight}>Gherkin</span> syntax
            </li>
          </ul>
        </div>

        <div style={timelineItem}>
          <h3 style={{ color: "#00B5B5", marginBottom: "8px" }}>Maintenance and Enhancement of GCP&apos;s ExploreIT.info</h3>
          <p style={{ color: "#CCCCCC", marginBottom: "24px" }}>Cleveland State University • Cleveland, OH • Fall 2022 - Spring 2023</p>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Led a team that managed and enhanced an IT-related search website for Northeast Ohio
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Sponsored by the Greater Cleveland Partnership, which is made up of 12,000 companies
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Revamped IT job search page, promoting recent and relevant job postings to the user with advanced filtering options
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Utilized a chatbot which answers common questions and connects users to employees
            </li>
            <li style={listItemStyles}>
              <div style={bulletPointStyles} />
              Presented to the 2023 Senior Design Symposium and 2023 Choose Ohio First conference event
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 
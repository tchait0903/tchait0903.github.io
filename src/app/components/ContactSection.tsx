'use client';

import React, { useState } from 'react';
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

const contactContainer: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
};

const contactInfo: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  marginBottom: "32px",
};

const contactMethod: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const contactMethodText: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const socialLinks: React.CSSProperties = {
  display: "flex",
  gap: "24px",
  justifyContent: "center",
  marginBottom: "32px",
};

const socialIcon: React.CSSProperties = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease, transform 0.3s ease",
};

const formStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const inputGroup: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputLabel: React.CSSProperties = {
  fontSize: "1rem",
  marginBottom: "4px",
};

const inputField: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  background: "rgba(255, 255, 255, 0.05)",
  color: "#ffffff",
  fontSize: "1rem",
  width: "100%",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
};

const textareaField: React.CSSProperties = {
  ...inputField,
  minHeight: "150px",
  resize: "vertical",
};

const submitButton: React.CSSProperties = {
  padding: "14px 32px",
  borderRadius: "8px",
  background: "#00B5B5",
  color: "#ffffff",
  fontSize: "1rem",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
  alignSelf: "flex-start",
};

const statusMessage: React.CSSProperties = {
  padding: "16px",
  borderRadius: "8px",
  marginTop: "16px",
  fontWeight: "medium",
};

const successMessage: React.CSSProperties = {
  ...statusMessage,
  background: "rgba(0, 181, 181, 0.2)",
  color: "#00B5B5",
};

const errorMessage: React.CSSProperties = {
  ...statusMessage,
  background: "rgba(255, 0, 0, 0.2)",
  color: "#ff6b6b",
};

const animatedSectionStyles = (isVisible: boolean): React.CSSProperties => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
});

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  const [contactRef, isContactVisible] = useIntersectionObserver();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // This is where you'd normally send the form data to a server
      // For demonstration, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section ref={contactRef} style={{ ...sectionStyles, ...animatedSectionStyles(isContactVisible) }}>
      <h2 style={sectionTitle}>Get In Touch</h2>
      <div style={contactContainer}>
        <div style={contactInfo}>
          <div style={contactMethod}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="#00B5B5"/>
            </svg>
            <a href="mailto:tchait0903@gmail.com" style={contactMethodText}>tchait0903@gmail.com</a>
          </div>
          <div style={contactMethod}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#00B5B5"/>
            </svg>
            <a href="tel:+14409150084" style={contactMethodText}>+1 (440) 915-0084</a>
          </div>
        </div>
        
        <div style={socialLinks}>
          <a 
            href="https://github.com/tchait0903" 
            target="_blank" 
            rel="noopener noreferrer"
            style={socialIcon}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.background = "rgba(255, 255, 255, 0.2)";
              target.style.transform = "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.background = "rgba(255, 255, 255, 0.1)";
              target.style.transform = "translateY(0)";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.49 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/tchait" 
            target="_blank" 
            rel="noopener noreferrer"
            style={socialIcon}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.background = "rgba(255, 255, 255, 0.2)";
              target.style.transform = "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.background = "rgba(255, 255, 255, 0.1)";
              target.style.transform = "translateY(0)";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM8 8.65C7.45 8.65 7 8.2 7 7.65C7 7.1 7.45 6.65 8 6.65C8.55 6.65 9 7.1 9 7.65C9 8.2 8.55 8.65 8 8.65ZM18 17H16V13.5C16 12.67 15.33 12 14.5 12C13.67 12 13 12.67 13 13.5V17H11V10H13V11C13.52 10.24 14.45 9.65 15.5 9.65C16.88 9.65 18 10.77 18 12.15V17Z" fill="white"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com/tedchait" 
            target="_blank" 
            rel="noopener noreferrer"
            style={socialIcon}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.background = "rgba(255, 255, 255, 0.2)";
              target.style.transform = "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.background = "rgba(255, 255, 255, 0.1)";
              target.style.transform = "translateY(0)";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.4 15.77 5.72 16.86 7.27 16.87C6.05 17.87 4.53 18.45 2.9 18.45C2.6 18.45 2.3 18.43 2 18.39C3.54 19.45 5.37 20.1 7.34 20.1C16 20.1 20.71 12.83 20.71 6.56C20.71 6.36 20.71 6.16 20.7 5.97C21.55 5.36 22.28 4.62 22.87 3.78C22.08 4.11 21.24 4.36 20.37 4.48C21.25 3.92 21.95 3.06 22.27 2.03C21.43 2.53 20.5 2.9 19.52 3.09C18.72 2.25 17.59 1.74 16.35 1.74C13.94 1.74 11.98 3.7 11.98 6.11C11.98 6.45 12.02 6.78 12.08 7.09C8.5 6.91 5.26 5.15 3.06 2.4C2.69 3.05 2.48 3.8 2.48 4.6C2.48 6.09 3.23 7.39 4.39 8.14C3.67 8.13 2.99 7.93 2.4 7.63C2.4 7.64 2.4 7.65 2.4 7.67C2.4 9.76 3.89 11.51 5.86 11.9C5.5 11.98 5.13 12.01 4.74 12.01C4.47 12.01 4.21 11.98 3.96 11.95C4.49 13.66 6.03 14.87 7.88 14.91C6.45 16.04 4.65 16.68 2.7 16.68C2.36 16.68 2.02 16.66 1.7 16.62C3.56 17.82 5.76 18.5 8.11 18.5C16.33 18.5 20.97 11.99 20.97 6.34C20.97 6.15 20.97 5.96 20.96 5.77C21.8 5.16 22.54 4.4 23.13 3.54C22.34 3.88 21.5 4.12 20.62 4.24C21.51 3.65 22.22 2.77 22.55 1.72C21.71 2.24 20.78 2.62 19.79 2.81C18.99 1.95 17.85 1.42 16.58 1.42C14.13 1.42 12.12 3.43 12.12 5.89C12.12 6.23 12.16 6.56 12.23 6.87C8.56 6.69 5.25 4.89 3.02 2.07C2.64 2.72 2.43 3.48 2.43 4.28C2.43 5.8 3.2 7.14 4.39 7.89C3.67 7.88 2.99 7.68 2.39 7.38V7.41C2.39 9.58 3.9 11.4 5.9 11.79C5.54 11.87 5.17 11.91 4.78 11.91C4.51 11.91 4.24 11.89 3.99 11.85C4.52 13.66 6.06 14.87 7.91 14.9C6.47 16.04 4.65 16.68 2.68 16.68C2.33 16.68 1.98 16.66 1.64 16.62C3.51 17.82 5.71 18.5 8.09 18.5C16.3 18.5 20.97 11.99 20.97 6.35C20.97 6.16 20.96 5.97 20.95 5.78C21.79 5.16 22.53 4.41 23.12 3.54C22.33 3.88 21.49 4.13 20.61 4.25C21.5 3.66 22.2 2.79 22.53 1.74C21.69 2.25 20.76 2.63 19.77 2.82C18.97 1.96 17.83 1.44 16.57 1.44C14.12 1.44 12.12 3.44 12.12 5.89C12.12 6.23 12.15 6.57 12.23 6.88C8.55 6.7 5.24 4.9 3.01 2.09C2.63 2.74 2.42 3.5 2.42 4.3C2.42 5.82 3.19 7.15 4.38 7.91C3.66 7.9 2.98 7.7 2.38 7.4V7.42C2.38 9.6 3.89 11.42 5.88 11.8C5.51 11.89 5.13 11.93 4.73 11.93C4.46 11.93 4.2 11.91 3.94 11.87C4.47 13.64 6.01 14.87 7.86 14.9C6.42 16.02 4.61 16.68 2.63 16.68C2.28 16.68 1.93 16.67 1.58 16.63C3.45 17.83 5.66 18.5 8.04 18.5C16.27 18.5 20.94 11.99 20.94 6.35C20.94 6.16 20.94 5.97 20.93 5.78C21.77 5.16 22.5 4.41 23.1 3.54C22.31 3.88 21.46 4.13 20.58 4.25C21.47 3.67 22.17 2.8 22.49 1.75" fill="white"/>
            </svg>
          </a>
        </div>

        <form style={formStyles} onSubmit={handleSubmit}>
          <div style={inputGroup}>
            <label htmlFor="name" style={inputLabel}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              style={inputField}
              value={formData.name}
              onChange={handleChange}
              required
              onFocus={(e) => {
                const target = e.currentTarget as HTMLInputElement;
                target.style.borderColor = "#00B5B5";
                target.style.boxShadow = "0 0 0 2px rgba(0, 181, 181, 0.2)";
              }}
              onBlur={(e) => {
                const target = e.currentTarget as HTMLInputElement;
                target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                target.style.boxShadow = "none";
              }}
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="email" style={inputLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              style={inputField}
              value={formData.email}
              onChange={handleChange}
              required
              onFocus={(e) => {
                const target = e.currentTarget as HTMLInputElement;
                target.style.borderColor = "#00B5B5";
                target.style.boxShadow = "0 0 0 2px rgba(0, 181, 181, 0.2)";
              }}
              onBlur={(e) => {
                const target = e.currentTarget as HTMLInputElement;
                target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                target.style.boxShadow = "none";
              }}
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="message" style={inputLabel}>Message</label>
            <textarea
              id="message"
              name="message"
              style={textareaField}
              value={formData.message}
              onChange={handleChange}
              required
              onFocus={(e) => {
                const target = e.currentTarget as HTMLTextAreaElement;
                target.style.borderColor = "#00B5B5";
                target.style.boxShadow = "0 0 0 2px rgba(0, 181, 181, 0.2)";
              }}
              onBlur={(e) => {
                const target = e.currentTarget as HTMLTextAreaElement;
                target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                target.style.boxShadow = "none";
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={submitButton}
            disabled={formStatus === 'submitting'}
            onMouseOver={(e) => {
              if (formStatus !== 'submitting') {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.background = "#00c2c2";
                target.style.transform = "translateY(-2px)";
                target.style.boxShadow = "0 8px 20px rgba(0, 181, 181, 0.3)";
              }
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.background = "#00B5B5";
              target.style.transform = "translateY(0)";
              target.style.boxShadow = "none";
            }}
          >
            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {formStatus === 'success' && (
            <div style={successMessage}>
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          {formStatus === 'error' && (
            <div style={errorMessage}>
              Oops! Something went wrong. Please try again later or contact me directly via email.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 
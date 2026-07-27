'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Animation variants for section reveal
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const ContactSection: React.FC = () => {
  const [contactRef, isContactVisible] = useIntersectionObserver();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = (await response.json()) as { success: boolean };
      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
    }
  };

  return (
    <motion.section
      id="contact"
      ref={contactRef}
      custom={0}
      initial="hidden"
      animate={isContactVisible ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className="pt-12 pb-16 px-6 bg-[#232129] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Contact Info */}
        <div className="flex flex-col items-center gap-4 mb-2">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
                fill="#00B5B5"
              />
            </svg>
            <a href="mailto:tchait0903@gmail.com" className="text-white hover:text-teal-400 transition-colors">
              tchait0903@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                fill="#00B5B5"
              />
            </svg>
            <a href="tel:+14409150084" className="text-white hover:text-teal-400 transition-colors">
              +1 (440) 915‑0084
            </a>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-2">
          <a
            href="https://www.linkedin.com/in/tchait/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition flex items-center justify-center"
            title="LinkedIn"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM8 8.65C7.45 8.65 7 8.2 7 7.65C7 7.1 7.45 6.65 8 6.65C8.55 6.65 9 7.1 9 7.65C9 8.2 8.55 8.65 8 8.65ZM18 17H16V13.5C16 12.67 15.33 12 14.5 12C13.67 12 13 12.67 13 13.5V17H11V10H13V11C13.52 10.24 14.45 9.65 15.5 9.65C16.88 9.65 18 10.77 18 12.15V17Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://github.com/tchait0903"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition flex items-center justify-center"
            title="GitHub"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.49 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition flex items-center justify-center"
            title="Resume"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        {/* Contact Form */}
        <form className="flex flex-col gap-4" onSubmit={(e) => { void handleSubmit(e); }}>
          <div className="relative">
            <label htmlFor="name" className="text-base block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="p-3 rounded-lg border border-white/20 bg-[#2d2b35] text-white w-full focus:border-[#00B5B5] focus:shadow-[0_0_8px_rgba(0,181,181,0.5)] hover:border-[#00B5B5] hover:shadow-[0_0_8px_rgba(0,181,181,0.5)] outline-none transition"
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="text-base block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="p-3 rounded-lg border border-white/20 bg-[#2d2b35] text-white w-full focus:border-[#00B5B5] focus:shadow-[0_0_8px_rgba(0,181,181,0.5)] hover:border-[#00B5B5] hover:shadow-[0_0_8px_rgba(0,181,181,0.5)] outline-none transition"
            />
          </div>
          <div className="relative">
            <label htmlFor="message" className="text-base block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-white/20 bg-[#2d2b35] text-white w-full min-h-[150px] resize-vertical focus:border-[#00B5B5] focus:shadow-[0_0_8px_rgba(0,181,181,0.5)] hover:border-[#00B5B5] hover:shadow-[0_0_8px_rgba(0,181,181,0.5)] outline-none transition"
            />
          </div>
          <motion.button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="self-center my-4 w-fit inline-flex items-center gap-2 bg-[#00B5B5] text-white px-8 py-3 rounded-full font-bold cursor-pointer disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(0,181,181,0.5)] hover:shadow-[0_8px_30px_rgba(0,181,181,0.7)] hover:-translate-y-1 focus:shadow-[0_8px_30px_rgba(0,181,181,0.7)] focus:-translate-y-1 transition-all duration-300 outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#232129] disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </motion.button>
          {formStatus === 'success' && (
            <div className="bg-teal-500/20 text-teal-400 p-4 rounded">
              Thank you for your message! I&apos;ll get back to you soon.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="bg-red-500/20 text-red-400 p-4 rounded">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
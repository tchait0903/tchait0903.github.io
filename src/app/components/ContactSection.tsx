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
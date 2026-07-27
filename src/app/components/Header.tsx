'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollNavigation } from '../hooks/useScrollNavigation';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Education', href: 'education' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollNavigation();
  
  const sectionIds = useMemo(() => navLinks.map(link => link.href), []);
  // We use an offset of roughly the height of the header + a bit of padding to detect active states well
  const activeSection = useScrollSpy(sectionIds, 150);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#18171C]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#home" 
          onClick={handleLinkClick}
          className="text-xl font-bold text-white hover:text-teal-400 transition-colors"
        >
          TC<span className="text-teal-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href;
            
            return (
              <a
                key={label}
                href={`#${href}`}
                onClick={handleLinkClick}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-teal-400' : 'text-[#E0E0E0] hover:text-white'
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="header-active-pill"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-teal-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 right-0 bg-[#18171C]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map(({ label, href }) => {
                const isActive = activeSection === href;
                return (
                  <a
                    key={label}
                    href={`#${href}`}
                    onClick={handleLinkClick}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? 'text-teal-400' : 'text-[#E0E0E0] hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

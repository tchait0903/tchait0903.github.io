import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/app/components/Header';

// Framer Motion and scroll spy hooks need mocking in jsdom
vi.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => <header {...props}>{children}</header>,
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('@/app/hooks/useScrollSpy', () => ({
  useScrollSpy: () => 'home',
}));

vi.mock('@/app/hooks/useScrollNavigation', () => ({
  useScrollNavigation: () => ({
    scrollToSection: vi.fn(),
  }),
}));

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('renders the brand logo', () => {
    const logo = screen.getByText(/TC/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    const labels = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Certifications', 'Contact'];
    const allLinks = screen.getAllByRole('link');
    const linkTexts: string[] = [];
    allLinks.forEach(l => { if (l.textContent) linkTexts.push(l.textContent.trim()); });
    labels.forEach(label => {
      expect(linkTexts).toContain(label);
    });
  });

  it('renders a hamburger menu button for mobile', () => {
    const button = screen.getByRole('button', { name: /toggle menu/i });
    expect(button).toBeInTheDocument();
  });

  it('shows the mobile menu when hamburger is clicked', () => {
    const button = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(button);
    // After clicking, there should be two sets of nav links (desktop + mobile overlay)
    const allAboutLinks = screen.getAllByText('About');
    expect(allAboutLinks.length).toBeGreaterThanOrEqual(2);
  });

  it('closes the mobile menu when a link is clicked', () => {
    const button = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(button); // open
    const mobileLinks = screen.getAllByText('About');
    fireEvent.click(mobileLinks[mobileLinks.length - 1]); // click mobile link
    // After clicking the link, there should be only one "About" visible again
    const remaining = screen.getAllByText('About');
    expect(remaining.length).toBe(1);
  });

  it('each nav link has a correct href attribute', () => {
    const expectedHrefs = [
      '#home', '#about', '#skills', '#experience', '#education', '#certifications', '#contact',
    ];
    const allLinks = screen.getAllByRole('link');
    const hrefs = allLinks.map(l => l.getAttribute('href'));
    expectedHrefs.forEach(href => {
      expect(hrefs).toContain(href);
    });
  });
});

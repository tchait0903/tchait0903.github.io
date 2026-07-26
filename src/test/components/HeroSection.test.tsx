import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from '@/app/components/HeroSection';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props}>{children}</button>,
  },
}));

describe('HeroSection', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it('renders the hero heading with the name', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders the "Software Engineer" subtitle', () => {
    // The subtitle is an h2; use heading role to avoid matching the paragraph body text
    const subtitle = screen.getByRole('heading', { name: /Software Engineer/i, level: 2 });
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the LinkedIn link', () => {
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com') as string);
  });

  it('renders the GitHub link', () => {
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com') as string);
  });

  it('renders the resume download link', () => {
    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toBeInTheDocument();
  });

  it('renders the section with id="home"', () => {
    const section = document.getElementById('home');
    expect(section).not.toBeNull();
  });
});

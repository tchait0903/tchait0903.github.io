import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactSection from '@/app/components/ContactSection';

vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
    button: ({ children, whileHover: _wh, whileTap: _wt, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { whileHover?: unknown; whileTap?: unknown }) => <button {...props}>{children}</button>,
    a: ({ children, whileHover: _wh, whileTap: _wt, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { whileHover?: unknown; whileTap?: unknown }) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('@/app/hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => [{ current: null }, true],
}));

describe('ContactSection', () => {
  beforeEach(() => {
    render(<ContactSection />);
  });

  it('renders the section heading', () => {
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders the name input field', () => {
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('renders the email input field', () => {
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders the message textarea', () => {
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders the send button', () => {
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('updates name field on user input', () => {
    const input = screen.getByLabelText('Name');
    fireEvent.change(input, { target: { name: 'name', value: 'Ted Chait' } });
    expect((input as HTMLInputElement).value).toBe('Ted Chait');
  });

  it('updates email field on user input', () => {
    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { name: 'email', value: 'test@example.com' } });
    expect((input as HTMLInputElement).value).toBe('test@example.com');
  });

  it('updates message textarea on user input', () => {
    const textarea = screen.getByLabelText('Message');
    fireEvent.change(textarea, { target: { name: 'message', value: 'Hello!' } });
    expect((textarea as HTMLTextAreaElement).value).toBe('Hello!');
  });

  it('shows "Sending..." while submitting', async () => {
    global.fetch = vi.fn(() => new Promise(() => { /* pending */ })) as unknown as typeof fetch;

    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    if (!form) throw new Error('Form not found');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText('Sending...')).toBeInTheDocument();
    });
  });

  it('shows success message after successful submission', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ success: true }) })
    ) as unknown as typeof fetch;

    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    if (!form) throw new Error('Form not found');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
    });
  });

  it('shows error message after failed submission', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ success: false }) })
    ) as unknown as typeof fetch;

    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    if (!form) throw new Error('Form not found');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/sorry, there was an error/i)).toBeInTheDocument();
    });
  });

  it('renders LinkedIn link', () => {
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tchait/');
  });
});

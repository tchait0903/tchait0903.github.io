import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ted Chait | Full Stack Developer',
  description: 'Full Stack Developer specializing in .NET and Angular development',
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
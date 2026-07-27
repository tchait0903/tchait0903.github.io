import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Header from './components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://tchait.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ted Chait | Software Engineer',
    template: '%s | Ted Chait',
  },
  description:
    'Software Engineer specializing in full-stack development with expertise in .NET, Angular, TypeScript, and React. Based in Cleveland, OH.',
  keywords: [
    'Ted Chait',
    'Software Engineer',
    'Full Stack Developer',
    '.NET Developer',
    'Angular Developer',
    'TypeScript',
    'React',
    'Next.js',
    'Cleveland',
    'MRI Software',
  ],
  authors: [{ name: 'Ted Chait', url: baseUrl }],
  creator: 'Ted Chait',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Ted Chait | Software Engineer',
    title: 'Ted Chait | Software Engineer',
    description:
      'Software Engineer specializing in full-stack development with expertise in .NET, Angular, TypeScript, and React.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ted Chait | Software Engineer',
    description:
      'Software Engineer specializing in full-stack development with expertise in .NET, Angular, TypeScript, and React.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  alternates: {
    canonical: baseUrl,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
} 
export const metadata = {
  title: 'Ted | Full Stack Developer',
  description: 'Full Stack Developer specializing in .NET and Angular development',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/favicon-32x32.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

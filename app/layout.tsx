import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CYBROC — ALIFE 2025 Performance Livestream',
  description:
    "Join CYBROC's kinetic performance at ALIFE 2025 with synchronized livestreams and an in-depth look at the artwork.",
  openGraph: {
    title: 'CYBROC — ALIFE 2025 Performance Livestream',
    description:
      'Kinetic broccoli cyborgs take the ALIFE 2025 stage. Watch the performance across X, YouTube, Pump.Fun, TikTok, and Twitch.',
    url: 'https://cybroc.fun/',
    siteName: 'CYBROC',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630, alt: 'CYBROC livestream announcement' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CYBROC — ALIFE 2025 Performance Livestream',
    description:
      'The CYBROC kinetic ensemble streams across X, YouTube, Pump.Fun, TikTok, and Twitch for ALIFE 2025.',
    images: ['/opengraph-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}

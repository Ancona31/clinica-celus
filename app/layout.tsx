import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL } from '@/site.config';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + '/'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
  themeColor: '#f5f5f7',
  colorScheme: 'light',
};

// Raíz única con lang="es"; las páginas en maya marcan su contenido con lang="yua".
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

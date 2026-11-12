import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clínica Celus · Umán, Yucatán',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Bacira | Restaurante de cocina de fusión en Chamberí, Madrid',
  description: 'Bacira, restaurante en Chamberí (Madrid) con cocina de fusión y producto de temporada. Una experiencia gastronómica para detenerse, brindar y volver.',
  keywords: ['restaurante Bacira', 'restaurante Chamberí', 'restaurante Madrid', 'cocina de autor Madrid', 'cocina fusión Madrid', 'dónde comer en Chamberí'],
  openGraph: {
    title: 'Bacira | Cocina de fusión en Chamberí, Madrid',
    description: 'Producto de temporada, técnica mediterránea y sabores que viajan.',
    type: 'website',
    locale: 'es_ES'
  }
};

export const viewport: Viewport = {
  themeColor: '#F4EEE3',
  width: 'device-width',
  initialScale: 1
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Bacira',
  servesCuisine: ['Fusión', 'Mediterránea contemporánea'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chamberí',
    addressRegion: 'Madrid',
    addressCountry: 'ES'
  },
  telephone: '+34675811548'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://yuoabtejgibnziihqhah.supabase.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-bg text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:rounded z-50"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}

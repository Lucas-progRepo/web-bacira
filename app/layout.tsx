import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Bacira | Restaurante de cocina de fusión en Chamberí, Madrid',
  description:
    'Bacira, restaurante en Chamberí (Madrid) con cocina de fusión y producto de temporada. Una experiencia gastronómica cuidada hasta el último detalle.',
  keywords: [
    'restaurante Bacira',
    'restaurante Chamberí',
    'restaurante Madrid',
    'cocina de autor Madrid',
    'cocina fusión Madrid',
    'dónde comer en Chamberí',
    'mejor restaurante Chamberí'
  ],
  openGraph: {
    title: 'Bacira | Cocina de fusión en Chamberí',
    description:
      'Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.',
    locale: 'es_ES',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Bacira',
    servesCuisine: ['Fusión', 'Mediterránea contemporánea'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Chamberí',
      addressCountry: 'ES'
    },
    telephone: '+34675811548'
  };
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-bg text-ink font-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        {children}
      </body>
    </html>
  );
}

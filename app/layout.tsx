import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bacira | Restaurante de cocina de fusión en Chamberí, Madrid',
  description:
    'Bacira, restaurante en Chamberí (Madrid) con cocina de fusión y producto de temporada. Una mesa para detenerse, brindar y volver.',
  keywords: [
    'restaurante Bacira',
    'restaurante Chamberí',
    'restaurante Madrid',
    'cocina de autor Madrid',
    'cocina fusión Madrid',
    'reservar mesa Chamberí',
    'dónde comer en Chamberí',
  ],
  openGraph: {
    title: 'Bacira | Cocina de fusión en Chamberí, Madrid',
    description:
      'Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-bg text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Bacira',
              description: 'Restaurante de cocina de fusión en Chamberí, Madrid.',
              servesCuisine: ['Fusión', 'Mediterránea'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Madrid',
                addressRegion: 'Madrid',
                addressCountry: 'ES',
              },
              telephone: '+34675811548',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

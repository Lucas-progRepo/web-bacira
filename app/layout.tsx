import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import { MotionProvider } from './components/MotionProvider'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display'
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'Bacira | Restaurante de cocina de fusión en Chamberí, Madrid',
  description: 'Bacira, restaurante en Chamberí (Madrid) con cocina de fusión y producto de temporada. Una mesa para detenerse, brindar y volver.',
  keywords: ['restaurante Bacira', 'restaurante Chamberí', 'restaurante Madrid', 'cocina de autor Madrid', 'cocina fusión Madrid', 'dónde comer en Chamberí'],
  openGraph: {
    title: 'Bacira | Cocina de fusión en Chamberí',
    description: 'Producto de temporada, técnica mediterránea y sabores que viajan.',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://yuoabtejgibnziihqhah.supabase.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Bacira',
              servesCuisine: 'Cocina de fusión mediterránea',
              address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressRegion: 'Chamberí', addressCountry: 'ES' },
              telephone: '+34675811548'
            })
          }}
        />
      </head>
      <body className="bg-bg text-ink font-body antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:px-3 focus:py-2 focus:bg-accent focus:text-bg z-50">Saltar al contenido</a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}

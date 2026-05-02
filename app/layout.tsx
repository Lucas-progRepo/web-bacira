import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import { MotionProvider } from './components/MotionProvider'
import './globals.css'

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display'
})

const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'Bacira | Restaurante de cocina de fusión en Chamberí, Madrid',
  description: 'Bacira, restaurante en Chamberí (Madrid) con cocina de fusión y producto de temporada. Carta, historia y contacto en una experiencia gastronómica cuidada hasta el último detalle.',
  keywords: ['restaurante Bacira', 'restaurante Chamberí', 'restaurante Madrid', 'cocina de autor Madrid', 'cocina fusión Madrid', 'dónde comer en Chamberí'],
  openGraph: {
    title: 'Bacira | Cocina de fusión en Chamberí, Madrid',
    description: 'Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.',
    locale: 'es_ES',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Bacira',
    servesCuisine: ['Cocina de fusión', 'Mediterránea contemporánea'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Chamberí',
      addressCountry: 'ES'
    },
    telephone: '+34675811548'
  }

  return (
    <html lang="es" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://yuoabtejgibnziihqhah.supabase.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink font-body antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}

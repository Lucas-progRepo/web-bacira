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
    title: 'Bacira | Cocina de fusión en Chamberí, Madrid',
    description: 'Producto de temporada, técnica mediterránea y sabores que viajan.',
    locale: 'es_ES',
    type: 'website'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4EEE3'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://yuoabtejgibnziihqhah.supabase.co" />
      </head>
      <body className="bg-bg text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Bacira',
              servesCuisine: 'Cocina de fusión mediterránea',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chamberí',
                addressRegion: 'Madrid',
                addressCountry: 'ES'
              },
              telephone: '+34675811548'
            })
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}

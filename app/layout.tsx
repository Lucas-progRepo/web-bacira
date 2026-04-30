import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bacira | Restaurante de cocina de autor en Madrid',
  description: 'Bacira, restaurante en Chamberí (Madrid) con cocina de fusión y producto de temporada. Descubre nuestra carta y reserva mesa.',
  keywords: ['restaurante Bacira', 'restaurante Madrid', 'restaurante Chamberí', 'cocina de autor Madrid', 'reservar mesa Madrid', 'restaurante fusión Madrid'],
  openGraph: {
    title: 'Bacira | Restaurante de cocina de autor en Madrid',
    description: 'Cocina de fusión en el corazón de Chamberí. Reserva tu mesa.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-primary text-white antialiased">{children}</body>
    </html>
  );
}

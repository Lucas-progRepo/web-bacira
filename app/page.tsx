export default function Home() {
  const telefono = '+34911000000';
  const whatsapp = 'https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20mesa%20en%20Bacira';

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur border-b border-secondary/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="font-serif text-2xl text-secondary tracking-wide">Bacira</a>
          <div className="hidden md:flex items-center gap-8 text-cream text-sm">
            <a href="#carta" className="hover:text-secondary transition">Carta</a>
            <a href="#nosotros" className="hover:text-secondary transition">Nosotros</a>
            <a href="#galeria" className="hover:text-secondary transition">Galería</a>
            <a href="#contacto" className="hover:text-secondary transition">Contacto</a>
          </div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-cream px-4 py-2 text-sm rounded-sm transition">Reservar</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-primary text-cream pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 30% 40%, #C9A36A 0%, transparent 50%), radial-gradient(circle at 70% 60%, #8B2E2E 0%, transparent 50%)'}}></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center py-20">
          <p className="text-secondary tracking-[0.3em] text-sm mb-6 uppercase">Chamberí · Madrid</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">Bacira, cocina de fusión en el corazón de Madrid</h1>
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">Donde la tradición mediterránea se encuentra con los sabores del mundo. Una experiencia gastronómica única en Chamberí.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-cream px-8 py-4 rounded-sm transition font-medium">Reserva tu mesa</a>
            <a href="#carta" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-4 rounded-sm transition font-medium">Ver carta</a>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent tracking-[0.3em] text-sm mb-4 uppercase">Nuestra propuesta</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Sabor, técnica y producto</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {t: 'Cocina de autor', d: 'Platos creativos donde se fusionan tradiciones gastronómicas del Mediterráneo, Asia y Latinoamérica.'},
              {t: 'Producto de temporada', d: 'Trabajamos con pequeños productores y mercados locales para garantizar la máxima frescura.'},
              {t: 'Ambiente cuidado', d: 'Un espacio íntimo y acogedor en Chamberí, ideal para cenas especiales o comidas de negocio.'},
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 border border-secondary flex items-center justify-center">
                  <span className="font-serif text-2xl text-secondary">0{i+1}</span>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-primary">{item.t}</h3>
                <p className="text-primary/70 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carta destacada */}
      <section id="carta" className="py-24 bg-primary text-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary tracking-[0.3em] text-sm mb-4 uppercase">Carta</p>
            <h2 className="font-serif text-4xl md:text-5xl">Platos destacados</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              {n: 'Steak tartar de wagyu', d: 'Yema curada, mostaza antigua y crujiente de pan de masa madre.', p: '24€'},
              {n: 'Tiradito de corvina', d: 'Leche de tigre de ají amarillo, boniato y cilantro fresco.', p: '19€'},
              {n: 'Carrillera ibérica', d: 'Cocción a baja temperatura, parmentier trufado y reducción de Pedro Ximénez.', p: '22€'},
              {n: 'Bao de panceta', d: 'Glaseado de hoisin, encurtidos asiáticos y cebollino.', p: '14€'},
              {n: 'Bacalao confitado', d: 'Pil-pil ligero, espinacas salteadas y crujiente de garbanzo.', p: '23€'},
              {n: 'Coulant de chocolate', d: 'Helado artesano de vainilla bourbon y cacao puro.', p: '9€'},
            ].map((plato, i) => (
              <div key={i} className="border-b border-secondary/20 pb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl text-secondary">{plato.n}</h3>
                  <span className="text-secondary font-medium">{plato.p}</span>
                </div>
                <p className="text-cream/70 text-sm leading-relaxed">{plato.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent/90 text-cream px-8 py-4 rounded-sm transition font-medium">Reserva tu mesa</a>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent tracking-[0.3em] text-sm mb-4 uppercase">Galería</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Platos y ambiente</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'from-secondary/40 to-primary/60',
              'from-accent/40 to-primary/70',
              'from-primary/50 to-secondary/30',
              'from-secondary/30 to-accent/40',
              'from-accent/50 to-primary/60',
              'from-primary/60 to-secondary/40',
              'from-secondary/40 to-accent/30',
              'from-primary/70 to-accent/40',
            ].map((grad, i) => (
              <div key={i} className={`aspect-square bg-gradient-to-br ${grad} ${i % 3 === 0 ? 'md:row-span-2 md:aspect-[1/2]' : ''}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section id="nosotros" className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary via-primary/80 to-secondary/40"></div>
            <div>
              <p className="text-accent tracking-[0.3em] text-sm mb-4 uppercase">Nuestra historia</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">Pasión por la cocina, respeto por el producto</h2>
              <p className="text-primary/70 leading-relaxed mb-4">Bacira nació en 2014 con la idea de ofrecer una cocina honesta, creativa y sin etiquetas. Tres cocineros con trayectorias distintas se unieron para crear un espacio donde la fusión no es una moda, sino una forma de entender el oficio.</p>
              <p className="text-primary/70 leading-relaxed mb-8">Hoy, en pleno barrio de Chamberí, seguimos apostando por el producto de temporada, las técnicas precisas y un servicio cercano que hace que cada visita sea única.</p>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block border border-primary text-primary hover:bg-primary hover:text-cream px-6 py-3 rounded-sm transition font-medium">Visítanos</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto / Ubicación */}
      <section id="contacto" className="py-24 bg-primary text-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-secondary tracking-[0.3em] text-sm mb-4 uppercase">Visítanos</p>
            <h2 className="font-serif text-4xl md:text-5xl">Reserva tu mesa</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-secondary mb-6">Ubicación</h3>
              <p className="text-cream/80 mb-2">Calle de Castillo, 16</p>
              <p className="text-cream/80 mb-2">28010 Madrid · Chamberí</p>
              <p className="text-cream/80 mb-8">Metro Iglesia / Bilbao</p>
              <h3 className="font-serif text-2xl text-secondary mb-6">Horarios</h3>
              <ul className="space-y-2 text-cream/80">
                <li className="flex justify-between border-b border-secondary/20 pb-2"><span>Martes a Jueves</span><span>13:30 — 16:00 · 20:30 — 23:30</span></li>
                <li className="flex justify-between border-b border-secondary/20 pb-2"><span>Viernes y Sábado</span><span>13:30 — 16:30 · 20:30 — 00:00</span></li>
                <li className="flex justify-between border-b border-secondary/20 pb-2"><span>Domingo</span><span>13:30 — 16:30</span></li>
                <li className="flex justify-between"><span>Lunes</span><span>Cerrado</span></li>
              </ul>
            </div>
            <div className="bg-cream/5 border border-secondary/20 p-8 flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-secondary mb-6">¿Quieres reservar?</h3>
              <p className="text-cream/80 mb-8 leading-relaxed">Contacta con nosotros directamente por teléfono o WhatsApp. Te confirmamos la mesa en pocos minutos.</p>
              <div className="flex flex-col gap-4">
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-cream px-6 py-4 rounded-sm transition font-medium text-center">Reservar por WhatsApp</a>
                <a href={`tel:${telefono}`} className="border border-secondary text-secondary hover:bg-secondary hover:text-primary px-6 py-4 rounded-sm transition font-medium text-center">Llamar al restaurante</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-secondary/20 text-cream/60 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-secondary text-xl">Bacira</p>
          <p className="text-sm">© {new Date().getFullYear()} Bacira Restaurante · Madrid</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-secondary transition">Aviso legal</a>
            <a href="#" className="hover:text-secondary transition">Privacidad</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  const phone = '+34911000000';
  const whatsapp = 'https://wa.me/34911000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20en%20Bacira';

  return (
    <main className="bg-cream text-primary">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur text-cream border-b border-secondary/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="font-serif text-2xl tracking-wide text-secondary">Bacira</a>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#propuesta" className="hover:text-secondary transition">Propuesta</a>
            <a href="#carta" className="hover:text-secondary transition">Carta</a>
            <a href="#nosotros" className="hover:text-secondary transition">Nosotros</a>
            <a href="#contacto" className="hover:text-secondary transition">Contacto</a>
          </nav>
          <a href={whatsapp} className="bg-accent hover:bg-accent/90 text-cream px-4 py-2 text-sm uppercase tracking-wider transition">Reservar</a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center bg-primary text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0f1814]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C9A36A 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-xs mb-6">Chamberí · Madrid</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">Bacira, cocina de fusión en el corazón de Madrid</h1>
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10">Donde la tradición mediterránea se encuentra con los sabores del mundo. Una experiencia gastronómica única.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsapp} className="bg-accent hover:bg-accent/90 text-cream px-8 py-4 uppercase tracking-wider text-sm transition">Reserva tu mesa</a>
            <a href="#carta" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-4 uppercase tracking-wider text-sm transition">Ver la carta</a>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section id="propuesta" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Nuestra propuesta</p>
            <h2 className="font-serif text-3xl md:text-5xl">Sabores que cuentan historias</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: 'Producto de temporada', d: 'Trabajamos con pequeños productores locales y materia prima fresca de mercado.' },
              { t: 'Cocina de autor', d: 'Recetas que fusionan técnica mediterránea con influencias asiáticas y latinas.' },
              { t: 'Experiencia cuidada', d: 'Sala íntima, servicio atento y maridajes pensados para cada plato.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 border border-secondary flex items-center justify-center text-secondary font-serif text-2xl">{i + 1}</div>
                <h3 className="font-serif text-xl mb-3">{item.t}</h3>
                <p className="text-primary/70 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carta destacada */}
      <section id="carta" className="py-24 px-6 bg-primary text-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary uppercase tracking-[0.3em] text-xs mb-4">Carta</p>
            <h2 className="font-serif text-3xl md:text-5xl">Platos destacados</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { n: 'Tartar de atún rojo', d: 'Aguacate, soja trufada y huevas de salmón', p: '24€' },
              { n: 'Steak tartar Bacira', d: 'Solomillo de vaca, mostaza ahumada y yema curada', p: '22€' },
              { n: 'Bao de panceta ibérica', d: 'Glaseado de miso y kimchi casero', p: '8€' },
              { n: 'Arroz meloso de carabinero', d: 'Fumet de cabezas y alioli de azafrán', p: '28€' },
              { n: 'Cochinillo confitado', d: 'Cremoso de boniato y reducción de Pedro Ximénez', p: '26€' },
              { n: 'Coulant de chocolate', d: 'Helado de vainilla bourbon y crumble de cacao', p: '9€' },
            ].map((p, i) => (
              <div key={i} className="border-b border-secondary/20 pb-4">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="font-serif text-xl">{p.n}</h3>
                  <span className="text-secondary font-serif">{p.p}</span>
                </div>
                <p className="text-cream/60 text-sm">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-cream/60 mt-12 text-sm">Carta sujeta a disponibilidad y temporada · Consulta alérgenos</p>
        </div>
      </section>

      {/* Galería preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Galería</p>
            <h2 className="font-serif text-3xl md:text-5xl">El ambiente de Bacira</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'from-primary to-[#3a4a40]',
              'from-accent to-[#5a1f1f]',
              'from-secondary to-[#8a7045]',
              'from-[#3a4a40] to-primary',
              'from-secondary to-accent',
              'from-primary to-accent',
              'from-[#5a1f1f] to-primary',
              'from-[#8a7045] to-secondary',
            ].map((g, i) => (
              <div key={i} className={`aspect-square bg-gradient-to-br ${g}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section id="nosotros" className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-gradient-to-br from-primary to-[#3a4a40] relative">
            <div className="absolute inset-4 border border-secondary/40" />
          </div>
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Nuestra historia</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Una cocina sin fronteras</h2>
            <p className="text-primary/80 leading-relaxed mb-4">Bacira nació en 2014 con la voluntad de romper etiquetas. Tres cocineros, tres caminos y una misma pasión: ofrecer una cocina honesta, viajera y elaborada con producto de mercado.</p>
            <p className="text-primary/80 leading-relaxed mb-8">Diez años después seguimos en Chamberí, en una sala recogida donde cada plato se piensa para sorprender sin estridencias. Bienvenidos a casa.</p>
            <a href="#contacto" className="inline-block border-b-2 border-accent text-accent uppercase tracking-wider text-sm pb-1 hover:border-primary hover:text-primary transition">Conócenos en persona</a>
          </div>
        </div>
      </section>

      {/* Reservas CTA */}
      <section className="py-24 px-6 bg-primary text-cream text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-secondary uppercase tracking-[0.3em] text-xs mb-4">Reservas</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Reserva tu mesa en Bacira</h2>
          <p className="text-cream/80 mb-10 text-lg">Las mejores experiencias se viven en buena compañía. Llámanos o escríbenos por WhatsApp y te confirmamos al momento.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsapp} className="bg-accent hover:bg-accent/90 text-cream px-8 py-4 uppercase tracking-wider text-sm transition">WhatsApp</a>
            <a href={`tel:${phone}`} className="border border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-4 uppercase tracking-wider text-sm transition">911 000 000</a>
          </div>
        </div>
      </section>

      {/* Ubicación y horarios */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Visítanos</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Dónde encontrarnos</h2>
            <div className="space-y-6 text-primary/80">
              <div>
                <h3 className="font-serif text-lg text-primary mb-2">Dirección</h3>
                <p>Calle de Castillo, 16<br/>28010 Madrid · Chamberí</p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary mb-2">Horarios</h3>
                <p>Martes a Sábado<br/>13:30 – 16:00 · 20:30 – 23:30</p>
                <p className="mt-2 text-sm text-primary/60">Domingo y Lunes cerrado</p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary mb-2">Contacto</h3>
                <p>Tel: <a href={`tel:${phone}`} className="text-accent hover:underline">911 000 000</a></p>
                <p>Email: hola@bacira.es</p>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/10 flex items-center justify-center">
            <div className="text-center text-primary/40">
              <p className="font-serif text-2xl mb-2">Mapa</p>
              <p className="text-sm">Calle de Castillo, 16</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-cream/70 py-12 px-6 border-t border-secondary/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl text-secondary">Bacira</div>
          <p className="text-sm">© {new Date().getFullYear()} Bacira Restaurante · Madrid</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-secondary transition">Instagram</a>
            <a href="#" className="hover:text-secondary transition">Aviso legal</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

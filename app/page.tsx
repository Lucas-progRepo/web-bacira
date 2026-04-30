export default function Home() {
  const telefono = '+34910000000';
  const whatsapp = 'https://wa.me/34600000000?text=Hola%20Bacira%2C%20me%20gustar%C3%ADa%20reservar%20mesa';

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="text-2xl font-serif text-secondary tracking-wider">Bacira</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-cream">
            <a href="#carta" className="hover:text-secondary transition">Carta</a>
            <a href="#sobre" className="hover:text-secondary transition">Nosotros</a>
            <a href="#galeria" className="hover:text-secondary transition">Galería</a>
            <a href="#contacto" className="hover:text-secondary transition">Contacto</a>
          </div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-cream px-5 py-2 rounded-sm text-sm font-medium transition">
            Reservar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #C9A36A 0%, transparent 50%), radial-gradient(circle at 70% 70%, #8B2E2E 0%, transparent 50%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-6">Chamberí · Madrid</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-8 leading-tight">
            Cocina de fusión en el corazón de Madrid
          </h1>
          <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Donde la tradición mediterránea se encuentra con los sabores del mundo. Una experiencia gastronómica única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-cream px-8 py-4 rounded-sm font-medium transition tracking-wide">
              Reserva tu mesa
            </a>
            <a href="#carta" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-4 rounded-sm font-medium transition tracking-wide">
              Ver carta
            </a>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Nuestra esencia</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Una cocina que cuenta historias</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: 'Producto de temporada', d: 'Trabajamos con productores locales seleccionados para garantizar frescura y calidad en cada plato.' },
              { t: 'Cocina de autor', d: 'Recetas creativas que fusionan técnicas mediterráneas con influencias del mundo.' },
              { t: 'Experiencia única', d: 'Un ambiente cuidado en pleno Chamberí donde cada detalle suma a tu experiencia.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-secondary/20 border border-secondary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-secondary font-serif text-2xl">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">{item.t}</h3>
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
            <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-4">Selección</p>
            <h2 className="font-serif text-4xl md:text-5xl">Platos destacados</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { n: 'Tartar de atún rojo', d: 'Con aguacate, soja y aceite de sésamo', p: '24€' },
              { n: 'Croquetas de jamón ibérico', d: 'Receta de la casa, cremosas y tradicionales', p: '14€' },
              { n: 'Steak tartar', d: 'Solomillo de vaca madurado, yema curada', p: '22€' },
              { n: 'Bao de panceta', d: 'Cocción 12h, hoisin y cebolleta china', p: '12€' },
              { n: 'Lubina al curry verde', d: 'Verduras salteadas y arroz jazmín', p: '26€' },
              { n: 'Coulant de chocolate', d: 'Helado de vainilla bourbon', p: '9€' },
            ].map((p, i) => (
              <div key={i} className="border-b border-secondary/20 pb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl text-cream">{p.n}</h3>
                  <span className="text-secondary font-medium">{p.p}</span>
                </div>
                <p className="text-cream/60 text-sm">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent/90 text-cream px-8 py-4 rounded-sm font-medium transition tracking-wide">
              Reserva tu mesa
            </a>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Ambiente</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">El espacio Bacira</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'bg-primary',
              'bg-secondary/60',
              'bg-accent/70',
              'bg-primary/80',
              'bg-secondary/40',
              'bg-accent/50',
              'bg-primary/70',
              'bg-secondary/70',
            ].map((bg, i) => (
              <div key={i} className={`${bg} aspect-square hover:opacity-80 transition cursor-pointer`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section id="sobre" className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-primary aspect-[4/5] relative">
            <div className="absolute inset-4 border border-secondary/40"></div>
          </div>
          <div>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Nuestra historia</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">Más de una década de pasión por la cocina</h2>
            <p className="text-primary/80 leading-relaxed mb-6 text-lg">
              Bacira nace en Chamberí con una idea clara: ofrecer una cocina honesta, creativa y respetuosa con el producto. Tres chefs, tres trayectorias y una misma visión.
            </p>
            <p className="text-primary/70 leading-relaxed mb-8">
              Desde nuestra apertura, hemos cuidado cada detalle: desde la selección del productor hasta el servicio en sala. Porque comer en Bacira es vivir una experiencia completa.
            </p>
            <a href="#contacto" className="inline-block border border-primary text-primary hover:bg-primary hover:text-cream px-8 py-3 rounded-sm font-medium transition">
              Conócenos
            </a>
          </div>
        </div>
      </section>

      {/* Reservas CTA */}
      <section className="py-24 px-6 bg-accent text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">¿Listo para vivir la experiencia?</h2>
          <p className="text-cream/90 text-lg mb-10 leading-relaxed">
            Reserva tu mesa y déjate sorprender por nuestra cocina. Disponibilidad limitada cada noche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-cream text-accent hover:bg-cream/90 px-8 py-4 rounded-sm font-medium transition">
              Reservar por WhatsApp
            </a>
            <a href={`tel:${telefono}`} className="border border-cream text-cream hover:bg-cream hover:text-accent px-8 py-4 rounded-sm font-medium transition">
              Llamar al restaurante
            </a>
          </div>
        </div>
      </section>

      {/* Contacto / Ubicación */}
      <section id="contacto" className="py-24 px-6 bg-primary text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-4">Visítanos</p>
            <h2 className="font-serif text-4xl md:text-5xl">Dónde encontrarnos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-xl text-secondary mb-4">Dirección</h3>
              <p className="text-cream/80 leading-relaxed">Calle Castillo, 16<br/>28010 Madrid<br/>Barrio de Chamberí</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-secondary mb-4">Horarios</h3>
              <p className="text-cream/80 leading-relaxed">
                Martes a Sábado<br/>
                Comida: 13:30 - 16:00<br/>
                Cena: 20:30 - 23:30<br/>
                <span className="text-cream/50">Domingo y lunes cerrado</span>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-secondary mb-4">Contacto</h3>
              <p className="text-cream/80 leading-relaxed">
                <a href={`tel:${telefono}`} className="hover:text-secondary transition block">+34 910 000 000</a>
                <a href="mailto:hola@bacira.es" className="hover:text-secondary transition block">hola@bacira.es</a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition block mt-2">WhatsApp</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-secondary/20 py-8 px-6 text-center">
        <p className="text-cream/60 text-sm">
          © {new Date().getFullYear()} Bacira. Todos los derechos reservados. · Chamberí, Madrid
        </p>
      </footer>
    </main>
  );
}

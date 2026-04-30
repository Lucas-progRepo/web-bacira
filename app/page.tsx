export default function Home() {
  const phone = '+34 918 660 405';
  const phoneHref = 'tel:+34918660405';
  const whatsappHref = 'https://wa.me/34918660405?text=Hola%2C%20quiero%20reservar%20mesa%20en%20Bacira';

  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="font-serif text-2xl tracking-wider text-secondary">BACIRA</a>
          <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <li><a href="#carta" className="hover:text-secondary transition">Carta</a></li>
            <li><a href="#nosotros" className="hover:text-secondary transition">Nosotros</a></li>
            <li><a href="#galeria" className="hover:text-secondary transition">Galería</a></li>
            <li><a href="#contacto" className="hover:text-secondary transition">Contacto</a></li>
          </ul>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-white px-4 py-2 text-sm uppercase tracking-wider transition">Reservar</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-black"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #C9A36A 0%, transparent 50%), radial-gradient(circle at 70% 70%, #8B2E2E 0%, transparent 50%)' }}></div>
        <div className="relative max-w-4xl text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-6">Chamberí · Madrid</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">Bacira, cocina de fusión en el corazón de Madrid</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">Donde la tradición mediterránea se encuentra con los sabores del mundo. Una experiencia gastronómica única.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 uppercase tracking-wider transition">Reserva tu mesa</a>
            <a href="#carta" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-4 uppercase tracking-wider transition">Ver carta</a>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="py-24 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">Nuestra propuesta</p>
            <h2 className="font-serif text-4xl md:text-5xl">Sabores que cuentan historias</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-secondary flex items-center justify-center text-secondary text-2xl font-serif">01</div>
              <h3 className="font-serif text-xl mb-3">Cocina de autor</h3>
              <p className="text-white/70">Platos creativos donde fusionamos técnicas mediterráneas con influencias del mundo.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-secondary flex items-center justify-center text-secondary text-2xl font-serif">02</div>
              <h3 className="font-serif text-xl mb-3">Producto de temporada</h3>
              <p className="text-white/70">Trabajamos con pequeños productores locales y materias primas de máxima calidad.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-secondary flex items-center justify-center text-secondary text-2xl font-serif">03</div>
              <h3 className="font-serif text-xl mb-3">Experiencia única</h3>
              <p className="text-white/70">Un ambiente cuidado en pleno Chamberí, ideal para celebrar cualquier ocasión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA DESTACADA */}
      <section id="carta" className="py-24 px-6 bg-black/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">Carta</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Una selección de nuestros platos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { name: 'Tartar de atún rojo', desc: 'Con aguacate, mango y vinagreta de soja', price: '22€' },
              { name: 'Croquetas de jamón ibérico', desc: 'Cremosas, con jamón de bellota 5J', price: '14€' },
              { name: 'Steak tartar a la brasa', desc: 'Solomillo de vaca madurada y yema curada', price: '26€' },
              { name: 'Pulpo a la parrilla', desc: 'Con parmentier de patata ahumada', price: '24€' },
              { name: 'Lubina salvaje', desc: 'A la sal con verduras de huerta', price: '28€' },
              { name: 'Torrija caramelizada', desc: 'Con helado de vainilla bourbon', price: '9€' },
            ].map((item) => (
              <div key={item.name} className="border-b border-white/10 pb-5">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="font-serif text-xl">{item.name}</h3>
                  <span className="text-secondary">{item.price}</span>
                </div>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-sm mt-12">Carta sujeta a cambios según temporada y disponibilidad de producto.</p>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-24 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">Galería</p>
            <h2 className="font-serif text-4xl md:text-5xl">Platos y ambiente</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="aspect-square bg-gradient-to-br from-accent/40 to-primary"></div>
            <div className="aspect-square bg-gradient-to-br from-secondary/40 to-primary"></div>
            <div className="aspect-square bg-gradient-to-br from-primary to-accent/30"></div>
            <div className="aspect-square bg-gradient-to-br from-secondary/30 to-accent/30"></div>
            <div className="aspect-square bg-gradient-to-br from-accent/50 to-black"></div>
            <div className="aspect-square bg-gradient-to-br from-primary to-secondary/40"></div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="py-24 px-6 bg-black/40">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] bg-gradient-to-br from-secondary/30 via-primary to-accent/30"></div>
          <div>
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">Nuestra historia</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Pasión por la cocina, amor por el detalle</h2>
            <p className="text-white/80 mb-4">Desde 2014, Bacira es un referente en Chamberí. Un proyecto de tres chefs con experiencias en cocinas de prestigio que decidieron unir caminos para crear un espacio diferente.</p>
            <p className="text-white/80 mb-8">Defendemos una cocina honesta, técnica y emocional. Cada plato es un viaje pensado para sorprender al comensal sin perder de vista el sabor y el producto.</p>
            <a href="#contacto" className="inline-block border border-secondary text-secondary hover:bg-secondary hover:text-primary px-6 py-3 uppercase tracking-wider text-sm transition">Contáctanos</a>
          </div>
        </div>
      </section>

      {/* RESERVAS CTA */}
      <section className="py-24 px-6 bg-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Reserva tu mesa</h2>
          <p className="text-white/90 text-lg mb-10">Llámanos o escríbenos por WhatsApp para reservar. Atendemos tu solicitud al momento.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-white text-accent hover:bg-white/90 px-8 py-4 uppercase tracking-wider transition">WhatsApp</a>
            <a href={phoneHref} className="border border-white text-white hover:bg-white hover:text-accent px-8 py-4 uppercase tracking-wider transition">{phone}</a>
          </div>
        </div>
      </section>

      {/* UBICACIÓN Y HORARIOS */}
      <section id="contacto" className="py-24 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4">Visítanos</p>
            <h2 className="font-serif text-4xl md:text-5xl">Ubicación y horarios</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-secondary mb-4">Dirección</h3>
              <p className="text-white/80 mb-2">Calle Castillo, 16</p>
              <p className="text-white/80 mb-2">28010 Madrid · Chamberí</p>
              <p className="text-white/80 mb-8">Metro: Iglesia / Bilbao</p>
              <h3 className="font-serif text-2xl text-secondary mb-4">Horarios</h3>
              <ul className="text-white/80 space-y-2">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Martes a Sábado</span><span>13:30 — 16:00 / 20:30 — 23:30</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Domingo</span><span>13:30 — 16:00</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Lunes</span><span>Cerrado</span></li>
              </ul>
              <h3 className="font-serif text-2xl text-secondary mt-8 mb-4">Contacto</h3>
              <p className="text-white/80 mb-1"><a href={phoneHref} className="hover:text-secondary">{phone}</a></p>
              <p className="text-white/80"><a href="mailto:hola@bacira.es" className="hover:text-secondary">hola@bacira.es</a></p>
            </div>
            <div className="aspect-square md:aspect-auto bg-gradient-to-br from-secondary/20 via-primary to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-secondary font-serif text-2xl mb-2">Chamberí</p>
                <p className="text-white/60 text-sm">Calle Castillo, 16 — Madrid</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/60 py-10 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-secondary text-xl tracking-wider">BACIRA</p>
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Bacira Restaurante. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-secondary">Instagram</a>
            <a href="#" className="hover:text-secondary">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

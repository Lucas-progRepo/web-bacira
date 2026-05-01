export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line">
        <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#inicio" className="display text-xl font-semibold tracking-tight text-ink">
            Bacira<span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-inkSoft">
            <li><a href="#manifiesto" className="hover:text-ink transition">Manifiesto</a></li>
            <li><a href="#carta" className="hover:text-ink transition">Carta</a></li>
            <li><a href="#casa" className="hover:text-ink transition">La casa</a></li>
            <li><a href="#visitar" className="hover:text-ink transition">Visitar</a></li>
          </ul>
          <a
            href="#reservar"
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-bg px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            Reservar <span className="cta-arrow">→</span>
          </a>
        </nav>
      </header>

      {/* HERO FULLBLEED OVERLAY */}
      <section id="inicio" className="relative min-h-screen flex items-end overflow-hidden pt-16">
        {/* Background composition */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a1f15] via-[#5a2d1f] to-[#7A2E1F]" />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_40%,#E6CFAE_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_70%,#F4EEE3_0%,transparent_45%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A16]/80 via-transparent to-[#1C1A16]/30" />
        </div>

        {/* Circular rotating badge */}
        <div className="absolute top-28 right-6 lg:top-32 lg:right-12 w-28 h-28 lg:w-36 lg:h-36 z-10">
          <svg viewBox="0 0 200 200" className="w-full h-full spin-slow">
            <defs>
              <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <circle cx="100" cy="100" r="90" fill="none" stroke="#E6CFAE" strokeWidth="1" />
            <text fill="#E6CFAE" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '16px', letterSpacing: '0.2em' }}>
              <textPath href="#circlePath" startOffset="0">
                CHAMBERÍ · MADRID · DESDE 2013 · 
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="display text-accentSoft text-2xl lg:text-3xl">✦</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accentSoft" />
            <span className="eyebrow text-accentSoft">Restaurante · Cocina de fusión</span>
          </div>
          <h1 className="display text-[#F4EEE3] font-medium leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
            Cocina de <em className="serif-italic text-accentSoft">fusión</em>
            <br />en el corazón
            <br />de Chamberí.
          </h1>
          <p className="mt-8 max-w-xl text-base lg:text-lg text-[#F4EEE3]/80 leading-relaxed">
            Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#reservar" className="inline-flex items-center gap-2 bg-[#F4EEE3] text-ink px-8 py-4 rounded-full text-sm font-medium hover:bg-accentSoft transition-colors">
              Reservar mesa <span className="cta-arrow">→</span>
            </a>
            <a href="#carta" className="inline-flex items-center gap-2 border border-[#F4EEE3]/40 text-[#F4EEE3] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#F4EEE3]/10 transition-colors">
              Ver la carta
            </a>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section id="manifiesto" className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="h-rule mb-6" />
          <div className="flex items-baseline justify-between mb-16">
            <span className="eyebrow">01 — Manifiesto</span>
            <span className="display text-inkSoft/30 text-2xl">✦</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <span className="display text-7xl lg:text-9xl text-accent/20 leading-none">“</span>
            </div>
            <div className="lg:col-span-10">
              <p className="display text-ink font-medium leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                Cocinamos como viajamos: con curiosidad, sin prisa y con respeto por el producto. Cada plato es un cruce de caminos — una técnica del Mediterráneo, una especia que llegó de lejos, una verdura que estaba en su mejor momento esta semana.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-16 bg-accent" />
                <span className="eyebrow">La casa Bacira</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA DESTACADA */}
      <section id="carta" className="relative py-24 lg:py-32 bg-surface border-y border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="h-rule mb-6" />
          <div className="flex items-baseline justify-between mb-16">
            <span className="eyebrow">02 — La carta</span>
            <span className="eyebrow">De temporada</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="display font-medium leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Una carta que <em className="serif-italic text-accent">cambia</em> con las estaciones.
              </h2>
              <p className="mt-6 text-inkSoft leading-relaxed">
                Trabajamos con productores de cercanía y mercados de Madrid. La carta evoluciona según lo que el campo y el mar nos ofrecen cada semana.
              </p>
              <a href="#reservar" className="mt-8 inline-flex items-center gap-2 text-ink font-medium border-b border-ink pb-1 hover:border-accent hover:text-accent transition-colors">
                Reservar para probarla <span className="cta-arrow">→</span>
              </a>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-1">
                <div className="eyebrow mb-4">Selección de la casa</div>
                {[
                  { n: '01', t: 'Producto de temporada' },
                  { n: '02', t: 'Técnica mediterránea' },
                  { n: '03', t: 'Sabores que viajan' },
                  { n: '04', t: 'Mesa para detenerse' },
                ].map((item) => (
                  <div key={item.n} className="dish-row py-6 border-t border-line">
                    <div className="flex items-baseline justify-between gap-6">
                      <div className="flex items-baseline gap-6">
                        <span className="display text-inkSoft/50 text-sm">{item.n}</span>
                        <h3 className="display text-xl lg:text-2xl font-medium">{item.t}</h3>
                      </div>
                      <span className="display text-accent">✦</span>
                    </div>
                  </div>
                ))}
                <div className="h-rule mt-2" />
              </div>
              <p className="mt-8 text-sm text-inkSoft italic">
                * La carta completa se entrega en mesa y rota con la temporada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE / CASA con bloque accentSoft */}
      <section id="casa" className="relative py-24 lg:py-32 bg-accentSoft/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="h-rule mb-6" />
          <div className="flex items-baseline justify-between mb-16">
            <span className="eyebrow">03 — La casa</span>
            <span className="eyebrow">Chamberí</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/80 via-[#5a2d1f] to-[#3a1f15]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#E6CFAE_0%,transparent_55%)] opacity-50" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="display text-accentSoft text-6xl lg:text-7xl leading-none">B</span>
                <div className="mt-4 text-bg/80 text-sm tracking-widest uppercase">Casa Bacira</div>
              </div>
            </div>

            <div>
              <h2 className="display font-medium leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Una mesa para <em className="serif-italic text-accent">detenerse</em>, brindar y volver.
              </h2>
              <div className="mt-8 space-y-5 text-inkSoft leading-relaxed text-base lg:text-lg">
                <p>
                  Bacira nace en Chamberí con la idea sencilla de poner sobre la mesa lo mejor del producto y dejar que la técnica acompañe, no protagonice.
                </p>
                <p>
                  Buscamos un equilibrio entre la tradición mediterránea y los sabores que descubrimos viajando: el resultado es una cocina honesta, cercana y con personalidad.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {['Producto de temporada', 'Cocina de fusión', 'Mediterránea', 'Madrid'].map((tag) => (
                  <span key={tag} className="text-xs uppercase tracking-widest border border-ink/30 px-4 py-2 rounded-full text-ink">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVAS CTA */}
      <section id="reservar" className="relative py-24 lg:py-32 bg-ink text-bg overflow-hidden">
        <div className="absolute -top-20 -right-20 display text-[20rem] text-bg/5 leading-none select-none pointer-events-none">04</div>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="h-px bg-bg/20 mb-6" />
          <div className="flex items-baseline justify-between mb-16">
            <span className="eyebrow text-bg/60">04 — Reservar</span>
            <span className="eyebrow text-bg/60">Mesa en Bacira</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="display font-medium leading-[0.98] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)' }}>
                ¿Comemos <em className="serif-italic text-accentSoft">juntos</em>?
              </h2>
              <p className="mt-8 text-bg/70 max-w-lg text-lg leading-relaxed">
                Reserva por teléfono o WhatsApp. Te confirmamos disponibilidad lo antes posible.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <a href="tel:+34675811548" className="group flex items-center justify-between gap-4 border border-bg/20 hover:border-accentSoft hover:bg-accentSoft/5 transition-colors rounded-2xl p-6">
                <div>
                  <div className="eyebrow text-bg/50 mb-1">Teléfono</div>
                  <div className="display text-xl lg:text-2xl">+34 675 811 548</div>
                </div>
                <span className="cta-arrow text-accentSoft text-2xl">→</span>
              </a>
              <a href="https://wa.me/34675811548" target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 border border-bg/20 hover:border-accentSoft hover:bg-accentSoft/5 transition-colors rounded-2xl p-6">
                <div>
                  <div className="eyebrow text-bg/50 mb-1">WhatsApp</div>
                  <div className="display text-xl lg:text-2xl">Escríbenos directo</div>
                </div>
                <span className="cta-arrow text-accentSoft text-2xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN / VISITAR */}
      <section id="visitar" className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="h-rule mb-6" />
          <div className="flex items-baseline justify-between mb-16">
            <span className="eyebrow">05 — Visitar</span>
            <span className="eyebrow">Información</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <div className="eyebrow mb-4 text-accent">Dónde</div>
              <h3 className="display text-2xl lg:text-3xl font-medium leading-tight">
                Chamberí, Madrid.
              </h3>
              <p className="mt-4 text-inkSoft leading-relaxed">
                En pleno corazón de uno de los barrios más auténticos de la ciudad.
              </p>
            </div>

            <div>
              <div className="eyebrow mb-4 text-accent">Contacto</div>
              <ul className="space-y-3 text-ink">
                <li>
                  <a href="tel:+34675811548" className="display text-xl hover:text-accent transition-colors">
                    +34 675 811 548
                  </a>
                </li>
                <li className="text-inkSoft">[EMAIL_PENDIENTE]</li>
              </ul>
            </div>

            <div>
              <div className="eyebrow mb-4 text-accent">Reservas</div>
              <p className="text-inkSoft leading-relaxed mb-4">
                Recomendamos reservar con antelación, especialmente fines de semana.
              </p>
              <a href="#reservar" className="inline-flex items-center gap-2 text-ink font-medium border-b border-ink pb-1 hover:border-accent hover:text-accent transition-colors">
                Reservar mesa <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <span className="display text-accent text-3xl">✦</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-surface border-t border-line py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="display text-3xl font-semibold tracking-tight">
                Bacira<span className="text-accent">.</span>
              </div>
              <p className="mt-4 text-sm text-inkSoft max-w-xs leading-relaxed">
                Cocina de fusión en el corazón de Chamberí, Madrid.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-4">Navegar</div>
              <ul className="space-y-2 text-sm text-inkSoft">
                <li><a href="#manifiesto" className="hover:text-ink transition">Manifiesto</a></li>
                <li><a href="#carta" className="hover:text-ink transition">Carta</a></li>
                <li><a href="#casa" className="hover:text-ink transition">La casa</a></li>
                <li><a href="#reservar" className="hover:text-ink transition">Reservar</a></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-4">Contacto</div>
              <ul className="space-y-2 text-sm text-inkSoft">
                <li><a href="tel:+34675811548" className="hover:text-ink transition">+34 675 811 548</a></li>
                <li>Madrid · Chamberí</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4 text-xs text-inkSoft">
            <span>© {new Date().getFullYear()} Bacira. Todos los derechos reservados.</span>
            <span className="display italic">Hecho con producto y paciencia.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

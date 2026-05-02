import { Reveal } from './components/Reveal'
import { HeroTitle } from './components/HeroTitle'
import { MagneticCta } from './components/MagneticCta'

const entrantes = [
  { name: 'Tartar de atún rojo', desc: 'Yema curada, ponzu de yuzu y aguacate ahumado', price: '24' },
  { name: 'Steak tartar de vaca madurada', desc: 'Mostaza antigua, alcaparras y pan de masa madre', price: '22' },
  { name: 'Burrata de Andria', desc: 'Tomate de temporada, albahaca y aceite de oliva virgen', price: '18' }
]

const principales = [
  { name: 'Lubina salvaje a la brasa', desc: 'Crema de coliflor asada, alcaparras y limón confitado', price: '28' },
  { name: 'Cordero lechal 12 horas', desc: 'Cebolla caramelizada, jugo de tomillo y patata violeta', price: '26' },
  { name: 'Risotto de hongos de temporada', desc: 'Parmesano reggiano 24 meses y aceite de trufa negra', price: '22' }
]

export default function Page() {
  return (
    <main id="main">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#hero" className="font-display text-xl tracking-tight">Bacira</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { href: '#manifiesto', label: 'Casa' },
              { href: '#carta', label: 'Carta' },
              { href: '#sobre', label: 'Historia' },
              { href: '#contacto', label: 'Contacto' }
            ].map(l => (
              <a key={l.href} href={l.href} className="nav-link relative">
                <span>{l.label}</span>
              </a>
            ))}
          </nav>
          <a href="tel:+34675811548" className="text-sm px-4 py-2 bg-ink text-bg rounded-full transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]">Reservar</a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-40 relative">
          {/* Etiqueta circular rotada */}
          <div className="hidden md:flex absolute top-16 right-10 w-36 h-36 rounded-full bg-accentSoft items-center justify-center -rotate-[8deg] hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <span className="font-display italic text-sm text-ink text-center leading-tight">Chamberí<br/>· Madrid ·</span>
          </div>

          <div className="text-xs uppercase tracking-eyebrow text-inkSoft mb-8">— Restaurante · est. Madrid</div>

          <HeroTitle
            text="Cocina de fusión en el corazón de Chamberí"
            italicWord="fusión"
            className="font-display font-medium leading-[1.02] tracking-tight max-w-4xl"
          />
          <div style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }} className="sr-only">spacer</div>

          <Reveal delay={0.6}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-inkSoft">
              Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.
            </p>
          </Reveal>

          <Reveal delay={0.75}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticCta
                href="#carta"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg rounded-full text-sm font-medium"
              >
                Ver carta
                <span aria-hidden>→</span>
              </MagneticCta>
              <a href="tel:+34675811548" className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink/20 rounded-full text-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
                Reservar mesa
              </a>
            </div>
          </Reveal>

          {/* Placeholder editorial */}
          <Reveal delay={0.9}>
            <div className="mt-20 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-7 aspect-[4/3] rounded-sm overflow-hidden relative" style={{ background: 'radial-gradient(120% 80% at 30% 20%, #E6CFAE 0%, #EBE2D2 60%, #D8C9B0 100%)' }}>
                <div className="absolute bottom-6 left-6 text-xs uppercase tracking-eyebrow text-ink/70">Sala — luz cálida</div>
              </div>
              <div className="col-span-12 md:col-span-5 aspect-[3/4] rounded-sm relative" style={{ background: 'radial-gradient(100% 100% at 70% 30%, #C9A77A 0%, #E6CFAE 50%, #EBE2D2 100%)' }}>
                <div className="absolute bottom-6 left-6 text-xs uppercase tracking-eyebrow text-ink/70">Producto — temporada</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section id="manifiesto" className="relative bg-accentSoft border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-40 relative">
          <span aria-hidden className="absolute top-10 left-6 lg:left-10 font-display font-semibold text-base text-ink/30">01 — Manifiesto</span>
          <div className="absolute top-10 left-0 right-0 mx-6 lg:mx-10 h-px bg-ink/20" />

          <Reveal>
            <p aria-hidden className="font-display italic text-accent leading-none select-none" style={{ fontSize: 'clamp(4rem, 10vw, 7rem)' }}>“</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display font-medium leading-[1.15] tracking-tight max-w-4xl -mt-8 lg:-mt-12" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
              Cocinamos lo que la temporada nos pide, con respeto al producto y curiosidad por lo que viaja desde lejos. Una mesa de barrio con mirada amplia.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-16 bg-ink" />
              <span className="text-xs uppercase tracking-eyebrow text-inkSoft">El equipo de Bacira</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARTA DESTACADA */}
      <section id="carta" className="relative bg-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span aria-hidden className="absolute top-10 left-6 lg:left-10 font-display font-semibold text-base text-ink/30">02 — Carta</span>
          <div className="absolute top-10 left-0 right-0 mx-6 lg:mx-10 h-px bg-ink/20" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-12">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="text-xs uppercase tracking-eyebrow text-inkSoft mb-6">Selección de la casa</div>
                <h2 className="font-display font-medium leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                  Una carta breve, viva y de temporada.
                </h2>
                <p className="mt-6 text-inkSoft leading-relaxed">Cambiamos según el mercado y lo que cada semana nos sorprende. Estos son algunos pases que vuelven cuando el producto está en su mejor momento.</p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <div className="text-xs uppercase tracking-eyebrow text-inkSoft mb-6">Para empezar</div>
              </Reveal>
              <ul className="divide-y divide-line border-y border-line">
                {entrantes.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.04}>
                    <li className="menu-item group relative py-5">
                      <div className="flex items-baseline gap-4">
                        <h3 className="font-display font-medium text-xl">{p.name}</h3>
                        <span className="flex-1 border-b border-dotted border-ink/20 translate-y-[-4px]" aria-hidden />
                        <span className="font-display text-lg">{p.price}€</span>
                      </div>
                      <p className="mt-2 text-sm text-inkSoft max-w-2xl">{p.desc}</p>
                      <span aria-hidden className="absolute left-0 bottom-0 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    </li>
                  </Reveal>
                ))}
              </ul>

              <div className="flex justify-center my-10" aria-hidden>
                <span className="font-display italic text-accent text-2xl">✻</span>
              </div>

              <Reveal>
                <div className="text-xs uppercase tracking-eyebrow text-inkSoft mb-6">Principales</div>
              </Reveal>
              <ul className="divide-y divide-line border-y border-line">
                {principales.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.04}>
                    <li className="menu-item group relative py-5">
                      <div className="flex items-baseline gap-4">
                        <h3 className="font-display font-medium text-xl">{p.name}</h3>
                        <span className="flex-1 border-b border-dotted border-ink/20 translate-y-[-4px]" aria-hidden />
                        <span className="font-display text-lg">{p.price}€</span>
                      </div>
                      <p className="mt-2 text-sm text-inkSoft max-w-2xl">{p.desc}</p>
                      <span aria-hidden className="absolute left-0 bottom-0 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.1}>
                <p className="mt-8 text-sm text-inkSoft">Carta sujeta a disponibilidad de mercado. Consulte alérgenos al equipo de sala.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE PREVIEW */}
      <section id="sobre" className="relative bg-surface border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span aria-hidden className="absolute top-10 left-6 lg:left-10 font-display font-semibold text-base text-ink/30">03 — Casa</span>
          <div className="absolute top-10 left-0 right-0 mx-6 lg:mx-10 h-px bg-ink/20" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="aspect-[4/5] rounded-sm relative overflow-hidden" style={{ background: 'radial-gradient(110% 90% at 30% 30%, #C9A77A 0%, #E6CFAE 45%, #EBE2D2 100%)' }}>
                  <div className="absolute inset-0 mix-blend-multiply opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/></svg>")' }} />
                  <div className="absolute bottom-6 left-6 text-xs uppercase tracking-eyebrow text-ink/70">Sala Bacira</div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <div className="text-xs uppercase tracking-eyebrow text-inkSoft mb-6">Sobre nosotros</div>
                <h2 className="font-display font-medium leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                  Un proyecto pequeño, con la cabeza en el barrio y los pies en la cocina.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 space-y-5 text-inkSoft leading-relaxed">
                  <p>Bacira nace en Chamberí con una idea sencilla: cocinar bien, sin estridencias, mezclando técnica mediterránea con influencias que viajan desde Asia y Latinoamérica.</p>
                  <p>Trabajamos con productores cercanos siempre que el calendario lo permite, y cuidamos la sala como cuidamos el plato: sin prisa y con atención.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-3">
                  {['Producto de temporada', 'Cocina de fusión', 'Mesa de barrio'].map(t => (
                    <span key={t} className="text-xs uppercase tracking-eyebrow border border-line px-4 py-2 rounded-full">{t}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO / UBICACIÓN */}
      <section id="contacto" className="relative bg-bg border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span aria-hidden className="absolute top-10 left-6 lg:left-10 font-display font-semibold text-base text-ink/30">04 — Visítanos</span>
          <div className="absolute top-10 left-0 right-0 mx-6 lg:mx-10 h-px bg-ink/20" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-12">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="text-xs uppercase tracking-eyebrow text-inkSoft mb-6">Contacto</div>
                <h2 className="font-display font-medium leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                  Reserva tu mesa o pásate a saludar.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <dl className="mt-12 space-y-8">
                  <div className="flex items-baseline gap-6 border-b border-line pb-6">
                    <dt className="text-xs uppercase tracking-eyebrow text-inkSoft w-24 shrink-0">Teléfono</dt>
                    <dd><a href="tel:+34675811548" className="font-display text-xl hover:text-accent transition-colors duration-200">+34 675 81 15 48</a></dd>
                  </div>
                  <div className="flex items-baseline gap-6 border-b border-line pb-6">
                    <dt className="text-xs uppercase tracking-eyebrow text-inkSoft w-24 shrink-0">Dirección</dt>
                    <dd className="font-display text-xl">Chamberí, Madrid</dd>
                  </div>
                  <div className="flex items-baseline gap-6 border-b border-line pb-6">
                    <dt className="text-xs uppercase tracking-eyebrow text-inkSoft w-24 shrink-0">Email</dt>
                    <dd className="font-display text-xl text-inkSoft">[EMAIL_PENDIENTE]</dd>
                  </div>
                </dl>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="tel:+34675811548" className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg rounded-full text-sm font-medium transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
                    Llamar
                  </a>
                  <a href="https://wa.me/34675811548" className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink/20 rounded-full text-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
                    WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="text-xs uppercase tracking-eyebrow text-inkSoft mb-6">Horarios</div>
                <ul className="divide-y divide-line border-y border-line">
                  {[
                    ['Martes — Jueves', '13:30 — 16:00 · 20:30 — 23:30'],
                    ['Viernes — Sábado', '13:30 — 16:30 · 20:30 — 24:00'],
                    ['Domingo', '13:30 — 16:30'],
                    ['Lunes', 'Cerrado']
                  ].map(([d, h]) => (
                    <li key={d} className="py-4 flex items-baseline justify-between gap-6">
                      <span className="font-display text-lg">{d}</span>
                      <span className="text-sm text-inkSoft text-right">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-10 aspect-[4/3] rounded-sm relative overflow-hidden" style={{ background: 'radial-gradient(110% 90% at 70% 30%, #E6CFAE 0%, #EBE2D2 50%, #D8C9B0 100%)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display italic text-2xl text-ink/60">Chamberí · Madrid</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="font-display text-3xl mb-4">Bacira</div>
              <p className="text-sm text-bg/70 leading-relaxed max-w-xs">Cocina de fusión en Chamberí. Producto de temporada y técnica mediterránea.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-eyebrow text-bg/50 mb-4">Visítanos</div>
              <p className="text-sm text-bg/80 leading-relaxed">Chamberí, Madrid<br/>+34 675 81 15 48</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-eyebrow text-bg/50 mb-4">Navegación</div>
              <ul className="text-sm space-y-2 text-bg/80">
                <li><a href="#manifiesto" className="hover:text-bg transition-colors">Casa</a></li>
                <li><a href="#carta" className="hover:text-bg transition-colors">Carta</a></li>
                <li><a href="#sobre" className="hover:text-bg transition-colors">Historia</a></li>
                <li><a href="#contacto" className="hover:text-bg transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-bg/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-bg/50">
            <span>© {new Date().getFullYear()} Bacira. Todos los derechos reservados.</span>
            <span>Cocina de fusión · Chamberí · Madrid</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

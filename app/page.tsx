import { Reveal } from './components/Reveal'
import { HeroTitle } from './components/HeroTitle'
import { MagneticCta } from './components/MagneticCta'

const navLinks = [
  { href: '#manifiesto', label: 'Casa' },
  { href: '#carta', label: 'Carta' },
  { href: '#sobre', label: 'Historia' },
  { href: '#visitar', label: 'Visitar' }
]

const destacados = [
  { name: 'Tartar de atún rojo', desc: 'Aguacate, sésamo tostado, ponzu de cítricos', tag: 'Frío' },
  { name: 'Croquetas de jamón ibérico', desc: 'Bechamel cremosa, corteza fina, receta de la casa', tag: 'Para empezar' },
  { name: 'Ravioli de rabo de toro', desc: 'Pasta fresca, jugo reducido, parmesano curado', tag: 'Pasta' },
  { name: 'Arroz cremoso de carabinero', desc: 'Fondo marino, alioli suave de azafrán', tag: 'Arroz' }
]

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:px-3 focus:py-2 focus:bg-accent focus:text-bg focus:z-50 focus:rounded"
      >
        Saltar al contenido
      </a>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md border-b border-line">
        <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl tracking-tight" aria-label="Bacira, inicio">
            Bacira<span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm tracking-wide text-ink hover:text-accent transition-colors duration-200"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-left scale-x-0 [@media(hover:hover)and(pointer:fine)]:group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+34675811548"
            className="text-sm font-medium px-4 py-2 rounded-full border border-ink/20 hover:border-accent hover:text-accent transition-colors duration-200 active:scale-[0.97]"
          >
            Reservar
          </a>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg to-surface" />
          <div className="absolute inset-0 -z-10 opacity-[0.5] bg-[radial-gradient(ellipse_at_top_right,_rgba(230,207,174,0.6),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(122,46,31,0.08),_transparent_50%)]" />

          <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
            {/* Etiqueta circular rotada */}
            <div
              className="hidden md:flex absolute top-10 right-10 lg:right-12 w-32 h-32 rounded-full bg-accentSoft items-center justify-center -rotate-[8deg] [@media(hover:hover)and(pointer:fine)]:hover:rotate-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
              aria-hidden
            >
              <span className="font-display text-[11px] uppercase tracking-eyebrow text-ink text-center leading-tight">
                Chamberí<br />· Madrid ·
              </span>
            </div>

            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft mb-8">
                <span className="h-px w-10 bg-ink/40" />
                <span>Cocina de fusión · desde Chamberí</span>
              </div>
            </Reveal>

            <HeroTitle
              ariaLabel="Cocina de fusión en el corazón de Chamberí"
              className="font-display font-medium text-ink leading-[1.02] tracking-tight max-w-5xl"
              segments={[
                'Cocina de ',
                { text: 'fusión', italic: true, accent: true },
                ' en el corazón de Chamberí'
              ]}
            />

            <Reveal delay={0.5}>
              <p className="mt-8 max-w-xl text-inkSoft text-lg leading-relaxed">
                Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.
              </p>
            </Reveal>

            <Reveal delay={0.65}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticCta
                  href="#carta"
                  ariaLabel="Ver carta de Bacira"
                  className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
                >
                  Ver carta
                  <span aria-hidden>→</span>
                </MagneticCta>
                <a
                  href="tel:+34675811548"
                  className="inline-flex items-center gap-2 text-ink px-2 py-3.5 text-sm font-medium tracking-wide border-b border-ink/30 hover:border-accent hover:text-accent transition-colors duration-200 active:scale-[0.97]"
                >
                  Reservar mesa
                </a>
              </div>
            </Reveal>

            {/* Placeholder editorial */}
            <Reveal delay={0.8}>
              <div className="mt-20 lg:mt-24 grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-7 lg:col-span-8 aspect-[16/10] rounded-2xl bg-gradient-to-br from-accentSoft via-surface to-accentSoft/60 relative overflow-hidden" aria-hidden>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(122,46,31,0.18),_transparent_60%)]" />
                </div>
                <div className="col-span-5 lg:col-span-4 aspect-[3/4] rounded-2xl bg-gradient-to-tl from-ink/85 via-ink to-accent/40 relative overflow-hidden" aria-hidden>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(230,207,174,0.25),_transparent_55%)]" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MANIFIESTO */}
        <section id="manifiesto" className="relative bg-accentSoft/60 border-t border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
            <span className="absolute top-8 left-6 lg:left-10 font-display font-semibold text-ink/30 text-sm tracking-wide" aria-hidden>
              01 — Casa
            </span>

            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft mb-12 lg:mb-16">
                <span className="h-px w-10 bg-ink/40" />
                <span>Manifiesto</span>
              </div>
            </Reveal>

            <div className="relative max-w-4xl">
              <span
                className="absolute -top-12 -left-2 lg:-left-6 font-display italic text-accentSoft text-[8rem] lg:text-[10rem] leading-none select-none pointer-events-none"
                style={{ color: '#D9BE94' }}
                aria-hidden
              >
                “
              </span>
              <Reveal>
                <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-ink relative">
                  Cocinamos para la mesa que no tiene prisa. Mediterráneo en la base, mundo en los matices, <em className="font-display italic text-accent">temporada</em> en cada plato.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft">
                  <span className="font-display italic text-accent text-base">*</span>
                  <span>El equipo de Bacira</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CARTA DESTACADA */}
        <section id="carta" className="relative bg-bg border-t border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
            <span className="absolute top-8 left-6 lg:left-10 font-display font-semibold text-ink/30 text-sm tracking-wide" aria-hidden>
              02 — Carta
            </span>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <Reveal>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft mb-6">
                    <span className="h-px w-10 bg-ink/40" />
                    <span>Selección de temporada</span>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink max-w-3xl">
                    Platos que cuentan de dónde venimos y a dónde miramos.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.1}>
                <p className="text-inkSoft max-w-sm leading-relaxed">
                  Una pequeña selección. La carta cambia con el mercado y la estación; pregunta a sala por las novedades de la semana.
                </p>
              </Reveal>
            </div>

            <ul className="divide-y divide-line border-y border-line">
              {destacados.map((item, i) => (
                <li key={item.name}>
                  <Reveal delay={Math.min(i, 7) * 0.04}>
                    <article className="group relative py-7 md:py-8 grid grid-cols-12 gap-4 items-baseline">
                      <span className="col-span-2 md:col-span-1 font-display text-inkSoft/70 text-sm pt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="col-span-10 md:col-span-7">
                        <h3 className="font-display text-xl md:text-2xl text-ink">{item.name}</h3>
                        <p className="mt-2 text-inkSoft text-[15px] leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="col-span-12 md:col-span-4 md:text-right">
                        <span className="inline-block text-xs uppercase tracking-eyebrow text-inkSoft border border-line rounded-full px-3 py-1">
                          {item.tag}
                        </span>
                      </div>
                      <span className="absolute left-0 bottom-0 h-px w-full bg-accent origin-left scale-x-0 [@media(hover:hover)and(pointer:fine)]:group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" aria-hidden />
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <div className="mt-12 flex items-center justify-center">
                <span className="font-display italic text-accent text-2xl" aria-hidden>*</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 text-center text-sm text-inkSoft">
                Consulta alérgenos e intolerancias a nuestro equipo de sala.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SOBRE PREVIEW */}
        <section id="sobre" className="relative bg-surface border-t border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
            <span className="absolute top-8 left-6 lg:left-10 font-display font-semibold text-ink/30 text-sm tracking-wide" aria-hidden>
              03 — Historia
            </span>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-ink/85 via-ink to-accent/30 relative overflow-hidden" aria-hidden>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,_rgba(230,207,174,0.3),_transparent_55%)]" />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft mb-6">
                    <span className="h-px w-10 bg-ink/40" />
                    <span>Sobre Bacira</span>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="font-display text-4xl md:text-5xl leading-[1.08] tracking-tight text-ink">
                    Una casa abierta en Chamberí, con la mesa siempre puesta.
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-8 space-y-5 text-inkSoft text-[17px] leading-[1.75] max-w-prose">
                    <p>
                      Bacira nace del cruce de caminos: técnica mediterránea, despensa de mercado y una curiosidad sincera por las cocinas del mundo. Ese diálogo es el que sirve cada plato.
                    </p>
                    <p>
                      Trabajamos con productores cercanos, pescados de lonja y una bodega pensada para acompañar sin imponerse. Lo que llega a la mesa es la temporada, contada con calma.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.18}>
                  <div className="mt-10 flex flex-wrap gap-3">
                    {['Producto de temporada', 'Mercado local', 'Técnica mediterránea', 'Bodega seleccionada'].map((tag) => (
                      <span key={tag} className="text-xs uppercase tracking-eyebrow text-inkSoft border border-line rounded-full px-4 py-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN + HORARIOS */}
        <section id="visitar" className="relative bg-bg border-t border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
            <span className="absolute top-8 left-6 lg:left-10 font-display font-semibold text-ink/30 text-sm tracking-wide" aria-hidden>
              04 — Visitar
            </span>

            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft mb-12 lg:mb-16">
                <span className="h-px w-10 bg-ink/40" />
                <span>Encuéntranos</span>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <Reveal>
                  <h2 className="font-display text-4xl md:text-5xl leading-[1.08] tracking-tight text-ink">
                    Una mesa <em className="italic text-accent">a tu nombre</em> en Chamberí.
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="mt-10 space-y-6">
                    <div>
                      <div className="text-xs uppercase tracking-eyebrow text-inkSoft">Dirección</div>
                      <div className="mt-2 font-display text-xl text-ink">Chamberí · Madrid</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-eyebrow text-inkSoft">Reservas</div>
                      <a href="tel:+34675811548" className="mt-2 inline-block font-display text-xl text-ink hover:text-accent transition-colors duration-200">
                        +34 675 811 548
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.18}>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <MagneticCta
                      href="tel:+34675811548"
                      ariaLabel="Llamar a Bacira para reservar"
                      className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
                    >
                      Llamar para reservar
                      <span aria-hidden>→</span>
                    </MagneticCta>
                    <a
                      href="https://wa.me/34675811548"
                      className="inline-flex items-center gap-2 text-ink px-2 py-3.5 text-sm font-medium tracking-wide border-b border-ink/30 hover:border-accent hover:text-accent transition-colors duration-200 active:scale-[0.97]"
                    >
                      Escríbenos por WhatsApp
                    </a>
                  </div>
                </Reveal>
              </div>

              <div>
                <Reveal delay={0.05}>
                  <div className="rounded-2xl bg-surface border border-line p-8 md:p-10">
                    <div className="text-xs uppercase tracking-eyebrow text-inkSoft mb-6">Horarios</div>
                    <ul className="divide-y divide-line">
                      {[
                        { d: 'Lunes', h: 'Cerrado' },
                        { d: 'Martes — Jueves', h: '13:30 — 16:00 · 20:30 — 23:30' },
                        { d: 'Viernes — Sábado', h: '13:30 — 16:30 · 20:30 — 00:00' },
                        { d: 'Domingo', h: '13:30 — 16:30' }
                      ].map((row) => (
                        <li key={row.d} className="py-4 flex items-baseline justify-between gap-4">
                          <span className="font-display text-base text-ink">{row.d}</span>
                          <span className="text-sm text-inkSoft text-right">{row.h}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-xs text-inkSoft leading-relaxed">
                      Recomendamos reservar con antelación. Para grupos de más de 6 personas, contáctanos por teléfono.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-bg/90">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <div className="font-display text-3xl tracking-tight">
                Bacira<span className="text-accentSoft">.</span>
              </div>
              <p className="mt-4 text-bg/60 text-sm leading-relaxed max-w-xs">
                Cocina de fusión en Chamberí. Producto de temporada y técnica mediterránea.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-eyebrow text-bg/50 mb-4">Contacto</div>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+34675811548" className="hover:text-accentSoft transition-colors">+34 675 811 548</a></li>
                <li className="text-bg/70">Chamberí · Madrid</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-eyebrow text-bg/50 mb-4">Navegar</div>
              <ul className="space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="hover:text-accentSoft transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-bg/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-bg/50">
            <span>© {new Date().getFullYear()} Bacira. Todos los derechos reservados.</span>
            <span className="font-display italic">Una mesa para detenerse, brindar y volver.</span>
          </div>
        </div>
      </footer>
    </>
  )
}

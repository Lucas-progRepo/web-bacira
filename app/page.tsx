import { Reveal } from './components/Reveal'
import { HeroTitle } from './components/HeroTitle'
import { MagneticCta } from './components/MagneticCta'

const dishes = [
  { name: 'Steak tartar de wagyu', note: 'yema curada, mostaza antigua' },
  { name: 'Tartar de atún rojo', note: 'aguacate, ponzu de yuzu' },
  { name: 'Tomate de temporada', note: 'burrata, albahaca, aceite de Jaén' },
  { name: 'Pulpo a la brasa', note: 'parmentier ahumado, pimentón' },
  { name: 'Bao de panceta ibérica', note: 'kimchi, mayonesa de sésamo' },
  { name: 'Arroz de carabineros', note: 'fondo de marisco, alioli suave' }
]

const values = [
  { k: '01', t: 'Producto de temporada', d: 'Mercados cercanos, pequeños productores y un calendario que dicta la carta más que la moda.' },
  { k: '02', t: 'Fusión con raíz', d: 'Técnica mediterránea como base, viajes y memoria como condimento. Nada por capricho.' },
  { k: '03', t: 'Mesa hospitalaria', d: 'Servicio cuidado, tiempos pensados y una sala donde apetece quedarse a la sobremesa.' }
]

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:px-3 focus:py-2 focus:bg-accent focus:text-bg focus:rounded z-50">Saltar al contenido</a>

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur border-b border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">Bacira<span className="text-accent">.</span></a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[['#manifiesto', 'Manifiesto'], ['#carta', 'Carta'], ['#casa', 'Casa'], ['#visita', 'Visítanos']].map(([h, l]) => (
              <a key={h} href={h} className="nav-link relative py-1">{l}<span aria-hidden className="nav-underline" /></a>
            ))}
          </nav>
          <a href="tel:+34675811548" className="hidden md:inline-flex text-sm border border-ink/20 rounded-full px-4 py-2 hover:bg-ink hover:text-bg transition-colors duration-200">Reservar</a>
          <a href="tel:+34675811548" aria-label="Llamar al restaurante" className="md:hidden text-sm underline underline-offset-4">Reservar</a>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-surface" />
          <div aria-hidden className="absolute inset-0 hero-grain opacity-[0.06] mix-blend-multiply pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-24 lg:pb-32">
            {/* etiqueta circular */}
            <div className="hidden md:block absolute top-10 right-10 lg:right-14">
              <div className="circle-tag w-32 h-32 rounded-full bg-accentSoft flex items-center justify-center text-[10px] uppercase tracking-eyebrow text-ink/80 font-medium">
                <span>Chamberí · Madrid · Desde 2012 ·&nbsp;</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-ink/40" />
              <span className="text-xs uppercase tracking-eyebrow text-inkSoft">00 — Bienvenida</span>
            </div>

            <HeroTitle
              className="font-display font-500 text-ink leading-[1.02] tracking-tight max-w-5xl"
              words={[
                { text: 'Cocina' },
                { text: 'de' },
                { text: 'fusión', italic: true, accent: true },
                { text: 'en' },
                { text: 'el' },
                { text: 'corazón' },
                { text: 'de' },
                { text: 'Chamberí.' }
              ]}
            />
            <style>{''}</style>
            <div className="hero-h1-size" aria-hidden />

            <Reveal delay={0.6}>
              <p className="mt-10 max-w-xl text-lg text-inkSoft leading-relaxed">
                Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.
              </p>
            </Reveal>

            <Reveal delay={0.75}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticCta
                  href="#carta"
                  ariaLabel="Ver carta"
                  className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-4 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors duration-200 will-change-transform"
                >
                  Ver carta
                  <span aria-hidden>→</span>
                </MagneticCta>
                <a href="tel:+34675811548" className="inline-flex items-center gap-2 text-sm border border-ink/25 rounded-full px-6 py-4 hover:bg-ink hover:text-bg transition-colors duration-200">
                  Reservar mesa
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.9}>
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-line pt-8 max-w-3xl">
                {[
                  ['Cocina', 'Fusión mediterránea'],
                  ['Barrio', 'Chamberí, Madrid'],
                  ['Sala', 'Acogedora · 40 plazas'],
                  ['Mesa', 'Tarde y noche']
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-[10px] uppercase tracking-eyebrow text-inkSoft mb-1">{k}</div>
                    <div className="font-display text-base text-ink">{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* MANIFIESTO */}
        <section id="manifiesto" className="relative bg-accentSoft">
          <div className="absolute top-0 inset-x-0 h-px bg-ink/15" />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
            <span className="section-num">01</span>
            <div className="flex items-center gap-4 mb-16">
              <span className="h-px w-10 bg-ink/40" />
              <span className="text-xs uppercase tracking-eyebrow text-inkSoft">01 — Manifiesto</span>
            </div>

            <Reveal>
              <div className="relative max-w-4xl">
                <span aria-hidden className="absolute -top-12 -left-4 lg:-left-10 font-display text-[7rem] lg:text-[9rem] leading-none text-accent/30 select-none">“</span>
                <p className="relative font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-ink">
                  Cocinamos para quien busca una mesa con tiempo. Producto honesto, fuego respetuoso y la libertad de cruzar fronteras cuando el plato lo pide.
                </p>
                <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-eyebrow text-inkSoft">
                  <span className="h-px w-10 bg-ink/40" />
                  Equipo Bacira
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CARTA */}
        <section id="carta" className="relative bg-surface">
          <div className="absolute top-0 inset-x-0 h-px bg-ink/15" />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <span className="section-num">02</span>
            <div className="flex items-center gap-4 mb-12">
              <span className="h-px w-10 bg-ink/40" />
              <span className="text-xs uppercase tracking-eyebrow text-inkSoft">02 — Carta destacada</span>
            </div>

            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl">
                Una selección que cambia <span className="italic text-accent">con la estación</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-inkSoft leading-relaxed">
                Estos son algunos clásicos de la casa y propuestas vivas. La carta completa la encontrarás en sala, escrita a mano cada semana.
              </p>
            </Reveal>

            <ul className="mt-16 divide-y divide-line border-y border-line">
              {dishes.map((d, i) => (
                <li key={d.name}>
                  <Reveal delay={Math.min(i, 7) * 0.04}>
                    <a href="tel:+34675811548" className="dish group flex items-baseline justify-between gap-6 py-6 lg:py-7">
                      <div className="flex items-baseline gap-5 min-w-0">
                        <span className="font-display text-xs text-inkSoft tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-display text-xl md:text-2xl tracking-tight">{d.name}</span>
                      </div>
                      <span className="hidden md:block flex-1 mx-6 border-b border-dotted border-ink/20 translate-y-[-4px]" />
                      <span className="text-sm text-inkSoft italic shrink-0">{d.note}</span>
                      <span aria-hidden className="dish-underline" />
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex items-center justify-center">
              <span aria-hidden className="font-display italic text-2xl text-accent">✻</span>
            </div>

            <Reveal>
              <p className="mt-12 text-center text-sm text-inkSoft max-w-md mx-auto">
                Ofrecemos opciones vegetarianas y adaptamos platos a alérgenos. Pregunta al equipo de sala.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CASA / SOBRE */}
        <section id="casa" className="relative">
          <div className="absolute top-0 inset-x-0 h-px bg-ink/15" />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <span className="section-num">03</span>
            <div className="flex items-center gap-4 mb-12">
              <span className="h-px w-10 bg-ink/40" />
              <span className="text-xs uppercase tracking-eyebrow text-inkSoft">03 — La casa</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <Reveal>
                  <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
                    Una mesa <span className="italic">de barrio</span> con ambición serena.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-8 text-inkSoft leading-relaxed">
                    Bacira nació en Chamberí con una idea sencilla: cruzar técnicas y memorias en platos para compartir. Desde entonces, el equipo ha cambiado lo justo para mantenerse fiel a sí mismo y curioso a partes iguales.
                  </p>
                </Reveal>
                <Reveal delay={0.18}>
                  <p className="mt-4 text-inkSoft leading-relaxed">
                    No buscamos la última moda; buscamos el plato que apetece volver a pedir.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-accentSoft via-surface to-bg ring-1 ring-line">
                    <div aria-hidden className="absolute inset-0 hero-grain opacity-[0.08] mix-blend-multiply" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-eyebrow text-inkSoft">Sala</div>
                        <div className="font-display text-2xl text-ink mt-1">Luz cálida, madera, voces.</div>
                      </div>
                      <span className="font-display italic text-accent text-3xl">✻</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-10 lg:gap-12">
              {values.map((v, i) => (
                <Reveal key={v.k} delay={i * 0.08}>
                  <div className="group">
                    <div className="font-display text-xs text-accent tracking-eyebrow uppercase">{v.k}</div>
                    <h3 className="mt-3 font-display text-2xl tracking-tight">{v.t}</h3>
                    <p className="mt-3 text-inkSoft leading-relaxed text-[0.95rem]">{v.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VISITA */}
        <section id="visita" className="relative bg-accentSoft">
          <div className="absolute top-0 inset-x-0 h-px bg-ink/15" />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <span className="section-num">04</span>
            <div className="flex items-center gap-4 mb-12">
              <span className="h-px w-10 bg-ink/40" />
              <span className="text-xs uppercase tracking-eyebrow text-inkSoft">04 — Visítanos</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <Reveal>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                  Ven a comer.<br/><span className="italic">O a brindar.</span>
                </h2>
                <p className="mt-8 max-w-md text-inkSoft leading-relaxed">
                  Reservas por teléfono. Si llamas y no respondemos, estamos en sala — déjanos un mensaje y te devolvemos la llamada.
                </p>

                <div className="mt-10 space-y-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-eyebrow text-inkSoft mb-1">Reservas</div>
                    <a href="tel:+34675811548" className="font-display text-2xl md:text-3xl hover:text-accent transition-colors">+34 675 811 548</a>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-eyebrow text-inkSoft mb-1">Dónde</div>
                    <div className="font-display text-xl">Chamberí, Madrid</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-eyebrow text-inkSoft mb-1">Email</div>
                    <div className="font-display text-xl text-inkSoft">[EMAIL_PENDIENTE]</div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="tel:+34675811548" className="inline-flex items-center gap-2 bg-ink text-bg px-6 py-4 rounded-full text-sm font-medium hover:bg-accent transition-colors duration-200 active:scale-[0.97]">Llamar ahora</a>
                  <a href="https://wa.me/34675811548" className="inline-flex items-center gap-2 border border-ink/25 px-6 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-bg transition-colors duration-200 active:scale-[0.97]">WhatsApp</a>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="border-t border-ink/15 pt-10">
                  <div className="text-[10px] uppercase tracking-eyebrow text-inkSoft mb-6">Horarios</div>
                  <ul className="divide-y divide-ink/15">
                    {[
                      ['Lunes', 'Cerrado'],
                      ['Martes a Jueves', '13:30 — 16:00 · 20:30 — 23:30'],
                      ['Viernes y Sábado', '13:30 — 16:30 · 20:30 — 00:00'],
                      ['Domingo', '13:30 — 16:30']
                    ].map(([d, h]) => (
                      <li key={d} className="flex items-baseline justify-between py-4">
                        <span className="font-display text-lg">{d}</span>
                        <span className="text-sm text-inkSoft text-right">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-xs text-inkSoft leading-relaxed">Horarios orientativos. Confirma siempre la disponibilidad al hacer reserva.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <div className="font-display text-4xl md:text-5xl tracking-tight">Bacira<span className="text-accentSoft">.</span></div>
              <p className="mt-3 text-sm text-bg/60 max-w-sm">Cocina de fusión en Chamberí. Producto de temporada, mesa hospitalaria.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
              <a href="#manifiesto" className="hover:text-accentSoft transition-colors">Manifiesto</a>
              <a href="#carta" className="hover:text-accentSoft transition-colors">Carta</a>
              <a href="#casa" className="hover:text-accentSoft transition-colors">Casa</a>
              <a href="#visita" className="hover:text-accentSoft transition-colors">Visítanos</a>
              <a href="tel:+34675811548" className="hover:text-accentSoft transition-colors">+34 675 811 548</a>
              <a href="https://wa.me/34675811548" className="hover:text-accentSoft transition-colors">WhatsApp</a>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-bg/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-bg/50">
            <span>© {new Date().getFullYear()} Bacira. Todos los derechos reservados.</span>
            <span>Chamberí · Madrid</span>
          </div>
        </div>
      </footer>
    </>
  )
}

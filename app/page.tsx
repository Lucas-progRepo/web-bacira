import { Reveal } from './components/Reveal';

const nav = [
  { href: '#manifiesto', label: 'Casa' },
  { href: '#carta', label: 'Carta' },
  { href: '#sobre', label: 'Historia' },
  { href: '#visita', label: 'Visita' }
];

const destacados = [
  { name: 'Tartar de atún rojo', desc: 'Aguacate, sésamo tostado, ponzu de yuzu y crujiente de wonton.' },
  { name: 'Steak tartar a la brasa', desc: 'Solomillo de vaca madurada, yema curada y pan de masa madre.' },
  { name: 'Cochinillo confitado', desc: 'Lacado a baja temperatura, manzana asada y reducción de sidra.' },
  { name: 'Lubina al horno de leña', desc: 'Hinojo, cítricos del Mediterráneo y aceite de hierbas frescas.' }
];

const valores = [
  { k: 'Producto', v: 'Pequeños productores de cercanía y mercado de temporada.' },
  { k: 'Técnica', v: 'Bases mediterráneas con guiños asiáticos y sudamericanos.' },
  { k: 'Mesa', v: 'Espacios cálidos para conversaciones que merecen tiempo.' }
];

export default function Page() {
  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur border-b border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-600 tracking-tight">
            Bacira
            <span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm text-inkSoft hover:text-ink transition-colors duration-200 group"
              >
                {n.label}
                <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-emil hover-only" />
              </a>
            ))}
          </nav>
          <a
            href="tel:+34675811548"
            className="text-sm font-500 px-4 py-2 rounded-full border border-ink/80 hover:bg-ink hover:text-bg transition-colors duration-200 active:scale-[0.97] inline-block"
          >
            Reservar
          </a>
        </div>
      </header>

      <main id="main">
        {/* HERO FULLBLEED OVERLAY */}
        <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-surface via-bg to-accentSoft/60" />
            <div className="absolute inset-0 hero-grain opacity-[0.07]" />
            <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-accentSoft/50 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-accent/15 blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-24 pb-28 lg:pt-36 lg:pb-40 relative">
            <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft">
              <span className="h-px w-8 bg-ink" />
              <span>Restaurante · Desde 2013</span>
            </div>

            <h1 className="mt-8 font-display font-500 leading-[1.02] tracking-tight max-w-5xl" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
              <span className="hero-word" style={{ animationDelay: '0ms' }}>Cocina </span>
              <span className="hero-word" style={{ animationDelay: '90ms' }}>de </span>
              <span className="hero-word italic text-accent" style={{ animationDelay: '180ms' }}>fusión </span>
              <span className="hero-word" style={{ animationDelay: '270ms' }}>en </span>
              <span className="hero-word" style={{ animationDelay: '360ms' }}>el </span>
              <span className="hero-word" style={{ animationDelay: '450ms' }}>corazón </span>
              <span className="hero-word" style={{ animationDelay: '540ms' }}>de </span>
              <span className="hero-word" style={{ animationDelay: '630ms' }}>Chamberí.</span>
            </h1>

            <Reveal delay={700}>
              <p className="mt-8 max-w-xl text-inkSoft text-[1.0625rem] leading-[1.7]">
                Producto de temporada, técnica mediterránea y sabores que viajan.
                Una mesa para detenerse, brindar y volver.
              </p>
            </Reveal>

            <Reveal delay={820}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#carta"
                  className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 rounded-full text-sm font-500 transition-all duration-200 ease-out hover:bg-accent/90 hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  Ver carta
                  <span aria-hidden className="transition-transform duration-300 ease-out-emil group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="tel:+34675811548"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-500 border border-ink/80 transition-all duration-200 ease-out hover:bg-ink hover:text-bg hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  Llamar para reservar
                </a>
              </div>
            </Reveal>

            {/* Etiqueta circular rotada */}
            <div className="hidden md:block absolute top-28 right-6 lg:right-10 group">
              <div className="w-32 h-32 rounded-full bg-accentSoft text-ink flex items-center justify-center text-[0.7rem] uppercase tracking-eyebrow font-500 transition-transform duration-500 ease-out-emil rotate-[-8deg] group-hover:rotate-0 shadow-sm">
                <span className="text-center leading-tight">
                  Chamberí<br />·<br />Madrid
                </span>
              </div>
            </div>
          </div>

          {/* Marquee inferior */}
          <div className="border-y border-line bg-bg/40 overflow-hidden">
            <div className="flex gap-12 py-4 animate-marquee whitespace-nowrap text-sm text-inkSoft">
              {Array.from({ length: 2 }).flatMap((_, j) =>
                ['Producto de temporada', '·', 'Mediterráneo contemporáneo', '·', 'Brasa & horno de leña', '·', 'Vinos de autor', '·', 'Desde 2013', '·'].map((t, i) => (
                  <span key={`${j}-${i}`} className="font-display italic">{t}</span>
                ))
              )}
            </div>
          </div>
        </section>

        {/* MANIFIESTO */}
        <section id="manifiesto" className="relative py-24 lg:py-32">
          <span aria-hidden className="absolute top-8 left-6 lg:left-10 font-display font-600 text-inkSoft/30 text-sm tracking-wide">01 — Casa</span>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft mb-12">
              <span className="h-px w-8 bg-ink" />
              <span>Manifiesto</span>
            </div>
            <div className="relative">
              <span aria-hidden className="absolute -top-12 -left-4 font-display italic text-accentSoft pointer-events-none select-none" style={{ fontSize: '8rem', lineHeight: 1 }}>
                “
              </span>
              <Reveal>
                <p className="font-display font-400 leading-[1.15] tracking-tight max-w-4xl" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                  Cocinamos lo que el mercado nos cuenta cada mañana. Mediterráneo de raíz,
                  con la libertad de mirar a <em className="text-accent">Asia</em>, a <em className="text-accent">América</em>,
                  a cualquier mesa donde haya algo que aprender.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-eyebrow text-inkSoft">
                  <span className="h-px w-12 bg-accent" />
                  <span>El equipo de Bacira</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CARTA DESTACADA */}
        <section id="carta" className="relative py-24 lg:py-32 bg-surface border-t border-line">
          <span aria-hidden className="absolute top-8 left-6 lg:left-10 font-display font-600 text-inkSoft/30 text-sm tracking-wide">02 — Carta</span>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft">
              <span className="h-px w-8 bg-ink" />
              <span>Selección de la carta</span>
            </div>

            <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <Reveal>
                <h2 className="font-display font-500 leading-[1.05] tracking-tight max-w-2xl" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                  Platos que cambian con la <em className="text-accent">estación</em>.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-inkSoft max-w-sm">
                  Una muestra de lo que solemos servir. La carta evoluciona cada
                  pocas semanas con el producto que llega al obrador.
                </p>
              </Reveal>
            </div>

            <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {destacados.map((p, i) => (
                <li key={p.name}>
                  <Reveal delay={i * 60}>
                    <article className="group py-7 border-t border-line">
                      <div className="flex items-baseline justify-between gap-6">
                        <h3 className="font-display font-500 text-xl lg:text-2xl tracking-tight">{p.name}</h3>
                        <span className="font-display italic text-accent">*</span>
                      </div>
                      <p className="mt-3 text-inkSoft text-[0.95rem] leading-[1.65] max-w-md">{p.desc}</p>
                      <span className="mt-5 block h-px w-0 bg-accent origin-left transition-[width] duration-300 ease-out-emil group-hover:w-full" />
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex justify-center">
              <span aria-hidden className="font-display italic text-accent text-2xl">✻</span>
            </div>

            <Reveal delay={120}>
              <p className="mt-10 text-center text-inkSoft text-sm max-w-xl mx-auto">
                ¿Alergias o intolerancias? Cuéntanoslo al reservar y adaptamos el menú con gusto.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SOBRE / VALORES */}
        <section id="sobre" className="relative py-24 lg:py-32 bg-accentSoft/60">
          <span aria-hidden className="absolute top-8 left-6 lg:left-10 font-display font-600 text-ink/30 text-sm tracking-wide">03 — Historia</span>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft">
              <span className="h-px w-8 bg-ink" />
              <span>Sobre nosotros</span>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <Reveal>
                  <h2 className="font-display font-500 leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                    Una casa abierta a quien busca <em className="text-accent">tiempo de mesa</em>.
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="mt-8 text-inkSoft leading-[1.75] max-w-prose">
                    Bacira nació en Chamberí con la idea sencilla de cocinar bien y
                    recibir mejor. Lo que empezó como un proyecto entre amigos
                    cocineros se ha convertido en un lugar de referencia para los
                    que viven el barrio y para los que cruzan Madrid para sentarse
                    a nuestra mesa.
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-5 space-y-4">
                {valores.map((v, i) => (
                  <Reveal key={v.k} delay={i * 80}>
                    <div className="group p-6 rounded-2xl border border-line bg-bg/70 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-ink/30">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-display font-500 text-lg">{v.k}</h3>
                        <span className="text-xs uppercase tracking-eyebrow text-inkSoft">0{i + 1}</span>
                      </div>
                      <p className="mt-3 text-sm text-inkSoft leading-[1.65]">{v.v}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN / VISITA */}
        <section id="visita" className="relative py-24 lg:py-32 border-t border-line">
          <span aria-hidden className="absolute top-8 left-6 lg:left-10 font-display font-600 text-inkSoft/30 text-sm tracking-wide">04 — Visita</span>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-eyebrow text-inkSoft">
              <span className="h-px w-8 bg-ink" />
              <span>Encuéntranos</span>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <Reveal>
                <div>
                  <h2 className="font-display font-500 leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                    Reserva tu mesa.
                  </h2>
                  <p className="mt-6 text-inkSoft leading-[1.75] max-w-md">
                    Si quieres asegurar sitio, llámanos. Para grupos o eventos
                    privados, escríbenos y diseñamos un menú a medida.
                  </p>

                  <dl className="mt-10 space-y-6">
                    <div className="flex items-baseline gap-6 border-t border-line pt-6">
                      <dt className="text-xs uppercase tracking-eyebrow text-inkSoft w-24 shrink-0">Teléfono</dt>
                      <dd>
                        <a href="tel:+34675811548" className="font-display text-xl hover:text-accent transition-colors">
                          +34 675 81 15 48
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-baseline gap-6 border-t border-line pt-6">
                      <dt className="text-xs uppercase tracking-eyebrow text-inkSoft w-24 shrink-0">Dónde</dt>
                      <dd className="font-display text-xl">Chamberí, Madrid</dd>
                    </div>
                    <div className="flex items-baseline gap-6 border-t border-line pt-6">
                      <dt className="text-xs uppercase tracking-eyebrow text-inkSoft w-24 shrink-0">Email</dt>
                      <dd className="font-display text-xl text-inkSoft">[EMAIL_PENDIENTE]</dd>
                    </div>
                  </dl>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="tel:+34675811548"
                      className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 rounded-full text-sm font-500 transition-all duration-200 ease-out hover:bg-accent/90 hover:-translate-y-0.5 active:scale-[0.97]"
                    >
                      Llamar ahora
                    </a>
                    <a
                      href="https://wa.me/34675811548"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-500 border border-ink/80 transition-all duration-200 ease-out hover:bg-ink hover:text-bg hover:-translate-y-0.5 active:scale-[0.97]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="space-y-6">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-gradient-to-br from-accentSoft via-surface to-bg">
                    <div className="absolute inset-0 hero-grain opacity-[0.08]" />
                    <div className="absolute inset-0 flex items-end p-8">
                      <div>
                        <span className="text-xs uppercase tracking-eyebrow text-inkSoft">Casa Bacira</span>
                        <p className="mt-2 font-display italic text-2xl leading-tight max-w-xs">
                          Una mesa para detenerse, brindar y volver.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line p-6 bg-surface">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-lg font-500">Horarios</h3>
                      <span className="text-xs uppercase tracking-eyebrow text-inkSoft">Servicio</span>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm">
                      <li className="flex justify-between border-t border-line pt-3">
                        <span className="text-inkSoft">Comidas</span>
                        <span>13:30 — 16:00</span>
                      </li>
                      <li className="flex justify-between border-t border-line pt-3">
                        <span className="text-inkSoft">Cenas</span>
                        <span>20:30 — 23:30</span>
                      </li>
                      <li className="flex justify-between border-t border-line pt-3">
                        <span className="text-inkSoft">Descanso</span>
                        <span>Domingo noche</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-line bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div>
                <a href="#top" className="font-display text-3xl font-500 tracking-tight">
                  Bacira<span className="text-accent">.</span>
                </a>
                <p className="mt-3 text-inkSoft max-w-sm text-sm leading-[1.7]">
                  Cocina de fusión en Chamberí. Producto de temporada,
                  mediterráneo contemporáneo y mesa abierta.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-eyebrow text-inkSoft">Visita</span>
                  <ul className="mt-4 space-y-2">
                    <li>Chamberí, Madrid</li>
                    <li><a href="tel:+34675811548" className="hover:text-accent transition-colors">+34 675 81 15 48</a></li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-eyebrow text-inkSoft">Navega</span>
                  <ul className="mt-4 space-y-2">
                    {nav.map((n) => (
                      <li key={n.href}><a href={n.href} className="hover:text-accent transition-colors">{n.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-xs text-inkSoft">
              <span>© {new Date().getFullYear()} Bacira. Todos los derechos reservados.</span>
              <span className="font-display italic">Hecho con tiempo, en Madrid.</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

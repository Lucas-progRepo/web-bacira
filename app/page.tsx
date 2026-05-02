export default function Page() {
  return (
    <main className="relative">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
        <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="h-display text-2xl font-semibold tracking-tight">
            Bacira
            <span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#manifiesto" className="nav-link">Manifiesto</a></li>
            <li><a href="#carta" className="nav-link">Carta</a></li>
            <li><a href="#casa" className="nav-link">La casa</a></li>
            <li><a href="#visitar" className="nav-link">Visitar</a></li>
          </ul>
          <a
            href="tel:+34675811548"
            className="btn text-sm font-medium border border-ink/80 px-4 py-2 rounded-full hover:bg-ink hover:text-bg"
          >
            Reservar
          </a>
        </nav>
      </header>

      {/* HERO — fullbleed overlay */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 photo-placeholder" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/10 to-bg" aria-hidden="true" />

        {/* Rotated stamp */}
        <div className="absolute top-24 right-6 lg:top-28 lg:right-12 z-10">
          <div
            className="stamp w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-accentSoft border border-ink/30 flex items-center justify-center text-center px-4"
            style={{ transform: 'rotate(-8deg)' }}
          >
            <span className="h-display text-[0.72rem] lg:text-xs uppercase tracking-eyebrow leading-snug text-ink">
              Chamberí<br />Madrid<br /><span className="italic normal-case tracking-normal">desde siempre</span>
            </span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-28 pb-32 lg:pt-40 lg:pb-44">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-ink" />
            <span className="eyebrow">Restaurante · Chamberí</span>
          </div>

          <h1 className="h-display text-ink font-medium max-w-4xl" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
            Cocina de{' '}
            <span className="italic font-normal text-accent relative inline-block">
              fusión
              <svg className="absolute left-0 -bottom-2 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 6 Q 50 2, 100 5 T 198 4" stroke="#7A2E1F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            en el corazón de Chamberí
          </h1>

          <p className="mt-8 max-w-xl text-inkSoft text-[1.0625rem] leading-relaxed">
            Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#carta" className="btn bg-accent text-bg px-7 py-4 rounded-full text-sm font-medium hover:bg-accent/90">
              Ver carta
              <span aria-hidden>→</span>
            </a>
            <a href="tel:+34675811548" className="btn text-sm font-medium px-7 py-4 rounded-full border border-ink/40 hover:border-ink">
              Llamar +34 675 81 15 48
            </a>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section id="manifiesto" className="relative bg-surface border-y border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span className="absolute top-8 left-6 lg:left-10 h-display text-accent/30 text-sm font-semibold tracking-eyebrow">
            01 — Manifiesto
          </span>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mt-12">
            <div className="lg:col-span-5">
              <div className="section-rule mb-6" />
              <span className="eyebrow">La idea</span>
              <h2 className="h-display mt-6 font-medium" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Mediterráneo que viaja, mesa que se queda.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-line">
              <div className="relative">
                <span aria-hidden className="h-display absolute -top-10 -left-2 text-[6rem] leading-none text-accentSoft select-none">“</span>
                <p className="text-ink text-lg lg:text-xl leading-relaxed relative">
                  Cocinamos donde se cruzan los caminos: la huerta de aquí, las especias de allá, la técnica de siempre. Cada plato es una conversación entre lo cercano y lo lejano, servida sin solemnidad y con mucho oficio.
                </p>
              </div>
              <p className="mt-8 text-inkSoft leading-relaxed">
                Trabajamos con producto de temporada, proveedores de confianza y la convicción de que una buena mesa no se improvisa: se cuida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA — destacada */}
      <section id="carta" className="relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span className="absolute top-8 left-6 lg:left-10 h-display text-accent/30 text-sm font-semibold tracking-eyebrow">
            02 — Carta
          </span>

          <div className="section-rule mb-6 mt-12" />
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="eyebrow">Cocina de temporada</span>
              <h2 className="h-display mt-4 font-medium" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Una carta viva.
              </h2>
            </div>
            <p className="max-w-md text-inkSoft leading-relaxed">
              Cambia con la temporada y con lo que el mercado nos regala cada semana. Te contamos los ejes que la sostienen.
            </p>
          </div>

          <ul className="stagger mt-16 grid md:grid-cols-2 gap-x-12 gap-y-10">
            <li className="menu-item lift cursor-default">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="h-display text-2xl font-medium">Para empezar</h3>
                <span className="text-inkSoft text-sm font-medium">·</span>
              </div>
              <p className="mt-3 text-inkSoft leading-relaxed">
                Bocados ligeros, vegetales tratados con cuidado, encurtidos de la casa.
              </p>
            </li>
            <li className="menu-item lift cursor-default">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="h-display text-2xl font-medium">Pescados y mariscos</h3>
                <span className="text-inkSoft text-sm font-medium">·</span>
              </div>
              <p className="mt-3 text-inkSoft leading-relaxed">
                Lonja del día, técnicas mediterráneas y guiños asiáticos cuando el plato lo pide.
              </p>
            </li>
            <li className="menu-item lift cursor-default">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="h-display text-2xl font-medium">Carnes y guisos</h3>
                <span className="text-inkSoft text-sm font-medium">·</span>
              </div>
              <p className="mt-3 text-inkSoft leading-relaxed">
                Brasas, cocciones largas y especias para platos de cuchara y tenedor.
              </p>
            </li>
            <li className="menu-item lift cursor-default">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="h-display text-2xl font-medium">Postres</h3>
                <span className="text-inkSoft text-sm font-medium">·</span>
              </div>
              <p className="mt-3 text-inkSoft leading-relaxed">
                Dulces de temporada, repostería casera y un punto justo de atrevimiento.
              </p>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-4 my-16" aria-hidden="true">
            <span className="h-px w-16 bg-line" />
            <span className="h-display italic text-accent text-2xl">✻</span>
            <span className="h-px w-16 bg-line" />
          </div>

          <p className="text-center text-inkSoft max-w-xl mx-auto">
            La carta cambia con la temporada. Para conocerla al detalle, llámanos o pásate a vernos.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="tel:+34675811548" className="btn bg-ink text-bg px-7 py-4 rounded-full text-sm font-medium hover:bg-ink/90">
              Reservar mesa
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CASA — accentSoft block */}
      <section id="casa" className="relative bg-accentSoft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span className="absolute top-8 left-6 lg:left-10 h-display text-ink/30 text-sm font-semibold tracking-eyebrow">
            03 — La casa
          </span>

          <div className="section-rule mb-6 mt-12 bg-ink" />
          <span className="eyebrow">Sobre Bacira</span>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mt-8">
            <h2 className="lg:col-span-8 h-display font-medium" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
              Una casa de Chamberí donde el oficio se nota y la mesa se alarga.
            </h2>
            <p className="lg:col-span-4 text-ink/80 leading-relaxed">
              Bacira nace de la idea sencilla de cocinar bien y recibir mejor. Un equipo, unas brasas, una bodega cuidada y un barrio al que pertenecemos.
            </p>
          </div>
        </div>
      </section>

      {/* VISITAR — ubicación + horarios */}
      <section id="visitar" className="relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span className="absolute top-8 left-6 lg:left-10 h-display text-accent/30 text-sm font-semibold tracking-eyebrow">
            04 — Visitar
          </span>

          <div className="section-rule mb-6 mt-12" />
          <span className="eyebrow">Cómo llegar</span>
          <h2 className="h-display mt-4 font-medium" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
            Te esperamos.
          </h2>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-16">
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="eyebrow">Dónde</span>
                <p className="h-display text-2xl mt-3 font-medium">Chamberí, Madrid</p>
                <p className="mt-2 text-inkSoft">[DIR_PENDIENTE]</p>
              </div>

              <div>
                <span className="eyebrow">Contacto</span>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="tel:+34675811548" className="h-display text-2xl font-medium hover:text-accent transition-colors">
                      +34 675 81 15 48
                    </a>
                  </li>
                  <li className="text-inkSoft">[EMAIL_PENDIENTE]</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+34675811548" className="btn bg-accent text-bg px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90">
                  Llamar
                </a>
                <a
                  href="https://wa.me/34675811548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-6 py-3 rounded-full text-sm font-medium border border-ink/40 hover:border-ink"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-2xl photo-placeholder overflow-hidden border border-line">
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <span className="eyebrow text-ink/70">Barrio</span>
                    <p className="h-display text-3xl lg:text-5xl font-medium mt-2 text-ink">Chamberí</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-xs h-display tracking-eyebrow uppercase text-ink/60">
                  40.4378° N · 3.7038° W
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-6">
              <p className="h-display text-4xl lg:text-6xl font-medium leading-none">
                Bacira<span className="text-accentSoft">.</span>
              </p>
              <p className="mt-6 text-bg/70 max-w-md leading-relaxed">
                Cocina de fusión en Chamberí. Producto de temporada, técnica mediterránea y sabores que viajan.
              </p>
            </div>

            <div className="md:col-span-3">
              <span className="eyebrow text-bg/50">Carta</span>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#manifiesto" className="hover:text-accentSoft transition-colors">Manifiesto</a></li>
                <li><a href="#carta" className="hover:text-accentSoft transition-colors">Carta</a></li>
                <li><a href="#casa" className="hover:text-accentSoft transition-colors">La casa</a></li>
                <li><a href="#visitar" className="hover:text-accentSoft transition-colors">Visitar</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <span className="eyebrow text-bg/50">Contacto</span>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="tel:+34675811548" className="hover:text-accentSoft transition-colors">+34 675 81 15 48</a></li>
                <li className="text-bg/60">[EMAIL_PENDIENTE]</li>
                <li className="text-bg/60">Chamberí, Madrid</li>
              </ul>
            </div>
          </div>

          <div className="section-rule bg-bg/20 mt-16" />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-bg/50">
            <p>© {new Date().getFullYear()} Bacira. Todos los derechos reservados.</p>
            <p className="tracking-eyebrow uppercase">Hecho en Madrid</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

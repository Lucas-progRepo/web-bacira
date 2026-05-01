export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="#inicio" className="font-display text-2xl tracking-tight">Bacira</a>
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#manifiesto" className="hover:text-accent transition-colors">Casa</a>
            <a href="#carta" className="hover:text-accent transition-colors">Carta</a>
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#contacto" className="hover:text-accent transition-colors">Contacto</a>
          </div>
          <a href="tel:+34675811548" className="hidden md:inline-block text-sm uppercase tracking-widest border border-ink px-5 py-2.5 rounded-full hover:bg-ink hover:text-bg transition-all duration-300">Reservar</a>
        </div>
      </nav>

      {/* HERO FULLBLEED */}
      <section id="inicio" className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a1a12] via-[#7A2E1F] to-[#1C1A16]"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accentSoft via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>

        {/* Etiqueta circular rotada */}
        <div className="hidden lg:block absolute top-32 right-16 w-36 h-36 rounded-full border border-accentSoft/60 flex items-center justify-center -rotate-12">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_30s_linear_infinite]">
            <defs>
              <path id="circ" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text className="fill-accentSoft" style={{ fontSize: '15px', letterSpacing: '0.3em', fontFamily: 'var(--font-manrope)' }}>
              <textPath href="#circ">CHAMBERÍ · MADRID · BACIRA · </textPath>
            </text>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-20 lg:pb-32 pt-40 w-full">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-accentSoft"></span>
            <span className="text-accentSoft text-xs uppercase tracking-[0.28em]">Est. Madrid</span>
          </div>
          <h1 className="font-display font-normal text-bg leading-[0.98] tracking-tight" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
            Cocina de <em className="italic font-medium underline decoration-accentSoft decoration-2 underline-offset-[8px]">fusión</em><br />
            en el corazón<br />de Chamberí
          </h1>
          <p className="mt-10 max-w-xl text-bg/80 text-lg leading-relaxed">
            Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#carta" className="group bg-accentSoft text-ink px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-bg transition-all duration-300 inline-flex items-center gap-3">
              Ver carta
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="tel:+34675811548" className="border border-accentSoft/50 text-accentSoft px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-accentSoft hover:text-ink transition-all duration-300">
              Reservar mesa
            </a>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section id="manifiesto" className="relative py-24 lg:py-40 bg-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px flex-1 bg-ink"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-inkSoft">01 — Manifiesto</span>
          </div>

          <div className="relative">
            <span aria-hidden className="absolute -top-12 -left-4 lg:-left-12 font-display text-accent/30 select-none" style={{ fontSize: 'clamp(6rem, 14vw, 12rem)', lineHeight: 1 }}>
              &ldquo;
            </span>
            <p className="font-display font-normal text-ink leading-[1.15] tracking-tight relative z-10" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
              Cocinamos lo que la temporada nos regala. Sin atajos, sin etiquetas. Una mezcla honesta de raíces mediterráneas y horizontes lejanos, servida con la calma de un barrio que sabe vivir.
            </p>
          </div>

          <div className="flex justify-center mt-20 text-accent text-2xl font-display">✻</div>
        </div>
      </section>

      {/* CARTA DESTACADA */}
      <section id="carta" className="relative py-24 lg:py-40 bg-surface border-y border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px flex-1 bg-ink"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-inkSoft">02 — Carta</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="font-display font-normal leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Una carta que <em className="italic">viaja</em>, enraizada en el producto.
              </h2>
              <p className="mt-8 text-inkSoft leading-relaxed max-w-md">
                Cambiamos lo justo para seguir el calendario del mercado. Lo demás permanece: el respeto por la materia prima y el oficio.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-1">
              {[
                { n: '01', t: 'Entrantes', d: 'Para empezar despacio, compartir y abrir conversación.' },
                { n: '02', t: 'Principales', d: 'Pescados, carnes y vegetales tratados con técnica y temperatura justa.' },
                { n: '03', t: 'Postres', d: 'Caseros, no demasiado dulces, hechos para cerrar bien.' },
                { n: '04', t: 'Bebidas y vinos', d: 'Una selección viva, con espacio para descubrir.' }
              ].map((item) => (
                <div key={item.n} className="group border-t border-line py-7 grid grid-cols-12 gap-4 items-baseline cursor-default">
                  <span className="col-span-2 lg:col-span-1 text-inkSoft text-sm">{item.n}</span>
                  <div className="col-span-10 lg:col-span-11">
                    <h3 className="font-display text-2xl lg:text-3xl mb-2 group-hover:text-accent transition-colors duration-300">{item.t}</h3>
                    <p className="text-inkSoft text-sm lg:text-base leading-relaxed max-w-xl">{item.d}</p>
                    <div className="mt-4 h-px w-0 group-hover:w-full bg-accent transition-all duration-500"></div>
                  </div>
                </div>
              ))}
              <div className="border-t border-line"></div>
            </div>
          </div>

          <p className="mt-16 text-sm text-inkSoft text-center">
            La carta se ajusta a la temporada. Consulta disponibilidad y alérgenos llamando al restaurante.
          </p>
        </div>
      </section>

      {/* SOBRE — bloque accentSoft */}
      <section id="sobre" className="relative py-24 lg:py-40 bg-accentSoft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px flex-1 bg-ink"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-ink">03 — La casa</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-normal leading-[1.02] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)' }}>
                Una mesa<br />para <em className="italic">detenerse</em>.
              </h2>
              <div className="mt-10 space-y-6 text-ink/80 leading-relaxed max-w-md">
                <p>
                  Bacira nace en Chamberí con la idea sencilla de cocinar bien para gente que sabe comer. Un espacio cálido, sin ruido, donde el tiempo pasa de otra manera.
                </p>
                <p>
                  Trabajamos con productores cercanos y pescados de lonja. Lo que llega a la mesa es lo que el día permite: temporada, mercado y oficio.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/80 via-accent to-ink">
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-bg">
                <p className="font-display italic text-2xl lg:text-3xl leading-snug">
                  &ldquo;Cocinar es traducir un territorio en sabor.&rdquo;
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.28em] text-bg/70">— Bacira</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO / UBICACIÓN */}
      <section id="contacto" className="relative py-24 lg:py-40 bg-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px flex-1 bg-ink"></span>
            <span className="text-xs uppercase tracking-[0.28em] text-inkSoft">04 — Visitarnos</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-display font-normal leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Reserva, ven, vuelve.
              </h2>
              <p className="mt-6 text-inkSoft leading-relaxed max-w-md">
                Las reservas se gestionan por teléfono. Si llamas y no podemos atenderte, déjanos un mensaje por WhatsApp y te contestamos en cuanto podamos.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-inkSoft mb-3">Teléfono</p>
                  <a href="tel:+34675811548" className="font-display text-3xl lg:text-4xl hover:text-accent transition-colors">
                    +34 675 811 548
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-inkSoft mb-3">Ubicación</p>
                  <p className="font-display text-2xl lg:text-3xl">Chamberí · Madrid</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-inkSoft mb-3">Email</p>
                  <p className="font-display text-xl text-inkSoft">[EMAIL_PENDIENTE]</p>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a href="tel:+34675811548" className="bg-ink text-bg px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300">
                  Llamar
                </a>
                <a href="https://wa.me/34675811548" className="border border-ink text-ink px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-ink hover:text-bg transition-all duration-300">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-10 border border-line">
              <p className="text-xs uppercase tracking-[0.28em] text-inkSoft mb-8">Horarios</p>
              <div className="space-y-4 font-display text-lg">
                {[
                  ['Martes — Jueves', '13:30 — 16:00 · 20:30 — 23:00'],
                  ['Viernes — Sábado', '13:30 — 16:30 · 20:30 — 23:30'],
                  ['Domingo', '13:30 — 16:30'],
                  ['Lunes', 'Cerrado']
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between items-baseline gap-6 py-3 border-b border-line last:border-0">
                    <span>{d}</span>
                    <span className="text-inkSoft text-sm text-right">{h}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-inkSoft">
                * Horarios orientativos. Confirma siempre por teléfono antes de tu visita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-bg py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div>
              <p className="font-display text-3xl mb-4">Bacira</p>
              <p className="text-bg/60 text-sm leading-relaxed max-w-xs">
                Cocina de fusión en Chamberí. Producto, técnica y calma.
              </p>
            </div>
            <div className="text-sm space-y-2 text-bg/70">
              <p className="text-xs uppercase tracking-[0.28em] text-bg/50 mb-3">Navegación</p>
              <a href="#manifiesto" className="block hover:text-accentSoft transition-colors">Manifiesto</a>
              <a href="#carta" className="block hover:text-accentSoft transition-colors">Carta</a>
              <a href="#sobre" className="block hover:text-accentSoft transition-colors">La casa</a>
              <a href="#contacto" className="block hover:text-accentSoft transition-colors">Contacto</a>
            </div>
            <div className="text-sm space-y-2 text-bg/70">
              <p className="text-xs uppercase tracking-[0.28em] text-bg/50 mb-3">Contacto</p>
              <a href="tel:+34675811548" className="block hover:text-accentSoft transition-colors">+34 675 811 548</a>
              <p>Chamberí · Madrid</p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-bg/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-bg/50">
            <p>© {new Date().getFullYear()} Bacira. Todos los derechos reservados.</p>
            <p>Hecho con calma en Madrid.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

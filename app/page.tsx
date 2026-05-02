'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '-60px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const heroWords = 'Cocina de fusión en el corazón de Chamberí'.split(' ');

  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/80 border-b border-line">
        <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-600 tracking-tight">
            Bacira<span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#manifiesto" className="nav-link">Casa<span className="bar" /></a></li>
            <li><a href="#carta" className="nav-link">Carta<span className="bar" /></a></li>
            <li><a href="#sobre" className="nav-link">Sobre<span className="bar" /></a></li>
            <li><a href="#visitar" className="nav-link">Visitar<span className="bar" /></a></li>
          </ul>
          <a
            href="tel:+34675811548"
            className="btn hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.18em] border border-ink rounded-full hover:bg-ink hover:text-bg"
          >
            Reservar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-24 lg:pb-32 relative">
          <span className="section-num absolute top-6 lg:top-10 left-6 lg:left-10 text-sm">00 — Bacira</span>

          {/* Etiqueta circular */}
          <div
            className="tag-rotate hidden md:flex absolute top-12 right-6 lg:right-10 w-32 h-32 rounded-full bg-accentSoft items-center justify-center text-center"
            style={{ transform: 'rotate(-8deg)' }}
          >
            <span className="font-display text-xs uppercase tracking-[0.18em] text-ink leading-tight px-3">
              Chamberí<br />· Madrid ·
            </span>
          </div>

          <div className="pt-16 lg:pt-20 max-w-4xl">
            <p className="eyebrow mb-8">Restaurante · desde Madrid</p>
            <h1 className="font-display font-500 leading-[1.02] tracking-tight text-ink" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
              {heroWords.map((w, i) => (
                <span key={i} className="hero-word mr-[0.25em]" style={{ animationDelay: `${i * 60}ms` }}>
                  {w === 'fusión' ? <em className="font-display italic text-accent">{w}</em> : w}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-lg text-inkSoft leading-[1.7]">
              Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#carta" className="btn inline-flex items-center gap-3 bg-accent text-bg px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:bg-accent/90">
                Ver carta
                <span aria-hidden>→</span>
              </a>
              <a href="tel:+34675811548" className="btn inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] border border-ink text-ink hover:bg-ink hover:text-bg">
                Llamar
              </a>
            </div>
          </div>

          {/* Decoración inferior */}
          <div className="mt-20 lg:mt-28 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7 photo-placeholder rounded-[2px] aspect-[4/5] md:aspect-[16/10]" aria-hidden />
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
              <div className="photo-placeholder rounded-[2px] aspect-[4/5]" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section id="manifiesto" className="relative bg-accentSoft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span className="section-num absolute top-8 lg:top-12 left-6 lg:left-10 text-sm">01 — Manifiesto</span>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-10 bg-ink" />
            <span className="eyebrow">La casa</span>
          </div>

          <div className="relative max-w-4xl">
            <span
              aria-hidden
              className="absolute -top-10 -left-4 font-display text-ink/20"
              style={{ fontSize: '6rem', lineHeight: 1 }}
            >
              “
            </span>
            <p className="reveal font-display font-400 text-ink leading-[1.15] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
              Bacira es una mesa donde el Mediterráneo se cruza con sabores que vienen de lejos. Cocinamos con producto, con tiempo y con memoria — sin prisa por encajar en una sola tradición.
            </p>
          </div>
        </div>
      </section>

      {/* CARTA / FILOSOFÍA */}
      <section id="carta" className="relative bg-surface border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span className="section-num absolute top-8 lg:top-12 left-6 lg:left-10 text-sm">02 — Carta</span>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-ink" />
            <span className="eyebrow">Cocina</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display font-500 leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Una carta que <em className="italic text-accent">viaja</em> con la temporada.
              </h2>
              <p className="mt-6 text-inkSoft leading-[1.7] max-w-md">
                Cambia con el mercado y con lo que el día pide. La carta completa, con sus alérgenos y maridajes, se entrega en mesa.
              </p>
              <a
                href="tel:+34675811548"
                className="btn mt-10 inline-flex items-center gap-3 bg-ink text-bg px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:bg-ink/90"
              >
                Reservar mesa
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="lg:col-span-7">
              <ul className="space-y-8">
                {[
                  { eyebrow: 'Apertura', title: 'Pequeños bocados', desc: 'Snacks de temporada para abrir el apetito y la conversación.' },
                  { eyebrow: 'Para empezar', title: 'Entrantes', desc: 'Platos para compartir donde el Mediterráneo se mezcla con técnicas de otras costas.' },
                  { eyebrow: 'Centro de la mesa', title: 'Principales', desc: 'Pescado y carne de proximidad, cocinados con respeto al producto.' },
                  { eyebrow: 'Final', title: 'Postres', desc: 'Dulces honestos: fruta, masas, lácteos. Sin artificios.' }
                ].map((it, i) => (
                  <li key={i} className="reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                    <a href="#visitar" className="menu-item block group">
                      <p className="eyebrow mb-2">{it.eyebrow}</p>
                      <h3 className="font-display font-500 text-ink" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                        {it.title}
                      </h3>
                      <p className="mt-2 text-inkSoft leading-[1.7] max-w-xl">{it.desc}</p>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-12 text-center font-display italic text-accent text-2xl" aria-hidden>*</div>
              <p className="text-center text-xs text-inkSoft uppercase tracking-[0.18em] mt-2">
                Carta sujeta a temporada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span className="section-num absolute top-8 lg:top-12 left-6 lg:left-10 text-sm">03 — Casa</span>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-10 bg-ink" />
            <span className="eyebrow">Sobre Bacira</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h2 className="reveal font-display font-500 leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Un barrio, una mesa, una manera de <em className="italic text-accent">entender</em> la cocina.
              </h2>
              <div className="reveal mt-8 space-y-5 text-inkSoft leading-[1.7] max-w-xl">
                <p>
                  Bacira nació en Chamberí con la idea de que la fusión no es un truco, sino una forma de mirar. Cogemos lo mejor del Mediterráneo y lo dejamos conversar con técnicas y sabores de otros lugares.
                </p>
                <p>
                  Nos importa el producto, el ritmo del servicio y que cada plato tenga una razón para estar en la carta.
                </p>
              </div>

              <div className="reveal mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { k: 'Producto', v: 'De temporada' },
                  { k: 'Técnica', v: 'Mediterránea' },
                  { k: 'Espíritu', v: 'De fusión' }
                ].map((s, i) => (
                  <div key={i} className="border-t border-line pt-4">
                    <p className="eyebrow mb-2">{s.k}</p>
                    <p className="font-display text-ink">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="photo-placeholder aspect-[3/4] rounded-[2px] lift" aria-hidden />
              <div className="photo-placeholder aspect-[3/4] rounded-[2px] mt-12 lift" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* VISITAR */}
      <section id="visitar" className="relative bg-surface border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative">
          <span className="section-num absolute top-8 lg:top-12 left-6 lg:left-10 text-sm">04 — Visitar</span>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-10 bg-ink" />
            <span className="eyebrow">Reservar y encontrarnos</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="font-display font-500 leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Mesa para <em className="italic text-accent">esta noche</em>.
              </h2>
              <p className="mt-6 text-inkSoft leading-[1.7] max-w-lg">
                Recomendamos reservar con antelación. Para grupos, eventos o consultas especiales, escríbenos o llámanos directamente.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="tel:+34675811548" className="btn inline-flex items-center gap-3 bg-accent text-bg px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:bg-accent/90">
                  Llamar · 675 811 548
                </a>
                <a
                  href="https://wa.me/34675811548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] border border-ink text-ink hover:bg-ink hover:text-bg"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="border-t border-line pt-6">
                <p className="eyebrow mb-3">Dónde</p>
                <p className="font-display text-xl text-ink">Chamberí, Madrid</p>
                <p className="text-sm text-inkSoft mt-1">[DIR_PENDIENTE]</p>
              </div>
              <div className="border-t border-line pt-6">
                <p className="eyebrow mb-3">Contacto</p>
                <p className="font-display text-xl text-ink">+34 675 811 548</p>
                <p className="text-sm text-inkSoft mt-1">[EMAIL_PENDIENTE]</p>
              </div>
              <div className="border-t border-line pt-6">
                <p className="eyebrow mb-3">Horario</p>
                <p className="text-sm text-inkSoft">Consulta horarios actualizados al reservar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-bg/60">Bacira · Chamberí, Madrid</p>
              <p className="mt-4 font-display font-400 leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Una mesa para <em className="italic text-accentSoft">detenerse</em>, brindar y volver.
              </p>
            </div>
            <div className="md:col-span-5 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-bg/50 uppercase tracking-[0.18em] text-xs mb-3">Reservas</p>
                <a href="tel:+34675811548" className="block hover:text-accentSoft transition-colors">+34 675 811 548</a>
                <a href="https://wa.me/34675811548" className="block hover:text-accentSoft transition-colors mt-1">WhatsApp</a>
              </div>
              <div>
                <p className="text-bg/50 uppercase tracking-[0.18em] text-xs mb-3">Sitio</p>
                <a href="#manifiesto" className="block hover:text-accentSoft transition-colors">Casa</a>
                <a href="#carta" className="block hover:text-accentSoft transition-colors mt-1">Carta</a>
                <a href="#sobre" className="block hover:text-accentSoft transition-colors mt-1">Sobre</a>
                <a href="#visitar" className="block hover:text-accentSoft transition-colors mt-1">Visitar</a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-bg/10 flex flex-wrap items-center justify-between gap-4 text-xs text-bg/50">
            <p>© {new Date().getFullYear()} Bacira. Todos los derechos reservados.</p>
            <p className="font-display italic">Hecho en Madrid</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

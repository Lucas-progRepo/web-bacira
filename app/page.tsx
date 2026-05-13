'use client';

import { useEffect, useRef, useState } from 'react';

const PHONE = '+34675811548';
const PHONE_DISPLAY = '+34 675 81 15 48';
const WA_URL = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Bacira, me gustaría reservar una mesa.')}`;
const MAPS_QUERY = encodeURIComponent('Chamberí, Madrid');
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&output=embed`;

function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (reduced) {
      els.forEach(el => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '-40px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function HeroTitle() {
  const words = ['Cocina', 'de', '\u00a0', 'en', 'el', 'coraz\u00f3n', 'de', 'Chamber\u00ed'];
  return (
    <h1 className="font-display font-medium text-ink leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}>
      <span className="hero-word" style={{ animationDelay: '0ms' }}>Cocina </span>
      <span className="hero-word" style={{ animationDelay: '60ms' }}>de </span>
      <span className="hero-word italic text-accent" style={{ animationDelay: '120ms', fontFamily: 'var(--font-fraunces)' }}>fusión </span>
      <br />
      <span className="hero-word" style={{ animationDelay: '180ms' }}>en </span>
      <span className="hero-word" style={{ animationDelay: '240ms' }}>el </span>
      <span className="hero-word" style={{ animationDelay: '300ms' }}>corazón </span>
      <span className="hero-word" style={{ animationDelay: '360ms' }}>de </span>
      <span className="hero-word" style={{ animationDelay: '420ms' }}>Chamberí.</span>
    </h1>
  );
}

export default function Page() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-bg text-ink">
      {/* NAVBAR */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-line' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold text-lg tracking-tight">
            Bacira<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#manifiesto" className="nav-link text-inkSoft">Manifiesto</a>
            <a href="#carta" className="nav-link text-inkSoft">Carta</a>
            <a href="#sobre" className="nav-link text-inkSoft">Casa</a>
            <a href="#visitarnos" className="nav-link text-inkSoft">Visitarnos</a>
          </div>
          <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-primary bg-accent text-bg px-5 py-2.5 text-sm rounded-full font-medium">
            Escríbenos
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 photo-placeholder opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />
        </div>

        {/* Stamp */}
        <div className="absolute top-24 right-6 lg:right-10 hidden sm:block">
          <div className="stamp w-28 h-28 rounded-full bg-accentSoft border border-ink/15 flex items-center justify-center text-center">
            <div className="font-display text-[10px] tracking-[0.18em] uppercase text-ink leading-tight">
              Chamberí<br/>· Madrid ·
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-ink/40" />
            <span className="eyebrow">Restaurante · desde 2013</span>
          </div>

          <HeroTitle />

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-inkSoft font-body">
            Producto de temporada, técnica mediterránea y sabores que viajan. Una mesa para detenerse, brindar y volver.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#carta" className="btn btn-primary bg-accent text-bg px-7 py-3.5 rounded-full font-medium text-sm">
              Ver carta
            </a>
            <a href={`tel:${PHONE}`} className="btn btn-secondary border border-ink/20 text-ink px-7 py-3.5 rounded-full font-medium text-sm">
              Llamar al restaurante
            </a>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section id="manifiesto" className="relative py-24 lg:py-32 bg-accentSoft border-t border-line">
        <div className="absolute top-6 left-6 lg:left-10 section-number text-4xl lg:text-5xl">01 — Manifiesto</div>

        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-ink/20" />
            <span className="eyebrow">Lo que nos mueve</span>
          </div>

          <div className="relative">
            <span className="absolute -top-12 -left-4 font-display italic text-accent/60 select-none pointer-events-none" style={{ fontSize: '6rem', lineHeight: 1 }}>“</span>
            <p className="relative font-display text-ink leading-[1.15] tracking-tight reveal" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
              Cocinamos como quien escribe una <em className="text-accent">carta</em>: con la temporada al lado, las manos limpias y el tiempo justo. Sin prisa, sin postureo, con producto que se merece su nombre.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {[
              { t: 'Producto', d: 'De mercado, de temporada, con trazabilidad y conversación con el productor.' },
              { t: 'Técnica', d: 'Base mediterránea con guiños a Asia y Latinoamérica. Sin acrobacias innecesarias.' },
              { t: 'Mesa', d: 'Servicio cercano, vinos vivos, sobremesas que se alargan cuando deben.' }
            ].map((b, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="font-display font-semibold text-xl mb-2">{b.t}</div>
                <p className="text-inkSoft leading-relaxed text-[0.95rem]">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARTA DESTACADA */}
      <section id="carta" className="relative py-24 lg:py-32 bg-bg">
        <div className="absolute top-6 left-6 lg:left-10 section-number text-4xl lg:text-5xl">02 — Carta</div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-ink/20" />
            <span className="eyebrow">Una muestra de la casa</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display font-medium leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Una carta que <em className="text-accent">viaja</em> sin perder el norte.
              </h2>
              <p className="mt-6 text-inkSoft leading-relaxed max-w-md">
                Cambia con la temporada y con lo que el mercado nos cuenta cada semana. Si quieres conocer la carta completa del día, escríbenos.
              </p>
              <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-secondary inline-flex mt-8 border border-ink/20 px-6 py-3 rounded-full text-sm font-medium">
                Pedir carta del día →
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="text-center mb-8 font-display italic text-accent text-2xl">*</div>
              <ul className="space-y-6">
                {[
                  'Entrantes de temporada según mercado',
                  'Pescados y mariscos del día',
                  'Carnes maduradas a la brasa',
                  'Arroces y guisos de cuchara',
                  'Platos de inspiración asiática y latina',
                  'Postres de la casa'
                ].map((item, i) => (
                  <li key={i} className="menu-item reveal flex items-baseline justify-between gap-6 pb-3 border-b border-line" style={{ transitionDelay: `${i * 50}ms` }}>
                    <span className="font-display text-xl text-ink">{item}</span>
                    <span className="eyebrow text-inkSoft/60 whitespace-nowrap">Temporada</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-inkSoft/80 leading-relaxed">
                Información de alérgenos disponible bajo petición. Adaptamos platos en la medida de lo posible — pregúntanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE PREVIEW */}
      <section id="sobre" className="relative py-24 lg:py-32 bg-surface border-t border-line">
        <div className="absolute top-6 left-6 lg:left-10 section-number text-4xl lg:text-5xl">03 — La casa</div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-ink/20" />
            <span className="eyebrow">Sobre nosotros</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h2 className="font-display font-medium leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
                Un barrio, una <em className="text-accent">cocina abierta</em>, una idea clara.
              </h2>
              <div className="mt-8 space-y-5 text-inkSoft leading-relaxed max-w-prose">
                <p>
                  Bacira nació en Chamberí con la intención de ofrecer una cocina honesta donde el Mediterráneo y otros caminos se cruzan en el plato. Aquí no hay reglas estrictas: hay producto, manos buenas y respeto por lo que llega cada mañana.
                </p>
                <p>
                  Servimos a quien viene a comer bien, sin pretensiones. Y volvemos a abrir cada día con la misma intención.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="photo-placeholder aspect-[4/5] rounded-xl border border-line card-lift" />
                <div className="photo-placeholder aspect-[4/5] rounded-xl border border-line card-lift mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISITARNOS */}
      <section id="visitarnos" className="relative py-24 lg:py-32 bg-bg">
        <div className="absolute top-6 left-6 lg:left-10 section-number text-4xl lg:text-5xl">04 — Visitarnos</div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-ink/20" />
            <span className="eyebrow">Ubicación y horarios</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-8">
              <div className="reveal">
                <div className="eyebrow mb-3">Dónde estamos</div>
                <p className="font-display text-2xl leading-snug">Chamberí, Madrid</p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-secondary inline-flex mt-4 border border-ink/20 px-5 py-2.5 rounded-full text-sm font-medium"
                >
                  Cómo llegar →
                </a>
              </div>

              <div className="reveal" style={{ transitionDelay: '60ms' }}>
                <div className="eyebrow mb-3">Contacto</div>
                <div className="space-y-2 font-display text-xl">
                  <a href={`tel:${PHONE}`} className="nav-link block">{PHONE_DISPLAY}</a>
                  <a href={WA_URL} target="_blank" rel="noopener" className="nav-link block text-accent">WhatsApp</a>
                </div>
                <p className="mt-3 text-sm text-inkSoft">Email: pendiente de confirmar.</p>
              </div>

              <div className="reveal" style={{ transitionDelay: '120ms' }}>
                <div className="eyebrow mb-3">Horarios</div>
                <p className="text-inkSoft text-sm leading-relaxed">
                  Para conocer los horarios actualizados, escríbenos por WhatsApp o llámanos. Atendemos comidas y cenas.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="reveal rounded-2xl overflow-hidden border border-line">
                <iframe
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[420px]"
                  title="Ubicación de Bacira en Chamberí, Madrid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-bg/80 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="font-display text-3xl text-bg font-medium">
                Bacira<span className="text-accentSoft">.</span>
              </div>
              <p className="mt-3 text-sm text-bg/60 max-w-xs leading-relaxed">
                Cocina de fusión en Chamberí. Producto, técnica y mesa.
              </p>
            </div>
            <div>
              <div className="eyebrow text-bg/50 mb-4">Contacto</div>
              <ul className="space-y-2 text-sm">
                <li><a href={`tel:${PHONE}`} className="hover:text-bg">{PHONE_DISPLAY}</a></li>
                <li><a href={WA_URL} target="_blank" rel="noopener" className="hover:text-bg">WhatsApp</a></li>
                <li><a href={MAPS_LINK} target="_blank" rel="noopener" className="hover:text-bg">Chamberí, Madrid</a></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow text-bg/50 mb-4">Secciones</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#manifiesto" className="hover:text-bg">Manifiesto</a></li>
                <li><a href="#carta" className="hover:text-bg">Carta</a></li>
                <li><a href="#sobre" className="hover:text-bg">La casa</a></li>
                <li><a href="#visitarnos" className="hover:text-bg">Visitarnos</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-bg/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-bg/50">
            <div>© {new Date().getFullYear()} Bacira · Todos los derechos reservados</div>
            <div className="font-display italic">Chamberí · Madrid</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

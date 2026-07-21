import { Reveal } from './Reveal';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function Contact() {
  return (
    <section id="contact" className="relative bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-eyebrow">Contact</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink-900">
                Get in <span className="text-brand-600">touch</span>
              </h2>
              <p className="mt-5 text-ink-900/65 text-base leading-relaxed">
                Reach out to discuss requirements, request a quote, or explore
                a partnership. Our team responds within one business day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              <Reveal delay={100}>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 border border-brand-200 text-brand-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
                      <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-900/45 mb-1">
                      Office Address
                    </div>
                    <div className="text-ink-900/80">
                      A-22, 23, Capital Commercial Centre,
                      <br />
                      Near Ellisbridge, Ashram Road,
                      <br />
                      Ahmedabad, Gujarat, India — 380009
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 border border-brand-200 text-brand-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.34 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.54 2.8.66A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-900/45 mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+919825012389"
                      className="text-ink-900/80 hover:text-brand-600 transition-colors"
                    >
                      +91-9825012389
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 border border-brand-200 text-brand-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
                      <path d="M4 4h16v16H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-900/45 mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:guptrade07@gmail.com"
                      className="text-ink-900/80 hover:text-brand-600 transition-colors"
                    >
                      guptrade07@gmail.com
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 border border-brand-200 text-brand-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-900/45 mb-1">
                      Business Hours
                    </div>
                    <div className="text-ink-900/80">
                      Mon – Sat · 10:00 AM – 7:00 PM IST
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

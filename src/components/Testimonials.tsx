import { Reveal } from './Reveal';

const TESTIMONIALS = [
  {
    quote:
      'Gupta Traders has been a reliable partner for our infrastructure projects. Timely supply, fair pricing, and consistent quality every single time.',
    name: 'Rakesh Sharma',
    role: 'Project Manager',
    company: 'Skyline Constructions',
  },
  {
    quote:
      'Their team understands the demands of large-scale industrial supply. We have built a long-term relationship over multiple plant projects.',
    name: 'Anita Verma',
    role: 'Procurement Head',
    company: 'Veera Manufacturing',
  },
  {
    quote:
      'From HT switchgear to lighting systems, the coordination has been exceptional. A trusted vendor for our government contracts.',
    name: 'Sanjay Kulkarni',
    role: 'Civil Contractor',
    company: 'BharatBuild',
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-neutral-50 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-brand-100/80 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <Reveal>
            <span className="section-eyebrow">Testimonials</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink-900">
              What our clients
              <span className="text-brand-600"> say</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="card-surface relative rounded-2xl p-7 h-full flex flex-col">
                <svg
                  className="text-brand-500 mb-5"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.4 7.6C8.1 8.5 7 9.8 7 11.5c0 1 .6 1.8 1.6 1.8.9 0 1.7-.7 1.7-1.7 0-.4-.1-.8-.4-1.2.4-1 1.4-1.7 2.4-2l-.4-1.4c-.9.2-1.7.4-2.5.6Zm7.5 0c-1.3.9-2.4 2.2-2.4 3.9 0 1 .6 1.8 1.6 1.8.9 0 1.7-.7 1.7-1.7 0-.4-.1-.8-.4-1.2.4-1 1.4-1.7 2.4-2l-.4-1.4c-.9.2-1.7.4-2.5.6Z" />
                </svg>
                <blockquote className="text-ink-900/80 text-base leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-5 border-t border-ink-900/8">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-semibold text-sm">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-ink-900/55">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

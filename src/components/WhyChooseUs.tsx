import { Reveal } from './Reveal';

const REASONS = [
  {
    title: 'Reliable Supply Chain',
    desc: 'Consistent product availability and dependable delivery timelines.',
  },
  {
    title: 'Quality Products',
    desc: 'We work with trusted brands and verified industrial-grade materials.',
  },
  {
    title: 'Industry Experience',
    desc: 'Years of practical experience serving commercial and industrial sectors.',
  },
  {
    title: 'Professional Support',
    desc: 'Responsive coordination and customer-first execution.',
  },
  {
    title: 'Competitive Pricing',
    desc: 'Value-driven solutions without compromising on quality.',
  },
  {
    title: 'Long-Term Partnerships',
    desc: 'Focused on building lasting relationships with clients and contractors.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-neutral-50 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light [background-size:48px_48px] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <Reveal>
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink-900">
              Why businesses
              <span className="text-brand-600"> trust Gupta Traders</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="group relative border-t border-ink-900/10 py-7 pr-6 transition-colors hover:border-brand-500/50">
                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl font-bold text-brand-600 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1.5 text-ink-900">
                      {r.title}
                    </h3>
                    <p className="text-ink-900/60 text-sm leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
                <span className="absolute -top-px left-0 h-px w-0 bg-brand-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

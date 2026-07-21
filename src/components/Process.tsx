import { Reveal } from './Reveal';

const STEPS = [
  {
    title: 'Requirement Assessment',
    desc: 'Understanding project requirements, technical specifications, and objectives to develop the most effective solution.',
  },
  {
    title: 'Solution Planning & Resource Management',
    desc: 'Planning the right combination of products, services, and execution strategies to meet project goals efficiently.',
  },
  {
    title: 'Supply & Project Execution',
    desc: 'Managing procurement, delivery, installation, and on-site coordination to ensure smooth and timely project completion.',
  },
  {
    title: 'Quality Assurance & Ongoing Support',
    desc: 'Maintaining high quality standards and providing reliable support to ensure long-term project success.',
  },
];

export function Process() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-light [background-size:48px_48px] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <Reveal>
            <span className="section-eyebrow">Our Process</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink-900">
              How we deliver
              <span className="text-brand-600"> with precision</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300" />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative">
                <div className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-brand-200 mb-5 shadow-card">
                  <span className="font-display text-2xl font-bold text-brand-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-ink-900">
                  {step.title}
                </h3>
                <p className="text-ink-900/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

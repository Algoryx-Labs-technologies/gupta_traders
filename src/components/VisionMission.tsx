import { Reveal } from './Reveal';

const MISSION = [
  'Deliver high-quality electrical and industrial solutions',
  'Maintain reliability and timely execution',
  'Build long-term client partnerships',
  "Support India's infrastructure growth",
  'Continuously improve operational excellence',
];

export function VisionMission() {
  return (
    <section className="relative bg-neutral-50 py-24 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-brand-100/60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="card-surface relative rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 border border-brand-200 text-brand-600">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  </svg>
                </span>
                <span className="section-eyebrow !mt-0">Our Vision</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-snug text-ink-900">
                To become a leading{' '}
                <span className="text-brand-600">
                  infrastructure and industrial solutions partner
                </span>{' '}
                known for quality, reliability, and long-term customer trust.
              </h3>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-surface relative rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 border border-brand-200 text-brand-600">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </span>
                <span className="section-eyebrow !mt-0">Our Mission</span>
              </div>
              <ul className="space-y-3.5">
                {MISSION.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-ink-900/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

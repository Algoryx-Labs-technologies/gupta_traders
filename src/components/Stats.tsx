import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 70, suffix: '+ CR', label: 'Projects Completed till Date' },
  { value: 30, suffix: '+ CR', label: 'In Hand Ongoing Projects' },
  { value: 200, suffix: '+ CR', label: 'Company in Next 3 Years' },
  { value: 13, suffix: '+', label: 'Years of Work Experience' },
  { value: 20, suffix: '+', label: 'Product Categories' },
];

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative bg-white py-20 md:py-24 border-y border-ink-900/8">
      <div className="absolute inset-0 bg-radial-red-light opacity-80" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <span className="section-eyebrow">By the Numbers</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink-900">
            A track record of <span className="text-brand-600">scale &amp; trust</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STATS.map((stat, i) => {
            const stretchBorder = stat.value === 13 || stat.value === 20;
            return (
            <Reveal key={stat.label} delay={i * 80} className={stretchBorder ? 'h-full' : undefined}>
              <div className={`border-l-2 border-brand-500 pl-5${stretchBorder ? ' h-full' : ''}`}>
                <div className="font-display text-5xl md:text-6xl font-bold tracking-tight text-ink-900">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm md:text-base text-ink-900/60 leading-snug">
                  {stat.label}
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-900/55">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              PAN India Supply Projects
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Multiple Government &amp; Commercial Projects
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

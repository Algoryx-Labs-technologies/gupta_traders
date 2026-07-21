import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface Service {
  title: string;
  desc: string;
  icon: ReactNode;
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const SERVICES: Service[] = [
  {
    title: 'Electrical Contracting',
    desc: 'Complete electrical contracting for commercial and infrastructure projects, from installation through commissioning.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...stroke}>
        <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    title: 'Mechanical Projects',
    desc: 'Mechanical systems, equipment supply, and project execution for industrial and commercial facilities.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
      </svg>
    ),
  },
  {
    title: 'Civil',
    desc: 'Civil construction materials, structural support, and infrastructure development for large-scale projects.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...stroke}>
        <path d="M6 21h12" />
        <path d="M9 21V8l3-4 3 4v13" />
        <path d="M9 12h6" />
        <path d="M3 21h18" />
        <path d="M14 8h5l2 3v10" />
      </svg>
    ),
  },
  {
    title: 'Infrastructure Support',
    desc: 'Supply and execution support for industrial, commercial, and government infrastructure.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'HT & LT Solutions',
    desc: 'High-tension and low-tension electrical systems and complete support solutions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 4v16" />
        <path d="M20 4v16" />
        <path d="M4 8h16" />
        <path d="M4 16h16" />
        <path d="m9 4 6 16" />
      </svg>
    ),
  },
  {
    title: 'Lighting Systems',
    desc: 'Commercial, industrial, and infrastructure lighting products and turnkey installations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...stroke}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.4 1 2.3v1h6v-1c0-.9.3-1.7 1-2.3A7 7 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    title: 'Turnkey Project Support',
    desc: 'End-to-end material and infrastructure coordination for project execution.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 7h18v12H3z" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </svg>
    ),
  },
  {
    title: 'PAN India Railway Projects',
    desc: 'Nationwide railway infrastructure supply, execution, and project support across India.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 15h16" />
        <path d="M4 19h16" />
        <path d="M6 15V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
        <path d="M8 19v2" />
        <path d="M16 19v2" />
        <circle cx="8" cy="19" r="1" />
        <circle cx="16" cy="19" r="1" />
        <path d="M10 7V5h4v2" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="section-eyebrow">What We Do</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink-900">
              Solutions engineered for
              <span className="text-brand-600"> industry &amp; infrastructure</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-ink-900/65 text-lg max-w-2xl">
              From electrical supply to full turnkey execution, we deliver
              dependable materials and expert coordination for every scale of
              project.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 70}>
              <article className="card-surface group relative rounded-2xl p-7 h-full">
                <div className="absolute right-6 top-6 text-[11px] tracking-widest text-ink-900/25 font-medium">
                  0{i + 1}
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 border border-brand-200 text-brand-600 mb-5 transition-colors group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-ink-900">
                  {service.title}
                </h3>
                <p className="text-ink-900/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Reveal } from './Reveal';

const CERTIFICATES = [
  {
    label: 'Electrical Contracting License',
    src: '/assets/Electrical Contractor License.pdf',
  },
  {
    label: 'Udyam Registration Certificate',
    src: '/assets/Udyam Registration Certificate.pdf',
  },
] as const;

const PILLARS = [
  {
    title: 'Quality First',
    desc: 'Industrial-grade materials sourced from trusted, certified brands.',
  },
  {
    title: 'Timely Delivery',
    desc: 'Reliable logistics and consistent supply across PAN India.',
  },
  {
    title: 'Long-Term Trust',
    desc: 'Relationships built over a decade of dependable execution.',
  },
];

const LEADERS = [
  {
    name: 'Vijay Gupta',
    role: 'Founder & Visionary Leader, Gupta Traders',
    image: '/assets/Vijay Gupta.jpeg',
    paragraphs: [
      'Vijay Gupta is the Founder and Visionary Leader of Gupta Traders, a leading provider of electrical, industrial, and infrastructure solutions. With a Bachelor of Commerce (B.Com.) and a strong entrepreneurial vision, he has successfully transformed a family-owned business into a dynamic, growth-oriented enterprise recognized for its quality, reliability, and customer-centric approach.',
      'Under his leadership, Gupta Traders has evolved from a traditional trading business into a trusted partner for large-scale infrastructure and railway projects across India. By consistently delivering excellence and fostering long-term relationships with government agencies, public sector organizations, industrial clients, and infrastructure developers, Vijay has established the company as a dependable name in the industry.',
      'His strategic foresight, operational expertise, and unwavering commitment to excellence have been the driving forces behind the company\'s sustained growth. Today, Gupta Traders has successfully completed projects worth over ₹70 crore, manages ₹30+ crore in ongoing contracts, brings 13+ years of industry experience, and offers an extensive portfolio spanning 20+ product categories.',
      'Vijay\'s leadership is guided by the principles of integrity, trust, innovation, and continuous improvement. He believes that lasting success is built on strong relationships, uncompromising quality, and the ability to adapt to evolving industry needs while remaining true to the company\'s founding values.',
      'As Gupta Traders advances toward its vision of becoming a ₹200 crore enterprise, Vijay Gupta remains focused on driving sustainable growth, delivering exceptional value to clients and partners, empowering employees, and contributing meaningfully to India\'s infrastructure and industrial development.',
    ],
  },
  {
    name: 'Harsh Gupta',
    role: 'Managing Director',
    image: '/assets/Harsh Gupta.jpeg',
    paragraphs: [
      'Harsh Gupta is the current Managing Director of Gupta Traders, leading the company\'s strategic growth and operations with a strong focus on innovation, operational excellence, and sustainable infrastructure development. With a degree in Electrical Engineering and extensive experience in the railway infrastructure sector, he brings a unique combination of technical expertise, project leadership, and business acumen.',
      'Having been an integral part of Gupta Traders for over six years, Harsh has progressed through key leadership roles, beginning his journey as a Site Engineer before advancing to Project Manager, Chief Project Manager, and ultimately Managing Director. This hands-on experience across engineering, project execution, and business operations has equipped him with a comprehensive understanding of the industry and the ability to lead complex, high-value infrastructure projects.',
      'Under his leadership, Gupta Traders has continued to strengthen its position as a trusted partner in railway electrification, signaling, and infrastructure development projects across India. He has successfully overseen the execution of large-scale projects, with expertise spanning railway electrification systems, signaling modernization, project management, strategic planning, business development, and stakeholder engagement.',
      'Harsh is committed to delivering projects that meet the highest standards of quality, safety, and reliability while embracing modern technologies and best practices. His forward-looking approach continues to drive operational efficiency, foster long-term client partnerships, and support the modernization of India\'s railway and infrastructure ecosystem.',
      'As Gupta Traders continues its growth journey, Harsh Gupta remains dedicated to building a future-ready organization that delivers lasting value for clients, partners, employees, and the nation through excellence in infrastructure development.',
    ],
  },
] as const;

export function About() {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-light [background-size:48px_48px] opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink-900">
                About <span className="text-brand-600">Gupta Traders</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 flex items-center gap-3 text-sm text-ink-900/60">
                <span className="font-display text-5xl font-bold text-ink-900">
                  13<span className="text-brand-600">+</span>
                </span>
                <span className="leading-tight">
                  Years of trusted industry
                  <br /> experience 
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-6 text-ink-900/70 text-base md:text-lg leading-relaxed">
            <Reveal delay={80}>
              <p>
                Gupta Traders is a trusted name in electrical and industrial
                supply contracting services, delivering high-quality products
                and reliable execution support to the commercial, industrial,
                and infrastructure sectors.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Backed by years of industry experience, we are committed to
                providing dependable materials, efficient service, and
                cost-effective solutions for contractors, builders, industries,
                and government projects. Our focus on quality, timely delivery,
                and customer satisfaction has earned us the trust of clients and
                fostered long-term partnerships across diverse sectors.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                {PILLARS.map((p) => (
                  <div
                    key={p.title}
                    className="card-surface rounded-xl p-5"
                  >
                    <div className="text-brand-600 text-sm font-semibold mb-1.5">
                      {p.title}
                    </div>
                    <p className="text-sm text-ink-900/65 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex flex-wrap gap-3 pt-6">
                {CERTIFICATES.map((cert) => (
                  <button
                    key={cert.label}
                    type="button"
                    onClick={() => setActivePdf(cert.src)}
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-600/25 bg-white px-5 py-3 text-sm font-medium text-brand-600 transition-colors hover:border-brand-600/40 hover:bg-brand-50"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    {cert.label}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-ink-900/10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink-900 text-center max-w-3xl mx-auto">
              The Bright Minds behind{' '}
              <span className="text-brand-600">Gupta Traders</span>
            </h2>
          </Reveal>

          <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-10">
            {LEADERS.map((leader, index) => (
              <Reveal key={leader.name} delay={120 + index * 80}>
                <article className="card-surface rounded-2xl p-6 md:p-8 h-full">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-28 w-28 sm:h-32 sm:w-32 shrink-0 rounded-xl object-cover object-top border border-ink-900/8"
                    />
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink-900 mb-2">
                        About{' '}
                        <span className="text-brand-600">{leader.name}</span>
                      </h3>
                      <p className="text-sm font-medium text-brand-600">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-ink-900/70 text-base leading-relaxed">
                    {leader.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {activePdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-8"
          onClick={() => setActivePdf(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-ink-900/10 px-4 py-3">
              <span className="text-sm font-medium text-ink-900/70">
                Document Preview
              </span>
              <button
                type="button"
                onClick={() => setActivePdf(null)}
                className="rounded-lg p-2 text-ink-900/50 transition-colors hover:bg-neutral-100 hover:text-ink-900"
                aria-label="Close document"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <iframe
              src={activePdf}
              title="Certificate document"
              className="h-full w-full flex-1 border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}

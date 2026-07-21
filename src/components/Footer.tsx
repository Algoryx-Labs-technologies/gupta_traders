import { Logo } from './Logo';

const SERVICES = [
  'Electrical Contracting',
  'Mechanical Projects',
  'Civil',
  'Infrastructure Support',
  'HT/LT Solutions',
  'Lighting Systems',
  'Turnkey Project Support',
];

const COMPANY = ['About', 'Services', 'Projects', 'Clients', 'Contact'];

const SOCIAL = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/gupta-traders-ahmedabad/',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z',
  },
];

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-ink-900/8 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 pb-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center">
              <Logo imgClassName="h-32 w-auto" />
            </a>
            <p className="mt-5 max-w-md text-ink-900/60 text-sm leading-relaxed">
              Gupta Traders — Reliable Electrical &amp; Infrastructure
              Solutions for Industrial, Commercial, and Government Projects
              across India.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-900/10 text-ink-900/60 hover:border-brand-500 hover:text-brand-600 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-brand-600 mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-900/65">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-brand-600 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-brand-600 mb-4 font-semibold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-900/65">
              {COMPANY.map((c) => (
                <li key={c}>
                  <a
                    href={`#${c.toLowerCase()}`}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-brand-600 mb-4 font-semibold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-900/65">
              <li>
                <a
                  href="mailto:guptrade07@gmail.com"
                  className="hover:text-brand-600 transition-colors"
                >
                  guptrade07@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919825012389"
                  className="hover:text-brand-600 transition-colors"
                >
                  +91-9825012389
                </a>
              </li>
              <li>
                A-22, 23, Capital Commercial Centre, Near Ellisbridge, Ashram
                Road, Ahmedabad, Gujarat — 380009
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-red" />

        <div className="pt-6 text-xs text-ink-900/45">
          © {new Date().getFullYear()} Gupta Traders. All rights reserved.
        </div>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-sm font-bold text-ink-900/55">
          <span>Developed and Maintained by</span>
          <a
            href="https://algoryx.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex opacity-80 hover:opacity-100 transition-opacity"
            aria-label="AlgoryX Labs and Tech"
          >
            <img
              src="/assets/Aglroyx.png"
              alt="AlgoryX Labs and Tech"
              className="h-10 w-auto"
            />
          </a>
        </p>
      </div>
    </footer>
  );
}

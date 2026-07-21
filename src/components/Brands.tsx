import { Reveal } from './Reveal';

const BRANDS = [
  { name: 'ABB', logo: '/assets/ABB.png' },
  { name: 'Siemens', logo: '/assets/Siemens.png' },
  { name: 'Schneider', logo: '/assets/SCHNEIDER.png' },
  { name: 'Havells', logo: '/assets/Havells.svg' },
  { name: 'Polycab', logo: '/assets/polycab.webp' },
  { name: 'KEI', logo: '/assets/KEI.jpeg' },
  { name: 'Finolex', logo: '/assets/Finolex.jpg' },
  { name: 'Legrand', logo: '/assets/legrand.png' },
  { name: 'L&T', logo: '/assets/L&T.png' },
  { name: 'RR Kabel', logo: '/assets/RR.jpeg' },
] as const;

export function Brands() {
  return (
    <section className="relative bg-neutral-50 py-20 md:py-24 border-y border-ink-900/8">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal>
            <span className="section-eyebrow justify-center">Authorized Partners</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink-900">
              Trusted brands.
              <br />
              <span className="text-brand-600">Verified quality.</span>
            </h2>
            <p className="mt-4 text-ink-900/65 text-base leading-relaxed">
              We supply authentic products from India's leading electrical
              and industrial manufacturers.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {BRANDS.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 50}>
              <div className="card-surface group relative flex h-28 flex-col items-center justify-center gap-2 rounded-xl px-3 py-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-10 w-auto max-w-full object-contain"
                />
                <span className="font-display text-sm font-semibold tracking-tight text-ink-900/60 transition-colors group-hover:text-brand-600">
                  {brand.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

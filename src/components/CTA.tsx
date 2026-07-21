import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section className="relative bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-10 md:p-16 shadow-glow">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-black/10 blur-[120px]" />

            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/80 font-semibold">
                  <span className="h-px w-6 bg-white/50" />
                  Get Started
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
                  Ready to start your next project?
                </h2>
                <p className="mt-5 text-white/85 text-base md:text-lg max-w-2xl">
                  Speak with our team for reliable electrical and
                  infrastructure solutions tailored to your project
                  requirements.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-50 text-brand-700 px-8 py-4 rounded-xl font-medium transition-colors w-full sm:w-auto"
                >
                  Contact Us
                  <svg
                    width="16"
                    height="16"
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
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

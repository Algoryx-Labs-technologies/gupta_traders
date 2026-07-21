import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { PROJECT_IMAGES } from '../data/projectImages';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-ink-900">
      <header className="sticky top-0 z-30 border-b border-ink-900/8 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
          <Link to="/" className="inline-flex items-center">
            <Logo imgClassName="h-10 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-900/70 transition-colors hover:text-brand-600"
          >
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
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <Reveal>
            <span className="section-eyebrow">Project Gallery</span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              All projects across
              <span className="text-brand-600"> India</span>
            </h1>
            <p className="mt-4 max-w-2xl text-ink-900/60">
              Browse our complete portfolio of industrial, commercial, and government
              project work delivered across the country.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PROJECT_IMAGES.map((image, i) => (
              <Reveal key={image.filename} delay={(i % 12) * 40}>
                <article className="group overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card transition-all hover:border-brand-400/40 hover:shadow-card-hover">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={`Project ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

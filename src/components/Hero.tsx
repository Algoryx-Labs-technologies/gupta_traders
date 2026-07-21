import { useEffect, useRef, useState } from 'react';
import { AnimatedHeading } from './AnimatedHeading';
import { FadeIn } from './FadeIn';
import { Logo } from './Logo';

const VIDEO_URL = '/assets/BG_VIDEO.mp4';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => {});
    };

    play();
    video.addEventListener('loadeddata', play);
    return () => video.removeEventListener('loadeddata', play);
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />

      <div className="relative z-10 flex h-full flex-col">
        <header className="px-6 md:px-12 lg:px-16 pt-6 flex justify-center">
          <nav className="liquid-glass rounded-2xl px-5 py-2.5 flex flex-col w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
            <div className="flex items-center justify-between w-full">
              <a href="#top" className="flex items-center">
                <Logo imgClassName="h-12 md:h-14 w-auto rounded-md bg-white/95 px-1" />
              </a>

              <div className="hidden md:flex items-center gap-7 text-sm text-white/85">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                )}
              </button>
            </div>

            {menuOpen && (
              <div
                id="mobile-nav-menu"
                className="md:hidden mt-3 border-t border-white/10 pt-3 flex flex-col gap-1"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-2 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-brand-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </nav>
        </header>

        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-20">
          <FadeIn delay={150} duration={900}>
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Govt. Approved Contractor
              </span>
              <span className="hidden sm:inline text-white/60">/</span>
              <span>Est. 2013</span>
              <span className="hidden sm:inline text-white/60">/</span>
              <span>Industrial &amp; Commercial Solutions</span>
            </div>
          </FadeIn>

          <div>
              <AnimatedHeading
                text={'Gupta Traders'}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] mb-6"
                style={{ letterSpacing: '-0.035em' }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="max-w-2xl text-base md:text-lg text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] mb-8">
                  We deliver dependable electrical, industrial, and
                  infrastructure solutions for commercial, industrial, and
                  government projects across India. From supply to execution,
                  we help businesses build with confidence.
                </p>
              </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

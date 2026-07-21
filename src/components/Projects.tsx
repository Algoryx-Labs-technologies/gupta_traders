import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { PROJECT_IMAGES } from '../data/projectImages';

interface Project {
  title: string;
  location: string;
  category: string;
  desc: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    title: 'Industrial Plant Electrification',
    location: 'Maharashtra',
    category: 'Industrial Plants',
    desc: 'HT/LT distribution supply and on-site coordination for a large manufacturing facility.',
  },
  {
    title: 'Government Infrastructure Supply',
    location: 'Uttar Pradesh',
    category: 'Government Projects',
    desc: 'End-to-end electrical materials supply for a multi-phase public infrastructure project.',
  },
  {
    title: 'Commercial Tower Lighting',
    location: 'Delhi NCR',
    category: 'Commercial Buildings',
    desc: 'Premium lighting systems and distribution panels for a 20-floor commercial development.',
  },
  {
    title: 'Warehouse & Factory Supply',
    location: 'Gujarat',
    category: 'Warehouse & Factory',
    desc: 'Industrial-grade cabling, switchgear, and equipment supply for warehouse operations.',
  },
  {
    title: 'Substation Equipment Rollout',
    location: 'Rajasthan',
    category: 'Infrastructure Developments',
    desc: 'Coordinated supply of HT switchgear and transformers for a regional substation.',
  },
  {
    title: 'Plant Electrical Installation',
    location: 'Madhya Pradesh',
    category: 'Electrical Installations',
    desc: 'Turnkey electrical materials and execution support for a process plant build-out.',
  },
];

const featuredProjects = FEATURED_PROJECTS.map((project, index) => ({
  ...project,
  image: PROJECT_IMAGES[index]?.src ?? PROJECT_IMAGES[0].src,
}));

export function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-neutral-50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <span className="section-eyebrow">Featured Projects</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink-900">
                Powering projects across
                <span className="text-brand-600"> India</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-900/70 hover:text-brand-600 transition-colors"
            >
              See all project
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
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card transition-all hover:border-brand-400/40 hover:shadow-card-hover">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-brand-600 mb-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {p.location}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-ink-900 group-hover:text-brand-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-900/60 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from './Reveal';

const PARAGRAPHS = [
  'We have earned the trust of millions of customers by providing cutting-edge solutions and reliable services across the length and breadth of India.',
  'Our footprint extends across the nation, from major metropolitan hubs to remote industrial corridors. This map illustrates the vast network of projects and clients we have served, demonstrating our capability to deliver excellence regardless of location. Whether it is supporting critical railway infrastructure, powering commercial complexes, or driving industrial growth, our presence across India is a testament to our operational strength and logistical expertise.',
  'We are proud to be a partner of choice for contractors and government bodies nationwide, ensuring that every project, no matter how large or small, receives the same level of dedication and quality that defines the Gupta Traders name.',
];

export function NationWideTrust() {
  return (
    <section className="relative bg-neutral-50 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light [background-size:48px_48px] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="section-eyebrow">Our Reach</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink-900">
                Nation-wide
                <span className="text-brand-600"> trust</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-ink-900/70 text-base md:text-lg leading-relaxed">
              {PARAGRAPHS.map((text, i) => (
                <Reveal key={i} delay={(i + 1) * 80}>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/assets/GuptaTrade_map.png"
                  alt="Map of India showing Gupta Traders' nationwide project and client network"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

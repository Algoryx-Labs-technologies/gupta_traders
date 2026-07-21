import { Reveal } from './Reveal';

const CLIENTS = [
  'Gandhidham',
  'Bhildi Pump',
  'RCT',
  'Baroda Loco Shed',
  'Gandhigram',
  'Rajkot',
  'DFCCIL',
  'Mumbai High Mast',
  'Mahesana',
  'Chandlodiya',
  'Sabarmati',
  'Mahesana Nagarpalika',
  'GUDA TP',
  'Mahesana Nagarpalika',
  'Baroda Class Room',
  'Sabarmati Quarts',
  'Himmatnagar',
  'Chhotaudaipur',
  'RUB Baroda',
  'Solar',
  'Valsad High Mast',
  'Coach Waqtering Facilities',
  'AC Hiring',
  'Himmatnagar GWSSB',
  'Himmatnagar O & M',
  'Himmatnagar O & M',
  'Baroda VMC O & M',
  'GUDA TP',
  'Baroda Pit Line',
  'AMF Panel',
  'VIP Siding',
  'Yard Lighting',
  'Pump Adi',
  'Construction Office',
  'Pump',
  'Tender',
  'GANDHIDHAM',
  'AC WATING HALL',
  'AUG OF COACH WATERING',
  'MANINAGAR FOB',
  'Gandhidham',
  'Rajkot Pump',
  'Nagpur Pump',
  'Platform Raising ADJ',
  'EOG',
  'Pump',
  'Pump',
  'Jaipur Quick Watering',
  'Scada Ahmedabad',
  'Sabarmati Shed',
  'Dadar Quick Watering',
  'Service Building Rewing',
  'EOG Sabarmati',
  'V Kankariya',
  'HOG Bhavnagar',
  'Anand Godhara',
  'Staff Quarts',
  'Phase Memu Car Shed',
  'Kankariya Yard Remolding',
  'Rewing of Quarts',
  'Asarva Quick Watering',
  'Asarva Pump',
  'AC Hiring',
  'Pump T',
  'Bhuj Naliya',
  'EOG Gandhidham',
  'Prepaid Meter Nagpur',
  'Ahmedabad Mahesana Gauge',
  'Pump T',
  'Pump',
  'Pump Baroda',
  'Buxar Quick Watering',
  'Bikaner SOG Quick Watering',
  'Vatva Platform',
  'Ujjain Training Centre',
  'Baroda Pratapnagar Work Shop',
  'EGO SECR Gonda',
  'Sabarmati Freight Depo',
  'Halveo',
  'Savai Madhopur Kota',
  'Chennai Quick Watering',
  'Quick Watering Thiruvantpuram',
  'QWS Chennai TBM Station',
  'Samakhiyali',
  'LOC Bhavnagar',
  'QWS Sabarmati Station',
  'QWS Bokaro Steel City',
  'QWS Nagpur SECR',
  'Replacement of old Pump Baroda',
  'QWS Nilaspur',
  'QWS Bilaspur Korba',
  'QWS Trichhchirappalli',
  'QWS Jerbad Pump',
  'PMS ADTP',
  'QWS Bangalore',
  'Replacement of old Pump Baroda',
  'Vatia',
  'QWS CKP Station',
];

export function Clients() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="relative bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal>
            <span className="section-eyebrow justify-center">Clients</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink-900">
              Trusted by businesses
              <span className="text-brand-600"> across industries</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-3" style={{ animationDuration: '180s' }}>
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-ink-900/8 bg-neutral-50 px-6 py-4 shadow-card"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 border border-brand-200 text-brand-600 font-display font-bold text-sm">
                {name
                  .split(' ')
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join('')}
              </span>
              <span className="text-sm font-medium text-ink-900/80">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

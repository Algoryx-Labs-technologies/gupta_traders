const ITEMS = [
  'MSME Registered',
  'Govt. Approved Vendor',
  'PAN India Operations',
  'Quality Assured',
  'Industrial Grade Supply',
  'Trusted by Leading Businesses',
  'UDYAM Registered',
];

export function TrustBar() {
  return (
    <section className="relative border-y border-ink-900/8 bg-brand-50/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-y-5 gap-x-6">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 text-sm text-ink-900/75"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-brand-500/25 bg-brand-500/10 text-brand-600">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

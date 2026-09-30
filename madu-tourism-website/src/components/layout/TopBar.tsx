export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-forest-dark px-6 py-2 text-xs text-white/80 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Sri Lanka Local DMC &amp; Luxury Chauffeur Guides
          </span>
          <span className="text-white/40">|</span>
          {/* Placeholder contact — replace with verified business details */}
          <a
            className="flex items-center gap-1 transition-colors hover:text-gold"
            href="tel:+94112345678"
          >
            <span className="material-symbols-outlined text-[15px]">call</span>
            +94 11 234 5678
          </a>
          <a
            className="flex items-center gap-1 transition-colors hover:text-gold"
            href="mailto:concierge@madutseylontours.com"
          >
            <span className="material-symbols-outlined text-[15px]">mail</span>
            concierge@madutseylontours.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-tropical">
              verified
            </span>
            Colombo 03 HQ
          </span>
          <span className="text-white/40">•</span>
          <span>EN / USD ($)</span>
        </div>
      </div>
    </div>
  );
}

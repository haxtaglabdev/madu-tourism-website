export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-forest-dark px-4 py-2 text-xs text-white/80 md:block lg:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 lg:gap-6">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="truncate">
              Sri Lanka Local DMC &amp; Luxury Chauffeur Guides
            </span>
          </span>
          <span className="hidden text-white/40 sm:inline" aria-hidden>
            |
          </span>
          {/* Placeholder contact — replace with verified business details */}
          <a
            className="flex items-center gap-1 transition-colors hover:text-gold"
            href="tel:+94112345678"
          >
            <span className="material-symbols-outlined text-[15px]">call</span>
            +94 11 234 5678
          </a>
          <a
            className="hidden max-w-[16rem] items-center gap-1 truncate transition-colors hover:text-gold lg:flex lg:max-w-none"
            href="mailto:concierge@madutseylontours.com"
          >
            <span className="material-symbols-outlined shrink-0 text-[15px]">
              mail
            </span>
            <span className="truncate">concierge@madutseylontours.com</span>
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-white/70 lg:gap-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-tropical">
              verified
            </span>
            Colombo 03 HQ
          </span>
          <span className="text-white/40" aria-hidden>
            •
          </span>
          <span>EN / USD ($)</span>
        </div>
      </div>
    </div>
  );
}

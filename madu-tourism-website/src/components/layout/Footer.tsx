import { Link } from "react-router-dom";
import { images } from "../../assets";
import { footerExplore, footerTerritories } from "../../data/homeContent";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-forest-dark pt-14 pb-10 text-white/70 sm:pt-20 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:gap-12 sm:pb-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              alt="Madu Tseylon Tours"
              className="h-25 w-auto rounded-full object-contain"
              src={images.logo}
            />
            <p className="text-xs leading-relaxed font-light text-white/60">
              Madu Tseylon Tours is a licensed Sri Lankan Destination Management
              Company specializing in bespoke private chauffeur journeys, luxury
              villa retreats, and responsible wildlife expeditions.
            </p>
            <div className="flex items-center gap-3 pt-5">
              <a
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-105 hover:border-tropical hover:bg-tropical hover:text-white hover:shadow-[0_6px_20px_rgba(22,122,62,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                href="https://www.facebook.com/profile.php?id=61595537842617"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.71-.14-2.78 0-4.79 1.69-4.79 4.93v2.57H7v4h3v8.5h4v-8.5z" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-105 hover:border-tropical hover:bg-tropical hover:text-white hover:shadow-[0_6px_20px_rgba(22,122,62,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                href="https://www.instagram.com/madutseylontours/?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                aria-label="TikTok"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-105 hover:border-tropical hover:bg-tropical hover:text-white hover:shadow-[0_6px_20px_rgba(22,122,62,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                href="https://www.instagram.com/madutseylontours/?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.28 6.34 6.34 0 0 0 9.34 21.6c3.5 0 6.34-2.84 6.34-6.34V9.05a8.27 8.27 0 0 0 4.91 1.59V7.19a4.87 4.87 0 0 1-1-.5z" />
                </svg>
              </a>
              <a
                aria-label="TripAdvisor"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-105 hover:border-tropical hover:bg-tropical hover:text-white hover:shadow-[0_6px_20px_rgba(22,122,62,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                href="https://www.instagram.com/madutseylontours/?hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-3 md:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {footerExplore.map((item) => (
                <li key={item.label}>
                  <Link
                    className="transition-colors hover:text-gold"
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
              Key Territories
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {footerTerritories.map((item) => (
                <li key={item.label}>
                  <Link
                    className="transition-colors hover:text-gold"
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
              Colombo Concierge
            </h4>
            {/* Placeholder contact details — replace with verified business info */}
            <div className="space-y-3 text-xs font-light">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined mt-0.5 text-sm text-gold">
                  location_on
                </span>
                <span>No.247, kurudu waththa,holuwagoda,godakanda,galla</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-sm text-gold">
                  call
                </span>
                <span>+94 77 088 0425</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined mt-0.5 shrink-0 text-sm text-gold">
                  mail
                </span>
                <span className="min-w-0 break-all">madutseylon@gmail.com</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-tropical/30 bg-tropical/20 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  24/7 Island Concierge Online
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-[11px] font-light text-white/50 sm:flex-row sm:text-left">
          <p className="max-w-xl">
            © 2026 Madu Tseylon Tours (Pvt) Ltd. All rights reserved. Sri Lanka
            Tourism Development Authority Reg. DMC.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span className="hidden sm:inline" aria-hidden>
              •
            </span>
            <a className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <span className="hidden sm:inline" aria-hidden>
              •
            </span>
            <a className="transition-colors hover:text-white">
              Responsible Travel Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

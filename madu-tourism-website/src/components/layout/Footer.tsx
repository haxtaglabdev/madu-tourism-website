import { Link } from "react-router-dom";
import { images } from "../../assets";
import { footerExplore, footerTerritories } from "../../data/homeContent";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-forest-dark pt-20 pb-12 text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <img
              alt="Madu Tseylon Tours"
              className="h-14 w-auto rounded-full object-contain bg-white p-1"
              src={images.logo}
            />
            <p className="text-xs leading-relaxed font-light text-white/60">
              Madu Tseylon Tours is a licensed Sri Lankan Destination Management
              Company specializing in bespoke private chauffeur journeys, luxury
              villa retreats, and responsible wildlife expeditions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-tropical hover:text-white"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                aria-label="Share"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-tropical hover:text-white"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-tropical hover:text-white"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">
                  photo_camera
                </span>
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
                <span>Level 4, Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-sm text-gold">
                  call
                </span>
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-sm text-gold">
                  mail
                </span>
                <span>concierge@madutseylontours.com</span>
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

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[11px] font-light text-white/50 sm:flex-row">
          <p>
            © 2024 Madu Tseylon Tours (Pvt) Ltd. All rights reserved. Sri Lanka
            Tourism Development Authority Reg. DMC.
          </p>
          <div className="flex items-center gap-6">
            <a className="transition-colors hover:text-white" href="#">
              Privacy Policy
            </a>
            <span>•</span>
            <a className="transition-colors hover:text-white" href="#">
              Terms of Service
            </a>
            <span>•</span>
            <a className="transition-colors hover:text-white" href="#">
              Responsible Travel Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

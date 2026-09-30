import { useEffect, useState } from "react";
import { images } from "../../assets";
import { navLinks } from "../../data/homeContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-charcoal/5 bg-[#FAFAF7]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        <a className="group flex items-center gap-3.5" href="#">
          <img
            alt="Madu Tseylon Tours Logo"
            className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-28"
            src={images.logo}
          />
        </a>

        <nav className="hidden items-center gap-8 text-[14px] font-medium tracking-wide lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={
                link.active
                  ? "relative font-semibold text-tropical after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-tropical"
                  : "text-charcoal/80 transition-colors hover:text-tropical"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="hidden items-center justify-center rounded-full bg-sunset px-6 py-3 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_4px_16px_rgba(245,154,35,0.35)] transition-all hover:bg-sunset-hover hover:shadow-[0_6px_20px_rgba(245,154,35,0.45)] sm:inline-flex"
            href="#planner"
          >
            Plan Your Trip
          </a>
          <button
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 text-charcoal transition-colors hover:text-tropical lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-charcoal/5 bg-sand-bg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-soft-mint text-tropical"
                    : "text-charcoal/80 hover:bg-soft-mint hover:text-tropical"
                }`}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sunset px-6 py-3 text-[13px] font-semibold tracking-wider text-white uppercase transition-colors hover:bg-sunset-hover"
              href="#planner"
              onClick={closeMenu}
            >
              Plan Your Trip
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

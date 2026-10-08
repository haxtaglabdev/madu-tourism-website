import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { images } from "../../assets";
import { navLinks } from "../../data/homeContent";

const desktopInactiveClass =
  "relative text-charcoal/80 transition-colors duration-300 hover:text-tropical after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-tropical after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100";

const desktopActiveClass =
  "relative font-semibold text-tropical after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-tropical";

const mobileInactiveClass =
  "rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-300 text-charcoal/80 hover:bg-soft-mint hover:text-tropical";

const mobileActiveClass =
  "rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-300 bg-soft-mint text-tropical";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-charcoal/5 bg-[#FAFAF7]/90 backdrop-blur-xl transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(0,37,26,0.18)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link className="group flex items-center gap-3.5" onClick={closeMenu} to="/">
          <img
            alt="Madu Tseylon Tours Logo"
            className="h-28 w-auto object-contain transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:h-28"
            src={images.logo}
          />
        </Link>

        <nav className="hidden items-center gap-8 text-[14px] font-medium tracking-wide lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              className={({ isActive }) =>
                isActive ? desktopActiveClass : desktopInactiveClass
              }
              end={link.end}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            className="hidden items-center justify-center rounded-full bg-sunset px-6 py-3 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_4px_16px_rgba(245,154,35,0.35)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:scale-[1.01] hover:bg-sunset-hover hover:shadow-[0_6px_20px_rgba(245,154,35,0.45)] sm:inline-flex"
            to="/contact"
          >
            Plan Your Trip
          </Link>
          <button
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 text-charcoal transition-colors duration-300 hover:text-tropical lg:hidden"
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
              <NavLink
                key={link.label}
                className={({ isActive }) =>
                  isActive ? mobileActiveClass : mobileInactiveClass
                }
                end={link.end}
                onClick={closeMenu}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sunset px-6 py-3 text-[13px] font-semibold tracking-wider text-white uppercase transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-sunset-hover"
              onClick={closeMenu}
              to="/contact"
            >
              Plan Your Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

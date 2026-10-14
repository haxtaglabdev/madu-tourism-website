import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { images } from "../../assets";
import { useCurrentLanguage } from "../../i18n/useCurrentLanguage";
import LanguageSelector from "./LanguageSelector";

const desktopInactiveClass =
  "relative text-charcoal/80 transition-colors duration-300 hover:text-tropical after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-tropical after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100";

const desktopActiveClass =
  "relative font-semibold text-tropical after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-tropical";

const mobileInactiveClass =
  "rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-300 text-charcoal/80 hover:bg-soft-mint hover:text-tropical";

const mobileActiveClass =
  "rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-300 bg-soft-mint text-tropical";

interface NavItemConfig {
  key: string;
  labelKey: "home" | "about" | "destinations" | "packages" | "gallery" | "contact";
  basePath: string;
  end?: boolean;
}

const NAV_CONFIG: NavItemConfig[] = [
  { key: "home", labelKey: "home", basePath: "/", end: true },
  { key: "about", labelKey: "about", basePath: "/about" },
  { key: "destinations", labelKey: "destinations", basePath: "/destinations" },
  { key: "packages", labelKey: "packages", basePath: "/tour-packages" },
  { key: "gallery", labelKey: "gallery", basePath: "/gallery" },
  { key: "contact", labelKey: "contact", basePath: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t, getLocalizedPath } = useCurrentLanguage();

  useEffect(() => {
    // Close mobile drawer on route navigation
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:gap-4 sm:px-6">
        <Link
          aria-label={`${t("common.brandName")} — ${t("common.nav.home")}`}
          className="group flex min-w-0 shrink items-center gap-1 sm:gap-1.5"
          onClick={closeMenu}
          to={getLocalizedPath("/")}
        >
          <img
            alt=""
            className="h-16 w-auto max-w-[min(100%,7.5rem)] object-contain sm:h-20 sm:max-w-none lg:h-28"
            src={images.logo}
          />
          <span className="brand-wordmark overflow-visible py-1 font-serif text-[0.95rem] leading-normal font-medium tracking-[0.02em] text-forest sm:text-xl lg:text-[1.65rem]">
            Madu
            <span className="brand-wordmark-accent font-normal italic text-tropical">
              Tseylon
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-[14px] font-medium tracking-wide lg:flex xl:gap-7">
          {NAV_CONFIG.map((item) => {
            const localizedTo = getLocalizedPath(item.basePath);
            return (
              <NavLink
                key={item.key}
                className={({ isActive }) =>
                  isActive ? desktopActiveClass : desktopInactiveClass
                }
                end={item.end}
                to={localizedTo}
              >
                {t(`common.nav.${item.labelKey}`)}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-3.5">
          {/* Language Selector (Desktop & Tablet) */}
          <LanguageSelector className="hidden sm:inline-block" />

          {/* Plan Your Trip CTA */}
          <Link
            className="hidden items-center justify-center rounded-full bg-sunset px-5 py-2.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_4px_16px_rgba(245,154,35,0.35)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:scale-[1.01] hover:bg-sunset-hover hover:shadow-[0_6px_20px_rgba(245,154,35,0.45)] md:inline-flex lg:px-6 lg:py-3"
            to={getLocalizedPath("/contact")}
          >
            {t("common.planYourTrip")}
          </Link>

          {/* Mobile Menu Button */}
          <button
            aria-expanded={open}
            aria-label={open ? t("common.menuClose") : t("common.menuOpen")}
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
          <nav className="mx-auto flex max-w-7xl flex-col gap-1.5 px-5 py-4 sm:px-6">
            {NAV_CONFIG.map((item) => {
              const localizedTo = getLocalizedPath(item.basePath);
              return (
                <NavLink
                  key={item.key}
                  className={({ isActive }) =>
                    isActive ? mobileActiveClass : mobileInactiveClass
                  }
                  end={item.end}
                  onClick={closeMenu}
                  to={localizedTo}
                >
                  {t(`common.nav.${item.labelKey}`)}
                </NavLink>
              );
            })}

            {/* Mobile Language Selector */}
            <LanguageSelector isMobileDrawer onSelect={closeMenu} />

            <Link
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sunset px-6 py-3 text-[13px] font-semibold tracking-wider text-white uppercase transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-sunset-hover"
              onClick={closeMenu}
              to={getLocalizedPath("/contact")}
            >
              {t("common.planYourTrip")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

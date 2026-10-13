import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { useCurrentLanguage, type SupportedLanguage } from "../../i18n/useCurrentLanguage";

function UkFlagIcon({ className = "w-[18px] h-[12px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`${className} shrink-0 inline-block rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.12)] ring-1 ring-black/10`}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="uk-flag-clip">
        <rect width="60" height="40" rx="2" />
      </clipPath>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#ffffff" strokeWidth="8" />
        <path d="M0,0 L60,40" stroke="#C8102E" strokeWidth="2.6" />
        <path d="M60,0 L0,40" stroke="#C8102E" strokeWidth="2.6" />
        <path d="M30,0 V40 M0,20 H60" stroke="#ffffff" strokeWidth="13" />
        <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
      </g>
    </svg>
  );
}

function RuFlagIcon({ className = "w-[18px] h-[12px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`${className} shrink-0 inline-block rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.12)] ring-1 ring-black/10`}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="ru-flag-clip">
        <rect width="60" height="40" rx="2" />
      </clipPath>
      <g clipPath="url(#ru-flag-clip)">
        <rect width="60" height="13.34" y="0" fill="#ffffff" />
        <rect width="60" height="13.34" y="13.33" fill="#0039A6" />
        <rect width="60" height="13.34" y="26.66" fill="#D52B1E" />
      </g>
    </svg>
  );
}

interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  flag: ReactNode;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", flag: <UkFlagIcon /> },
  { code: "ru", label: "Русский", flag: <RuFlagIcon /> },
];

interface LanguageSelectorProps {
  className?: string;
  isMobileDrawer?: boolean;
  onSelect?: () => void;
}

export default function LanguageSelector({
  className = "",
  isMobileDrawer = false,
  onSelect,
}: LanguageSelectorProps) {
  const { currentLang, switchLanguage } = useCurrentLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelect = (code: SupportedLanguage) => {
    switchLanguage(code);
    setIsOpen(false);
    if (onSelect) onSelect();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const activeLang =
    LANGUAGES.find((lang) => lang.code === currentLang) || LANGUAGES[0];

  if (isMobileDrawer) {
    return (
      <div className={`pt-2 pb-1 ${className}`}>
        <span className="mb-2 block text-xs font-semibold tracking-wider text-muted uppercase">
          {currentLang === "ru" ? "Язык сайта" : "Language"}
        </span>
        <div className="grid grid-cols-2 gap-2">
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                aria-pressed={isSelected}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-forest text-white shadow-xs"
                    : "border border-charcoal/10 bg-white text-charcoal/80 hover:bg-soft-mint hover:text-tropical"
                }`}
                onClick={() => handleSelect(lang.code)}
                type="button"
              >
                <span className="inline-flex shrink-0 items-center" aria-hidden="true">
                  {lang.flag}
                </span>
                <span>{lang.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language. Current language: ${activeLang.label}`}
        className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/80 py-1.5 px-3 text-xs font-medium text-charcoal/80 shadow-2xs backdrop-blur-md transition-all duration-200 hover:border-tropical/40 hover:bg-white hover:text-tropical focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tropical sm:py-2 sm:px-3.5"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <span className="inline-flex shrink-0 items-center" aria-hidden="true">
          {activeLang.flag}
        </span>
        <span className="font-semibold text-charcoal">{activeLang.label}</span>
        <span
          className={`material-symbols-outlined text-[16px] text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180 text-tropical" : ""
          }`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 z-50 mt-1.5 w-36 origin-top-right rounded-2xl border border-charcoal/8 bg-white p-1.5 shadow-[0_12px_28px_rgba(0,37,26,0.12)] ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 focus:outline-none"
        >
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors duration-150 ${
                  isSelected
                    ? "bg-soft-mint text-tropical font-semibold"
                    : "text-charcoal hover:bg-sand-bg hover:text-tropical"
                }`}
                onClick={() => handleSelect(lang.code)}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <span className="inline-flex shrink-0 items-center" aria-hidden="true">
                    {lang.flag}
                  </span>
                  <span>{lang.label}</span>
                </span>
                {isSelected && (
                  <span
                    className="material-symbols-outlined text-[16px] text-tropical"
                    aria-hidden="true"
                  >
                    check
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

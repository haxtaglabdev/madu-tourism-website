import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useCurrentLanguage, type SupportedLanguage } from "../../i18n/useCurrentLanguage";

interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
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
                <span className="text-base select-none" role="img" aria-label={lang.label}>
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
        className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/10 bg-white/80 py-1.5 px-3 text-xs font-medium text-charcoal/80 shadow-2xs backdrop-blur-md transition-all duration-200 hover:border-tropical/40 hover:bg-white hover:text-tropical focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tropical sm:py-2 sm:px-3.5"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <span className="text-sm select-none" role="img" aria-hidden="true">
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
                  <span className="text-base select-none" role="img" aria-hidden="true">
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

import { Link } from "react-router-dom";
import { useCurrentLanguage } from "../../i18n/useCurrentLanguage";
import Reveal from "../ui/Reveal";

export default function FinalCTA() {
  const { t, getLocalizedPath, isRussian } = useCurrentLanguage();

  return (
    <section
      className="relative w-full overflow-hidden bg-forest py-16 text-white sm:py-24"
      id="contact"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,201,74,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="mb-3 block text-[10px] font-semibold tracking-[0.2em] text-gold uppercase sm:text-xs sm:tracking-[0.25em]">
            {isRussian
              ? "Ваше путешествие по Шри-Ланке начинается"
              : "Your Private Sri Lanka Journey Begins"}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-5 font-serif text-[1.75rem] leading-[1.25] font-medium text-white sm:mb-6 sm:text-4xl md:text-[2.625rem]">
            {isRussian
              ? "Ваше цейлонское путешествие начинается здесь"
              : "Your Sri Lankan Journey Begins Here"}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/85 sm:mb-10 sm:text-base">
            {isRussian
              ? "Поделитесь вашими пожеланиями, и мы создадим индивидуальный маршрут по Шри-Ланке, выстроенный вокруг ваших интересов и комфортного ритма."
              : "Let us create a journey as unique as you are. Share your travel dreams with our team, and discover a personalised Sri Lankan experience crafted around your interests, pace, and style."}
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:scale-[1.01] hover:bg-sunset-hover"
              to={getLocalizedPath("/contact")}
            >
              {t("common.planYourTrip")}
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[13px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-white/20"
              href="https://wa.me/94770880425"
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-sm text-green-400">
                chat
              </span>
              <span>{isRussian ? "Написать нам в WhatsApp" : "Chat With Us on WhatsApp"}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";

export default function FinalCTA() {
  return (
    <section
      className="relative w-full overflow-hidden bg-forest py-16 text-white sm:py-24"
      id="contact"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,201,74,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="mb-3 block text-[10px] font-semibold tracking-[0.2em] text-gold uppercase sm:text-xs sm:tracking-[0.25em]">
            Your Private Sri Lanka Journey Begins
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-5 font-serif text-[1.75rem] font-medium text-white sm:mb-6 sm:text-5xl">
            Ready to Experience the Magic of Ceylon?
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed font-light text-white/80 sm:mb-10 sm:text-base">
            Speak directly with our senior destination designers in Colombo. We
            will tailor an exclusive day-by-day itinerary with verified hotel
            availability within 24 hours.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:scale-[1.01] hover:bg-sunset-hover"
              to="/contact"
            >
              Request Custom Itinerary
            </Link>
            {/* Placeholder WhatsApp number — replace with verified business contact */}
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[13px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-white/20"
              href="https://wa.me/94767006719"
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-sm text-green-400">
                chat
              </span>
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/Reveal";
import { useCurrentLanguage } from "../i18n/useCurrentLanguage";

export default function NotFound() {
  const { currentLang, getLocalizedPath } = useCurrentLanguage();
  const isRu = currentLang === "ru";

  return (
    <>
      <PageMeta
        excludeAlternates
        noIndex
        title={
          isRu
            ? "Страница не найдена | Madu Tseylon Tours"
            : "Page Not Found | Madu Tseylon Tours"
        }
      />
      <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-forest px-5 py-24 text-white sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,201,74,0.12),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="mb-3 block text-xs font-semibold tracking-[0.25em] text-gold uppercase">
              {isRu ? "404 — Маршрут не найден" : "404 — Path Not Found"}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mb-5 font-serif text-[2.125rem] leading-[1.2] font-medium text-white sm:text-4xl md:text-5xl">
              {isRu
                ? "Эта тропа никуда не ведет"
                : "This Trail Does Not Lead Anywhere"}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/85">
              {isRu
                ? "Возможно, страница была перемещена или адрес введен с ошибкой. Вернитесь на главную страницу, чтобы продолжить знакомство со Шри-Ланкой."
                : "The page you are looking for may have moved or never existed. Return home to continue exploring Sri Lanka with Madu Tseylon Tours."}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              className="inline-flex rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:bg-sunset-hover"
              to={getLocalizedPath("/")}
            >
              {isRu ? "Вернуться на главную" : "Back to Home"}
            </Link>
          </Reveal>
        </div>
      </main>
    </>
  );
}

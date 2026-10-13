import { useRef, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { images } from "../assets";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { useCurrentLanguage } from "../i18n/useCurrentLanguage";

interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  travelDates: string;
  travelers: string;
  destinations: string;
  tourType: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

function createInitialForm(packageName?: string | null, isRu = false): ContactFormState {
  const trimmed = packageName?.trim();
  const defaultMessage = trimmed
    ? isRu
      ? `Здравствуйте! Я хочу узнать подробности о туре "${trimmed}".`
      : `I would like to inquire about the "${trimmed}" package.`
    : "";

  return {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    travelDates: "",
    travelers: "",
    destinations: "",
    tourType: "",
    message: defaultMessage,
  };
}

/** Existing Madu Tseylon concierge WhatsApp number (digits only, with country code). */
const BUSINESS_WHATSAPP_NUMBER = "94770880425";

const VISIBLE_FIELDS: Array<keyof ContactFormState> = [
  "fullName",
  "email",
  "phone",
  "country",
  "message",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s().-]{8,25}$/;

const inputClass =
  "w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-muted/60 focus:border-tropical focus:ring-2 focus:ring-tropical/20";

const inputErrorClass =
  "border-sunset focus:border-sunset focus:ring-sunset/20";

const labelClass =
  "mb-1.5 block text-xs font-semibold tracking-wider text-charcoal uppercase";

function fieldClassName(hasError: boolean, extra = "") {
  return `${inputClass} ${hasError ? inputErrorClass : ""} ${extra}`.trim();
}

function displayValue(value: string, isRu = false) {
  return value.trim() || (isRu ? "Не указано" : "Not provided");
}

function isValidPhoneNumber(value: string) {
  const trimmed = value.trim();
  if (!PHONE_PATTERN.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

function validateContactForm(
  form: ContactFormState,
  t: (key: string) => string,
): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const fullName = form.fullName.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const country = form.country.trim();
  const message = form.message.trim();

  if (!fullName) {
    errors.fullName = t("contact.errors.fullNameRequired");
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = t("contact.errors.emailInvalid");
  }

  if (phone && !isValidPhoneNumber(phone)) {
    errors.phone = t("contact.errors.phoneInvalid");
  }

  if (form.country && !country) {
    errors.country = t("contact.errors.countryRequired");
  }

  if (form.message && !message) {
    errors.message = t("contact.errors.messageRequired");
  }

  return errors;
}

function buildInquiryMessage(
  form: ContactFormState,
  packageName: string | null | undefined,
  isRu: boolean,
) {
  if (isRu) {
    const packageLine = packageName?.trim()
      ? [`- Выбранный тур: ${packageName.trim()}`, ""]
      : [];

    return [
      "Здравствуйте, команда Madu Tseylon Tours!",
      "",
      "Я хочу спланировать поездку на Шри-Ланку.",
      "",
      "Мои контактные данные:",
      `- Имя: ${form.fullName.trim()}`,
      `- Email: ${form.email.trim()}`,
      `- Телефон / мессенджер: ${displayValue(form.phone, true)}`,
      `- Страна проживания: ${displayValue(form.country, true)}`,
      ...packageLine,
      "Пожелания к маршруту:",
      displayValue(form.message, true),
      "",
      "Буду ждать вашего ответа.",
      "",
      "Спасибо!",
    ].join("\n");
  }

  const packageLine = packageName?.trim()
    ? [`- Package: ${packageName.trim()}`, ""]
    : [];

  return [
    "Hello Madu Tseylon Tours!",
    "",
    "I would like to inquire about a trip to Sri Lanka.",
    "",
    "My Details",
    `- Full Name: ${form.fullName.trim()}`,
    `- Email: ${form.email.trim()}`,
    `- Phone: ${displayValue(form.phone)}`,
    `- Country: ${displayValue(form.country)}`,
    ...packageLine,
    "Additional Message:",
    displayValue(form.message),
    "",
    "I look forward to hearing from you.",
    "",
    "Thank you!",
  ].join("\n");
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get("package");
  const { currentLang } = useCurrentLanguage();

  return (
    <ContactPage
      key={`${currentLang}-${packageName ?? "general"}`}
      packageName={packageName}
    />
  );
}

function ContactPage({ packageName }: { packageName: string | null }) {
  const { t } = useTranslation();
  const { currentLang, getLocalizedPath } = useCurrentLanguage();
  const isRu = currentLang === "ru";

  const [form, setForm] = useState<ContactFormState>(() =>
    createInitialForm(packageName, isRu),
  );
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const isSubmittingRef = useRef(false);

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    const nextErrors = validateContactForm(form, t);
    setErrors(nextErrors);

    const firstInvalid = VISIBLE_FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      window.requestAnimationFrame(() => {
        document.getElementById(firstInvalid)?.focus();
      });
      return;
    }

    isSubmittingRef.current = true;
    const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildInquiryMessage(form, packageName, isRu),
    )}`;
    window.location.href = whatsappUrl;
    setSubmitted(true);
    window.setTimeout(() => {
      isSubmittingRef.current = false;
    }, 1000);
  };

  return (
    <>
      <PageMeta
        description={t("contact.metaDescription")}
        title={t("contact.metaTitle")}
      />
      <main>
        <PageHero
          description={t("contact.hero.description")}
          eyebrow={t("contact.hero.eyebrow")}
          highlight={t("contact.hero.highlight")}
          image={images.blueBeachContact}
          imageAlt={t("contact.hero.title") + t("contact.hero.highlight")}
          title={t("contact.hero.title")}
        />

        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="min-w-0 lg:col-span-4">
              <Reveal>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-tropical" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                    {isRu ? "Контактная информация" : "Contact Information"}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mb-6 font-serif text-[1.75rem] font-medium text-charcoal sm:text-3xl">
                  {t("contact.conciergeTitle")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mb-8 text-sm leading-relaxed font-light text-muted">
                  {t("contact.conciergeSubtitle")}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="space-y-5 rounded-2xl border border-border-subtle bg-soft-mint p-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tropical">
                      location_on
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                        {t("contact.officeLocation")}
                      </p>
                      <p className="mt-1 text-sm font-light text-muted">
                        {t("contact.officeAddress")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tropical">
                      call
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                        {isRu ? "Телефон" : "Phone"}
                      </p>
                      <a
                        className="mt-1 block text-sm font-light text-muted transition-colors hover:text-tropical"
                        href="tel:+94770880425"
                      >
                        +94 77 088 0425
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tropical">
                      mail
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                        {isRu ? "Электронная почта" : "Email"}
                      </p>
                      <a
                        className="mt-1 block break-all text-sm font-light text-muted transition-colors hover:text-tropical"
                        href="mailto:madutseylon@gmail.com"
                      >
                        madutseylon@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-tropical/30 bg-white px-3 py-1 text-[10px] font-semibold text-tropical">
                      <span className="h-1.5 w-1.5 rounded-full bg-tropical" />
                      {isRu ? "Круглосуточный консьерж онлайн" : "24/7 Island Concierge Online"}
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <a
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-tropical/30 bg-white px-6 py-3 text-[13px] font-medium tracking-wide text-tropical transition-all duration-300 hover:bg-soft-mint"
                  href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm text-green-600">
                    chat
                  </span>
                  {t("contact.whatsappButton")}
                </a>
              </Reveal>
            </div>

            <div className="min-w-0 lg:col-span-8">
              <Reveal>
                <div className="rounded-2xl border border-border-subtle bg-white p-4 shadow-sm sm:p-8">
                  <h2 className="mb-2 font-serif text-xl font-medium text-charcoal sm:text-2xl">
                    {t("contact.formTitle")}
                  </h2>
                  <p className="mb-8 text-sm font-light text-muted">
                    {t("contact.formSubtitle")}
                  </p>

                  <form
                    className="space-y-5"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="fullName">
                          {t("contact.fullNameLabel")}
                        </label>
                        <input
                          required
                          aria-describedby={
                            errors.fullName ? "fullName-error" : undefined
                          }
                          aria-invalid={Boolean(errors.fullName)}
                          className={fieldClassName(Boolean(errors.fullName))}
                          id="fullName"
                          name="fullName"
                          onChange={(e) =>
                            updateField("fullName", e.target.value)
                          }
                          placeholder={t("contact.fullNamePlaceholder")}
                          type="text"
                          value={form.fullName}
                        />
                        {errors.fullName ? (
                          <p
                            className="mt-1.5 text-xs text-sunset"
                            id="fullName-error"
                            role="alert"
                          >
                            {errors.fullName}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="email">
                          {t("contact.emailLabel")}
                        </label>
                        <input
                          required
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          aria-invalid={Boolean(errors.email)}
                          className={fieldClassName(Boolean(errors.email))}
                          id="email"
                          name="email"
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder={t("contact.emailPlaceholder")}
                          type="email"
                          value={form.email}
                        />
                        {errors.email ? (
                          <p
                            className="mt-1.5 text-xs text-sunset"
                            id="email-error"
                            role="alert"
                          >
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="phone">
                          {t("contact.phoneLabel")}
                        </label>
                        <input
                          aria-describedby={
                            errors.phone ? "phone-error" : undefined
                          }
                          aria-invalid={Boolean(errors.phone)}
                          className={fieldClassName(Boolean(errors.phone))}
                          id="phone"
                          name="phone"
                          onChange={(e) => updateField("phone", e.target.value)}
                          placeholder={t("contact.phonePlaceholder")}
                          type="tel"
                          value={form.phone}
                        />
                        {errors.phone ? (
                          <p
                            className="mt-1.5 text-xs text-sunset"
                            id="phone-error"
                            role="alert"
                          >
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="country">
                          {t("contact.countryLabel")}
                        </label>
                        <input
                          aria-describedby={
                            errors.country ? "country-error" : undefined
                          }
                          aria-invalid={Boolean(errors.country)}
                          className={fieldClassName(Boolean(errors.country))}
                          id="country"
                          name="country"
                          onChange={(e) =>
                            updateField("country", e.target.value)
                          }
                          placeholder={t("contact.countryPlaceholder")}
                          type="text"
                          value={form.country}
                        />
                        {errors.country ? (
                          <p
                            className="mt-1.5 text-xs text-sunset"
                            id="country-error"
                            role="alert"
                          >
                            {errors.country}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="message">
                        {t("contact.messageLabel")}
                      </label>
                      <textarea
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        aria-invalid={Boolean(errors.message)}
                        className={fieldClassName(
                          Boolean(errors.message),
                          "min-h-[140px] resize-y",
                        )}
                        id="message"
                        name="message"
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder={t("contact.messagePlaceholder")}
                        rows={5}
                        value={form.message}
                      />
                      {errors.message ? (
                        <p
                          className="mt-1.5 text-xs text-sunset"
                          id="message-error"
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        className="inline-flex w-full items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:scale-[1.01] hover:bg-sunset-hover sm:w-auto"
                        type="submit"
                      >
                        {t("contact.submitButton")}
                      </button>
                      <Link
                        className="text-center text-sm font-medium text-tropical transition-colors hover:text-forest sm:text-left"
                        to={getLocalizedPath("/tour-packages")}
                      >
                        {isRu ? "Или посмотреть все туры →" : "Or browse tour packages →"}
                      </Link>
                    </div>

                    {submitted && (
                      <p
                        className="rounded-xl border border-tropical/30 bg-soft-mint px-4 py-3 text-sm text-charcoal"
                        role="status"
                      >
                        {isRu
                          ? "Открывается WhatsApp с вашим запросом. Пожалуйста, проверьте текст и нажмите «Отправить» в WhatsApp."
                          : "WhatsApp is opening with your inquiry. Please review the message and tap Send in WhatsApp to deliver it."}
                      </p>
                    )}
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

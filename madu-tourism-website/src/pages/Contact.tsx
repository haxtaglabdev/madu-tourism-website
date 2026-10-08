import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";

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

const initialForm: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  travelDates: "",
  travelers: "",
  destinations: "",
  tourType: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-muted/60 focus:border-tropical focus:ring-2 focus:ring-tropical/20";

const labelClass =
  "mb-1.5 block text-xs font-semibold tracking-wider text-charcoal uppercase";

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Frontend-only form — no backend is connected yet.
    setSubmitted(true);
  };

  return (
    <>
      <PageMeta
        description="Contact Madu Tseylon Tours to plan a private Sri Lankan journey. Share your dates, destinations, and travel style."
        title="Contact | Madu Tseylon Tours"
      />
      <main>
        <PageHero
          description="Speak with our Colombo destination designers. Share your travel window and preferences — we will shape a private itinerary around your pace."
          eyebrow="Colombo Concierge"
          highlight="Journey"
          image={images.beachBoats}
          imageAlt="Boats along a Sri Lankan coastal bay"
          title="Let's Plan Your Sri Lankan"
        />

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-tropical" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                    Contact Information
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mb-6 font-serif text-3xl font-medium text-charcoal">
                  We Are Ready When You Are
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mb-8 text-sm leading-relaxed font-light text-muted">
                  Reach our island concierge team for custom itineraries,
                  package inquiries, or travel advice. Placeholder contact
                  details below — replace with verified business information.
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
                        Office
                      </p>
                      <p className="mt-1 text-sm font-light text-muted">
                        Level 4, Galle Road, Colombo 03, Sri Lanka
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tropical">
                      call
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                        Phone
                      </p>
                      <a
                        className="mt-1 block text-sm font-light text-muted transition-colors hover:text-tropical"
                        href="tel:+94112345678"
                      >
                        +94 11 234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tropical">
                      mail
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                        Email
                      </p>
                      <a
                        className="mt-1 block text-sm font-light text-muted transition-colors hover:text-tropical"
                        href="mailto:concierge@madutseylontours.com"
                      >
                        concierge@madutseylontours.com
                      </a>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-tropical/30 bg-white px-3 py-1 text-[10px] font-semibold text-tropical">
                      <span className="h-1.5 w-1.5 rounded-full bg-tropical" />
                      24/7 Island Concierge Online
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <a
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-tropical/30 bg-white px-6 py-3 text-[13px] font-medium tracking-wide text-tropical transition-all duration-300 hover:bg-soft-mint"
                  href="https://wa.me/94767006719"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-sm text-green-600">
                    chat
                  </span>
                  WhatsApp Concierge
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="mb-2 font-serif text-2xl font-medium text-charcoal">
                    Trip Inquiry Form
                  </h2>
                  <p className="mb-8 text-sm font-light text-muted">
                    Complete the form below. This is a frontend form only — no
                    messages are sent until a backend is connected.
                  </p>

                  <form
                    className="space-y-5"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="fullName">
                          Full Name
                        </label>
                        <input
                          required
                          className={inputClass}
                          id="fullName"
                          name="fullName"
                          onChange={(e) =>
                            updateField("fullName", e.target.value)
                          }
                          placeholder="Your full name"
                          type="text"
                          value={form.fullName}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="email">
                          Email
                        </label>
                        <input
                          required
                          className={inputClass}
                          id="email"
                          name="email"
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="you@example.com"
                          type="email"
                          value={form.email}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="phone">
                          Phone
                        </label>
                        <input
                          className={inputClass}
                          id="phone"
                          name="phone"
                          onChange={(e) => updateField("phone", e.target.value)}
                          placeholder="+1 555 000 0000"
                          type="tel"
                          value={form.phone}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="country">
                          Country
                        </label>
                        <input
                          className={inputClass}
                          id="country"
                          name="country"
                          onChange={(e) =>
                            updateField("country", e.target.value)
                          }
                          placeholder="Your country"
                          type="text"
                          value={form.country}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="travelDates">
                          Travel Dates
                        </label>
                        <input
                          className={inputClass}
                          id="travelDates"
                          name="travelDates"
                          onChange={(e) =>
                            updateField("travelDates", e.target.value)
                          }
                          placeholder="e.g. March 2027"
                          type="text"
                          value={form.travelDates}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="travelers">
                          Number of Travelers
                        </label>
                        <input
                          className={inputClass}
                          id="travelers"
                          min={1}
                          name="travelers"
                          onChange={(e) =>
                            updateField("travelers", e.target.value)
                          }
                          placeholder="2"
                          type="number"
                          value={form.travelers}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="destinations">
                          Preferred Destinations
                        </label>
                        <input
                          className={inputClass}
                          id="destinations"
                          name="destinations"
                          onChange={(e) =>
                            updateField("destinations", e.target.value)
                          }
                          placeholder="Sigiriya, Ella, Yala…"
                          type="text"
                          value={form.destinations}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="tourType">
                          Tour Type
                        </label>
                        <select
                          className={inputClass}
                          id="tourType"
                          name="tourType"
                          onChange={(e) =>
                            updateField("tourType", e.target.value)
                          }
                          value={form.tourType}
                        >
                          <option value="">Select a preference</option>
                          <option value="classic">Classic Cultural</option>
                          <option value="highland">Highland &amp; Tea</option>
                          <option value="wildlife">Wildlife &amp; Beach</option>
                          <option value="custom">Fully Custom</option>
                          <option value="honeymoon">Honeymoon</option>
                          <option value="family">Family</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className={`${inputClass} min-h-[140px] resize-y`}
                        id="message"
                        name="message"
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder="Tell us about your ideal Sri Lankan journey…"
                        rows={5}
                        value={form.message}
                      />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        className="inline-flex items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:scale-[1.01] hover:bg-sunset-hover"
                        type="submit"
                      >
                        Send Inquiry
                      </button>
                      <Link
                        className="text-sm font-medium text-tropical transition-colors hover:text-forest"
                        to="/tour-packages"
                      >
                        Or browse tour packages →
                      </Link>
                    </div>

                    {submitted && (
                      <p
                        className="rounded-xl border border-tropical/30 bg-soft-mint px-4 py-3 text-sm text-charcoal"
                        role="status"
                      >
                        Thank you — your inquiry details are ready on this form.
                        A backend is not connected yet, so nothing has been
                        emailed. Please contact us by phone, email, or WhatsApp
                        to continue planning.
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

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Inquiry — AXIS Atelier" },
      { name: "description", content: "Commission a new project, request a portfolio, or visit the studio in Zürich." },
      { property: "og:title", content: "Inquiry — AXIS Atelier" },
      { property: "og:description", content: "Commission a new project, request a portfolio, or visit the studio in Zürich." },
    ],
  }),
  component: ContactPage,
});

const contractTypes = [
  "Residential — New build",
  "Residential — Renovation",
  "Cultural / Institutional",
  "Public landscape",
  "Commercial / Workplace",
  "Research / Lecture",
  "Other",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav variant="solid" />

      <section className="px-6 md:px-10 pt-24 pb-20 max-w-screen-2xl mx-auto w-full">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          [ 03 ] Inquiry
        </span>
        <h1 className="font-display font-extrabold italic text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tighter uppercase mt-8 text-balance">
          Begin a<br />commission.
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left column — context */}
          <aside className="md:col-span-4 flex flex-col gap-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We accept three to four new commissions each year. Briefs are reviewed personally by Elias Vance. A reply follows within ten working days.
            </p>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                Direct
              </span>
              <a
                href="mailto:studio@axisatelier.com"
                className="text-xl underline decoration-foreground/20 underline-offset-8 hover:decoration-foreground transition-all"
              >
                studio@axisatelier.com
              </a>
              <a href="tel:+41442000200" className="text-xl">
                +41 44 200 02 00
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                Visit
              </span>
              <address className="not-italic leading-relaxed text-muted-foreground">
                Bluelock Architects<br />
                Nairobi Kenya<br />
                Biashara Street
              </address>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                By appointment · Tue — Fri
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-7 md:col-start-6">
            {submitted ? (
              <div className="border-t border-foreground/10 pt-12">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Received
                </span>
                <h2 className="font-display font-extrabold text-5xl tracking-tighter uppercase mt-6 leading-none">
                  Thank you.
                </h2>
                <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
                  Your brief has been delivered to the atelier. Elias will respond personally within ten working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <Field label="Full Name" name="name" required placeholder="Your name" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Field label="Email" name="email" type="email" required placeholder="you@domain.com" />
                  <Field label="Telephone" name="phone" placeholder="+41 …" />
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="contract"
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Contract Type
                  </label>
                  <select
                    id="contract"
                    name="contract"
                    required
                    className="bg-transparent border-b border-foreground/30 py-3 text-lg focus:outline-none focus:border-foreground transition-colors appearance-none"
                  >
                    <option value="">— select —</option>
                    {contractTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Field label="Site / Location" name="location" placeholder="City, country" />
                  <Field label="Indicative Budget" name="budget" placeholder="Optional" />
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    The Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe the project — site, programme, ambitions, timing."
                    className="bg-transparent border-b border-foreground/30 py-3 text-lg focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start group flex items-center gap-4 bg-ink text-ink-foreground px-10 py-5 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-foreground transition-colors"
                >
                  Send Inquiry
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-foreground/40">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-foreground/30 py-3 text-lg focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}

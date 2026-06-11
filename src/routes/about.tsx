import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — Bluelock Architects " },
      { name: "description", content: "Fifteen years of practice. Awards, recognitions, and the philosophy behind AXIS Atelier." },
      { property: "og:title", content: "Studio — AXIS Atelier" },
      { property: "og:description", content: "Fifteen years of practice. Awards, recognitions, and the philosophy behind AXIS Atelier." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2024", title: "Global Design Excellence Award", body: "Recognized for innovative approaches to sustainable architecture and public space design." },
{ year: "2023", title: "Horizon Cultural Center Completed", body: "A 9,000 m² multidisciplinary arts venue opened to critical acclaim and public engagement." },
{ year: "2021", title: "International Design Recognition", body: "Honored for the award-winning Riverside Pavilion project and its environmental impact." },
{ year: "2019", title: "Collected Works Publication", body: "Released a comprehensive monograph showcasing design philosophy, projects, and research." },
{ year: "2016", title: "Studio Expansion", body: "Practice grew into a multidisciplinary team of designers, architects, and researchers." },
{ year: "2012", title: "Studio Founded", body: "Established an independent design practice focused on contemporary architecture and urban innovation." },
{ year: "2009", title: "Master of Architecture", body: "Graduated with distinction, specializing in sustainable design and environmental systems." }
];

const recognition = [
  "Global Design Award, 2024",
  "Architecture Excellence Recognition, 2023",
  "Sustainable Innovation Award, 2022",
  "Urban Design Competition — Finalist, 2021",
  "Contemporary Practice Award, 2020",
  "Emerging Talent Recognition, 2019",
  "Residential Design Award, 2018",
  "Selected Works Publication, 2017 · 2020 · 2023"
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav variant="solid" />

      {/* Header */}
      <section className="px-6 md:px-10 pt-24 pb-20 max-w-screen-2xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          [ 01 ] The Studio
        </span>
        <h1 className="font-display font-extrabold italic text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tighter uppercase mt-8 text-balance">
          A practice<br />of patience.
        </h1>
      </section>

      {/* Portrait + bio */}
      <section className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img
              // src={portrait}
              // alt="Portrait of Elias Vance, principal architect at AXIS Atelier"
              width={960}
              height={1280}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover grayscale"
            />
            <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex justify-between">
              <span>Elias Vance, Principal</span>
              <span>Photo: M. Lindt, 2023</span>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
            <p className="font-display text-2xl md:text-3xl leading-[1.25] tracking-tight">
              Bluelock Architects was founded in 2012 around a single, durable conviction: that buildings should age the way landscapes do — slowly, openly, and without apology.
            </p>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Before founding the studio, Bluelock spent a decade working with leading architecture and design firms across East Africa, contributing to landmark commercial, residential, and civic projects. Today, the practice brings together a multidisciplinary team of architects, designers, visualizers, and project coordinators who collaborate from a creative studio in Nairobi.
                Our work is concerned with weight, weather, and the small movements of light through a day. We accept fewer than four commissions a year. Each begins with months of drawing — on paper, by hand — before any line touches a screen.
              </p>
              <p>
                Built works span private residences, cultural institutions, public landscapes, and small ecclesiastical projects across Kenya, Japan, Iceland, and the United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-10 py-32 bg-paper">
        <div className="max-w-screen-2xl mx-auto">
          <header className="flex justify-between items-baseline border-b border-foreground/10 pb-4 mb-16">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Chronology
            </h2>
            <span className="font-mono text-[10px] text-muted-foreground uppercase">
              2009 — Present
            </span>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12">
            {timeline.map((item) => (
              <div key={item.year} className="contents">
                <div className="md:col-span-2 font-display font-extrabold text-4xl tracking-tighter">
                  {item.year}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-6 text-muted-foreground leading-relaxed">
                  {item.body}
                </div>
                <div className="md:col-span-12 border-b border-foreground/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="px-6 md:px-10 py-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Recognition
            </span>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tighter uppercase mt-6 leading-none">
              Selected<br />Awards
            </h2>
          </div>
          <ul className="md:col-span-7 md:col-start-6 flex flex-col">
            {recognition.map((item) => (
              <li
                key={item}
                className="py-6 border-b border-foreground/10 flex items-baseline gap-6"
              >
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  ◆
                </span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

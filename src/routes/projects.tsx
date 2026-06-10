import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Bluelock Architects" },
      { name: "description", content: "Selected works by AXIS Atelier — residential, cultural, and public architecture from 2012 to present." },
      { property: "og:title", content: "Projects — Bluelock Architects" },
      { property: "og:description", content: "Selected works by Bluelock Architects — residential, cultural, and public architecture." },
      { property: "og:image", content: projects[0].image },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav variant="solid" />

      {/* Header */}
      <section className="px-6 md:px-10 pt-24 pb-20 max-w-screen-2xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          [ 02 ] Selected Works
        </span>
        <h1 className="font-display font-extrabold italic text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tighter uppercase mt-8 text-balance">
          The Archive
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
          A monograph of built works, ongoing commissions, and selected research from 2012 to present. Each project is documented in long form upon request.
        </p>
      </section>

      {/* Monograph */}
      <section className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto">
        <header className="flex justify-between items-baseline border-b border-foreground/10 pb-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Index — 04 Works
          </span>
          <span className="font-mono text-[10px] text-muted-foreground uppercase">
            Plate View
          </span>
        </header>

        <div className="flex flex-col gap-32">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:col-span-7 [direction:ltr]">
                <div className="aspect-[4/3] overflow-hidden bg-paper">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex justify-between">
                  <span>Plate {p.index}</span>
                  <span>{p.location}</span>
                </div>
              </div>

              <div className="md:col-span-5 [direction:ltr] flex flex-col gap-6 md:pt-12">
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  {p.index} / {p.typology}
                </span>
                <h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tighter uppercase leading-[0.9]">
                  {p.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A study in {p.typology.toLowerCase()} architecture exploring the threshold between interior atmosphere and exterior weather. The project responds to the specific gravity of its site through restrained material palettes and deeply considered apertures.
                </p>
                <dl className="grid grid-cols-2 gap-y-4 mt-4 pt-6 border-t border-foreground/10 font-mono text-[11px] uppercase tracking-widest">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd>{p.location}</dd>
                  <dt className="text-muted-foreground">Area</dt>
                  <dd>{p.area}</dd>
                  <dt className="text-muted-foreground">Status</dt>
                  <dd>{p.year}</dd>
                  <dt className="text-muted-foreground">Typology</dt>
                  <dd>{p.typology}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

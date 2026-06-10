import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bluelock Architects — Architecture of Silence & Form" },
      { name: "description", content: "Independent architecture practice. Selected works, monographs, and inquiries from Zurich." },
      { property: "og:title", content: "Bluelock Architects — Architecture of Silence & Form" },
      { property: "og:description", content: "Independent architecture practice. Selected works, monographs, and inquiries from Zurich." },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav variant="overlay" />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Brutalist concrete building facade with sharp shadows and glass reflections"
            width={1920}
            height={1280}
            className="w-full h-full object-cover animate-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/20" />
        </div>

        <div className="relative z-10 p-8 md:p-16 max-w-7xl animate-reveal [animation-delay:400ms]">
          <h1 className="font-display font-extrabold italic text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tighter text-white uppercase text-balance mb-8">
            Silence<br />& Form
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <p className="text-white/80 text-lg leading-relaxed max-w-sm">
              Architecture is the learned game, correct and magnificent, of forms assembled in the light.
            </p>
            <div className="md:col-start-3 flex flex-col gap-1">
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
                Current Project
              </span>
              <span className="text-white text-sm">The Obsidian Pavilion, Reykjavik</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — Who I am */}
      <section className="px-6 md:px-10 py-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              [ 00 ] Introduction
            </span>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-balance">
              I am <span className="italic">Elias Vance</span>, an architect working between the disciplines of building, drawing, and writing. For the last fifteen years I have built houses, galleries, and public works that begin from a single question — <span className="italic">what does the light want to do here?</span>
            </p>
            <div className="mt-12 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>Principal Architect</span>
              <span>·</span>
              <span>RIBA · SIA</span>
              <span>·</span>
              <span>Based in Nairobi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto">
        <header className="flex justify-between items-baseline border-b border-foreground/10 pb-4 mb-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Selected Works [01—04]
          </h2>
          <Link
            to="/projects"
            className="font-mono text-[10px] text-muted-foreground uppercase hover:text-foreground transition-colors"
          >
            Full Index →
          </Link>
        </header>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects"
              className="group flex flex-col md:flex-row justify-between py-12 border-b border-foreground/5 hover:bg-paper transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-12 flex-1">
                <span className="font-mono text-xs text-muted-foreground mt-2">{p.index}</span>
                <div className="flex flex-col">
                  <h3 className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter uppercase group-hover:italic transition-all">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {p.description} — {p.location}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-64 aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={512}
                  height={384}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-12 font-mono text-[11px] text-muted-foreground flex flex-col items-start md:items-end justify-center">
                <span>{p.area}</span>
                <span>{p.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

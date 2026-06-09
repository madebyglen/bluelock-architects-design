import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground px-6 md:px-10 pt-32 pb-16">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6 flex flex-col gap-12">
          <h4 className="font-display font-extrabold text-5xl md:text-6xl tracking-tighter uppercase leading-none">
            AXIS ATELIER
          </h4>
          <p className="text-stone-400 text-xl max-w-lg leading-relaxed">
            An independent practice exploring the intersection of heavy materials and atmospheric light. Founded in 2012, we build monuments to the everyday.
          </p>
        </div>
        <div className="md:col-start-9 md:col-span-4 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
              Inquiries
            </span>
            <a
              href="mailto:studio@axisatelier.com"
              className="text-xl hover:text-stone-400 transition-colors underline decoration-stone-700 underline-offset-8"
            >
              studio@axisatelier.com
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
              Office
            </span>
            <address className="not-italic text-stone-400 leading-relaxed">
              Gartenstrasse 42<br />
              8002 Zürich, Switzerland
            </address>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
              Navigate
            </span>
            <div className="flex flex-col gap-2 text-stone-300">
              <Link to="/projects" className="hover:text-white transition-colors w-fit">Projects</Link>
              <Link to="/about" className="hover:text-white transition-colors w-fit">Studio</Link>
              <Link to="/contact" className="hover:text-white transition-colors w-fit">Inquiry</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-32 pt-8 border-t border-stone-800 flex flex-col md:flex-row gap-4 justify-between items-center font-mono text-[10px] text-stone-600 uppercase tracking-widest">
        <span>© 2024 AXIS Atelier — All works protected</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-stone-400">Instagram</a>
          <a href="#" className="hover:text-stone-400">Journal</a>
        </div>
      </div>
    </footer>
  );
}

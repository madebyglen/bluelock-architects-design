import { Link } from "@tanstack/react-router";

interface SiteNavProps {
  variant?: "overlay" | "solid";
}

export function SiteNav({ variant = "overlay" }: SiteNavProps) {
  const isOverlay = variant === "overlay";
  return (
    <nav
      className={
        isOverlay
          ? "fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 md:px-10 py-8 flex justify-between items-end text-white"
          : "sticky top-0 left-0 right-0 z-50 bg-background border-b border-foreground/10 px-6 md:px-10 py-6 flex justify-between items-end text-foreground"
      }
    >
      <Link to="/" className="flex flex-col group">
        <span className="font-display font-extrabold text-2xl tracking-tighter uppercase leading-none">
          Bluelock Architects
        </span>
        <span className="font-mono text-[10px] opacity-60 tracking-widest uppercase mt-1">
          bluelock ©2026
        </span>
      </Link>
      <div className="flex gap-6 md:gap-12 font-mono text-[11px] uppercase tracking-widest">
        <Link
          to="/projects"
          className="hover:opacity-50 transition-opacity"
          activeProps={{ className: "opacity-50" }}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="hover:opacity-50 transition-opacity"
          activeProps={{ className: "opacity-50" }}
        >
          Studio
        </Link>
        <Link
          to="/contact"
          className="hover:opacity-50 transition-opacity"
          activeProps={{ className: "opacity-50" }}
        >
          Inquiry
        </Link>
      </div>
    </nav>
  );
}

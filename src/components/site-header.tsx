import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { registerUrl } from "@/lib/events";


const links = [
  ["2024", "/2024"],
  ["2025", "/2025"],
  ["This year", "/"],
  ["Hackathon", "/hackathon"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-[4px] border-black bg-white">
      <div className="site-container flex h-18 items-center justify-between gap-5">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Qiskit Fall Fest OAU home">
          {/* <span className="brand-mark"><Atom aria-hidden="true" /></span> */}
          <img src="icon.svg" />
          <span className="font-black text-sm sm:text-base text-black uppercase tracking-tight hidden md:inline-block">Qiskit Fall Fest <span className="text-primary">OAU</span></span>
        </Link>
        <nav className="scrollbar-none flex items-center gap-1 overflow-x-auto" aria-label="Main navigation">
          {links.map(([label, to]) =>
            to === "/" ? (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: true }}
                className="group flex items-center gap-1.5 whitespace-nowrap font-black text-black px-3 py-2 rounded-lg border-2 border-black bg-[#FBBC04] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
                activeProps={{ className: "bg-[#FBBC04] -translate-y-0.5" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#EA4335] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EA4335] border border-black" />
                </span>
                {label}
              </Link>
            ) : (
              <Link key={to} to={to} className="whitespace-nowrap font-bold text-black px-3 py-2 rounded-lg border-2 border-transparent hover:border-black hover:bg-[#f1f3f4] transition-colors" activeProps={{ className: "font-black bg-[#f1f3f4] border-black" }}>{label}</Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="bg-[#8B5CF6] text-white hover:bg-[#7c3aed] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
            <a href={registerUrl} target="_blank" rel="noreferrer">Register <ArrowUpRight /></a>
          </Button>
        </div>

      </div>
    </header>
  );
}
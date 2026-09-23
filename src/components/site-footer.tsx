import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t-[4px] border-black bg-white text-black py-16">
      <div className="site-container grid gap-12 md:grid-cols-[1.4fr_1fr] mb-16">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-black bg-[#FBBC04] px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">OAU · Ile-Ife, Nigeria</p>
          <p className="mt-4 max-w-xl text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Building a generation that can understand, use, and shape quantum technology.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Link to="/2024" className="font-black text-xl hover:bg-black hover:text-white px-4 py-2 border-2 border-transparent hover:border-black rounded-xl transition-all">2024 archive</Link>
          <Link to="/2025" className="font-black text-xl hover:bg-black hover:text-white px-4 py-2 border-2 border-transparent hover:border-black rounded-xl transition-all">2025 archive</Link>
          <Link to="/2026" className="font-black text-xl hover:bg-black hover:text-white px-4 py-2 border-2 border-transparent hover:border-black rounded-xl transition-all">2026 programme</Link>
          <Link to="/partnership" className="font-black text-xl hover:bg-black hover:text-white px-4 py-2 border-2 border-transparent hover:border-black rounded-xl transition-all inline-flex items-center gap-2">Partnership <ArrowUpRight className="w-6 h-6" /></Link>
        </div>
      </div>
      <div className="site-container border-t-[4px] border-black pt-12">
        <p className="text-sm font-black uppercase tracking-widest mb-8">Hosted with</p>
        <ul className="flex flex-wrap gap-12 items-center">
          <li>
            <img src="/OAU-logo.png" alt="Obafemi Awolowo University crest" className="h-20" />
          </li>
          <li>
            <img src="/qiskit_white.png" alt="Qiskit logo" className="h-12 invert" />
          </li>
          <li>
            <img src="/icon.svg" alt="GDG on Campus OAU" className="h-16" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

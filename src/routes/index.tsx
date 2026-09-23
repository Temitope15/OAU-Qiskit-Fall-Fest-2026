import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventYears, registerUrl } from "@/lib/events";
import { TeamSection } from "@/components/team-section";
import heroArt from "@/assets/qiskit-fall-fest-2026-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qiskit Fall Fest OAU | Quantum for Young Minds" },
      { name: "description", content: "Explore Qiskit Fall Fest at OAU: our 2024–2026 journey bringing practical quantum computing to young Nigerians." },
      { property: "og:title", content: "Qiskit Fall Fest OAU" },
      { property: "og:description", content: "Three editions. One growing quantum computing community in Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col justify-center py-24 bg-[#EA4335] border-b-4 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full border-[8px] border-black bg-black opacity-10 transform translate-x-1/4 -translate-y-1/4" />
        <div className="site-container relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-4 mb-8">
               <span className="bg-[#f1f3f4] text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm inline-flex items-center gap-2 transform -rotate-1">
                 <CalendarDays className="w-4 h-4" /> 27–28 November 2026
               </span>
               <span className="bg-[#FBBC04] text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm inline-flex items-center gap-2 transform rotate-1">
                 <MapPin className="w-4 h-4" /> OAU
               </span>
            </div>
            
            <p className="text-white font-black uppercase tracking-widest mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-xl">2026 IBM Qiskit Fall Fest Plus</p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              Quantum computing for <br />
              <span className="text-black bg-[#FBBC04] px-4 py-1 leading-[1.2] inline-block border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-4 transform -rotate-2">young Nigerian minds.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-2xl bg-white text-black p-6 rounded-2xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Two focused programmes. Five secondary schools. An open university community. One practical invitation to help shape Africa’s quantum future.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={registerUrl} target="_blank" rel="noreferrer" className="bg-[#4285F4] text-white px-8 py-4 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2">
                Register now <ArrowUpRight className="w-6 h-6" />
              </a>
              <Link to="/2026" className="bg-[#FBBC04] text-black px-8 py-4 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2">
                Explore 2026 <ArrowRight className="w-6 h-6" />
              </Link>
              <Link to="/partnership" className="bg-white text-black px-8 py-4 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2">
                Partnership
              </Link>
            </div>
            
            <p className="mt-12 max-w-md font-bold text-lg text-white bg-black/80 p-4 rounded-xl border-2 border-black">
              An annual learning programme hosted at OAU, growing from a student challenge into a wider platform for access, research culture, and collaboration.
            </p>
          </div>
          
          <div className="relative mt-8 lg:mt-0 lg:ml-auto w-full max-w-md hidden md:block">
             <div className="bg-[#f1f3f4] p-4 rounded-[2rem] border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
               <img src={heroArt} alt="Hero Art" className="rounded-xl border-[4px] border-black w-full" />
             </div>
          </div>
        </div>
      </section>

      {/* Trajectory */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 bg-black text-white border-b-4 border-black">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest text-[#34A853] mb-6">Our trajectory</p>
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Three years of turning curiosity into capability.
            </h2>
            <p className="text-xl font-bold text-black leading-relaxed bg-[#34A853] p-6 border-[4px] border-white rounded-2xl shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transform rotate-1">
              Each edition has its own character, while every year advances the same mission: make quantum computing tangible and reachable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {eventYears.map((event, index) => (
              <Link key={event.year} to={event.href} className={`group p-8 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-2 transition-transform ${index === 0 ? 'bg-[#EA4335]' : index === 1 ? 'bg-[#FBBC04]' : 'bg-[#4285F4]'}`}>
                <span className="bg-black text-white px-4 py-2 rounded-lg font-black tracking-widest text-sm border-2 border-white w-fit shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mb-8">
                  0{index + 1} / {event.status}
                </span>
                <span className="text-6xl font-black mb-4 text-black drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">{event.year}</span>
                <span className="text-2xl font-black mb-4 text-black">{event.title}</span>
                <span className="font-bold text-black text-lg leading-relaxed">{event.summary}</span>
                <ArrowRight className="mt-8 text-black w-10 h-10 transition-transform group-hover:translate-x-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 bg-[#f1f3f4] border-b-4 border-black">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest text-[#EA4335] mb-6">Why this matters</p>
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Africa should help define the quantum era—not only observe it.
            </h2>
            <p className="text-xl font-bold text-black leading-relaxed bg-[#FBBC04] p-6 border-[4px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              Exposure becomes confidence. Confidence becomes participation. Participation is how new research communities begin.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "05", title: "Schools invited", desc: "A deliberate mix of public, private, mixed, and all-female institutions in Ile-Ife." },
              { num: "02", title: "Learning pathways", desc: "Age-appropriate experiences for secondary school and university students." },
              { num: "01", title: "Shared ambition", desc: "Developing quantum awareness, technical confidence, and a research culture in Nigeria." }
            ].map((block) => (
              <div key={block.num} className="bg-white p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
                <span className="text-6xl font-black text-transparent [-webkit-text-stroke:2px_black] mb-6">{block.num}</span>
                <h3 className="text-3xl font-black mb-4">{block.title}</h3>
                <p className="font-bold text-gray-700 leading-relaxed text-lg">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Partnership */}
      <section className="w-full py-32 bg-[#34A853] border-b-4 border-black text-black">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-black bg-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">Partnership</p>
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Help make first encounters with quantum computing count.
            </h2>
          </div>
          <Link to="/partnership" className="shrink-0 bg-black text-white px-10 py-6 rounded-2xl border-[4px] border-black shadow-[8px_8px_0px_0px_#FBBC04] font-black text-2xl hover:-translate-y-2 transition-transform inline-flex items-center gap-3 transform rotate-2">
            Build with us <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}

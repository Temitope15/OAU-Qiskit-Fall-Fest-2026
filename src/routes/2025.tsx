import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CircleDashed, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/2025")({ head: () => ({ meta: [
  { title: "Qiskit Fall Fest OAU 2025 | Momentum" }, { name: "description", content: "The developing archive for Qiskit Fall Fest OAU 2025—the bridge between our inaugural edition and our expanded 2026 programme." },
  { property: "og:title", content: "Qiskit Fall Fest OAU 2025" }, { property: "og:description", content: "Momentum: the 2025 chapter of OAU’s quantum community." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Page });

function Page() { 
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 overflow-hidden">
      
      {/* Navigation */}
      <div className="w-full border-b-4 border-black bg-white py-4 flex justify-center gap-4">
        <Link to="/2024" className="bg-[#f1f3f4] px-4 py-2 border-[3px] border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black hover:-translate-y-1 transition-transform flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to 2024
        </Link>
        <Link to="/2026" className="bg-black text-white px-4 py-2 border-[3px] border-black rounded-lg shadow-[2px_2px_0px_0px_#FBBC04] font-black hover:-translate-y-1 transition-transform flex items-center gap-2">
          Forward to 2026 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hero 2025 */}
      <section className="w-full min-h-[70vh] flex flex-col justify-center py-20 border-b-4 border-black bg-[#FBBC04] relative">
        <div className="absolute top-10 right-10 w-[30rem] h-[30rem] rounded-full border-[8px] border-black opacity-20 transform -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[20rem] h-[20rem] rounded-full border-[6px] border-black opacity-20 transform translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="site-container relative flex flex-col items-center text-center">
          <div className="bg-black text-white px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm mb-8 transform rotate-1">
            Archive in progress
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter mb-8 leading-[0.8] text-black">
            MOMENTUM<br/><span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">’25</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold max-w-3xl leading-relaxed mt-6 bg-white p-6 rounded-2xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            The middle chapter in a growing story—preserved honestly while its programme details, people, and outcomes are gathered.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 bg-white border-b-4 border-black">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-10 mb-24">
            {[
              ["01", "Programme", "Dates, sessions, and event format", "bg-[#4285F4]"],
              ["02", "People", "Speakers, volunteers, and participants", "bg-[#34A853]"],
              ["03", "Evidence", "Photographs, outcomes, and recognitions", "bg-[#EA4335]"]
            ].map(([n, t, d, color]) => (
              <div key={n} className="bg-[#f1f3f4] p-8 md:p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full hover:-translate-y-2 transition-transform">
                <div className={`w-16 h-16 rounded-xl ${color} border-[4px] border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white text-3xl font-black`}>
                  {n}
                </div>
                <h2 className="text-3xl font-black mb-4">{t}</h2>
                <p className="text-gray-700 font-bold text-lg flex-grow mb-10">{d}</p>
                <div className="mt-auto flex items-center gap-2 text-sm font-black uppercase tracking-widest bg-white w-fit px-4 py-2 border-2 border-black rounded-lg">
                  <CircleDashed className="w-5 h-5" /> Record pending
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black text-white p-10 md:p-16 rounded-[2.5rem] border-[6px] border-[#FBBC04] shadow-[10px_10px_0px_0px_#FBBC04] flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-black text-[#FBBC04] uppercase tracking-widest mb-4">What we know</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                This edition belongs in the story—even before its archive is complete.
              </h2>
            </div>
            <Link to="/2026" className="shrink-0 bg-white text-black px-8 py-5 rounded-2xl border-[4px] border-[#4285F4] shadow-[6px_6px_0px_0px_#4285F4] font-black text-xl hover:-translate-y-1 transition-transform flex items-center gap-3">
              Continue to 2026 <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  ); 
}

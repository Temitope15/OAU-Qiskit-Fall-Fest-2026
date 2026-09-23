import { createFileRoute } from "@tanstack/react-router";
import { Check, MoveUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { programme2024 } from "@/lib/events";

export const Route = createFileRoute("/2024")({
  head: () => ({ meta: [
    { title: "Qiskit Fall Fest OAU 2024 | The First Signal" },
    { name: "description", content: "Revisit OAU’s inaugural Qiskit Fall Fest: a 24-day learning challenge, examination, hackathon, and final event." },
    { property: "og:title", content: "Qiskit Fall Fest OAU 2024" },
    { property: "og:description", content: "The first signal: where OAU’s quantum learning journey began." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() { 
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* Navigation */}
      <div className="w-full border-b-4 border-black bg-[#f1f3f4] py-4 flex justify-center gap-4">
        <Link to="/2025" className="bg-white px-4 py-2 border-[3px] border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black hover:-translate-y-1 transition-transform flex items-center gap-2">
          Forward to 2025 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hero 2024 */}
      <section className="w-full min-h-[70vh] flex flex-col justify-center py-20 border-b-4 border-black bg-[#EA4335] text-white">
        <div className="site-container relative flex flex-col items-center text-center">
          <div className="bg-[#FBBC04] text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm mb-8 transform -rotate-2">
            Concluded · Ile-Ife
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-8 leading-none">
            THE FIRST<br />SIGNAL
          </h1>
          <div className="absolute top-0 right-0 md:right-10 bg-white text-black w-32 h-32 rounded-full border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center transform rotate-12">
            <span className="text-4xl font-black">2024</span>
            <span className="text-lg font-bold">OAU</span>
          </div>
          <p className="text-xl md:text-3xl font-bold max-w-2xl leading-relaxed mt-6">
            Our inaugural edition turned twenty-four days of guided learning into examination, experimentation, and a student-built hackathon.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 border-b-4 border-black bg-[#f1f3f4]">
        <div className="site-container grid lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24">
          <div>
            <p className="text-sm font-black uppercase tracking-widest mb-4 bg-black text-white inline-block px-3 py-1 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">18 October — 23 November</p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mt-6 mb-8">
              From notebooks to a final room.
            </h2>
            <p className="text-xl text-gray-700 font-bold leading-relaxed mb-10">
              A beginner-friendly journey built around auto-graded notebooks, open-ended practice, community support, and a chance to present what participants learned.
            </p>
            <div className="space-y-4">
              {["Self-paced learning", "Practical Qiskit experience", "Hackathon teamwork", "Community talks"].map(x => (
                <div key={x} className="flex items-center gap-4 bg-white p-4 border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-8 h-8 rounded-full bg-[#34A853] border-2 border-black flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <span className="font-black text-lg">{x}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {programme2024.map(([date, title, detail], i) => (
              <div key={title} className="bg-white p-8 rounded-[2rem] border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative flex flex-col md:flex-row gap-6 hover:-translate-y-2 transition-transform">
                <div className="text-6xl font-black text-gray-200 shrink-0 leading-none">0{i+1}</div>
                <div>
                  <div className="text-sm font-black text-[#EA4335] uppercase tracking-widest mb-2 border-b-2 border-black inline-block pb-1">{date}</div>
                  <h3 className="text-2xl font-black mb-3">{title}</h3>
                  <p className="text-gray-700 font-bold leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Assembly */}
      <section className="w-full py-24 bg-white">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest mb-6">The record continues</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              The 2024 gallery is being assembled.
            </h2>
            <div className="bg-[#FBBC04] p-10 rounded-[2rem] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl font-bold leading-relaxed mb-8 text-black">
                We’re preserving the photographs, participant outcomes, and stories that complete this first chapter. If you took part, your record can help us tell it well.
              </p>
              <a href="https://quantum-computing-club-gdg-campus-oau.github.io/qiskit-fall-fest24/" target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-4 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg inline-flex items-center gap-2 hover:-translate-y-1 transition-transform">
                Visit original 2024 site <MoveUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

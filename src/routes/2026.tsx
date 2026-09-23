import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, Laptop, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamSection } from "@/components/team-section";
import { hackathonTracks, registerUrl, schools2026 } from "@/lib/events";
import heroArt from "@/assets/qiskit-fall-fest-2026-hero.jpg";

export const Route = createFileRoute("/2026")({ head: () => ({ meta: [
  { title: "Qiskit Fall Fest OAU 2026 | Young Nigerian Minds" }, { name: "description", content: "See the November 2026 Qiskit Fall Fest Plus at OAU: a four-week virtual hackathon plus programmes for secondary and university students." },
  { property: "og:title", content: "Qiskit Fall Fest OAU 2026" }, { property: "og:description", content: "A hackathon, secondary school outreach, and keynote sessions from QWorld and IBM for young Nigerian minds." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Page });

const schoolFlow = ["Opening and welcome", "Introductory session with the IBM speaker", "Break, games, and guest talk", "Hands-on quantum activity", "Closing ceremony"];
const universityFlow = ["Opening and keynote — “Beyond limits: pushing past benchmarks in quantum computing”", "Panel conversation with three speakers", "Workshops and challenges with prizes", "Hackathon awards", "Closing ceremony"];

function Page() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 overflow-hidden">
      
      {/* Navigation */}
      <div className="w-full border-b-4 border-black bg-white py-4 flex justify-center gap-4">
        <Link to="/2025" className="bg-[#f1f3f4] px-4 py-2 border-[3px] border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black hover:-translate-y-1 transition-transform flex items-center gap-2">
          Back to 2025
        </Link>
      </div>

      {/* Hero 2026 */}
      <section className="w-full min-h-[80vh] flex flex-col justify-center py-20 border-b-4 border-black bg-[#4285F4] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full border-[8px] border-black bg-black opacity-10 transform translate-x-1/4 -translate-y-1/4" />
        <div className="site-container relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <p className="bg-[#FBBC04] text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm mb-8 inline-block transform -rotate-1">
              Upcoming · Fall Fest 27–28 November
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8 text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              Quantum for<br />
              <span className="text-[#FBBC04]">young Nigerian minds.</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-2xl bg-black p-6 rounded-2xl border-[4px] border-[#FBBC04] shadow-[6px_6px_0px_0px_#FBBC04]">
              A focused hackathon, secondary school outreach, and intensive problem-solving challenges, crowned by keynote sessions from QWorld and IBM.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={registerUrl} target="_blank" rel="noreferrer" className="bg-white text-black px-8 py-4 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2">
                Register now <ArrowUpRight className="w-6 h-6" />
              </a>
              <Link to="/partnership" className="bg-black text-white px-8 py-4 rounded-xl border-[4px] border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2">
                Support the programme <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
             <div className="bg-[#f1f3f4] p-4 rounded-3xl border-[6px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
               <img src={heroArt} alt="Hero Art" className="rounded-xl border-[4px] border-black" />
             </div>
          </div>
        </div>
      </section>

      {/* Programme Pillars */}
      <section className="w-full min-h-[90vh] flex flex-col justify-center py-24 bg-white border-b-4 border-black">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest text-[#EA4335] mb-6">The Programme Structure</p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-16 max-w-4xl">
            A new format built for maximum impact.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {[
              {
                title: "Hackathon",
                desc: "An intensive period of focused building. Participants form teams, select an industry bottleneck, and develop practical quantum or hybrid solutions.",
                color: "bg-[#4285F4]",
                num: "01"
              },
              {
                title: "Secondary School Outreach",
                desc: "Introducing quantum computing to the next generation. We bring students from diverse schools together to make the concepts visible, accessible, and exciting.",
                color: "bg-[#FBBC04]",
                num: "02"
              },
              {
                title: "Challenges & Problem Solving",
                desc: "Live, hands-on sessions where university participants tackle specific computational challenges to win prizes and test their skills.",
                color: "bg-[#34A853]",
                num: "03"
              },
              {
                title: "QWorld & IBM Keynotes",
                desc: "Expert insights from global leaders in quantum computing. Speakers from QWorld and IBM share the latest advancements and practical applications.",
                color: "bg-[#EA4335]",
                num: "04"
              }
            ].map((pillar) => (
              <div key={pillar.num} className="bg-[#f1f3f4] p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-2 transition-transform">
                <div className={`w-16 h-16 rounded-xl ${pillar.color} border-[4px] border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white text-3xl font-black`}>
                  {pillar.num}
                </div>
                <h3 className="text-3xl font-black mb-4">{pillar.title}</h3>
                <p className="font-bold text-gray-700 leading-relaxed text-lg">{pillar.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Two audiences */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 bg-black text-white border-b-4 border-black">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest text-[#FBBC04] mb-8">Two audiences · one mission</p>
          <div className="grid lg:grid-cols-2 gap-12">
            
            <div className="bg-[#1a1a1a] p-10 md:p-14 rounded-[2.5rem] border-[6px] border-[#34A853] shadow-[8px_8px_0px_0px_#34A853]">
              <div className="flex items-center justify-between mb-12">
                <span className="text-7xl font-black text-gray-800">01</span>
                <div className="w-16 h-16 bg-[#34A853] border-[4px] border-white rounded-full flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"><Users className="w-8 h-8"/></div>
              </div>
              <p className="text-[#34A853] font-black uppercase tracking-widest mb-4">Secondary students</p>
              <h2 className="text-4xl font-black mb-10">Friday, 27 November</h2>
              <div className="flex flex-wrap gap-4 mb-12">
                <span className="bg-black border-2 border-white px-4 py-2 rounded-lg font-bold flex items-center gap-2"><MapPin className="w-5 h-5"/> Onsite</span>
                <span className="bg-black border-2 border-white px-4 py-2 rounded-lg font-bold flex items-center gap-2"><CalendarDays className="w-5 h-5"/> 10 AM–2 PM</span>
              </div>
              <ol className="space-y-6">
                {schoolFlow.map((x, i) => (
                  <li key={x} className="flex gap-6 items-start font-bold text-lg border-t-2 border-gray-800 pt-6">
                    <span className="text-[#34A853] font-black">0{i+1}</span>
                    <span className="text-gray-300">{x}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white text-black p-10 md:p-14 rounded-[2.5rem] border-[6px] border-[#4285F4] shadow-[8px_8px_0px_0px_#4285F4]">
              <div className="flex items-center justify-between mb-12">
                <span className="text-7xl font-black text-gray-200">02</span>
                <div className="w-16 h-16 bg-[#4285F4] border-[4px] border-black rounded-full flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><Laptop className="w-8 h-8"/></div>
              </div>
              <p className="text-[#4285F4] font-black uppercase tracking-widest mb-4">University students</p>
              <h2 className="text-4xl font-black mb-10">Saturday, 28 November</h2>
              <div className="flex flex-wrap gap-4 mb-12">
                <span className="bg-[#f1f3f4] border-2 border-black px-4 py-2 rounded-lg font-bold flex items-center gap-2"><Laptop className="w-5 h-5"/> Hybrid</span>
                <span className="bg-[#f1f3f4] border-2 border-black px-4 py-2 rounded-lg font-bold flex items-center gap-2"><CalendarDays className="w-5 h-5"/> 10 AM–4 PM</span>
              </div>
              <ol className="space-y-6">
                {universityFlow.map((x, i) => (
                  <li key={x} className="flex gap-6 items-start font-bold text-lg border-t-2 border-gray-200 pt-6">
                    <span className="text-[#4285F4] font-black">0{i+1}</span>
                    <span className="text-gray-700">{x}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="w-full py-24 bg-[#f1f3f4] border-b-4 border-black">
        <div className="site-container grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <p className="text-sm font-black text-[#EA4335] uppercase tracking-widest mb-6">Schools invited</p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-8">Access is designed into the room.</h2>
            <p className="text-xl font-bold text-gray-700 leading-relaxed bg-white p-6 border-[4px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Twenty students and two teachers are invited from each school, bringing together public, private, mixed, and all-female institutions.
            </p>
          </div>
          <div className="bg-white p-8 md:p-12 border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[2.5rem]">
            <div className="space-y-2">
              {schools2026.map((school, i) => (
                <div key={school} className="flex items-center gap-6 py-4 border-b-2 border-gray-200 last:border-0">
                  <span className="font-black text-[#EA4335]">0{i + 1}</span>
                  <strong className="text-xl font-black">{school}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-[#FBBC04] border-b-4 border-black">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-widest text-black bg-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">Registration is open</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">One form for secondary and university participants.</h2>
          </div>
          <a href={registerUrl} target="_blank" rel="noreferrer" className="shrink-0 bg-black text-white px-10 py-6 rounded-2xl border-[4px] border-black shadow-[8px_8px_0px_0px_#4285F4] font-black text-2xl hover:-translate-y-2 transition-transform inline-flex items-center gap-3">
            Register now <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
      </section>
      
      {/* TeamSection might need a wrapper if it doesn't have one */}
      <TeamSection />
      
    </div>
  );
}

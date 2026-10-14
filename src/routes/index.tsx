import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, Laptop, MapPin, PartyPopper, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TeamSection } from "@/components/team-section";
import { eventYears, registerUrl, schools2026 } from "@/lib/events";
import heroArt from "@/assets/qiskit-fall-fest-2026-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qiskit Fall Fest OAU 2026 | Quantum for Young Nigerian Minds" },
      { name: "description", content: "The November 2026 Qiskit Fall Fest Plus at OAU: a hackathon, a secondary school outreach day, problem-solving challenges, and expert keynotes for secondary and university students." },
      { property: "og:title", content: "Qiskit Fall Fest OAU 2026" },
      { property: "og:description", content: "A hackathon, secondary school outreach, problem-solving challenges, and expert keynotes for young Nigerian minds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  }),
  component: Index,
});

const schoolFlow = ["Opening and welcome", "Introductory session", "Break, games, and guest talk", "Hands-on quantum activity", "Closing ceremony"];
const universityFlow = ["Opening and keynote session", "Panel session", "Workshops and challenges with prizes", "Hackathon awards", "Closing ceremony"];

const pillars = [
  {
    num: "01",
    title: "Hackathon",
    desc: "An intensive period of focused building. Participants form teams, select an industry bottleneck, and develop practical quantum or hybrid solutions.",
    color: "bg-[#4285F4]",
    img: "/programme/hackathon.jpg",
  },
  {
    num: "02",
    title: "Secondary School Outreach",
    desc: "Introducing quantum computing to the next generation. We bring students from diverse schools together to make the concepts visible, accessible, and exciting.",
    color: "bg-[#FBBC04]",
    img: "/programme/outreach.jpg",
  },
  {
    num: "03",
    title: "Challenges & Problem Solving",
    desc: "Live, hands-on sessions where university participants tackle specific computational challenges to win prizes and test their skills.",
    color: "bg-[#34A853]",
    img: "/programme/challenges.jpg",
  },
  {
    num: "04",
    title: "Keynotes",
    desc: "Expert insights from global leaders in quantum computing — the latest advancements, and what they could mean in practice for Nigeria.",
    color: "bg-[#EA4335]",
    img: "/programme/keynote.jpg",
  },
];

/** The registration CTA "booms" into view: the badge pops with radiating rings
 *  and the button gives a quick shake the first time it scrolls on screen. */
function RegistrationBoom() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} data-shown={shown} className="boom w-full py-24 bg-[#FBBC04] border-b-4 border-black overflow-hidden">
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <div className="relative inline-flex mb-8">
            {/* Boom rings — the outer span handles centring so the scale animation stays put. */}
            <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="boom-ring block h-20 w-20 rounded-full border-[4px] border-black" />
            </span>
            <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="boom-ring-2 block h-20 w-20 rounded-full border-[4px] border-[#EA4335]" />
            </span>
            <p className="boom-badge relative inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black bg-white px-4 py-2 border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <PartyPopper className="w-5 h-5 text-[#EA4335]" /> Registration is open
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">One form for all participants.</h2>
        </div>
        <a href={registerUrl} target="_blank" rel="noreferrer" className="boom-cta shrink-0 bg-black text-white px-10 py-6 rounded-2xl border-[4px] border-black shadow-[8px_8px_0px_0px_#4285F4] font-black text-2xl hover:-translate-y-2 transition-transform inline-flex items-center gap-3">
          Register now <ArrowUpRight className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 overflow-hidden">

      {/* Hero */}
      <section className="w-full min-h-[85vh] flex flex-col justify-center py-20 border-b-4 border-black bg-[#4285F4] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full border-[8px] border-black bg-black opacity-10 transform translate-x-1/4 -translate-y-1/4" />
        <div className="site-container relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-[#FBBC04] text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm inline-flex items-center gap-2 transform -rotate-1">
                <CalendarDays className="w-4 h-4" /> 27–28 November 2026
              </span>
              <span className="bg-white text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm inline-flex items-center gap-2 transform rotate-1">
                <MapPin className="w-4 h-4" /> OAU · Ile-Ife
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8 text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              Quantum for<br />
              <span className="text-[#FBBC04]">young Nigerian minds.</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-2xl bg-black p-6 rounded-2xl border-[4px] border-[#FBBC04] shadow-[6px_6px_0px_0px_#FBBC04]">
              A secondary school outreach day, a focused hackathon, and intensive problem-solving challenges, crowned by expert keynote sessions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={registerUrl} target="_blank" rel="noreferrer" className="bg-white text-black px-8 py-4 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2">
                Register now <ArrowUpRight className="w-6 h-6" />
              </a>
              <Link to="/hackathon" className="bg-black text-white px-8 py-4 rounded-xl border-[4px] border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2">
                Explore the hackathon <ArrowRight className="w-6 h-6" />
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

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="bg-[#f1f3f4] p-6 md:p-8 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-2 transition-transform">
                <div className="relative mb-6 overflow-hidden rounded-2xl border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <img src={pillar.img} alt={pillar.title} loading="lazy" className="h-56 md:h-64 w-full object-cover" />
                  <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl ${pillar.color} border-[3px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-white text-2xl font-black`}>
                    {pillar.num}
                  </div>
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
                <span className="bg-[#f1f3f4] border-2 border-black px-4 py-2 rounded-lg font-bold flex items-center gap-2"><MapPin className="w-5 h-5"/> Onsite</span>
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
        <div className="site-container grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div className="relative">
            <div className="bg-white p-3 border-[6px] border-black shadow-[12px_12px_0px_0px_#EA4335] rounded-[2rem] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="/programme/students-group.jpg" alt="Secondary school students invited to the Fall Fest, smiling together" className="rounded-[1.4rem] border-[3px] border-black w-full object-cover aspect-[4/5]" />
            </div>
            <span className="absolute -top-4 -left-3 bg-[#FBBC04] text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs transform rotate-3">Schools invited</span>
            <span className="absolute -bottom-5 -right-3 bg-[#34A853] text-white px-5 py-3 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg transform -rotate-2">5 schools · 100 students</span>
          </div>
          <div className="bg-white p-8 md:p-12 border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[2.5rem]">
            <p className="text-sm font-black text-[#EA4335] uppercase tracking-widest mb-6">Access is designed into the room</p>
            <div className="space-y-2">
              {schools2026.map((school, i) => (
                <div key={school} className="flex items-center gap-6 py-4 border-b-2 border-gray-200 last:border-0">
                  <span className="font-black text-[#EA4335]">0{i + 1}</span>
                  <strong className="text-xl font-black">{school}</strong>
                </div>
              ))}
            </div>
            <p className="mt-6 font-bold text-gray-700 leading-relaxed">
              Twenty students and two teachers are invited from each school — a deliberate mix of public, private, mixed, and all-female institutions.
            </p>
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

      {/* Our trajectory */}
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

      {/* CTA — Registration is open */}
      <RegistrationBoom />

      {/* Team */}
      <TeamSection />

      {/* Sponsor us */}
      <section className="w-full py-32 bg-[#34A853] border-b-4 border-black text-black">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-black bg-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">For companies</p>
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Help make first encounters with quantum computing count.
            </h2>
            <p className="mt-6 text-xl font-bold leading-relaxed max-w-xl">
              Want to sponsor a track or partner with us? Send us a mail and we'll share the full proposal.
            </p>
          </div>
          <a href="mailto:info@gdgoau.com?subject=Sponsorship%20enquiry%20%E2%80%94%20Qiskit%20Fall%20Fest%20OAU" className="shrink-0 bg-black text-white px-10 py-6 rounded-2xl border-[4px] border-black shadow-[8px_8px_0px_0px_#FBBC04] font-black text-2xl hover:-translate-y-2 transition-transform inline-flex items-center gap-3 transform rotate-2">
            info@gdgoau.com <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  );
}

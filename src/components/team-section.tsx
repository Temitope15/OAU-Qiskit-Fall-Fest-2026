import { useState } from "react";
import { team, type TeamMember } from "@/lib/events";

function initials(name: string) {
  return name
    .replace(/^Dr\s+/i, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <article className="bg-white p-6 md:p-8 rounded-[2rem] border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-2 transition-transform">
      <div className="w-full aspect-square rounded-2xl border-[4px] border-black overflow-hidden mb-6 bg-[#f1f3f4] flex items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {hasPhoto ? (
          <img src={member.photo} alt={member.name} loading="lazy" onError={() => setHasPhoto(false)} className="w-full h-full object-cover" />
        ) : (
          <span className="text-5xl font-black text-gray-300" aria-hidden="true">{initials(member.name)}</span>
        )}
      </div>
      <div className="mt-auto">
        <span className="text-sm font-black uppercase tracking-widest text-[#34A853] mb-2 block border-b-2 border-black w-fit pb-1">0{index + 1}</span>
        <strong className="block text-2xl font-black mb-2">{member.name}</strong>
        <p className="font-bold text-gray-700 leading-relaxed">{member.role}</p>
      </div>
    </article>
  );
}

export function TeamSection() {
  return (
    <section className="w-full py-24 bg-white border-b-4 border-black">
      <div className="site-container">
        <p className="text-sm font-black uppercase tracking-widest text-black bg-[#f1f3f4] px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">The team</p>
        <div className="grid md:grid-cols-[1fr_0.8fr] gap-10 items-end mb-16">
          <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">The people organising Fall Fest at OAU.</h2>
          <p className="text-xl font-bold text-gray-700 leading-relaxed bg-[#f1f3f4] p-6 border-[4px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            A student-led team with faculty support, working with IBM Quantum and GDG on Campus OAU. Full roles and photographs will be added shortly.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

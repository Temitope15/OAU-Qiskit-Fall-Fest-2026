import { useState } from "react";
import { MapPin, Mic, Video } from "lucide-react";
import { speakers, type Speaker } from "@/lib/events";

function initials(name: string) {
  return name
    .replace(/^(Dr|Mr|Mrs|Ms)\s+/i, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const accents = ["#4285F4", "#EA4335", "#34A853", "#FBBC04", "#8B5CF6"];

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  const [hasPhoto, setHasPhoto] = useState(true);
  const accent = accents[index % accents.length];

  return (
    <article
      className={`bg-white p-6 md:p-8 rounded-[2rem] border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-2 transition-transform ${
        speaker.keynote ? "md:col-span-2 md:flex-row md:gap-10" : ""
      }`}
    >
      <div
        className={`relative shrink-0 rounded-2xl border-[4px] border-black overflow-hidden mb-6 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
          speaker.keynote ? "w-full md:w-72 aspect-square md:mb-0" : "w-full aspect-[4/3]"
        }`}
        style={{ backgroundColor: accent }}
      >
        {hasPhoto ? (
          <img src={speaker.photo} alt={speaker.name} loading="lazy" onError={() => setHasPhoto(false)} className="w-full h-full object-cover" />
        ) : (
          <span className="text-6xl font-black text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)]" aria-hidden="true">
            {initials(speaker.name)}
          </span>
        )}
        {speaker.keynote && (
          <span className="absolute top-3 left-3 bg-[#FBBC04] text-black px-3 py-1 rounded-lg border-[3px] border-black font-black uppercase tracking-widest text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Keynote
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-black text-white px-3 py-1 rounded-lg font-black uppercase tracking-widest text-xs">{speaker.day}</span>
          <span className="bg-[#f1f3f4] border-2 border-black px-3 py-1 rounded-lg font-bold text-xs inline-flex items-center gap-1.5">
            {speaker.mode === "In person" ? <MapPin className="w-3.5 h-3.5" /> : <Video className="w-3.5 h-3.5" />}
            {speaker.mode}
          </span>
        </div>
        <p className={`font-black leading-tight mb-3 inline-flex items-start gap-2 ${speaker.keynote ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          <Mic className="w-6 h-6 shrink-0 mt-1" style={{ color: accent }} />
          {speaker.talk}
        </p>
        <p className="font-bold text-gray-700 leading-relaxed mb-6">{speaker.summary}</p>
        <div className="mt-auto border-t-[3px] border-black pt-4">
          <strong className="block text-xl font-black">{speaker.name}</strong>
          <span className="font-bold text-gray-600">{speaker.role}</span>
        </div>
      </div>
    </article>
  );
}

export function SpeakersSection() {
  return (
    <section id="speakers" className="w-full py-24 bg-[#f1f3f4] border-b-4 border-black scroll-mt-20">
      <div className="site-container">
        <p className="text-sm font-black uppercase tracking-widest text-black bg-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
          Speakers
        </p>
        <div className="grid md:grid-cols-[1fr_0.8fr] gap-10 items-end mb-16">
          <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">Voices shaping quantum in Africa.</h2>
          <p className="text-xl font-bold text-black leading-relaxed bg-[#FBBC04] p-6 border-[4px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            From the founder of QWorld to IBM Quantum, our speakers will show students where quantum is heading and how they can be part of it.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}


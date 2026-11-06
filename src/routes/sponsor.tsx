import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  BookOpen,
  CalendarDays,
  Check,
  Copy,
  Download,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { SpeakersSection } from "@/components/speakers-section";
import { TeamSection } from "@/components/team-section";
import { venue } from "@/lib/events";

export const Route = createFileRoute("/sponsor")({
  head: () => ({
    meta: [
      { title: "Sponsorship Proposal | Qiskit Fall Fest OAU 2026" },
      {
        name: "description",
        content:
          "Invest in the future of African scientific talent: support Qiskit Fall Fest OAU 2026 at Opolo Hub, Ile-Ife.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SponsorPage,
});

const deckPdfUrl = "/sponsor/qiskit-fall-fest-2026-sponsorship-deck.pdf";

const impactPillars = [
  {
    icon: GraduationCap,
    color: "bg-[#FBBC04]",
    textColor: "text-black",
    title: "Empower the Next Generation of Scientists",
    desc: "We are inviting 40 secondary school students across 5 local schools in Ile-Ife for a hands-on introduction to Qiskit. With dedicated laptops on site, every student will build their own quantum Bell state before the day ends.",
  },
  {
    icon: BookOpen,
    color: "bg-[#4285F4]",
    textColor: "text-white",
    title: "Foster an Authentic Research Culture",
    desc: "University sessions bridge foundational physics and mathematics with practical quantum software engineering, guiding students on graduate school applications, quantum startup creation, and global research opportunities.",
  },
  {
    icon: Award,
    color: "bg-[#34A853]",
    textColor: "text-white",
    title: "Reward Academic Excellence & Innovation",
    desc: "Fund the ₦250,000 cash prize pool awarded to the Top 3 student teams in Saturday's quantum coding challenges, encouraging deep technical mastery.",
  },
];

const budgetItems = [
  { item: "Refreshments (Both Days)", amount: "₦220,000" },
  { item: "Venue Hire (Opolo Innovation Hub)", amount: "₦130,000" },
  { item: "Code Jam Merit Cash Prize Pool", amount: "₦250,000" },
  { item: "Prints & Event Publicity", amount: "₦40,000" },
  { item: "Dedicated High-Speed Internet", amount: "₦15,000" },
  { item: "Miscellanies & Contingency", amount: "₦50,000" },
];

const patronTiers = [
  {
    name: "Grand Festival Patron",
    naira: "₦705,000",
    usd: "~$480 USD",
    badge: "Full Festival Underwriter",
    accent: "bg-[#FBBC04]",
    border: "border-black",
    desc: "Underwrites 100% of Qiskit Fall Fest OAU 2026 — powering both days at Opolo Hub, student refreshments, the secondary school Bell State lab, and the Saturday ₦250,000 quantum coding challenge prize pool.",
  },
  {
    name: "Quantum Pioneer Patron",
    naira: "₦350,000",
    usd: "~$240 USD",
    badge: "Core Infrastructure",
    accent: "bg-[#4285F4]",
    border: "border-black",
    desc: "Underwrites major pillars of the festival — such as venue hire at Opolo Innovation Hub and festival-wide refreshments for both days.",
  },
  {
    name: "Next-Gen Talent Patron",
    naira: "₦250,000",
    usd: "~$170 USD",
    badge: "Direct Student Impact",
    accent: "bg-[#34A853]",
    border: "border-black",
    desc: "Directly funds the ₦250,000 cash prize pool awarded to the Top 3 student teams in Saturday's quantum coding challenges.",
  },
];

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 bg-white text-black px-3.5 py-2 rounded-xl border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black text-xs uppercase tracking-wider hover:-translate-y-0.5 transition-transform cursor-pointer"
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-[#34A853]" /> Copied
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" /> Copy {label}
        </>
      )}
    </button>
  );
}

function SponsorPage() {
  return (
    <div className="min-h-screen bg-[#FAF3DE] text-black font-sans pb-24">
      {/* Hero */}
      <section className="w-full py-20 md:py-28 border-b-4 border-black bg-[#4285F4] text-white relative overflow-hidden">
        <div className="site-container relative z-10">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-[#FBBC04] text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Patron Sponsorship Proposal
            </span>
            <span className="bg-white text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm inline-flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> 27–28 November 2026
            </span>
            <span className="bg-white text-black px-4 py-2 rounded-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs md:text-sm inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {venue} · Ile-Ife
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8 text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] max-w-5xl">
            Invest in the future of <span className="text-[#FBBC04]">African scientific talent.</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-3xl bg-black text-white p-6 md:p-8 rounded-2xl border-[4px] border-[#FBBC04] shadow-[6px_6px_0px_0px_#FBBC04]">
            We are inviting visionary organizations and individuals to directly fund and empower the next generation of Nigerian scientific minds. Your sponsorship directly builds the infrastructure for young Nigerian minds to learn, build, and lead in quantum computing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#support"
              className="bg-[#FBBC04] text-black px-8 py-4 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2"
            >
              <HeartHandshake className="w-6 h-6" /> Become a Patron
            </a>
            <a
              href={deckPdfUrl}
              download="Qiskit_Fall_Fest_2026_Sponsorship_Deck.pdf"
              className="bg-white text-black px-8 py-4 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2"
            >
              <Download className="w-6 h-6" /> Download Pitch Deck (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Why Sponsor — 3 Impact Pillars */}
      <section className="w-full py-24 bg-[#FAF3DE] border-b-4 border-black">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest text-black bg-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            Why Your Investment Matters
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-4xl">
            Planting the seeds of quantum education and research in Nigeria.
          </h2>
          <p className="text-xl font-bold text-gray-800 max-w-3xl mb-16 leading-relaxed">
            Every part of Qiskit Fall Fest OAU 2026 — from the secondary school Bell State lab to the university lectures and Saturday Code Jams — is designed to nurture the next generation of quantum scientists, researchers, and builders.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {impactPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white p-8 md:p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${pillar.color} ${pillar.textColor} border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6`}
                >
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">{pillar.title}</h3>
                <p className="font-bold text-gray-700 leading-relaxed text-lg">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Day Programme Overview */}
      <section className="w-full py-24 bg-white border-b-4 border-black">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest text-black bg-[#FBBC04] px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            Two Days at {venue}
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-16 max-w-4xl">
            What happens across the festival weekend.
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#FAF3DE] p-8 md:p-12 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_#34A853]">
              <span className="inline-block bg-[#34A853] text-white font-black uppercase tracking-widest text-xs px-3 py-1.5 rounded-lg border-2 border-black mb-4">
                Day 1 · Friday, 27 November · 10 AM – 2 PM
              </span>
              <h3 className="text-3xl md:text-4xl font-black mb-2">Secondary School Outreach & Career Talk</h3>
              <p className="font-mono font-bold text-sm text-[#0F9D58] uppercase tracking-wider mb-4">
                Inviting 40 secondary students across 5 local schools in Ile-Ife
              </p>
              <p className="font-bold text-gray-800 leading-relaxed mb-6">
                40 students from 5 local secondary schools in Ile-Ife gather at {venue}, joined by university students:
              </p>
              <ul className="space-y-3 font-bold text-gray-900">
                <li>✦ 10:00 AM — Opening & gentle introduction to quantum computing</li>
                <li>✦ 10:15 AM — Career Paths in Quantum Computing — Mr Ini Ukut (Head, QNigeria)</li>
                <li>✦ 10:45 AM — Keynote Session from an IBM Employee (Catherine Wanjiru)</li>
                <li>✦ 11:15 AM — Refreshment & networking break</li>
                <li>✦ 11:30 AM — Hands-on Lab Session (10+ dedicated laptops: building a Bell state in Qiskit)</li>
                <li>✦ Certificates of participation for all attendees</li>
              </ul>
            </div>

            <div className="bg-[#FAF3DE] p-8 md:p-12 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_#4285F4]">
              <span className="inline-block bg-[#4285F4] text-white font-black uppercase tracking-widest text-xs px-3 py-1.5 rounded-lg border-2 border-black mb-4">
                Day 2 · Saturday, 28 November · 10 AM – 4 PM
              </span>
              <h3 className="text-3xl md:text-4xl font-black mb-2">Keynotes, Technical Sessions & Code Jams</h3>
              <p className="font-mono font-bold text-sm text-[#4285F4] uppercase tracking-wider mb-4">
                For Undergraduates & Advanced Students from OAU Campus & Beyond
              </p>
              <p className="font-bold text-gray-800 leading-relaxed mb-6">
                A full day combining global perspectives, deep theory, and live quantum coding challenges with a ₦250,000 prize pool:
              </p>
              <ul className="space-y-3 font-bold text-gray-900">
                <li>✦ Keynote: Pushing Beyond the Limits — Pawel Gora (Founder, QWorld)</li>
                <li>✦ Quantum Education & Capacity Building — Favour Alfred (African Quantum Consortium)</li>
                <li>✦ Rudiments of Quantum Computing (Physics & Mathematics) — Dr Fadodun</li>
                <li>✦ Refreshment & networking break</li>
                <li>✦ 01:15 PM — Live Quantum Coding Challenges (Intensive algorithmic sprints)</li>
                <li>✦ 04:00 PM — ₦250,000 Awards Ceremony, Certificates & Finale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <SpeakersSection />

      {/* Budget Breakdown */}
      <section className="w-full py-24 bg-[#FAF3DE] border-b-4 border-black">
        <div className="site-container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-widest text-black bg-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            Festival Budget
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Transparent budget breakdown.
          </h2>
          <p className="text-xl font-bold text-gray-800 mb-12 max-w-3xl">
            Every contribution goes directly toward hosting the students at {venue}, running the hands-on sessions, and funding the ₦250,000 Code Jam merit prize pool.
          </p>

          <div className="bg-white rounded-[2rem] border-[5px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="divide-y-[3px] divide-black">
              {budgetItems.map((row) => (
                <div key={row.item} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-6 md:px-10">
                  <span className="font-bold text-lg md:text-xl text-black">{row.item}</span>
                  <span className="font-mono font-black text-xl md:text-2xl text-black">{row.amount}</span>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-8 md:px-10 bg-[#FBBC04]">
                <span className="font-black text-2xl md:text-3xl text-black uppercase tracking-tight">Total Festival Budget</span>
                <div className="text-right">
                  <div className="font-mono font-black text-3xl md:text-4xl text-black">₦705,000</div>
                  <div className="font-mono font-bold text-sm text-gray-800">~$480 USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Patron Tiers & Recognition */}
      <section className="w-full py-24 bg-white border-b-4 border-black">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest text-black bg-[#34A853] text-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            Patron Tiers
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-4xl">
            Three ways to underwrite the festival.
          </h2>
          <p className="text-xl font-bold text-gray-700 mb-16 max-w-3xl">
            You can sponsor a specific tier below or contribute any custom amount toward the ₦705,000 budget.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {patronTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-[#FAF3DE] p-8 md:p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
              >
                <div>
                  <span
                    className={`inline-block ${tier.accent} ${
                      tier.accent === "bg-[#FBBC04]" ? "text-black" : "text-white"
                    } font-black uppercase tracking-widest text-xs px-3 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6`}
                  >
                    {tier.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black mb-4">{tier.name}</h3>
                  <div className="mb-6 pb-6 border-b-[3px] border-black">
                    <div className="text-4xl md:text-5xl font-black tracking-tight">{tier.naira}</div>
                    <div className="font-mono font-bold text-gray-700 mt-1">{tier.usd}</div>
                  </div>
                  <p className="font-bold text-gray-800 leading-relaxed text-lg">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Streamlined Patron Recognition */}
          <div className="bg-black text-white p-8 md:p-12 rounded-[2rem] border-[5px] border-black shadow-[10px_10px_0px_0px_#8B5CF6]">
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="w-7 h-7 text-[#FBBC04]" />
              <span className="font-black uppercase tracking-widest text-sm text-[#FBBC04]">Patron Recognition & Privileges</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-8">How we honour our patrons</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-2xl border-[3px] border-[#FBBC04]">
                <span className="font-mono font-black text-sm uppercase text-[#FBBC04] block mb-2">01 · Pre-Event Recognition</span>
                <h4 className="text-2xl font-black mb-3">Digital & Publicity Spotlight</h4>
                <p className="font-bold text-gray-300 leading-relaxed">
                  Appreciation and recognition across our pre-event publicity — including the event website, promotional flyers, and social media announcements.
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-2xl border-[3px] border-[#34A853]">
                <span className="font-mono font-black text-sm uppercase text-[#34A853] block mb-2">02 · Venue Recognition</span>
                <h4 className="text-2xl font-black mb-3">Prominent Logo / Name on Main Backdrop</h4>
                <p className="font-bold text-gray-300 leading-relaxed">
                  Your name or emblem featured prominently on the main stage backdrop at Opolo Innovation Hub throughout both days of the festival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank / Remittance Details */}
      <section id="support" className="w-full py-24 bg-[#FAF3DE] border-b-4 border-black scroll-mt-20">
        <div className="site-container">
          <p className="text-sm font-black uppercase tracking-widest text-black bg-[#FBBC04] px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            Direct Remittance
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 max-w-4xl">
            Sponsorship account details.
          </h2>
          <p className="text-xl font-bold text-gray-800 mb-12 max-w-3xl">
            Contributions can be sent in Naira (NGN) or US Dollars (USD) via the official organizing committee accounts below, held by <strong>Temitope Akinsunmade</strong> (Lead, GDG on Campus OAU & Organizing Committee).
          </p>

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            {/* NGN Card */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_#34A853] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="bg-[#34A853] text-white font-black uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-lg border-2 border-black">
                    Naira Sponsorship (NGN)
                  </span>
                  <Landmark className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-3xl font-black mb-6">Moniepoint MFB</h3>
                <dl className="space-y-4 font-bold text-lg">
                  <div className="bg-[#FAF3DE] p-4 rounded-xl border-2 border-black flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <dt className="text-xs font-black uppercase tracking-wider text-gray-600">Account Number</dt>
                      <dd className="font-mono text-2xl md:text-3xl font-black text-black">6542241733</dd>
                    </div>
                    <CopyButton value="6542241733" label="Account No" />
                  </div>
                  <div className="bg-[#FAF3DE] p-4 rounded-xl border-2 border-black">
                    <dt className="text-xs font-black uppercase tracking-wider text-gray-600">Account Name</dt>
                    <dd className="text-xl font-black text-black">Temitope Akinsunmade</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* USD Card */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_#4285F4] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="bg-[#4285F4] text-white font-black uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-lg border-2 border-black">
                    Dollar Sponsorship (USD)
                  </span>
                  <Landmark className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-3xl font-black mb-6">Lead Bank (USA)</h3>
                <dl className="space-y-4 font-bold text-lg">
                  <div className="bg-[#FAF3DE] p-4 rounded-xl border-2 border-black flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <dt className="text-xs font-black uppercase tracking-wider text-gray-600">Account Number</dt>
                      <dd className="font-mono text-2xl font-black text-black">215218316781</dd>
                    </div>
                    <CopyButton value="215218316781" label="Account No" />
                  </div>
                  <div className="bg-[#FAF3DE] p-4 rounded-xl border-2 border-black flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <dt className="text-xs font-black uppercase tracking-wider text-gray-600">Routing Number (ACH / Wire)</dt>
                      <dd className="font-mono text-2xl font-black text-black">1010196444</dd>
                    </div>
                    <CopyButton value="1010196444" label="Routing No" />
                  </div>
                  <div className="bg-[#FAF3DE] p-4 rounded-xl border-2 border-black">
                    <dt className="text-xs font-black uppercase tracking-wider text-gray-600">Account Name & Address</dt>
                    <dd className="text-lg font-black text-black">Temitope Akinsunmade</dd>
                    <dd className="text-sm font-bold text-gray-700 mt-1">
                      9450 Southwest Gemini Drive, Beaverton, OR, 97008, USA
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Confirmation & Deck Download Band */}
          <div className="bg-[#FBBC04] p-8 md:p-12 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-black mb-2">Sent a contribution or have a question?</h3>
              <p className="font-bold text-lg text-gray-900">
                Please drop us a quick email with your name or emblem so we can acknowledge your support on our pre-event channels and the main stage backdrop at {venue}.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href="mailto:info@gdgoau.com?subject=Patron%20Sponsorship%20%E2%80%94%20Qiskit%20Fall%20Fest%20OAU%202026"
                className="bg-black text-white px-7 py-4 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#4285F4] font-black text-lg hover:-translate-y-1 transition-transform inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" /> info@gdgoau.com
              </a>
              <a
                href={deckPdfUrl}
                download="Qiskit_Fall_Fest_2026_Sponsorship_Deck.pdf"
                className="bg-white text-black px-7 py-4 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg hover:-translate-y-1 transition-transform inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> Download Deck PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <TeamSection />
    </div>
  );
}


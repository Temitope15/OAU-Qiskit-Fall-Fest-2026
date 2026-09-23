import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Zap, Truck, Wheat, Wallet, Activity, Signal, Search, Target, CheckCircle2, ChevronRight, Layers, FileText, Wrench } from "lucide-react";
import { useState, useEffect, useRef, ReactNode } from "react";
import { registerUrl } from "@/lib/events";

export const Route = createFileRoute("/hackathon")({
  head: () => ({
    meta: [
      { title: "Hackathon | Quantum Advantage for Nigeria" },
      { name: "description", content: "A national innovation challenge exploring how quantum technology can solve Nigeria's most pressing problems." },
      { property: "og:title", content: "Quantum Advantage for Nigeria" },
    ],
  }),
  component: HackathonPage,
});

function SoftTypingText({ text, onComplete }: { text: string, onComplete?: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < text.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timer);
    } else if (visibleCount === text.length) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, text.length, onComplete]);

  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="transition-opacity duration-500"
          style={{ opacity: i < visibleCount ? 1 : 0 }}
        >
          {char}
        </span>
      ))}
    </>
  );
}

function FadeSlideUp({ children, isVisible }: { children: ReactNode, isVisible: boolean }) {
  return (
    <div
      className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

function SlideIn({ children, direction = "left", delay = 0, className = "" }: { children: ReactNode, direction?: "left" | "right" | "up" | "down", delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  let transformStart = "translate-y-4";
  if (direction === "left") transformStart = "-translate-x-6";
  if (direction === "right") transformStart = "translate-x-6";
  if (direction === "down") transformStart = "-translate-y-4";
  
  const transformEnd = (direction === "up" || direction === "down") ? "translate-y-0" : "translate-x-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${className} ${
        isVisible ? `opacity-100 ${transformEnd}` : `opacity-0 ${transformStart}`
      }`}
    >
      {children}
    </div>
  );
}

function ActiveJourneyCard({ item, i }: { item: any, i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger active state when the card is roughly in the middle 50% of the viewport
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" } // Adjust margins to trigger in the middle
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bgClass = isActive ? "bg-black text-white scale-105" : "bg-white text-black scale-100";
  const numClass = isActive ? "text-white opacity-40" : "text-black opacity-20";
  const descClass = isActive ? "text-gray-300" : "text-gray-700";

  return (
    <div ref={ref} className={`w-full pl-16 md:pl-0 md:w-[45%] transition-all duration-500 ease-out`}>
      <div className={`${bgClass} p-6 md:p-8 rounded-[2rem] border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-500`}>
        <div className={`text-3xl font-black mb-2 transition-colors duration-500 ${numClass}`}>
          {item.step}
        </div>
        <h4 className="text-xl font-black mb-3">{item.name}</h4>
        <p className={`font-bold transition-colors duration-500 ${descClass}`}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function ScrollRevealCurtain({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden py-10">
      {/* The content underneath */}
      <div className={`transition-opacity duration-1000 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
      
      {/* Top Curtain */}
      <div className={`absolute top-0 left-0 w-full h-1/2 bg-black z-20 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? '-translate-y-full' : 'translate-y-0'}`} />
      
      {/* Bottom Curtain */}
      <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-black z-20 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'translate-y-full' : 'translate-y-0'}`} />
    </div>
  );
}


const tracks = [
  { id: "energy", title: "Energy", icon: Zap, color: "bg-[#4285F4]", question: "How can we optimize electricity distribution when supply is unreliable and demand varies?", areas: ["Grid optimization", "Load balancing", "Battery placement"] },
  { id: "logistics", title: "Logistics", icon: Truck, color: "bg-[#FBBC04]", question: "How can we move goods across Nigerian cities more efficiently despite traffic and road conditions?", areas: ["Vehicle routing", "Fleet scheduling", "Warehouse allocation"] },
  { id: "agriculture", title: "Agriculture", icon: Wheat, color: "bg-[#34A853]", question: "How can we optimize limited agricultural resources to improve productivity?", areas: ["Crop allocation", "Irrigation scheduling", "Resource allocation"] },
  { id: "finance", title: "Finance", icon: Wallet, color: "bg-[#EA4335]", question: "How can institutions make better decisions when allocating limited capital?", areas: ["Portfolio optimization", "Capital allocation", "Risk optimization"] },
  { id: "healthcare", title: "Healthcare", icon: Activity, color: "bg-[#4285F4]", question: "How can we optimize scarce healthcare resources to serve more people effectively?", areas: ["Hospital scheduling", "Ambulance routing", "Staff allocation"] },
  { id: "telecom", title: "Telecoms", icon: Signal, color: "bg-[#FBBC04]", question: "How can providers optimize network infrastructure and resources across growing cities?", areas: ["Network optimization", "Bandwidth allocation", "Infrastructure placement"] }
];

const journey = [
  { step: "01", name: "DISCOVER", desc: "Find a meaningful bottleneck within your chosen industry. What is the actual problem? Who experiences it?" },
  { step: "02", name: "MODEL", desc: "Turn the real-world problem into a computational problem. What route minimizes distance while satisfying constraints?" },
  { step: "03", name: "SOLVE", desc: "Develop an approach using quantum computing, quantum-inspired algorithms, or hybrid methods." },
  { step: "04", name: "BENCHMARK", desc: "Compare your approach with an appropriate classical method. Does the new approach actually give us something better?" },
  { step: "05", name: "VALIDATE", desc: "Test your idea using datasets or quantum simulators. Your goal is to produce evidence, not assumptions." },
  { step: "06", name: "SHOW THE VALUE", desc: "Explain what your result means outside the code. Who could use it? What value could it create?" }
];

function HackathonPage() {
  const [heroAnimated, setHeroAnimated] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full min-h-[95vh] flex flex-col items-center justify-center pt-16 pb-20 border-b-4 border-black bg-[#f1f3f4]">
        <div className="site-container relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-black text-black uppercase tracking-widest flex-wrap mb-8">
            <span className="bg-black text-white px-4 py-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Participant Challenge Brief
            </span>
          </div>
          <h1 className="text-4xl md:text-[5.5rem] font-black tracking-tighter mb-8 max-w-5xl leading-[1.05] text-black">
            <SoftTypingText 
              text="QUANTUM ADVANTAGE FOR NIGERIA" 
              onComplete={() => setHeroAnimated(true)}
            />
          </h1>
          <FadeSlideUp isVisible={heroAnimated}>
            <p className="text-xl md:text-3xl text-gray-700 font-bold max-w-4xl leading-relaxed mb-12 mx-auto">
              <strong className="text-black font-black">Can quantum computing give us a better answer to a problem Nigeria already struggles with?</strong> We are looking for researchers, developers, and domain experts to find out.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={registerUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#34A853] text-white px-8 py-4 rounded-xl font-black text-lg md:text-xl inline-flex items-center gap-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
              >
                Join the Challenge <ArrowUpRight className="w-6 h-6" />
              </a>
              <a 
                href="#challenge"
                className="bg-white text-black px-8 py-4 rounded-xl font-black text-lg md:text-xl inline-flex items-center gap-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
              >
                Read the Brief <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </FadeSlideUp>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBBC04] rounded-bl-full opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#4285F4] rounded-t-full opacity-20 pointer-events-none" />
      </section>

      {/* 1. The Challenge (Scroll Window Opening) */}
      <section id="challenge" className="w-full min-h-[85vh] flex flex-col justify-center py-20 border-b-4 border-black bg-white">
        <div className="site-container">
          <ScrollRevealCurtain>
            <div className="max-w-4xl mx-auto text-center py-12">
              <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">1. The Challenge</h2>
              <p className="text-3xl md:text-6xl font-black text-black mb-10 leading-tight tracking-tight">
                We aren't looking for theoretical toy solutions.
              </p>
              <p className="text-xl md:text-3xl font-bold text-gray-700 leading-relaxed mb-12">
                We are looking for <strong className="text-black font-black bg-[#f1f3f4] px-2 leading-loose border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">practical, real-world solutions</strong> to bottlenecks affecting Nigerian industries, where current classical computing methods (like optimization algorithms or machine learning) struggle to find the absolute best answer quickly.
              </p>
            </div>
          </ScrollRevealCurtain>
        </div>
      </section>

      {/* 2. The Tracks */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 border-b-4 border-black bg-white">
        <div className="site-container">
          <SlideIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">2. Industry Tracks</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-black">
                Pick your battlefield.
              </h3>
              <p className="text-lg md:text-2xl text-gray-700 font-bold leading-relaxed">
                Find a bottleneck within these core sectors and model it for quantum investigation.
              </p>
            </div>
          </SlideIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tracks.map((track, i) => (
              <SlideIn key={track.id} direction="up" delay={i * 100} className="h-full">
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-xl ${track.color} border-[3px] border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white`}>
                    <track.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">{track.title}</h3>
                  <p className="text-gray-700 font-bold mb-6 flex-grow">{track.question}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {track.areas.map((area, idx) => (
                      <span key={idx} className="bg-[#f1f3f4] text-black text-xs font-bold px-3 py-1.5 rounded-lg border-2 border-black">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Journey (Vertical Timeline with Scroll Active State) */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 border-b-4 border-black bg-[#f1f3f4]">
        <div className="site-container">
          <SlideIn direction="left">
            <div className="mb-20 max-w-4xl mx-auto text-center md:text-left">
              <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">3. The Journey</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-black leading-tight">
                How it works.
              </h3>
            </div>
          </SlideIn>

          <div className="max-w-4xl mx-auto relative pt-8 pb-12">
            {/* The vertical timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 bg-black hidden md:block rounded-full transform -translate-x-1/2"></div>
            <div className="absolute left-6 top-0 bottom-0 w-1.5 bg-black md:hidden rounded-full transform -translate-x-1/2"></div>
            
            <div className="space-y-20 relative">
              {journey.map((item, i) => (
                <div key={item.step} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {/* Node Circle for Desktop */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-[4px] border-black bg-white items-center justify-center z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}></div>
                  
                  {/* Node Circle for Mobile */}
                  <div className={`md:hidden absolute left-6 -translate-x-1/2 w-6 h-6 rounded-full border-[4px] border-black bg-white items-center justify-center z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}></div>

                  {/* The Interactive Scroll Card */}
                  <ActiveJourneyCard item={item} i={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Paths */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 border-b-4 border-black bg-[#4285F4]">
        <div className="site-container text-white">
          <SlideIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black uppercase tracking-widest mb-6 text-white">4 & 5. Choose Your Path</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                There is no single way to participate.
              </h3>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <SlideIn direction="down">
              <div className="bg-white text-black p-8 md:p-12 rounded-[2rem] border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#EA4335] rounded-bl-full border-b-[4px] border-l-[4px] border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] z-0 group-hover:scale-110 transition-transform origin-top-right duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-[#f1f3f4] border-[4px] border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <FileText className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-4xl font-black mb-6">Research Path</h4>
                  <p className="font-bold text-gray-700 text-xl mb-10 leading-relaxed">
                    Investigate a meaningful Nigerian problem and produce a rigorous research paper.
                  </p>
                  <div className="bg-[#FBBC04] p-5 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-base leading-relaxed">
                    Your result does not have to prove that quantum wins. A well-supported negative result is still a result.
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up">
              <div className="bg-white text-black p-8 md:p-12 rounded-[2rem] border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#34A853] rounded-bl-full border-b-[4px] border-l-[4px] border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] z-0 group-hover:scale-110 transition-transform origin-top-right duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-[#f1f3f4] border-[4px] border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Wrench className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-4xl font-black mb-6">Build Path</h4>
                  <p className="font-bold text-gray-700 text-xl mb-10 leading-relaxed">
                    Design and build a working prototype, simulation, proof of concept, or optimization system.
                  </p>
                  <div className="bg-[#FBBC04] p-5 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-base leading-relaxed">
                    You can use simulators, classical systems, or available quantum hardware. You do not need access to a quantum computer.
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 6. Guidelines */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 border-b-4 border-black bg-white">
        <div className="site-container">
          <SlideIn direction="up">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">6. Guidelines</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-black leading-tight">
                What counts as a strong project?
              </h3>
              <p className="text-lg md:text-2xl text-gray-700 font-bold leading-relaxed">
                A strong project is not necessarily the one with the most complicated quantum circuit. We care about the quality of the investigation.
              </p>
            </div>
          </SlideIn>

          <div className="max-w-6xl mx-auto">
            <SlideIn direction="up" delay={200}>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                {[
                  { title: "A Real Problem", desc: "The problem should matter beyond the competition." },
                  { title: "A Clear Model", desc: "Explain how the real-world problem becomes computational." },
                  { title: "A Fair Baseline", desc: "Include an appropriate classical approach for comparison." },
                  { title: "Evidence", desc: "Claims should be supported by experiments, simulations, data, or analysis." },
                  { title: "Quantum Relevance", desc: "Explain why quantum or hybrid methods are worth investigating." },
                  { title: "Real-World Value", desc: "What the result could mean for Nigeria or affected people." }
                ].map((item, i) => (
                  <div key={i} className="bg-[#f1f3f4] p-8 rounded-[2rem] border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-2xl mb-3">{item.title}</h4>
                    <p className="text-gray-700 font-bold text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#EA4335] text-white p-10 md:p-14 rounded-[2rem] border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FBBC04] rounded-bl-full border-b-[6px] border-l-[6px] border-black z-0" />
                <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10 leading-tight">Don't build quantum for the sake of quantum.</h3>
                <p className="text-xl md:text-2xl font-bold relative z-10 leading-relaxed max-w-3xl mx-auto">You are allowed to discover that quantum is not currently the best solution. We are looking for evidence, not hype.</p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 8 & 9. Participation */}
      <section className="w-full min-h-screen flex flex-col justify-center py-24 border-b-4 border-black bg-black text-white">
        <div className="site-container">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-sm font-black text-[#FBBC04] uppercase tracking-widest mb-6">8. Who can participate?</h2>
                <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
                  Anyone in Nigeria.
                </h3>
                <p className="text-gray-300 font-bold text-xl leading-relaxed mb-8">
                  You do <strong className="text-white font-black bg-[#EA4335] px-2 py-1 rounded border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">not</strong> need to be a quantum computing expert. Bring a difficult problem, your industry knowledge, your software skills, or your product thinking. Then learn the quantum side as you go.
                </p>
                <p className="text-gray-300 font-bold text-xl leading-relaxed">
                  We welcome students, developers, physicists, mathematicians, data scientists, engineers, researchers, academics, entrepreneurs, and industry professionals.
                </p>
              </div>
            </SlideIn>
            
            <SlideIn direction="right">
              <div className="bg-white text-black p-10 md:p-12 rounded-[2rem] border-[6px] border-[#34A853] shadow-[8px_8px_0px_0px_#34A853] relative overflow-hidden">
                <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-6">9. Build with a team</h2>
                <h3 className="text-4xl font-black mb-8 tracking-tight leading-tight">
                  Diverse perspectives.
                </h3>
                <p className="text-gray-700 font-bold text-lg leading-relaxed mb-10">
                  Great solutions often come from different perspectives. Find people who complement what you already know.
                </p>
                <ul className="space-y-6">
                  {[
                    { role: "A domain expert", desc: "who understands the problem." },
                    { role: "A researcher", desc: "who investigates the underlying question." },
                    { role: "A developer", desc: "who builds the solution." },
                    { role: "A product thinker", desc: "who connects the solution to real value." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#FBBC04] border-[3px] border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-1">
                        <CheckCircle2 className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <strong className="block font-black text-xl mb-1">{item.role}</strong>
                        <span className="text-gray-700 font-bold text-lg">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Finale CTA */}
      <section className="w-full min-h-[85vh] flex flex-col justify-center py-24 text-center">
        <div className="site-container max-w-5xl mx-auto">
          <SlideIn direction="up">
            <p className="text-sm font-black text-black uppercase tracking-widest mb-8">The Grand Finale — November 2026</p>
            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-12 text-black tracking-tight">
              Let's find out what quantum can actually do for Nigeria.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-xl md:text-2xl font-black mb-16">
              <span className="bg-[#f1f3f4] px-6 py-3 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Find the problem</span>
              <span className="hidden sm:block text-3xl text-gray-400">•</span>
              <span className="bg-[#f1f3f4] px-6 py-3 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Build the model</span>
              <span className="hidden sm:block text-3xl text-gray-400">•</span>
              <span className="bg-[#f1f3f4] px-6 py-3 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Follow the evidence</span>
            </div>
            <a 
              href={registerUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-[#4285F4] text-white px-10 py-6 rounded-2xl font-black text-2xl md:text-3xl inline-flex items-center justify-center gap-4 transition-transform hover:-translate-y-2 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Register Your Team <ArrowUpRight className="w-8 h-8" />
            </a>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}

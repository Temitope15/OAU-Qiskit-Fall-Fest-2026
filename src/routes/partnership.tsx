import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, ReactNode } from "react";
import { 
  Building2, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  Rocket, 
  Zap, 
  Truck, 
  Sprout, 
  CircleDollarSign, 
  Stethoscope, 
  Antenna,
  ArrowRight,
  Target,
  Search,
  Handshake,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Corporate Partnership Proposition | Quantum Advantage for Nigeria" },
      { name: "description", content: "Partner with Quantum Advantage for Nigeria to discover how quantum computing can solve your industry's hardest problems." },
    ],
  }),
  component: PartnershipPage,
});

function SoftTypingText({ text, onComplete }: { text: string, onComplete?: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < text.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 10);
      return () => clearTimeout(timer);
    } else if (visibleCount === text.length) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 600); // wait for the final CSS transition to finish
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
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

function SlideIn({ children, direction = "left", delay = 0 }: { children: ReactNode, direction?: "left" | "right" | "up", delay?: number }) {
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

  let transformStart = "";
  let transformEnd = "";
  if (direction === "left") {
    transformStart = "-translate-x-12";
    transformEnd = "translate-x-0";
  } else if (direction === "right") {
    transformStart = "translate-x-12";
    transformEnd = "translate-x-0";
  } else if (direction === "up") {
    transformStart = "translate-y-12";
    transformEnd = "translate-y-0";
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? `opacity-100 ${transformEnd}` : `opacity-0 ${transformStart}`
      }`}
    >
      {children}
    </div>
  );
}

function TrackCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const tracks = [
    { id: 1, title: "Energy", icon: Zap, price: "$700", desc: "Grid optimization, load balancing, energy distribution, battery placement, renewable-energy scheduling." },
    { id: 2, title: "Logistics", icon: Truck, price: "$700", desc: "Vehicle routing, fleet scheduling, warehouse allocation, transportation optimization." },
    { id: 3, title: "Agriculture", icon: Sprout, price: "$700", desc: "Crop allocation, irrigation scheduling, resource allocation, agricultural logistics." },
    { id: 4, title: "Finance", icon: CircleDollarSign, price: "$700", desc: "Portfolio optimization, capital allocation, risk optimization, financial resource allocation." },
    { id: 5, title: "Healthcare", icon: Stethoscope, price: "$700", desc: "Hospital scheduling, ambulance routing, resource allocation, healthcare logistics." },
    { id: 6, title: "Telecommunications", icon: Antenna, price: "$700", desc: "Network optimization, bandwidth allocation, infrastructure placement, resource scheduling." },
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % tracks.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + tracks.length) % tracks.length);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    if (diff > 50) {
      handleNext();
      setTouchStart(null);
    } else if (diff < -50) {
      handlePrev();
      setTouchStart(null);
    }
  };
  const onTouchEnd = () => setIsPaused(false);

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto h-[480px] flex items-center justify-center overflow-hidden [perspective:1200px]"
      onTouchStart={onTouchStart} 
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {tracks.map((track, i) => {
        let offset = i - activeIndex;
        // wrap around logic
        if (offset < -Math.floor(tracks.length / 2)) offset += tracks.length;
        if (offset > Math.floor(tracks.length / 2)) offset -= tracks.length;

        const isCenter = offset === 0;
        const isLeft = offset === -1;
        const isRight = offset === 1;
        const isVisible = Math.abs(offset) <= 1;

        let transform = "";
        let zIndex = 0;
        let opacity = 0;

        if (isCenter) {
          transform = "translateX(0) scale(1) translateZ(0px) rotateY(0deg)";
          zIndex = 30;
          opacity = 1;
        } else if (isLeft) {
          transform = "translateX(-65%) scale(0.85) translateZ(-100px) rotateY(15deg)";
          zIndex = 20;
          opacity = 0.5;
        } else if (isRight) {
          transform = "translateX(65%) scale(0.85) translateZ(-100px) rotateY(-15deg)";
          zIndex = 20;
          opacity = 0.5;
        } else {
          // hidden behind
          transform = `translateX(${offset > 0 ? '100%' : '-100%'}) scale(0.6) translateZ(-300px) rotateY(${offset > 0 ? '-30deg' : '30deg'})`;
          zIndex = 10;
          opacity = 0;
        }

        return (
          <div 
            key={track.id}
            onClick={() => {
              if (isLeft) handlePrev();
              if (isRight) handleNext();
            }}
            className="absolute w-[280px] sm:w-[320px] md:w-[380px] h-[340px] transition-all duration-700 ease-out"
            style={{
              transform,
              zIndex,
              opacity,
              pointerEvents: isVisible ? 'auto' : 'none',
              cursor: isCenter ? 'default' : 'pointer'
            }}
          >
            <div className={`bg-white p-8 md:p-10 rounded-[2rem] border-[4px] border-black h-full w-full flex flex-col transition-all duration-500 ${isCenter ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-y-2' : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="w-14 h-14 rounded-xl bg-[#f1f3f4] border-[3px] border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <track.icon className="w-7 h-7 text-black" />
              </div>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-black leading-tight">{track.title}</h3>
                <span className="bg-[#34A853] text-white text-sm font-black px-4 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{track.price}</span>
              </div>
              <p className="text-gray-700 font-bold leading-relaxed">
                {track.desc}
              </p>
            </div>
          </div>
        );
      })}
      
      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 z-40">
        <button onClick={handlePrev} className="w-12 h-12 rounded-xl bg-white border-[3px] border-black flex items-center justify-center hover:-translate-y-1 transition-transform shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
          <ChevronRight className="w-6 h-6 rotate-180 text-black" />
        </button>
        <button onClick={handleNext} className="w-12 h-12 rounded-xl bg-white border-[3px] border-black flex items-center justify-center hover:-translate-y-1 transition-transform shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
}

function PartnershipPage() {
  const [heroAnimated, setHeroAnimated] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32 border-b-4 border-black bg-[#f1f3f4]">
        <div className="site-container relative z-10">
          <p className="inline-block px-4 py-1.5 mb-6 text-sm font-black rounded-xl bg-white border-2 border-black text-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Corporate Partnership Proposition
          </p>
          <h1 className="text-3xl md:text-[5rem] font-black tracking-tighter mb-6 md:mb-8 max-w-5xl leading-[1.1] text-black">
            <SoftTypingText 
              text="What if the next breakthrough for an industry problem is already being explored by someone in Nigeria?" 
              onComplete={() => setHeroAnimated(true)}
            />
          </h1>
          <FadeSlideUp isVisible={heroAnimated}>
            <p className="text-base md:text-2xl text-gray-700 font-bold max-w-4xl leading-relaxed mb-8 md:mb-12">
              <strong className="text-black font-black">As the flagship challenge of our 2026 Qiskit Fall Fest, GDG on Campus OAU presents Quantum Advantage for Nigeria.</strong> We bring together Nigeria's brightest students to solve your industry's toughest challenges. Sponsor a track, bring us a real problem, and discover how emerging technology can build a better solution.
            </p>
          </FadeSlideUp>
          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm font-black text-black uppercase tracking-widest flex-wrap">
            <span className="bg-[#FBBC04] px-4 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">November 2026</span>
            <span className="w-8 h-1 bg-black rounded-full hidden sm:block" />
            <span className="bg-[#4285F4] text-white px-4 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Qiskit Fall Fest</span>
            <span className="w-8 h-1 bg-black rounded-full hidden sm:block" />
            <span>Quantum Advantage For Nigeria</span>
          </div>
        </div>
      </section>

      {/* The Opportunity & Why it matters */}
      <section className="site-container py-20 md:py-32 border-b-4 border-black overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <SlideIn direction="left">
            <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">1. The Opportunity</h2>
            <p className="text-2xl md:text-4xl font-black text-black mb-8 leading-tight tracking-tight">
              Test real problems with new technology and new talent.
            </p>
            
            <p className="text-base md:text-xl font-bold text-gray-700 leading-relaxed mb-6">
              Hosted as the anchor event for the <span className="text-black font-black">IBM Qiskit Fall Fest</span>, <span className="text-black font-black">Quantum Advantage for Nigeria (QAN)</span> is a national innovation challenge where Nigerian teams investigate real problems across:
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {["Energy", "Logistics", "Agriculture", "Finance", "Healthcare", "Telecom"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-[#f1f3f4] border-2 border-black rounded-full font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-10">
              Companies can bring a real problem from their industry. Participants then research the problem, build solutions, and test whether quantum, quantum-inspired, or hybrid approaches can improve on existing methods.
            </p>

            <div className="p-8 md:p-10 bg-white rounded-[2rem] border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8 group hover:-translate-y-1 transition-transform">
              <h3 className="font-black text-black mb-8 uppercase tracking-wider text-xl">The Model Is Simple:</h3>
              <div className="flex flex-col gap-6 font-bold text-black text-lg">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-[#4285F4] border-[3px] border-black text-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">1</div>
                  <span>Company brings the problem</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FBBC04] border-[3px] border-black text-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">2</div>
                  <span>Teams investigate it</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-[#34A853] border-[3px] border-black text-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">3</div>
                  <span>Solutions are tested</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-[#EA4335] border-[3px] border-black text-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">4</div>
                  <span>Results are presented</span>
                </div>
              </div>
            </div>
          </SlideIn>
          
          <SlideIn direction="right" delay={200}>
            <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">2. Why Participate?</h2>
            <p className="text-2xl md:text-4xl font-black text-black mb-12 leading-tight tracking-tight">
              Turn a sponsorship into an opportunity to discover, test, and connect.
            </p>
            
            <div className="space-y-10">
              {[
                { icon: Search, title: "Find Talent", desc: "See how students, developers, researchers, and engineers approach a difficult problem — beyond what a CV can show.", color: "bg-[#4285F4]" },
                { icon: Lightbulb, title: "Test New Ideas", desc: "Give an external team a problem your organisation may not currently have the time or resources to explore.", color: "bg-[#FBBC04]" },
                { icon: Rocket, title: "Explore Quantum", desc: "Learn where quantum and related technologies could actually become useful to your industry.", color: "bg-[#34A853]" },
                { icon: Handshake, title: "Build Relationships", desc: "Create early opportunities for mentorship, internships, research, pilots, or future collaboration.", color: "bg-[#EA4335]" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0">
                    <div className={`w-14 h-14 rounded-xl ${item.color} border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-7 h-7 ${item.color === 'bg-[#FBBC04]' ? 'text-black' : 'text-white'}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-black text-2xl mb-2 text-black">{item.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* What a Sponsor Gets */}
      <section className="bg-[#f8f9fa] py-20 md:py-32 border-b-4 border-black">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">3. What a Sponsor Actually Gets</h2>
            <p className="text-2xl md:text-5xl font-black text-black leading-tight tracking-tight">
              A direct pipeline to test new ideas and discover talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <SlideIn direction="left">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <h3 className="text-3xl font-black mb-10 flex items-center gap-4 text-black">
                  <div className="w-12 h-12 bg-[#4285F4] rounded-xl border-[3px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  The Sponsor Provides
                </h3>
                <ul className="space-y-8">
                  {[
                    { title: "Sponsorship Funding", desc: "$700 to cover the track prize and event operations." },
                    { title: "A Real-World Problem", desc: "A specific, difficult challenge from your industry for teams to solve." },
                    { title: "Industry Context", desc: "Brief background information to help participants understand the problem." },
                    { title: "Time & Expertise (Optional)", desc: "Your staff can optionally choose to mentor or judge the participating teams." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="w-8 h-8 rounded-full bg-[#f1f3f4] border-[3px] border-black flex items-center justify-center shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <div className="font-black text-lg md:text-xl text-black mb-1 md:mb-2">{item.title}</div>
                        <div className="text-gray-700 font-medium leading-relaxed text-sm md:text-lg">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              </SlideIn>
              <SlideIn direction="right" delay={200}>
              <div className="bg-[#f1f3f4] p-8 md:p-12 rounded-[2rem] border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-[#FBBC04] rounded-bl-full border-b-[3px] border-l-[3px] border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] z-0" />
                <h3 className="text-3xl font-black mb-10 flex items-center gap-4 text-black relative z-10">
                  <div className="w-12 h-12 bg-[#FBBC04] rounded-xl border-[3px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  The Sponsor Receives
                </h3>
                <ul className="space-y-8 relative z-10">
                  {[
                    { title: "Dedicated Industry Track", desc: "Your company's name and problem headline a specific competition track." },
                    { title: "Fresh Perspectives", desc: "See how top students approach your problem using emerging technologies." },
                    { title: "Direct Talent Access", desc: "Observe, interact with, and recruit the best problem-solvers in action." },
                    { title: "Actionable Solutions", desc: "Receive the research, code, and prototypes produced by the winning teams." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="w-8 h-8 rounded-full bg-[#34A853] border-[3px] border-black flex items-center justify-center shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-black text-lg md:text-xl text-black mb-1 md:mb-2">{item.title}</div>
                        <div className="text-gray-700 font-medium leading-relaxed text-sm md:text-lg">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              </SlideIn>
            </div>
        </div>
      </section>

      {/* Sponsor a Problem Tracks */}
      <section className="site-container py-24 border-b border-border">
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 max-w-3xl">4. Sponsor a problem.<br />Discover the people working on it.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Companies can sponsor a challenge track aligned with their industry for <strong className="text-foreground">$700</strong>. The examples below are starting points; sponsors are encouraged to propose problems that reflect challenges they actually encounter.
          </p>
        </div>

        <TrackCarousel />
      </section>

      {/* 5. Prize Breakdown (Neo-Brutalism Minimalist Style) */}
      <section className="site-container py-20 md:py-32 border-b border-border bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-6">5. Prize Breakdown</h2>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-black">
            Transparent Allocation
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Transparent allocation of sponsorship funding to reward innovation and support programme execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Track Sponsor */}
          <SlideIn direction="left">
            <div className="bg-[#f1f3f4] rounded-[2rem] p-8 md:p-12 border-[6px] border-white shadow-xl flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 h-full">
              <div>
                <h3 className="text-2xl font-black mb-2 text-black tracking-tight">Track Sponsor</h3>
                <p className="text-gray-600 font-bold mb-12 max-w-[200px] leading-tight">Headline a specific industry problem.</p>
                
                <div className="flex flex-col items-start gap-4 mb-16">
                  <div className="text-6xl md:text-[8rem] font-black text-black tracking-tighter leading-none">
                    $700
                  </div>
                  <div className="inline-block bg-[#4285F4] text-white font-black px-5 py-2.5 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg">
                    Total Funding
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-bold text-black text-lg">Track Prize</span>
                  <span className="font-black text-2xl text-black">$500</span>
                </div>
                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-bold text-black text-lg">Operations</span>
                  <span className="font-black text-2xl text-black">$200</span>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Grand Prize Sponsor */}
          <SlideIn direction="right" delay={200}>
            <div className="bg-[#f1f3f4] rounded-[2rem] p-8 md:p-12 border-[6px] border-white shadow-xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 h-full">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-[#FBBC04] rounded-bl-full border-b-[3px] border-l-[3px] border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] z-0 group-hover:scale-110 transition-transform origin-top-right duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 text-black tracking-tight">Grand Prize Partner</h3>
                <p className="text-gray-600 font-bold mb-12 max-w-[200px] leading-tight">Support the overall challenge ecosystem.</p>
                
                <div className="flex flex-col items-start gap-4 mb-16">
                  <div className="text-6xl md:text-[8rem] font-black text-black tracking-tighter leading-none">
                    $1.2k
                  </div>
                  <div className="inline-block bg-[#34A853] text-white font-black px-5 py-2.5 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg">
                    Total Funding
                  </div>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-bold text-black text-lg">Overall Prize</span>
                  <span className="font-black text-2xl text-black">$1,000</span>
                </div>
                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-bold text-black text-lg">Operations</span>
                  <span className="font-black text-2xl text-black">$200</span>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* 6. The Pipeline */}
      <section className="site-container py-20 md:py-32 border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">6. The Partnership</h2>
                <h3 className="text-2xl md:text-5xl font-black mb-8 tracking-tight text-black leading-tight">
                  More than just a logo on a banner.
                </h3>
                <p className="text-base md:text-xl text-gray-700 font-bold leading-relaxed mb-12 max-w-md">
                  Bring a real challenge from your industry. Let's solve it together.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[#4285F4] border-[3px] border-black flex items-center justify-center shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-2xl text-black">You bring the problem.</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FBBC04] border-[3px] border-black flex items-center justify-center shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <CheckCircle2 className="w-6 h-6 text-black" />
                    </div>
                    <p className="font-bold text-2xl text-black">Students build solutions.</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[#34A853] border-[3px] border-black flex items-center justify-center shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-2xl text-black">We track the results.</p>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={200}>
              <div className="bg-[#f1f3f4] p-8 md:p-12 rounded-[2rem] border-[6px] border-white shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-[#EA4335] rounded-bl-full border-b-[3px] border-l-[3px] border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] z-0 group-hover:scale-110 transition-transform origin-top-right duration-500" />
                <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-black relative z-10 pr-12">The Sponsor Pipeline</h3>
                <div className="flex flex-col gap-5 relative z-10">
                  {["Challenge Execution", "Mentorship", "Talent Identification", "Internships", "Long-term Collaboration"].map((step, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl border-[3px] border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
                        {i + 1}
                      </div>
                      <span className="font-bold text-xl text-black">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Vision & CTA */}
      <section className="site-container py-20 md:py-32 text-center max-w-5xl mx-auto">
        <FadeSlideUp isVisible={true}>
          <h2 className="text-sm font-black text-black uppercase tracking-widest mb-6">7. Our Vision</h2>
          <p className="text-2xl md:text-5xl font-black leading-tight mb-8 text-black tracking-tight">
            Nigeria does not need to wait until quantum computing becomes mainstream before asking what it could mean for the country.
          </p>
          <p className="text-base md:text-xl text-gray-700 font-bold mb-16 max-w-3xl mx-auto leading-relaxed">
            That exploration requires problems worth solving, people capable of solving them, resources to experiment, industry willing to open its doors, and opportunities for promising work to continue.
          </p>
        </FadeSlideUp>
        <SlideIn direction="up">
          <div className="p-8 md:p-16 bg-[#4285F4] rounded-[2rem] border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-[#FBBC04] rounded-bl-full border-b-[4px] border-l-[4px] border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] z-0 group-hover:scale-110 transition-transform origin-top-right duration-500" />
            <h2 className="text-3xl md:text-[4rem] font-black mb-8 tracking-tighter leading-none relative z-10 text-white">Partner With Us</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 text-xl md:text-2xl font-bold relative z-10">
              <span>Sponsor a track.</span>
              <span className="hidden sm:block w-3 h-3 rounded-full bg-white border-2 border-black" />
              <span>Bring a problem.</span>
              <span className="hidden sm:block w-3 h-3 rounded-full bg-white border-2 border-black" />
              <span>Meet the solvers.</span>
            </div>
            <a 
              href="mailto:oaudsc@gmail.com?subject=Sponsorship%20Inquiry%3A%20Quantum%20Advantage%20for%20Nigeria"
              className="relative z-10 bg-[#FBBC04] text-black px-6 py-4 md:px-10 md:py-5 rounded-2xl font-black text-xl md:text-2xl inline-flex items-center justify-center gap-4 transition-transform hover:-translate-y-2 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              <Handshake className="w-8 h-8" />
              Start a Conversation
            </a>
          </div>
        </SlideIn>
      </section>
    </div>
  );
}
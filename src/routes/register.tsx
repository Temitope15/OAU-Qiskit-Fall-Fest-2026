import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, CalendarDays } from "lucide-react";
import { venue } from "@/lib/events";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register | Qiskit Fall Fest OAU 2026" },
      { name: "description", content: "Register to attend Qiskit Fall Fest OAU 2026 at Opolo Hub, Ile-Ife." },
    ],
  }),
  component: RegisterPage,
});

const volunteerTeams = [
  "Logistics",
  "Media & Photography",
  "Social Media & Comms",
  "Technical Support",
  "Ushering & Registration",
];

function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    university: "",
    category: "",
    wantsToVolunteer: false,
    volunteerTeam: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbwOjUxz-7Dq6H_WUPXYz0iAshkXZ34Haq1V1nXrzwk7msd1n5_b3n-3Is-asWEyHFcLJw/exec";

    try {
      // We MUST use mode: "no-cors" for Google Apps Script to prevent redirect CORS errors
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ type: "attendee", ...formData }),
        headers: { "Content-Type": "text/plain;charset=utf-8" },
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong while submitting. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#f1f3f4] py-24 border-b-4 border-black px-4">
        <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-2xl text-center transform -rotate-1">
          <div className="w-24 h-24 bg-[#34A853] text-white rounded-full flex items-center justify-center mx-auto mb-8 border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">You're on the list!</h1>
          <p className="text-xl font-bold text-gray-700 leading-relaxed mb-10">
            Your spot at Qiskit Fall Fest OAU 2026 ({venue}, Ile-Ife) is registered. We'll email you with the schedule and everything you need to know.
          </p>
          {formData.wantsToVolunteer && (
            <div className="bg-[#34A853] text-white p-6 rounded-2xl border-[4px] border-black mb-10 text-left">
              <p className="font-black text-xl mb-2">Thanks for offering to help!</p>
              <p className="font-bold">
                Our organising team will reach out about the <strong>{formData.volunteerTeam || "volunteer"}</strong> team soon.
              </p>
            </div>
          )}
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                fullName: "",
                email: "",
                whatsapp: "",
                university: "",
                category: "",
                wantsToVolunteer: false,
                volunteerTeam: "",
              });
            }}
            className="bg-black text-white px-8 py-5 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_#4285F4] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2"
          >
            Register another attendee <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* Header Area */}
      <section className="w-full pt-16 pb-12 bg-[#4285F4] border-b-4 border-black text-center px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="bg-[#FBBC04] text-black px-4 py-1.5 rounded-lg border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs inline-flex items-center gap-2">
            <CalendarDays className="w-4 h-4" /> 27–28 November 2026
          </span>
          <span className="bg-white text-black px-4 py-1.5 rounded-lg border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-widest text-xs inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {venue} · Ile-Ife
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-6">
          Join the Movement
        </h1>
        <p className="text-xl font-bold text-black bg-[#FBBC04] px-6 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1">
          Save your seat for the keynotes, technical sessions, and code jams
        </p>
      </section>

      <div className="site-container max-w-4xl mt-12">
        <form
          onSubmit={handleSubmit}
          className="bg-[#f1f3f4] p-8 md:p-12 rounded-[2rem] border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex items-center justify-between mb-10 border-b-[4px] border-black pb-6">
            <h2 className="text-4xl font-black">Attendee Registration</h2>
          </div>

          <div className="space-y-8">
            {/* Attendee: which session */}
            <div>
              <label className="block font-black text-xl mb-2">Which are you? *</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30 appearance-none"
              >
                <option value="">Select one</option>
                <option value="Secondary school student">Secondary school student</option>
                <option value="University student">University student</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Common Fields */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-black text-xl mb-2">Full Name *</label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block font-black text-xl mb-2">Email Address *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-black text-xl mb-2">WhatsApp Number *</label>
                <input
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30"
                  placeholder="+234..."
                />
              </div>
              <div>
                <label className="block font-black text-xl mb-2">School / University / Organization *</label>
                <input
                  required
                  type="text"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30"
                  placeholder="Obafemi Awolowo University"
                />
              </div>
            </div>

            {/* Optional volunteer */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border-[4px] border-black mt-8">
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.wantsToVolunteer}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      wantsToVolunteer: e.target.checked,
                      volunteerTeam: e.target.checked ? formData.volunteerTeam : "",
                    })
                  }
                  className="w-7 h-7 accent-[#34A853] mt-1 shrink-0"
                />
                <span>
                  <span className="block font-black text-2xl">
                    Want to help organise? <span className="text-gray-400 font-bold text-lg">(optional)</span>
                  </span>
                  <span className="block font-bold text-gray-600 text-lg mt-1">
                    Lend a hand running Qiskit Fall Fest at OAU. Pick a team and we'll reach out.
                  </span>
                </span>
              </label>

              {formData.wantsToVolunteer && (
                <div className="mt-8 border-t-[4px] border-black pt-8 animate-in fade-in slide-in-from-top-4">
                  <label className="block font-black text-xl mb-2">Pick a team *</label>
                  <select
                    required
                    value={formData.volunteerTeam}
                    onChange={(e) => setFormData({ ...formData, volunteerTeam: e.target.value })}
                    className="w-full bg-[#f1f3f4] border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#34A853]/30 appearance-none"
                  >
                    <option value="">Select a team</option>
                    {volunteerTeams.map((team) => (
                      <option key={team} value={team}>
                        {team}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-10 bg-[#EA4335] text-white py-6 rounded-2xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-2xl hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

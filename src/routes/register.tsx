import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Users, Code2 } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register | Qiskit Fall Fest OAU 2026" },
      { name: "description", content: "Register to join the Qiskit Fall Fest Hackathon or attend the Fall Fest." },
    ]
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
  const [formType, setFormType] = useState<"hackathon" | "attendee" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    university: "",
    department: "",
    level: "",
    stack: "",
    targetIndustry: "",
    participationMode: "Solo",
    teamName: "",
    teamMembers: [] as { name: ""; email: ""; role: "" }[],
    // Attendee fields
    category: "",
    wantsToVolunteer: false,
    volunteerTeam: "",
  });

  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value } as any;
    setFormData({ ...formData, teamMembers: updatedMembers });
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 4) {
      setFormData({
        ...formData,
        teamMembers: [...formData.teamMembers, { name: "", email: "", role: "" }],
      });
    }
  };

  const removeTeamMember = (index: number) => {
    const updated = formData.teamMembers.filter((_, i) => i !== index);
    setFormData({ ...formData, teamMembers: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptUrl = "https://script.google.com/macros/s/AKfycbx9YPoJnJHp7Wug19Eb4Vp7cGPfcYOL0wV4hDX3hTKZ45Uepf4r2sjw7qM9pTUbmH9HvA/exec";

    try {
      // We MUST use mode: "no-cors" for Google Apps Script to prevent redirect CORS errors
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ type: formType, ...formData }),
        headers: { "Content-Type": "text/plain;charset=utf-8" }
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
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            {formType === "hackathon" ? "Registration Received!" : "You're on the list!"}
          </h1>
          <p className="text-xl font-bold text-gray-700 leading-relaxed mb-10">
            {formType === "hackathon"
              ? "Your hackathon registration has been received! We will send you an email soon with further instructions and the next steps."
              : "Your spot at the Fall Fest is registered. We'll email you with the venue details, schedule, and everything you need to know."}
          </p>
          {formType === "attendee" && formData.wantsToVolunteer && (
            <div className="bg-[#34A853] text-white p-6 rounded-2xl border-[4px] border-black mb-10 text-left">
              <p className="font-black text-xl mb-2">Thanks for offering to help! 💚</p>
              <p className="font-bold">Our organising team will reach out about the <strong>{formData.volunteerTeam || "team"}</strong> team soon.</p>
            </div>
          )}
          {formType === "hackathon" && (
            <div className="bg-[#FBBC04] p-6 rounded-2xl border-[4px] border-black mb-10 text-left">
              <p className="font-black text-xl mb-2">Important Next Step:</p>
              <p className="font-bold text-gray-800">You still need to secure your physical seat at the venue for the Fall Fest event days.</p>
            </div>
          )}
          <button
            onClick={() => { setIsSuccess(false); setFormType(null); }}
            className="bg-black text-white px-8 py-5 rounded-xl border-[4px] border-black shadow-[6px_6px_0px_0px_#4285F4] font-black text-xl hover:-translate-y-1 transition-transform inline-flex items-center gap-2"
          >
            Back to start <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* Header Area */}
      <section className="w-full pt-16 pb-12 bg-[#4285F4] border-b-4 border-black text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-6">
          Join the Movement
        </h1>
        <p className="text-xl font-bold text-black bg-[#FBBC04] px-6 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1">
          Select how you want to participate
        </p>
      </section>

      <div className="site-container max-w-4xl mt-12">
        {!formType ? (
          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => setFormType("hackathon")}
              className="bg-white p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col text-left hover:-translate-y-2 transition-transform group"
            >
              <div className="w-16 h-16 bg-[#EA4335] text-white rounded-xl border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black mb-4">Hackathon Participant</h2>
              <p className="font-bold text-gray-600 text-lg">Build solutions, compete in industry tracks, and push your limits.</p>
            </button>

            <button
              onClick={() => setFormType("attendee")}
              className="bg-white p-10 rounded-[2rem] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col text-left hover:-translate-y-2 transition-transform group"
            >
              <div className="w-16 h-16 bg-[#34A853] text-white rounded-xl border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black mb-4">Attendee</h2>
              <p className="font-bold text-gray-600 text-lg">Join the talks, keynotes, and sessions — for secondary and university students.</p>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#f1f3f4] p-8 md:p-12 rounded-[2rem] border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-10 border-b-[4px] border-black pb-6">
              <h2 className="text-4xl font-black">
                {formType === "hackathon" ? "Hackathon Registration" : "Attendee Registration"}
              </h2>
              <button
                type="button"
                onClick={() => setFormType(null)}
                className="text-sm font-black uppercase underline hover:text-[#EA4335]"
              >
                Change
              </button>
            </div>

            <div className="space-y-8">
              {/* Attendee: which session */}
              {formType === "attendee" && (
                <div>
                  <label className="block font-black text-xl mb-2">Which are you? *</label>
                  <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30 appearance-none">
                    <option value="">Select one</option>
                    <option value="Secondary school student">Secondary school student</option>
                    <option value="University student">University student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              )}

              {/* Common Fields */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-black text-xl mb-2">Full Name *</label>
                  <input required type="text" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block font-black text-xl mb-2">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-black text-xl mb-2">WhatsApp Number *</label>
                  <input required type="tel" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30" placeholder="+234..." />
                </div>
                <div>
                  <label className="block font-black text-xl mb-2">{formType === "attendee" ? "School / University / Organization *" : "University / Organization *"}</label>
                  <input required type="text" value={formData.university} onChange={e => setFormData({...formData, university: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30" placeholder="Obafemi Awolowo University" />
                </div>
              </div>

              {/* Hackathon Specific Fields */}
              {formType === "hackathon" && (
                <>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-black text-xl mb-2">Course of Study *</label>
                      <input required type="text" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30" placeholder="Computer Science" />
                    </div>
                    <div>
                      <label className="block font-black text-xl mb-2">Level / Year *</label>
                      <select required value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30 appearance-none">
                        <option value="">Select Level</option>
                        <option value="100L">100L</option>
                        <option value="200L">200L</option>
                        <option value="300L">300L</option>
                        <option value="400L">400L</option>
                        <option value="500L">500L</option>
                        <option value="Post-grad">Post-graduate</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-black text-xl mb-2">What is your stack? *</label>
                      <input required type="text" value={formData.stack} onChange={e => setFormData({...formData, stack: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30" placeholder="e.g. Frontend, Data Science, UI/UX" />
                    </div>
                    <div>
                      <label className="block font-black text-xl mb-2">Target Industry *</label>
                      <select required value={formData.targetIndustry} onChange={e => setFormData({...formData, targetIndustry: e.target.value})} className="w-full bg-white border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30 appearance-none">
                        <option value="">Select Industry</option>
                        <option value="Energy">Energy</option>
                        <option value="Logistics">Logistics</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Finance">Finance</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Telecoms">Telecoms</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-white p-6 md:p-8 rounded-2xl border-[4px] border-black mt-8">
                    <label className="block font-black text-2xl mb-4">Participation Mode *</label>
                    <div className="flex flex-col md:flex-row gap-6">
                      <label className="flex items-center gap-3 font-bold text-xl cursor-pointer">
                        <input type="radio" name="mode" value="Solo" checked={formData.participationMode === "Solo"} onChange={() => setFormData({...formData, participationMode: "Solo"})} className="w-6 h-6 accent-[#EA4335]" />
                        I am entering Solo
                      </label>
                      <label className="flex items-center gap-3 font-bold text-xl cursor-pointer">
                        <input type="radio" name="mode" value="Team" checked={formData.participationMode === "Team"} onChange={() => setFormData({...formData, participationMode: "Team"})} className="w-6 h-6 accent-[#EA4335]" />
                        I am entering with a Team
                      </label>
                    </div>

                    {formData.participationMode === "Team" && (
                      <div className="mt-8 border-t-[4px] border-black pt-8 animate-in fade-in slide-in-from-top-4">
                        <div className="mb-6">
                          <label className="block font-black text-xl mb-2">Team Name *</label>
                          <input required type="text" value={formData.teamName} onChange={e => setFormData({...formData, teamName: e.target.value})} className="w-full bg-[#f1f3f4] border-[3px] border-black rounded-xl p-4 font-bold" placeholder="Super Quantum Squad" />
                        </div>

                        <p className="font-black text-lg mb-4">Teammate Details (Max 4 additional members)</p>
                        <div className="space-y-4">
                          {formData.teamMembers.map((member, idx) => (
                            <div key={idx} className="grid md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-start bg-[#f1f3f4] p-4 rounded-xl border-[3px] border-black">
                              <input required type="text" placeholder="Name" value={member.name} onChange={e => handleTeamMemberChange(idx, "name", e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2 font-bold" />
                              <input required type="email" placeholder="Email" value={member.email} onChange={e => handleTeamMemberChange(idx, "email", e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2 font-bold" />
                              <input required type="text" placeholder="Role (e.g. Backend)" value={member.role} onChange={e => handleTeamMemberChange(idx, "role", e.target.value)} className="w-full bg-white border-2 border-black rounded-lg p-2 font-bold" />
                              <button type="button" onClick={() => removeTeamMember(idx)} className="bg-[#EA4335] text-white p-2 rounded-lg border-2 border-black font-black">X</button>
                            </div>
                          ))}
                        </div>

                        {formData.teamMembers.length < 4 && (
                          <button type="button" onClick={addTeamMember} className="mt-4 bg-white text-black px-6 py-3 rounded-lg border-[3px] border-black font-black hover:bg-black hover:text-white transition-colors">
                            + Add Teammate
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Attendee Specific: optional volunteer */}
              {formType === "attendee" && (
                <div className="bg-white p-6 md:p-8 rounded-2xl border-[4px] border-black mt-8">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.wantsToVolunteer}
                      onChange={e => setFormData({...formData, wantsToVolunteer: e.target.checked, volunteerTeam: e.target.checked ? formData.volunteerTeam : ""})}
                      className="w-7 h-7 accent-[#34A853] mt-1 shrink-0"
                    />
                    <span>
                      <span className="block font-black text-2xl">Want to help organise? <span className="text-gray-400 font-bold text-lg">(optional)</span></span>
                      <span className="block font-bold text-gray-600 text-lg mt-1">Lend a hand running the biggest quantum event in Nigeria. Pick a team and we'll reach out.</span>
                    </span>
                  </label>

                  {formData.wantsToVolunteer && (
                    <div className="mt-8 border-t-[4px] border-black pt-8 animate-in fade-in slide-in-from-top-4">
                      <label className="block font-black text-xl mb-2">Pick a team *</label>
                      <select required value={formData.volunteerTeam} onChange={e => setFormData({...formData, volunteerTeam: e.target.value})} className="w-full bg-[#f1f3f4] border-[3px] border-black rounded-xl p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#34A853]/30 appearance-none">
                        <option value="">Select a team</option>
                        {volunteerTeams.map((team) => (
                          <option key={team} value={team}>{team}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-10 bg-[#EA4335] text-white py-6 rounded-2xl border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-2xl hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

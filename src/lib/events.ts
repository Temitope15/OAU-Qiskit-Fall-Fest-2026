export type EventYear = {
  year: "2024" | "2025" | "2026";
  status: "Concluded" | "Archive in progress" | "Upcoming";
  title: string;
  summary: string;
  href: "/2024" | "/2025" | "/2026";
};

export const eventYears: EventYear[] = [
  {
    year: "2024",
    status: "Concluded",
    title: "The first signal",
    summary: "A 24-day learning challenge that grew into an examination, hackathon, and final gathering.",
    href: "/2024",
  },
  {
    year: "2025",
    status: "Archive in progress",
    title: "Momentum",
    summary: "The bridge between our first edition and a wider ambition for quantum education in Nigeria.",
    href: "/2025",
  },
  {
    year: "2026",
    status: "Upcoming",
    title: "Young Nigerian minds",
    summary: "A focused hackathon, secondary school outreach, and problem-solving challenges.",
    href: "/2026",
  },
];

export const programme2024 = [
  ["18 Oct – 10 Nov", "Learning challenge", "Beginner-friendly, self-paced Qiskit notebooks."],
  ["12 – 13 Nov", "Online examination", "A checkpoint for learning challenge participants."],
  ["14 – 19 Nov", "Hackathon", "A focused period to turn learning into working ideas."],
  ["20 Nov", "Hands-on session", "A live evening of practical quantum computing."],
  ["21 Nov", "Presentations", "Hackathon teams shared what they built."],
  ["23 Nov", "Final event", "Community talks, celebration, and the closing gathering."],
] as const;

export const schools2026 = [
  "Fadehan College",
  "Moremi High School",
  "OAU International School",
  "Oduduwa College",
  "Ife Girls High School",
];
/** Registration form for both secondary school and university participants.
 *  Replace with the Google Form link once it is ready. */
export const registerUrl = "#register";

export const hackathonTracks = [
  {
    name: "Quantum Algorithms",
    detail: "For computing and quantitative finance students, working towards defined performance benchmarks.",
  },
  {
    name: "Quantum Optimization",
    detail: "Energy problems and Hamiltonian formulations, measured against a benchmark limit.",
  },
  {
    name: "Quantum Machine Learning",
    detail: "Models that combine quantum algorithms with machine learning to solve problems in any field.",
  },
] as const;

export const hackathonWeeks = [
  ["Week 1", "General training", "Screened applicants with programming experience learn core quantum computing methods together."],
  ["Week 2", "Track split", "Participants choose one of the three categories and continue in focused groups."],
  ["Week 3", "Hackathon begins", "Teams start building towards their track benchmarks with mentor support."],
  ["Week 4", "Final push", "Projects are completed and submitted ahead of Fall Fest."],
] as const;

/** `photo` points at a file in `public/team/`. Drop the image in with the
 *  matching name and it appears automatically; until then the card falls
 *  back to an initials monogram. */
export type TeamMember = { name: string; role: string; photo: string };

export const team: TeamMember[] = [
  { name: "Dr Fadodun", role: "Faculty advisor", photo: "/team/dr-fadodun.jpg" },
  { name: "Lekan Adesina", role: "Organising team", photo: "/team/Limitless.jpeg" },
  { name: "Temitope Akinsunmade", role: "Organising team", photo: "/team/sunmade.jpeg" },
  { name: "Blessing Agbor", role: "Organising team", photo: "/team/blessing.jpeg" },
  { name: "Joseph Oyetunde", role: "Organising team", photo: "/team/codegod.jpg" },
  { name: "Olamide Lawal", role: "Organising team", photo: "/team/olamide_lawal.jpg" },
];

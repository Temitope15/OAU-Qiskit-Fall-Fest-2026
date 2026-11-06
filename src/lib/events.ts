export type EventYear = {
  year: "2024" | "2025" | "2026";
  status: "Concluded" | "Archive in progress" | "Upcoming";
  title: string;
  summary: string;
  href: "/2024" | "/2025" | "/";
};

export const eventYears: EventYear[] = [
  {
    year: "2024",
    status: "Concluded",
    title: "The first signal",
    summary: "Established OAU's quantum student community and had a virtual speaker from Yale University, USA (20+ attendees).",
    href: "/2024",
  },
  {
    year: "2025",
    status: "Archive in progress",
    title: "Momentum",
    summary: "Organized the inaugural secondary school outreach event at Fadehan International College, Ile-Ife (50+ attendees).",
    href: "/2025",
  },
  {
    year: "2026",
    status: "Upcoming",
    title: "Pushing limits",
    summary: "Held at Opolo Hub. Hands-on lab sessions for secondary school and university students, global keynote speakers, etc. (100+ attendees).",
    href: "/",
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

/** 5 local secondary schools in Ile-Ife participating in the outreach (40 students total). */
export const schools2026 = [
  "Fadehan College",
  "Moremi High School",
  "OAU International School",
  "Oduduwa College",
  "Ife Girls High School",
];

/** Venue for both event days. */
export const venue = "Opolo Hub";

/** Registration form for both secondary school and university participants.
 *  Replace with the Google Form link once it is ready. */
export const registerUrl = "/register";

/** `photo` points at a file in `public/speakers/` (or `public/team/`). Until
 *  the image exists the card falls back to an initials monogram. */
export type Speaker = {
  name: string;
  role: string;
  talk: string;
  summary: string;
  day: "Friday" | "Saturday";
  mode: "In person" | "Virtual";
  photo: string;
  keynote?: boolean;
};

export const speakers: Speaker[] = [
  {
    name: "Pawel Gora",
    role: "Founder & CEO, Quantum AI Foundation · Board Member, QWorld",
    talk: "Pushing Beyond the Limits in Quantum Computing",
    summary:
      "Exposing students to frontier applications where early researchers can innovate and stand out in quantum computing.",
    day: "Saturday",
    mode: "Virtual",
    photo: "/speakers/pawel-gora.jpg",
    keynote: true,
  },
  {
    name: "Catherine Wanjiru",
    role: "Software Engineer, IBM · Quantum Technical Contributor",
    talk: "Getting Started in Quantum with IBM",
    summary:
      "Inspiring young African innovators with real-world developer tools, cloud quantum execution, and career insight from IBM.",
    day: "Friday",
    mode: "Virtual",
    photo: "/speakers/catherine-wanjiru.jpg",
    keynote: true,
  },
  {
    name: "Favour Alfred",
    role: "Delegate, African Quantum Consortium",
    talk: "Quantum Education & Capacity Building",
    summary:
      "Fostering university research culture, grad school applications, quantum startup creation, and finding related opportunities.",
    day: "Saturday",
    mode: "In person",
    photo: "/speakers/favour-alfred.jpg",
  },
  {
    name: "Dr Fadodun",
    role: "Dept of Physics, OAU · Faculty Advisor",
    talk: "Physics & Mathematics Rudiments",
    summary:
      "Explaining mathematical foundations and quantum mechanics to launch students into the technical sessions.",
    day: "Friday",
    mode: "In person",
    photo: "/team/dr-fadodun.jpg",
  },
  {
    name: "Mr Ini Ukut",
    role: "Head, QNigeria",
    talk: "Quantum Career Pathways",
    summary:
      "Navigating emerging opportunities across algorithm development, quantum hardware research, and advocacy.",
    day: "Friday",
    mode: "Virtual",
    photo: "/speakers/ini-ukut.jpg",
  },
];

/** `photo` points at a file in `public/team/`. Drop the image in with the
 *  matching name and it appears automatically; until then the card falls
 *  back to an initials monogram. */
export type TeamMember = { name: string; role: string; photo: string };

export const team: TeamMember[] = [
  { name: "Adesina Lekan", role: "Lead Organiser, Qiskit Fall Fest OAU 2026", photo: "/team/Limitless.jpeg" },
  { name: "Temitope Akinsunmade", role: "Lead, GDG on Campus OAU", photo: "/team/sunmade.jpeg" },
  { name: "Oreoluwa Adigun", role: "Quantum Computing Lead, GDG on Campus OAU", photo: "/team/oreoluwa-adigun.jpg" },
  { name: "Dr Fadodun", role: "Faculty advisor", photo: "/team/dr-fadodun.jpg" },
  { name: "Ovie Ohwoka", role: "Organising team", photo: "/team/ovie-ohwoka.jpg" },
  { name: "Blessing Agbor", role: "Organising team", photo: "/team/blessing.jpeg" },
  { name: "Joseph Oyetunde", role: "Organising team", photo: "/team/codegod.jpg" },
  { name: "Olamide Lawal", role: "Organising team", photo: "/team/olamide_lawal.jpg" },
];

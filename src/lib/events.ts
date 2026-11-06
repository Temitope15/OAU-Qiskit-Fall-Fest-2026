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
    summary: "Secondary school outreach, expert keynotes, technical sessions, and code jams at Opolo Hub.",
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

/** Schools being reached for the 2026 outreach. Final list (four schools,
 *  ten students each) is still being confirmed. */
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
    name: "Powel Gora",
    role: "Founder, QWorld",
    talk: "Pushing Beyond the Limits",
    summary:
      "Opening our minds to the areas and use cases where young Nigerians can stand out and contribute to innovation in quantum computing.",
    day: "Saturday",
    mode: "Virtual",
    photo: "/speakers/powel-gora.jpg",
    keynote: true,
  },
  {
    name: "Favour Alfred",
    role: "Delegate, African Quantum Consortium",
    talk: "Quantum Education & Capacity Building",
    summary:
      "Fostering a research culture among Nigerian students: navigating grad school applications, exploring quantum startup creation, and finding related opportunities.",
    day: "Saturday",
    mode: "In person",
    photo: "/speakers/favour-alfred.jpg",
  },
  {
    name: "Dr Fadodun",
    role: "Faculty Advisor, OAU",
    talk: "Rudiments of Quantum Computing",
    summary:
      "A technical session on the physics and mathematics behind quantum computing, launching us into the technical sessions.",
    day: "Saturday",
    mode: "In person",
    photo: "/team/dr-fadodun.jpg",
  },
  {
    name: "IBM Quantum Speaker",
    role: "IBM Quantum · To be announced",
    talk: "Getting Started in Quantum Computing",
    summary: "Addressing the young generation on how to take their first real steps into quantum computing.",
    day: "Saturday",
    mode: "Virtual",
    photo: "/speakers/ibm.jpg",
  },
  {
    name: "Mr Ini Ukut",
    role: "Head, QNigeria",
    talk: "Career Paths in Quantum Computing",
    summary: "The career paths quantum computing opens up, and how students can start walking them early.",
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

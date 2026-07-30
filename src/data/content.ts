/**
 * ─────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *
 *  Facts below were researched from public sources (July 2026):
 *  - Instagram: https://www.instagram.com/ramesh_somani/ (190k
 *    followers, 1,054 posts). Bio: Entrepreneur · Building… ·
 *    @topgearmagindia @exhibitmagazine @exhibit_social
 *    @exhibit_studios @techfashiontour
 *  - Founder, Chief Editor & Publisher of Exhibit (exhibit.tech) —
 *    India's Tech & Lifestyle magazine, founded 2005 (Vol 21 /
 *    Annual 2026 marks the 20th Anniversary, per the cover).
 *  - Exhibit Group publishes BBC Top Gear Magazine India
 *    (@topgearmagindia). Verticals: Exhibit Studios, Exhibit Social
 *    (exhibit.social) and the Tech Fashion Tour (techfashiontour.com).
 *  - "My Entrepreneurial Journey" on YouTube (video EsI7kvsF2wE).
 *
 *  Photos: /photos/rs-portrait.jpg & rs-rolls.jpg are frames from his
 *  own YouTube journey video; exhibit-cover.jpg is the Exhibit 20th
 *  Anniversary annual cover. Drop more into /public/photos as needed.
 * ─────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Ramesh Somani",
  tagline: "Entrepreneur · Founder & Publisher, Exhibit",
  heroIntro:
    "The man who has put a tech magazine in India's hands for two decades — founder and publisher of Exhibit, the force behind BBC Top Gear Magazine India, and the mind behind the Tech Fashion Tour. Still building.",
  disclaimer:
    "This is an unofficial tribute website made with admiration. It is not affiliated with, endorsed by, or connected to Ramesh Somani, Exhibit Technologies, BBC Top Gear or any of the brands named here. Logos, magazine covers and images belong to their respective owners. Facts are compiled from public sources (Instagram @ramesh_somani, exhibit.tech, techfashiontour.com and his YouTube). Any rights holder may request removal and it will be honoured promptly.",
}

export const about = {
  heading: "About",
  paragraphs: [
    "Ramesh Somani is the founder, chief editor and publisher of Exhibit — India's Tech & Lifestyle magazine — a title he launched in 2005 and has carried, issue after issue, all the way to its 20th Anniversary. Two decades on, Exhibit still lands on newsstands and screens as one of the country's most recognisable tech-lifestyle brands.",
    "But the magazine was only the first chapter. Under Exhibit Technologies he built a media house across print, digital and events — bringing BBC Top Gear Magazine India into the fold, launching Exhibit Studios and Exhibit Social, and creating the Tech Fashion Tour, a first-of-its-kind runway where wearable technology meets couture. Awards shows, influencer platforms and brand experiences all sit under the same roof.",
    "His own story — told candidly in his \"My Entrepreneurial Journey\" film — is one of highs, screw-ups and second acts, the Rolls-Royce moments earned the hard way. The bio still reads, simply, \"Building…\" — and that word does most of the work. Publisher, founder, showman; an entrepreneur who turned a passion for gadgets into a twenty-year empire.",
  ],
  stats: [
    { value: "2005", label: "Exhibit Founded" },
    { value: "20", label: "Years in Print" },
    { value: "190k", label: "Instagram Followers" },
    { value: "5+", label: "Brands Built" },
  ],
  portrait: "/photos/rs-portrait.jpg" as string | null,
}

export type Film = {
  title: string
  year: string
  role: string
  description: string
  poster: string | null
  tag: string
  trailerId: string | null
  watchUrl: string | null
}

export const films: Film[] = [
  {
    title: "Exhibit Magazine",
    year: "Est. 2005",
    role: "Founder · Chief Editor · Publisher",
    description:
      "India's Tech & Lifestyle magazine — the flagship he built from scratch in 2005 and carried to its 20th Anniversary. Where tech meets lifestyle, on every cover.",
    poster: "/photos/exhibit-cover.jpg",
    tag: "The Flagship 📖",
    trailerId: null,
    watchUrl: "https://www.exhibit.tech/",
  },
  {
    title: "BBC Top Gear Magazine India",
    year: "Publisher",
    role: "Exhibit Group",
    description:
      "The world's biggest motoring brand, in Indian hands — Exhibit publishes Top Gear Magazine India, pairing the empire's editorial muscle with the ultimate car title.",
    poster: "/photos/rs-rolls.jpg",
    tag: "Motoring 🏎️",
    trailerId: null,
    watchUrl: "https://www.topgear.com/",
  },
  {
    title: "Tech Fashion Tour",
    year: "The Show",
    role: "Creator",
    description:
      "A first-of-its-kind runway where wearable technology meets couture — the marquee event that fuses Exhibit's two loves, gadgets and glamour, under the spotlight.",
    poster: "/photos/ex-tour.jpg",
    tag: "Runway ✨",
    trailerId: null,
    watchUrl: "https://www.techfashiontour.com/",
  },
  {
    title: "Exhibit Studios",
    year: "Content",
    role: "The Production Arm",
    description:
      "The studio engine — video, reviews and branded content that carries the Exhibit voice across every screen, from unboxings to full productions.",
    poster: "/photos/ex-studios.jpg",
    tag: "Studios 🎬",
    trailerId: null,
    watchUrl: "https://www.instagram.com/exhibit_studios/",
  },
  {
    title: "Exhibit Social",
    year: "Digital",
    role: "The Social Network",
    description:
      "The influencer and social vertical — connecting brands with creators, and turning the magazine's reach into a living, scrolling community.",
    poster: "/photos/ex-social.jpg",
    tag: "Social 📱",
    trailerId: null,
    watchUrl: "https://www.exhibit.social/",
  },
  {
    title: "My Entrepreneurial Journey",
    year: "The Story",
    role: "In His Own Words",
    description:
      "\"How I screwed up\" — and how he built back. The candid film where Ramesh tells the highs, the failures and the lessons of two decades in business.",
    poster: "/photos/rs-journey.jpg",
    tag: "The Journey ▶️",
    trailerId: "EsI7kvsF2wE",
    watchUrl: "https://www.youtube.com/watch?v=EsI7kvsF2wE",
  },
]

export type GalleryItem = {
  src: string | null
  caption: string
  span?: "tall" | "wide"
}

export const gallery: GalleryItem[] = [
  { src: "/photos/rs-portrait.jpg", caption: "The publisher" },
  { src: "/photos/rs-rolls.jpg", caption: "The Rolls-Royce moment, earned" },
  { src: "/photos/exhibit-cover.jpg", caption: "Exhibit — 20th Anniversary Annual" },
  { src: "/photos/rs-journey.jpg", caption: "\"My Entrepreneurial Journey\"" },
]

export type PressItem = {
  outlet: string
  quote: string
  url: string | null
  date: string
}

export const press: PressItem[] = [
  {
    outlet: "Exhibit",
    quote:
      "Where Tech Meets Lifestyle — 20 years, and Exhibit is still India's window into the world of gadgets, gear and the good life.",
    url: "https://www.exhibit.tech/",
    date: "2005–2026",
  },
  {
    outlet: "YouTube",
    quote:
      "How I screwed up — and built back. The full entrepreneurial journey, told without a filter.",
    url: "https://www.youtube.com/watch?v=EsI7kvsF2wE",
    date: "My Journey",
  },
  {
    outlet: "Instagram",
    quote: "Entrepreneur. Building…",
    url: "https://www.instagram.com/ramesh_somani/",
    date: "@ramesh_somani",
  },
]

export type Social = {
  label: string
  handle: string
  url: string
  icon: "instagram" | "imdb" | "youtube"
}

export const socials: Social[] = [
  {
    label: "Instagram",
    handle: "@ramesh_somani",
    url: "https://www.instagram.com/ramesh_somani/",
    icon: "instagram",
  },
  {
    label: "Exhibit",
    handle: "exhibit.tech",
    url: "https://www.exhibit.tech/",
    icon: "imdb",
  },
  {
    label: "YouTube",
    handle: "My Entrepreneurial Journey",
    url: "https://www.youtube.com/watch?v=EsI7kvsF2wE",
    icon: "youtube",
  },
]

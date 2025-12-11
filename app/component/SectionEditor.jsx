"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORY_LABELS = {
  youtube: "YouTube Video",
  shorts: "Shorts/Reels",
  talking: "Talking Head",
  ugc: "UGC",
  vsls: "VSLs",
  motion: "Motion Designer",
  social: "Social Media Video",
};

const CATEGORIES = [
  { id: "all", label: "All Editors" },
  { id: "youtube", label: "YouTube Video" },
  { id: "shorts", label: "Shorts/Reels" },
  { id: "talking", label: "Talking Head" },
  { id: "ugc", label: "UGC" },
  { id: "vsls", label: "VSLs" },
  { id: "motion", label: "Motion Designer" },
  { id: "social", label: "Social Media Video" },
];

// 👉 Image path গুলো তোমার public/editors/ ফোল্ডারের ফাইল নাম অনুযায়ী রাখো
const proEditors = [
  {
    slug: "burhan-khan",
    name: "Burhan Khan",
    role: "YouTube & Talking Head Editor • 3+ Years Experience",
    img: "/editors/Burhan Khan.jpg",
    categories: ["youtube", "talking", "vsls"],
  },
  {
    slug: "abdullah-hossain",
    name: "Abdullah Hossain",
    role: "Cinematic & Documentary Editor • 4 Years Experience",
    img: "/editors/Abdullah Hossain copy.jpg",
    categories: ["youtube", "shorts", "social"],
  },
  {
    slug: "altaf-hossain",
    name: "Altaf Hossain",
    role: "YouTube Show & Reels Editor • 2 Years Experience",
    img: "/editors/Altaf Hossain copy.jpg",
    categories: ["youtube", "shorts", "ugc"],
  },
  {
    slug: "ariful-islam",
    name: "Ariful Islam",
    role: "Corporate & YouTube Editor • 5+ Years Experience",
    img: "/editors/Ariful Islam copy.jpg",
    categories: ["youtube", "talking", "social"],
  },
  {
    slug: "huzaifa-borhan",
    name: "Huzaifa Borhan",
    role: "Shorts, Reels & UGC Editor • 2.5 Years Experience",
    img: "/editors/Huzaifa Borhan copy.jpg",
    categories: ["shorts", "ugc", "social"],
  },
  {
    slug: "amirul-islam",
    name: "Amirul Islam",
    role: "Cinematography & Motion Designer • 4 Years Experience",
    img: "/editors/Amirul Islam  copy.jpg",
    categories: ["motion", "shorts", "youtube"],
  },
  {
    slug: "mahfuz-hossain",
    name: "Mahfuz Hossain",
    role: "YouTube, Podcast & Talking Head Editor • 3 Years Experience",
    img: "/editors/mahfuz Hossain  copy.jpg",
    categories: ["talking", "youtube", "vsls"],
  },
  {
    slug: "mohammad-ali-siddiki",
    name: "Mohammad Alid Siddiki",
    role: "Travel & Lifestyle Video Editor • 3 Years Experience",
    img: "/editors/Mohammad Ali Siddiki  copy.jpg",
    categories: ["shorts", "social", "ugc"],
  },
  {
    slug: "mydul-islam-siam",
    name: "Mydul Islam Siam",
    role: "Short-Form & Performance Ad Editor • 2 Years Experience",
    img: "/editors/Mydul islam Siam copy.jpg",
    categories: ["shorts", "vsls", "social"],
  },
  {
    slug: "sakib-anowar",
    name: "Sakib Anowar",
    role: "Story-Driven YouTube & Reels Editor • 3+ Years Experience",
    img: "/editors/Sakib copy.jpg",
    categories: ["youtube", "shorts", "ugc", "social"],
  },
  {
    slug: "shamim-hossain",
    name: "Shamim Hossain",
    role: "Islamic Lecture & Talk Show Editor • 4 Years Experience",
    img: "/editors/Shamim Hossen copy.jpg",
    categories: ["youtube", "talking", "social"],
  },
  {
    slug: "shihab-uddin",
    name: "Shihab Uddin",
    role: "Mood-based Visual Story Editor • 3 Years Experience",
    img: "/editors/Shihab copy.jpg",
    categories: ["shorts", "youtube", "social"],
  },
];

const SectionEditors = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEditors =
    activeCategory === "all"
      ? proEditors
      : proEditors.filter((editor) =>
          editor.categories.includes(activeCategory)
        );

  return (
    <section
      id="pro"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 py-20 bg-transparent"
    >
      {/* dark purple glows – same vibe as footer */}
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-120px] h-56 bg-[radial-gradient(circle_at_top,#4c35ff55_0,transparent_60%)] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute inset-x-[-15%] bottom-[-140px] h-64 bg-[radial-gradient(circle_at_bottom,#ff4aa855_0,transparent_60%)] blur-3xl opacity-70" />

      <div className="relative z-10 w-full max-w-6xl">
        {/* heading block */}
        <div className="space-y-6 text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-1.5 text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-slate-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            V-EditorConnect • Editors
          </div>

          <div className="relative inline-block w-full max-w-xl px-6 py-5 rounded-3xl bg-[#050314]/90 border border-white/10 backdrop-blur-2xl overflow-hidden">
            <div className="pointer-events-none absolute inset-x-[-30%] -top-16 h-28 bg-gradient-to-r from-[#6b50ff44] via-transparent to-[#00d1ff44] opacity-80 blur-3xl" />
            <p className="relative text-[14px] md:text-[15px] font-medium text-slate-200">
              Find the right Bangladeshi editor
            </p>
            <h2 className="relative mt-1 text-[26px] md:text-[32px] lg:text-[36px] font-extrabold leading-snug text-slate-50">
              <span className="inline-block">
                Professional & Intermediate Editors
                <span className="block mt-1 h-[2px] w-full bg-gradient-to-r from-[#6b50ff] via-[#ff6bb5] to-[#00d1ff] rounded-full" />
              </span>
            </h2>
          </div>

          <p className="text-[15px] md:text-[16px] text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Filter editors by video type, then explore their glass cards. Every
            profile represents a Bangladeshi editor ready to join your next
            project.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs md:text-sm rounded-full border backdrop-blur-md
                  transition-all duration-200 font-semibold
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#6b50ff] to-[#00d1ff] text-black border-transparent shadow-[0_0_12px_rgba(0,209,255,0.6)] scale-[1.05]"
                      : "bg-[#050314]/90 border-white/15 text-[#c3d0e4] hover:border-[#6b50ff] hover:text-white hover:-translate-y-[1px]"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editors grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEditors.map((editor) => (
            <Link key={editor.slug} href={`/${editor.slug}`} className="group">
              <article
                className="relative rounded-3xl bg-[#050314]/90 border border-white/12 backdrop-blur-xl p-4
                overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#6b50ff77]"
              >
                {/* top gradient line */}
                <div className="absolute inset-x-4 top-0 h-[2px] rounded-full bg-gradient-to-r from-[#6b50ff] via-[#ff6bb5] to-[#00d1ff] opacity-80" />

                <div className="relative">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={editor.img}
                      alt={editor.name}
                      className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h4 className="mt-3 mb-1 text-base md:text-lg font-semibold text-slate-50 transition-transform duration-200 group-hover:-translate-y-[1px]">
                    {editor.name}
                  </h4>
                  <p className="text-xs md:text-sm text-[#d2def5]">
                    {editor.role}
                  </p>

                  {/* Category badges */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {editor.categories.map((catId) => (
                      <span
                        key={catId}
                        className="text-[10px] md:text-[11px] px-2 py-1 rounded-full bg-[#070821] border border-white/10 text-[#c9d4ec] transition-transform duration-200 group-hover:-translate-y-[1px]"
                      >
                        {CATEGORY_LABELS[catId]}
                      </span>
                    ))}
                  </div>

                  {/* bottom meta */}
                  <div className="mt-4 flex items-center justify-between text-[11px] md:text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Open to projects
                    </span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Profile
                      <span>↗</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionEditors;

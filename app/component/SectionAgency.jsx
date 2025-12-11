"use client";

const focusAreas = [
  {
    title: "YouTube & Long-form",
    desc: "Talking head, education & story-style episodes.",
    icon: "▶️",
  },
  {
    title: "Short-form & Reels",
    desc: "Snappy, hook-first reels and shorts.",
    icon: "⚡",
  },
  {
    title: "Talking Head & Podcasts",
    desc: "Clean cuts, clear sound and on-brand frames.",
    icon: "🎙️",
  },
  {
    title: "Brand Visuals & Motion",
    desc: "Logo sting, lower-thirds and simple motion.",
    icon: "✨",
  },
];

const showreels = [
  {
    title: "Showreel 01",
    url: "https://www.youtube.com/embed/PSriRUurkX8",
  },
  {
    title: "Showreel 02",
    url: "https://www.youtube.com/embed/-krojJs957g",
  },
  {
    title: "Showreel 03",
    url: "https://www.youtube.com/embed/Ggx2vgsdE54",
  },
];

const tools = [
  { name: "Adobe Premiere Pro", short: "Pr", color: "#9993ff" },
  { name: "Adobe After Effects", short: "Ae", color: "#b48cff" },
  { name: "DaVinci Resolve", short: "DR", color: "#57b3ff" },
  { name: "Adobe Audition", short: "Au", color: "#7be0b8" },
];

const SectionAgency = () => {
  return (
    <section
      id="agency"
      className="min-h-screen flex items-center px-5 py-20 animate-fade-up"
    >
      <div className="w-full max-w-6xl mx-auto space-y-14">
        {/* ========== AGENCY TOP / HERO PART (CENTERED) ========== */}
        <div className="w-full flex flex-col items-center justify-center text-center space-y-6 mb-4">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-5 py-1.5 text-[12px] uppercase tracking-[0.18em] text-slate-100 transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.03]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Agency • Connect Studio
          </div>

          {/* MAIN TITLE */}
          <div className="space-y-1">
            <h2 className="text-[42px] md:text-[54px] lg:text-[62px] font-extrabold leading-tight text-slate-50 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] cursor-default">
              Know Our
              <br />
              <span className="bg-gradient-to-r from-[#c7b5ff] via-[#f5e1ff] to-[#c7b5ff] bg-clip-text text-transparent">
                Connect Studio
              </span>
            </h2>
          </div>

          {/* Short description */}
          <p className="text-[15px] md:text-[17px] text-slate-200 max-w-2xl leading-relaxed transition-transform duration-300 hover:-translate-y-[2px] cursor-default">
            A focused editing studio led by
            <span className="font-semibold text-slate-50"> Walid Abdullah</span> — built
            to handle YouTube, short-form and talking-head content with precision,
            consistency and a clear system.
          </p>
        </div>

        {/* ========== MIDDLE: Founder + Focus Areas ========== */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1.1fr] items-start">
          {/* FOUNDER CARD – big picture */}
          <div className="relative rounded-3xl bg-white/5 border border-white/12 backdrop-blur-2xl p-6 md:p-7 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.01]">
            <div className="pointer-events-none absolute right-[-90px] top-[-50px] h-52 w-52 rounded-full bg-[radial-gradient(circle,#ff6bb555_0,transparent_60%)] blur-3xl opacity-70" />

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* big photo frame (3x feel) */}
              <div className="relative h-52 w-52 md:h-64 md:w-64 rounded-[28px] overflow-hidden border border-white/25 bg-black/40 flex-shrink-0 shadow-[0_0_40px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <img
                  src="/editors/walid.jpg" // এখানে নিজের image path দাও
                  alt="Walid Abdullah"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* text side */}
              <div className="text-left space-y-3">
                <div className="transition-transform duration-300 hover:-translate-y-[2px] cursor-default">
                  <p className="text-[12px] uppercase tracking-[0.16em] text-slate-300">
                    Founder & Lead Editor
                  </p>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-slate-50">
                    Walid Abdullah
                  </h3>
                  <p className="text-sm md:text-[15px] text-slate-300 mt-1.5">
                    Lead editor at <span className="font-semibold">Connect Studio</span>,
                    focusing on YouTube, Islamic content, educational videos and
                    short-form clips for brands and organizations.
                  </p>
                </div>

                {/* tools with icon style badges */}
                <div className="pt-2 space-y-2">
                  <p className="text-[12px] uppercase tracking-[0.16em] text-slate-400">
                    Core Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.03]"
                      >
                        <span
                          className="h-7 w-7 rounded-full flex items-center justify-center text-[11px] font-bold text-slate-950"
                          style={{ backgroundColor: tool.color }}
                        >
                          {tool.short}
                        </span>
                        <span className="text-[12px] md:text-[13px] text-slate-100">
                          {tool.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* contact CTA */}
                <div className="pt-3 flex flex-wrap gap-2 text-[12px] md:text-[13px]">
                  <a
                    href="mailto:w.abdullah5588@gmail.com"
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#c7b5ff] hover:bg-white/10 transition-all hover:-translate-y-[2px]"
                  >
                    Email
                  </a>
                  <a
                    href="https://wa.me/8801886755888"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#c7b5ff] hover:bg-white/10 transition-all hover:-translate-y-[2px]"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/in/walid-abdullah/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#c7b5ff] hover:bg-white/10 transition-all hover:-translate-y-[2px]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Focus areas – 2x2 grid + icons + hover bounce */}
          <div className="space-y-4">
            <h3 className="inline-block text-[20px] md:text-[24px] font-semibold text-slate-50 transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.02] cursor-default">
              What Connect Studio focuses on
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  {/* icon / checkbox feel */}
                  <div className="mt-[2px] flex h-9 w-9 items-center justify-center rounded-xl bg-[#1b1035] border border-white/15 text-lg transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-[15px] md:text-[16px] font-semibold text-slate-50 transition-transform duration-300 group-hover:-translate-y-[1px]">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== SHOWREEL ROW ========== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="inline-block text-[18px] md:text-[22px] font-semibold text-slate-50 transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.02] cursor-default">
              Showreel snapshots
            </h3>
            <span className="hidden md:inline text-[12px] uppercase tracking-[0.16em] text-slate-400">
              SAMPLE WORK
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {showreels.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-black/60 border border-white/10 overflow-hidden h-52 md:h-56 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <iframe
                  className="w-full h-full"
                  src={item.url}
                  title={item.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

        {/* bottom small line */}
        <div className="pt-4 text-center text-[12px] md:text-[13px] text-slate-400 transition-transform duration-300 hover:-translate-y-[2px] cursor-default">
          Connect Studio is designed for teams who care about{" "}
          <span className="text-slate-100 font-medium">
            clarity, consistency and long-term partnership
          </span>
          .
        </div>
      </div>
    </section>
  );
};

export default SectionAgency;

const editors = [
  {
    name: "Mohammad Ali Siddiki",
    role: "YouTube Editing • Dhaka",
    img: "editors/raihan k.jpg",
  },
  {
    name: "Raihan Chowdhury",
    role: "Wedding Films • Chittagong",
    img: "editors/Raihan Chowdhury.jpg",
  },
  {
    name: "Sany Sanjid",
    role: "Short-form Content • Sylhet",
    img: "editors/sanjid.jpg",
  },
  {
    name: "Abdur Rahman",
    role: "Cinematic Edits • Rajshahi",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=700",
  },
  {
    name: "Shamim Hossain",
    role: "Commercial • Khulna",
    img: "editors/Shamim Hossen copy.jpg",
  },
  {
    name: "Azm Mahadi Hasan",
    role: "Promo & Ads • Dhaka",
    img: "editors/mahadi.jpg",
  },
];

const SectionHero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 overflow-hidden"
    >
      {/* liquid background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute -top-40 -left-32 h-72 w-72 rounded-full bg-[#00c4b4]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-[#ff8a00]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[40%] bg-fuchsia-500/10 blur-3xl" />

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#00c4b4] via-sky-400 to-[#ff8a00] mb-3 drop-shadow-[0_0_20px_rgba(0,196,180,0.35)]">
        Find Video Editor
      </h1>

      <p className="text-[#9fb4c8] max-w-3xl mb-10 text-sm sm:text-base">
        Explore a curated pool of Bangladeshi video editors — from YouTube and
        short-form to cinematic and commercial work. Browse, compare, and
        connect instantly.
      </p>

      {/* glass cards */}
      <div className="grid gap-6 md:gap-8 mt-4 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {editors.map((editor, idx) => (
          <div
            key={editor.name + idx}
            className="relative group"
          >
            {/* gradient liquid border */}
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#00c4b4]/70 via-slate-500/10 to-[#ff8a00]/70 shadow-[0_0_40px_rgba(0,0,0,0.65)] group-hover:shadow-[0_0_55px_rgba(0,0,0,0.9)] transition-shadow duration-500">
              {/* inner glass layer */}
              <div className="h-full rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/5 px-4 pt-4 pb-5 flex flex-col items-start text-left overflow-hidden relative">
                {/* liquid highlight */}
                <div className="pointer-events-none absolute -top-10 right-[-40px] h-28 w-28 rounded-[40%] bg-white/8 blur-xl group-hover:bg-white/12 transition-colors duration-500" />

                <div className="w-full overflow-hidden rounded-2xl mb-4 relative">
                  <img
                    src={editor.img}
                    alt={editor.name}
                    className="w-full h-44 object-cover rounded-2xl transform group-hover:scale-[1.05] transition-transform duration-500"
                  />
                  {/* subtle gradient overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">
                  {editor.name}
                </h4>

                <p className="text-xs sm:text-sm text-[#c3d7f2] mb-3">
                  {editor.role}
                </p>

                {/* tags / chips */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wide bg-white/5 text-[#9feaf0] border border-[#00c4b4]/30">
                    Available for hire
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] bg-white/5 text-[#ffd38a] border border-[#ff8a00]/30">
                    Premiere Pro · DaVinci
                  </span>
                </div>
              </div>
            </div>

            {/* glow ring under card */}
            <div className="pointer-events-none absolute inset-x-6 -bottom-3 h-6 bg-gradient-to-r from-[#00c4b4]/30 via-slate-500/5 to-[#ff8a00]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      <a
        href="#pro"
        className="mt-10 inline-block relative overflow-hidden bg-[#00c4b4] text-[#001010] font-semibold py-2.5 px-6 rounded-full transform transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
      >
        <span className="relative z-10 text-sm sm:text-base">
          See More Editors ↓
        </span>
        <span className="absolute top-0 left-[-120%] w-full h-full bg-gradient-to-r from-[#ff8a00] via-[#00c4b4] to-[#ff8a00] opacity-70 transition-all duration-500 group-hover:left-0" />
      </a>
    </section>
  );
};

export default SectionHero;

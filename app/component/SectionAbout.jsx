"use client";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* liquid gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute top-[-120px] left-[-80px] h-72 w-72 bg-[#6b50ff]/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-80 w-80 bg-[#00d1ff]/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 bg-[#ff6bb5]/16 rounded-[40%] blur-3xl -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* tag */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase text-slate-100 backdrop-blur-xl mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          About BD V-Connect
        </div>

        {/* glass card */}
        <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#6b50ff88] via-[#ffffff22] to-[#00d1ff88] shadow-[0_0_45px_rgba(0,0,0,0.8)]">
          <div className="rounded-3xl bg-[#050314]/80 border border-white/15 backdrop-blur-2xl px-8 py-10 md:px-12 md:py-12 text-left relative overflow-hidden">
            <div className="pointer-events-none absolute -top-12 right-[-40px] h-32 w-32 bg-white/10 rounded-[40%] blur-xl" />

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-50 mb-4">
              Our Mission & Vision
            </h1>

            <p className="text-[15px] md:text-[16px] text-slate-200 leading-relaxed mb-6">
              BD V-Connect is built with one clear purpose: to create the first dedicated
              platform where Bangladeshi video editors can be discovered based on skill,
              not guesswork. Agencies, founders, and creators struggle to find editors
              who actually match their content style — while editors struggle to find
              real opportunities that value their craft.  
            </p>

            <p className="text-[15px] md:text-[16px] text-slate-200 leading-relaxed mb-6">
              Our goal is to bridge that gap.  
              We allow hiring teams to compare editors, view category-based work, explore
              portfolios, and connect instantly. No middleman, no random inbox hunting,
              no guessing.  
              Just clarity, quality, and transparency — all in one place.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-slate-50 mt-8 mb-4">
              Why This Matters
            </h2>

            <ul className="text-slate-200 text-[15px] leading-relaxed space-y-3">
              <li>• Editors get visibility, clients get reliability.</li>
              <li>• Agencies can filter by editing niche: YouTube, Shorts, Talking Head, UGC, Ads & more.</li>
              <li>• Talents can finally showcase work in a focused, professional environment.</li>
              <li>• Hiring becomes faster, easier, and more trustworthy.</li>
            </ul>

            <p className="text-[15px] md:text-[16px] text-slate-200 leading-relaxed mt-6">
              BD V-Connect is not just a directory —  
              it’s a community-driven ecosystem designed to boost the creative
              industry of Bangladesh, opening doors for thousands of editors and helping
              brands find the right talent instantly.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-slate-50 mt-10 mb-4">
              Our Long-Term Vision
            </h2>

            <p className="text-[15px] md:text-[16px] text-slate-200 leading-relaxed">
              We aim to become the most trusted platform for video editing talent in
              Bangladesh — and eventually worldwide.  
              A place where skilled editors get discovered, grow professionally, and build
              real careers. And where creators never have to struggle to find the right
              editor again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

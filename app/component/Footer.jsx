const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden ">
      {/* subtle background glows */}
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-120px] h-64 bg-[radial-gradient(circle_at_top,#7b3fff55_0,transparent_60%)] opacity-70 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-[-20%] bottom-[-150px] h-72 bg-[radial-gradient(circle_at_bottom,#ff6bb555_0,transparent_60%)] opacity-60 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12">
        {/* TOP ROW */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1.5fr] items-start">
          {/* LEFT SIDE : BIG TITLE + GLASS BLOCKS */}
          <div className="space-y-8">
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-1.5 text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-slate-100 cursor-default transition-transform duration-300 hover:-translate-y-[1px]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Built for Bangladeshi Video Editors
            </div>

            {/* liquid glass main title */}
            <div className="relative inline-block w-full max-w-xl px-6 py-5 rounded-3xl bg-white/5 border border-white/12 backdrop-blur-2xl overflow-hidden group cursor-default transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.01]">
              {/* soft inner gradient */}
              <div className="pointer-events-none absolute inset-x-[-30%] -top-16 h-28 bg-gradient-to-r from-[#6b50ff44] via-transparent to-[#00d1ff44] opacity-80 blur-3xl" />
              <p className="relative text-[14px] md:text-[15px] font-medium text-slate-200">
                BD V-Connect — your local
              </p>
              <h2 className="relative mt-1 text-[26px] md:text-[32px] lg:text-[36px] font-extrabold leading-snug text-slate-50">
                <span className="inline-block">
                  Video Editing Talent Map
                  <span className="block mt-1 h-[2px] w-full bg-gradient-to-r from-[#6b50ff] via-[#ff6bb5] to-[#00d1ff] rounded-full" />
                </span>
              </h2>
            </div>

            {/* description */}
            <p className="text-[15px] md:text-[16px] text-slate-200 max-w-xl leading-relaxed transition-transform duration-300 hover:-translate-y-[1px] cursor-default">
              We help editors turn scattered work into a clear, confident
              portfolio. And we help hiring teams discover the exact style,
              skill and experience they need — without bidding wars or endless
              inbox scrolling.
            </p>

            {/* feature blocks */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 border border-white/12 backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-[3px] cursor-default">
                <p className="text-[11px] md:text-xs font-semibold text-slate-200 uppercase tracking-wide">
                  For Editors
                </p>
                <p className="mt-2 text-[14px] md:text-[15px] text-slate-100">
                  Build a focused profile, show 3–5 of your best projects and
                  let brands filter you by category, experience and software.
                </p>
              </div>
              <div className="rounded-3xl bg-white/5 border border-[#7b3fff55] backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-[3px] cursor-default">
                <p className="text-[11px] md:text-xs font-semibold text-slate-200 uppercase tracking-wide">
                  For Hiring Teams
                </p>
                <p className="mt-2 text-[14px] md:text-[15px] text-slate-100">
                  Shortlist editors, compare styles side-by-side and contact
                  directly through WhatsApp or email — no platform commission.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE : LINK COLUMNS + CONTACT */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-[14px] md:text-[15px] text-slate-100">
            {/* column 1 */}
            <div className="space-y-3">
              <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-400 cursor-default">
                Platform
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="inline-block text-slate-200 hover:text-cyan-300 transition-all duration-250 hover:-translate-y-[1px]"
                  >
                    About BD V-Connect
                  </a>
                </li>
                <li>
                  <a
                    href="#editors"
                    className="inline-block text-slate-200 hover:text-cyan-300 transition-all duration-250 hover:-translate-y-[1px]"
                  >
                    Editors Directory
                  </a>
                </li>
                <li>
                  <a
                    href="#agency"
                    className="inline-block text-slate-200 hover:text-cyan-300 transition-all duration-250 hover:-translate-y-[1px]"
                  >
                    Featured Agency
                  </a>
                </li>
                <li>
                  <a
                    href="#blogs"
                    className="inline-block text-slate-200 hover:text-cyan-300 transition-all duration-250 hover:-translate-y-[1px]"
                  >
                    Industry Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* column 2 */}
            <div className="space-y-3">
              <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-400 cursor-default">
                For Editors
              </h4>
              <ul className="space-y-2 text-slate-200">
                <li className="transition-all duration-250 hover:-translate-y-[1px] cursor-default">
                  Profile & Bio Guidelines
                </li>
                <li className="transition-all duration-250 hover:-translate-y-[1px] cursor-default">
                  Showreel & Portfolio Tips
                </li>
                <li className="transition-all duration-250 hover:-translate-y-[1px] cursor-default">
                  Rate Card & Package Ideas
                </li>
                <li className="transition-all duration-250 hover:-translate-y-[1px] cursor-default">
                  Client Communication Basics
                </li>
              </ul>
            </div>

            {/* column 3 : contact + socials */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-400 cursor-default">
                  Support & Contact
                </h4>
                <p className="text-slate-200 text-[14px] md:text-[15px]">
                  <span className="text-slate-300">Email:</span>{" "}
                  <a
                    href="mailto:w.abdullah5588@gmail.com"
                    className="text-cyan-300 hover:text-cyan-200 transition-all duration-250 hover:-translate-y-[1px] inline-block"
                  >
                    w.abdullah5588@gmail.com
                  </a>
                </p>
                <p className="text-slate-200 text-[14px] md:text-[15px]">
                  <span className="text-slate-300">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/8801886755888"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 transition-all duration-250 hover:-translate-y-[1px] inline-block"
                  >
                    +880 1886-755888
                  </a>
                </p>
                <p className="text-slate-300 text-[14px] md:text-[15px]">
                  Dhaka, Bangladesh • GMT+6
                </p>
              </div>

              {/* socials */}
              <div>
                <p className="text-[11px] md:text-xs text-slate-400 mb-2">
                  Follow Walid online
                </p>
                <div className="flex gap-3">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/walid-abdullah/"
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-sm text-slate-100 border border-white/15 hover:bg-cyan-300/20 hover:text-cyan-200 transition-transform duration-250 hover:-translate-y-[2px] hover:scale-[1.05]"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  {/* X */}
                  <a
                    href="https://x.com/walid_588"
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-sm text-slate-100 border border-white/15 hover:bg-cyan-300/20 hover:text-cyan-200 transition-transform duration-250 hover:-translate-y-[2px] hover:scale-[1.05]"
                    aria-label="X"
                  >
                    X
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/walid.abdullahh"
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-sm text-slate-100 border border-white/15 hover:bg-cyan-300/20 hover:text-cyan-200 transition-transform duration-250 hover:-translate-y-[2px] hover:scale-[1.05]"
                    aria-label="Facebook"
                  >
                    f
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@walid.abdullah"
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-sm text-slate-100 border border-white/15 hover:bg-red-400/30 hover:text-red-300 transition-transform duration-250 hover:-translate-y-[2px] hover:scale-[1.05]"
                    aria-label="YouTube"
                  >
                    ▶
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-slate-400">
          <p className="cursor-default">
            © 2025 BD V-Connect — Created by Walid Abdullah
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Currently in beta · v1.0</span>
            </span>
            <span className="hidden md:inline">
              Built with Next.js & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

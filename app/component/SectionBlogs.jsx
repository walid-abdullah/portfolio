"use client";

const blogs = [
  {
    title: "From Film Splices to Timelines: A Short History of Video Editing",
    category: "History",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1516031190212-da133013de50?w=900&q=80",
    excerpt:
      "Video editing started long before Premiere Pro and DaVinci. In the early 1900s, editors literally cut and taped film strips by hand. Then came flatbed editors, linear tape systems and finally non-linear digital editing in the 1990s. Today, editors work on powerful timelines where you can move, trim and test ideas instantly—no physical film, no rewinding, just pure creative control.",
  },
  {
    title: "Premiere Pro 2025: What Actually Changed for Editors",
    category: "Software Update",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    excerpt:
      "The 2025 update of Adobe Premiere Pro focuses less on flashy effects and more on speed and automation. Smarter color workflows, improved auto captioning, better timeline performance and tighter audio tools mean editors can spend more time on storytelling instead of fighting the software. For creators who publish weekly, these small improvements add up to hours saved every month.",
  },
  {
    title: "DaVinci Resolve 19 & AI: Color Grading in 2025",
    category: "Color & AI",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d4?w=900&q=80",
    excerpt:
      "DaVinci Resolve 19 pushes AI even deeper into the edit and color page. Smart masking, auto subject detection and AI-assisted grades make it easier to achieve a cinematic look quickly. Instead of spending 30 minutes just drawing masks, editors can test creative looks, match shots faster and focus on mood, contrast and skin tones—the real art behind great color.",
  },
  {
    title: "Building a Solid Editing Workflow for YouTube Creators",
    category: "Workflow",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1512427691650-1e0c2f9a81b3?w=900&q=80",
    excerpt:
      "Great YouTube videos don’t start on the timeline—they start with a repeatable workflow. Clear folder structure, consistent project templates, labeled sequences and a simple feedback process help editors deliver faster and keep quality stable. When the workflow is clean, last-minute thumbnail changes, new hooks and extra B-roll become easy instead of stressful.",
  },
];

const SectionBlogs = () => {
  return (
    <section
      id="blogs"
      className="min-h-screen flex flex-col items-center justify-center px-5 py-16 text-center animate-fade-up"
    >
      {/* heading block */}
      <div className="max-w-3xl mx-auto mb-10 space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Editing Insights & Updates
        </p>
        <h2 className="text-[28px] md:text-[34px] font-extrabold text-slate-50">
          Blogs for Video Editors & Creators
        </h2>
        <p className="text-sm md:text-[15px] text-slate-300">
          Discover history, tools and practical ideas from the world of video
          editing—so you understand where editing came from, and where it’s
          going next.
        </p>
      </div>

      {/* blog grid */}
      <div className="grid gap-6 w-full max-w-6xl grid-cols-1 md:grid-cols-2 text-left">
        {blogs.map((blog) => (
          <article
            key={blog.title}
            className="group rounded-2xl bg-white/5 border border-white/8 overflow-hidden flex flex-col hover:-translate-y-1 hover:scale-[1.01] transition-transform duration-300"
          >
            {/* image */}
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* content */}
            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <span className="rounded-full bg-white/5 px-3 py-1 uppercase tracking-[0.18em]">
                  {blog.category}
                </span>
                <span className="text-slate-400">{blog.readTime}</span>
              </div>

              <h3 className="text-[17px] md:text-[18px] font-semibold text-slate-50 leading-snug group-hover:text-[#c7b5ff] transition-colors duration-300">
                {blog.title}
              </h3>

              <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
                {blog.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionBlogs;

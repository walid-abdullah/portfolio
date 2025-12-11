const reviews = [
  {
    text: "BD V-Connect helped us find talented editors within hours. The before-after feature makes evaluation easy.",
    author: "Studio Dhaka",
  },
  {
    text: "An innovative platform for discovering local creative talent.",
    author: "BrandLab Agency",
  },
  {
    text: "We finally have a faster, more reliable way to test and hire editors for recurring projects.",
    author: "Pixel Edge Media",
  },
  {
    text: "The platform gives us a shortlist of editors who already understand social pacing, hooks, and storytelling.",
    author: "Northside Digital",
  },
  {
    text: "BD V-Connect saves our team a lot of time by letting us see real work instead of just CVs.",
    author: "Growthwave Studios",
  },
  {
    text: "A smart solution for agencies scaling video output without compromising on quality.",
    author: "Horizon Creative",
  },
];

const SectionReviews = () => {
  return (
    <section
      id="reviews"
      className="min-h-screen flex flex-col items-center justify-center text-center px-5 py-16 animate-fade-up bg-slate-950"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#00c4b4] mb-2">
        Hiring Authority Reviews
      </h2>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-8">
        What studios & brands say about BD V-Connect
      </p>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-5xl w-full">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-slate-900/70 border border-slate-800 px-5 py-6 text-left shadow-lg hover:-translate-y-1 hover:border-[#00c4b4]/60 transition-transform duration-300"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-sm text-[#ffc857]">
                  ★
                </span>
              ))}
              <span className="ml-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                5.0 rating
              </span>
            </div>

            {/* Text */}
            <p className="text-sm md:text-base text-[#d2e2f5] mb-3 leading-relaxed">
              “{rev.text}”
            </p>

            {/* Author */}
            <p className="text-xs md:text-sm text-[#9fb4c8] font-semibold">
              {rev.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionReviews;

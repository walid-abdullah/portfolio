import Footer from "./component/Footer";
import Header from "./component/Header";
import SectionAbout from "./component/SectionAbout";
import SectionAgency from "./component/SectionAgency";
import SectionBlogs from "./component/SectionBlogs";
import SectionEditors from "./component/SectionEditor";
import SectionHero from "./component/SectionHero";
import SectionReviews from "./component/SectionReview";
import SectionSaved from "./component/Sectionseved";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen w-full text-slate-50 bg-[#050014] relative overflow-hidden">
        {/* global very subtle purple wash */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#050014] via-[#050016] to-[#040010]" />

        {/* ========== HERO (deep purple + slight glow top) ========== */}
        <section className="relative bg-gradient-to-b from-[#080021] via-[#050015] to-[#050014] pt-20 border-b border-white/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,#7b3fff33_0%,transparent_70%)] blur-3xl opacity-80" />
          <SectionHero />
        </section>

        {/* ========== ABOUT (slightly warmer purple) ========== */}
        <section className="relative bg-gradient-to-b from-[#07001f] via-[#050014] to-[#040011] border-b border-white/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle,#a266ff33_0%,transparent_70%)] blur-3xl opacity-75" />
          <SectionAbout />
        </section>

        {/* ========== EDITORS (center-focused purple glow) ========== */}
        <section className="relative bg-gradient-to-b from-[#050016] via-[#070024] to-[#050014] border-b border-white/10">
          {/* top soft band */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(to_bottom,rgba(123,63,255,0.35),transparent)] blur-2xl opacity-80" />
          {/* center glow */}
          <div className="pointer-events-none absolute inset-x-[15%] top-1/3 h-40 bg-[radial-gradient(circle,#b24dff33_0%,transparent_70%)] blur-3xl opacity-70" />
          {/* bottom hint */}
          <div className="pointer-events-none absolute inset-x-[20%] bottom-[-40px] h-40 bg-[radial-gradient(circle,#ff6bb533_0%,transparent_70%)] blur-3xl opacity-60" />
          <SectionEditors />
        </section>

        {/* ========== AGENCY (slightly richer, agency-feel) ========== */}
        <section className="relative bg-gradient-to-b from-[#080024] via-[#060018] to-[#040012] border-b border-white/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle,#8a5bff33_0%,transparent_70%)] blur-3xl opacity-75" />
          <div className="pointer-events-none absolute inset-x-[10%] top-16 h-32 bg-[radial-gradient(circle,#ff6bb533_0%,transparent_70%)] blur-3xl opacity-55" />
          <SectionAgency />
        </section>

        {/* ========== BLOGS (slightly softer, readable purple) ========== */}
        <section className="relative bg-gradient-to-b from-[#06001a] via-[#050014] to-[#040010] border-b border-white/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle,#b798ff33_0%,transparent_70%)] blur-3xl opacity-70" />
          <SectionBlogs />
        </section>



        {/* ========== REVIEWS (slight warm purple mix) ========== */}
        <section className="relative bg-gradient-to-b from-[#06001c] via-[#050015] to-[#040010] border-b border-white/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle,#b26bff33_0%,transparent_70%)] blur-3xl opacity-70" />
          <div className="pointer-events-none absolute inset-x-[20%] top-16 h-32 bg-[radial-gradient(circle,#ff8cc233_0%,transparent_70%)] blur-3xl opacity-55" />
          <SectionReviews />
        </section>

        <Footer />
      </main>
    </>
  );
}

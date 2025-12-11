const savedEditors = [
  { name: "Sadia Rahman", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500" },
];

const SectionSaved = () => {
  return (
    <section id="saved" className="min-h-screen flex flex-col items-center justify-center text-center px-5 animate-fade-up">
      <h2 className="text-3xl font-bold text-[#00c4b4] mb-2">Saved Editors</h2>
      <p className="text-[#9fb4c8] max-w-3xl mb-8">Your bookmarked editors will appear here (demo view).</p>
      <div className="grid gap-5 w-full max-w-6xl grid-cols-1 sm:grid-cols-2">
        {savedEditors.map((editor) => (
          <div key={editor.name} className="bg-white/5 rounded-xl overflow-hidden p-4 hover:shadow-xl hover:-translate-y-2 transition-transform duration-400">
            <img src={editor.img} className="w-full h-48 object-cover rounded-lg" alt={editor.name} />
            <h4 className="mt-2 mb-1">Saved — {editor.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSaved;

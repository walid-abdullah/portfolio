"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "";
      sections.forEach((s) => {
        const top = s.offsetTop - 140;
        if (window.scrollY >= top) current = s.getAttribute("id");
      });
      setActive(current);

      // shrink header when scrolling
      setShrink(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pro", label: "Editors" },
    { href: "#agency", label: "Agency" },
    { href: "#blogs", label: "Blogs" },
    { href: "#reviews", label: "Reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${shrink ? "py-2 bg-black/60 backdrop-blur-xl shadow-lg" : "py-4 bg-black/40 backdrop-blur-md"}
      `}
    >
      <div className="flex justify-between items-center px-10 max-w-7xl mx-auto">

        {/* LOGO */}
        <div className="relative text-xl md:text-2xl font-extrabold tracking-wide cursor-pointer select-none text-transparent bg-clip-text bg-gradient-to-r from-[#00e1ff] via-[#6b50ff] to-[#ff6bb5] animate-shine">
          BD V-Connect
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex space-x-4">
          {links.map((link) => {
            const isActive = active === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300
                  ${isActive ? "text-white bg-white/10 backdrop-blur-lg shadow-[0_0_10px_rgba(123,63,255,0.5)]" : "text-[#c2ccdd]"}
                  hover:text-white hover:scale-[1.08]
                `}
              >
                {link.label}

                {/* Underline effect */}
                <span
                  className={`absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#6b50ff] via-[#ff6bb5] to-[#00e1ff] rounded-full transition-all duration-300 
                    ${isActive ? "w-4 -translate-x-1/2" : "group-hover:w-full"}
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA BUTTON (optional) */}
        <a
          href="#agency"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full 
          text-sm font-semibold text-white bg-gradient-to-r from-[#6b50ff] to-[#ff6bb5]
          hover:scale-105 transition-all duration-300 shadow-lg shadow-[#6b50ff55]"
        >
          Connect Studio
        </a>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }

        .animate-shine {
          background-size: 200%;
          animation: shine 5s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;

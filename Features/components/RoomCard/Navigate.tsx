"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";

const navItems = [
  { name: "امکانات اتاق", id: "امکانات اتاق" },
  { name: "درباره اتاق", id: "درباره اتاق" },
  { name: "قوانین و مقررات", id: "قوانین و مقررات" },
  { name: "نظرات کاربران", id: "اتاق‌‌های مشابه" },
  { name: "پرسش‌‌های متداول", id: "پرسش‌‌های متداول" },
];

export default function NavigateRoomCard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setCurrentSection(item.id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavButton = ({ name, id }: { name: string; id: string }) => {
    const isActive = currentSection === id;
    return (
      <button
        onClick={() => scrollToSection(id)}
        className="relative h-8 px-2 text-md font-serif text-black transition-colors duration-300"
      >
        {name}
        <span
          className={`absolute left-0 -bottom-px h-0.5 w-full bg-primary origin-center transition-transform duration-400 ease-out ${
            isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        />
      </button>
    );
  };

  return (
    <header className="w-[984px] h-8 border-b border-white/20 bg-transparent mx-auto">
      <div className="flex h-full items-center justify-between">
        <nav className="hidden md:flex h-full items-center gap-8">
          {navItems.map((item) => (
            <NavButton key={item.id} name={item.name} id={item.id} />
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white px-2"
        >
          <MenuRoundedIcon />
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-right text-base text-gray-300"
                >
                  {item.name}
                  <span
                    className={`block mt-2 h-0.5 w-full bg-primary transition-transform duration-1200 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

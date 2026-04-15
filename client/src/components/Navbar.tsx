/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 */
import { useState, useEffect } from "react";
import { Menu, X, Languages, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="w-9 h-9 rounded-lg bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-sm font-[Poppins]">
            AM
          </span>
          <span className="text-[#1e3a5f] dark:text-white font-semibold text-lg font-[Poppins] hidden sm:block">
            Alex Murillo
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("servicios")}
            className="text-[#1e3a5f] dark:text-white font-medium text-sm hover:text-[#2d5f3f] dark:hover:text-[#60a5fa] transition-colors font-[Poppins]"
          >
            {t("nav.services")}
          </button>
          <button
            onClick={() => scrollTo("experiencia")}
            className="text-[#1e3a5f] dark:text-white font-medium text-sm hover:text-[#2d5f3f] dark:hover:text-[#60a5fa] transition-colors font-[Poppins]"
          >
            {t("nav.experience")}
          </button>

          <button
            onClick={() => scrollTo("contacto")}
            className="text-[#1e3a5f] dark:text-white font-medium text-sm hover:text-[#2d5f3f] dark:hover:text-[#60a5fa] transition-colors font-[Poppins]"
          >
            {t("nav.contact")}
          </button>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}
            className="bg-[#1e3a5f] dark:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#162d4a] dark:hover:bg-blue-700 transition-colors font-[Poppins]"
          >
            {t("nav.book")}
          </a>
          
          {/* Language toggle button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[#1e3a5f] dark:text-white font-medium text-sm hover:text-[#2d5f3f] dark:hover:text-[#60a5fa] transition-colors font-[Poppins] px-3 py-2 rounded-lg hover:bg-[#f5f7fa] dark:hover:bg-slate-800"
            title={language === "es" ? "Switch to English" : "Cambiar a espanol"}
          >
            <Languages className="w-4 h-4" />
            <span className="uppercase font-semibold">{language}</span>
          </button>
          
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-[#1e3a5f] dark:text-white font-medium text-sm hover:text-[#2d5f3f] dark:hover:text-[#60a5fa] transition-colors font-[Poppins] px-3 py-2 rounded-lg hover:bg-[#f5f7fa] dark:hover:bg-slate-800"
            title={theme === "light" ? "Switch to dark mode" : "Cambiar a modo claro"}
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#1e3a5f] dark:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 shadow-lg">
          <div className="container py-4 flex flex-col gap-3">
            <button onClick={() => scrollTo("servicios")} className="text-[#1e3a5f] dark:text-white font-medium text-left py-2 font-[Poppins]">
              {t("nav.services")}
            </button>
            <button onClick={() => scrollTo("experiencia")} className="text-[#1e3a5f] dark:text-white font-medium text-left py-2 font-[Poppins]">
              {t("nav.experience")}
            </button>

            <button onClick={() => scrollTo("contacto")} className="text-[#1e3a5f] dark:text-white font-medium text-left py-2 font-[Poppins]">
              {t("nav.contact")}
            </button>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}
              className="bg-[#1e3a5f] dark:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium text-center font-[Poppins]"
            >
              {t("nav.book")}
            </a>
            
            {/* Language toggle button in mobile menu */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 text-[#1e3a5f] dark:text-white font-medium text-sm hover:text-[#2d5f3f] dark:hover:text-[#60a5fa] transition-colors font-[Poppins] px-3 py-2 rounded-lg hover:bg-[#f5f7fa] dark:hover:bg-slate-800 border border-[#e5e7eb] dark:border-slate-700"
            >
              <Languages className="w-4 h-4" />
              <span className="uppercase font-semibold">{language}</span>
              <span className="text-sm text-[#6b7280] dark:text-slate-400">
                {language === "es" ? "→ English" : "→ Espanol"}
              </span>
            </button>
            
            {/* Theme toggle button in mobile menu */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 text-[#1e3a5f] dark:text-white font-medium text-sm hover:text-[#2d5f3f] dark:hover:text-[#60a5fa] transition-colors font-[Poppins] px-3 py-2 rounded-lg hover:bg-[#f5f7fa] dark:hover:bg-slate-800 border border-[#e5e7eb] dark:border-slate-700"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              <span className="text-sm text-[#6b7280] dark:text-slate-400">
                {theme === "light" ? "Dark mode" : "Modo claro"}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

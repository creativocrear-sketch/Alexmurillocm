/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="w-9 h-9 rounded-lg bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-sm font-[Poppins]">
            AM
          </span>
          <span className="text-[#1e3a5f] font-semibold text-lg font-[Poppins] hidden sm:block">
            Alex Murillo
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("servicios")}
            className="text-[#1e3a5f] font-medium text-sm hover:text-[#2d5f3f] transition-colors font-[Poppins]"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollTo("experiencia")}
            className="text-[#1e3a5f] font-medium text-sm hover:text-[#2d5f3f] transition-colors font-[Poppins]"
          >
            Experiencia
          </button>

          <button
            onClick={() => scrollTo("contacto")}
            className="text-[#1e3a5f] font-medium text-sm hover:text-[#2d5f3f] transition-colors font-[Poppins]"
          >
            Contacto
          </button>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}
            className="bg-[#1e3a5f] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#162d4a] transition-colors font-[Poppins]"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#1e3a5f] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container py-4 flex flex-col gap-3">
            <button onClick={() => scrollTo("servicios")} className="text-[#1e3a5f] font-medium text-left py-2 font-[Poppins]">
              Servicios
            </button>
            <button onClick={() => scrollTo("experiencia")} className="text-[#1e3a5f] font-medium text-left py-2 font-[Poppins]">
              Experiencia
            </button>

            <button onClick={() => scrollTo("contacto")} className="text-[#1e3a5f] font-medium text-left py-2 font-[Poppins]">
              Contacto
            </button>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}
              className="bg-[#1e3a5f] text-white px-5 py-2.5 rounded-lg text-sm font-medium text-center font-[Poppins]"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

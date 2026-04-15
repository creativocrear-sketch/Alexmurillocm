/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 */
import { useEffect, useRef } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/jjoDBNCgYAYakwHEFwWF2j/alex-murillo-photo_6203e1cc.png";

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const content =
    language === "es"
      ? {
          title: "Transforma tu comunicación empresarial",
          description:
            "Estrategias omnicanal con WhatsApp Business API que centralizan tus ventas y atención al cliente, optimizando la experiencia del usuario y aumentando tu conversión.",
          bullets: [
            "35+ años de experiencia asesorando empresas en transformación digital",
            "Especialista en WhatsApp Business API y comunicación omnicanal",
            "Alianzas con 14 Gremios en Colombia",
          ],
          primaryCta: "Agendar reunión",
          secondaryCta: "Ver portafolio",
          imageAlt: "Alex Murillo - Consultor de Omnicanalidad",
          stats: [
            { value: "35+", label: "Años de experiencia" },
            { value: "4000+", label: "Horas de capacitación" },
            { value: "14", label: "Gremios en Colombia" },
          ],
        }
      : {
          title: "Transform Your Business Communication",
          description:
            "Omnichannel strategies with WhatsApp Business API that centralize sales and customer support, optimize the user experience, and increase conversion.",
          bullets: [
            "35+ years of experience advising companies on digital transformation",
            "Specialist in WhatsApp Business API and omnichannel communication",
            "Alliances with 14 trade associations in Colombia",
          ],
          primaryCta: "Schedule a Meeting",
          secondaryCta: "View Services",
          imageAlt: "Alex Murillo - Omnichannel Consultant",
          stats: [
            { value: "35+", label: "Years of experience" },
            { value: "4000+", label: "Training hours" },
            { value: "14", label: "Associations in Colombia" },
          ],
        };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6 text-[#1e3a5f] dark:text-white">
              {content.title}
            </h1>
            <p className="text-[#4a5568] dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-[Poppins]">
              {content.description}
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {content.bullets.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2d5f3f] dark:text-green-400 mt-0.5 shrink-0" />
                  <span className="text-[#4a5568] dark:text-slate-300 text-sm font-[Poppins]">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contacto")}
                className="bg-[#1e3a5f] dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#162d4a] dark:hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 font-[Poppins] shadow-lg shadow-[#1e3a5f]/20"
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("servicios")}
                className="border-2 border-[#1e3a5f] dark:border-blue-500 text-[#1e3a5f] dark:text-blue-400 px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#1e3a5f] dark:hover:bg-blue-600 hover:text-white transition-all duration-300 font-[Poppins]"
              >
                {content.secondaryCta}
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] dark:from-blue-600 to-[#2d5f3f] dark:to-slate-700 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={HERO_IMAGE}
                  alt={content.imageAlt}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#d4af37]/30 rounded-full"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#2d5f3f]/30 rounded-full"></div>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-200"
        >
          {content.stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-[#1e3a5f] font-[Lora]">
                {stat.value}
              </div>
              <div className="text-sm text-[#6b7280] mt-1 font-[Poppins]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

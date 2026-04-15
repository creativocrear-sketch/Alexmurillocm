/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 */
import {
  Handshake,
  Building2,
  GraduationCap,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceSection() {
  const { language } = useLanguage();

  const content =
    language === "es"
      ? {
          badge: "Experiencia",
          title: "Trayectoria comprobada",
          description:
            "MÃ¡s de tres dÃ©cadas transformando empresas a travÃ©s de estrategias digitales innovadoras.",
          items: [
            {
              icon: Handshake,
              title: "Alianzas estratÃ©gicas",
              subtitle: "35 aÃ±os de relaciones empresariales sÃ³lidas",
              description:
                "He establecido acuerdos comerciales a largo plazo con mÃ¡s de 10 CÃ¡maras de Comercio en Colombia, incluyendo Barranquilla, FacatativÃ¡, Tunja y Cartago, asÃ­ como con grandes y medianas empresas del paÃ­s desde 1993.",
            },
            {
              icon: Building2,
              title: "ImplementaciÃ³n de tecnologÃ­a",
              subtitle: "Experiencia con empresas Fortune 500",
              description:
                "AcompaÃ±amiento en la implementaciÃ³n de Call Centers para clientes como Ssangyong Motor Colombia y la CÃ¡mara de Comercio de Cali, asÃ­ como para concesionarios de la red Chevrolet.",
            },
            {
              icon: GraduationCap,
              title: "Docencia y consultorÃ­a",
              subtitle: "4000+ horas de capacitaciÃ³n impartidas",
              description:
                "Profesor universitario y consultor senior con vasta experiencia en la formaciÃ³n de profesionales en Ã¡reas de gerencia de ventas, marketing y creaciÃ³n de nuevos productos.",
            },
            {
              icon: Smartphone,
              title: "EspecializaciÃ³n WhatsApp",
              subtitle: "Especialista reconocido en omnicanalidad",
              description:
                "Experto certificado en WhatsApp Business API con implementaciones exitosas en empresas de diversos sectores: retail, servicios, manufactura y educaciÃ³n.",
            },
          ],
        }
      : {
          badge: "Experience",
          title: "Proven Track Record",
          description:
            "More than three decades transforming companies through innovative digital strategies.",
          items: [
            {
              icon: Handshake,
              title: "Strategic Alliances",
              subtitle: "35 years of solid business relationships",
              description:
                "Long-term commercial agreements with more than 10 chambers of commerce in Colombia, including Barranquilla, Facatativa, Tunja, and Cartago, as well as large and mid-sized companies since 1993.",
            },
            {
              icon: Building2,
              title: "Technology Implementation",
              subtitle: "Experience with Fortune 500 companies",
              description:
                "Support in implementing call centers for clients such as Ssangyong Motor Colombia, the Cali Chamber of Commerce, and dealerships across the Chevrolet network.",
            },
            {
              icon: GraduationCap,
              title: "Teaching and Consulting",
              subtitle: "4,000+ training hours delivered",
              description:
                "University professor and senior consultant with broad experience training professionals in sales management, marketing, and new product development.",
            },
            {
              icon: Smartphone,
              title: "WhatsApp Specialization",
              subtitle: "Recognized omnichannel specialist",
              description:
                "Certified WhatsApp Business API expert with successful implementations in retail, services, manufacturing, and education.",
            },
          ],
        };

  return (
    <section id="experiencia" className="py-20 bg-[#f5f7fa] dark:bg-slate-800">
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#2d5f3f]/10 dark:bg-green-500/10 text-[#2d5f3f] dark:text-green-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 font-[Poppins]">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-[#6b7280] dark:text-slate-300 max-w-2xl mx-auto font-[Poppins]">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {content.items.map((exp, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e5e7eb] dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-[#2d5f3f]/10 dark:bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <exp.icon className="w-6 h-6 text-[#2d5f3f] dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] dark:text-white mb-1 font-[Lora]">
                {exp.title}
              </h3>
              <p className="text-sm font-semibold text-[#2d5f3f] dark:text-green-400 mb-3 font-[Poppins]">
                {exp.subtitle}
              </p>
              <p className="text-sm text-[#6b7280] dark:text-slate-300 leading-relaxed font-[Poppins]">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

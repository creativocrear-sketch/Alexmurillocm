/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 */
import { Handshake, Building2, GraduationCap, Smartphone, Quote } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    icon: Handshake,
    title: "Alianzas estratégicas",
    subtitle: "35 años de relaciones empresariales sólidas",
    description: "He establecido acuerdos comerciales a largo plazo con más de 10 Cámaras de Comercio en Colombia, incluyendo Barranquilla, Facatativá, Tunja y Cartago, así como con grandes y medianas empresas del país desde 1993.",
  },
  {
    icon: Building2,
    title: "Implementación de tecnología",
    subtitle: "Experiencia con empresas Fortune 500",
    description: "Acompañamiento en la implementación de Call Centers para clientes como Ssangyong Motor Colombia y la Cámara de Comercio de Cali, así como para concesionarios de la red Chevrolet.",
  },
  {
    icon: GraduationCap,
    title: "Docencia y consultoría",
    subtitle: "4000+ horas de capacitación impartidas",
    description: "Profesor universitario y consultor senior con vasta experiencia en la formación de profesionales en áreas de gerencia de ventas, marketing y creación de nuevos productos.",
  },
  {
    icon: Smartphone,
    title: "Especialización WhatsApp",
    subtitle: "Especialista reconocido en omnicanalidad",
    description: "Experto certificado en WhatsApp Business API con implementaciones exitosas en empresas de diversos sectores: retail, servicios, manufactura y educación.",
  },
];

const companies = [
  { abbr: "SSY", name: "Ssangyong Motor Colombia", color: "#2d5f3f" },
  { abbr: "CCC", name: "Cámara de Comercio de Cali", color: "#2d5f3f" },
  { abbr: "CHV", name: "Red Chevrolet", color: "#2d5f3f" },
  { abbr: "CCB", name: "Cámara de Comercio Barranquilla", color: "#1e3a5f" },
  { abbr: "CCF", name: "Cámara de Comercio Facatativá", color: "#1e3a5f" },
  { abbr: "CCT", name: "Cámara de Comercio Tunja", color: "#1e3a5f" },
  { abbr: "CCA", name: "Cámara de Comercio Cartago", color: "#1e3a5f" },
];

const testimonials = [
  {
    quote: "Alex transformó completamente nuestra estrategia de comunicación. Implementar WhatsApp Business fue la mejor decisión que tomamos.",
    name: "Carlos Rodríguez",
    role: "Gerente de ventas, empresa retail",
  },
  {
    quote: "Su experiencia en omnicanalidad nos permitió centralizar todas nuestras comunicaciones. Hemos visto un aumento del 40% en conversiones.",
    name: "María González",
    role: "Directora de marketing, servicios financieros",
  },
  {
    quote: "La capacitación que nos brindó fue invaluable. Nuestro equipo ahora domina todas las herramientas de comunicación digital.",
    name: "Juan Pérez",
    role: "Director general, PyME tecnológica",
  },
];

export default function ExperienceSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="experiencia" className="py-20 bg-[#f5f7fa]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#2d5f3f]/10 text-[#2d5f3f] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 font-[Poppins]">
            Experiencia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Trayectoria comprobada
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto font-[Poppins]">
            Más de tres décadas transformando empresas a través de estrategias digitales innovadoras.
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e5e7eb]"
            >
              <div className="w-12 h-12 bg-[#2d5f3f]/10 rounded-xl flex items-center justify-center mb-4">
                <exp.icon className="w-6 h-6 text-[#2d5f3f]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-1 font-[Lora]">
                {exp.title}
              </h3>
              <p className="text-sm font-semibold text-[#2d5f3f] mb-3 font-[Poppins]">
                {exp.subtitle}
              </p>
              <p className="text-sm text-[#6b7280] leading-relaxed font-[Poppins]">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

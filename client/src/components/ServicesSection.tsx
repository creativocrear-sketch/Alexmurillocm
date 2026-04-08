/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 */
import { MessageSquare, TrendingUp, BarChart3, Settings, Zap, UserCheck, ArrowRight } from "lucide-react";

const ECOSYSTEM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/jjoDBNCgYAYakwHEFwWF2j/ecosystem-v3_39281e54.png";

const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp Business API",
    subtitle: "Escala tu atención al cliente sin perder el toque humano",
    description: "Asesoramiento integral para la aprobación e implementación ante Meta. Diseño de estrategias personalizadas para maximizar el potencial de esta herramienta.",
  },
  {
    icon: TrendingUp,
    title: "Estrategias de comunicación digital",
    subtitle: "Multiplica tu alcance con mensajes que convierten",
    description: "Liderazgo en la creación y ejecución de campañas de comunicación masiva para impulsar la facturación, el reconocimiento de marca y la expansión a nuevos mercados.",
  },
  {
    icon: BarChart3,
    title: "Marketing digital y ventas",
    subtitle: "Transforma tu equipo en máquinas de ventas",
    description: "Formación y capacitación de equipos comerciales en marketing digital, gerencia de ventas y desarrollo de nuevos productos.",
  },
  {
    icon: Settings,
    title: "Integraciones omnicanal",
    subtitle: "Sincroniza tus ventas: Todo en un solo lugar",
    description: "Integración de plataformas omnicanal y desarrollo de soluciones a medida, como bots de atención al cliente y sistemas de pedidos.",
  },
  {
    icon: Zap,
    title: "Automatización de procesos",
    subtitle: "Ahorra horas de trabajo manual cada semana",
    description: "Implementación de automatizaciones inteligentes que reducen tiempos de respuesta y mejoran la eficiencia operativa.",
  },
  {
    icon: UserCheck,
    title: "Consultoría especializada",
    subtitle: "Soluciones diseñadas exclusivamente para ti",
    description: "Asesoría personalizada según las necesidades específicas de tu empresa. Análisis profundo y soluciones a medida.",
  },
];

const ecosystemItems = [
  "WhatsApp Business",
  "Redes sociales",
  "Email marketing",
  "CRM integrado",
  "Análisis y reportes",
  "Bases de datos",
  "Aumento de ventas",
  "Mejor experiencia",
  "Mayor eficiencia",
];

const ecosystemBenefits = [
  "Aumento de ventas",
  "Mejor experiencia",
  "Mayor eficiencia",
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#2d5f3f]/10 text-[#2d5f3f] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 font-[Poppins]">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Soluciones integrales de omnicanalidad
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto font-[Poppins]">
            Desde la estrategia hasta la implementación, te acompañamos en cada paso de tu transformación digital.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#f5f7fa] rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#e5e7eb]"
            >
              <div className="w-12 h-12 bg-[#2d5f3f]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2d5f3f]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#2d5f3f]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 font-[Lora]">
                {service.title}
              </h3>
              <p className="text-sm font-semibold text-[#2d5f3f] mb-3 font-[Poppins]">
                {service.subtitle}
              </p>
              <p className="text-sm text-[#6b7280] leading-relaxed mb-4 font-[Poppins]">
                {service.description}
              </p>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1 text-sm text-[#2d5f3f] font-medium hover:text-[#1e3a5f] transition-colors font-[Poppins]"
              >
                Conocer más
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Ecosystem section */}
        <div className="bg-[#f5f7fa] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                Tu ecosistema omnicanal completo
              </h3>
              <p className="text-[#4a5568] mb-6 font-[Poppins] leading-relaxed">
                No solo implementamos WhatsApp. Diseñamos una estrategia integral que conecta todos tus canales de comunicación en una experiencia unificada para tus clientes.
              </p>
              <ul className="space-y-3">
                {ecosystemItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                    <span className="text-[#4a5568] font-[Poppins] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src={ECOSYSTEM_IMAGE}
                alt="Ecosistema Omnicanal Completo"
                className="w-full max-w-lg rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

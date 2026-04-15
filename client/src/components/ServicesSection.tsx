/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 */
import {
  MessageSquare,
  TrendingUp,
  BarChart3,
  Settings,
  Zap,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ECOSYSTEM_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/jjoDBNCgYAYakwHEFwWF2j/ecosystem-v3_39281e54.png";

export default function ServicesSection() {
  const { language } = useLanguage();

  const content =
    language === "es"
      ? {
          badge: "Servicios",
          title: "Soluciones integrales de omnicanalidad",
          description:
            "Desde la estrategia hasta la implementación, te acompañamos en cada paso de tu transformación digital.",
          more: "Conocer más",
          ecosystemTitle: "Tu ecosistema omnicanal completo",
          ecosystemDescription:
            "No solo implementamos WhatsApp. Diseñamos una estrategia integral que conecta todos tus canales de comunicación en una experiencia unificada para tus clientes.",
          ecosystemAlt: "Ecosistema Omnicanal Completo",
          services: [
            {
              icon: MessageSquare,
              title: "WhatsApp Business API",
              subtitle: "Escala tu atención al cliente sin perder el toque humano",
              description:
                "Asesoramiento integral para la aprobación e implementación ante Meta. Diseño de estrategias personalizadas para maximizar el potencial de esta herramienta.",
            },
            {
              icon: TrendingUp,
              title: "Estrategias de comunicación digital",
              subtitle: "Multiplica tu alcance con mensajes que convierten",
              description:
                "Liderazgo en la creación y ejecución de campañas de comunicación masiva para impulsar la facturación, el reconocimiento de marca y la expansión a nuevos mercados.",
            },
            {
              icon: BarChart3,
              title: "Marketing digital y ventas",
              subtitle: "Transforma tu equipo en máquinas de ventas",
              description:
                "Formación y capacitación de equipos comerciales en marketing digital, gerencia de ventas y desarrollo de nuevos productos.",
            },
            {
              icon: Settings,
              title: "Integraciones omnicanal",
              subtitle: "Sincroniza tus ventas: Todo en un solo lugar",
              description:
                "Integración de plataformas omnicanal y desarrollo de soluciones a medida, como bots de atención al cliente y sistemas de pedidos.",
            },
            {
              icon: Zap,
              title: "Automatización de procesos",
              subtitle: "Ahorra horas de trabajo manual cada semana",
              description:
                "Implementación de automatizaciones inteligentes que reducen tiempos de respuesta y mejoran la eficiencia operativa.",
            },
            {
              icon: UserCheck,
              title: "Consultoría especializada",
              subtitle: "Soluciones diseñadas exclusivamente para ti",
              description:
                "Asesoría personalizada según las necesidades específicas de tu empresa. Análisis profundo y soluciones a medida.",
            },
          ],
          ecosystemItems: [
            "WhatsApp Business",
            "Redes sociales",
            "Email marketing",
            "CRM integrado",
            "Análisis y reportes",
            "Bases de datos",
            "Aumento de ventas",
            "Mejor experiencia",
            "Mayor eficiencia",
          ],
        }
      : {
          badge: "Services",
          title: "Comprehensive Omnichannel Solutions",
          description:
            "From strategy to implementation, I support every stage of your digital transformation.",
          more: "Learn More",
          ecosystemTitle: "Your Complete Omnichannel Ecosystem",
          ecosystemDescription:
            "I do more than implement WhatsApp. I design an end-to-end strategy that connects every communication channel into one unified experience for your customers.",
          ecosystemAlt: "Complete Omnichannel Ecosystem",
          services: [
            {
              icon: MessageSquare,
              title: "WhatsApp Business API",
              subtitle: "Scale customer support without losing the human touch",
              description:
                "End-to-end guidance for Meta approval and implementation, with tailored strategies to unlock the full potential of the platform.",
            },
            {
              icon: TrendingUp,
              title: "Digital Communication Strategies",
              subtitle: "Expand your reach with messages that convert",
              description:
                "Leadership in designing and executing large-scale communication campaigns that increase revenue, brand awareness, and market expansion.",
            },
            {
              icon: BarChart3,
              title: "Digital Marketing and Sales",
              subtitle: "Turn your team into a high-performing sales engine",
              description:
                "Training for commercial teams in digital marketing, sales management, and new product development.",
            },
            {
              icon: Settings,
              title: "Omnichannel Integrations",
              subtitle: "Sync your sales in one place",
              description:
                "Integration of omnichannel platforms and custom-built solutions, including customer service bots and ordering systems.",
            },
            {
              icon: Zap,
              title: "Process Automation",
              subtitle: "Save hours of manual work every week",
              description:
                "Smart automation that reduces response times and improves operational efficiency.",
            },
            {
              icon: UserCheck,
              title: "Specialized Consulting",
              subtitle: "Solutions designed specifically for your company",
              description:
                "Personalized consulting based on your company's specific needs, with deep analysis and custom solutions.",
            },
          ],
          ecosystemItems: [
            "WhatsApp Business",
            "Social media",
            "Email marketing",
            "Integrated CRM",
            "Analytics and reporting",
            "Databases",
            "Higher sales",
            "Better experience",
            "Greater efficiency",
          ],
        };

  return (
    <section id="servicios" className="py-20 bg-white dark:bg-slate-900">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {content.services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#f5f7fa] dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#e5e7eb] dark:hover:border-slate-700"
            >
              <div className="w-12 h-12 bg-[#2d5f3f]/10 dark:bg-green-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2d5f3f]/20 dark:group-hover:bg-green-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#2d5f3f] dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] dark:text-white mb-1 font-[Lora]">
                {service.title}
              </h3>
              <p className="text-sm font-semibold text-[#2d5f3f] dark:text-green-400 mb-3 font-[Poppins]">
                {service.subtitle}
              </p>
              <p className="text-sm text-[#6b7280] dark:text-slate-300 leading-relaxed font-[Poppins]">
                {service.description}
              </p>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1 text-sm text-[#2d5f3f] dark:text-green-400 font-medium hover:text-[#1e3a5f] dark:hover:text-green-300 transition-colors font-[Poppins] mt-4"
              >
                {content.more}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[#f5f7fa] dark:bg-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] dark:text-white mb-4">
                {content.ecosystemTitle}
              </h3>
              <p className="text-[#4a5568] dark:text-slate-300 mb-6 font-[Poppins] leading-relaxed">
                {content.ecosystemDescription}
              </p>
              <ul className="space-y-3">
                {content.ecosystemItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37] dark:bg-yellow-400"></span>
                    <span className="text-[#4a5568] dark:text-slate-300 font-[Poppins] text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src={ECOSYSTEM_IMAGE}
                alt={content.ecosystemAlt}
                className="w-full max-w-md h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

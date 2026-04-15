import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      return (saved === "en" || saved === "es") ? saved : "es";
    }
    return "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const translations = {
  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "nav.book": "Agendar Consulta",
    
    // Hero
    "hero.title": "Transforma tu comunicación empresarial",
    "hero.subtitle": "Estrategias omnicanal con WhatsApp Business API que centralizan tus ventas y atención al cliente, optimizando la experiencia del usuario y aumentando tu conversión.",
    "hero.bullet1": "35+ años de experiencia asesorando empresas en transformación digital",
    "hero.bullet2": "Especialista en WhatsApp Business API y comunicación omnicanal",
    "hero.bullet3": "Alianzas con 14 Gremios en Colombia",
    "hero.cta1": "Agendar reunión",
    "hero.cta2": "Ver portafolio",
    "hero.stat1": "Años de experiencia",
    "hero.stat2": "Horas de capacitación",
    "hero.stat3": "Gremios en Colombia",
    
    // Services
    "services.badge": "Servicios",
    "services.title": "Soluciones integrales de omnicanalidad",
    "services.subtitle": "Desde la estrategia hasta la implementación, te acompañamos en cada paso de tu transformación digital.",
    "services.whatsapp.title": "WhatsApp Business API",
    "services.whatsapp.subtitle": "Escala tu atención al cliente sin perder el toque humano",
    "services.whatsapp.desc": "Asesoramiento integral para la aprobación e implementación ante Meta. Diseño de estrategias personalizadas para maximizar el potencial de esta herramienta.",
    "services.digital.title": "Estrategias de comunicación digital",
    "services.digital.subtitle": "Multiplica tu alcance con mensajes que convierten",
    "services.digital.desc": "Liderazgo en la creación y ejecución de campañas de comunicación masiva para impulsar la facturación, el reconocimiento de marca y la expansión a nuevos mercados.",
    "services.marketing.title": "Marketing digital y ventas",
    "services.marketing.subtitle": "Transforma tu equipo en máquinas de ventas",
    "services.marketing.desc": "Formación y capacitación de equipos comerciales en marketing digital, gerencia de ventas y desarrollo de nuevos productos.",
    "services.integration.title": "Integraciones omnicanal",
    "services.integration.subtitle": "Sincroniza tus ventas: Todo en un solo lugar",
    "services.integration.desc": "Integración de plataformas omnicanal y desarrollo de soluciones a medida, como bots de atención al cliente y sistemas de pedidos.",
    "services.automation.title": "Automatización de procesos",
    "services.automation.subtitle": "Ahorra horas de trabajo manual cada semana",
    "services.automation.desc": "Implementación de automatizaciones inteligentes que reducen tiempos de respuesta y mejoran la eficiencia operativa.",
    "services.consulting.title": "Consultoría especializada",
    "services.consulting.subtitle": "Soluciones diseñadas exclusivamente para ti",
    "services.consulting.desc": "Asesoría personalizada según las necesidades específicas de tu empresa. Análisis profundo y soluciones a medida.",
    "services.learnMore": "Conocer más",
    "services.ecosystem.title": "Tu ecosistema omnicanal completo",
    "services.ecosystem.subtitle": "No solo implementamos WhatsApp. Diseñamos una estrategia integral que conecta todos tus canales de comunicación en una experiencia unificada para tus clientes.",
    "services.ecosystem.item1": "WhatsApp Business",
    "services.ecosystem.item2": "Redes sociales",
    "services.ecosystem.item3": "Email marketing",
    "services.ecosystem.item4": "CRM integrado",
    "services.ecosystem.item5": "Análisis y reportes",
    "services.ecosystem.item6": "Bases de datos",
    "services.ecosystem.item7": "Aumento de ventas",
    "services.ecosystem.item8": "Mejor experiencia",
    "services.ecosystem.item9": "Mayor eficiencia",
    
    // Experience
    "experience.badge": "Experiencia",
    "experience.title": "Trayectoria comprobada",
    "experience.subtitle": "Más de tres décadas transformando empresas a través de estrategias digitales innovadoras.",
    "experience.alliances.title": "Alianzas estratégicas",
    "experience.alliances.subtitle": "35 años de relaciones empresariales sólidas",
    "experience.alliances.desc": "He establecido acuerdos comerciales a largo plazo con más de 10 Cámaras de Comercio en Colombia, incluyendo Barranquilla, Facatativá, Tunja y Cartago, así como con grandes y medianas empresas del país desde 1993.",
    "experience.tech.title": "Implementación de tecnología",
    "experience.tech.subtitle": "Experiencia con empresas Fortune 500",
    "experience.tech.desc": "Acompañamiento en la implementación de Call Centers para clientes como Ssangyong Motor Colombia y la Cámara de Comercio de Cali, así como para concesionarios de la red Chevrolet.",
    "experience.teaching.title": "Docencia y consultoría",
    "experience.teaching.subtitle": "4000+ horas de capacitación impartidas",
    "experience.teaching.desc": "Profesor universitario y consultor senior con vasta experiencia en la formación de profesionales en áreas de gerencia de ventas, marketing y creación de nuevos productos.",
    "experience.whatsapp.title": "Especialización WhatsApp",
    "experience.whatsapp.subtitle": "Especialista reconocido en omnicanalidad",
    "experience.whatsapp.desc": "Experto certificado en WhatsApp Business API con implementaciones exitosas en empresas de diversos sectores: retail, servicios, manufactura y educación.",
    
    // Contact
    "contact.badge": "Contacto",
    "contact.title": "¿Listo para transformar tu negocio?",
    "contact.subtitle": "Agendar una consulta es el primer paso. Te ayudaré a diseñar la estrategia omnicanal perfecta para tu empresa.",
    "contact.cta.title": "Consultoría para automatizar tu negocio",
    "contact.cta.subtitle": "Analiza tu situación actual y descubre cómo WhatsApp Business API puede multiplicar tus ventas. Sesión de 30 minutos, sin compromiso.",
    "contact.cta.whatsapp": "WhatsApp",
    "contact.cta.whatsappSub": "Mensaje directo",
    "contact.cta.email": "Email",
    "contact.cta.emailSub": "Respuesta en 24h",
    "contact.phone.title": "Teléfono",
    "contact.email.title": "Email",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.available": "Disponible 24/7",
    "contact.social": "Sígueme en redes sociales",
    
    // Footer
    "footer.description": "Consultor Senior en Estrategia Digital, Omnicanalidad y WhatsApp Business API.",
    "footer.cyclist": "Ciclista recreativo.",
    "footer.navigation": "Navegación",
    "footer.services": "Servicios",
    "footer.contact": "Contacto",
    "footer.cycling": "Ciclismo de ruta",
    "footer.whatsappService": "WhatsApp Business API",
    "footer.omniStrategy": "Estrategia omnicanal",
    "footer.digitalTraining": "Capacitación digital",
    "footer.copyright": "© 2026 Alex Murillo. Todos los derechos reservados.",
  },
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.book": "Book Consultation",
    
    // Hero
    "hero.title": "Transform Your Business Communication",
    "hero.subtitle": "Omnichannel strategies with WhatsApp Business API that centralize your sales and customer service, optimizing user experience and increasing your conversion.",
    "hero.bullet1": "35+ years of experience advising companies on digital transformation",
    "hero.bullet2": "Specialist in WhatsApp Business API and omnichannel communication",
    "hero.bullet3": "Alliances with 14 Trade Associations in Colombia",
    "hero.cta1": "Schedule Meeting",
    "hero.cta2": "View Portfolio",
    "hero.stat1": "Years of Experience",
    "hero.stat2": "Training Hours",
    "hero.stat3": "Trade Associations in Colombia",
    
    // Services
    "services.badge": "Services",
    "services.title": "Comprehensive Omnichannel Solutions",
    "services.subtitle": "From strategy to implementation, we accompany you every step of your digital transformation.",
    "services.whatsapp.title": "WhatsApp Business API",
    "services.whatsapp.subtitle": "Scale your customer service without losing the human touch",
    "services.whatsapp.desc": "Comprehensive advisory for approval and implementation with Meta. Design of personalized strategies to maximize the potential of this tool.",
    "services.digital.title": "Digital Communication Strategies",
    "services.digital.subtitle": "Multiply your reach with messages that convert",
    "services.digital.desc": "Leadership in creating and executing mass communication campaigns to drive billing, brand recognition, and expansion into new markets.",
    "services.marketing.title": "Digital Marketing and Sales",
    "services.marketing.subtitle": "Transform your team into sales machines",
    "services.marketing.desc": "Training and development of commercial teams in digital marketing, sales management, and new product development.",
    "services.integration.title": "Omnichannel Integrations",
    "services.integration.subtitle": "Sync your sales: Everything in one place",
    "services.integration.desc": "Integration of omnichannel platforms and development of custom solutions, such as customer service bots and ordering systems.",
    "services.automation.title": "Process Automation",
    "services.automation.subtitle": "Save hours of manual work every week",
    "services.automation.desc": "Implementation of intelligent automations that reduce response times and improve operational efficiency.",
    "services.consulting.title": "Specialized Consulting",
    "services.consulting.subtitle": "Solutions designed exclusively for you",
    "services.consulting.desc": "Personalized advisory according to the specific needs of your company. In-depth analysis and custom solutions.",
    "services.learnMore": "Learn More",
    "services.ecosystem.title": "Your Complete Omnichannel Ecosystem",
    "services.ecosystem.subtitle": "We don't just implement WhatsApp. We design an integral strategy that connects all your communication channels into a unified experience for your customers.",
    "services.ecosystem.item1": "WhatsApp Business",
    "services.ecosystem.item2": "Social Media",
    "services.ecosystem.item3": "Email Marketing",
    "services.ecosystem.item4": "Integrated CRM",
    "services.ecosystem.item5": "Analytics & Reports",
    "services.ecosystem.item6": "Databases",
    "services.ecosystem.item7": "Increased Sales",
    "services.ecosystem.item8": "Better Experience",
    "services.ecosystem.item9": "Greater Efficiency",
    
    // Experience
    "experience.badge": "Experience",
    "experience.title": "Proven Track Record",
    "experience.subtitle": "More than three decades transforming companies through innovative digital strategies.",
    "experience.alliances.title": "Strategic Alliances",
    "experience.alliances.subtitle": "35 years of solid business relationships",
    "experience.alliances.desc": "I have established long-term commercial agreements with more than 10 Chambers of Commerce in Colombia, including Barranquilla, Facatativá, Tunja, and Cartago, as well as with large and medium-sized companies in the country since 1993.",
    "experience.tech.title": "Technology Implementation",
    "experience.tech.subtitle": "Experience with Fortune 500 companies",
    "experience.tech.desc": "Support in the implementation of Call Centers for clients such as Ssangyong Motor Colombia and the Cali Chamber of Commerce, as well as for Chevrolet network dealerships.",
    "experience.teaching.title": "Teaching and Consulting",
    "experience.teaching.subtitle": "4000+ hours of training delivered",
    "experience.teaching.desc": "University professor and senior consultant with extensive experience in training professionals in areas of sales management, marketing, and new product creation.",
    "experience.whatsapp.title": "WhatsApp Specialization",
    "experience.whatsapp.subtitle": "Recognized specialist in omnichannel",
    "experience.whatsapp.desc": "Certified expert in WhatsApp Business API with successful implementations in companies from various sectors: retail, services, manufacturing, and education.",
    
    // Contact
    "contact.badge": "Contact",
    "contact.title": "Ready to Transform Your Business?",
    "contact.subtitle": "Scheduling a consultation is the first step. I will help you design the perfect omnichannel strategy for your company.",
    "contact.cta.title": "Consulting to Automate Your Business",
    "contact.cta.subtitle": "Analyze your current situation and discover how WhatsApp Business API can multiply your sales. 30-minute session, no commitment.",
    "contact.cta.whatsapp": "WhatsApp",
    "contact.cta.whatsappSub": "Direct Message",
    "contact.cta.email": "Email",
    "contact.cta.emailSub": "Response in 24h",
    "contact.phone.title": "Phone",
    "contact.email.title": "Email",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.available": "Available 24/7",
    "contact.social": "Follow me on social media",
    
    // Footer
    "footer.description": "Senior Consultant in Digital Strategy, Omnichannel, and WhatsApp Business API.",
    "footer.cyclist": "Recreational cyclist.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.cycling": "Road Cycling",
    "footer.whatsappService": "WhatsApp Business API",
    "footer.omniStrategy": "Omnichannel Strategy",
    "footer.digitalTraining": "Digital Training",
    "footer.copyright": "© 2026 Alex Murillo. All rights reserved.",
  },
};

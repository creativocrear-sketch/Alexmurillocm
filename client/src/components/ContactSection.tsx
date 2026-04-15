/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 */
import { MessageCircle, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { language } = useLanguage();

  const content =
    language === "es"
      ? {
          badge: "Contacto",
          title: "Â¿Listo para transformar tu negocio?",
          description:
            "Agendar una consulta es el primer paso. Te ayudarÃ© a diseÃ±ar la estrategia omnicanal perfecta para tu empresa.",
          cardTitle: "ConsultorÃ­a para automatizar tu negocio",
          cardDescription:
            "Analiza tu situaciÃ³n actual y descubre cÃ³mo WhatsApp Business API puede multiplicar tus ventas. SesiÃ³n de 30 minutos, sin compromiso.",
          whatsappDetail: "Mensaje directo",
          emailDetail: "Respuesta en 24h",
          socialLabel: "SÃ­gueme en redes sociales",
          contactMethods: [
            {
              icon: Phone,
              title: "TelÃ©fono",
              detail: "+57 310 388 2759",
              href: "tel:+573103882759",
            },
            {
              icon: Mail,
              title: "Email",
              detail: "alexmurillo@crearcomunicaciones.net",
              href: "mailto:alexmurillo@crearcomunicaciones.net",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              detail: "Disponible 24/7",
              href: "https://wa.me/573103882759",
            },
          ],
        }
      : {
          badge: "Contact",
          title: "Ready to Transform Your Business?",
          description:
            "Scheduling a consultation is the first step. I will help you design the ideal omnichannel strategy for your company.",
          cardTitle: "Consulting to Automate Your Business",
          cardDescription:
            "Review your current situation and discover how WhatsApp Business API can multiply your sales. 30-minute session, no commitment.",
          whatsappDetail: "Direct message",
          emailDetail: "Reply within 24h",
          socialLabel: "Follow me on social media",
          contactMethods: [
            {
              icon: Phone,
              title: "Phone",
              detail: "+57 310 388 2759",
              href: "tel:+573103882759",
            },
            {
              icon: Mail,
              title: "Email",
              detail: "alexmurillo@crearcomunicaciones.net",
              href: "mailto:alexmurillo@crearcomunicaciones.net",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              detail: "Available 24/7",
              href: "https://wa.me/573103882759",
            },
          ],
        };

  return (
    <section id="contacto" className="py-20 bg-white dark:bg-slate-900">
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

        <div className="bg-gradient-to-br from-[#1e3a5f] dark:from-blue-700 to-[#2d5f3f] dark:to-slate-800 rounded-2xl p-8 md:p-10 text-center mb-12 max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-3 font-[Lora]">
            {content.cardTitle}
          </h3>
          <p className="text-white/80 mb-8 font-[Poppins] text-sm leading-relaxed">
            {content.cardDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573103882759"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1e3a5f] dark:text-blue-600 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-[Poppins]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
              <span className="text-[#6b7280] dark:text-slate-600 font-normal text-xs">
                {content.whatsappDetail}
              </span>
            </a>
            <a
              href="mailto:alexmurillo@crearcomunicaciones.net"
              className="bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2 font-[Poppins]"
            >
              <Mail className="w-5 h-5" />
              Email
              <span className="text-white/60 font-normal text-xs">
                {content.emailDetail}
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {content.contactMethods.map((method, i) => (
            <a
              key={i}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-[#f5f7fa] dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#e5e7eb] dark:hover:border-slate-700 group"
            >
              <div className="w-14 h-14 bg-[#2d5f3f]/10 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#2d5f3f]/20 dark:group-hover:bg-green-500/20 transition-colors">
                <method.icon className="w-6 h-6 text-[#2d5f3f] dark:text-green-400" />
              </div>
              <h4 className="text-[#1e3a5f] dark:text-white font-semibold mb-1 font-[Poppins]">
                {method.title}
              </h4>
              <p className="text-sm text-[#6b7280] dark:text-slate-300 font-[Poppins]">
                {method.detail}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6b7280] dark:text-slate-300 text-sm mb-4 font-[Poppins]">
            {content.socialLabel}
          </p>
          <div className="flex justify-center gap-4">
            {[
              { name: "LinkedIn", href: "#", icon: "in" },
              { name: "WhatsApp", href: "https://wa.me/573103882759", icon: "wa" },
              { name: "Instagram", href: "#", icon: "ig" },
              { name: "Facebook", href: "#", icon: "fb" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 bg-[#2d5f3f] dark:bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-[#1e3a5f] dark:hover:bg-blue-700 transition-colors"
              >
                {social.icon === "in" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                )}
                {social.icon === "wa" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                )}
                {social.icon === "ig" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                )}
                {social.icon === "fb" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

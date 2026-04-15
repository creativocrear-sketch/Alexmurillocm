/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 * Floating social buttons: Redes sociales + Strava + Compartir
 */
import { useState, useRef, useEffect } from "react";
import { Share2, X, Check, Link } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SITE_URL = "https://alexmurillo-jjodbncg.manus.space";
const STRAVA_PROFILE = "https://www.strava.com/athletes/31661633";

interface ShareOption {
  name: string;
  icon: React.ReactNode;
  color: string;
  action: () => void;
}

const socialLinks = [
  {
    name: "Strava",
    href: STRAVA_PROFILE,
    color: "#FC4C02",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    color: "#0A66C2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    color: "#E4405F",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    color: "#1877F2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/573103882759",
    color: "#25D366",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function ShareButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const currentUrl =
    typeof window === "undefined" ? SITE_URL : window.location.href;

  const shareMeta =
    language === "es"
      ? {
          title: "Alex Murillo - Consultor de Omnicanalidad y WhatsApp Business API",
          description:
            "Estrategias omnicanal con WhatsApp Business API que centralizan tus ventas y atención al cliente. 35+ años de experiencia.",
          shareIn: "Compartir en:",
          copied: "Enlace copiado",
          copy: "Copiar enlace",
          sharePage: "Compartir esta página",
          social: "Redes sociales",
        }
      : {
          title: "Alex Murillo - Omnichannel and WhatsApp Business API Consultant",
          description:
            "Omnichannel strategies powered by WhatsApp Business API to centralize sales and customer support. 35+ years of experience.",
          shareIn: "Share on:",
          copied: "Link copied",
          copy: "Copy link",
          sharePage: "Share this page",
          social: "Social links",
        };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
        setShowShareMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareOptions: ShareOption[] = [
    {
      name: "WhatsApp",
      color: "#25D366",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${shareMeta.title}\n${shareMeta.description}\n${currentUrl}`)}`,
          "_blank"
        );
      },
    },
    {
      name: "LinkedIn",
      color: "#0A66C2",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
          "_blank"
        );
      },
    },
    {
      name: "Facebook",
      color: "#1877F2",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
          "_blank"
        );
      },
    },
    {
      name: "X (Twitter)",
      color: "#000000",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMeta.title)}&url=${encodeURIComponent(currentUrl)}`,
          "_blank"
        );
      },
    },
    {
      name: "Telegram",
      color: "#26A5E4",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      action: () => {
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareMeta.title)}`,
          "_blank"
        );
      },
    },
  ];

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 font-[Poppins]">
      <div
        className={`absolute bottom-16 right-0 flex flex-col items-center gap-3 transition-all duration-300 ${
          isExpanded
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div
          className={`absolute bottom-0 right-14 transition-all duration-200 ${
            showShareMenu
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-3 min-w-[200px]">
            <p className="text-xs text-[#6b7280] font-medium mb-2 px-2">
              {shareMeta.shareIn}
            </p>
            <div className="flex flex-col gap-1">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => {
                    option.action();
                    setShowShareMenu(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f5f7fa] transition-colors text-left w-full group"
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: option.color }}
                  >
                    {option.icon}
                  </span>
                  <span className="text-sm text-[#1e3a5f] font-medium">
                    {option.name}
                  </span>
                </button>
              ))}
              <div className="border-t border-gray-100 my-1"></div>
              <button
                onClick={copyLink}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f5f7fa] transition-colors text-left w-full group"
              >
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-[#1e3a5f] text-white shrink-0 group-hover:scale-110 transition-transform">
                  {copied ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Link className="w-3.5 h-3.5" />
                  )}
                </span>
                <span className="text-sm text-[#1e3a5f] font-medium">
                  {copied ? shareMeta.copied : shareMeta.copy}
                </span>
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 bg-[#4a5568] text-white"
          aria-label={shareMeta.sharePage}
          style={{ transitionDelay: `${socialLinks.length * 50}ms` }}
        >
          <Share2 className="w-4.5 h-4.5" />
        </button>

        {socialLinks.map((social, i) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: social.color,
              transitionDelay: `${(socialLinks.length - 1 - i) * 50}ms`,
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
          if (isExpanded) setShowShareMenu(false);
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 ${
          isExpanded
            ? "bg-[#1e3a5f] text-white rotate-45"
            : "bg-[#1e3a5f] text-white hover:bg-[#162d4a]"
        }`}
        aria-label={shareMeta.social}
      >
        {isExpanded ? (
          <X className="w-5 h-5 -rotate-45" />
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
        )}
      </button>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "fr", label: "Français" },
];

export function LanguageSwitcher({ id = "google_translate_element" }: { id?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read current language from cookie
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
    if (match && match[1]) {
      setCurrentLang(match[1]);
    } else {
      setCurrentLang("en");
    }

    // Listen for custom event from other switchers
    const handleLangChange = (e: any) => {
      setCurrentLang(e.detail);
    };
    window.addEventListener('languageChanged', handleLangChange);

    // Ensure Google Translate script is loaded
    if (!window.googleTranslateElementInitCallbacks) {
      window.googleTranslateElementInitCallbacks = [];
    }

    const initTranslate = () => {
      if (window.google && window.google.translate) {
        const el = document.getElementById(id);
        if (el && el.innerHTML === "") {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,de,it,fr",
              autoDisplay: false,
            },
            id
          );
        }
      }
    };

    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInitCallbacks.push(initTranslate);

      window.googleTranslateElementInit = () => {
        window.googleTranslateElementInitCallbacks.forEach(cb => cb());
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.google && window.google.translate) {
        initTranslate();
      } else {
        window.googleTranslateElementInitCallbacks.push(initTranslate);
      }
    }

    // Close dropdown on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('languageChanged', handleLangChange);
    };
  }, [id]);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    
    // Dispatch event to sync other switchers
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: langCode }));

    if (langCode === 'en') {
      // To revert to English, clearing cookies and reloading is the most reliable way
      const host = window.location.hostname;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${host}; path=/; SameSite=None; Secure`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${host}; path=/; SameSite=None; Secure`;
      window.location.reload();
      return;
    }

    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // Fallback if combo box isn't found
      const host = window.location.hostname;
      document.cookie = `googtrans=/en/${langCode}; path=/; SameSite=None; Secure`;
      document.cookie = `googtrans=/en/${langCode}; domain=${host}; path=/; SameSite=None; Secure`;
      document.cookie = `googtrans=/en/${langCode}; domain=.${host}; path=/; SameSite=None; Secure`;
      window.location.reload();
    }
  };

  const currentLangLabel = LANGUAGES.find((l) => l.code === currentLang)?.label || "English";

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden element for Google Translate to attach to */}
      <div id={id} className="hidden"></div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-primary/50 transition-colors text-sm font-mono text-gray-300 hover:text-white min-w-[120px] justify-between"
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>{currentLangLabel}</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-full min-w-[120px] bg-zinc-900 border border-white/10 rounded-md shadow-xl overflow-hidden z-50"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm font-mono hover:bg-white/10 transition-colors ${
                  currentLang === lang.code ? "text-primary bg-primary/10" : "text-gray-300"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    googleTranslateElementInitCallbacks: Array<() => void>;
  }
}

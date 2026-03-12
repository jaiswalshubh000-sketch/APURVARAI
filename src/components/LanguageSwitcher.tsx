import { useEffect } from "react";
import { motion } from "framer-motion";

export function LanguageSwitcher({ id = "google_translate_element" }: { id?: string }) {
  useEffect(() => {
    // We use a global array to keep track of all elements that need initialization
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
              includedLanguages: "en,de,it,fr,ko,ja",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
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
      // Script is already loaded or loading
      if (window.google && window.google.translate) {
        initTranslate();
      } else {
        window.googleTranslateElementInitCallbacks.push(initTranslate);
      }
    }
  }, [id]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      id={id} 
      className="flex items-center h-9 overflow-hidden rounded-md min-w-[120px] transition-shadow hover:shadow-lg hover:shadow-primary/20"
    />
  );
}

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    googleTranslateElementInitCallbacks: Array<() => void>;
  }
}

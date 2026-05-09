import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language, SUPPORTED_LANGUAGES } from "../../lib/translations";

interface LanguageSelectorProps {
  scrolled?: boolean;
}

const LABELS: Record<Language, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

const FULL_NAMES: Record<Language, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

const LanguageSelector: FunctionComponent<LanguageSelectorProps> = ({ scrolled = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <motion.button
        type="button"
        whileHover={{ y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
        whileTap={{ y: 4, x: 4 }}
        animate={{ backgroundColor: scrolled ? "#FFE656" : "#A3E636" }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.header.languageLabel}
        className="h-12 px-3 flex items-center gap-x-1.5 border-neoBrutalism shadow-neoBrutalism rounded-md font-bold text-sm"
      >
        {LABELS[language]}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="size-4" strokeWidth={2.5} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            role="listbox"
            className="absolute right-0 top-14 min-w-[10rem] bg-white border-neoBrutalism shadow-neoBrutalism rounded-md overflow-hidden z-50"
          >
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isActive = lang === language;
              return (
                <li key={lang} role="option" aria-selected={isActive}>
                  <motion.button
                    type="button"
                    whileHover={{ x: 4 }}
                    onClick={() => handleSelect(lang)}
                    className={`w-full flex items-center justify-between gap-x-3 px-4 py-2.5 text-sm font-semibold cursor-pointer ${
                      isActive ? "bg-mainGreen" : "bg-white hover:bg-accentYellow"
                    }`}
                  >
                    <span>{FULL_NAMES[lang]}</span>
                    <span className="text-xs font-bold opacity-70">{LABELS[lang]}</span>
                  </motion.button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;

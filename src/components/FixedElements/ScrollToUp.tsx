import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const ScrollToUp = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileHover={{ y: -4, rotate: -6 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 16 }}
          className="fixed lg:bottom-6 bottom-4 right-8 size-11 flex z-50 items-center justify-center rounded-sm bg-boxGray border-2 border-black shadow-neoBrutalism"
          href="#inicio"
          aria-label={t.scrollToUp}
        >
          <ChevronUp stroke="#A3E636" strokeWidth={2.5} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default ScrollToUp;

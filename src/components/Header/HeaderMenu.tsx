import { FunctionComponent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

interface menuSituation {
  menuSituation: boolean;
  scrolled?: boolean;
}

const HeaderMenu: FunctionComponent<menuSituation> = ({ menuSituation, scrolled = false }) => {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>("#inicio");

  return (
    <AnimatePresence>
      {menuSituation && (
        <motion.nav
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            backgroundColor: scrolled ? "#FFE656" : "#A3E636",
          }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex absolute right-4 top-20 xl:static xl:h-12 xl:px-6 py-2 w-2/5 xl:w-9/12 rounded-md border-neoBrutalism shadow-neoBrutalism justify-center items-center z-50"
        >
          <ul className="flex xl:flex-row flex-col items-center justify-center gap-x-10 2xl:gap-x-12 font-semibold">
            {t.header.menu.map(({ name, id }) => {
              const isSelected = selectedId === id;
              return (
                <a key={id} href={id}>
                  <motion.li
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    onClick={() => setSelectedId(id)}
                    className="relative p-1 text-[15px] px-2 2xl:px-3 rounded-md cursor-pointer"
                  >
                    {name}
                    {isSelected && (
                      <motion.span
                        layoutId="active-menu-indicator"
                        className="absolute inset-0 border-neoBrutalism rounded-md bg-white/40 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.li>
                </a>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default HeaderMenu;

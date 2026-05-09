import { MenuIcon, X } from "lucide-react";
import { FunctionComponent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

interface HeaderIconProps {
  menuSituation: boolean;
  scrolled?: boolean;
  get: (value: boolean) => void;
}

const HeaderIcon: FunctionComponent<HeaderIconProps> = ({
  menuSituation,
  scrolled = false,
  get,
}) => {
  const { t } = useLanguage();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(menuSituation);

  const openMenu = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
    get(menuIsOpen);
  };

  return (
    <motion.button
      whileHover={{ y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
      whileTap={{ y: 4, x: 4 }}
      animate={{ backgroundColor: scrolled ? "#FFE656" : "#A3E636" }}
      transition={{ duration: 0.3 }}
      className="size-12 flex items-center justify-center border-neoBrutalism shadow-neoBrutalism rounded-md"
      onClick={openMenu}
      aria-label={menuSituation ? t.header.closeMenu : t.header.openMenu}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={menuSituation ? "x" : "menu"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {menuSituation ? <X /> : <MenuIcon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default HeaderIcon;

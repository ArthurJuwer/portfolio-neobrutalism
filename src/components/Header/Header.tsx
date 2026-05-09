import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import HeaderIcon from "./HeaderIcon";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import LanguageSelector from "./LanguageSelector";

function Header() {
  const [menuSituation, setMenuSituation] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setMenuSituation(false);
      } else {
        setMenuSituation(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: hidden ? "-110%" : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="xl:max-w-screen-xl xl:mx-auto xl:px-14 2xl:px-0 flex items-center justify-between p-4 xl:py-4">
        <HeaderLogo compact={scrolled} scrolled={scrolled} />
        <HeaderMenu menuSituation={menuSituation} scrolled={scrolled} />
        <div className="flex items-center gap-x-2">
          <LanguageSelector scrolled={scrolled} />
          <HeaderIcon menuSituation={menuSituation} scrolled={scrolled} get={(value: boolean) => setMenuSituation(value)} />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;

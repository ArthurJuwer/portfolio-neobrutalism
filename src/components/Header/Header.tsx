import { useState, useEffect } from "react";
import HeaderIcon from "./HeaderIcon";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [menuSituation, setMenuSituation] = useState<boolean>(true);

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
    <header className="flex items-center justify-between p-4 xl:pt-8 xl:px-0 pb-0">
      <HeaderLogo />
      <HeaderMenu menuSituation={menuSituation} />
      <HeaderIcon menuSituation={menuSituation} get={(value: boolean) => setMenuSituation(value)} />
    </header>
  );
}

export default Header;

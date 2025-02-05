import { useState } from "react"
import HeaderIcon from "./HeaderIcon"
import HeaderLogo from "./HeaderLogo"
import HeaderMenu from "./HeaderMenu"

function Header() {

  const [menuSituation, setMenuSituation] = useState<boolean>(true)  
  
  return (
    <header className="flex items-center justify-between p-4 xl:pt-8 xl:px-0 pb-0">
        <HeaderLogo />
        <HeaderMenu menuSituation={menuSituation}/>
        <HeaderIcon menuSituation={menuSituation} get={(value: boolean) => setMenuSituation(value)}/>
    </header>
  )
}

export default Header
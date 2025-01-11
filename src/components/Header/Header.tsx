import { useState } from "react"
import HeaderIcon from "./HeaderIcon"
import HeaderLogo from "./headerLogo"
import HeaderMenu from "./HeaderMenu"

function Header() {

  const [menuSituation, setMenuSituation] = useState<boolean>(false)  
  console.log(menuSituation)
  return (
    <header className="flex items-center justify-between">
        <HeaderLogo />
        <HeaderMenu menuSituation={menuSituation}/>
        <HeaderIcon menuSituation={menuSituation} get={(value: boolean) => setMenuSituation(value)}/>
    </header>
  )
}

export default Header
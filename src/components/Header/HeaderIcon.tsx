import { MenuIcon, X } from "lucide-react"
import { FunctionComponent, useState } from "react"

interface HeaderIconProps {
    menuSituation: boolean
    get: any
}

const HeaderIcon: FunctionComponent<HeaderIconProps> = ({menuSituation, get}) => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(menuSituation)

    const openMenu = () => {    
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);    
        get(menuIsOpen)
    }

    return (
        <button 
            className="size-12 bg-mainGreen flex items-center justify-center border-neoBrutalism shadow-neoBrutalism rounded-md transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            onClick={openMenu}
        >
            
            {menuSituation ? <X /> : <MenuIcon /> }
        </button>
    )
}

export default HeaderIcon
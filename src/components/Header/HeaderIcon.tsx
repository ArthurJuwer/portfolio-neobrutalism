import { MenuIcon } from "lucide-react"
import { FunctionComponent, useState } from "react"

interface HeaderIconProps {
    menuSituation: boolean
    get: any
}

const HeaderIcon: FunctionComponent<HeaderIconProps> = ({menuSituation, get}) => {

    const [menuIsOpen,setMenuIsOpen] = useState<boolean>(menuSituation)

    const openMenu = () => {
        menuIsOpen === true ? setMenuIsOpen(false) : setMenuIsOpen(true);    
        get(menuIsOpen)
    }

    return (
        <button 
            className="size-12 bg-mainGreen flex items-center justify-center border-neoBrutalism shadow-neoBrutalism rounded-md"
            onClick={openMenu}
        >
            <MenuIcon />
        </button>
    )
}

export default HeaderIcon
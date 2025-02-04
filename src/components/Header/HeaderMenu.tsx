import { FunctionComponent, useState } from "react"

interface menuSituation {
    menuSituation: boolean
}

const HeaderMenu: FunctionComponent<menuSituation> = ({menuSituation}) => {
    
    interface listaItemsInformations {
        name: string,
        id: string,
        isSelected: boolean,
    }
    const [listItemsMenu, setListItemMenu] = useState<listaItemsInformations[]> ([
        {name: "Inicio", id: "#inicio", isSelected: true },
        {name: "Sobre", id: "#sobre", isSelected: false },
        {name: "Habilidades", id: "#habilidades", isSelected: false },
        {name: "Projetos", id: "#projetos", isSelected: false },
        {name: "Redes Sociais", id: "#redes", isSelected: false },
        {name: "Experiências", id: "#experiências", isSelected: false },
        {name: "Contato", id: "#contato", isSelected: false },
    ])

    const handleSelect = (id: string) => {
        const updatedList = listItemsMenu.map((item)=> ({
            ...item,
            isSelected: item.id === id
        }))
        setListItemMenu(updatedList)
        
    }

    return (
    <nav className={`${menuSituation ? "flex" : "hidden"} absolute right-4 top-20 xl:static xl:h-12 xl:px-6 py-2 w-2/5 xl:w-auto bg-mainGreen rounded-md border-neoBrutalism shadow-neoBrutalism justify-center items-center`}>
        <ul className="flex xl:flex-row flex-col items-center justify-center gap-x-12  font-semibold">
            {listItemsMenu.map(({name, id, isSelected})=>(
                <a 
                    href={id}>
                    <li 
                        className={`${isSelected ? "border-neoBrutalism" : ""} p-1 px-3 rounded-md`}
                        key={id} 
                        id={id}
                        onClick={() => handleSelect(id)}
                    >
                        {name}   
                    </li>
                </a>
            ))}
        </ul>
    </nav>
    )
}

export default HeaderMenu
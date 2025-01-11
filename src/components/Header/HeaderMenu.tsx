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
        {name: "Experiências", id: "#experiências", isSelected: false },
        {name: "Contato", id: "#contato", isSelected: false },
        {name: "Rodapé", id: "#rodapé", isSelected: false },
    ])

    const handleSelect = (id: string) => {
        const updatedList = listItemsMenu.map((item)=> ({
            ...item,
            isSelected: item.id === id
        }))
        setListItemMenu(updatedList)
        
    }

    const menuSituationVar:boolean = (menuSituation)

    return (
    <nav className={`${menuSituationVar ? "flex" : "hidden"} xl:flex  xl:h-12  px-6 bg-mainGreen rounded-md border-neoBrutalism shadow-neoBrutalism justify-center items-center`}>
        <ul className="flex xl:flex-row flex-col items-center justify-center gap-x-12  font-semibold">
            {listItemsMenu.map(({name, id, isSelected})=>(
                <li 
                    className={`${isSelected ? "border-neoBrutalism" : ""} p-1 px-3 rounded-md`}
                    key={id} 
                    id={id}
                    onClick={() => handleSelect(id)}
                >
                    <a 
                        href={id}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    )
}

export default HeaderMenu
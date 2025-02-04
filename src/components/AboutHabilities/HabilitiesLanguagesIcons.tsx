import { FunctionComponent, ReactNode } from "react"

interface PropsLanguageIcons {
  iconSvg?: ReactNode
  name: string
  isFrontEnd: boolean
}

const HabilitiesLanguagesIcons: FunctionComponent<PropsLanguageIcons> = ({name, iconSvg, isFrontEnd}) => {
  return (
    <div className={`${isFrontEnd ? "bg-boxGray" : "bg-mainGreen border-black border-2"} w-[calc(33.3%-0.8rem)]  flex gap-x-3 items-center rounded-full px-4 h-12`}>
        {iconSvg}
        <p className={`${isFrontEnd ? "text-white" : "text-black "} font-semibold text-sm`}>{name}</p>
    </div>
  )
}

export default HabilitiesLanguagesIcons
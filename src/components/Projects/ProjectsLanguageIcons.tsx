import { FunctionComponent, ReactNode } from "react"

interface PropsLanguageIcons {
    iconSvg?: ReactNode
    name: string
}

const LanguageIcons: FunctionComponent<PropsLanguageIcons> = ({name, iconSvg}) => {
  return (
    <div className="bg-boxGray flex gap-x-1.5 items-center justify-center rounded-full px-2.5 h-8">
        {iconSvg}
        <p className="text-white font-medium text-xs">{name}</p>
    </div>
  )
}

export default LanguageIcons
import { FunctionComponent, ReactNode } from "react"

interface PropsSocialMediaCard{
    icon: ReactNode; 
    link: string;
    followers: string;
}

const SocialMediaCard: FunctionComponent<PropsSocialMediaCard> = ({icon, link, followers}) => {
  return (
    <div className="w-[calc(50%-0.8rem)] lg:w-auto flex flex-col items-center gap-y-4">
        <div className="lg:size-56 size-28 bg-boxGray rounded-md text-secondGreen flex items-center justify-center">{icon}</div>
        <a href={`https://www.${link}`} target="_blank" className="underline text-boxGray lg:text-xl text-xs">{link}</a>
        <div className="bg-boxGray px-4 py-1 rounded-2xl lg:w-4/5">
            <h1 className="text-secondGreen font-medium text-xs lg:text-base">{followers}</h1>
        </div>
    </div>
  )
}

export default SocialMediaCard
import { FunctionComponent, ReactNode } from "react"

interface PropsSocialMediaCard{
    icon: ReactNode; 
    link: string;
    followers: string;
}

const SocialMediaCard: FunctionComponent<PropsSocialMediaCard> = ({icon, link, followers}) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
        <div className="size-56 bg-boxGray rounded-md text-secondGreen flex items-center justify-center">{icon}</div>
        <a href={`https://www.${link}`} target="_blank" className="underline text-boxGray text-xl">{link}</a>
        <div className="bg-boxGray px-4 py-1 rounded-2xl w-4/5">
            <h1 className="text-secondGreen font-medium">{followers}</h1>
        </div>
    </div>
  )
}

export default SocialMediaCard
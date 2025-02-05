import { Linkedin } from "lucide-react"
import { FunctionComponent } from "react"

interface propsFairCards {
  image: string
  title: string
  text: string
  link: string
}

const FairCards: FunctionComponent<propsFairCards> = ({image, link, title, text}) => {
  return (
    <div className="bg-mainGreen w-10/12 xl:h-[25rem] lg:w-1/3 border-neoBrutalism shadow-neoBrutalism_300 p-4 pb-6 flex flex-col gap-y-2">
        <div className="relative">
            <img 
                src={image}
                alt="feira motic" 
                className="border-2 border-black rounded-lg"
            />
            <a 
              href={link}
              target="_blank">
              <div className="absolute top-3 left-2 bg-boxGray rounded-full size-9 flex items-center justify-center group hover:bg-mainGreen">
                <Linkedin className="size-5 text-mainGreen group-hover:text-boxGray"/>
              </div>
            </a>
        </div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="w-11/12">{text}</p>
    </div>
  )
}

export default FairCards
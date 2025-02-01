import { FunctionComponent } from "react"

interface propsFairCards {
  image: string
  title: string
  text: string
}

const FairCards: FunctionComponent<propsFairCards> = ({image, title, text}) => {
  return (
    <div className="bg-mainGreen w-1/3 border-neoBrutalism shadow-neoBrutalism p-4 pb-6 flex flex-col gap-y-2">
        <div className="">
            <img 
                src={image}
                alt="feira motic" 
                className="border-2 border-black rounded-lg"
            />
        </div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="w-11/12">{text}</p>
    </div>
  )
}

export default FairCards
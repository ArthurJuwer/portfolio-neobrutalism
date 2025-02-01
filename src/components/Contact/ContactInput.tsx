import { FunctionComponent } from "react"

interface InterfaceContactInput {
    type: string
    placeholder: string

}

const ContactInput: FunctionComponent<InterfaceContactInput> = ({type, placeholder}) => {
  return (
    <div className="relative w-96">
        <span className="border-neoBrutalism shadow-neoBrutalism_label text-xs py-1 px-2 font-bold z-40 absolute -top-5 left-0 bg-mainBackground uppercase">{type}: </span>
        <input type="text" className="z-0 outline-none border-neoBrutalism shadow-neoBrutalism_200 bg-mainGreen p-4 w-full font-semibold placeholder:text-gray-500 rounded-sm" placeholder={placeholder} />
    </div>
  )
}

export default ContactInput
import { FunctionComponent } from "react"

interface InterfaceContactInput {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInput: FunctionComponent<InterfaceContactInput> = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="relative w-80 lg:w-96">
        <span className="border-neoBrutalism shadow-neoBrutalism_label_mobile lg:shadow-neoBrutalism_label text-xs py-1 px-2 font-bold z-40 absolute -top-5 left-0 bg-mainBackground uppercase">{name}: </span>
        <input 
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="z-0 outline-none border-neoBrutalism lg:shadow-neoBrutalism_200 shadow-neoBrutalism_100 bg-mainGreen p-4 w-full font-semibold placeholder:text-gray-500 rounded-sm"
          /> 
    </div>
  )
}

export default ContactInput
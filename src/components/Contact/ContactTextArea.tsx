import { FunctionComponent } from "react";

interface InterfaceContactTextArea {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ContactTextArea: FunctionComponent<InterfaceContactTextArea> = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="relative w-80 lg:w-96">
        <span className="border-neoBrutalism shadow-neoBrutalism_label_mobile lg:shadow-neoBrutalism_label text-xs py-1 px-2 font-bold z-40 absolute -top-5 left-0 bg-mainBackground">MENSAGEM: </span>
        <textarea 
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="resize-none outline-none z-0 border-neoBrutalism lg:shadow-neoBrutalism_350 shadow-neoBrutalism_200 bg-mainGreen p-4 w-full font-semibold placeholder:text-gray-500 rounded-sm h-36" 
          />
    </div>
  )
}

export default ContactTextArea
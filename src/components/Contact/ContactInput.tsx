import { motion } from "framer-motion";
import { FunctionComponent, useState } from "react";

interface InterfaceContactInput {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInput: FunctionComponent<InterfaceContactInput> = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative w-80 lg:w-96">
      <motion.span
        animate={{
          y: focused ? -2 : 0,
          backgroundColor: focused ? "#FFE656" : "#D9D9D9",
        }}
        transition={{ duration: 0.2 }}
        className="border-neoBrutalism shadow-neoBrutalism_label_mobile lg:shadow-neoBrutalism_label text-xs py-1 px-2 font-bold z-40 absolute -top-5 left-0 bg-mainBackground uppercase"
      >
        {label}:{" "}
      </motion.span>
      <motion.input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        animate={{
          x: focused ? -2 : 0,
          y: focused ? -2 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="z-0 outline-none border-neoBrutalism lg:shadow-neoBrutalism_200 shadow-neoBrutalism_100 bg-mainGreen p-4 w-full font-semibold placeholder:text-gray-500 rounded-sm"
      />
    </div>
  );
};

export default ContactInput;

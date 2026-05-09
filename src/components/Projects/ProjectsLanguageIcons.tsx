import { motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";

interface PropsLanguageIcons {
  iconSvg?: ReactNode;
  name: string;
}

const LanguageIcons: FunctionComponent<PropsLanguageIcons> = ({ name, iconSvg }) => {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="bg-boxGray flex gap-x-1.5 items-center justify-center rounded-full px-2.5 h-8"
    >
      {iconSvg}
      <p className="text-white font-medium text-xs">{name}</p>
    </motion.div>
  );
};

export default LanguageIcons;

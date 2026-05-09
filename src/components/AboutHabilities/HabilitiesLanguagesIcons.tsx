import { motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";
import { popIn } from "../../lib/motion";

interface PropsLanguageIcons {
  iconSvg?: ReactNode;
  name: string;
  isFrontEnd: boolean;
}

const HabilitiesLanguagesIcons: FunctionComponent<PropsLanguageIcons> = ({
  name,
  iconSvg,
  isFrontEnd,
}) => {
  return (
    <motion.div
      variants={popIn}
      whileHover={{ rotate: -3, y: -3, scale: 1.04 }}
      whileTap={{ rotate: 0, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`${
        isFrontEnd ? "bg-boxGray" : "bg-mainGreen border-black border-2"
      } w-[calc(50%-0.5rem)] xl:w-[calc(33.3%-0.8rem)] flex gap-x-3 items-center rounded-full px-4 h-12 cursor-default`}
    >
      <motion.span
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        {iconSvg}
      </motion.span>
      <p
        className={`${
          isFrontEnd ? "text-white" : "text-black "
        } font-semibold lg:text-sm text-xs`}
      >
        {name}
      </p>
    </motion.div>
  );
};

export default HabilitiesLanguagesIcons;

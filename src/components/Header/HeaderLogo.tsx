import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface HeaderLogoProps {
  compact?: boolean;
  scrolled?: boolean;
}

const HeaderLogo: FunctionComponent<HeaderLogoProps> = ({
  compact = false,
  scrolled = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-x-4"
    >
      <motion.div
        whileHover={{ rotate: -8, scale: 1.05 }}
        whileTap={{ rotate: 0, scale: 0.95 }}
        animate={{ backgroundColor: scrolled ? "#FFE656" : "#A3E636" }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="font-bold xl:text-2xl 2xl:text-3xl text-3xl flex items-center justify-center shadow-neoBrutalism rounded-md border-neoBrutalism text-center size-12 cursor-pointer"
      >
        A
      </motion.div>
      <motion.p
        animate={{ opacity: compact ? 0 : 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={compact}
        className="font-semibold text-base whitespace-nowrap"
      >
        Arthur Juwer
      </motion.p>
    </motion.div>
  );
};

export default HeaderLogo;

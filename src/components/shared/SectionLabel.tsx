import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface SectionLabelProps {
  text: string;
  variant?: "green" | "yellow" | "white" | "dark";
  className?: string;
}

const variantStyles: Record<NonNullable<SectionLabelProps["variant"]>, string> = {
  green: "bg-mainGreen text-black",
  yellow: "bg-accentYellow text-black",
  white: "bg-white text-black",
  dark: "bg-boxGray text-mainGreen",
};

const SectionLabel: FunctionComponent<SectionLabelProps> = ({
  text,
  variant = "yellow",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: -3 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.05 }}
      className={`inline-flex items-center gap-x-2 ${variantStyles[variant]} border-neoBrutalism shadow-neoBrutalism rounded-md px-3 py-1 font-bold text-xs uppercase tracking-wider ${className}`}
    >
      <span className="size-2 rounded-full bg-black animate-pulse_dot" />
      {text}
    </motion.div>
  );
};

export default SectionLabel;

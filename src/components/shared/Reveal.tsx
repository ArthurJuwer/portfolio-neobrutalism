import { motion, type Variants } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";
import { fadeUp, stagger } from "../../lib/motion";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "ul" | "li" | "span";
}

const Reveal: FunctionComponent<RevealProps> = ({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
  as = "div",
}) => {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
};

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "ul" | "li";
}

export const RevealGroup: FunctionComponent<RevealGroupProps> = ({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.1,
  once = true,
  amount = 0.15,
  as = "div",
}) => {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      variants={stagger(delayChildren, staggerChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </Component>
  );
};

export default Reveal;

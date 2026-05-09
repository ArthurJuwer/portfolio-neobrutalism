import type { Variants, Transition } from "framer-motion";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export const stagger = (delayChildren = 0.1, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const hoverLift = {
  whileHover: { y: -4, x: -4, transition: { duration: 0.2, ease } },
  whileTap: { y: 2, x: 2, transition: { duration: 0.1 } },
};

export const hoverPress = {
  whileHover: { y: 2, x: 2, boxShadow: "0px 0px 0px #000" },
  whileTap: { y: 4, x: 4 },
};

export const hoverTilt = {
  whileHover: { rotate: -2, scale: 1.02, transition: { duration: 0.25, ease } },
  whileTap: { rotate: 0, scale: 0.98 },
};

export const iconSpin = {
  whileHover: { rotate: 360, transition: { duration: 0.6, ease } },
};

export const iconBounce = {
  whileHover: {
    y: [0, -6, 0],
    transition: { duration: 0.5, repeat: Infinity, repeatType: "loop" as const },
  },
};

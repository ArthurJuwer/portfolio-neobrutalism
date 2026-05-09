import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import { fadeUp } from "../../lib/motion";

interface PropsSocialMediaCard {
  icon: ReactNode;
  link: string;
  followersCount: number;
  followersLabel: string;
}

const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 15 });
  const rounded = useTransform(spring, (v) => Math.round(v).toString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(v));
  }, [rounded]);

  return <span ref={ref}>{display}</span>;
};

const SocialMediaCard: FunctionComponent<PropsSocialMediaCard> = ({
  icon,
  link,
  followersCount,
  followersLabel,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className="lg:w-auto flex flex-col items-center gap-y-4 group"
    >
      <motion.a
        href={`https://www.${link}`}
        target="_blank"
        whileHover={{ y: -6, rotate: -2 }}
        whileTap={{ y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="relative size-56 bg-boxGray rounded-md text-secondGreen flex items-center justify-center border-neoBrutalism shadow-neoBrutalism_200 cursor-pointer overflow-hidden"
      >
        <motion.span
          whileHover={{ scale: 1.15, rotate: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="relative z-10"
        >
          {icon}
        </motion.span>
        <motion.span
          aria-hidden
          className="absolute top-3 right-3 size-8 bg-mainGreen border-neoBrutalism rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
          initial={{ rotate: -45, scale: 0 }}
          whileHover={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="size-4 text-black" strokeWidth={2.5} />
        </motion.span>
      </motion.a>
      <a
        href={`https://www.${link}`}
        target="_blank"
        className="underline text-boxGray text-xl hover:text-mainGreen transition-colors"
      >
        {link}
      </a>
      <div className="bg-boxGray px-4 py-1 rounded-2xl lg:w-4/5 border-2 border-black">
        <h1 className="text-secondGreen font-medium text-base text-center">
          <Counter value={followersCount} /> {followersLabel}
        </h1>
      </div>
    </motion.div>
  );
};

export default SocialMediaCard;

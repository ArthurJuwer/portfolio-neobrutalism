import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "../../lib/motion";
import { useLanguage } from "../../contexts/LanguageContext";

const MainTitle = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={stagger(0.15, 0.12)}
      initial="hidden"
      animate="show"
      className="flex items-center lg:items-start flex-col gap-6 w-full lg:w-auto"
    >
      <motion.div
        variants={fadeUp}
        whileHover={{ rotate: 0, scale: 1.05 }}
        className="inline-flex items-center gap-x-2 bg-accentYellow border-neoBrutalism shadow-neoBrutalism rounded-md px-3 py-1.5 font-bold text-xs uppercase tracking-wider -rotate-2"
      >
        {t.main.badge}
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-titleGray 2xl:text-7xl lg:text-6xl text-5xl font-bold lg:w-11/12 text-center lg:text-left leading-[1.05]"
      >
        {t.main.greeting}
        <span className="relative inline-block">
          {t.main.name}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 -bottom-1 h-2 w-full bg-mainGreen origin-left -z-10"
          />
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-textGray 2xl:text-lg text-base font-medium w-10/12 text-center lg:text-left"
      >
        {t.main.description}
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-stretch justify-center lg:justify-start gap-3 w-11/12 lg:w-auto"
      >
        {t.main.stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -4, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="bg-white border-neoBrutalism shadow-neoBrutalism rounded-md px-4 py-2 flex flex-col items-start cursor-default"
          >
            <span className="font-bold text-xl text-titleGray">{stat.value}</span>
            <span className="text-[11px] font-medium text-textGray uppercase tracking-wide">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="w-full flex flex-col sm:flex-row gap-3 justify-center items-center lg:justify-start lg:w-auto"
      >
        <motion.a
          href="#projetos"
          whileHover={{ y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
          whileTap={{ y: 4, x: 4 }}
          transition={{ duration: 0.15 }}
          className="group bg-mainGreen border-neoBrutalism shadow-neoBrutalism_100 font-semibold px-8 py-2.5 text-lg rounded-lg w-11/12 sm:w-auto flex items-center justify-center gap-x-2"
        >
          {t.main.viewProjects}
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="size-5" strokeWidth={2.5} />
          </motion.span>
        </motion.a>
        <motion.a
          href="#contato"
          whileHover={{ y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
          whileTap={{ y: 4, x: 4 }}
          transition={{ duration: 0.15 }}
          className="bg-white border-neoBrutalism shadow-neoBrutalism_100 font-semibold px-8 py-2.5 text-lg rounded-lg w-11/12 sm:w-auto flex items-center justify-center"
        >
          {t.main.contact}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default MainTitle;

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-mainGreen text-center lg:py-6 p-4 lg:px-16 flex flex-col-reverse lg:flex-row gap-4 items-center justify-between relative border-t-2 border-black">
      <div className="flex gap-4">
        <motion.a
          target="_blank"
          href="https://github.com/ArthurJuwer"
          whileHover={{ y: -4, rotate: -8 }}
          whileTap={{ y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="size-10 flex items-center justify-center rounded-sm bg-boxGray border-2 border-black shadow-neoBrutalism"
          aria-label={t.footer.github}
        >
          <Github stroke="#A3E636" />
        </motion.a>
        <motion.a
          target="_blank"
          href="https://www.linkedin.com/in/arthurjuwer/"
          whileHover={{ y: -4, rotate: 8 }}
          whileTap={{ y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="size-10 flex items-center justify-center rounded-sm bg-boxGray border-2 border-black shadow-neoBrutalism"
          aria-label={t.footer.linkedin}
        >
          <Linkedin stroke="#A3E636" />
        </motion.a>
      </div>
      <h2 className="text-center italic font-medium text-base lg:text-lg lg:absolute lg:-translate-x-1/2 lg:left-1/2">
        {t.footer.copyright}
      </h2>
    </footer>
  );
};

export default Footer;

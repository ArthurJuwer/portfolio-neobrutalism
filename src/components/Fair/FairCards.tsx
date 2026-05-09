import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";
import { FunctionComponent } from "react";
import { fadeUp } from "../../lib/motion";
import { useLanguage } from "../../contexts/LanguageContext";

interface PropsFairCards {
  image: string;
  title: string;
  text: string;
  link: string;
}

const FairCards: FunctionComponent<PropsFairCards> = ({ image, link, title, text }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, rotate: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="bg-mainGreen w-10/12 xl:h-[25rem] lg:w-1/3 border-neoBrutalism shadow-neoBrutalism_300 p-4 pb-6 flex flex-col gap-y-2"
    >
      <div className="relative overflow-hidden border-2 border-black rounded-lg">
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        />
        <motion.a
          href={link}
          target="_blank"
          aria-label={t.fair.linkedinPost}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-3 left-2 bg-boxGray rounded-full size-9 flex items-center justify-center border-2 border-black"
        >
          <Linkedin className="size-5 text-mainGreen" />
        </motion.a>
      </div>
      <div className="flex items-start justify-between gap-x-2 mt-1">
        <h1 className="font-bold text-xl">{title}</h1>
        <ExternalLink className="size-4 mt-1.5 shrink-0 opacity-50" />
      </div>
      <p className="w-11/12 text-sm">{text}</p>
    </motion.div>
  );
};

export default FairCards;

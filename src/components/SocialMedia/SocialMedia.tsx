import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import SocialMediaCard from "./SocialMediaCard";
import { stagger } from "../../lib/motion";
import { useLanguage } from "../../contexts/LanguageContext";

const SocialMedia = () => {
  const { t } = useLanguage();
  const items = t.social.items;

  return (
    <section
      id="redes"
      className="relative flex items-center flex-col bg-mainBackground 2xl:pb-24 xl:pb-20 pb-14"
    >
      <div
        className="absolute top-0 w-full aspect-[1918/465] z-0 bg-[#EBFFC9]"
        style={{
          clipPath: "polygon(49.2% 100%, 0% 30.3%, 0% 0%, 100% 0%, 100% 12.1%, 49.2% 100%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 w-11/12 xl:w-10/12 2xl:w-9/12 flex flex-col justify-center lg:shadow-neoBrutalism_right shadow-neoBrutalism_right_mobile rounded-xl"
      >
        <div className="p-6 z-40 bg-thirdGreen text-center rounded-xl border-[3px] border-black">
          <h1 className="font-bold text-2xl">{t.social.title}</h1>
        </div>
        <motion.div
          variants={stagger(0.2, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="-mt-6 w-full flex justify-center gap-4 flex-col lg:flex-row lg:justify-between py-12 px-3 lg:py-12 lg:px-20 2xl:px-28 bg-secondGreen text-center rounded-xl border-2 border-r-0 border-t-0 border-black"
        >
          <SocialMediaCard
            icon={<Github className="lg:size-20 size-10" />}
            link="github.com/ArthurJuwer"
            followersCount={37}
            followersLabel={items[0].followersLabel}
          />
          <SocialMediaCard
            icon={<Linkedin className="lg:size-20 size-10" />}
            link="linkedin.com/in/arthurjuwer/"
            followersCount={1453}
            followersLabel={items[1].followersLabel}
          />
          <SocialMediaCard
            icon={<Instagram className="lg:size-20 size-10" />}
            link="instagram.com/arthur_juwer"
            followersCount={911}
            followersLabel={items[2].followersLabel}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SocialMedia;

import { Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "./Tabs";
import Timeline from "./Timeline";
import Skills from "./Skills";
import CurriculumModal from "./CurriculumModal";
import SectionLabel from "../shared/SectionLabel";
import { useLanguage } from "../../contexts/LanguageContext";

const ContentAboutAndHabilities = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkHash = () => {
      const hash = window.location.hash;
      setActiveTab(hash === "#habilidades" ? 2 : 1);
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-5 lg:my-12 my-2">
      <CurriculumModal open={openModal} onClose={() => setOpenModal(false)} />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-2"
      >
        <SectionLabel text={t.about.sectionLabel} variant="yellow" />
      </motion.div>

      <Tabs active={activeTab} onChange={setActiveTab} />

      <div className="w-11/12 2xl:w-full lg:min-h-[28rem] flex flex-col lg:flex-row gap-6 lg:gap-12 items-start justify-between bg-mainGreen p-5 py-8 border-neoBrutalism shadow-neoBrutalism rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 1 && (
            <motion.div
              key="sobre"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full"
            >
              <div className="lg:w-1/2 w-full flex flex-col gap-y-6 lg:gap-y-8 lg:pb-24">
                <h1 className="font-semibold text-2xl">{t.about.title}</h1>
                <p className="text-justify whitespace-pre-line">
                  {t.about.description}
                </p>
                <motion.button
                  whileHover={{ y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
                  whileTap={{ y: 4, x: 4 }}
                  onClick={() => setOpenModal(true)}
                  className="border-neoBrutalism shadow-neoBrutalism bg-white p-2 rounded-lg w-full lg:w-5/12 font-semibold flex items-center justify-center gap-x-2"
                >
                  {t.about.viewResume}
                  <span className="size-7 border-black border rounded-full bg-mainGreen flex items-center justify-center">
                    <Upload className="size-4" />
                  </span>
                </motion.button>
              </div>
              <span className="hidden lg:flex border-2 lg:w-0 lg:h-80 border-black rounded-xl self-center" />
              <Timeline />
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="habilidades"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <Skills />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContentAboutAndHabilities;

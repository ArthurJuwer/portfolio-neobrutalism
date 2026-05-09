import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FunctionComponent } from "react";
import bandeiraBrasil from "../../assets/brasil.webp";
import bandeiraEstadosUnidos from "../../assets/estados-unidos.webp";
import curriculoPortugues from "../../assets/pdf/Curriculo Português Arthur Juwer.pdf.pdf";
import curriculumEnglish from "../../assets/pdf/English Curriculum Arthur Juwer.pdf";
import { useLanguage } from "../../contexts/LanguageContext";

interface CurriculumModalProps {
  open: boolean;
  onClose: () => void;
}

const CurriculumModal: FunctionComponent<CurriculumModalProps> = ({ open, onClose }) => {
  const { t } = useLanguage();
  const m = t.about.curriculumModal;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-8 rounded-xl border-neoBrutalism shadow-neoBrutalism_400 w-full max-w-lg flex flex-col gap-y-6"
          >
            <div className="flex justify-between items-start gap-x-4">
              <h1 className="text-2xl font-bold">{m.title}</h1>
              <motion.button
                whileHover={{ y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
                whileTap={{ rotate: 90 }}
                onClick={onClose}
                className="size-9 w-11 lg:w-9 text-white flex items-center justify-center bg-red-700 border-neoBrutalism shadow-neoBrutalism shrink-0"
                aria-label={m.close}
              >
                <X className="size-7" />
              </motion.button>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <motion.a
                whileHover={{ y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
                whileTap={{ y: 4, x: 4 }}
                href={curriculoPortugues}
                download={curriculoPortugues}
                onClick={onClose}
                className="lg:w-1/2 w-full p-3 rounded-lg border-neoBrutalism shadow-neoBrutalism_100 flex gap-x-4 items-center text-lg font-medium"
              >
                <img
                  src={bandeiraBrasil}
                  alt={m.flagBrazilAlt}
                  className="rounded-md h-10"
                  loading="lazy"
                />
                {m.portuguese}
              </motion.a>
              <motion.a
                whileHover={{ y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
                whileTap={{ y: 4, x: 4 }}
                href={curriculumEnglish}
                download={curriculumEnglish}
                onClick={onClose}
                className="lg:w-1/2 w-full py-3 px-4 rounded-lg border-neoBrutalism shadow-neoBrutalism_100 flex gap-x-4 items-center text-lg font-medium"
              >
                <img
                  src={bandeiraEstadosUnidos}
                  alt={m.flagUsAlt}
                  className="rounded-md h-10"
                />
                {m.english}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CurriculumModal;

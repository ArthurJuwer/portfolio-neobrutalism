import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, XCircle } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface PropsContactAlert {
  mensagem: string;
  tipo: string;
  onClose: () => void;
}

const ContactAlert: React.FC<PropsContactAlert> = ({ mensagem, tipo, onClose }) => {
  const { t } = useLanguage();
  const isSuccess = tipo === "sucesso";
  const isError = tipo === "erro";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -60, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-11/12 lg:w-auto"
      >
        <div
          role="alert"
          className={`flex items-center px-6 lg:px-8 py-4 lg:py-5 justify-between gap-x-4 border-neoBrutalism shadow-neoBrutalism_200 max-w-md w-full rounded-md ${
            isSuccess
              ? "bg-mainGreen text-black"
              : isError
              ? "bg-red-500 text-white"
              : "bg-gray-700 text-white"
          }`}
        >
          {isSuccess && <CheckCircle2 className="size-6 shrink-0" strokeWidth={2.5} />}
          {isError && <XCircle className="size-6 shrink-0" strokeWidth={2.5} />}
          <span className="flex-1 text-base lg:text-lg font-medium">{mensagem}</span>
          <motion.button
            whileHover={{ rotate: 90 }}
            onClick={onClose}
            aria-label={t.contact.alerts.close}
            className="focus:outline-none"
          >
            <X size={26} />
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactAlert;

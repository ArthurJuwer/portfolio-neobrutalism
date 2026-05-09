import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import emailjs from "@emailjs/browser";
import ContactAlert from "./ContactAlert";
import SectionLabel from "../shared/SectionLabel";
import { stagger, fadeUp } from "../../lib/motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [alert, setAlert] = useState<{ mensagem: string; tipo: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      setAlert({ mensagem: t.contact.alerts.empty, tipo: "erro" });
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAILJS_SECRET
      )
      .then(
        (result) => {
          console.log("Mensagem enviada!", result.text);
          setAlert({ mensagem: t.contact.alerts.success, tipo: "sucesso" });
          setFormData({ nome: "", email: "", mensagem: "" });
        },
        (error) => {
          console.error("Erro ao enviar mensagem:", error.text);
          setAlert({
            mensagem: t.contact.alerts.error,
            tipo: "erro",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <motion.div
      id="contato"
      variants={stagger(0.15, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="bg-secondBackground w-11/12 lg:w-10/12 2xl:w-auto lg:p-12 p-10 border-neoBrutalism lg:shadow-neoBrutalism_500 shadow-neoBrutalism_400 rounded-sm flex flex-col items-center justify-start gap-y-14"
    >
      {alert && (
        <ContactAlert
          mensagem={alert.mensagem}
          tipo={alert.tipo}
          onClose={() => setAlert(null)}
        />
      )}
      <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-y-4">
        <SectionLabel text={t.contact.sectionLabel} variant="green" />
        <h1 className="hidden lg:block lg:text-titleGray lg:text-5xl lg:font-bold lg:text-center">
          {t.contact.titleDesktop.prefix}
          <span className="relative inline-block">
            {t.contact.titleDesktop.highlight}
            <span className="absolute left-0 -bottom-1 h-2 w-full bg-accentYellow -z-10" />
          </span>
        </h1>
        <h1 className="lg:hidden text-titleGray text-4xl font-bold text-center">
          {t.contact.titleMobile}
        </h1>
        <p className="text-textGray lg:text-lg text-base font-medium lg:w-3/4 text-center">
          {t.contact.description}
        </p>
      </motion.div>
      <motion.form
        variants={fadeUp}
        className="flex items-center flex-col lg:gap-y-12 gap-y-10 w-full max-w-md"
        onSubmit={sendEmail}
      >
        <ContactInput
          type="text"
          name="nome"
          label={t.contact.fields.nome}
          placeholder={t.contact.placeholders.nome}
          value={formData.nome}
          onChange={handleChange}
        />
        <ContactInput
          type="email"
          name="email"
          label={t.contact.fields.email}
          placeholder={t.contact.placeholders.email}
          value={formData.email}
          onChange={handleChange}
        />
        <ContactTextArea
          name="mensagem"
          label={t.contact.fields.mensagemLabel}
          placeholder={t.contact.placeholders.mensagem}
          value={formData.mensagem}
          onChange={handleChange}
        />
        <motion.button
          type="submit"
          whileHover={isLoading ? undefined : { y: 2, x: 2, boxShadow: "0px 0px 0px #000" }}
          whileTap={isLoading ? undefined : { y: 4, x: 4 }}
          transition={{ duration: 0.15 }}
          className="w-80 lg:w-96 -mt-4 lg:mt-0 border-neoBrutalism shadow-neoBrutalism_200 py-3 font-semibold text-lg rounded-sm bg-mainGreen flex items-center justify-center gap-x-2 disabled:opacity-70"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block size-5 border-2 border-black border-t-transparent rounded-full"
              />
              {t.contact.buttons.sending}
            </>
          ) : (
            <>
              {t.contact.buttons.send} <Send className="size-5" strokeWidth={2.5} />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;

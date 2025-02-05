import React, { useState } from "react";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import emailjs from "@emailjs/browser";
import ContactAlert from "./ContactAlert";  // Import the FormAlert component

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [alert, setAlert] = useState<{ mensagem: string; tipo: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);  // New state for loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setAlert({ mensagem: "Por favor, preencha todos os campos.", tipo: "erro" });
      return;
    }

    setIsLoading(true);  // Set loading state to true

    emailjs
      .send(
        "service_ggsg4ad",    // seu serviço
        "template_fo7bb79",    // seu template
        formData,              // dados do formulário
        "ZUxtwglnB1KNMiuwU"    // chave pública (ID de usuário)
      )
      .then(
        (result) => {
          console.log("Mensagem enviada!", result.text);
          setAlert({ mensagem: "Mensagem enviada com sucesso!", tipo: "sucesso" });
          setFormData({ nome: "", email: "", mensagem: "" });
        },
        (error) => {
          console.error("Erro ao enviar mensagem:", error.text);
          setAlert({ mensagem: "Ocorreu um erro ao enviar a mensagem. Tente novamente.", tipo: "erro" });
        }
      )
      .finally(() => {
        setIsLoading(false);  // Reset loading state
      });
  };

  return (
    <div id="contato" className="bg-secondBackground p-12 border-neoBrutalism shadow-neoBrutalism_500 rounded-sm flex flex-col items-center justify-start gap-y-14">
      {alert && (
        <ContactAlert 
          mensagem={alert.mensagem} 
          tipo={alert.tipo} 
          onClose={() => setAlert(null)} 
        />
      )}
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h1 className="text-titleGray text-5xl font-bold">Entre em Contato</h1>
        <p className="text-textGray text-lg font-medium w-3/4 text-center">
          Fique à vontade para entrar em contato comigo através do formulário.
        </p>
      </div>
      <form className="flex items-center flex-col gap-y-12 w-full max-w-md" onSubmit={sendEmail}>
        <ContactInput
          type="text"
          name="nome"
          placeholder="ex: Arthur Juwer"
          value={formData.nome}
          onChange={handleChange}
        />
        <ContactInput
          type="email"
          name="email"
          placeholder="ex: arthurjuwer@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        <ContactTextArea
          name="mensagem"
          placeholder="Escreva sua mensagem aqui..."
          value={formData.mensagem}
          onChange={handleChange}
        />
        <button 
          type="submit" 
          className="w-96 border-neoBrutalism shadow-neoBrutalism_200 py-3 font-semibold text-lg rounded-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default Contact;

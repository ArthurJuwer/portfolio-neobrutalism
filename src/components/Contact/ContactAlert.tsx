import { X } from "lucide-react";

// Define the prop types for FormAlert
interface PropsContactAlert {
  mensagem: string;
  tipo: string; // You can extend this to more types if needed
  onClose: () => void;
}

const ContactAlert: React.FC<PropsContactAlert> = ({ mensagem, tipo, onClose }) => {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-11/12 lg:w-auto">
      <div
        role="alert" // Melhorando a acessibilidade
        className={`flex items-center px-8 lg:px-12 py-4 lg:py-5 justify-between gap-x-4 rounded-lg shadow-lg max-w-md w-full ${
          tipo === "sucesso"
            ? "bg-green-600 text-white"
            : tipo === "erro"
            ? "bg-red-600 text-white"
            : "bg-gray-700 text-white"
        }`}
      >
        <span className="flex-1 text-lg">{mensagem}</span>
        <button
          onClick={onClose}
          aria-label="Close alert"
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          <X size={26} />
        </button>
      </div>
    </div>
  );
};

export default ContactAlert;

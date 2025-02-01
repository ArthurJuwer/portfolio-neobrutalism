import ContactInput from "./ContactInput"
import ContactTextArea from "./ContactTextArea"

const Contact = () => {
  return (
    <div id="contato" className="bg-secondBackground p-12 border-neoBrutalism shadow-neoBrutalism_500 rounded-sm flex flex-col items-center justify-start gap-y-14 ">
        <div className="flex flex-col items-center justify-center gap-y-3">
            <h1 className="text-titleGray text-5xl font-bold">Entre em Contato</h1>
            <p className="text-textGray text-lg font-medium w-3/4 text-center">Fique à vontade para entrar em contato comigo através do formulário. </p>
        </div>
        <div className="flex flex-col gap-y-12">
            <ContactInput type="Nome" placeholder="ex: Arthur Juwer"/>
            <ContactInput type="Email" placeholder="ex: arthurjuwer@gmail.com"/>
            <ContactTextArea />
            <button className="border-neoBrutalism shadow-neoBrutalism_200 py-3 font-semibold text-lg rounded-sm">Enviar</button>
        </div>
        
    </div>
  )
}

export default Contact
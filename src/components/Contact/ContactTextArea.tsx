const ContactTextArea = () => {
  return (
    <div className="relative w-96">
        <span className="border-neoBrutalism shadow-neoBrutalism text-xs py-1 px-2 font-bold z-40 absolute -top-5 left-0 bg-mainBackground">MENSAGEM: </span>
        <textarea className="resize-none outline-none z-0 border-neoBrutalism shadow-neoBrutalism bg-mainGreen p-4 w-full font-semibold placeholder:text-gray-500 rounded-sm" placeholder="ex: Gostaria que você criasse um site para minha empresa" />
    </div>
  )
}

export default ContactTextArea
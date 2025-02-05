import { ChevronUp, Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <div className="bg-mainGreen text-center py-6 px-16 flex items-center justify-between">
      <div className="flex gap-4">
        <a
          target="_blank"
          href="https://github.com/ArthurJuwer" 
          className="size-10 flex items-center justify-center rounded-sm bg-boxGray">
          <Github stroke="#A3E636" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/arthurjuwer/" 
          className="size-10 flex items-center justify-center rounded-sm bg-boxGray">
          <Linkedin stroke="#A3E636" />
        </a>
      </div>
        <h2 className="italic font-medium text-lg">© 2024 Arthur Juwer. Todos os direitos reservados.</h2>
        <a 
          className="size-10 flex items-center justify-center rounded-sm bg-boxGray"
          href="#inicio"
        >
          <ChevronUp stroke="#A3E636" />
        </a>
    </div>
  )
}

export default Footer
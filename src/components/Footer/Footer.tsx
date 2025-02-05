import { Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <div className="bg-mainGreen text-center lg:py-6 p-4 lg:px-16 flex flex-col lg:flex-row gap-4 items-center justify-between relative">
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
        <h2 className="text-center italic font-medium text-lg lg:absolute lg:-translate-x-1/2 lg:left-1/2">© 2024 Arthur Juwer. Todos os direitos reservados.</h2>
    </div>
  )
}

export default Footer
import { ChevronUp } from 'lucide-react'

const ScrollToUp = () => {
  return (
    <a 
        className="fixed lg:bottom-6 bottom-4 right-8 size-10 flex z-50 items-center justify-center rounded-sm bg-boxGray"
        href="#inicio"
    >
        <ChevronUp stroke="#A3E636" />
    </a>
  )
}

export default ScrollToUp
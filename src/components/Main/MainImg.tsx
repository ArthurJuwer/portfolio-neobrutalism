import mainimagemArthurJuwer from "../../assets/imagem-arthurjuwer.webp";
import mainimagemArthurJuwerMobile from "../../assets/imagem-arthurjuwerMobile.webp";

const isMobile = ():boolean => {
    return window.screen.width <= 768
}

const MainImg = () => {

  const imagemArthurJuwer = isMobile() ? mainimagemArthurJuwerMobile : mainimagemArthurJuwer 

  return (
    <img 
        src={imagemArthurJuwer} 
        alt="arthur juwer portifolio imagem"
        className="w-11/12 lg:w-auto lg:h-auto animate-flutuar"
    />
  )
}

export default MainImg
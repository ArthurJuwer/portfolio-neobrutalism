import mainimagemArthurJuwer from "../../assets/imagem-arthurjuwer.png";
import mainimagemArthurJuwerMobile from "../../assets/imagem-arthurjuwerMobile.png";

const isMobile = ():boolean => {
    return window.screen.width <= 768
}

const MainImg = () => {

  const imagemArthurJuwer = isMobile() ? mainimagemArthurJuwerMobile : mainimagemArthurJuwer 

  return (
    <img 
        src={imagemArthurJuwer} 
        alt="arthur juwer portifolio imagem"
        className="w-11/12 lg:w-auto lg:h-auto"
    />
  )
}

export default MainImg
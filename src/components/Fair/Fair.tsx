import FairCards from "./FairCards"
import feiraMotic from "../../assets/feira-motic.png"
import feiraFecip from "../../assets/feira-fecip.png"
import feiraConecta from "../../assets/feira-conecta.png"

const Fair = () => {
  return (
    <div id="experiências" className="pb-28 flex flex-col gap-y-10">
        <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className=" text-4xl text-titleGray font-bold">Participações em Feiras</h1>
            <p className="text-textGray font-medium">Eventos e feiras onde participei com projetos e apresentações.</p>
        </div>
        <div className="flex gap-24">
            <FairCards image={feiraMotic} title="Feira MOTIC 2024" text="Desenvolvi um projeto de remodelação do jogo Flappy Bird com o tema Rota Romântica."/>
            <FairCards image={feiraFecip} title="Feira FECIP 2024" text="Apresentei o jogo do Flappy Bird remodelado com o tema Rota Romântica."/>
            <FairCards image={feiraConecta} title="Feira CONECTA 2024" text="Participei de um Evento da Unisinos, onde foi oferecido atividades práticas dos cursos."/>
        </div>
        
    </div>
  )
}

export default Fair